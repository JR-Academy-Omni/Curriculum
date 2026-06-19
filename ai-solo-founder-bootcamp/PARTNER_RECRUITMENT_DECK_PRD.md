---
title: 合作方招募 Pitch Deck PRD（AI 一人创业营）
status: build
owner: @lightman
priority: high
purpose: 规范一份可复用的 B2B 合作方招募 deck —— 用于拉机构（极客公园 / 36氪 / 混沌 / 创业社区 / 行业协会 / AI 自媒体）一起共推 OPC 一人创业营，回答"我们机构为什么要跟匠人一起推、能拿到什么、怎么落地、红线是什么"。
---

# 合作方招募 Pitch Deck · PRD

> 这是 **PRD（需求文档），不是 deck 本身**。本文逐页规定 deck 必须包含什么，后续实现 pass（人或 agent）照此构建 HTML deck。
>
> **位置**（建议）：`curriculum/ai-solo-founder-bootcamp/public/partnerships/partner-recruitment/`，结构对齐已上线的 `mvc-proposal/`：`index.html`（0s redirect 到 `01.html`）+ `01.html`..`NN.html` + `styles.css`。横版 16:9 multi-page，每页独立 URL，可单页 print PDF。
>
> **数据真相源**：本课所有事实必须可追溯到 `PRD.md` / `FUNNEL_PLAN.md` / `PERSONAS.md` / `public/promo/partnership-*.md`。任何未确认的数字、logo、案例、返佣比例、会员数一律用 `[商务确认]` / `[合作方填]` 占位，**不得编造**。

---

## 1 · 问题陈述：为什么需要一份专门的合作方招募 deck

现在 `curriculum/ai-solo-founder-bootcamp/` 下已经有两份 deck，但它们**都不是给"另一家机构的 BD/决策人"看的**，所以不能复用：

| 现有物料 | 给谁看 | 它回答的问题 | 为什么不能拿来招募合作方 |
|---|---|---|---|
| `COURSE_INTRO_DECK_PRD.md`（`partnerships/course-intro/`） | **潜在学员**（35-45 澳洲华人专业人士，自己掏 $2.8k-6.8k） | "这门课是给我的吗 / 我能赚什么钱 / 为什么花 11 周" | 它整页讲"副业现金流 / 主业增收 / RDTI 退税"，是 **to-C 销售逻辑**。合作方 BD 不关心自己能不能赚副业，关心**他机构能拿什么、他会员会不会买账、合作怎么不翻车** |
| `mvc-proposal/`（10 page deck） | **一个具体合作方**（Melbourne Venture Club） | 针对 MVC 一家的定制提案 | 它写死了 MVC 的会员画像 / 场景，**不是模板**。每来一个新机构都重写一遍不可持续 |

**本 deck 的定位** = 介于两者之间的**可复用 B2B 招募模板**：

- 受众是**合作方机构的 partnership / BD 决策人**（不是学员，不是单一某家机构）。
- 全篇用 `[合作方名]` 占位，任意机构都能 5 分钟改名复用；机构特例（会员数 / logo / 场景）用占位符，BD 临场填。
- 核心任务：让一个 partnership 决策人在 **60 秒内**回答 4 个问题 ——
  1. **为什么是现在**（AI + OPC 窗口为什么值得我机构投精力）？
  2. **这门课是什么、受众是谁**（跟我会员对不对得上）？
  3. **我机构能拿到什么**（曝光 / 联名 / 返佣 / 会员专属价 / 嘉宾席）？
  4. **怎么落地、红线是什么**（合作形式菜单 + 我要做什么 + 不踩哪些雷）？

> ⚠️ **SoT 对账提醒**：本 deck 与 `PARTNERSHIP_PROGRAM_PLAN.md`（合作 tier 模型 + asset kit 总规划，由 parent orchestrator 正在写）属同一套合作体系。本 PRD 起草时该文件**尚不存在**，故 §2 的 tier 模型是从 `partnership-outreach-emails.md` 模板 3（方案 A/B/C）+ `partnership-mou-draft.md` **反推**得到。**`PARTNERSHIP_PROGRAM_PLAN.md` 落地后，必须以它为准回头对齐本 deck 的 tier 命名 / 权益清单 / 数字**，不得两套并存。

---

## 2 · 目标读者：合作方机构 BD / 决策人（按 tier 分）

