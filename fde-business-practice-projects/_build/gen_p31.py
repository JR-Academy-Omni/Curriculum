#!/usr/bin/env python3
"""p31 teaching data + expected answer (deterministic).
Fictional Sydney recruitment agency; 12 fictional resumes (.txt / .md). Experience years, duplicates and
data-quality flags are rule-computed here. Protected attributes planted in resumes must never reach the table."""
import csv, json, pathlib, random, re

R = random.Random(20261131)
P = pathlib.Path(__file__).resolve().parents[1] / "p31-recruitment-resume-extract"
(P / "data/resumes").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(parents=True, exist_ok=True)
AS_OF = (2026, 11)  # 「至今」按 2026 年 11 月算

# Each resume: id, ext, lang, header fields, work rights line (None = not mentioned), jobs, education, skills, certs,
# availability, extra lines that hold protected / irrelevant personal info (must NOT be extracted).
RES = [
    dict(id="R01", ext="txt", lang="zh", name="陈思远", email="siyuan.chen@mail.example", phone="0400 101 000",
         loc="Parramatta NSW", rights="澳洲永久居民（PR）",
         jobs=[("应付账款专员", "Harbourline Logistics Pty Ltd", "2021-03", "至今"),
               ("会计助理", "Westmead Office Supplies", "2018-07", "2021-02")],
         edu="Western Sydney University · Bachelor of Commerce (Accounting) · 2018",
         skills=["Xero", "MYOB", "应付账款全流程", "银行对账", "Excel 数据透视表"], certs=[], avail="两周通知期", extra=[]),
    dict(id="R02", ext="txt", lang="zh", name="林佳慧", email="jiahui.lin@mail.example", phone="0400 102 000",
         loc="Epping NSW", rights="澳洲公民",
         jobs=[("行政主管", "Northgate Dental Group", "2020-01", "至今"),
               ("前台行政", "Epping Physio Centre", "2016-05", "2019-12")],
         edu="Macquarie University · Bachelor of Business Administration · 2016",
         skills=["Microsoft 365", "预约系统管理", "供应商对接", "办公室采购", "中英双语沟通"], certs=["急救证书 HLTAID011（有效期至 2027-05）"],
         avail="一个月通知期",
         extra=["出生日期：1992 年 4 月 3 日（34 岁）", "性别：女", "婚姻状况：已婚"]),
    dict(id="R03", ext="md", lang="en", name="Jack Morrison", email="jack.morrison@mail.example", phone="+61 400 103 000",
         loc="Blacktown NSW", rights="Australian citizen",
         jobs=[("Customer Service Team Leader", "Sunline Energy", "2022-08", "present"),
               ("Customer Service Officer", "Sunline Energy", "2019-02", "2022-07"),
               ("Retail Assistant", "Westpoint Sports", "2017-01", "2019-01")],
         edu="TAFE NSW · Certificate IV in Customer Engagement · 2018",
         skills=["Salesforce Service Cloud", "complaint handling", "team rostering", "call quality coaching", "Zendesk"],
         certs=[], avail="Available from 1 December 2026", extra=[]),
    dict(id="R04", ext="txt", lang="zh", name="赵一鸣", email="yiming.zhao@mail.example", phone="0400 104 000",
         loc="Hurstville NSW", rights=None,
         jobs=[("记账员", "Kogarah Family Accountants", "2023-02", "至今"),
               ("财务实习生", "Rockdale Trading Co", "2022-07", "2022-12")],
         edu="UNSW · Master of Professional Accounting · 2022",
         skills=["Xero", "BAS 资料整理", "工资单录入", "Excel", "QuickBooks"], certs=[], avail="随时可以入职", extra=[]),
    dict(id="R05", ext="md", lang="en", name="Priya Raman", email="priya.raman@mail.example", phone="0400 105 000",
         loc="Harris Park NSW", rights="Temporary Graduate visa (subclass 485), full work rights until 2028-06",
         jobs=[("Accounts Receivable Officer", "Cumberland Freight", "2024-04", "present"),
               ("Finance Intern", "Riverside Medical Supplies", "2023-07", "2023-12")],
         edu="University of Sydney · Master of Commerce · 2023",
         skills=["SAP Business One", "debt collection", "Xero", "month-end reconciliation", "Power BI"], certs=[],
         avail="Two weeks notice", extra=[]),
    dict(id="R06", ext="txt", lang="zh", name="郑浩", email="hao.zheng@mail.example", phone="0400 106 000",
         loc="Burwood NSW", rights="澳洲永久居民",
         jobs=[("客服专员（全职）", "Metro Telco Services", "2022-11", "2024-02"),
               ("销售助理（全职）", "Burwood Home Appliances", "2022-03", "2023-06"),
               ("客服主管", "Ashfield Insurance Brokers", "2024-03", "至今")],
         edu="UTS · Bachelor of Business · 2021",
         skills=["CRM 系统", "投诉处理", "保险续保跟进", "粤语 / 普通话 / 英语", "排班"], certs=[], avail="两周通知期", extra=[]),
    dict(id="R07", ext="md", lang="en", name="Lan Nguyen", email="lan.nguyen@mail.example", phone="0400 107 000",
         loc="Cabramatta NSW", rights="Permanent resident",
         jobs=[("Office Administrator", "Fairfield Community Legal Hub", "2019-09", "present"),
               ("Receptionist", "Liverpool Dental Care", "2016-03", "2019-08")],
         edu="TAFE NSW · Diploma of Business Administration · 2016",
         skills=["Microsoft 365", "document management", "client intake", "invoicing", "Vietnamese / English"],
         certs=["First Aid HLTAID011 (valid to 2026-09)"], avail="One month notice",
         extra=["[Photo: headshot attached at top of page]", "Date of birth: 12/08/1988", "Nationality: Vietnamese"]),
    dict(id="R08", ext="txt", lang="zh", name="吴子涵", email="zihan.wu@mail.example", phone="0400 108 000",
         loc="Kensington NSW", rights="学生签证（简历自述：学期中每两周最多 48 小时，假期不限）",
         jobs=[("兼职客服", "Randwick Bubble Tea", "2025-03", "至今"),
               ("暑期行政实习", "Eastgarden Property Management", "2024-12", "2025-02")],
         edu="UNSW · Bachelor of Commerce（在读，预计 2027 年毕业）",
         skills=["收银系统", "客户沟通", "Excel", "社交媒体发帖", "普通话 / 英语"], certs=[], avail="周一、周三、周五全天", extra=[]),
    dict(id="R09", ext="txt", lang="zh", name="孙婷婷", email="tingting.sun@mail.example", phone="0400 109 000",
         loc="Rhodes NSW", rights="澳洲公民",
         jobs=[("薪资专员", "Rhodes Waterfront Hotels", "2021-06", "至今"),
               ("人事助理", "Concord Aged Care", "2019-01", "2021-05")],
         edu="Macquarie University · Bachelor of Human Resources · 2018",
         skills=["Employment Hero", "工资单", "Super 申报资料", "入职手续", "Excel"], certs=[], avail="一个月通知期",
         extra=[], updated="2026-06-20"),
    dict(id="R10", ext="txt", lang="zh", name="黄伟", email="wei.huang@mail.example", phone="0400 110 000",
         loc="Castle Hill NSW", rights="澳洲公民",
         jobs=[("仓库行政", "Hills Distribution Centre", "2020-10", "至今"),
               ("采购助理", "Baulkham Hills Hardware", "2017-04", "2020-09")],
         edu="Western Sydney University · Bachelor of Business · 2017",
         skills=["库存系统", "采购订单录入", "供应商对账", "Excel", "叉车证（LF）"], certs=["LF 叉车执照"],
         avail="两周通知期", extra=["家庭情况：两个孩子，均已上小学", "宗教：基督徒，周日固定去教会"]),
    dict(id="R11", ext="md", lang="en", name="Olivia Grant", email="olivia.grant@mail.example", phone="0400 111 000",
         loc="Penrith NSW", rights="Australian citizen",
         jobs=[("Payroll Officer", "Nepean Civil Works", "2022-02", "present"),
               ("Accounts Assistant", "Penrith Auto Group", "2019", "2021")],
         edu="Western Sydney University · Bachelor of Business (Accounting) · 2018",
         skills=["KeyPay", "payroll", "single touch payroll lodgement prep", "Xero", "Excel"], certs=[],
         avail="Two weeks notice", extra=[]),
    dict(id="R12", ext="md", lang="zh", name="孙婷婷", email="sun.tt.work@mail.example", phone="+61 400 109 000",
         loc="Rhodes NSW", rights="澳洲公民",
         jobs=[("薪资主管", "Olympic Park Events Group", "2026-09", "至今"),
               ("薪资专员", "Rhodes Waterfront Hotels", "2021-06", "2026-08"),
               ("人事助理", "Concord Aged Care", "2019-01", "2021-05")],
         edu="Macquarie University · Bachelor of Human Resources · 2018",
         skills=["Employment Hero", "工资单", "Super 申报资料", "入职手续", "薪资审计"], certs=[], avail="一个月通知期",
         extra=[], updated="2026-11-08"),
]


