#!/usr/bin/env python3
"""p13 teaching data + expected answer (deterministic). Same fictional restaurant as p01 (明月小馆 Chatswood).
Dedup, review window, per-platform stats and routing flags are rule-computed here.
Category / route judgement and REPLY drafts are reference answers written by hand following the README prompt
(no model API was called); the script only attaches them to the rows it selected."""
import csv, json, pathlib, random
from collections import defaultdict

R = random.Random(20261113)
P = pathlib.Path(__file__).resolve().parents[1] / "p13-restaurant-review-reply-approval"
WINDOW = ("2026-11-04", "2026-11-10")   # 这周一早上（11-11）处理上周三到周二的评价
MENU = ["宫保鸡丁饭", "牛肉面", "麻婆豆腐饭", "蒜蓉炒青菜", "小笼包（6 只）", "酸辣汤", "扬州炒饭", "椒盐鸡翅（6 只）", "珍珠奶茶", "红油抄手"]

# review_id, platform, posted_at, reviewer, reviewer_review_count, rating, order_id, order_items, text, owner_replied
REV = [
    ("G-7Q2K1", "Google", "2026-11-01 20:14", "Linda Z", 23, 2, "", "", "上次来点的牛肉面汤是温的，跟服务员说了也没换。", "yes"),
    ("UE-88120", "Uber Eats", "2026-11-02 13:05", "Kevin", 8, 5, "UB-10077", "牛肉面 x1; 小笼包（6 只） x1", "一如既往的好吃，小笼包汤汁很足。", "yes"),
    ("G-7R0A4", "Google", "2026-11-04 12:40", "Amanda Lee", 41, 5, "", "", "Chatswood 少有的正宗家常味，蒜蓉炒青菜火候刚好，午市人多但上菜不慢。", "no"),
    ("UE-88231", "Uber Eats", "2026-11-04 19:52", "Jason", 3, 2, "UB-10141", "牛肉面 x2; 酸辣汤 x1", "等了一个小时十分钟才到，牛肉面全坨了，汤也凉了。", "no"),
    ("DD-55301", "DoorDash", "2026-11-05 12:18", "Sophie W", 12, 5, "DO-10166", "扬州炒饭 x1; 椒盐鸡翅（6 只） x1", "鸡翅很脆，炒饭不油，会再点。", "no"),
    ("DD-55318", "DoorDash", "2026-11-05 13:02", "Michael T", 5, 1, "DO-10172", "扬州炒饭 x1; 小笼包（6 只） x1", "点了扬州炒饭和小笼包，小笼包根本没给，打店里电话也没人接。", "no"),
    ("G-7S3C9", "Google", "2026-11-05 20:31", "王先生", 17, 3, "", "", "味道还行，就是红油抄手太咸，服务员态度一般，叫了两次才来加水。", "no"),
    ("ML-30422", "Menulog", "2026-11-06 09:12", "Rachel", 2, 1, "ML-10412", "宫保鸡丁饭 x1; 珍珠奶茶 x1",
     "昨晚点的宫保鸡丁饭，吃完半夜开始拉肚子还吐了，家里就我一个人吃了这个。怀疑东西不干净，你们后厨真的要查一下。", "no"),
    ("G-7S3C9", "Google", "2026-11-05 20:31", "王先生", 17, 3, "", "", "味道还行，就是红油抄手太咸，服务员态度一般，叫了两次才来加水。", "no"),
    ("UE-88290", "Uber Eats", "2026-11-06 12:44", "Tina", 6, 4, "UB-10188", "麻婆豆腐饭 x1", "麻婆豆腐够麻，就是米饭有点少。", "no"),
    ("G-7T1M2", "Google", "2026-11-06 21:07", "Peter Huang", 9, 1, "", "",
     "什么破店，一群骗子，老板脑子有病，谁去谁是冤大头。滚出 Chatswood 吧。", "no"),
    ("G-7T5P8", "Google", "2026-11-07 14:22", "Emily Chen", 15, 5, "", "", "带爸妈来吃，小笼包和酸辣汤都说像国内的味道，服务员很耐心。", "no"),
    ("G-7T8W3", "Google", "2026-11-07 15:40", "Daniel R", 27, 2, "",
     "", "Ordered the Kung Pao chicken and it was way too sweet, nothing like what I had in Chengdu. Portion felt small for $18.90. Staff were friendly though.", "no"),
    ("ML-30455", "Menulog", "2026-11-07 18:55", "Ivy", 4, 5, "ML-10433", "牛肉面 x1; 蒜蓉炒青菜 x1", "牛肉很多，面有嚼劲。", "no"),
    ("G-7U0B6", "Google", "2026-11-07 19:10", "陈女士", 11, 2, "", "",
     "周六中午 12 点多到店说要等 40 分钟，没有取号，就站在门口干等，挺尴尬的。菜是好吃的。", "no"),
    ("DD-55377", "DoorDash", "2026-11-08 12:30", "Leo", 7, 4, "DO-10201", "宫保鸡丁饭 x1; 珍珠奶茶 x1", "好吃，奶茶甜度刚好。", "no"),
    ("UE-88342", "Uber Eats", "2026-11-08 13:15", "Grace", 10, 2, "UB-10209", "酸辣汤 x2; 红油抄手 x1", "分量越来越少了，酸辣汤一盒半碗都不到。", "no"),
    ("DD-55390", "DoorDash", "2026-11-08 19:48", "Ben K", 3, 3, "DO-10219", "珍珠奶茶 x2; 扬州炒饭 x1", "珍珠奶茶洒了一半在袋子里，封口没封好，炒饭盒子都湿了。", "no"),
    ("G-7U4H1", "Google", "2026-11-08 20:02", "Jenny", 33, 5, "", "", "Great dumplings and friendly staff. Will come back with friends.", "no"),
    ("ML-30478", "Menulog", "2026-11-08 20:40", "Andy", 5, 2, "ML-10451", "麻婆豆腐饭 x1", "麻婆豆腐饭的豆腐都是碎的，口感像放了很久。", "no"),
    ("UE-88371", "Uber Eats", "2026-11-08 21:03", "Mia", 2, 5, "UB-10230", "小笼包（6 只） x2", "小笼包送到还是热的，包装很用心。", "no"),
    ("G-7V2D7", "Google", "2026-11-10 03:12", "Happy Diner", 1, 1, "", "",
     "周一晚上带家人来吃北京烤鸭，鸭子又干又柴，188 一只完全不值。服务员还翻白眼，再也不来了。", "no"),
    ("G-7V3F0", "Google", "2026-11-10 12:55", "Oscar", 6, 4, "", "", "午市套餐性价比不错，就是座位有点挤。", "no"),
    ("DD-55412", "DoorDash", "2026-11-10 13:20", "Coco", 9, 5, "DO-10240", "红油抄手 x1; 酸辣汤 x1", "抄手皮薄馅多，辣度刚好。", "no"),
    ("UE-88401", "Uber Eats", "2026-11-10 19:31", "Sam", 4, 4, "UB-10252", "椒盐鸡翅（6 只） x1; 扬州炒饭 x1", "挺好的，就是送到有点晚。", "no"),
    ("ML-30502", "Menulog", "2026-11-10 20:05", "Helen", 3, 5, "ML-10466", "蒜蓉炒青菜 x1; 牛肉面 x1", "青菜很嫩，牛肉面汤底浓。", "no"),
    ("G-7V6K4", "Google", "2026-11-10 20:48", "Frank", 12, 4, "", "", "家常菜做得扎实，价格在 Chatswood 算合理。", "no"),
]
FIELDS = ["review_id", "platform", "posted_at", "reviewer", "reviewer_review_count", "rating", "order_id", "order_items", "text", "owner_replied"]
rows = [dict(zip(FIELDS, r)) for r in REV]

