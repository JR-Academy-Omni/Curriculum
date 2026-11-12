#!/usr/bin/env python3
"""p16 teaching data + expected answer (deterministic). Same fictional tea store as p02 (竹间茶事 Box Hill).
Order lookups, days since delivery, policy windows, refund amounts and the owner-approval threshold are
rule-computed here. Intent / route judgement and reply drafts are reference answers written by hand following
the README prompt (no model API was called)."""
import csv, json, pathlib, random, datetime as dt

R = random.Random(20261116)
P = pathlib.Path(__file__).resolve().parents[1] / "p16-ecommerce-after-sales-agent"
TODAY = dt.date(2026, 11, 12)
CHANGE_OF_MIND_DAYS = 30
DAMAGE_REPORT_DAYS = 14
NO_RETURN_BELOW = 30.00
OWNER_LIMIT = 150.00

PRODUCTS = [  # sku, product, category, price (AUD incl. GST, teaching data)
    ("TEA-OOL-100", "台湾高山乌龙 100g", "茶叶", 29.00), ("TEA-JAS-050", "福州茉莉花茶 50g", "茶叶", 16.00),
    ("TEA-LJ-100", "明前龙井 100g", "茶叶", 58.00), ("TEA-DHP-050", "武夷大红袍 50g", "茶叶", 38.00),
    ("TEA-TGY-100", "安溪铁观音 100g", "茶叶", 26.00), ("WAR-GW-120", "白瓷盖碗 120ml", "茶具", 28.00),
    ("WAR-ZSH-200", "紫砂壶 200ml", "茶具", 128.00), ("WAR-CUP-6", "品茗杯六只装", "茶具", 39.00),
    ("WAR-SET-TRV", "便携旅行茶具套装", "茶具", 59.00), ("GIFT-LJ-SET", "龙井茶礼盒（龙井 100g + 品茗杯两只）", "礼盒", 98.00),
]
PRICE = {p[0]: p[3] for p in PRODUCTS}
NAME = {p[0]: p[1] for p in PRODUCTS}
SHIP = 9.95

# named orders the requests refer to: order_id, date, name, email, payment, status, delivered, tracking, lines
NAMED = [
    ("ZJ-1031", "2026-11-04", "Sophie Lin", "sophie.lin@mail.example", "card", "delivered", "2026-11-08", "已签收", [("WAR-GW-120", 2), ("TEA-OOL-100", 1)]),
    ("ZJ-0987", "2026-10-15", "David Xu", "david.xu@mail.example", "card", "delivered", "2026-10-20", "已签收", [("WAR-ZSH-200", 1)]),
    ("ZJ-1012", "2026-10-26", "王慧", "wanghui.mel@mail.example", "PayPal", "delivered", "2026-10-30", "已签收", [("TEA-JAS-050", 3)]),
    ("ZJ-1036", "2026-11-05", "Kevin Ho", "kevin.ho@mail.example", "card", "delivered", "2026-11-09", "已签收", [("TEA-DHP-050", 4)]),
    ("ZJ-0942", "2026-09-22", "Lisa Chen", "lisa.chen@mail.example", "card", "delivered", "2026-09-28", "已签收", [("GIFT-LJ-SET", 1)]),
    ("ZJ-1045", "2026-11-07", "Tom Walker", "t.walker@mail.example", "card", "delivered", "2026-11-11", "已签收", [("TEA-LJ-100", 1)]),
    ("ZJ-0901", "2026-08-30", "Mark Zhang", "mark.zhang@mail.example", "card", "delivered", "2026-09-05", "已签收", [("WAR-ZSH-200", 1)]),
    ("ZJ-1019", "2026-10-28", "Jenny Wu", "jenny.wu@mail.example", "card", "delivered", "2026-11-01", "已签收", [("WAR-SET-TRV", 1), ("TEA-TGY-100", 1)]),
    ("ZJ-1027", "2026-11-01", "Chris Li", "chris.li@mail.example", "PayPal", "shipped", "", "11-03 到达墨尔本转运中心后无更新", [("TEA-LJ-100", 2)]),
]
orders, lines = [], []
for o in NAMED:
    orders.append({"order_id": o[0], "order_date": o[1], "customer_name": o[2], "email": o[3], "payment_method": o[4],
                   "shipping_fee": f"{SHIP:.2f}", "status": o[5], "delivered_date": o[6], "tracking_status": o[7]})
    for sku, q in o[8]: lines.append({"order_id": o[0], "sku": sku, "product": NAME[sku], "qty": q, "unit_price": f"{PRICE[sku]:.2f}"})
