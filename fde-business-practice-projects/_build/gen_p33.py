#!/usr/bin/env python3
"""p33 teaching data + expected answer (deterministic).
Fictional Sydney travel agency. Which booking enters which stage (confirm / pre-trip reminder / post-trip follow-up)
and every hold is rule-computed here; message drafts in decisions.csv are hand-written references."""
import csv, json, pathlib, random, datetime as dt

R = random.Random(20261133)
P = pathlib.Path(__file__).resolve().parents[1] / "p33-travel-booking-reminder-followup"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(parents=True, exist_ok=True)
TODAY = dt.date(2026, 11, 12)

PRODUCTS = [  # code, name, intl, meeting_point, meeting_time, supplier, bring
    ("GC4", "黄金海岸 4 日家庭游", "否", "Gold Coast 机场到达厅 3 号门", "第一天 11:30", "Coastline Tours", "泳衣、防晒、帽子"),
    ("BM1", "蓝山一日游", "否", "Eastwood 火车站东侧出口", "07:30", "Ridgeway Coaches", "外套、舒服的鞋"),
    ("BM2", "蓝山两日游（含一晚住宿）", "否", "Eastwood 火车站东侧出口", "第一天 07:30", "Ridgeway Coaches", "外套、舒服的鞋、过夜用品"),
    ("NZS7", "新西兰南岛 7 日", "是", "Christchurch 机场国际到达厅", "第一天 14:00", "Southern Alps Travel", "护照、保暖外套、转换插头"),
    ("NZQ6", "皇后镇 6 日", "是", "Queenstown 机场到达厅", "第一天 12:00", "Southern Alps Travel", "护照、保暖外套、转换插头"),
    ("NZN5", "新西兰北岛 5 日（奥克兰 + 罗托鲁瓦）", "是", "Auckland 机场国际到达厅", "第一天 10:00", "Kiwi Link Tours", "护照、转换插头、泳衣（温泉）"),
    ("CNS4", "凯恩斯 4 日（大堡礁）", "否", "Cairns 机场到达厅", "第一天 13:00", "Reefside Holidays", "泳衣、防晒、晕船药请自备"),
    ("GOR3", "大洋路 3 日", "否", "Melbourne Southern Cross 站 1 号出口", "第一天 08:00", "Bayside Coaches", "外套、舒服的鞋"),
    ("TAS5", "塔斯马尼亚 5 日", "否", "Hobart 机场到达厅", "第一天 07:30", "Apple Isle Tours", "保暖外套、舒服的鞋"),
    ("ULU3", "乌鲁鲁 3 日", "否", "Ayers Rock 机场到达厅", "第一天 12:30", "Red Centre Trips", "帽子、防蝇网、水壶"),
    ("HV1", "猎人谷酒庄一日游", "否", "Eastwood 火车站东侧出口", "08:30", "Ridgeway Coaches", "身份证件（品酒需核对年龄）"),
]
PCOLS = ["product_code", "product_name", "international", "meeting_point", "meeting_time", "supplier", "what_to_bring"]
PROD = {p[0]: dict(zip(PCOLS, p)) for p in PRODUCTS}

