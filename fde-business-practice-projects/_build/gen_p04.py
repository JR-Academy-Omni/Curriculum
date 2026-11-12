#!/usr/bin/env python3
"""p04 teaching data + expected answer (deterministic). Fictional Brisbane property manager, tenants, tradies.

LABELS below is the expected judgement output of the classification step (category / urgency / repair or not),
written by the assistant session following the README prompt. Dispatch, cost checks, invoice checks and
follow-up dates are computed from it by code.
"""
import csv, json, pathlib, random, datetime as dt
R = random.Random(20261104)
P = pathlib.Path(__file__).resolve().parents[1] / "p04-property-maintenance-dispatch"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)

properties = [  # property_id, address, suburb, area, landlord, landlord_email, approval_limit
    ("P01", "12 Mains Rd", "Sunnybank", "南区", "黄先生", "landlord.huang@mail.example", 500),
    ("P02", "5/48 Beenleigh Rd", "Sunnybank", "南区", "Mrs Patel", "patel.home@mail.example", 300),
    ("P03", "27 Gaskell St", "Eight Mile Plains", "南区", "吴太太", "wu.family@mail.example", 800),
    ("P04", "3 Formby St", "Calamvale", "南区", "Mr Nguyen", "nguyen.invest@mail.example", 500),
    ("P05", "16/120 Station Rd", "Indooroopilly", "西区", "陈先生", "chen.prop@mail.example", 400),
    ("P06", "9 Sylvan Rd", "Toowong", "西区", "Ms O'Brien", "obrien.k@mail.example", 400),
    ("P07", "44 Creek Rd", "Carindale", "东区", "李先生", "li.landlord@mail.example", 500),
    ("P08", "2/7 Warrigal Rd", "Runcorn", "南区", "赵女士", "zhao.rent@mail.example", 350),
]
tradies = [  # tradie_id, trade, business, phone, areas, callout_fee, preferred
    ("T01", "水管", "南城水管 Southside Plumbing", "0400 100 201", "南区", 90, "yes"),
    ("T02", "水管", "River City Plumbing", "0400 100 202", "南区;西区;东区", 110, "no"),
    ("T03", "电工", "明亮电气 Bright Spark Electrical", "0400 100 203", "南区;东区", 95, "yes"),
    ("T04", "电工", "Westside Electrical", "0400 100 204", "西区", 100, "yes"),
    ("T05", "燃气", "Safe Gas Fitting", "0400 100 205", "南区;西区;东区", 120, "yes"),
    ("T06", "门锁", "BrisLock 锁匠", "0400 100 206", "南区;西区;东区", 85, "yes"),
    ("T07", "电器", "Appliance Fix QLD", "0400 100 207", "南区;西区;东区", 95, "yes"),
    ("T08", "屋顶", "高顶屋面 TopRoof", "0400 100 208", "南区;东区", 150, "yes"),
    ("T09", "虫害", "Pest Away Brisbane", "0400 100 209", "南区;西区;东区", 0, "yes"),
    ("T10", "杂项", "Handy Mike 杂工", "0400 100 210", "南区;西区", 70, "yes"),
    ("T11", "空调", "CoolAir 空调", "0400 100 211", "南区;西区;东区", 110, "yes"),
]
COST = {"水管": 250, "电工": 220, "燃气": 300, "门锁": 180, "电器": 260, "屋顶": 650, "虫害": 280, "杂项": 150, "空调": 420}
AFTER_HOURS = 120  # 紧急单加收的加急费（教学假设）

