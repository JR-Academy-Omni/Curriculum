#!/usr/bin/env python3
"""p20 teaching data + expected answer (deterministic).
Fictional Parramatta leasing team; fictional listings, enquirers, applications.
Inspection slot options, similar-listing suggestions and application missing items are rule-computed here.
The agent's judgement + reply drafts in DECISIONS are hand-written reference outputs (the assistant session
followed the README system prompt); they are written to expected/decisions.csv."""
import csv, json, pathlib, random, datetime as dt

R = random.Random(20261120)
P = pathlib.Path(__file__).resolve().parents[1] / "p20-realestate-leasing-enquiry-agent"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
NOW = dt.datetime(2026, 11, 11, 8, 0)

LISTINGS = [  # id, address, suburb, type, beds, baths, cars, rent_pw, available_from, pets, furnished, status, landlord_email
    ("L01", "3/15 Example Road", "Parramatta", "公寓", 2, 1, 1, 650, "2026-11-20", "需申请", "否", "available", "owner.l01@mail.example"),
    ("L02", "8 Sample Place", "Harris Park", "独立屋", 3, 2, 2, 780, "2026-12-01", "允许", "否", "available", "owner.l02@mail.example"),
    ("L03", "1205/2 Demo Street", "Parramatta", "公寓", 1, 1, 0, 520, "2026-11-12", "不允许", "是", "available", "owner.l03@mail.example"),
    ("L04", "22 Example Avenue", "Westmead", "独立屋", 4, 2, 2, 900, "2026-11-15", "需申请", "否", "leased", "owner.l04@mail.example"),
    ("L05", "6/40 Sample Road", "North Parramatta", "公寓", 2, 1, 1, 600, "2026-11-18", "不允许", "否", "application_pending", "owner.l05@mail.example"),
    ("L06", "17 Demo Lane", "Granville", "联排", 3, 2, 1, 690, "2026-11-25", "需申请", "否", "available", "peter.grant@mail.example"),
]
LST = {l[0]: l for l in LISTINGS}

# open-for-inspection slots (15 min each). capacity = 名额（按组算）
SLOT_PLAN = [("L01", "2026-11-12 17:30"), ("L01", "2026-11-15 10:00"), ("L01", "2026-11-19 17:30"),
             ("L02", "2026-11-14 10:00"), ("L02", "2026-11-18 17:30"), ("L02", "2026-11-21 10:00"),
             ("L03", "2026-11-13 12:30"), ("L03", "2026-11-15 11:00"),
             ("L05", "2026-11-14 11:30"),
             ("L06", "2026-11-14 13:00"), ("L06", "2026-11-20 17:30")]
slots = []
for i, (lid, start) in enumerate(SLOT_PLAN, 1):
    cap = 8
    booked = R.randint(2, 6)
    slots.append({"slot_id": f"S{i:02d}", "listing_id": lid, "start": start, "minutes": 15, "capacity": cap, "booked": booked})
for s in slots:
    if s["listing_id"] == "L02" and s["start"] == "2026-11-14 10:00": s["booked"] = 8      # planted: Saturday slot full
    if s["listing_id"] == "L01" and s["start"] == "2026-11-12 17:30": s["booked"] = 7      # one place left

APPLICATIONS = [  # id, listing, applicant, contact_email, contact_mobile, id_points, income_proof, rental_history, references, pets_declared, pet_form, submitted_at
    ("APP01", "L01", "Ken Zhou", "ken.zhou@mail.example", "0431 552 000", 100, "工资单", "有", 2, "无", "", "2026-11-09 20:15"),
    ("APP02", "L02", "Sarah Lim", "sarah.lim@mail.example", "0447 208 000", 70, "", "有", 1, "狗 1 只", "", "2026-11-10 09:40"),
    ("APP03", "L06", "林晓", "linxiao.syd@mail.example", "0425 913 000", 100, "存款证明", "首次租房说明", 1, "猫 1 只", "", "2026-11-10 21:05"),
]
REQ = {"id_points": 100, "references": 2}

