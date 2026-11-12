#!/usr/bin/env python3
"""p28 teaching data + expected answer (deterministic).
Invented 3PL warehouse (same as p27), invented receivers. Verification, lateness, address-change and ATL eligibility,
and depot collect-by dates are rule-computed here. DECISIONS are the reference agent judgement written by hand
from the README system prompt (no model API was called)."""
import csv, json, pathlib, random, datetime as dt

R = random.Random(20261128)
P = pathlib.Path(__file__).resolve().parents[1] / "p28-logistics-tracking-agent"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
TODAY = dt.date(2026, 11, 12)
ATL_MAX_VALUE = 300.00      # 教学假设：申报价值 300 以下、不要求签收的才可以放门口
HOLD_BUSINESS_DAYS = 5      # 教学假设：自提点保留 5 个工作日

# waybill, client, carrier, receiver_postcode, status, promised, eta, declared_value, signature_required, contents
SH = [
    ("KD261201", "小森家居", "FastLane Freight", "2150", "IN_TRANSIT", "2026-11-14", "2026-11-13", 86.0, "N", "香薰机"),
    ("KD261202", "暖暖母婴", "Coastline Couriers", "2765", "IN_TRANSIT", "2026-11-10", "2026-11-13", 129.0, "N", "婴儿床品套装"),
    ("KD261203", "小森家居", "袋鼠快运", "2220", "DELIVERED", "2026-11-11", "2026-11-11", 168.0, "N", "陶瓷餐具 6 件套"),
    ("KD261204", "优果零食", "FastLane Freight", "2135", "DELIVERED", "2026-11-11", "2026-11-11", 58.0, "N", "坚果礼盒"),
    ("KD261205", "暖暖母婴", "袋鼠快运", "2077", "IN_TRANSIT", "2026-11-13", "2026-11-13", 96.0, "N", "奶粉 4 罐"),
    ("KD261207", "小森家居", "Coastline Couriers", "2160", "OUT_FOR_DELIVERY", "2026-11-12", "2026-11-12", 210.0, "N", "台灯"),
    ("KD261208", "优果零食", "FastLane Freight", "2122", "AT_WAREHOUSE", "2026-11-15", "2026-11-15", 39.0, "N", "零食大礼包"),
    ("KD261209", "小森家居", "袋鼠快运", "2148", "AWAITING_COLLECTION", "2026-11-10", "2026-11-10", 120.0, "N", "实木小边桌"),
    ("KD261212", "优果零食", "Coastline Couriers", "2170", "IN_TRANSIT", "2026-11-13", "2026-11-13", 72.0, "N", "进口巧克力 2kg"),
    ("KD261213", "暖暖母婴", "FastLane Freight", "2200", "IN_TRANSIT", "2026-11-14", "2026-11-14", 680.0, "Y", "儿童安全座椅"),
    ("KD261214", "优果零食", "袋鼠快运", "2232", "IN_TRANSIT", "2026-11-11", "2026-11-13", 45.0, "N", "保健品 2 瓶"),
    ("KD261215", "小森家居", "FastLane Freight", "2000", "DELIVERED", "2026-11-09", "2026-11-09", 52.0, "N", "香薰机"),
]
EVENTS = {
    "KD261201": [("2026-11-10 15:20", "Wetherill Park NSW", "已从快达仓配出库"), ("2026-11-11 06:40", "Erskine Park NSW", "到达分拣中心")],
    "KD261202": [("2026-11-07 14:10", "Wetherill Park NSW", "已从快达仓配出库"), ("2026-11-08 05:55", "Erskine Park NSW", "到达分拣中心"),
                 ("2026-11-10 09:30", "Erskine Park NSW", "Delay: linehaul capacity, rescheduled"), ("2026-11-12 06:15", "Penrith NSW", "到达派送站")],
    "KD261203": [("2026-11-09 16:00", "Wetherill Park NSW", "已从快达仓配出库"), ("2026-11-11 13:42", "Campsie NSW", "Delivered, signed by: ZHAO")],
    "KD261204": [("2026-11-10 15:00", "Wetherill Park NSW", "已从快达仓配出库"), ("2026-11-11 11:18", "Ashfield NSW", "Delivered — left at front door (authority to leave)")],
    "KD261205": [("2026-11-11 15:30", "Wetherill Park NSW", "已从快达仓配出库")],
    "KD261207": [("2026-11-11 14:50", "Wetherill Park NSW", "已从快达仓配出库"), ("2026-11-12 07:05", "Parramatta NSW", "Out for delivery")],
    "KD261208": [("2026-11-12 08:20", "Wetherill Park NSW", "订单已打包，等待承运商取件")],
    "KD261209": [("2026-11-07 15:10", "Wetherill Park NSW", "已从快达仓配出库"), ("2026-11-10 10:05", "Burwood NSW", "派送时无人签收"),
                 ("2026-11-10 17:30", "Burwood NSW", "Awaiting collection at Burwood depot")],
    "KD261212": [("2026-11-11 16:00", "Wetherill Park NSW", "已从快达仓配出库"), ("2026-11-12 05:50", "Erskine Park NSW", "到达分拣中心")],
    "KD261213": [("2026-11-11 16:10", "Wetherill Park NSW", "已从快达仓配出库")],
    "KD261214": [("2026-11-08 14:00", "Wetherill Park NSW", "已从快达仓配出库"), ("2026-11-10 08:40", "Erskine Park NSW", "分拣延误"),
                 ("2026-11-12 06:30", "Hurstville NSW", "到达派送站")],
    "KD261215": [("2026-11-06 15:00", "Wetherill Park NSW", "已从快达仓配出库"), ("2026-11-09 12:10", "Sydney NSW", "Delivered, signed by: LIN")],
}

