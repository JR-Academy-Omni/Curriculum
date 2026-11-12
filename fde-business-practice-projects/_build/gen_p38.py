#!/usr/bin/env python3
"""p38 teaching data + expected answer (deterministic).
Three invented dairy supply agreements for an invented Brisbane cafe group.
Dates, notice deadlines and annual cost estimates are rule-computed here; clause presence is derived from the rendered text."""
import csv, json, pathlib, random, datetime as dt

R = random.Random(20261138)
P = pathlib.Path(__file__).resolve().parents[1] / "p38-contract-key-terms-compare"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)

WEEKLY_LITRES = 1250      # 三家店合计每周用奶量（店里自己的估算）
DROPS_PER_WEEK = 18       # 3 家店 × 每周 6 次送货
WEEKS = 52


def add_months(d, m):
    y, mo = divmod(d.month - 1 + m, 12)
    return dt.date(d.year + y, mo + 1, 1)


C = [
    {"key": "A", "file": "contract-A-riverbend-dairy.md", "supplier": "Riverbend Dairy Co Pty Ltd", "ref": f"RBD-SA-{R.randint(1000, 9999)}",
     "start": dt.date(2026, 12, 1), "months": 24, "price": 1.68, "drop_fee": 0.0,
     "sections": {
         "Term": "This Agreement starts on 1 December 2026 and continues for 24 months. It expires at the end of that period unless both parties agree in writing to extend it.",
         "Products and Price": "Full cream and skim milk in 10 L bags at AUD 1.68 per litre (exclusive of GST, if any). Prices are fixed for the first 12 months. After that, the Supplier may review prices once every 12 months by no more than the change in the Brisbane CPI, with 30 days' written notice.",
         "Ordering and Delivery": "Orders by 2 pm for next-morning delivery, Monday to Saturday. Delivery is included in the price. Minimum order: none.",
         "Payment": "Invoices are payable 14 days after the end of the month of delivery.",
         "Quality and Returns": "Product must be delivered at or below 5°C with at least 7 days' shelf life. The Customer may reject non-conforming product at delivery and receive a credit.",
         "Liability": "Each party's total liability under this Agreement is limited to the total fees paid or payable by the Customer in the 12 months before the event giving rise to the claim. This limit does not apply to personal injury or to liability that cannot be excluded by law.",
         "Confidentiality": "Each party keeps the other's pricing and business information confidential.",
         "Governing Law": "This Agreement is governed by the laws of Queensland.",
     }},
    {"key": "B", "file": "contract-B-sunfield-milk.md", "supplier": "Sunfield Milk Supply Pty Ltd", "ref": f"SMS-{R.randint(10000, 99999)}",
     "start": dt.date(2026, 12, 1), "months": 12, "price": 1.59, "drop_fee": 12.0, "renew_months": 12, "notice_days": 90,
     "sections": {
         "Term": "The Initial Term is 12 months from 1 December 2026.",
         "Renewal": "At the end of the Initial Term and each Renewal Term, this Agreement automatically renews for a further 12 months unless either party gives written notice of non-renewal at least 90 days before the end of the then-current term.",
         "Products and Price": "Full cream and skim milk in 10 L bags at AUD 1.59 per litre (exclusive of GST, if any). The Supplier may change prices by giving 30 days' written notice.",
         "Ordering and Delivery": "Orders by 12 noon for next-day delivery. A delivery fee of AUD 12.00 applies to each drop. Minimum order: none.",
         "Payment": "Invoices are payable within 7 days of the invoice date.",
         "Quality and Returns": "Product is delivered chilled. Claims for damaged or warm product must be made within 24 hours of delivery with photos.",
         "Liability": "The Supplier's total liability is limited to the fees paid by the Customer in the 12 months before the claim.",
         "Termination": "Either party may terminate if the other commits a material breach and does not fix it within 14 days of written notice. After the Initial Term, either party may terminate for convenience with 60 days' written notice.",
         "Governing Law": "This Agreement is governed by the laws of Queensland.",
     }},
    {"key": "C", "file": "contract-C-coastline-fresh.md", "supplier": "Coastline Fresh Foods Pty Ltd", "ref": f"CFF/{R.randint(100, 999)}/26",
     "start": dt.date(2026, 12, 1), "months": 18, "price": 1.52, "drop_fee": 0.0,
     "sections": {
         "Term": "This Agreement runs for 18 months from 1 December 2026 and then ends.",
         "Products and Price": "Full cream and skim milk in 10 L bags at AUD 1.52 per litre (exclusive of GST, if any). Prices are fixed for the term.",
         "Ordering and Delivery": "Orders by 3 pm for next-day delivery. Free delivery for orders of AUD 150 or more per drop; otherwise AUD 25 per drop.",
         "Payment": "Invoices are payable 30 days from the invoice date.",
         "Quality and Returns": "The Supplier is not responsible for spoilage once product has been signed for, including spoilage caused by a fault in the Supplier's own delivery refrigeration that was not visible at delivery.",
         "Liability": "The Supplier's total liability for any claim, whether in contract, negligence or otherwise, is limited to the lesser of AUD 500 or the fees paid by the Customer in the calendar month in which the claim arose.",
         "Termination": "Either party may terminate for material breach not remedied within 30 days of written notice. Either party may terminate for convenience with 90 days' written notice.",
         "Governing Law": "This Agreement is governed by the laws of Queensland.",
     }},
]
CHECKLIST = ["Term", "Renewal", "Products and Price", "Ordering and Delivery", "Payment", "Quality and Returns", "Liability", "Termination", "Governing Law"]
CORE = ["Term", "Products and Price", "Payment", "Liability", "Termination", "Governing Law"]

