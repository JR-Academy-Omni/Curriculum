# P07 · 教育培训：试听报名 → 分班 → 家长确认 → 发课表

| 行业 | 难度 | 时长 | 工具 |
|---|---|---|---|
| 教育培训 | L2 Workflow | 150 分钟 | Claude（Projects）+ n8n + Google Sheets + Gmail + Slack |

## 1. 客户场景

启明教育是墨尔本 Box Hill 的一家课后补习中心，做小学到初中的数学、英语和精英中学考试（Selective）备考。每年 11 月办免费试听，家长在网站表单报名，试听老师课后给每个孩子标 A（超前）或 B（同年级水平）。接下来教务何老师要做的事很琐碎：把二十几个孩子按年级、科目、水平、家长想要的时间塞进十个班；满了的进候补；给每个家长发确认邮件；家长回了再一个个看，确认的发课表，要换时间的、要退费的、说不报的分别处理。去年她用 Excel 加手写邮件做了整整一周，还把一个孩子排进了满员的班。

她想要的是：**分班按规则自动排好，她看一眼点「通过」才发邮件；家长回信自动归类，确认的直接收到课表，其他的推给她。**

## 2. 练习数据

| 文件 | 内容 |
|---|---|
| `data/trial-signups.csv` | 20 条试听报名：signup_id, submitted_at, student_name, year_level, subject, trial_date, trial_level, preferred_days, parent_name, parent_email, parent_note |
| `data/classes.csv` | 10 个班：class_id, subject, year_from, year_to, level, day, time, room, teacher, capacity, enrolled_now |
| `data/term-calendar.json` | 学校自己的 2027 Term 1：第一周周一、每班 10 节、停课日 |
| `data/parent-replies.txt` | 8 封家长回信（对分班确认邮件的回复） |

全部是练习数据，学校、学生、家长、邮箱（`example.com`）都是为这个练习设计的。停课日按 Victoria 公众假期设的教学假设（Labour Day 2027-03-08、复活节 2027-03-26 至 03-29），实际日期以 Victoria 官方公布为准。

分班规则（写进 Code 节点）：

1. 按报名时间先到先得。
2. 科目相同、年级落在班的年级范围内、水平（A / B）相同，才算匹配的班。
3. 按家长填的意向日期顺序找有空位的班（空位 = capacity − enrolled_now − 本轮已排）。
4. 意向日期的班都满了 → 候补；如果同类班在别的日子还有位，列出来让教务问家长。
5. 一个匹配的班都没有 → 转教务人工处理。

数据里**故意藏了 5 类问题**：

1. **重复报名**：Ella Wang 报了两次，第二次邮箱大小写不同（`Wang.Fang@` vs `wang.fang@`）。
2. **没有对应的班**：Year 11 的孩子（中心不开 VCE 班），以及 Year 7 水平 B（只有 Year 7–8 A 班）。
3. **班满了**：Year 5–6 English A、精英班、Year 3–4 Maths B 都会有人进候补。
4. **家长没留邮箱**：Aaron Ye 只留了微信号，有位子但确认邮件发不出去。
5. **回信人对不上**：R06 的发件邮箱不是报名时留的邮箱，不能当成家长确认。另有家长问退费、要求换时间，都必须交给人。

## 3. 做法

**先在 Claude 里跑通，再搬到 n8n。**

**第一步：建 Claude Project「启明分班」**，上传 `classes.csv`、`term-calendar.json`，项目说明写：

