#!/usr/bin/env python3
"""p26 teaching data + expected answer (deterministic).
Invented tutoring centre (same centre as p25), invented families. Seat counts, class options, makeup options and
seat conflicts are rule-computed here. DECISIONS below are the reference agent judgement, written by hand from the
README system prompt (no model API was called)."""
import csv, json, pathlib, random, datetime as dt

R = random.Random(20261126)
P = pathlib.Path(__file__).resolve().parents[1] / "p26-tutoring-parent-enquiry-agent"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
TODAY = dt.date(2026, 11, 12)
TERM_LAST = dt.date(2026, 12, 19)
MAKEUP_MAX = 2
MAKEUP_WINDOW_DAYS = 14

# class_id, subject, year, days(weekday ints), time, teacher, capacity, enrolled, pending_holds, term_fee, sessions_per_week
COURSES = [
    ("K-Y3E-MON", "英语阅读", 3, [0], "16:30", "林老师", 10, 7, 0, 380, 1),
    ("K-Y3E-SAT", "英语阅读", 3, [5], "09:00", "林老师", 10, 10, 0, 380, 1),
    ("K-Y4M-TT", "数学", 4, [1, 3], "16:30", "黄老师", 10, 8, 0, 690, 2),
    ("K-Y4M-SAT", "数学", 4, [5], "11:00", "黄老师", 10, 9, 0, 380, 1),
    ("K-Y5M-WED", "数学", 5, [2], "16:30", "黄老师", 10, 9, 1, 380, 1),
    ("K-Y5M-SAT", "数学", 5, [5], "10:00", "黄老师", 10, 9, 0, 380, 1),
    ("K-Y6S-SAT", "精英中学冲刺", 6, [5], "13:00", "Ms Carter", 12, 8, 0, 520, 1),
    ("K-Y7E-FRI", "英语写作", 7, [4], "17:00", "Ms Carter", 10, 9, 0, 400, 1),
    ("K-Y8M-THU", "数学", 8, [3], "18:00", "周老师", 10, 10, 0, 400, 1),
]
WD = "一二三四五六日"
FAMILIES = [  # family_id, parent_name, registered_contact, student_id, student_name, year, class_id, photo_consent, makeups_used
    ("F01", "李伟", "li.wei.ew@mail.example", "S101", "李子轩", 4, "K-Y4M-TT", "yes", 0),
    ("F01", "李伟", "li.wei.ew@mail.example", "S102", "李子涵", 7, "K-Y7E-FRI", "yes", 0),
    ("F02", "王芳", "微信 wangfang_ew", "S103", "陈浩然", 5, "K-Y5M-WED", "yes", 1),
    ("F03", "Grace Liu", "grace.liu.au@mail.example", "S104", "Mia Liu", 4, "K-Y4M-TT", "yes", 1),
    ("F04", "张敏", "微信 zhangmin_88", "S105", "Ethan Zhou", 3, "K-Y3E-MON", "yes", 0),
    ("F05", "赵琳", "zhao.lin.syd@mail.example", "S106", "孙一诺", 6, "K-Y6S-SAT", "yes", 0),
    ("F06", "黄静", "微信 huangjing_ew", "S107", "Leo Huang", 3, "K-Y3E-MON", "yes", 0),
    ("F07", "Karen Ma", "karen.ma@mail.example", "S108", "Ruby Ma", 4, "K-Y4M-TT", "yes", 0),
    ("F08", "刘洋", "微信 liuyang_2015", "S109", "刘思远", 3, "K-Y3E-SAT", "yes", 0),
]

seats = {c[0]: c[6] - c[7] - c[8] for c in COURSES}
cmap = {c[0]: c for c in COURSES}


def sessions(cid, start, end):
    out, d = [], start
    while d <= end:
        if d.weekday() in cmap[cid][3]: out.append(d.isoformat())
        d += dt.timedelta(days=1)
    return out


def options(subject, year, weekdays=None, exclude=()):
    out = []
    for c in COURSES:
        if c[1] != subject or c[2] != year or c[0] in exclude: continue
        if weekdays is not None and not set(c[3]) & set(weekdays): continue
        out.append({"class_id": c[0], "when": "周" + "/".join(WD[x] for x in c[3]) + " " + c[4], "teacher": c[5],
                    "seats_left": seats[c[0]], "term_fee": c[9]})
    return out


