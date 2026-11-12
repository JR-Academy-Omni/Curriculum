#!/usr/bin/env python3
"""p40 teaching data + expected answer (deterministic).
Invented Melbourne IT services company; one batch of staff expense claims checked against the company's own policy.
Every decision here is rule-derived (policy in data/expense-policy.md)."""
import csv, json, pathlib, random, datetime as dt
from collections import defaultdict

R = random.Random(20261140)
P = pathlib.Path(__file__).resolve().parents[1] / "p40-expense-claim-approval"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
BATCH = dt.date(2026, 11, 12)
RECEIPT_OVER = 82.50      # 教学假设：超过这个金额（含 GST）必须有收据
MEAL_CAP = 60.00          # 出差餐每人每天
ENT_CAP_PP = 120.00       # 客户招待每人
OFFICE_NO_PO = 200.00     # 办公用品单笔超过要有预先批准的 PO
KM_RATE = 0.88            # 教学假设的每公里报销额，真实以 ATO 当年公布为准
MAX_AGE = 60
SECOND_LEVEL = 500.00

EMP = [  # id, name, title, manager_id, email
    ("E01", "周海", "CEO", "", "zhou.hai@northbridge-it.example"),
    ("E02", "Rachel Tan", "合伙人", "E01", "rachel@northbridge-it.example"),
    ("E03", "陈刚", "交付经理", "E01", "chen.gang@northbridge-it.example"),
    ("E04", "Lily He", "财务", "E01", "lily@northbridge-it.example"),
    ("E05", "王磊", "顾问", "E03", "wang.lei@northbridge-it.example"),
    ("E06", "Sarah Kim", "顾问", "E03", "sarah.kim@northbridge-it.example"),
    ("E07", "刘洋", "顾问", "E03", "liu.yang@northbridge-it.example"),
    ("E08", "Ben Wilson", "顾问", "E03", "ben.w@northbridge-it.example"),
    ("E09", "张静", "顾问", "E03", "zhang.jing@northbridge-it.example"),
    ("E10", "黄宇", "IT 支持", "E03", "huang.yu@northbridge-it.example"),
]
NAME = {e[0]: e[1] for e in EMP}; MGR = {e[0]: e[3] for e in EMP}


def money(a): return round(a, 2)


def gst_of(a): return money(a / 11)


# 正常报销的模板：category, merchant, description, (lo, hi)
NORMAL = [
    ("交通", "13cabs", "去客户 Docklands 办公室的出租车", (24, 48)),
    ("交通", "Wilson Parking", "Southbank 客户现场停车半天", (18, 36)),
    ("交通", "Myki", "出差期间公共交通充值", (20, 30)),
    ("出差餐", "Grill'd Bendigo", "Bendigo 客户现场午餐", (19, 28)),
    ("出差餐", "Ballarat Station Cafe", "Ballarat 出差晚餐", (30, 52)),
    ("办公用品", "Officeworks", "会议用白板笔和便利贴", (22, 60)),
    ("办公用品", "JB Hi-Fi", "USB-C 转接头 ×2", (49, 79)),
    ("培训", "Cloud Skills Academy", "AWS 认证练习题库订阅", (35, 65)),
]
claims = []
n = 0
def add(emp, exp_date, cat, merchant, desc, amount, gst=None, receipt=None, attached="yes", attendees="", km="", po=""):
    global n; n += 1
    sub = max(BATCH - dt.timedelta(days=R.randint(0, 9)), exp_date)
    claims.append({"claim_id": f"C-{n:02d}", "employee_id": emp, "submitted_at": sub.isoformat(), "expense_date": exp_date.isoformat(),
                   "category": cat, "merchant": merchant, "description": desc, "amount_incl_gst": f"{amount:.2f}",
                   "gst": f"{(gst_of(amount) if gst is None else gst):.2f}", "receipt_no": receipt if receipt is not None else f"R{R.randint(100000, 999999)}",
                   "receipt_attached": attached, "attendees": attendees, "km": km, "po_number": po})

staff = ["E05", "E06", "E07", "E08", "E09", "E10"]
for i in range(14):
    cat, merch, desc, (lo, hi) = NORMAL[i % len(NORMAL)]
    emp = staff[i % len(staff)]
    d = BATCH - dt.timedelta(days=R.randint(5, 40))
    add(emp, d, cat, merch, desc, money(R.uniform(lo, hi)))
