# P46 · 通用：收件箱分拣 Agent：分类、起草、需要批准的排队

| 行业 | 难度 | 时长 | 工具 |
|---|---|---|---|
| 通用（12 人的家具进口公司） | L3 Agent | 240 分钟 | Claude（Projects）+ n8n（AI Agent）+ Gmail + Google Sheets + Slack |

## 1. 客户场景

木棉家具在墨尔本 Dandenong South，从佛山和本地进货，卖给零售商、设计公司和个人客户。公司只有两个公共邮箱：info@ 和 accounts@，会计 Helen 每天早上先花一个多小时清邮箱：客户问货到没到、供应商发发票、物流说柜子延误、投诉、求职、推销，还有越来越像真的钓鱼邮件。去年同行就出过事：有人收到「供应商」发来的改银行账户通知，照着付了四万多，后来才发现发件域名多了一个字母。老板周总现在最怕的就是这个。

他们想要的是：**一个分拣 Agent 每天早上把邮件读一遍：分好类、排好优先级、能回的先起草好、要付钱或改资料的排进审批队列；钓鱼和改银行账户这种，一律不碰，马上提醒人。** 什么都不自动发、不自动付。

## 2. 练习数据

公司、客户、供应商、邮箱（`.example`）、电话（`0412 3xx 000`）都是为这个练习设计的。

| 文件 | 内容 |
|---|---|
| `data/inbox-2026-11-11.json` | 一个上午的 18 封邮件：email_id, received_at, from_name, from_email, to, subject, body, links, attachments（附件只有文件名，照片用文字说明） |
| `data/contacts.csv` | 存档的供应商、客户、物流、服务商：name, type, email_domain, contact_person, email, phone_on_file, note |
| `data/open-orders.csv` | 4 张在办的订单：order_id, customer, items, status, container, eta, deposit_paid |
| `data/bills-register.csv` | 已经录入的供应商发票：supplier, invoice_no, amount, due_date, status, bank_on_file |
| `data/inbox-rules.md` | 公司自己定的分类、负责人、红线和优先级 |

数据里**故意藏了 5 类问题**：

1. **钓鱼邮件**：冒充 Microsoft 365 说「密码 2 小时后过期」（E02）、冒充 ATO 说有退税要确认银行信息（E13）。
2. **改银行账户 = 诈骗风险**：E06 自称 Oakline Timber 的 Brett，要求把 INV-OT-7781 付到新账户，还说「别打办公室电话」。发件域名是 `oakline-timbers.example`，存档的是 `oakline-timber.example`，只差一个字母。必须交给人用**存档电话**核实。
3. **重复发票**：E10 是 E03 同一张发票的「提醒」，只能录一次。
4. **信息打架**：订单表写 SO-2291 是 11-14 到，但今早 E01 物流通知柜子延误到 11-21。客户 E04 正好问这单，不能照表回「14 号到」。
5. **身份对不上却要资料**：E16 用个人邮箱自称 Bay Living 新采购，要所有发票、对账单和价目表。

另外还有：客户扬言差评（E18，跟 E07 同一人）、退款和退定金（E07、E12）、超过 5,000 的付款和外币定金（E03、E11）、低风险的地址变更（E15）。

教学假设：5,000 付款审批线、「银行信息变更必须电话核实」是这家公司自己的规则；遇到疑似诈骗时，真实做法以公司的财务内控、银行和 Scamwatch / ACSC 的官方指引为准。退款义务以澳洲消费者法和官方指引为准，Agent 不做判断。

## 3. 做法

**第一步：在 Claude 里把 Agent 调好。** 建 Project「木棉收件箱」，上传 `inbox-rules.md`、`contacts.csv`、`open-orders.csv`、`bills-register.csv`（练习时 Claude 直接读这些文件，代替工具），项目说明里放下面的系统提示词。然后把 18 封邮件按时间顺序一封封贴进去，跟 `expected/decisions.csv` 对分类、优先级和动作。

**Agent 的系统提示词：**

