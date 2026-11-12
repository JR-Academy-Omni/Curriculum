#!/usr/bin/env python3
"""p14 teaching data + expected answer (deterministic). Fictional Melbourne Sichuan restaurant, fictional guests.
Table availability, seat assignment, alternatives and booking lookups are rule-computed here (messages are
processed in order and pending holds block later requests). Intent / handoff judgement and reply drafts are
reference answers written by hand following the README prompt (no model API was called)."""
import csv, json, pathlib, random, datetime as dt

R = random.Random(20261114)
P = pathlib.Path(__file__).resolve().parents[1] / "p14-restaurant-booking-enquiry-agent"
TODAY = dt.date(2026, 11, 12)
CLOSED_WD = {1}  # 周二店休
TABLES = [("T01", 2, "大厅"), ("T02", 2, "大厅"), ("T03", 2, "大厅"), ("T04", 2, "大厅"),
          ("T05", 4, "大厅"), ("T06", 4, "大厅"), ("T07", 4, "大厅"), ("T08", 4, "大厅"), ("T09", 4, "大厅"), ("T10", 4, "靠窗"),
          ("T11", 6, "大厅"), ("T12", 6, "大厅"), ("T13", 8, "圆桌"), ("VIP", 12, "包间")]
SEATS = {t: s for t, s, _ in TABLES}
DINNER = [f"{h:02d}:{m:02d}" for h in range(17, 21) for m in (0, 30)][:7]   # 17:00 .. 20:00
LUNCH = ["11:30", "12:00", "12:30", "13:00"]
DUR = {"lunch": 90, "dinner": 120}


def meal(t): return "lunch" if t < "15:00" else "dinner"


def span(d, t):
    s = dt.datetime.combine(d, dt.time(*map(int, t.split(":"))))
    return s, s + dt.timedelta(minutes=DUR[meal(t)])


# ---- existing bookings 11-12 .. 11-22 ----
SURN = list("王李张刘陈杨黄赵吴周徐孙马朱胡郭何林罗高")
bookings, bid = [], 300


def add(d, t, table, party, name, phone, note=""):
    global bid
    bid += 1
    bookings.append({"booking_id": f"B{bid}", "date": d.isoformat(), "start": t, "table_id": table, "party_size": party,
                     "name": name, "phone": phone, "status": "confirmed", "note": note})


d = TODAY
while d <= dt.date(2026, 11, 22):
    if d.weekday() not in CLOSED_WD:
        busy = 0.75 if d.weekday() in (4, 5) else 0.4
        for tid, seats, _ in TABLES:
            if tid == "VIP": continue
            if R.random() < 0.3:
                add(d, R.choice(LUNCH[:2]), tid, max(1, seats - R.randint(0, 1)), R.choice(SURN) + "先生", f"04{R.randint(10,99)} {R.randint(100,999)} 000")
            if R.random() < busy:
                add(d, R.choice(["17:00", "17:30"]), tid, max(1, seats - R.randint(0, 1)), R.choice(SURN) + "女士", f"04{R.randint(10,99)} {R.randint(100,999)} 000")
            if R.random() < busy:
                add(d, R.choice(["19:30", "20:00"]), tid, max(1, seats - R.randint(0, 1)), R.choice(SURN) + "先生", f"04{R.randint(10,99)} {R.randint(100,999)} 000")
    d += dt.timedelta(days=1)


def free(date, t, table, holds):
    s, e = span(date, t)
    for b in bookings + holds:
        if b["table_id"] != table or b["date"] != date.isoformat() or b.get("status") == "cancelled": continue
        bs, be = span(date, b["start"])
        if bs < e and s < be: return False
    return True


# ---- forced states the messages rely on ----
SAT = dt.date(2026, 11, 14)
bookings[:] = [b for b in bookings if not (b["date"] == SAT.isoformat() and b["table_id"] in {"T05", "T06", "T07", "T08", "T09", "T10", "T11", "T12"} and b["start"] >= "17:00")]
for tid, t in (("T05", "19:00"), ("T06", "19:00"), ("T07", "17:30"), ("T08", "17:30"), ("T09", "17:30"), ("T11", "18:30"), ("T12", "18:30")):
    add(SAT, t, tid, SEATS[tid] - 1, R.choice(SURN) + "先生", f"04{R.randint(10,99)} {R.randint(100,999)} 000")
