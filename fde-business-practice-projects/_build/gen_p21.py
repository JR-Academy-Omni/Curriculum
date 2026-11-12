#!/usr/bin/env python3
"""p21 teaching data + expected answer (deterministic).
Fictional Adelaide bookkeeping firm; 12 fictional small-business clients; October 2026 document collection.
Checklist status, reminder stage and review queue are rule-computed here. REMINDER_DRAFTS are hand-written
reference emails (the assistant session followed the README prompt) and are written to expected/reminder-drafts.md."""
import csv, json, pathlib, random, datetime as dt

R = random.Random(20261121)
P = pathlib.Path(__file__).resolve().parents[1] / "p21-bookkeeping-monthly-docs-chase"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
PERIOD = "2026-10"
TODAY = "2026-11-12"
INTERNAL_DUE = "2026-11-07"     # 事务所自己定的交件日（教学假设）
NEW_DUE = "2026-11-17"          # 提醒里写的补交日期

CLIENTS = [  # id, business, contact, email, status, bank_accounts, card, pos, payroll, accountant, language
    ("C01", "老街面馆", "陈伯", "chen.laojie@mail.example", "active", "CBA-1182", "N", "Y", "Y", "Helen", "中文"),
    ("C02", "Bright Smile Cleaning", "Mandy Ho", "mandy@brightsmile.example", "active", "NAB-3301", "Y", "N", "Y", "Mark", "English"),
    ("C03", "Coastal Tiles", "Jason Pham", "jason@coastaltiles.example", "active", "CBA-2045;WBC-7710", "Y", "N", "N", "Helen", "English"),
    ("C04", "安妮花店", "Annie 刘", "annie.florist@mail.example", "active", "ANZ-5523", "N", "Y", "N", "Mark", "中文"),
    ("C05", "Harbour IT Services", "Ravi Kumar", "ravi@harbourit.example", "active", "NAB-9087", "Y", "N", "Y", "Helen", "English"),
    ("C06", "小林按摩", "林师傅", "lin.massage@mail.example", "active", "CBA-6619", "N", "Y", "N", "Mark", "中文"),
    ("C07", "Golden Grain Trading", "周总", "zhou@goldengrain.example", "active", "WBC-4402;HSBC-0931", "Y", "N", "N", "Helen", "中文"),
    ("C08", "甜心烘焙", "Coco 王", "coco.bakery@mail.example", "active", "BOQ-2210", "N", "Y", "Y", "Mark", "中文"),
    ("C09", "Swift Couriers", "Ahmed Saleh", "ahmed@swiftcouriers.example", "active", "CBA-8890", "Y", "N", "Y", "Helen", "English"),
    ("C10", "Parkside Tutoring", "Grace 李", "grace@parksidetutor.example", "active", "ANZ-1276", "N", "N", "N", "Mark", "中文"),
    ("C11", "Red Gum Landscaping", "Tom Walsh", "tom@redgumland.example", "active", "NAB-6654", "Y", "N", "N", "Helen", "English"),
    ("C12", "东方旅游", "赵经理", "zhao@orientaltours.example", "paused", "WBC-3380", "N", "N", "Y", "Mark", "中文"),
]
DOC_LABEL = {"bank_statement": "银行对账单", "card_statement": "信用卡对账单", "pos_sales_report": "POS 销售报表",
             "payroll_summary": "工资汇总", "purchase_invoices": "进货 / 费用发票"}
REQ_RULES = [("bank_statement", "每个银行账户一份（account_ref 要对上）"), ("card_statement", "has_credit_card = Y"),
             ("pos_sales_report", "has_pos = Y"), ("payroll_summary", "has_payroll = Y"), ("purchase_invoices", "所有客户，一个月一包")]
REMINDER_LOG = [("C06", PERIOD, 1, "2026-11-05 10:00"), ("C08", PERIOD, 1, "2026-11-05 10:00"),
                ("C09", PERIOD, 1, "2026-11-03 10:00"), ("C09", PERIOD, 2, "2026-11-07 10:00")]


def required(c):
    req = [("bank_statement", a) for a in c[5].split(";")]
    if c[6] == "Y": req.append(("card_statement", ""))
    if c[7] == "Y": req.append(("pos_sales_report", ""))
    if c[8] == "Y": req.append(("payroll_summary", ""))
    req.append(("purchase_invoices", ""))
    return req


# ---- received documents: start from "everything arrived", then remove / distort ----
received = []
def rec(cid, email, dtype, acct, period, note="", at=None):
    day = R.randint(1, 11); hh = R.randint(8, 21); mi = R.randint(0, 59)
    stem = {"bank_statement": f"statement_{acct.split('-')[0]}_{period.replace('-', '')}", "card_statement": f"card_{period}",
            "pos_sales_report": f"square_sales_{period}", "payroll_summary": f"payroll_{period}",
            "purchase_invoices": f"invoices_{period}"}[dtype]
    received.append({"received_at": at or f"2026-11-{day:02d} {hh:02d}:{mi:02d}", "from_email": email,
                     "doc_type": dtype, "account_ref": acct, "period": period, "filename": f"{stem}.{'zip' if dtype == 'purchase_invoices' else 'pdf'}",
                     "note": note})

