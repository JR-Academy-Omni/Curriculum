#!/usr/bin/env python3
"""p47 teaching data + expected answer (deterministic).
Invented Sydney coffee-machine leasing company; one day of inbound leads plus saved company-page snapshots.
Dedupe, CRM match, do-not-contact, service-area check, rubric score and grade are rule-computed here.
Background facts (what a reader would pull from each saved page) and follow-up drafts are hand-written reference outputs."""
import csv, json, pathlib, random
from collections import Counter

R = random.Random(20261147)
P = pathlib.Path(__file__).resolve().parents[1] / "p47-sales-lead-agent"
(P / "data/company-files").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)

SERVICE_POSTCODES = (2000, 2234)  # 教学假设：悉尼都市区
DECISION_ROLES = {"Owner", "Office Manager", "Operations Manager", "Director", "CEO", "Practice Manager", "Founder"}

# lead_id, name, company, email, phone, role, company_type, employees, cups_per_day, postcode, timeline, consent, source, message
LEADS = [
    ("L01", "Rachel Kim", "Harbour Legal", "rachel.kim@harbourlegal.example", "0413 100 000", "Office Manager", "办公室", 45, "", 2000, "本月", "yes", "官网表单",
     "我们 3 楼办公室想把胶囊机换掉，要能做奶咖，每天大概 80 杯。能不能先来看看场地？"),
    ("L02", "Tom Ellis", "Bean There Café", "tom@beanthere.example", "0413 101 000", "Owner", "咖啡馆", "", 180, 2042, "三个月内", "yes", "官网表单",
     "现在用的半自动机老出问题，想了解租赁和保养方案。"),
    ("L03", "Priya Shah", "BrightPath Accounting", "priya.shah@brightpath.example", "0413 102 000", "Finance Manager", "办公室", 60, "", 2150, "三个月内", "yes", "官网表单",
     "想比较一下租和买哪个划算，需要一份方案。"),
    ("L04", "Leo Martin", "Kumo Design Studio", "leo@kumodesign.example", "0413 103 000", "Designer", "办公室", 12, "", 2010, "只是了解", "no", "官网表单",
     "租一台大概多少钱一个月？"),
    ("L05", "Ben Carter", "Greenline Logistics", "ben.carter@greenline.example", "0413 104 000", "Operations Manager", "办公室", 80, "", 2019, "本月", "yes", "官网表单",
     "仓库休息区也想加一台，能不能一起报价？"),
    ("L06", "Dr Anna Wong", "Sunrise Physio", "anna@sunrisephysio.example", "0413 105 000", "Owner", "办公室", 9, "", 2067, "本月", "yes", "官网表单",
     "等候区想放一台给病人用，要简单好清洁的。"),
    ("L07", "Mark Lee", "Atlas Engineering", "mark.lee@atlaseng.example", "0413 106 000", "Office Manager", "办公室", 35, "", 2113, "三个月内", "yes", "官网表单",
     "明年初新办公室装修，想把咖啡机一起规划进去。"),
    ("L08", "Sophie Tran", "Little Fern Café", "sophie@littlefern.example", "0413 107 000", "Owner", "咖啡馆", "", 60, 2204, "本月", "yes", "官网表单",
     "小店刚开半年，想问问咖啡豆订阅和机器租赁能不能一起。"),
    ("L09", "Chris Doyle", "Orbit Media", "chris@orbitmedia.example", "0413 108 000", "Director", "办公室", 30, "", 2009, "", "", "展会名单导入", ""),
    ("L10", "Jake Moss", "Westside Gym", "jake@westsidegym.example", "0413 109 000", "Gym Manager", "其他", 15, "", 2135, "只是了解", "yes", "官网表单",
     "看看你们有什么方案"),
    ("L11", "Helen Park", "Coastal Dental", "helen@coastaldental.example", "0413 110 000", "Practice Manager", "办公室", 25, "", 2300, "本月", "yes", "官网表单",
     "我们在 Newcastle，能租吗？"),
    ("L12", "Growth Team", "RankUp SEO", "growth@rankup-seo.example", "0413 111 000", "Sales", "其他", 5, "", 2000, "本月", "yes", "官网表单",
     "Hi, we can get your coffee business to #1 on Google in 30 days. Book a call?"),
    ("L13", "Daniel Ho", "Pinnacle Finance", "daniel.ho@pinnaclefin.example", "0413 112 000", "CEO", "办公室", 150, "", 2000, "本月", "yes", "官网表单",
     "两层办公室，想要两台全自动，下周能来看吗？"),
    ("L14", "Ming Zhao", "", "mingzhao.job@mail.example", "0413 113 000", "", "其他", "", "", 2140, "", "yes", "官网表单",
     "你好，我想应聘咖啡机维修技师，有 5 年经验。"),
    ("L15", "Tom Ellis", "Bean There Café", "tom@beanthere.example", "0413 101 000", "Owner", "咖啡馆", "", 180, 2042, "三个月内", "yes", "官网表单",
     "补充一下：最好下周能来店里看看，我们周一休息。"),
    ("L16", "Ella Ford", "Daily Grind Café", "ella@dailygrind.example", "0413 114 000", "Barista", "咖啡馆", "", 120, 2026, "三个月内", "yes", "官网表单",
     "老板让我先问问，你们的机器一天能出多少杯？"),
]
FIELDS = ["lead_id", "name", "company", "email", "phone", "role", "company_type", "employees", "cups_per_day", "postcode",
          "timeline", "consent_marketing", "source", "message"]
