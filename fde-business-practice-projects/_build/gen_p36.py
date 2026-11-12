#!/usr/bin/env python3
"""p36 teaching data + expected answer (deterministic).
Fictional Melbourne nail & lash salon. Reminder channel choice and no-show handling are rule-computed here;
message drafts in decisions.csv are hand-written references. The no-show fee is a teaching assumption."""
import csv, json, pathlib, random, re, datetime as dt

R = random.Random(20261136)
P = pathlib.Path(__file__).resolve().parents[1] / "p36-beauty-appointment-reminder-noshow"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(parents=True, exist_ok=True)
TODAY = dt.date(2026, 11, 12)
TOMORROW, YESTERDAY = TODAY + dt.timedelta(days=1), TODAY - dt.timedelta(days=1)
FEE = 30

CLIENTS = [  # id, name, phone, email, preferred, sms_opt_out, email_opt_out, prior_no_show_90d, notes
    ("C01", "王小雨", "0400 401 000", "xiaoyu.wang@mail.example", "sms", "否", "否", 0, ""),
    ("C02", "Chloe Smith", "0400 402 000", "chloe.smith@mail.example", "email", "否", "否", 0, ""),
    ("C03", "李佳", "0400 403 000", "jia.li@mail.example", "sms", "否", "否", 0, ""),
    ("C04", "陈思琪", "0400 404 000", "siqi.chen@mail.example", "sms", "是", "否", 0, "2026-09-02 回复 STOP 退订短信"),
    ("C05", "Megan Wright", "0400 405 000", "megan.wright@mail.example", "sms", "是", "是", 0, "两种都退订了，只接受电话"),
    ("C06", "赵琳", "0400 12 000", "", "sms", "否", "否", 0, "新客，前台手填电话"),
    ("C07", "黄丽", "0400 407 000", "li.huang@mail.example", "sms", "否", "否", 0, ""),
    ("C08", "Isabella Nguyen", "0400 408 000", "bella.nguyen@mail.example", "sms", "否", "否", 0, ""),
    ("C09", "Ava Patel", "0400 409 000", "ava.patel@mail.example", "sms", "否", "否", 0, ""),
    ("C10", "张雪", "0400 410 000", "xue.zhang@mail.example", "sms", "否", "否", 0, "第一次来店"),
    ("C21", "刘婷婷", "0400 421 000", "tingting.liu@mail.example", "sms", "否", "否", 0, ""),
    ("C22", "Jessica Moore", "0400 422 000", "jess.moore@mail.example", "sms", "否", "否", 1, "2026-09-18 爽约过一次"),
    ("C23", "孙晴", "0400 423 000", "qing.sun@mail.example", "sms", "否", "否", 0, ""),
    ("C24", "Emma Clarke", "0400 424 000", "emma.clarke@mail.example", "email", "是", "是", 0, "退订全部推送"),
    ("C25", "周敏", "0400 425 000", "min.zhou@mail.example", "sms", "否", "否", 2, "10-20 投诉睫毛过敏，店长 Yuki 在跟进"),
    ("C26", "Lucy Tran", "0400 426 000", "lucy.tran@mail.example", "sms", "否", "否", 0, ""),
    ("C27", "郭芳", "0400 427 000", "fang.guo@mail.example", "sms", "否", "否", 0, ""),
]
CCOLS = ["client_id", "name", "phone", "email", "preferred_channel", "sms_opt_out", "email_opt_out", "no_shows_prior_90d", "notes"]
APPTS = [  # appt_id, client, date, start, service, staff, status, reminder_sent_at, notes
    ("A01", "C01", "2026-11-13", "10:00", "凝胶美甲（单色）", "Yuki", "booked", "", ""),
    ("A02", "C02", "2026-11-13", "10:30", "睫毛嫁接（自然款）", "Ivy", "booked", "", ""),
    ("A03", "C03", "2026-11-13", "11:00", "卸甲 + 护理", "Yuki", "cancelled", "", "11-10 客人改期到 11-20"),
    ("A04", "C04", "2026-11-13", "12:00", "法式美甲", "Mina", "booked", "", ""),
    ("A05", "C05", "2026-11-13", "13:00", "睫毛补睫", "Ivy", "booked", "", ""),
    ("A06", "C06", "2026-11-13", "14:00", "眉毛造型", "Mina", "booked", "", ""),
    ("A07", "C07", "2026-11-13", "15:00", "睫毛嫁接（浓密款）", "Ivy", "booked", "", ""),
    ("A08", "C07", "2026-11-13", "15:00", "睫毛嫁接（浓密款）", "Mina", "booked", "", "电话预约，前台补录"),
    ("A09", "C08", "2026-11-13", "16:00", "凝胶美甲（单色）", "Yuki", "booked", "2026-11-11 18:20", "前台已手动发过"),
    ("A10", "C09", "2026-11-13", "16:30", "手部护理", "Mina", "booked", "", ""),
    ("A11", "C10", "2026-11-13", "17:00", "睫毛嫁接（自然款）", "Ivy", "booked", "", ""),
    ("A21", "C21", "2026-11-11", "10:00", "凝胶美甲（单色）", "Yuki", "no_show", "2026-11-10 10:00", ""),
    ("A22", "C22", "2026-11-11", "11:30", "睫毛补睫", "Ivy", "no_show", "2026-11-10 10:00", ""),
    ("A23", "C23", "2026-11-11", "10:30", "法式美甲", "Mina", "no_show", "2026-11-10 10:00", ""),
    ("A24", "C24", "2026-11-11", "14:00", "手部护理", "Mina", "no_show", "", "退订全部推送，前一天已电话提醒"),
    ("A25", "C25", "2026-11-11", "15:30", "睫毛嫁接（自然款）", "Ivy", "no_show", "2026-11-10 10:00", ""),
    ("A26", "C26", "2026-11-11", "13:00", "眉毛造型", "Yuki", "completed", "2026-11-10 10:00", ""),
    ("A27", "C27", "2026-11-11", "16:00", "凝胶美甲（单色）", "Yuki", "cancelled", "", "11-09 客人取消（提前两天）"),
]
ACOLS = ["appt_id", "client_id", "date", "start", "service", "staff", "status", "reminder_sent_at", "notes"]
CALLS = [  # time, client, channel, content
    ("2026-11-11 10:05", "C23", "电话", "孙晴来电：路上堵车，大概晚 20 分钟到，问还能不能做。前台说可以，等她。"),
    ("2026-11-11 11:10", "C26", "短信", "Running 5 min late sorry!"),
    ("2026-11-11 19:40", "C21", "短信", "不好意思今天完全忘了，下周能补约吗？"),
]
POLICY = f"""# 柚子美甲睫毛 预约提醒与爽约规则（练习数据：规则和金额都是为这个练习设计的，属于教学假设）

## 提醒
- 每天 10:00 给第二天的预约发一条提醒，内容：日期、时间、项目、美容师、地址；改期请提前 24 小时告诉我们。
- 先用客人的偏好渠道。客人退订了这个渠道，就换另一个没退订的渠道。两种都退订，或者联系方式不对，放进「前台电话提醒」名单，不发自动消息。
- 已经发过提醒的不重复发；已取消的不发。
- 同一位客人同一时间有两条预约，先由前台确认是不是重复录入，确认前不发提醒。
- 第一次来店的客人，提醒里加一句停车和店门位置。

## 爽约
- 预约开始后 15 分钟没到、也没有提前联系，前台标 no_show。
- 预约开始前客人来电或留言说会迟到、要取消的，不按爽约处理，交店长看。
- 90 天内第一次爽约：发一条关心消息，问要不要改约，不收费。
- 90 天内第二次及以上：可以收 ${FEE} 爽约费，**必须店长批准**；店长批准前，消息里不提收费。
- 客人有未处理完的投诉：不发任何自动消息，交店长。
- 客人退订了所有渠道：不发消息，只记录。
- 收费方式、金额以门店和客人确认的预约条款为准；本规则不构成法律意见。

## 地址
- 柚子美甲睫毛 Yuzu Nail & Lash，Shop 8, 20 Example Street, Glen Waverley VIC 3150。商场 P2 停车场免费 3 小时，店在一楼 Kingsway 那一侧。
"""

