#!/usr/bin/env python3
"""p07 teaching data + expected answer (deterministic).
Fictional Melbourne tutoring centre. Allocation and term timetable are rule-computed here."""
import csv, json, pathlib, datetime as dt

P = pathlib.Path(__file__).resolve().parents[1] / "p07-tutoring-trial-to-class"
DAYS = {"Mon": 0, "Tue": 1, "Wed": 2, "Thu": 3, "Fri": 4, "Sat": 5, "Sun": 6}
DAY_ZH = {"Mon": "周一", "Tue": "周二", "Wed": "周三", "Thu": "周四", "Fri": "周五", "Sat": "周六", "Sun": "周日"}

CLASSES = [  # class_id, subject, year_from, year_to, level, day, time, room, teacher, capacity, enrolled_now
    ("C01", "Maths", 3, 4, "B", "Sat", "09:30", "Room 1", "王老师", 8, 5),
    ("C02", "Maths", 5, 6, "A", "Sat", "11:00", "Room 1", "王老师", 8, 7),
    ("C03", "Maths", 5, 6, "B", "Wed", "16:30", "Room 2", "刘老师", 8, 4),
    ("C04", "Maths", 7, 8, "A", "Thu", "17:00", "Room 2", "刘老师", 8, 6),
    ("C05", "English", 3, 4, "B", "Sat", "13:00", "Room 3", "Ms Taylor", 8, 3),
    ("C06", "English", 5, 6, "A", "Tue", "16:30", "Room 3", "Ms Taylor", 8, 8),
    ("C07", "English", 5, 6, "B", "Sat", "14:30", "Room 3", "Ms Taylor", 8, 5),
    ("C08", "Selective", 5, 6, "A", "Sun", "10:00", "Room 1", "陈老师", 10, 9),
    ("C09", "Maths", 9, 10, "A", "Mon", "17:00", "Room 2", "周老师", 6, 3),
    ("C10", "Maths", 5, 6, "A", "Mon", "16:30", "Room 1", "王老师", 8, 6),
]
CK = ["class_id", "subject", "year_from", "year_to", "level", "day", "time", "room", "teacher", "capacity", "enrolled_now"]

SIGNUPS = [  # id, submitted_at, student, year, subject, trial_date, trial_level, preferred_days, parent, email, note
    ("S01", "2026-11-02 19:10", "Ella Wang", 4, "Maths", "2026-11-07", "B", "Sat", "王芳", "wang.fang@example.com", ""),
    ("S02", "2026-11-02 20:31", "Lucas Zhang", 6, "Maths", "2026-11-07", "A", "Sat;Mon", "张伟", "zhang.wei.mel@example.com", ""),
    ("S03", "2026-11-03 08:45", "Mia Li", 6, "Maths", "2026-11-07", "A", "Sat", "李娜", "lina.boxhill@example.com", "周一到周五都有其他课外班"),
    ("S04", "2026-11-03 12:02", "Noah Chen", 5, "English", "2026-11-04", "A", "Tue", "陈静", "chenjing.au@example.com", ""),
    ("S05", "2026-11-03 21:15", "Chloe Liu", 3, "English", "2026-11-08", "B", "Sat", "刘洋", "liu.yang.family@example.com", ""),
    ("S06", "2026-11-04 09:20", "Ethan Wu", 8, "Maths", "2026-11-06", "A", "Thu", "吴敏", "wumin.mel@example.com", ""),
    ("S07", "2026-11-04 22:40", "Ella Wang", 4, "Maths", "2026-11-07", "B", "Sat", "王芳", "Wang.Fang@example.com", "上次好像没提交成功，再填一次"),
    ("S08", "2026-11-05 10:05", "Oliver Huang", 11, "Maths", "2026-11-06", "A", "Mon;Thu", "黄磊", "huanglei.family@example.com", "想准备 VCE Methods"),
    ("S09", "2026-11-05 18:30", "Grace Zhou", 6, "Selective", "2026-11-08", "A", "Sun", "周婷", "zhouting.mel@example.com", ""),
    ("S10", "2026-11-05 19:55", "Henry Xu", 5, "Selective", "2026-11-08", "A", "Sun", "徐强", "xuqiang.au@example.com", ""),
    ("S11", "2026-11-06 08:12", "Ava Lin", 5, "Maths", "2026-11-04", "B", "Wed;Sat", "林晓", "linxiao.boxhill@example.com", ""),
    ("S12", "2026-11-06 12:40", "Leo Sun", 9, "Maths", "2026-11-03", "A", "Mon", "孙丽", "sunli.mel@example.com", ""),
    ("S13", "2026-11-06 20:18", "Zoe Ma", 4, "Maths", "2026-11-07", "B", "Sat", "马超", "machao.family@example.com", ""),
    ("S14", "2026-11-07 09:33", "Jack Ho", 6, "English", "2026-11-08", "B", "Sat", "何静", "hejing.au@example.com", ""),
    ("S15", "2026-11-07 15:47", "Ruby Tan", 7, "Maths", "2026-11-06", "B", "Thu", "谭欣", "tanxin.mel@example.com", ""),
    ("S16", "2026-11-08 11:02", "Isla Cao", 5, "Maths", "2026-11-07", "A", "Mon;Sat", "曹阳", "caoyang.boxhill@example.com", ""),
    ("S17", "2026-11-08 16:25", "Max Deng", 3, "Maths", "2026-11-07", "B", "Sat", "邓辉", "denghui.family@example.com", ""),
    ("S18", "2026-11-09 10:10", "Sophie Guo", 4, "Maths", "2026-11-07", "B", "Sat", "郭蕾", "guolei.mel@example.com", ""),
    ("S19", "2026-11-09 19:44", "Aaron Ye", 10, "Maths", "2026-11-03", "A", "Mon", "叶涛", "", "家长只留了微信号 yetao_mel"),
    ("S20", "2026-11-10 08:58", "Lily Fang", 6, "English", "2026-11-08", "B", "Sat;Tue", "方圆", "fangyuan.au@example.com", ""),
]
SK = ["signup_id", "submitted_at", "student_name", "year_level", "subject", "trial_date", "trial_level",
      "preferred_days", "parent_name", "parent_email", "parent_note"]

