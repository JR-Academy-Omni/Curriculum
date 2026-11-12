#!/usr/bin/env python3
"""p01 teaching data + expected answer (deterministic). Fictional restaurant, fictional orders."""
import csv, json, pathlib, random
from collections import Counter, defaultdict
R = random.Random(20261111)
P = pathlib.Path(__file__).resolve().parents[1] / "p01-restaurant-delivery-daily-report"
MENU = {"宫保鸡丁饭": 18.9, "牛肉面": 17.5, "麻婆豆腐饭": 16.9, "蒜蓉炒青菜": 12.0, "小笼包（6 只）": 13.5,
        "酸辣汤": 8.5, "扬州炒饭": 16.0, "椒盐鸡翅（6 只）": 14.9, "珍珠奶茶": 6.8, "红油抄手": 15.5}
FEE = {"Uber Eats": 0.30, "DoorDash": 0.28, "Menulog": 0.25}  # teaching assumption: commission rate
rows = []
n = 0
for plat, cnt in (("Uber Eats", 34), ("DoorDash", 26), ("Menulog", 18)):
    for _ in range(cnt):
        n += 1
        hour = R.choices([11, 12, 13, 14, 17, 18, 19, 20, 21], [6, 14, 9, 3, 4, 12, 15, 8, 3])[0]
        t = f"2026-11-10 {hour:02d}:{R.randint(0,59):02d}"
        k = R.randint(1, 3)
        items = R.sample(list(MENU), k)
        qty = [R.choice([1, 1, 1, 2]) for _ in items]
        sub = round(sum(MENU[i] * q for i, q in zip(items, qty)), 2)
        disc = round(sub * 0.1, 2) if R.random() < 0.15 else 0.0
        rows.append({"platform": plat, "order_id": f"{plat[:2].upper()}-{10200+n}", "order_time": t,
                     "items": "; ".join(f"{i} x{q}" for i, q in zip(items, qty)),
                     "subtotal": f"{sub:.2f}", "discount": f"{disc:.2f}", "status": "completed"})
# planted anomalies
rows[5]["status"] = "cancelled"
rows[40]["status"] = "refunded"
rows[61]["subtotal"] = ""
dup = dict(rows[20]); rows.append(dup)            # duplicate export line
rows.sort(key=lambda r: r["order_time"])
(P / "data").mkdir(parents=True, exist_ok=True)
with open(P / "data/orders-2026-11-10.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
# expected answer
seen, clean, issues = set(), [], []
for r in rows:
    if r["order_id"] in seen: issues.append(("重复导出", r["order_id"], "同一订单号出现两次，只算一次")); continue
    seen.add(r["order_id"])
    if r["status"] != "completed": issues.append(("非完成订单", r["order_id"], f"状态为 {r['status']}，不计入收入")); continue
    if not r["subtotal"]: issues.append(("金额缺失", r["order_id"], "subtotal 为空，需回平台后台核对，暂不计入")); continue
    clean.append(r)
by = defaultdict(lambda: {"orders": 0, "gross": 0.0, "discount": 0.0})
dish, hours = Counter(), Counter()
for r in clean:
    b = by[r["platform"]]; b["orders"] += 1; b["gross"] += float(r["subtotal"]); b["discount"] += float(r["discount"])
    hours[r["order_time"][11:13]] += 1
    for part in r["items"].split("; "):
        name, q = part.rsplit(" x", 1); dish[name] += int(q)
table = []
for plat in FEE:
    b = by[plat]; net_sales = b["gross"] - b["discount"]; comm = net_sales * FEE[plat]
    table.append({"platform": plat, "orders": b["orders"], "gross": round(b["gross"], 2), "discount": round(b["discount"], 2),
                  "net_sales": round(net_sales, 2), "est_commission": round(comm, 2), "est_payout": round(net_sales - comm, 2)})
tot = {k: round(sum(t[k] for t in table), 2) for k in ("orders", "gross", "discount", "net_sales", "est_commission", "est_payout")}
exp = {"orders_in_file": len(rows), "orders_counted": len(clean), "by_platform": table, "total": tot,
       "top5_dishes": dish.most_common(5), "busiest_hours": sorted(hours.items(), key=lambda x: -x[1])[:3], "issues": issues}
(P / "expected").mkdir(exist_ok=True)
json.dump(exp, open(P / "expected/answer.json", "w"), ensure_ascii=False, indent=1)
print(json.dumps(exp, ensure_ascii=False)[:900])
