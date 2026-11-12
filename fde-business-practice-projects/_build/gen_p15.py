#!/usr/bin/env python3
"""p15 teaching data + expected answer (deterministic). Fictional Shopify gift store; fictional products.
Duplicate handles, banned-phrase hits, title length and missing weight are rule-computed here.
The bilingual rewrites in REWRITE are reference answers written by hand following the README prompt
(no model API was called); the script checks them against the same rules and writes the import file."""
import csv, json, pathlib, random, re

R = random.Random(20261115)
P = pathlib.Path(__file__).resolve().parents[1] / "p15-ecommerce-bilingual-product-copy"
TITLE_MAX = 60
BANNED = ["治疗", "治愈", "治胃病", "预防", "降血脂", "降血压", "降血糖", "增强免疫力", "提高免疫力", "抗癌", "消炎", "杀菌",
          "助眠", "治失眠", "缓解痛经", "关节炎", "排毒", "心脏病", "感冒", "cure", "treat", "prevent", "immune", "heal"]
COLS = ["Handle", "Title", "Body (HTML)", "Vendor", "Type", "Tags", "Published", "Option1 Name", "Option1 Value",
        "Variant SKU", "Variant Grams", "Variant Price", "Status"]


def row(handle, title, body, vendor, typ, tags, opt_name, opt_val, sku, grams, price):
    return dict(zip(COLS, [handle, title, body, vendor, typ, tags, "TRUE" if title else "", opt_name, opt_val, sku, grams, price, "active" if title else ""]))


rows = [
    row("manuka-honey-250g", "麦卢卡蜂蜜 UMF 10+ 250g",
        "<p>新西兰进口麦卢卡蜂蜜，UMF 10+，每天一勺增强免疫力，长期吃能治胃病，送长辈首选！</p>", "Southwind Select", "蜂蜜", "蜂蜜,送礼",
        "Title", "Default Title", "SW-HON-M10", "380", "39.90"),
    row("lanolin-cream", "绵羊油面霜", "<p>澳洲绵羊油，滋润不油腻，秋冬必备，大人小孩都能用。</p>", "Southwind Select", "护肤", "护肤,绵羊油",
        "Title", "Default Title", "SW-SKN-LAN", "", "12.50"),
    row("wool-duvet", "澳洲纯羊毛被 冬季加厚保暖 助眠 防螨 母婴可用 送礼佳品 酒店同款 Australian Pure Wool Duvet Winter Warm Gift",
        "<p>100% 澳洲美利奴羊毛填充，500gsm，冬季加厚，盖上助眠，一觉到天亮。外层纯棉面料。可机洗（羊毛程序，冷水）。</p>", "Southwind Select", "床品", "羊毛被,床品",
        "Size", "Queen 210x210cm", "SW-BED-WQ", "2600", "189.00"),
    row("wool-duvet", "", "", "", "", "", "Size", "King 240x210cm", "SW-BED-WK", "3100", "229.00"),
    row("goat-milk-soap-3pack", "羊奶皂 三块装", "<p>澳洲本地手工羊奶皂，每块 100g，三块装。成分：羊奶、橄榄油、椰子油。温和不紧绷。</p>", "Southwind Select", "洗护", "洗护,手工皂",
        "Title", "Default Title", "SW-BTH-GMS3", "330", "18.00"),
    row("macadamia-salted-500g", "盐焗夏威夷果 500g", "<p>昆士兰产夏威夷果，盐焗口味，500g 大包装，开口好剥。保质期 9 个月，开封后密封保存。</p>", "Southwind Select", "零食", "坚果,零食",
        "Title", "Default Title", "SW-SNK-MAC5", "520", "22.90"),
    row("eucalyptus-oil-50ml", "尤加利精油 50ml", "<p>澳洲尤加利精油 50ml，治疗感冒鼻塞，杀菌消炎，家里常备。</p>", "Southwind Select", "家居", "精油,家居",
        "Title", "Default Title", "SW-HOM-EUC", "90", "14.90"),
    row("kangaroo-plush-30cm", "袋鼠公仔 30cm", "<p>袋鼠妈妈带宝宝毛绒公仔，高 30cm，宝宝可以从育儿袋里拿出来。适合 3 岁以上。表面可手洗。</p>", "Southwind Select", "玩具", "玩具,纪念品",
        "Title", "Default Title", "SW-TOY-KAN30", "260", "24.00"),
    row("sheepskin-slippers", "羊皮毛一体拖鞋", "<p>整张羊皮毛一体，鞋底防滑橡胶。室内穿。尺码偏大，建议拍小一码。</p>", "Southwind Select", "鞋", "拖鞋,羊皮",
        "Size", "S（AU 5-6）", "SW-SHO-SLP-S", "420", "69.00"),
    row("sheepskin-slippers", "", "", "", "", "", "Size", "M（AU 7-8）", "SW-SHO-SLP-M", "460", "69.00"),
    row("sheepskin-slippers", "", "", "", "", "", "Size", "L（AU 9-10）", "SW-SHO-SLP-L", "500", "69.00"),
    row("fish-oil-1000mg-400caps", "深海鱼油 1000mg 400 粒", "<p>深海鱼油软胶囊，每粒 1000mg，400 粒大瓶。降血脂、预防心脏病，中老年人每天 2 粒。</p>", "Southwind Select", "保健品", "保健品,鱼油",
        "Title", "Default Title", "SW-HLT-FO400", "610", "29.90"),
    row("propolis-toothpaste-120g", "蜂胶牙膏 120g", "<p>含蜂胶成分的牙膏，120g，薄荷味，清新口气。</p>", "Southwind Select", "洗护", "洗护,牙膏",
        "Title", "Default Title", "SW-BTH-PRO", "150", "9.90"),
    row("manuka-honey-250g", "麦卢卡蜂蜜 UMF 15+ 250g", "<p>UMF 15+ 麦卢卡蜂蜜，250g，浓度更高。</p>", "Southwind Select", "蜂蜜", "蜂蜜,送礼",
        "Title", "Default Title", "SW-HON-M15", "380", "69.90"),
    row("chocolate-biscuit-gift-box", "巧克力夹心饼干礼盒", "<p>澳洲本地烘焙巧克力夹心饼干，一盒好多包，送同事送朋友都合适。</p>", "Southwind Select", "零食", "零食,送礼",
        "Title", "Default Title", "SW-SNK-CBB", "", "19.90"),
    row("lavender-wheat-bag", "薰衣草热敷包", "<p>塔斯马尼亚薰衣草 + 小麦填充，微波炉加热 90 秒，缓解痛经，治疗关节炎。可冷敷。</p>", "Southwind Select", "家居", "家居,热敷",
        "Title", "Default Title", "SW-HOM-LAV", "800", "26.00"),
]