FIRST = ["Amy", "Ben", "Cathy", "Eric", "Fiona", "Henry", "Ivy", "Jack", "Kelly", "Leo", "Mia", "Nina", "Owen", "Rita"]
for i in range(16):
    oid = f"ZJ-{950 + i * 6:04d}"
    if any(o["order_id"] == oid for o in orders): continue
    od = TODAY - dt.timedelta(days=R.randint(6, 60)); nm = R.choice(FIRST) + " " + R.choice(["Wang", "Liu", "Zhao", "Smith", "Nguyen", "Tan"])
    orders.append({"order_id": oid, "order_date": od.isoformat(), "customer_name": nm, "email": nm.lower().replace(" ", ".") + "@mail.example",
                   "payment_method": R.choice(["card", "card", "PayPal"]), "shipping_fee": f"{SHIP:.2f}", "status": "delivered",
                   "delivered_date": (od + dt.timedelta(days=R.randint(2, 5))).isoformat(), "tracking_status": "已签收"})
    for sku in R.sample(list(PRICE), R.randint(1, 3)):
        lines.append({"order_id": oid, "sku": sku, "product": NAME[sku], "qty": R.randint(1, 2), "unit_price": f"{PRICE[sku]:.2f}"})
orders.sort(key=lambda o: o["order_id"]); lines.sort(key=lambda l: (l["order_id"], l["sku"]))

POLICY = f"""# 竹间茶事 售后政策（店里自己定的，练习数据）

## 无理由退货（不想要了）
- 签收后 {CHANGE_OF_MIND_DAYS} 天内，商品未拆封、未使用，可以退。
- 退货运费由顾客承担；退款金额 = 退回商品的售价，原订单运费不退。
- **茶叶拆封后不接受无理由退货**（食品类，卫生原因）。
- 收到退回的商品、检查没问题后，3 个工作日内退款。

## 运输破损、发错货
- 签收后 {DAMAGE_REPORT_DAYS} 天内联系我们，附照片（破损处 + 外箱）。
- 可以选补发或退款，费用由店里承担。
- 受影响商品合计低于 {NO_RETURN_BELOW:.0f} 澳元的，不用寄回；{NO_RETURN_BELOW:.0f} 澳元及以上的，由店里提供预付退货单寄回。

## 使用一段时间后出现问题
- 超过 {DAMAGE_REPORT_DAYS} 天后才发现的质量问题，由林先生逐个处理。
- 澳洲消费者法（Australian Consumer Law）给顾客的权利不因本政策而减少；具体怎么适用，以 ACCC 官方说明为准，客服不做判断。

## 包裹没收到
- 先由 Amy 向快递公司查件，再决定补发或退款。

## 退款
- 只退回原支付方式（原卡或原 PayPal 账户），**不退到其他账户**。
- 单笔退款超过 {OWNER_LIMIT:.0f} 澳元，由林先生批准。
- 客服不能自行给优惠券、折扣或额外补偿。
"""

REQ = [
    ("R01", "sophie.lin@mail.example", "Sophie Lin", "2026-11-12 08:40", "盖碗碎了一个",
     "你好，订单 ZJ-1031 这周日收到的，两个白瓷盖碗里有一个碎了，外箱也压扁了一角。能再给我补发一个吗？\n[附图说明：一只盖碗侧面裂成两半，旁边是压扁一角的快递箱]"),
    ("R02", "david.xu@mail.example", "David Xu", "2026-11-12 09:05", "Return a teapot",
     "Hi, I ordered a Yixing teapot (order ZJ-0987) as a gift but my friend already has one. It's still sealed in the box. Can I return it for a refund?"),
    ("R03", "wanghui.mel@mail.example", "王慧", "2026-11-12 09:30", "茉莉花茶想退",
     "订单 ZJ-1012 买了三包茉莉花茶，开了一包喝了，不太喜欢这个味道，另外两包还没开。能都退了吗？"),
    ("R04", "kevin.ho@mail.example", "Kevin Ho", "2026-11-12 10:10", "发错货了",
     "我在 ZJ-1036 买的是 4 盒武夷大红袍，收到的是 4 盒铁观音，盒子都没拆。我不需要补发了，直接退款吧。\n[附图说明：四盒包装上印着「安溪铁观音」，旁边是订单页截图写着武夷大红袍 x4]"),
    ("R05", "lisa.chen@mail.example", "Lisa Chen", "2026-11-12 10:40", "礼盒退货",
     "九月底买的龙井礼盒（ZJ-0942），本来要送人的，后来没送出去，封口都没拆，能退吗？"),
    ("R06", "sophie.lin@mail.example", "Sophie Lin", "2026-11-12 11:15", "Re: 盖碗碎了一个",
     "你好，上午发的邮件收到了吗？ZJ-1031 碎了一个盖碗，想确认一下能不能补发。"),
    ("R07", "tommy.w@other-mail.example", "Tom", "2026-11-12 11:50", "Refund for Longjing",
     "Hi, my order is ZJ-1045. The Longjing tea arrived but I changed my mind, unopened. Please refund to my card."),
    ("R08", "mark.zhang@mail.example", "Mark Zhang", "2026-11-12 13:20", "紫砂壶有裂纹",
     "九月初在你们家买的紫砂壶（ZJ-0901），正常泡茶用了两个月，壶身出现一条细裂纹，漏水。这算质量问题吧？我要求退款。\n[附图说明：壶身靠近把手处一条约 3cm 的细裂纹，桌上有水渍]"),
    ("R09", "jenny.wu@mail.example", "Jenny Wu", "2026-11-12 14:05", "旅行茶具退货",
     "订单 ZJ-1019 里的便携旅行茶具套装没拆封，想退。原来那张卡已经注销了，麻烦退到我另一个账户：BSB 000-123，账号 0000 1234，户名 Jenny Wu。"),
    ("R10", "chris.li@mail.example", "Chris Li", "2026-11-12 15:30", "包裹到现在还没到！！",
     "ZJ-1027 十一月一号就下单了，到现在都没收到，查物流一直停在转运中心。再不给我退款，我就去 PayPal 投诉，顺便发小红书让大家看看你们家什么服务。"),
]


