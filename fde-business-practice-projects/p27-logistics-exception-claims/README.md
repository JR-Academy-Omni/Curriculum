# P27 · 物流 / 仓储：异常件（延误、破损）→ 通知客户 → 理赔登记

| 行业 | 难度 | 时长 | 工具 |
|---|---|---|---|
| 物流 / 仓储 | L2 Workflow | 150 分钟 | Claude（Projects）+ n8n + Google Sheets + Slack + Gmail |

## 1. 客户场景

快达仓配在悉尼 Wetherill Park，帮三家网店（小森家居、优果零食、暖暖母婴）代发货，走三家快递。每天早上承运商会推一批异常件：延误、破损、丢失、地址找不到。客服主管 Kelly 要一条条看：这单要不要告诉收件人、怎么说、要不要开理赔、赔多少，再登记进理赔表。现在全靠她记规则，常见的坑是：延误了一天但其实还在承诺时效内，也去发了道歉信，客人反而紧张；同一单的破损报了两次，开了两笔理赔；签收半个月才报的破损也照样去索赔，被承运商一口回绝；还有一次客服在信里写了「是快递弄坏的，我们一定全额赔」，网店老板很不高兴。

她想要的是：**每天早上异常件进来，系统按规则判断好哪些要通知、哪些要理赔、赔多少，通知草稿也写好；她在 Slack 里看一遍点「批准」才发出去，金额大的理赔再让经理老郑批一次。**

## 2. 练习数据

全部是练习数据，仓库、网店、收件人、邮箱（`mail.example`）都是为这个练习设计的。

| 文件 | 内容 |
|---|---|
| `data/exceptions-2026-11-11.csv` | 当天 18 条异常：event_id, waybill, carrier, event_time, event_code（DELAY / DAMAGED / LOST / ADDRESS_ISSUE）, new_eta, detail |
| `data/shipments.csv` | 发货台账 30 单：waybill, client, carrier, ship_date, promised_date, delivered_date, receiver_name, receiver_email, receiver_postcode, contents, declared_value, insured |
| `data/claims-register.csv` | 已有的 3 条理赔：claim_id, waybill, opened, type, amount_claimed, status, note |
| `data/claim-policy.md` | 仓库自己的处理规则：各类异常怎么处理、理赔金额怎么算、通知怎么写 |

破损件没有图片，`detail` 里是收件人发来的照片的文字说明。

数据里**故意藏了 5 处问题**：

1. 同一单同一种延误，承运商推了两次（E03 和 E10）；
2. 一个运单号在发货台账里找不到（E11）；
3. 一单签收 15 天后才报破损，超过了报损期限（E06）；
4. 一单已经有 open 状态的理赔，又来了一条补充（E12），不能再开一笔；
5. 一单延误了，但台账里收件人邮箱是空的（E13）。

另外有两条「延误」其实新预计日期没有晚于承诺日期（E02、E18），不需要通知。

教学假设：签收后 7 天内报破损才能索赔；没买保价最多赔 100 元；单笔超过 500 元要经理批。这些都是这家仓库为练习定的数，**真实的索赔期限、赔付上限和保价条款以承运商合同和官网条款为准**。

## 3. 做法

**处理规则**（先在 Claude 里跑通，再搬进 n8n 的 Code 节点）：

- 先挡：同一运单同一异常只处理一次；运单号查不到 → 暂停交 Kelly；已有 open 理赔 → 补进原理赔，不新开、不重复通知。
- DELAY：新预计日期 > 承诺日期才通知收件人，晚几天写清楚；没晚就只记录。
- ADDRESS_ISSUE：通知收件人确认地址，同时告诉网店。
- DAMAGED：今天 − 签收日期 ≤ 7 天 → 通知 + 开理赔草稿；超过 → 先不通知，交经理判断。
- LOST：通知 + 开理赔草稿。
- 理赔金额：保价 = 申报价值；没保价 = min(申报价值, 100)。金额 > 500 → Kelly 确认后还要老郑批。
- 收件人邮箱为空 → 不发给收件人，改成通知网店去联系。

**第一步：在 Claude 里把规则跑通。** 建 Project「快达异常件」，把四个文件传进去，说明里写：

