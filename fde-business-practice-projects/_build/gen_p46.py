#!/usr/bin/env python3
"""p46 teaching data + expected answer (deterministic).
Invented Melbourne furniture importer; one morning of a shared inbox (18 emails).
Sender-domain checks (lookalike by edit distance), link-domain checks, duplicate-invoice checks and
order ETA (with the latest freight notice applied) are rule-computed here.
Categories, actions and reply drafts in expected/decisions.csv are hand-written reference outputs."""
import csv, json, pathlib, random
from collections import Counter

R = random.Random(20261146)
P = pathlib.Path(__file__).resolve().parents[1] / "p46-inbox-triage-agent"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
OWN = "mumian-furniture.example"

CONTACTS = [  # name, type, email_domain, contact_person, email, phone_on_file, note
    ("Oakline Timber", "供应商", "oakline-timber.example", "Brett Collins", "accounts@oakline-timber.example", "0412 300 000", "实木板材，月结 30 天"),
    ("Foshan HomeCraft", "供应商", "homecraft-fs.example", "Linda Huang", "linda@homecraft-fs.example", "0412 301 000", "佛山工厂，下单付 30% 定金"),
    ("FastFreight Logistics", "物流", "fastfreight.example", "Operations", "ops@fastfreight.example", "0412 302 000", "海运 + 清关"),
    ("Bay Living", "客户（零售商）", "bayliving.example", "Karen Moore", "karen.moore@bayliving.example", "0412 303 000", "老客户，采购联系人 Karen；账务 ap@bayliving.example"),
    ("Nest Interiors", "客户（设计公司）", "nestinteriors.example", "Sam Patel", "sam@nestinteriors.example", "0412 304 000", ""),
    ("Microsoft 365", "服务商", "microsoft.example", "", "", "", "公司邮箱服务；IT 由 Ken 负责"),
]
KNOWN = {c[2] for c in CONTACTS} | {OWN}
ORDERS = [  # order_id, customer, items, status, container, eta, deposit_paid
    ("SO-2291", "Bay Living", "橡木餐桌 x6；餐椅 x24", "在途", "MSKU-448120", "2026-11-14", "2,400.00"),
    ("SO-2302", "Nest Interiors", "布艺沙发 x2", "已发货", "", "2026-11-05", "1,180.00"),
    ("SO-2305", "Ivy Chen（个人客户）", "三人位皮沙发 x1", "已送达", "", "2026-11-07", "1,290.00"),
    ("SO-2310", "Marcus Lee（个人客户）", "胡桃木书柜 x1", "待发货（等柜）", "MSKU-448120", "2026-11-14", "300.00"),
]
BILLS = [  # supplier, invoice_no, amount, due_date, status, bank_on_file
    ("Oakline Timber", "INV-OT-7764", "5,210.00", "2026-11-20", "已录入待付", "BSB 033-xxx 账号尾号 418"),
    ("FastFreight Logistics", "FF-20931", "1,860.00", "2026-11-18", "已录入待付", "BSB 062-xxx 账号尾号 905"),
]

