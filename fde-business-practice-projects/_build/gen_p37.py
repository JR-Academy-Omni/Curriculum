#!/usr/bin/env python3
"""p37 teaching data + expected answer (deterministic).
Invented Melbourne furniture importer, weekly ops meeting transcript with speaker labels.
Action items / off-record lines are tagged in the source list below; dates are resolved by rule in this script.
The reference minutes text is written by hand (expected/minutes.md)."""
import csv, json, pathlib, random, datetime as dt

R = random.Random(20261137)
P = pathlib.Path(__file__).resolve().parents[1] / "p37-meeting-minutes-action-items"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
MEETING = dt.date(2026, 11, 10)   # 周二
WD = {"一": 0, "二": 1, "三": 2, "四": 3, "五": 4, "六": 5, "日": 6}


def resolve(expr):
    """把口头日期换成具体日期。规则：本周X = 会议所在周（周一开始）的周X；下周X = 下一周的周X；明天 = 会议日 + 1；月底 = 当月最后一天。"""
    monday = MEETING - dt.timedelta(days=MEETING.weekday())
    if expr == "明天": return MEETING + dt.timedelta(days=1)
    if expr == "月底": return dt.date(2026, 11, 30)
    if expr.startswith("本周") or expr.startswith("这周"): return monday + dt.timedelta(days=WD[expr[-1]])
    if expr.startswith("周"): return monday + dt.timedelta(days=WD[expr[-1]])
    if expr.startswith("下周"): return monday + dt.timedelta(days=7 + WD[expr[-1]])
    raise ValueError(expr)


# (speaker, text, tag)  tag: None / ("action", id) / "offrecord" / ("decision", id) / ("open", id) / ("deadline", id)
S = [
    ("周婷", "好，人齐了吧，那我们开始。今天就几件事：受潮那批餐椅、黑五活动、Harbour Interiors 的样品，还有退货。小林你记一下。", None),
    ("林晓", "好的，我在记。", None),
    ("周婷", "先说餐椅。李强你那边什么情况？", None),
    ("李强", "嗯，上周五到的那个柜，有一批橡木餐椅包装是湿的，我拆了两箱，椅面有水印。具体多少把受影响还没数完。", None),
    ("周婷", "那这批先别卖了，网店上先下架，等你数清楚再说。", ("decision", "D1")),
    ("Mia", "好，我今天就把那四个款下架。", None),
    ("周婷", "李强，你周五前把那批全部清点完，每箱拍照发到群里，我们好跟货代谈。", ("action", "A1")),
    ("李强", "行，周五前弄完。", None),
    ("周婷", "保险那边也得问一下，这种运输途中受潮能不能报。小林你这周四之前打个电话问清楚，要他们书面回复。", ("action", "A2")),
    ("林晓", "好，周四前我联系保险公司。", None),
    ("陈浩", "我插一句，能不能报其实要看保单条款吧，我们别自己先下结论。", None),
    ("周婷", "对，就让保险公司书面答复，我们不猜。", None),
    ("周婷", "第二件，黑五。Mia 你说一下。", None),
    ("Mia", "我的想法是全场 85 折，沙发和床架不参加，因为利润太薄。活动页我下周三之前能上线。", ("action", "A3")),
    ("周婷", "85 折可以，就这么定。沙发床架不参加也同意。", ("decision", "D2")),
    ("陈浩", "那要不要顺便把快递也换一家？现在这家老是晚。", None),
    ("周婷", "这个之后再看吧，今天先不定。", ("open", "Q1")),
    ("Mia", "还有，上周的退货原因我整理了一半，明天发给你。", ("action", "A4")),
    ("周婷", "好。说到退货，官网 FAQ 里退货那段还是旧政策，写的 14 天，现在是 30 天了，得改一下。", ("action", "A5")),
    ("周婷", "谁有空弄一下？月底前改好就行。", None),
    ("李强", "那个……我先说个仓库的事，下周二叉车要年检，那天上午不能收货。", None),
    ("周婷", "知道了。那 Mia 你记得别把那天上午排进送货预约。", None),
    ("Mia", "好的。", None),
    ("周婷", "第三件，Harbour Interiors 要的面料样品。陈浩？", None),
    ("陈浩", "他们要六种面料的样品，我这周五前寄出去。", ("action", "A6")),
    ("周婷", "行。", None),
    ("陈浩", "哦对了，这个别记进纪要啊，私下说一句，Harbour 那边的采购 Kevin 好像要跳槽，他们可能会换供应商。", "offrecord"),
    ("周婷", "嗯，这段不记。小林这句别写。", "offrecord"),
    ("林晓", "好，没记。", "offrecord"),
    ("周婷", "回到样品，我昨天跟他们老板通过电话，他说下周二前寄出就行，不用那么赶。", ("deadline", "A6")),
    ("陈浩", "那我按哪个来？", None),
    ("周婷", "你先按你的节奏，有问题再说。", None),
    ("周婷", "差不多了。还有别的吗？没有就散会，下周同一时间。", None),
]
# 发言时间：10:00 开始，每句之间 15–70 秒
t = dt.datetime.combine(MEETING, dt.time(10, 0, 5))
lines = []
for i, (sp, tx, tag) in enumerate(S, 1):
    lines.append({"no": i, "ts": t.strftime("%H:%M:%S"), "speaker": sp, "text": tx, "tag": tag})
    t += dt.timedelta(seconds=R.randint(15, 70))