读者画像统一特征：**不是学员**，是另一家机构里决定"要不要把品牌 / 渠道 / 会员借给匠人一起推这门课"的人。他们的共同顾虑 = 「这事对我机构有没有回报、会不会掉价、会不会被当渠道白嫖、会不会有合规 / 收入风险」。

下面 4 个 tier 来自 `partnership-outreach-emails.md` + `mou-draft` 的画像区分（商会/协会 vs founder community 的 variant 差异已在 MOU §1.3 写明）。**deck 不为每个 tier 单独出一版**，而是同一份 deck 在「合作能给你什么」「合作形式菜单」两页里用分栏/标签呈现 tier 差异。

| Tier | 例子（仅示意，不写死真实合作方名） | 他在乎什么 | 让他点头的关键 |
|---|---|---|---|
| **T1 · 媒体 / 内容平台** | 极客公园、36氪、AI 自媒体矩阵 | 内容素材（能不能产出他平台要的稿子/选题）、曝光对等、不掉调性 | 给他**独家内容切角**（澳洲 RDTI 实战 / 一人公司真实 case），可联名出稿；不是硬广，是他平台缺的优质内容 |
| **T2 · 创新教育社区** | 混沌学园、On Deck / Reforge 类社群、创业孵化营 | 给会员的差异化内容福利、跟自己课程不打架、师资可信 | 课程**填他的空白**（他没有澳洲本地化 + 一人公司落地 + Grant 实战），联名 workshop / fireside 嘉宾互换 |
| **T3 · 行业协会 / 商会** | 华人专业协会、CPA/律师/地产商会、同乡商会 | 会员实际福利、NFP 合规（返佣怎么入账）、专业背书可靠 | 会员**专属折扣 + 协会运营经费**（NFP 走赞助路径）、持牌 Faculty（CPA/Grant consultant）背书、会长体验权益 |
| **T4 · KOL / Founder community** | AI / 创业 KOL、Venture Club、founder 社群 | 给社群成员的真实价值、自己的圈子调性、networking 资源 | **Founder Network Access**（Demo Day 晚宴席位 + 校友 warm intro + VC fireside 旁听），不给 1:1 Office Hour —— 创业的人喜欢跟创业的人聊（MOU §1.3 Variant B 原话） |

> 🚩 写 deck 时务必区分 T3 vs T4 的权益话术：**商会/协会 → 1:1 Office Hour + 折扣 + 经费**；**founder community → Network Access 不给讲师 1:1**。这是 MOU 已锁的红线，deck 的「合作能给你什么」页要让两类读者都各自看到自己那一栏。

---

## 3 · 目标 / Non-goals

### ✅ 目标
1. 任一 tier 的 BD 决策人 **60 秒**能回答 §1 的 4 个问题。
2. **以合作方为主语**通篇讲"[合作方名] 能拿到什么"，而非"匠人有多牛"（呼应 outreach 邮件铁律：主语从"我们"改成"[协会名]"）。
3. 一份模板复用到 4 个 tier —— 用占位符 + 分栏，不为每家重写。
4. 把**合作形式做成菜单**（轻量 / 深度 / 长期），让读者选"哪一档"而不是问"怎么合作"。
5. 所有合作数字（返佣 / 折扣 / 席位 / 嘉宾）跟 MOU 草稿一字对齐，未定的标 `[商务确认]`。

### ❌ Non-goals
1. ❌ 不卖课给读者本人（读者是 BD，不是学员）—— 课程 only 占 1 页 30 秒版，不展开 11 周 syllabus。
2. ❌ 不做单一机构定制（那是 `mvc-proposal/` 的活）—— 本 deck 是可复用模板。
3. ❌ 不承诺金钱 / 收入 / 录取 / 退税金额（CLAUDE.md + MOU §3 红线）。
4. ❌ 不签独家、不接 sponsor fee、workshop 不变硬广（≤15% 课程介绍）。
5. ❌ 不编造合作方 logo / 会员数 / 过往合作案例 —— 全部占位。
6. ❌ 不放学员视角的"副业现金流 / 主业增收"叙事（那是 course-intro deck 的 framing，混进来会跑题）。

---

## 4 · Deck 叙事主线（pain → value → how → proof → ask，**给合作方**的版本）

