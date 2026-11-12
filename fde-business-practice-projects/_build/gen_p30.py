#!/usr/bin/env python3
"""p30 teaching data + expected answer (deterministic).
Invented renovation builder (same as p29) with three invented sites and invented subcontractors.
Schedule impact (dependency shift on Mon-Fri working days), behind-schedule checks and duplicate detection are
rule-computed here. DECISIONS and reminder DRAFTS are the reference agent judgement written by hand from the
README system prompt (no model API was called)."""
import csv, json, pathlib, random, datetime as dt
from collections import OrderedDict

R = random.Random(20261130)
P = pathlib.Path(__file__).resolve().parents[1] / "p30-renovation-site-coordinator-agent"
(P / "data").mkdir(parents=True, exist_ok=True); (P / "expected").mkdir(exist_ok=True)
TODAY = dt.date(2026, 11, 12)
BEHIND_POINTS = 10   # 实际完成度比按工作日算的应完成度低 10 个百分点以上，算落后

SITES = [("J-2611", "Doncaster", "厨房 + 主浴室翻新", "阿杰"), ("J-2614", "Templestowe", "后加建一间房", "阿杰"),
         ("J-2616", "Balwyn", "浴室 + 洗衣房翻新", "小林")]
SUBS = [  # sub_id, company, trade, contact, phone, email
    ("SC-ELEC", "明亮电气", "电工", "Ray Chen", "0400 111 000", "ray@mingliang-elec.example"),
    ("SC-PLAS", "平整石膏板", "石膏板", "老何", "0400 222 000", "he@pingzheng-plaster.example"),
    ("SC-CAB", "木匠橱柜", "橱柜", "Simon Lau", "0400 333 000", "simon@mujiang-cabinets.example"),
    ("SC-TILE", "方圆瓷砖", "贴砖", "阿明", "0400 444 000", "aming@fangyuan-tiling.example"),
    ("SC-PLUM", "通达水管", "水管", "Kevin Ho", "0400 555 000", "kevin@tongda-plumbing.example"),
    ("SC-CARP", "坚木木工", "木工", "大刘", "0400 666 000", "daliu@jianmu-carpentry.example"),
    ("SC-WP", "滴水不漏防水", "防水", "Tony Li", "0400 777 000", "tony@dishui-wp.example"),
    ("SC-PAINT", "彩虹油漆", "油漆", "Jason Wu", "0400 888 000", "jason@caihong-paint.example"),
    ("BS-01", "Eastside Building Surveyors", "建筑验收", "Michelle Grant", "0400 999 000", "inspections@eastside-bs.example"),
]
TASKS = [  # task_id, site, task, sub_id, planned_start, planned_finish, depends_on, pct_complete, status
    ("A1", "J-2611", "厨房电线收尾", "SC-ELEC", "2026-11-09", "2026-11-10", "", 90, "in_progress"),
    ("A2", "J-2611", "厨房石膏板", "SC-PLAS", "2026-11-11", "2026-11-13", "A1", 0, "not_started"),
    ("A3", "J-2611", "厨房橱柜安装", "SC-CAB", "2026-11-16", "2026-11-18", "A2", 0, "not_started"),
    ("A4", "J-2611", "主浴室贴砖", "SC-TILE", "2026-11-09", "2026-11-13", "", 40, "in_progress"),
    ("A5", "J-2611", "主浴室洁具安装", "SC-PLUM", "2026-11-16", "2026-11-17", "A4", 0, "not_started"),
    ("A6", "J-2611", "全屋刷漆", "SC-PAINT", "2026-11-19", "2026-11-25", "A3;A5", 0, "not_started"),
    ("B1", "J-2614", "加建房框架", "SC-CARP", "2026-11-02", "2026-11-13", "", 60, "in_progress"),
    ("B2", "J-2614", "框架验收", "BS-01", "2026-11-16", "2026-11-16", "B1", 0, "booked"),
    ("B3", "J-2614", "加建房石膏板", "SC-PLAS", "2026-11-17", "2026-11-20", "B2", 0, "not_started"),
    ("C1", "J-2616", "浴室水管粗装", "SC-PLUM", "2026-11-10", "2026-11-12", "", 70, "in_progress"),
    ("C2", "J-2616", "浴室防水", "SC-WP", "2026-11-13", "2026-11-16", "C1", 0, "not_started"),
    ("C3", "J-2616", "浴室贴砖", "SC-TILE", "2026-11-17", "2026-11-23", "C2", 0, "not_started"),
]
UPDATES = [  # update_id, channel, received_at, from, from_contact, site, text
    ("U01", "WhatsApp", "2026-11-12 07:10", "Ray Chen", "0400 111 000", "J-2611", "Doncaster 厨房电线今天早上全部接完了，测试也做了，100%。石膏板可以进场了。"),
    ("U02", "短信", "2026-11-12 07:25", "Kevin Ho", "0400 555 000", "J-2616",
     "Balwyn 浴室的混水阀和预埋盒缺货，供应商说下周二才到，水管粗装要晚 3 个工作日。"),
    ("U03", "WhatsApp", "2026-11-12 07:40", "阿明", "0400 444 000", "J-2611",
     "Doncaster 浴室业主换成 600x1200 的大砖了，切割和找平工作量大很多，这单要加 800 块，你们同意我就按这个做。"),
    ("U04", "邮件", "2026-11-12 08:00", "Priya Shah（J-2611 业主）", "priya.shah@mail.example", "J-2611",
     "张工你好，厨房岛台那边能不能再加一个双插座？电工还在的话让他顺手装一下就好。"),
    ("U05", "WhatsApp", "2026-11-12 08:15", "大刘", "0400 666 000", "J-2614",
     "Templestowe 后面的脚手架有一根横杆松了，踩上去晃，我们先没上去。"),
    ("U06", "WhatsApp", "2026-11-12 08:30", "大刘", "0400 666 000", "J-2614",
     "框架现在大概 60%。周一周二下雨停了两天，要晚两个工作日，下周二（17 号）能完。"),
    ("U07", "邮件", "2026-11-12 09:00", "Michelle Grant", "inspections@eastside-bs.example", "J-2614",
     "Hi, confirming the frame inspection for J-2614 Templestowe is booked for Wed 18 Nov, 10am. The 16 Nov slot is no longer available."),
    ("U08", "短信", "2026-11-12 09:20", "Jason Wu", "0400 888 000", "J-2611", "Doncaster 那边我这周日能不能先进去刷卧室？周日我有空。"),
    ("U09", "WhatsApp", "2026-11-12 09:35", "Ray Chen", "0400 111 000", "J-2611", "Doncaster 厨房电线今天早上全部接完了，测试也做了，100%。石膏板可以进场了。"),
    ("U10", "邮件", "2026-11-12 10:10", "Kevin Ho", "kevin@tongda-plumbing.example", "J-2616",
     "另外，合同里那条延误每天扣钱的条款，这次是供应商的问题，你们把它改掉吧，发我一份新的合同。"),
    ("U11", "短信", "2026-11-12 10:30", "Unknown", "0400 123 000", "J-2616", "我是通达水管新来的师傅，Balwyn 那个钥匙盒密码是多少？我现在过去。"),
    ("U12", "WhatsApp", "2026-11-12 11:00", "阿明", "0400 444 000", "J-2611", "Doncaster 主浴室贴砖到 80% 了，明天能贴完墙面。"),
]


