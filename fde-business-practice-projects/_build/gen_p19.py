#!/usr/bin/env python3
"""p19 teaching data + expected answer (deterministic).
Fictional Sydney real-estate agency; three open homes on one Saturday; fictional visitors.
Dedupe / opt-out / colleague / missing-contact rules are all computed here."""
import csv, json, pathlib, random, re

R = random.Random(20261119)
P = pathlib.Path(__file__).resolve().parents[1] / "p19-realestate-open-home-leads"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)

PROPS = [
    ("H1", "12 Example Avenue, Epping", "4 卧独立屋", "10:00"),
    ("H2", "5/28 Sample Street, Eastwood", "2 卧公寓", "11:00"),
    ("H3", "7 Demo Close, Carlingford", "3 卧联排", "12:15"),
]
TEAM = [  # staff of the agency: name, role, email, mobile
    ("Sophie Chen", "销售经纪（本次看房负责人）", "sophie.chen@jiahe-realty.example", "0421 905 000"),
    ("Kevin Liu", "销售经纪", "kevin.liu@jiahe-realty.example", "0423 118 000"),
    ("Grace Ma", "行政", "grace.ma@jiahe-realty.example", "0438 260 000"),
]
HIGH_WORDS = ["合同", "出价", "contract", "offer"]

FIRST = ["Amy", "Ben", "Chloe", "David", "Emma", "Frank", "Helen", "Ivan", "Jason", "Karen", "Leo", "Mia", "Nick",
         "Olivia", "Ryan", "Sam", "Tina", "Vincent", "Wendy", "Yuki"]
LAST = ["Wong", "Lee", "Huang", "Lin", "Xu", "Ho", "Kim", "Patel", "Singh", "Smith", "Brown", "Zhao", "Sun", "Guo"]
ZH = {"张伟": "zhangwei", "刘洋": "liuyang", "陈静": "chenjing", "杨帆": "yangfan", "赵敏": "zhaomin",
      "周杰": "zhoujie", "吴倩": "wuqian", "孙浩": "sunhao", "马丽": "mali", "郭强": "guoqiang"}
PLANTED_NAMES = {"Jenny Zhang", "Jenny Chang", "Lei Wang", "Michael Tran", "Li Na", "Amanda Kerr", "Peter Nguyen", "Kevin L"}
used_names = set()
TYPES = ["自住", "自住", "自住", "投资", "首次置业", "投资"]
HEARD = ["realestate 网站", "domain 网站", "路过看到", "朋友介绍", "微信群"]
COMMENTS = ["", "", "", "", "想了解学区", "厨房有点小", "想知道物业费", "车位够吗", "周边噪音？", "考虑中"]

used_phone, used_mail = set(), set()


def phone():
    while True:
        p = f"04{R.randint(10, 99)} {R.randint(100, 999)} 000"
        if p not in used_phone: used_phone.add(p); return p


def mail(name):
    base = re.sub(r"[^a-z]", "", name.lower()) or "buyer"
    while True:
        m = f"{base}{R.randint(10, 99)}@mail.example"
        if m not in used_mail: used_mail.add(m); return m


for t in TEAM: used_phone.add(t[3])
rows = []


def add(pid, minute, name, ph, em, btype, heard, opt, comment):
    hh, mm = map(int, dict((p[0], p[3]) for p in PROPS)[pid].split(":"))
    mm += minute; hh += mm // 60; mm %= 60
    rows.append({"property_id": pid, "sign_in_time": f"2026-11-08 {hh:02d}:{mm:02d}", "name": name, "phone": ph,
                 "email": em, "buyer_type": btype, "how_heard": heard, "marketing_opt_in": opt, "comments": comment})


# ---- random ordinary visitors ----
counts = {"H1": 11, "H2": 9, "H3": 8}
for pid, n in counts.items():
    for _ in range(n):
        while True:
            name = R.choice(sorted(ZH)) if R.random() < 0.3 else f"{R.choice(FIRST)} {R.choice(LAST)}"
            if name not in used_names and name not in PLANTED_NAMES: used_names.add(name); break
        mode = R.random()
        ph = phone() if mode < 0.85 else ""
        em = mail(ZH.get(name, name)) if mode > 0.2 else ""
        if not ph and not em: ph = phone()
        add(pid, R.randint(0, 29), name, ph, em, R.choice(TYPES), R.choice(HEARD), "Y" if R.random() < 0.85 else "N",
            R.choice(COMMENTS))

