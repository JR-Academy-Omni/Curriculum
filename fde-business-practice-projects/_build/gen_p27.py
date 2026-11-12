#!/usr/bin/env python3
"""p27 teaching data + expected answer (deterministic).
Invented 3PL warehouse in Wetherill Park NSW, invented online-store clients and receivers.
Exception feed -> customer notice -> claim register. All decisions and claim amounts are rule-computed here;
the notice drafts at the bottom are reference wording written by hand (no model API was called)."""
import csv, json, pathlib, random, datetime as dt

R = random.Random(20261127)
P = pathlib.Path(__file__).resolve().parents[1] / "p27-logistics-exception-claims"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
RUN = dt.date(2026, 11, 11)
DAMAGE_WINDOW = 7        # 教学假设：签收后 7 天内报破损
UNINSURED_CAP = 100.00   # 教学假设：未买保价，承运商最多赔 100
MANAGER_LIMIT = 500.00   # 理赔金额超过这个数，要经理再批

CLIENTS = ["小森家居", "优果零食", "暖暖母婴"]
CARRIERS = ["FastLane Freight", "袋鼠快运", "Coastline Couriers"]
FIRST = ["Amy", "Ben", "陈静", "David", "Emma", "刘洋", "Grace", "黄磊", "Ivy", "Jack", "李娜", "Mason", "Nina", "王强",
         "Olivia", "Peter", "孙悦", "Ryan", "Sarah", "张伟", "Tina", "吴敏", "Vincent", "杨帆", "Zoe", "郑浩", "Lucy", "周婷", "Kevin", "何丽"]
LAST = ["Nguyen", "Smith", "Wong", "Brown", "Lee", "Taylor", "Chen", "Wilson", "Tran", "Martin"]
CONTENTS = {"小森家居": ["玻璃花瓶", "陶瓷餐具 6 件套", "实木小边桌", "台灯", "香薰机"],
            "优果零食": ["坚果礼盒", "进口巧克力 2kg", "零食大礼包", "蜂蜜 3 瓶"],
            "暖暖母婴": ["婴儿推车", "奶粉 4 罐", "儿童安全座椅", "婴儿床品套装"]}
POST = ["2148", "2150", "2160", "2170", "2200", "2220", "2232", "2135", "2122", "2077", "2000", "2765"]

def name(i):
    f = FIRST[i % len(FIRST)]
    return f if any("一" <= ch <= "鿿" for ch in f) else f"{f} {LAST[R.randrange(len(LAST))]}"

def email(n, i):
    base = "".join(ch for ch in n.lower() if ch.isascii() and ch.isalnum()) or f"customer{i:02d}"
    return f"{base}{i:02d}@mail.example"

# waybill, carrier, ship_date, promised, delivered, declared_value, insured  (event shipments, fixed so the rules bite)
SPEC = {
    "KD261101": (0, "2026-11-06", "2026-11-10", "", 120.0, "N"),
    "KD261102": (1, "2026-11-07", "2026-11-12", "", 64.5, "N"),
    "KD261103": (2, "2026-11-05", "2026-11-09", "", 310.0, "Y"),
    "KD261104": (0, "2026-11-04", "2026-11-07", "2026-11-09", 89.0, "N"),
    "KD261105": (1, "2026-11-06", "2026-11-09", "2026-11-10", 640.0, "Y"),
    "KD261106": (2, "2026-10-22", "2026-10-25", "2026-10-27", 158.0, "N"),
    "KD261107": (0, "2026-10-28", "2026-11-01", "", 230.0, "N"),
    "KD261108": (1, "2026-10-27", "2026-10-31", "", 1180.0, "Y"),
    "KD261109": (2, "2026-11-08", "2026-11-11", "", 75.0, "N"),
    "KD261112": (0, "2026-11-03", "2026-11-06", "2026-11-08", 210.0, "Y"),
    "KD261113": (1, "2026-11-05", "2026-11-10", "", 99.0, "N"),
    "KD261114": (2, "2026-11-07", "2026-11-11", "", 52.0, "N"),
    "KD261115": (0, "2026-11-05", "2026-11-08", "2026-11-10", 45.0, "N"),
    "KD261116": (1, "2026-10-29", "2026-11-03", "", 65.0, "N"),
    "KD261117": (2, "2026-11-09", "2026-11-12", "", 138.0, "N"),
    "KD261118": (0, "2026-11-08", "2026-11-13", "", 47.0, "N"),
}
shipments = []
for i, (wb, (ci, sd, pr, dl, val, ins)) in enumerate(sorted(SPEC.items())):
    client = CLIENTS[i % 3]; n = name(i)
    shipments.append({"waybill": wb, "client": client, "carrier": CARRIERS[ci], "ship_date": sd, "promised_date": pr,
                      "delivered_date": dl, "receiver_name": n, "receiver_email": email(n, i), "receiver_postcode": R.choice(POST),
                      "contents": R.choice(CONTENTS[client]), "declared_value": f"{val:.2f}", "insured": ins})
