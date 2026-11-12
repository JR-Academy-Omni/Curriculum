#!/usr/bin/env python3
"""p05 teaching data + expected answer (deterministic). Fictional bakery client, fictional bank lines.

The classification table CLASSIFY below is the expected judgement output (account / GST first pass / review),
written by the assistant session following the README prompt; totals are computed from it by code.
"""
import csv, json, pathlib, random
from collections import defaultdict
R = random.Random(20261105)
P = pathlib.Path(__file__).resolve().parents[1] / "p05-bookkeeping-bank-categorise"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)

COA = [  # code, name, default GST first pass (teaching assumption), note
    ("200", "销售收入", "混合，按 POS 报表拆分", "面包店卖的东西有的免 GST（如普通面包），有的含 GST（如咖啡、热食），银行到账看不出比例"),
    ("310", "原材料采购", "看发票", "面粉、鸡蛋等基本食品多数免 GST，黄油调味料等要看税务发票"),
    ("320", "包装耗材", "含 GST", ""),
    ("400", "租金", "含 GST", "商铺租金一般含 GST，以租约和发票为准"),
    ("410", "水电燃气", "电和燃气含 GST；水费多数免 GST", "以账单为准"),
    ("420", "银行手续费", "无 GST", "金融服务费，不能抵进项税"),
    ("430", "电话网络", "含 GST", ""),
    ("440", "软件订阅", "含 GST", "海外软件是否收澳洲 GST 以发票为准"),
    ("450", "设备维修", "含 GST", ""),
    ("460", "保险", "含 GST", "保费中的印花税部分不含 GST，以保单为准"),
    ("470", "车辆油费", "含 GST", "只能按业务用途比例抵扣，比例由会计确认"),
    ("477", "工资", "不涉及 GST（BAS 外）", "工资单另走 PAYG 申报"),
    ("478", "养老金", "不涉及 GST（BAS 外）", ""),
    ("800", "ATO 税款", "不涉及 GST（BAS 外）", "缴 BAS 或所得税，不是费用"),
    ("850", "老板提款", "不涉及 GST（BAS 外）", ""),
    ("880", "贷款", "不涉及 GST（BAS 外）", "本金不是费用，利息部分要按贷款对账单拆"),
    ("999", "待复核", "待定", "会计复核前不入账"),
]
COA_NAME = {c[0]: c[1] for c in COA}

# description pattern -> (account, gst_first_pass, confidence, review, reason)   <- assistant judgement
CLASSIFY = {
    "SQUARE AU SETTLEMENT": ("200", "混合，按 POS 报表拆分", "高", "否", "Square 刷卡结算到账，是销售收入；GST 比例要看 Square 后台的分类销售报表"),
    "BAKERS SUPPLY CO": ("310", "看发票", "高", "否", "面粉等原材料批发，大部分免 GST，按税务发票逐项确认"),
    "PACKPRO AUSTRALIA": ("320", "含 GST", "高", "否", "纸袋、蛋糕盒等包装，含 GST"),
    "GLEN WAVERLEY PROPERTY GROUP": ("400", "含 GST", "高", "否", "每月固定日期、固定金额，是店铺租金"),
    "AGL ENERGY": ("410", "含 GST", "高", "否", "电费，含 GST"),
    "SOUTH EAST WATER": ("410", "多数免 GST", "中", "否", "水费，水和污水服务多数免 GST，以账单为准"),
    "ACCOUNT FEE": ("420", "无 GST", "高", "否", "银行月费，金融服务无 GST"),
    "TELSTRA": ("430", "含 GST", "高", "否", "店里电话和网络"),
    "XERO AUSTRALIA": ("440", "含 GST", "高", "否", "记账软件订阅，Xero 澳洲账户收 GST"),
    "KITCHENFIX SERVICES": ("450", "含 GST", "高", "否", "烤箱维修"),
    "AAMI BUSINESS INSURANCE": ("460", "含 GST", "中", "否", "商铺保险，保费含 GST，印花税部分以保单为准"),
    "AMPOL GLEN WAVERLEY": ("470", "含 GST", "中", "否", "油费；业务用途比例需会计确认"),
    "PAY STAFF WAGES": ("477", "不涉及 GST（BAS 外）", "高", "否", "员工工资发放"),
    "SUPERCHOICE CLEARING": ("478", "不涉及 GST（BAS 外）", "高", "否", "养老金清算所扣款"),
    "ATO PAYMENT": ("800", "不涉及 GST（BAS 外）", "高", "否", "缴给 ATO 的税款，不是费用，需会计核对对应哪一期"),
    # ---- review items ----
    "NETFLIX.COM": ("999", "待定", "低", "是", "看起来是个人娱乐订阅，从公司账户扣，需确认是否老板个人支出"),
    "SEPHORA CHADSTONE": ("999", "待定", "低", "是", "化妆品店消费，和面包店经营无关，疑似个人支出"),
    "TRANSFER TO XX4821 LI WEI": ("999", "待定", "中", "是", "转到老板个人账户，可能是提款，也可能是还老板垫付的钱，需老板确认"),
    "SQ *KL TRADING": ("999", "待定", "低", "是", "商户名看不出卖什么，需要小票或发票"),
    "PAYPAL *SHENZHENMOULD": ("999", "待定", "低", "是", "从海外卖家买的烘焙模具，进口是否收了 GST、能否抵扣要看发票"),
    "CASH DEPOSIT BRANCH": ("999", "待定", "低", "是", "现金存款没有备注，可能是现金销售，也可能是老板注资，需确认来源"),
    "WESTPAC BUS LOAN REPAYMENT": ("999", "待定", "中", "是", "贷款还款里有本金和利息，要按贷款对账单拆分后再入账"),
}

