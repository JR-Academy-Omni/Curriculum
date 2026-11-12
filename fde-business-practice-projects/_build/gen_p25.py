#!/usr/bin/env python3
"""p25 teaching data + expected answer (deterministic).
Invented after-school tutoring centre in Eastwood NSW; invented students (given name + surname initial only).
One week of class sign-in sheets -> weekly attendance report. All numbers in expected/ are rule-computed here."""
import csv, json, pathlib, random, datetime as dt
from collections import defaultdict, OrderedDict

R = random.Random(20261125)
P = pathlib.Path(__file__).resolve().parents[1] / "p25-tutoring-attendance-weekly-report"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
WEEK_START, WEEK_END = dt.date(2026, 11, 2), dt.date(2026, 11, 8)

CLASSES = [  # class_id, name, teacher, sessions (date, time)
    ("C-Y3E", "三年级英语阅读", "林老师", [("2026-11-02", "16:30")]),
    ("C-Y4M", "四年级数学", "黄老师", [("2026-11-03", "16:30"), ("2026-11-05", "16:30")]),
    ("C-Y5M", "五年级数学", "黄老师", [("2026-11-04", "16:30"), ("2026-11-07", "10:00")]),
    ("C-Y6S", "六年级精英中学冲刺", "Ms Carter", [("2026-11-07", "13:00")]),
    ("C-Y7E", "七年级英语写作", "Ms Carter", [("2026-11-06", "17:00")]),
    ("C-Y8M", "八年级数学", "周老师", [("2026-11-05", "18:00")]),
]
GIVEN = ["Ethan", "Chloe", "子涵", "Lucas", "欣怡", "Ryan", "Mia", "浩然", "Olivia", "俊杰", "Ava", "一诺", "Leo",
         "Sophie", "梓轩", "Isaac", "雨桐", "Aiden", "Grace", "思远", "Nathan", "Emily", "佳琪", "Jason", "Zoe",
         "宇航", "Ella", "博文", "Hannah", "子墨", "Kevin", "可欣", "Daniel", "Lily", "嘉怡", "Oscar", "诗涵",
         "Henry", "若曦", "Max", "天佑", "Amelia", "晨曦", "Tom", "睿", "Ruby", "明轩", "Ivy"]
SURN = "WZLCHYXGMSDQ"
roster = []
sid = 1
for cid, _, _, _ in CLASSES:
    for _ in range(R.randint(7, 10)):
        roster.append({"class_id": cid, "student_id": f"S{sid:03d}", "student": f"{GIVEN[(sid - 1) % len(GIVEN)]} {SURN[R.randrange(len(SURN))]}."})
        sid += 1
by_class = defaultdict(list)
for r in roster: by_class[r["class_id"]].append(r)

rows = []
for cid, cname, teacher, sessions in CLASSES:
    for d, t in sessions:
        for s in by_class[cid]:
            x = R.random()
            status = "present" if x < 0.82 else "late" if x < 0.89 else "absent" if x < 0.95 else "excused"
            late = R.choice([5, 10, 15, 20]) if status == "late" else ""
            note = "家长提前请假" if status == "excused" else ""
            rows.append({"date": d, "time": t, "class_id": cid, "class_name": cname, "teacher": teacher,
                         "student_id": s["student_id"], "student": s["student"], "status": status,
                         "minutes_late": late, "note": note})

def find(cid, d, idx):
    sids = [s["student_id"] for s in by_class[cid]]
    return next(r for r in rows if r["class_id"] == cid and r["date"] == d and r["student_id"] == sids[idx])

# ---- planted follow-up cases (real outcomes the report must surface) ----
for d in ("2026-11-03", "2026-11-05"):          # 四年级数学同一个孩子两次无故缺勤
    find("C-Y4M", d, 2).update(status="absent", minutes_late="", note="")
for d in ("2026-11-04", "2026-11-07"):          # 五年级数学同一个孩子两次迟到
    find("C-Y5M", d, 4).update(status="late", minutes_late=15 if d == "2026-11-04" else 25, note="")
# ---- planted data problems ----
# D1 状态是缺勤，但备注写的是请假 -> 让老师确认，不改状态
find("C-Y7E", "2026-11-06", 1).update(status="absent", minutes_late="", note="妈妈周四微信说孩子发烧请假")
# D2 状态为空
find("C-Y8M", "2026-11-05", 3).update(status="", minutes_late="", note="")
# D3 老师漏记一个学生（名单上有，这节课没有记录）
missing = find("C-Y3E", "2026-11-02", 5); rows.remove(missing)
# D4 不在这个班名单上的孩子（来试听，或者走错班）
rows.append({"date": "2026-11-07", "time": "13:00", "class_id": "C-Y6S", "class_name": "六年级精英中学冲刺", "teacher": "Ms Carter",
             "student_id": "", "student": "Jayden T.", "status": "present", "minutes_late": "", "note": "试听"})
# D5 同一条记录被录了两次（老师补交时整行复制）
dup1 = dict(find("C-Y5M", "2026-11-04", 0)); rows.append(dup1)
dup2 = dict(find("C-Y4M", "2026-11-05", 6)); rows.append(dup2)
# D6 日期写成了下周一（不在本周范围内）
wrong = dict(find("C-Y3E", "2026-11-02", 0)); wrong["date"] = "2026-11-09"; rows.append(wrong)

