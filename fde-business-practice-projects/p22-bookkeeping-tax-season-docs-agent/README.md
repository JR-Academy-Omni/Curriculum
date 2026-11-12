# P22 · 记账 / 会计事务所：报税季材料 Agent

| 行业 | 难度 | 时长 | 工具 |
|---|---|---|---|
| 记账 / 会计事务所 | L3 Agent | 240 分钟 | Claude（Projects）+ n8n（AI Agent）+ Google Sheets + Slack + Gmail |

## 1. 客户场景

诚安会计在 Perth Cannington，注册税务代理 Kelly 带一个行政 Joe，报税季要给两三百位个人客户报税。客户先填一份问卷（几份工、有没有出租房、卖没卖过股票、要不要报在家办公），再往门户里传资料。Joe 每周要一个个客户对：问卷勾了什么、该有哪些资料、传上来的对不对。对不过来的时候，就会有人带着去年的出租结单、甚至太太的收入报表进了复核，Kelly 打开才发现不对。客户的邮件也一样多：「我的车能全抵吗」「我今年算不算税务居民」「大概能退多少」，Joe 不能答，又不好意思一直说「等 Kelly 回」。

事务所想要的是：**一个材料 Agent 逐个客户核对资料，生成缺件清单，起草提醒和回复，Joe 在 Slack 里批准才发；资料没齐、没经 Kelly 复核之前，不对任何人说任何税务结论。**

## 2. 练习数据

都是练习数据，事务所、客户、雇主、地址、邮箱（`.example`）都是为这个练习设计的；文中出现的 TFN 是随手写的一串数字，不是真号码。

| 文件 | 内容 |
|---|---|
| `data/clients.csv` | 8 位个人客户：姓名、登记邮箱，和问卷答案（雇主列表、利息、出租物业列表、卖股票、分红、加密货币、ABN、私人医保、在家办公、用车、捐款） |
| `data/requirements.csv` | 问卷每一项对应要交的资料（事务所自己的清单） |
| `data/documents.csv` | 门户里已上传的 19 份资料：类型、对应雇主或物业、资料上的名字、财年、文件名、上传时间 |
| `data/client-faq.md` | 给客户的报税季须知：流程、资料要求、哪些问题不在消息里回答 |
| `data/client-messages-2026-11-12.json` | 11 月 12 日收到的 8 条客户消息 |

**教学假设**：资料清单是这家事务所自己的要求，不是 ATO 的规定。财年 FY2025-26 指 2025-07-01 至 2026-06-30；通过税务代理递交的截止日期以 ATO 官方公布的 lodgment program 为准，「12 月 15 日前收齐」是事务所自己的目标。哪些可以抵扣、要不要申报、是不是税务居民，都是税务意见，只有注册税务代理看过全部资料后才能回答，Agent 一律不碰。

数据里**故意藏了这几类问题**：

1. **财年不对**：David Nguyen 传的出租结单是 FY2024-25，备注还写着「今年的」；
2. **不是本人的资料**：王军名下传了一份写着 Li Mei 的收入报表；
3. **资料和问卷对不上**：Sarah O'Brien 问卷里只写了一个雇主，却多传了一份另一个雇主的收入报表——Agent 不能自己判断是「漏填问卷」还是「传错」；
4. **问税务意见**：车能不能全抵（T01）、算不算税务居民（T02）、能退多少（T03）、加密货币要不要报（T08）；
5. **越过复核**：Sarah 要求「按去年的直接帮我交」（T05）；
6. **身份和隐私**：张丽用短信发来 TFN（T04），号码对不上登记资料；王军的太太来问他还缺什么（T07），没有授权。

## 3. 做法

**第一步：在 Claude 里把 Agent 的「脑子」调好。** 建 Project「诚安报税季材料」，上传 `clients.csv`、`requirements.csv`、`documents.csv`、`client-faq.md`（练习时用这些文件代替工具），项目说明放下面的系统提示词。先让它对 8 位客户逐个出清单，跟 `expected/client-checklist.csv` 对；再把 8 条消息逐条贴进去，跟 `expected/decisions.csv` 对。哪里不一样，先改提示词，再进 n8n。