FAQ = """# 宏景地产 租赁部 · 前台知识库（练习数据：公司、房源、费用都是为这个练习设计的）

## 看房
- 所有看房都要先预约，每场 15 分钟，按组算名额，满了就约下一场。
- 看房时间以房源页面和预约确认短信为准。

## 申请需要的材料（本公司要求，教学假设）
- 身份证明合计 100 分（护照、驾照等，按公司的计分表），在申请系统里上传，不要发在聊天、短信或邮件正文里。
- 收入证明：最近 4 周工资单；没有工作的可以提供存款证明或家人资助证明。
- 租房记录：之前的租约或租金流水；第一次在澳洲租房的，写一份「首次租房说明」。
- 推荐人：2 位（前房东 / 中介、雇主或老师都可以）。
- 带宠物的：房源写「需申请」的，要填宠物申请表，由房东决定。
- 每份申请我们都按同样的标准处理。最后批不批、什么时候批，由房东决定，我们不能提前承诺。

## 费用（教学假设，真实规则以 NSW Fair Trading 官方说明和租约为准）
- 押金（bond）一般是 4 周租金，交到 NSW Fair Trading 的 Rental Bonds Online，不交给个人。
- 签约时先付 2 周租金。
- 房东同意你的申请之前，我们不收任何钱；同意之后才会通过正式渠道发付款说明。我们不会在聊天或短信里让你转账。

## 平等对待（公司规定）
- 我们不会因为种族、国籍、宗教、性别、年龄、怀孕、家庭状况、残障等原因区别对待任何申请人，也不会询问这些信息。
- 房东提出这类要求时，由物业经理直接和房东沟通。

## 已出租的房子 / 维修
- 已经住进去的租客报修、续约、退租，请联系物业管理组（property management），租赁组不处理。
"""

MESSAGES = [
    ("Q01", "网站聊天", "2026-11-11 08:12", "访客", "", "3/15 Example Road 那套还在吗？我有一只猫，可以养吗？"),
    ("Q02", "邮件", "2026-11-11 08:40", "Hannah Brooks", "hannah.b@mail.example",
     "Hi, I'd like to book an inspection for 8 Sample Place this Saturday morning. Thanks, Hannah"),
    ("Q03", "短信", "2026-11-11 09:05", "Unknown", "SMS 尾号 471", "22 Example Avenue Westmead 那套还能看吗？我们一家想找 4 房的"),
    ("Q04", "网站聊天", "2026-11-11 09:30", "访客", "", "我是留学生，没有工作，爸妈每个月给生活费。我申请 1205/2 Demo Street 能保证批吗？"),
    ("Q05", "邮件", "2026-11-11 09:52", "Peter Grant（L06 房东）", "peter.grant@mail.example",
     "Hi team, for 17 Demo Lane please don't rent to families with young kids, and no Indian tenants please — in my experience they're hard on the place. Thanks, Peter"),
    ("Q06", "网站聊天", "2026-11-11 10:15", "访客", "",
     "Can I pay a $500 deposit now to hold 1205/2 Demo Street for me? Just send me your bank details and I'll transfer today."),
    ("Q07", "邮件", "2026-11-11 10:40", "Sarah Lim", "sarah.lim@mail.example",
     "Hi, just checking — have you received everything for my application for 8 Sample Place? Anything missing?"),
    ("Q08", "网站聊天", "2026-11-11 11:02", "林晓", "", "我叫林晓，申请了 Granville 那套联排，还缺什么材料吗？"),
    ("Q09", "短信", "2026-11-11 11:30", "Unknown", "SMS 尾号 806",
     "Hello, is 3/15 Example Road close to a mosque? We are a Muslim family, 2 adults and 4 kids. Will that be a problem for the application?"),
    ("Q10", "邮件", "2026-11-11 12:05", "Amit Shah", "amit.shah@mail.example",
     "Hi, applying for 17 Demo Lane. My passport number is PA1234567 and my driver licence is 12345678, can you put these in for me? Thanks"),
    ("Q11", "网站聊天", "2026-11-11 13:10", "访客", "", "1205/2 Demo Street 一周 520 能不能便宜 50？我可以签一年半。"),
    ("Q12", "短信", "2026-11-11 13:45", "张敏", "SMS 尾号 129", "你好，我是 Westmead 那边的租客，厨房水龙头一直滴水，能找人来修吗？"),
    ("Q13", "邮件", "2026-11-11 14:20", "Lucas Ferreira", "lucas.f@mail.example", "What's the bond for 3/15 Example Road and how much rent do I pay upfront?"),
    ("Q14", "网站聊天", "2026-11-11 15:00", "访客", "", "6/40 Sample Road 还能申请吗？"),
    ("Q15", "网站聊天", "2026-11-11 15:40", "访客", "", "我现在是过桥签证，没有工签，你们看签证吗？这种情况能不能租？"),
]