# request_id, minutes after 2026-11-10 07:00, property, tenant, email, channel, text
REQ = [
    ("R01", 15, "P01", "王磊", "wanglei.t@mail.example", "表单", "厨房水龙头一直在滴水，关紧了也滴，晚上能听到声音。"),
    ("R02", 42, "P03", "Sophie Tran", "sophie.tran@mail.example", "邮件", "No hot water at all since last night. The hot water system is making a clicking sound but nothing comes out warm. We have a 2-year-old at home."),
    ("R03", 70, "P05", "刘欣", "liuxin.t@mail.example", "表单", "主卧的灯不亮了，换了新灯泡还是不亮，开关按下去有点松。"),
    ("R04", 95, "P04", "Mr Kumar", "kumar.a@mail.example", "邮件", "Strong gas smell near the stove and outside near the meter since this morning. Is it safe to cook?"),
    ("R05", 130, "P02", "陈晓", "chenxiao.t@mail.example", "表单", "前门的锁坏了，钥匙转不动，现在门只能从里面反锁，出门锁不上。"),
    ("R06", 180, "P06", "Emma Wilson", "emma.w@mail.example", "表单", "Dishwasher leaks water onto the kitchen floor every time we run it. We've stopped using it."),
    ("R07", 210, "P07", "张伟", "zhangwei.t@mail.example", "邮件", "昨晚暴雨，客厅天花板有一块鼓起来了，还在往下滴水，我们拿桶接着。"),
    ("R08", 1460, "P01", "王磊", "wanglei.t@mail.example", "表单", "厨房水龙头还在滴水，昨天报过一次，想问什么时候有人来。"),
    ("R09", 300, "P08", "林小雨", "linxiaoyu.t@mail.example", "表单", "想在客厅墙上装一个电视挂架，可以安排人来装吗？费用我们可以自己出。"),
    ("R10", 340, "P09", "Jason Lee", "jason.lee@mail.example", "邮件", "Bathroom exhaust fan stopped working at 81 Kessels Rd, Macgregor. Can you send someone?"),
    ("R11", 400, "P03", "Sophie Tran", "sophie.tran@mail.example", "邮件", "Also seeing a lot of cockroaches in the kitchen at night, even though we keep it clean."),
    ("R12", 455, "P08", "林小雨", "linxiaoyu.t@mail.example", "表单", "家里只有一个厕所，现在堵了，冲不下去，水快漫出来了。"),
    ("R13", 520, "P05", "刘欣", "liuxin.t@mail.example", "表单", "后院围栏有两块木板松了，风大的时候会晃，不算急。"),
    ("R14", 600, "P06", "Emma Wilson", "emma.w@mail.example", "邮件", "The aircon in the living room blows air but it isn't cold anymore. It's going to be 34 degrees this week."),
]
# assistant judgement: request_id -> (is_repair, category, urgency, summary, handling)
#   urgency: 紧急 (安全 / 昆州紧急维修清单内，教学假设) / 尽快 (24–48 小时) / 常规 (7 天内)
LABELS = {
    "R01": ("是", "水管", "常规", "厨房水龙头持续滴水", "派单"),
    "R02": ("是", "水管", "紧急", "热水系统完全不出热水，家有幼儿", "派单"),
    "R03": ("是", "电工", "尽快", "主卧灯不亮，开关松动，疑似开关故障", "派单"),
    "R04": ("是", "燃气", "紧急", "炉灶和燃气表附近有浓重燃气味", "安全升级：立即电话联系租客 + 派燃气工"),
    "R05": ("是", "门锁", "紧急", "前门锁坏无法从外面上锁", "派单"),
    "R06": ("是", "电器", "常规", "洗碗机运行时漏水，已停用", "派单"),
    "R07": ("是", "屋顶", "紧急", "暴雨后客厅天花板鼓包滴水", "派单"),
    "R08": ("是", "水管", "常规", "R01 的重复报修（同一租客同一问题）", "合并到 R01，回复租客进度"),
    "R09": ("否", "杂项", "常规", "租客想装电视挂架，属于改动房屋，不是维修", "不派单，转房东征求同意"),
    "R10": ("是", "电工", "常规", "排气扇坏，但地址不在我们管理的物业里", "不派单，回复租客联系实际管理方"),
    "R11": ("是", "虫害", "常规", "厨房蟑螂多", "派单（费用由谁承担看租约，待物业经理确认）"),
    "R12": ("是", "水管", "紧急", "唯一的厕所堵塞，快溢出", "派单"),
    "R13": ("是", "杂项", "常规", "后院围栏两块木板松动", "派单"),
    "R14": ("是", "空调", "尽快", "客厅空调不制冷，本周高温", "派单"),
}
BASE = dt.datetime(2026, 11, 10, 7, 0)
reqs = []
for rid, mins, pid, name, email, ch, text in REQ:
    reqs.append({"request_id": rid, "received_at": (BASE + dt.timedelta(minutes=mins)).strftime("%Y-%m-%d %H:%M"),
                 "property_id": pid, "tenant_name": name, "tenant_email": email, "channel": ch, "description": text,
                 "photos": R.choice([0, 1, 1, 2, 3])})
