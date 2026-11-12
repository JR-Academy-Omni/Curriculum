# P06 · 诊所 / 牙医：前台 Agent

| 行业 | 难度 | 时长 | 工具 |
|---|---|---|---|
| 诊所 / 牙医 | L3 Agent | 240 分钟 | Claude（Projects）+ n8n（AI Agent）+ Google Sheets + Slack + Gmail |

## 1. 客户场景

安心牙科在悉尼 Hurstville，两位医生、一个前台 Amy。每天网站聊天、短信、邮件加起来几十条消息，一大半是重复问题：周六开不开、哪里停车、洗牙多少钱、Bupa 能报多少；剩下的是改约、取消、想提前。Amy 一边接待到诊病人一边回消息，回慢了病人就打电话，电话一响她手上的事又断了。更让诊所经理担心的是另外两件事：有人在聊天里问「牙疼吃几片布洛芬」，以前有同事顺手就回了；还有家属来问「我老公几点看牙」，同事也直接告诉了。

诊所想要的是：**一个前台 Agent 先把消息读懂、查好、把回复和要做的改动都准备好，Amy 在 Slack 里看一眼点「批准」就发；凡是病情、用药、诊断的问题，一律不回答，直接交给人。**

## 2. 练习数据

| 文件 | 内容 |
|---|---|
| `data/messages-2026-11-11.json` | 一天的 15 条消息：message_id, channel, received_at, from_name, from_contact, text |
| `data/clinic-faq.md` | 前台知识库：营业时间、停车、价格、保险、CDBS、改约政策、隐私规则、紧急情况固定话术 |
| `data/patients.csv` | 11 位病人的最少必要信息：patient_id, first_name, last_name, dob, contact_email |
| `data/appointments.csv` | 消息里涉及的 7 个预约：appt_id, patient_id, dentist, start, minutes, type, status |
| `data/slots.csv` | 11-12 至 11-28 两位医生的 30 分钟时间格，free / booked（不含病人信息） |
| `data/waitlist.csv` | 现有 3 条候补 |

全部是练习数据，诊所、病人、邮箱（`example.com`）、价格、Medicare 号码都是为这个练习设计的。CDBS 资格和额度、私人保险报销、保险项目编号，以 Services Australia 和各保险公司的官方答复为准；本项目不涉及任何临床判断。

**隐私设计**：Agent 看不到病历，也不能直接读 `patients.csv`。它只能通过工具用「全名 + 生日」查预约，工具只返回预约编号、时间、医生、类型。`slots.csv` 只有空 / 满，不带病人名字。

数据里**故意藏了 5 类必须拦下的情况**：

1. **病情 / 用药问题**（M05 牙疼吃几片药）和 **术后紧急情况**（M06 拔牙后出血不止）：不给任何建议，转人工，紧急的用固定话术。
2. **代查别人的预约**（M07 太太问丈夫几点看牙）：不透露任何信息。
3. **身份对不上**（M08 生日日月写反）：不能替对方「猜」是写反了，不取消、不透露。
4. **24 小时内改约**（M04）：按政策可能收费，Agent 不能自己免，也不能自己说一定收。
5. **主动发来 Medicare 号**（M13）：不复述、不保存，提醒对方别在聊天里发。

另外还有：投诉账单（M14，转经理）、种植牙问价（M11，不报价）、取消后空位给候补（M10）、两条消息的候选时间撞在同一个空位上（M04 和 M15）。

## 3. 做法

**第一步：在 Claude 里把 Agent 的「脑子」调好。** 建 Project「安心牙科前台」，上传 `clinic-faq.md`、`slots.csv`、`waitlist.csv`、`appointments.csv`、`patients.csv`（练习时 Claude 用这些文件代替工具），项目说明里放下面的系统提示词。然后把 15 条消息逐条贴进去，跟 `expected/decisions.csv` 对。哪条判断不一样，先改提示词，再进 n8n。

**Agent 的系统提示词：**

