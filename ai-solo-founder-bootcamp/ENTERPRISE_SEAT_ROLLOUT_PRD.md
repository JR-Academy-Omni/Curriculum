---
title: OPC 企业席位（第二位员工 8 折）对外落地 Rollout PRD
status: build
owner: @lightman
priority: medium
---

# OPC 企业席位 · 对外落地 Rollout PRD

> **政策真相源（SoT）= [`PRD.md` §3.4](./PRD.md)。本文件只管「怎么把 §3.4 落到所有对外面」，不重述规则。**
> 规则若要改（折扣率 / 适用人数 / 替换流程），**只改 §3.4**，再回来同步本清单。本文件出现的任何数字都引用自 §3.4，不在这里另立一套。

## 0. 一句话

§3.4 新增了「以公司名义报名 + 同公司第二位员工加席 8 折 + 每席 1 人可换指派人」。这条目前**只在 PRD 立了字**，全仓库 6 个对外面零痕迹（已核查）。本 PRD 列出这 6 面各自要改什么、改哪、什么顺序、谁拍板。

## 1. 政策要点（仅供对照，规则以 §3.4 为准）

- 老板可「以公司名义」报名，指派老板本人或核心员工全程代上。
- **同公司第二位员工加席 8 折**：基价 = 第一席**同期同档实付价** × 0.8（不是写死的某个数字——早鸟期就是 $2,800 × 0.8 = $2,240，价格档变了它跟着变）。
- 第二席 = 独立 1 人 1 席，计入 cohort 总人数，各自走申请制面试、各自发证。
- 每席 1 人、可换指派人（替换流程）；3 人及以上团报**本期未开**。

## 2. 下游面清单（6 处 · 真实路径已核对）

| # | 面 | 路径 | 现状 | 要改什么 | 类型 |
|---|----|------|------|---------|------|
| 1 | 静态 landing | `curriculum/ai-solo-founder-bootcamp/public/landing.html`（价格区 L395-411 / 锚价表 L420-436 / sticky L503 / 退款 L396） | 三档价硬编码，无企业席位 | pricing 区下方加「带个员工一起来 · 第二位 8 折」说明块 + FAQ | 纯文案 |
| 2 | 销售页数据 | `jr-academy-web-zh/src/app/[locale]/program-course/ai-solo-founder-bootcamp/content.ts`（`PRICING` L255-282 / `FAQ` L284-290） | 三档 + 5 条 FAQ，走 i18n key | PRICING 下加企业席位字段或新 section key + 加 1 条 FAQ | 数据 + i18n |
| 3 | 销售页文案 | `jr-academy-web-zh/messages/zh/customSoloFounder.json`（+ `messages/en/...`） | 无企业席位文案 | 加企业席位标题/正文 + FAQ 文案（中英双轨） | 纯文案 |
| 4 | 报名表单 | `jr-academy-web-zh/src/components/Pages/ApplyPage/ApplyContent/ApplyContentChoose/`（`ChooseProgramCard.tsx` 价格 L535/L555/L572，`index.tsx` `finalPrice` L242…） | 仅 `tuition/promoTuition/earlyBird`，自助单席 | 见 §3 — MVP 不改自助流，走运营开第二席 | 逻辑（P1） |
| 5 | 后端定价 | `jr-academy/src/models/program.schema.ts`（`tuition` L434 / `promoTuition` L439 / `earlyBirdDueDate` L376）+ `order.service.ts` `getProgramPrice()` L642-670 | 无团报/企业/第二位字段；折扣仅会员 tier 百分比 | 见 §4 — MVP 不动 schema | 逻辑（P1/P2） |
| 6 | 混沌渠道页 | `curriculum/ai-solo-founder-bootcamp/public/partnerships/hundun-au/index.html` | 混沌澳洲合作 landing，无企业席位 | 若该渠道要主打「带员工来」才加；否则不动 | 纯文案（可选） |

> 退款 / 报名条款目前**没有结构化字段**，只散在 landing.html L396 + i18n `refundTitle/refundDesc`。企业席位的「替换流程 / 第二席各自适用退款」要落在同一处文案，不另起一套条款页。

## 3. 分期方案（先文案后逻辑，别一上来啃后端）

把「能不能自助下单第二席」和「对外讲不讲这个政策」解耦。**先让政策可见、靠运营兜底成交；再上自助。**

> **P0 进度（2026-07-02）**：✅ 已完成 — #1 landing.html（pricing 区企业席位块 + FAQ teaser + 修正 FAQ 计数 19→15）、curriculum.html（完整 FAQ 第 15 条）、#2 content.ts（FAQ 第 6 条）、#3 zh/en i18n（`pricing.enterprise*` 6 keys + faq[5]）、销售页渲染块（`PriceEnterprise` styled comps，PricingGrid 与 PriceAnchor 之间）。type-check 我改文件 0 错（172 个存量错误与本次无关，stash 前后对比验证）。#6 hundun 未动（等渠道确认要不要主打）。**待部署**：curriculum push 即自动部署；web-zh 需触发 Deploy Production workflow。P1/P2 未动。

### P0 · 文案先行（无需改后端，1 天内可上）