注意这条链跟 course-intro deck **完全不同**：course-intro 是「学员的 pain → 学员的 outcome」；本 deck 是「**合作方机构**的 pain/机会 → **合作方**的 value → 怎么落地 → 信任证明 → 对合作方的 ask」。

```
① 钩子   "AI + 一人公司"是 2026 的内容/会员热点 —— 你的会员正在问，你手上缺这块优质内容/福利
② 课程   30 秒说清这是什么课 + 受众是谁（让 BD 判断跟自己会员对不对得上）
③ 受众   用 persona 数据证明"我们引来的不是泛流量，是跟你会员同一批高净值专业人士"
④ 价值   合作能给【合作方】什么：曝光 / 联名 / 返佣 / 会员专属价 / 联名 workshop / fireside 嘉宾席
⑤ 菜单   合作形式分 tier（轻量 / 深度 / 长期），让 BD 选档
⑥ 物料   我们交付什么（co-branded landing / 海报 / 折扣码 / attribution 追踪），降低他的工作量
⑦ 证明   成功长什么样（co-marketing 案例占位 + workshop 数据模板）
⑧ 边界   红线与边界（不承诺金钱/录取、不独家、NFP 处理）—— 主动亮红线反而建立信任
⑨ ASK    下一步：具体动作 + 时间（15min 视频 / 收 1 页纸 / 排一场 workshop）
```

---

## 5 · 逐页 spec（建议 12 页）

> 每页给：**目的 / 核心信息 / 必含要素 / 数据来源（或占位）**。页数 ~10-14 区间，本 PRD 定 **12 页**（对齐 mvc-proposal 的 10-12 页体量，多 2 页因为本 deck 多了"合作形式菜单"和"物料交付"两块）。

### Page 01 · COVER · 一句话说清"为什么找你"
- **目的**：3 秒让 BD 知道这是一份"邀你共推一门课"的合作提案，不是卖课广告。
- **核心信息**：合作邀约 + 课程一句话定位 + 给谁推。
- **必含要素**：
  - 大标题：`和 [合作方名] 一起，把"AI 一人公司"推给对的人` （主语是合作方）
  - 副标：`AI 一人创业营 · 11 周澳洲华人 OPC 实战 · 三城线下 cohort`（来源 PRD §2.1 / FUNNEL §0）
  - 角标：`机构合作提案 · [商务确认 日期] · 匠人学院 Jiangren Academy`
  - 匠人 logo（取 `jr-academy-brand/assets/logo/logo-zh-full.svg`，深色封面用 `logo-zh-white.png`）+ `[合作方 logo 占位]`
- **数据来源**：课程定位 = PRD §2.1；不放价格/syllabus 抢焦点。

### Page 02 · 为什么是现在 · AI + OPC 的窗口
- **目的**：给 BD 一个"这个话题正热、我会员正在问、我手上缺这块"的紧迫感。
- **核心信息**：技术拐点 + 焦虑供给 + 澳洲独家定位三件事同时成立（PRD §1.2）。
- **必含要素**：
  - 3 个并列要点（直接抄 PRD §1.2 的三件事，去掉学员视角）：
    1. 技术拐点：Cursor / Claude Code / Lovable 让一个人做出过去一个团队的产品（PRD §1.2.1，可引 Pieter Levels / Marc Lou / Sam Altman "一人独角兽"判断 —— 标注为公开行业观点）
    2. 受众焦虑：澳洲拿 150-250k 的中产专业人士天花板焦虑（PRD §1.2.2）
    3. 澳洲独家：用中文教澳洲华人 OPC + Grant + 三城线下 = 全球独一份（PRD §1.2.3 / §2.1）
  - 一句给 BD 的话：`你的会员里有相当一批正在问"AI 时代我要不要自己干" —— 这正是这门课能帮你回答的`（措辞软，不夸"全球最大/最好"，outreach 铁律）
- **数据来源**：PRD §1.2 / §2.1。indie hacker 名字标"公开案例"，不编 MRR 数字。