```
你是安心牙科（Hurstville）的前台助理。你负责读懂病人消息、查信息、起草回复和要做的改动。
你起草的每一条回复和每一个改动，都要前台同事批准后才会发出或生效。

你可以做：
- 用 search_faq 回答营业时间、地址、停车、价格（只限知识库里写明的价格）、付款、保险流程、CDBS 一般说明、改约政策。
- 查预约、改约、取消、加候补前，先用 lookup_appointment 核对身份：全名 + 出生日期都对上才算通过。
- 用 find_free_slots 找时间：改约默认同一位医生、同样时长；最多给 3 个选项，按时间先后。
- 用 propose_action 提交改约 / 取消 / 加候补 / 新预约的申请；用 find_waitlist_match 在有人取消时找候补。
- 用 handoff_to_human 把消息交给人，并写清优先级：紧急 / 当天 / 普通。

你绝对不能做：
- 回答任何病情、症状、用药、剂量、诊断、术后护理问题。一律转人工。若涉及剧痛、肿胀、出血不止、发烧、呼吸或吞咽困难，优先级 = 紧急，并原样使用知识库里的「紧急情况固定话术」，不加任何其他建议。
- 在身份核对通过前透露任何预约信息，包括「有没有预约」。不替对方猜测写错的生日。家属、朋友代查一律不透露，告诉他们本人联系或到前台登记授权。
- 说「已经改好 / 已经取消 / 已经帮你约上」。只能说「前台同事确认后会给你正式确认」。
- 免收、减收或承诺收取任何费用；24 小时内改约要说明政策，并写明由前台确认。
- 报知识库里没有的价格（例如种植牙、补牙），估算保险能报多少，判断 CDBS 资格。
- 复述、保存或要求对方发送 Medicare 号、保险卡号、银行卡号。对方发了，提醒他不要在聊天里发，并在给前台的记录里打码。
- 处理账单争议或投诉：不解释、不认错、不承诺退款，转经理。

输出格式（每条消息一段 JSON）：
{"message_id", "intent", "identity_check", "tools_called", "proposed_action", "handoff", "priority", "reason", "reply_draft"}
回复语气：像一位耐心的前台，先回应对方的情况，再给信息；对方用英文就用英文，用中文就用中文。
```

**第二步：在 n8n 里把工具做出来。** 每个工具是一个独立的小 workflow，Agent 通过 Call n8n Workflow Tool 调用——这样「身份核对」「只返回必要字段」写死在工具里，不靠模型自觉。

**第三步：搭主流程，把每条回复都送进 Slack 审批。** 试运行期每一条都审，包括 FAQ。

### n8n 搭建

**主流程**

| # | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| 1 | Webhook | 接网站聊天和短信服务商推过来的消息 | Method: POST；Respond: Immediately（先回「已收到，前台会尽快回复」） |
| 2 | Email Trigger (IMAP) | 接 reception@ 邮箱的邮件 | 和 Webhook 汇到同一处 |
| 3 | Edit Fields (Set) | 统一成 message_id / channel / received_at / from_name / from_contact / text | 两路字段名对齐 |
| 4 | Code | 把消息里像 Medicare / 银行卡号的数字串打码后再往下传 | 正则：10–11 位连续或分组数字 → `[已打码]`；原文不入日志 |
| 5 | AI Agent | 读消息、调工具、按格式输出决定和回复草稿 | System Message 用上面的提示词；Max Iterations: 6 |
| 5a | Anthropic Chat Model | Agent 用的模型 | Temperature 低一些（0.2） |
| 5b | Simple Memory | 同一个联系人同一天的多轮对话 | Session Key: from_contact |
| 5c | Structured Output Parser | 强制输出上面的 JSON 结构 | 字段全部 required |
| 6 | Google Sheets | 每条决定写进「前台日志」表 | Operation: Append Row；不写原始卡号 |
| 7 | If | 是否紧急 | priority = 紧急 → 先走第 8 步，同时继续审批 |
| 8 | Slack | 紧急消息 @前台 和 @值班医生，马上电话联系 | Channel: #前台-紧急 |
| 9 | Slack · Send and Wait for Response | 把回复草稿 + 拟执行的改动发给 Amy | Response Type: Custom Form；字段：决定（批准 / 改了再发 / 不发）、修改后的回复 |
| 10 | Switch | 按 Amy 的决定分流 | 批准 / 改了再发 / 不发 |
| 11 | Google Sheets | 批准后才真的改预约表 / 候补表，并把「待审批」记录标为 done | Operation: Update Row / Append Row；执行前先用 Google Sheets（Get Row(s)）+ If 重新查一次空位，被别人先占就退回 Amy |
| 12 | Switch | 按 channel 选发送方式 | 邮件 / 短信 / 聊天 |
| 13 | Gmail | 回邮件 | Reply to 原邮件 |
| 14 | HTTP Request | 回短信 / 网站聊天 | 调短信服务商或聊天插件的接口；练习时改成写入「待发消息」表 |

> 第 11 步是主流程里的普通节点，不是给 Agent 的工具——**Agent 手里没有「写入」能力**，只有 propose_action（提交申请）。

**Agent 能用的工具（每个是一个子 workflow）**

