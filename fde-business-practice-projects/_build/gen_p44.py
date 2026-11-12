#!/usr/bin/env python3
"""p44 teaching data + expected answer (deterministic).
Invented Brisbane cleaning company; one week of jobs, invoices, expenses and customer feedback.
All weekly metrics are rule-computed here; expected/owner-brief.md wording is a hand-written reference
with numbers filled from the computed metrics."""
import csv, json, pathlib, random, datetime as dt
from collections import defaultdict

R = random.Random(20261144)
P = pathlib.Path(__file__).resolve().parents[1] / "p44-weekly-ops-owner-brief"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)

WEEK_START, WEEK_END = dt.date(2026, 11, 2), dt.date(2026, 11, 8)
REPORT_DATE = dt.date(2026, 11, 9)
LABOUR_RATE = 38.00        # 教学假设：每人工小时成本（含 super、保险估算）
OVERRUN = 1.25             # 实际工时 ≥ 预订工时 × 1.25 算超时
GST = 0.10

SERVICES = {  # service: (hours_booked choices, price per booked hour ex GST)
    "常规保洁": ([2, 2.5, 3], 68),
    "办公室保洁": ([3, 4], 62),
    "退租清洁": ([5, 6, 7], 70),
    "地毯清洗": ([2, 3], 75),
}
CUSTOMERS = []
for i in range(1, 23):
    kind = "办公室" if i in (3, 7, 12, 18) else "住宅"
    CUSTOMERS.append((f"C{i:03d}", kind))

jobs = []
n = 0
d = WEEK_START
while d <= WEEK_END:
    per_day = 4 if d.weekday() == 6 else (7 if d.weekday() == 5 else 6)
    for _ in range(per_day):
        n += 1
        cid, kind = R.choice(CUSTOMERS)
        svc = "办公室保洁" if kind == "办公室" else R.choice(["常规保洁", "常规保洁", "退租清洁", "地毯清洗"])
        hb = R.choice(SERVICES[svc][0])
        price = round(hb * SERVICES[svc][1], 2)
        ha = round(hb * R.choice([0.9, 1.0, 1.0, 1.0, 1.1, 1.15]), 1)
        status = "completed"
        x = R.random()
        if x < 0.06: status = "cancelled"
        elif x < 0.10: status = "rescheduled"
        jobs.append({"job_id": f"J{1100 + n}", "date": d.isoformat(), "customer_id": cid, "service_type": svc,
                     "crew": R.choice(["A", "B", "C", "D"]), "hours_booked": hb,
                     "hours_actual": ha if status == "completed" else 0, "price_ex_gst": f"{price:.2f}", "status": status})
    d += dt.timedelta(days=1)
J = {j["job_id"]: j for j in jobs}
# planted: two bond cleans blew way past booked hours (fixed price → losing money)
for jid, ha in (("J1113", None), ("J1131", None)):
    j = J[jid]; j.update(service_type="退租清洁", hours_booked=6, price_ex_gst="420.00", status="completed")
    j["hours_actual"] = 8.5 if jid == "J1113" else 9.0
NO_INVOICE = "J1124"; J[NO_INVOICE]["status"] = "completed"; J[NO_INVOICE]["hours_actual"] = J[NO_INVOICE]["hours_booked"]
VOID_JOB = "J1118"; J[VOID_JOB]["status"] = "cancelled"; J[VOID_JOB]["hours_actual"] = 0
DUP_JOB = "J1140"; J[DUP_JOB]["status"] = "completed"; J[DUP_JOB]["hours_actual"] = J[DUP_JOB]["hours_booked"]
for j in jobs:
    j["hours_booked"] = f"{float(j['hours_booked']):.1f}"; j["hours_actual"] = f"{float(j['hours_actual']):.1f}"

