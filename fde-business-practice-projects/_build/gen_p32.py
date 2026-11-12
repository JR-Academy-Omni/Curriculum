#!/usr/bin/env python3
"""p32 teaching data + expected answer (deterministic).
Fictional Adelaide care-staffing agency. Screening, slot allocation and scorecard aggregation are rule-computed here;
reasons / email drafts in decisions.csv are hand-written references (the human-written "model answer")."""
import csv, json, pathlib, random, datetime as dt
from decimal import Decimal, ROUND_HALF_UP

R = random.Random(20261132)
P = pathlib.Path(__file__).resolve().parents[1] / "p32-recruitment-screen-interview-feedback"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(parents=True, exist_ok=True)
START_DATE = "2026-12-01"
REQUIRED_WEEKDAYS = 3
WEEKDAYS = ["周一", "周二", "周三", "周四", "周五"]

JOB = {
    "job_id": "JOB-HC-11", "title": "社区陪护员（Home Care Support Worker）", "client": "Torrens Valley Home Care（客户机构，为这个练习设计）",
    "location": "Adelaide 东北区，上门服务", "employment": "casual", "start_date": START_DATE,
    "shifts": "工作日白班 7:00–15:00，每周至少 3 天",
    "must_have": [
        {"id": "M1", "rule": "Cert III in Individual Support（或 Ageing / Disability 方向）已完成"},
        {"id": "M2", "rule": f"急救证书（First Aid，含 CPR）有效期不早于开工日 {START_DATE}"},
        {"id": "M3", "rule": "有驾照，并且有车可以开去客户家"},
        {"id": "M4", "rule": f"工作日白班每周至少能上 {REQUIRED_WEEKDAYS} 天"},
        {"id": "M5", "rule": "有在澳洲工作的权利（表单自填：是 / 否 / 不确定）"},
    ],
    "nice_to_have": ["会说普通话或粤语（部分客户是华人长者）", "有失智症照护经验"],
    "interview": "30 分钟视频或电话面试，面试官 Mandy（顾问）+ Ruth（客户方护理协调员），两人同时在场",
    "note": "背景核查、证件原件核对在录用前由公司按官方流程办理，不在这个流程里。",
}

