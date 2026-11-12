#!/usr/bin/env python3
"""p43 teaching data + expected answer (deterministic).
Invented Melbourne interior-design studio comparing supplier quotes for three purchase requests.
Quote validity, landed ex-GST totals, recommendation and approval route are rule-computed here.
The approval memos in expected/approval-messages.md are hand-written reference outputs."""
import csv, json, pathlib, random, datetime as dt

R = random.Random(20261143)
P = pathlib.Path(__file__).resolve().parents[1] / "p43-supplier-quote-comparison-approval"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)

DECISION_DATE = dt.date(2026, 11, 12)
GST_RATE = 0.10            # 教学假设：GST 10%；真实以发票为准
MANAGER_LIMIT = 5000.00    # ≤ 5,000 运营经理 Karen 批；> 5,000 再给老板 Leo
THREE_QUOTE_LINE = 2000.00 # 推荐总额 ≥ 2,000 需要至少 3 家有效报价

REQUESTS = [  # pr_id, item, spec_required, qty, needed_by, budget_ex_gst, requester
    ("PR-01", "设计师笔记本电脑", "i7 / 32GB / 1TB SSD / 14 寸", 6, "2026-12-01", 13500.00, "Zoe Zhou（办公室协调）"),
    ("PR-02", "多功能打印机", "A3 / 彩色 / 双面 / 扫描", 1, "2026-11-25", 2500.00, "Zoe Zhou（办公室协调）"),
    ("PR-03", "人体工学办公椅", "可调扶手 / 腰托 / 承重 120kg", 10, "2026-11-28", 4000.00, "Zoe Zhou（办公室协调）"),
]

SUPPLIERS = [  # supplier, approved, contact_email, payment_terms
    ("TechHub Melbourne", "yes", "sales@techhub-mel.example", "30 天"),
    ("Pacific IT Supplies", "yes", "quotes@pacific-it.example", "14 天"),
    ("Southbank Computers", "yes", "orders@southbank-pc.example", "30 天"),
    ("Eastern Office Tech", "yes", "hello@eastern-officetech.example", "30 天"),
    ("Harbour Office Supplies", "yes", "sales@harbour-office.example", "30 天"),
    ("PrintWorks Vic", "yes", "info@printworks-vic.example", "14 天"),
    ("Copy&Co", "yes", "team@copyandco.example", "30 天"),
    ("ErgoSeat", "yes", "trade@ergoseat.example", "30 天"),
    ("Chair Depot", "yes", "sales@chairdepot.example", "货到付款"),
    ("Comfort Office", "yes", "orders@comfort-office.example", "30 天"),
    ("SitWell Furniture", "yes", "b2b@sitwell.example", "14 天"),
]
APPROVED = {s[0] for s in SUPPLIERS if s[1] == "yes"}