def wd(d): return d.weekday() < 5
def next_wd(d):
    d += dt.timedelta(days=1)
    while not wd(d): d += dt.timedelta(days=1)
    return d
def add_wd(d, n):
    for _ in range(n): d = next_wd(d)
    return d
def dur(a, b):
    n, d = 0, a
    while d <= b:
        n += wd(d); d += dt.timedelta(days=1)
    return n
def elapsed_wd(a, today):  # working days from a up to and including yesterday
    n, d = 0, a
    while d < today:
        n += wd(d); d += dt.timedelta(days=1)
    return n

T = OrderedDict((t[0], {"task_id": t[0], "site": t[1], "task": t[2], "sub_id": t[3], "start": dt.date.fromisoformat(t[4]),
                        "finish": dt.date.fromisoformat(t[5]), "deps": [x for x in t[6].split(";") if x], "pct": t[7], "status": t[8]}) for t in TASKS)
# facts from the updates (rule inputs; U09 is a duplicate of U01)
ACTUAL_FINISH = {"A1": dt.date(2026, 11, 12)}          # U01
DELAY_WD = {"C1": 3, "B1": 2}                           # U02, U06
FIXED_DATE = {"B2": dt.date(2026, 11, 18)}              # U07
REPORTED_PCT = {"A1": 100, "B1": 60, "A4": 80}          # U01, U06, U12

