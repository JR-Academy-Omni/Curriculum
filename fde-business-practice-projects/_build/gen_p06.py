#!/usr/bin/env python3
"""p06 teaching data + expected answer (deterministic).
Fictional Sydney dental clinic; fictional patients. Slot options and waitlist matches are rule-computed here.
The agent's judgement (intent / escalation) is in expected/decisions.csv, written by hand from the README prompt."""
import csv, json, pathlib, random, datetime as dt

R = random.Random(20261106)
P = pathlib.Path(__file__).resolve().parents[1] / "p06-clinic-front-desk-agent"
NOW = dt.datetime(2026, 11, 11, 8, 0)
DENTISTS = {"DH": ("Dr Emily Ho", {0, 1, 2, 3, 4}), "JL": ("Dr Jason Lim", {1, 2, 3, 4, 5})}
DUR = {"检查+洁牙": 60, "补牙": 60, "复诊": 30, "拔牙": 60}


def day_slots(d):
    end = dt.time(12, 30) if d.weekday() == 5 else dt.time(17, 0)
    t = dt.datetime.combine(d, dt.time(9, 0))
    while t.time() <= end:
        yield t; t += dt.timedelta(minutes=30)


# ---- named appointments the messages refer to (patient_id, dentist, start, type) ----
PATIENTS = [  # patient_id, first, last, dob, email
    ("P001", "明", "李", "1988-03-14", "li.ming88@example.com"),
    ("P002", "Grace", "Wu", "1995-09-21", "grace.wu.syd@example.com"),
    ("P003", "建国", "王", "1972-05-30", "wang.jg@example.com"),
    ("P004", "志强", "陈", "1979-02-07", "chen.zq@example.com"),
    ("P005", "婷", "刘", "1990-12-05", "liuting.hv@example.com"),
    ("P006", "Daniel", "Park", "1984-06-30", "dpark.syd@example.com"),
    ("P007", "美玲", "黄", "1966-08-11", "huang.ml@example.com"),
    ("P008", "Tom", "Brennan", "2001-01-19", "tbrennan@example.com"),
    ("P009", "凯", "吴", "1993-04-02", "wukai.syd@example.com"),
    ("P010", "丽", "赵", "1981-10-23", "zhaoli.hv@example.com"),
    ("P011", "立新", "何", "1975-03-08", "he.lixin@example.com"),
]
APPTS = [  # appt_id, patient_id, dentist, start, type
    ("A101", "P001", "DH", "2026-11-16 10:00", "检查+洁牙"),
    ("A102", "P002", "JL", "2026-11-12 09:00", "补牙"),
    ("A103", "P003", "JL", "2026-11-17 15:00", "复诊"),
    ("A104", "P004", "DH", "2026-11-13 11:00", "复诊"),
    ("A105", "P005", "DH", "2026-11-25 14:00", "补牙"),
    ("A106", "P006", "DH", "2026-11-13 14:00", "检查+洁牙"),
    ("A107", "P010", "JL", "2026-11-10 10:00", "拔牙"),
]
WAITLIST = [  # waitlist_id, patient_id, dentist_pref, type, earliest_date, time_pref, added_at
    ("W01", "P007", "DH", "补牙", "2026-11-12", "上午", "2026-11-03 10:20"),
    ("W02", "P008", "JL", "检查+洁牙", "2026-11-12", "任意", "2026-11-04 15:05"),
    ("W03", "P009", "任意", "复诊", "2026-11-12", "下午", "2026-11-06 09:40"),
]