RULES = """# 南风优选 商品文案规则（何姐定的，练习数据）

## 格式
- Title：`中文名 | English name 规格`，**不超过 60 个字符**（中英文、空格、符号都算 1 个）。不堆关键词。
- Body (HTML)：三段，顺序固定：
  1. `<p>` 中文介绍，2–3 句，说清是什么、产地、怎么用；
  2. `<p>` English description，跟中文意思一致，不是逐字翻译；
  3. `<ul>` 规格清单，每行中英对照：规格 / Size、产地 / Origin、成分或材质 / Ingredients or Material、保存或洗护 / Storage or Care。原文没写的项不写，不要编。
- 原文没有写净含量、容量或尺寸的：规格那一行写「规格：待补 / Size: TBC」，这个商品先不导入，列进「需要核对」。

## 禁用说法（广告法和澳洲对治疗类宣传的要求，教学假设，以 TGA 和 ACCC 官方要求为准）
- 不写任何治疗、预防、缓解疾病或症状的说法：治疗、治愈、预防、缓解痛经、关节炎、感冒、消炎、杀菌、降血脂 / 血压 / 血糖、增强免疫力、抗癌、排毒、助眠、心脏病……英文同理（cure, treat, prevent, immune, heal）。
- 不写「最好」「第一」「100% 有效」这类绝对化说法。
- 保健品（Type = 保健品）只写成分、规格、产地和标签上的用法用量原文，不写任何功效；上架前何姐对照实物标签核对。

## 导入
- 同一个 Handle 在 Shopify 里是同一个商品，多行代表多个规格（Size / Option）。如果同一个 Handle 下出现两个不同的 Title，说明两个不同商品撞了 Handle，导入会互相覆盖：先不导入，列进「需要核对」，建议新 Handle。
- Variant Grams 是运费按重量计算用的，不能为空。
"""

