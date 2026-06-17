# AI 一人创业营 付费漏斗规划 FUNNEL_PLAN.md

> 课程：AI 一人创业营（OPC / 一人公司 · 11 周三城线下 cohort · 澳洲华人专业人士专属）
> 由 `/course-funnel-architect init` 生成 · 2026-06-16
> 单一真相文档 — 任何漏斗调整必须改这里
> 上游依赖：[./PERSONAS.md](./PERSONAS.md)（GT ≈ 0.30 ⚠️ v0 启动版）+ public/outline.json + program-course/ai-solo-founder-bootcamp/content.ts

---

## 0. Meta

| Field | Value | 来源 |
|-------|-------|------|
| Course Slug | ai-solo-founder-bootcamp | — |
| Prod Training ID | **无**（cohortStatus=PLANNING，未在 prod 创建）| outline.json `program.cohortStatus` |
| 课程类型 | **Type 3 · Bootcamp 创业孵化**（决策周期最长、客单价最高）| course-promotion-architect COURSE_TYPE_PLAYBOOKS |
| 业务模式 | **B · 引流课 + 主课三档**（不是四档全做 — 见 §1 决策）| 本次 init |
| 语言 / 币种 | **纯中文站，只收 AUD**（澳洲本地华人，无多币种）| content.ts |
| 主课时长 | 11 周（W0 Pre-work + W1-W11 三城线下 hub-and-spoke）| outline.json `timeLength` |
| 主课规模 | 59 lessons / 92h / 35 直播 / 8 Lab · 4 phase × 2-3 周 | outline.json |
| 录取机制 | 申请制 + LinkedIn 必填（首期无视频面试，二期起加面试）| outline.json highlights |
| 首期招生目标 | 墨 10-12 / 悉 6-8 / 布 3-5 = **20 人 ±5**（PRD 保守版；销售页另写 40-60，两数不一致 ⚠️）| PERSONAS §0 |
| 上次更新 | 2026-06-16 | — |
| 状态 | ⚠️ **v0 规划版** — 定价已锁，引流课与 7 天过渡待子 skill 落地；PERSONAS GT < 0.5，文案落地前必须补邻近 cohort GT | — |

---

## 1. 漏斗定位

- **主课方向**：用中文教澳洲华人专业人士用 AI 做一人公司（OPC）—— 选品 → MVP → 收第一笔钱 → 全渠道营销 → 澳洲会计 / Grant → Demo Day
- **主课时长**：11 周三城线下，不录播
- **目标用户**（来自 PERSONAS §1，⚠️ GT 0.30）：
  - **Persona A · 焦虑型 senior 程序员（45%）** — 35-45 岁大厂 senior，会 Cursor 但卡在「从 0 到第一笔收入」，有 6-12 个月储蓄、决策周期 **4-8 周**
  - **Persona B · 高薪 PM / 咨询 / Designer（35%）** — 40-50 岁，想绕过工程团队自己 ship，缺技术信心，决策周期 **3-6 周**
  - **Persona C · 副业冲动 professional（20%）** — 律师 / 会计 / 医生，不辞职、最看重澳洲税务 + Grant 合规，决策周期 **2-4 周**
  - ❌ 排除（PERSONAS §4）：没积蓄的应届 / 纯打工躺平 / 想割韭菜 / 想融 VC / 不在澳洲的人
- **业务模式**：**B · 引流课 + 主课三档**
- **核心承诺**：11 周内做出一个能跑、能卖、能合规的 AI 一人公司 —— 第一笔真实付费 + ABN 注册 + 至少 1 个澳洲 Grant 提交 + 产品 URL Live + Demo Day 出席（毕业 6 项硬指标）

### 🚩 业务模式为什么选 B 不选 A（完整四档）

Type 3 创业孵化课的买家盯着「真有人跟着做出来了吗」，决策周期 2-8 周、靠信任链路而不是流量。一个 ¥99 引流课不会让一个有 6-12 个月储蓄、纠结 4-8 周的 senior 工程师当晚下单买 $3,800 的课 —— 它的作用是**筛选 + 资格判断**，不是冲动转化。所以这里的引流课定位跟求职课 / 在职提效课完全不同：

- 不做「四档全漏斗」(模式 A) 那种期望「¥99 → 当晚转化」的设计 —— 创业课买家不吃这套
- 引流课 = **筛子 + 信任种子**：让人花一个晚上自己跑一遍「OPC 适不适合我」，跑完两种结果都对我们有利 —— 适合的人主动来申请、不适合的人提前自我劝退（省掉申请 / 面试 / 退课的成本）

---

## 2. 阶段状态

