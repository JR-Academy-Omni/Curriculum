#!/usr/bin/env python3
"""p09 teaching data + expected answer (deterministic).
Fictional Brisbane renovation company; fictional clients. Quote numbers are computed here, never hand-typed."""
import csv, json, pathlib, random

R = random.Random(20261109)
P = pathlib.Path(__file__).resolve().parents[1] / "p09-renovation-quote-approval"

# Rate card, AUD excluding GST (teaching prices for a fictional company)
RATES = [
    ("DEMO-BATH", "浴室拆除（含旧砖、旧洁具拆除）", "项", 1800.00),
    ("WPF", "湿区防水（含验收拍照）", "平方米", 65.00),
    ("TILE-FLR", "地砖铺贴人工（含辅料，不含瓷砖）", "平方米", 85.00),
    ("TILE-WALL", "墙砖铺贴人工（含辅料，不含瓷砖）", "平方米", 95.00),
    ("PAINT-INT", "室内墙面刷漆（两遍，含漆）", "平方米", 28.00),
    ("PAINT-CEIL", "天花刷漆（两遍，含漆）", "平方米", 32.00),
    ("PLAS-PATCH", "石膏板修补（每处 ≤ 0.5 平方米）", "处", 120.00),
    ("KIT-BENCH", "厨房台面更换（20mm 石英石，含安装）", "延米", 680.00),
    ("CAB-INST", "橱柜安装", "延米", 350.00),
    ("FLOOR-HYB", "Hybrid 地板铺设（含材料和防潮垫）", "平方米", 75.00),
    ("SKIRT", "踢脚线（含材料）", "延米", 18.00),
    ("RUBBISH", "垃圾清运", "车", 450.00),
    ("CALLOUT", "最低出工费", "次", 180.00),
]
RATE = {c: (d, u, p) for c, d, u, p in RATES}
GST = 0.10                 # teaching assumption: standard GST 10%
CALLOUT_UNDER = 800.00     # company rule: add CALLOUT if work subtotal < 800 (ex GST)
WPF_EXTRA_M2 = 4           # company rule: bathroom tiling must include waterproofing = floor tile m2 + 4 m2 shower walls
# Teaching assumption (以 QBCC 官方为准): QLD domestic building contracts — deposit cap 10% if contract price < $20,000, otherwise 5%
DEP_THRESHOLD = 20000.00

REQUESTS = [
    {"id": "Q-2611-01", "received": "2026-11-09 19:42", "client": "林先生", "email": "lin.family@example.com",
     "suburb": "Sunnybank", "channel": "网站表单",
     "text": "你好，我们家客厅和两个卧室想重新刷一下墙，师傅上周来量过了，说墙面一共大概 120 平方米，天花 45 平方米。"
             "另外卧室墙上有三个小洞，是以前挂电视留下的，也一起补一下。颜色就白色，越快越好。",
     "lines": [("PAINT-INT", 120), ("PAINT-CEIL", 45), ("PLAS-PATCH", 3)]},
    {"id": "Q-2611-02", "received": "2026-11-10 08:15", "client": "黄女士", "email": "huang.ems@example.com",
     "suburb": "Eight Mile Plains", "channel": "邮件",
     "text": "周老板您好，主卫想全部翻新：旧的全拆掉，地砖大概 6 个平方，墙砖贴到顶大概 18 个平方，瓷砖我自己去买。"
             "拆下来的垃圾你们帮忙拉走，一车应该够。请帮我报个价，谢谢。",
     "lines": [("DEMO-BATH", 1), ("TILE-FLR", 6), ("TILE-WALL", 18), ("RUBBISH", 1)]},
    {"id": "Q-2611-03", "received": "2026-11-10 10:03", "client": "张先生", "email": "zhang.calamvale@example.com",
     "suburb": "Calamvale", "channel": "微信转邮件",
     "text": "厨房台面想换成石英石的，旧的有裂了。橱柜不用动。大概多少钱？",
     "lines": None},
    {"id": "Q-2611-04", "received": "2026-11-10 13:27", "client": "Kevin Tran", "email": "kevin.tran.runcorn@example.com",
     "suburb": "Runcorn", "channel": "邮件",
     "text": "Hi, 客厅和走廊想铺 hybrid 地板，量过是 42 平方米，踢脚线大概 30 米。"
             "另外顺便想把客厅和厨房中间那面墙打掉，做成开放式，一起报个价吧。",
     "lines": [("FLOOR-HYB", 42), ("SKIRT", 30)], "excluded": "拆客厅与厨房之间的墙"},
    {"id": "Q-2611-05", "received": "2026-11-10 15:50", "client": "林先生", "email": "lin.family@example.com",
     "suburb": "Sunnybank", "channel": "网站表单",
     "text": "昨天提交过一次刷墙的报价，不知道你们收到没有，再发一次：墙面 120 平方米、天花 45 平方米、补三个洞。",
     "lines": [("PAINT-INT", 120), ("PAINT-CEIL", 45), ("PLAS-PATCH", 3)], "duplicate_of": "Q-2611-01"},
    {"id": "Q-2611-06", "received": "2026-11-10 17:12", "client": "陈女士", "email": "chen.shh@example.com",
     "suburb": "Sunnybank Hills", "channel": "电话记录",
     "text": "（前台电话记录）陈女士说书房墙上有一处石膏板被椅子撞破了，要补，补完那面墙 10 平方米顺便刷一下。"
             "她说她是周老板的朋友，问能不能打八折。",
     "lines": [("PLAS-PATCH", 1), ("PAINT-INT", 10)], "discount_ask": "客户要求八折"},
    {"id": "Q-2611-07", "received": "2026-11-11 09:05", "client": "刘先生 / 刘太太", "email": "liu.coopers@example.com",
     "suburb": "Coopers Plains", "channel": "邮件",
     "text": "我们买了个老房子，入住前想全屋铺 hybrid 地板 160 平方米，踢脚线 120 米，"
             "全屋墙面刷漆 380 平方米，天花 150 平方米。希望 12 月底前完工。",
     "lines": [("FLOOR-HYB", 160), ("SKIRT", 120), ("PAINT-INT", 380), ("PAINT-CEIL", 150)]},
]