# 正常但需要特定规则的
add("E07", dt.date(2026, 10, 28), "自驾里程", "", "自驾去 Geelong 客户现场往返（Richmond ⇄ Geelong 市中心）", money(146 * KM_RATE), gst=0.0, receipt="", attached="no", km="146")
add("E06", dt.date(2026, 11, 3), "培训", "Cloud Skills Academy", "AWS Solutions Architect 两天线下培训", 890.00, po="PO-2026-031")
add("E01", dt.date(2026, 11, 5), "客户招待", "Chin Chin Melbourne", "和 Harbourline 物流两位负责人晚餐，谈续约", 342.00, attendees="Harbourline 物流 2 人 + 周海，共 3 人")
add("E03", dt.date(2026, 11, 6), "办公用品", "Officeworks", "新入职同事的显示器支架和键盘", 268.00, po="PO-2026-034")
# ---- planted problems ----
add("E08", dt.date(2026, 10, 30), "出差餐", "Bendigo Hotel", "Bendigo 客户现场，晚餐（一人）", 86.40)                                   # P1 超出出差餐上限
add("E05", dt.date(2026, 11, 7), "交通", "Uber", "晚上从客户现场回家，收据找不到了", 96.30, attached="no", receipt="")                  # P2 超额无收据
add("E09", dt.date(2026, 8, 20), "交通", "Wilson Parking", "8 月客户培训期间停车", 64.00)                                            # P3 超过 60 天
add("E10", dt.date(2026, 11, 4), "办公用品", "Officeworks", "打印纸和墨盒", 44.00, gst=6.00)                                          # P4 GST 比金额 1/11 还多
dup = claims[2].copy()                                                                                                                # P5 同一张收据重复提交
n += 1; dup.update(claim_id=f"C-{n:02d}", submitted_at=BATCH.isoformat()); claims.append(dup)