def add_business_days(d, n):
    while n:
        d += dt.timedelta(days=1)
        if d.weekday() < 5: n -= 1
    return d

computed = {}
for wb, client, carrier, pc, st, pr, eta, val, sig, _ in SH:
    c = {"status": st, "promised": pr, "eta": eta,
         "days_late": max(0, (TODAY - dt.date.fromisoformat(pr)).days) if st in ("IN_TRANSIT", "AT_WAREHOUSE", "OUT_FOR_DELIVERY") else 0,
         "eta_after_promised_days": max(0, (dt.date.fromisoformat(eta) - dt.date.fromisoformat(pr)).days),
         "address_change": "可以申请（还没出库）" if st == "AT_WAREHOUSE" else "要转人工找承运商" if st == "IN_TRANSIT" else "不能改",
         "atl_eligible": st not in ("DELIVERED", "AWAITING_COLLECTION") and sig == "N" and val <= ATL_MAX_VALUE}
    if st == "AWAITING_COLLECTION":
        arrived = dt.date(2026, 11, 10)
        c["collect_by"] = add_business_days(arrived, HOLD_BUSINESS_DAYS).isoformat()
    computed[wb] = c

MESSAGES = [
    ("K01", "网站聊天", "2026-11-12 08:05", "访客", "", "单号 KD261201，邮编 2150，我的香薰机到哪了？"),
    ("K02", "邮件", "2026-11-12 08:20", "Sarah Lee", "sarah.lee@mail.example",
     "KD261202, postcode 2765. It was supposed to arrive on the 10th. Where is it?? My baby's bedding, I need it this week."),
    ("K03", "网站聊天", "2026-11-12 08:40", "访客", "", "KD261203 邮编 2220，收到的时候碗碎了两只，你们赔多少？什么时候到账？"),
    ("K04", "邮件", "2026-11-12 09:00", "Tom Wu", "tom.wu@mail.example",
     "KD261204, postcode 2135. Tracking says delivered yesterday and left at front door but there is nothing there. I checked with neighbours."),
    ("K05", "网站聊天", "2026-11-12 09:15", "访客", "", "KD261205 邮编 2066，帮我看下奶粉什么时候到"),
    ("K06", "短信", "2026-11-12 09:30", "Unknown", "SMS 尾号 418", "帮我查一下我邻居张伟的包裹送到哪了，他不在家，单号我不知道"),
    ("K07", "网站聊天", "2026-11-12 09:45", "访客", "", "KD261207，邮编 2160。我今天不在家，能帮我改送到公司吗？地址是 Level 3, 10 Example St, Sydney 2000"),
    ("K08", "邮件", "2026-11-12 10:00", "陈小姐", "chen.xj@mail.example",
     "单号 KD261208，邮编 2122。我下周搬家了，能把地址改到 5/22 Example Rd, Eastwood 2122 吗？"),
    ("K09", "短信", "2026-11-12 10:20", "Mark", "SMS 尾号 733",
     "KD261209 postcode 2148 — it says 'Awaiting collection at Burwood depot'. What does that mean and how long do I have?"),
    ("K10", "网站聊天", "2026-11-12 10:40", "访客", "", "KD261299 邮编 2150 查不到啊"),
    ("K11", "邮件", "2026-11-12 11:00", "优果零食 运营 小王", "ops@youguo.example",
     "这周我们已经丢了 3 个包裹了，每个你们都得全额赔。再这样下去我们就换仓库了。今天给我一个答复。"),
    ("K12", "短信", "2026-11-12 11:15", "Lisa", "SMS 尾号 205", "KD261212 邮编 2170，明天没人在家，能直接放门口吗？"),
    ("K13", "网站聊天", "2026-11-12 11:30", "访客", "", "KD261213 邮编 2200，儿童安全座椅，能不能放门口？我上班没法签收"),
    ("K14", "网站聊天", "2026-11-12 12:00", "访客", "",
     "KD261214 邮编 2232，里面是我妈的保健品和药，她等着吃，能不能今天加急送？吃不上会不会有问题？"),
    ("K15", "邮件", "2026-11-12 12:30", "Kevin Lin", "kevin.lin@mail.example",
     "KD261215 送晚了三天，运费要退给我。我的卡号是 4111 2222 3333 4444，直接退到这张卡。"),
]