# ---- planted cases ----
# D1 same person, different spelling, different phone format; second sign-in opted out
add("H1", 6, "Jenny Zhang", "0412 506 000", "jenny.z@mail.example", "自住", "domain 网站", "Y", "看了两次了，想要合同")
add("H3", 9, "Jenny Chang", "+61 412 506 000", "", "自住", "domain 网站", "N", "")
# D2 Chinese / pinyin name, email in different case
add("H1", 14, "王磊", "0433 201 000", "wanglei.syd@mail.example", "投资", "微信群", "Y", "")
add("H2", 12, "Lei Wang", "0433201000", "WangLei.Syd@Mail.example", "投资", "微信群", "Y", "回报率多少？")
# D3 QR scanned twice
add("H2", 4, "Michael Tran", "0415 772 000", "m.tran@mail.example", "首次置业", "realestate 网站", "Y", "")
add("H2", 6, "Michael Tran", "0415 772 000", "m.tran@mail.example", "首次置业", "realestate 网站", "Y", "")
# Trap: same name, different people (different phone and email) -> do NOT merge
add("H1", 20, "李娜", "0466 318 000", "lina.ep@mail.example", "自住", "朋友介绍", "Y", "")
add("H3", 3, "Li Na", "0471 640 000", "nali.work@mail.example", "投资", "realestate 网站", "Y", "")
# Missing contact
add("H2", 18, "Mr Zhou", "", "", "其他", "路过看到", "", "下次再来")
# Invalid phone but email ok
add("H3", 15, "Amanda Kerr", "0412 33", "amanda.k@mail.example", "自住", "domain 网站", "Y", "")
# Opt-outs
add("H1", 25, "Peter Nguyen", "0447 512 000", "pnguyen@mail.example", "投资", "realestate 网站", "N", "can I get the contract?")
add("H3", 21, "陈阿姨", "0402 889 000", "", "邻居", "路过看到", "N", "就住隔壁，看看卖多少")
# Colleague: own agency's sales agent, signed in with personal email but work mobile
add("H2", 22, "Kevin L", "0423118000", "kevinl88@mail.example", "其他", "", "Y", "")

