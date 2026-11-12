# P41 · 通用：新员工入职清单：IT、HR、主管各自确认

| 行业 | 难度 | 时长 | 工具 |
|---|---|---|---|
| 通用 | L2 Workflow | 150 分钟 | Claude + n8n + Google Sheets + Slack + Gmail |

## 1. 客户场景

启航建材贸易在悉尼 Silverwater，二十几个人，有办公室也有仓库。接下来两周要进三个新人：一个销售助理、一个仓库叉车工、一个财务专员。入职的事分在三拨人手里：HR 王佳管 offer、入职表和 Fair Work 资料，IT 的 Tom 管邮箱、电脑、门禁，主管管第一周安排和岗位核验。现在大家在一张共享 Excel 里各自打勾，结果常常是：新人第一天到了，电脑没装好，因为是 HR 顺手替 IT 打的勾；叉车工的入职日 HR 系统和 offer 信写的不一样；还有一个新人到现在都没人说她归谁管。更麻烦的是，有人把新人发来的税号和银行账号直接写进了备注。

老板郑总想要的是：**每天早上系统自己算出每个新人还差什么、谁该做、哪天到期，分别提醒对应的人；入职前一天主管和 HR 都确认「准备好了」，才给新人发第一天的欢迎邮件。**

## 2. 练习数据

| 文件 | 内容 |
|---|---|
| `data/new-hires.csv` | 3 位新人：hire_id, name, position, site（office / warehouse）, start_date（HR 系统）, offer_start_date（offer 信）, manager_id, personal_email |
| `data/people.csv` | 负责入职的 5 个人：HR、IT、两位主管、老板 |
| `data/checklist-template.csv` | 11 项入职任务：task_id, task, owner_role（HR / IT / 主管）, due_offset_days（相对入职日）, applies_to（all / office / warehouse） |
| `data/task-status-2026-11-12.csv` | 到今天为止的确认记录：hire_id, task_id, status, confirmed_by, confirmed_at, note |

全部是练习数据，公司、新人、负责人都是为这个练习设计的，邮箱是 `.example` 域名，备注里的税号和银行账号也是编的。

数据里**故意藏了 5 处问题**：

1. **入职日期对不上**：Jack Nguyen 在 HR 系统里是 11-17，offer 信上是 11-24。
2. **没有主管**：孙悦的 manager_id 是空的，她的三项主管任务没人负责。
3. **确认人角色不对**：赵敏的电脑是 HR 王佳点的完成，这项必须 IT 确认。
4. **过期**：Jack 的入职表、孙悦的 offer 签回，截止日已经过了。
5. **敏感信息写进了清单**：Jack 的入职表备注里有 TFN 和银行账号。

教学假设：入职表里收 TFN 申报、养老金选择、银行信息，发 Fair Work Information Statement，只用来练流程；具体要发哪些文件、怎么收，以 ATO 和 Fair Work Ombudsman 的官方说明为准。叉车证是否有效由主管看原件核验，流程不做判断。

## 3. 做法

**清单规则**：

- 截止日 = 入职日 + due_offset_days；开工前的任务如果落在周六日，提前到周五。
- HR 系统和 offer 信的入职日不一致：先按较早的日期排，并提醒 HR 确认。
- 只有 owner_role 对应角色的人确认才算完成；别人代点的标 invalid_confirmation，不算。
- 状态：done / overdue（截止日早于今天）/ due_soon（3 天内到期）/ upcoming / unassigned（没有负责人）。
- 备注里出现 TFN、BSB、银行账号：清单里打码，提醒 HR 走 HR 系统重新收，原文删除。

**第一步：在 Claude 里把规则跑通。** 新建 Project「启航 入职清单」，上传四个文件，说明里写：

```
你是启航建材贸易的入职清单助手。今天是 2026-11-12。
1. 按 checklist-template 给每位新人展开任务（applies_to 要和 site 对上），按上面的规则算截止日和状态。
2. 每一行输出：hire_id, hire, task_id, task, owner_role, owner, due, status, note。
3. 找出以下问题并单独列出：入职日期不一致、没有主管、确认人角色不对、备注里有敏感信息。
   敏感信息只写「备注里有 TFN / 银行信息」，不要复述号码。
4. 按负责人汇总提醒：每人一条消息，只列他自己的过期、3 天内到期和需要重新确认的任务。
你只出清单和提醒草稿，不替任何人确认任务、不改入职日期、不指定主管。
```

拿结果跟第 4 节对。对不上先改规则，规则对了再进 n8n。

**第二步：建 Google Sheets。** 一个表格四张工作表，跟 `data/` 里的四个文件一样；再加一张 `onboarding_log` 记提醒和审批。任务确认用 n8n Form：负责人填 hire_id、task_id，系统从 Slack 用户自动带出确认人。

**第三步：按下面的节点搭 n8n。** 截止日、状态、角色核对全放在 Code 节点里；Claude 只负责把提醒和欢迎邮件写成人话。

### n8n 搭建

| # | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| 1 | Schedule Trigger | 每个工作日早上触发 | 周一到周五 08:30，时区 Australia/Sydney |
| 2 | Google Sheets（读四张表） | 读新人、负责人、模板、确认记录 | Operation: Get Row(s)；四个节点并排 |
| 3 | Merge | 把四路数据交给 Code | Mode: Append；或在 Code 里用 `$('读模板').all()` 取 |
| 4 | Code（展开清单） | 按规则算截止日、状态、角色核对；备注里的 TFN / 银行信息打码 | Run Once for All Items；正则：`TFN\s*[\d ]{9,11}`、`BSB\s*[\d-]{6,7}`、`账号\s*\d{6,}` |
| 5 | Google Sheets（写回状态） | 把计算后的状态和打码后的备注写回确认记录表 | Operation: Update Row；原备注被覆盖成打码版 |
| 6 | Filter | 只留需要提醒的行 | status 是 overdue / due_soon / invalid_confirmation / unassigned |
| 7 | Aggregate | 按负责人合成一条 | Group by owner；没有负责人的归给 HR |
| 8 | Basic LLM Chain + Anthropic Chat Model | 把清单写成提醒消息 | 任务、日期、状态照抄，不加清单里没有的事 |
| 9 | Slack | 私信每位负责人 | Send Message；附确认表单链接 |
| 10 | Slack | 入职日期不一致、没有主管、敏感信息 → 发给 HR 和郑总 | Channel: #入职；只写问题类型，不写号码 |
| 11 | Filter（明天入职的人） | 入职日 = 下一个工作日 | Date & Time 节点先算出下一个工作日 |
| 12 | If（是否全部完成） | 开工前的任务都 done 才往下走 | 有没完成的 → 回到第 9 步再提醒一次 |
| 13 | Slack · Send and Wait for Response（主管确认） | 主管确认「第一天准备好了」 | Response Type: Approval |
| 14 | Slack · Send and Wait for Response（HR 确认） | HR 王佳最后确认 | Response Type: Approval；看到入职日期冲突未解决时必须点 Decline |
| 15 | Basic LLM Chain + Anthropic Chat Model | 起草给新人的欢迎邮件：几点到、找谁、带什么 | 只用清单和新人表里的信息 |
| 16 | Gmail | 两个确认都通过后才发欢迎邮件 | To: personal_email；发完写 onboarding_log |

人工审批点：第 13、14 步。没有主管和 HR 的确认，新人收不到欢迎邮件；流程不会替任何人点完成、改入职日期或指定主管。

> 用 ChatGPT 也可以：第一步用 ChatGPT Project 跑同样的规则；n8n 里把 Anthropic Chat Model 换成 OpenAI Chat Model，其他节点不变。

## 4. 应该做出的结果

`expected/answer.json` 是标准答案（脚本按同样规则算出），`expected/task-board.csv` 是 28 行任务清单，`expected/reminder-drafts.md` 是三条提醒消息的参考写法。

3 位新人共 28 项任务（赵敏 9、Jack 10、孙悦 9）。到 2026-11-12：

| 状态 | 数量 |
|---|---|
| done | 5 |
| overdue | 2 |
| due_soon（3 天内） | 5 |
| upcoming | 12 |
| invalid_confirmation | 1 |
| unassigned | 3 |

| 新人 | 入职（排期用） | 完成 | 需要处理 |
|---|---|---|---|
| H01 赵敏 | 2026-11-17 | 4 / 9 | T05 电脑由 HR 代点，要 IT 重新确认；T03 11-13 到期 |
| H02 Jack Nguyen | 2026-11-17（offer 信 11-24，待确认） | 1 / 10 | T02 入职表过期 2 天，且备注有 TFN / 银行信息；T03、T04、T07、T08 11-13 到期 |
| H03 孙悦 | 2026-11-24 | 0 / 9 | T01 offer 签回过期 2 天；没有主管，T07、T10、T11 无人负责 |

周末顺延的例子：Jack 的 T08 核验叉车证，入职日 −2 天是 11-15（周日），提前到 11-13（周五）。

今天的提醒：Tom Lee 2 条、李伟 2 条、王佳 7 条（含孙悦三项没主管的任务），陈刚今天没有要提醒的。

## 5. 验收清单

- [ ] 任务 28 行，状态计数跟上表一致；Jack 的截止日按 11-17 排，并提醒了 HR 确认日期。
- [ ] 赵敏的 T05 不算完成，提醒发给了 Tom，不是王佳。
- [ ] 孙悦的三项主管任务标 unassigned，提醒归给 HR，没有被随便塞给某位主管。
- [ ] 清单、Slack 消息、日志里都没有出现 TFN 和银行账号原文。
- [ ] 在 n8n 里演示：主管点 Approve、HR 点 Decline 时，新人收不到欢迎邮件；开工前任务没做完时，流程不会进入确认环节。

## 6. 加分挑战

- 加离职清单：反过来收回电脑、门禁、账号，最后一天由 IT 确认账号已停用。
- 新人入职第 5 天，给主管发一条第一周回顾的问题清单，回答写进 HR 系统而不是 Slack。
- 每周一给郑总一份汇总：本周入职几人、平均提前几天准备好、哪类任务最常拖。

## 7. 简历 / 面试可以这样讲

> 为一家二十多人的建材贸易公司设计入职清单流程：n8n 每天按模板给每位新人展开 IT、HR、主管的任务，自动算截止日（周末提前）、过期和临近到期，并按负责人分别提醒；非本角色代点的确认不算完成，入职日期冲突、缺少主管、备注里的税号和银行信息都单独拦下并打码；入职前一天经主管和 HR 两级确认后才给新人发欢迎邮件（教学项目，公司和人员都是为练习设计的）。