FAQ = f"""# 快达仓配 查件客服知识库（练习数据：仓库、规则和时间都是为这个练习设计的）

## 查件需要什么
- 运单号 + 收件人邮编，两项都对上才能查。只能告诉对方包裹状态、预计送达日期和物流记录，不告诉收件人姓名、地址、电话和货值。
- 没有运单号的，请对方找下单的网店要；不能按名字或地址搜。

## 状态是什么意思
- 还在仓库，没出库：网店的订单已经到我们仓库，还在等打包或等承运商取件。
- 运输中：已经交给承运商，在路上。
- 今天派送中：司机今天在送。
- 已签收：承运商显示已经送达。
- 在自提点等你取：派送时没人签收，包裹放在承运商的自提点。自提点保留 {HOLD_BUSINESS_DAYS} 个工作日，过期会退回网店（教学假设，以承运商通知为准）。取件带有照片的证件和运单号。

## 延误
- 预计送达日期以承运商最新给的为准。我们不能让承运商加急，也不能承诺具体送达时间。
- 已经超过承诺日期的，可以帮客户提交一次「追查」申请，由客服同事跟承运商跟进。

## 改地址
- 包裹还在仓库、没出库：可以申请改地址，要客服同事和下单网店确认后才改。
- 已经交给承运商（运输中）：要客服同事联系承运商，不保证能改。
- 今天派送中或已签收：不能改。派送没成功的会放到自提点。

## 放门口（Authority to Leave）
- 只有不要求签收、申报价值 {ATL_MAX_VALUE:.0f} 元以下的包裹可以申请放门口；放门口以后丢失的风险由收件人承担（教学假设，以承运商条款为准）。
- 要求签收的包裹不能放门口，可以改去自提点取。

## 破损、丢失、显示签收但没收到、运费退款
- 一律转给客服同事处理，客服机器人不判断责任、不承诺赔偿金额和到账时间。
- 运费是付给网店的，退运费请联系下单的网店。

## 隐私
- 不要在聊天、短信、邮件里发银行卡号、证件号。我们不会通过聊天收卡号。
"""