# booking_id, created_at, lead_name, email, phone, lang, product, depart, return, travellers, adults, children, total,
# deposit, balance_due, balance_paid, status, marketing_opt_in, do_not_contact, confirmation_sent_at, reminder_sent_at, followup_sent_at, notes
B = [
    ("B01", "2026-11-11 10:20", "张伟", "zhangwei.family@mail.example", "0400 301 000", "zh", "GC4", "2026-12-20", "2026-12-23",
     "张伟;李娜;张小雨;张小乐", 2, 2, 3680.00, 1000.00, "2026-11-20", "否", "confirmed", "是", "否", "", "", "", ""),
    ("B02", "2026-11-11 13:05", "Emily Clarke", "emily.clarke@mail.example", "0400 302 000", "en", "BM1", "2026-11-28", "2026-11-28",
     "Emily Clarke;James Clarke", 2, 0, 318.00, 318.00, "2026-11-11", "是", "confirmed", "否", "否", "", "", "", ""),
    ("B03", "2026-11-11 15:40", "王丽", "wangli.syd@mail.example", "0400 303 000", "zh", "NZS7", "2027-01-08", "2027-01-14",
     "王丽;王建华", 3, 0, 8850.00, 2000.00, "2026-12-08", "否", "confirmed", "是", "否", "", "", "", "第三位同行人名字等她问了再给"),
    ("B04", "2026-11-11 22:41", "张伟", "zhangwei.family@mail.example", "0400 301 000", "zh", "GC4", "2026-12-20", "2026-12-23",
     "张伟;李娜;张小雨;张小乐", 2, 2, 3680.00, 1000.00, "2026-11-20", "否", "confirmed", "是", "否", "", "", "", "网站下单"),
    ("B05", "2026-11-11 16:10", "Daniel Wu", "daniel.wu@mail.example", "0400 305 000", "en", "ULU3", "2027-02-12", "2027-02-14",
     "Daniel Wu", 1, 0, 1890.00, 500.00, "2027-01-12", "否", "pending_supplier", "否", "否", "", "", "", "等供应商确认房型"),
    ("B06", "2026-10-02 09:15", "陈美华", "chen.meihua@mail.example", "0400 306 000", "zh", "CNS4", "2026-11-14", "2026-11-17",
     "陈美华;陈国强", 2, 0, 3260.00, 800.00, "2026-10-31", "是", "confirmed", "是", "否", "2026-10-02 10:00", "", "", ""),
    ("B07", "2026-09-20 11:30", "Liam Foster", "liam.foster@mail.example", "0400 307 000", "en", "GOR3", "2026-11-15", "2026-11-17",
     "Liam Foster;Zoe Foster", 2, 0, 1580.00, 400.00, "2026-11-01", "否", "confirmed", "否", "否", "2026-09-20 12:00", "", "", ""),
    ("B08", "2026-10-11 14:00", "刘建国", "liu.jianguo@mail.example", "0400 308 000", "zh", "TAS5", "2026-11-16", "2026-11-20",
     "刘建国;周秀兰", 2, 0, 3990.00, 1000.00, "2026-11-02", "是", "confirmed", "否", "否", "2026-10-11 14:30", "", "", ""),
    ("B09", "2026-10-05 10:45", "黄小玲", "huang.xiaoling@mail.example", "0400 309 000", "zh", "NZQ6", "2026-11-18", "2026-11-23",
     "黄小玲;黄母", 2, 0, 6420.00, 1500.00, "2026-11-04", "是", "confirmed", "是", "否", "2026-10-05 11:00", "", "",
     "客人微信问：我是中国护照，去新西兰要办签证吗？我妈 72 岁，有高血压，要买什么保险？"),
    ("B10", "2026-10-15 09:00", "Sophie Martin", "sophie.martin@mail.example", "0400 310 000", "en", "ULU3", "2026-11-19", "2026-11-21",
     "Sophie Martin", 1, 0, 1890.00, 500.00, "2026-11-05", "否", "cancelled", "否", "否", "2026-10-15 09:30", "", "", "11-03 客人取消，定金按条款处理"),
    ("B11", "2026-10-28 16:20", "孙磊", "sun.lei@mail.example", "0400 311 000", "zh", "HV1", "2026-11-13", "2026-11-13",
     "孙磊;吴静", 2, 0, 298.00, 298.00, "2026-10-28", "是", "confirmed", "否", "否", "2026-10-28 16:40", "2026-11-10 09:00", "", ""),
    ("B12", "2026-09-30 13:10", "Grace Tan", "grace.tan@mail.example", "0400 312 000", "en", "NZN5", "2026-11-17", "2026-11-21",
     "Grace Tan;Ryan Tan;Chloe Tan", 2, 1, 5480.00, 1500.00, "2026-11-03", "是", "confirmed", "是", "否", "2026-09-30 13:30", "", "", ""),
    ("B13", "2026-09-12 10:00", "李志明", "li.zhiming@mail.example", "0400 313 000", "zh", "GC4", "2026-11-05", "2026-11-08",
     "李志明;赵敏;李朵朵", 2, 1, 2980.00, 800.00, "2026-10-22", "是", "confirmed", "是", "否", "2026-09-12 10:20", "2026-11-03 09:00", "", ""),
    ("B14", "2026-10-01 15:00", "周明", "zhou.ming@mail.example", "0400 314 000", "zh", "BM2", "2026-11-08", "2026-11-09",
     "周明;钱芳", 2, 0, 860.00, 860.00, "2026-10-01", "是", "confirmed", "是", "否", "2026-10-01 15:20", "2026-11-06 09:00", "",
     "11-09 客人来电：导游迟到一个多小时，酒店房间跟订的不一样，很不满意"),
    ("B15", "2026-09-25 11:00", "Olivia Brown", "olivia.brown@mail.example", "0400 315 000", "en", "TAS5", "2026-11-03", "2026-11-07",
     "Olivia Brown;Mark Brown", 2, 0, 3990.00, 1000.00, "2026-10-20", "是", "confirmed", "否", "是", "2026-09-25 11:20", "2026-11-01 09:00", "",
     "客人要求以后除行程必要通知外不要联系"),
    ("B16", "2026-10-08 12:30", "Michael Lee", "michael.lee@mail.example", "0400 316 000", "en", "CNS4", "2026-11-07", "2026-11-10",
     "Michael Lee", 1, 0, 2150.00, 600.00, "2026-10-24", "是", "confirmed", "否", "否", "2026-10-08 12:50", "2026-11-05 09:00", "", ""),
    ("B17", "2026-09-18 09:40", "何晓东", "he.xiaodong@mail.example", "0400 317 000", "zh", "HV1", "2026-11-05", "2026-11-05",
     "何晓东;林佳", 2, 0, 298.00, 298.00, "2026-09-18", "是", "confirmed", "是", "否", "2026-09-18 10:00", "2026-11-03 09:00", "", ""),
    ("B18", "2026-10-20 14:15", "Hannah Scott", "hannah.scott@mail.example", "0400 318 000", "en", "BM1", "2026-11-11", "2026-11-11",
     "Hannah Scott;Ella Scott", 2, 0, 318.00, 318.00, "2026-10-20", "是", "confirmed", "是", "否", "2026-10-20 14:30", "2026-11-09 09:00", "", ""),
]
BCOLS = ["booking_id", "created_at", "lead_name", "email", "phone", "language", "product_code", "depart_date", "return_date",
         "traveller_names", "pax_adult", "pax_child", "total_aud", "deposit_paid", "balance_due_date", "balance_paid", "status",
         "marketing_opt_in", "do_not_contact", "confirmation_sent_at", "reminder_sent_at", "followup_sent_at", "notes"]