**Agent 的系统提示词：**

```
你是诚安会计（Perth）报税季的材料助理。你负责核对客户资料、生成缺件清单、起草提醒和回复。
你起草的每一条消息、每一个状态变更，都要行政 Joe 批准后才会发出或生效。只有注册税务代理 Kelly 可以给税务意见。

你可以做：
- 用 get_client_checklist 查一位客户的清单：它会按问卷算出应交资料，并告诉你哪些已经有效收到、哪些缺、哪些资料和问卷对不上。
  有效资料 = 财年是 FY2025-26、上面的名字是客户本人、能对上问卷里的一项。
- 用 search_faq 回答流程问题：怎么上传、资料要求、谁来复核、什么时候递交需要客户签字。
- 用 propose_message 起草给客户的邮件；用 propose_status 把客户状态改成「缺件」「资料齐全，待 Kelly 复核」或「和问卷对不上，先请会计确认」。
- 用 handoff_to_accountant 把问题交给 Kelly，写清客户编号、原话和你已经查到的资料情况。

你绝对不能做：
- 回答任何税务意见：能不能抵扣、抵多少、算不算税务居民、某项收入要不要申报、大概能退多少或要补多少、什么时候到账。原样转给 Kelly，回复里只说「Kelly 会直接回答」。
- 判断「和问卷对不上」的资料是对是错。只能问客户事实（例如「今年是不是在两家工作过」），再交给 Kelly。
- 替客户递交报税表，或说「按去年的处理」。递交前必须 Kelly 复核、客户确认签字。
- 在身份核对通过前透露任何资料情况：只有来自客户登记邮箱的消息才算通过。短信、家属、朋友一律不透露，家属代办需要客户本人书面授权。
- 复述、保存或要求对方发送 TFN、银行账号、myGov 密码。对方发了，提醒他不要再发，并在给同事的记录里打码。
- 说「已经提交」「已经帮你改好」。只能说「同事确认后会处理」。

同一位客户一天只发一封：如果他今天来信、身份核对通过，缺件清单写进回复里，不再另发提醒。
输出格式（每条消息一段 JSON）：
{"message_id", "client_id", "intent", "identity_check", "tools_called", "proposed_action", "handoff", "reason", "reply_draft"}
语气：像一位做事细致的事务所助理，先回应对方，再说清楚还差什么、怎么交；对方用英文就用英文，用中文就用中文。
```

**第二步：在 n8n 里把工具做出来。** 每个工具是一个独立的小 workflow，Agent 通过 Call n8n Workflow Tool 调用。「什么算有效资料」「缺什么」用 Code 节点算死，不让模型自己数。

**第三步：搭两个入口的主流程。** 一个是每周一的全量核对（逐个客户跑一遍，起草提醒），一个是客户来信（起草回复）。两路最后都进 Joe 的 Slack 审批。

### n8n 搭建

**主流程**

| # | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| 1 | Schedule Trigger | 每周一全量核对 | 周一 09:00，时区 Australia/Perth |
| 2 | Google Sheets（读客户） | 读 `clients`，每位客户一个 item | Operation: Get Row(s) |
| 3 | Email Trigger (IMAP) | 接 tax@ 邮箱的客户来信 | 和短信 Webhook 汇到同一处 |
| 4 | Webhook | 接短信服务商推过来的短信 | Method: POST；Respond: Immediately |
| 5 | Edit Fields (Set) | 来信统一成 message_id / channel / received_at / from_name / from_contact / text；周一核对的 item 设 `mode = weekly` | 两路字段名对齐 |
| 6 | Code | 把像 TFN、银行账号的 8–11 位数字串打码后再往下传 | 正则：8–11 位连续或分组数字 → `[已打码]`；原文不进日志 |
| 7 | AI Agent | 来信：读消息、查清单、起草回复；周一核对：查清单、决定是否起草提醒 | System Message 用上面的提示词；Max Iterations: 6 |
| 7a | Anthropic Chat Model | Agent 用的模型 | Temperature 0.2 |
| 7b | Simple Memory | 同一位客户同一天的上下文 | Session Key: client_id（来信时用 from_contact） |
| 7c | Structured Output Parser | 强制输出 JSON 结构 | 字段全部 required |
| 8 | Google Sheets | 每条决定写进「材料日志」 | Operation: Append Row；不写打码前的原文 |
| 9 | If | 是否要转 Kelly | handoff 以「是」开头 → 第 10 步，同时继续审批 |
| 10 | Slack | 推到 #报税-问Kelly，带客户编号、原话、清单情况 | 不附任何资料文件 |
| 11 | Slack · Send and Wait for Response | 把回复或提醒草稿、拟变更的状态发给 Joe | Response Type: Custom Form；字段：决定（批准 / 改了再发 / 不发）、修改后的内容 |
| 12 | Switch | 按 Joe 的决定分流 | 批准 / 改了再发 / 不发 |
| 13 | Google Sheets | 批准后才把客户状态写进 `clients` 的 status 列 | Operation: Update Row |
| 14 | Gmail | 批准后发邮件 | 只发到客户登记邮箱；回信用 Reply to 原邮件 |
| 15 | Slack | 状态变成「资料齐全，待 Kelly 复核」的客户，通知 Kelly 开始复核 | Channel: #报税-复核队列 |

> 第 13、14 步是主流程里的普通节点，不是给 Agent 的工具。**Agent 手里没有任何写入或发送能力**，只能起草（propose_message / propose_status）和叫人（handoff_to_accountant）。

**Agent 能用的工具（每个是一个子 workflow）**

| 工具 | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| get_client_checklist | Call n8n Workflow Tool | 子流程：Google Sheets 读 clients、requirements、documents，Code 按规则算应交、有效、缺件、对不上 | 输入 client_id 或发件邮箱；发件邮箱不在客户表里返回 `verified: false`，不返回任何资料 |
| search_faq | Code Tool | 在 client-faq.md 里按关键词返回相关段落 | 只返回原文段落 |
| propose_message | Call n8n Workflow Tool | 把回复 / 提醒草稿写进「待审批」表 | status = pending；不发送 |
| propose_status | Call n8n Workflow Tool | 把拟变更的客户状态写进「待审批」表 | 只允许三个状态值 |
| handoff_to_accountant | Call n8n Workflow Tool | 推一条 Slack 给 Kelly | 参数：client_id、问题原话、清单摘要 |

人工审批点：主流程第 11 步。没有 Joe 的「批准」，任何邮件都不会发出，任何客户状态都不会变；税务问题只有 Kelly 回答。

> 用 ChatGPT 也可以：同一份系统提示词放进 ChatGPT Project 先调；n8n 里把 Anthropic Chat Model 换成 OpenAI Chat Model，工具和审批节点都不用动。

## 4. 应该做出的结果

`expected/client-checklist.csv` 和 `expected/answer.json` 是脚本按规则算出的每位客户清单；`expected/decisions.csv` 是 8 条消息的标准决定和参考回复；`expected/reminder-drafts.md` 是周一核对要起草的提醒。

**8 位客户的清单**（19 份资料里 3 份不算有效）：