header = ["拾光家居 · 周会录音转写", "日期：2026-11-10（周二） 地点：Richmond 办公室 + Zoom",
          "参会：周婷（老板）、李强（仓库）、Mia Chen（线上运营）、陈浩（销售）、林晓（行政，记录）",
          "说明：自动转写，未校对。每行格式：[时间] 发言人：内容", ""]
with open(P / "data/meeting-2026-11-10-transcript.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(header))
    for l in lines: f.write(f"[{l['ts']}] {l['speaker']}：{l['text']}\n")

L = {l["no"]: l for l in lines}
def line_of(tag): return [l["no"] for l in lines if l["tag"] == tag]

# ---- action items（负责人、口头日期由会上原话确定；具体日期由 resolve 算） ----
AI = {
    "A1": {"task": "清点受潮的橡木餐椅，每箱拍照发到群里", "owner": "李强", "said": "周五"},
    "A2": {"task": "联系保险公司，问运输途中受潮能否理赔，要书面回复", "owner": "林晓", "said": "周四"},
    "A3": {"task": "黑五活动页上线（全场 85 折，沙发、床架不参加）", "owner": "Mia Chen", "said": "下周三"},
    "A4": {"task": "把上周退货原因整理完发给周婷", "owner": "Mia Chen", "said": "明天"},
    "A5": {"task": "官网 FAQ 退货政策从 14 天改成 30 天", "owner": "", "said": "月底"},
    "A6": {"task": "给 Harbour Interiors 寄六种面料样品", "owner": "陈浩", "said": "周五"},
}
items = []
for aid, a in AI.items():
    src = line_of(("action", aid))
    due = resolve(a["said"])
    it = {"id": aid, "task": a["task"], "owner": a["owner"] or None, "due_said": a["said"], "due_date": due.isoformat(),
          "source_lines": src, "status": "ok", "flags": []}
    if not a["owner"]:
        it["status"] = "needs_owner"; it["flags"].append("会上问了「谁有空弄一下」，没有人认领，需要周婷指派")
    alt = line_of(("deadline", aid))
    if alt:
        alt_due = resolve("下周二")
        it["status"] = "needs_confirmation"; it["due_date_alt"] = alt_due.isoformat(); it["source_lines"] += alt
        it["flags"].append(f"截止日期冲突：陈浩说周五（{due.isoformat()}）前寄出，周婷转述客户说下周二（{alt_due.isoformat()}）前寄出即可，会上没有定下来")
    items.append(it)

exp = {
    "meeting": {"company": "拾光家居", "date": MEETING.isoformat(), "weekday": "周二",
                "attendees": ["周婷", "李强", "Mia Chen", "陈浩", "林晓"], "recorder": "林晓"},
    "transcript_lines": len(lines),
    "decisions": [{"id": "D1", "text": "受潮的橡木餐椅暂停销售，网店先下架，清点完再定", "source_lines": line_of(("decision", "D1"))},
                  {"id": "D2", "text": "黑五全场 85 折，沙发和床架不参加", "source_lines": line_of(("decision", "D2"))}],
    "action_items": items,
    "action_items_ok": sum(1 for i in items if i["status"] == "ok"),
    "needs_follow_up": [i["id"] for i in items if i["status"] != "ok"],
    "open_questions": [{"id": "Q1", "text": "要不要换快递公司（会上说之后再看，未决定，不算待办）", "source_lines": line_of(("open", "Q1"))}],
    "notes_not_action": [{"text": "下周二（2026-11-17）上午叉车年检，仓库不能收货；送货预约避开这个时段",
                          "source_lines": [21, 22]}],
    "excluded_off_record_lines": line_of("offrecord"),
    "must_not_appear_in_minutes": ["Kevin", "跳槽", "换供应商"],
    "date_rules": {"本周X / 周X": "会议所在周（周一开始）的周X", "下周X": "下一周的周X", "明天": "会议日 + 1", "月底": "2026-11-30"},
}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

with open(P / "expected/action-items.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["id", "task", "owner", "due_date", "status", "source_lines", "note"])
    for i in items:
        due = i["due_date"] + (f" / {i['due_date_alt']}" if i.get("due_date_alt") else "")
        w.writerow([i["id"], i["task"], i["owner"] or "（待指派）", due, i["status"],
                    ";".join(map(str, i["source_lines"])), "；".join(i["flags"])])

MINUTES = """# 拾光家居 周会纪要 · 2026-11-10（周二）

参会：周婷、李强、Mia Chen、陈浩、林晓（记录）

## 决定
1. 受潮的橡木餐椅暂停销售，网店先下架，清点完再定。
2. 黑五全场 85 折，沙发和床架不参加。

## 待办
| # | 事项 | 负责人 | 截止 | 状态 |
|---|---|---|---|---|
| A1 | 清点受潮的橡木餐椅，每箱拍照发到群里 | 李强 | 2026-11-13（周五） | |
| A2 | 联系保险公司，问运输途中受潮能否理赔，要书面回复 | 林晓 | 2026-11-12（周四） | |
| A3 | 黑五活动页上线（85 折，沙发、床架不参加） | Mia Chen | 2026-11-18（周三） | |
| A4 | 上周退货原因整理完发给周婷 | Mia Chen | 2026-11-11（周三） | |
| A5 | 官网 FAQ 退货政策从 14 天改成 30 天 | **待指派** | 2026-11-30 | 请周婷指定负责人 |
| A6 | 给 Harbour Interiors 寄六种面料样品 | 陈浩 | **待确认**：2026-11-13 还是 2026-11-17 | 请周婷和陈浩定一个日期 |

## 提醒
- 下周二（11-17）上午叉车年检，仓库不收货，送货预约避开。
- 保险能否理赔以保险公司书面答复为准，会上没有下结论。

## 未决定
- 是否换快递公司：之后再议。

下次周会：2026-11-17 同一时间。
"""
(P / "expected/minutes.md").write_text(MINUTES, encoding="utf-8")
print(json.dumps({"lines": len(lines), "items": [(i["id"], i["owner"], i["due_date"], i.get("due_date_alt"), i["status"]) for i in items],
                  "offrecord": exp["excluded_off_record_lines"]}, ensure_ascii=False))