rows = []
for i, l in enumerate(LEADS):
    r = dict(zip(FIELDS, l)); hh = 7 + i // 2; mm = R.choice([4, 11, 19, 26, 33, 38, 45, 52])
    if r["lead_id"] == "L15": hh, mm = 8, 41
    if r["lead_id"] == "L02": hh, mm = 8, 19
    r["submitted_at"] = f"2026-11-11 {hh:02d}:{mm:02d}"
    rows.append(r)
with open(P / "data/leads-2026-11-11.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=["submitted_at"] + FIELDS); w.writeheader(); w.writerows(rows)

CRM = [("D-118", "Greenline Logistics", "greenline.example", "Nick", "报价已发，等对方确认", "2026-11-04"),
       ("D-102", "Harbourview Hotel", "harbourviewhotel.example", "Nick", "已签约（老客户）", "2026-06-18")]
with open(P / "data/crm-open-deals.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["deal_id", "company", "email_domain", "owner", "stage", "last_activity"]); w.writerows(CRM)
DNC = [("chris@orbitmedia.example", "2026-08-02", "邮件里点了退订"), ("info@cafebloom.example", "2026-05-19", "电话里要求不要再联系")]
with open(P / "data/do-not-contact.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["email", "added_at", "reason"]); w.writerows(DNC)

PAGES = {  # lead_id: (company, saved_at, html body paragraphs)
    "L01": ("Harbour Legal", "2026-11-10", ["About us: a commercial law firm in the Sydney CBD.",
            "News (Oct 2026): We have moved to our new Level 3 office at 1 Example Street, Sydney, and are hiring six more lawyers.",
            "Partners: Grace Lin (grace.lin@harbourlegal.example), Paul Reed."]),
    "L02": ("Bean There Café", "2026-11-09", ["Specialty coffee in Newtown since 2019.", "Coming soon: our second store in Enmore opens this December."]),
    "L03": ("BrightPath Accounting", "2024-05-02", ["BrightPath is a team of 15 accountants in Parramatta.", "Services: tax, bookkeeping, advisory."]),
    "L06": ("Sunrise Physio", "2026-11-08", ["Sunrise Physio Chatswood — 9 practitioners.",
            "Practice update: our current coffee machine lease with another supplier runs until June 2027."]),
    "L08": ("Little Fern Café", "2026-11-05", ["A small neighbourhood café in Marrickville, opened May 2026.", "Open 7am–2pm, six days a week."]),
    "L13": ("Pinnacle Finance", "2026-11-10", ["Pinnacle Finance — two floors at 200 Example Road, Sydney.",
            "Media release (Oct 2026): Pinnacle announces restructure, reducing headcount by about 20%."]),
    "L16": ("Daily Grind Café", "2026-11-07", ["Bondi beach café, breakfast and brunch.", "Owner: Mia Ford."]),
}
for lid, (co, saved, paras) in PAGES.items():
    body = "\n".join(f"  <p>{p}</p>" for p in paras)
    html = (f"<!doctype html>\n<html lang=\"en\"><head><meta charset=\"utf-8\"><title>{co}</title></head>\n<body>\n"
            f"  <!-- 网页快照，保存于 {saved}；练习数据，公司是为这个练习设计的 -->\n  <h1>{co}</h1>\n{body}\n</body></html>\n")
    (P / "data/company-files" / f"{lid}.html").write_text(html, encoding="utf-8")

RUBRIC = """# 晴川咖啡设备 · 线索打分与跟进规则（练习数据，规则是这家公司自己定的）

## 先挡掉，不打分
1. 推销、合作邀约、求职：不是客户线索。求职转给 Mandy，Agent 不回复。
2. 同一个邮箱当天重复提交：合并成一条，以最早那条为准，后面的留言追加进去。
3. 邮箱域名跟 crm-open-deals.csv 里的在办商机一样：不新建线索，把留言追加到那个商机，通知商机负责人。
4. 邮箱在 do-not-contact.csv 里：不联系、不起草，只记录。
5. 不是客户自己提交的（展会名单导入、买来的名单）：没有营销同意，不进跟进。

## 打分（满分 100，超过按 100 算）
| 项目 | 规则 | 分数 |
|---|---|---|
| 规模（办公室） | 员工 ≥ 50 / 20–49 / 10–19 / < 10 | 25 / 18 / 10 / 3 |
| 规模（咖啡馆） | 每天杯数 ≥ 150 / 80–149 / < 80 | 25 / 18 / 8 |
| 规模（其他类型） | 一律 | 5 |
| 服务区 | postcode 2000–2234（教学假设：悉尼都市区） | 20 / 区域外 0 |
| 时间 | 本月 / 三个月内 / 只是了解 | 20 / 12 / 4 |
| 角色 | Owner、Office Manager、Operations Manager、Director、CEO、Practice Manager、Founder 算决策人 | 15 / 其他 5 |
| 背景：扩张信号 | 公司资料里写了新办公室、新店、在招人 | +10 |
| 背景：现有合同未到期 | 公司资料里写了现有咖啡机合同还有 6 个月以上 | −10 |

背景分只能来自 `company-files/` 里的网页快照。没有快照的写「背景资料不足」，背景分按 0，不猜。快照日期超过 12 个月的，跟表单对不上时以表单为准，并标出来。

## 分级和跟进
- A（≥ 70）：Nick 24 小时内联系，可以约看场地。
- B（40–69）：本周内回复，给方案资料。
- C（< 40）：不安排销售跟进。
- 服务区外：不管多少分都按 C，礼貌说明暂时不服务这个区域。
- 每个真实提交表单的人，都回一封针对他问题的邮件（他自己问的）；只有 consent_marketing = yes 的 A / B 才能进后续营销跟进。

## 红线
- 只发到对方在表单里留的邮箱。快照里出现的其他人邮箱（合伙人、老板），不用、不存。
- 不上网搜、不爬对方网站、不查 LinkedIn。背景只看给的文件。
- 不报 offer-sheet.md 以外的价格，不承诺折扣、免费期以外的优惠。
- 邮件里不提对方公司的负面新闻（裁员、诉讼之类），也不说「我看了你们的网站」这种让人不舒服的话。
- 所有邮件都是草稿，Nick 批准后才发。
"""
(P / "data/scoring-rubric.md").write_text(RUBRIC, encoding="utf-8")
OFFER = """# 晴川咖啡设备 · 可以对外说的方案和价格（练习数据，价格是教学假设，不含 GST）

- 办公室方案：全自动咖啡机租赁，每月 189 元起（适合每天 30–120 杯），含季度保养和上门维修。
- 双机或大办公室方案：每月 349 元起，需要看场地后报价。
- 咖啡馆方案：商用半自动双头机租赁，每月 329 元起，含每月保养、48 小时内上门维修。
- 咖啡豆订阅：每公斤 38 元起，每周或每两周送。租机客户可以合并到一张账单。
- 20 人以上的办公室可以免费试用 2 周（以合同为准）。
- 服务区：悉尼都市区（postcode 2000–2234），区域外暂不提供上门服务。
- 机器出杯量：办公室全自动机每天建议 120 杯以内；咖啡馆双头机高峰每小时可做 120 杯左右，实际取决于咖啡师和出品。
"""
(P / "data/offer-sheet.md").write_text(OFFER, encoding="utf-8")

# ---- hand-written background facts (what a careful reader takes from each saved page) ----
BG = {
    "L01": {"facts": "10 月搬进 3 楼新办公室，在招 6 名律师", "expansion": True, "contract_locked": False, "other_flags": "快照里有合伙人邮箱，不用"},
    "L02": {"facts": "Newtown 开了 7 年，12 月在 Enmore 开第二家店", "expansion": True, "contract_locked": False, "other_flags": ""},
    "L03": {"facts": "快照是 2024-05 的，写团队 15 人；表单写 60 人", "expansion": False, "contract_locked": False, "other_flags": "快照超过 12 个月且人数对不上，以表单为准，请 Nick 确认"},
    "L06": {"facts": "9 位治疗师；现有咖啡机租约到 2027 年 6 月", "expansion": False, "contract_locked": True, "other_flags": ""},
    "L08": {"facts": "2026 年 5 月开业的社区小店，营业 7am–2pm", "expansion": False, "contract_locked": False, "other_flags": ""},
    "L13": {"facts": "两层办公室；10 月宣布重组，裁员约 20%", "expansion": False, "contract_locked": False, "other_flags": "有裁员新闻，邮件里不提；规模分按表单 150 人"},
    "L16": {"facts": "Bondi 早午餐咖啡馆，老板是 Mia Ford", "expansion": False, "contract_locked": False, "other_flags": "提交人是咖啡师，不是决策人；不直接联系老板"},
}

# ---- rule-computed ----
crm_by_domain = {c[2]: c for c in CRM}
dnc = {d[0] for d in DNC}
first_by_email, merged = {}, {}
for r in sorted(rows, key=lambda x: x["submitted_at"]):
    if r["email"] in first_by_email: merged[r["lead_id"]] = first_by_email[r["email"]]
    else: first_by_email[r["email"]] = r["lead_id"]
SPAM, JOB = {"L12"}, {"L14"}


def size_pts(r):
    if r["company_type"] == "办公室":
        e = int(r["employees"]); return 25 if e >= 50 else 18 if e >= 20 else 10 if e >= 10 else 3
    if r["company_type"] == "咖啡馆":
        c = int(r["cups_per_day"]); return 25 if c >= 150 else 18 if c >= 80 else 8
    return 5


results = []
for r in rows:
    lid = r["lead_id"]; dom = r["email"].split("@")[1]
    out = {"lead_id": lid, "company": r["company"], "status": "", "score": None, "grade": "", "breakdown": {}, "flags": []}
    if lid in SPAM: out["status"] = "排除：推销"; results.append(out); continue
    if lid in JOB: out["status"] = "排除：求职，转 Mandy"; results.append(out); continue
    if lid in merged: out["status"] = f"合并到 {merged[lid]}（同一邮箱重复提交）"; results.append(out); continue
    if dom in crm_by_domain:
        c = crm_by_domain[dom]; out["status"] = f"并入在办商机 {c[0]}，通知 {c[3]}"; results.append(out); continue
    if r["email"] in dnc: out["status"] = "不联系：在 do-not-contact 名单"; results.append(out); continue
    if r["source"] != "官网表单": out["status"] = "不跟进：非本人提交、无营销同意"; results.append(out); continue
    pc = int(r["postcode"]); in_area = SERVICE_POSTCODES[0] <= pc <= SERVICE_POSTCODES[1]
    b = {"规模": size_pts(r), "服务区": 20 if in_area else 0, "时间": {"本月": 20, "三个月内": 12, "只是了解": 4}[r["timeline"]],
         "角色": 15 if r["role"] in DECISION_ROLES else 5}
    bg = BG.get(lid)
    if bg is None: out["flags"].append("背景资料不足（没有公司快照）")
    else:
        if bg["expansion"]: b["背景：扩张"] = 10
        if bg["contract_locked"]: b["背景：现有合同未到期"] = -10; out["flags"].append("现有合同到 2027-06，跟进时机请 Nick 判断")
        if bg["other_flags"]: out["flags"].append(bg["other_flags"])
    s = min(100, sum(b.values()))
    g = "A" if s >= 70 else "B" if s >= 40 else "C"
    if not in_area: g = "C"; out["flags"].append(f"服务区外（postcode {pc}）")
    if r["consent_marketing"] != "yes": out["flags"].append("没有营销同意：只回复这次的问题，不进后续跟进")
    out.update(status="打分", score=s, grade=g, breakdown=b,
               nurture=(r["consent_marketing"] == "yes" and g in ("A", "B")))
    results.append(out)

DRAFTS = {
    "L01": "Rachel 你好，谢谢联系晴川。每天 80 杯左右、要做奶咖，我们的办公室全自动机正合适，每月 189 元起，含季度保养和上门维修；你们 20 人以上，还可以先免费试用 2 周。这周我可以上来看一下 3 楼的位置和水电，你看周三或周四哪个时间方便？—— Nick，晴川咖啡设备",
    "L02": "Tom 你好，谢谢留言，两次的信息我都收到了。咖啡馆方案是商用半自动双头机，每月 329 元起，含每月保养、48 小时内上门维修，正好解决机器老出问题的麻烦。你说周一休息，那我下周二到周五找一天上午去店里看看，你看哪天合适？—— Nick，晴川咖啡设备",
    "L03": "Priya 你好，谢谢联系。租和买怎么选，主要看你们每天的杯数和想不想自己管维修。我们办公室方案每月 189 元起，含保养和维修；60 人左右的办公室通常要看场地后定是一台还是两台。我整理一份租和买的对比给你，方便的话也告诉我现在每天大概多少杯。—— Nick，晴川咖啡设备",
    "L04": "Leo 你好，办公室全自动咖啡机租赁每月 189 元起（不含 GST），含季度保养和上门维修，适合每天 30–120 杯。具体要看杯数和场地，有需要随时回这封邮件就行。—— 晴川咖啡设备",
    "L06": "Anna 你好，谢谢联系。等候区给病人用的话，全自动机一键出杯、清洁也简单，每月 189 元起，含季度保养和上门维修。不急着换也没关系，可以先了解，等你们觉得时机合适再定。需要的话我把机型资料发你。—— Nick，晴川咖啡设备",
    "L07": "Mark 你好，新办公室装修时一起规划咖啡机是对的，水电和排水位置提前留好会省很多事。我们办公室方案每月 189 元起，35 人左右一般一台全自动就够。等你们有了平面图，我可以帮忙看一下放哪里合适。—— Nick，晴川咖啡设备",
    "L08": "Sophie 你好，可以一起的：咖啡馆方案的半自动双头机每月 329 元起，咖啡豆订阅每公斤 38 元起，租机客户可以合并成一张账单。小店刚起步，我可以按你们现在的杯数推荐豆子的送货频率。方便的话告诉我一周大概用几公斤豆。—— Nick，晴川咖啡设备",
    "L10": "Jake 你好，谢谢联系。办公室和休息区一般用全自动机，每月 189 元起，含季度保养和上门维修。健身房的用法比较特别，要是想进一步了解，告诉我会员每天大概会用多少杯就行。—— 晴川咖啡设备",
    "L11": "Helen 你好，谢谢联系晴川。抱歉，我们现在只在悉尼都市区提供上门安装和维修，暂时还覆盖不到 Newcastle。以后服务区扩大，我们会在官网更新。—— 晴川咖啡设备",
    "L13": "Daniel 你好，谢谢联系。两层办公室各放一台全自动机是很常见的做法，双机方案每月 349 元起，需要看场地后报价；你们 20 人以上，也可以先免费试用 2 周。下周我可以过去看场地，你看周二或周三哪个时间方便？—— Nick，晴川咖啡设备",
    "L16": "Ella 你好，谢谢帮老板问。我们的咖啡馆双头机高峰每小时能做 120 杯左右，具体还要看咖啡师和出品。方案是每月 329 元起，含每月保养和 48 小时内上门维修。如果老板想详细聊，回这封邮件约个时间就行。—— Nick，晴川咖啡设备",
}
by_id = {r["lead_id"]: r for r in rows}
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["lead_id", "company", "status", "score", "grade", "breakdown", "background_facts", "flags", "nurture", "send_to", "draft_email"])
    for o in results:
        lid = o["lead_id"]
        w.writerow([lid, o["company"], o["status"], "" if o["score"] is None else o["score"], o["grade"],
                    "；".join(f"{k} {v:+d}" if k.startswith("背景") else f"{k} {v}" for k, v in o["breakdown"].items()),
                    BG.get(lid, {}).get("facts", "") if o["status"] == "打分" else "", "；".join(o["flags"]),
                    {True: "是", False: "否"}.get(o.get("nurture"), ""), by_id[lid]["email"] if lid in DRAFTS else "", DRAFTS.get(lid, "")])
assert set(DRAFTS) == {o["lead_id"] for o in results if o["status"] == "打分"}

scored = [o for o in results if o["status"] == "打分"]
exp = {"leads_in_file": len(rows), "scored": len(scored), "not_scored": {o["lead_id"]: o["status"] for o in results if o["status"] != "打分"},
       "grades": dict(sorted(Counter(o["grade"] for o in scored).items())),
       "ranked": [{"lead_id": o["lead_id"], "company": o["company"], "score": o["score"], "grade": o["grade"], "flags": o["flags"]}
                  for o in sorted(scored, key=lambda x: (-x["score"], x["lead_id"]))],
       "breakdowns": {o["lead_id"]: o["breakdown"] for o in scored},
       "drafts": len(DRAFTS), "nurture_eligible": [o["lead_id"] for o in scored if o["nurture"]],
       "crm_updates": [{"deal_id": "D-118", "append_from": "L05", "notify": "Nick"}],
       "rules": {"score": "见 scoring-rubric.md；背景分只来自 company-files", "grade": "A ≥ 70，B 40–69，C < 40；服务区外一律 C"}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps({k: exp[k] for k in ("leads_in_file", "scored", "not_scored", "grades", "nurture_eligible")}, ensure_ascii=False, indent=1))
for x in exp["ranked"]: print(x["lead_id"], x["company"], x["score"], x["grade"], exp["breakdowns"][x["lead_id"]], x["flags"])
