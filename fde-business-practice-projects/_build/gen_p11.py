#!/usr/bin/env python3
"""p11 teaching data + expected answer (deterministic). Fictional travel agency, fictional customers.
Price list + 6 customer enquiries -> quote drafts. Totals are computed here, never hand-typed."""
import csv, json, math, pathlib, random, datetime as dt
R = random.Random(20261111 + 11)
P = pathlib.Path(__file__).resolve().parents[1] / "p11-travel-itinerary-quote"
D = dt.date
PEAK = (D(2026, 12, 20), D(2027, 1, 10))   # teaching assumption: hotel nights in this range +20%
PEAK_RATE = 0.20
DEPOSIT_RATE = 0.30                        # teaching assumption: 30% deposit on confirmation
CHILD_AGE = (3, 11)                        # tour child price 3-11; under 3 free; 12+ adult

# ---- price list (AUD, GST inclusive, teaching assumption) ----
PRICES = [
    # code, category, city, name, unit, adult, child, max_occupancy, valid_from, valid_to
    ("H-GC-01", "hotel", "Gold Coast", "冲浪者天堂海景公寓 两卧", "每间每晚", 289, "", 4, "2026-10-01", "2027-03-31"),
    ("H-GC-02", "hotel", "Gold Coast", "冲浪者天堂城景酒店 标准间", "每间每晚", 189, "", 3, "2026-10-01", "2027-03-31"),
    ("H-CNS-01", "hotel", "Cairns", "凯恩斯滨海酒店 双床房", "每间每晚", 215, "", 3, "2026-10-01", "2027-03-31"),
    ("H-ZQN-01", "hotel", "Queenstown", "皇后镇湖景酒店 大床房", "每间每晚", 320, "", 2, "2026-10-01", "2027-03-31"),
    ("H-HBA-01", "hotel", "Hobart", "霍巴特海滨酒店 家庭房", "每间每晚", 245, "", 3, "2026-10-01", "2027-03-31"),
    ("H-GOR-01", "hotel", "Apollo Bay", "阿波罗湾海边汽车旅馆", "每间每晚", 175, "", 4, "2026-10-01", "2027-03-31"),
    ("T-GC-01", "tour", "Gold Coast", "主题乐园一日票", "每人", 129, 109, "", "2026-10-01", "2027-03-31"),
    ("T-CNS-01", "tour", "Cairns", "大堡礁外堡礁一日游（含午餐）", "每人", 265, 175, "", "2026-10-01", "2027-03-31"),
    ("T-CNS-02", "tour", "Cairns", "库兰达观光火车 + 空中缆车", "每人", 158, 79, "", "2026-07-01", "2026-12-15"),
    ("T-ZQN-01", "tour", "Queenstown", "米尔福德峡湾一日游（含游船）", "每人", 239, 129, "", "2026-10-01", "2027-03-31"),
    ("T-HBA-01", "tour", "Hobart", "惠灵顿山 + 萨拉曼卡市集半日游", "每人", 89, 45, "", "2026-10-01", "2027-03-31"),
    ("T-HBA-02", "tour", "Hobart", "摇篮山一日游", "每人", 199, 120, "", "2026-10-01", "2027-03-31"),
    ("T-GOR-01", "tour", "Melbourne", "大洋路一日游", "每人", 135, 85, "", "2026-10-01", "2027-03-31"),
    ("X-GC-S", "transfer", "Gold Coast", "机场接送 轿车（最多 4 人）", "每车每程", 85, "", 4, "2026-10-01", "2027-03-31"),
    ("X-GC-V", "transfer", "Gold Coast", "机场接送 商务车（最多 7 人）", "每车每程", 130, "", 7, "2026-10-01", "2027-03-31"),
    ("X-CNS-S", "transfer", "Cairns", "机场接送 轿车（最多 4 人）", "每车每程", 70, "", 4, "2026-10-01", "2027-03-31"),
    ("X-CNS-V", "transfer", "Cairns", "机场接送 商务车（最多 7 人）", "每车每程", 115, "", 7, "2026-10-01", "2027-03-31"),
    ("X-ZQN-S", "transfer", "Queenstown", "机场接送 轿车（最多 4 人）", "每车每程", 95, "", 4, "2026-10-01", "2027-03-31"),
    ("X-ZQN-V", "transfer", "Queenstown", "机场接送 商务车（最多 7 人）", "每车每程", 150, "", 7, "2026-10-01", "2027-03-31"),
    ("X-HBA-S", "transfer", "Hobart", "机场接送 轿车（最多 4 人）", "每车每程", 65, "", 4, "2026-10-01", "2027-03-31"),
    ("X-HBA-V", "transfer", "Hobart", "机场接送 商务车（最多 7 人）", "每车每程", 110, "", 7, "2026-10-01", "2027-03-31"),
]
PL = {p[0]: p for p in PRICES}