- [x] 主课三档定型（main-course-tier-design）— **本次 init 已锁**（见 §3，对齐 content.ts + outline.json）
- [ ] 引流课方案（intro-course-design）— 骨架已定（§4），待 `/intro-course-design` 落地 deliverable
- [ ] 7 天过渡序列（funnel-handoff-design）— 骨架已定（§5），待 `/funnel-handoff-design` 落地话术
- [ ] 上线后审计（curriculum-positioning-audit）— 首期开课后跑

---

## 3. 主课三档（已锁 · 对齐 content.ts PRICING + outline.json + FAQ）

> 🚨 **创业营三档不按「内容多少」分级，按「陪你把 MVP / 业务原型推到什么程度 + 谁陪你推」分级**。三档学的是同一套 59 节课、同一批 Faculty、同一个三城 cohort，差的是**结果保障的深度**和**1v1 资源密度**。

> 💰 **币种**：本课纯 AUD（澳洲本地华人，PERSONAS §0「无多币种，只收 AUD」）。故三档**只写 AUD**，不套 funnel-architect 默认的 CNY/AUD 双币模板 —— 那个模板是给中澳双轨课用的，本课是纯澳洲课。

### 真实定价锚点（content.ts PRICING + outline.json program）

- outline.json `program.tuition: 4800` / `promoTuition: 3800`
- content.ts PRICING 三段式：预售 $2,400 / 首期早鸟 $2,800 / 二期 $3,800（PERSONAS §0 记录）
- outline.json FAQ「三档定价里 Premium $6,800 含 1:1 mentorship」+ features「首期 case study 价 $3.8k-$6.8k 三档（早鸟 / 标准 / 含 1:1 mentorship）」
- FAQ「第二期起 Standard $5,800、Premium $9,800（含 1:1 mentorship）」

→ **结论**：首期是 case study 试跑期，三档定价 **$2,800 / $3,800 / $6,800（AUD）**，落在已公开的 $3.8k-$6.8k 区间内，下沿用早鸟 $2,800 接住预售意向。二期按 FAQ 升到 $5,800 / $9,800。三档命名按「做出 MVP / 业务原型」分级，不按内容量。

### 首期三档（case study cohort · AUD）

| 档位 | 定价 (AUD) | 一句话承诺（按「做出什么」分级）| 关键差异点 |
|---|---|---|---|
| **自学陪练版**（早鸟 / Self-paced+Cohort）| **$2,800** | 「11 周跟着三城 cohort 走完一遍，自己 ship 出一个 Live 的 MVP + 跑通收第一笔钱的全流程」| 全部 59 节课 + 三城线下 + 1:8 本地 Tutor 陪跑 + 校友群。**靠 cohort 同侪 + Tutor 托底**，不含主讲老师 1v1。早鸟限量，接住预售 $2,400 意向用户 |
| **标准版**（Standard）| **$3,800** | 「11 周做出一个**能对外展示的业务原型**：MVP Live + ABN 注册 + 至少 1 个 Grant 提交 + Demo Day 现场展示」| 自学陪练版全部 + 嘉宾（CPA / Grant consultant / VC）作业级 review + W11 Demo Day 主舞台名额 + 互为客户日晚宴自动获邀（完成 6 项硬指标）。**主推档** —— 对齐毕业 6 项硬指标 |
| **陪跑版**（Premium · 含 1:1）| **$6,800** | 「11 周做出业务原型 + 主讲老师 / 嘉宾团队 1v1 把你卡点逐个清掉，加速到能对外拿单 / 拿 Grant 的状态」| 标准版全部 + 每周 1 次 30min 1:1 教练（共 12 次，技术 / 产品 / 营销 / Grant 任意主题）+ Grant 申请书 1v1 过稿 + Demo Day pitch 1v1 打磨。**对「时间紧 + 决策密度高 + 想加速」的人**（FAQ 原话）；主要靠自学的人价值不大 |

> **二期升价**（FAQ 已公开，写进合同前需 Beta / Lightman 确认）：Standard $5,800 / Premium $9,800。首期低开是 case study 价（要 18-25 个真实毕业 case 喂二期招生，Reforge / On Deck 标准玩法）。

### 三档承诺红线（CLAUDE.md 顶级铁律 + funnel-architect 承诺红线）

- ❌ 三档**都不承诺**「月入 X / 包做出能赚钱的产品 / 保证拿到 Grant 退税 / 保证融到资」—— 禁用「副业」一词
- ✅ 只承诺**过程结果**：MVP Live（产品 URL）/ 跑通收第一笔钱的流程（$1+ 真实付费，毕业指标 #1）/ ABN 注册完成 / 提交 Grant 申请（提交 ≠ 拿到）/ Demo Day 出席
- ⚠️ Grant 措辞特别注意：嘉宾是持牌会计师 / Grant consultant，课程承诺是「教你怎么准备 + 提交 RDTI 申请」，**不承诺退税金额 / 一定通过**。PERSONAS §0 已标「会计师朋友 RDTI 退税 $87k」是营销 hook、虚构叙事，不能当真实承诺