rows.sort(key=lambda r: (r["property_id"], r["sign_in_time"]))
for i, r in enumerate(rows, 1): r["row_no"] = i
FIELDS = ["row_no", "property_id", "sign_in_time", "name", "phone", "email", "buyer_type", "how_heard", "marketing_opt_in", "comments"]
with open(P / "data/open-home-signins-2026-11-08.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=FIELDS); w.writeheader(); w.writerows(rows)
with open(P / "data/properties.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["property_id", "address", "type", "open_home_start"]); w.writerows(PROPS)
with open(P / "data/team-roster.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["name", "role", "email", "mobile"]); w.writerows(TEAM)


# ---- expected ----
def norm_phone(p):
    d = re.sub(r"\D", "", p or "")
    if d.startswith("61") and len(d) == 11: d = "0" + d[2:]
    return d if re.fullmatch(r"04\d{8}", d) else ""


def norm_mail(e): return (e or "").strip().lower()


team_phones = {norm_phone(t[3]) for t in TEAM}
team_mails = {t[2] for t in TEAM}
clients, decisions, review = [], [], []
by_phone, by_mail = {}, {}
for r in rows:
    ph, em = norm_phone(r["phone"]), norm_mail(r["email"])
    bad_phone = bool(r["phone"]) and not ph
    if (ph and ph in team_phones) or em in team_mails or em.endswith("@jiahe-realty.example"):
        decisions.append([r["row_no"], r["name"], "不进名单（公司同事）", "", "电话和公司花名册里的 Kevin Liu 一致，是自己同事来看房，不是客户"])
        review.append({"row_no": r["row_no"], "name": r["name"], "issue": "公司同事", "action": "不进客户名单，不发任何跟进"}); continue
    if not ph and not em:
        decisions.append([r["row_no"], r["name"], "不进名单（没有联系方式）", "", "电话和邮箱都没有，没法跟进；请 Sophie 回忆是否认识"])
        review.append({"row_no": r["row_no"], "name": r["name"], "issue": "没有联系方式", "action": "不进名单，请 Sophie 确认"}); continue
    c = (by_phone.get(ph) if ph else None) or (by_mail.get(em) if em else None)
    if c is None:
        c = {"client_id": f"C{len(clients) + 1:02d}", "name": r["name"], "aliases": [], "phone": ph, "email": em,
             "properties": [], "rows": [], "buyer_type": r["buyer_type"], "opt_in_values": [], "comments": [], "first_seen": r["sign_in_time"]}
        clients.append(c); how = "新客户"
    else:
        how = f"合并到 {c['client_id']}"
    if r["name"] != c["name"] and r["name"] not in c["aliases"]: c["aliases"].append(r["name"])
    if ph and not c["phone"]: c["phone"] = ph
    if em and not c["email"]: c["email"] = em
    if ph: by_phone[ph] = c
    if em: by_mail[em] = c
    if r["property_id"] not in c["properties"]: c["properties"].append(r["property_id"])
    c["rows"].append(r["row_no"]); c["opt_in_values"].append(r["marketing_opt_in"])
    if r["comments"]: c["comments"].append(r["comments"])
    note = []
    if bad_phone:
        note.append(f"电话「{r['phone']}」位数不对，只保留邮箱")
        review.append({"row_no": r["row_no"], "name": r["name"], "issue": "电话无效", "action": "进名单，只用邮箱联系；看房时可再问一次电话"})
    if how != "新客户": note.append("电话或邮箱和前面的登记一致，是同一个人")
    if r["marketing_opt_in"] != "Y": note.append("没有勾选接收营销信息")
    decisions.append([r["row_no"], r["name"], how, c["client_id"], "；".join(note) or "正常登记"])

# same-name-different-contact warning (hanzi vs pinyin handled by a tiny lookup used only for this check)
PINYIN = {"李娜": "li na", "王磊": "lei wang"}
def key(n): return PINYIN.get(n, " ".join(sorted(n.lower().split())))
seen = {}
for c in clients:
    k = key(c["name"]);
    if k in seen and seen[k] is not c:
        review.append({"row_no": c["rows"][0], "name": c["name"], "issue": "同名不同联系方式",
                       "action": f"和 {seen[k]['client_id']} {seen[k]['name']} 名字一样，但电话、邮箱都不同，按规则不合并，请 Sophie 看一眼"})
    seen.setdefault(k, c)

out = []
for c in clients:
    mk = all(v == "Y" for v in c["opt_in_values"])
    hi = len(c["properties"]) >= 2 or any(w in " ".join(c["comments"]).lower() for w in HIGH_WORDS)
    out.append({"client_id": c["client_id"], "name": c["name"], "other_spellings": c["aliases"],
                "phone": c["phone"], "email": c["email"], "properties_visited": c["properties"],
                "signin_rows": c["rows"], "buyer_type": c["buyer_type"], "marketing_ok": "是" if mk else "否",
                "priority": "高" if hi else ("低" if c["buyer_type"] == "邻居" else "普通"),
                "comments": "；".join(c["comments"])})
merged_rows = sum(len(c["rows"]) - 1 for c in clients)
exp = {
    "rows_in_file": len(rows), "rows_by_property": {p[0]: sum(r["property_id"] == p[0] for r in rows) for p in PROPS},
    "clients": len(out), "rows_merged_into_existing_client": merged_rows,
    "rows_excluded": len(rows) - len(out) - merged_rows,
    "marketing_ok_yes": sum(o["marketing_ok"] == "是" for o in out), "marketing_ok_no": sum(o["marketing_ok"] == "否" for o in out),
    "priority_high": [o["client_id"] + " " + o["name"] for o in out if o["priority"] == "高"],
    "visited_2_plus": [o["client_id"] + " " + o["name"] for o in out if len(o["properties_visited"]) >= 2],
    "needs_review": review, "client_list": out,
    "rules": {"same_person": "规范化后的手机号相同，或小写后的邮箱相同（只看名字不合并）",
              "phone_normalise": "去掉空格和符号，+61 开头改成 0，必须是 04 开头 10 位",
              "marketing_ok": "这个人所有登记都勾了 Y 才算「是」；任何一次 N 或空白都按「否」",
              "priority": "看了 2 套及以上，或备注里提到合同 / 出价 → 高；邻居 → 低；其他普通",
              "colleague": "电话或邮箱出现在 team-roster.csv，或邮箱是公司域名 → 不进名单"},
}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["row_no", "name", "decision", "client_id", "reason"]); w.writerows(decisions)
with open(P / "expected/client-list.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["client_id", "name", "other_spellings", "phone", "email", "properties_visited", "buyer_type", "marketing_ok", "priority", "comments"])
    for o in out:
        w.writerow([o["client_id"], o["name"], " / ".join(o["other_spellings"]), o["phone"], o["email"],
                    " ".join(o["properties_visited"]), o["buyer_type"], o["marketing_ok"], o["priority"], o["comments"]])
print(json.dumps({k: v for k, v in exp.items() if k not in ("client_list",)}, ensure_ascii=False, indent=1))
