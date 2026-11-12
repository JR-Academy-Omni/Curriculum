#!/usr/bin/env python3
"""p29 teaching data + expected answer (deterministic).
Invented Melbourne renovation builder, one invented house job. Site diaries + photo captions (text only, no images)
-> weekly progress report for the homeowner. All numbers and filters in expected/ are rule-computed here."""
import csv, json, pathlib, random
from collections import OrderedDict, defaultdict

R = random.Random(20261129)
P = pathlib.Path(__file__).resolve().parents[1] / "p29-renovation-site-weekly-report"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
JOB = "J-2611"
WEEK = ("2026-11-02", "2026-11-07")
PRIVATE_WORDS = ("邻居", "小孩", "车牌", "门牌", "业主家人", "人脸")

SCHEDULE = [  # task_id, task, trade, planned_start, planned_finish, pct_start_of_week, planned_pct_end_of_week
    ("T02", "厨房水电预埋", "水电", "2026-10-28", "2026-11-04", 30, 100),
    ("T03", "主浴室防水", "防水", "2026-11-04", "2026-11-05", 0, 100),
    ("T04", "主浴室贴砖", "贴砖", "2026-11-06", "2026-11-13", 0, 20),
    ("T05", "厨房石膏板", "石膏板", "2026-11-05", "2026-11-10", 0, 50),
    ("T06", "后院木平台", "木工", "2026-10-30", "2026-11-10", 40, 80),
    ("T08", "前窗更换", "门窗", "2026-11-02", "2026-11-03", 50, 100),
    ("T09", "卧室刷漆", "油漆", "2026-11-16", "2026-11-20", 0, 0),
]
# date, job, author, trade, task_id, area, work_done, pct_after, workers, hours, issue, photo_ids
D = [
    ("2026-11-02", JOB, "阿杰", "门窗", "T08", "前窗", "拆旧铝窗两扇，新窗框就位、打发泡胶", 80, 2, 7.5, "", "P01;P02"),
    ("2026-11-02", JOB, "阿杰", "水电", "T02", "厨房", "厨房冷热水管走管完成一半，电工开槽", 55, 2, 8, "", "P03"),
    ("2026-11-02", JOB, "阿杰", "木工", "T06", "后院", "平台托梁全部安装，开始铺第一排面板", 50, 2, 8, "", "P04"),
    ("2026-11-03", JOB, "阿杰", "门窗", "T08", "前窗", "两扇新窗安装完成，室内外打胶，试开关正常", 100, 2, 6, "", "P05"),
    ("2026-11-03", JOB, "阿杰", "水电", "T02", "厨房", "水管全部走完，打压测试 30 分钟无掉压；电线穿管 70%", 80, 2, 8,
     "业主说厨房岛台想加长 30cm，问能不能顺便多加一个插座", "P06;P07"),
    ("2026-11-03", "J-2608", "小林", "贴砖", "T11", "洗衣房", "Box Hill 那单洗衣房地砖贴完", 100, 1, 7, "", "P30"),
    ("2026-11-04", JOB, "阿杰", "水电", "T02", "厨房", "电线穿管完成，插座底盒全部固定", 95, 2, 8, "等电工下周一接最后两路线", "P08"),
    ("2026-11-04", JOB, "阿杰", "防水", "T03", "主浴室", "地面和淋浴墙刷第一遍防水涂料", 50, 1, 6,
     "地漏旁边墙里发现一根旧电线裸露，已断电并贴了警示，等电工来处理", "P09;P10"),
    ("2026-11-04", JOB, "阿杰", "木工", "T06", "后院", "面板铺到一半，栏杆立柱定位", 60, 2, 8, "", "P11"),
    ("2026-11-05", JOB, "阿杰", "防水", "T03", "主浴室", "第二遍防水涂料完成，48 小时后做闭水", 90, 1, 5, "", "P12"),
    ("2026-11-05", JOB, "阿杰", "石膏板", "T05", "厨房", "下午下雨，室内开始装吊顶龙骨", 15, 2, 4, "上午下雨后院停工半天", "P13"),
    ("2026-11-05", JOB, "阿杰", "木工", "T06", "后院", "雨停后整理材料，面板重新量了一遍", 55, 2, 3, "", "P14"),
    ("2026-11-06", JOB, "阿杰", "石膏板", "T05", "厨房", "吊顶龙骨完成，墙面石膏板装了两面", 35, 2, 8, "", "P15;P16"),
    ("2026-11-06", JOB, "阿杰", "石膏板", "T05", "厨房", "吊顶龙骨完成，墙面石膏板装了两面", 35, 2, 8, "", "P15;P16"),
    ("2026-11-06", JOB, "阿杰", "木工", "T06", "后院", "面板铺完 70%，开始装栏杆", 70, 2, 8, "", "P17"),
    ("2026-11-07", JOB, "阿杰", "防水", "T03", "主浴室", "闭水测试 24 小时开始，周日看结果", 90, 1, 2, "闭水测试结果出来之前不能贴砖", "P18"),
    ("2026-11-07", JOB, "阿杰", "木工", "T06", "后院", "栏杆装完一侧", 75, 2, 6, "", "P19;P21"),
]
CAPTIONS = [  # photo_id, date, taken_by, area, caption
    ("P01", "2026-11-02", "阿杰", "前窗", "旧铝窗拆下后的窗洞，四周木框完好"),
    ("P02", "2026-11-02", "阿杰", "前窗", "新窗框放进窗洞，四周打了发泡胶"),
    ("P03", "2026-11-02", "阿杰", "厨房", "厨房墙面开好的水管槽"),
    ("P04", "2026-11-02", "阿杰", "后院", "后院平台托梁装好，间距一致"),
    ("P05", "2026-11-03", "阿杰", "前窗", "两扇新窗装好，室外打胶完成"),
    ("P06", "2026-11-03", "阿杰", "厨房", "打压表读数，30 分钟没有掉压"),
    ("P07", "2026-11-03", "阿杰", "厨房", "电线穿管进度，左墙已穿完"),
    ("P08", "2026-11-04", "阿杰", "厨房", "厨房插座底盒全部固定，高度一致"),
    ("P09", "2026-11-04", "阿杰", "主浴室", "第一遍防水涂料，地面和淋浴墙全覆盖"),
    ("P10", "2026-11-04", "阿杰", "主浴室", "地漏旁墙里裸露的旧电线，已贴黄色警示胶带"),
    ("P11", "2026-11-04", "阿杰", "后院", "平台面板铺到一半，栏杆立柱拉线定位"),
    ("P12", "2026-11-05", "阿杰", "主浴室", "第二遍防水涂料完成，墙角加了加强布"),
    ("P13", "2026-11-05", "阿杰", "厨房", "厨房吊顶龙骨刚开始装"),
    ("P14", "2026-11-05", "阿杰", "后院", "雨后的平台，材料盖好防水布；围栏外拍到隔壁小孩在看"),
    ("P15", "2026-11-06", "阿杰", "厨房", "吊顶龙骨装完，横平竖直"),
    ("P16", "2026-11-06", "阿杰", "厨房", "厨房左墙和后墙石膏板装好"),
    ("P17", "2026-11-06", "阿杰", "后院", "平台面板铺完七成，开始装栏杆"),
    ("P18", "2026-11-07", "阿杰", "主浴室", "浴室地面放水做闭水测试，水位线做了记号"),
    ("P19", "2026-11-07", "阿杰", "后院", "平台东侧栏杆装好"),
    ("P20", "2026-10-30", "阿杰", "后院", "上周五平台基础桩完成"),
]
with open(P / "data/schedule.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["task_id", "task", "trade", "planned_start", "planned_finish", "pct_start_of_week", "planned_pct_end_of_week"]); w.writerows(SCHEDULE)
DF = ["date", "job_id", "author", "trade", "task_id", "area", "work_done", "pct_after", "workers", "hours", "issue", "photo_ids"]
with open(P / "data/site-diary-week-2026-11-02.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(DF); w.writerows(D)
with open(P / "data/photo-captions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["photo_id", "date", "taken_by", "area", "caption"]); w.writerows(CAPTIONS)

# ---- expected ----
rows = [dict(zip(DF, d)) for d in D]
sched = OrderedDict((s[0], s) for s in SCHEDULE)
review, valid, seen = [], [], set()
for r in rows:
    if r["job_id"] != JOB:
        review.append({"date": r["date"], "problem": "不是这个工地", "detail": f"{r['job_id']} 的记录混进来了，不进本周报告"}); continue
    key = tuple(r[k] for k in DF)
    if key in seen:
        review.append({"date": r["date"], "problem": "重复记录", "detail": f"{r['task_id']} 同一条日报交了两次，只算一次"}); continue
    seen.add(key); valid.append(r)
progress = {tid: s[5] for tid, s in sched.items()}
regress = []
for r in sorted(valid, key=lambda x: x["date"]):
    tid, pct = r["task_id"], int(r["pct_after"])
    if pct < progress[tid]:
        regress.append({"date": r["date"], "task_id": tid, "reported": pct, "kept": progress[tid]})
        review.append({"date": r["date"], "problem": "进度倒退", "detail": f"{tid} 报 {pct}%，比之前的 {progress[tid]}% 低；先按 {progress[tid]}% 算，请阿杰确认"})
        continue
    progress[tid] = pct
tasks = []
for tid, s in sched.items():
    actual, planned = progress[tid], s[6]
    var = actual - planned
    status = "未开始（按计划）" if planned == 0 and actual == 0 else "超前" if var >= 10 else "按计划" if var >= 0 else "略慢" if var >= -10 else "落后"
    tasks.append({"task_id": tid, "task": s[1], "trade": s[2], "pct_start": s[5], "pct_end": actual,
                  "planned_end": planned, "variance": var, "status": status})
hours = defaultdict(float)
for r in valid: hours[r["trade"]] += float(r["hours"]) * int(r["workers"])
# photos
cap = {c[0]: c for c in CAPTIONS}
used = []
for r in valid:
    used += [p for p in r["photo_ids"].split(";") if p]
client_photos, internal_photos = [], []
for pid in dict.fromkeys(used):
    if pid not in cap:
        review.append({"date": next(r["date"] for r in valid if pid in r["photo_ids"]), "problem": "照片说明缺失",
                       "detail": f"日报里写了 {pid}，照片说明表里没有"}); continue
    c = cap[pid]
    if any(w in c[4] for w in PRIVATE_WORDS):
        internal_photos.append({"photo_id": pid, "caption": c[4], "why": "说明里拍到了邻居家的孩子，不放进给业主的报告"}); continue
    client_photos.append({"photo_id": pid, "area": c[3], "caption": c[4]})
unused = [c[0] for c in CAPTIONS if c[0] not in used]
for pid in unused:
    c = cap[pid]
    review.append({"date": c[1], "problem": "照片不在本周日报里", "detail": f"{pid}（{c[1]}）没有对应的本周日报，不放进报告"})
safety = [{"date": r["date"], "task_id": r["task_id"], "issue": r["issue"]} for r in valid if "电线裸露" in r["issue"]]
variations = [{"date": r["date"], "task_id": r["task_id"], "issue": r["issue"],
               "note": "业主提的变更，要老板和业主书面确认价格和工期，不写进本周进度"} for r in valid if "业主说" in r["issue"]]
waits = [{"date": r["date"], "task_id": r["task_id"], "issue": r["issue"]} for r in valid
         if r["issue"] and "电线裸露" not in r["issue"] and "业主说" not in r["issue"]]
exp = {"job": JOB, "week": f"{WEEK[0]} 至 {WEEK[1]}", "diary_rows_in_file": len(rows), "diary_rows_used": len(valid),
       "tasks": tasks, "status_count": {k: sum(1 for t in tasks if t["status"] == k) for k in ("超前", "按计划", "略慢", "落后", "未开始（按计划）")},
       "labour_hours_by_trade": {k: round(v, 1) for k, v in hours.items()}, "labour_hours_total": round(sum(hours.values()), 1),
       "safety_items": safety, "variation_requests": variations, "other_issues": waits,
       "photos_in_client_report": client_photos, "photos_internal_only": internal_photos, "needs_review": review,
       "rules": {"variance": "pct_end − planned_pct_end_of_week", "status": "≥ +10 超前；0 到 +9 按计划；−1 到 −10 略慢；低于 −10 落后",
                 "regression": "进度不接受倒退，沿用之前的最高值并列入核对",
                 "labour_hours": "hours × workers", "private_photo_words": list(PRIVATE_WORDS)}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps({k: exp[k] for k in ("diary_rows_in_file", "diary_rows_used", "status_count", "labour_hours_by_trade", "labour_hours_total")}, ensure_ascii=False))
for t in tasks: print(t)
for x in review: print(x)
print(len(client_photos), internal_photos, safety, variations, waits)