DROP = {("C06", "pos_sales_report"), ("C08", "payroll_summary"), ("C08", "purchase_invoices"), ("C09", "card_statement"),
        ("C09", "payroll_summary"), ("C11", "bank_statement"), ("C11", "purchase_invoices"), ("C11", "card_statement")}
for c in CLIENTS:
    if c[4] != "active": continue
    for dtype, acct in required(c):
        if (c[0], dtype) in DROP: continue
        if c[0] == "C03" and acct == "WBC-7710":
            rec(c[0], c[3], dtype, acct, "2026-09", "客户说「十月的」")                 # planted: wrong period
        elif c[0] == "C07" and acct == "HSBC-0931":
            rec(c[0], c[3], dtype, acct, PERIOD, "PDF 有密码，打不开")                  # planted: unreadable
        else:
            rec(c[0], c[3], dtype, acct, PERIOD)
rec("C05", "ravi@harbourit.example", "purchase_invoices", "", PERIOD, "又传了一次", at="2026-11-11 21:40")       # planted: duplicate upload
rec("", "accounts@golden-wok-billing.example", "bank_statement", "CBA-1182", PERIOD, "邮件说「请查收老街面馆对账单」")  # planted: unknown sender
received.sort(key=lambda r: r["received_at"])
for i, r in enumerate(received, 1): r["received_id"] = f"R{i:03d}"
RF = ["received_id", "received_at", "from_email", "doc_type", "account_ref", "period", "filename", "note"]