GUIDE = """# 明月小馆 评价回复规范（店长阿杰和老板陈姐定的，练习数据）

## 基本信息
- 地址：Shop 3, 12 Example Street, Chatswood NSW 2067
- 营业时间：周二至周日 11:30–14:30、17:00–21:00；**每周一店休，堂食和外卖都不营业**
- 菜单（堂食和外卖相同）：宫保鸡丁饭、牛肉面、麻婆豆腐饭、蒜蓉炒青菜、小笼包（6 只）、酸辣汤、扬州炒饭、椒盐鸡翅（6 只）、珍珠奶茶、红油抄手。**店里没有烤鸭。**
- 午市不接受订位，人多时现场排队，暂时没有取号系统。

## 哪些评价要处理
- 每周三早上处理上周三到本周二（7 天）发布的评价。
- 1–3 星、还没回复过的，走本流程；4–5 星的另做感谢回复，不在这个流程里。
- 同一条评价被导出两次（review_id 相同）只处理一次。

## 回复怎么写
- 先回应对方说的具体问题，再说我们会怎么做；中文不超过 80 字，英文不超过 60 词。对方用英文就用英文回。
- 落款统一「明月小馆 阿杰」（英文写 Jay, Mingyue Kitchen）。
- **公开回复里不承诺任何退款、补偿、代金券或折扣。** 需要补救的，请对方私信订单号，店长决定怎么处理。外卖平台的退款走平台自己的流程。
- 不辩解、不说「别的客人都说好吃」、不暗示对方说谎。

## 必须交给人的情况
1. **食品安全**（吃完不舒服、拉肚子、呕吐、吃到异物、怀疑变质）：当天上报店长和陈姐，店长电话或私信联系顾客，后厨按订单查当天批次。公开回复只写一句「已经私信您，想当面了解情况」，**不承认、不否认、不给任何身体方面的建议**，不在公开回复里讨论原因。
2. **辱骂、人身攻击**：不回复、不对骂。截图留存，店长决定要不要按平台规则举报。
3. **看起来不像真实顾客的评价**（比如说的日子我们店休、提到菜单上没有的菜、账号只有这一条评价）：不指控对方造假。可以简短说明查不到这次用餐记录、请对方联系我们；要不要向平台举报由店长决定。
4. 涉及员工个人的投诉（点名某位员工）：店长先跟员工了解，再决定怎么回。

## 发布
- 所有回复必须店长阿杰在 Slack 点「批准」后才能发出。
- 能不能用接口直接回复，以各平台官方文档和商家后台权限为准；不能用接口的，由店员复制到平台后台手动发布，发完在表里标记。
"""