```
你是启明教育的教务助理。你做两件事：
A. 分班：我上传试听报名表时，严格按下面规则排班，输出一张表（signup_id, 学生, 结果, 班号, 说明）：
   1) 按 submitted_at 先到先得；2) 学生姓名 + 家长邮箱（不分大小写）相同视为重复报名，只保留最早一条；
   3) 科目、年级范围、试听水平都对上才算匹配；4) 按家长意向日期顺序找有空位的班；
   5) 意向日期都满 → 候补，并列出别的日子还有位的同类班；6) 没有匹配的班 → 转教务；
   7) 没有家长邮箱 → 照常排班，但标「需电话 / 微信联系」。
   分完写一段给何老师的摘要：排进几个、候补几个、需要她处理的有哪些。
B. 读家长回信：每封回信判断 intent（confirm / change_request / decline / question / unverified），
   发件邮箱和报名邮箱不一致一律 unverified。只有 confirm 才写课表邮件；涉及退费、费用、换班、投诉的问题，
   一律写「教务老师会单独回复」，不要自己回答学校政策。
   课表：从 term-calendar 第一周对应星期开始，每周一节，遇到停课日顺延，共 10 节，列出全部日期并说明哪天停课。
语气：像教务老师写给家长的邮件，简短、礼貌，不用营销腔。
```

先上传 `trial-signups.csv` 让它分班，对照 `expected/answer.json`；再贴入 `parent-replies.txt`，对照 `expected/decisions.csv`。

**第二步：在 n8n 里搭流程。** 分班和排课表是规则，放 Code 节点；读回信的意图交给 Text Classifier。

### n8n 搭建

**流程 A · 分班 → 审批 → 发确认邮件**

| # | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| 1 | Schedule Trigger | 试听周结束后每天早上 8 点跑一次 | Trigger Interval: Days；Hour: 8 |
| 2 | Google Sheets | 读「试听报名」表里状态为空的行 | Operation: Get Row(s)；Filter: status 为空 |
| 3 | Google Sheets | 读「班级」表 | Operation: Get Row(s) |
| 4 | Code | 去重 + 按规则分班，算剩余座位 | 输入两张表；输出每个学生的 result / class_id / detail |
| 5 | Aggregate | 把所有结果合成一张清单 | Aggregate: All Item Data |
| 6 | Slack · Send and Wait for Response | 把分班清单发给何老师审批 | Channel: #教务；Response Type: Approval；Approval Options: Approve and Disapprove |
| 7 | If | 何老师批准了吗 | `{{$json.data.approved}}` 为 true |
| 8 | Split Out | 拆回每个学生一条 | Field: allocation |
| 9 | Switch | 按结果分流 | allocated / waitlist / allocated_need_contact / no_class / duplicate |
| 10 | Basic LLM Chain（接 Anthropic Chat Model） | 写给家长的确认邮件或候补通知 | 班号、时间、老师从上游字段带入，提示词写明「不改时间、不承诺候补一定有位」 |
| 11 | Gmail | 发确认邮件 / 候补通知 | To: parent_email；Subject: 启明教育 2027 Term 1 分班确认 |
| 12 | Slack | no_class / need_contact 的学生推给何老师手动处理 | Channel: #教务 |
| 13 | Google Sheets | 回写状态（已发确认 / 候补 / 待人工 / 重复） | Operation: Update Row，按 signup_id 匹配 |

**流程 B · 读家长回信 → 发课表**

| # | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| 1 | Email Trigger (IMAP) | 监听教务邮箱里主题含「分班确认」的回信 | Mailbox: INBOX |
| 2 | Google Sheets | 按发件邮箱查报名记录 | Operation: Get Row(s)；Filter: parent_email = 发件人（小写） |
| 3 | If | 查到了吗 | 没查到 → 走 unverified，直接推 Slack 给何老师 |
| 4 | Text Classifier（接 Anthropic Chat Model） | 判断回信意图 | 类别：confirm / change_request / decline / question；每类写一句说明；开启「允许多个类别」以识别「确认 + 退费提问」 |
| 5 | Switch | 按意图分流 | confirm / change_request / decline / question |
| 6 | Read/Write Files from Disk 或 Google Sheets | 读 term-calendar（停课日） | 放在 Google Sheets「停课日」页也可以 |
| 7 | Code | 生成 10 节课的日期，跳过停课日 | 输出 lesson_dates[] 和 skipped[] |
| 8 | Basic LLM Chain | 写课表邮件 | 日期原样照抄；如果信里还有问题，加一句「教务老师会单独回复您」 |
| 9 | Gmail | 发课表 | Reply to 原邮件 |
| 10 | Slack · Send and Wait for Response | change_request / decline / 退费提问推给何老师，等她决定 | Response Type: Free Text；她回复的处理方式写回表格 |
| 11 | Google Sheets | 更新状态（已确认 / 已退出 / 待处理），decline 时释放座位 | Operation: Update Row |