json.dump(reqs, open(P / "data/requests-2026-11-10.json", "w"), ensure_ascii=False, indent=1)
with open(P / "data/properties.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["property_id", "address", "suburb", "area", "landlord", "landlord_email", "approval_limit"]); w.writerows(properties)
with open(P / "data/tradies.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["tradie_id", "trade", "business", "phone", "areas", "callout_fee", "preferred"]); w.writerows(tradies)
with open(P / "data/cost-guide.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["category", "typical_estimate", "note"])
    for k, v in COST.items(): w.writerow([k, v, "常见小修的预估上限（教学假设），紧急单另加 120 加急费"])

# ---- dispatch (rule-computed from labels) ----
PROP = {p[0]: p for p in properties}
def pick(trade, area):
    c = [t for t in tradies if t[1] == trade and area in t[4].split(";")]
    c.sort(key=lambda t: (t[6] != "yes", t[5]))
    return c[0] if c else None
jobs, others = [], []
for r in reqs:
    rid = r["request_id"]; is_rep, cat, urg, summ, handling = LABELS[rid]
    if r["property_id"] not in PROP:
        others.append({"request_id": rid, "type": "非本公司管理", "action": handling}); continue
    if rid == "R08":
        others.append({"request_id": rid, "type": "重复报修", "action": handling}); continue
    if is_rep == "否":
        others.append({"request_id": rid, "type": "非维修请求", "action": handling}); continue
    p = PROP[r["property_id"]]; t = pick(cat, p[3])
    est = COST[cat] + (AFTER_HOURS if urg == "紧急" else 0)
    jobs.append({"job_id": f"J-{rid}", "request_id": rid, "property_id": p[0], "address": f"{p[1]}, {p[2]}", "category": cat,
                 "urgency": urg, "tradie_id": t[0], "tradie": t[2], "estimate": est, "landlord_limit": p[6],
                 "needs_landlord_approval": est > p[6], "safety_escalation": rid == "R04",
                 "approval_route": ("物业经理电话确认后立即派单，事后通知房东" if urg == "紧急" else
                                    ("物业经理确认 → 房东批准" if est > p[6] else "物业经理确认"))})

# ---- completions (one week later) ----
done = []
INV = {"J-R01": 1.0, "J-R02": 1.08, "J-R03": 0.9, "J-R04": 1.0, "J-R05": 1.05, "J-R06": 1.12, "J-R07": 2.15, "J-R12": 0.95, "J-R13": 1.0}
for j in jobs:
    if j["job_id"] not in INV: continue
    d = dt.date(2026, 11, 10) + dt.timedelta(days=1 if j["urgency"] == "紧急" else R.randint(2, 6))
    done.append({"job_id": j["job_id"], "tradie_id": j["tradie_id"], "completed_date": d.isoformat(),
                 "invoice_amount": f"{round(j['estimate'] * INV[j['job_id']], 2):.2f}", "tradie_note":
                 {"J-R07": "更换破损瓦片 12 片，天花板石膏板受潮需另行更换（未做）", "J-R02": "更换点火器"}.get(j["job_id"], "已修好")})
with open(P / "data/completions-2026-11-17.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(done[0])); w.writeheader(); w.writerows(done)
jb = {j["job_id"]: j for j in jobs}
checks = []
for d in done:
    est = jb[d["job_id"]]["estimate"]; inv = float(d["invoice_amount"]); over = inv / est - 1
    ok = over <= 0.20
    fu = (dt.date.fromisoformat(d["completed_date"]) + dt.timedelta(days=2)).isoformat()
    checks.append({"job_id": d["job_id"], "estimate": est, "invoice": inv, "over_pct": round(over * 100, 1),
                   "payment": "可以付款（经物业经理确认）" if ok else "暂停付款，超出预估 20% 以上，物业经理核对",
                   "follow_up_date": fu})
exp = {"requests_in_file": len(reqs), "jobs_dispatched": len(jobs), "not_dispatched": others, "jobs": jobs,
       "landlord_approval_needed": [j["job_id"] for j in jobs if j["needs_landlord_approval"] and j["urgency"] != "紧急"],
       "emergency_jobs": [j["job_id"] for j in jobs if j["urgency"] == "紧急"],
       "estimate_total": sum(j["estimate"] for j in jobs), "completions": checks,
       "invoice_holds": [c["job_id"] for c in checks if c["over_pct"] > 20],
       "rules": {"tradie": "工种 + 区域匹配，preferred=yes 优先，再按 callout_fee 低者", "estimate": "cost-guide 预估，紧急单 +120",
                 "landlord": "预估 > 房东授权额度 → 非紧急单要房东批准", "invoice": "发票 > 预估 × 1.2 → 暂停付款", "follow_up": "完工后第 2 天回访"}}
json.dump(exp, open(P / "expected/answer.json", "w"), ensure_ascii=False, indent=1)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["request_id", "is_repair", "category", "urgency", "summary", "handling", "tradie", "estimate", "approval_route", "needs_human_reason"])
    for r in reqs:
        rid = r["request_id"]; is_rep, cat, urg, summ, handling = LABELS[rid]; j = jb.get(f"J-{rid}")
        why = ("燃气泄漏涉及人身安全，物业经理必须马上打电话" if rid == "R04" else
               "紧急维修，物业经理电话确认后派单" if j and urg == "紧急" else
               f"预估 {j['estimate']} 超过房东授权 {j['landlord_limit']}，要房东批准" if j and j["needs_landlord_approval"] else
               "费用归属看租约" if rid == "R11" else
               "派单前物业经理确认" if j else
               {"R08": "合并前确认是同一问题", "R09": "要房东同意才能改动房屋", "R10": "确认不是我们管理的房子再回复"}[rid])
        w.writerow([rid, is_rep, cat, urg, summ, handling, j["tradie"] if j else "", j["estimate"] if j else "", j["approval_route"] if j else "", why])
print(json.dumps({k: exp[k] for k in ("requests_in_file", "jobs_dispatched", "landlord_approval_needed", "emergency_jobs", "estimate_total", "invoice_holds")}, ensure_ascii=False))
for j in jobs: print(j["job_id"], j["category"], j["urgency"], j["tradie_id"], j["estimate"], j["landlord_limit"], j["approval_route"])
for c in checks: print(c)