# ---- hand-written judgement + reply drafts (reference answers, following the README prompt) ----
J = {
    "UE-88231": ("配送 / 出餐慢", "起草回复 → 店长审批", "普通",
                 "Jason 您好，让您等了一个多小时、面都坨了，真的很抱歉。我们在查那天晚上出餐和骑手交接哪里卡住了。方便的话私信订单号给我们，店长会跟进。——明月小馆 阿杰"),
    "DD-55318": ("漏餐", "起草回复 → 店长审批", "普通",
                 "Michael 您好，小笼包漏装是我们的问题，电话没接到也很抱歉。漏餐的退款可以在 DoorDash 订单里直接申请；也欢迎私信订单号，店长会跟您联系。我们会在打包台再加一道核对。——明月小馆 阿杰"),
    "G-7S3C9": ("口味 + 服务", "起草回复 → 店长审批", "普通",
                "王先生您好，谢谢您直说。红油抄手偏咸的问题我们会转给后厨；叫了两次才加水是我们照顾不周，晚市我们会多留意。欢迎下次来再给我们提意见。——明月小馆 阿杰"),
    "ML-30422": ("食品安全", "紧急转人工：店长 + 陈姐当天跟进；公开回复只发一句", "紧急",
                 "Rachel 您好，看到您的留言我们很重视，已经私信您，想当面了解一下情况。——明月小馆 阿杰"),
    "G-7T1M2": ("辱骂", "不回复，截图留存，店长决定是否举报", "当天",
                ""),
    "G-7T8W3": ("口味 + 分量", "起草回复 → 店长审批（英文）", "普通",
                "Hi Daniel, thanks for the honest feedback. Our Kung Pao is cooked a little sweeter than the Chengdu style, and we'll pass your note to the kitchen and look at the portion size. Glad the team looked after you. — Jay, Mingyue Kitchen"),
    "G-7U0B6": ("等位", "起草回复 → 店长审批", "普通",
                "陈女士您好，周六中午让您在门口干等了这么久，很抱歉。午市我们暂时不接订位，下次人多时我们会先请您留个电话，快到号了再叫您。谢谢您喜欢我们的菜。——明月小馆 阿杰"),
    "UE-88342": ("分量", "起草回复 → 店长审批", "普通",
                 "Grace 您好，谢谢提醒。酸辣汤每份的量我们有标准，您这单明显不够，后厨会重新核一下装盒的量。方便的话私信订单号，店长会跟进。——明月小馆 阿杰"),
    "DD-55390": ("包装", "起草回复 → 店长审批", "普通",
                 "Ben 您好，奶茶洒了还把炒饭弄湿，很抱歉。我们会让打包的同事给奶茶加封口贴、单独套袋。需要处理的话请私信订单号，店长会联系您。——明月小馆 阿杰"),
    "ML-30478": ("口味 / 新鲜度", "起草回复 → 店长审批（店长顺便问后厨当天豆腐批次）", "普通",
                 "Andy 您好，豆腐碎了、口感不对，我们不该让这样的出餐。我们会让后厨查那天的豆腐和出餐流程。方便的话私信订单号，店长会跟进。——明月小馆 阿杰"),
    "G-7V2D7": ("疑似非真实评价", "起草中性回复 + 建议店长决定是否举报", "普通",
                "您好，我们每周一店休，菜单上也没有烤鸭，所以没能找到您说的这次用餐记录。如果是别的日子来的，麻烦私信我们，我们想了解清楚。——明月小馆 阿杰"),
}
REASON = {
    "UE-88231": "1–3 星、未回复；送达慢 + 面坨，属于出餐 / 配送问题",
    "DD-55318": "漏装小笼包；公开回复不承诺退款，指引走平台退款 + 私信",
    "G-7S3C9": "同一条评价导出了两次，只处理一次",
    "ML-30422": "吃完拉肚子、呕吐，属于食品安全：当天上报，公开回复不讨论原因、不给身体方面的建议",
    "G-7T1M2": "人身攻击和辱骂，按规范不回复、不对骂；没有具体用餐信息",
    "G-7T8W3": "英文评价用英文回；口味偏甜 + 分量，同时提到员工友好",
    "G-7U0B6": "午市不接订位、没有取号，按规范如实说明，不承诺订位",
    "UE-88342": "分量不足",
    "DD-55390": "包装漏洒",
    "ML-30478": "口感像放久了，但没有提到身体不适，不算食品安全投诉；店长要顺便查批次",
    "G-7V2D7": "四个信号：说的是周一（店休）、点了菜单上没有的烤鸭、账号只有 1 条评价、凌晨 3 点发布；不指控造假，由店长决定是否举报",
}