lines = []  # (day, desc, debit, credit)
def add(day, desc, debit=0.0, credit=0.0): lines.append((day, desc, round(debit, 2), round(credit, 2)))
for day in range(1, 32):
    if day in (5, 12, 19, 26): continue  # 周一店休，没有结算
    if day % 2 == 1 or day in (2, 30):
        add(day, "SQUARE AU SETTLEMENT", credit=R.uniform(1450, 2650))
for day in (3, 10, 17, 24, 31): add(day, "BAKERS SUPPLY CO", debit=R.uniform(780, 1250))
add(8, "PACKPRO AUSTRALIA", debit=412.50); add(22, "PACKPRO AUSTRALIA", debit=286.00)
add(1, "GLEN WAVERLEY PROPERTY GROUP", debit=4950.00)
add(14, "AGL ENERGY", debit=1186.42); add(20, "SOUTH EAST WATER", debit=214.36)
add(31, "ACCOUNT FEE", debit=10.00); add(9, "TELSTRA", debit=139.00); add(6, "XERO AUSTRALIA", debit=75.00)
add(16, "KITCHENFIX SERVICES", debit=528.00); add(2, "AAMI BUSINESS INSURANCE", debit=389.17)
add(11, "AMPOL GLEN WAVERLEY", debit=96.40); add(25, "AMPOL GLEN WAVERLEY", debit=88.15)
for day in (7, 21): add(day, "PAY STAFF WAGES", debit=R.uniform(5200, 5600))
add(28, "SUPERCHOICE CLEARING", debit=1268.40); add(28, "ATO PAYMENT", debit=3412.00)
# planted review items
add(4, "NETFLIX.COM", debit=25.99); add(18, "SEPHORA CHADSTONE", debit=148.00)
add(15, "TRANSFER TO XX4821 LI WEI", debit=3000.00); add(23, "SQ *KL TRADING", debit=67.80)
add(13, "PAYPAL *SHENZHENMOULD", debit=342.18); add(27, "CASH DEPOSIT BRANCH", credit=2600.00)
add(29, "WESTPAC BUS LOAN REPAYMENT", debit=1840.00)
lines.sort(key=lambda x: (x[0], x[1]))

OPEN = 18450.32
bal = OPEN; out = []
for day, desc, dr, cr in lines:
    bal = round(bal - dr + cr, 2)
    out.append({"date": f"2026-10-{day:02d}", "description": desc, "debit": f"{dr:.2f}" if dr else "",
                "credit": f"{cr:.2f}" if cr else "", "balance": f"{bal:.2f}"})
with open(P / "data/bank-2026-10.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(out[0])); w.writeheader(); w.writerows(out)
with open(P / "data/chart-of-accounts.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["code", "name", "gst_default", "note"]); w.writerows(COA)

# ---- expected ----
dec, by_acc, review = [], defaultdict(lambda: {"lines": 0, "debit": 0.0, "credit": 0.0}), []
gst_credit_est = 0.0
for i, r in enumerate(out, 1):
    acc, gst, conf, rv, why = CLASSIFY[r["description"]]
    dr = float(r["debit"] or 0); cr = float(r["credit"] or 0)
    b = by_acc[acc]; b["lines"] += 1; b["debit"] += dr; b["credit"] += cr
    if gst == "含 GST" and dr: gst_credit_est += dr / 11
    if rv == "是": review.append({"row": i, "date": r["date"], "description": r["description"], "debit": dr, "credit": cr, "reason": why})
    dec.append([i, r["date"], r["description"], r["debit"], r["credit"], acc, COA_NAME[acc], gst, conf, rv, why])
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["row", "date", "description", "debit", "credit", "account_code", "account_name", "gst_first_pass", "confidence", "needs_review", "reason"]); w.writerows(dec)
tot_dr = round(sum(float(r["debit"] or 0) for r in out), 2); tot_cr = round(sum(float(r["credit"] or 0) for r in out), 2)
exp = {"lines_in_file": len(out), "opening_balance": OPEN, "total_debit": tot_dr, "total_credit": tot_cr,
       "closing_balance": float(out[-1]["balance"]), "balance_check": round(OPEN - tot_dr + tot_cr, 2) == float(out[-1]["balance"]),
       "by_account": {a: {"name": COA_NAME[a], "lines": v["lines"], "debit": round(v["debit"], 2), "credit": round(v["credit"], 2)} for a, v in sorted(by_acc.items())},
       "review_count": len(review), "review_debit_total": round(sum(x["debit"] for x in review), 2),
       "review_credit_total": round(sum(x["credit"] for x in review), 2), "review_items": review,
       "est_gst_credits_on_taxable_lines": round(gst_credit_est, 2),
       "gst_note": "只对初判为「含 GST」的支出按 金额 ÷ 11 估算进项税，教学假设；原材料、销售收入、水费要看发票或报表，未计入；以 ATO 规定和会计复核为准"}
json.dump(exp, open(P / "expected/answer.json", "w"), ensure_ascii=False, indent=1)
print(json.dumps({k: v for k, v in exp.items() if k not in ("review_items",)}, ensure_ascii=False, indent=1))