for j in range(14):  # 没出异常的单，台账里本来就有
    i = 20 + j; client = CLIENTS[j % 3]; n = name(i); sd = dt.date(2026, 11, 3) + dt.timedelta(days=R.randint(0, 6))
    shipments.append({"waybill": f"KD2611{40 + j}", "client": client, "carrier": CARRIERS[j % 3], "ship_date": sd.isoformat(),
                      "promised_date": (sd + dt.timedelta(days=R.randint(2, 4))).isoformat(), "delivered_date": "",
                      "receiver_name": n, "receiver_email": email(n, i), "receiver_postcode": R.choice(POST),
                      "contents": R.choice(CONTENTS[client]), "declared_value": f"{R.choice([39, 58, 72, 96, 129, 185, 240]):.2f}", "insured": R.choice("NNY")})
S = {s["waybill"]: s for s in shipments}
S["KD261113"]["receiver_email"] = ""                                     # P5 收件人邮箱缺失
# 破损描述里提到了具体商品，台账里的网店和货品要跟它对上
for wb, cl, ct in (("KD261104", "小森家居", "陶瓷餐具 6 件套"), ("KD261105", "小森家居", "玻璃花瓶"), ("KD261106", "小森家居", "实木小边桌"),
                   ("KD261112", "小森家居", "台灯"), ("KD261115", "优果零食", "蜂蜜 3 瓶"), ("KD261108", "优果零食", "坚果礼盒（企业订单 40 盒）")):
    S[wb].update(client=cl, contents=ct)