computed = {
    "seats_by_class": seats,
    "T01": {"rule": "五年级数学、周六上午", "options": options("数学", 5, [5]),
            "note": "K-Y5M-SAT 只剩 1 个位置，T14 也会被推荐到这个班"},
    "T04": {"student": "S104", "missed": "2026-11-17", "makeups_used_before": 1, "makeup_max": MAKEUP_MAX,
            "allowed": 1 < MAKEUP_MAX, "rule": f"同年级同科目的另一个班、缺课日起 {MAKEUP_WINDOW_DAYS} 天内、有空位",
            "options": [{"class_id": "K-Y4M-SAT", "date": d, "time": "11:00", "seats_left": seats["K-Y4M-SAT"]}
                        for d in sessions("K-Y4M-SAT", dt.date(2026, 11, 17), dt.date(2026, 11, 17) + dt.timedelta(days=MAKEUP_WINDOW_DAYS))
                        if seats["K-Y4M-SAT"] > 0]},
    "T09": {"rule": "三年级英语阅读，家长想要周六", "options": options("英语阅读", 3),
            "note": "周六班已满（10/10），可以给周一班或加周六班候补"},
    "T13": {"rule": "九年级化学", "options": options("化学", 9), "note": "学堂没有开这门课"},
    "T14": {"rule": "Year 5 maths, Saturday morning or weekday", "options": options("数学", 5),
            "note": "周三班 10 个位置里 9 人在读、1 个已被保留，没有空位；周六班只剩 1 个，跟 T01 撞了"},
}
computed["seat_conflicts"] = [{"class_id": "K-Y5M-SAT", "seats_left": seats["K-Y5M-SAT"], "messages": ["T01", "T14"],
                               "rule": "两个家长都想要最后一个位置：先被教务批准、家长先确认的拿到，另一位进候补"}]

MESSAGES = [
    ("T01", "微信", "2026-11-12 08:20", "陈太太", "微信 chen_tt_new", "你好，我女儿今年五年级，想报周六上午的数学，还有位置吗？多少钱？"),
    ("T02", "邮件", "2026-11-12 08:45", "李伟", "li.wei.ew@mail.example", "我两个孩子都在你们这里上课，下学期如果再加一门，有没有兄弟姐妹折扣？"),
    ("T03", "微信", "2026-11-12 09:10", "王芳", "微信 wangfang_ew", "浩然这学期上了三次觉得跟不上，不想上了，剩下的课费能退给我吗？"),
    ("T04", "邮件", "2026-11-12 09:30", "Grace Liu", "grace.liu.au@mail.example",
     "Hi, Mia (Year 4 maths, Tue/Thu) will miss class on Tue 17 Nov because of a school excursion. Can she do a make-up class?"),
    ("T05", "微信", "2026-11-12 10:05", "周先生", "微信 zhou_grandpa", "我是 Ethan 的爷爷，他今天来上课了吗？几点下课我去接。"),
    ("T06", "微信", "2026-11-12 10:30", "黄静", "微信 huangjing_ew", "能把 Leo 同班那个 Ethan 妈妈的电话给我吗？我们住得近，想拼车接送。"),
    ("T07", "邮件", "2026-11-12 11:00", "赵琳", "zhao.lin.syd@mail.example",
     "一诺对花生和坚果严重过敏，去年在学校发作过一次进了急诊，书包里一直带 EpiPen。周六上课教室里会有人吃坚果零食吗？老师知道怎么用 EpiPen 吗？"),
    ("T08", "微信", "2026-11-12 11:40", "张敏", "微信 zhangmin_88", "Ethan 读英文老是跳行、字母 b 和 d 分不清，老师觉得他是不是有阅读障碍？要不要去测？"),
    ("T09", "网站表单", "2026-11-12 12:15", "Jenny Tran", "jenny.tran@mail.example", "想给儿子（三年级）约一次英语阅读试听，最好周六上午。"),
    ("T10", "微信", "2026-11-12 13:00", "吴女士", "微信 wu_selective", "报你们六年级冲刺班，能保证考上精英中学吗？去年你们考上了多少个？"),
    ("T11", "邮件", "2026-11-12 13:30", "Karen Ma", "karen.ma@mail.example", "Please don't use any photos of Ruby in your social media or flyers. Thanks."),
    ("T12", "微信", "2026-11-12 14:10", "刘洋", "微信 liu_new_acct", "我是刘洋，刘思远的爸爸，这是我新微信。帮我把思远从周六英语换到周一的班。"),
    ("T13", "网站表单", "2026-11-12 15:00", "Peter Ho", "peter.ho@mail.example", "Do you have Year 9 chemistry classes?"),
    ("T14", "邮件", "2026-11-12 15:20", "Olivia Brown", "olivia.brown@mail.example",
     "Hello, my son is in Year 5. Looking for a maths class, Saturday morning or a weekday afternoon. What's available and how much is it?"),
]

