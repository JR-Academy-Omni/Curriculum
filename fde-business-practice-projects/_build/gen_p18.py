#!/usr/bin/env python3
"""p18 teaching data + expected answer (deterministic). Same fictional agency as p03 (启航留学移民 Haymarket).
Dedup, date validation, deadline triggers, priorities, owners and which clients may receive a reminder are
rule-computed here (internal follow-up rules only - no visa outcome is judged). Client reminder texts are
reference answers written by hand following the README prompt (no model API was called)."""
import csv, json, pathlib, random, re, datetime as dt

R = random.Random(20261118)
P = pathlib.Path(__file__).resolve().parents[1] / "p18-education-agency-visa-deadline-followup"
TODAY = dt.date(2026, 11, 12)
ACTIVE = {"材料收集", "已递交", "补件中"}
RANK = {"紧急": 4, "高": 3, "中": 2, "低": 1}
COLS = ["case_id", "client_name", "client_contact", "case_owner", "visa_type", "stage", "lodged_date", "current_visa_expiry",
        "passport_expiry", "rfi_due", "health_check_due", "last_contact", "contact_ok", "notes", "updated_at"]
ROWS = [
    ("C101", "张伟", "zhangwei@mail.example", "Michael Tan", "学生签证", "已递交", "2026-10-01", "2026-12-20", "2029-03-11", "", "", "2026-10-28", "yes", "", "2026-10-28"),
    ("C102", "李娜", "lina.syd@mail.example", "Michael Tan", "毕业生工作签证", "补件中", "2026-08-14", "2027-01-30", "2028-06-02", "2026-11-16", "", "2026-11-03", "yes", "补件清单已在 11-03 邮件发给客户", "2026-11-03"),
    ("C103", "王磊", "wanglei@mail.example", "Michael Tan", "访客签证", "材料收集", "", "", "2027-03-01", "", "", "2026-09-20", "yes", "", "2026-09-20"),
    ("C104", "陈静", "chenjing@mail.example", "Michael Tan", "学生签证", "已递交", "2026-10-10", "2027-02-28", "2030-01-15", "", "2026-11-20", "2026-11-04", "yes", "体检要求信 11-04 已转给客户", "2026-11-04"),
    ("C105", "刘强", "liuqiang@mail.example", "Michael Tan", "雇主担保签证", "补件中", "2026-07-22", "2027-05-10", "2031-08-08", "2026-11-08", "", "2026-10-30", "yes", "", "2026-10-30"),
    ("C106", "赵敏", "zhaomin@mail.example", "Michael Tan", "学生签证", "已获批", "2026-09-01", "2029-03-31", "2032-02-02", "", "", "2026-11-01", "yes", "11-01 获批，待归档", "2026-11-01"),
    ("C107", "孙悦", "sunyue@mail.example", "Michael Tan", "毕业生工作签证", "材料收集", "", "2026-12-30", "2028-09-19", "", "", "2026-11-10", "yes", "", "2026-11-10"),
    ("C108", "周杰", "zhoujie@mail.example", "Michael Tan", "学生签证", "已递交", "2026-10-20", "2026-11-05", "2029-11-27", "", "", "2026-10-21", "yes", "", "2026-10-21"),
    ("C109", "吴芳", "wufang.family@mail.example", "Michael Tan", "访客签证", "已递交", "2026-10-25", "", "2028-04-14", "", "2026-11-25", "2026-10-26", "no", "客户要求只跟她女儿联系，不要直接发消息给她本人", "2026-10-26"),
    ("C110", "郑凯", "zhengkai@mail.example", "", "学生签证", "材料收集", "", "2027-03-15", "03/04/2027", "", "", "2026-10-01", "yes", "", "2026-10-01"),
    ("C111", "黄丽", "huangli@mail.example", "Michael Tan", "毕业生工作签证", "已递交", "2026-09-18", "2027-02-01", "2029-07-07", "", "", "2026-11-11", "yes", "客户微信问：能不能保证这次批下来？", "2026-11-11"),
    ("C112", "林晨", "linchen@mail.example", "Michael Tan", "学生签证", "已递交", "2026-09-30", "2027-01-15", "2030-10-10", "", "", "2026-10-15", "yes", "", "2026-10-15"),
    ("C112", "林晨", "linchen@mail.example", "Michael Tan", "学生签证", "补件中", "2026-09-30", "2027-01-15", "2030-10-10", "2026-11-24", "", "2026-11-09", "yes", "11-09 收到补件要求，清单已发客户", "2026-11-09"),
    ("C113", "何雪", "hexue@mail.example", "Michael Tan", "访客签证", "已结案", "2026-06-02", "", "2028-01-01", "", "", "2026-07-15", "yes", "", "2026-07-15"),
    ("C114", "马超", "machao@mail.example", "Michael Tan", "学生签证", "已撤回", "2026-08-01", "", "2029-05-05", "", "", "2026-09-01", "yes", "客户自行撤回", "2026-09-01"),
    ("C115", "罗琳", "luolin@mail.example", "Michael Tan", "学生签证", "已递交", "2026-10-28", "2027-03-31", "2031-01-20", "", "", "2026-11-05", "yes", "", "2026-11-05"),
    ("C116", "高远", "gaoyuan@mail.example", "Michael Tan", "雇主担保签证", "已递交", "2026-08-30", "2027-06-30", "2027-04-30", "", "", "2026-10-05", "yes", "", "2026-10-05"),
]
rows = [dict(zip(COLS, r)) for r in ROWS]