add(SAT, "17:00", "T10", 4, "吴女士", "0425 118 000")   # T10 17:00–19:00，19:00 起空
bookings[:] = [b for b in bookings if not (b["date"] == "2026-11-13" and b["table_id"] == "T01" and b["start"] >= "17:00")]
add(dt.date(2026, 11, 13), "18:00", "T06", 2, "陈先生", "0433 120 000")              # B07 要取消的那一桌（电话对不上）
FRI = dt.date(2026, 11, 13)
SUN = dt.date(2026, 11, 15)
bookings[:] = [b for b in bookings if not (b["date"] == SUN.isoformat() and b["start"] >= "17:00" and b["table_id"] in {"T01", "T02", "T03", "T04", "T05"})]
add(SUN, "18:00", "T02", 2, "赵女士", "0418 662 000")                                  # B11 要改的预约
bookings.sort(key=lambda b: (b["date"], b["start"], b["table_id"]))
for i, b in enumerate(bookings): b["booking_id"] = f"B{301 + i}"


def fit_tables(party):
    if party > 8: return ["VIP"] if party <= 12 else []
    return [t for t, s, _ in sorted(TABLES, key=lambda x: (x[1], x[0])) if t != "VIP" and party <= s <= party + 2]


def check(date, t, party, holds):
    if date.weekday() in CLOSED_WD: return {"closed": True}
    for tid in fit_tables(party):
        if free(date, t, tid, holds): return {"table_id": tid, "seats": SEATS[tid]}
    return None


def alternatives(date, t, party, holds, n=3):
    times = LUNCH if meal(t) == "lunch" else DINNER
    cand = sorted((tt for tt in times if tt != t), key=lambda x: (abs(int(x[:2]) * 60 + int(x[3:]) - int(t[:2]) * 60 - int(t[3:])), x))
    out = []
    for tt in cand:
        c = check(date, tt, party, holds)
        if c and not c.get("closed"): out.append({"date": date.isoformat(), "start": tt, **c})
        if len(out) == n: break
    return sorted(out, key=lambda x: x["start"])


def lookup(name_hint, phone):
    for b in bookings:
        if b["phone"] == phone and name_hint in b["name"]: return {"verified": True, "booking_id": b["booking_id"], "date": b["date"], "start": b["start"], "party_size": b["party_size"], "table_id": b["table_id"]}
    return {"verified": False}


holds, comp = [], {}


def hold(mid, date, t, table, party, name, phone):
    holds.append({"booking_id": f"HOLD-{mid}", "date": date.isoformat(), "start": t, "table_id": table, "party_size": party, "name": name, "phone": phone, "status": "pending"})