### Page 03 · 这是什么课（30 秒版）
- **目的**：让 BD 30 秒看懂课程，判断跟自己会员对不对得上 —— 不展开 syllabus。
- **核心信息**：一句话定位 + 11 周做什么 + 毕业拿什么。
- **必含要素**：
  - 一句话：`用中文教澳洲华人专业人士用 AI 做一人公司：选品 → MVP → 收第一笔钱 → 全渠道营销 → 澳洲会计/Grant → Demo Day`（FUNNEL §1 核心承诺）
  - 4 phase 极简卡（W0-W3 Build & Sell / W4-W6 Marketing / W7-W9 Australia Ops / W10-W11 Scale & Demo），每卡一行字，不列 49 节课。
  - 毕业 6 项硬指标 compact 呈现：$1+ 真实付费 / 内容产出 / ABN 注册 / Grant 提交 / 产品 URL Live / Demo Day 出席（PRD §4.2，FUNNEL §1）。
  - 关键属性条：`三城线下（墨/悉/布）· 申请制 · 首期 50 人 · 不录播`（PRD §7.5 / §3.3）
- **数据来源**：PRD §4.2/§5/§7.5、FUNNEL §0/§1。
- **⚠️ 红线**：6 项指标里 Grant 写"提交申请"，**不写"拿到退税"**；不写"包做出赚钱产品"。

### Page 04 · 受众画像 · 证明我们引来的是精准流量
- **目的**：BD 最关心"你引来的人是不是我会员那种人" —— 用 persona 数据证明流量精准、不是泛人群。
- **核心信息**：3 类目标受众 + 客单价区间 + 明确排除谁（排除名单恰恰证明筛选严）。
- **必含要素**：
  - Persona A/B/C 三栏（来自 PERSONAS §1）：A 焦虑型 senior 程序员 45% / B 高薪 PM·咨询·Designer 35% / C 副业冲动 professional 20%；每栏一句画像 + 决策周期（A 4-8 周 / B 3-6 周 / C 2-4 周）。
  - 价格带：`首期 AUD $2,800 / $3,800 / $6,800 三档`（FUNNEL §3），证明高净值 = 跟协会高端会员同温层。
  - 排除谁（PERSONAS §4）：没积蓄应届 / 纯打工躺平 / 想割韭菜 / 想融 VC / 不在澳洲 —— 一行带过，证明"我们不引垃圾流量进你社群"。
  - 给 BD 的话：`如果你的会员是 35-50 岁、有职业积累、想用 AI 做点自己的事的澳洲华人专业人士 —— 我们引来的就是同一批人`
- **数据来源**：PERSONAS §1/§2/§4，FUNNEL §3。
- **⚠️ 占位/诚实标注**：PERSONAS GT≈0.30 是 v0 推测版。deck **不引用 persona 的"痛点原话/平台 Top5"等推测字段**（GT<0.5 不可当文案）；只用「占比 / 画像一句话 / 决策周期 / 排除名单」这些课程方定义的结构性事实。占比旁标 `（PRD 目标分配，首期后用真实录取数据更新）`。

### Page 05 · 合作能给你什么（核心价值页 · 按 tier 分栏）
- **目的**：这是 deck 的心脏 —— 直接列出**[合作方名] 能拿到的回报**，按 tier 让不同读者各看各的那栏。
- **核心信息**：曝光 / 联名 / 返佣 / 会员专属价 / 联名 workshop / fireside 嘉宾席六类价值，标清哪类 tier 适用。
- **必含要素**（每条对齐 MOU / outreach 方案 A-C，数字给区间 + `[商务确认]`）：
  1. **曝光 · 对等品牌**：协会 logo 出现在 workshop / 课程材料 / 社媒物料；匠人 logo + "合作伙伴"出现在合作方 Newsletter/官网（MOU §2.3）。**T1 媒体**：可联名出稿（独家内容切角）。
  2. **联名 · 共创内容/活动**：联名 workshop（匠人出讲师不收费）、联名 fireside、联名 lead magnet（MOU §1.1，outreach 方案 A）。
  3. **返佣 · 经费回流**：会员成交返 `[10-15% · 商务确认]` ≈ `[$480-720/人 · 按 Standard 价]`；一个 18 人 cohort ≈ `[$5,400-8,640 · 商务确认]`（outreach 方案 B）。**T3 NFP**：转"协会运营经费赞助"路径（MOU §1.2 NFP 处理）。
  4. **会员专属价**：折扣码 `[ORG-CODE]-300`，会员省 `[$300 · 商务确认]`（MOU §1.2）。折扣 ≤ $500 红线（MOU checklist）。
  5. **联名 workshop**：1 场 60-90min 线下/线上，匠人出讲师 + 全套物料 + 录像 recap（MOU §1.1）。
  6. **嘉宾席 / Network Access**：
     - **T3 商会/协会**：会长 4×30min 1:1 Office Hour + Demo Day 评审席（MOU §1.3 Variant A / §1.4）。
     - **T4 founder community**：Demo Day 晚宴 `[2-3]` 席 + 每季 `[3-5]` 个校友 warm intro + VC fireside 旁听 + 主理人嘉宾席（MOU §1.3 Variant B）—— **不给 1:1 Office Hour**。