### 完课率 / 结果保障机制（按档差异）

- **自学陪练版 $2,800**：靠三城线下 1:8 Tutor + cohort 同侪压力 + W1 vs W11 公开数据看板（MRR / 流量 / 内容产出公开追踪）防掉队。退款：W1-W2 末满意承诺全额退（outline.json FAQ）
- **标准版 $3,800**：嘉宾作业级 review + 6 项毕业硬指标做强制 checkpoint（不达标不发证 + 不获邀晚宴）—— 把「上完课」和「做出东西」严格区分（outline.json FAQ）
- **陪跑版 $6,800**：12 次 1v1 是个性化卡点清除机制 —— 直接对「我做不出来 / 卡在合规 / 不会 pitch」三类 Persona 障碍下手

---

## 4. 引流课（骨架已定 · 待 /intro-course-design 落地）

> **形态 1 · 单引流课**（PERSONAS 画像虽分 ABC 三类，但「OPC 适不适合我下场」是三类共同的第一道决策关口 → 单引流课足够，不需要多引流课）。

- **主题**：**《一个晚上判断：AI 一人公司这条路，你下不下得了场》** — OPC 适配自评 + 30 分钟 ship 一个最小产品的真实体验
- **定价**：⚠️ **本课引流课不走 ¥99 / $29 默认价**。理由：纯 AUD、目标人群是有 6-12 个月储蓄的高薪专业人士，¥99 对他们不是决策门槛、反而拉低课程调性。建议 **$0 免费 lead magnet**（已有现成素材，见下）或象征性 **$29 AUD**。最终价待 `/intro-course-design` + Beta 拍板
- **复用现成 lead magnet**（outline.json `curriculumPages` 已列 3 个，0 新内容生产）：
  - `lead-magnets/opc-assessment.html` — OPC 适配评估表（对应主课 L01 的「OPC 适配评估表 5 维度自评」）
  - `lead-magnets/30min-ship.html` — 30 分钟 ship 第一个产品（对应主课 L06-L10 工具地图 + Lab）
  - `lead-magnets/rdti-prompt-template.html` — RDTI 退税 prompt 模板（对应主课 L36，专打 Persona C）
- **Quick win deliverable**（学完当晚拿到）：① 一张自己填完的 OPC 适配评分表（5 维度 × 5 分，低于 18 分诚实劝退）② 一个 30 分钟内 ship 出来的最小 demo（不要求能卖）③ 一份「我这个职业积累 + AI 能做什么」的 idea 草稿
- **学完承诺**：不是「学会做产品」，是「判断清楚 OPC 这条路适不适合我现在下场」—— 跟主课 L01 心智课同源，引流课做的是**资格自筛**
- **在主课大纲中的对应位置**：Phase 1 L01（OPC 心智 + 适配自评）+ L06-L10（工具地图 + Vibe Coding Lab）的浓缩体验版
- **为什么不冲动转化**：Type 3 创业课买家不会因为上完免费课当晚掏 $3,800。引流课交付后进 7 天过渡（§5），靠真实校友案例 + Faculty 实名 + RDTI 算账，让人自己走完 4-8 周决策周期主动来申请

---

## 5. 过渡 7 天序列（骨架已定 · 待 /funnel-handoff-design 落地）

> 创业课的过渡比求职 / 在职课更长更慢 —— Persona A 决策周期 4-8 周，7 天序列只是「自评完 → 申请」的第一推力，不是临门一脚。靠服务 + 真实案例，不靠催单。

| Day | 内容 | 目的 | 形式 | 锚定 persona |
|-----|------|------|------|------|
| D0 | 引流课交付：OPC 自评表 + 30min ship 体验 + 入「AI 一人创业」私域群（不是大群广播，是定向） | 接住 + 进私域 | 群 + 邮件 | ABC 全员 |
| D1 | 「一个澳洲华人 senior 工程师怎么从 0 走到第一笔 $1,800」真实校友 / indie 案例长文（非营销 vlog 口气）| 让 A 看见同侪真做出来了 | 公众号 / 群内 | A |
| D2 | Faculty 实名名册 + LinkedIn 可一一核实（麦肯锡 / 微软 senior eng / 持牌 CPA / Grant consultant / VC）| 降信任门槛（A 的购买触发器 #2）| 群内 + 销售页链接 | A / B |
| D3 | 「不写代码的 PM / 律师怎么 ship 出产品」非技术学员案例 + coaching 70% / lecture 30% 说明 | 破 B 的「我会翻车」恐惧 | 视频号 / 群内 | B |
| D4 | RDTI 43.5% 退税怎么算 + 持牌 CPA 全程 review 说明（合规切角，别处学不到）| 给 C 财务理由（退税可 cover 学费 2-10 倍）| 公众号实战文 | C |
| D5 | 三档怎么选 + 申请制怎么走（LinkedIn 必填 + 24-48h 审核）+ 三城名额现状（墨 10-12 / 悉 6-8 / 布 3-5）| 让走完决策的人看清下一步动作 | 群内 + 1v1 答疑 | ABC |
| D6-D7 | 1v1 答疑（Beta / 课程主理人亲自，不是群发）：解决 A「我技术强凭什么花钱」/ B「会不会做出 demo 玩具」/ C「Grant 出错谁担责」三类异议 | 把异议逐个清掉，引到申请 | 私聊（✏️ 人，不 🤖）| ABC |