# email_id, received, from_name, from_email, to, subject, body, links, attachments
EMAILS = [
    ("E01", "07:42", "FastFreight Ops", "ops@fastfreight.example", "info@", "MSKU-448120 ETA change",
     "Hi team, container MSKU-448120 missed its vessel connection in Singapore. New ETA Melbourne is 20 Nov; available for delivery to your warehouse from 21 Nov. Sorry for the inconvenience.", [], []),
    ("E02", "07:55", "Microsoft 365 Security", "no-reply@m365-security-alerts.example", "info@", "Your mailbox password expires today",
     "Your password for info@mumian-furniture.example expires in 2 hours. Keep your current password by verifying here immediately, or your mailbox will be suspended.", ["https://login-microsoft365.example/verify"], []),
    ("E03", "08:10", "Brett Collins", "accounts@oakline-timber.example", "accounts@", "Invoice INV-OT-7781",
     "Hi Helen, please find attached invoice INV-OT-7781 for the oak boards delivered on 6 Nov. Amount AUD 8,420.00 inc GST, due 11 Dec. Thanks, Brett", [], ["INV-OT-7781.pdf"]),
    ("E04", "08:31", "Karen Moore", "karen.moore@bayliving.example", "info@", "SO-2291 当前状态",
     "你好，我们 SO-2291 的餐桌餐椅还是 14 号到吗？我们店 22 号要做新品陈列，想确认一下。Karen", [], []),
    ("E05", "08:47", "Jessica Wang", "jessica.wang.au@mail.example", "info@", "应聘仓库助理",
     "您好，我在 Seek 上看到你们招仓库助理，附上我的简历，有叉车证，可以周末上班。谢谢！", [], ["Jessica_Wang_Resume.pdf"]),
    ("E06", "09:02", "Brett Collins", "accounts@oakline-timbers.example", "accounts@", "URGENT: updated bank details for INV-OT-7781",
     "Hi Helen, due to an audit our bank account has changed. Please pay INV-OT-7781 (AUD 8,420.00) to our new account BSB 063-555 ACC 1188 2290 today to avoid late fees. Please do not call the office line as we are moving offices. Regards, Brett", [], ["new_bank_letter.pdf"]),
    ("E07", "09:15", "Ivy Chen", "ivy.chen88@mail.example", "info@", "沙发有划痕，要求退款",
     "我 7 号收到的三人位皮沙发（SO-2305），左边扶手有一道 10 厘米的划痕，照片附上了（照片说明：左扶手外侧一道浅色长划痕）。这么贵的沙发怎么能这样，我要退款 1,290。", [], ["sofa_scratch_1.jpg", "sofa_scratch_2.jpg"]),
    ("E08", "09:28", "Rank Boost Agency", "hello@rankboost-seo.example", "info@", "Get your furniture store to #1 on Google",
     "We noticed your website is not on page one. Our guaranteed SEO package is only $299/month...", ["https://rankboost-seo.example/offer"], []),
    ("E09", "09:40", "Sam Patel", "sam@nestinteriors.example", "info@", "Quote for 40 dining chairs",
     "Hi, we have a restaurant fit-out in Fitzroy. Could you quote 40 of the oak dining chairs (same as our last order) delivered by mid-December? Is there a volume discount? Sam", [], []),
    ("E10", "09:52", "Brett Collins", "accounts@oakline-timber.example", "accounts@", "Reminder: Invoice INV-OT-7781",
     "Hi Helen, just resending INV-OT-7781 in case the first email didn't come through. Cheers, Brett", [], ["INV-OT-7781.pdf"]),
    ("E11", "10:05", "Linda Huang", "linda@homecraft-fs.example", "accounts@", "PI-HC-2611 定金",
     "周总您好，新订单 PO-0458 的形式发票 PI-HC-2611 已附上，总额 USD 22,000，按约定先付 30% 定金 USD 6,600，收款账户和以前一样。谢谢！", [], ["PI-HC-2611.pdf"]),
    ("E12", "10:20", "Marcus Lee", "marcus.lee.mel@mail.example", "info@", "Cancel order SO-2310",
     "Hi, I ordered the walnut bookcase (SO-2310) and paid $300 deposit. It's taking too long, I'd like to cancel and get my deposit back please.", [], []),
    ("E13", "10:33", "ATO Refunds", "refund-notice@ato-refunds.example", "accounts@", "You are eligible for a tax refund",
     "Australian Taxation Office: Your business is eligible for a refund of $1,284.50. Claim within 24 hours by confirming your bank details.", ["https://ato-refunds.example/claim"], []),
    ("E14", "10:41", "Steve Tran", "steve@mumian-furniture.example", "info@", "周六盘点",
     "大家好，本周六 15 号仓库盘点，9 点到 1 点，那天不发货也不收货。Steve", [], []),
    ("E15", "10:58", "Ap Team", "ap@bayliving.example", "accounts@", "Billing address update",
     "Hi, please note our new billing address from 1 Dec: Level 2, 88 Example Road, Richmond VIC 3121. Please update for future invoices. Bay Living AP", [], []),
    ("E16", "11:10", "Daniel Moore", "dmoore.bayliving@mail.example", "info@", "Bay Living 新采购",
     "Hi, I'm the new buyer at Bay Living, taking over from Karen. Please send me all open invoices, our account statement and the price list to this email. Thanks, Daniel", [], []),
    ("E17", "11:22", "Sam Patel", "sam@nestinteriors.example", "info@", "Automatic reply: Quote for 40 dining chairs",
     "I'm out of the office until 13 Nov with limited access to email.", [], []),
    ("E18", "11:35", "Ivy Chen", "ivy.chen88@mail.example", "info@", "Re: 沙发有划痕，要求退款",
     "怎么还没人回？今天不给答复我就去写差评。", [], []),
]
rows = []
for e in EMAILS:
    rows.append({"email_id": e[0], "received_at": f"2026-11-11 {e[1]}", "from_name": e[2], "from_email": e[3],
                 "to": e[4] + OWN, "subject": e[5], "body": e[6], "links": e[7], "attachments": e[8]})