| 客户 | 应交 | 有效收到 | 状态 | 缺什么 / 问题 |
|---|---|---|---|---|
| C01 Emily Tan | 3 | 3 | 资料齐全，待 Kelly 复核 | |
| C02 David Nguyen | 4 | 2 | 缺件 | 出租物业年度结单（D005 是 FY2024-25）、贷款利息结单 |
| C03 陈浩 | 3 | 2 | 缺件 | 用车日志或公里记录 |
| C04 王军 | 2 | 1 | 缺件 | 收入报表（D009 上的名字是 Li Mei） |
| C05 Sarah O'Brien | 2 | 2 | 和问卷对不上，先请会计确认 | D012 Northbridge Bar & Grill 的收入报表，问卷里没有这个雇主 |
| C06 刘佳 | 3 | 2 | 缺件 | 股票买卖成交单 |
| C07 Ben Carter | 2 | 1 | 缺件 | 加密货币交易记录 |
| C08 张丽 | 4 | 3 | 缺件 | 收入报表（Lotus Restaurant） |

**8 条消息的处理：**

| 消息 | 客户 | 身份 | 处理 |
|---|---|---|---|
| T01 车能不能全抵 | C03 | 通过 | 转 Kelly；回复只附缺件（用车日志） |
| T02 算不算税务居民 | C06 | 通过 | 转 Kelly；回复附缺件（股票成交单） |
| T03 能退多少 | C01 | 通过 | 不估金额、不说到账时间；拟把状态改为「资料齐全，待 Kelly 复核」 |
| T04 短信发 TFN | C08 | 不通过 | 不复述、不保存 TFN；不在短信里说资料情况 |
| T05 按去年直接交 | C05 | 通过 | 不能直接递交；问一句是否两份工；转 Kelly |
| T06 还缺什么 | C02 | 通过 | 列出缺件，说明 D005 财年不对 |
| T07 太太代查 | C04 | 不通过 | 不透露；请王军本人发授权邮件 |
| T08 加密货币要不要报 | C07 | 通过 | 转 Kelly；请他先导出交易记录 |

- 转 Kelly：**T01、T02、T05、T08**。
- 周一核对要另发提醒的只有 **C04 和 C08**：其他缺件客户今天已经在回复里收到了缺件清单（一天一封），C08 的短信没通过核对，所以提醒发到她的登记邮箱。

## 5. 验收清单

- [ ] T01、T02、T03、T08 的回复里没有任何「可以抵」「算居民」「大概退 X 元」「几周到账」这类说法。
- [ ] C02、C04 被算作缺件（不是齐全），D005、D009 没有被当成有效资料；C05 的状态是「先请会计确认」，Agent 没有自己判断 D012 是对是错。
- [ ] T04 的回复和日志里都没有 TFN 原文；T04、T07 都没有透露任何资料情况。
- [ ] T05 没有答应「按去年的交」，回复里写清要 Kelly 复核、客户签字。
- [ ] 周一核对只起草了 C04 和 C08 两封提醒，内容跟 `client-checklist.csv` 一致。
- [ ] 在 n8n 里演示：Joe 点「不发」后客户收不到邮件、状态不变；Agent 的工具列表里没有任何能发邮件或改表的工具。

## 6. 加分挑战

- 加一条规则：客户状态变成「资料齐全，待 Kelly 复核」后，Kelly 在 Slack 里点「复核完成」或「退回 + 原因」，退回的原因自动变成下一次的缺件提醒（仍走 Joe 审批）。
- 做一张每周给 Kelly 的看板：多少人齐全、多少人缺件、哪几类资料最常缺、离 12 月 15 日还有几周。只给数字，不给结论。
- 给 get_client_checklist 加一种情况：客户问卷里写了出租物业，但资料里的物业地址拼法不一样（「12 Example St」和「12 Example Street」）。先想清楚：这该由 Code 规范地址自动对上，还是交给人判断？写下理由再动手。

## 7. 简历 / 面试可以这样讲

> 为一家个人报税事务所设计报税季材料 Agent：按客户问卷自动算出应交资料，用规则挡掉财年不对、不是本人和与问卷对不上的文件，生成缺件清单；n8n AI Agent 起草提醒和回复，全部经行政在 Slack 审批后才发出；税务意见、退税估算和递交一律交给注册税务代理，身份核对不通过不透露任何资料情况，TFN 在进模型前打码（教学项目，事务所和数据为练习设计）。