```
你是快达仓配的异常件助手。我会给你当天的异常 exceptions、发货台账 shipments、理赔表 claims-register 和规则 claim-policy.md。
逐条处理异常，严格按 claim-policy.md 的规则，先挡问题再判断：
1. 同一 waybill + event_code 今天已经处理过 → 跳过。
2. waybill 不在 shipments 里 → 暂停，交 Kelly。
3. claims-register 里这个 waybill 有 status = open 的理赔 → 补进原理赔，不新开，不通知。
4. 其余按规则判断：要不要通知收件人、要不要通知网店、要不要开理赔、理赔金额、审批路线。
输出三块：
① 决定表：event_id, waybill, event_code, decision, notify_receiver, notify_client, claim, claim_amount, approval_route, reason；
② 新开理赔清单和合计金额；
③ 每封要发的通知草稿。草稿以网店名义写（「XX 委托快达仓配通知您」），说清发生了什么、接下来怎么办；
   不说是谁的错，不承诺赔多少、几天到账，不承诺具体送达时间，只引用承运商给的新预计日期。
所有日期、金额照抄数据，不确定就写出来，不要猜。你只出草稿，不发任何邮件。
```

拿结果跟第 4 节和 `expected/decisions.csv` 对。对不上先改规则，规则对了再进 n8n。

**第二步：把三张表放进 Google Sheets。** 一个表格三张工作表：`exceptions`、`shipments`、`claims`，再加一张空的 `notice_log` 记每封通知的状态。

**第三步：按下面的节点搭 n8n。** 判断和金额全在 Code 节点里（确定、可复查）；Claude 只负责写通知草稿和给 Kelly 的摘要。

### n8n 搭建

| # | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| 1 | Schedule Trigger | 每天早上触发 | 每天 08:00，时区 Australia/Sydney；真接承运商时可以改成 Webhook 收推送 |
| 2 | Google Sheets（读异常） | 读 `exceptions` 当天的行 | Operation: Get Row(s)；Filter: event_time 是今天 |
| 3 | Remove Duplicates | 同一运单同一异常只留第一条 | Compare: Selected Fields → waybill, event_code |
| 4 | Google Sheets（读台账） | 读 `shipments` | 节点设置里打开 Always Output Data |
| 5 | Google Sheets（读理赔） | 读 `claims` | 同上 |
| 6 | Code（判断） | 按规则逐条输出 decision、notify_receiver、notify_client、claim、claim_amount、approval_route、reason | Run Once for All Items；用 `$('读台账').all()`、`$('读理赔').all()` 取另外两张表 |
| 7 | Switch | 分三路：要发通知 / 只记录 / 暂停或补充 | 按 decision 前缀分 |
| 8 | Slack（暂停提醒） | 查不到单号、超期破损、已有理赔这几类推给 Kelly 和老郑 | Send Message；列出 event_id、原因 |
| 9 | Basic LLM Chain + Anthropic Chat Model | 给每条要发的通知写草稿 | 提示词见下；Temperature 0.2 |
| 10 | Aggregate | 把当天所有草稿和新开理赔合成一条审批消息 | Aggregate: All Item Data |
| 11 | Slack · Send and Wait for Response（Kelly 审批） | 发「决定表 + 草稿 + 理赔合计」给 Kelly | Response Type: Custom Form；字段：决定（全部批准 / 退回）、要撤下的 event_id |
| 12 | If（Kelly 是否批准） | 退回的写进 `notice_log` 状态 declined，结束 | 条件：决定 = 全部批准 |
| 13 | Split Out | 拆回一条条通知和理赔 | Field: 审批通过的列表 |
| 14 | If（是否要经理批） | claim_amount > 500 走老郑 | 条件：approval_route 含「经理」 |
| 15 | Gmail · Send and Wait for Response（老郑审批） | 发理赔单号、运单、申报价值、保价情况给老郑 | Response Type: Approval；不批就不开理赔、不发对应通知 |
| 16 | Gmail（发通知） | 发给收件人，抄送网店 | To: receiver_email；CC: 网店对接邮箱；E13 这类改发网店 |
| 17 | Google Sheets（写理赔表） | 新开理赔 Append Row，status = open；补充类 Update Row 写进 note | 理赔号用 Code 节点生成，避免重复 |
| 18 | Google Sheets（写 notice_log） | 记 event_id、发给谁、谁批的、几点发的 | Operation: Append Row |

第 9 步的提示词：