# ---- slot grid 2026-11-12 .. 2026-11-28 ----
booked = {}
for a in APPTS:
    st = dt.datetime.strptime(a[3], "%Y-%m-%d %H:%M")
    for k in range(DUR[a[4]] // 30):
        booked[(a[2], st + dt.timedelta(minutes=30 * k))] = a[0]
slots = []
d = dt.date(2026, 11, 12)
while d <= dt.date(2026, 11, 28):
    for code, (_, wd) in DENTISTS.items():
        if d.weekday() not in wd: continue
        for t in day_slots(d):
            if (code, t) in booked:
                status = "booked"
            else:
                status = "free" if R.random() < 0.3 else "booked"
            slots.append({"date": d.isoformat(), "start": t.strftime("%H:%M"), "dentist_code": code,
                          "dentist": DENTISTS[code][0], "status": status})
    d += dt.timedelta(days=1)
free = {(s["dentist_code"], dt.datetime.strptime(s["date"] + " " + s["start"], "%Y-%m-%d %H:%M")) for s in slots if s["status"] == "free"}


def options(dentists, minutes, dates, start_from=None, start_before=None, after=None, n=3):
    out = []
    for s in slots:
        if s["dentist_code"] not in dentists or s["date"] not in dates: continue
        t = dt.datetime.strptime(s["date"] + " " + s["start"], "%Y-%m-%d %H:%M")
        if start_from and t.time() < start_from: continue
        if start_before and t.time() > start_before: continue
        if after and t < after: continue
        if all((s["dentist_code"], t + dt.timedelta(minutes=30 * k)) in free for k in range(minutes // 30)):
            out.append({"dentist": s["dentist"], "start": f"{s['date']} {s['start']}", "minutes": minutes})
    out.sort(key=lambda x: x["start"])
    return out[:n]


def drange(a, b):
    a, b = dt.date.fromisoformat(a), dt.date.fromisoformat(b)
    return {(a + dt.timedelta(days=i)).isoformat() for i in range((b - a).days + 1)}


computed = {
    "M03": {"for_appt": "A101", "rule": "同一医生 Dr Emily Ho、60 分钟、11-19 或 11-20、13:00 及以后开始",
            "options": options({"DH"}, 60, {"2026-11-19", "2026-11-20"}, start_from=dt.time(13, 0))},
    "M04": {"for_appt": "A102", "hours_before_appt": round((dt.datetime(2026, 11, 12, 9, 0) - dt.datetime(2026, 11, 11, 9, 40)).total_seconds() / 3600, 1),
            "late_change_fee_applies_per_policy": True,
            "rule": "同一医生 Dr Jason Lim、60 分钟、11-16 至 11-21、上午（11:00 及以前开始）",
            "options": options({"JL"}, 60, drange("2026-11-16", "2026-11-21"), start_before=dt.time(11, 0))},
    "M05": {"rule": "给前台参考：11-12 起最早的 30 分钟空位（任一医生），由前台决定是否提供",
            "options": options({"DH", "JL"}, 30, drange("2026-11-12", "2026-11-13"), n=2)},
    "M15": {"rule": "新病人检查+洁牙 60 分钟、周六上午（11-14、11-21）、只有 Dr Jason Lim 周六出诊",
            "options": options({"JL"}, 60, {"2026-11-14", "2026-11-21"})},
}
# M09 joins waitlist, M10 cancels A106 -> freed slot -> waitlist matches (FIFO by added_at)
wl = [dict(zip(["waitlist_id", "patient_id", "dentist_pref", "type", "earliest_date", "time_pref", "added_at"], w)) for w in WAITLIST]
wl.append({"waitlist_id": "W04", "patient_id": "P005", "dentist_pref": "DH", "type": "补牙", "earliest_date": "2026-11-12",
           "time_pref": "任意", "added_at": "2026-11-11 11:30", "note": "由 M09 加入（待前台批准）"})
freed = {"dentist_code": "DH", "start": dt.datetime(2026, 11, 13, 14, 0), "minutes": 60}
matches = []
for w in sorted(wl, key=lambda x: x["added_at"]):
    if w["dentist_pref"] not in ("任意", freed["dentist_code"]): continue
    if DUR[w["type"]] > freed["minutes"]: continue
    if dt.date.fromisoformat(w["earliest_date"]) > freed["start"].date(): continue
    if w["time_pref"] == "上午" and freed["start"].hour >= 12: continue
    if w["time_pref"] == "下午" and freed["start"].hour < 12: continue
    matches.append({"waitlist_id": w["waitlist_id"], "patient_id": w["patient_id"], "type": w["type"], "added_at": w["added_at"]})
computed["M09"] = {"waitlist_id": "W04", "position_in_waitlist": len(wl), "waitlist_entries_before": [w["waitlist_id"] for w in wl[:-1]]}
computed["M10"] = {"cancel_appt": "A106", "hours_before_appt": round((freed["start"] - dt.datetime(2026, 11, 11, 12, 10)).total_seconds() / 3600, 1),
                   "late_change_fee_applies_per_policy": False, "freed_slot": "Dr Emily Ho 2026-11-13 14:00 60 分钟",
                   "waitlist_matches_in_order": matches}

MESSAGES = [
    ("M01", "网站聊天", "2026-11-11 08:05", "访客", "", "你们周六开门吗？几点到几点？"),
    ("M02", "短信", "2026-11-11 08:30", "Unknown", "SMS 尾号 218", "Hi, is there parking near the clinic? First time coming."),
    ("M03", "邮件", "2026-11-11 09:10", "李明", "li.ming88@example.com",
     "你好，我是李明，生日 1988 年 3 月 14 日。我下周一 11 月 16 日上午 10 点的洗牙想改一下，改到下周四或周五下午都可以。谢谢！"),
    ("M04", "短信", "2026-11-11 09:40", "Grace Wu", "SMS 尾号 552",
     "Hi it's Grace Wu (DOB 21/09/1995). Something came up, I need to move my appointment tomorrow 9am. Any morning next week works."),
    ("M05", "网站聊天", "2026-11-11 10:02", "访客", "", "牙疼两天了，晚上疼得睡不着，吃布洛芬可以吗？一次吃几片？"),
    ("M06", "短信", "2026-11-11 10:20", "赵丽", "SMS 尾号 907", "我是赵丽，昨天在你们这拔的牙，到现在还一直在流血，纱布换了好几次都止不住，怎么办"),
    ("M07", "网站聊天", "2026-11-11 10:45", "王太太", "", "帮我查一下我老公王建国下周几点看牙？他自己记不住，我来提醒他。"),
    ("M08", "邮件", "2026-11-11 11:05", "陈志强", "chen.zq@example.com", "我是陈志强，生日 1979 年 7 月 2 日，想取消 11 月 13 日的预约。"),
    ("M09", "网站聊天", "2026-11-11 11:30", "刘婷", "",
     "我是刘婷，生日 1990-12-05，约在 11 月 25 号补牙，能不能提前？有空位就通知我，什么时间都行。"),
    ("M10", "短信", "2026-11-11 12:10", "Daniel Park", "SMS 尾号 330",
     "Daniel Park here, DOB 30/06/1984. Sorry I can't make it this Friday 13th 2pm, please cancel. Will rebook later."),
    ("M11", "网站聊天", "2026-11-11 13:00", "访客", "", "种一颗牙大概多少钱？"),
    ("M12", "邮件", "2026-11-11 13:40", "Michelle Tan", "michelle.tan@example.com", "我有 Bupa 的 Extras，来你们这洗牙能报多少钱？"),
    ("M13", "网站聊天", "2026-11-11 14:15", "访客", "",
     "我女儿 8 岁，可以用 Medicare 的儿童牙科吗？我的 Medicare 号是 2123 45670 1，你帮我查一下"),
    ("M14", "邮件", "2026-11-11 15:00", "何立新", "he.lixin@example.com",
     "上周的账单收了我 380，跟当时说好的不一样，我要投诉，请给个说法。"),
    ("M15", "邮件", "2026-11-11 15:30", "Tom Nguyen", "tom.nguyen.syd@example.com",
     "Hi, I'm a new patient. I'd like a check-up and clean. Any Saturday morning in the next two weeks?"),
]

FAQ = """# 安心牙科 前台知识库（练习数据：诊所与价格都是为这个练习设计的）

## 基本信息
- 地址：Suite 5, 1 Example Lane, Hurstville NSW 2220
- 营业时间：周一至周五 9:00–17:30；周六 9:00–13:00；周日及公众假期休息
- 医生：Dr Emily Ho（周一至周五）、Dr Jason Lim（周二至周六）
- 电话：前台电话见官网（教学项目不提供真实号码）

## 停车与交通
- 诊所楼下有 2 个病人专用车位，先到先停。附近商场停车场可停，收费以现场为准。
- 步行到 Hurstville 火车站约 5 分钟。

## 价格（自费参考价，练习数据）
- 老病人 检查 + 洁牙：220 元
- 新病人 检查 + 洁牙 + 2 张咬翼片：260 元
- 种植牙：必须先做 90 元的种植咨询，医生检查后才能给出方案和报价。前台和在线客服不报种植价格。
- 补牙、拔牙、根管等治疗：医生检查后报价。

## 付款与保险
- 可刷卡；有 HICAPS，私人保险可以现场直接报销，病人付差价。
- 能报多少由你的保单决定，诊所无法代查。可以拿项目编号问保险公司：检查 011、洁牙 114、涂氟 121。（项目编号按澳洲牙科协会的通用编码，以保险公司答复为准。）
- 本诊所接受 CDBS（Child Dental Benefits Schedule）。孩子是否符合资格、还剩多少额度，以 Services Australia 官方为准，可以在 myGov 的 Medicare 账户里查。资格由前台在到诊时核对。

## 改约与取消
- 改约或取消请提前 24 小时以上告诉我们。
- 24 小时内改约或取消、或者没来，按诊所政策收 50 元（练习数据）。是否减免只能由诊所经理决定。
- 候补名单：想提前的病人可以加入候补，有空位时前台按加入顺序联系。

## 隐私
- 只有病人本人（或已登记的监护人 / 授权人）可以查询、修改预约。核对身份需要：全名 + 出生日期，两项都对上才行。
- 不要在聊天或短信里发 Medicare 卡号、保险卡号、银行卡号。需要时到诊所前台出示。

## 紧急情况（诊所批准的固定话术，原样使用）
> 如果出现呼吸困难、吞咽困难、面部或颈部快速肿胀，或出血用力压迫 20 分钟仍止不住，请立即拨打 000 或去最近的急诊。我们的前台同事也会马上联系你。
"""

(P / "data").mkdir(parents=True, exist_ok=True)
(P / "data/clinic-faq.md").write_text(FAQ, encoding="utf-8")
with open(P / "data/patients.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["patient_id", "first_name", "last_name", "dob", "contact_email"]); w.writerows(PATIENTS)
with open(P / "data/appointments.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["appt_id", "patient_id", "dentist", "start", "minutes", "type", "status"])
    for a in APPTS: w.writerow([a[0], a[1], DENTISTS[a[2]][0], a[3], DUR[a[4]], a[4], "completed" if a[3] < "2026-11-11" else "booked"])
with open(P / "data/slots.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(slots[0])); w.writeheader(); w.writerows(slots)
with open(P / "data/waitlist.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["waitlist_id", "patient_id", "dentist_pref", "type", "earliest_date", "time_pref", "added_at"]); w.writerows(WAITLIST)
json.dump([dict(zip(["message_id", "channel", "received_at", "from_name", "from_contact", "text"], m)) for m in MESSAGES],
          open(P / "data/messages-2026-11-11.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

exp = {"messages_in_file": len(MESSAGES), "slots_in_grid": len(slots), "free_slots": len(free),
       "computed_by_rule": computed,
       "note": "slot 选项只给前台审批参考；任何改约、取消、加候补都要人工批准后才写入系统。"}
(P / "expected").mkdir(exist_ok=True)
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1, default=str)
print(json.dumps(exp, ensure_ascii=False, indent=1, default=str))
