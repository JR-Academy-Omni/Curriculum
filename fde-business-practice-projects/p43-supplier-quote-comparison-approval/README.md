# P43 · 通用：供应商比价 → 推荐 → 采购批准

| 行业 | 难度 | 时长 | 工具 |
|---|---|---|---|
| 通用（18 人的室内设计工作室） | L2 Workflow | 150 分钟 | Claude（Projects）+ n8n + Google Sheets + Slack + Gmail |

## 1. 客户场景

森屿室内设计在墨尔本 Richmond，18 个人，没有专职采购，买东西都靠办公室协调 Zoe。这个月要同时买三样：6 台设计师笔记本、1 台多功能打印机、10 把办公椅。每样她都问了三四家，报价从邮件、PDF、电话记录里散着来：有的写含 GST、有的不含，有的运费另算，有一家发了两次报价，还有一份促销价其实上周就过期了。她把这些贴进一张 Excel，挑「单价最低」的那家报给运营经理 Karen，Karen 也看不出漏了什么，金额大的还得再找老板 Leo。上次就是按单价选了打印机，加上运费反而更贵。

他们想要的是：**报价收齐后，自动换成同一口径比价，把不合格的报价挑出来并写清原因，出一份推荐，按金额走 Karen 或 Leo 的审批，批了才给供应商下单。**

## 2. 练习数据

所有公司、供应商、邮箱（`.example`）、价格都是为这个练习设计的。

| 文件 | 内容 |
|---|---|
| `data/purchase-requests.csv` | 3 张需求单：pr_id, item, spec_required, qty, needed_by, budget_ex_gst, requester |
| `data/quotes.csv` | 13 份报价：quote_id, pr_id, supplier, received_at, price_basis, unit_price, qty_quoted, delivery_fee, lead_time_days, warranty_months, valid_until, spec_offered, notes |
| `data/approved-suppliers.csv` | 合格供应商名单：supplier, approved, contact_email, payment_terms |
| `data/purchasing-policy.md` | 工作室自己定的比价和审批规则 |

`quotes.csv` 里两个字段要特别看：

| 字段 | 含义 |
|---|---|
| price_basis | `ex GST` 不含税 / `inc GST` 含税；同一行的运费跟单价是同一口径 |
| delivery_fee | 运费；**空着表示供应商没写**，不等于 0 |

比价日期按 **2026-11-12** 算。数据里**故意藏了 5 类问题**：

1. **修订版重复**：TechHub 对笔记本发了两份报价（Q01、Q05），只能用最新那份。
2. **过期报价**：PrintWorks 打印机 1,760 的促销价（Q08）11-05 就过期了，单价看着最低。
3. **不满足需求**：Southbank 笔记本最便宜但只有 16GB 内存（Q04）；Comfort Office 的椅子 21 天才到，赶不上 11-28（Q12）；SitWell 只剩 6 把椅子（Q13）。
4. **资料缺失**：Chair Depot 的椅子单价最低，但运费空着（Q11）。
5. **不在合格供应商名单**：BudgetPC（Q03）报价有效且便宜，还要求先付款。

另外有个口径陷阱：Pacific IT、Copy&Co、Comfort Office 报的是含 GST 价，直接跟不含 GST 的比会比错。

教学假设：GST 按 10% 换算（含税价 ÷ 1.1），有些商品可能不含 GST，以供应商发票为准。5,000 审批线和「≥ 2,000 要 3 家报价」是这家工作室自己的规则，不是行业标准。

## 3. 做法

**比价规则**（先在 Claude 里跑通，再搬进 n8n 的 Code 节点）：

- 不含 GST 单价、运费：`inc GST` 的除以 1.1，`ex GST` 的不变
- 到手总价 = 不含 GST 单价 × 需求数量 + 不含 GST 运费
- 预计到货 = 2026-11-12 + lead_time_days，要不晚于 needed_by
- 先排除（顺序：修订版替代 → 过期 → 数量不够 → 规格不符 → 交期赶不上 → 运费空 → 不在名单），一份报价可以有多条原因
- 有效报价按到手总价从低到高；一样低选交期短
- 推荐总额 ≥ 2,000 且有效报价不足 3 家 → 照样推荐，但写明原因，走老板审批
- 推荐总额 > 5,000、超预算、或报价不足 3 家 → Karen 确认后 Leo 批准；其余 Karen 批准

**第一步：在 Claude 里把规则跑通。** 建 Project「森屿采购比价」，上传四个文件，说明里写：