# B01 张女士 周六 19:00 4 位
c = check(SAT, "19:00", 4, holds); comp["B01"] = {"request": "2026-11-14 19:00 4 位", "result": c}
hold("B01", SAT, "19:00", c["table_id"], 4, "张女士", "0412 345 000")
# B02 Emma 周五 18:30 2 位
c = check(FRI, "18:30", 2, holds); comp["B02"] = {"request": "2026-11-13 18:30 2 位", "result": c}
if c: hold("B02", FRI, "18:30", c["table_id"], 2, "Emma Clarke", "emma.clarke@mail.example")
else: comp["B02"]["alternatives"] = alternatives(FRI, "18:30", 2, holds)
# B03 刘先生 周六 19:00 4 位 —— 被 B01 暂占
c = check(SAT, "19:00", 4, holds); comp["B03"] = {"request": "2026-11-14 19:00 4 位", "result": c, "alternatives": alternatives(SAT, "19:00", 4, holds)}
# B04 18 位公司聚餐 —— 超过 12 人
comp["B04"] = {"request": "2026-11-27 19:00 18 位", "result": "超过 12 人，Agent 不查位，转经理"}
# B05 周二中午 6 位 —— 店休
TUE = dt.date(2026, 11, 17); WED = dt.date(2026, 11, 18)
comp["B05"] = {"request": "2026-11-17 12:00 6 位", "result": check(TUE, "12:00", 6, holds), "next_open_day_same_time": {"date": WED.isoformat(), "result": check(WED, "12:00", 6, holds)}}
# B06 周日 12:00 3 位 + 严重花生过敏
c = check(SUN, "12:00", 3, holds); comp["B06"] = {"request": "2026-11-15 12:00 3 位", "result": c}
if c: hold("B06", SUN, "12:00", c["table_id"], 3, "Kelly Ng", "kelly.ng@mail.example")
# B07 取消：姓陈 + 0433 210 000（系统里是 0433 120 000）
comp["B07"] = {"lookup": lookup("陈", "0433 210 000"), "note": "周五 18:00 确实有一位陈先生，但电话对不上，不能取消，也不能告诉对方「有这个预约」"}
# B08 李小姐 10 位 周六 11-21 18:30 包间
S21 = dt.date(2026, 11, 21)
c = check(S21, "18:30", 10, holds); comp["B08"] = {"request": "2026-11-21 18:30 10 位", "result": c}
if c: hold("B08", S21, "18:30", c["table_id"], 10, "李小姐", "li.xm@mail.example")
# B09 黄先生 12 位 周六 11-21 19:00 包间 —— 跟 B08 的暂占重叠
comp["B09"] = {"request": "2026-11-21 19:00 12 位", "result": check(S21, "19:00", 12, holds), "vip_alternatives_same_day": alternatives(S21, "19:00", 12, holds)}
# B11 赵女士 改约：周日 18:00 2 位 → 19:00 3 位
lk = lookup("赵", "0418 662 000")
tmp = [b for b in bookings if b["booking_id"] != lk["booking_id"]]
saved = bookings[:]; bookings[:] = tmp
c = check(SUN, "19:00", 3, holds); bookings[:] = saved
comp["B11"] = {"lookup": lk, "request": "2026-11-15 19:00 3 位（原 18:00 2 位，T02）", "result": c}
if c: hold("B11", SUN, "19:00", c["table_id"], 3, "赵女士", "0418 662 000")
# B13 = B01 重复（同一电话、同一需求）
comp["B13"] = {"duplicate_of": "B01", "rule": "同一个电话号码、同一天同一时间同样人数，已有待审批的暂占，不再占第二张桌"}
# B14 今晚 20:00 2 位
c = check(TODAY, "20:00", 2, holds); comp["B14"] = {"request": "2026-11-12 20:00 2 位", "result": c}
if c: hold("B14", TODAY, "20:00", c["table_id"], 2, "Jason", "0447 905 000")

MESSAGES = [
    ("B01", "微信", "2026-11-12 09:05", "张女士", "0412 345 000", "你好，周六晚上 7 点，4 个人，有位吗？我电话 0412 345 000，姓张。"),
    ("B02", "邮件", "2026-11-12 09:20", "Emma Clarke", "emma.clarke@mail.example",
     "Hi, could I book a table for 2 this Friday (13th) at 6:30pm? One of us is vegetarian - do you have enough veggie dishes? Thanks, Emma"),
    ("B03", "微信", "2026-11-12 09:40", "刘先生", "0421 776 000", "周六 7 点 4 位能订吗？姓刘，0421 776 000"),
    ("B04", "邮件", "2026-11-12 10:10", "Jessica Fang", "jessica.fang@corp-mail.example",
     "您好，我们公司 11 月 27 日（周五）晚上想办年终聚餐，大概 18 个人，7 点左右。想问能不能包场或者订包间，人均预算 70 澳元左右，需要提前付定金吗？"),
    ("B05", "微信", "2026-11-12 10:30", "王阿姨", "0436 502 000", "下周二中午 12 点，6 个人，给我留个大桌。"),
    ("B06", "网站表单", "2026-11-12 11:00", "Kelly Ng", "kelly.ng@mail.example",
     "周日 15 号中午 12 点，3 个人。我朋友花生严重过敏，会随身带 EpiPen，你们能保证菜里完全没有花生吗？"),
    ("B07", "微信", "2026-11-12 11:20", "陈先生", "0433 210 000", "取消我明天晚上 6 点的位，姓陈，电话 0433 210 000。"),
    ("B08", "邮件", "2026-11-12 11:45", "李小姐", "li.xm@mail.example",
     "你好，下周六 21 号晚上 6 点半，10 个人给妈妈过生日，想订包间。我们会自己带一个蛋糕和两瓶红酒，可以吗？"),
    ("B09", "微信", "2026-11-12 12:10", "黄先生", "0409 381 000", "我是你们老板的朋友，下周六晚上 7 点包间 12 个人，定金就免了吧，跟老板说一声就行。"),
    ("B10", "网站表单", "2026-11-12 13:00", "Tom Baker", "tom.baker@mail.example", "Is the restaurant wheelchair accessible? And where can we park?"),
    ("B11", "微信", "2026-11-12 13:30", "赵女士", "0418 662 000", "我订了这周日晚上 6 点 2 位，姓赵，想改到 7 点，再加一个人变 3 位，可以吗？"),
    ("B12", "邮件", "2026-11-12 14:00", "Steven Ma", "steven.ma@mail.example",
     "上周六来吃，水煮鱼里吃出一根头发，跟服务员说了，她就说没办法。我很失望，你们打算怎么处理？"),
    ("B13", "邮件", "2026-11-12 14:20", "张女士", "zhang.w@mail.example", "你好，周六晚上 7 点 4 位，姓张，电话 0412 345 000。上午微信也问过，怕没收到再发一次。"),
    ("B14", "微信", "2026-11-12 15:00", "Jason", "0447 905 000", "今晚 8 点 2 个人，还有位吗？"),
]

