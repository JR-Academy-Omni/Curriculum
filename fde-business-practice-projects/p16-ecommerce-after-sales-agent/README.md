# P16 · 零售电商：售后 Agent

| 行业 | 难度 | 时长 | 工具 |
|---|---|---|---|
| 零售电商（Shopify 小店） | L3 Agent | 240 分钟 | Claude（Projects）+ n8n（AI Agent）+ Google Sheets + Gmail + Slack |

## 1. 客户场景

还是 P02 里 Box Hill 的竹间茶事。补货流程跑顺以后，店员 Amy 的时间被售后吃掉了：每天十来封邮件，有说盖碗碎了的、发错货的、不想要了的、包裹没到的。她要先去 Shopify 翻订单，再对着政策算签收几天了、能不能退、退多少、要不要寄回，最后写邮件。忙起来就凭印象答，上个月有一单拆开喝过的茶叶也被她退了，还有一次顾客说「退到我另一个账户」，她差点就照做了。老板林先生要求过超过 150 澳元的退款要他点头，可实际上经常是退完了他才知道。

他们想要的是：**一个售后 Agent 读完邮件就去查订单、对政策、算好金额，把处理方案和回复写好；超过 150 的、拿不准的、有投诉风险的交给林先生；Amy 在 Slack 里点「批准」，回复才发出去，退款和补发由人在 Shopify 里操作。**

## 2. 练习数据

都是练习数据：店名沿用 P02，顾客、订单、邮箱（`.example`）、价格和政策都是为这个练习设计的。

| 文件 | 内容 |
|---|---|
| `data/inbox/R01.txt` – `R10.txt` | 11 月 12 日收到的 10 封售后邮件，带 From / Date / Subject 头；照片用一行「附图说明」文字代替 |
| `data/returns-policy.md` | 店里的售后政策：无理由退货 30 天、破损 / 发错货 14 天、低于 30 澳元不用寄回、超过 150 林先生批、只退原支付方式、不能自行给补偿 |
| `data/orders.csv` | 25 个订单：order_id, order_date, customer_name, email, payment_method, shipping_fee, status, delivered_date, tracking_status |
| `data/order_lines.csv` | 订单明细：order_id, sku, product, qty, unit_price |
| `data/products.csv` | 10 个商品：sku, product, category（茶叶 / 茶具 / 礼盒）, price |

数据里**故意藏了 6 类必须拦下的情况**：

1. **超额退款**（R04 发错货要退 4 盒大红袍，152 澳元）：方案照出，但必须转林先生批准。
2. **超出期限**（R05 礼盒签收 45 天了，「封口没拆」也不改变期限）：按政策不退，客服不能自行给补偿。
3. **部分不符合**（R03 茉莉花茶开了一包）：拆开的那包不退，没拆的两包可以退。
4. **身份对不上**（R07 订单号对、邮箱不对）：不查、不透露订单任何信息，请对方用下单邮箱联系。
5. **要求退到其他账户**（R09 给了另一个银行账号）：只退原支付方式；账号不复述，日志里打码；转 Amy 核实。
6. **投诉 / 超期质量问题**（R10 包裹没到还说要去 PayPal 投诉、发小红书；R08 用了两个月出现裂纹）：不争辩、不下结论，当天转林先生。

另外 R06 是 Sophie 上午邮件的追问，要合并到 R01，不能再出一个补发方案。

**教学假设：** 售后政策是这家店自己定的。澳洲消费者法（Australian Consumer Law）给顾客的权利不因店铺政策而减少，具体怎么适用以 ACCC 官方说明为准；本项目里 Agent 不判断是不是「质量问题」，也不讨论顾客的法定权利，这些交给林先生。

## 3. 做法

先在 Claude 里把 Agent 的判断调好，再搬到 n8n。规则里能算的（签收天数、是否在期限内、退多少、要不要寄回、是否超过 150）全部放进 calc_refund 工具里写死；Agent 负责读懂邮件、选对原因、调对工具、写回复。

**第一步：在 Claude 里调 Agent。** 建 Project「竹间茶事售后」，上传 `returns-policy.md`、`orders.csv`、`order_lines.csv`、`products.csv`（练习时 Claude 用这些文件代替工具），项目说明放下面的系统提示词。把 10 封邮件按顺序贴进去，跟 `expected/decisions.csv` 对。

**Agent 的系统提示词：**

