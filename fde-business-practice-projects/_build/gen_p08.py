#!/usr/bin/env python3
"""p08 teaching data + expected answer (deterministic).
Fictional 3PL warehouse in Melbourne; fictional carriers, clients and consignees.
Writes plain-text carrier emails (no PDF) and the expected shipping register."""
import csv, json, pathlib, random
from collections import defaultdict

R = random.Random(20261108)
P = pathlib.Path(__file__).resolve().parents[1] / "p08-logistics-waybill-register"

# Teaching rule: first digit of an AU postcode -> state (ACT postcodes are not used in this data set)
PC_STATE = {"2": "NSW", "3": "VIC", "4": "QLD", "5": "SA", "6": "WA", "7": "TAS", "0": "NT"}
SUBURBS = [("Box Hill", "VIC", "3128"), ("Glen Waverley", "VIC", "3150"), ("Doncaster", "VIC", "3108"),
           ("Clayton", "VIC", "3168"), ("Point Cook", "VIC", "3030"), ("Chatswood", "NSW", "2067"),
           ("Hurstville", "NSW", "2220"), ("Burwood", "NSW", "2134"), ("Eastwood", "NSW", "2122"),
           ("Sunnybank", "QLD", "4109"), ("Chermside", "QLD", "4032"), ("Southport", "QLD", "4215"),
           ("Adelaide", "SA", "5000"), ("Perth", "WA", "6000"), ("Hobart", "TAS", "7000")]
CLIENTS = [("YH", "悦禾茶饮供应"), ("MK", "木可家居"), ("LX", "蓝鲸母婴")]
NAMES = ["Amy Zhou", "Daniel Lee", "林小雨", "Kevin Tran", "Sophie Chen", "王浩然", "Grace Liu", "Jason Wu",
         "Michelle Ho", "张佳怡", "Ryan Ng", "Olivia Sun", "陈思远", "Eric Huang", "Linda Ma", "Tony Cao"]
CARRIERS = ["FastLane Freight", "袋鼠快运 Roo Express", "Coastline Couriers"]

ships = []
for i in range(16):
    sub, st, pc = SUBURBS[i % len(SUBURBS)] if i < 15 else SUBURBS[R.randrange(len(SUBURBS))]
    code, _ = CLIENTS[i % 3]
    carrier = CARRIERS[i % 3]
    prefix = {"FastLane Freight": "FLF", "袋鼠快运 Roo Express": "ROO", "Coastline Couriers": "CC"}[carrier]
    ships.append({
        "waybill_no": f"{prefix}{R.randint(100000, 999999)}",
        "carrier": carrier,
        "client_ref": f"{code}-{R.randint(4000, 4999)}",
        "consignee": NAMES[i],
        "suburb": sub, "state": st, "postcode": pc,
        "pieces": R.choice([1, 1, 2, 2, 3, 4]),
        "weight_kg": round(R.uniform(1.2, 38.0), 1),
        "service": R.choice(["Standard", "Standard", "Express"]),
        "pickup_date": "2026-11-10",
    })
# planted anomalies
ships[8]["state"] = "VIC"                 # Eastwood NSW 2122 written as VIC -> postcode/state mismatch
MISSING_W = 11                            # weight missing in email
ships[MISSING_W]["weight_kg"] = None
DUP = 3                                   # forwarded twice
CANCEL = 7                                # cancelled later the same day


def fmt_email(s, fwd=False):
    c = s["carrier"]
    w = s["weight_kg"]
    if c == "FastLane Freight":
        subj = f"Booking confirmed - Consignment {s['waybill_no']}"
        body = (f"Hi team,\n\nYour pickup has been booked.\n\nConsignment No: {s['waybill_no']}\n"
                f"Your Ref: {s['client_ref']}\nReceiver: {s['consignee']}\n"
                f"Deliver to: {s['suburb']} {s['state']} {s['postcode']}\nItems: {s['pieces']}\n"
                + (f"Total weight: {w} kg\n" if w is not None else "")
                + f"Service: {s['service']}\nPickup date: {s['pickup_date']}\n\nFastLane Freight Bookings")
        frm = "bookings@fastlane-freight.example"
    elif c == "袋鼠快运 Roo Express":
        subj = f"【袋鼠快运】运单 {s['waybill_no']} 已下单"
        body = (f"您好，以下运单已成功下单：\n运单号：{s['waybill_no']}\n客户单号：{s['client_ref']}\n"
                f"收件人：{s['consignee']}\n收件地区：{s['suburb']}, {s['state']} {s['postcode']}\n"
                f"件数：{s['pieces']} 件\n" + (f"重量：{w} 公斤\n" if w is not None else "")
                + f"服务：{'标准' if s['service']=='Standard' else '加急'}\n揽收日期：2026年11月10日\n\n袋鼠快运客服")
        frm = "noreply@roo-express.example"
    else:
        subj = f"Coastline Couriers: label created {s['waybill_no']}"
        grams = "" if w is None else f", total {int(round(w * 1000))} g"
        body = (f"Hello,\n\nA label was created today (10/11/2026) for reference {s['client_ref']}. "
                f"Tracking number {s['waybill_no']}, {s['service'].lower()} service, "
                f"{s['pieces']} parcel(s){grams}, going to {s['consignee']} at {s['suburb']} {s['state']} {s['postcode']}.\n\n"
                "Thanks,\nCoastline Couriers")
        frm = "labels@coastline-couriers.example"
    if fwd:
        subj = "Fwd: " + subj
        body = "转一下，昨天好像没看到这封。—— 仓库 Jenny\n\n---------- Forwarded message ----------\n" + body
        frm = "jenny@nanxing-wh.example"
    return frm, subj, body