def render(r):
    zh = r["lang"] == "zh"; md = r["ext"] == "md"
    h = (lambda s: f"## {s}") if md else (lambda s: f"【{s}】" if zh else f"{s.upper()}")
    out = [f"# {r['name']}" if md else r["name"]]
    if r.get("updated"): out.append(("简历更新于 " if zh else "Updated ") + r["updated"])
    out += r["extra"][:1] if r["extra"] and r["extra"][0].startswith("[Photo") else []
    out.append(f"{r['loc']} · {r['phone']} · {r['email']}")
    out.append("")
    personal = [x for x in r["extra"] if not x.startswith("[Photo")]
    if personal or r["rights"]:
        out.append(h("个人信息" if zh else "Personal details"))
        out += [("- " if md else "") + x for x in personal]
        if r["rights"]: out.append(("- " if md else "") + ("工作权利：" if zh else "Work rights: ") + r["rights"])
        out.append("")
    out.append(h("工作经历" if zh else "Experience"))
    for t, e, s, end in r["jobs"]:
        rng = f"{s.replace('-', '.')} – {end.replace('-', '.')}"
        out.append(f"{'### ' if md else ''}{t} | {e} | {rng}")
        line = R.choice(["负责日常流程和跟进", "对接内部同事和外部客户", "整理月度报表"]) if zh else \
            R.choice(["Owned the daily workflow end to end", "Worked with internal teams and external clients", "Prepared monthly reports"])
        out.append(("- " if md else "  · ") + line)
    out.append("")
    out.append(h("教育背景" if zh else "Education")); out.append(r["edu"]); out.append("")
    out.append(h("技能" if zh else "Skills")); out.append(("、" if zh else ", ").join(r["skills"])); out.append("")
    if r["certs"]:
        out.append(h("证书" if zh else "Certificates")); out += r["certs"]; out.append("")
    out.append(h("到岗时间" if zh else "Availability")); out.append(r["avail"])
    return "\n".join(out) + "\n"