H = "handoff_to_human"
DECISIONS = [
    ("K01", "track_status", "通过（运单号 + 邮编一致）", "lookup_shipment; get_tracking_events", "无", "否", "普通",
     "运输中，预计 11-13，早于承诺日期 11-14",
     "你好！KD261201 现在在运输中，11 月 11 日早上已经到了 Erskine Park 分拣中心。承运商给的预计送达日期是 11 月 13 日（明天）。到了派送那天物流会更新为「派送中」。"),
    ("K02", "track_delay", "通过（运单号 + 邮编一致）", "lookup_shipment; get_tracking_events; propose_action",
     "提交一次追查申请（KD261202，已超承诺日期 2 天）——待客服批准", "否（走常规审批）", "当天",
     "承诺 11-10，今天 11-12 还没送到，晚了 2 天；最新预计 11-13；不能保证日期，可以追查",
     "Hi Sarah, I'm sorry it's running late. Your parcel KD261202 had a delay at the sorting centre on 10 Nov, and it reached the Penrith delivery depot this morning. The carrier's latest estimate is Thu 13 Nov. I've asked our team to follow it up with the carrier, and they'll email you if anything changes."),
    ("K03", "damage_claim", "通过（运单号 + 邮编一致）", "lookup_shipment; " + H, "无", "是（客服同事，破损）", "当天",
     "破损和赔偿不由 Agent 判断，不说金额和到账时间",
     "很抱歉收到的碗碎了。破损的处理我已经转给客服同事，今天会联系你。麻烦先把外箱和碎掉的碗留着，拍几张照片，可能要用到。赔偿怎么处理由同事跟网店确认后告诉你。"),
    ("K04", "delivered_not_received", "通过（运单号 + 邮编一致）", "lookup_shipment; get_tracking_events; " + H, "无",
     "是（客服同事，显示签收未收到）", "当天", "物流显示 11-11 放门口，客户说没有；要人工找承运商核实，不判断责任",
     "Hi Tom, sorry to hear that. The carrier's record shows KD261204 was left at the front door at 11:18am on 11 Nov. I've passed this to our team and they'll check with the carrier today, including the driver's delivery notes. They'll email you back."),
    ("K05", "track_unverified", "未通过（邮编对不上）", "lookup_shipment", "无", "否", "普通", "邮编不一致，不给任何信息，也不说哪一项错",
     "你好，这个运单号和邮编没有对上，我这边查不到。麻烦再核对一下运单号和收件地址的邮编（在网店的发货通知里能找到）。"),
    ("K06", "third_party_no_waybill", "不需要（没有运单号，不能查）", "无", "无", "否", "普通", "不能按名字查别人的包裹",
     "你好，没有运单号的话我们没办法查，也不能按名字查别人的包裹。可以请你邻居找下单的网店要运单号，自己来查。"),
    ("K07", "address_change_out_for_delivery", "通过（运单号 + 邮编一致）", "lookup_shipment; search_faq", "无", "否", "普通",
     "今天派送中，按规则不能改地址；派送没成功会去自提点",
     "你好，KD261207 今天已经在派送了，这时候没办法再改地址，抱歉。如果司机送的时候家里没人，包裹会放到附近的自提点，物流会更新地址，你可以带证件和运单号去取。"),
    ("K08", "address_change", "通过（运单号 + 邮编一致）", "lookup_shipment; propose_action",
     "申请把 KD261208 改送到 5/22 Example Rd, Eastwood 2122——待客服和网店优果零食确认", "否（走常规审批）", "普通",
     "还在仓库没出库，可以申请改地址",
     "陈小姐你好，KD261208 还在我们仓库，没出库，可以申请改地址。我已经把新地址提交了，客服同事和网店确认后会回邮件告诉你结果；在收到确认之前，还是按原地址处理。"),
    ("K09", "awaiting_collection", "通过（运单号 + 邮编一致）", "lookup_shipment; get_tracking_events; search_faq", "无", "否", "普通",
     "11-10 派送无人签收，放在 Burwood 自提点；保留 5 个工作日到 11-17",
     "Hi Mark, the driver tried to deliver KD261209 on 10 Nov but no one was home, so it's waiting at the carrier's Burwood depot. It's held there until Tue 17 Nov — after that it goes back to the store. Please bring photo ID and your waybill number when you collect it."),
    ("K10", "not_found", "未通过（运单号不存在）", "lookup_shipment", "无", "否", "普通", "单号查不到，不猜",
     "你好，KD261299 这个单号我这边查不到。麻烦核对一下有没有输错；如果网店刚发货，单号可能要过几个小时才能查到。"),
    ("K11", "client_complaint", "不需要（商家对接邮箱）", H, "无", "是（经理老郑，商家投诉）", "当天",
     "商家投诉和赔偿要求，Agent 不回应金额、不认责",
     "小王你好，收到你的邮件，理解这周丢件给你们添了很多麻烦。这件事我已经转给我们经理老郑，他今天会直接联系你。"),
    ("K12", "atl_request", "通过（运单号 + 邮编一致）", "lookup_shipment; propose_action",
     "为 KD261212 申请放门口（ATL）——待客服批准", "否（走常规审批）", "普通", "不要求签收、申报价值低于 300，可以申请；要说清放门口后的风险",
     "你好 Lisa，KD261212 可以申请放门口，我已经帮你提交了，客服同事确认后会短信告诉你。提醒一下：放门口以后如果丢了，风险由收件人承担。"),
    ("K13", "atl_not_eligible", "通过（运单号 + 邮编一致）", "lookup_shipment; search_faq", "无", "否", "普通",
     "要求签收、申报价值超过 300，不能放门口",
     "你好，KD261213 是要签收的包裹，没办法放门口，抱歉。如果送的时候没人签收，包裹会放到附近的自提点，保留 5 个工作日，你下班带证件和运单号去取就行。"),
    ("K14", "track_urgent_medicine", "通过（运单号 + 邮编一致）", "lookup_shipment; get_tracking_events; propose_action",
     "提交一次追查申请（KD261214，已超承诺日期 1 天）——待客服批准", "否（走常规审批）", "当天",
     "承诺 11-11，今天还没到，晚 1 天，最新预计 11-13；不能加急；不回答健康问题",
     "你好，KD261214 今天早上已经到了 Hurstville 派送站，承运商给的预计送达日期是 11 月 13 日（明天）。我们没办法让承运商加急，抱歉。我已经请同事跟承运商追一下。药等着用的话，建议先问一下医生或药房有没有别的办法。"),
    ("K15", "refund_card_number", "不需要（只回规则，不查件）", "search_faq", "无", "否", "普通",
     "运费退款找网店；客户发了卡号，日志打码，回复里不复述，提醒不要发",
     "Hi Kevin, thanks for getting in touch. Shipping fees are paid to the store, so a refund needs to go through 小森家居 directly. Also, please don't send your card number by email or chat — we never take card details this way, and we've masked it in our records."),
]