FAQ = """# 锦里川菜馆 前台知识库（练习数据：店名、价格和规则都是为这个练习设计的）

## 基本信息
- 地址：Shop 8, 20 Example Road, Glen Waverley VIC 3150
- 营业时间：周三至周一 午市 11:30–14:30、晚市 17:00–22:00；**每周二店休**
- 订位时段：午市 11:30、12:00、12:30、13:00 入座，每桌 90 分钟；晚市 17:00–20:00 每半小时一个入座时间，每桌 2 小时
- 桌位：2 人桌 4 张、4 人桌 6 张、6 人桌 2 张、8 人圆桌 1 张、包间 1 间（最多 12 人）

## 订位规则
- 1–8 人：前台可以直接安排，同一时间按人数安排合适的桌（不安排比人数多 2 个座位以上的桌）。
- 9–12 人：只能用包间。包间晚市最低消费 800 澳元，需付 100 澳元定金，定金和最低消费由周经理确认。
- 13 人以上、包场、公司宴请：由周经理单独报价和安排，前台不报价。
- 迟到 15 分钟仍未到店，桌位可能安排给现场客人。
- 当天订位：入座前 1 小时以上可以订。
- 定金、最低消费和任何费用的减免，只有周经理能决定。

## 菜品与饮食需求
- 素食：菜单上有 9 道素菜（麻婆豆腐可做素版、干煸四季豆、鱼香茄子、手撕包菜等），点餐时告诉服务员。
- **过敏**：后厨同时处理花生、芝麻、坚果、虾蟹、麸质，**无法保证任何菜完全不含过敏原**。严重过敏的客人，订位时由周经理或主厨联系确认，到店再当面说明。
- 辣度可以选微辣、中辣、特辣。

## 自带
- 蛋糕：可以自带，切蛋糕服务费每人 2 澳元。
- 酒水：可以自带葡萄酒，开瓶费每瓶 10 澳元；不接受自带烈酒。

## 设施与交通
- 店门口无台阶，有无障碍洗手间。
- 商场地下停车场前 3 小时免费；店门口路边限时 1 小时。
- 儿童座椅 3 张，订位时说一声。

## 回复与隐私
- 微信、邮件和网站留言都由前台回复；订位只有收到我们的正式确认才算订上。
- 查询、修改、取消预约要核对姓氏 + 订位电话，对不上不能操作，也不能告诉对方「有没有这个预约」。
- 投诉（菜品、服务、账单）一律交给周经理处理，前台不解释、不承诺补偿。
"""