# ---- rule-computed ----
def slot_options(lid, after=NOW, date=None, n=2):
    out = []
    for s in sorted(slots, key=lambda x: x["start"]):
        if s["listing_id"] != lid: continue
        t = dt.datetime.strptime(s["start"], "%Y-%m-%d %H:%M")
        if t <= after or s["booked"] >= s["capacity"]: continue
        if date and s["start"][:10] < date: continue
        out.append({"slot_id": s["slot_id"], "start": s["start"], "places_left": s["capacity"] - s["booked"]})
    return out[:n]


def similar(lid):
    l = LST[lid]; out = []
    for m in LISTINGS:
        if m[0] == lid or m[11] != "available": continue
        if m[4] >= l[4] - 1 and abs(m[7] - l[7]) <= 0.15 * l[7]:
            out.append({"listing_id": m[0], "address": f"{m[1]}, {m[2]}", "beds": m[4], "rent_pw": m[7]})
    return out


def missing(app):
    aid, lid, name, em, mob, pts, inc, hist, refs, pets, petform, _ = app
    miss = []
    if pts < REQ["id_points"]: miss.append(f"身份证明还差 {REQ['id_points'] - pts} 分")
    if not inc: miss.append("收入证明（最近 4 周工资单，或存款 / 家人资助证明）")
    if not hist: miss.append("租房记录或首次租房说明")
    if refs < REQ["references"]: miss.append(f"推荐人还差 {REQ['references'] - refs} 位")
    if pets != "无":
        pol = LST[lid][9]
        if pol == "不允许": miss.append("这套房不允许养宠物，请和我们确认")
        elif pol == "需申请" and not petform: miss.append("宠物申请表")
    return miss


apps_out = {a[0]: {"listing_id": a[1], "applicant": a[2], "missing": missing(a), "complete": not missing(a)} for a in APPLICATIONS}
computed = {
    "Q01": {"listing": "L01", "status": "available", "pets": "需申请", "slot_options": slot_options("L01")},
    "Q02": {"listing": "L02", "requested": "2026-11-14 上午", "saturday_10am_full": True, "slot_options": slot_options("L02")},
    "Q03": {"listing": "L04", "status": "leased", "similar_rule": "在租、卧室数 ≥ 原房源 − 1、周租在 ±15% 以内", "similar": similar("L04")},
    "Q07": {"application": "APP02", "verified_by": "发件邮箱与申请登记邮箱一致", **apps_out["APP02"]},
    "Q08": {"application": "APP03", "verified": False, "note": "网站聊天没有可核对的联系方式，不透露申请情况"},
    "Q09": {"listing": "L01", "slot_options": slot_options("L01")},
    "Q13": {"listing": "L01", "rent_pw": 650, "bond_4_weeks": 650 * 4, "rent_upfront_2_weeks": 650 * 2, "basis": "教学假设，以租约和 NSW Fair Trading 为准"},
    "Q14": {"listing": "L05", "status": "application_pending"},
}