- **数据来源**：MOU §1.1-§1.4 / §2.3、outreach 模板 3 方案 A/B/C。
- **⚠️ 红线**：返佣 / 折扣 / 席位**全部数字标 `[商务确认]`**，不写死；NFP 一定提"赞助路径"避免合规问题。

### Page 06 · 合作形式菜单（轻量 / 深度 / 长期 · 三档）
- **目的**：把合作做成"选 A/B/C"而不是"怎么合作" —— 降低 BD 的决策成本。
- **核心信息**：三档合作方案，复刻 outreach 模板 3 的 A/B/C，引导主推方案 B。
- **必含要素**（直接对齐 outreach 方案 A/B/C）：
  - **方案 A · 轻量**：单次联名 workshop（匠人出讲师不收费 + 协会出场地/邀会员 + 现场 lead magnet 二维码 + 品牌共现）。适合"先看效果"。
  - **方案 B · 深度**（主推 · 信息密度最大）：A 全部 + 会员专属折扣码 + 返佣 `[商务确认]` + attribution report。适合"持续给会员福利 + 拿运营经费"。
  - **方案 C · 长期绑定**：B 全部 + Demo Day 评审席 + 嘉宾席 + （T3）会长 Office Hour / （T4）Founder Network Access。适合"把这门课当长期会员福利推"。
  - 一张三列对照表，方案 B 视觉高亮（中间档 + 黑边硬阴影更重）。
- **数据来源**：outreach 模板 3、MOU §1。
- **⚠️ 红线**：每档不留 "TBD" 给读者看；数字未定的在 deck 里用 `[商务确认]`，BD 临场或 MOU 阶段填实数（outreach 注意事项："留给协会的应该是选哪套，不是数字是啥"）。

### Page 07 · 我们提供的物料（你几乎零额外工作量）
- **目的**：打消 BD"合作是不是要我团队干一堆活"的顾虑 —— 强调匠人交付，合作方只需分发。
- **核心信息**：co-branded landing / 海报 / 折扣码 / attribution 追踪 / workshop 物料全套，匠人做好。
- **必含要素**：
  - co-branded landing page（双 logo，会员专属入口）`[实现待定]`
  - 海报中英文版（取 `xhs-poster` 风格，双品牌）
  - 折扣码 + 后台 attribution 全链路追踪（报名→付款→录取），每月 1 号发 attribution report（MOU §1.2）
  - workshop 全套：slide deck / 海报 / 3 个 lead magnet 二维码 / 现场电子签到 / 录像 recap 7 天内交付（MOU §1.1）
  - 3 个现成 lead magnet（合作方可直接分享给会员，0 生产成本）：OPC 适配自评 / 30 分钟 ship 一个 AI 产品 / RDTI 申请 Prompt 模板（FUNNEL §4、outreach 模板 2 的真实链接）
  - 给 BD 的话：`你只负责把信息推给会员，内容/物料/追踪/结算我们全包`
- **数据来源**：MOU §1.1/§1.2、FUNNEL §4、outreach 模板 2（3 个 lead magnet 链接已上线）。

### Page 08 · 受众与渠道适配（这门课为什么适合你的会员触达方式）
- **目的**：用 PERSONAS 的渠道结论让 BD 看到"我的渠道（私域/线下/专业社群）正好是这门课最高 ROI 的触达方式"。
- **核心信息**：高客单课靠信任链路（私域 + 线下 + 同行推荐），不靠公域流量 —— 机构渠道恰好是命门。
- **必含要素**：
  - 一句结论：`这门课最高 ROI 的获客不是投放，是私域口碑 + 线下 networking + 同行推荐`（PERSONAS §3 结论 1/3）。
  - 因此机构（尤其 T3 协会的本地华人专业社群 / T4 founder 社群）的渠道**正是这门课最需要的**。
  - 标一句对 T1 媒体的差异化：媒体合作价值在**内容素材 + 品牌曝光**（不是直接转化），所以联名出稿 / 独家切角是给 T1 的主路径。