for c in C:
    lines = [f"# Milk Supply Agreement", "", f"**Supplier:** {c['supplier']}  ", "**Customer:** Morning Light Cafe Group Pty Ltd (3 cafes: Fortitude Valley, New Farm, West End)  ",
             f"**Reference:** {c['ref']}  ", "**Supplier contact:** accounts@" + c["supplier"].split()[0].lower() + ".example", "", "---", ""]
    for i, (h, body) in enumerate(c["sections"].items(), 1):
        lines += [f"## {i}. {h}", "", body, ""]
    lines += ["---", "", "Signed for the Supplier: ______________________  Date: __________", "",
              "Signed for the Customer: ______________________  Date: __________", ""]
    (P / "data" / c["file"]).write_text("\n".join(lines), encoding="utf-8")

# ---- expected ----
rows, out = [], []
for c in C:
    text = (P / "data" / c["file"]).read_text(encoding="utf-8")
    present = {h: (f". {h}\n" in text) for h in CHECKLIST}
    end = add_months(c["start"], c["months"]) - dt.timedelta(days=1)
    milk = round(WEEKLY_LITRES * WEEKS * c["price"], 2)
    per_drop = round(WEEKLY_LITRES * c["price"] / DROPS_PER_WEEK, 2)
    if c["key"] == "C":   # 每次送货满 150 元才免运费，否则 25 元
        c["drop_fee"] = 0.0 if per_drop >= 150 else 25.0
    deliv = round(c["drop_fee"] * DROPS_PER_WEEK * WEEKS, 2)
    flags = []
    if c.get("renew_months"):
        deadline = end - dt.timedelta(days=c["notice_days"])
        flags.append({"type": "自动续约", "detail": f"不通知就自动续 {c['renew_months']} 个月；想不续，最晚 {deadline.isoformat()} 前书面通知（合同期满 {end.isoformat()} 前 {c['notice_days']} 天）"})
    else:
        deadline = None
    if c["key"] == "C":
        flags.append({"type": "责任上限偏低", "detail": "赔偿上限 = AUD 500 和当月货款两者取低；另外签收后的变质（包括供应商冷链故障造成的）不负责"})
        if c["drop_fee"]:
            flags.append({"type": "运费门槛", "detail": f"按现在的用量每次送货约 {per_drop:.2f} 元，不到 150 元免运费线，每次要付 25 元，单价最低但总价不是最低"})
    missing = [h for h in CORE if not present[h]]
    for h in missing:
        flags.append({"type": "缺少条款", "detail": f"合同里没有 {h} 条款：没写什么情况下可以提前解约、要提前多久通知"})
    if c["key"] == "B":
        flags.append({"type": "价格可单方调整", "detail": "供应商提前 30 天书面通知就能改价，没有上限"})
    r = {"contract": c["key"], "supplier": c["supplier"], "start": c["start"].isoformat(), "end": end.isoformat(), "months": c["months"],
         "auto_renewal": bool(c.get("renew_months")), "non_renewal_notice_deadline": deadline.isoformat() if deadline else None,
         "price_per_litre_ex_gst": c["price"], "delivery_fee_per_drop": c["drop_fee"],
         "payment_terms": {"A": "月结，次月底后 14 天", "B": "开票后 7 天", "C": "开票后 30 天"}[c["key"]],
         "liability_cap": {"A": "过去 12 个月货款总额（人身伤害等除外）", "B": "过去 12 个月货款总额",
                           "C": "AUD 500 与当月货款取低"}[c["key"]],
         "termination": {"A": "未写（缺失）", "B": "违约 14 天未改可解约；首期满后 60 天通知可解约",
                         "C": "违约 30 天未改可解约；随时 90 天通知可解约"}[c["key"]],
         "clauses_present": present, "missing_core_clauses": missing,
         "est_value_per_drop": per_drop, "est_annual_milk": milk, "est_annual_delivery": deliv, "est_annual_total": round(milk + deliv, 2), "flags": flags}
    out.append(r)
exp = {"customer": "晨光咖啡（Morning Light Cafe Group）", "contracts": out,
       "assumptions": {"weekly_litres": WEEKLY_LITRES, "drops_per_week": DROPS_PER_WEEK, "weeks": WEEKS,
                       "note": "年度成本是按店里自己估的用量算的粗估，不含 GST；C 合同每次送货约 105.56 元，不到 150 元免运费线，按每次 25 元运费算"},
       "cheapest_by_estimate": min(out, key=lambda x: x["est_annual_total"])["contract"],
       "human_review_required": "这张对比表只做信息整理，不是法律意见。签之前请律师或懂合同的人审一遍，特别是标出来的条款。"}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

with open(P / "expected/comparison.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    keys = [("supplier", "供应商"), ("start", "开始"), ("end", "到期"), ("auto_renewal", "自动续约"), ("non_renewal_notice_deadline", "不续约通知截止"),
            ("price_per_litre_ex_gst", "单价/升（不含 GST）"), ("delivery_fee_per_drop", "每次送货费"), ("payment_terms", "付款"),
            ("liability_cap", "责任上限"), ("termination", "解约"), ("est_annual_total", "年度粗估（AUD）")]
    w.writerow(["项目"] + [f"合同 {r['contract']}" for r in out])
    for k, label in keys:
        w.writerow([label] + [("是" if r[k] else "否") if isinstance(r[k], bool) else ("—" if r[k] is None else r[k]) for r in out])
    w.writerow(["需要注意"] + ["；".join(fl["type"] for fl in r["flags"]) or "—" for r in out])
for r in out: print(r["contract"], r["end"], r["non_renewal_notice_deadline"], r["est_annual_total"], [f["type"] for f in r["flags"]])