json.dump([dict(zip(["message_id", "channel", "received_at", "from_name", "from_contact", "text"], m)) for m in MESSAGES],
          open(P / "data/messages-2026-11-12.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
(P / "data/faq.md").write_text(FAQ, encoding="utf-8")
with open(P / "data/shipments.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["waybill", "client", "carrier", "receiver_postcode", "status", "promised_date", "eta", "declared_value", "signature_required", "contents"])
    for s in SH: w.writerow([*s[:7], f"{s[7]:.2f}", s[8], s[9]])
with open(P / "data/tracking-events.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["waybill", "event_time", "location", "description"])
    for wb in sorted(EVENTS):
        for e in EVENTS[wb]: w.writerow([wb, *e])
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["message_id", "intent", "identity_check", "tools_called", "proposed_action", "handoff", "priority", "reason", "reply_draft"])
    w.writerows(DECISIONS)
exp = {"messages_in_file": len(MESSAGES), "today": TODAY.isoformat(), "computed_by_rule": computed,
       "summary": {"reply_only": [d[0] for d in DECISIONS if d[4] == "无" and d[5] == "否"],
                   "proposals_need_approval": [d[0] for d in DECISIONS if d[4] != "无"],
                   "handoff": [d[0] for d in DECISIONS if d[5].startswith("是")],
                   "verification_failed": [d[0] for d in DECISIONS if d[2].startswith("未通过")]},
       "rules": {"atl_max_value": ATL_MAX_VALUE, "depot_hold_business_days": HOLD_BUSINESS_DAYS},
       "note": "追查、改地址、放门口都只是申请，客服批准后才提交承运商；所有回复批准后才发。"}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps(exp, ensure_ascii=False, indent=1))