```
你是森屿室内设计的采购比价助手。比价日期 2026-11-12。规则以 purchasing-policy.md 为准。
对每张需求单：
1. 把所有报价换成不含 GST：price_basis = inc GST 的单价和运费都除以 1.1，保留两位小数。
2. 逐份检查能不能参与比价：同一供应商同一需求只看最新 received_at 的那份；valid_until 早于比价日、qty_quoted 少于需求、spec_offered 缺需求规格里的任何一项、比价日 + lead_time_days 晚于 needed_by、delivery_fee 为空、供应商不在 approved-suppliers 里——都排除，原因逐条写出来。delivery_fee 空着不能当 0。
3. 到手总价 = 不含 GST 单价 × 需求数量 + 不含 GST 运费。有效报价从低到高排，推荐最低的；一样低选交期短的。
4. 审批路线：总额 ≤ 5000 → Karen 批准；总额 > 5000、超预算、或总额 ≥ 2000 但有效报价不足 3 家 → Karen 确认后 Leo 批准。
输出：① 每张需求单一张比价表（报价号、供应商、不含 GST 到手价、预计到货、有效 / 排除 + 原因）；② 推荐和审批路线；③ 给审批人的一段说明，写清比第二名省多少、哪些便宜的报价为什么没选；④ 给 Zoe 的待办（要补的资料）。
数字照算，不要估；你只出比价和推荐，不联系供应商，不下单。
```

发一句「按今天的报价出比价和推荐」，跟第 4 节和 `expected/decisions.csv` 对。最容易错的两处：打印机按单价选了 Harbour，椅子把 Chair Depot 的运费当成 0。

**第二步：把四份数据放进 Google Sheets。** 一个表格四张工作表：`requests`、`quotes`、`suppliers`、`po_log`（空表，记审批和下单）。实际用的时候，Zoe 收到报价就往 `quotes` 加一行；也可以加一条小流程，用 Information Extractor 从报价邮件里提取字段，提取完先给 Zoe 核对再写进表。

**第三步：按下面的节点搭 n8n。** 算数全在 Code 节点，Claude 只写审批说明。

### n8n 搭建

| # | 节点 | 做什么 | 关键设置 |
|---|---|---|---|
| 1 | n8n Form (Form Trigger) | Zoe 报价收齐后提交「开始比价」，选需求单号 | 字段：pr_id（下拉，可多选）、比价日期 |
| 2 | Google Sheets（读需求单） | 读 `requests` | Operation: Get Row(s) |
| 3 | Google Sheets（读报价） | 读 `quotes` | 同上 |
| 4 | Google Sheets（读供应商名单） | 读 `suppliers` | 同上；打开 Always Output Data |
| 5 | Code（比价） | 按第 3 节规则逐份检查、换算、排序，每张需求单输出一个 item：比价表、推荐、flags、`needs_owner_approval` | Run Once for All Items；用 `$('读报价').all()` 取各表；规则跟 Claude Project 一字不差 |
| 6 | Basic LLM Chain + Anthropic Chat Model | 把比价 JSON 写成给审批人的说明 | 提示词见下；Temperature 0.2 |
| 7 | Slack · Send and Wait for Response（Karen） | 比价表 + 说明发到 #采购，Karen 选批准 / 退回 | Response Type: Approval；超时 2 天按退回处理 |
| 8 | If（Karen 是否批准） | 退回的写 `po_log` 状态 returned，并 Slack 告诉 Zoe 原因 | 条件：`approved` 为 true |
| 9 | If（是否需要老板） | `needs_owner_approval` 为 true 走 Leo | 条件见左 |
| 10 | Gmail · Send and Wait for Response（Leo） | 发给 Leo，写清金额、为什么要他批（超 5,000 / 报价不足 3 家） | Response Type: Approval |
| 11 | Merge | 把「Karen 批准且不用老板」和「Leo 批准」两路汇到一起 | Mode: Append |
| 12 | Basic LLM Chain + Anthropic Chat Model | 写给中选供应商的下单邮件草稿 | 数量、单价、到手价照抄 JSON，不写 JSON 里没有的折扣或付款承诺 |
| 13 | Gmail（发给中选供应商） | 两级都批完才发 | To: approved-suppliers 里的 contact_email，不用报价邮件里的回复地址 |
| 14 | Google Sheets（写 po_log） | 记需求单号、中选报价、金额、谁批的、几点发的 | Operation: Append Row |

人工审批点：第 7 步（Karen）和第 10 步（Leo）。没批准之前，流程不会给任何供应商发邮件。

第 6 步的提示词：