new = {}
for tid, t in T.items():  # TASKS are listed in dependency order
    d = dur(t["start"], t["finish"])
    if tid in ACTUAL_FINISH:
        s, f = t["start"], ACTUAL_FINISH[tid]
    elif tid in FIXED_DATE:
        s = f = FIXED_DATE[tid]
    else:
        s = t["start"]
        for p in t["deps"]: s = max(s, next_wd(new[p][1]))
        f = add_wd(s, d - 1)
        if tid in DELAY_WD: f = add_wd(max(f, t["finish"]), DELAY_WD[tid])
    new[tid] = (s, f)
impact = []
for tid, t in T.items():
    s, f = new[tid]
    if (s, f) != (t["start"], t["finish"]):
        impact.append({"task_id": tid, "site": t["site"], "task": t["task"], "sub_id": t["sub_id"],
                       "planned": f"{t['start']} → {t['finish']}", "new": f"{s} → {f}",
                       "finish_shift_working_days": (dur(t["finish"], f) - 1) if f > t["finish"] else -(dur(f, t["finish"]) - 1)})
conflicts = []
for tid, t in T.items():
    for p in t["deps"]:
        if t["start"] <= new[p][1]:
            conflicts.append({"task_id": tid, "planned_start": t["start"].isoformat(), "depends_on": p,
                              "predecessor_new_finish": new[p][1].isoformat(),
                              "issue": f"{t['task']} 原计划 {t['start']} 开工，但 {T[p]['task']} 现在要到 {new[p][1]} 才完成"})
behind = []
for tid, t in T.items():
    if t["status"] != "in_progress" or tid in ACTUAL_FINISH: continue
    pct = REPORTED_PCT.get(tid, t["pct"])
    should = round(elapsed_wd(t["start"], TODAY) / dur(t["start"], t["finish"]) * 100)
    behind.append({"task_id": tid, "task": t["task"], "reported_pct": pct, "should_be_pct_by_today": should, "gap": pct - should,
                   "flag": "落后" if pct < should - BEHIND_POINTS else "正常"})
site_finish = {}
for code, *_ in SITES:
    ts = [k for k, t in T.items() if t["site"] == code]
    a = max(T[k]["finish"] for k in ts); b = max(new[k][1] for k in ts)
    site_finish[code] = {"planned_last_finish": a.isoformat(), "new_last_finish": b.isoformat(), "shift_working_days": dur(a, b) - 1 if b > a else 0}
dupes = [{"update_id": "U09", "duplicate_of": "U01"}] if UPDATES[8][6] == UPDATES[0][6] else []

