#!/usr/bin/env python3
"""p24 teaching data + expected answer (deterministic).
Fictional Melbourne dental clinic; new-patient web form submissions; fictional health funds whose rules are teaching assumptions.
Dedup, existing-patient match, guardian/consent holds, fund lookup, number-format checks and masking are rule-computed here.
PATIENT_EMAILS are hand-written reference drafts for the cases that need the patient to do something (the assistant session
followed the README prompt); routine confirmations use the fixed template and are computed."""
import csv, json, pathlib, re, datetime as dt

P = pathlib.Path(__file__).resolve().parents[1] / "p24-clinic-new-patient-insurance-check"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
TODAY = dt.date(2026, 11, 11)

FUNDS = [  # code, name, aliases, member_number_rule, regex, hicaps_on_the_spot, note
    ("WM", "Wattle Mutual", "wattle;wattle mutual;wattle mutual health", "8 位数字", r"\d{8}", "Y", ""),
    ("HH", "Harbourside Health", "harbourside;harbourside health", "9 位数字", r"\d{9}", "Y", ""),
    ("BG", "Bluegum Health", "bluegum;bluegum health", "1 个字母 + 7 位数字", r"[A-Z]\d{7}", "N", "诊所不能现场刷卡报销，病人全额付款后自己向保险公司申请"),
    ("EU", "Eucalypt Members Fund", "eucalypt;eucalypt members;eucalypt members fund", "10 位数字", r"\d{10}", "Y", ""),
]
EXISTING = [  # patient_id, first, last, dob, mobile, email
    ("HK0412", "海", "王", "1969-06-15", "0433 870 000", "wanghai.dc@mail.example"),
    ("HK0388", "Rebecca", "Stone", "1990-01-27", "0411 205 000", "rstone@mail.example"),
    ("HK0501", "嘉怡", "何", "1985-10-02", "0458 316 000", "hejiayi@mail.example"),
]
K = ["submission_id", "submitted_at", "first_name", "last_name", "dob", "mobile", "email", "address",
     "emergency_contact", "guardian_name", "guardian_mobile", "privacy_consent", "has_private_insurance",
     "fund_name", "member_number", "medicare_number", "medical_history", "notes"]
SUBS = [
    ("N01", "2026-11-11 08:12", "Emma", "Wilson", "1992-04-18", "0412 640 000", "emma.wilson@mail.example", "8 Example Court, Doncaster VIC 3108",
     "Jack Wilson 0412 641 000", "", "", "Y", "是", "Wattle Mutual", "40581273", "2951 64830 1", "无", ""),
    ("N02", "2026-11-11 09:03", "思远", "陈", "1988-12-09", "0439 112 000", "chensiyuan@mail.example", "21 Sample Road, Box Hill North VIC 3129",
     "陈太太 0439 113 000", "", "", "Y", "否", "", "", "", "对青霉素过敏", ""),
    ("N03", "2026-11-11 09:40", "Raj", "Patel", "1979-07-30", "0447 528 000", "raj.patel@mail.example", "3/14 Demo Street, Templestowe VIC 3106",
     "Anita Patel 0447 529 000", "", "", "Y", "是", "Harbourside Health", "3318462", "", "高血压，在吃药", ""),
    ("N04", "2026-11-11 10:15", "欣怡", "李", "2014-03-05", "0425 907 000", "liqiang.family@mail.example", "45 Example Avenue, Doncaster East VIC 3109",
     "李强 0425 907 000", "李强", "0425 907 000", "Y", "是", "Bluegum Health", "B4472091", "", "无", "孩子有点怕看牙"),
    ("N05", "2026-11-11 10:52", "Oscar", "Brown", "2011-08-21", "0466 341 000", "oscar.b@mail.example", "9 Sample Lane, Doncaster VIC 3108",
     "", "", "", "Y", "否", "", "", "", "", "想约周六"),
    ("N06", "2026-11-11 11:30", "海", "王", "1969-06-15", "0433 870 000", "wanghai.dc@mail.example", "60 Demo Road, Doncaster VIC 3108",
     "王太太 0433 871 000", "", "", "Y", "是", "Eucalypt Members", "7710245839", "", "去年在你们这里补过牙", "搬家了，地址更新一下"),
    ("N07", "2026-11-11 13:05", "Sophie", "Martin", "1997-02-14", "0408 772 000", "sophie.martin@mial.example", "12 Example Street, Bulleen VIC 3105",
     "Paul Martin 0408 773 000", "", "", "Y", "是", "Koala Care", "55120087", "", "无", ""),
    ("N08", "2026-11-11 13:08", "Sophie", "Martin", "1997-02-14", "0408 772 000", "sophie.martin@mail.example", "12 Example Street, Bulleen VIC 3105",
     "Paul Martin 0408 773 000", "", "", "Y", "是", "Koala Care", "55120087", "", "无", "刚才邮箱写错了"),
    ("N09", "2026-11-11 14:20", "伟明", "张", "1983-05-11", "0451 093 000", "zhangweiming@mail.example", "7 Sample Close, Doncaster VIC 3108",
     "张太太 0451 094 000", "", "", "Y", "是", "wattle mutual", "60218844", "", "无",
     "顺便把我的信用卡 4111 1111 1111 1111 存上，下次直接扣就行"),
    ("N10", "2026-11-11 15:45", "Lucy", "Green", "2000-10-30", "0478 216 000", "lucy.green@mail.example", "30 Demo Avenue, Templestowe Lower VIC 3107",
     "Mark Green 0478 217 000", "", "", "N", "否", "", "", "", "无", ""),
]