# 签收日期只在已签收的单上有；KD261104/05/06/12/15 是签收后报破损
with open(P / "data/shipments.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(shipments[0])); w.writeheader(); w.writerows(sorted(shipments, key=lambda s: s["waybill"]))

claims_register = [
    {"claim_id": "CL-2611-003", "waybill": "KD261112", "opened": "2026-11-09", "type": "damaged", "amount_claimed": "210.00",
     "status": "open", "note": "收件人 11-08 打电话说台灯灯罩裂了，已开理赔，等承运商回复"},
    {"claim_id": "CL-2611-001", "waybill": "KD261030", "opened": "2026-11-02", "type": "lost", "amount_claimed": "100.00", "status": "paid", "note": ""},
    {"claim_id": "CL-2611-002", "waybill": "KD261031", "opened": "2026-11-04", "type": "damaged", "amount_claimed": "62.00", "status": "rejected", "note": "超出索赔期限"},
]
with open(P / "data/claims-register.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(claims_register[0])); w.writeheader(); w.writerows(claims_register)

EV = [  # event_id, waybill, event_time, code, new_eta, detail
    ("E01", "KD261101", "2026-11-11 07:42", "DELAY", "2026-11-12", "Linehaul missed connection at Albury, rescheduled"),
    ("E02", "KD261102", "2026-11-11 07:55", "DELAY", "2026-11-12", "转运中心分拣延误，预计仍按原时效送达"),
    ("E03", "KD261103", "2026-11-11 08:10", "DELAY", "2026-11-12", "Weather delay — road closure on M1"),
    ("E04", "KD261104", "2026-11-11 08:20", "DAMAGED", "", "收件人反馈外箱破损，照片说明：外箱一侧被压扁，里面 6 件套餐具有 2 只碗碎了"),
    ("E05", "KD261105", "2026-11-11 08:31", "DAMAGED", "", "Receiver reported damage. Photo caption: corner of carton crushed, glass vase inside broken into three pieces"),
    ("E06", "KD261106", "2026-11-11 08:47", "DAMAGED", "", "收件人说边桌一条腿裂了，照片说明：桌腿和桌面连接处有一道 10cm 裂缝"),
    ("E07", "KD261107", "2026-11-11 09:02", "LOST", "", "No scan since 2026-11-01 at Moorebank depot, declared lost after trace"),
    ("E08", "KD261108", "2026-11-11 09:15", "LOST", "", "包裹追查 10 个工作日无结果，承运商确认丢失"),
    ("E09", "KD261109", "2026-11-11 09:30", "ADDRESS_ISSUE", "", "Unit number missing, driver could not locate receiver"),
    ("E10", "KD261103", "2026-11-11 09:41", "DELAY", "2026-11-12", "Weather delay — road closure on M1"),
    ("E11", "KD261199", "2026-11-11 09:58", "DAMAGED", "", "Receiver reported carton wet, photo caption: water stain on bottom of box"),
    ("E12", "KD261112", "2026-11-11 10:12", "DAMAGED", "", "补充：收件人又发来照片说明，台灯底座也有裂纹"),
    ("E13", "KD261113", "2026-11-11 10:30", "DELAY", "2026-11-13", "派送车辆故障，改到 11-13 派送"),
    ("E14", "KD261114", "2026-11-11 10:44", "DELAY", "2026-11-12", "Missed linehaul, next day delivery"),
    ("E15", "KD261115", "2026-11-11 11:05", "DAMAGED", "", "收件人反馈蜂蜜瓶盖松了漏出来一点，照片说明：瓶身外有黏液，纸箱底部湿了一块"),
    ("E16", "KD261116", "2026-11-11 11:20", "LOST", "", "Trace closed — parcel not found"),
    ("E17", "KD261117", "2026-11-11 11:36", "ADDRESS_ISSUE", "", "地址里的街道名和邮编对不上，司机没有派送"),
    ("E18", "KD261118", "2026-11-11 11:50", "DELAY", "2026-11-12", "Sort delay at Erskine Park hub"),
]
with open(P / "data/exceptions-2026-11-11.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["event_id", "waybill", "carrier", "event_time", "event_code", "new_eta", "detail"])
    for e in EV: w.writerow([e[0], e[1], S[e[1]]["carrier"] if e[1] in S else "Coastline Couriers", e[2], e[3], e[4], e[5]])

POLICY = """# 快达仓配 异常件处理规则（练习数据：规则和数字都是这家仓库自己定的教学假设）

真实的索赔期限、赔付上限和保价条款，以你跟每家承运商签的合同和承运商官网条款为准。

## 先挡掉的情况
- 同一个运单、同一种异常，当天收到多次 → 只处理一次。
- 运单号在发货台账里找不到 → 不通知、不理赔，交给 Kelly 查是不是单号录错。
- 这个运单已经有 open 状态的理赔 → 不新开理赔，把新信息补进原来那条，不重复通知客户。

## 各类异常怎么处理
| 异常 | 通知收件人 | 理赔 |
|---|---|---|
| DELAY 延误 | 只有新预计送达日期晚于承诺日期才通知；没晚就只记录 | 不理赔 |
| ADDRESS_ISSUE 地址问题 | 通知收件人确认地址，同时告诉网店 | 不理赔 |
| DAMAGED 破损 | 通知 | 签收后 7 天内报的才开理赔；超过 7 天交给经理判断，先不通知 |
| LOST 丢失 | 通知 | 开理赔 |

## 理赔金额（教学假设）
- 买了保价（insured = Y）：按申报价值 declared_value 索赔。
- 没买保价：按申报价值索赔，但最多 100 元。
- 单笔理赔金额超过 500 元，Kelly 确认后还要经理老郑批准。

## 通知怎么写
- 以网店的名义通知（例如「小森家居 委托快达仓配通知您」），抄送网店。
- 说清楚发生了什么、接下来怎么办、什么时候再联系。
- 不说「是快递的错」「是我们的错」；不承诺赔多少钱、几天到账；不承诺具体送达时间，只说承运商给的新预计日期。
- 收件人邮箱缺失 → 不发，改为通知网店联系收件人。
"""
(P / "data/claim-policy.md").write_text(POLICY, encoding="utf-8")

# ---- expected ----
open_claims = {c["waybill"]: c for c in claims_register if c["status"] == "open"}
seen, rows, claims = set(), [], []
seq = 4
for eid, wb, t, code, eta, detail in EV:
    d = {"event_id": eid, "waybill": wb, "event_code": code, "decision": "", "notify_receiver": "否", "notify_client": "否",
         "claim": "无", "claim_amount": "", "approval_route": "", "reason": ""}
    if (wb, code) in seen:
        d.update(decision="跳过（重复事件）", reason="同一运单同一异常今天已经处理过"); rows.append(d); continue
    seen.add((wb, code))
    s = S.get(wb)
    if not s:
        d.update(decision="暂停，交 Kelly 查单号", approval_route="Kelly", reason="运单号不在发货台账里"); rows.append(d); continue
    if code == "DELAY":
        late = (dt.date.fromisoformat(eta) - dt.date.fromisoformat(s["promised_date"])).days
        if late <= 0:
            d.update(decision="只记录", reason=f"新预计 {eta} 没有晚于承诺日期 {s['promised_date']}")
        elif not s["receiver_email"]:
            d.update(decision="通知网店联系收件人", notify_client="是", approval_route="Kelly",
                     reason=f"晚 {late} 天，但收件人邮箱缺失，发不了")
        else:
            d.update(decision="通知收件人（延误）", notify_receiver="是", notify_client="抄送", approval_route="Kelly",
                     reason=f"新预计 {eta}，比承诺日期 {s['promised_date']} 晚 {late} 天")
    elif code == "ADDRESS_ISSUE":
        d.update(decision="通知收件人确认地址", notify_receiver="是", notify_client="是", approval_route="Kelly", reason=detail)
    elif code in ("DAMAGED", "LOST"):
        if wb in open_claims:
            c = open_claims[wb]
            d.update(decision=f"补进现有理赔 {c['claim_id']}", reason="这个运单已经有 open 理赔，不新开、不重复通知")
            rows.append(d); continue
        if code == "DAMAGED":
            age = (RUN - dt.date.fromisoformat(s["delivered_date"])).days
            if age > DAMAGE_WINDOW:
                d.update(decision="暂停，交经理判断", approval_route="经理老郑",
                         reason=f"签收 {s['delivered_date']}，今天已经 {age} 天，超过 {DAMAGE_WINDOW} 天的报损期限")
                rows.append(d); continue
        val = float(s["declared_value"])
        amt = val if s["insured"] == "Y" else min(val, UNINSURED_CAP)
        route = "Kelly → 经理老郑" if amt > MANAGER_LIMIT else "Kelly"
        cid = f"CL-2611-{seq:03d}"; seq += 1
        why = (f"保价，按申报价值 {val:.2f}" if s["insured"] == "Y" else
               f"未保价，申报价值 {val:.2f}，按上限 {UNINSURED_CAP:.0f} 封顶" if val > UNINSURED_CAP else f"未保价，申报价值 {val:.2f} 低于上限")
        if code == "DAMAGED": why = f"签收后第 {age} 天报损（期限 {DAMAGE_WINDOW} 天）；" + why
        d.update(decision="通知收件人 + 开理赔草稿", notify_receiver="是", notify_client="抄送", claim=cid,
                 claim_amount=f"{amt:.2f}", approval_route=route, reason=why)
        claims.append({"claim_id": cid, "waybill": wb, "client": s["client"], "carrier": s["carrier"], "type": code.lower(),
                       "declared_value": val, "insured": s["insured"], "amount_claimed": round(amt, 2), "approval_route": route})
    rows.append(d)

with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
exp = {"events_in_file": len(EV), "events_processed": len(EV) - sum(1 for r in rows if r["decision"].startswith("跳过")),
       "receiver_notices": [r["event_id"] for r in rows if r["notify_receiver"] == "是"],
       "client_only_notices": [r["event_id"] for r in rows if r["notify_client"] == "是" and r["notify_receiver"] == "否"],
       "log_only": [r["event_id"] for r in rows if r["decision"] == "只记录"],
       "holds": [{"event_id": r["event_id"], "waybill": r["waybill"], "decision": r["decision"], "reason": r["reason"]}
                 for r in rows if r["decision"].startswith(("暂停", "跳过", "补进"))],
       "new_claims": claims, "new_claims_total": round(sum(c["amount_claimed"] for c in claims), 2),
       "claims_need_manager": [c["claim_id"] for c in claims if c["amount_claimed"] > MANAGER_LIMIT],
       "rules": {"damage_window_days": DAMAGE_WINDOW, "uninsured_cap": UNINSURED_CAP, "manager_limit": MANAGER_LIMIT}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

def sh(wb): return S[wb]
N = []
s = sh("KD261101")
N.append(f"""## E01 · 延误（{s['receiver_name']} · KD261101）

主题：你的{s['client']}订单会晚两天送到

{s['receiver_name']} 你好，

{s['client']}委托快达仓配通知你：你的订单（运单号 KD261101，{s['contents']}）在运输途中没赶上转运班车，承运商 {s['carrier']} 给的新预计送达日期是 11 月 12 日，比原来说的 11 月 10 日晚。

包裹没有丢，也不需要你做什么。如果 11 月 12 日还没收到，直接回这封邮件，我们会再帮你跟承运商查。

给你添麻烦了，谢谢理解。

快达仓配客服（代{s['client']}）
""")
s = sh("KD261105")
N.append(f"""## E05 · 破损 + 理赔（{s['receiver_name']} · KD261105）

主题：关于你收到的破损包裹

{s['receiver_name']} 你好，

{s['client']}委托快达仓配联系你。看到你反馈包裹（运单号 KD261105，{s['contents']}）收到时外箱一角压扁、里面的东西碎了，很抱歉让你收到这样的包裹。

我们已经把你的照片说明交给承运商，开始走破损理赔流程。{s['client']}会直接联系你，商量接下来怎么处理。承运商那边核实需要一些时间，有进展我们会告诉你。

在那之前，麻烦先保留外箱和碎片，承运商可能需要看。

快达仓配客服（代{s['client']}）
""")
s = sh("KD261107")
N.append(f"""## E07 · 丢失 + 理赔（{s['receiver_name']} · KD261107）

主题：你的{s['client']}订单还没找到

{s['receiver_name']} 你好，

{s['client']}委托快达仓配通知你：你的订单（运单号 KD261107，{s['contents']}）从 11 月 1 日以后就没有新的扫描记录，承运商追查后确认没能找到包裹。真的很抱歉。

我们已经把情况报给承运商，{s['client']}会直接联系你，商量接下来怎么处理。

快达仓配客服（代{s['client']}）
""")
s = sh("KD261109")
N.append(f"""## E09 · 地址问题（{s['receiver_name']} · KD261109）

Subject: Please confirm your delivery address

Hi {s['receiver_name']},

We're contacting you on behalf of {s['client']}. The driver tried to deliver your order (waybill KD261109) today but couldn't find your unit — the address we have doesn't include a unit number.

Could you reply with your full address, including the unit number? Once we have it we'll pass it to the carrier and arrange the next delivery attempt.

Thanks,
Kuaida Warehousing customer service (for {s['client']})
""")
N.append("""## E13 · 收件人邮箱缺失 → 发给网店（Slack 或邮件给小森家居 / 优果零食 / 暖暖母婴的对接人）

运单 KD261113 派送车辆故障，承运商改到 11 月 13 日派送，比承诺日期 11 月 10 日晚 3 天。台账里这个收件人没有邮箱，我们这边发不了通知，麻烦你们用订单里的电话联系一下收件人。
""")
N.append("""## 给 Kelly 的审批摘要（Slack）

今天 18 条异常：重复 1 条（E10），单号查不到 1 条（E11），没晚只记录 2 条（E02、E18）。
要发给收件人的通知 11 封（延误 3、破损 3、丢失 3、地址 2）；E13 收件人没邮箱，改成通知网店。
新开理赔 6 笔，合计 2,119.00 元；E05（640.00）和 E08（1,180.00）超过 500，要老郑再批。
E06 签收 15 天才报损，超过 7 天期限，先没通知，请老郑判断。E12 已有理赔 CL-2611-003，只把新照片说明补进去。
""")
(P / "expected/notice-drafts.md").write_text("# 通知草稿参考写法（人工写的参考，不是唯一答案）\n\n" + "\n".join(N), encoding="utf-8")
print(json.dumps(exp, ensure_ascii=False, indent=1))
for r in rows: print(r)