# ---- hand-written judgement + reply drafts (reference answers) ----
DEC = {
    "B01": ("新订位", "通过（新订位不需要核对）", "check_availability", "暂占 T10 周六 11-14 19:00 4 位——待前台批准", "否", "普通",
            "19:00 只剩靠窗的 T10（17:00 那桌 19:00 前离开）",
            "张女士您好，周六 14 号晚上 7 点 4 位目前还有一张靠窗的四人桌，我先帮您留着。前台同事确认后会给您发正式的订位确认，到时候才算订上哦。"),
    "B02": ("新订位 + 素食", "不需要", "check_availability; search_faq", "暂占 周五 11-13 18:30 2 位——待前台批准", "否", "普通",
            "有 2 人桌；素食按知识库回答；英文消息英文回",
            "Hi Emma, we have a table for 2 this Friday 13th at 6:30pm and I've put it on hold for you. We have 9 vegetarian dishes (e.g. dry-fried green beans, fish-fragrant eggplant, and mapo tofu can be made vegetarian) - just let our staff know when ordering. Our front desk will send you a formal confirmation shortly; the booking is only final once you receive it."),
    "B03": ("新订位", "不需要", "check_availability", "不暂占；给替代时间", "否", "普通",
            "19:00 唯一合适的桌已被 B01 暂占；按就近原则给同一天的替代时间",
            "刘先生您好，周六 7 点的 4 人位刚好满了。同一天还可以：{alts}。看哪个方便，回我一下，我先帮您留，前台确认后再给您正式确认。"),
    "B04": ("大型聚餐（18 人）", "不需要", "search_faq; handoff_to_human", "无", "是 → 周经理", "当天",
            "超过 12 人，按规则由经理单独报价和安排；Agent 不报价、不说定金多少",
            "Jessica 您好，谢谢想到我们。18 位的公司聚餐需要我们周经理来安排座位、菜单和费用，她今天会直接联系您。方便的话告诉我们一个合适的联系时间。"),
    "B05": ("新订位（店休日）", "不需要", "check_availability", "不暂占；先问对方是否改到周三", "否", "普通",
            "周二店休；周三 11-18 12:00 有 6 人桌",
            "王阿姨您好，不好意思，我们每周二店休。下周三（18 号）中午 12 点有 6 人的大桌，要不要给您留这个？您回一句，我先帮您留，前台确认后再给您正式确认。"),
    "B06": ("新订位 + 严重过敏", "不需要", "check_availability; search_faq; handoff_to_human", "暂占 周日 11-15 12:00 3 位——待前台批准", "是 → 周经理 / 主厨（过敏）", "当天",
            "有位可以暂占；过敏问题不能回答「可以保证」，按知识库如实说明并转人",
            "Kelly 您好，周日 15 号中午 12 点 3 位有位，我先帮您留着。关于花生过敏：我们后厨同时处理花生、坚果等食材，没办法保证任何一道菜完全不含花生。周经理或主厨今天会联系您，把能做的安排当面说清楚，您再决定要不要来。正式订位以前台的确认为准。"),
    "B07": ("取消", "未通过（姓氏 + 电话对不上）", "find_booking", "不取消", "否（请对方核对电话）", "普通",
            "find_booking 用「陈 + 0433 210 000」查不到；不能告诉对方有没有这个预约",
            "陈先生您好，用您给的姓氏和电话没有查到预约。麻烦确认一下订位时留的是哪个电话号码，或者直接用那个号码给我们发消息，我们核对上就帮您处理。"),
    "B08": ("包间订位（10 人）+ 自带", "不需要", "check_availability; search_faq; handoff_to_human", "暂占包间 周六 11-21 18:30 10 位——待周经理确认定金和最低消费", "是 → 周经理（9–12 人包间）", "普通",
            "包间空着可以暂占；最低消费和定金由经理确认；蛋糕、红酒按知识库回答",
            "李小姐您好，提前祝阿姨生日快乐！下周六 21 号晚上 6 点半的包间现在是空的，我先帮您留着。包间晚市最低消费 800 澳元、定金 100 澳元，周经理会跟您确认细节。可以自带蛋糕（切蛋糕服务费每人 2 澳元）和葡萄酒（开瓶费每瓶 10 澳元）。正式订位以前台和周经理的确认为准。"),
    "B09": ("包间订位（12 人）+ 要求免定金", "不需要", "check_availability; handoff_to_human", "不暂占（包间与 B08 的暂占时间重叠）", "是 → 周经理", "普通",
            "包间 18:30–20:30 已被 B08 暂占，19:00 冲突；免定金只有经理能决定，Agent 不答应也不拒绝",
            "黄先生您好，下周六晚上 7 点的包间已经有人在等确认了，同一天包间别的时间也排不开。定金的事只有周经理能决定，我已经把您的情况转给她，她会直接联系您。"),
    "B10": ("设施 / 停车", "不需要", "search_faq", "无", "否", "普通", "知识库有答案；英文回",
            "Hi Tom, yes - there are no steps at our entrance and we have an accessible toilet. Parking is free for the first 3 hours in the shopping centre's underground car park; street parking out front is limited to 1 hour. Let us know if you'd like to book a table."),
    "B11": ("改约（时间 + 人数）", "通过（姓氏 + 电话与原预约一致）", "find_booking; check_availability", "改约：周日 11-15 18:00 2 位 → 19:00 3 位（改到 4 人桌）——待前台批准", "否", "普通",
            "原桌是 2 人桌，3 位要换到 4 人桌；19:00 有空桌",
            "赵女士您好，查到了。周日晚上 7 点 3 位有位，我们会给您换到 4 人桌。前台同事确认后会给您发新的确认，在那之前原来 6 点 2 位的预约还保留着。"),
    "B12": ("投诉（菜品）", "不需要", "handoff_to_human", "无", "是 → 周经理", "当天",
            "投诉一律交经理；不解释、不承诺补偿",
            "Steven 您好，吃到头发、又没被好好处理，真的很抱歉让您失望了。我已经把您的情况转给周经理，她今天会直接联系您。"),
    "B13": ("重复订位请求", "不需要", "check_availability", "不重复暂占；合并到 B01", "否", "普通",
            "同一电话、同一时间、同样人数，上午 B01 已暂占 T10",
            "张女士您好，收到啦，上午微信的那条我们也收到了。周六 14 号晚上 7 点 4 位已经帮您留着，前台确认后会给您正式确认，不用再重复发。"),
    "B14": ("当天订位", "不需要", "check_availability", "暂占 今晚 11-12 20:00 2 位——待前台批准", "否", "普通",
            "距 20:00 还有 5 小时，符合「入座前 1 小时以上」；有 2 人桌",
            "Jason 你好，今晚 8 点 2 位有位，我先帮你留着。前台确认后会马上给你正式确认。"),
}