(P / "data").mkdir(parents=True, exist_ok=True)
with open(P / "data/rate-card.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["item_code", "description", "unit", "unit_price_ex_gst"])
    for c, d, u, p in RATES: w.writerow([c, d, u, f"{p:.2f}"])
with open(P / "data/quote-requests.txt", "w", encoding="utf-8") as f:
    f.write("# 恒建装修 报价请求收件箱 2026-11-09 至 2026-11-11（练习数据：公司与客户都是为这个练习设计的）\n\n")
    for q in REQUESTS:
        f.write(f"========== {q['id']} ==========\n收到时间: {q['received']}\n渠道: {q['channel']}\n"
                f"客户: {q['client']}\n邮箱: {q['email']}\n区域: {q['suburb']} QLD\n\n{q['text']}\n\n")
with open(P / "data/company-rules.md", "w", encoding="utf-8") as f:
    f.write("""# 恒建装修 报价规则（老周定的，练习数据）

1. 所有价格按 `rate-card.csv` 单价表，单价不含 GST。GST 按 10% 计（教学假设，以 ATO 为准）。
2. 报价单只能用单价表里有的项目。单价表没有的活（尤其是拆墙、改结构、水电改线、屋顶），不能自己估价，交给老周。
3. 浴室翻新只要有贴砖，就必须加「湿区防水」，面积 = 地砖面积 + 4 平方米（淋浴区墙面）。客户没提也要加，并在备注里说明为什么。
4. 工程小计（不含 GST）不足 800 元，加收一次「最低出工费」180 元。
5. 定金：合同总价（含 GST）低于 20,000 元收 10%，20,000 元及以上收 5%。（这是按 QLD 住宅工程定金上限设的教学规则，实际以 QBCC 官方为准。合同总价超过 3,300 元的住宅工程在 QLD 还有书面合同等要求，也以 QBCC 为准。）
6. 报价有效期 30 天。瓷砖、洁具等客户自购材料不在报价内，要写明。
7. 打折、免费加项、改单价，只有老周能决定。员工和 AI 只按标准价出草稿，把客户的要求原样转给老周。
8. 所有报价必须老周审批后才能发给客户。
""")


def r2(x): return round(x + 1e-9, 2)


quotes, skipped = [], []
for q in REQUESTS:
    if q.get("duplicate_of"):
        skipped.append({"id": q["id"], "reason": f"与 {q['duplicate_of']} 是同一客户同一需求的重复提交，合并处理，不另出报价"}); continue
    if q["lines"] is None:
        skipped.append({"id": q["id"], "reason": "没有台面长度（延米），无法按单价表计算；先回邮件请客户提供尺寸或约上门测量"}); continue
    lines = list(q["lines"])
    notes = []
    codes = [c for c, _ in lines]
    if "TILE-FLR" in codes and "DEMO-BATH" in codes and "WPF" not in codes:
        flr = dict(lines)["TILE-FLR"]
        lines.insert(codes.index("TILE-FLR"), ("WPF", flr + WPF_EXTRA_M2))
        notes.append(f"按公司规则加湿区防水 {flr + WPF_EXTRA_M2} 平方米（地砖 {flr} + 淋浴区墙面 {WPF_EXTRA_M2}）")
    work_sub = sum(RATE[c][2] * qty for c, qty in lines)
    if work_sub < CALLOUT_UNDER:
        lines.append(("CALLOUT", 1)); notes.append(f"工程小计 {work_sub:.2f} 不足 800，加最低出工费")
    out_lines = [{"item_code": c, "description": RATE[c][0], "unit": RATE[c][1], "qty": qty,
                  "unit_price": RATE[c][2], "line_total": r2(RATE[c][2] * qty)} for c, qty in lines]
    sub = r2(sum(l["line_total"] for l in out_lines))
    gst = r2(sub * GST); total = r2(sub + gst)
    dep_rate = 0.10 if total < DEP_THRESHOLD else 0.05
    flags = []
    if q.get("excluded"): flags.append(f"「{q['excluded']}」不在单价表、可能涉及承重墙，未计价，需老周判断是否请结构工程师")
    if q.get("discount_ask"): flags.append(f"{q['discount_ask']}：草稿按标准价，折扣由老周决定")
    if total >= DEP_THRESHOLD: flags.append("合同总价 ≥ 20,000，定金按 5%")
    quotes.append({"id": q["id"], "client": q["client"], "email": q["email"], "suburb": q["suburb"],
                   "lines": out_lines, "subtotal_ex_gst": sub, "gst": gst, "total_inc_gst": total,
                   "deposit_rate": dep_rate, "deposit": r2(total * dep_rate), "notes": notes, "flags_for_owner": flags,
                   "valid_days": 30})

exp = {"requests_in_file": len(REQUESTS), "quotes_drafted": len(quotes), "skipped": skipped, "quotes": quotes,
       "all_quotes_need_owner_approval": True}
(P / "expected").mkdir(exist_ok=True)
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
for x in quotes:
    print(x["id"], x["subtotal_ex_gst"], x["gst"], x["total_inc_gst"], x["deposit_rate"], x["deposit"], x["notes"], x["flags_for_owner"])
print(skipped)