for r in RES:
    (P / f"data/resumes/{r['id']}.{r['ext']}").write_text(render(r), encoding="utf-8")


# ---------- expected answer (rules) ----------
def norm_phone(p):
    d = re.sub(r"\D", "", p)
    if d.startswith("61"): d = "0" + d[2:]
    return f"{d[:4]} {d[4:7]} {d[7:]}"


def ym(s, is_end):
    if s in ("至今", "present"): return AS_OF[0] * 12 + AS_OF[1], True
    if re.fullmatch(r"\d{4}", s): return None, False
    y, m = s.split("-"); return int(y) * 12 + int(m), True


rows, issues, by_phone = [], [], {}
for r in RES:
    flags = []
    ivs, year_only = [], False
    for t, e, s, end in r["jobs"]:
        a, ok1 = ym(s, False); b, ok2 = ym(end, True)
        if a is None or b is None: year_only = True; continue
        ivs.append((a, b, t, e))
    # overlaps between jobs
    srt = sorted(ivs)
    for i in range(len(srt)):
        for j in range(i + 1, len(srt)):
            lo, hi = max(srt[i][0], srt[j][0]), min(srt[i][1], srt[j][1])
            if lo <= hi:
                months = hi - lo + 1
                flags.append(f"工作经历时间重叠：{srt[i][3]} 和 {srt[j][3]} 重叠 {months} 个月，两份都写的全职，请顾问问清楚")
                issues.append({"file": f"{r['id']}.{r['ext']}", "type": "经历时间重叠", "detail": f"{srt[j][3]} 与 {srt[i][3]} 重叠 {months} 个月"})
    if year_only:
        flags.append("有一段经历只写了年份（2019 – 2021），没法按月算总年限，请问本人具体月份")
        issues.append({"file": f"{r['id']}.{r['ext']}", "type": "日期只写到年", "detail": "Accounts Assistant 2019 – 2021"})
        total = None
    else:
        merged = []
        for a, b, *_ in sorted(ivs):
            if merged and a <= merged[-1][1] + 1: merged[-1][1] = max(merged[-1][1], b)
            else: merged.append([a, b])
        total = round(sum(b - a + 1 for a, b in merged) / 12, 1)
    if not r["rights"]:
        flags.append("简历没写工作权利，请顾问直接问本人，不要按姓名或学校去猜")
        issues.append({"file": f"{r['id']}.{r['ext']}", "type": "工作权利未写明", "detail": "表里填「未写明」"})
    for c in r["certs"]:
        m = re.search(r"(\d{4})-(\d{2})", c)
        if m and int(m.group(1)) * 12 + int(m.group(2)) < AS_OF[0] * 12 + AS_OF[1]:
            flags.append(f"证书写的有效期已过（{m.group(0)}），请问本人是否已续")
            issues.append({"file": f"{r['id']}.{r['ext']}", "type": "证书已过期", "detail": c})
    ph = norm_phone(r["phone"])
    recent = sorted(r["jobs"], key=lambda j: (j[3] in ("至今", "present"), j[2]), reverse=True)[0]
    rows.append({"candidate_id": r["id"], "source_file": f"{r['id']}.{r['ext']}", "full_name": r["name"], "email": r["email"],
                 "phone": ph, "location": r["loc"], "work_rights_as_stated": r["rights"] or "未写明",
                 "total_experience_years": "" if total is None else f"{total:.1f}",
                 "most_recent_title": recent[0], "most_recent_employer": recent[1],
                 "key_skills": "; ".join(r["skills"]), "certifications": "; ".join(r["certs"]),
                 "availability": r["avail"], "record_status": "保留", "needs_check": " / ".join(flags),
                 "_updated": r.get("updated", "")})
    by_phone.setdefault(ph, []).append(rows[-1])