NOTICES = [("N-1107", "2026-11-10 17:20", "TAS5", "2026-11-16", "Apple Isle Tours",
            "11-16 团集合时间从 07:30 提前到 06:15，地点不变（Hobart 机场到达厅）。原因：第一天行程改为先去 Bruny Island 赶早班渡轮。")]
NCOLS = ["notice_id", "received_at", "product_code", "depart_date", "supplier", "change"]

with open(P / "data/bookings.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(BCOLS)
    for b in B: w.writerow([f"{x:.2f}" if isinstance(x, float) else x for x in b])
with open(P / "data/products.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(PCOLS); w.writerows(PRODUCTS)
with open(P / "data/supplier-notices.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(NCOLS); w.writerows(NOTICES)

# ---------- rule ----------
bk = [dict(zip(BCOLS, b)) for b in B]
notice = {(n[2], n[3]): dict(zip(NCOLS, n)) for n in NOTICES}
D = lambda s: dt.date.fromisoformat(s)
KEYWORDS_HUMAN = ["签证", "visa", "保险", "insurance", "投诉", "不满意", "complain"]
seen_key = {}
res = []
for b in sorted(bk, key=lambda x: x["created_at"]):
    bid = b["booking_id"]; out = {"booking_id": bid, "stage": None, "rule_status": None, "flags": []}
    key = (b["email"].lower(), b["product_code"], b["depart_date"])
    dup_of = seen_key.get(key); seen_key.setdefault(key, bid)
    ask_human = [k for k in KEYWORDS_HUMAN if k in b["notes"]]
    if b["status"] == "cancelled":
        out.update(stage="无", rule_status="跳过：订单已取消")
    elif b["created_at"][:10] == (TODAY - dt.timedelta(days=1)).isoformat() and not b["confirmation_sent_at"]:
        out["stage"] = "订单确认"
        names = [n for n in b["traveller_names"].split(";") if n.strip()]
        if b["status"] != "confirmed":
            out["rule_status"] = "跳过：供应商还没确认，暂不发确认单"
        elif dup_of:
            out["rule_status"] = "转人工"; out["flags"].append(f"疑似重复订单：与 {dup_of} 邮箱、产品、出发日完全相同")
        elif len(names) != b["pax_adult"] + b["pax_child"]:
            out["rule_status"] = "转人工"; out["flags"].append(f"同行人名字 {len(names)} 个，人数是 {b['pax_adult'] + b['pax_child']}，名字不齐不能出确认单")
        else:
            out["rule_status"] = "发确认单（待审批）"
    elif b["status"] == "confirmed" and 1 <= (D(b["depart_date"]) - TODAY).days <= 7:
        out["stage"] = "出行前提醒"
        if b["reminder_sent_at"]:
            out["rule_status"] = f"跳过：{b['reminder_sent_at'][:10]} 已发过提醒"
        elif b["balance_paid"] != "是":
            out["rule_status"] = "转人工"; out["flags"].append(f"尾款未付，截止日 {b['balance_due_date']} 已过，先由顾问联系，不发出行提醒")
        elif ask_human:
            out["rule_status"] = "转人工"; out["flags"].append("备注里有签证 / 保险问题，交顾问按官方信息回复，提醒暂缓")
        else:
            out["rule_status"] = "发出行前提醒（待审批）"
            n = notice.get((b["product_code"], b["depart_date"]))
            if n: out["flags"].append(f"供应商变更 {n['notice_id']}：{n['change']} 提醒里必须用新时间，并在审批里标出"); out["meeting_time"] = "第一天 06:15"
            else: out["meeting_time"] = PROD[b["product_code"]]["meeting_time"]
            if PROD[b["product_code"]]["international"] == "是": out["flags"].append("国际行程：加标准句「护照有效期和入境要求请以官方信息为准」")
    elif b["status"] == "confirmed" and 2 <= (TODAY - D(b["return_date"])).days <= 7 and not b["followup_sent_at"]:
        out["stage"] = "行后回访"
        if b["do_not_contact"] == "是":
            out["rule_status"] = "跳过：客人要求不要联系"
        elif ask_human:
            out["rule_status"] = "转人工"; out["flags"].append("备注里有投诉，不发模板回访，由经理亲自电话")
        else:
            out["rule_status"] = "发回访（待审批）"
            out["flags"].append("可带一句下季推荐" if b["marketing_opt_in"] == "是" else "未同意营销：只发满意度问卷，不带推荐")
    else:
        why = "回程不到 2 天，之后再回访" if b["status"] == "confirmed" and 0 <= (TODAY - D(b["return_date"])).days < 2 else "今天没有要做的步骤"
        out.update(stage="无", rule_status=f"跳过：{why}")
    res.append(out)
res.sort(key=lambda x: x["booking_id"])
cnt = {}
for r in res:
    k = f"{r['stage']}｜{r['rule_status'].split('：')[0]}"; cnt[k] = cnt.get(k, 0) + 1
exp = {"run_date": TODAY.isoformat(), "bookings_in_file": len(bk), "results": res, "counts": cnt,
       "rules": {"订单确认": "created_at 是昨天、还没发过确认单；status 要是 confirmed；同邮箱 + 产品 + 出发日重复的转人工；同行人名字数要等于人数",
                 "出行前提醒": "出发日在今天 +1 到 +7 天之间、没发过提醒；尾款没付、备注有签证 / 保险问题转人工；有供应商变更用新时间；国际行程加护照 / 入境标准句",
                 "行后回访": "回程日在今天 -7 到 -2 天之间、没回访过；不要联系的跳过；备注有投诉的转经理；没同意营销的只发问卷",
                 "取消": "status = cancelled 的订单任何步骤都不进"}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

SURVEY = "https://survey.seagull-holidays.example/trip?b="
REF = {
    "B01": ("是（审批）", "张伟您好，谢谢您预订海鸥假期的「黄金海岸 4 日家庭游」，订单号 B01，已经确认。\n出发：2026 年 12 月 20 日，回程 12 月 23 日；人数：2 位大人、2 位小朋友（张伟、李娜、张小雨、张小乐）。\n总价 3,680.00 澳元，已收定金 1,000.00 澳元，尾款 2,680.00 澳元请在 11 月 20 日前付清。\n集合地点和行前须知会在出发前一周再发给您。有任何问题直接回复这封邮件。"),
    "B02": ("是（审批）", "Hi Emily, thanks for booking the Blue Mountains day tour with Seagull Holidays — booking B02 is confirmed.\nDate: Saturday 28 November 2026. Travellers: Emily Clarke, James Clarke. Total AUD 318.00, paid in full.\nWe'll send the meeting point and what to bring a week before the tour. Just reply if you have any questions."),
    "B03": ("是", "（不发给客人。给 Kelly：B03 是 3 位大人，只给了 2 个名字。新西兰行程机位和酒店都要全名，请先跟王丽要到第三位同行人的护照英文名，再出确认单。）"),
    "B04": ("是", "（不发给客人。给 Kelly：B04 跟 B01 同一邮箱、同一产品、同一出发日，晚上 22:41 网站又下了一单，像是重复下单。请先跟张伟确认是不是只要一单，再决定是否取消 B04、是否退定金。B01 照常发确认单。）"),
    "B05": ("否", "（不发。供应商还没确认房型，等 status 变成 confirmed 再出确认单。）"),
    "B06": ("是（审批）", "陈美华您好，这周六（11 月 14 日）就出发去凯恩斯了，提醒几件事：\n集合：11 月 14 日下午 1:00，Cairns 机场到达厅，导游会举「海鸥假期」的牌子。\n记得带：泳衣、防晒、帽子；如果容易晕船，晕船药请自备。\n出发当天有任何情况，打订单确认邮件里的紧急电话。祝玩得开心！"),
    "B07": ("是", "（不发出行提醒。给 Kelly：Liam Foster 的大洋路 3 日 11 月 15 日出发，尾款 1,180.00 澳元截止 11-01，现在还没付。请先打电话确认，付清后再手动触发提醒。）"),
    "B08": ("是（审批，标出变更）", "刘建国您好，11 月 16 日塔斯马尼亚 5 日游快出发了，有一个变化要特别提醒您：\n集合时间提前到早上 6:15（原来是 7:30），地点不变，还是 Hobart 机场到达厅。供应商把第一天改成先去 Bruny Island，要赶早班渡轮。\n记得带：保暖外套、舒服的鞋。看到消息麻烦回复「收到」，我们确认您知道新时间。"),
    "B09": ("是", "（不发出行提醒。给 Kelly：黄小玲 11 月 18 日去皇后镇，她在微信里问中国护照去新西兰要不要签证，还问 72 岁、有高血压的母亲该买什么保险。签证请按新西兰移民局官方信息回复，或建议她找注册移民顾问；保险请让她联系保险公司或持牌顾问，我们不推荐具体保单。回复完再发出行提醒。）"),
    "B10": ("否", "（订单已取消，不发。）"),
    "B11": ("否", "（11-10 已经发过提醒，不重复发。）"),
    "B12": ("是（审批）", "Hi Grace, your North Island trip (Auckland + Rotorua) starts next Tuesday, 17 November. A few reminders:\nMeeting point: Auckland Airport international arrivals hall, 10:00am on day 1 — look for the Kiwi Link Tours sign.\nPlease bring: passports for all three of you, a plug adapter, and swimwear for the hot pools.\nPlease check your passports' validity and New Zealand's entry requirements on the official government websites before you fly. Have a great trip!"),
    "B13": ("是（审批）", f"李志明您好，黄金海岸回来几天了，一家三口玩得还好吗？想请您花两分钟填一下这次的满意度问卷：{SURVEY}B13\n朵朵如果喜欢海边，明年 1 月我们有凯恩斯大堡礁的亲子团，需要的话我把行程发给您。"),
    "B14": ("是", "（不发模板回访。给经理老周：周明蓝山两日游回来后来电投诉导游迟到一个多小时、酒店房型不符。请您亲自打电话，先听客人说完，查清楚供应商那边的情况后再谈怎么处理。Agent 不起草任何道歉或补偿承诺。）"),
    "B15": ("否", "（客人要求除必要的行程通知外不要联系，回访不发。）"),
    "B16": ("是（审批）", f"Hi Michael, welcome back from Cairns! We'd love to hear how the trip went — the survey takes about two minutes: {SURVEY}B16\nThanks for travelling with Seagull Holidays."),
    "B17": ("是（审批）", f"何晓东您好，上周的猎人谷酒庄一日游感觉怎么样？想请您花两分钟填个问卷，帮我们改进：{SURVEY}B17\n12 月我们还有蓝山圣诞灯光夜游，有兴趣的话回复我，发您行程。"),
    "B18": ("否", "（昨天才回来，11-13 以后再进回访。）"),
}
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["booking_id", "lead_name", "stage", "rule_status", "flags", "needs_human", "message_draft"])
    by = {b["booking_id"]: b for b in bk}
    for r in res:
        ref = REF[r["booking_id"]]
        w.writerow([r["booking_id"], by[r["booking_id"]]["lead_name"], r["stage"], r["rule_status"], " / ".join(r["flags"]), ref[0], ref[1]])
print(json.dumps(cnt, ensure_ascii=False, indent=1))
for r in res: print(r["booking_id"], r["stage"], r["rule_status"], r["flags"])