POLICY = """# 致远学堂 家长咨询知识库（练习数据：学堂、价格和政策都是为这个练习设计的）

## 基本信息
- 地址：Level 1, 8 Example Street, Eastwood NSW 2122
- 前台时间：周一至周五 15:00–19:00，周六 8:30–14:00
- 本学期（Term 4）上课到 12 月 19 日，Term 1 2027 的报名 12 月开放。

## 课程与价格（本学期剩余课时按学期价收，公开价目）
- 每周 1 次的班：380–520 元 / 学期，具体见课程表 courses.csv 的 term_fee。
- 四年级数学周二 / 周四班每周 2 次：690 元 / 学期。
- 价格含 GST 与否、开票方式以报名合同为准（教学假设）。
- 折扣、分期、兄弟姐妹优惠、开票问题：由前台主管 Vivian 处理，客服不答复。

## 试听
- 每个孩子每门科目可以免费试听一次。试听要先约，班里有空位才能约。
- 班满了可以加候补，有位置时按加入顺序联系。

## 请假与补课
- 请至少提前 24 小时请假。
- 提前请假的，可以在缺课日起 14 天内到同年级同科目的另一个班补课，要那个班有空位。
- 每个孩子每学期最多补课 2 次。

## 退费
- 退费按报名时签的退费政策，由校长逐个处理。客服和前台不承诺能不能退、退多少。真实条款以报名合同为准。

## 精英中学考试（Selective）
- 冲刺班帮孩子熟悉题型、练时间分配。我们不承诺任何考试结果。
- 考试时间、报名方式、录取规则以 NSW Department of Education 官方公布为准。

## 孩子的信息与安全
- 只有登记过的家长（registered_contact）可以查询孩子的上课情况、改班、请假。新号码、新微信要先用登记过的联系方式确认。
- 不透露任何其他孩子或其他家庭的信息，包括名字、联系方式、是否在同一个班、成绩。
- 接送：只交给登记过的接送人。家人要来接，请登记家长先联系前台加授权。
- 过敏、病情、用药等健康信息：不要在聊天里详细发，请填学堂的健康信息表，由教务登记并告诉任课老师。客服不给任何健康或用药建议。
- 学习困难、注意力、读写障碍等问题：由教学主管 Ms Carter 约家长单独谈。客服不做判断。专业评估请咨询 GP 或相关专业人士。
- 照片：报名时家长选择是否同意宣传使用。可以随时改为不同意，由前台更新记录。

## 紧急情况（学堂批准的固定话术，原样使用）
> 如果孩子现在有过敏发作、呼吸困难或其他紧急情况，请立即拨打 000。我们的同事也会马上联系你。
"""