- **数据来源**：PERSONAS §3（渠道 ROI 加权表 + 结论）。
- **⚠️**：PERSONAS §3 标了"全部基于 v0 推测"，deck 只引用其**方向性结论**（私域>公域），不引用具体平台 ROI 数字。页脚标 `（渠道判断基于 v0 画像，首期数据回收后校准）`。

### Page 09 · 成功长什么样（co-marketing 案例 + workshop 数据模板）
- **目的**：给 BD"跟匠人合作能产出什么结果"的画面 —— 首期前无真实案例，用结构化模板 + 占位。
- **核心信息**：一场联名 workshop 的数据样板 + 合作复盘节奏。
- **必含要素**：
  - **workshop 数据模板**（结构来自 outreach 模板 5 的 recap）：到场人数 / 进群率 / 3 个 lead magnet 完成数 / 48h 申请提交数 / 折扣码 attribution —— **全部留 `[合作方填]` / `[首期后填实数]`**。
  - **co-marketing 案例位**：`[首期 cohort 跑完后填入真实合作案例 + Demo Day case study]`。当前明确写 `首期为 case study 定位，正在累积真实数据`（FUNNEL §3 二期升价逻辑 / outreach 模板 3 注："首期 case study 价正是因为还在累积"）。
  - 合作复盘节奏：每月 attribution report + Demo Day 后 30 天复盘决定续约（MOU §6）。
- **数据来源**：outreach 模板 5、MOU §6、FUNNEL §3。
- **⚠️ 红线**：**绝不编造**过往合作机构名 / workshop 真实数字 / 学员成果。本课 cohortStatus=PLANNING，0 真实数据（PERSONAS §0）—— 全占位，诚实标"首期前"。

### Page 10 · 红线与边界（主动亮红线 = 建立信任）
- **目的**：主动说清"我们不做什么"，让 BD 知道这是干净的合作、不会被白嫖也不会踩雷。
- **核心信息**：双方红线（MOU §3）+ 数据隐私（MOU §4）。
- **必含要素**（直接抄 MOU §3/§4）：
  - **匠人不做**：不承诺金钱/收入结果、不承诺录取、不收合作方 sponsor fee、workshop 不变硬广（课程介绍 ≤15%）。
  - **请合作方也不做**：不索取 sponsor/入会/审核费、不要求独家、不要求保证录取 N 人、不用"匠人承诺 X 收入/退税"话术宣传。
  - **数据隐私**：attribution report 不含会员个人信息；workshop 进群会员信息归匠人用于 nurture，遵守 Privacy Act 1988。
  - **NFP 特别处理**：返佣可转协会运营经费赞助路径（MOU §1.2）。
- **数据来源**：MOU §3 / §4 / §1.2、CLAUDE.md 红线。
- **设计**：这页用红 `#ff5757` 编号 / 强调，neo-brutalism 黑框，传达"认真严肃但坦诚"。

### Page 11 · 我们是谁（信任 anchor · compact）
- **目的**：给犹豫的 BD 最后一块信任 —— 匠人是谁、Faculty 可不可信。
- **核心信息**：匠人平台体量 + 实名可验证 Faculty + 已有合作机构（占位）。
- **必含要素**：
  - 匠人一句话：`匠人学院 jiangren.com.au · 全球华人学习 AI 第一站 · [校友/月活数据 · 商务确认]`（**不编数字**，占位）。
  - Faculty 可信度：实名 + LinkedIn 可一一核实（PERSONAS 提到 content.ts 有 6 名实名 Faculty：CPA / Grant consultant / VC / senior eng 等）—— deck 用类别 + `[Faculty 实名占位，LinkedIn 可验证]`，不编姓名。
  - 已合作/支持机构 logo 墙：`[合作方 logo 占位 · 商务确认后填真实已合作机构]`（MOU 提到 content.ts SUPPORTERS 有混沌澳洲/UMVC/AFN，但**需商务确认是否可对外用 logo**，否则留占位）。
- **数据来源**：FUNNEL §3 / PERSONAS §0（6 实名 Faculty）、content.ts SUPPORTERS（需商务确认）。
- **⚠️ 红线**：校友数 / 月活 / 已合作机构 logo **全部 `[商务确认]`**，未确认不上墙。

