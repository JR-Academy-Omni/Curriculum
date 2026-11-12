#!/usr/bin/env python3
"""p02 teaching data + expected answer (deterministic). Fictional Shopify tea store, fictional suppliers."""
import csv, json, math, pathlib, random
from collections import defaultdict
R = random.Random(20261102)
P = pathlib.Path(__file__).resolve().parents[1] / "p02-ecommerce-reorder-approval"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)

COVER_DAYS = 30          # 补一次货要撑多少天（店主定的规则）
OWNER_LIMIT = 3000.00    # 单张采购单超过这个金额，要老板再批一次
SPIKE_RATIO = 3.0        # 近 7 天日均 ≥ 28 天日均的 3 倍，算异常放量

suppliers = [
    {"supplier_id": "S01", "name": "Westgate Tea Imports", "contact": "Grace Liu", "email": "orders@westgate-tea.example",
     "lead_time_days": 7, "min_order_value": 800.00, "note": "墨尔本本地茶叶批发，周一到周五发货"},
    {"supplier_id": "S02", "name": "Yixing Craft Supply", "contact": "Kevin Zhou", "email": "sales@yixing-craft.example",
     "lead_time_days": 21, "min_order_value": 1500.00, "note": "茶具，海运到港后转陆运，价格已含运到墨尔本仓"},
    {"supplier_id": "S03", "name": "Pack&Ship Melbourne", "contact": "Daniel Ng", "email": "hello@packship-mel.example",
     "lead_time_days": 3, "min_order_value": 300.00, "note": "包装耗材"},
]
LT = {s["supplier_id"]: s["lead_time_days"] for s in suppliers}

# sku, product, supplier, unit_cost, case_pack, moq, avg_daily(28d), safety_days
catalog = [
    ("TEA-OOL-100", "台湾高山乌龙 100g", "S01", 14.20, 10, 20, 3.1, 7),
    ("TEA-PUE-357", "云南熟普洱饼 357g", "S01", 28.50, 6, 6, 0.9, 7),
    ("TEA-JAS-050", "福州茉莉花茶 50g", "S01", 7.80, 20, 40, 4.6, 7),
    ("TEA-LJ-100", "明前龙井 100g", "S01", 32.00, 10, 10, 1.4, 7),
    ("TEA-TGY-100", "安溪铁观音 100g", "S01", 12.60, 10, 20, 2.2, 7),
    ("TEA-DHP-050", "武夷大红袍 50g", "S01", 19.90, 10, 10, 1.1, 7),
    ("TEA-WHT-100", "福鼎白牡丹 100g", "S01", 16.40, 10, 10, 1.3, 7),
    ("TEA-GBY-050", "桂花红茶 50g", "S01", 9.50, 20, 20, 0.6, 7),
    ("WAR-GW-120", "白瓷盖碗 120ml", "S02", 11.00, 12, 24, 1.8, 14),
    ("WAR-ZSH-200", "紫砂壶 200ml", "S02", 46.00, 4, 8, 0.5, 14),
    ("WAR-GDB-300", "玻璃公道杯 300ml", "S02", 8.40, 12, 24, 1.5, 14),
    ("WAR-CUP-6", "品茗杯六只装", "S02", 15.60, 6, 12, 1.2, 14),
    ("WAR-TRY-BMB", "竹制茶盘", "S02", 38.00, 4, 4, 0.4, 14),
    ("WAR-SET-TRV", "便携旅行茶具套装", "S02", 24.00, 6, 12, 0.7, 14),
    ("PKG-BOX-S", "礼盒（小）", "S03", 1.20, 100, 200, 9.0, 5),
    ("PKG-BOX-L", "礼盒（大）", "S03", 2.10, 50, 100, 3.5, 5),
    ("PKG-MAIL-A4", "快递袋 A4", "S03", 0.32, 200, 400, 14.0, 5),
    ("PKG-TAPE", "封箱胶带", "S03", 2.80, 12, 24, 0.8, 5),
    ("PKG-CARD", "冲泡说明卡", "S03", 0.15, 500, 500, 10.0, 5),
    ("TEA-MATCHA-030", "宇治抹茶粉 30g", "S04", 13.00, 10, 20, 1.6, 7),
    ("TEA-XMAS-GIFT", "2025 圣诞限定礼盒", "S01", 22.00, 6, 6, 0.8, 7),
    ("TEA-CHRY-050", "杭白菊 50g", "S01", 6.90, 20, 20, 0.7, 7),
]
rows = []
for sku, name, sup, cost, pack, moq, avg, safety in catalog:
    rop = avg * (LT.get(sup, 7) + safety)
    # 大约一半的 SKU 落在补货点以下
    low = R.random() < 0.55
    on_hand = int(rop * R.uniform(0.25, 0.85)) if low else int(rop * R.uniform(1.4, 2.6)) + 5
    committed = R.randint(0, max(1, int(avg * 2)))
    incoming = 0
    sales_7d = round(avg * R.uniform(0.8, 1.25), 1)
    rows.append({"sku": sku, "product": name, "status": "active", "supplier_id": sup,
                 "on_hand": on_hand, "committed": committed, "incoming": incoming,
                 "avg_daily_28d": avg, "avg_daily_7d": sales_7d, "safety_days": safety,
                 "moq": moq, "case_pack": pack, "unit_cost": f"{cost:.2f}"})
