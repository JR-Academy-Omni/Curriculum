# P47 · 通用：销售线索 Agent：查背景、打分、起草跟进、进审批

| 行业 | 难度 | 时长 | 工具 |
|---|---|---|---|
| 通用（8 人的商用咖啡机租赁公司） | L3 Agent | 240 分钟 | Claude（Projects）+ n8n（AI Agent）+ Google Sheets + Slack + Gmail |

## 1. 客户场景

晴川咖啡设备在悉尼 Alexandria，给办公室和咖啡馆租咖啡机、送咖啡豆。官网表单每天进来十几条线索，唯一的销售 Nick 一边跑现场一边回，常常是谁先看到回谁：真正想本月装机的律所等了三天，倒是先回了一条 SEO 公司的推销；有个已经在谈的物流公司又填了一次表，被当成新客户重新报了一次价；还有一次，展会扫来的名单里有个人早就退订了，又收到了推广邮件，直接投诉。

老板 Mandy 想要的是：**每条线索进来，Agent 先把重复的、推销的、不该联系的挡掉，只用我们手里的资料查背景，按固定规则打分分级，写好第一封跟进邮件；Nick 在 Slack 里批了才发。** 不上网乱搜，不群发。

## 2. 练习数据

公司、联系人、邮箱（`.example`）、电话（`0413 1xx 000`）、网页快照都是为这个练习设计的。

| 文件 | 内容 |
|---|---|
| `data/leads-2026-11-11.csv` | 一天的 16 条线索：submitted_at, lead_id, name, company, email, phone, role, company_type, employees, cups_per_day, postcode, timeline, consent_marketing, source, message |
| `data/company-files/L*.html` | 7 家公司的网页快照（保存好的 .html，注释里写了保存日期）。这是 Agent 唯一能用的背景资料 |
| `data/crm-open-deals.csv` | CRM 里在办和已签的商机：deal_id, company, email_domain, owner, stage, last_activity |
| `data/do-not-contact.csv` | 不再联系名单：email, added_at, reason |
| `data/scoring-rubric.md` | 打分规则、分级、跟进规则和红线 |
| `data/offer-sheet.md` | 可以对外说的方案和价格（教学假设价格，不含 GST） |

数据里**故意藏了 5 类问题**：

1. **重复**：L15 跟 L02 是同一个人当天填了两次；L05 Greenline 在 CRM 里已经有在办商机 D-118。
2. **不该联系**：L09 来自展会名单导入，邮箱 8 月已经退订。
3. **不是线索**：L12 是 SEO 推销，L14 是来求职的。
4. **背景资料不足或过时**：L04、L07、L10、L11 没有快照，不能编；L03 的快照是 2024 年的，写 15 人，表单写 60 人。
5. **背景里有不能用的东西**：L01 的快照里有合伙人的邮箱（不能拿来发）；L13 的快照里有裁员新闻（邮件里不能提）；L06 的快照说现有咖啡机租约到 2027 年 6 月（要扣分，跟进时机交给 Nick）。

另外：L11 在 Newcastle，服务区外；L04 没有营销同意，只能回这一次的问题；L16 是咖啡师替老板问，不能绕过她直接去找快照里的老板。

教学假设：「本人提交的询问可以回复一次，后续营销需要同意」是这家公司按自己理解定的规则，真实要求以 ACMA 关于 Spam Act 的官方指引为准；价格、服务区、免费试用都是练习设定。

## 3. 做法

**第一步：在 Claude 里把 Agent 调好。** 建 Project「晴川线索」，上传 `scoring-rubric.md`、`offer-sheet.md`、`crm-open-deals.csv`、`do-not-contact.csv` 和 7 个网页快照（练习时 Claude 直接读这些文件，代替工具），项目说明里放下面的系统提示词。然后上传 `leads-2026-11-11.csv`，说「处理今天的线索」，跟 `expected/decisions.csv` 对状态、分数、分级和草稿。

**Agent 的系统提示词：**