# submission_id, submitted_at, name, email, phone, suburb, cert3_status, first_aid_expiry, licence, car,
# available_days, work_rights, interview_windows, notes
APPS = [
    ("H01", "2026-11-09 08:12", "王芳", "fang.wang@mail.example", "0400 201 000", "Campbelltown SA", "已完成", "2027-04-30", "是", "是",
     "周一;周二;周三;周四;周五", "是", "11-16 上午;11-17 上午", ""),
    ("H02", "2026-11-09 09:40", "Sarah Collins", "sarah.collins@mail.example", "0400 202 000", "Paradise SA", "已完成", "2027-02-14", "是", "是",
     "周一;周三;周五", "是", "11-16 上午", "Worked 2 years in residential aged care, now want home care."),
    ("H03", "2026-11-09 13:05", "Mohammed Aziz", "m.aziz@mail.example", "0400 203 000", "Modbury SA", "已完成", "2026-12-20", "是", "是",
     "周二;周三;周四;周五", "是", "11-16 上午;11-18 下午", ""),
    ("H04", "2026-11-09 19:30", "李秀英", "xiuying.li@mail.example", "0400 204 000", "Tea Tree Gully SA", "已完成", "2027-08-01", "是", "是",
     "周一;周二;周四", "是", "11-17 下午", "我今年 58 岁了，身体很好，带过自己的婆婆三年。会说普通话和粤语。"),
    ("H05", "2026-11-10 07:50", "Emma Taylor", "emma.taylor@mail.example", "0400 205 000", "Klemzig SA", "已完成", "2027-03-10", "是", "否",
     "周一;周二;周三;周四;周五", "是", "11-18 上午", "I don't have a car at the moment but I can take the bus."),
    ("H06", "2026-11-10 10:15", "陈晨", "chen.chen@mail.example", "0400 206 000", "Greenacres SA", "在读", "2027-06-30", "是", "是",
     "周一;周二;周三", "是", "11-19 上午", "Cert III 在读，预计 2027 年 3 月完成，已经做完 120 小时实习。"),
    ("H07", "2026-11-10 12:00", "Minh Nguyen", "minh.nguyen@mail.example", "0400 207 000", "Windsor Gardens SA", "已完成", "2026-08-30", "是", "是",
     "周二;周三;周四;周五", "是", "11-18 上午", "My first aid expired in August. I've booked a refresher course on 20 Nov."),
    ("H08", "2026-11-10 16:40", "张伟", "wei.zhang.sa@mail.example", "0400 208 000", "Hope Valley SA", "已完成", "2027-01-31", "是", "是",
     "周一;周二;周三;周四", "不确定", "11-17 上午", "签证续签还在等结果。"),
    ("H09", "2026-11-10 20:05", "Jessica Brown", "jess.brown@mail.example", "0400 209 000", "Gilles Plains SA", "已完成", "2027-05-05", "是", "是",
     "周六;周日", "是", "11-19 下午", "Weekdays I'm at uni, weekends only."),
    ("H10", "2026-11-09 21:00", "刘洋", "yang.liu@mail.example", "0400 210 000", "Holden Hill SA", "已完成", "2027-09-15", "是", "是",
     "周一;周二;周三;周四;周五", "是", "11-17 上午", ""),
    ("H11", "2026-11-11 08:30", "Grace Kim", "grace.kim@mail.example", "0400 211 000", "Highbury SA", "已完成", "2027-07-20", "是", "是",
     "周一;周三;周四;周五", "是", "11-21 上午", "Only free Saturday morning for the interview, sorry."),
    ("H12", "2026-11-11 09:10", "Tom Wilson", "tom.wilson@mail.example", "0400 212 000", "Valley View SA", "已完成", "2027-03-31", "是", "是",
     "周一;周二;周三;周四;周五", "是", "11-19 下午;11-20 上午",
     "I wear hearing aids, so a video interview works much better for me than a phone call."),
    ("H13", "2026-11-11 10:45", "刘洋", "yang.liu@mail.example", "0400 210 000", "Holden Hill SA", "已完成", "2027-09-15", "是", "是",
     "周一;周二;周三;周四;周五", "是", "11-20 上午", "上次填的面试时间不行了，改成 20 号上午。"),
    ("H14", "2026-11-11 14:20", "Priya Singh", "priya.singh@mail.example", "0400 214 000", "St Agnes SA", "已完成", "2027-10-10", "是", "是",
     "周一;周二;周五", "是", "11-17 下午;11-18 上午", ""),
]
COLS = ["submission_id", "submitted_at", "full_name", "email", "phone", "suburb", "cert3_status", "first_aid_expiry",
        "driver_licence", "has_car", "available_days", "work_rights", "interview_windows", "notes"]

FREE = {  # both interviewers free, 30-min slots, week of 16 Nov 2026
    "2026-11-16": ["09:30", "10:00", "14:00"], "2026-11-17": ["10:30", "15:00", "15:30"],
    "2026-11-18": ["09:00", "13:30"], "2026-11-19": ["11:00", "14:30"], "2026-11-20": ["09:30", "16:00"],
}
slot_rows = []
d = dt.date(2026, 11, 16)
while d <= dt.date(2026, 11, 20):
    t = dt.datetime.combine(d, dt.time(9, 0))
    while t.time() <= dt.time(16, 30):
        hm = t.strftime("%H:%M")
        slot_rows.append({"date": d.isoformat(), "start": hm, "minutes": 30,
                          "status": "free" if hm in FREE[d.isoformat()] else "busy",
                          "interviewers": "Mandy + Ruth"})
        t += dt.timedelta(minutes=30)
    d += dt.timedelta(days=1)