byk = {r["sku"]: r for r in rows}
# 确保正常补货链路覆盖到每个供应商
for k in ("TEA-OOL-100", "TEA-JAS-050", "TEA-LJ-100", "WAR-GW-120", "WAR-CUP-6", "WAR-ZSH-200", "PKG-BOX-S", "PKG-MAIL-A4"):
    r = byk[k]; r["on_hand"] = int(r["avg_daily_28d"] * (LT[r["supplier_id"]] + r["safety_days"]) * 0.4)
for k in ("TEA-PUE-357", "TEA-WHT-100", "WAR-TRY-BMB", "PKG-TAPE", "PKG-CARD", "TEA-CHRY-050"):
    r = byk[k]; r["on_hand"] = int(r["avg_daily_28d"] * (LT[r["supplier_id"]] + r["safety_days"]) * 2.2) + 6
byk["TEA-LJ-100"]["incoming"] = 10                     # 已在途的一张旧单，要算进可用量
# ---- planted anomalies ----
byk["TEA-TGY-100"]["on_hand"] = -4                     # A1 库存为负：盘点 / 同步出错
byk["TEA-XMAS-GIFT"].update(status="discontinued", on_hand=3)   # A2 已停售还低于补货点
# A3 TEA-MATCHA-030 的供应商 S04 不在供应商表里（catalog 已设置）
byk["TEA-MATCHA-030"]["on_hand"] = 5
byk["WAR-GDB-300"].update(unit_cost="", on_hand=6)     # A4 单价为空，没法算采购金额
byk["TEA-DHP-050"].update(avg_daily_7d=5.6, on_hand=12)  # A5 近 7 天突然放量（一笔团购），要人判断
for r in rows:
    r["avg_daily_7d"] = f"{float(r['avg_daily_7d']):.1f}"; r["avg_daily_28d"] = f"{float(r['avg_daily_28d']):.1f}"