# ---- enquiries: structured ground truth + the text the customer actually wrote ----
# travellers: list of ages (None = adult, age unknown but adult)
ENQ = [
    {"id": "E1101", "name": "张伟", "city": "Gold Coast", "start": "2026-12-01", "end": "2026-12-05",
     "ages": [None, None, 8], "hotel": "H-GC-02", "rooms": 1, "tours": ["T-GC-01"], "transfer_ways": 2,
     "body": "你好，我们一家三口（我和太太，还有女儿 8 岁）想 12 月 1 号到 5 号去黄金海岸，住 4 晚。\n"
             "酒店就住冲浪者天堂那家城景酒店的标准间，一间就够。想去一天主题乐园，三个人都去。\n"
             "另外需要机场接送，来回都要。麻烦帮忙报个价，谢谢！", "flags": []},
    {"id": "E1102", "name": "李秀英", "city": "Cairns", "start": "2026-12-26", "end": "2026-12-29",
     "ages": [None] * 5, "hotel": "H-CNS-01", "rooms": 2, "tours": ["T-CNS-01", "T-CNS-02"], "transfer_ways": 2,
     "body": "您好，我们是五个老姐妹，圣诞节后想去凯恩斯玩，12 月 26 号到，29 号走，住 3 晚，要两间房。\n"
             "想去大堡礁，还有那个库兰达的小火车坐缆车下来的，五个人都去。\n"
             "机场来回接送也要，五个人坐一辆车。请给我们报个总价。", "flags": []},
    {"id": "E1103", "name": "王婧", "city": "Queenstown", "start": "2027-01-08", "end": "2027-01-12",
     "ages": [None, None], "hotel": "H-ZQN-01", "rooms": 1, "tours": ["T-ZQN-01"], "transfer_ways": 2,
     "body": "Hi，我和男朋友想 1 月 8 号到 12 号去皇后镇，住湖景酒店大床房，4 晚。\n"
             "想去一天米尔福德峡湾，机场接送来回。\n"
             "还有个问题：我是中国护照，在澳洲读书，去新西兰要不要办签证？大概要多久？", "flags": ["visa"]},
    {"id": "E1104", "name": "陈建国", "city": "Hobart", "start": "2026-11-24", "end": "2026-11-28",
     "ages": [72, 70], "hotel": "H-HBA-01", "rooms": 1, "tours": ["T-HBA-01", "T-HBA-02"], "transfer_ways": 2,
     "body": "你好，我爸妈从国内过来探亲，想 11 月 24 号到 28 号去塔斯马尼亚霍巴特，住 4 晚，一间房。\n"
             "行程想安排惠灵顿山半日游和摇篮山一日游，两个人。机场来回接送。\n"
             "另外他们一个 72 岁一个 70 岁，我爸有高血压，旅游保险应该怎么买？既往病能不能保？", "flags": ["insurance"]},
    {"id": "E1105", "name": "刘洋", "city": "Gold Coast", "start": "2026-12-12", "end": "2026-12-15",
     "ages": [None, None, None, None, 6, 2], "hotel": "H-GC-01", "rooms": 1, "tours": ["T-GC-01"], "transfer_ways": 2,
     "body": "你好，我们两家人一起去黄金海岸，12 月 12 号到 15 号，住 3 晚。\n"
             "四个大人，一个 6 岁小孩，一个 2 岁宝宝。想订那个海景公寓两卧，一间就够了，挤一挤没问题。\n"
             "主题乐园一天，大家都去。机场接送来回，一辆车。", "flags": []},
    {"id": "E1106", "name": "赵敏", "city": None, "start": None, "end": None, "ages": None, "hotel": None,
     "rooms": None, "tours": [], "transfer_ways": 0,
     "body": "你好，明年春天想带家里人去走一趟大洋路，住一两晚吧，具体几个人还没定，能先报个价吗？", "flags": []},
]