with open(P / "data/claims-2026-11-12.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(claims[0])); w.writeheader(); w.writerows(claims)
with open(P / "data/employees.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["employee_id", "name", "title", "manager_id", "email"]); w.writerows(EMP)
POLICY = f"""# 北桥 IT 服务 · 报销规则（练习用）

这是公司自己定的规则。涉及税务的数字是教学假设，真实规则以 ATO 官方说明和公司会计的意见为准。

## 提交
- 费用发生后 {MAX_AGE} 天内提交。超过 {MAX_AGE} 天的不自动处理，交财务 Lily 判断是否特批。
- 同一张收据（同一员工、同一收据号、同一金额）只能报一次。

## 收据
- 单笔金额（含 GST）超过 {RECEIPT_OVER:.2f} 澳元必须附收据；没有收据的退回补交。
- 自驾里程不需要收据，但必须写公里数和起止地点。
- GST 金额不能超过「含税金额 ÷ 11」（四舍五入到分，允许 0.01 误差）；超过的退回核对。

## 各类上限
| 类别 | 规则 |
|---|---|
| 交通（出租车、网约车、停车、公共交通） | 按实际报 |
| 出差餐 | 每人每天 {MEAL_CAP:.2f}；超出部分自付，按上限报 |
| 客户招待 | 每人 {ENT_CAP_PP:.2f}（含我方人员）；必须写客户公司和人数 |
| 办公用品 | 单笔超过 {OFFICE_NO_PO:.2f} 必须有预先批准的 PO 号 |
| 自驾里程 | 公里数 × {KM_RATE:.2f}（教学假设，真实以 ATO 当年公布为准） |
| 培训 | 按实际报；超过 {SECOND_LEVEL:.0f} 的要有 PO 号 |

## 审批
- 第一级：员工的直属主管（employees.csv 里的 manager_id）。
- 报销金额超过 {SECOND_LEVEL:.2f}：主管批完再由 CEO 周海批。
- CEO 自己的报销：由合伙人 Rachel Tan 批。任何人不能批自己的报销。
- 全部批完后，财务 Lily 在会计软件里付款。系统不自动付款。
"""
(P / "data/expense-policy.md").write_text(POLICY, encoding="utf-8")

# ---- expected ----
seen = {}
out = []
for c in claims:
    amt = float(c["amount_incl_gst"]); gst = float(c["gst"]); emp = c["employee_id"]
    exp_d = dt.date.fromisoformat(c["expense_date"]); sub_d = dt.date.fromisoformat(c["submitted_at"])
    key = (emp, c["receipt_no"], c["amount_incl_gst"])
    r = {"claim_id": c["claim_id"], "employee": NAME[emp], "category": c["category"], "amount": amt, "approved_amount": 0.0,
         "decision": "", "route": "", "reason": ""}
    if c["receipt_no"] and key in seen:
        r.update(decision="拒绝（重复）", reason=f"和 {seen[key]} 是同一张收据（{c['receipt_no']}，{amt:.2f}）")
    elif (sub_d - exp_d).days > MAX_AGE:
        r.update(decision="转财务判断", route="Lily He", reason=f"费用日期 {exp_d}，提交日期 {sub_d}，相隔 {(sub_d - exp_d).days} 天，超过 {MAX_AGE} 天")
    elif c["category"] != "自驾里程" and amt > RECEIPT_OVER and c["receipt_attached"] != "yes":
        r.update(decision="退回补材料", reason=f"金额 {amt:.2f} 超过 {RECEIPT_OVER:.2f}，没有附收据")
    elif gst > round(amt / 11, 2) + 0.01:
        r.update(decision="退回补材料", reason=f"GST {gst:.2f} 超过 {amt:.2f} ÷ 11 = {amt / 11:.2f}，请核对收据")
    elif c["category"] == "办公用品" and amt > OFFICE_NO_PO and not c["po_number"]:
        r.update(decision="退回补材料", reason="办公用品超过 200 没有 PO 号")
    else:
        approved = amt; note = ""
        if c["category"] == "出差餐" and amt > MEAL_CAP:
            approved = MEAL_CAP; note = f"出差餐上限 {MEAL_CAP:.2f}，超出 {amt - MEAL_CAP:.2f} 自付"
        if c["category"] == "客户招待":
            people = 3; cap = ENT_CAP_PP * people
            note = f"3 人，上限 {cap:.2f}，未超"
        if c["category"] == "自驾里程":
            note = f"{c['km']} km × {KM_RATE:.2f} = {amt:.2f}"
        mgr = MGR[emp]
        if emp == "E01":
            route = "Rachel Tan"
        else:
            route = NAME[mgr] + (" → 周海" if approved > SECOND_LEVEL and mgr != "E01" else "")
        r.update(approved_amount=money(approved), decision="部分通过（超额自付）" if approved < amt else "通过，待审批", route=route,
                 reason=note or "符合规则")
    if c["receipt_no"] and key not in seen: seen[key] = c["claim_id"]
    out.append(r)

by_route = defaultdict(lambda: {"claims": 0, "amount": 0.0})
for r in out:
    if r["approved_amount"]:
        by_route[r["route"]]["claims"] += 1; by_route[r["route"]]["amount"] = money(by_route[r["route"]]["amount"] + r["approved_amount"])
exp = {"batch_date": BATCH.isoformat(), "claims_in_file": len(out),
       "to_approval": sum(1 for r in out if r["approved_amount"]),
       "to_approval_amount": money(sum(r["approved_amount"] for r in out)),
       "claimed_amount_all": money(sum(r["amount"] for r in out)),
       "by_route": dict(sorted(by_route.items())),
       "returned": [r["claim_id"] for r in out if r["decision"] == "退回补材料"],
       "rejected_duplicate": [r["claim_id"] for r in out if r["decision"].startswith("拒绝")],
       "to_finance_review": [r["claim_id"] for r in out if r["decision"] == "转财务判断"],
       "partial": [r["claim_id"] for r in out if r["decision"].startswith("部分")],
       "decisions": out}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["claim_id", "employee", "category", "amount", "approved_amount", "decision", "route", "reason"])
    for r in out: w.writerow([r["claim_id"], r["employee"], r["category"], f"{r['amount']:.2f}", f"{r['approved_amount']:.2f}", r["decision"], r["route"], r["reason"]])
print(json.dumps({k: exp[k] for k in exp if k != "decisions"}, ensure_ascii=False, indent=1))
for r in out: print(r["claim_id"], r["employee"], r["category"], r["amount"], r["approved_amount"], r["decision"], r["route"], r["reason"])