RULES = """# 启航留学移民 签证进度跟进规则（公司内部，练习数据）

这些是公司内部的**跟进提醒规则**，只决定「谁、什么时候、要做什么事」，不判断任何签证结果。
签证和移民建议只能由注册移民代理 Michael Tan 给出（以 OMARA 和相关法规为准）。

## 范围
- 只看 stage 为「材料收集 / 已递交 / 补件中」的案子；已获批、已结案、已撤回的不提醒。
- 同一个 case_id 出现多行，以 updated_at 最新的一行为准。

## 触发规则（今天 = 每天早上跑的那天）
| 字段 | 条件 | 优先级 | 待办 |
|---|---|---|---|
| rfi_due 补件截止 | 已过期 | 紧急 | Michael 今天亲自联系客户核实补件情况 |
| rfi_due 补件截止 | 0–7 天内 | 紧急 | Michael 今天确认补件材料是否到齐 |
| rfi_due 补件截止 | 8–14 天内 | 高 | 提醒客户按清单交补件材料 |
| health_check_due 体检截止 | 已过期 / 0–7 天 | 紧急 | Michael 今天确认体检是否已约 |
| health_check_due 体检截止 | 8–14 天内 | 高 | 提醒客户尽快预约体检 |
| current_visa_expiry 当前签证到期 | 表里的日期已过 | 紧急 | Michael 今天核实客户当前情况（前台不对客户说任何结论） |
| current_visa_expiry 当前签证到期 | 60 天内，stage = 材料收集 | 高 | Michael 过一遍材料进度和时间安排 |
| current_visa_expiry 当前签证到期 | 60 天内，stage = 已递交 / 补件中 | 中 | Michael 查一下案子状态 |
| passport_expiry 护照到期 | 6 个月内 | 中 | 提醒客户留意护照有效期，换发后发新护照扫描件 |
| last_contact 上次联系 | 超过 30 天 | 低 | 例行跟进：问一下有没有新情况 |
| notes 客户提问 | 问到批不批、能不能保证、会不会被拒 | 中 | Michael 本人回复，前台和系统都不回答 |

## 不能自动处理的情况
- case_owner 为空：待办写「未分配」，提醒小林今天分给 Michael 或其他注册移民代理。
- 日期不是 YYYY-MM-DD 格式（比如 03/04/2027）：不猜是几月几号，标「日期待核实」，请小林对照原件改。
- contact_ok = no：只生成内部待办，不起草给客户的消息。

## 给客户的提醒
- 只发「事务性」提醒：把截止日期、要交什么、请联系谁说清楚。截止日期照抄部门来信或表里的日期。
- 不写签证会不会批、要等多久、有没有影响、该不该换签证这类话。
- 紧急的（补件或体检已过期 / 7 天内、当前签证到期日已过）不发模板消息，由 Michael 本人电话联系。
- 每条提醒都要 Michael 批准后才发。
"""