```
你是晴川咖啡设备的线索助手。你负责：挡掉不该跟进的线索、查背景、按规则打分分级、起草第一封回复。
你写的每封邮件、提议的每个 CRM 改动，都要销售 Nick 批准后才会执行。规则以 scoring-rubric.md 为准。

处理顺序：
1. 先挡：推销 / 求职 → 排除；同一邮箱当天重复 → 合并到最早那条；邮箱域名在 crm-open-deals 里 → 并入商机并通知负责人；在 do-not-contact 里 → 不联系；source 不是官网表单 → 不跟进。挡掉的不打分、不起草。
2. 查背景：只用 get_company_file 读给你的网页快照。没有快照就写「背景资料不足」，背景分按 0。快照超过 12 个月、跟表单对不上的，以表单为准并标出来。你不能上网搜索，不能访问任何网址。
3. 打分：调用 score_lead，把表单字段和你从快照里读出的两个信号（是否有扩张信号、现有合同是否还有 6 个月以上）交给它，分数和分级以它返回的为准，你不自己算。
4. 起草：每个打分的线索都起草一封回复，回应他这次问的问题。
   - 只发到表单里的邮箱；快照里出现的其他邮箱不用。
   - 价格只能用 offer-sheet.md 里的「起」价；不承诺折扣。
   - 不提对方公司的负面消息，不说「我看了你们网站 / 新闻」。
   - 服务区外的，礼貌说明暂时不服务这个区域，不推销。
   - A 级可以主动约看场地；B 级给资料、问一个关键问题；C 级只回答他的问题。
5. 输出 JSON：{"lead_id", "status", "signals": {"expansion", "contract_locked"}, "background_facts", "flags", "draft_email"}
邮件像一个实在的销售写的，四句以内，不用「希望这封邮件找到你一切安好」之类的套话。
```

**第二步：把打分做成工具。** 分数必须由 Code 节点按规则算，Agent 只提供它从快照里读出的两个是 / 否信号。这样同一条线索今天和明天算出来一样，Nick 也能看清每一分是怎么来的。

**第三步：搭主流程。** 挡线索、去重、查 CRM、查不再联系名单，都放在 Agent 前面用普通节点做——不该联系的人，连 Agent 都不进。

### n8n 搭建

**主流程**

| # | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| 1 | Webhook | 接官网表单提交 | Method: POST；练习时用 Manual Trigger + Extract from File 读 CSV |
| 2 | Google Sheets（读当天线索） | 读 `leads` 表里当天已有的提交，用来查重复 | Operation: Get Row(s) |
| 3 | Code（先挡） | 推销 / 求职关键词初筛、同邮箱合并、CRM 域名比对、不再联系名单、source 检查，输出 `gate` 字段 | 推销和求职的初筛只标「疑似」，后面再由 Agent 确认 |
| 4 | Switch | 按 gate 分流：可以处理 / 并入商机 / 不联系 / 排除 | |
| 5 | Slack（并入商机） | 告诉商机负责人：这家又来留言了，附留言原文 | 只发内部通知，不给客户发 |
| 6 | Google Sheets（记录不联系 / 排除） | 记一行原因，不起草任何邮件 | Operation: Append Row |
| 7 | AI Agent | 查背景、调打分、起草回复 | System Message 用上面的提示词；Max Iterations: 5 |
| 7a | Anthropic Chat Model | Agent 用的模型 | Temperature 0.3 |
| 7b | Structured Output Parser | 强制输出上面的 JSON | 字段全部 required |
| 8 | Code（检查草稿） | 草稿收件人必须等于表单邮箱；不能出现 offer-sheet 以外的金额；不能有「裁员」「看了你们网站」等词 | 不通过就退回 Agent 重写一次，再不通过交人 |
| 9 | Slack · Send and Wait for Response | 把分数明细、背景、flags 和草稿发给 Nick：发送 / 改了再发 / 不发 | Response Type: Custom Form；A 级线索在消息里 @Nick |
| 10 | Switch | 按 Nick 的决定分流 | 不发 → 只更新线索表 |
| 11 | Gmail | 发给表单邮箱 | 发件人用 Nick 的邮箱；正文用批准后的版本 |
| 12 | Google Sheets（更新线索表） | 记分数、分级、是否可以进后续跟进、谁批的、几点发的 | Operation: Update Row；`nurture` 只在 consent = yes 且 A / B 时为是 |
| 13 | Google Sheets（写 CRM 待建商机） | A 级线索批准后，建一条待建商机给 Nick | Operation: Append Row |

**Agent 能用的工具**

| 工具 | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| get_company_file | Code Tool | 按 lead_id 返回 `company-files/` 里那份快照的正文和保存日期；没有就返回 `not_found` | 只读本地文件，不发任何网络请求 |
| score_lead | Code Tool | 按 scoring-rubric.md 算分和分级，返回每一项得分 | 规则写死；Agent 只能传两个是 / 否信号 |
| get_offer | Code Tool | 返回 offer-sheet.md 原文 | 只读 |
| propose_crm_note | Call n8n Workflow Tool | 提议在 CRM 里追加备注或建待建商机 | 只写 pending，不改 CRM 正式数据 |