人工审批点：流程 A 第 6 步（分班总表必须何老师批准才发任何邮件）；流程 B 第 3、10 步（身份对不上、换时间、退出、退费一律交给她）。

> 用 ChatGPT 也可以：Project 规则原样贴进 ChatGPT Project；n8n 里把 Anthropic Chat Model 换成 OpenAI Chat Model，Text Classifier 和 Basic LLM Chain 都能直接接。

## 4. 应该做出的结果

`expected/answer.json`（脚本算的分班和课表）和 `expected/decisions.csv`（8 封回信的判断）是标准答案。

**分班**：20 条报名 → 排进 13 人（其中 Aaron Ye 需电话 / 微信联系）、候补 4 人、转人工 2 人、重复 1 条。

| 结果 | 学生 |
|---|---|
| 候补 | Mia Li（可问家长能否改周一 C10）、Noah Chen（C06 满）、Henry Xu（精英班满）、Sophie Guo（C01 满） |
| 转人工 | Oliver Huang（Year 11 无班）、Ruby Tan（Year 7 水平 B 无班） |
| 重复 | S07 = S01 Ella Wang |

分完后 C01、C02、C06、C08 满员。

**回信**：8 封里 5 封确认（R01、R02、R05、R07、R08）→ 发课表；R03 换时间、R04 不报、R06 身份对不上 → 交何老师；R05 的退费问题也交何老师。R04 退出后 C04 多出 1 个位。

**课表（各 10 节）**：

| 学生 | 班 | 第一节 | 最后一节 | 停课 |
|---|---|---|---|---|
| Ella Wang | C01 周六 09:30 | 2027-02-06 | 2027-04-17 | 03-27 |
| Lucas Zhang | C02 周六 11:00 | 2027-02-06 | 2027-04-17 | 03-27 |
| Grace Zhou | C08 周日 10:00 | 2027-02-07 | 2027-04-18 | 03-28 |
| Isla Cao | C10 周一 16:30 | 2027-02-01 | 2027-04-19 | 03-08、03-29 |
| Leo Sun | C09 周一 17:00 | 2027-02-01 | 2027-04-19 | 03-08、03-29 |

还没回信的已排班家长：S13、S14、S17、S19、S20（可以做加分挑战里的催回复）。

## 5. 验收清单

- [ ] Ella Wang 只占 C01 一个位；C01 最终 8/8，没有超员。
- [ ] Oliver Huang、Ruby Tan 没被硬塞进相近的班，而是推给了教务。
- [ ] Aaron Ye 排进了 C09，但流程没有尝试给空邮箱发邮件。
- [ ] 分班清单在 Slack 里被批准之前，没有任何家长收到邮件（演示一次「Disapprove」）。
- [ ] R06 没收到课表；R05 收到了课表，但退费问题没被 AI 自己回答。
- [ ] 5 份课表的日期和停课日跟标准答案一致。

## 6. 加分挑战

- R04 退出后 C04 多了一个位：做一个「有人退出 → 查候补 → 通知教务」的小分支（这批数据 C04 没人候补，换一个班测试）。
- 加一个 Schedule Trigger：确认邮件发出 3 天还没回信的家长，自动起草一封提醒，同样要何老师点头再发。
- 把课表另外写进 Google Calendar，给每个确认的学生建一个重复日程，停课日不建。

## 7. 简历 / 面试可以这样讲

> 为一家补习中心设计「试听 → 分班 → 家长确认 → 发课表」流程：分班和排课日期用 Code 节点按规则计算（先到先得、年级水平匹配、满员候补、停课顺延），家长回信用 Text Classifier 归类；分班总表经教务在 Slack 审批后才发邮件，身份对不上、换班、退出和退费问题全部转人工，避免系统替学校承诺政策（教学项目，学校和数据都是为练习设计的）。
