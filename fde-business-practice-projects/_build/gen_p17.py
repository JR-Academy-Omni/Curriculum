#!/usr/bin/env python3
"""p17 teaching data + expected answer (deterministic). Same fictional agency as p03 (启航留学移民 Haymarket).
Required-document lists, missing items, passport validity, English-test age and minor checks are rule-computed
here from the hand-labelled file mapping below. The follow-up messages are reference answers written by hand
following the README prompt (no model API was called)."""
import csv, json, pathlib, random, datetime as dt

R = random.Random(20261117)
P = pathlib.Path(__file__).resolve().parents[1] / "p17-education-agency-document-checklist"
TODAY = dt.date(2026, 11, 12)
INTAKE = dt.date(2027, 2, 22)
PASSPORT_MONTHS_AFTER_INTAKE = 6
TEST_VALID_YEARS = 2

CHECKLIST = [  # application_type, doc_code, doc_name, required, condition
    ("本科", "PASSPORT", "护照个人信息页", "必须", "有效期至少到开学后 6 个月"),
    ("本科", "HS_TRANSCRIPT", "高中成绩单（中英文）", "必须", "只有中文的要附英文翻译件"),
    ("本科", "HS_CERT", "高中毕业证或在读证明（中英文）", "必须", "只有中文的要附英文翻译件"),
    ("本科", "ENGLISH", "英语成绩（IELTS / PTE）", "必须", "考试日期在开学前 2 年内；报了语言课包的可以之后补"),
    ("硕士", "PASSPORT", "护照个人信息页", "必须", "有效期至少到开学后 6 个月"),
    ("硕士", "UG_TRANSCRIPT", "本科成绩单（中英文）", "必须", "只有中文的要附英文翻译件"),
    ("硕士", "UG_DEGREE", "学位证 + 毕业证（中英文），未毕业的交在读证明", "必须", "只有中文的要附英文翻译件"),
    ("硕士", "ENGLISH", "英语成绩（IELTS / PTE）", "必须", "考试日期在开学前 2 年内"),
    ("硕士", "CV", "英文简历", "必须", ""),
    ("硕士", "REF", "推荐信", "按项目", "students.csv 里 program_requires 写了才要"),
    ("未成年附加", "PARENT_PASSPORT", "家长护照个人信息页", "必须", "开学时未满 18 岁"),
    ("未成年附加", "PARENT_CONSENT", "家长签字的同意书", "必须", "开学时未满 18 岁；用公司模板"),
]
STUDENTS = [  # id, name, advisor, type, dob, program, program_requires, language_package, contact
    ("S01", "张一凡", "王老师", "本科", "2007-04-18", "商科学士", "", "否", "wechat: zyf_2007"),
    ("S02", "李思雨", "周老师", "硕士", "2003-09-02", "会计硕士", "", "否", "lisiyu@mail.example"),
    ("S03", "王浩", "周老师", "硕士", "2001-12-11", "数据科学硕士", "", "否", "wanghao.ds@mail.example"),
    ("S04", "陈可欣", "王老师", "本科", "2010-06-30", "设计学士", "", "否", "家长 陈女士 wechat: chen_mum"),
    ("S05", "刘洋", "周老师", "硕士", "2002-03-25", "工程管理硕士", "推荐信 2 封", "否", "liuyang.em@mail.example"),
    ("S06", "周婷", "周老师", "硕士", "2002-07-14", "教育硕士", "推荐信 1 封", "否", "zhouting@mail.example"),
    ("S07", "黄子轩", "王老师", "本科", "2008-01-09", "信息技术学士", "", "是", "wechat: hzx0109"),
    ("S08", "吴佳", "周老师", "硕士", "2000-05-20", "市场营销硕士", "", "否", "wujia.mkt@mail.example"),
]
# received files: student_id, filename, uploaded_at, staff_note, (doc_code, flags) ground truth label
FILES = [
    ("S01", "护照.jpg", "2026-11-02 21:14", "有效期 2031-04-02", ("PASSPORT", {})),
    ("S01", "高中成绩单 中英文.pdf", "2026-11-02 21:16", "中英对照，学校盖章", ("HS_TRANSCRIPT", {})),
    ("S01", "毕业证.jpg", "2026-11-02 21:17", "只有中文，没有翻译件", ("HS_CERT", {"untranslated": True})),
    ("S01", "IELTS_TRF.pdf", "2026-11-03 09:40", "考试日期 2025-03-15，总分 6.5", ("ENGLISH", {"test_date": "2025-03-15"})),
    ("S02", "passport_lisiyu.pdf", "2026-10-28 13:02", "有效期 2027-05-10", ("PASSPORT", {"expiry": "2027-05-10"})),
    ("S02", "本科成绩单_英文版.pdf", "2026-10-28 13:05", "英文版，学校盖章", ("UG_TRANSCRIPT", {})),
    ("S02", "学位证+毕业证 翻译件.pdf", "2026-10-28 13:06", "中文原件 + 英文翻译件", ("UG_DEGREE", {})),
    ("S02", "PTE成绩.png", "2026-10-29 10:11", "考试日期 2026-06-20，总分 65", ("ENGLISH", {"test_date": "2026-06-20"})),
    ("S02", "CV_Siyu_Li.docx", "2026-10-29 10:15", "英文简历", ("CV", {})),
    ("S03", "护照首页.pdf", "2026-11-05 19:20", "有效期 2032-01-15", ("PASSPORT", {})),
    ("S03", "成绩单.pdf", "2026-11-05 19:21", "中英对照", ("UG_TRANSCRIPT", {})),
    ("S03", "学位证毕业证.pdf", "2026-11-05 19:22", "中英对照", ("UG_DEGREE", {})),
    ("S03", "雅思成绩.jpg", "2026-11-05 19:25", "考试日期 2024-08-15，总分 7.0", ("ENGLISH", {"test_date": "2024-08-15"})),
    ("S04", "可欣护照.jpg", "2026-11-01 20:30", "有效期 2030-08-19", ("PASSPORT", {})),
    ("S04", "高中成绩单.pdf", "2026-11-01 20:31", "中英对照，学校盖章", ("HS_TRANSCRIPT", {})),
    ("S04", "在读证明.pdf", "2026-11-01 20:31", "中英对照，学校盖章", ("HS_CERT", {})),
    ("S04", "雅思 6.0.pdf", "2026-11-01 20:33", "考试日期 2026-09-06，总分 6.0", ("ENGLISH", {"test_date": "2026-09-06"})),
    ("S04", "妈妈护照.jpg", "2026-11-01 20:35", "家长护照，有效期 2029-11-30", ("PARENT_PASSPORT", {})),
    ("S05", "passport.pdf", "2026-11-06 11:00", "有效期 2030-02-27", ("PASSPORT", {})),
    ("S05", "赵敏_成绩单.pdf", "2026-11-06 11:02", "打开是另一个人（赵敏）的成绩单", ("OTHER_PERSON", {})),
    ("S05", "学位证毕业证_翻译.pdf", "2026-11-06 11:03", "中文原件 + 英文翻译件", ("UG_DEGREE", {})),
    ("S05", "IELTS.pdf", "2026-11-06 11:05", "考试日期 2026-04-11，总分 7.0", ("ENGLISH", {"test_date": "2026-04-11"})),
    ("S05", "Resume.pdf", "2026-11-06 11:06", "英文简历", ("CV", {})),
    ("S05", "推荐信-导师.pdf", "2026-11-06 11:07", "英文推荐信 1 封，有签名", ("REF", {})),
    ("S06", "周婷护照.pdf", "2026-10-30 15:40", "有效期 2033-07-01", ("PASSPORT", {})),
    ("S06", "成绩单v1.pdf", "2026-10-30 15:41", "中英对照", ("UG_TRANSCRIPT", {"superseded": True})),
    ("S06", "成绩单v2(最终版).pdf", "2026-11-04 09:12", "中英对照，比 v1 多了最后一学期", ("UG_TRANSCRIPT", {})),
    ("S06", "学位毕业证.pdf", "2026-10-30 15:43", "中英对照", ("UG_DEGREE", {})),
    ("S06", "雅思7.pdf", "2026-10-30 15:44", "考试日期 2025-11-29，总分 7.0", ("ENGLISH", {"test_date": "2025-11-29"})),
    ("S06", "简历.pdf", "2026-10-30 15:45", "英文简历", ("CV", {})),
    ("S06", "推荐信.pdf", "2026-10-30 15:46", "英文推荐信 1 封，有签名", ("REF", {})),
    ("S07", "护照.png", "2026-11-08 18:02", "有效期 2031-12-20", ("PASSPORT", {})),
    ("S07", "成绩单（中英）.pdf", "2026-11-08 18:03", "中英对照", ("HS_TRANSCRIPT", {})),
    ("S07", "毕业证（中英）.pdf", "2026-11-08 18:04", "中英对照", ("HS_CERT", {})),
    ("S08", "护照.pdf", "2026-11-09 22:10", "有效期 2029-06-11", ("PASSPORT", {})),
    ("S08", "本科成绩单.pdf", "2026-11-09 22:11", "中英对照", ("UG_TRANSCRIPT", {})),
    ("S08", "学位证毕业证.pdf", "2026-11-09 22:12", "中英对照", ("UG_DEGREE", {})),
    ("S08", "PTE.pdf", "2026-11-09 22:13", "考试日期 2026-08-02，总分 62", ("ENGLISH", {"test_date": "2026-08-02"})),
    ("S08", "CV.pdf", "2026-11-09 22:14", "英文简历", ("CV", {})),
    ("S08", "拒签信.pdf", "2026-11-09 22:16", "学生备注：之前申请过一次被拒，这个会不会影响这次？", ("VISA_DOC", {})),
]