# School's own Term 1 2027 + closure days (teaching assumption; public holiday dates以 Victoria 官方公布为准)
TERM = {"term": "2027 Term 1", "first_week_monday": "2027-02-01", "lessons_per_class": 10,
        "closures": [{"date": "2027-03-08", "reason": "Labour Day（VIC 公众假期）"},
                     {"date": "2027-03-26", "reason": "Good Friday"},
                     {"date": "2027-03-27", "reason": "Easter Saturday"},
                     {"date": "2027-03-28", "reason": "Easter Sunday"},
                     {"date": "2027-03-29", "reason": "Easter Monday"}]}

# Parent replies after the confirmation email; gt_intent is NOT written to the data file
REPLIES = [
    ("R01", "S01", "2026-11-12 08:20", "wang.fang@example.com", "确认，谢谢老师！周六见。", "confirm"),
    ("R02", "S02", "2026-11-12 09:05", "zhang.wei.mel@example.com", "可以的，周六 11 点没问题。第一节课需要带什么吗？", "confirm"),
    ("R03", "S05", "2026-11-12 10:40", "liu.yang.family@example.com", "周六下午 Chloe 有游泳课，能不能换到别的时间？平日放学后也行。", "change_request"),
    ("R04", "S06", "2026-11-12 13:15", "wumin.mel@example.com", "谢谢安排。孩子说试听完感觉压力有点大，我们先不报了，不好意思。", "decline"),
    ("R05", "S09", "2026-11-12 20:02", "zhouting.mel@example.com", "确认报精英班。另外想问一下，如果中途不想上了，剩下的学费可以退吗？", "confirm"),
    ("R06", "S11", "2026-11-13 07:48", "ava.mum.2015@example.com", "OK 👍", "unverified"),
    ("R07", "S16", "2026-11-13 12:30", "caoyang.boxhill@example.com", "Confirmed, thanks. Isla will be there on Monday.", "confirm"),
    ("R08", "S12", "2026-11-13 18:10", "sunli.mel@example.com", "确认。", "confirm"),
]