# quote_id, pr_id, supplier, received_day, price_basis, unit_price, qty_quoted, delivery_fee, lead_time_days,
# warranty_months, valid_until, spec_offered, notes
QUOTES = [
    ("Q01", "PR-01", "TechHub Melbourne", 5, "ex GST", 2050.00, 6, "0", 5, 36, "2026-11-30", "i7 / 32GB / 1TB SSD / 14 寸", "含开机预装"),
    ("Q02", "PR-01", "Pacific IT Supplies", 6, "inc GST", 2299.00, 6, "66", 6, 36, "2026-11-28", "i7 / 32GB / 1TB SSD / 14 寸", "价格含 GST"),
    ("Q03", "PR-01", "BudgetPC Direct", 7, "ex GST", 1780.00, 6, "45", 4, 12, "2026-11-20", "i7 / 32GB / 1TB SSD / 14 寸", "首次合作，可先付款后发货"),
    ("Q04", "PR-01", "Southbank Computers", 7, "ex GST", 1690.00, 6, "0", 3, 24, "2026-11-25", "i7 / 16GB / 1TB SSD / 14 寸", "现货"),
    ("Q05", "PR-01", "TechHub Melbourne", 10, "ex GST", 1995.00, 6, "0", 5, 36, "2026-11-30", "i7 / 32GB / 1TB SSD / 14 寸", "11-05 报价的修订版，6 台起每台再减 55"),
    ("Q06", "PR-01", "Eastern Office Tech", 8, "ex GST", 2180.00, 6, "0", 7, 36, "2026-12-05", "i7 / 32GB / 1TB SSD / 14 寸", ""),
    ("Q07", "PR-02", "Harbour Office Supplies", 4, "ex GST", 1850.00, 1, "120", 3, 12, "2026-11-30", "A3 / 彩色 / 双面 / 扫描", "送货上楼另计"),
    ("Q08", "PR-02", "PrintWorks Vic", 1, "ex GST", 1760.00, 1, "0", 2, 12, "2026-11-05", "A3 / 彩色 / 双面 / 扫描", "促销价"),
    ("Q09", "PR-02", "Copy&Co", 6, "inc GST", 2090.00, 1, "0", 4, 24, "2026-11-27", "A3 / 彩色 / 双面 / 扫描", "价格含 GST、含送货和安装"),
    ("Q10", "PR-03", "ErgoSeat", 3, "ex GST", 345.00, 10, "80", 10, 60, "2026-11-30", "可调扶手 / 腰托 / 承重 120kg", ""),
    ("Q11", "PR-03", "Chair Depot", 5, "ex GST", 320.00, 10, "", 6, 24, "2026-11-26", "可调扶手 / 腰托 / 承重 120kg", "运费按楼层另报"),
    ("Q12", "PR-03", "Comfort Office", 6, "inc GST", 359.00, 10, "0", 21, 60, "2026-12-10", "可调扶手 / 腰托 / 承重 120kg", "价格含 GST，工厂直发"),
    ("Q13", "PR-03", "SitWell Furniture", 8, "ex GST", 299.00, 6, "0", 5, 36, "2026-11-30", "可调扶手 / 腰托 / 承重 120kg", "现货只剩 6 把"),
]

rows = []
for q in QUOTES:
    hh, mm = R.randint(8, 17), R.choice([0, 10, 15, 20, 30, 40, 45, 50])
    rows.append({"quote_id": q[0], "pr_id": q[1], "supplier": q[2],
                 "received_at": f"2026-11-{q[3]:02d} {hh:02d}:{mm:02d}", "price_basis": q[4],
                 "unit_price": f"{q[5]:.2f}", "qty_quoted": q[6], "delivery_fee": q[7], "lead_time_days": q[8],
                 "warranty_months": q[9], "valid_until": q[10], "spec_offered": q[11], "notes": q[12]})