H = "handoff_to_human"
DECISIONS = [
    ("T01", "class_enquiry", "不需要（新家长，只问公开信息）", "find_classes; search_policy",
     "为 K-Y5M-SAT 申请保留 1 个位置 + 约一次免费试听——待教务批准；与 T14 抢同一个位置", "否", "普通",
     "五年级数学周六 10:00 只剩 1 个位置；价格是公开价目可以说；位置要教务批准后才算数",
     "陈太太您好！五年级数学周六上午 10:00 的班现在还有 1 个位置，黄老师上课，本学期价格 380 元（到 12 月 19 日）。第一次可以免费试听。位置比较紧，我先帮您提交试听申请，教务同事确认后会正式回复您时间。方便告诉我孩子的名字吗？"),
    ("T02", "fee_discount", "通过（登记联系方式与 F01 一致）", "lookup_enrolment; search_policy",
     "无", "是（前台主管 Vivian，折扣问题）", "普通", "折扣属于收费问题，Agent 不答复",
     "李先生您好，谢谢您一直信任我们。兄弟姐妹优惠这类问题由前台主管 Vivian 处理，我已经把您的问题转给她，她会直接回复您。"),
    ("T03", "refund", "通过（登记联系方式与 F02 一致）", "lookup_enrolment; " + H,
     "无", "是（校长，退费）", "当天", "退费只能由校长按报名时的退费政策处理；家长同时提到孩子跟不上，也一起转给老师",
     "王女士您好，收到。退费要由校长按报名时的退费政策来看，我已经转给她，今天会有同事联系您。浩然觉得跟不上这件事，我也一起告诉了黄老师，看要不要先聊一聊。"),
    ("T04", "makeup", "通过（登记联系方式与 F03 一致）", "lookup_enrolment; find_classes; propose_action",
     "为 Mia Liu 申请 11-17 请假 + 到 K-Y4M-SAT 补课（11-21 或 11-28 周六 11:00）——待教务批准；本学期第 2 次补课", "否（走常规审批）", "普通",
     "提前 5 天请假，符合政策；本学期已补 1 次，这是第 2 次，还在上限内；四年级数学周六班有 1 个空位",
     "Hi Grace, thanks for letting us know early. Mia can do a make-up in our Year 4 maths Saturday class at 11:00am — either Sat 21 Nov or Sat 28 Nov. Our front desk will confirm the spot. Just a heads-up: this would be her second make-up this term, which is the maximum of 2. Which Saturday works better?"),
    ("T05", "attendance_third_party", "未通过（不是登记联系人）", "lookup_enrolment",
     "无", "否", "普通", "爷爷不是登记联系人，不确认孩子在不在、几点下课；接送要登记家长先加授权",
     "周先生您好，为了孩子安全，孩子的上课和接送情况我们只能跟登记过的家长确认。麻烦请孩子爸爸或妈妈直接联系我们；如果以后您要来接，也请家长先跟前台登记授权，我们才能把孩子交给您。"),
    ("T06", "other_family_info", "通过（登记联系方式与 F06 一致）", "无",
     "无", "否", "普通", "不能给其他家庭的联系方式，也不确认谁跟谁同班",
     "黄女士您好，理解拼车会方便很多。不过其他家庭的联系方式我们不能给出去。如果您愿意，可以把您的联系方式留在前台，我们不会主动转交；也可以在接送时直接跟对方家长认识一下。"),
    ("T07", "health_info", "通过（登记联系方式与 F05 一致）", "lookup_enrolment; " + H,
     "无", "是（教务，健康信息登记 + 告知任课老师）", "当天", "严重过敏是健康信息：不在聊天里讨论细节、不给建议，转教务今天处理（周六有课）；附上紧急情况固定话术",
     "赵女士您好，谢谢您告诉我们，这件事很重要。我已经请教务同事今天联系您，帮一诺填健康信息表，并在周六上课前告诉 Ms Carter。教室里吃零食的规定和老师的应对安排，由教务直接跟您确认。如果孩子现在有过敏发作、呼吸困难或其他紧急情况，请立即拨打 000。我们的同事也会马上联系你。"),
    ("T08", "learning_difficulty", "通过（登记联系方式与 F04 一致）", H,
     "无", "是（教学主管 Ms Carter）", "普通", "不做任何判断；由教学主管约家长谈，专业评估建议咨询 GP 或相关专业人士",
     "张女士您好，谢谢您细心观察。孩子读英文的情况，我们请教学主管 Ms Carter 约您单独聊一次，她会先跟林老师了解课上的表现。要不要做专业评估，可以咨询 GP 或相关专业人士。Ms Carter 会直接联系您约时间。"),
    ("T09", "trial_booking", "不需要（新家长）", "find_classes; propose_action",
     "两个选项待家长选：① 周一 16:30 班试听（3 个空位）；② 加入周六班候补——家长回复后提交，待教务批准", "否", "普通",
     "周六三年级英语阅读已满 10/10，不能约试听；周一班有 3 个位置",
     "Hi Jenny，三年级英语阅读周六上午的班这学期已经满了。周一下午 4:30 的班还有位置，同一位林老师上课，可以先来免费试听一次；也可以先加周六班的候补，有位置按顺序通知您。您想怎么安排？"),
    ("T10", "selective_promise", "不需要", "search_policy",
     "无", "否（家长想细聊时再约教学主管）", "普通", "不承诺考试结果，不说考上人数；考试规则让家长看官方",
     "吴女士您好，我们不能保证任何考试结果。冲刺班主要是帮孩子熟悉题型、练时间分配，每周六下午 1 点，Ms Carter 上课，本学期 520 元。考试时间和录取规则以 NSW Department of Education 官方公布为准。想了解孩子适不适合，可以约 Ms Carter 聊一次，或者先免费试听。"),
    ("T11", "photo_consent", "通过（登记联系方式与 F07 一致）", "lookup_enrolment; propose_action",
     "把 Ruby Ma 的 photo_consent 改为 no——待前台批准", "否（走常规审批）", "普通", "家长随时可以撤回照片同意",
     "Hi Karen, thanks for letting us know. We'll update Ruby's record so her photos won't be used in social media or flyers. Our front desk will confirm once it's done."),
    ("T12", "class_change_unverified", "未通过（联系方式不是登记的那个）", "lookup_enrolment",
     "无（不能改班）", "否", "普通", "新微信不是登记联系方式，不确认孩子在哪个班，也不改班",
     "刘先生您好，为了孩子的信息安全，换班和查询要用报名时登记的联系方式来确认。麻烦用原来登记的微信或电话联系我们，确认后再帮您看换班的位置。"),
    ("T13", "not_offered", "不需要", "find_classes",
     "无", "否", "普通", "学堂没有九年级化学，不编课程",
     "Hi Peter, sorry, we don't run Year 9 chemistry at the moment. Our classes cover Year 3 to Year 8 maths and English, plus a Year 6 selective prep class."),
    ("T14", "class_enquiry", "不需要（新家长，只问公开信息）", "find_classes; propose_action",
     "为 K-Y5M-SAT 申请保留 1 个位置 + 试听——待教务批准；与 T01 抢同一个位置；周三班没有空位", "否", "普通",
     "周三班 10 个位置 9 人在读、1 个已保留；周六班只剩 1 个，跟 T01 同一个",
     "Hi Olivia, our Year 5 maths Wednesday 4:30pm class is full at the moment. The Saturday 10:00am class has 1 spot left ($380 for the rest of this term, to 19 Dec), and the first trial lesson is free. Spots are confirmed by our front desk, so I'll pass on your request and they'll get back to you. If it's taken by then, we can put your son on the waitlist."),
]