(P / "data").mkdir(parents=True, exist_ok=True)
with open(P / "data/classes.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(CK); w.writerows(CLASSES)
with open(P / "data/trial-signups.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(SK); w.writerows(SIGNUPS)
json.dump(TERM, open(P / "data/term-calendar.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "data/parent-replies.txt", "w", encoding="utf-8") as f:
    f.write("# 启明教育 教务邮箱：家长对分班确认邮件的回复（练习数据：学校、学生、家长都是为这个练习设计的）\n\n")
    for rid, sid, t, frm, body, _ in REPLIES:
        f.write(f"========== {rid} ==========\nFrom: {frm}\nDate: {t}\nSubject: Re: 启明教育 2027 Term 1 分班确认\n\n{body}\n\n")

# ---------- allocation (rule-computed) ----------
cls = {c[0]: dict(zip(CK, c)) for c in CLASSES}
seats = {cid: c["capacity"] - c["enrolled_now"] for cid, c in cls.items()}
seen, alloc = {}, []
for s in sorted(SIGNUPS, key=lambda x: x[1]):
    d = dict(zip(SK, s))
    key = (d["student_name"].lower(), d["parent_email"].lower())
    if key in seen:
        alloc.append({**d, "result": "duplicate", "class_id": "", "detail": f"与 {seen[key]} 是同一学生重复报名，合并"}); continue
    seen[key] = d["signup_id"]
    match = [c for c in cls.values() if c["subject"] == d["subject"] and c["year_from"] <= d["year_level"] <= c["year_to"]
             and c["level"] == d["trial_level"]]
    prefs = d["preferred_days"].split(";")
    if not match:
        alloc.append({**d, "result": "no_class", "class_id": "", "detail": "没有对应年级 / 科目 / 水平的班，转教务人工处理"}); continue
    chosen = None
    for day in prefs:
        for c in sorted(match, key=lambda c: c["time"]):
            if c["day"] == day and seats[c["class_id"]] > 0:
                chosen = c; break
        if chosen: break
    if chosen:
        seats[chosen["class_id"]] -= 1
        res = "allocated" if d["parent_email"] else "allocated_need_contact"
        det = f"{chosen['class_id']} {DAY_ZH[chosen['day']]} {chosen['time']} {chosen['teacher']}"
        if not d["parent_email"]: det += "；家长没留邮箱，确认邮件发不出去，需教务电话/微信联系"
        alloc.append({**d, "result": res, "class_id": chosen["class_id"], "detail": det})
    else:
        alts = [f"{c['class_id']}（{DAY_ZH[c['day']]} {c['time']}，剩 {seats[c['class_id']]} 位）" for c in match
                if c["day"] not in prefs and seats[c["class_id"]] > 0]
        alloc.append({**d, "result": "waitlist", "class_id": "",
                      "detail": "意向时间的班已满，进候补" + ("；可以问家长能否改到 " + "、".join(alts) if alts else "；没有其他时间的同类班")})

# ---------- replies -> timetable ----------
by_sid = {a["signup_id"]: a for a in alloc}
first = dt.date.fromisoformat(TERM["first_week_monday"])
closed = {dt.date.fromisoformat(c["date"]) for c in TERM["closures"]}
timetable, released = [], []
for rid, sid, t, frm, body, gt in REPLIES:
    a = by_sid[sid]
    if gt == "decline":
        seats[a["class_id"]] += 1; released.append(a["class_id"])
    if gt != "confirm":
        continue
    c = cls[a["class_id"]]
    d0 = first + dt.timedelta(days=DAYS[c["day"]])
    dates, d = [], d0
    while len(dates) < TERM["lessons_per_class"]:
        if d not in closed: dates.append(d.isoformat())
        d += dt.timedelta(days=7)
    skipped = sorted(x.isoformat() for x in closed if d0 <= x <= dt.date.fromisoformat(dates[-1]) and x.weekday() == DAYS[c["day"]])
    timetable.append({"signup_id": sid, "student": a["student_name"], "class_id": c["class_id"], "day": DAY_ZH[c["day"]],
                      "time": c["time"], "room": c["room"], "teacher": c["teacher"], "lesson_dates": dates,
                      "skipped_closures": skipped, "first_lesson": dates[0], "last_lesson": dates[-1]})

from collections import Counter
exp = {"signups_in_file": len(SIGNUPS), "allocation_summary": dict(Counter(a["result"] for a in alloc)),
       "allocation": [{k: a[k] for k in ("signup_id", "student_name", "subject", "year_level", "trial_level", "preferred_days", "result", "class_id", "detail")} for a in alloc],
       "seats_left_after_allocation_and_replies": seats, "seats_released_by_decline": released,
       "replies_in_file": len(REPLIES), "timetable_confirmed": timetable,
       "no_reply_yet": [a["signup_id"] for a in alloc if a["result"].startswith("allocated") and a["signup_id"] not in {r[1] for r in REPLIES}]}
(P / "expected").mkdir(exist_ok=True)
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
for a in exp["allocation"]: print(a["signup_id"], a["result"], a["detail"])
print(exp["allocation_summary"], seats, exp["no_reply_yet"])
for t in timetable: print(t["student"], t["class_id"], t["first_lesson"], t["last_lesson"], t["skipped_closures"])