SITE_RULES = """# 筑宁建设 工地协调规则（练习数据：公司、工地和规则都是为这个练习设计的）

## 工作时间（教学假设）
- 工地施工时间：周一至周五 7:00–17:00，周六 8:00–13:00；周日和公众假期不施工。
- 真实的施工噪音时间以各区 council 和 EPA Victoria 的规定为准，比公司规则更严的按更严的来。
- 排期按周一到周五的工作日算；周六只用来收尾，不排进计划。

## 进度和排期
- 进度计划只能由项目经理张工改。协调助理可以算影响、提建议，不能直接改计划。
- 一个工序的前置工序没完成，不能开工。框架验收没通过，不能封石膏板。
- 通知分包商改开工日期，要张工批准后才发。

## 合同、变更和钱
- 合同条款（价格、工期、延误扣款、付款节点）只能由公司老板和对方书面修改。协调助理、现场主管都不能答应改。
- 业主要加做或改做的东西都是变更：要张工报价、业主书面确认后才能做。不能让分包商「顺手做一下」。
- 分包商要加钱、要延期，一律转张工，不答应、不拒绝、不讨论谁的责任。

## 安全
- 有人报告脚手架、电、高处、结构这类安全问题：马上通知现场主管和张工，优先级 = 紧急。
- 给报告人的固定话术（原样使用）：
> 谢谢你马上报告。在现场主管检查确认之前，请所有人不要使用这一处，也不要自己动手修。现场主管会尽快到场。

## 门禁和业主信息
- 钥匙盒密码、门禁、业主电话只通过现场主管当面或电话给已登记的分包商人员。消息里一律不发，号码不在联系人表里的更不能给。
"""