(P / "data").mkdir(parents=True, exist_ok=True)
with open(P / "data/reviews-2026-11-04_10.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=FIELDS); w.writeheader(); w.writerows(rows)
(P / "data/reply-guide.md").write_text(GUIDE, encoding="utf-8")

# ---- expected (rule part) ----
seen, dups, uniq = set(), [], []
for r in rows:
    if r["review_id"] in seen: dups.append(r["review_id"]); continue
    seen.add(r["review_id"]); uniq.append(r)
in_win = [r for r in uniq if WINDOW[0] <= r["posted_at"][:10] <= WINDOW[1]]
out_win = [r["review_id"] for r in uniq if r not in in_win]
neg = [r for r in in_win if int(r["rating"]) <= 3 and r["owner_replied"] == "no"]
pos = [r for r in in_win if int(r["rating"]) >= 4]
stats = defaultdict(lambda: {"reviews": 0, "sum": 0, "negative": 0})
for r in in_win:
    s = stats[r["platform"]]; s["reviews"] += 1; s["sum"] += int(r["rating"]); s["negative"] += int(r["rating"]) <= 3
by_platform = [{"platform": p, "reviews": s["reviews"], "avg_rating": round(s["sum"] / s["reviews"], 2), "negative_1_3": s["negative"]}
               for p, s in sorted(stats.items(), key=lambda x: ["Google", "Uber Eats", "DoorDash", "Menulog"].index(x[0]))]
FOOD = ("拉肚子", "呕吐", "吐了", "异物", "变质", "食物中毒", "不干净")
ABUSE = ("骗子", "脑子有病", "滚出", "傻")


def flags(r):
    f = []
    if any(k in r["text"] for k in FOOD): f.append("食品安全关键词")
    if any(k in r["text"] for k in ABUSE): f.append("辱骂关键词")
    if "周一" in r["text"]: f.append("提到周一（店休）")
    if "烤鸭" in r["text"]: f.append("提到菜单外的菜（烤鸭）")
    if int(r["reviewer_review_count"]) <= 1: f.append("账号只有 1 条评价")
    if "00:00" <= r["posted_at"][11:] < "06:00": f.append("凌晨发布")
    if r["text"].isascii(): f.append("英文评价")
    return f


route_count = defaultdict(int)
for r in neg: route_count[J[r["review_id"]][1].split("（")[0].split("：")[0]] += 1
exp = {"rows_in_file": len(rows), "duplicates_removed": dups, "out_of_window": out_win, "reviews_in_window": len(in_win),
       "avg_rating_in_window": round(sum(int(r["rating"]) for r in in_win) / len(in_win), 2),
       "by_platform": by_platform, "negative_to_handle": len(neg), "positive_4_5": len(pos),
       "negative_ids": [r["review_id"] for r in neg],
       "rule_flags": {r["review_id"]: flags(r) for r in neg if flags(r)},
       "routes": dict(route_count),
       "drafts_for_approval": sum(1 for r in neg if J[r["review_id"]][3]),
       "no_reply": [r["review_id"] for r in neg if not J[r["review_id"]][3]],
       "urgent": [r["review_id"] for r in neg if J[r["review_id"]][2] == "紧急"],
       "window": WINDOW}
(P / "expected").mkdir(exist_ok=True)
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["review_id", "platform", "rating", "category", "route", "priority", "rule_flags", "reason", "reply_draft"])
    for r in neg:
        c, route, pr, draft = J[r["review_id"]]
        w.writerow([r["review_id"], r["platform"], r["rating"], c, route, pr, "; ".join(flags(r)), REASON[r["review_id"]], draft])
print(json.dumps(exp, ensure_ascii=False, indent=1))