emails = []
for i, s in enumerate(ships):
    frm, subj, body = fmt_email(s)
    emails.append((f"2026-11-10 {8 + i // 2:02d}:{(i * 13) % 60:02d}", frm, subj, body))
frm, subj, body = fmt_email(ships[DUP], fwd=True)
emails.append(("2026-11-10 16:05", frm, subj, body))
cs = ships[CANCEL]
emails.append(("2026-11-10 16:20", "noreply@roo-express.example", f"【袋鼠快运】运单 {cs['waybill_no']} 已取消",
               f"您好，运单 {cs['waybill_no']}（客户单号 {cs['client_ref']}）已按您的要求取消，司机不会上门揽收。\n\n袋鼠快运客服"))
emails.append(("2026-11-10 16:40", "accounts@fastlane-freight.example", "Invoice INV-77812 due in 7 days",
               "Hi,\n\nFriendly reminder that invoice INV-77812 for October (AUD 1,284.60) is due on 17/11/2026.\n"
               "This is not a booking. Please contact accounts if you have any questions.\n\nFastLane Freight Accounts"))
emails.sort(key=lambda e: e[0])

(P / "data").mkdir(parents=True, exist_ok=True)
with open(P / "data/inbox-2026-11-10.txt", "w", encoding="utf-8") as f:
    f.write("# 南星仓储 ops 邮箱 2026-11-10 导出（练习数据：公司、承运商、收件人、单号都是为这个练习设计的）\n\n")
    for n, (t, frm, subj, body) in enumerate(emails, 1):
        f.write(f"========== EMAIL {n:02d} ==========\nFrom: {frm}\nTo: ops@nanxing-wh.example\nDate: {t}\nSubject: {subj}\n\n{body}\n\n")

# ---------- expected answer ----------
register, issues = [], []
for i, s in enumerate(ships):
    flags = []
    status = "active"
    if i == CANCEL:
        status = "cancelled"; flags.append("承运商当天来邮件取消，不计入当天发货")
    if PC_STATE[s["postcode"][0]] != s["state"]:
        flags.append(f"邮编 {s['postcode']} 对应 {PC_STATE[s['postcode'][0]]}，邮件写的是 {s['state']}，需跟客户核对地址")
    if s["weight_kg"] is None:
        flags.append("邮件里没有重量，需找承运商或仓库补")
    row = dict(s); row["status"] = status if not flags or status == "cancelled" else "needs_check"
    row["weight_kg"] = "" if s["weight_kg"] is None else s["weight_kg"]
    row["note"] = "；".join(flags)
    register.append(row)
    for fl in flags:
        issues.append({"waybill_no": s["waybill_no"], "issue": fl})
issues.append({"waybill_no": ships[DUP]["waybill_no"], "issue": "同一运单被转发了一次（Fwd:），台账只记一行"})
issues.append({"waybill_no": "-", "issue": "INV-77812 是账单提醒，不是运单，不进台账"})

by = defaultdict(lambda: {"shipments": 0, "pieces": 0, "weight_kg": 0.0, "weight_missing": 0})
for r in register:
    if r["status"] == "cancelled":
        continue
    b = by[r["carrier"]]; b["shipments"] += 1; b["pieces"] += r["pieces"]
    if r["weight_kg"] == "":
        b["weight_missing"] += 1
    else:
        b["weight_kg"] += r["weight_kg"]
by_carrier = [{"carrier": c, **{k: (round(v, 1) if k == "weight_kg" else v) for k, v in by[c].items()}} for c in CARRIERS]
total = {k: (round(sum(x[k] for x in by_carrier), 1) if k == "weight_kg" else sum(x[k] for x in by_carrier))
         for k in ("shipments", "pieces", "weight_kg", "weight_missing")}
exp = {"emails_in_file": len(emails), "register_rows": len(register),
       "active_rows": sum(1 for r in register if r["status"] != "cancelled"),
       "needs_check_rows": sum(1 for r in register if r["status"] == "needs_check"),
       "by_carrier": by_carrier, "total_excl_cancelled": total, "issues": issues, "register": register}
(P / "expected").mkdir(exist_ok=True)
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/register.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(register[0])); w.writeheader(); w.writerows(register)
print(json.dumps({k: exp[k] for k in ("emails_in_file", "register_rows", "active_rows", "needs_check_rows", "by_carrier", "total_excl_cancelled")}, ensure_ascii=False, indent=1))
for x in issues: print(x)
