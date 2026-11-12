#!/usr/bin/env python3
"""p12 teaching data + expected answer (deterministic). Fictional beauty salon, fictional members.
Days since last visit, exclusions, duplicate merge and the contact list are computed here.
DRAFTS below are the reference messages written by hand following the README system prompt
(no model API was called); the script only attaches them to the rows it selected."""
import csv, json, pathlib, random, datetime as dt
R = random.Random(20261111 + 12)
P = pathlib.Path(__file__).resolve().parents[1] / "p12-beauty-member-reactivation-agent"
RUN = dt.date(2026, 11, 11)
INACTIVE_DAYS = 60       # teaching assumption: 60+ days since last visit = 久未到店
COOLDOWN_DAYS = 30       # don't contact again within 30 days
SURN = list("王李张刘陈杨黄赵吴周徐孙马朱胡郭何林罗高")
GIVEN = ["丽", "婷", "敏", "静", "雪", "慧", "颖", "琳", "倩", "欣", "佳怡", "晓燕", "美玲", "嘉欣", "思雨", "雅琪", "文君", "子涵"]
SERVICES = ["面部深层清洁", "补水导入护理", "睫毛嫁接", "凝胶美甲", "肩颈按摩", "眉形设计"]
CHANNELS = ["sms", "sms", "email", "wechat"]

rows = []
used_names = set()
for i in range(32):
    mid = f"M{1001 + i}"
    while True:
        nm = R.choice(SURN) + R.choice(GIVEN)
        if nm not in used_names: used_names.add(nm); break
    days = R.choice([R.randint(5, 55), R.randint(61, 200)])
    rows.append({"member_id": mid, "name": nm, "phone": f"04{R.randint(10,99)} {R.randint(100,999)} {R.randint(100,999)}",
                 "email": f"{mid.lower()}@mail.example", "preferred_channel": R.choice(CHANNELS),
                 "tier": R.choice(["银卡", "银卡", "金卡"]), "prepaid_balance": f"{R.choice([0, 0, 0, 45, 120, 260, 380]):.2f}",
                 "last_visit_date": str(RUN - dt.timedelta(days=days)), "favourite_service": R.choice(SERVICES),
                 "visits_12m": str(R.randint(1, 14)), "marketing_consent": "yes", "unsubscribed_at": "",
                 "do_not_disturb": "no", "last_contacted_at": "", "open_issue": "no", "staff_note": ""})
def m(mid): return next(r for r in rows if r["member_id"] == mid)
def ago(d): return str(RUN - dt.timedelta(days=d))
# ---- planted anomalies ----
m("M1007").update(last_visit_date=ago(95), unsubscribed_at="2026-09-02")                    # 已退订
m("M1013").update(last_visit_date=ago(130), do_not_disturb="yes", staff_note="本人要求不要发任何推广")  # 不打扰
m("M1004").update(last_visit_date=ago(110))
m("M1021").update(name=m("M1004")["name"], phone=m("M1004")["phone"], email="new." + m("M1004")["email"],
                  last_visit_date=ago(18), preferred_channel=m("M1004")["preferred_channel"])   # 重复会员，最近其实来过
m("M1026").update(last_visit_date="2026-12-03")                                             # 日期在未来
m("M1018").update(last_visit_date=ago(75), open_issue="yes", favourite_service="面部深层清洁",
                  staff_note="10 月做完护理后脸部发红，投诉未处理完")                            # 投诉未处理
# ---- rule-only exclusions (not anomalies, but the rules must apply) ----
m("M1010").update(last_visit_date=ago(88), marketing_consent="")
m("M1029").update(last_visit_date=ago(70), last_contacted_at=ago(12))
m("M1015").update(last_visit_date=ago(66), staff_note="孕期，暂停面部酸类项目", favourite_service="补水导入护理")