with open(P / "data/health-funds.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["fund_code", "fund_name", "aliases", "member_number_rule", "member_number_regex", "hicaps_on_the_spot", "note"]); w.writerows(FUNDS)
with open(P / "data/existing-patients.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["patient_id", "first_name", "last_name", "dob", "mobile", "email"]); w.writerows(EXISTING)
json.dump([dict(zip(K, s)) for s in SUBS], open(P / "data/registrations-2026-11-11.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
(P / "data/front-desk-rules.md").write_text("""# 华康牙科 新病人登记 · 前台规则（练习数据：诊所规则和保险公司规则都是为这个练习设计的教学假设）

- 18 岁以下的新病人，必须有监护人姓名和手机，并由监护人同意隐私条款，才能建档。
- privacy_consent 不是 Y，不能建档，前台先电话联系。
- 同一手机号 + 同一生日几分钟内提交了两次，以最后一次为准。
- 姓 + 生日 + 手机和老病人对上的，不新建档案，前台更新老档案。
- 保险：只认 health-funds.csv 里的 4 家（名字可按 aliases 模糊匹配，大小写不限）。不在表里的，请病人到诊时带卡，由前台核对。
  会员号格式对不上的，同样请病人带卡。Bluegum Health 不能现场报销，要提前告诉病人。
- 号码显示：Medicare 号、会员号在 Slack、表格、邮件里只显示后 4 位；完整号码只由前台在到诊时从卡上录入诊所系统。
- 诊所不通过表单收银行卡号。表单里出现卡号一律打码，并告诉病人到诊时再付款。
- 病史栏（medical_history）只给医生看：不进 Slack、不进 AI、不进邮件，由流程直接写入诊所系统的病历入口。
""", encoding="utf-8")


# ---- expected ----
def norm_mob(m): return re.sub(r"\D", "", m or "")
def age(dob): b = dt.date.fromisoformat(dob); return TODAY.year - b.year - ((TODAY.month, TODAY.day) < (b.month, b.day))
def last4(x): d = re.sub(r"\s", "", x or ""); return f"****{d[-4:]}" if d else ""
CARD = re.compile(r"\b(?:\d[ -]?){13,19}\b")
alias = {a.strip(): f for f in FUNDS for a in f[2].split(";")}

subs = [dict(zip(K, s)) for s in SUBS]
latest = {}
for s in subs: latest[(norm_mob(s["mobile"]), s["dob"])] = s["submission_id"]
existing = {(e[2], e[3], norm_mob(e[4])): e[0] for e in EXISTING}
results = []
for s in subs:
    sid = s["submission_id"]; flags = []; ins = ""
    key = (norm_mob(s["mobile"]), s["dob"])
    notes_masked = CARD.sub("[已打码]", s["notes"])
    if notes_masked != s["notes"]: flags.append("备注里有银行卡号，已打码；诊所不通过表单收卡号")
    if latest[key] != sid:
        results.append({"submission_id": sid, "name": s["last_name"] + s["first_name"] if not s["first_name"].isascii() else f"{s['first_name']} {s['last_name']}",
                        "status": "重复提交，作废", "insurance": "", "flags": [f"同一人 {latest[key]} 是最后一次提交，以那次为准"],
                        "member_number_shown": "", "medicare_shown": "", "notes_shown": notes_masked}); continue
    name = s["last_name"] + s["first_name"] if not s["first_name"].isascii() else f"{s['first_name']} {s['last_name']}"
    ex = existing.get((s["last_name"], s["dob"], norm_mob(s["mobile"])))
    a = age(s["dob"]); minor = a < 18
    if s["has_private_insurance"] == "是":
        f = alias.get(s["fund_name"].strip().lower())
        if not f:
            ins = f"保险公司「{s['fund_name']}」不在诊所的列表里，请病人到诊时带卡"
        elif not re.fullmatch(f[4], s["member_number"].replace(" ", "")):
            ins = f"{f[1]}：会员号格式不对（应为 {f[3]}，收到 {len(s['member_number'].replace(' ', ''))} 位），请病人到诊时带卡"
        elif f[5] == "N":
            ins = f"{f[1]}：会员号格式对；不能现场报销，要提前告诉病人全额付款后自己申请"
        else:
            ins = f"{f[1]}：会员号格式对，可现场 HICAPS 报销（以到诊时刷卡结果为准）"
    else:
        ins = "没有私人保险"
    if s["medicare_number"] and not re.fullmatch(r"\d{10,11}", s["medicare_number"].replace(" ", "")):
        flags.append("Medicare 号位数不对")
    if ex:
        status = f"老病人 {ex}，不新建档案，前台更新地址"
    elif s["privacy_consent"] != "Y":
        status = "暂停：没有同意隐私条款，前台先电话联系"
    elif minor and not (s["guardian_name"] and s["guardian_mobile"]):
        status = f"暂停：未满 18 岁（{a} 岁），缺监护人信息"
    else:
        status = "可以建档" + ("（未成年，监护人已填）" if minor else "")
    results.append({"submission_id": sid, "name": name, "status": status, "insurance": ins, "flags": flags,
                    "member_number_shown": last4(s["member_number"]), "medicare_shown": last4(s["medicare_number"]),
                    "notes_shown": notes_masked})

CONFIRM = "{greet}您好，谢谢您在华康牙科登记。资料我们已经收到，前台会在一个工作日内打电话约第一次看诊的时间。第一次来请带上带照片的证件{cards}。"
CONFIRM_EN = "Hi {greet}, thanks for registering with Huakang Dental. We've received your details and our front desk will call you within one business day to book your first visit. Please bring photo ID{cards} to your first appointment."
routine = {}
for r, s in zip(results, subs):
    if not r["status"].startswith("可以建档") or r["insurance"].find("请病人到诊时带卡") >= 0 or r["flags"]: continue
    cards_zh = "和保险卡" if s["has_private_insurance"] == "是" else ""
    cards_en = " and your health fund card" if s["has_private_insurance"] == "是" else ""
    if s["first_name"].isascii():
        routine[r["submission_id"]] = CONFIRM_EN.format(greet=s["first_name"], cards=cards_en)
    else:
        greet = s["guardian_name"] if s["guardian_name"] else r["name"]
        txt = CONFIRM.format(greet=greet, cards=cards_zh)
        if s["guardian_name"]: txt = txt.replace("谢谢您在华康牙科登记", f"谢谢您为{r['name']}在华康牙科登记")
        if "不能现场报销" in r["insurance"]:
            txt += "另外提醒一下：Bluegum Health 不能在诊所现场报销，看诊当天需要先全额付款，之后您自己向保险公司申请。"
        routine[r["submission_id"]] = txt

PATIENT_EMAILS = {
    "N03": ("Your registration with Huakang Dental — health fund card", """Hi Raj,

Thanks for registering with Huakang Dental. We've received your details and our front desk will call you within one business day to book your first visit.

One thing to check: the Harbourside Health member number on the form looks shorter than usual. No need to resend it. Just bring your health fund card and photo ID to your first visit and we'll check it at the desk.

Huakang Dental front desk"""),
    "N05": ("Your registration with Huakang Dental — a parent or guardian needs to complete it", """Hi Oscar,

Thanks for registering with Huakang Dental. As you're under 18, a parent or guardian needs to add their name and mobile and agree to our privacy terms before we can set up your file.

Could you ask a parent or guardian to call our front desk, or reply to this email with their name and best contact number? We'll then book your first visit. We'll check Saturday times for you too.

Huakang Dental front desk"""),
    "N08": ("Your registration with Huakang Dental — health fund", """Hi Sophie,

Thanks for registering with Huakang Dental, and for sending the corrected email address. We'll use this one.

We don't have Koala Care on our list of health funds yet, so we can't confirm on-the-spot claiming right now. Please bring your health fund card and photo ID to your first visit and we'll check it at the desk. Our front desk will call you within one business day to book a time.

Huakang Dental front desk"""),
    "N09": ("华康牙科登记确认", """张伟明您好，

谢谢您在华康牙科登记，资料我们已经收到，前台会在一个工作日内打电话约第一次看诊的时间。第一次来请带上带照片的证件和保险卡。

另外，诊所不通过表单或邮件保存银行卡号，您填在备注里的卡号我们已经遮掉，没有保存。看诊当天在前台刷卡付款就可以。为了安全，以后也请不要把卡号写在表单或邮件里。

华康牙科前台"""),
    "N10": ("Your registration with Huakang Dental", """Hi Lucy,

Thanks for registering with Huakang Dental. We noticed the privacy consent box on the form wasn't ticked. We need that consent before we can set up your patient file.

Our front desk will give you a quick call to go through it. If you have any questions about how we handle your information, we're happy to answer them then.

Huakang Dental front desk"""),
}
for r in results:
    sid = r["submission_id"]
    r["patient_email"] = "模板确认" if sid in routine else ("需要病人做事，Claude 起草" if sid in PATIENT_EMAILS else "不发（前台处理）")

exp = {"submissions": len(SUBS), "results": results,
       "ready_to_create": [r["submission_id"] for r in results if r["status"].startswith("可以建档")],
       "existing_patient_update": [r["submission_id"] for r in results if r["status"].startswith("老病人")],
       "duplicates_voided": [r["submission_id"] for r in results if r["status"].startswith("重复")],
       "on_hold": [r["submission_id"] for r in results if r["status"].startswith("暂停")],
       "insurance_needs_card_check": [r["submission_id"] for r in results if "带卡" in r["insurance"]],
       "routine_confirmations": routine, "patient_action_emails": list(PATIENT_EMAILS),
       "never_leaves_the_clinic_system": ["medical_history 原文", "完整 Medicare 号", "完整会员号", "备注里的银行卡号"]}
assert set(PATIENT_EMAILS).isdisjoint(routine)
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["submission_id", "name", "status", "insurance_check", "member_number_shown", "medicare_shown", "flags", "patient_email"])
    for r in results:
        w.writerow([r["submission_id"], r["name"], r["status"], r["insurance"], r["member_number_shown"], r["medicare_shown"], "；".join(r["flags"]), r["patient_email"]])
md = ["# 给病人的邮件参考写法", "", "全部要前台 Vivian 在 Slack 批准后才发出。模板确认由 Code 节点按固定模板生成；需要病人做事的由 Claude 起草。", "", "## 模板确认", ""]
for sid, t in routine.items(): md += [f"### {sid}", "", "```", t, "```", ""]
md += ["## 需要病人做事的邮件", ""]
for sid, (subj, body) in PATIENT_EMAILS.items(): md += [f"### {sid}", "", f"**主题：** {subj}", "", "```", body, "```", ""]
md += ["## N06（不发邮件）", "", "老病人王海，前台在老档案里更新地址即可，不新建档案，也不发「欢迎新病人」邮件。", ""]
(P / "expected/patient-emails.md").write_text("\n".join(md), encoding="utf-8")
print(json.dumps({k: v for k, v in exp.items() if k != "results"}, ensure_ascii=False, indent=1))
for r in results: print(r["submission_id"], r["status"], "|", r["insurance"], "|", r["flags"], r["member_number_shown"], r["medicare_shown"], r["patient_email"])