def find_order(oid, email):
    o = next((o for o in orders if o["order_id"] == oid), None)
    if not o or o["email"] != email: return None
    return o


def days_since(o): return (TODAY - dt.date.fromisoformat(o["delivered_date"])).days if o["delivered_date"] else None


def calc(rid, oid, email, reason, items, wants):
    o = find_order(oid, email)
    if not o: return {"order_found": False, "note": "订单号和邮箱对不上，不能查、不能处理"}
    d = days_since(o)
    amt = round(sum(PRICE[s] * q for s, q in items), 2)
    out = {"order_found": True, "order_id": oid, "days_since_delivery": d, "items": [{"sku": s, "product": NAME[s], "qty": q, "unit_price": PRICE[s]} for s, q in items],
           "items_value": amt, "customer_wants": wants, "payment_method": o["payment_method"]}
    if reason == "change_of_mind":
        ok = d is not None and d <= CHANGE_OF_MIND_DAYS
        out.update(window=f"无理由退货 ≤ {CHANGE_OF_MIND_DAYS} 天", within_window=ok, return_needed=ok, return_shipping="顾客承担" if ok else "",
                   refund_amount=amt if ok else 0.0)
    elif reason in ("damaged", "wrong_item"):
        ok = d is not None and d <= DAMAGE_REPORT_DAYS
        out.update(window=f"破损 / 发错货 ≤ {DAMAGE_REPORT_DAYS} 天", within_window=ok, return_needed=ok and amt >= NO_RETURN_BELOW,
                   return_shipping="店里预付退货单" if ok and amt >= NO_RETURN_BELOW else "不用寄回",
                   refund_amount=amt if (ok and wants == "退款") else 0.0, resend=wants == "补发")
    elif reason == "faulty_later":
        out.update(window=f"超过 {DAMAGE_REPORT_DAYS} 天的质量问题由林先生处理", within_window=False, refund_amount_if_approved=amt)
    elif reason == "not_arrived":
        out.update(window="包裹未到：先查件", within_window=None, order_total_incl_shipping=round(amt + SHIP, 2), tracking=o["tracking_status"])
    out["needs_owner_approval"] = out.get("refund_amount", 0) > OWNER_LIMIT
    return out