def iso(s):
    return bool(re.fullmatch(r"\d{4}-\d{2}-\d{2}", s))


def days(s): return (dt.date.fromisoformat(s) - TODAY).days


latest = {}
for r in rows:
    if r["case_id"] not in latest or r["updated_at"] > latest[r["case_id"]]["updated_at"]: latest[r["case_id"]] = r
dups = sorted({r["case_id"] for r in rows if sum(1 for x in rows if x["case_id"] == r["case_id"]) > 1})
skipped = [c for c, r in latest.items() if r["stage"] not in ACTIVE]
cases = []
for cid, r in latest.items():
    if r["stage"] not in ACTIVE: continue
    trig, flags = [], []
    for k in ("lodged_date", "current_visa_expiry", "passport_expiry", "rfi_due", "health_check_due", "last_contact"):
        if r[k] and not iso(r[k]): flags.append(f"{k} = {r[k]}，日期格式待核实")
    def ok(k): return r[k] and iso(r[k])
    for k, label in (("rfi_due", "补件截止"), ("health_check_due", "体检截止")):
        if ok(k):
            d = days(r[k])
            if d < 0: trig.append(("紧急", f"{label} {r[k]} 已过期 {-d} 天", "Michael 今天亲自联系客户核实"))
            elif d <= 7: trig.append(("紧急", f"{label} {r[k]}，还剩 {d} 天", "Michael 今天确认是否已完成"))
            elif d <= 14: trig.append(("高", f"{label} {r[k]}，还剩 {d} 天", "提醒客户按要求完成"))
    if ok("current_visa_expiry"):
        d = days(r["current_visa_expiry"])
        if d < 0: trig.append(("紧急", f"表里当前签证到期日 {r['current_visa_expiry']} 已过 {-d} 天", "Michael 今天核实客户当前情况"))
        elif d <= 60:
            trig.append(("高" if r["stage"] == "材料收集" else "中", f"当前签证 {r['current_visa_expiry']} 到期，还剩 {d} 天（stage = {r['stage']}）",
                         "Michael 过一遍材料进度和时间安排" if r["stage"] == "材料收集" else "Michael 查一下案子状态"))
    if ok("passport_expiry") and dt.date.fromisoformat(r["passport_expiry"]) <= dt.date(2027, 5, 12):
        trig.append(("中", f"护照 {r['passport_expiry']} 到期（6 个月内）", "提醒客户留意护照有效期，换发后发扫描件"))
    if ok("last_contact") and (TODAY - dt.date.fromisoformat(r["last_contact"])).days > 30:
        trig.append(("低", f"上次联系 {r['last_contact']}，已 {(TODAY - dt.date.fromisoformat(r['last_contact'])).days} 天", "例行跟进"))
    if any(k in r["notes"] for k in ("保证", "批下来", "会不会被拒")):
        trig.append(("中", "客户提问：" + r["notes"].split("：", 1)[-1], "Michael 本人回复，前台和系统都不回答"))
    if not r["case_owner"]: flags.append("case_owner 为空，今天分配")
    if not trig and not flags: continue
    pr = max((t[0] for t in trig), key=RANK.get) if trig else "中"
    can_remind = (r["contact_ok"] == "yes" and r["case_owner"] and pr != "紧急" and not flags and
                  any(("提醒客户" in t[2]) or t[2] == "例行跟进" for t in trig))
    cases.append({"case_id": cid, "client_name": r["client_name"], "owner": r["case_owner"] or "未分配", "stage": r["stage"], "priority": pr,
                  "triggers": [{"priority": t[0], "what": t[1], "todo": t[2]} for t in sorted(trig, key=lambda t: -RANK[t[0]])],
                  "flags": flags, "client_reminder": "起草，待 Michael 批准" if can_remind else
                  ("不发（contact_ok = no）" if r["contact_ok"] == "no" else ("不发，Michael 本人电话联系" if pr == "紧急" else
                   ("先处理标记的问题" if flags else "不发，只是内部待办")))})