### Page 12 · 下一步 ASK（具体动作 + 时间）
- **目的**：从"有兴趣"推到"约下一步" —— 给一个低门槛、明确的 yes/no 动作。
- **核心信息**：3 个递进选项，主推"15 分钟视频聊"。
- **必含要素**：
  - 3 步合作路径：① 15min 视频聊（了解你会员 + 选合作档）→ ② 收一份课程一页纸 + 合作方案 → ③ 排一场联名 workshop / 签 MOU（MOU 是意向书，正式签字走 Mason + 法务）。
  - 主 CTA：`约 15 分钟视频 —— 看看 [合作方名] 的会员适不适合`（结尾问 yes/no，不 open-ended，outreach 铁律）。
  - 联系方式：`[BD 姓名 / 职位 / 邮箱 / LinkedIn · 占位]`，签名带 LinkedIn（outreach 铁律 5）。
  - 课程一页纸链接：`https://jiangren.com.au/curriculum/ai-solo-founder-bootcamp/curriculum.html`（已上线，outreach 模板 1 用的链接）。
- **数据来源**：outreach 模板 1/3、MOU 签字流程（§"BD 不能自己签"）。
- **⚠️**：不用"今晚截止 / 名额快没了"高压话术（outreach 禁止项 + course-intro Non-goal）。

---

## 6 · 设计规范（jr-academy-brand v5 neo-brutalism）

> 🚨 **必须对照 `jr-academy-brand/DESIGN.md` + Brand Board + `tokens/tokens.css`（`--jr-*`），不凭记忆配色**。注意：现有 `mvc-proposal/styles.css` 用的是**旧 v4 navy/orange 调色板（#10162f / #FF914D / #FFDE59 / #0a0e1f）**。本 deck **改用 v5**，结构沿用 mvc-proposal（index redirect + NN.html + styles.css），但**视觉 token 全换 v5**。

- **结构语言**：3px 纯黑边 `#000`（`--jr-border`）+ **直角（border-radius:0）** + 偏移硬阴影 `6px 6px 0 #000`（`--jr-shadow-md`）；hover = 阴影归零 + 位移 3-4px。所有卡片 / 按钮 / 方案档位都要。
- **底色**：暖底 `#fff1e7`（`--jr-surface-canvas`）+ 纯白卡 `#fff`；深色区块用 `#1a1a2e` 或 CTA 深底 `#10162f`（`--jr-black`）。**不要冷白 `#FFFCF6`/`#FAFAFA`**。
- **CTA / 强调**：主 CTA = 深底 `#10162f` 或彩色底（红 `#ff5757` / 黄 `#FFDE59`）+ 黑边 + 硬阴影。红 `#ff5757` 做 CTA / 编号 / 强调 / 红线页。
- **字体**：标题 **Bricolage Grotesque**（`--jr-font-heading`）/ 正文 **DM Sans**（`--jr-font-sans`）/ 数据·标签·返佣百分比 **Space Mono**（`--jr-font-mono`）/ 中文 **思源黑体（Noto Sans SC）**。网页引 4 个 Google Fonts。
- **AI/学习** 用紫 `#CB6CE6`；**信息/链接** 用蓝 `#38B6FF`。
- **圆角**只给圆形元素（头像 / 状态点 / 胶囊标签 `999px`），其余一律直角。
- **Logo**：一律取 `jr-academy-brand/assets/logo/` —— header/封面 `logo-zh-full.svg`，深色 bg `logo-zh-white.png`，favicon/装饰 `jr-box.svg`。不拉伸/不加 shadow/不红底放红 logo。合作方 logo 用 `[合作方 logo 占位]`。
- **版式**：横版 16:9 multi-page，每页 100vh，独立 URL，可单页 print PDF。页脚放页码 + `机构合作提案 · 匠人学院`。tier 差异在 page 05/06 用分栏/标签呈现（如左右栏 or 三列卡）。
- **路径**：`public/partnerships/partner-recruitment/index.html`（`<meta refresh>` 0s → `01.html`，`noindex,nofollow`）+ `01.html`..`12.html` + `styles.css`。

---

## 7 · 红线（实现 deck 时一字不破）

来自 CLAUDE.md + MOU §3 + outreach 注意事项：