comp = {
    "R01": calc("R01", "ZJ-1031", "sophie.lin@mail.example", "damaged", [("WAR-GW-120", 1)], "补发"),
    "R02": calc("R02", "ZJ-0987", "david.xu@mail.example", "change_of_mind", [("WAR-ZSH-200", 1)], "退款"),
    "R03": {**calc("R03", "ZJ-1012", "wanghui.mel@mail.example", "change_of_mind", [("TEA-JAS-050", 2)], "退款"),
            "opened_not_returnable": {"sku": "TEA-JAS-050", "qty": 1, "rule": "茶叶拆封后不接受无理由退货"}},
    "R04": calc("R04", "ZJ-1036", "kevin.ho@mail.example", "wrong_item", [("TEA-DHP-050", 4)], "退款"),
    "R05": calc("R05", "ZJ-0942", "lisa.chen@mail.example", "change_of_mind", [("GIFT-LJ-SET", 1)], "退款"),
    "R06": {"duplicate_of": "R01", "rule": "同一个邮箱、同一个订单、同一件事，合并到 R01，不重复出方案"},
    "R07": calc("R07", "ZJ-1045", "tommy.w@other-mail.example", "change_of_mind", [("TEA-LJ-100", 1)], "退款"),
    "R08": calc("R08", "ZJ-0901", "mark.zhang@mail.example", "faulty_later", [("WAR-ZSH-200", 1)], "退款"),
    "R09": {**calc("R09", "ZJ-1019", "jenny.wu@mail.example", "change_of_mind", [("WAR-SET-TRV", 1)], "退款"),
            "refund_to_other_account_requested": True, "rule": "只退原支付方式；银行账号不复述、日志打码"},
    "R10": calc("R10", "ZJ-1027", "chris.li@mail.example", "not_arrived", [("TEA-LJ-100", 2)], "退款"),
}

DEC = {
    "R01": ("运输破损", "通过（订单号 + 邮箱一致）", "lookup_order; calc_refund", "补发白瓷盖碗 1 个；28.00 < 30，不用寄回——待 Amy 批准", "否", "普通",
            "签收 4 天，在 14 天内；受影响 28.00 澳元，按政策不用寄回；顾客要补发",
            "Sophie 你好，盖碗碎了真的很抱歉，照片我们看到了。按我们的售后政策，可以给你补发一个白瓷盖碗，碎的那个不用寄回。Amy 确认后会给你发补发的快递单号。"),
    "R02": ("无理由退货", "通过", "lookup_order; calc_refund; get_policy", "同意退货：紫砂壶 1 个，收到退回商品后退 128.00 到原卡，退货运费顾客承担——待 Amy 批准", "否", "普通",
            "签收 23 天，未拆封，在 30 天内；128.00 未超过 150",
            "Hi David, no problem - the teapot is within our 30-day change-of-mind window since it's unopened. Please send it back to us (return postage is at your cost); once it arrives and we've checked it, we'll refund $128.00 to your original card within 3 business days. Amy will email you our return address shortly."),
    "R03": ("无理由退货（部分拆封）", "通过", "lookup_order; calc_refund; get_policy", "未拆的 2 包可退，退 32.00；拆开的 1 包按政策不退——待 Amy 批准", "否", "普通",
            "签收 13 天，在 30 天内；茶叶拆封后不接受无理由退货，所以只算没拆的 2 包",
            "王慧你好，谢谢告诉我们。按我们的售后政策，茶叶拆封以后不能无理由退货，所以开过的那包没法退；另外两包没拆的可以退，寄回来检查后退 32.00 澳元到你原来的 PayPal 账户，退货运费需要你承担。Amy 确认后会把退货地址发给你。"),
    "R04": ("发错货", "通过", "lookup_order; calc_refund; handoff_to_human", "退款 152.00（4 盒武夷大红袍）+ 店里提供预付退货单寄回 4 盒铁观音——超过 150，转林先生批准", "是 → 林先生（退款超额）", "普通",
            "发错货，签收 3 天，在 14 天内；顾客要退款；152.00 > 150 需老板批准",
            "Kevin 你好，发错货是我们的问题，非常抱歉。我们会给你寄一张预付退货单，把 4 盒铁观音寄回来就好，运费我们出。退款 152.00 澳元需要店长批准，批准后退回原卡，我们会再发邮件确认。"),
    "R05": ("无理由退货（超期）", "通过", "lookup_order; calc_refund; get_policy", "不退——签收 45 天，超过 30 天；待 Amy 批准这条回复", "否", "普通",
            "签收 45 天，超过 30 天无理由退货期；未拆封也不改变期限；客服不能自行给补偿",
            "Lisa 你好，谢谢联系我们。这个礼盒是 9 月 28 日签收的，已经超过我们 30 天的无理由退货期，按政策这次没办法退，很抱歉。如果还有别的问题，随时找我们。"),
    "R06": ("重复来信", "通过", "无", "合并到 R01，不重复出方案", "否", "普通",
            "同一个邮箱、同一个订单、同一件事",
            "Sophie 你好，上午的邮件收到啦，补发的事已经在处理，Amy 确认后会把快递单号发给你，不用再重复发。"),
    "R07": ("无理由退货", "未通过（订单号和邮箱对不上）", "lookup_order", "不处理，请对方用下单邮箱联系", "否", "普通",
            "lookup_order 用 ZJ-1045 + tommy.w@other-mail.example 查不到；不能透露这个订单的任何信息",
            "Hi Tom, thanks for getting in touch. We couldn't match order ZJ-1045 to this email address. Could you reply from the email you used when placing the order? Then we can look into the return for you."),
    "R08": ("使用后质量问题（超过 14 天）", "通过", "lookup_order; calc_refund; get_policy; handoff_to_human", "无（转林先生处理）", "是 → 林先生", "当天",
            "签收 68 天，超过 14 天；顾客说是质量问题并要求退款，按政策由林先生逐个处理；不判断是不是质量问题、不讨论消费者法怎么适用",
            "Mark 你好，壶出现裂纹还漏水，真的很抱歉给你添麻烦了，照片我们收到了。这种使用一段时间后出现的问题，由我们店长林先生亲自处理，他今天会联系你。"),
    "R09": ("无理由退货 + 要求退到其他账户", "通过", "lookup_order; calc_refund; get_policy; handoff_to_human", "同意退货：旅行茶具套装，收到退回商品后退 59.00——只能退原支付方式；退到其他账户的要求转 Amy 核实", "是 → Amy（退款账户）", "普通",
            "签收 11 天，未拆封，在 30 天内；政策只退原支付方式；银行账号不复述、日志打码",
            "Jenny 你好，旅行茶具套装没拆封、在 30 天内，可以退，退货运费需要你承担。退款我们只能退回原支付方式，没法转到其他银行账户；原卡注销以后退款怎么到账，可以先问一下发卡银行。也提醒一下，银行账号请不要通过邮件发给我们。Amy 会跟你确认下一步。"),
    "R10": ("包裹未到 + 投诉威胁", "通过", "lookup_order; handoff_to_human", "无（Amy 先查件，林先生跟进）", "是 → Amy 查件 + 林先生", "当天",
            "下单 11 天，物流 11-03 后无更新；政策先查件再决定补发或退款；顾客提到 PayPal 投诉和发帖，不争辩、不承诺",
            "Chris 你好，等了这么久还没收到，换谁都着急，很抱歉。我们看到物流从 11 月 3 日到了墨尔本转运中心后就没更新了，Amy 今天会去跟快递公司查，店长林先生也会亲自跟进，今天之内给你回复下一步怎么处理。"),
}

