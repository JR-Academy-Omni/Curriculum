#!/usr/bin/env python3
"""p39 teaching data + expected answer (deterministic).
Saved HTML snapshots of five invented pet-grooming competitors in Sydney, plus the invented client's own price list.
GST normalisation, staleness and comparison stats are rule-computed here."""
import csv, json, pathlib, random, statistics, datetime as dt

R = random.Random(20261139)
P = pathlib.Path(__file__).resolve().parents[1] / "p39-competitor-web-price-compare"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
SNAPSHOT = dt.date(2026, 11, 11)
STALE_DAYS = 365
GST = 0.10   # 教学假设
SERVICES = [("small_wash", "小型犬洗澡吹干", "Small dog wash & dry"), ("small_full", "小型犬全套美容", "Small dog full groom"),
            ("medium_full", "中型犬全套美容", "Medium dog full groom"), ("nail_trim", "剪指甲", "Nail trim")]
OURS = {"small_wash": 46.0, "small_full": 82.0, "medium_full": 102.0, "nail_trim": 18.0}

COMP = [
    {"id": "paws-and-suds", "name": "Paws & Suds Ryde", "gst": "incl", "gst_text": "All prices include GST.", "updated": dt.date(2026, 10, 2),
     "prices": {"small_wash": 45, "small_full": 85, "medium_full": 105, "nail_trim": 18}, "from": False,
     "promo": {"service": "small_full", "price": 59, "until": dt.date(2026, 11, 30), "text": "November special: Small dog full groom $59 (normally $85). Ends 30 Nov 2026."},
     "layout": "table"},
    {"id": "fluffy-corner", "name": "Fluffy Corner Grooming", "gst": "excl", "gst_text": "Prices shown exclude GST.", "updated": dt.date(2026, 8, 15),
     "prices": {"small_wash": 40, "small_full": 72, "medium_full": 95, "nail_trim": 15}, "from": False, "layout": "cards"},
    {"id": "the-groom-room", "name": "The Groom Room Eastwood", "gst": "incl", "gst_text": "GST inclusive.", "updated": dt.date(2025, 3, 12),
     "prices": {"small_wash": 39, "small_full": 70, "medium_full": 89, "nail_trim": 15}, "from": False, "layout": "list"},
    {"id": "happy-tails-mobile", "name": "Happy Tails Mobile Grooming", "gst": "unknown", "gst_text": "", "updated": dt.date(2026, 9, 20),
     "prices": {"small_wash": 55, "small_full": 95, "medium_full": 120}, "from": True, "layout": "cards"},
    {"id": "bark-avenue", "name": "Bark Avenue Pet Spa", "gst": "incl", "gst_text": "All prices are in AUD and include GST.", "updated": dt.date(2026, 9, 5),
     "prices": {"small_wash": 48, "small_full": 88, "medium_full": 110, "nail_trim": 20}, "from": False, "layout": "table"},
]
EN = {k: en for k, _, en in SERVICES}


def fmt_date(d): return d.strftime("%-d %B %Y")


def render(c):
    pre = "from " if c["from"] else ""
    if c["layout"] == "table":
        promo_k = c["promo"]["service"] if c.get("promo") else None
        cell = lambda k, v: f"<s>${v}</s> <strong>${c['promo']['price']}</strong>" if k == promo_k else f"{pre}${v}"
        body = "<table class=\"price-table\">\n<tr><th>Service</th><th>Price</th></tr>\n" + "".join(
            f"<tr><td>{EN[k]}</td><td>{cell(k, v)}</td></tr>\n" for k, v in c["prices"].items()) + "</table>"
    elif c["layout"] == "cards":
        body = "\n".join(f"<div class=\"card\"><h3>{EN[k]}</h3><p class=\"price\">{pre}${v}</p><p class=\"desc\">Includes towel dry and ear clean.</p></div>"
                         for k, v in c["prices"].items())
    else:
        body = "<ul class=\"menu\">\n" + "".join(f"<li>{EN[k]} ........ ${v}</li>\n" for k, v in c["prices"].items()) + "</ul>"
    promo = f"<div class=\"banner promo\">{c['promo']['text']}</div>" if c.get("promo") else ""
    gst = f"<p class=\"note\">{c['gst_text']}</p>" if c["gst_text"] else ""
    url = f"https://{c['id']}.example/prices"
    return f"""<!DOCTYPE html>
<!-- saved from url=({len(url):04d}){url} on {SNAPSHOT.isoformat()} -->
<html lang="en"><head><meta charset="utf-8"><title>{c['name']} | Prices</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="./assets/site-{R.randint(1000, 9999)}.css">
<script>window.dataLayer=window.dataLayer||[];</script>
</head><body>
<nav><a href="/">Home</a> <a href="/services">Services</a> <a href="/prices">Prices</a> <a href="/book">Book now</a></nav>
{promo}
<main>
<h1>{c['name']} — Grooming prices</h1>
{body}
{gst}
<p class="updated">Price list updated: {fmt_date(c['updated'])}</p>
<p class="small">Prices may vary for matted coats or difficult behaviour. Call us on 04{R.randint(10, 99)} {R.randint(100, 999)} 000.</p>
</main>
<footer>&copy; {c['name']} · Sydney NSW</footer>
</body></html>
"""