对外把政策讲清楚，第二席成交走**运营兜底**：销售页/landing 留 EOI 或加微信，运营手工开第二席订单（manual order / 折扣码）。

- 改 #1 landing.html、#2 content.ts、#3 i18n（中英）、（可选 #6 hundun）。
- 文案口径统一：「**老板太忙？让员工替你上；想两个人一起做？第二位员工 8 折**」。强调 1 席 1 人、第二席独立发证、可换人，不承诺收入（CLAUDE.md 红线）。
- 第二席价示例必须写成「第一席实付价 × 8 折」，**别写死 $2,240**——早鸟一过就错。或只写「8 折 / 立省 20%」，把绝对值交给成交时算。
- 成交动作：CTA → 「企业席位咨询」EOI 表单 / 微信，运营按 §3.4 手工开第二席。

### P1 · 自助第二席（改前端 apply 流）

让第一席报名后，能在同一公司名下自助加报第二席并自动算 8 折。

- `ApplyContentChoose` 加「第二位员工」选项：勾选后 `finalPrice = round(firstSeatFinalPrice × 0.8)`，并要求填**同公司**、关联第一席报名人/邮箱（域名一致或填第一席订单号）。
- 第二席仍各自填申请表（§3.3），不是「一单两人」——是**两笔报名、第二笔自动 8 折**。
- 依赖 §4 后端给「第二席折扣」一个合法来源（折扣码或新字段），否则前端算了价后端不认。

### P2 · 后端结构化（可选，量起来再做）

第二席折扣进 program schema，成自助闭环。见 §4 方案 B。

## 4. 后端方案选型（第二席 8 折从哪来）

现状：`program.schema` 只有 `tuition/promoTuition/earlyBirdDueDate`，`order.service.getProgramPrice()`（L642-670）按早鸟窗口二选一出价；**没有任何按席位/团购的折扣字段**，现有 `discount-comparison` 是会员 tier 折扣，跟这个无关。

| 方案 | 做法 | 工作量 | 适合 |
|------|------|--------|------|
| **A · 折扣码（MVP 推荐）** | 运营给「同公司第二席」发一次性 8 折码 / 手工开 manual order，金额 = 第一席实付 × 0.8 | 几乎零开发，靠现有下单 | P0/P1 起步、量小 |
| **B · schema 新增字段** | `program.schema` 加 `secondSeatDiscountRate`(=0.8) + 报名时标记 `linkedFirstSeatOrderId`，`getProgramPrice()` 增第二席分支 | 中（schema + 计算 + 前端联动 + 测试） | 量大、要自助闭环时 |

**建议**：P0/P1 用 A（折扣码/manual order），跑通几单、确认政策不再变，再上 B。避免为一个还在「商务待拍板」的政策提前改核心下单逻辑。GST 跟现有订单逻辑走（第二席 $2,240 仍按现行 GST 处理，不在本 PRD 另算）。

## 5. 执行顺序

1. **拍板 §7 开放问题**（折扣率确认 8 折 / 适用人数 / 成交方式 A or B）。
2. **P0 文案**：landing.html + content.ts + i18n 中英 →（可选 hundun）。一次 commit，curriculum push main（dashboard/部署读 main）+ web-zh 走自己 CI。
3. **P1 自助**：apply 前端加第二席选项 + 后端折扣码打通。
4. **P2**：视量决定要不要上 schema 字段。

## 6. 验收标准

- [ ] landing.html 与销售页都能看到「第二位员工 8 折」，价用「第一席 × 0.8 / 立省 20%」口径，无写死过期数字。
- [ ] 中英文案一致、都不承诺收入、都讲清 1 席 1 人 + 第二席独立发证 + 可换人。
- [ ] 至少能走通一条成交路径（P0：运营手工开第二席；P1：自助勾选自动 8 折）。
- [ ] 全程没在 §3.4 之外的地方另写一套「规则」——所有页面都是 §3.4 的展示层。

## 7. 开放问题（待拍板，先别落对外页）

- **折扣率**：确认就是 8 折（20% off）？要不要随价格档变（早鸟期 vs 二期）？
- **人数**：只第二位 8 折，还是第三位起也有（§3.4 现写「3 人及以上未开」）？
- **成交方式**：P0 走折扣码/手工，还是直接上自助？
- **GST / 税务措辞**：第二席发票口径是否要会计确认（参考 CHANGELOG 2026-06-30 早鸟价 + $280 GST 的处理）。
- **替换 + 退款交叉**：第二席若中途退，是否影响第一席的「公司名义」身份（§3.4 替换流程的边界）。

## 8. 风险

- **多套真相**：最大风险是有人直接在 landing/销售页写一套自己的折扣规则。对策——本 PRD 第 0 行已声明 SoT=§3.4，所有面是展示层。
- **写死价格**：第二席写 `$2,240` 绝对值，早鸟一过就误导。强制用「× 0.8 / 8 折」口径。
- **自助加席的「多塞人」漏洞**（P1）：必须校验第二席与第一席同公司、且是**两笔独立报名各自过审**，不是一单两人——否则违背 §3.4「每席 1 人」。
- **过早改后端**：政策还在商务待拍板就动 `getProgramPrice()` 核心逻辑，返工成本高。P0/P1 先用折扣码兜。