with open(P / "data/inventory-2026-11-11.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
with open(P / "data/suppliers.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(suppliers[0])); w.writeheader(); w.writerows(suppliers)

# ---- expected answer ----
sup_ids = set(LT)
lines, holds, skipped_ok = [], [], []
for r in rows:
    sku = r["sku"]; avg = float(r["avg_daily_28d"]); avg7 = float(r["avg_daily_7d"])
    on_hand, committed, incoming = int(r["on_hand"]), int(r["committed"]), int(r["incoming"])
    if r["status"] != "active":
        holds.append({"sku": sku, "type": "已停售", "action": "不补货", "reason": "status = discontinued，库存卖完即下架"}); continue
    if on_hand < 0:
        holds.append({"sku": sku, "type": "库存为负", "action": "暂停，先盘点", "reason": f"on_hand = {on_hand}，库存数不可信，请仓库实盘后再算"}); continue
    if r["supplier_id"] not in sup_ids:
        holds.append({"sku": sku, "type": "供应商缺失", "action": "暂停，补供应商资料", "reason": f"supplier_id {r['supplier_id']} 不在供应商表里"}); continue
    lead = LT[r["supplier_id"]]
    available = on_hand - committed + incoming
    rop = math.ceil(avg * (lead + int(r["safety_days"])))
    if available > rop:
        skipped_ok.append(sku); continue
    if not r["unit_cost"]:
        holds.append({"sku": sku, "type": "单价缺失", "action": "暂停，补单价", "reason": f"可用 {available} ≤ 补货点 {rop}，需要补货，但 unit_cost 为空，没法出采购单"}); continue
    target = math.ceil(avg * (lead + int(r["safety_days"]) + COVER_DAYS))
    need = max(target - available, int(r["moq"]))
    qty = math.ceil(need / int(r["case_pack"])) * int(r["case_pack"])
    line = {"sku": sku, "product": r["product"], "supplier_id": r["supplier_id"], "available": available,
            "reorder_point": rop, "target_stock": target, "order_qty": qty, "unit_cost": float(r["unit_cost"]),
            "line_total": round(qty * float(r["unit_cost"]), 2), "flag": ""}
    if avg7 >= SPIKE_RATIO * avg:
        line["flag"] = f"近 7 天日均 {avg7} 是 28 天日均 {avg} 的 {avg7/avg:.1f} 倍，可能是一次性团购，按 28 天算的数量请人确认"
        holds.append({"sku": sku, "type": "销量异常放量", "action": "照常进单，但在审批里单独标出", "reason": line["flag"]})
    lines.append(line)
pos = []
for s in suppliers:
    ls = [l for l in lines if l["supplier_id"] == s["supplier_id"]]
    if not ls: continue
    tot = round(sum(l["line_total"] for l in ls), 2)
    pos.append({"po_number": f"PO-20261111-{s['supplier_id']}", "supplier_id": s["supplier_id"], "supplier": s["name"],
                "lines": len(ls), "total": tot, "below_min_order_value": tot < s["min_order_value"],
                "min_order_value": s["min_order_value"], "needs_owner_approval": tot > OWNER_LIMIT,
                "approval_route": "Amy 确认 → 林先生批准" if tot > OWNER_LIMIT else "Amy 确认"})
exp = {"skus_in_file": len(rows), "skus_ok_no_reorder": len(skipped_ok), "reorder_lines": lines,
       "purchase_orders": pos, "po_total_all": round(sum(p["total"] for p in pos), 2), "holds_and_flags": holds,
       "rules": {"available": "on_hand - committed + incoming", "reorder_point": "ceil(avg_daily_28d × (lead_time_days + safety_days))",
                 "target_stock": f"ceil(avg_daily_28d × (lead_time_days + safety_days + {COVER_DAYS}))",
                 "order_qty": "max(target - available, moq) 向上取整到 case_pack 的倍数", "owner_limit": OWNER_LIMIT}}
json.dump(exp, open(P / "expected/answer.json", "w"), ensure_ascii=False, indent=1)
print(json.dumps({k: exp[k] for k in ("skus_in_file", "skus_ok_no_reorder", "purchase_orders", "po_total_all")}, ensure_ascii=False, indent=1))
for l in lines: print(l["sku"], l["available"], l["reorder_point"], l["order_qty"], l["line_total"], l["flag"][:20])
for h in holds: print(h)
# per-SKU decision table (rule-derived)
hold_by = {h["sku"]: h for h in holds}; line_by = {l["sku"]: l for l in lines}
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["sku", "product", "decision", "po_number", "order_qty", "line_total", "needs_human", "reason"])
    for r in rows:
        s = r["sku"]
        if s in line_by:
            l = line_by[s]; po = f"PO-20261111-{l['supplier_id']}"
            flag = hold_by.get(s)
            w.writerow([s, r["product"], "进采购单（放量待确认）" if flag else "进采购单", po, l["order_qty"], f"{l['line_total']:.2f}",
                        "是" if flag else "随采购单审批", flag["reason"] if flag else f"可用 {l['available']} ≤ 补货点 {l['reorder_point']}"])
        elif s in hold_by:
            h = hold_by[s]; w.writerow([s, r["product"], h["action"], "", "", "", "是", h["reason"]])
        else:
            w.writerow([s, r["product"], "库存充足，不补", "", "", "", "否", "可用量高于补货点"])