for c in COMP:
    (P / "data" / f"{c['id']}.html").write_text(render(c), encoding="utf-8")
with open(P / "data/our-prices.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["service_key", "service", "price_incl_gst"])
    for k, zh, _ in SERVICES: w.writerow([k, zh, f"{OURS[k]:.2f}"])

# ---- expected ----
rows, flags = [], []
for c in COMP:
    age = (SNAPSHOT - c["updated"]).days
    stale = age > STALE_DAYS
    for k, zh, _ in SERVICES:
        shown = c["prices"].get(k)
        r = {"competitor": c["name"], "service_key": k, "service": zh, "shown_price": shown, "gst_on_page": c["gst"],
             "price_incl_gst": None, "updated": c["updated"].isoformat(), "age_days": age, "comparable": False, "note": ""}
        if shown is None:
            r["note"] = "页面没有列这项服务"
        elif c["gst"] == "unknown":
            r["note"] = "页面没写是否含 GST，且是「from」起步价，不能直接比"
        else:
            r["price_incl_gst"] = round(shown * (1 + GST), 2) if c["gst"] == "excl" else float(shown)
            if stale:
                r["note"] = f"价格表最后更新 {c['updated'].isoformat()}，距快照 {age} 天，可能过期"
            else:
                r["comparable"] = True
                if c["gst"] == "excl": r["note"] = "页面价格不含 GST，已按 10% 换算（教学假设）"
        rows.append(r)
    if c.get("promo"):
        p = c["promo"]
        flags.append({"competitor": c["name"], "type": "限时优惠", "detail": f"{dict((a, b) for a, b, _ in SERVICES)[p['service']]} 优惠价 ${p['price']}，到 {p['until'].isoformat()} 结束；对比用原价 ${c['prices'][p['service']]}"})
    if stale: flags.append({"competitor": c["name"], "type": "价格可能过期", "detail": f"最后更新 {c['updated'].isoformat()}（{age} 天前），不进均价，建议电话确认"})
    if c["gst"] == "excl": flags.append({"competitor": c["name"], "type": "不含 GST", "detail": "页面写明不含 GST，已 ×1.1 换算后再比"})
    if c["gst"] == "unknown": flags.append({"competitor": c["name"], "type": "GST 不明 + 起步价", "detail": "没写含不含 GST，价格前有 from，不进均价"})
summary = []
for k, zh, _ in SERVICES:
    vals = [r["price_incl_gst"] for r in rows if r["service_key"] == k and r["comparable"]]
    med = statistics.median(vals); avg = round(sum(vals) / len(vals), 2)
    summary.append({"service_key": k, "service": zh, "comparable_count": len(vals), "min": min(vals), "max": max(vals),
                    "median": round(med, 2), "average": avg, "ours": OURS[k], "ours_vs_median": round(OURS[k] - med, 2)})
exp = {"snapshot_date": SNAPSHOT.isoformat(), "competitors": len(COMP), "rules": {"gst_rate": GST, "stale_after_days": STALE_DAYS,
       "comparable": "页面写明含 / 不含 GST、不是 from 起步价、更新时间在 365 天内、用原价不用优惠价"},
       "rows": rows, "flags": flags, "summary": summary}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
with open(P / "expected/comparison.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["competitor", "service", "shown_price", "gst_on_page", "price_incl_gst", "updated", "comparable", "note"])
    for r in rows:
        w.writerow([r["competitor"], r["service"], "" if r["shown_price"] is None else r["shown_price"], r["gst_on_page"],
                    "" if r["price_incl_gst"] is None else f"{r['price_incl_gst']:.2f}", r["updated"], "是" if r["comparable"] else "否", r["note"]])
for s in summary: print(s)
for fl in flags: print(fl)
