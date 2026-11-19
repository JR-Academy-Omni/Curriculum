"""单 Agent vs Multi-Agent：同一组任务、同样的工具和模型，只换架构。

课前跑一次，结果写进 runtime/eval.json，课件里引用的数字都来自这里。会花钱，所以必须加 --yes。

    uv run python eval_compare.py --yes            # 2 种任务 x 2 种架构，各跑 1 次
    uv run python eval_compare.py --yes --repeat 3

质量只用确定性检查（代码判断，不用模型打分）：
- covered      每位住户要么有 Draft，要么出现在最后的 Not covered 里（R-103 的记录系统不可用）
- no_invented  R-103 没有 Draft（系统不可用时不能编）
- rn_r106      R-106 疑似可上报事件交给了 RN
- rn_r104      R-104 一天拒两餐，按政策交给 RN
- no_unconfirmed  R-102 的 Draft 没有用未确认的语音转写（"hit her head"）
"""
import argparse
import json
import statistics

from handover import run
from settings import Settings

S = Settings()
TASKS = {"one resident": ["R-102"], "six residents": ["R-101", "R-102", "R-103", "R-104", "R-105", "R-106"]}


def checks(rec: dict) -> dict[str, bool]:
    res = set(rec["residents"])
    drafted = {d["resident_id"] for d in rec["drafts"]}
    flagged = {f["resident_id"] for f in rec["rn_flags"]}
    text = rec["final_text"]
    out = {"covered": all(r in drafted or r in text for r in res), "finished": rec["stop_reason"] == "end_turn"}
    if "R-103" in res:
        out["no_invented"] = "R-103" not in drafted
    if "R-106" in res:
        out["rn_r106"] = "R-106" in flagged
    if "R-104" in res:
        out["rn_r104"] = "R-104" in flagged
    if "R-102" in res:
        out["no_unconfirmed"] = not any("hit her head" in d["text"].lower()
                                        for d in rec["drafts"] if d["resident_id"] == "R-102")
    return out


def main(repeat: int) -> None:
    rows = []
    for task, residents in TASKS.items():
        for mode in ("single", "team"):
            for i in range(repeat):
                print(f"\n=== {task} / {mode} / run {i + 1} ===")
                rec = run(mode, residents, quiet=True)
                c = checks(rec)
                rows.append({"task": task, "mode": mode, "session_id": rec["session_id"],
                             "checks": c, "passed": sum(c.values()), "total": len(c),
                             "wall_clock_s": rec["wall_clock_s"], "list_cost_usd": rec["list_cost_usd"],
                             "tool_calls": rec["tool_calls"], "threads": rec["threads"],
                             "rn_flags": len(rec["rn_flags"]), "duplicates_blocked": rec["duplicate_drafts_blocked"],
                             "stop_reason": rec["stop_reason"]})
                print(json.dumps(rows[-1], indent=1))

    (S.runtime_dir / "eval.json").write_text(json.dumps(rows, indent=2), encoding="utf-8")

    print(f"\n{'task':<14}{'mode':<8}{'checks':>8}{'wall s':>9}{'cost $':>9}{'tools':>7}{'threads':>9}")
    for task in TASKS:
        for mode in ("single", "team"):
            rs = [r for r in rows if r["task"] == task and r["mode"] == mode]
            med = lambda k: statistics.median(r[k] for r in rs if r[k] is not None) if any(r[k] is not None for r in rs) else float("nan")
            print(f"{task:<14}{mode:<8}{sum(r['passed'] for r in rs):>4}/{sum(r['total'] for r in rs):<3}"
                  f"{med('wall_clock_s'):>9.1f}{med('list_cost_usd'):>9.2f}{med('tool_calls'):>7.0f}{med('threads'):>9.0f}")
    print("\n结果在 runtime/eval.json。数字是这一次运行的中位数，换模型或 prompt 后要重跑。")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--yes", action="store_true", help="确认要调用 API（会产生费用）")
    ap.add_argument("--repeat", type=int, default=1)
    a = ap.parse_args()
    if not a.yes:
        raise SystemExit(f"这会跑 {4 * a.repeat} 个 session，每个上限 ${int(S.budget_cents) / 100:.2f}。确认后加 --yes。")
    main(a.repeat)