def fmt_alt(a): return "、".join(f"{x['start']}" for x in a)


(P / "data").mkdir(parents=True, exist_ok=True)
(P / "data/restaurant-faq.md").write_text(FAQ, encoding="utf-8")
with open(P / "data/tables.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["table_id", "seats", "area"]); w.writerows(TABLES)
with open(P / "data/bookings.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(bookings[0])); w.writeheader(); w.writerows(bookings)
json.dump([dict(zip(["message_id", "channel", "received_at", "from_name", "from_contact", "text"], m)) for m in MESSAGES],
          open(P / "data/messages-2026-11-12.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# fill computed values into drafts
DEC["B03"] = DEC["B03"][:7] + (DEC["B03"][7].format(alts=fmt_alt(comp["B03"]["alternatives"])),)
exp = {"messages_in_file": len(MESSAGES), "existing_bookings": len(bookings), "computed_by_rule": comp,
       "pending_holds_after_run": holds,
       "summary": {"holds_proposed": len(holds), "handoffs": [k for k, v in DEC.items() if v[4].startswith("是")],
                   "no_booking_change": [k for k, v in DEC.items() if v[3].startswith(("不", "无"))]},
       "note": "暂占只是给前台审批的建议；任何订位、改约、取消都要人批准后才写进订位表。"}
(P / "expected").mkdir(exist_ok=True)
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["message_id", "intent", "identity_check", "tools_called", "proposed_action", "handoff", "priority", "reason", "reply_draft"])
    for m in MESSAGES: w.writerow([m[0], *DEC[m[0]]])
print(json.dumps(comp, ensure_ascii=False, indent=1)); print(len(bookings), [h["table_id"] + " " + h["date"] + " " + h["start"] for h in holds])