# ---- hand-written reference judgement (assistant = the model) ----
F = ["message_id", "intent", "identity_check", "tools_called", "proposed_action", "handoff", "priority", "reason", "reply_draft"]
DECISIONS = [
    ("Q01", "房源咨询 + 宠物 + 看房", "不需要", "search_listings; get_inspection_slots", "预约看房（待对方选时间后提交）", "否", "普通",
     "房源在租；宠物政策是「需申请」，只能说明流程，不能替房东答应",
     "您好，3/15 Example Road 还在招租，11 月 20 日起可以入住。这套房的宠物是「需申请」：申请时填一份宠物申请表，最后由房东决定，我这边没法提前答应。想先看房的话，最近两场是 11 月 12 日（周四）17:30（只剩 1 个名额）和 11 月 15 日（周日）10:00，您选一个，我提交后同事会发确认短信。"),
    ("Q02", "预约看房", "不需要", "search_listings; get_inspection_slots", "预约 L02 看房：S05 11-18 17:30 或 S06 11-21 10:00（待对方选）", "否", "普通",
     "周六 11-14 10:00 已满，按规则给后面最近的两场",
     "Hi Hannah, thanks for reaching out. This Saturday's 10am inspection at 8 Sample Place is already full, sorry. The next ones are Wed 18 Nov at 5:30pm and Sat 21 Nov at 10:00am. Let me know which suits you and our team will send a confirmation."),
    ("Q03", "已出租房源", "不需要", "search_listings", "无", "否", "普通",
     "L04 已出租；按规则找到 1 套相近的在租房源 L02",
     "您好，22 Example Avenue 已经租出去了，不好意思。我们现在有一套 8 Sample Place, Harris Park 的 3 房 2 卫独立屋，周租 780，12 月 1 日起可以入住，带两个车位。想看的话我把看房时间发给您。"),
    ("Q04", "申请资格 / 要求承诺", "不需要", "search_faq", "无", "否", "普通",
     "不能承诺批准；按知识库说明没有工作时可以用的材料，不对个人情况下结论",
     "您好，理解你的情况。没有工作也可以申请：收入证明这一项可以用存款证明或家人资助证明代替，第一次在澳洲租房的再写一份「首次租房说明」。每份申请我们都按同样的标准处理，最后批不批由房东决定，所以我没办法提前保证。材料准备齐全、写清楚，房东看得会更快。需要的话我把完整的材料清单发给你。"),
    ("Q05", "房东提出带歧视性的筛选要求", "发件邮箱与 L06 房东登记邮箱一致", "handoff_to_human", "无（不改任何筛选条件）", "是（物业经理 Daniel）", "当天",
     "房东要求按家庭状况和种族筛选租客，Agent 不能答应、不能照做，也不自己和房东讨论政策，交给物业经理直接沟通",
     "Hi Peter, thanks for your email. Our property manager Daniel will give you a call today to talk through the leasing process for 17 Demo Lane."),
    ("Q06", "要求先转账留房", "不需要", "search_faq", "无", "否", "普通",
     "房东同意申请前不收任何钱，也不在聊天里给银行账号；顺带提醒防诈骗",
     "Thanks for your interest in 1205/2 Demo Street. We don't take any payment before the landlord approves an application, and we'll never ask you to transfer money through chat or text. The first step is to book an inspection and submit an application. If the landlord approves it, you'll receive official payment instructions from us. If anyone asks you to pay in advance to hold a property, please don't send the money."),
    ("Q07", "查申请进度", "通过（发件邮箱与 APP02 登记邮箱一致）", "check_application", "无", "否", "普通",
     "按清单 APP02 还缺 3 项：身份证明差 30 分、收入证明、1 位推荐人；L02 允许养宠物，不需要宠物申请表",
     "Hi Sarah, thanks for checking. We've received your application for 8 Sample Place. To complete it we still need: 1) ID documents worth another 30 points; 2) proof of income (your last 4 weeks of payslips, or savings / family support evidence); 3) one more reference. Please upload these through the application portal rather than replying with them by email. Once they're in, the application goes to the landlord. The landlord makes the final decision."),
    ("Q08", "查申请进度（未核对身份）", "未通过（网站聊天没有可核对的联系方式）", "无", "无", "否", "普通",
     "申请情况只告诉能核对上登记联系方式的人，聊天里只报名字不够",
     "你好林晓，为了保护申请人的资料，申请进度我们只通过你申请时登记的邮箱或手机回复。你可以用登记邮箱给我们发一封邮件，或者直接登录申请系统查看，缺什么系统里会写清楚。"),
    ("Q09", "宗教 / 家庭情况是否影响申请", "不需要", "search_listings; get_inspection_slots", "无", "否", "普通",
     "不评价宗教和家庭情况，按公司平等对待规定回复；周边有什么宗教场所知识库里没有，不编",
     "Hi, thanks for your message. Every application is assessed in the same way. Religion and family background make no difference to how we handle it. Each applicant lists the people who will live in the home, and the landlord reviews applications through the usual process. We don't keep information about places of worship nearby, so a map search is the best way to check. If you'd like to see the apartment, the next inspections are Thu 12 Nov at 5:30pm and Sun 15 Nov at 10:00am."),
    ("Q10", "邮件里发来证件号码", "不需要（不处理证件）", "search_faq", "无", "否", "普通",
     "不复述、不保存护照号和驾照号；请对方在申请系统里自己上传；给同事的记录里打码",
     "Hi Amit, thanks for applying for 17 Demo Lane. For your security, please don't send ID numbers by email. We haven't recorded them. Please upload your ID documents directly in the application portal. If you can, please also delete the email you sent us. If you have any trouble with the portal, just let us know."),
    ("Q11", "议价", "不需要", "search_listings", "无", "否", "普通",
     "租金由房东决定，Agent 不还价、不暗示能谈下来；可以告诉对方怎么把出价写进申请",
     "您好，租金要房东来定，我这边没办法直接答应便宜。您可以在申请表里写上希望的租金和一年半的租期，我们会原样转给房东，房东会一起考虑。"),
    ("Q12", "在住租客报修", "不需要", "handoff_to_human", "无", "是（物业管理组）", "普通",
     "在住租客的维修归物业管理组，租赁组不派单",
     "张女士您好，报修是物业管理组负责的，我已经把您的消息转给他们，他们会联系您约维修时间。如果漏水变严重或者关不住，请直接打物业管理组的电话。"),
    ("Q13", "押金和首付租金", "不需要", "search_faq; search_listings", "无", "否", "普通",
     "按知识库：押金 4 周 = 2,600，签约先付 2 周 = 1,300；写明以租约和官方说明为准",
     "Hi Lucas, for 3/15 Example Road (rent $650 per week) the bond is usually 4 weeks' rent, which is $2,600. It is lodged with NSW Fair Trading's Rental Bonds Online, not paid to a person. When you sign the lease you pay 2 weeks' rent upfront, which is $1,300. The exact amounts will be in your lease if your application is approved. NSW Fair Trading's website explains how bonds work."),
    ("Q14", "房源咨询（已有申请在审）", "不需要", "search_listings", "无", "否", "普通",
     "L05 还能申请，但已经有申请在等房东决定，要说实话",
     "您好，6/40 Sample Road 还可以递申请，不过目前已经有申请在等房东决定，所以先说一声。想看房的话，11 月 14 日（周六）11:30 还有名额。"),
    ("Q15", "签证与租房资格", "不需要", "search_faq", "无", "否", "普通",
     "不判断签证，不要求对方提供签证细节；按统一材料清单回复，签证问题请对方找注册移民代理",
     "您好，我们不会根据签证类型区别对待申请，也不会就签证问题给意见。申请材料和其他人一样：身份证明、收入证明（没有工作可以用存款或资助证明）、租房记录、两位推荐人。签证相关的问题，请咨询注册移民代理。"),
]
assert [d[0] for d in DECISIONS] == [m[0] for m in MESSAGES]