def nights(s, e):
    s, e = D.fromisoformat(s), D.fromisoformat(e)
    return [s + dt.timedelta(days=i) for i in range((e - s).days)]

def in_peak(d): return PEAK[0] <= d <= PEAK[1]

def valid_on(code, s, e):
    p = PL[code]; return D.fromisoformat(p[8]) <= D.fromisoformat(s) and D.fromisoformat(e) <= D.fromisoformat(p[9])

def r2(x): return round(x + 1e-9, 2)

out = []
for q in ENQ:
    res = {"enquiry_id": q["id"], "customer": q["name"], "lines": [], "flags": [], "status": "可发给客人"}
    if q["start"] is None:
        res.update(status="信息不全，不出报价", total=None, deposit=None)
        res["flags"].append({"type": "信息不全", "detail": "缺出发日期、人数和年龄，无法按价目表计算",
                             "questions": ["具体出发和返回日期", "几位大人、几位小孩，小孩几岁", "想住几晚、住哪里（阿波罗湾一带还是墨尔本市区）", "是否需要一日游或包车"]})
        out.append(res); continue
    ns = nights(q["start"], q["end"])
    pax = len(q["ages"])
    adults = sum(1 for a in q["ages"] if a is None or a > CHILD_AGE[1])
    children = sum(1 for a in q["ages"] if a is not None and CHILD_AGE[0] <= a <= CHILD_AGE[1])
    infants = sum(1 for a in q["ages"] if a is not None and a < CHILD_AGE[0])
    # hotel
    h = PL[q["hotel"]]
    need_rooms = math.ceil(pax / h[7])
    rooms = max(q["rooms"], need_rooms)
    if rooms > q["rooms"]:
        res["flags"].append({"type": "超出房型人数", "detail": f"{pax} 人（含婴儿）超过「{h[3]}」每间最多 {h[7]} 人，按 {rooms} 间计算，需请客人确认"})
    peak_n = sum(1 for d in ns if in_peak(d)); norm_n = len(ns) - peak_n
    if norm_n:
        res["lines"].append({"code": h[0], "item": h[3], "qty": f"{rooms} 间 × {norm_n} 晚", "unit_price": h[5], "amount": r2(h[5] * rooms * norm_n)})
    if peak_n:
        up = r2(h[5] * (1 + PEAK_RATE))
        res["lines"].append({"code": h[0], "item": h[3] + "（旺季 +20%）", "qty": f"{rooms} 间 × {peak_n} 晚", "unit_price": up, "amount": r2(up * rooms * peak_n)})
    # tours
    for t in q["tours"]:
        p = PL[t]
        if not valid_on(t, q["start"], q["end"]):
            res["flags"].append({"type": "价格过期", "detail": f"「{p[3]}」价目表有效期到 {p[9]}，出行日期不在有效期内，需向供应商确认新价，暂不计入合计"})
            continue
        amt = adults * p[5] + children * p[6]
        qty = f"大人 {adults}" + (f" + 小孩 {children}" if children else "") + (f" + 婴儿 {infants}（免费）" if infants else "")
        res["lines"].append({"code": t, "item": p[3], "qty": qty, "unit_price": f"{p[5]} / {p[6]}", "amount": r2(amt)})
    # transfer
    if q["transfer_ways"]:
        code = f"X-{q['hotel'].split('-')[1]}-" + ("S" if pax <= 4 else "V")
        p = PL[code]
        res["lines"].append({"code": code, "item": p[3], "qty": f"{q['transfer_ways']} 程", "unit_price": p[5], "amount": r2(p[5] * q["transfer_ways"])})
    res["total"] = r2(sum(l["amount"] for l in res["lines"]))
    res["deposit"] = r2(res["total"] * DEPOSIT_RATE)
    res["travellers"] = {"pax": pax, "adults": adults, "children": children, "infants": infants, "nights": len(ns), "peak_nights": peak_n}
    if "visa" in q["flags"]:
        res["flags"].append({"type": "签证问题，转人工", "detail": "客人问新西兰签证，报价助手不回答签证问题，交给持证顾问按官方信息回复"})
    if "insurance" in q["flags"]:
        res["flags"].append({"type": "保险问题，转人工", "detail": "客人问高龄和既往病的旅游保险，报价助手不给保险建议，交给顾问或保险公司"})
    if res["flags"]:
        res["status"] = "草案，有标出项待人工处理"
    out.append(res)

