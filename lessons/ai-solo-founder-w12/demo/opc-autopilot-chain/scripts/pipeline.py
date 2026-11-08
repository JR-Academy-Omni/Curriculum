#!/usr/bin/env python3
"""自动化工厂的把关脚本。只做确定性的事：算日期、查上游、写提示、验回执、出日报。
判断和写作交给 Codex，本脚本不调用任何模型。

用法：
  python3 scripts/pipeline.py today
  python3 scripts/pipeline.py gate    <stage> [date]   # 上游不是 done → 写 skipped 回执，输出 run=false
  python3 scripts/pipeline.py prompt  <stage> [date]   # 生成给 Codex 的提示到 .autopilot/prompt.md
  python3 scripts/pipeline.py check   <stage> [date]   # Codex 跑完后验回执；没交回执 = needs-human
  python3 scripts/pipeline.py digest  [date]           # 汇总当天所有阶段到 runs/<date>/DIGEST.md
"""
import json, os, sys
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parent.parent
CFG = json.loads((ROOT / "pipeline.json").read_text(encoding="utf-8"))
STAGES = {s["id"]: s for s in CFG["stages"]}
VALID = {"done", "skipped", "needs-human"}


def today() -> str:
    return datetime.now(ZoneInfo(CFG["timezone"])).strftime("%Y-%m-%d")


def stage_dir(stage: str, date: str) -> Path:
    return ROOT / "runs" / date / stage


def read_status(stage: str, date: str):
    p = stage_dir(stage, date) / "status.json"
    if not p.exists():
        return None
    return json.loads(p.read_text(encoding="utf-8"))


def write_status(stage: str, date: str, status: str, reason: str, outputs=None):
    d = stage_dir(stage, date)
    d.mkdir(parents=True, exist_ok=True)
    data = {"stage": stage, "date": date, "status": status, "reason": reason, "outputs": outputs or []}
    (d / "status.json").write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def gh_output(key: str, value: str):
    out = os.environ.get("GITHUB_OUTPUT")
    if out:
        with open(out, "a", encoding="utf-8") as f:
            f.write(f"{key}={value}\n")
    print(f"{key}={value}")


def cmd_gate(stage: str, date: str):
    up = STAGES[stage]["upstream"]
    if up is None:
        gh_output("run", "true")
        return
    st = read_status(up, date)
    if st is None:
        write_status(stage, date, "skipped", f"上游 {up} 今天没有回执")
        gh_output("run", "false")
    elif st["status"] != "done":
        write_status(stage, date, "skipped", f"上游 {up} 状态是 {st['status']}：{st['reason']}")
        gh_output("run", "false")
    elif STAGES[stage].get("needs_approval") and not (stage_dir(up, date) / "APPROVED").exists():
        write_status(stage, date, "skipped", f"等你批准：确认 {up} 的产物没问题后，新建空文件 runs/{date}/{up}/APPROVED 再跑")
        gh_output("run", "false")
    else:
        gh_output("run", "true")


def cmd_prompt(stage: str, date: str):
    s = STAGES[stage]
    up = f"上游阶段是 {s['upstream']}，产物在 runs/{date}/{s['upstream']}/。" if s["upstream"] else "本阶段没有上游。"
    text = (
        f"今天的日期是 {date}（{CFG['timezone']}）。\n"
        f"执行阶段 {stage}：先读仓库根目录的 AGENTS.md，再读 stages/{stage}/TASK.md，严格按它做。\n"
        f"{up}\n"
        f"回执和报告写到 runs/{date}/{stage}/，需要的文件：{', '.join(s['outputs'])}；如果 TASK.md 指定了别的位置（state/、outbox/），按 TASK.md 写。\n"
        f"最后写回执 runs/{date}/{stage}/status.json（格式见 schemas/status.schema.json）。\n"
        "只做这一个阶段，不要做其他阶段。"
    )
    p = ROOT / ".autopilot" / "prompt.md"
    p.parent.mkdir(exist_ok=True)
    p.write_text(text + "\n", encoding="utf-8")
    print(text)


def cmd_check(stage: str, date: str):
    st = read_status(stage, date)
    if st is None:
        write_status(stage, date, "needs-human", "Agent 跑完了但没有交回执：什么都没交回来就是报警")
        print("needs-human: 没有回执")
        sys.exit(1)
    problems = []
    if st.get("status") not in VALID:
        problems.append(f"status 不合法：{st.get('status')}")
    if not st.get("reason"):
        problems.append("reason 为空")
    if st.get("status") == "done":
        for f in STAGES[stage]["outputs"]:
            if not (stage_dir(stage, date) / f).exists():
                problems.append(f"标了 done 但缺少产物 {f}")
    if problems:
        write_status(stage, date, "needs-human", "回执没通过检查：" + "；".join(problems), st.get("outputs"))
        print("needs-human:", problems)
        sys.exit(1)
    print(f"{stage}: {st['status']} — {st['reason']}")


def cmd_digest(date: str):
    icon = {"done": "✅", "skipped": "⏭", "needs-human": "🙋", None: "⬜"}
    lines = [f"# 自动化日报 · {date}", ""]
    for sid in STAGES:
        st = read_status(sid, date)
        s = st["status"] if st else None
        lines.append(f"- {icon[s]} {sid}：{st['reason'] if st else '今天没跑'}")
    p = ROOT / "runs" / date / "DIGEST.md"
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print("\n".join(lines))


def main():
    a = sys.argv[1:]
    if not a:
        print(__doc__); sys.exit(2)
    cmd = a[0]
    if cmd == "today":
        print(today()); return
    if cmd == "digest":
        cmd_digest(a[1] if len(a) > 1 else today()); return
    if len(a) < 2 or a[1] not in STAGES:
        print(f"未知阶段。可选：{', '.join(STAGES)}"); sys.exit(2)
    stage, date = a[1], (a[2] if len(a) > 2 else today())
    {"gate": cmd_gate, "prompt": cmd_prompt, "check": cmd_check}[cmd](stage, date)


if __name__ == "__main__":
    main()