```
你是竹间茶事（墨尔本 Box Hill，Shopify 茶叶网店）的售后助理。你读顾客邮件，查订单，按售后政策出处理方案，起草回复。
你起草的每一封回复、每一个方案，都要 Amy 批准后才会发出；退款、补发、退货单由人在 Shopify 里操作，你不碰。

你可以做：
- 用 lookup_order 查订单：订单号 + 发件邮箱都对上才算通过。对不上只请对方用下单邮箱联系，不透露这个订单的任何信息。
- 用 get_policy 查政策原文。
- 用 calc_refund 算方案：参数 order_id、sku、qty、reason（change_of_mind / damaged / wrong_item / faulty_later / not_arrived）、customer_wants（退款 / 补发）。金额、天数、要不要寄回、是否超过 150 都以它的结果为准，你不自己算。
- 用 propose_resolution 提交方案；用 handoff_to_human 交给 Amy 或林先生，写清原因和优先级（当天 / 普通）。

处理规则：
1. 同一个邮箱、同一个订单、同一件事的追问：合并到前一封，不重复出方案，回复对方已经在处理。
2. 茶叶拆封了就不能无理由退；一封邮件里有拆封的也有没拆的，分开处理。
3. calc_refund 返回 needs_owner_approval = true → 方案照出，同时转林先生。
4. 超过 14 天才说有质量问题、包裹没到、顾客提到投诉 / 曝光 / chargeback / 消费者法 → 转林先生，优先级当天。

你绝对不能做：
- 说「已经退款 / 已经补发 / 已经寄出」。只能说「Amy 确认后会……」或「批准后会……」。
- 给优惠券、折扣、额外补偿，或者承诺政策以外的处理。
- 把退款退到原支付方式以外的任何账户；复述、保存顾客发来的银行账号或卡号（给人看的记录里打码）。
- 判断某个问题算不算质量问题，或者讨论顾客在消费者法下有什么权利。
- 跟顾客争辩，或者因为对方语气激动就改变政策。

输出格式（每封邮件一段 JSON）：
{"request_id", "intent", "identity_check", "tools_called", "proposed_resolution", "handoff", "priority", "reason", "reply_draft"}
回复先回应对方的情况，再说按政策能怎么处理；顾客用英文就用英文。
```

**第二步：在 n8n 里把工具做出来。** lookup_order 和 calc_refund 是子 workflow，读 Google Sheets 里的订单和明细（真实店里换成 Shopify 节点或 HTTP Request 调 Shopify Admin API，只给读取权限）。

**第三步：搭主流程，每封回复都进 Slack 审批。**

### n8n 搭建

**主流程**

| # | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| 1 | Email Trigger (IMAP) | 接 help@ 邮箱 | 只收新邮件；附件照片另存到 Google Drive，链接带给审批人 |
| 2 | Edit Fields (Set) | 统一成 request_id / from / received_at / subject / text | |
| 3 | Code（打码） | 把像银行账号、BSB、卡号的数字串换成 `[已打码]` 再往下传 | 正则：BSB `\d{3}-?\d{3}`、6 位以上连续或分组数字；原文不写日志 |
| 4 | AI Agent | 读邮件、调工具、按格式输出 | System Message 用上面的提示词；Max Iterations: 6 |
| 4a | Anthropic Chat Model | Agent 用的模型 | Temperature 0.2 |
| 4b | Simple Memory | 同一个发件人当天的多封邮件放在一起看 | Session Key: from |
| 4c | Structured Output Parser | 强制输出 JSON 结构 | 字段全部 required |
| 5 | Code（安全复核） | 再查一遍：草稿里有「已退款」「已补发」「优惠券」「折扣」「补偿」，或 calc_refund 说超过 150 但 handoff 为否，就强制转人工 | 规则写死，不靠模型 |
| 6 | Google Sheets | 每封邮件的决定写进「售后日志」 | Operation: Append Row；只写打码后的内容 |
| 7 | If | 是否要林先生 | handoff 包含「林先生」 |
| 8 | Slack | 当天提醒林先生：超额、超期质量、包裹未到、投诉 | Channel: #售后-老板；附订单号、方案、金额 |
| 9 | Slack · Send and Wait for Response（Amy 审批） | 回复草稿 + 方案发给 Amy | Response Type: Custom Form；字段：决定（批准 / 改了再发 / 不发）、修改后的回复 |
| 10 | If（超额） | 方案超过 150 的，Amy 批准后还要林先生批 | 条件：needs_owner_approval 为 true |
| 11 | Gmail · Send and Wait for Response（林先生审批） | 发给林先生，等他点批准 | Response Type: Approval；写清金额、原因、订单号 |
| 12 | Switch | 按最终决定分流 | 批准 / 改了再发 / 不发 |
| 13 | Gmail | 回复顾客 | Reply to 原邮件 |
| 14 | Google Sheets | 把方案写进「待操作」表：要退多少、补发什么、要不要发退货单，状态 todo | Amy 在 Shopify 里操作完把状态改成 done |

> 退款和补发不在 n8n 里自动执行。第 14 步只是给人的待办；**Agent 和工作流都不调用任何退款接口**。