```
你在帮森屿室内设计写一段采购审批说明。下面是一张需求单的比价结果 JSON。
写给审批人看，150 字以内：推荐哪家、不含 GST 到手多少、在不在预算内、比第二名省多少；
被排除的报价里，凡是单价比推荐更低的，一句话说清为什么没选；
如果 flags 不为空，开头先写 flags。所有数字照抄 JSON，不要自己算，不要加 JSON 里没有的信息。
```

> 用 ChatGPT 也可以：第一步用 ChatGPT Project 跑同样的规则；n8n 里把 Anthropic Chat Model 换成 OpenAI Chat Model，其他节点不变。

## 4. 应该做出的结果

`expected/answer.json` 是脚本按规则算出的标准答案；`expected/decisions.csv` 是 13 份报价逐份的结论；`expected/approval-messages.md` 是审批说明和给 Zoe 待办的参考写法。

13 份报价：6 份有效，7 份被排除。

| 需求单 | 推荐 | 不含 GST 到手 | 有效报价排序 | 审批路线 |
|---|---|---|---|---|
| PR-01 笔记本 ×6 | TechHub Melbourne（Q05） | 11,970.00 | Q05 11,970.00 / Q02 12,600.00 / Q06 13,080.00 | Karen 确认 → Leo 批准（超 5,000） |
| PR-02 打印机 ×1 | Copy&Co（Q09） | 1,900.00 | Q09 1,900.00 / Q07 1,970.00 | Karen 批准 |
| PR-03 办公椅 ×10 | ErgoSeat（Q10） | 3,530.00 | 只有 Q10 | Karen 确认 → Leo 批准（有效报价只有 1 家） |

三张单推荐合计不含 GST 17,400.00。

被排除的 7 份：

| 报价 | 供应商 | 原因 |
|---|---|---|
| Q01 | TechHub Melbourne | 被同一供应商 Q05 修订版替代 |
| Q03 | BudgetPC Direct | 不在合格供应商名单（到手 10,725.00，比推荐便宜，但不能直接用） |
| Q04 | Southbank Computers | 规格不符：缺 32GB |
| Q08 | PrintWorks Vic | 已过有效期（2026-11-05） |
| Q11 | Chair Depot | 运费没写，资料不全 |
| Q12 | Comfort Office | 交期赶不上：12-03 到，需求是 11-28 前 |
| Q13 | SitWell Furniture | 只报了 6 把，需要 10 把 |

几个容易算错的地方：Pacific IT 含税 2,299 换成不含税是 2,090.00，运费 66 换成 60.00；Copy&Co 含税 2,090 换成 1,900.00，比 Harbour 的 1,850 + 120 运费便宜 70.00；Chair Depot 运费只要低于 330.00 就会比 ErgoSeat 便宜，所以要先补资料再让 Leo 决定。

## 5. 验收清单

- [ ] 三张需求单的推荐和到手总价跟标准答案一致，误差在 0.01 以内；含 GST 的报价都先除了 1.1。
- [ ] Q01、Q03、Q04、Q08、Q11、Q12、Q13 都被排除，原因跟 `decisions.csv` 一致；Q11 的运费没有被当成 0。
- [ ] PR-02 推荐的是 Copy&Co，不是单价最低的 PrintWorks 或 Harbour。
- [ ] PR-01 和 PR-03 走到了 Leo；PR-03 的审批消息里写明「有效报价只有 1 家」。
- [ ] 在 n8n 里演示：Karen 点退回后，供应商收不到任何邮件，`po_log` 记为 returned；PR-01 在 Leo 批准前不会发出下单邮件。
- [ ] 下单邮件发到的是合格供应商名单里的邮箱，金额跟推荐一致，没有出现表里没有的折扣。

## 6. 加分挑战

- Zoe 补上 Chair Depot 的运费后（比如 150），重新跑一遍 PR-03，看推荐是否变化、审批路线是否还需要 Leo。
- 加一个「新供应商审核」分支：Karen 在审批时选「考虑 BudgetPC」，流程就给 Zoe 建一张审核任务（ABN、银行信息、合同），审核完之前 BudgetPC 仍不能被推荐。
- 给落选的供应商写一封礼貌的感谢邮件草稿，等审批通过后一起发；不透露中选价格。

## 7. 简历 / 面试可以这样讲

> 为一家小型设计工作室搭建供应商比价审批流程：用 n8n 读取需求单和报价表，把含税 / 不含税、运费口径统一后按到手总价比价；修订版重复、过期、规格或数量不符、交期赶不上、运费缺失、不在合格供应商名单的报价自动排除并写明原因；推荐经运营经理确认，超额或报价不足时再由老板批准，批准后才给中选供应商发下单邮件并记入采购日志（教学项目，公司和报价都是为这个练习设计的）。