for ph, group in by_phone.items():
    if len(group) < 2: continue
    keep = max(group, key=lambda x: x["_updated"])
    for g in group:
        if g is keep:
            g["needs_check"] = " / ".join(x for x in [g["needs_check"], f"同一电话有 {len(group)} 份简历，保留更新日期最新的这份"] if x)
        else:
            g["record_status"] = f"重复，已合并到 {keep['candidate_id']}"
            g["needs_check"] = f"与 {keep['candidate_id']} 电话相同（{ph}），邮箱不同；{keep['candidate_id']} 更新于 {keep['_updated']}，以 {keep['candidate_id']} 为准"
            issues.append({"file": g["source_file"], "type": "重复候选人", "detail": f"与 {keep['source_file']} 是同一人，保留 {keep['source_file']}"})
for r in rows: r.pop("_updated")

PROTECTED_PLANTED = {r["id"]: r["extra"] for r in RES if r["extra"]}
with open(P / "expected/candidates.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
exp = {"resumes_in_folder": len(RES), "unique_candidates": sum(r["record_status"] == "保留" for r in rows),
       "duplicates": [r["candidate_id"] for r in rows if r["record_status"] != "保留"],
       "experience_years": {r["candidate_id"]: r["total_experience_years"] or None for r in rows},
       "work_rights_not_stated": [r["candidate_id"] for r in rows if r["work_rights_as_stated"] == "未写明"],
       "issues": issues,
       "protected_info_planted_must_not_appear": PROTECTED_PLANTED,
       "rules": {"experience": "按月计算，「至今 / present」按 2026-11；重叠月份只算一次；只写年份的不算总年限，标需核对",
                 "phone": "统一成 04xx xxx xxx，+61 开头去掉国家码；用电话判断重复",
                 "duplicate": "同一电话保留简历更新日期最新的一份",
                 "work_rights": "照抄简历原话，不下结论；没写就填「未写明」"}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps({k: exp[k] for k in ("unique_candidates", "duplicates", "experience_years", "work_rights_not_stated")}, ensure_ascii=False))
for i in issues: print(i)