# ---- write data ----
(P / "data/enquiries").mkdir(parents=True, exist_ok=True)
with open(P / "data/price-list-2026-27-summer.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["code", "category", "city", "name", "unit", "price_adult", "price_child", "max_occupancy", "valid_from", "valid_to"])
    w.writerows(PRICES)
base = dt.datetime(2026, 11, 10, 9, 0)
for i, q in enumerate(ENQ):
    t = base + dt.timedelta(minutes=sum(R.randint(25, 140) for _ in range(i + 1)))
    subj = {"E1106": "大洋路报价"}.get(q["id"], f"{q['city']} 行程报价")
    txt = (f"From: {q['name']} <{q['id'].lower()}@mail.example>\nTo: enquiry@jinqiao-travel.example\n"
           f"Date: {t:%Y-%m-%d %H:%M}\nSubject: {subj}\n\n{q['body']}\n")
    (P / f"data/enquiries/{q['id']}.txt").write_text(txt, encoding="utf-8")
(P / "data/quote-rules.md").write_text(
    "# 金桥旅行 报价规则（教学假设，真实规则以公司政策和供应商合同为准）\n\n"
    "1. 所有价格为澳元、含 GST，只能用 price-list-2026-27-summer.csv 里的价格，不许估价。\n"
    "2. 酒店：按「每间每晚」计。所有同行人（包括婴儿）都计入房间人数，超过 max_occupancy 时按最少需要的房间数计算，并标出请客人确认。\n"
    f"3. 旺季：入住夜晚落在 {PEAK[0]} 到 {PEAK[1]}（含）之间的，酒店房价每晚 +20%。门票和接送不加价。\n"
    "4. 门票 / 一日游：12 岁及以上按大人价，3–11 岁按小孩价，3 岁以下免费。\n"
    "5. 机场接送：按「每车每程」计，4 人以内用轿车，5–7 人用商务车。来回算 2 程。\n"
    "6. 出行日期不在某项价格的有效期内：这一项不报价，标出「价格过期」，不计入合计。\n"
    "7. 定金：合计 × 30%。报价草案有效期 7 天。\n"
    "8. 签证、旅游保险、入境健康要求：报价助手一律不回答，标出「转人工」。\n"
    "9. 缺日期或人数：不出报价，列出需要问客人的问题。\n", encoding="utf-8")

(P / "expected").mkdir(exist_ok=True)
exp = {"enquiries": len(ENQ), "quotes": out,
       "summary": {"quoted": sum(1 for o in out if o["total"] is not None),
                   "clean": sum(1 for o in out if o["status"] == "可发给客人"),
                   "flagged": [(o["enquiry_id"], [f["type"] for f in o["flags"]]) for o in out if o["flags"]]}}
json.dump(exp, open(P / "expected/answer.json", "w"), ensure_ascii=False, indent=1)
for o in out:
    print(o["enquiry_id"], o["status"], o.get("total"), o.get("deposit"), [f["type"] for f in o["flags"]])