with open(P / "data/clients.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["client_id", "business_name", "contact_name", "email", "service_status", "bank_accounts", "has_credit_card", "has_pos", "has_payroll", "accountant", "language"])
    w.writerows(CLIENTS)
with open(P / "data/doc-requirements.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["doc_type", "中文名", "什么时候需要"])
    for k, rule in REQ_RULES: w.writerow([k, DOC_LABEL[k], rule])
with open(P / "data/received-2026-10.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=RF); w.writeheader(); w.writerows(received)
with open(P / "data/reminder-log.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["client_id", "period", "reminder_no", "sent_at"]); w.writerows(REMINDER_LOG)

# ---- expected ----
by_email = {c[3]: c for c in CLIENTS}
sent = {}
for cid, _, n, _ in REMINDER_LOG: sent[cid] = max(sent.get(cid, 0), n)
holds, got = [], {}
seen = set()
for r in received:
    c = by_email.get(r["from_email"])
    if not c:
        holds.append({"received_id": r["received_id"], "type": "发件人不是客户", "action": "不归档到任何客户，提醒会计核实（可能是钓鱼邮件）",
                      "detail": f"{r['from_email']} 不在客户邮箱里，虽然说是老街面馆的对账单"}); continue
    cid = c[0]
    if r["period"] != PERIOD:
        holds.append({"received_id": r["received_id"], "type": "期间不对", "action": "不算收到，在提醒里请客户重发",
                      "detail": f"{cid} {r['account_ref']} 传的是 {r['period']}，要的是 {PERIOD}"}); continue
    if "打不开" in r["note"] or "密码" in r["note"]:
        holds.append({"received_id": r["received_id"], "type": "文件打不开", "action": "不算收到，在提醒里请客户发不带密码的版本",
                      "detail": f"{cid} {r['account_ref']} 对账单有密码"}); continue
    key = (cid, r["doc_type"], r["account_ref"])
    if key in seen:
        holds.append({"received_id": r["received_id"], "type": "重复上传", "action": "只算一次，不用找客户",
                      "detail": f"{cid} {DOC_LABEL[r['doc_type']]} 重复"}); continue
    seen.add(key); got.setdefault(cid, set()).add(key[1:])

statuses, queue, reminders, escalate, skipped = [], [], [], [], []
for c in CLIENTS:
    cid = c[0]
    if c[4] != "active":
        statuses.append({"client_id": cid, "business": c[1], "status": "暂停服务，跳过", "missing": [], "next": "不发提醒"}); skipped.append(cid); continue
    miss = [f"{DOC_LABEL[t]}{('（' + a + '）') if a else ''}" for t, a in required(c) if (t, a) not in got.get(cid, set())]
    if not miss:
        statuses.append({"client_id": cid, "business": c[1], "status": "齐全", "missing": [], "next": f"进会计复核（{c[9]}）"}); queue.append(cid); continue
    n = sent.get(cid, 0)
    if n >= 2:
        nxt = f"已提醒 {n} 次，不再发邮件，转会计 {c[9]} 打电话"; escalate.append(cid)
    else:
        nxt = f"发第 {n + 1} 次提醒（起草后经行政确认）"; reminders.append({"client_id": cid, "reminder_no": n + 1, "missing": miss})
    statuses.append({"client_id": cid, "business": c[1], "status": "缺件", "missing": miss, "next": nxt})

REMINDER_DRAFTS = {
    "C03": ("Coastal Tiles · one October statement still needed", """Hi Jason,

Thanks for sending your October documents this week. We've got almost everything. There's just one we still need:

- Bank statement (WBC-7710): the one you sent covers September. Could you send the statement for 1–31 October?

Please reply to this email with the PDF by Tuesday 17 November. Let me know if you have any questions.

Thanks,
Xu, Mingde Accounting"""),
    "C06": ("小林按摩 · 10 月资料还差 POS 报表（第二次提醒）", """林师傅您好，

上周 5 号发过一次提醒，10 月份的资料目前还差一份：

- POS 销售报表：在 POS 后台导出 10 月 1 日到 31 日的销售汇总就可以。

Mark 要用它核对您的收入，麻烦 11 月 17 日（周二）前回这封邮件发给我们。如果导出不会弄，回个电话时间，我教您一下。

明德会计 小许"""),
    "C07": ("Golden Grain Trading · 10 月资料还差一份对账单", """周总您好，

10 月份的资料收到了，谢谢。有一份需要麻烦您重新发：

- 银行对账单（HSBC-0931）：您发来的 PDF 有密码，我们打不开。麻烦发一份不带密码的版本，或者在银行网站上重新下载一次。

请不要把密码发在邮件里。11 月 17 日（周二）前回这封邮件就可以。

明德会计 小许"""),
    "C08": ("甜心烘焙 · 10 月资料还差两份（第二次提醒）", """Coco 你好，

上周 5 号提醒过一次，10 月份还差这两份：

- 工资汇总：工资软件里导出 10 月的 pay run summary 就行；
- 进货 / 费用发票：10 月的发票打个压缩包，或者拍照发过来也可以。

Mark 要等这两份到了才能开始做 10 月的账，麻烦 11 月 17 日（周二）前回这封邮件发给我们。

明德会计 小许"""),
    "C11": ("Red Gum Landscaping · October documents we still need", """Hi Tom,

We're getting your October books ready and haven't received these yet:

- Bank statement (NAB-6654) for 1–31 October
- Credit card statement for October
- Purchase / expense invoices for October (a zip file or clear photos are fine)

Could you reply to this email with them by Tuesday 17 November? If anything's hard to find, just let me know and we'll work it out.

Thanks,
Xu, Mingde Accounting"""),
}
assert set(REMINDER_DRAFTS) == {r["client_id"] for r in reminders}, (REMINDER_DRAFTS.keys(), reminders)

exp = {"period": PERIOD, "today": TODAY, "internal_due": INTERNAL_DUE, "clients": len(CLIENTS), "files_received": len(received),
       "complete_to_review": queue, "reminders_to_send": reminders, "escalate_to_accountant_call": escalate,
       "skipped_paused": skipped, "file_holds": holds, "client_status": statuses,
       "rules": {"required_docs": dict(REQ_RULES), "counts_as_received": "发件邮箱是客户登记邮箱、期间是 2026-10、文件打得开；同一类同一账户只算一次",
                 "reminder_stage": "已发 0 次 → 第 1 次提醒；已发 1 次 → 第 2 次提醒；已发 2 次及以上 → 不再发邮件，转会计电话",
                 "paused": "service_status = paused 不发任何提醒"}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["client_id", "business", "status", "missing", "next_step", "needs_human"])
    for s in statuses:
        w.writerow([s["client_id"], s["business"], s["status"], "；".join(s["missing"]), s["next"],
                    "行政确认提醒" if s["status"] == "缺件" and s["client_id"] not in escalate else ("会计复核" if s["status"] == "齐全" else ("会计打电话" if s["client_id"] in escalate else "否"))])
md = ["# 缺件提醒邮件参考写法（10 月资料）", "", "每一封都要行政小许在 Slack 里点「批准」后才发出。称呼、缺件、补交日期以 `answer.json` 为准。", ""]
for cid in [r["client_id"] for r in reminders]:
    subj, body = REMINDER_DRAFTS[cid]
    md += [f"## {cid}", "", f"**主题：** {subj}", "", "```", body, "```", ""]
md += ["## C09 Swift Couriers（不发邮件）", "", "已经提醒过 2 次，第 3 次不再发邮件。给 Helen 的 Slack 消息：", "",
       "```", "Swift Couriers（Ahmed Saleh）10 月还差信用卡对账单和工资汇总，11-03、11-07 已发过两次邮件提醒，没有回音。麻烦你打个电话问一下，问完在表里更新状态。", "```", ""]
(P / "expected/reminder-drafts.md").write_text("\n".join(md), encoding="utf-8")
print(json.dumps({k: exp[k] for k in ("files_received", "complete_to_review", "reminders_to_send", "escalate_to_accountant_call", "skipped_paused", "file_holds")}, ensure_ascii=False, indent=1))