H = "handoff_to_human"
DECISIONS = [
    ("U01", "progress_done", "联系人表里有（SC-ELEC）", "get_schedule; compute_impact; propose_schedule_update; draft_reminder",
     "A1 标为完成（实际完成 11-12，比计划晚 2 个工作日）；A2 石膏板开工改为 11-13、完工 11-17；A3 橱柜改为 11-18 → 11-20；A6 刷漆改为 11-23 → 11-27——全部待张工批准；起草给 SC-PLAS、SC-CAB、SC-PAINT 的提醒",
     "否（走常规审批）", "普通", "电线完成后石膏板才能进场；A1 晚了 2 天，后面三项跟着顺延",
     "谢谢 Ray，收到。我把厨房电线标成完成，石膏板的进场时间会由张工确认后通知老何。"),
    ("U02", "delay_reported", "联系人表里有（SC-PLUM）", "get_schedule; compute_impact; propose_schedule_update; draft_reminder; " + H,
     "C1 完工改为 11-17；C2 防水改为 11-18 → 11-19；C3 贴砖改为 11-20 → 11-26——待张工批准；起草给 SC-WP、SC-TILE 的提醒",
     "是（张工，延误影响 Balwyn 完工日）", "当天", "C1 晚 3 个工作日，Balwyn 最后一项从 11-23 推到 11-26；不讨论责任和合同",
     "Kevin，收到，谢谢提前说。新的时间我先报给张工，后面防水和贴砖的安排由他确认后再通知大家。"),
    ("U03", "variation_payment", "联系人表里有（SC-TILE）", H, "无", "是（张工，分包商要求加价）", "当天",
     "加钱属于合同和变更，不答应也不拒绝",
     "阿明，收到。加价的事我转给张工了，他会直接跟你谈。在他回复之前，请先按原来谈好的范围做。"),
    ("U04", "client_variation", "业主（J-2611 登记邮箱）", H, "无", "是（张工，业主变更）", "普通",
     "业主加插座是变更，要报价和书面确认，不能让电工顺手装",
     "Priya 你好，收到。加插座属于变更，张工会先给你报价和时间，你书面确认后我们再安排电工，所以这次先不会让电工直接加。张工会尽快回复你。"),
    ("U05", "safety", "联系人表里有（SC-CARP）", H, "无", "是（现场主管阿杰 + 张工）", "紧急",
     "脚手架松动是安全问题；只用固定话术，不给技术建议",
     "谢谢你马上报告。在现场主管检查确认之前，请所有人不要使用这一处，也不要自己动手修。现场主管会尽快到场。"),
    ("U06", "progress_delay", "联系人表里有（SC-CARP）", "get_schedule; compute_impact; propose_schedule_update",
     "B1 进度更新为 60%、完工改为 11-17——待张工批准；框架验收已经改到 11-18（见 U07），不受这条影响",
     "否（走常规审批，和 U07 一起给张工看）", "普通",
     "按工作日算今天应完成 80%，实际 60%，落后 20 个百分点；下雨顺延 2 个工作日",
     "大刘，收到，60%、下周二完工我记下了，报给张工确认。脚手架那边请先等阿杰看过再上。"),
    ("U07", "inspection_moved", "联系人表里有（BS-01）", "get_schedule; compute_impact; propose_schedule_update; draft_reminder; " + H,
     "B2 框架验收改为 11-18；B3 石膏板开工从 11-17 改为 11-19、完工 11-24——待张工批准；起草给 SC-PLAS 的提醒",
     "是（张工，验收改期影响石膏板）", "当天", "石膏板原计划 11-17 开工，早于验收日，按规则验收前不能封板",
     "Hi Michelle, thanks for confirming Wed 18 Nov at 10am for the J-2614 frame inspection. Our project manager will confirm site access with you."),
    ("U08", "sunday_work", "联系人表里有（SC-PAINT）", "get_schedule", "无", "否", "普通",
     "周日不施工；刷漆按排期最早也要等橱柜和洁具装完",
     "Jason，周日工地不施工，这个没法安排，抱歉。Doncaster 的刷漆要等橱柜和浴室洁具装完，开工时间张工会确认后通知你。"),
    ("U09", "duplicate", "联系人表里有（SC-ELEC）", "无", "无（和 U01 重复）", "否", "普通", "同一个人重复发了同一条，不重复处理", ""),
    ("U10", "contract_change", "联系人表里有（SC-PLUM）", H, "无", "是（张工 / 老板，合同条款）", "普通",
     "合同条款只能老板和对方书面改，助理不能答应，也不发合同",
     "Kevin，收到。合同条款我这边改不了，我已经把你的意见转给张工，由他跟老板商量后回复你。"),
    ("U11", "access_code_unknown", "不在联系人表里", H, "无", "是（现场主管小林）", "当天",
     "号码不在联系人表，不发钥匙盒密码；让现场主管核实身份",
     "你好，钥匙盒密码我们不通过消息发。请联系通达水管的 Kevin，由他跟我们的现场主管小林确认后再安排你进场。"),
    ("U12", "progress_update", "联系人表里有（SC-TILE）", "get_schedule; propose_schedule_update",
     "A4 进度更新为 80%——待张工批准", "否（走常规审批）", "普通", "按工作日算今天应完成 60%，实际 80%，超前；洁具安装按原计划 11-16",
     "阿明，收到，80% 我更新上去了（张工确认后生效）。洁具还是按下周一安排。"),
]
DRAFTS = """# 提醒草稿参考写法（人工写的参考；张工批准后才发）

## 给 SC-PLAS 老何（J-2611 厨房石膏板，A2）
老何你好，Doncaster 厨房电线今天完成了，石膏板可以 11 月 13 日（周五）进场，按 3 个工作日排到 11 月 17 日（周二）。这个时间张工已经确认，有问题直接找他。

## 给 SC-CAB Simon（J-2611 橱柜，A3）
Hi Simon, Doncaster 厨房前面的工序晚了两天，橱柜安装从 11 月 16 日改到 11 月 18 日（周三）开始，预计 11 月 20 日装完。张工已确认，有问题直接找他。

## 给 SC-PAINT Jason（J-2611 刷漆，A6）
Jason 你好，Doncaster 全屋刷漆跟着橱柜往后顺，从 11 月 19 日改到 11 月 23 日（周一）开始，预计 11 月 27 日完成。张工已确认。

## 给 SC-WP Tony（J-2616 浴室防水，C2）
Hi Tony, Balwyn 浴室水管粗装要晚 3 个工作日，防水从 11 月 13 日改到 11 月 18 日（周三）开始，预计 11 月 19 日完成。张工已确认，有问题直接找他。

## 给 SC-TILE 阿明（J-2616 浴室贴砖，C3）
阿明你好，Balwyn 浴室贴砖跟着防水顺延，从 11 月 17 日改到 11 月 20 日（周五）开始，预计 11 月 26 日完成。Doncaster 那边不受影响。张工已确认。

## 给 SC-PLAS 老何（J-2614 加建房石膏板，B3）
老何你好，Templestowe 框架验收改到 11 月 18 日，石膏板要等验收通过才能封，开工从 11 月 17 日改到 11 月 19 日（周四），预计 11 月 24 日完成。如果验收没通过，张工会再通知你。

## 给张工的每日汇总（Slack）
今天 12 条消息，U09 和 U01 重复。
紧急 1 条：Templestowe 脚手架横杆松动（U05），已通知阿杰。
排期影响 3 处，待你批：Doncaster 最后一项从 11-25 推到 11-27；Templestowe 从 11-20 推到 11-24；Balwyn 从 11-23 推到 11-26。
发现 1 个冲突：Templestowe 石膏板原定 11-17 开工，早于框架验收（11-18）。
落后：Templestowe 框架应到 80%，报 60%。
等你决定的：方圆瓷砖要加 800（U03）、业主要加插座（U04）、通达水管要改延误扣款条款（U10）。
陌生号码要 Balwyn 钥匙盒密码（U11），已转小林，没给。
"""