for name, cols, rows in (("clients.csv", CCOLS, CLIENTS), ("appointments.csv", ACOLS, APPTS),
                         ("contact-log-2026-11-11.csv", ["time", "client_id", "channel", "content"], CALLS)):
    with open(P / f"data/{name}", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f); w.writerow(cols); w.writerows(rows)
(P / "data/reminder-and-no-show-policy.md").write_text(POLICY, encoding="utf-8")

# ---------- rule ----------
cl = {c[0]: dict(zip(CCOLS, c)) for c in CLIENTS}
ap = [dict(zip(ACOLS, a)) for a in APPTS]
calls = [dict(zip(["time", "client_id", "channel", "content"], c)) for c in CALLS]
valid_phone = lambda p: bool(re.fullmatch(r"04\d{8}", re.sub(r"\D", "", p)))
slot_count = {}
for a in ap:
    if a["status"] == "booked": slot_count[(a["client_id"], a["date"], a["start"])] = slot_count.get((a["client_id"], a["date"], a["start"]), 0) + 1
res = []
for a in ap:
    c = cl[a["client_id"]]; out = {"appt_id": a["appt_id"], "client_id": a["client_id"], "stage": None, "rule_status": None, "channel": None, "flags": []}
    if a["date"] == TOMORROW.isoformat():
        out["stage"] = "前一天提醒"
        if a["status"] != "booked": out["rule_status"] = "跳过：预约已取消"
        elif a["reminder_sent_at"]: out["rule_status"] = f"跳过：{a['reminder_sent_at']} 已发过"
        elif slot_count[(a["client_id"], a["date"], a["start"])] > 1:
            out["rule_status"] = "转前台"; out["flags"].append("同一客人同一时间两条预约，先确认是否重复录入")
        else:
            ok = {"sms": c["sms_opt_out"] == "否" and valid_phone(c["phone"]), "email": c["email_opt_out"] == "否" and bool(c["email"])}
            pref, other = c["preferred_channel"], "email" if c["preferred_channel"] == "sms" else "sms"
            ch = pref if ok[pref] else other if ok[other] else None
            if ch is None:
                out["rule_status"] = "前台电话提醒"
                out["flags"].append("两种渠道都退订" if c["sms_opt_out"] == "是" and c["email_opt_out"] == "是" else "电话号码格式不对且没有邮箱")
            else:
                out["rule_status"] = "发提醒（待审批）"; out["channel"] = ch
                if ch != pref: out["flags"].append(f"客人退订了 {pref}，改用 {ch}")
                if "第一次" in c["notes"]: out["flags"].append("第一次来店：加停车和店门位置")
    elif a["date"] == YESTERDAY.isoformat():
        out["stage"] = "爽约跟进"
        if a["status"] != "no_show": out["rule_status"] = f"跳过：状态是 {a['status']}，不是爽约"
        else:
            start = f"{a['date']} {a['start']}"
            pre_contact = [x for x in calls if x["client_id"] == a["client_id"] and x["time"] < start]
            nth = int(c["no_shows_prior_90d"]) + 1
            out["no_show_count_90d"] = nth
            if pre_contact:
                out["rule_status"] = "转店长"; out["flags"].append(f"预约前 {pre_contact[0]['time'][11:]} 客人联系过：{pre_contact[0]['content']} 状态可能标错，不按爽约处理")
            elif "投诉" in c["notes"]:
                out["rule_status"] = "转店长"; out["flags"].append("客人有未处理完的投诉，不发自动消息")
            elif c["sms_opt_out"] == "是" and c["email_opt_out"] == "是":
                out["rule_status"] = "只记录，不发消息"; out["flags"].append("客人退订了所有渠道")
            elif nth >= 2:
                out["rule_status"] = f"建议收 ${FEE} 爽约费（待店长批准）"; out["channel"] = c["preferred_channel"]
                out["flags"].append(f"90 天内第 {nth} 次爽约")
            else:
                out["rule_status"] = "发关心消息（待审批，不收费）"; out["channel"] = c["preferred_channel"]
                after = [x for x in calls if x["client_id"] == a["client_id"] and x["time"] >= start]
                if after: out["flags"].append(f"客人事后已来消息：{after[0]['content']} 回复时一起回应")
    res.append(out)