# ---- compute ----
by_phone = {}
for r in rows: by_phone.setdefault(r["phone"], []).append(r["member_id"])
res = []
for r in rows:
    lv = dt.date.fromisoformat(r["last_visit_date"]) if r["last_visit_date"] else None
    days = (RUN - lv).days if lv else None
    group = by_phone[r["phone"]]
    o = {"member_id": r["member_id"], "name": r["name"], "days_since_last_visit": days}
    if lv is None or lv > RUN:
        o.update(status="数据异常，转店员核对", reason="最后到店日期为空或在未来")
    elif len(group) > 1:
        latest = max(dt.date.fromisoformat(m(x)["last_visit_date"]) for x in group)
        mdays = (RUN - latest).days
        o["merged_days_since_last_visit"] = mdays
        first = group[0]
        if r["member_id"] != first:
            o.update(status="重复档案，已合并", reason=f"与 {first} 电话相同，合并处理")
        elif mdays < INACTIVE_DAYS:
            o.update(status="重复档案合并后不算久未到店", reason=f"另一份档案 {group[1]} 显示 {mdays} 天前来过")
        else:
            o.update(status="待判断", reason="")
    elif days < INACTIVE_DAYS:
        o.update(status="近期到过店，不联系", reason=f"{days} 天前到店")
    else:
        o.update(status="待判断", reason="")
    if o["status"] == "待判断":
        if r["unsubscribed_at"]:
            o.update(status="已退订，不联系", reason=f"{r['unsubscribed_at']} 退订")
        elif r["do_not_disturb"] == "yes":
            o.update(status="不打扰，不联系", reason="档案标了不打扰")
        elif r["marketing_consent"] != "yes":
            o.update(status="无营销同意，不联系", reason="marketing_consent 不是 yes")
        elif r["last_contacted_at"] and (RUN - dt.date.fromisoformat(r["last_contacted_at"])).days < COOLDOWN_DAYS:
            o.update(status="30 天内联系过，本周跳过", reason=f"{r['last_contacted_at']} 刚联系过")
        elif r["open_issue"] == "yes":
            o.update(status="有未处理投诉，转店长", reason="先处理投诉，不发推广")
        else:
            o.update(status="起草邀约，待店长批准", reason=f"{days} 天未到店")
    res.append(o)
send = [o for o in res if o["status"] == "起草邀约，待店长批准"]

# ---- reference drafts (hand-written per README prompt) ----
DRAFTS = json.load(open(pathlib.Path(__file__).with_name("p12_drafts.json"), encoding="utf-8")) \
    if pathlib.Path(__file__).with_name("p12_drafts.json").exists() else {}

# ---- write ----
(P / "data").mkdir(parents=True, exist_ok=True)
with open(P / "data/members.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
(P / "data/offers-2026-11.md").write_text(
    "# 悦颜美学 11 月回店活动（店长已确认，练习数据）\n\n"
    "只能使用下面列出的活动，不得自行加折扣或送项目。\n\n"
    "| 编号 | 活动 | 适用 | 有效期 |\n|---|---|---|---|\n"
    "| OF-1 | 回店护理：任意面部或身体护理加送 15 分钟肩颈放松 | 所有会员 | 2026-11-12 至 2026-12-15 |\n"
    "| OF-2 | 睫毛 / 眉形 / 美甲 回店 9 折 | 所有会员 | 2026-11-12 至 2026-12-15 |\n"
    "| OF-3 | 金卡会员：预约时提一句，可用卡内余额，并优先安排周末时段 | 金卡 | 2026-11-12 至 2026-12-15 |\n\n"
    "发信规则：\n\n"
    "- 开头写明是悦颜美学 Sunnybank 店。\n"
    "- 短信结尾必须带「回复 TD 退订」；邮件结尾必须带退订链接 {{unsubscribe_link}}；微信由店员手动发，也要带一句「不想再收到可以直接告诉我们」。\n"
    "- 不写功效承诺（如「去皱」「美白」「根治」），不提客人的健康、孕期、皮肤问题、投诉等档案备注。\n"
    "- 每条不超过 120 个汉字（不含退订语）。\n", encoding="utf-8")
(P / "expected").mkdir(exist_ok=True)
counts = {}
for o in res: counts[o["status"]] = counts.get(o["status"], 0) + 1
exp = {"run_date": str(RUN), "members_in_file": len(rows), "inactive_threshold_days": INACTIVE_DAYS,
       "cooldown_days": COOLDOWN_DAYS, "counts": counts,
       "to_draft": [{"member_id": o["member_id"], "name": o["name"], "days": o["days_since_last_visit"],
                     "channel": m(o["member_id"])["preferred_channel"], "tier": m(o["member_id"])["tier"],
                     "favourite_service": m(o["member_id"])["favourite_service"]} for o in send],
       "members": res}
json.dump(exp, open(P / "expected/answer.json", "w"), ensure_ascii=False, indent=1)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["member_id", "name", "days_since_last_visit", "status", "channel", "needs_manager", "reason", "draft_message"])
    for o in res:
        r = m(o["member_id"])
        need = "是" if o["status"] in ("起草邀约，待店长批准", "有未处理投诉，转店长") else ("店员核对" if o["status"].startswith("数据异常") else "否")
        w.writerow([o["member_id"], o["name"], "" if o["days_since_last_visit"] is None else o["days_since_last_visit"],
                    o["status"], r["preferred_channel"] if o["status"].startswith("起草") else "", need, o["reason"],
                    DRAFTS.get(o["member_id"], "")])
print(counts)
for s in exp["to_draft"]: print(s)
missing = [s["member_id"] for s in exp["to_draft"] if s["member_id"] not in DRAFTS]
print("missing drafts:", missing)