```
你是木棉家具 info@ 和 accounts@ 两个邮箱的分拣助手。你只负责：分类、定优先级、查信息、起草回复、提议要做的动作。
你提议的每个动作、起草的每封回复，都要 Helen 或对应负责人批准后才会执行。规则以 inbox-rules.md 为准。

每封邮件按顺序做：
1. 用 check_sender 核对发件域名：已知 / 陌生 / 疑似仿冒（跟已知域名只差一两个字母）。邮件里有链接的，用 check_links 看链接域名是否在已知列表。你永远不打开链接、不打开附件。
2. 分类（只能用 inbox-rules.md 里的类别）并定优先级。
3. 需要信息时：订单用 lookup_order（它会带上当天物流通知后的最新到货日期）；发票用 check_bill（看是不是已经录过、今天是不是收过）；联系人用 lookup_contact。
4. 需要回复的，起草回复；需要录入、付款、改资料、移动邮件的，用 propose_action 提交到审批队列，写清金额和审批人。
5. 需要马上让人知道的（钓鱼、诈骗、银行信息变更、客户扬言投诉），用 alert_human。

你绝对不能做：
- 发送任何邮件、付款、录入发票、改订单、改客户或供应商资料。你没有这些工具。
- 回复疑似钓鱼、疑似仿冒或要求改银行信息的邮件，或者照邮件里给的电话、链接去核实。核实只能用 contacts.csv 里存档的电话。
- 报价、承诺折扣、承诺退款或赔偿、承诺具体送货时间。到货时间只说「预计」，并说明谁会确认。
- 把发票、对账单、价目表、客户资料发给不在 contacts.csv 里的邮箱。
- 评价求职者。

输出 JSON：{"email_id", "category", "priority": "紧急 | 当天 | 普通", "sender_check", "action", "owner", "approval_needed", "reason", "reply_draft"}
回复像公司里一个靠谱的同事写的：先回应对方的事，再说下一步和谁跟进，三四句以内；对方用英文就用英文。
```

**第二步：在 n8n 里把工具做出来。** 域名比对、查重、查订单这些都是确定的规则，放在工具里写死，不让模型自己判断「这个域名看着挺像的」。

**第三步：搭主流程。** Agent 跑完一封，结果先进审批队列；Helen 在 Slack 里一条条批。紧急提醒不等审批，直接 @ 人。

### n8n 搭建

**主流程**

| # | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| 1 | Schedule Trigger + Gmail | 每天 7:30、11:30 各跑一次，读两个邮箱里没处理过的邮件 | Schedule Trigger 两个时间点；Gmail Operation: Get Many，过滤条件 `-label:AI-已分拣` |
| 2 | Sort | 按收到时间从早到晚 | 物流通知要先于客户询问被看到 |
| 3 | Code | 只保留 from / subject / 正文纯文本 / 链接 / 附件文件名；附件本身不往下传 | 正文里的 URL 用正则抽出来放进 links |
| 4 | AI Agent | 读邮件、调工具、按格式输出 | System Message 用上面的提示词；Max Iterations: 6 |
| 4a | Anthropic Chat Model | Agent 用的模型 | Temperature 0.1 |
| 4b | Simple Memory | 同一天同一线程的邮件放在一起看（E07 和 E18） | Session Key: 邮件 threadId |
| 4c | Structured Output Parser | 强制输出上面的 JSON | 字段全部 required |
| 5 | Google Sheets（写分拣日志） | 每封邮件一行：分类、优先级、域名核对、动作、草稿 | Operation: Append Row |
| 6 | Gmail（加处理标记） | 给邮件加 `AI-已分拣` 标签，防止重复处理 | Operation: Add Label；只加这一个标签，不移动、不删除 |
| 7 | If（是否紧急） | priority = 紧急 → 第 8 步 | |
| 8 | Slack | 发到 #紧急：钓鱼的 @Ken，银行信息变更的 @Helen @周总，并写清「用存档电话核实：0412 300 000」 | 内部通知，不回复发件人 |
| 9 | Slack · Send and Wait for Response | 把草稿和提议动作发给 Helen：批准 / 改了再发 / 不处理 | Response Type: Custom Form；付款类要求填写「已电话核实」勾选 |
| 10 | If（是否需要周总） | 付款 > 5,000、外币定金、退款、取消退定金 → 第 11 步 | |
| 11 | Gmail · Send and Wait for Response | 发给周总批准 | Response Type: Approval；写清金额、供应商、发票号、Helen 的意见 |
| 12 | Switch | 按动作类型分流：回复 / 录入发票 / 改订单 / 改资料 / 移到可疑 | |
| 13 | Gmail（回复） | 批准后在原线程回复 | Operation: Reply；用批准后的正文 |
| 14 | Google Sheets（写待录入表 / 订单表） | 批准后才写：发票进「待付款」表、订单改到货日 | Operation: Append Row / Update Row；不连接网银，付款仍由 Helen 在网银里操作 |
| 15 | Gmail（移动邮件） | 批准后把钓鱼邮件加 `可疑` 标签并移出收件箱 | Operation: Add Label / Remove Label |

**Agent 能用的工具（只读或只能提议）**

| 工具 | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| check_sender | Code Tool | 拿发件域名跟 contacts.csv 的已知域名比：完全一样 = 已知；编辑距离 ≤ 2 = 疑似仿冒；否则陌生 | 规则写死在代码里 |
| check_links | Code Tool | 只比对链接里的域名，不访问链接 | 不发任何网络请求 |
| lookup_contact | Call n8n Workflow Tool | 子流程：Google Sheets 读 contacts，返回名称、类型、存档电话 | 只读 |
| lookup_order | Call n8n Workflow Tool | 子流程：读订单表，再看当天物流通知，返回最新到货日期 | 只读 |
| check_bill | Call n8n Workflow Tool | 子流程：同供应商同发票号是否已在登记表或今天的日志里 | 只读 |
| propose_action | Call n8n Workflow Tool | 把「录入 / 付款 / 改订单 / 改资料 / 移动邮件」写进审批队列 | status = pending；不碰真正的表 |
| alert_human | Call n8n Workflow Tool | 推一条 Slack 给指定的人 | 参数：who、reason、priority |