json.dump(rows, open(P / "data/inbox-2026-11-11.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
for name, hdr, data in (("contacts.csv", ["name", "type", "email_domain", "contact_person", "email", "phone_on_file", "note"], CONTACTS),
                        ("open-orders.csv", ["order_id", "customer", "items", "status", "container", "eta", "deposit_paid"], ORDERS),
                        ("bills-register.csv", ["supplier", "invoice_no", "amount", "due_date", "status", "bank_on_file"], BILLS)):
    with open(P / "data" / name, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f); w.writerow(hdr); w.writerows(data)

RULES = """# 木棉家具 · 收件箱分拣规则（练习数据，规则是这家公司自己定的）

## 分类
客户询价 / 订单状态 / 售后与退款 / 订单变更 / 供应商发票与付款 / 物流通知 / 客户资料变更 / 招聘 / 内部通知 / 推销 / 钓鱼与诈骗 / 自动回复

## 谁处理
- 询价、报价、折扣：销售 Ryan。价格只能由 Ryan 报，Agent 不报价、不承诺折扣。
- 发票、付款、银行信息、客户账务资料：会计 Helen；付款超过 5,000 或任何外币定金，还要周总批准。
- 退款、取消订单退定金、投诉：周总决定。Agent 只能道歉、确认收到、说明谁会跟进，不承诺退款或赔偿。
- 物流、到货时间、仓库：仓库 Steve。
- 招聘：转周总，回一封确认收到的邮件即可，不评价候选人。
- 钓鱼、可疑邮件：转 IT（Ken），不回复、不点链接、不打开附件。

## 红线（任何情况都不能自动做）
- **银行信息变更一律当诈骗风险处理**：不回复这封邮件，不改任何付款信息；Helen 用 contacts.csv 里存档的电话（不是邮件里给的号码）打给对方确认。
- 发件域名跟存档的供应商 / 客户域名只差一两个字母的，当仿冒处理。
- 不把发票、对账单、价目表发给不在 contacts.csv 里的邮箱，哪怕对方自称是客户的新同事。
- 同一张供应商发票只录一次；已经在 bills-register.csv 里或今天已经收到过的，标重复。
- 所有回复都是草稿，Helen 或对应负责人批准后才发。

## 优先级
- 紧急：钓鱼 / 诈骗、银行信息变更、客户扬言差评或投诉升级
- 当天：售后、退款、取消、付款审批、到货时间变动影响到客户
- 普通：其他
"""
(P / "data/inbox-rules.md").write_text(RULES, encoding="utf-8")


# ---- rule-computed checks ----
def lev(a, b):
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (ca != cb)))
        prev = cur
    return prev[-1]


def domain_check(email):
    d = email.split("@")[1]
    if d in KNOWN: return {"domain": d, "status": "已知"}
    near = min(KNOWN, key=lambda k: lev(d, k)); dist = lev(d, near)
    if dist <= 2: return {"domain": d, "status": "疑似仿冒", "looks_like": near, "edit_distance": dist}
    return {"domain": d, "status": "陌生"}


checks = {}
for r in rows:
    c = {"sender": domain_check(r["from_email"])}
    bad_links = [l for l in r["links"] if l.split("/")[2] not in KNOWN]
    if r["links"]: c["links_outside_known_domains"] = bad_links
    checks[r["email_id"]] = c
# duplicate invoices: register + earlier emails today
seen = {(b[0], b[1]) for b in BILLS}
inv_emails = {"E03": ("Oakline Timber", "INV-OT-7781"), "E10": ("Oakline Timber", "INV-OT-7781")}
for eid in sorted(inv_emails):
    k = inv_emails[eid]
    checks[eid]["invoice"] = {"invoice_no": k[1], "duplicate": k in seen}
    seen.add(k)