cnt = {}
for r in res: cnt[r["rule_status"].split("：")[0]] = cnt.get(r["rule_status"].split("：")[0], 0) + 1
exp = {"run_date": TODAY.isoformat(), "run_time": "10:00", "reminder_for": TOMORROW.isoformat(), "no_show_for": YESTERDAY.isoformat(),
       "results": res, "counts": cnt, "no_show_fee_teaching_assumption": FEE,
       "rules": {"channel": "偏好渠道 → 偏好退订或不可用就换另一个 → 都不行进前台电话名单；手机号要 04 开头 10 位",
                 "duplicate": "同一客人同一日期同一开始时间有两条 booked → 转前台",
                 "no_show": "预约前联系过 → 转店长；有投诉 → 转店长；全部退订 → 只记录；90 天内第 2 次及以上 → 建议收费待店长批准；第 1 次 → 关心消息不收费"}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

ADDR = "Shop 8, 20 Example Street, Glen Waverley"
REF = {
    "A01": ("是（审批）", f"【柚子美甲睫毛】小雨你好，提醒一下：明天 11 月 13 日（周五）上午 10:00 和 Yuki 约了凝胶美甲（单色）。地址 {ADDR}。要改时间的话直接回这条短信就好。"),
    "A02": ("是（审批）", f"Hi Chloe, just a reminder of your Natural lash extensions with Ivy tomorrow, Friday 13 November at 10:30am, at Yuzu Nail & Lash, {ADDR}. If you need to change the time, simply reply to this email. See you tomorrow!"),
    "A03": ("否", "（已取消，不发。）"),
    "A04": ("是（审批）", f"思琪你好，提醒一下：明天 11 月 13 日（周五）中午 12:00 和 Mina 约了法式美甲。地址 {ADDR}。要改时间直接回这封邮件就好。（你之前退订了短信，所以这次用邮件提醒。）"),
    "A05": ("否", "（不发自动消息。放进前台电话提醒名单：Megan Wright，明天 13:00 睫毛补睫，Ivy。）"),
    "A06": ("否", "（不发自动消息。前台电话名单：赵琳的电话 0400 12 000 只有 9 位，没有邮箱。今天顺便打电话核对号码，问不到的话明天到店时补录。）"),
    "A07": ("否", "（给前台：黄丽明天 15:00 有两条一样的睫毛嫁接，一条 Ivy、一条 Mina（A08 是电话预约补录）。请确认留哪一条、取消另一条，然后再发提醒。）"),
    "A08": ("否", "（同 A07，确认前不发。）"),
    "A09": ("否", "（11-11 18:20 前台已手动发过，不重复发。）"),
    "A10": ("是（审批）", f"Hi Ava, this is Yuzu Nail & Lash. Reminder: hand treatment with Mina tomorrow, Fri 13 Nov at 4:30pm, {ADDR}. Need to change? Just reply to this text."),
    "A11": ("是（审批）", f"【柚子美甲睫毛】张雪你好，明天 11 月 13 日（周五）下午 5:00 和 Ivy 约了睫毛嫁接（自然款），第一次来别担心找不到：商场 P2 停车场免费 3 小时，店在一楼 Kingsway 那一侧，{ADDR}。要改时间直接回这条短信。"),
    "A21": ("是（审批）", "【柚子美甲睫毛】婷婷你好，收到你的消息啦，没关系～下周想什么时候过来？告诉我们一个大概的时间，我们帮你看 Yuki 的空档。"),
    "A22": ("是（店长批准后才发，金额以批准为准）", "（店长批准收费时）Hi Jessica, we missed you at your lash refill yesterday (Wed 11 Nov, 11:30am). As this is the second missed appointment in the last 90 days, a $30 missed-appointment fee applies under our booking terms — we'll be in touch about how to pay. We'd still love to see you, so just reply if you'd like to rebook.\n（店长不批准时）Hi Jessica, we missed you at your lash refill yesterday — hope everything's OK. Reply anytime if you'd like to rebook."),
    "A23": ("是", "（不发消息、不收费。给店长 Yuki：孙晴 10:05 来电说堵车晚 20 分钟，前台答应等她，10:30 的预约后来被标成 no_show。请先问前台当时发生了什么，再决定要不要联系客人改约。）"),
    "A24": ("否", "（Emma 退订了所有渠道，不发消息，只在记录里写一次爽约。）"),
    "A25": ("是", "（不发自动消息、不提收费。给店长 Yuki：周敏 90 天内第 3 次爽约，同时她 10-20 的睫毛过敏投诉还在跟进。请你在处理投诉时一起联系她。）"),
    "A26": ("否", "（已完成，不是爽约。）"),
    "A27": ("否", "（提前两天取消，不算爽约。）"),
}
by_c = cl
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["appt_id", "client_name", "stage", "rule_status", "channel", "flags", "needs_human", "message_draft"])
    for r in res:
        ref = REF[r["appt_id"]]
        w.writerow([r["appt_id"], by_c[r["client_id"]]["name"], r["stage"], r["rule_status"], r["channel"] or "", " / ".join(r["flags"]), ref[0], ref[1]])
print(json.dumps(cnt, ensure_ascii=False))
for r in res: print(r["appt_id"], r["stage"], r["rule_status"], r["channel"], r["flags"])