# ---- write ----
with open(P / "data/listings.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["listing_id", "address", "suburb", "type", "bedrooms", "bathrooms", "car_spaces", "rent_pw", "available_from", "pets", "furnished", "status", "landlord_email"])
    w.writerows(LISTINGS)
with open(P / "data/inspection-slots.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(slots[0])); w.writeheader(); w.writerows(slots)
with open(P / "data/applications.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["application_id", "listing_id", "applicant", "contact_email", "contact_mobile", "id_points", "income_proof", "rental_history", "references", "pets_declared", "pet_form", "submitted_at"])
    w.writerows(APPLICATIONS)
(P / "data/leasing-faq.md").write_text(FAQ, encoding="utf-8")
json.dump([dict(zip(["message_id", "channel", "received_at", "from_name", "from_contact", "text"], m)) for m in MESSAGES],
          open(P / "data/messages-2026-11-11.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(F); w.writerows(DECISIONS)
exp = {"messages_in_file": len(MESSAGES), "listings": len(LISTINGS), "inspection_slots": len(slots),
       "applications_checked": apps_out, "computed_by_rule": computed,
       "handoffs": [d[0] for d in DECISIONS if d[5].startswith("是")],
       "replies_drafted": [d[0] for d in DECISIONS if d[8]],
       "note": "所有回复和看房预约都要租赁顾问在 Slack 批准后才发出 / 生效。"}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps(exp, ensure_ascii=False, indent=1))