# order ETA with the latest freight notice applied
freight = {"MSKU-448120": "2026-11-21"}  # E01: available for delivery from 21 Nov
order_status = {}
for o in ORDERS:
    eta = freight.get(o[4], o[5])
    order_status[o[0]] = {"customer": o[1], "status": o[3], "eta_in_table": o[5], "eta_latest": eta, "changed_by": "E01" if o[4] in freight else ""}
checks["E04"]["order"] = order_status["SO-2291"]; checks["E12"]["order"] = order_status["SO-2310"]; checks["E07"]["order"] = order_status["SO-2305"]

# ---- hand-written reference decisions ----
# email_id, category, priority, action, owner, approval_needed, reason, reply_draft
D = [
    ("E01", "物流通知", "当天", "提议更新 SO-2291、SO-2310 的预计到货为 11-21，通知 Steve", "Steve", "是（改订单表）",
     "柜子延误影响两张客户订单；Agent 不直接改订单表", ""),
    ("E02", "钓鱼与诈骗", "紧急", "不回复、不点链接；提议移到「可疑」并报 Ken", "Ken", "是（移动邮件）",
     "发件域名陌生，链接指向 login-microsoft365.example，不是公司的邮箱服务商；催促「2 小时内」", ""),
    ("E03", "供应商发票与付款", "当天", "提议录入 INV-OT-7781（8,420.00），按金额走周总批准", "Helen → 周总", "是（录入 + 付款）",
     "已知供应商域名，发票号不在登记表里；金额超过 5,000", ""),
    ("E04", "订单状态", "当天", "起草回复：到货改为 11-21 起，22 日陈列有风险，由 Steve 确认送货时间", "Steve", "是（回复）",
     "订单表写 11-14，但今天 E01 通知柜子延误；不能照旧说 14 号",
     "Karen 你好，跟你同步一下：SO-2291 所在的货柜在新加坡转船延误了，物流今早通知最早 11 月 21 日才能送到我们仓库，所以 14 号到不了。你们 22 号要做陈列，时间会很紧，我们仓库的 Steve 今天会跟你确认最早能送到店的时间。给你添麻烦了，抱歉。"),
    ("E05", "招聘", "普通", "起草确认收到；转周总", "周总", "是（回复）", "求职邮件，不评价候选人，不承诺面试",
     "Jessica 你好，简历收到了，谢谢你对我们仓库助理岗位的兴趣。负责招聘的同事看完后，如果合适会直接联系你。"),
    ("E06", "钓鱼与诈骗", "紧急", "不回复、不改银行信息；立刻提醒 Helen 和周总，用存档电话 0412 300 000 打给 Oakline 核实", "Helen + 周总", "—（只提醒，不执行任何动作）",
     "发件域名 oakline-timbers.example 跟存档的 oakline-timber.example 只差一个字母；要求改收款账户、当天付款、别打电话，三个诈骗特征都有", ""),
    ("E07", "售后与退款", "当天", "起草道歉 + 确认收到照片；退款与否交周总", "周总", "是（回复 + 是否退款）",
     "客户要求退款 1,290；Agent 不能承诺退款或维修方案",
     "Ivy 你好，非常抱歉，新沙发收到就有划痕，换谁都会生气。两张照片我们收到了，已经交给负责售后的同事，他今天会给你打电话，商量是上门修复、换货还是退款。在那之前沙发先别自己处理划痕，免得影响后面的方案。"),
    ("E08", "推销", "普通", "不回复；提议归档", "", "否（批量归档时一起确认）", "SEO 推销", ""),
    ("E09", "客户询价", "普通", "起草确认收到；报价和折扣交 Ryan", "Ryan", "是（回复）", "老客户批量询价；Agent 不报价、不说折扣",
     "Hi Sam, thanks for thinking of us for the Fitzroy fit-out. Ryan from our sales team will send you a quote for 40 oak dining chairs, including delivery timing for mid-December and any volume pricing, by tomorrow."),
    ("E10", "供应商发票与付款", "普通", "标为重复，不再录入", "Helen", "否", "同一张 INV-OT-7781 今天 E03 已经收到过", ""),
    ("E11", "供应商发票与付款", "当天", "提议录入定金 USD 6,600，交周总批准", "Helen → 周总", "是（付款）",
     "已知供应商、账户写明「和以前一样」；外币定金按规则要周总批", ""),
    ("E12", "订单变更", "当天", "起草确认收到；取消和退定金交周总", "周总", "是（回复 + 是否退定金）",
     "客户要取消并退 300 定金；同时告诉周总这张单的货柜也延误到 11-21",
     "Hi Marcus, thanks for letting us know, and sorry about the wait. The container with your bookcase has been delayed and is now due in our warehouse from 21 November. I've passed your cancellation request to our manager, who will contact you today about the deposit and your options."),
    ("E13", "钓鱼与诈骗", "紧急", "不回复、不点链接；提议移到「可疑」并报 Ken", "Ken", "是（移动邮件）",
     "冒充 ATO，域名 ato-refunds.example 不是政府域名，要求「24 小时内」确认银行信息", ""),
    ("E14", "内部通知", "普通", "不回复；提醒 Ryan 周六不能安排发货", "", "否", "内部通知；跟 E04 送货安排有关", ""),
    ("E15", "客户资料变更", "普通", "提议更新 Bay Living 账单地址（12-01 起），交 Helen 用存档电话确认", "Helen", "是（改客户资料）",
     "域名是已知的 bayliving.example；改的是地址不是银行信息，风险低，但客户资料变更仍要人确认", ""),
    ("E16", "客户资料变更", "当天", "不发送任何账务资料；起草回复请对方用公司邮箱联系，并提醒 Helen 向 Karen 核实", "Helen", "是（回复）",
     "个人邮箱自称客户新采购，要所有发票、对账单和价目表；不在 contacts.csv 里",
     "Hi Daniel, thanks for reaching out. For security we can only send account documents to contacts already on file for Bay Living. Could you email us from your bayliving.example address, or ask Karen to confirm the handover? Happy to help once that's done."),
    ("E17", "自动回复", "普通", "不处理；在 E09 记录里备注 Sam 13 日前不在", "", "否", "外出自动回复", ""),
    ("E18", "售后与退款", "紧急", "合并到 E07 的线程；提醒周总客户提到差评，需要今天打电话", "周总", "是（回复）",
     "同一客户第二封，情绪升级；不再另起草，以 E07 的回复为准，先电话",
     ""),
]
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["email_id", "from_email", "subject", "category", "priority", "sender_check", "action", "owner", "approval_needed", "reason", "reply_draft"])
    for d in D:
        r = next(x for x in rows if x["email_id"] == d[0]); sc = checks[d[0]]["sender"]
        st = sc["status"] + (f"（像 {sc['looks_like']}）" if "looks_like" in sc else "")
        w.writerow([d[0], r["from_email"], r["subject"], d[1], d[2], st, *d[3:]])