# ---- invoices (Xero export: this week's invoices + older unpaid ones) ----
inv = []
k = 5300
for j in jobs:
    if j["status"] != "completed" or j["job_id"] == NO_INVOICE: continue
    k += 1
    amt = float(j["price_ex_gst"]); issue = dt.date.fromisoformat(j["date"])
    paid = R.random() < 0.7
    inv.append({"invoice_no": f"INV-{k}", "customer_id": j["customer_id"], "job_id": j["job_id"], "issue_date": issue.isoformat(),
                "due_date": (issue + dt.timedelta(days=7)).isoformat(), "amount_ex_gst": f"{amt:.2f}", "gst": f"{amt * GST:.2f}",
                "status": "PAID" if paid else "AUTHORISED"})
# voided: cancelled job had been invoiced in advance, then voided
inv.append({"invoice_no": "INV-5350", "customer_id": J[VOID_JOB]["customer_id"], "job_id": VOID_JOB, "issue_date": "2026-11-03",
            "due_date": "2026-11-10", "amount_ex_gst": J[VOID_JOB]["price_ex_gst"],
            "gst": f"{float(J[VOID_JOB]['price_ex_gst']) * GST:.2f}", "status": "VOIDED"})
# duplicate: same job invoiced twice (office manager clicked twice)
orig = next(i for i in inv if i["job_id"] == DUP_JOB)
inv.append(dict(orig, invoice_no="INV-5351", status="AUTHORISED"))
# older unpaid invoices (for receivables)
for no, cid, jid, issue, amt in (("INV-5208", "C007", "J1021", "2026-10-13", 416.00), ("INV-5233", "C015", "J1047", "2026-10-21", 390.00),
                                 ("INV-5241", "C003", "J1055", "2026-10-24", 208.00), ("INV-5266", "C019", "J1079", "2026-10-29", 165.00)):
    i_d = dt.date.fromisoformat(issue)
    inv.append({"invoice_no": no, "customer_id": cid, "job_id": jid, "issue_date": issue, "due_date": (i_d + dt.timedelta(days=7)).isoformat(),
                "amount_ex_gst": f"{amt:.2f}", "gst": f"{amt * GST:.2f}", "status": "AUTHORISED"})
inv.sort(key=lambda r: (r["issue_date"], r["invoice_no"]))

# ---- expenses ----
EXP = [
    ("2026-11-02", "清洁耗材", "BrightClean Wholesale", 286.40, "每周耗材"),
    ("2026-11-03", "燃油", "Fuel card", 148.20, "两辆车"),
    ("2026-11-03", "车辆", "QuickFix Auto", 420.00, "B 车换刹车片"),
    ("2026-11-04", "清洁耗材", "BrightClean Wholesale", 64.90, "地毯清洗剂"),
    ("2026-11-05", "燃油", "Fuel card", 152.60, ""),
    ("2026-11-05", "软件订阅", "RosterPro", 89.00, "排班软件月费"),
    ("2026-11-06", "广告", "Local Ads Board", 120.00, "社区广告位"),
    ("2026-11-06", "清洁耗材", "BrightClean Wholesale", 286.40, "每周耗材（刷卡记录）"),
    ("2026-11-07", "燃油", "Fuel card", 139.80, ""),
    ("2026-11-07", "设备", "ToolMart", 349.00, "新吸尘器一台"),
    ("2026-10-30", "保险", "SafeCover", 610.00, "公众责任险月付"),
    ("2026-11-08", "燃油", "Fuel card", 71.30, ""),
]
expenses = [{"date": e[0], "category": e[1], "supplier": e[2], "amount_ex_gst": f"{e[3]:.2f}", "note": e[4]} for e in EXP]
# planted: 11-06 BrightClean 286.40 duplicates the 11-02 receipt (same amount, card statement re-entered) -> see note
expenses[7]["note"] = "每周耗材（刷卡记录，收据已在 11-02 录过）"