| 工具 | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| search_faq | Code Tool | 在 clinic-faq.md 里按关键词返回相关段落 | 只返回原文段落，不让模型自由发挥价格 |
| lookup_appointment | Call n8n Workflow Tool | 子流程：Google Sheets 读 patients + appointments，全名 + 生日都对上才返回 | 返回字段只有 appt_id / start / dentist / type；对不上只返回 `verified: false`，不说哪项错 |
| find_free_slots | Call n8n Workflow Tool | 子流程：Google Sheets 读 slots + Code 找连续空格 | 参数：dentist、minutes、日期范围、上午 / 下午；最多 3 个 |
| find_waitlist_match | Call n8n Workflow Tool | 有人取消时按候补规则找人 | 规则：医生偏好、时长不超过空位、最早日期、上午 / 下午偏好，按加入时间先后 |
| propose_action | Call n8n Workflow Tool | 把改约 / 取消 / 加候补 / 新预约写进「待审批」表 | status = pending；不碰真正的预约表 |
| handoff_to_human | Call n8n Workflow Tool | 推一条 Slack 给前台或经理 | 参数：priority、reason；紧急的同时 @值班医生 |

人工审批点：主流程第 9 步。没有 Amy 的「批准」，任何回复都不会发出，任何预约都不会改。

> 用 ChatGPT 也可以：同一份系统提示词放进 ChatGPT Project 先调；n8n 里把 Anthropic Chat Model 换成 OpenAI Chat Model，工具和审批节点都不用动。

## 4. 应该做出的结果

`expected/decisions.csv` 是 15 条消息的标准决定（意图、身份核对、调了哪些工具、拟执行的改动、是否转人工、回复草稿）；`expected/answer.json` 是脚本按规则算出的空位和候补匹配。

| 结果 | 消息 |
|---|---|
| 直接起草回复（仍需审批） | M01 营业时间、M02 停车、M07 拒绝代查、M11 种植牙不报价、M12 保险、M13 CDBS + 隐私提醒 |
| 起草改动申请（需审批） | M03 改约、M04 改约（24 小时内）、M09 加候补、M10 取消 + 候补、M15 新病人预约 |
| 转人工 | M05 用药（当天）、M06 术后出血（紧急）、M08 身份不符、M14 账单投诉、M04 的费用问题 |

规则算出的关键数字：

- M03：Dr Emily Ho 下周四 / 五下午只有 1 个 60 分钟空位：**2026-11-19 16:00**。
- M04：距预约 **23.3 小时**，属于 24 小时内改约；可选 11-19 11:00、11-21 10:00、11-21 10:30（Dr Jason Lim）。
- M09：刘婷加入候补 **W04，排第 4 位**。
- M10：距预约 **49.8 小时**，不收费；空出的 11-13 14:00 先问 **W03**（复诊 30 分钟），其次 W04。
- M15：11-14 周六上午已满；可选 **11-21 10:00 或 10:30**——跟 M04 的选项撞了，谁先批给谁。

## 5. 验收清单

- [ ] M05、M06 的回复里没有任何用药、剂量、护理建议；M06 标为紧急，用的是知识库里的固定话术原文。
- [ ] M07 的回复没有透露王建国有没有预约；M08 没有说「生日好像写反了」，也没有取消预约。
- [ ] M13 的回复和日志里都没有出现 Medicare 号码原文。
- [ ] 没有一条回复说「已经改好 / 已经取消」；M04 没有说免收或一定收 50 元。
- [ ] M03、M04、M10、M15 的时间选项和候补顺序跟 `answer.json` 一致。
- [ ] 在 n8n 里演示：Amy 点「不发」后，病人收不到任何消息，预约表没有变化；M04 和 M15 都批了 11-21 10:00 时，第二个被退回。

## 6. 加分挑战

- 试运行两周后，让 Agent 对「纯 FAQ、无改动、无转人工」的消息自动发送，其他照旧审批。先写清楚你用什么数据证明它可以放开。
- 候补匹配改成「最合适优先」：60 分钟空位优先给需要 60 分钟的人，并比较和「先到先得」哪种对诊所更好、对病人更公平。
- 每天下班前用 Schedule Trigger 汇总当天消息：多少条、几条转人工、平均审批用时，发给诊所经理。

## 7. 简历 / 面试可以这样讲

> 为一家牙科诊所设计前台 Agent：用 n8n AI Agent 加 6 个工具处理常见问题、改约、取消和候补，身份核对和「只返回必要字段」写在工具里而不是靠提示词；所有回复和预约改动都经前台在 Slack 审批后才生效；病情、用药、术后问题和账单投诉一律转人工，紧急情况使用诊所批准的固定话术，并对聊天里的证件号码做打码（教学项目，诊所和数据都是为练习设计的）。
