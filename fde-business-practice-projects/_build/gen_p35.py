#!/usr/bin/env python3
"""p35 teaching data + expected answer (deterministic). Fictional Sydney beauty salon, fictional members and POS export."""
import csv, json, pathlib, random
from collections import Counter, defaultdict
from decimal import Decimal, ROUND_HALF_UP

R = random.Random(20261135)
P = pathlib.Path(__file__).resolve().parents[1] / "p35-beauty-member-monthly-report"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(parents=True, exist_ok=True)
MONTH = "2026-10"

SERVICES = {  # name: (category, price)
    "深层清洁护理": ("面部", 128), "补水护理": ("面部", 158), "小气泡清洁": ("面部", 98),
    "睫毛嫁接": ("睫毛", 120), "睫毛补睫": ("睫毛", 68),
    "单色美甲": ("美甲", 55), "法式美甲": ("美甲", 75), "卸甲": ("美甲", 20),
    "肩颈按摩 60 分钟": ("身体", 89), "全身精油 90 分钟": ("身体", 139),
}
TOPUPS = {"充 500 送 50": (500, 550), "充 1000 送 150": (1000, 1150)}  # teaching assumption
STAFF = ["Coco", "小雅", "Mia", "阿敏"]
MEMBERS = [  # id, name, tier, join_date, opening_balance (2026-10-01), favourite
    ("M1001", "王静", "金卡", "2024-03-12", 620.00, "补水护理"), ("M1002", "李娜", "银卡", "2025-01-08", 180.00, "单色美甲"),
    ("M1003", "Emily Chen", "金卡", "2023-11-20", 940.00, "睫毛嫁接"), ("M1004", "张晓梅", "银卡", "2025-06-30", 0.00, "法式美甲"),
    ("M1005", "Sophie Ho", "银卡", "2024-09-02", 260.00, "深层清洁护理"), ("M1006", "陈丽", "金卡", "2023-05-15", 1210.00, "全身精油 90 分钟"),
    ("M1007", "刘欣", "银卡", "2026-02-11", 95.00, "睫毛补睫"), ("M1008", "赵敏", "银卡", "2025-10-19", 80.00, "睫毛补睫"),
    ("M1009", "Grace Lam", "金卡", "2024-07-07", 430.00, "小气泡清洁"), ("M1010", "周婷", "银卡", "2025-03-03", 0.00, "单色美甲"),
    ("M1011", "孙悦", "银卡", "2024-12-24", 150.00, "肩颈按摩 60 分钟"), ("M1012", "Hannah Lee", "金卡", "2023-08-28", 760.00, "补水护理"),
    ("M1013", "吴倩", "银卡", "2026-10-09", 0.00, "睫毛嫁接"), ("M1014", "郑雪", "银卡", "2025-04-17", 210.00, "深层清洁护理"),
    ("M1015", "Olivia Tran", "银卡", "2025-08-05", 120.00, "法式美甲"),
]
NO_VISIT = {"M1010", "M1015"}
rows = []; n = 0


def add(day, hh, mid, typ, item, pay, status="completed"):
    global n; n += 1
    if typ == "service":
        cat, price = SERVICES[item]; amt, credit = price, ""
    else:
        cat = "充值"; amt, credit = TOPUPS[item]
    rows.append({"txn_id": f"T{10500 + n}", "datetime": f"{MONTH}-{day:02d} {hh:02d}:{R.randint(0, 5) * 10:02d}", "member_id": mid,
                 "type": typ, "item": item, "category": cat, "amount": f"{amt:.2f}", "credit": f"{credit:.2f}" if credit != "" else "",
                 "payment": pay, "staff": R.choice(STAFF), "status": status})