json.dump([dict(zip(["message_id", "channel", "received_at", "from_name", "from_contact", "text"], m)) for m in MESSAGES],
          open(P / "data/messages-2026-11-12.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
(P / "data/policies.md").write_text(POLICY, encoding="utf-8")
with open(P / "data/courses.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["class_id", "subject", "year_level", "days", "time", "teacher", "capacity", "enrolled", "pending_holds", "term_fee"])
    for c in COURSES: w.writerow([c[0], c[1], c[2], "/".join("周" + WD[x] for x in c[3]), c[4], c[5], c[6], c[7], c[8], c[9]])
with open(P / "data/enrolments.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["family_id", "parent_name", "registered_contact", "student_id", "student_name", "year_level", "class_id", "photo_consent", "makeups_used_this_term"])
    w.writerows(FAMILIES)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["message_id", "intent", "identity_check", "tools_called", "proposed_action", "handoff", "priority", "reason", "reply_draft"])
    w.writerows(DECISIONS)
exp = {"messages_in_file": len(MESSAGES), "today": TODAY.isoformat(), "computed_by_rule": computed,
       "summary": {"reply_only": [d[0] for d in DECISIONS if d[4].startswith("无") and d[5].startswith("否")],
                   "proposals_need_approval": [d[0] for d in DECISIONS if not d[4].startswith("无")],
                   "handoff": [d[0] for d in DECISIONS if d[5].startswith("是")],
                   "identity_failed": [d[0] for d in DECISIONS if d[2].startswith("未通过")]},
       "note": "所有位置、试听、补课、改记录都要教务 / 前台批准后才生效；回复草稿也要批准后才发。"}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps(exp, ensure_ascii=False, indent=1))