# ---- hand-written bilingual rewrites (reference answers, following README prompt + RULES) ----
# key = (Handle, original Title)
REWRITE = {
    ("manuka-honey-250g", "麦卢卡蜂蜜 UMF 10+ 250g"): ("麦卢卡蜂蜜 UMF 10+ 250g | Manuka Honey UMF 10+ 250g",
        "新西兰进口麦卢卡蜂蜜，UMF 10+，250g 玻璃瓶装。口感浓稠，带一点草本香气，可以直接吃，也可以兑温水。包装端正，适合送长辈。",
        "Manuka honey from New Zealand, graded UMF 10+, in a 250g glass jar. Thick and rich with a light herbal note - enjoy it by the spoon or stirred into warm water. A thoughtful gift for parents and grandparents.",
        [("规格 / Size", "250g"), ("产地 / Origin", "新西兰 / New Zealand")]),
    ("manuka-honey-250g", "麦卢卡蜂蜜 UMF 15+ 250g"): ("麦卢卡蜂蜜 UMF 15+ 250g | Manuka Honey UMF 15+ 250g",
        "UMF 15+ 麦卢卡蜂蜜，250g 装，等级比 UMF 10+ 更高。",
        "Manuka honey graded UMF 15+, 250g. A higher grade than our UMF 10+ jar.",
        [("规格 / Size", "250g")]),
    ("lanolin-cream", "绵羊油面霜"): ("绵羊油面霜 | Lanolin Cream",
        "澳洲绵羊油面霜，质地滋润但不油腻，秋冬天气干的时候很好用，大人小孩都能用。",
        "Australian lanolin cream - rich but not greasy, ideal for dry autumn and winter days. Suitable for the whole family.",
        [("规格 / Size", "待补 / TBC"), ("产地 / Origin", "澳洲 / Australia")]),
    ("wool-duvet", "澳洲纯羊毛被 冬季加厚保暖 助眠 防螨 母婴可用 送礼佳品 酒店同款 Australian Pure Wool Duvet Winter Warm Gift"):
        ("澳洲美利奴羊毛被 500gsm | Merino Wool Duvet 500gsm",
        "100% 澳洲美利奴羊毛填充，500gsm 冬季厚款，外层纯棉面料，盖着暖和、透气。有 Queen 和 King 两个尺寸。可以机洗，选羊毛程序、冷水。",
        "Filled with 100% Australian merino wool, 500gsm winter weight, with a pure cotton cover. Warm and breathable. Available in Queen and King. Machine washable on a wool cycle in cold water.",
        [("规格 / Size", "Queen 210x210cm；King 240x210cm"), ("材质 / Material", "100% 美利奴羊毛填充，纯棉外层 / 100% merino wool fill, cotton cover"),
         ("洗护 / Care", "机洗，羊毛程序，冷水 / Machine wash, wool cycle, cold")]),
    ("goat-milk-soap-3pack", "羊奶皂 三块装"): ("羊奶皂三块装 | Goat Milk Soap 3-Pack",
        "澳洲本地手工做的羊奶皂，三块装，每块 100g。用羊奶、橄榄油和椰子油做的，洗完不紧绷。",
        "Handmade in Australia from goat milk, olive oil and coconut oil. Three 100g bars per pack. Gentle, and leaves skin feeling soft rather than tight.",
        [("规格 / Size", "100g x 3"), ("产地 / Origin", "澳洲 / Australia"), ("成分 / Ingredients", "羊奶、橄榄油、椰子油 / Goat milk, olive oil, coconut oil")]),
    ("macadamia-salted-500g", "盐焗夏威夷果 500g"): ("盐焗夏威夷果 500g | Salted Macadamias 500g",
        "昆士兰产的夏威夷果，盐焗口味，500g 大包装。带开口，好剥。开封后记得密封保存。",
        "Queensland macadamias, roasted with salt, in a 500g bag. Pre-cracked for easy shelling. Reseal after opening.",
        [("规格 / Size", "500g"), ("产地 / Origin", "澳洲昆士兰 / Queensland, Australia"), ("保存 / Storage", "保质期 9 个月，开封后密封 / Best before 9 months; reseal after opening")]),
    ("eucalyptus-oil-50ml", "尤加利精油 50ml"): ("尤加利精油 50ml | Eucalyptus Oil 50ml",
        "澳洲尤加利精油，50ml 小瓶，味道清凉，家里放一瓶，滴在香薰机里或者加进清洁用水都可以。",
        "Australian eucalyptus oil in a 50ml bottle. A fresh, clean scent - add a few drops to a diffuser or to your cleaning water.",
        [("规格 / Size", "50ml"), ("产地 / Origin", "澳洲 / Australia")]),
    ("kangaroo-plush-30cm", "袋鼠公仔 30cm"): ("袋鼠公仔 30cm | Kangaroo Plush Toy 30cm",
        "袋鼠妈妈带宝宝的毛绒公仔，高 30cm，小袋鼠可以从育儿袋里拿出来再放回去。适合 3 岁以上，表面可以手洗。",
        "A mother kangaroo plush with a joey that comes out of her pouch. 30cm tall. Suitable for ages 3+. Hand wash only.",
        [("规格 / Size", "30cm"), ("适用年龄 / Age", "3 岁以上 / 3+"), ("洗护 / Care", "手洗 / Hand wash")]),
    ("sheepskin-slippers", "羊皮毛一体拖鞋"): ("羊皮毛一体拖鞋 | Sheepskin Slippers",
        "整张羊皮毛一体做的室内拖鞋，鞋底是防滑橡胶。尺码偏大，建议拍小一码。",
        "Indoor slippers made from a single piece of sheepskin with the wool left on, and a non-slip rubber sole. They run large - we suggest one size down.",
        [("尺码 / Size", "S（AU 5-6）、M（AU 7-8）、L（AU 9-10）"), ("材质 / Material", "羊皮毛一体，橡胶鞋底 / Sheepskin, rubber sole")]),
    ("fish-oil-1000mg-400caps", "深海鱼油 1000mg 400 粒"): ("深海鱼油 1000mg 400 粒 | Fish Oil 1000mg 400 Capsules",
        "深海鱼油软胶囊，每粒 1000mg，一瓶 400 粒。用法用量请按瓶身标签。",
        "Fish oil soft capsules, 1000mg each, 400 capsules per bottle. Please follow the directions on the label.",
        [("规格 / Size", "1000mg x 400")]),
    ("propolis-toothpaste-120g", "蜂胶牙膏 120g"): ("蜂胶牙膏 120g | Propolis Toothpaste 120g",
        "含蜂胶成分的牙膏，120g，薄荷味，刷完口气清新。",
        "Toothpaste with propolis, 120g, mint flavour. Leaves your breath fresh.",
        [("规格 / Size", "120g")]),
    ("chocolate-biscuit-gift-box", "巧克力夹心饼干礼盒"): ("巧克力夹心饼干礼盒 | Chocolate Biscuit Gift Box",
        "澳洲本地烘焙的巧克力夹心饼干，一盒里面是独立小包装，送同事、送朋友都合适。",
        "Chocolate cream biscuits baked in Australia, individually wrapped inside the box. An easy gift for colleagues and friends.",
        [("规格 / Size", "待补 / TBC"), ("产地 / Origin", "澳洲 / Australia")]),
    ("lavender-wheat-bag", "薰衣草热敷包"): ("薰衣草热敷包 | Lavender Wheat Bag",
        "塔斯马尼亚薰衣草加小麦填充，微波炉加热 90 秒就能热敷，放冰箱冷藏后也能冷敷。",
        "Filled with Tasmanian lavender and wheat. Heat in the microwave for 90 seconds for a warm pack, or chill it in the fridge for a cool one.",
        [("填充 / Fill", "塔斯马尼亚薰衣草、小麦 / Tasmanian lavender, wheat"), ("用法 / Use", "微波炉加热 90 秒，或冷藏 / Microwave 90 seconds, or refrigerate")]),
}
NEW_HANDLE = {("manuka-honey-250g", "麦卢卡蜂蜜 UMF 15+ 250g"): "manuka-honey-umf15-250g"}


