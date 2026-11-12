#!/usr/bin/env python3
"""p23 teaching data + expected answer (deterministic).
Fictional Sydney dental clinic; tomorrow's appointment list; fictional patients and numbers.
Who gets an SMS, who goes on the call list, and the exact template text are all rule-computed here."""
import csv, json, pathlib, random, re, datetime as dt

R = random.Random(20261123)
P = pathlib.Path(__file__).resolve().parents[1] / "p23-clinic-next-day-sms-reminders"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
DAY = dt.date(2026, 11, 13)          # 明天（周五）
DENTISTS = ["Dr Anna Chow", "Dr Michael Reyes"]
TREAT = ["洁牙 + 检查", "补牙", "根管治疗（第二次）", "拔智齿", "种植牙复查", "儿童涂氟", "牙周治疗", "牙套调整"]

used = set()
def mob():
    while True:
        m = f"04{R.randint(10, 99)} {R.randint(100, 999)} 000"
        if m not in used: used.add(m); return m

ZH = ["李明", "王芳", "张伟", "刘洋", "陈静", "黄磊", "周婷", "吴强", "徐慧", "孙杰"]
EN = [("Sarah", "Mitchell"), ("James", "O'Connor"), ("Priya", "Sharma"), ("Daniel", "Kim"), ("Olivia", "Nguyen"),
      ("Tom", "Bradley"), ("Hannah", "Lee"), ("Marco", "Rossi")]
rows = []
def add(start, dentist, name, dob, mobile, consent, lang, status, treat, gname="", gmob="", note=""):
    rows.append({"start": f"{DAY.isoformat()} {start}", "dentist": dentist, "patient_name": name, "dob": dob,
                 "mobile": mobile, "sms_consent": consent, "language": lang, "status": status, "treatment": treat,
                 "guardian_name": gname, "guardian_mobile": gmob, "notes": note})

times = [f"{h:02d}:{m:02d}" for h in range(9, 17) for m in (0, 15, 30, 45) if f"{h:02d}:{m:02d}" not in ("15:00", "15:30")]
R.shuffle(times)
zh, en = ZH[:], EN[:]
R.shuffle(zh); R.shuffle(en)
for i in range(12):                                         # ordinary adults, all fine
    if i % 2 == 0:
        name, lang = zh.pop(), "中文"
    else:
        f, l = en.pop(); name, lang = f"{f} {l}", "English"
    add(times.pop(), DENTISTS[i % 2], name, f"{R.randint(1955, 2003)}-{R.randint(1, 12):02d}-{R.randint(1, 28):02d}",
        mob(), "Y", lang, "booked", R.choice(TREAT))
# ---- planted ----
add(times.pop(), DENTISTS[0], "郑凯", "1984-07-19", mob(), "N", "中文", "booked", "根管治疗（第二次）", note="去年说过不要发短信")   # no consent
add(times.pop(), DENTISTS[1], "Grace Walker", "1991-02-08", mob(), "", "English", "booked", "补牙")                               # consent blank
add(times.pop(), DENTISTS[0], "何静", "1979-11-30", mob(), "Y", "中文", "cancelled", "洁牙 + 检查", note="11-11 来电取消")          # cancelled
add(times.pop(), DENTISTS[1], "Liam Turner", "1988-05-14", mob(), "Y", "English", "rescheduled", "牙周治疗", note="改到 11-20")      # rescheduled
add(times.pop(), DENTISTS[0], "Chloe Evans", "1996-09-03", "", "Y", "English", "booked", "洁牙 + 检查")                          # missing phone
g = mob()
add("15:00", DENTISTS[1], "林子涵", "2016-04-22", "", "Y", "中文", "booked", "儿童涂氟", "林美华", g)                            # minor, siblings
add("15:30", DENTISTS[1], "林子轩", "2019-08-10", "", "Y", "中文", "booked", "儿童涂氟", "林美华", g)
add(times.pop(), DENTISTS[0], "Ethan Brooks", "2009-12-01", "0466 702 000", "Y", "English", "booked", "牙套调整", "Karen Brooks", "")  # minor, guardian mobile missing
add(times.pop(), DENTISTS[1], "Mia Santos", "2008-11-13", mob(), "Y", "English", "booked", "拔智齿")                              # turns 18 on the appointment day -> adult
rows.sort(key=lambda r: r["start"])
for i, r in enumerate(rows, 1): r["appt_id"] = f"A{i:03d}"
FIELDS = ["appt_id", "start", "dentist", "patient_name", "dob", "mobile", "sms_consent", "language", "status", "treatment",
          "guardian_name", "guardian_mobile", "notes"]