FEEDBACK = [
    ("2026-11-02", "C004", "短信回访", 5, "很干净，阿姨很细心"),
    ("2026-11-03", "C012", "邮件", 4, "办公室打扫得不错，垃圾桶忘了换袋"),
    ("2026-11-03", "C009", "Google 评价", 5, "Bond clean passed inspection first time, thanks!"),
    ("2026-11-04", "C016", "短信回访", 2, "约的 9 点，快 11 点才到，也没人提前说"),
    ("2026-11-05", "C001", "短信回访", 5, ""),
    ("2026-11-05", "C021", "电话", 1, "清洁的时候把我家书柜上的玻璃花瓶碰碎了，当时没人告诉我，我回家才发现。要求赔偿。"),
    ("2026-11-06", "C007", "邮件", 4, "按时，挺好"),
    ("2026-11-07", "C010", "短信回访", 5, "地毯洗完跟新的一样"),
    ("2026-11-07", "C014", "Google 评价", 4, "Good job overall, a bit rushed in the bathroom."),
    ("2026-11-08", "C002", "短信回访", 5, "谢谢"),
]
feedback = [dict(zip(["date", "customer_id", "channel", "rating", "text"], f)) for f in FEEDBACK]

LAST_WEEK = {"week": "2026-10-26 至 2026-11-01", "completed_jobs": 37, "revenue_ex_gst": 8420.00,
             "gross_profit_est": 2050.00, "avg_rating": 4.6, "low_ratings": 0, "overdue_receivables_ex_gst": 581.00}

