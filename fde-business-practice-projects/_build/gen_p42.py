#!/usr/bin/env python3
"""p42 teaching data + expected answer (deterministic).
Invented Adelaide bakery, December social content calendar -> drafts -> review -> scheduling.
Flags (closed day, consent, unverified price, risky claim words) are rule-computed; caption drafts are written by hand as the reference."""
import csv, json, pathlib, random, re, datetime as dt

R = random.Random(20261142)
P = pathlib.Path(__file__).resolve().parents[1] / "p42-social-content-calendar-approval"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)

CLOSED = {dt.date(2026, 12, 25), dt.date(2026, 12, 26)}           # 加上每周一
PRICES = {"9.50": "酸种面包", "5.80": "可颂", "6.50": "肉桂卷", "24": "圣诞史多伦", "18": "肉馅派 6 个装", "6": "布朗尼"}
RISKY = ["最好吃", "第一", "best", "乳糜泻", "放心吃", "无麸质", "健康"]
INSTORE = ["来店", "到店", "自提", "店里"]

CAL = [  # post_id, date, time, platform, pillar, topic, notes, asset_caption, asset_type, asset_consent, requested_by
    ("S01", "2026-12-01", "08:00", "Instagram+Facebook", "节日", "圣诞史多伦开放预订", "价格 $24，12-15 起自提，12-20 截止预订", "史多伦切面特写，撒满糖粉，木砧板", "产品", "na", "Sophie"),
    ("S02", "2026-12-03", "12:00", "Instagram", "幕后", "凌晨四点的酸种面团", "想让大家看到面包师几点起床", "面包师 Leo 的手在揉面，只拍到手和面团", "员工", "yes", "小陈"),
    ("S03", "2026-12-05", "08:00", "Instagram+Facebook", "新品", "黄油可颂", "文案里写一句：全阿德莱德最好吃的可颂", "刚出炉的可颂一排，侧面看得到层次", "产品", "na", "老板 Mark"),
    ("S04", "2026-12-06", "09:00", "Facebook", "顾客", "常客故事：Glenelg 店的周末早餐", "一家三口每周六都来买肉桂卷", "常客一家三口在 Glenelg 店门口拿着肉桂卷，小孩正脸", "顾客", "no", "小陈"),
    ("S05", "2026-12-08", "12:00", "Instagram", "新品", "无麸质布朗尼", "强调乳糜泻的朋友也能放心吃", "布朗尼切块，表面有裂纹", "产品", "na", "老板 Mark"),
    ("S06", "2026-12-10", "08:00", "Instagram+Facebook", "新品", "姜饼屋上市", "价格 $38，可以预订", "姜饼屋放在橱窗里，屋顶有糖霜", "产品", "na", "Sophie"),
    ("S07", "2026-12-12", "09:00", "Instagram", "门店信息", "Norwood 店周末少排队的小办法", "周末 9 点到 11 点人最多；可以先网上预订", "Norwood 店门口早上排队的远景，看不清人脸", "门店", "na", "小陈"),
    ("S08", "2026-12-15", "08:00", "Instagram+Facebook", "节日", "史多伦今天开始自提", "两家店都可以自提", "两家店柜台上一排打包好的史多伦", "产品", "na", "Sophie"),
    ("S09", "2026-12-18", "12:00", "Facebook", "节日", "史多伦预订截止提醒", "12-20 截止，提醒还没订的人", "史多伦礼盒，系红丝带", "产品", "na", "Sophie"),
    ("S10", "2026-12-22", "08:00", "Instagram+Facebook", "门店信息", "圣诞和新年营业时间", "照 brand-facts 写", "两家店的门头", "门店", "na", "Sophie"),
    ("S11", "2026-12-25", "09:00", "Instagram+Facebook", "节日", "圣诞快乐", "今天来店里自提最后一批肉馅派", "圣诞树旁边一盘肉馅派", "产品", "na", "老板 Mark"),
    ("S12", "2026-12-29", "08:00", "Instagram", "幕后", "今年的面包师团队", "感谢大家这一年", "六位员工在 Norwood 后厨的合影", "员工", "yes", "Sophie"),
]
with open(P / "data/content-calendar-2026-12.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["post_id", "planned_date", "planned_time", "platform", "pillar", "topic", "notes", "asset_caption", "asset_type", "asset_consent", "requested_by"])
    w.writerows(CAL)
FACTS = """# 麦田烘焙 Wheatfield Bakery · 品牌事实表（2026-11 核对）

社媒文案里出现的事实，只能来自这张表。表里没有的，写「待确认」去问店长 Sophie，不要补。

## 门店
- Norwood：The Parade 上
- Glenelg：Jetty Road 上
- 营业时间：周二到周日 7:00–15:00；**每周一休息**
- 圣诞新年：12-24（周四）7:00–13:00；**12-25、12-26 两家店都休息**；12-27 起照常；12-31 7:00–13:00；1-1 休息
- 预订表单：wheatfield.example/preorder

## 产品和价格（含 GST）
| 产品 | 价格 | 说明 |
|---|---|---|
| 酸种面包 | $9.50 | 每天早上出炉 |
| 可颂 | $5.80 | 澳洲产黄油 |
| 肉桂卷 | $6.50 | |
| 圣诞史多伦 | $24 | 12-01 开放预订，12-15 至 12-24 自提，**12-20 截止预订** |
| 肉馅派 6 个装 | $18 | 12 月供应，卖完即止 |
| 布朗尼 | $6 | 用无麸质面粉配方，但在共用厨房制作 |
| 姜饼屋 | 价格未定 | 2026 新品，预订方式未定 |

## 过敏原（原文照用）
> Our kitchen handles wheat, nuts, dairy, eggs and sesame. We can't guarantee any item is free from allergens.

- 布朗尼只能写「made with a gluten-free flour blend」，后面必须跟上面这句过敏原说明。**不能写 gluten-free、coeliac-safe、适合乳糜泻。**

## 文案规则
- 不用「最好」「第一」「best in Adelaide」这类说法：我们没有能拿出来的评比或奖项。
- 不写健康、营养、功效。
- 顾客照片要有书面同意（asset_consent = yes）才能用；员工照片同样要同意。
- 每条发出去之前都要 Sophie 批准，不自动发布。
"""
(P / "data/brand-facts.md").write_text(FACTS, encoding="utf-8")

# ---- 参考草稿（人工写，作为标准答案；数字只来自 brand-facts） ----
DRAFT = {
    "S01": "Christmas Stollen pre-orders are open! 🎄 Our Stollen is $24, ready to pick up from either shop between 15 and 24 December. Pre-orders close 20 December: wheatfield.example/preorder",
    "S02": "4am at the bakery. While most of Adelaide is asleep, Leo is already shaping today's sourdough. A loaf is $9.50, baked fresh every morning.",
    "S03": "Fresh butter croissants, out of the oven this morning. Made with Australian butter, and you can see every layer. $5.80 each at Norwood and Glenelg.",
    "S04": "Every Saturday at Jetty Road we see the same smiles in the morning queue, and the cinnamon scrolls ($6.50) go fast. Thanks for making us part of your weekend.",
    "S05": "New brownie, made with a gluten-free flour blend. $6 each. Please note: our kitchen handles wheat, nuts, dairy, eggs and sesame. We can't guarantee any item is free from allergens.",
    "S06": "Our first gingerbread house is here! It's in the window now, iced roof and all. Price and how to order: [待确认，问 Sophie] — we'll share the details soon.",
    "S07": "Weekend tip for Norwood: 9 to 11am is our busiest time. Want to skip the queue? Pre-order online and just pick up: wheatfield.example/preorder",
    "S08": "Stollen pick-up starts today! If you pre-ordered, come by Norwood or Glenelg, Tuesday to Sunday 7am–3pm, until 24 December (we close at 1pm on the 24th).",
    "S09": "Last call for Christmas Stollen: pre-orders close this Sunday, 20 December. $24 each, pick-up until 24 December. Order here: wheatfield.example/preorder",
    "S10": "Christmas hours at both shops 🎄 Thu 24 Dec: 7am–1pm. Fri 25 & Sat 26 Dec: closed. From Sun 27 Dec: back to normal (Tue–Sun 7am–3pm). Thu 31 Dec: 7am–1pm. Fri 1 Jan: closed.",
    "S11": "Merry Christmas from all of us at Wheatfield! 🎄 Both shops are closed today and tomorrow so the team can be with their families. See you from Sunday 27 December, 7am.",
    "S12": "This is the team behind every loaf this year. Thank you, Adelaide, for every early morning and every chat at the counter. See you in 2027!",
}
FIX = {
    "S03": "删掉「全阿德莱德最好吃」：没有能拿出来的评比，改成写看得到的事实（澳洲黄油、层次、价格）",
    "S04": "顾客照片没有书面同意：文案可以先审，图片不能用；要么拿到书面同意，要么换成不含顾客的门店照片",
    "S05": "不能写无麸质、适合乳糜泻：只能写 made with a gluten-free flour blend，并跟上过敏原原文",
    "S06": "姜饼屋价格 $38 不在事实表里：草稿留空位，问 Sophie 确认价格和预订方式后再补",
    "S11": "12-25 两家店休息，原计划的「今天来店里自提」不成立：改成纯祝福 + 告诉大家 12-27 恢复营业",
}

rows = []
for pid, date, time, plat, pillar, topic, notes, cap, atype, consent, req in CAL:
    d = dt.date.fromisoformat(date)
    text = topic + " " + notes
    flags = []
    closed = d in CLOSED or d.weekday() == 0
    if closed and any(k in text for k in INSTORE): flags.append("门店休息日却叫人到店")
    if atype in ("顾客", "员工") and consent != "yes": flags.append("照片没有书面同意")
    for m in re.findall(r"\$(\d+(?:\.\d{2})?)", text):
        if m not in PRICES: flags.append(f"价格 ${m} 不在事实表里")
    hits = [k for k in RISKY if k.lower() in text.lower()]
    if hits: flags.append("有不能用的说法：" + "、".join(hits))
    if not flags: decision = "草稿 → 送 Sophie 审批"
    elif any("价格" in f for f in flags): decision = "草稿留空位 → 先补信息再审批"
    elif any("同意" in f for f in flags): decision = "文案送审，图片暂停 → 等书面同意或换图"
    else: decision = "改写后 → 送 Sophie 审批"
    rows.append({"post_id": pid, "planned": f"{date} {time}", "weekday": "一二三四五六日"[d.weekday()], "platform": plat, "topic": topic,
                 "flags": flags, "decision": decision, "fix": FIX.get(pid, ""), "draft": DRAFT[pid]})

exp = {"calendar_rows": len(rows), "clean": [r["post_id"] for r in rows if not r["flags"]],
       "flagged": {r["post_id"]: r["flags"] for r in rows if r["flags"]},
       "rules": {"closed_days": "每周一 + 2026-12-25、12-26", "price_whitelist": PRICES, "risky_words": RISKY,
                 "consent": "asset_type 是顾客或员工时 asset_consent 必须是 yes"},
       "auto_publish": False, "posts": rows}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["post_id", "planned", "platform", "topic", "flags", "decision", "fix", "draft"])
    for r in rows: w.writerow([r["post_id"], r["planned"], r["platform"], r["topic"], "；".join(r["flags"]), r["decision"], r["fix"], r["draft"]])
for r in rows: print(r["post_id"], r["planned"], r["weekday"], r["flags"], r["decision"])