bal = {m[0]: m[4] for m in MEMBERS}
for mid, name, tier, join, opening, fav in MEMBERS:
    if mid in NO_VISIT: continue
    visits = R.randint(1, 4) if tier == "银卡" else R.randint(2, 5)
    if mid == "M1013": visits = 2
    days = sorted(R.sample(range(9 if mid == "M1013" else 1, 32), visits))
    if mid in ("M1004", "M1013", "M1009"):
        add(days[0], 10, mid, "topup", "充 500 送 50" if mid != "M1009" else "充 1000 送 150", "card")
        bal[mid] += 550 if mid != "M1009" else 1150
    for d in days:
        items = [fav] + ([R.choice(list(SERVICES))] if R.random() < 0.35 else [])
        for it in items:
            price = SERVICES[it][1]
            pay = "prepaid" if bal[mid] >= price and R.random() < 0.8 else R.choice(["card", "card", "cash"])
            if pay == "prepaid": bal[mid] -= price
            add(d, R.choice([10, 11, 13, 14, 15, 16, 17, 18]), mid, "service", it, pay)
# walk-ins (non-members)
for _ in range(9):
    it = R.choice(["单色美甲", "肩颈按摩 60 分钟", "小气泡清洁", "卸甲", "法式美甲"])
    add(R.randint(1, 31), R.choice([11, 13, 15, 17]), "", "service", it, R.choice(["card", "cash"]))