with open(P / "data/appointments-2026-11-13.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=FIELDS); w.writeheader(); w.writerows(rows)

TEMPLATE = {
    "中文": "【佳美牙科】{who}您好，提醒{whom}明天11月13日（周五）{when}有预约。改约请回复本短信或致电前台。回复STOP退订。",
    "English": "Jiamei Dental: Hi {who}, a reminder that {whom} {when} tomorrow, Fri 13 Nov. Reply to this SMS to reschedule. Reply STOP to opt out.",
}
TMPL_MD = (
    "# 佳美牙科 次日提醒短信模板（诊所批准的固定写法，练习数据）\n\n"
    "只能替换花括号里的内容，不能加治疗项目、医生诊断或任何病情信息。\n\n"
    "## 中文（本人）\n\n```\n" + TEMPLATE["中文"].replace("{whom}", "您").replace("{when}", "{时间}") + "\n```\n\n"
    "## 中文（未成年人，发给监护人）\n\n```\n" + TEMPLATE["中文"].replace("{whom}", "{孩子名字}").replace("{when}", "{时间}") + "\n```\n\n"
    "## English (patient)\n\n```\n" + TEMPLATE["English"].replace("{whom} {when}", "you have an appointment at {time}") + "\n```\n\n"
    "## English (minor, to parent / guardian)\n\n```\n" + TEMPLATE["English"].replace("{whom} {when}", "{child} has an appointment at {time}") + "\n```\n\n"
    "多个孩子同一位监护人：合成一条，名字和时间按先后列出。\n")
TMPL_MD = TMPL_MD.replace("明天11月13日（周五）", "明天{日期}").replace("tomorrow, Fri 13 Nov", "tomorrow, {date}").replace("】{who}", "】{称呼}")
(P / "data/sms-templates.md").write_text(TMPL_MD, encoding="utf-8")


# ---- expected ----
def age_on(dob, day):
    b = dt.date.fromisoformat(dob)
    return day.year - b.year - ((day.month, day.day) < (b.month, b.day))


def norm(m):
    d = re.sub(r"\D", "", m or "")
    return d if re.fullmatch(r"04\d{8}", d) else ""


def hm(t, lang):
    h, m = map(int, t.split(":"))
    if lang == "中文": return f"{'上午' if h < 12 else '下午'}{h if h <= 12 else h - 12}:{m:02d}"
    return f"{h if h <= 12 else h - 12}:{m:02d}{'am' if h < 12 else 'pm'}"


skips, calls, groups = [], [], {}
for r in rows:
    aid = r["appt_id"]
    if r["status"] != "booked":
        skips.append({"appt_id": aid, "patient": r["patient_name"], "reason": f"status = {r['status']}，不发提醒"}); continue
    minor = age_on(r["dob"], DAY) < 18
    to_name, to_mob = (r["guardian_name"], r["guardian_mobile"]) if minor else (r["patient_name"], r["mobile"])
    if r["sms_consent"] != "Y":
        calls.append({"appt_id": aid, "patient": r["patient_name"], "start": r["start"][11:],
                      "reason": "没有短信同意（N）" if r["sms_consent"] == "N" else "短信同意是空白，按没同意处理"}); continue
    if not norm(to_mob):
        calls.append({"appt_id": aid, "patient": r["patient_name"], "start": r["start"][11:],
                      "reason": f"未成年（{age_on(r['dob'], DAY)} 岁），监护人 {to_name} 没有手机号；不发到孩子本人的手机" if minor else "没有手机号"}); continue
    k = norm(to_mob)
    groups.setdefault(k, {"to_name": to_name, "mobile": k, "language": r["language"], "minor": minor, "appts": []})["appts"].append(r)

drafts = []
for k, g in groups.items():
    lang = g["language"]; ap = sorted(g["appts"], key=lambda r: r["start"])
    if lang == "中文":
        who = g["to_name"]
        if g["minor"]:
            whom = "、".join(r["patient_name"] for r in ap)
            when = "、".join(hm(r["start"][11:], lang) for r in ap)
        else:
            whom = "您"; when = hm(ap[0]["start"][11:], lang)
        text = TEMPLATE[lang].format(who=who, whom=whom, when=when)
    else:
        who = g["to_name"].split()[0]
        if g["minor"]:
            whom = " and ".join(r["patient_name"].split()[0] for r in ap); when = "has an appointment at " + hm(ap[0]["start"][11:], lang)
        else:
            whom = "you"; when = "have an appointment at " + hm(ap[0]["start"][11:], lang)
        text = TEMPLATE[lang].format(who=who, whom=whom, when=when)
    drafts.append({"to": g["to_name"], "mobile": g["mobile"], "language": lang, "appt_ids": " ".join(r["appt_id"] for r in ap),
                   "for_minor": "是" if g["minor"] else "否", "chars": len(text), "text": text})
drafts.sort(key=lambda d: d["appt_ids"])
banned = [t for t in TREAT] + ["治疗", "拔", "根管", "种植"]
assert not any(b in d["text"] for d in drafts for b in banned)

exp = {"date": DAY.isoformat(), "appointments": len(rows), "sms_drafts": len(drafts),
       "appointments_covered_by_sms": sum(len(d["appt_ids"].split()) for d in drafts),
       "call_list": calls, "skipped": skips, "drafts": drafts,
       "rules": {"status": "只给 status = booked 的预约发提醒", "minor": "就诊当天未满 18 岁 → 发给监护人手机；监护人没手机 → 进电话清单，不发给孩子本人",
                 "consent": "sms_consent 必须是 Y；N 或空白 → 进电话清单", "phone": "04 开头 10 位数字，否则进电话清单",
                 "merge": "同一个收件手机号的多个预约合成一条", "length": "中文 70 字、英文 160 字符以内算一条短信", "content": "只用诊所模板，不写治疗项目、医生、病情"}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/sms-drafts.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=["appt_ids", "to", "mobile", "language", "for_minor", "chars", "text"]); w.writeheader(); w.writerows(drafts)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["appt_id", "patient_name", "start", "decision", "reason"])
    cmap = {c["appt_id"]: c for c in calls}; smap = {s["appt_id"]: s for s in skips}
    dmap = {a: d for d in drafts for a in d["appt_ids"].split()}
    for r in rows:
        a = r["appt_id"]
        if a in smap: w.writerow([a, r["patient_name"], r["start"][11:], "不发", smap[a]["reason"]])
        elif a in cmap: w.writerow([a, r["patient_name"], r["start"][11:], "电话提醒", cmap[a]["reason"]])
        else:
            d = dmap[a]
            w.writerow([a, r["patient_name"], r["start"][11:], "发短信" + ("（发给监护人）" if d["for_minor"] == "是" else ""),
                        "和兄弟姐妹合成一条" if len(d["appt_ids"].split()) > 1 else ("就诊当天刚满 18 岁，按成年人发给本人" if r["patient_name"] == "Mia Santos" else "正常")])
print(json.dumps({k: v for k, v in exp.items() if k != "rules"}, ensure_ascii=False, indent=1))