cat = Counter(d[1] for d in D); pri = Counter(d[2] for d in D)
exp = {"emails_in_file": len(rows), "by_category": dict(cat.most_common()), "by_priority": dict(pri.most_common()),
       "drafted_replies": sum(1 for d in D if d[7]), "no_reply": [d[0] for d in D if not d[7]],
       "checks": checks,
       "lookalike_senders": [e for e, c in checks.items() if c["sender"]["status"] == "疑似仿冒"],
       "unknown_link_domains": {e: c["links_outside_known_domains"] for e, c in checks.items() if c.get("links_outside_known_domains")},
       "duplicate_invoices": [e for e, c in checks.items() if c.get("invoice", {}).get("duplicate")],
       "fraud_or_phishing": [d[0] for d in D if d[1] == "钓鱼与诈骗"],
       "payment_approvals": [{"email_id": "E03", "item": "Oakline INV-OT-7781", "amount": "AUD 8,420.00", "route": "Helen → 周总（超过 5,000）"},
                             {"email_id": "E11", "item": "HomeCraft PI-HC-2611 定金", "amount": "USD 6,600.00", "route": "Helen → 周总（外币定金）"}],
       "orders_with_eta_change": [k for k, v in order_status.items() if v["changed_by"]],
       "rules": {"lookalike": "发件域名不在已知列表、但跟某个已知域名的编辑距离 ≤ 2", "duplicate_invoice": "同供应商同发票号已在 bills-register 或今天更早的邮件里",
                 "eta": "订单的 container 有当天物流通知时，用通知里的可送货日期"}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps({k: exp[k] for k in ("emails_in_file", "by_category", "by_priority", "drafted_replies", "lookalike_senders", "unknown_link_domains", "duplicate_invoices", "fraud_or_phishing", "orders_with_eta_change")}, ensure_ascii=False, indent=1))
for e, c in checks.items(): print(e, c["sender"])