**红线**（funnel-handoff-design + CLAUDE.md）：
- ❌ 不群发课程链接 / 不假装「个人推荐」/ 不在群里刷屏（A 的黑名单 #4：微信群刷屏链接 + 课程顾问硬加）
- ❌ 不承诺「保 offer / 月入 X / 保证拿到 Grant」—— 本课是「下场做一人公司」不是「找工作」
- ✅ 只服务（真实案例 / Faculty 核实 / RDTI 算账 / 1v1 答疑），让人自己走完 4-8 周决策周期主动来申请
- ⚠️ 7 天序列结束**不等于放弃** —— 没申请的 lead 转长期私域培育，配合 PROMOTION_PLAN 的 T-60→D+90 长周期慢推

---

## 6. 审计记录

| 日期 | 审计人 | 主要发现 | 修复状态 |
|---|---|---|---|
| — | — | 首期开课后跑 `/curriculum-positioning-audit ai-solo-founder-bootcamp` | 待办 |

---

## 7. 决策日志

- 2026-06-16 v0 init：业务模式定 **B（引流 + 三档）**，不做四档全漏斗 —— 理由：Type 3 创业课买家决策周期 4-8 周、靠信任不靠冲动，¥99 引流课无法当晚转化 $3,800（`/course-funnel-architect`）
- 2026-06-16 三档锁定 **$2,800 / $3,800 / $6,800 AUD**，对齐 content.ts PRICING + outline.json FAQ「$3.8k-$6.8k 三档」+「Premium $6,800 含 1:1」；命名按「做出 MVP / 业务原型 / + 1v1 加速」分级，不按内容量
- 2026-06-16 引流课定 **形态 1 单引流课**，复用 outline.json 已有 3 个 lead-magnet HTML（0 新内容），定价**不走 ¥99 默认**（纯 AUD 高净值人群，建议免费 lead magnet 或 $29 AUD，待 Beta 拍板）
- 2026-06-16 ⚠️ 遗留：PERSONAS GT 0.30（< 0.5），三档承诺 / 引流课文案 / 7 天序列原话落地前必须补邻近 cohort（AI Engineer / OpenClaw 校友）真实访谈 + 销售顾问口播（见 PERSONAS §7 P0）

---

## 8. 调度子 skill 决策树

```
做引流课设计（落地 3 个 lead-magnet 的 quick win + 自评表）→ /intro-course-design ai-solo-founder-bootcamp
设计 7 天过渡序列（落地话术 + 私域群 SOP）           → /funnel-handoff-design ai-solo-founder-bootcamp
重审三档定价（二期升价决策）                          → /main-course-tier-design ai-solo-founder-bootcamp
审 funnel 翻车风险（首期开课后）                      → /curriculum-positioning-audit ai-solo-founder-bootcamp
做整套推广方案（消费本文件）                          → /course-promotion-architect init ai-solo-founder-bootcamp（见 PROMOTION_PLAN.md）
改销售页 hero / Faculty / FAQ                         → /course-custom-landing (Mode B) ai-solo-founder-bootcamp
```

---

## 9. 下游消费

本 FUNNEL_PLAN.md 是 `/course-promotion-architect` 的核心输入 —— 三档定价 + 引流课定位 + 7 天序列 → [PROMOTION_PLAN.md](./PROMOTION_PLAN.md)（Type 3 创业孵化剧本，T-60→D+90 长周期）。

下次更新触发：
1. PERSONAS GT 升到 0.5+（补完邻近 cohort 访谈）→ 重审 §4 引流课文案 + §5 7 天序列原话
2. 首期 commenceCourseDate 锁定（嘉宾铺设需 8 周）→ 更新 §0 Meta + §5 D5 名额倒计时
3. 首期 cohort 真实毕业 case 出来 → 用真实数字喂二期升价决策（§3 二期 $5,800 / $9,800）