1. **不承诺金钱 / 收入** —— deck 任何页不出现"赚 X / 月入 / 保证收入"。Grant 只写"教你准备+提交 RDTI 申请"，**不写退税金额、不保证通过**（PERSONAS §0 标"RDTI 退税 $87k"是营销 hook、虚构，不能当承诺）。
2. **不承诺录取** —— 申请制，reserved seat 仍走 review，"优先审核 ≠ 保证录取"（MOU §1.3）。
3. **不签独家** —— 合作方要求独家 → 礼貌拒绝（outreach 失败信号）。
4. **workshop 不变硬广** —— 课程介绍占比 ≤15%（MOU §3）。
5. **所有数字落地前商务确认** —— 返佣 % / 折扣额 / 席位数 / 校友数 / 月活 / 嘉宾费全部 `[商务确认]`，deck 不写死。
6. **不编造合作方数据 / 案例 / logo** —— cohortStatus=PLANNING，0 真实 case；co-marketing 案例、已合作机构 logo、workshop 数字全部占位 `[合作方填]` / `[首期后填]`。示意性合作方名（极客公园/36氪/混沌）仅作 tier 举例，**不暗示已经合作**。
7. **不用代码生成 pptx / docx**（最高级铁律）—— deck = **HTML multi-page**，禁止 python-pptx / pptxgenjs / 任何 .pptx/.docx 产物。
8. **不引用 PERSONAS 的低可信字段** —— GT≈0.30，痛点原话/平台 Top5 是 AI 推测，deck 只用结构性事实（占比 / 决策周期 / 排除名单 / 渠道方向结论），并标注首期后校准。
9. **不放学员视角 framing** —— 不抄 course-intro 的"副业现金流/主业增收"，本 deck 主语永远是合作方机构。

---

## 8 · Non-goals / 未来迭代

- 本 deck 是**通用模板**；针对单一大客户的深度定制（如 MVC）仍走 `mvc-proposal/` 那种一对一 deck。
- **首期 cohort 跑完后**：用真实 Demo Day case study + 真实 workshop 数据替换 page 09 的全部占位；用真实录取分布更新 page 04 的 persona 占比。
- **`PARTNERSHIP_PROGRAM_PLAN.md` 落地后**：回头对齐 §2 tier 命名 / 权益 / 数字，确保 deck 与 program plan 是同一套真相（不并存两套 tier 模型）。
- **PERSONAS GT 升到 0.5+ 后**：page 04/08 可加入真实痛点原话 / 渠道数据。
- 暂不做：英文版 deck（首期纯中文站澳洲华人）、单 tier 拆分版（先用一份模板 + 分栏验证）。

---

## 9 · 验收标准

实现的 deck 上线前，逐条 check：

1. **60 秒测试**：找一个不懂这门课的人（扮演合作方 BD）翻完 deck 60 秒，能复述 §1 的 4 个问题答案（为什么现在 / 是什么课谁的受众 / 我能拿什么 / 怎么落地+红线）。3/4 答对 → pass。
2. **模板可复用**：通篇 `[合作方名]` / `[合作方 logo]` 占位，换一个机构 5 分钟改完，无单一机构写死内容。
3. **tier 区分清晰**：page 05/06 让 T3 商会读者和 T4 founder 读者各自看到自己那栏（商会=Office Hour+折扣+经费；founder=Network Access 不给 1:1）。
4. **数字全占位**：grep deck 无写死的返佣 % / 折扣额 / 席位数 / 校友数 / 月活 —— 全部 `[商务确认]` 或区间+占位。
5. **红线零违反**：无"赚钱/收入/保录取/保退税/独家"字样；Grant 措辞=提交申请不保通过。
6. **无虚构数据**：page 09 co-marketing 案例、page 11 已合作 logo、workshop 数字全占位；示意合作方名仅作 tier 举例不暗示已合作。
7. **brand v5 合规**：3px 黑边 + 直角 + 6px 硬阴影 + 暖底 `#fff1e7` + Bricolage/DM Sans/Space Mono/思源黑体 + logo 取自 `jr-academy-brand/assets/logo/`；无旧 v4 值（#FF914D/#0a0e1f/柔阴影/圆角胶囊）。
8. **格式合规**：HTML multi-page（index redirect + 01-12.html + styles.css），无任何 .pptx/.docx 产物。
9. **跟两份现有 deck 不重复**：本 deck 无"副业/主业现金流"学员 framing（vs course-intro），无单一机构写死内容（vs mvc-proposal）。