cases.sort(key=lambda c: (-RANK[c["priority"]], c["case_id"]))

# ---- hand-written client reminders (reference answers) ----
MSG = {
    "C103": "王磊你好，我是启航的小林。两件小事：一是你的护照 2027 年 3 月 1 日到期，换发新护照后麻烦把新护照首页扫描发给我们；二是好久没联系了，材料准备上有新情况或者问题，可以回复我，我转给 Michael。",
    "C104": "陈静你好，我是启航的小林。提醒一下，11 月 4 日转给你的体检要求信上写的截止日期是 2026 年 11 月 20 日，还没预约的话请尽快预约，约好后把预约确认发给我们。",
    "C112": "林晨你好，我是启航的小林。11 月 9 日发给你的补件清单，截止日期是 2026 年 11 月 24 日。麻烦按清单把材料整理好，尽量在 11 月 20 日前发给我们，Michael 要留时间检查。有看不懂的地方直接问 Michael。",
    "C116": "高远你好，我是启航的小林。提醒一下，你的护照 2027 年 4 月 30 日到期，换发新护照后麻烦把新护照首页扫描发给我们。另外最近有没有什么新情况？有的话回复我，我转给 Michael。",
}
for c in cases: c["message_draft"] = MSG.get(c["case_id"], "")
assert {c["case_id"] for c in cases if c["client_reminder"].startswith("起草")} == set(MSG), [c["case_id"] for c in cases if c["client_reminder"].startswith("起草")]

(P / "data").mkdir(parents=True, exist_ok=True)
with open(P / "data/visa-tracker.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=COLS); w.writeheader(); w.writerows(rows)
(P / "data/followup-rules.md").write_text(RULES, encoding="utf-8")
exp = {"today": TODAY.isoformat(), "rows_in_file": len(rows), "duplicate_case_ids": dups, "cases_after_dedup": len(latest),
       "skipped_not_active": skipped, "cases_with_todos": len(cases),
       "by_priority": {p: [c["case_id"] for c in cases if c["priority"] == p] for p in ("紧急", "高", "中", "低")},
       "unassigned": [c["case_id"] for c in cases if c["owner"] == "未分配"],
       "date_flags": {c["case_id"]: c["flags"] for c in cases if c["flags"]},
       "client_reminders_to_approve": [c["case_id"] for c in cases if c["message_draft"]],
       "no_todo_active": [cid for cid, r in latest.items() if r["stage"] in ACTIVE and cid not in {c["case_id"] for c in cases}],
       "cases": cases}
(P / "expected").mkdir(exist_ok=True)
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["case_id", "client_name", "owner", "priority", "todos", "flags", "client_reminder", "message_draft"])
    for c in cases:
        w.writerow([c["case_id"], c["client_name"], c["owner"], c["priority"], "; ".join(f"[{t['priority']}] {t['what']} → {t['todo']}" for t in c["triggers"]),
                    "; ".join(c["flags"]), c["client_reminder"], c["message_draft"]])
print(json.dumps({k: v for k, v in exp.items() if k != "cases"}, ensure_ascii=False, indent=1))
for c in cases: print(c["case_id"], c["priority"], c["client_reminder"], [t["what"] for t in c["triggers"]], c["flags"])