人工审批点：主流程第 9 步。没有 Nick 批准，任何邮件都不会发出。

**Agent 不能做的事：** 不能上网搜索、爬网站、查社交媒体（它没有 HTTP Request Tool，也不该给）；不能发邮件、改 CRM、把人加进营销名单；不能用快照里出现的其他人邮箱；不能自己改分数。

> 用 ChatGPT 也可以：同一份系统提示词放进 ChatGPT Project 先调；n8n 里把 Anthropic Chat Model 换成 OpenAI Chat Model，工具和审批节点不用动。

## 4. 应该做出的结果

`expected/answer.json` 是脚本按规则算出的挡线索结果、分数和分级；`expected/decisions.csv` 是 16 条线索的标准结论、分数明细、背景要点和 11 封参考草稿（草稿和背景要点按上面的提示词手写）。

16 条线索：11 条打分，5 条不打分。

| 不打分 | 原因 |
|---|---|
| L05 Greenline Logistics | 并入在办商机 D-118，通知 Nick |
| L09 Orbit Media | 在不再联系名单（展会名单导入） |
| L12 RankUp SEO | 推销，排除 |
| L14 求职 | 排除，转 Mandy |
| L15 Bean There Café | 跟 L02 同一邮箱重复提交，合并到 L02 |

| 线索 | 公司 | 分数 | 分级 | 要注意 |
|---|---|---|---|---|
| L01 | Harbour Legal | 83 | A | 扩张 +10；快照里的合伙人邮箱不用 |
| L02 | Bean There Café | 82 | A | 扩张 +10（12 月开第二家店）；合并了 L15 的「周一休息」 |
| L13 | Pinnacle Finance | 80 | A | 快照有裁员新闻，邮件里不提 |
| L07 | Atlas Engineering | 65 | B | 背景资料不足 |
| L08 | Little Fern Café | 63 | B | |
| L03 | BrightPath Accounting | 62 | B | 快照是 2024 年的，人数以表单 60 人为准 |
| L16 | Daily Grind Café | 55 | B | 提交人不是决策人，不绕过她找老板 |
| L06 | Sunrise Physio | 48 | B | 现有合同到 2027-06，−10 |
| L11 | Coastal Dental | 53 → C | C | 服务区外（2300），按 C，礼貌说明不服务 |
| L04 | Kumo Design Studio | 39 | C | 没有营销同意，只回这一次 |
| L10 | Westside Gym | 34 | C | |

- 分级：A 3 条、B 5 条、C 3 条。
- 可以进后续营销跟进的（consent = yes 且 A / B）8 条：L01、L02、L03、L06、L07、L08、L13、L16。
- 草稿 11 封，全部发到表单邮箱；CRM 改动 1 条：L05 的留言追加到 D-118。

## 5. 验收清单

- [ ] L05、L09、L12、L14、L15 没有分数也没有草稿；L09 连 Agent 都没进；L15 的留言出现在 L02 的记录里。
- [ ] 11 条线索的分数和分级跟 `answer.json` 一致；L11 是 C，L06 扣了 10 分。
- [ ] L04、L07、L10、L11 标了「背景资料不足」，背景要点是空的，没有编公司信息。
- [ ] L01 的草稿只发给 rachel.kim@，没有出现合伙人邮箱；L13 的草稿没有提裁员；所有草稿里的价格都在 offer-sheet.md 里。
- [ ] 整个流程没有任何访问外部网址的节点或工具。
- [ ] 在 n8n 里演示：Nick 点「不发」后，客户收不到邮件，线索表记为未发送；L04 即使 Nick 批准发送，`nurture` 也是否。

## 6. 加分挑战

- 加一封第 3 天的跟进：只给 A / B、consent = yes、且没回复的人，Nick 再批一次才发；第二封以后就停，不做连环轰炸。
- 收到对方回复「不用了」「别再发」时，用 Email Trigger (IMAP) 接住，自动写进 do-not-contact.csv，并停止所有后续跟进。
- 每周一给 Mandy 一份线索小结：来了多少、各级多少、挡掉了哪些、A 级平均多久得到回复。

## 7. 简历 / 面试可以这样讲

> 为一家商用咖啡机租赁公司设计销售线索 Agent：先用 n8n 普通节点挡掉重复提交、已在 CRM 的商机、退订名单和推销求职，再由 AI Agent 只用本地网页快照提取背景信号、调用规则化的打分工具分级，并起草第一封回复；草稿经代码检查收件人、价格和敏感词后，进 Slack 由销售批准才发出，营销跟进只给有同意的 A / B 级线索（教学项目，公司和线索都是为这个练习设计的）。