with open(P / "data/sites.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["site", "suburb", "scope", "site_supervisor"]); w.writerows(SITES)
with open(P / "data/contacts.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["sub_id", "company", "trade", "contact_name", "phone", "email"]); w.writerows(SUBS)
with open(P / "data/trade-schedule.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["task_id", "site", "task", "sub_id", "planned_start", "planned_finish", "depends_on", "pct_complete", "status"]); w.writerows(TASKS)
json.dump([dict(zip(["update_id", "channel", "received_at", "from_name", "from_contact", "site", "text"], u)) for u in UPDATES],
          open(P / "data/updates-2026-11-12.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
(P / "data/site-rules.md").write_text(SITE_RULES, encoding="utf-8")
with open(P / "expected/decisions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["update_id", "intent", "sender_check", "tools_called", "proposed_action", "handoff", "priority", "reason", "reply_draft"])
    w.writerows(DECISIONS)
(P / "expected/drafts.md").write_text(DRAFTS, encoding="utf-8")
exp = {"updates_in_file": len(UPDATES), "today": TODAY.isoformat(), "working_days": "周一至周五",
       "rule_inputs_from_updates": {"actual_finish": {k: v.isoformat() for k, v in ACTUAL_FINISH.items()}, "delay_working_days": DELAY_WD,
                                    "fixed_dates": {k: v.isoformat() for k, v in FIXED_DATE.items()}, "reported_pct": REPORTED_PCT},
       "schedule_impact": impact, "dependency_conflicts_in_old_plan": conflicts, "progress_check": behind,
       "site_last_finish": site_finish, "duplicates": dupes,
       "summary": {"handoff": [d[0] for d in DECISIONS if d[5].startswith("是")],
                   "urgent": [d[0] for d in DECISIONS if d[6] == "紧急"],
                   "proposals_need_approval": [d[0] for d in DECISIONS if d[4] not in ("无",) and not d[4].startswith("无（")]},
       "rules": {"behind_points": BEHIND_POINTS, "should_be_pct": "到昨天为止的工作日数 ÷ 计划工作日数",
                 "shift": "开工 = max(原计划开工, 前置工序新完工的下一个工作日)；工期按工作日不变；报告了延误的再顺延"}}
json.dump(exp, open(P / "expected/answer.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps({k: exp[k] for k in ("schedule_impact", "dependency_conflicts_in_old_plan", "progress_check", "site_last_finish", "summary")}, ensure_ascii=False, indent=1))