with open(P / "data/purchase-requests.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["pr_id", "item", "spec_required", "qty", "needed_by", "budget_ex_gst", "requester"])
    for r in REQUESTS: w.writerow([*r[:5], f"{r[5]:.2f}", r[6]])
with open(P / "data/quotes.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
with open(P / "data/approved-suppliers.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["supplier", "approved", "contact_email", "payment_terms"]); w.writerows(SUPPLIERS)

POLICY = """# 森屿室内设计 · 采购比价规则（练习数据，规则是这家工作室自己定的）

## 比什么
- 一律比「不含 GST 的到手总价」= 单价 × 需求数量 + 运费。
- 报价写 inc GST 的，单价和运费都除以 1.1 换成不含 GST（教学假设 GST 10%；有些商品可能不含 GST，以供应商发票为准）。
- 保修期、付款条件写进推荐理由，但不改变排序。

## 哪些报价不能参与比价
1. 同一家供应商对同一个需求发了多份报价：只看最新收到的那份，旧的标「被修订版替代」。
2. 已过有效期（valid_until 早于比价当天）。
3. 报价数量少于需求数量。
4. 规格不满足需求单上写的每一项。
5. 交期赶不上：比价当天 + lead_time_days 晚于 needed_by。
6. 运费没写（空着）：资料不全，先问清楚，不能当 0 算。
7. 供应商不在 approved-suppliers.csv 名单里：不推荐；真想用，先走新供应商审核（ABN、银行信息、合同），由运营经理决定。

## 推荐和审批
- 有效报价里选到手总价最低的；一样低选交期短的。
- 推荐总额 ≥ 2,000：至少要有 3 家有效报价。不够 3 家照样给出推荐，但要写明原因，并交老板决定是直接买还是再补报价。
- 推荐总额 ≤ 5,000：运营经理 Karen Li 批准即可。
- 推荐总额 > 5,000，或超出需求单预算，或有效报价不足 3 家：Karen 确认后，再由老板 Leo Chen 批准。
- 批准之前，不给任何供应商回复「选你了」，也不下单。
"""
(P / "data/purchasing-policy.md").write_text(POLICY, encoding="utf-8")

# ---- expected ----
req = {r[0]: r for r in REQUESTS}
latest = {}
for r in rows:
    k = (r["pr_id"], r["supplier"])
    if k not in latest or r["received_at"] > latest[k]["received_at"]: latest[k] = r


def ex_gst(v, basis):
    return round(float(v) / (1 + GST_RATE), 2) if basis == "inc GST" else round(float(v), 2)


decisions = []
for r in rows:
    pr = req[r["pr_id"]]; qty_need = pr[3]
    unit_ex = ex_gst(r["unit_price"], r["price_basis"])
    deliv_ex = ex_gst(r["delivery_fee"], r["price_basis"]) if r["delivery_fee"] != "" else None
    landed = round(unit_ex * qty_need + deliv_ex, 2) if deliv_ex is not None else None
    arrive = DECISION_DATE + dt.timedelta(days=int(r["lead_time_days"]))
    reasons = []
    if latest[(r["pr_id"], r["supplier"])] is not r:
        reasons.append(f"被同一供应商 {latest[(r['pr_id'], r['supplier'])]['quote_id']} 修订版替代")
    else:
        if r["valid_until"] < DECISION_DATE.isoformat(): reasons.append(f"已过有效期（{r['valid_until']}）")
        if int(r["qty_quoted"]) < qty_need: reasons.append(f"只报了 {r['qty_quoted']} 件，需要 {qty_need} 件")
        need_spec = [s.strip() for s in pr[2].split("/")]; got = [s.strip() for s in r["spec_offered"].split("/")]
        miss = [s for s in need_spec if s not in got]
        if miss: reasons.append(f"规格不符：缺 {'、'.join(miss)}（报的是 {r['spec_offered']}）")
        if arrive.isoformat() > pr[4]: reasons.append(f"交期赶不上：预计 {arrive.isoformat()} 到，需求是 {pr[4]} 前")
        if deliv_ex is None: reasons.append("运费没写，资料不全")
        if r["supplier"] not in APPROVED: reasons.append("不在合格供应商名单，需先走新供应商审核")
    decisions.append({"quote_id": r["quote_id"], "pr_id": r["pr_id"], "supplier": r["supplier"],
                      "unit_ex_gst": unit_ex, "delivery_ex_gst": deliv_ex, "landed_ex_gst": landed,
                      "est_arrival": arrive.isoformat(), "valid": not reasons, "reasons": reasons})

prs = []
for pr in REQUESTS:
    ds = sorted([d for d in decisions if d["pr_id"] == pr[0] and d["valid"]],
                key=lambda d: (d["landed_ex_gst"], int(next(r for r in rows if r["quote_id"] == d["quote_id"])["lead_time_days"])))
    win = ds[0]
    total = win["landed_ex_gst"]
    flags = []
    if total >= THREE_QUOTE_LINE and len(ds) < 3: flags.append(f"有效报价只有 {len(ds)} 家，规则要求 3 家")
    if total > pr[5]: flags.append(f"超出预算 {pr[5]:.2f}")
    needs_owner = total > MANAGER_LIMIT or bool(flags)
    prs.append({"pr_id": pr[0], "item": pr[1], "qty": pr[3], "budget_ex_gst": pr[5],
                "valid_quotes_ranked": [{"quote_id": d["quote_id"], "supplier": d["supplier"], "landed_ex_gst": d["landed_ex_gst"]} for d in ds],
                "recommended_quote": win["quote_id"], "recommended_supplier": win["supplier"],
                "recommended_total_ex_gst": total, "recommended_total_inc_gst_est": round(total * (1 + GST_RATE), 2),
                "saving_vs_next_ex_gst": round(ds[1]["landed_ex_gst"] - total, 2) if len(ds) > 1 else None,
                "flags": flags, "needs_owner_approval": needs_owner,
                "approval_route": "Karen 确认 → Leo 批准" if needs_owner else "Karen 批准"})

exp = {"decision_date": DECISION_DATE.isoformat(), "requests": len(REQUESTS), "quotes_in_file": len(rows),
       "valid_quotes": sum(d["valid"] for d in decisions), "excluded_quotes": sum(not d["valid"] for d in decisions),
       "purchase_requests": prs, "quote_checks": decisions,
       "total_recommended_ex_gst": round(sum(p["recommended_total_ex_gst"] for p in prs), 2),
       "rules": {"landed": "unit_ex_gst × 需求数量 + delivery_ex_gst", "gst": "inc GST ÷ 1.1（教学假设）",
                 "manager_limit": MANAGER_LIMIT, "three_quote_line": THREE_QUOTE_LINE}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["quote_id", "pr_id", "supplier", "unit_ex_gst", "landed_ex_gst", "est_arrival", "decision", "reason"])
    rec = {p["recommended_quote"] for p in prs}
    for d in decisions:
        dec = "推荐" if d["quote_id"] in rec else ("有效，未选" if d["valid"] else "排除")
        w.writerow([d["quote_id"], d["pr_id"], d["supplier"], f"{d['unit_ex_gst']:.2f}",
                    "" if d["landed_ex_gst"] is None else f"{d['landed_ex_gst']:.2f}", d["est_arrival"], dec,
                    "；".join(d["reasons"]) if d["reasons"] else ("到手价最低" if dec == "推荐" else "有效报价，价格不是最低")])

MEMOS = """# P43 参考输出：审批消息和给 Zoe 的待办（手写参考，数字以 answer.json 为准）

## PR-01 设计师笔记本电脑 ×6 → 发给 Karen，确认后转 Leo

推荐 TechHub Melbourne（Q05，11-10 的修订版），6 台不含 GST 到手 11,970.00，估算含 GST 13,167.00，在预算 13,500 以内。
比第二名 Pacific IT（12,600.00）便宜 630.00。三家有效报价：TechHub 11,970.00 / Pacific IT 12,600.00 / Eastern Office Tech 13,080.00。
保修 36 个月，付款 30 天，预计 11-17 到货。
没参与比价的：TechHub 11-05 的旧报价（被修订版替代）；Southbank 1,690 一台最便宜，但只有 16GB 内存，不满足 32GB；BudgetPC 报价不在合格供应商名单里，还要求先付款。
总额超过 5,000，Karen 确认后需要 Leo 批准。

## PR-02 多功能打印机 ×1 → 发给 Karen

推荐 Copy&Co（Q09），不含 GST 到手 1,900.00（报价 2,090 是含 GST 的，已含送货安装）。
Harbour 单价 1,850 看着便宜，加上 120 运费是 1,970.00，比 Copy&Co 贵 70。PrintWorks 1,760 的促销报价 11-05 已经过期。
总额不到 2,000，两家有效报价符合规则；不到 5,000，Karen 批准即可。

## PR-03 人体工学办公椅 ×10 → 发给 Karen，确认后转 Leo

推荐 ErgoSeat（Q10），不含 GST 到手 3,530.00，预算 4,000 以内，预计 11-22 到货，保修 60 个月。
但这次只有 1 家有效报价，规则要求 3 家，所以交给 Leo 决定：直接买，还是等 Zoe 补齐资料再比。
另外三家的情况：Chair Depot 单价 320 更低，但运费没写，补上运费前没法比（运费低于 330 就会比 ErgoSeat 便宜）；Comfort Office 工厂直发 21 天，12-03 才到，赶不上 11-28；SitWell 只剩 6 把，不够 10 把。

## 给 Zoe 的待办（不经审批，内部提醒）

1. 问 Chair Depot 送到 Richmond 办公室（我们在 2 楼）的运费，拿到后回填 quotes.csv 再跑一次。
2. 如果 Leo 想考虑 BudgetPC，需要先走新供应商审核；在那之前不要回复对方。
3. 审批通过前，不给任何供应商回复结果。
"""
(P / "expected/approval-messages.md").write_text(MEMOS, encoding="utf-8")
print(json.dumps({k: exp[k] for k in ("quotes_in_file", "valid_quotes", "excluded_quotes", "total_recommended_ex_gst")}, ensure_ascii=False))
for p in prs: print(p["pr_id"], p["recommended_quote"], p["recommended_total_ex_gst"], p["approval_route"], p["flags"], p["valid_quotes_ranked"])
for d in decisions: print(d["quote_id"], d["landed_ex_gst"], d["est_arrival"], d["valid"], d["reasons"])