def hits(text):
    t = text.lower()
    return [b for b in BANNED if b in t]


def body_html(zh, en, specs):
    return f"<p>{zh}</p><p>{en}</p><ul>" + "".join(f"<li>{k}：{v}</li>" for k, v in specs) + "</ul>"


(P / "data").mkdir(parents=True, exist_ok=True)
with open(P / "data/products_export.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=COLS); w.writeheader(); w.writerows(rows)
(P / "data/copy-rules.md").write_text(RULES, encoding="utf-8")

# ---- rule checks on source ----
products, cur = [], None
for r in rows:
    if r["Title"]:
        cur = {"handle": r["Handle"], "title": r["Title"], "type": r["Type"], "body": r["Body (HTML)"], "variants": []}
        products.append(cur)
    cur["variants"].append({"option": r["Option1 Value"], "sku": r["Variant SKU"], "grams": r["Variant Grams"]})
by_handle = {}
for p in products: by_handle.setdefault(p["handle"], []).append(p["title"])
dup_handles = {h: t for h, t in by_handle.items() if len(t) > 1}
report = []
for p in products:
    key = (p["handle"], p["title"])
    new_title, zh, en, specs = REWRITE[key]
    issues = []
    src_hits = hits(p["title"] + p["body"])
    if src_hits: issues.append({"type": "禁用说法", "detail": "原文出现：" + "、".join(src_hits), "fixed_in_rewrite": True})
    if len(p["title"]) > TITLE_MAX: issues.append({"type": "标题过长", "detail": f"原标题 {len(p['title'])} 个字符，规则 ≤ {TITLE_MAX}", "fixed_in_rewrite": True})
    if any(not v["grams"] for v in p["variants"]): issues.append({"type": "缺重量", "detail": "Variant Grams 为空，运费没法算", "fixed_in_rewrite": False})
    if any("待补" in v for _, v in specs): issues.append({"type": "缺规格", "detail": "原文没有写净含量 / 容量，改写里写了「待补」", "fixed_in_rewrite": False})
    if p["handle"] in dup_handles: issues.append({"type": "Handle 重复", "detail": f"Handle {p['handle']} 下有 {len(dup_handles[p['handle']])} 个不同商品", "fixed_in_rewrite": False,
                                                  "suggested_handle": NEW_HANDLE.get(key, p["handle"])})
    if p["type"] == "保健品": issues.append({"type": "保健品", "detail": "只保留成分和规格；上架前何姐对照实物标签核对", "fixed_in_rewrite": False})
    new_body = body_html(zh, en, specs)
    assert len(new_title) <= TITLE_MAX, (new_title, len(new_title))
    assert not hits(new_title + new_body), (key, hits(new_title + new_body))
    blocking = any(i["type"] in ("缺重量", "缺规格", "Handle 重复") for i in issues)
    status = "先不导入，需要核对" if blocking else ("可导入（何姐核对标签后）" if p["type"] == "保健品" else "可导入")
    report.append({"handle": p["handle"], "original_title": p["title"], "original_title_len": len(p["title"]), "new_title": new_title,
                   "new_title_len": len(new_title), "issues": issues, "status": status, "new_body_html": new_body})

exp = {"rows_in_file": len(rows), "products": len(products), "variant_rows": len(rows) - len(products),
       "duplicate_handles": dup_handles, "title_over_limit": [r["handle"] for r in report if r["original_title_len"] > TITLE_MAX],
       "banned_phrase_products": {r["handle"] + ("" if r["original_title"] != "麦卢卡蜂蜜 UMF 10+ 250g" else "（UMF 10+）"): i["detail"] for r in report for i in r["issues"] if i["type"] == "禁用说法"},
       "missing_weight": [r["handle"] for r in report if any(i["type"] == "缺重量" for i in r["issues"])],
       "status_count": {s: sum(1 for r in report if r["status"] == s) for s in sorted({r["status"] for r in report})},
       "title_max": TITLE_MAX, "products_report": report}
(P / "expected").mkdir(exist_ok=True)
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/products_rewritten.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["Handle", "Title", "Body (HTML)", "status", "issues"])
    for r in report:
        w.writerow([r["handle"], r["new_title"], r["new_body_html"], r["status"], "; ".join(i["type"] for i in r["issues"])])
print(json.dumps({k: v for k, v in exp.items() if k != "products_report"}, ensure_ascii=False, indent=1))
for r in report: print(r["handle"], r["original_title_len"], r["new_title_len"], r["status"], [i["type"] for i in r["issues"]])