# ---- write data (without the ground-truth labels) ----
(P / "data").mkdir(parents=True, exist_ok=True)
with open(P / "data/checklist.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["application_type", "doc_code", "doc_name", "required", "condition"]); w.writerows(CHECKLIST)
with open(P / "data/students.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["student_id", "name", "advisor", "application_type", "dob", "program", "program_requires", "language_package", "contact"]); w.writerows(STUDENTS)
with open(P / "data/received-files.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["student_id", "filename", "uploaded_at", "staff_note"]); w.writerows([x[:4] for x in FILES])
(P / "data/intake.txt").write_text(
    "2027 年 2 月入学批次（练习数据）\n开学日：2027-02-22\n公司内部交材料截止：2026-11-30\n"
    "护照规则（公司内部核对口径）：有效期至少到开学后 6 个月\n英语成绩规则（公司内部核对口径）：考试日期在开学前 2 年内\n"
    "开学时未满 18 岁：加交家长护照和家长同意书\n", encoding="utf-8")


def add_months(d, m):
    y, mo = divmod(d.month - 1 + m, 12)
    return dt.date(d.year + y, mo + 1, min(d.day, 28))


def age_at(dob, d):
    b = dt.date.fromisoformat(dob)
    return d.year - b.year - ((d.month, d.day) < (b.month, b.day))


PASS_LIMIT = add_months(INTAKE, PASSPORT_MONTHS_AFTER_INTAKE)
TEST_FROM = dt.date(INTAKE.year - TEST_VALID_YEARS, INTAKE.month, INTAKE.day)
results = []
for sid, name, adv, typ, dob, prog, req_extra, lang_pkg, contact in STUDENTS:
    files = [f for f in FILES if f[0] == sid]
    minor = age_at(dob, INTAKE) < 18
    need = [c for c in CHECKLIST if c[0] == typ and c[3] == "必须"]
    if "推荐信" in req_extra: need.append(next(c for c in CHECKLIST if c[1] == "REF"))
    if minor: need += [c for c in CHECKLIST if c[0] == "未成年附加"]
    have = {}
    issues = []
    for f in files:
        code, fl = f[4]
        if code == "OTHER_PERSON":
            issues.append({"type": "别人的文件", "file": f[1], "action": "从这个学生的文件夹移走，不转发、不打开给别人看；告诉顾问，并请学生重新上传自己的文件"}); continue
        if code == "VISA_DOC":
            issues.append({"type": "签证相关", "file": f[1], "action": "不在院校申请清单里；学生问到签证影响，转注册移民代理 Michael Tan，顾问和前台都不回答"}); continue
        if fl.get("superseded"):
            issues.append({"type": "重复上传", "file": f[1], "action": "有更新的版本，用最新的那份，这份标记作废"}); continue
        have[code] = f
        if fl.get("untranslated"): issues.append({"type": "缺翻译件", "file": f[1], "action": "只有中文，要补英文翻译件"})
        if fl.get("expiry") and dt.date.fromisoformat(fl["expiry"]) < PASS_LIMIT:
            issues.append({"type": "护照有效期不够", "file": f[1], "action": f"有效期 {fl['expiry']}，早于 {PASS_LIMIT}（开学后 6 个月）；提醒学生尽快换发护照，换好后重新上传"})
        if fl.get("test_date") and dt.date.fromisoformat(fl["test_date"]) < TEST_FROM:
            issues.append({"type": "英语成绩过期", "file": f[1], "action": f"考试日期 {fl['test_date']}，早于 {TEST_FROM}（开学前 2 年）；需要新的成绩，顾问跟学生确认考试安排"})
    missing = []
    for c in need:
        if c[1] == "ENGLISH" and lang_pkg == "是" and c[1] not in have:
            issues.append({"type": "英语成绩之后补", "file": "", "action": "报了语言课包，按规则英语成绩可以之后补，不算缺"}); continue
        if c[1] not in have: missing.append(c[2] + ("（" + req_extra + "）" if c[1] == "REF" else ""))
    if c := next((c for c in need if c[1] == "REF"), None):
        n_need = int(req_extra.split("推荐信")[1].strip().split(" ")[0]) if "推荐信" in req_extra else 0
        n_have = sum(1 for f in files if f[4][0] == "REF")
        if 0 < n_have < n_need: missing.append(f"推荐信还差 {n_need - n_have} 封（要 {n_need} 封，已收 {n_have} 封）")
    blocking = [i for i in issues if i["type"] not in ("重复上传", "英语成绩之后补")]
    status = "齐了" if not missing and not blocking else ("有问题，顾问先看" if any(i["type"] in ("别人的文件", "签证相关") for i in issues) else "要补材料")
    results.append({"student_id": sid, "name": name, "advisor": adv, "application_type": typ, "age_at_intake": age_at(dob, INTAKE), "minor": minor,
                    "required_count": len(need), "files_received": len(files), "missing": missing, "issues": issues, "status": status})

MSG = {
    "S01": "一凡你好，材料基本齐了，还差一样：高中毕业证现在只有中文版，需要补一份英文翻译件，跟原件一起扫描上传就行。我们内部 11 月 30 日前要交齐，有问题随时问我。——王老师",
    "S02": "思雨你好，材料都收到了。有一点要提醒：你的护照 2027 年 5 月 10 日到期，我们核对的口径是护照有效期至少要到开学后 6 个月（2027 年 8 月 22 日），建议尽快去换发新护照，拿到后把新护照首页重新上传。其他材料没问题。——周老师",
    "S03": "王浩你好，材料看过了，还差两样：一是英文简历；二是雅思成绩是 2024 年 8 月考的，到开学时已经超过 2 年，需要一份新的成绩。考试安排我们约个时间聊一下。11 月 30 日前要交齐。——周老师",
    "S04": "陈女士您好，可欣的材料我们核对过了。因为开学时可欣还未满 18 岁，除了已经收到的家长护照，还需要一份家长签字的同意书，我把公司的模板发给您，签好扫描上传就可以。其他材料都齐了。——王老师",
    "S05": "刘洋你好，你上传的文件里有一份「赵敏_成绩单」，打开是别人的成绩单，我们会把它从你的文件夹里移走，麻烦你也删掉手上的副本。还需要你补：自己的本科成绩单（中英文），以及第二封推荐信（这个项目要 2 封，现在收到 1 封）。——周老师",
    "S06": "周婷你好，材料都齐了，成绩单我们用你 11 月 4 日传的最终版。接下来我会开始准备递交，有新进展再告诉你。——周老师",
    "S07": "子轩你好，材料都齐了。你报的是语言课 + 本科的套餐，英语成绩可以之后补，考完记得第一时间发我。——王老师",
    "S08": "吴佳你好，院校申请的材料都齐了。你上传的拒签信和问的「会不会影响这次」属于签证问题，我们这边不能回答，我已经帮你转给公司的注册移民代理 Michael Tan，他会跟你约时间单独聊。——周老师",
}
for r in results: r["message_draft"] = MSG[r["student_id"]]

exp = {"students": len(STUDENTS), "files_received": len(FILES), "intake": INTAKE.isoformat(),
       "passport_must_be_valid_until": PASS_LIMIT.isoformat(), "english_test_on_or_after": TEST_FROM.isoformat(),
       "status_count": {s: sum(1 for r in results if r["status"] == s) for s in ("齐了", "要补材料", "有问题，顾问先看")},
       "results": results}
(P / "expected").mkdir(exist_ok=True)
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["student_id", "name", "advisor", "status", "missing", "issues", "message_draft"])
    for r in results:
        w.writerow([r["student_id"], r["name"], r["advisor"], r["status"], "; ".join(r["missing"]),
                    "; ".join(f"{i['type']}：{i['file']}" if i["file"] else i["type"] for i in r["issues"]), r["message_draft"]])
for r in results: print(r["student_id"], r["status"], r["age_at_intake"], r["missing"], [i["type"] for i in r["issues"]])
print(exp["status_count"], PASS_LIMIT, TEST_FROM)