# ---- planted problems ----
add(14, 15, "M1008", "service", "睫毛补睫", "prepaid"); add(28, 16, "M1008", "service", "睫毛补睫", "prepaid")   # P1 prepaid overdraw
add(9, 14, "M1002", "service", "法式美甲", "card", status="refunded")                                          # P2 refunded
add(17, 11, "M1006", "service", "补水护理", "prepaid", status="voided")                                          # P2 voided (wrong item rung)
add(21, 13, "M099", "service", "深层清洁护理", "card")                                                           # P3 unknown member id
rows.append(dict(rows[12]))                                                                                     # P4 duplicate export line
add(1, 10, "M1012", "service", "补水护理", "prepaid"); rows[-1]["datetime"] = "2026-11-01 10:20"                # P5 next month's txn
rows.sort(key=lambda r: (r["datetime"], r["txn_id"]))
assert all(r["datetime"][:10] >= "2026-10-09" for r in rows if r["member_id"] == "M1013")
with open(P / f"data/pos-transactions-{MONTH}.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
with open(P / "data/members.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["member_id", "name", "tier", "join_date", "opening_balance_2026_10_01", "favourite_service"])
    for m in MEMBERS: w.writerow([m[0], m[1], m[2], m[3], f"{m[4]:.2f}", m[5]])

# ---------- expected ----------
D = lambda x: Decimal(x).quantize(Decimal("0.01"), ROUND_HALF_UP)
mem = {m[0]: m for m in MEMBERS}
seen, clean, issues = set(), [], []
for r in rows:
    if r["txn_id"] in seen: issues.append({"txn_id": r["txn_id"], "type": "重复导出", "reason": "同一 txn_id 出现两次，只算一次"}); continue
    seen.add(r["txn_id"])
    if not r["datetime"].startswith(MONTH): issues.append({"txn_id": r["txn_id"], "type": "不在本月", "reason": f"日期是 {r['datetime'][:10]}，归到下个月"}); continue
    if r["status"] != "completed": issues.append({"txn_id": r["txn_id"], "type": "非完成交易", "reason": f"状态为 {r['status']}，不计入"}); continue
    if r["member_id"] and r["member_id"] not in mem:
        issues.append({"txn_id": r["txn_id"], "type": "会员号不存在", "reason": f"{r['member_id']} 不在会员表里，不进会员月报，请前台核对是谁"}); continue
    clean.append(r)
st = defaultdict(lambda: {"visit_days": set(), "service_spend": Decimal(0), "prepaid_used": Decimal(0), "topup_paid": Decimal(0),
                          "topup_credit": Decimal(0), "services": Counter()})
cat_spend, svc_count, cash_in = defaultdict(Decimal), Counter(), {"card": Decimal(0), "cash": Decimal(0)}
walkin = Decimal(0)
for r in clean:
    amt = Decimal(r["amount"])
    if r["type"] == "service":
        cat_spend[r["category"]] += amt; svc_count[r["item"]] += 1
        if r["payment"] in cash_in: cash_in[r["payment"]] += amt
        if not r["member_id"]: walkin += amt; continue
        s = st[r["member_id"]]; s["visit_days"].add(r["datetime"][:10]); s["service_spend"] += amt; s["services"][r["item"]] += 1
        if r["payment"] == "prepaid": s["prepaid_used"] += amt
    else:
        s = st[r["member_id"]]; s["topup_paid"] += amt; s["topup_credit"] += Decimal(r["credit"]); cash_in[r["payment"]] += amt
statements = []
for mid, name, tier, join, opening, fav in MEMBERS:
    s = st[mid]; close = Decimal(str(opening)) + s["topup_credit"] - s["prepaid_used"]
    note = []
    if close < 0: note.append(f"余额为负 {D(close)}：储值不够还被扣了，请核对 POS 是否允许透支、要不要补收")
    if not s["visit_days"]: note.append("本月没来")
    if join.startswith(MONTH): note.append("本月新会员")
    statements.append({"member_id": mid, "name": name, "tier": tier, "visits": len(s["visit_days"]), "service_spend": f"{D(s['service_spend'])}",
                       "prepaid_used": f"{D(s['prepaid_used'])}", "topup_paid": f"{D(s['topup_paid'])}", "topup_credit": f"{D(s['topup_credit'])}",
                       "opening_balance": f"{D(opening)}", "closing_balance": f"{D(close)}",
                       "top_service": max(s["services"], key=lambda k: (s["services"][k], SERVICES[k][1])) if s["services"] else "", "note": " / ".join(note)})
with open(P / "expected/member-statements.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(statements[0])); w.writeheader(); w.writerows(statements)
member_spend = sum(Decimal(s["service_spend"]) for s in statements)
exp = {"month": MONTH, "rows_in_file": len(rows), "rows_counted": len(clean), "issues": issues,
       "store": {"service_spend_total": f"{D(sum(cat_spend.values()))}", "member_service_spend": f"{D(member_spend)}", "walk_in_service_spend": f"{D(walkin)}",
                 "by_category": {k: f"{D(v)}" for k, v in sorted(cat_spend.items(), key=lambda x: -x[1])},
                 "cash_received": {"card": f"{D(cash_in['card'])}", "cash": f"{D(cash_in['cash'])}", "total": f"{D(cash_in['card'] + cash_in['cash'])}"},
                 "prepaid_used_total": f"{D(sum(Decimal(s['prepaid_used']) for s in statements))}",
                 "topup_paid_total": f"{D(sum(Decimal(s['topup_paid']) for s in statements))}",
                 "topup_credit_total": f"{D(sum(Decimal(s['topup_credit']) for s in statements))}",
                 "closing_balance_total": f"{D(sum(Decimal(s['closing_balance']) for s in statements))}",
                 "active_members": sum(1 for s in statements if s["visits"] > 0), "members_no_visit": [s["member_id"] for s in statements if s["visits"] == 0],
                 "new_members": [s["member_id"] for s in statements if "本月新会员" in s["note"]],
                 "negative_balance": [s["member_id"] for s in statements if Decimal(s["closing_balance"]) < 0],
                 "top3_services": svc_count.most_common(3)},
       "rules": {"counted": "status = completed、txn_id 不重复、日期在 2026-10、会员号在会员表里（空 = 散客，进门店合计不进会员月报）",
                 "service_spend": "服务项目的标价合计，不管用什么付", "cash_received": "刷卡 + 现金实收 = 服务刷卡现金 + 充值实付",
                 "top_service": "次数最多的项目；次数一样取单价高的",
                 "closing_balance": "期初余额 + 充值到账（含赠送）− 储值扣款", "topup_bonus": "充 500 送 50、充 1000 送 150（教学假设）"}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps(exp["store"], ensure_ascii=False, indent=1)); print(len(rows), len(clean))
for i in issues: print(i)
for s in statements: print(s)