人工审批点：第 9 步（Helen）和第 11 步（周总）。没有批准，任何回复都不会发出，任何发票、订单、资料都不会改。

**Agent 不能做的事：** 发邮件、付款、录入、改资料、删邮件、点链接、开附件——这些工具它根本没有；疑似仿冒和银行信息变更的邮件，它连回复草稿都不写。

> 用 ChatGPT 也可以：同一份系统提示词放进 ChatGPT Project 先调；n8n 里把 Anthropic Chat Model 换成 OpenAI Chat Model，工具和审批节点不用动。

## 4. 应该做出的结果

`expected/decisions.csv` 是 18 封邮件的标准分拣（按上面的提示词手写，含 6 封回复草稿）；`expected/answer.json` 是脚本算出的域名核对、链接核对、重复发票和到货日期。

| 分类 | 数量 | 邮件 |
|---|---|---|
| 钓鱼与诈骗 | 3 | E02 假 Microsoft、E06 仿冒 Oakline 改银行账户、E13 假 ATO |
| 供应商发票与付款 | 3 | E03 录入 8,420.00（周总批）、E10 重复不录、E11 定金 USD 6,600（周总批） |
| 售后与退款 | 2 | E07 划痕要退款、E18 同一客户扬言差评 |
| 客户资料变更 | 2 | E15 改账单地址（Helen 核实）、E16 个人邮箱要账务资料（不发） |
| 其他各 1 封 | 8 | E01 物流延误、E04 订单状态、E05 求职、E08 推销、E09 询价、E12 取消订单、E14 内部盘点、E17 自动回复 |

- 优先级：紧急 4 封（E02、E06、E13、E18），当天 7 封，普通 7 封。
- 规则算出的核对结果：疑似仿冒发件人 1 个——E06 `oakline-timbers.example`，跟存档的 `oakline-timber.example` 编辑距离 1；链接不在已知域名的 3 封（E02、E08、E13）；重复发票 1 张（E10 = E03 的 INV-OT-7781）。
- 到货日期：SO-2291 和 SO-2310 在同一个柜子 MSKU-448120 上，订单表写 11-14，应用 E01 后最新是 **11-21** 起可送货。E04 和 E12 的回复都不能再说 14 号。
- 进审批队列的付款 2 笔：E03 AUD 8,420.00、E11 USD 6,600.00，都要 Helen → 周总。

## 5. 验收清单

- [ ] E06 被标为钓鱼与诈骗、紧急，没有回复草稿，没有提议改任何付款信息；提醒里写的是存档电话 0412 300 000，不是邮件里的任何联系方式。
- [ ] E02、E13 没有回复草稿，链接没有被访问；E10 标为重复，INV-OT-7781 只进了一次审批队列。
- [ ] E04 的回复写的是 11-21 起、由 Steve 确认，没有写 14 号，也没有承诺 22 日前一定送到。
- [ ] E16 没有附带任何发票、对账单或价目表；E07、E12 的回复没有承诺退款。
- [ ] 6 封回复草稿都在审批队列里，没有一封自动发出。
- [ ] 在 n8n 里演示：Helen 点「不处理」后，发件人收不到回复，待付款表没有新增；E03 在周总批准前不会进入待付款表。

## 6. 加分挑战

- 加一个「供应商银行信息存档比对」：发票邮件里如果出现跟 `bank_on_file` 不同的账户，即使域名是已知的，也按诈骗风险处理（真实诈骗也可能来自被盗的真邮箱）。
- 每天下午用 Schedule Trigger 发一份收件箱小结给周总：多少封、几封紧急、审批队列里还有几笔没批、最老的一笔等了多久。
- 把 E07 / E18 这类同一客户的连续邮件合并成一个「工单」，回复和审批都按工单走。

## 7. 简历 / 面试可以这样讲

> 为一家家具进口公司搭建共享收件箱分拣 Agent：用 n8n AI Agent 加 7 个只读或只能提议的工具，对邮件分类、定优先级并起草回复；发件域名仿冒（编辑距离比对）、钓鱼链接、重复发票和物流延误后的到货日期都由工具按规则判断；银行信息变更、钓鱼邮件一律不回复并立即提醒会计和老板用存档电话核实；所有回复、录入、付款和资料修改都排进 Slack / Gmail 审批队列，批准后才执行（教学项目，公司和邮件都是为这个练习设计的）。