# Scorecards from last week's interviews (different candidates)
W = {"communication": 30, "care_experience": 30, "safety": 25, "availability_fit": 15}  # weights in %
CARDS = [
    ("C01", "周丽", "Mandy", 4, 5, 4, 4, "推荐", "照护经验很具体，能讲清楚给长者洗澡时怎么防滑。"),
    ("C01", "周丽", "Ruth", 5, 4, 4, 4, "推荐", "沟通很好，排班完全匹配。"),
    ("C02", "Ben Harris", "Mandy", 2, 2, 3, 2, "不推荐", "No hands-on care experience yet; could only do two days."),
    ("C02", "Ben Harris", "Ruth", 2, 3, 2, 2, "不推荐", "Couldn't describe what to do if a client falls."),
    ("C03", "何静", "Mandy", 4, 4, 4, 3, "推荐", "做过两年社区陪护，周五不能上班。"),
    ("C04", "Aisha Rahman", "Mandy", 4, 4, 4, 4, "推荐", "Calm, good answers on medication prompting boundaries."),
    ("C04", "Aisha Rahman", "Ruth", 3, 2, 3, 4, "不推荐", "Care examples were mostly from childcare, not aged care."),
    ("C05", "孟秀兰", "Mandy", 4, 4, 5, 4, "推荐", "照护经验扎实，处理跌倒场景回答得很完整。"),
    ("C05", "孟秀兰", "Ruth", 4, 4, 4, 4, "推荐", "回答很好。就是口音有点重，年纪也偏大，不知道体力跟不跟得上。"),
    ("C06", "Liam O'Brien", "Mandy", 4, 3, 4, 3, "推荐", "Good on safety, a bit light on dementia care."),
    ("C06", "Liam O'Brien", "Ruth", 3, 4, 3, 4, "推荐", "Has done dementia respite shifts; communication fine."),
]
CARD_COLS = ["candidate_id", "candidate_name", "interviewer", "communication", "care_experience", "safety", "availability_fit",
             "recommendation", "comment"]
PROTECTED_WORDS = ["年纪", "岁", "口音", "accent", "怀孕", "孩子", "宗教", "国籍"]  # first-pass keyword check; plain "age" would wrongly hit "aged care"