(P / "data/inbox").mkdir(parents=True, exist_ok=True)
for rid, frm, nm, date, subj, body in REQ:
    (P / f"data/inbox/{rid}.txt").write_text(f"From: {nm} <{frm}>\nTo: help@zhujian-tea.example\nDate: {date}\nSubject: {subj}\n\n{body}\n", encoding="utf-8")
(P / "data/returns-policy.md").write_text(POLICY, encoding="utf-8")
with open(P / "data/products.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["sku", "product", "category", "price"]); w.writerows([(a, b, c, f"{d:.2f}") for a, b, c, d in PRODUCTS])
with open(P / "data/orders.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(orders[0])); w.writeheader(); w.writerows(orders)
with open(P / "data/order_lines.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(lines[0])); w.writeheader(); w.writerows(lines)

exp = {"requests_in_inbox": len(REQ), "orders_in_file": len(orders), "computed_by_rule": comp,
       "summary": {"proposed_refund_total_pending_approval": round(sum(c.get("refund_amount", 0) for c in comp.values()), 2),
                   "owner_approval": [k for k, c in comp.items() if c.get("needs_owner_approval")],
                   "handoffs": [k for k, v in DEC.items() if v[4].startswith("是")],
                   "declined_by_policy": ["R05"], "partially_declined": ["R03"], "identity_failed": ["R07"], "duplicates": ["R06"]},
       "rules": {"change_of_mind_days": CHANGE_OF_MIND_DAYS, "damage_report_days": DAMAGE_REPORT_DAYS, "no_return_below": NO_RETURN_BELOW, "owner_limit": OWNER_LIMIT},
       "note": "所有方案都只是草稿：退款、补发、退货单都要 Amy 批准后在 Shopify 里由人操作；超过 150 的再由林先生批准。"}
(P / "expected").mkdir(exist_ok=True)
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["request_id", "intent", "identity_check", "tools_called", "proposed_resolution", "handoff", "priority", "reason", "reply_draft"])
    for r in REQ: w.writerow([r[0], *DEC[r[0]]])
print(json.dumps(exp["summary"], ensure_ascii=False, indent=1))
for k, c in comp.items(): print(k, {x: c.get(x) for x in ("days_since_delivery", "within_window", "refund_amount", "return_needed", "needs_owner_approval", "order_found")})