rows.sort(key=lambda r: (r["date"], r["time"], r["class_id"], r["student_id"] or "zzz"))
with open(P / "data/attendance-week-2026-11-02.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
with open(P / "data/roster.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=["class_id", "student_id", "student"]); w.writeheader(); w.writerows(roster)
with open(P / "data/classes.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["class_id", "class_name", "teacher", "sessions_this_week"])
    for cid, cname, teacher, sessions in CLASSES:
        w.writerow([cid, cname, teacher, "; ".join(f"{d} {t}" for d, t in sessions)])

# ---- expected ----
roster_set = {(r["class_id"], r["student_id"]) for r in roster}
sess_set = {(cid, d) for cid, _, _, ss in CLASSES for d, _ in ss}
seen, review, valid = set(), [], []
for r in rows:
    key = (r["date"], r["class_id"], r["student_id"], r["student"])
    d = dt.date.fromisoformat(r["date"])
    if not (WEEK_START <= d <= WEEK_END):
        review.append({"date": r["date"], "class_id": r["class_id"], "student": r["student"], "problem": "日期不在本周",
                       "reason": f"{r['date']} 不在 11-02 至 11-08 之间，不计入本周，请老师确认日期"}); continue
    if key in seen:
        review.append({"date": r["date"], "class_id": r["class_id"], "student": r["student"], "problem": "重复记录",
                       "reason": "同一节课同一个学生出现两次，只算一次"}); continue
    seen.add(key)
    if (r["class_id"], r["student_id"]) not in roster_set:
        review.append({"date": r["date"], "class_id": r["class_id"], "student": r["student"], "problem": "不在班级名单",
                       "reason": f"备注「{r['note']}」；名单里没有这个学生，不计入出勤率，请教务确认是试听还是要加进名单"}); continue
    if r["status"] == "":
        review.append({"date": r["date"], "class_id": r["class_id"], "student": r["student"], "problem": "状态为空",
                       "reason": "没有标出勤 / 迟到 / 缺勤 / 请假，不计入，请老师补记"}); continue
    if r["status"] == "absent" and "请假" in r["note"]:
        review.append({"date": r["date"], "class_id": r["class_id"], "student": r["student"], "problem": "状态与备注矛盾",
                       "reason": f"状态是缺勤，备注写「{r['note']}」；周报先按表上的缺勤算，请老师确认后再改"})
    valid.append(r)
recorded = {(r["class_id"], r["date"], r["student_id"]) for r in rows}
for cid, _, _, ss in CLASSES:
    for d, _ in ss:
        for s in by_class[cid]:
            if (cid, d, s["student_id"]) not in recorded:
                review.append({"date": d, "class_id": cid, "student": s["student"], "problem": "漏记",
                               "reason": "名单上有这个学生，这节课没有任何记录，请老师补记"})

per_class = OrderedDict()
for cid, cname, teacher, ss in CLASSES:
    vs = [r for r in valid if r["class_id"] == cid]
    c = {k: sum(1 for r in vs if r["status"] == k) for k in ("present", "late", "absent", "excused")}
    denom = c["present"] + c["late"] + c["absent"]
    per_class[cid] = {"class_name": cname, "teacher": teacher, "sessions": len(ss), "roster": len(by_class[cid]),
                      "records_counted": len(vs), **c,
                      "attendance_rate": round((c["present"] + c["late"]) / denom * 100, 1) if denom else None}
tot = {k: sum(v[k] for v in per_class.values()) for k in ("sessions", "roster", "records_counted", "present", "late", "absent", "excused")}
den = tot["present"] + tot["late"] + tot["absent"]
tot["attendance_rate"] = round((tot["present"] + tot["late"]) / den * 100, 1)

stu = defaultdict(lambda: {"absent": 0, "late": 0, "rows": []})
names = {r["student_id"]: r["student"] for r in roster}
for r in valid:
    k = (r["class_id"], r["student_id"]); stu[k][r["status"]] = stu[k].get(r["status"], 0) + 1
follow = []
for (cid, s), v in sorted(stu.items()):
    if v["absent"] >= 2:
        follow.append({"class_id": cid, "student_id": s, "student": names[s], "flag": f"本周无故缺勤 {v['absent']} 次", "action": "请班主任今天联系家长"})
    if v["late"] >= 2:
        follow.append({"class_id": cid, "student_id": s, "student": names[s], "flag": f"本周迟到 {v['late']} 次", "action": "下次课和家长确认接送时间"})

exp = {"week": "2026-11-02 至 2026-11-08", "rows_in_file": len(rows), "rows_counted": len(valid),
       "rows_not_counted": len(rows) - len(valid),
       "per_class": per_class, "total": tot, "follow_up": follow, "needs_review": review,
       "rules": {"attendance_rate": "(present + late) / (present + late + absent)，excused 不进分母",
                 "late": "迟到算到课", "follow_up": "同一班本周无故缺勤 ≥ 2 次，或迟到 ≥ 2 次"}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps({k: exp[k] for k in ("rows_in_file", "rows_counted", "rows_not_counted", "total")}, ensure_ascii=False))
for k, v in per_class.items(): print(k, v)
for x in follow: print(x)
for x in review: print(x)