def wcsv(name, rows):
    with open(P / "data" / name, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
wcsv("jobs-2026-11-02-to-08.csv", jobs); wcsv("invoices-xero-export.csv", inv); wcsv("expenses.csv", expenses); wcsv("feedback.csv", feedback)
json.dump(LAST_WEEK, open(P / "data/last-week-summary.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# ---- expected ----
def in_week(s): return WEEK_START.isoformat() <= s <= WEEK_END.isoformat()
completed = [j for j in jobs if j["status"] == "completed"]
revenue = round(sum(float(j["price_ex_gst"]) for j in completed), 2)
hours = round(sum(float(j["hours_actual"]) for j in completed), 1)
labour = round(hours * LABOUR_RATE, 2)

seen_job, dup_inv, void_inv, week_inv = {}, [], [], []
for i in inv:
    if i["status"] == "VOIDED": void_inv.append(i["invoice_no"]); continue
    if i["job_id"] in seen_job: dup_inv.append({"invoice_no": i["invoice_no"], "same_job_as": seen_job[i["job_id"]], "job_id": i["job_id"], "amount_ex_gst": float(i["amount_ex_gst"])}); continue
    seen_job[i["job_id"]] = i["invoice_no"]
    if in_week(i["issue_date"]): week_inv.append(i)
invoiced = round(sum(float(i["amount_ex_gst"]) for i in week_inv), 2)
invoiced_jobs = {i["job_id"] for i in inv if i["status"] != "VOIDED"}
uninvoiced = [{"job_id": j["job_id"], "customer_id": j["customer_id"], "date": j["date"], "price_ex_gst": float(j["price_ex_gst"])}
              for j in completed if j["job_id"] not in invoiced_jobs]
dup_nos = {d["invoice_no"] for d in dup_inv}
overdue = [{"invoice_no": i["invoice_no"], "customer_id": i["customer_id"], "due_date": i["due_date"],
            "days_overdue": (REPORT_DATE - dt.date.fromisoformat(i["due_date"])).days, "amount_ex_gst": float(i["amount_ex_gst"])}
           for i in inv if i["status"] == "AUTHORISED" and i["invoice_no"] not in dup_nos and i["due_date"] < REPORT_DATE.isoformat()]
overdue.sort(key=lambda x: -x["days_overdue"])
overdue_total = round(sum(o["amount_ex_gst"] for o in overdue), 2)

exp_used, exp_held, seen_e = [], [], set()
for e in expenses:
    key = (e["supplier"], e["amount_ex_gst"], e["category"])
    if not in_week(e["date"]): exp_held.append({**e, "reason": "日期不在本周，属于上周的支出"}); continue
    if key in seen_e: exp_held.append({**e, "reason": "跟本周另一条同供应商、同金额的耗材重复（备注写明收据已录过）"}); continue
    seen_e.add(key); exp_used.append(e)
by_cat = defaultdict(float)
for e in exp_used: by_cat[e["category"]] += float(e["amount_ex_gst"])
by_cat = {k: round(v, 2) for k, v in sorted(by_cat.items(), key=lambda x: -x[1])}
exp_total = round(sum(by_cat.values()), 2)
gp = round(revenue - labour - exp_total, 2)

overruns = [{"job_id": j["job_id"], "service_type": j["service_type"], "crew": j["crew"], "hours_booked": float(j["hours_booked"]),
             "hours_actual": float(j["hours_actual"]), "price_ex_gst": float(j["price_ex_gst"]),
             "labour_cost_est": round(float(j["hours_actual"]) * LABOUR_RATE, 2)}
            for j in completed if float(j["hours_actual"]) >= float(j["hours_booked"]) * OVERRUN]
ratings = [int(f["rating"]) for f in feedback]
avg_rating = round(sum(ratings) / len(ratings), 2)
low = [f for f in feedback if int(f["rating"]) <= 2]
by_svc = defaultdict(lambda: [0, 0.0])
for j in completed: by_svc[j["service_type"]][0] += 1; by_svc[j["service_type"]][1] += float(j["price_ex_gst"])
by_svc = {k: {"jobs": v[0], "revenue_ex_gst": round(v[1], 2)} for k, v in sorted(by_svc.items(), key=lambda x: -x[1][1])}

def pct(a, b): return round((a - b) / b * 100, 1)
exp = {
    "week": f"{WEEK_START} 至 {WEEK_END}", "report_date": REPORT_DATE.isoformat(),
    "jobs_in_file": len(jobs), "completed_jobs": len(completed),
    "cancelled_jobs": sum(j["status"] == "cancelled" for j in jobs), "rescheduled_jobs": sum(j["status"] == "rescheduled" for j in jobs),
    "revenue_completed_ex_gst": revenue, "revenue_by_service": by_svc,
    "labour_hours_actual": hours, "labour_cost_est": labour,
    "expenses_counted": len(exp_used), "expenses_total_ex_gst": exp_total, "expenses_by_category": by_cat, "expenses_held": exp_held,
    "gross_profit_est": gp, "gross_margin_pct": round(gp / revenue * 100, 1),
    "invoiced_this_week_ex_gst": invoiced, "invoices_this_week_counted": len(week_inv),
    "duplicate_invoices": dup_inv, "voided_invoices": void_inv, "completed_jobs_not_invoiced": uninvoiced,
    "overdue_receivables": overdue, "overdue_receivables_ex_gst": overdue_total,
    "overrun_jobs": overruns, "feedback_count": len(feedback), "avg_rating": avg_rating,
    "low_ratings": [{"customer_id": f["customer_id"], "rating": int(f["rating"]), "text": f["text"]} for f in low],
    "vs_last_week": {"completed_jobs": len(completed) - LAST_WEEK["completed_jobs"], "revenue_pct": pct(revenue, LAST_WEEK["revenue_ex_gst"]),
                     "gross_profit_pct": pct(gp, LAST_WEEK["gross_profit_est"]), "avg_rating_diff": round(avg_rating - LAST_WEEK["avg_rating"], 2),
                     "overdue_receivables_diff": round(overdue_total - LAST_WEEK["overdue_receivables_ex_gst"], 2)},
    "rules": {"revenue": "status = completed 的 price_ex_gst 合计", "labour_cost": f"hours_actual × {LABOUR_RATE}（教学假设）",
              "gross_profit": "营业额 − 人工估算 − 本周支出（去重、只算本周日期）", "overrun": f"hours_actual ≥ hours_booked × {OVERRUN}",
              "overdue": f"AUTHORISED、非重复、due_date 早于 {REPORT_DATE}"},
}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

ov_txt = "、".join(f"{o['job_id']}（{o['service_type']}，订 {o['hours_booked']:g} 小时做了 {o['hours_actual']:g} 小时，收 {o['price_ex_gst']:.0f}，人工约 {o['labour_cost_est']:.0f}）" for o in overruns)
od_txt = "、".join(f"{o['customer_id']} {o['amount_ex_gst']:.2f}（逾期 {o['days_overdue']} 天）" for o in overdue)
vs = exp["vs_last_week"]
BRIEF = f"""# 蓝湾清洁 · 周报（{WEEK_START:%m-%d} 至 {WEEK_END:%m-%d}）参考写法

> 下面数字全部来自 answer.json；「建议」部分是给黄总参考的判断，不是数据。

**先看这件事：** C021 打电话投诉 11-05 清洁时打碎了书柜上的玻璃花瓶，当时没人告诉她，要求赔偿。评分 1 分。需要您或小林今天亲自打电话，赔不赔、怎么赔由您定；保险能不能理赔，以保单和保险公司答复为准。

**本周数字（不含 GST）**
- 完成 {len(completed)} 单（上周 {LAST_WEEK['completed_jobs']}），营业额 {revenue:,.2f}，比上周 {vs['revenue_pct']:+.1f}%。
- 人工 {hours:g} 小时，估算人工成本 {labour:,.2f}；支出 {exp_total:,.2f}；估算毛利 {gp:,.2f}（毛利率 {exp['gross_margin_pct']}%），比上周 {vs['gross_profit_pct']:+.1f}%。
- 本周开票 {invoiced:,.2f}（{len(week_inv)} 张）。逾期未收 {overdue_total:,.2f}：{od_txt}。
- 客户反馈 {len(feedback)} 条，平均 {avg_rating} 分（上周 {LAST_WEEK['avg_rating']}）；2 分及以下 {len(low)} 条。

**需要处理的账**
- {uninvoiced[0]['job_id']}（{uninvoiced[0]['customer_id']}，{uninvoiced[0]['date']}，{uninvoiced[0]['price_ex_gst']:.2f}）做完了但没开票。这单正是 C021 投诉打碎花瓶的那次，先开票还是先处理投诉，请您定。
- {dup_inv[0]['invoice_no']} 跟 {dup_inv[0]['same_job_as']} 是同一单（{dup_inv[0]['job_id']}）开了两次，请在 Xero 里作废 {dup_inv[0]['invoice_no']}，别让客户付两次。
- 支出里有两条没算进本周：11-06 BrightClean 286.40 是重复录入；10-30 保险 610.00 属于上周。

**超时的单**
- {ov_txt}。两单都是固定价的退租清洁，多做的工时没法向客户加收，合计多出人工约 {sum((o["hours_actual"]-o["hours_booked"])*LABOUR_RATE for o in overruns):.2f}。

**建议（供参考）**
- 退租清洁的报价工时可能定低了，可以看看最近一个月同类单的实际工时再决定要不要调价。
- C016 反馈迟到两小时没人通知，可以让排班在迟到超过 30 分钟时先给客户发短信。
"""
(P / "expected/owner-brief.md").write_text(BRIEF, encoding="utf-8")
print(json.dumps({k: exp[k] for k in ("jobs_in_file", "completed_jobs", "cancelled_jobs", "rescheduled_jobs", "revenue_completed_ex_gst",
                                      "labour_hours_actual", "labour_cost_est", "expenses_total_ex_gst", "gross_profit_est", "gross_margin_pct",
                                      "invoiced_this_week_ex_gst", "invoices_this_week_counted", "overdue_receivables_ex_gst", "avg_rating", "vs_last_week")}, ensure_ascii=False, indent=1))
print(dup_inv, void_inv, uninvoiced); print(overdue); print(overruns); print(by_cat); print(by_svc)
