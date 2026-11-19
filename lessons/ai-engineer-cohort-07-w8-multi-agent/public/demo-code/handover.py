"""W8 课堂演示：CareKind 交班。同一个任务，两种架构。

    uv run python handover.py --mode team                       # Shift lead + Note drafter + Policy checker
    uv run python handover.py --mode single                     # 一个 Agent 做完全部（基线）
    uv run python handover.py --mode team --residents R-102     # 只有一位住户：拆分值不值？

屏幕上只打印协作的轨迹：谁派活给谁、谁调用了哪个工具、结果、谁回报。
运行记录写进 runtime/runs/<session_id>.json，审计写进 runtime/audit.jsonl。
"""
from __future__ import annotations

import argparse
import json
import time

import anthropic

import carekind as ck
from settings import Settings
from setup_agents import load_or_create

S = Settings()
ADVISOR = "anthropic.advisor"
DEADLINE_S = 15 * 60  # 墙钟上限：session 卡住时，代码负责停下


def text_of(content) -> str:
    return " ".join(getattr(b, "text", "") for b in (content or []) if getattr(b, "type", "") == "text").strip()


def short(s: str, n: int = 110) -> str:
    s = " ".join(s.split())
    return s if len(s) <= n else s[: n - 1] + "…"


def build_task(shift_id: str, residents: list[str]) -> str:
    return (f"End-of-shift handover for shift {shift_id}. Residents: {', '.join(residents)}. "
            "Produce the handover as instructed.")


def run(mode: str, residents: list[str] | None = None, quiet: bool = False) -> dict:
    ids = load_or_create()
    client = anthropic.Anthropic(**S.client_kwargs())
    agent = ids["team"] if mode == "team" else ids["single"]
    primary = ck.SHIFT_LEAD if mode == "team" else ck.SINGLE_AGENT

    session = client.beta.sessions.create(
        agent={"type": "agent", "id": agent["id"], "version": agent["version"]},
        environment_id=ids["environment_id"],
        title=f"W8 handover ({mode})",
        budget={"type": "limit", "max_list_cost": {"amount": S.budget_cents, "currency": "USD"}},
    )
    backend = ck.Backend(runtime_dir=S.runtime_dir, session_id=session.id)
    residents = residents or list(backend.residents)
    say = (lambda *a: None) if quiet else print
    say(f"session {session.id}  mode={mode}  residents={len(residents)}\n")

    names: dict[str, str] = {}          # thread_id -> agent 名字
    threads_created, advisor_calls = 0, 0
    final_text, stop = "", "unknown"
    started = time.monotonic()

    with client.beta.sessions.events.stream(session_id=session.id) as stream:
        client.beta.sessions.events.send(session_id=session.id, events=[
            {"type": "user.message", "content": [{"type": "text", "text": build_task(backend.shift["id"], residents)}]}])

        for ev in stream:
            if time.monotonic() - started > DEADLINE_S:
                client.beta.sessions.events.send(session_id=session.id, events=[{"type": "user.interrupt"}])
                stop = "deadline"
                break

            match ev.type:
                case "session.thread_created":
                    names[ev.session_thread_id] = ev.agent_name
                    if ev.agent_name == ADVISOR:
                        advisor_calls += 1
                        say(f"  [{primary}] consults advisor ({S.advisor_model})")
                    else:
                        threads_created += 1
                        say(f"  + thread {ev.agent_name}")

                case "agent.thread_message_sent":
                    say(f"  [{primary} -> {ev.to_agent_name}] {short(text_of(ev.content))}")

                case "agent.thread_message_received":
                    who = getattr(ev, "from_agent_name", None) or names.get(ev.from_session_thread_id, "?")
                    if who != ADVISOR:  # advisor 的建议对客户端是 redacted，不打印
                        say(f"  [{who} -> {primary}] {short(text_of(ev.content))}")

                case "agent.custom_tool_use":
                    caller = names.get(getattr(ev, "session_thread_id", None) or "", primary)
                    try:
                        result, is_error = ck_call(backend, caller, ev), False
                    except ck.ToolError as e:
                        result, is_error = {"error": str(e), "retryable": e.retryable}, True
                    mark = "ERROR" if is_error else "ok"
                    say(f"  [{caller}] {ev.name}({ev.input.get('resident_id') or ev.input.get('draft_id') or ev.input.get('query', '')}) -> {mark}")
                    try:
                        client.beta.sessions.events.send(session_id=session.id, events=[{
                            "type": "user.custom_tool_result", "custom_tool_use_id": ev.id, "is_error": is_error,
                            "content": [{"type": "text", "text": json.dumps(result, ensure_ascii=False)}]}])
                    except anthropic.BadRequestError as e:
                        say(f"  ! tool result refused: {e.message}")

                case "agent.message":
                    if not getattr(ev, "session_thread_id", None):
                        final_text = text_of(ev.content) or final_text

                case "session.error":
                    say(f"  ! session error: {getattr(ev, 'error', ev)}")

                case "session.status_idle":
                    stop = ev.stop_reason.type
                    if stop == "requires_action":
                        continue          # 在等我们回工具结果，继续读
                    break                 # end_turn / budget_reached / retries_exhausted

                case "session.status_terminated":
                    stop = "terminated"
                    break

    wall = round(time.monotonic() - started, 1)
    backend.save()
    usage = client.beta.sessions.retrieve(session_id=session.id).usage
    usage_d = usage.model_dump() if usage else {}
    cost = (usage_d.get("list_cost") or {}).get("amount")

    record = {
        "session_id": session.id, "mode": mode, "residents": residents, "stop_reason": stop,
        "wall_clock_s": wall, "list_cost_usd": int(cost) / 100 if cost else None,
        "usage": usage_d, "threads": threads_created, "advisor_consultations": advisor_calls,
        "tool_calls": len(backend.audit), "tool_errors": sum(a["status"] == "error" for a in backend.audit),
        "drafts": list(backend.drafts.values()), "duplicate_drafts_blocked": backend.duplicates,
        "rn_flags": backend.rn_flags, "final_text": final_text,
    }
    out = S.runtime_dir / "runs"
    out.mkdir(parents=True, exist_ok=True)
    (out / f"{session.id}.json").write_text(json.dumps(record, ensure_ascii=False, indent=2, default=str),
                                            encoding="utf-8")

    say("\n" + (final_text or "(no final message)"))
    say(f"\nstop={stop}  wall={wall}s  cost=${record['list_cost_usd']}  threads={threads_created}  "
        f"tool_calls={record['tool_calls']}  drafts={len(backend.drafts)}  rn_flags={len(backend.rn_flags)}  "
        f"duplicates_blocked={backend.duplicates}")
    return record


def ck_call(backend: ck.Backend, caller: str, ev) -> dict:
    return backend.call(caller, ev.name, dict(ev.input), thread_id=getattr(ev, "session_thread_id", None))


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--mode", choices=["team", "single"], default="team")
    ap.add_argument("--residents", help="逗号分隔，例如 R-102,R-106；默认全部")
    a = ap.parse_args()
    run(a.mode, a.residents.split(",") if a.residents else None)