```
你在帮快达仓配写一封异常件通知，下面是这条异常和台账信息的 JSON。
以网店的名义写开头：「{client}委托快达仓配通知你」。说清楚：发生了什么、包裹现在怎样、收件人需不需要做什么、下一步谁会联系他。
延误：引用 new_eta 和 promised_date，不承诺一定在新日期送到。
破损 / 丢失：说已经报给承运商，网店会直接联系商量怎么处理；破损的提醒保留外箱和货品。
不能写：是快递或仓库的错；会赔多少钱、几天到账；JSON 里没有的日期、金额、补偿。
语气诚恳、简短，不超过 150 字。detail 是英文的就用英文写，否则用中文。
```

> 用 ChatGPT 也可以：第一步用 ChatGPT Project 跑同样的规则；n8n 里把 Anthropic Chat Model 换成 OpenAI Chat Model，其他节点不变。

## 4. 应该做出的结果

`expected/decisions.csv` 是 18 条异常的处理结论，`expected/answer.json` 是脚本按规则算出的汇总，`expected/notice-drafts.md` 是几封通知和给 Kelly 的摘要的参考写法。

18 条异常，处理 17 条（E10 重复跳过）：

| 结果 | 事件 |
|---|---|
| 通知收件人（11 封） | 延误 E01、E03、E14；破损 E04、E05、E15；丢失 E07、E08、E16；地址 E09、E17 |
| 只通知网店 | E13（晚 3 天，收件人没邮箱） |
| 只记录，不通知 | E02、E18（新预计日期没有晚于承诺日期） |
| 暂停 / 补充 | E06 超期破损交老郑；E11 单号查不到交 Kelly；E12 补进现有理赔 CL-2611-003 |
| 跳过 | E10（和 E03 重复） |

新开理赔 6 笔，合计 **2,119.00**：

| 理赔号 | 运单 | 类型 | 申报价值 | 保价 | 索赔金额 | 审批路线 |
|---|---|---|---|---|---|---|
| CL-2611-004 | KD261104 | 破损 | 89.00 | 否 | 89.00 | Kelly |
| CL-2611-005 | KD261105 | 破损 | 640.00 | 是 | 640.00 | Kelly → 经理老郑 |
| CL-2611-006 | KD261107 | 丢失 | 230.00 | 否 | 100.00 | Kelly |
| CL-2611-007 | KD261108 | 丢失 | 1,180.00 | 是 | 1,180.00 | Kelly → 经理老郑 |
| CL-2611-008 | KD261115 | 破损 | 45.00 | 否 | 45.00 | Kelly |
| CL-2611-009 | KD261116 | 丢失 | 65.00 | 否 | 65.00 | Kelly |

注意 KD261107：申报价值 230，但没买保价，只能按 100 索赔。E06 签收是 10 月 27 日，到今天 15 天，超过 7 天。

## 5. 验收清单

- [ ] 新开理赔正好 6 笔，合计 2,119.00；KD261107 按 100 封顶，不是 230。
- [ ] E10、E11、E06、E12 都没有新开理赔，也没有给收件人发通知；E12 的新信息写进了 CL-2611-003 的 note。
- [ ] E02、E18 没有发道歉信；E13 的通知发给了网店，不是空邮箱。
- [ ] E05、E08 在老郑批准前不会开理赔、不会发通知；Kelly 点「退回」时一封都发不出去。
- [ ] 所有草稿里没有「是快递的错」「全额赔偿」「X 天到账」这类说法，日期和金额跟台账一致。

## 6. 加分挑战

- 给超期的 E06 写一封给老郑的说明：签收日期、报损日期、照片说明、申报价值，以及「建议网店自己处理售后」和「试着跟承运商争取」两种做法的利弊。
- 每周一汇总上周理赔：每家承运商开了几笔、金额多少、几笔被拒，发给老郑和三家网店。
- 承运商回复理赔结果的邮件进来后（Email Trigger (IMAP)），自动把 `claims` 里对应那条的 status 改成 paid / rejected，改之前同样要 Kelly 点一下。

## 7. 简历 / 面试可以这样讲

> 为一家代发货仓库搭建异常件处理流程：用 n8n 每天读取承运商异常推送，在 Code 节点按规则判断是否通知收件人、是否开理赔、索赔金额和审批路线，自动拦下重复事件、查不到的单号、超过报损期限和已有理赔的情况；通知草稿由模型按「不认责、不承诺金额」的规则起草，经客服主管在 Slack 审批、大额理赔再经经理批准后才发出并登记理赔表（教学项目，仓库和数据都是为练习设计的，期限和金额为教学假设）。