with open(P / "data/applications.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(COLS); w.writerows(APPS)
with open(P / "data/interviewer-slots.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(slot_rows[0])); w.writeheader(); w.writerows(slot_rows)
with open(P / "data/interview-scorecards.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(CARD_COLS); w.writerows(CARDS)
json.dump(JOB, open(P / "data/job-JOB-HC-11.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# ---------- rule: screening ----------
apps = [dict(zip(COLS, a)) for a in APPS]
latest = {}
for a in sorted(apps, key=lambda x: x["submitted_at"]):
    latest[a["email"].lower()] = a["submission_id"]
WIN = {"上午": ("09:00", "11:30"), "下午": ("13:00", "16:30")}
free_left = {(dd, t) for dd, ts in FREE.items() for t in ts}
screen = []
for a in sorted(apps, key=lambda x: x["submitted_at"]):
    sid = a["submission_id"]
    row = {"submission_id": sid, "name": a["full_name"], "submitted_at": a["submitted_at"], "superseded_by": None,
           "must_have": {}, "rule_status": None, "slot": None}
    if latest[a["email"].lower()] != sid:
        row["superseded_by"] = latest[a["email"].lower()]; row["rule_status"] = "被更新的投递取代"; screen.append(row); continue
    mh = row["must_have"]
    mh["M1"] = {"已完成": "满足", "在读": "不确定"}.get(a["cert3_status"], "不满足")
    mh["M2"] = "满足" if a["first_aid_expiry"] and a["first_aid_expiry"] >= START_DATE else "不满足"
    mh["M3"] = "满足" if a["driver_licence"] == "是" and a["has_car"] == "是" else "不满足"
    days = [x for x in a["available_days"].split(";") if x in WEEKDAYS]
    mh["M4"] = "满足" if len(days) >= REQUIRED_WEEKDAYS else "不满足"
    mh["M5"] = {"是": "满足", "否": "不满足"}.get(a["work_rights"], "不确定")
    failed = [k for k, v in mh.items() if v == "不满足"]
    unsure = [k for k, v in mh.items() if v == "不确定"]
    if unsure:
        row["rule_status"] = "转人工"
    elif failed:
        row["rule_status"] = "建议不通过（待顾问确认）"
    else:
        slot = None
        for win in a["interview_windows"].split(";"):
            md, half = win.split(" ")
            date = f"2026-{md}"
            lo, hi = WIN[half]
            for t in sorted(FREE.get(date, [])):
                if lo <= t <= hi and (date, t) in free_left:
                    slot = (date, t); break
            if slot: break
        if slot:
            free_left.discard(slot); row["slot"] = f"{slot[0]} {slot[1]}"; row["rule_status"] = "约面试（待顾问批准邀约）"
        else:
            row["rule_status"] = "转人工"; row["no_common_slot"] = True
    row["failed"] = failed; row["unsure"] = unsure
    screen.append(row)

# ---------- rule: scorecards ----------
cards = [dict(zip(CARD_COLS, c)) for c in CARDS]
fb = []
for cid in sorted({c["candidate_id"] for c in cards}):
    cs = [c for c in cards if c["candidate_id"] == cid]
    per = [sum(c[k] * wt for k, wt in W.items()) for c in cs]  # hundredths
    avg100 = sum(per) / len(per)
    spread = {k: max(c[k] for c in cs) - min(c[k] for c in cs) for k in W}
    recs = {c["recommendation"] for c in cs}
    prot = [c["interviewer"] for c in cs if any(wd in c["comment"] for wd in PROTECTED_WORDS)]
    if len(cs) < 2: status = "等待（反馈未齐）"
    elif prot: status = "转人工（反馈含无关个人特征）"
    elif len(recs) > 1 or max(spread.values()) >= 2: status = "转人工（意见不一致）"
    elif recs == {"推荐"} and avg100 >= 350: status = "建议录用（待顾问确认）"
    elif recs == {"不推荐"} and avg100 < 300: status = "建议不录用（待顾问确认）"
    else: status = "转人工（分数和推荐对不上）"
    fb.append({"candidate_id": cid, "name": cs[0]["candidate_name"], "cards_received": f"{len(cs)}/2",
               "weighted_avg": float((Decimal(sum(per)) / len(per) / 100).quantize(Decimal("0.01"), ROUND_HALF_UP)), "max_dimension_spread": max(spread.values()),
               "recommendations": sorted(recs), "protected_comment_by": prot, "rule_status": status})

exp = {"run_date": "2026-11-12", "job_id": JOB["job_id"], "applications_in_file": len(apps),
       "screening": screen, "interview_slots_used": sorted(r["slot"] for r in screen if r["slot"]),
       "scorecard_weights_percent": W, "feedback": fb,
       "counts": {"约面试": sum(r["rule_status"].startswith("约面试") for r in screen),
                  "建议不通过": sum(r["rule_status"].startswith("建议不通过") for r in screen),
                  "转人工": sum(r["rule_status"] == "转人工" for r in screen),
                  "被取代": sum(r["superseded_by"] is not None for r in screen)},
       "rules": {"duplicate": "同一邮箱多次投递，用最新一份，旧的标被取代",
                 "slot": "按投递时间先后，在候选人可面试半天里取第一个双方都空的 30 分钟；上午 9:00–11:30 开始，下午 13:00–16:30 开始；被前面的人占了就往后找",
                 "weighted_avg": "沟通 30% + 照护经验 30% + 安全意识 25% + 排班匹配 15%，两位面试官取平均",
                 "feedback": "缺反馈→等待；含无关个人特征→转人工；推荐不一致或任一维度差 ≥2→转人工；都推荐且 ≥3.50→建议录用；都不推荐且 <3.00→建议不录用；其他→转人工"}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# ---------- hand-written reference decisions (model answer, written by the course author) ----------
REF = {
    "H01": ("约面试", "否", "五条必备条件都满足", "王芳你好，我是安康护理人力的顾问 Mandy。谢谢你投递社区陪护员的岗位。想约你 11 月 16 日（周一）上午 9:30 做 30 分钟视频面试，面试官是我和客户方的护理协调员 Ruth。这个时间可以的话回复确认就好，不行也告诉我，我们再找时间。"),
    "H02": ("约面试", "否", "五条必备条件都满足；11-16 上午 9:30 已给 H01，排到 10:00", "Hi Sarah, this is Mandy from Ankang Care Staffing. Thanks for applying for the Home Care Support Worker role. Could you do a 30-minute video interview on Monday 16 Nov at 10:00am with me and Ruth, the client's care coordinator? Just reply to confirm, or let me know if you need another time."),
    "H03": ("约面试", "否", "五条必备条件都满足；急救证书 2026-12-20 到期，晚于开工日但很快到期，面试时提醒续证", "Hi Mohammed, this is Mandy from Ankang Care Staffing. Thanks for applying. Monday morning is fully booked, so could we do a 30-minute video interview on Wednesday 18 Nov at 1:30pm with me and Ruth? Please reply to confirm."),
    "H04": ("约面试", "否", "五条必备条件都满足。备注里的年龄不参与判断，也不写进任何记录；会说普通话和粤语是加分项", "李秀英你好，我是安康护理人力的顾问 Mandy，谢谢你投递社区陪护员的岗位。想约你 11 月 17 日（周二）下午 3:00 做 30 分钟视频面试，我和客户方的护理协调员 Ruth 一起。时间可以的话回复确认就好。"),
    "H05": ("建议不通过（待 Mandy 确认）", "是（确认后才发拒信）", "M3 不满足：岗位是上门服务，需要自己开车去客户家，候选人说暂时没有车", "Hi Emma, thanks for your interest in the Home Care Support Worker role. This role involves driving between clients' homes, so a car is needed from day one, and we can't move your application forward for this one. If your situation changes, or a facility-based role comes up, we'd be happy to hear from you again. — Mandy"),
    "H06": ("转人工", "是", "M1 不确定：Cert III 在读，预计 2027 年 3 月完成，开工日前拿不到证。客户是否接受在读学员，需要 Mandy 问客户", "（不发给候选人。给 Mandy 的备注：陈晨 Cert III 在读、已完成 120 小时实习，其他条件都满足。请问客户是否接受在读学员，或者先放进人才库。）"),
    "H07": ("转人工", "是", "规则上 M2 不满足（急救证书 2026-08-30 已过期），但备注写了 11 月 20 日复训，开工日前能续上。不要直接建议不通过，交 Mandy 决定是否先约面试、开工前查新证书", "（不发给候选人。给 Mandy 的备注：Minh 急救证书已过期，但说 11-20 有复训课，在 12-01 开工前。其他条件都满足，可面试时间 11-18 上午，目前 11-18 09:00 还空着。）"),
    "H08": ("转人工", "是", "M5 不确定：候选人自填「不确定」，备注说签证续签在等结果。流程不判断签证，交 Mandy 按官方信息和本人确认", "（不发给候选人。给 Mandy 的备注：张伟工作权利填的是「不确定」，其他条件都满足。请 Mandy 跟本人确认，不要在邮件里讨论签证政策。）"),
    "H09": ("建议不通过（待 Mandy 确认）", "是（确认后才发拒信）", "M4 不满足：岗位是工作日白班每周至少 3 天，候选人只能周末", "Hi Jessica, thanks for applying for the Home Care Support Worker role. This one is weekday day shifts, at least three days a week, so it doesn't fit your weekend-only availability. We sometimes have weekend roles with other clients — I'll keep your details and let you know if one comes up. — Mandy"),
    "H10": ("被 H13 取代", "否", "同一邮箱 11-11 又投了一次并改了面试时间，用 H13，这份不处理", "（不发邮件）"),
    "H11": ("转人工", "是", "五条必备条件都满足，但只写了 11-21（周六）上午，面试官周六没有空档", "（不发给候选人。给 Mandy 的备注：Grace 条件都满足，只能周六上午面试。请 Mandy 问她工作日能不能挤出 30 分钟，或者安排周六单独面试。）"),
    "H12": ("约面试", "否（面试安排要求转给面试官）", "五条必备条件都满足。候选人提出用视频面试，按他的要求安排；健康信息不写进筛选理由，只写「候选人要求视频面试」", "Hi Tom, this is Mandy from Ankang Care Staffing. Thanks for applying. Could you do a 30-minute video interview on Thursday 19 Nov at 2:30pm with me and Ruth? It will be on video as you asked, and if anything else would make the interview easier, just let me know."),
    "H13": ("约面试", "否", "五条必备条件都满足；用的是最新一份投递，面试时间按新填的 11-20 上午", "刘洋你好，我是安康护理人力的顾问 Mandy。看到你更新了面试时间，想约你 11 月 20 日（周五）上午 9:30 做 30 分钟视频面试，我和客户方的护理协调员 Ruth 一起。时间可以的话回复确认就好。"),
    "H14": ("约面试", "否", "五条必备条件都满足；11-17 下午 3:00 已给 H04，排到 3:30", "Hi Priya, this is Mandy from Ankang Care Staffing. Thanks for applying. Could you do a 30-minute video interview on Tuesday 17 Nov at 3:30pm with me and Ruth? Please reply to confirm, or tell me if another time suits better."),
}
by = {r["submission_id"]: r for r in screen}
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["submission_id", "name", "rule_status", "slot", "final_decision", "needs_human", "reason", "draft_for_review"])
    for a in apps:
        s = a["submission_id"]; r = by[s]; ref = REF[s]
        w.writerow([s, a["full_name"], r["rule_status"], r["slot"] or "", ref[0], ref[1], ref[2], ref[3]])
print(json.dumps({"counts": exp["counts"], "slots": exp["interview_slots_used"]}, ensure_ascii=False))
for r in screen: print(r["submission_id"], r["rule_status"], r["slot"], r.get("failed"), r.get("unsure"))
for x in fb: print(x)

SUMMARY = """# P32 参考输出：面试反馈汇总（发给 Mandy 的 Slack 审批消息）

按 README 第 3 节的汇总提示词写出的参考答案。平均分、份数、结论必须跟 `answer.json` 一致；措辞可以不同。
发给候选人的任何结果，都要 Mandy 在审批里逐个点「确认」后才会发出。

## 本周汇总（6 位）

- **C01 周丽 · 4.30 · 2/2 · 建议录用**：两位都推荐，各维度最多差 1 分。洗澡防滑、排班匹配都讲得具体。录用通知草稿已备好，不含薪资和合同条款，等你确认。
- **C06 Liam O'Brien · 3.50 · 2/2 · 建议录用**：两位都推荐，刚好到 3.50 的线。Mandy 觉得失智症照护偏弱，Ruth 说他做过失智症喘息照护——建议你看一眼再决定发不发。
- **C02 Ben Harris · 2.28 · 2/2 · 建议不录用**：两位都不推荐，主要是没有上手照护经验、只能上两天、讲不清客户摔倒怎么处理。拒信草稿只写这些跟岗位有关的原因，等你确认后才发。
- **C04 Aisha Rahman · 3.43 · 2/2 · 转人工**：Mandy 推荐、Ruth 不推荐，「照护经验」一项差 2 分（4 对 2）。Ruth 的理由是她的例子多来自托儿所。建议你跟两位面试官对一下再定。
- **C05 孟秀兰 · 4.13 · 2/2 · 转人工**：两位都推荐、分数也高，但 Ruth 的评语里有一句提到口音和年纪，这句已从汇总里去掉，不参与判断。需要你跟 Ruth 确认她的推荐是基于面试表现，再决定下一步。
- **C03 何静 · 1/2 · 等待**：只收到 Mandy 的反馈，Ruth 的还没交。已经提醒 Ruth，候选人这边暂时不发任何结果。

## 给候选人的草稿（确认后才发）

**C01 录用通知草稿**

> 周丽你好，我是安康护理人力的 Mandy。谢谢你上周来面试。我们和 Torrens Valley Home Care 都很希望你加入社区陪护员的团队。接下来我会把正式的聘用文件和入职资料发给你，里面会写清楚排班和工作条件，你看完有任何问题随时问我。

**C02 拒信草稿**

> Hi Ben, thanks for taking the time to interview for the Home Care Support Worker role. For this position the client needs someone with hands-on personal care experience who can work at least three weekdays, so we won't be moving forward this time. If you build more care experience or your availability changes, we'd be glad to hear from you again. — Mandy

## 给 Ruth 的提醒（只发面试官）

> Hi Ruth, 何静（C03）11 月 10 日面试的评分表还差你这份，方便的话今天下班前填一下？谢谢！
"""
(P / "expected/feedback-summary.md").write_text(SUMMARY, encoding="utf-8")