**Agent 能用的工具**

| 工具 | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| lookup_order | Call n8n Workflow Tool | 订单号 + 邮箱都对上才返回订单和明细 | 对不上只返回 `found: false`，不说哪项错 |
| get_policy | Code Tool | 按关键词返回 returns-policy.md 的原文段落 | 只返回原文 |
| calc_refund | Call n8n Workflow Tool | 按政策算签收天数、是否在期限内、退款金额、是否寄回、运费谁出、是否超过 150 | 规则写在子流程的 Code 节点里；金额只按售价算 |
| propose_resolution | Call n8n Workflow Tool | 把方案写进「待审批」表 | status = pending |
| handoff_to_human | Call n8n Workflow Tool | 推 Slack 给 Amy 或林先生 | 参数：to、priority、reason |

**Agent 不能做的事**：不能退款、补发、建退货单，不能发邮件，不能改订单，不能给补偿，不能退到其他账户。人工审批点是第 9 步（Amy）和第 11 步（超过 150 时的林先生）。

> 用 ChatGPT 也可以：同一份系统提示词放进 ChatGPT Project 先调；n8n 里把 Anthropic Chat Model 换成 OpenAI Chat Model，工具和审批节点不用动。

## 4. 应该做出的结果

`expected/answer.json` 是 calc_refund 按政策算出的结果，`expected/decisions.csv` 是 10 封邮件的标准决定和回复草稿。

| 邮件 | 签收天数 | 方案 | 金额（AUD） | 走谁 |
|---|---|---|---|---|
| R01 盖碗碎 1 个 | 4 | 补发 1 个，28.00 < 30 不用寄回 | 0（补发） | Amy |
| R02 紫砂壶不想要 | 23 | 退货退款，顾客付退货运费 | 128.00 | Amy |
| R03 茉莉花茶 | 13 | 没拆的 2 包可退，拆开的 1 包不退 | 32.00 | Amy |
| R04 发错货 | 3 | 退款 + 店里预付退货单寄回 | 152.00 | Amy → **林先生** |
| R05 礼盒 | 45 | 超过 30 天，不退 | 0 | Amy |
| R06 追问 | — | 合并到 R01 | — | Amy |
| R07 龙井 | — | 订单号和邮箱对不上，不处理 | — | Amy |
| R08 紫砂壶裂纹 | 68 | 超过 14 天，转林先生 | — | **林先生**（当天） |
| R09 旅行茶具 | 11 | 退货退款，只退原支付方式 | 59.00 | Amy 核实账户 |
| R10 包裹没到 | 未签收 | Amy 查件，林先生跟进 | — | **林先生**（当天） |

- 待审批的退款合计 **371.00**（R02 + R03 + R04 + R09），其中只有 R04 超过 150。
- 转人工 4 封：R04、R08、R09、R10。

## 5. 验收清单

- [ ] R04 的 152.00 在林先生批准前不会发出回复，审批消息里写了金额和原因。
- [ ] R03 只退 2 包（32.00），R05 不退；两封回复都没有给优惠券或补偿。
- [ ] R07 的回复没有提到这个订单买了什么、什么时候签收。
- [ ] R09 的回复、日志和 Slack 消息里都没有出现银行账号原文；方案写的是退原支付方式。
- [ ] R06 没有生成第二个补发方案；没有一封回复说「已经退款 / 已经补发」。
- [ ] R08、R10 没有说「这是 / 不是质量问题」，也没有提消费者法怎么判，标为当天转林先生。
- [ ] 在 n8n 里演示：Amy 点「不发」后顾客收不到邮件，「待操作」表没有新增；把 R04 的林先生审批点拒绝，回复不会发出。

## 6. 加分挑战

- 接上 Shopify 节点（只读权限）替代 Google Sheets 里的订单表，比较两种做法谁更容易出错、权限怎么收窄。
- 每周一给林先生发售后周报：多少封、退了多少钱、破损最多的是哪个商品、哪家快递出问题最多，帮他决定要不要换包装或换快递。
- 给 R10 这类「包裹没到」加一个等待节点：Amy 查件后 48 小时没进展，自动提醒林先生决定补发还是退款。

## 7. 简历 / 面试可以这样讲

> 为一家 Shopify 茶叶网店搭建售后 Agent：n8n AI Agent 读售后邮件，调用订单查询（订单号 + 邮箱双重核对）和退款计算工具，按店铺政策判断期限、金额、是否寄回；退款超过 150 澳元走老板二次审批，超期质量问题、包裹未到和投诉转人工；邮件里的银行账号先打码再交给模型，只退原支付方式；Agent 不接触任何退款接口，所有方案经店员审批后由人在后台操作（教学项目，数据为为练习设计）。
