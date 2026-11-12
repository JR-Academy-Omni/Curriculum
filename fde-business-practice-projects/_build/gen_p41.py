#!/usr/bin/env python3
"""p41 teaching data + expected answer (deterministic).
Invented Sydney building-materials trader onboarding three new hires; IT / HR / line manager each confirm their own tasks.
Due dates, statuses, invalid confirmations and reminders are rule-computed here."""
import csv, json, pathlib, random, re, datetime as dt
from collections import defaultdict

R = random.Random(20261141)
P = pathlib.Path(__file__).resolve().parents[1] / "p41-new-hire-onboarding-checklist"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
TODAY = dt.date(2026, 11, 12)
SOON_DAYS = 3

PEOPLE = [  # person_id, name, role, slack, email
    ("U01", "王佳", "HR", "@wangjia", "hr@qihang-bm.example"),
    ("U02", "Tom Lee", "IT", "@tomlee", "it@qihang-bm.example"),
    ("U03", "陈刚", "主管", "@chengang", "chen.gang@qihang-bm.example"),
    ("U04", "李伟", "主管", "@liwei", "li.wei@qihang-bm.example"),
    ("U05", "郑总", "老板", "@zheng", "boss@qihang-bm.example"),
]
PNAME = {p[0]: p for p in PEOPLE}
HIRES = [  # hire_id, name, position, site, start_date (HR 系统), offer_start_date (offer 信), manager_id, personal_email
    ("H01", "赵敏", "销售助理", "office", "2026-11-17", "2026-11-17", "U03", "zhaomin.new@mail.example"),
    ("H02", "Jack Nguyen", "仓库叉车工", "warehouse", "2026-11-17", "2026-11-24", "U04", "jack.ng@mail.example"),
    ("H03", "孙悦", "财务专员", "office", "2026-11-24", "2026-11-24", "", "sunyue.work@mail.example"),
]
TEMPLATE = [  # task_id, task, owner_role, offset_days, applies_to
    ("T01", "确认 offer 已签回", "HR", -14, "all"),
    ("T02", "在 HR 系统里发入职表（TFN 申报、养老金选择、银行信息）并确认收回", "HR", -7, "all"),
    ("T03", "发 Fair Work Information Statement", "HR", -3, "all"),
    ("T04", "开公司邮箱和系统账号", "IT", -3, "all"),
    ("T05", "准备笔记本电脑并装好软件", "IT", -2, "office"),
    ("T06", "门禁卡", "IT", -1, "all"),
    ("T07", "排第一周日程、指定 buddy", "主管", -3, "all"),
    ("T08", "核验叉车证原件", "主管", -2, "warehouse"),
    ("T09", "安排 WHS 安全入职培训", "HR", -1, "warehouse"),
    ("T10", "第一天见面、介绍团队", "主管", 0, "all"),
    ("T11", "第一周结束回顾", "主管", 4, "all"),
]
# 已有的确认记录：hire, task, status, confirmed_by(person_id), confirmed_at, note
STATUS = [
    ("H01", "T01", "done", "U01", "2026-11-03 10:12", "offer 已签回"),
    ("H01", "T02", "done", "U01", "2026-11-10 15:40", "HR 系统显示三张表已收回"),
    ("H01", "T04", "done", "U02", "2026-11-11 09:05", "zhao.min@qihang-bm.example 已开"),
    ("H01", "T05", "done", "U01", "2026-11-11 16:30", "电脑在 IT 柜子里看到了"),
    ("H01", "T07", "done", "U03", "2026-11-11 11:20", "buddy：销售部 Amy"),
    ("H02", "T01", "done", "U01", "2026-11-04 09:30", "offer 已签回，offer 信上写的入职日是 11-24"),
    ("H02", "T02", "pending", "", "", "Jack 直接把表发到我微信了：TFN 000 111 222，BSB 000-000 账号 12345678，回头录系统"),
    ("H02", "T08", "pending", "", "", "等他第一天带原件"),
    ("H03", "T01", "pending", "", "", ""),
]
with open(P / "data/new-hires.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["hire_id", "name", "position", "site", "start_date", "offer_start_date", "manager_id", "personal_email"]); w.writerows(HIRES)
with open(P / "data/people.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["person_id", "name", "role", "slack", "email"]); w.writerows(PEOPLE)
with open(P / "data/checklist-template.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["task_id", "task", "owner_role", "due_offset_days", "applies_to"]); w.writerows(TEMPLATE)
with open(P / "data/task-status-2026-11-12.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["hire_id", "task_id", "status", "confirmed_by", "confirmed_at", "note"]); w.writerows(STATUS)

# ---- expected ----
def due_date(start, off):
    d = start + dt.timedelta(days=off)
    if off < 0 and d.weekday() >= 5:   # 开工前的事，落在周末就提前到周五
        d -= dt.timedelta(days=d.weekday() - 4)
    return d

SENSITIVE = re.compile(r"TFN\s*[\d ]{9,11}|BSB\s*[\d-]{6,7}|账号\s*\d{6,}")
st = {(s[0], s[1]): s for s in STATUS}
board, flags = [], []
for hid, name, pos, site, sd, osd, mgr, _ in HIRES:
    start = min(dt.date.fromisoformat(sd), dt.date.fromisoformat(osd))
    if sd != osd:
        flags.append({"hire": hid, "type": "入职日期不一致", "detail": f"HR 系统 {sd}，offer 信 {osd}；先按较早的 {start.isoformat()} 排截止日，请 HR 王佳和本人确认"})
    if not mgr:
        flags.append({"hire": hid, "type": "缺少主管", "detail": "new-hires 里没有 manager_id，主管的任务没人负责，请 HR 王佳找郑总确认汇报对象"})
    for tid, task, role, off, applies in TEMPLATE:
        if applies != "all" and applies != site: continue
        due = due_date(start, off)
        owner = {"HR": "U01", "IT": "U02", "主管": mgr}[role]
        s = st.get((hid, tid))
        row = {"hire_id": hid, "hire": name, "task_id": tid, "task": task, "owner_role": role,
               "owner": PNAME[owner][1] if owner else "", "due": due.isoformat(), "status": "", "note": ""}
        done = s and s[2] == "done"
        if done and PNAME[s[3]][2] != role:
            row["status"] = "invalid_confirmation"
            row["note"] = f"由 {PNAME[s[3]][1]}（{PNAME[s[3]][2]}）确认，这项要 {role} 本人确认，不算完成"
            flags.append({"hire": hid, "type": "确认人角色不对", "detail": f"{tid} {task}：{row['note']}"})
        elif done:
            row["status"] = "done"; row["note"] = f"{PNAME[s[3]][1]} {s[4]}"
        elif not owner:
            row["status"] = "unassigned"; row["note"] = "没有主管"
        elif due < TODAY:
            row["status"] = "overdue"; row["note"] = f"已过期 {(TODAY - due).days} 天"
        elif (due - TODAY).days <= SOON_DAYS:
            row["status"] = "due_soon"
        else:
            row["status"] = "upcoming"
        if s and SENSITIVE.search(s[5]):
            row["note"] = (row["note"] + "；" if row["note"] else "") + "备注里有 TFN / 银行信息，已打码，原文请删除"
            flags.append({"hire": hid, "type": "清单里出现敏感信息", "detail": f"{tid} 备注里有 TFN 和银行账号；清单和 Slack 不能存，提醒本人走 HR 系统重新提交，并删除微信记录"})
        board.append(row)

summary = {}
for hid, name, *_ in HIRES:
    rows = [b for b in board if b["hire_id"] == hid]
    summary[hid] = {"name": name, "tasks": len(rows), "done": sum(1 for b in rows if b["status"] == "done"),
                    "overdue": [b["task_id"] for b in rows if b["status"] == "overdue"],
                    "due_soon": [b["task_id"] for b in rows if b["status"] == "due_soon"],
                    "invalid": [b["task_id"] for b in rows if b["status"] == "invalid_confirmation"],
                    "unassigned": [b["task_id"] for b in rows if b["status"] == "unassigned"]}
remind = defaultdict(list)
for b in board:
    if b["status"] in ("overdue", "due_soon", "invalid_confirmation"):
        remind[b["owner"]].append(f"{b['hire_id']} {b['task_id']}（{b['due']}，{b['status']}）")
    if b["status"] == "unassigned":
        remind["王佳"].append(f"{b['hire_id']} {b['task_id']}（{b['due']}，没有主管，请先确认负责人）")
exp = {"today": TODAY.isoformat(), "rules": {"due": "入职日 + offset；开工前的任务落在周六日就提前到周五",
       "start_date_conflict": "HR 系统和 offer 信不一致时先按较早日期排，并通知 HR 确认",
       "valid_confirmation": "只有 owner_role 对应角色的人确认才算完成", "due_soon_days": SOON_DAYS},
       "total_tasks": len(board), "done": sum(1 for b in board if b["status"] == "done"),
       "status_counts": {k: sum(1 for b in board if b["status"] == k) for k in ["done", "overdue", "due_soon", "upcoming", "invalid_confirmation", "unassigned"]},
       "by_hire": summary, "flags": flags, "reminders": dict(sorted(remind.items()))}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/task-board.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(board[0])); w.writeheader(); w.writerows(board)
print(json.dumps({k: exp[k] for k in ("total_tasks", "status_counts", "by_hire", "reminders")}, ensure_ascii=False, indent=1))
for fl in flags: print(fl)

DRAFTS = """# 提醒消息参考写法（2026-11-12）

LLM 只负责把 Code 节点算出的清单写成人话，任务、日期、状态一项都不能改。

## 给 Tom Lee（IT）
Tom，入职这边有两件事要你看一下：
- 赵敏（11-17 入职）的电脑：清单上是 HR 王佳点的完成，IT 这项要你本人确认才算数，麻烦检查一下软件装好了没，再点一次确认。截止 11-13（周五）。
- Jack Nguyen 的邮箱和系统账号，截止 11-13（周五）。他的入职日期还在确认，先按 11-17 准备。

## 给李伟（主管）
李伟，Jack Nguyen 的两件事截止都是 11-13（周五）：
- 排第一周日程、指定 buddy；
- 核验叉车证原件（备注说等他第一天带来；如果第一天才看，记得那天上叉车前先看）。
另外 HR 系统写他 11-17 入职，offer 信写的是 11-24，王佳在确认，你那边也留意一下。

## 给王佳（HR）
王佳，今天要你处理的有这些：
- 已过期：Jack Nguyen 的入职表（11-10）、孙悦的 offer 签回确认（11-10）。
- 11-13 到期：赵敏、Jack 的 Fair Work Information Statement。
- Jack 的入职日期：HR 系统 11-17、offer 信 11-24，请和他本人确认后改成一个。
- Jack 的入职表备注里出现了 TFN 和银行账号，清单里已经打码。请让他走 HR 系统重新提交，并把微信里的原文删掉。
- 孙悦还没有主管，三项主管任务没人负责，第一项 11-20 到期，请找郑总确认她汇报给谁。
"""
(P / "expected/reminder-drafts.md").write_text(DRAFTS, encoding="utf-8")
