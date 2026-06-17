# AI Engineer Bootcamp 推广计划 PROMOTION_PLAN.md

> 目标用户画像见 ./PERSONAS.md（last updated 2026-06-16，🚧 AI 推断版 GT 0.15）
> 漏斗机制见 ./FUNNEL_PLAN.md
> 维护人：待定 | 最近更新：2026-06-16

## 0. Meta

| Field | Value |
|-------|-------|
| Slug | ai-engineer-bootcamp |
| **课程类型** | **Type 1 · Bootcamp 求职转型类**（最重火力）|
| 识别理由 | 12 周技术 + 12 周 P3 孵化、强结果导向（学会→就业闭环）、目标人群是 active 求职/转 AI 岗的开发者、Type 1 客单价区间 ¥2980-9800、program.cohortStatus = RECRUITING | 
| 推广周期 | **T-30 → D+30（8 周）** |
| Launch date | ⚠️ 待补（第五期开班日，硬上线？）|
| 报名目标 | ⚠️ 待补（三档分别多少？引流课目标？）|
| 历史基线 | ⚠️ 待补（前 4 期跑过哪些渠道、什么数据）|
| Status | spec（骨架已建，待用户确认 launch/target 后填 task 日期）|

> 🚧 **依赖警告**：渠道清单本应从 PERSONAS.md §3 反推，但 §3 是 AI 推测（GT 0.15）。所以本 plan 的渠道配比暂用 COURSE_TYPE_PLAYBOOKS Type 1 兜底基线，**补完 PERSONAS §7 后用 Mode E export-channels 覆盖**。

## 1. 课程定位摘要

12 周把「会调 LLM API」变成「能搭生产级 AI 系统」，覆盖 Context Engineering / RAG / GraphRAG / Agent SDK（OpenAI·Claude·Google 三家对比）/ Multi-Agent + A2A + MCP / QLoRA 微调 / AI Eval。7 个可写进简历、对得上 AI JD 的实战项目 + 12 周 P3 真实企业项目孵化。导师来自 Meta/Microsoft/Amazon（⚠️ 实名待核实）。

**主推内容角度（Type 1 求职课优先级）**：

| 内容角度 | 权重 | 怎么用 |
|---------|------|-------|
| 校友真实转岗案例（项目截图 + 转岗路径，**不晒 offer 金额承诺**）| ⭐⭐⭐⭐⭐ | 小红书 + 销售页核心。⚠️ 需 PERSONAS §7 task 2 真实学员数据 |
| 7 个 capstone 项目「能写进简历 + 对得上 JD」| ⭐⭐⭐⭐⭐ | 直击 A/B/C 共同痛点「简历没真东西」「学完不知生产怎么做」|
| Faculty 实名 + 履历（Meta/MS/Amazon）| ⭐⭐⭐⭐ | 资深 Persona C 最认。⚠️ §7 task 7 核实实名 |
| 课程大纲技能点逐条对上 AI JD | ⭐⭐⭐⭐ | Persona A 购买触发器：大纲 = 他正在投的 JD |
| 12 周 P3 企业项目孵化（真实项目，非攒的）| ⭐⭐⭐⭐ | Persona B 异议「项目是真的吗」的正面回应 |
| 课程 vs 自学 vs 竞品对比 | ⭐⭐ | 回应 A/C 异议「我自己看文档也行」，销售页放，别单独写文 |

🚨 **红线**：不承诺包就业 / 月入 / 保 offer（Persona A/B/C 黑名单全点名）。求职课讲「求职准备度 / 简历对得上 JD / 校友真实转岗路径」，不讲「保证拿 offer」。

## 2. 目标与漏斗反推（⚠️ 全部行业基线，待真实数据替换）

> 报名目标 N 待补。以下用 Type 1 基线比例，N 填进来后算具体数字。

```
报名目标 N 人（自学 + 教学 + 陪跑三档）
  ↓ 主课转化率 5%（⚠️ 行业基线）
加微信目标 20N 人
  ↓ 引流课 → 主课转化率 15%（⚠️ 基线）
引流课报名目标 3N 人
  ↓ 引流课 page CTR 30%（⚠️ 基线）
引流课页面 UV 目标 10N 人
  ↓ 各渠道流量分摊（Type 1 基线）
  - 小红书种草（校友案例/vlog）：4N UV（40%）
  - 公众号深度长文：2N UV（20%）
  - 线上讲座（试听+Faculty 答疑）：2N UV（20%）
  - SEO + 自然流量：1N UV（10%）
  - 脉脉/LinkedIn 求职场景：1N UV（10%）
```

⚠️ 比例是行业基线，非本课实测。每次 postmortem 后更新回 FUNNEL_PLAN.md。

## 3. 渠道矩阵（Type 1 求职课，按 ROI 排序）

> 每门课至少 5 渠道。Type 1 主战场 = 小红书校友案例 + 公众号深度长文 + 讲座 + 销售页 OFFER/项目墙 + SEO。

| Rank | 渠道 | 频次（Type 1 基线）| 主负责 | 子 skill | 备注（锚定 persona）|
|------|------|------|--------|----------|------|
| 1 | 销售页 Custom Landing + 项目墙/校友墙 | 1 次搭 + 季度迭代 | Beta + Dev | `/course-custom-landing` | hero 放校友真实转岗案例 + 7 项目；⚠️ 不放 offer 金额，放「项目 + 转岗路径」|
| 2 | 公众号深度长文 | **2 篇/周** × 8 = 16 篇 | Marketing 文案 | `/blog-longform-writer` + `/wechat-article-quality` | 4 类轮流：①AI JD 技能拆解（戳 A 痛点）②校友转岗故事（戳 B）③Faculty 专访（戳 C）④课程技术拆解（GraphRAG/Agent SDK 深度，戳 C）|
| 3 | 小红书校友真实变化 + 项目 vlog | **12 篇/周** × 8 = 96 篇 | Summer + Lily + KIKI | `/xhs-topic-picker`→`/xhs-draft`→`/xhs-poster`→`/xhs-review` | 3 人各 4 篇/周。角度：A 痛点「会调 API≠AI 工程师」/ B 校友 vlog / quick win 项目截图 |
| 4 | 线上讲座（试听 + Faculty 答疑）| **3-4 场** 整周期 | Beta | `/webinar-topic-feasibility`（先审 topic）| T-21 试听 / T-14 Faculty 1v1 答疑 / T-7 倒数 / T-3 最后一场 |
| 5 | SEO 长尾词矩阵 | 一次性 5d + 月迭代 | Dev | `/seo-optimizer` + `/eeat-optimizer` | "AI Engineer 培训 / 转 AI 工程师 / RAG Agent 实战 / LLM 工程师 路线"，长期资产 |
| 6 | 脉脉 / 一亩三分地 求职场景内容 | 低频精准（每周 1-2 帖）| Marketing | — | A/B 求职决策场景，⚠️ 非自有渠道，靠真名/真实内容 |
| 7 | EOI 销售跟进（讲座/活动后）| 24h-72h-7d SOP | Amelia+Rain+Angela+Neomi | `/eoi-followup` | 讲座/试听后每个 lead 必跟 |
| 8 | 朋友圈 + 学员真名发声 | T-7 集中 + D0 学员晒项目 | 全员 + 学员 | — | 学员真名 > 销售号 |
| 9 | LinkedIn 长文（英文站）| ⚠️ 仅做英文站时 1 篇/周 | Beta/外包 | — | 待 §7 task 8 决定是否双轨 |

**不跑的渠道**（Type 1 基线）：
- ❌ 私域 1v1 群发（仅 rescue 期用，客单价 ¥9800+ 学员反感群发，Persona 黑名单点名）
- ❌ 付费投放（第 1 期不投，第 2 期看 ROI；⚠️ 任何投放需 Lightman 审批预算）

## 4. 时间轴 Task 矩阵（T-30 → D+30，8 周）

> ⚠️ 具体日期待 launch date 补。先给 T-30 / T-21 两个时间点 + 节奏框架（按 SKILL.md 要求不一次性写完 30 条）。

### T-30（开班前 4 周 · 地基周）

- T-30 周一 09:00：✏️ Aurora + Beta 确认 launch date / 三档报名目标 / 团队配置 — 填本 plan §0/§2 — 30min — ⚠️ 阻塞项，不定不开工
- T-30 周一 10:00：✏️ Beta 核实导师实名履历（Meta/MS/Amazon 真名 + LinkedIn）→ 回填 PERSONAS §7 task 7 — 用于销售页 — 60min
- T-30 周一 14:00：🤖→✏️ 启动 PERSONAS §7 GT task（面访销售 + 扒评论 + curl 销售页核单价）— Summer/Beta/Aurora 分头 — 本周内补 GT 到 0.5+
- T-30 周二 10:00：🤖→✏️ `/course-custom-landing` 审本课销售页现状（Mode B）→ 校友案例墙 + 7 项目区是否到位 — Beta+Dev — P0
- T-30 周二 14:00：🤖 `/webinar-topic-feasibility` 审「T-21 试听讲座」topic 能不能爆 — Beta — 30min
- T-30 周三 09:00：🤖 `/seo-optimizer` + `/eeat-optimizer` 上线长尾词矩阵（"转 AI 工程师 / AI Engineer 培训"等）— Dev — 起效慢先铺 — P1
- T-30 周三 11:00：🤖 `/blog-longform-writer` 写第 1 篇公众号（AI JD 技能拆解角度，戳 Persona A）— 文案 — 4h
- T-30 周四 11:00：🤖 `/xhs-topic-picker` 出 9 个候选选题（A 痛点/B 校友/C 深度三轨）— ✏️ Summer 选 3 — 30min
- T-30 周四 14:00：🤖 `/xhs-draft` 3 选题 × 3 切角 = 9 稿 — 60min
- T-30 周五 14:00：🤖→✏️ `/xhs-poster` 9 稿配图（读 themeColor #FF5757 Neo-Brutalism）— Designer+Summer — 90min
- T-30 周五 17:00：✏️ Summer 排期发布（下周二/三/五各 3 条，3 号矩阵）— 20min

### T-21（开班前 3 周 · 试听 + 内容放量）

- T-21 周一 09:00：🤖 `/course-promotion-architect weekly` 复盘 T-30 完成度 + GT 覆盖率是否升到 0.5+ — Aurora — 若 GT 仍 < 0.5，所有文案 task 标 ⚠️ 暂不投
- T-21 周内：🎤 第 1 场试听讲座（Faculty 出镜，讲 1 个 RAG/Agent quick win = 引流课预演）— Beta — 讲座后立即 `/eoi-followup` 跟进
- T-21 周内：🤖 公众号第 2 篇（校友转岗故事，戳 Persona B）⚠️ 需 §7 task 2 真实学员素材
- T-21 周内：🤖 小红书 12 篇/周（含校友项目 vlog 角度）— Summer/Lily/KIKI
- T-21 周内：✏️ Beta 在脉脉/一亩三分地发 1-2 帖（求职场景真实内容，非广告）

### T-14 / T-7 / T-3 / T-1 / D0 / D+3 / D+7 / D+14 / D+30

> 待 launch date 确认后用 TASKS_LIBRARY.md 模板按 Type 1 完整 8 周裁剪展开。关键锚点：
> - T-14：Faculty 1v1 答疑专场 + 公众号 Faculty 专访（戳 C）+ 引流课正式上线（FUNNEL_PLAN §4）+ 7 天过渡序列启动
> - T-7：倒数讲座 + 朋友圈集中冲量 + EOI 第二轮跟进
> - T-3：最后一场讲座 + 学员真名发声
> - D0：开班通知 + 学员晒项目 + D0 起跑 7 天过渡（FUNNEL_PLAN §5）
> - D+7/D+14：在读学员项目进展晒图（喂下一期素材）
> - D+30：`/course-promotion-architect postmortem` 收真实数据回填 FUNNEL_PLAN

## 5. 责任分配

| 角色 | 负责 |
|------|------|
| Lightman | 预算审批 / 投放拍板 / 红线把关 |
| Aurora / Seren | 渠道排期 / KPI 监控 / 跨渠道协调 |
| Beta | 讲座主持 / Faculty 对接 / 销售页定位 / 课程主理 |
| Summer / Lily / KIKI | 小红书选题/写稿/配图/排期 |
| Marketing 文案 | 公众号长文 / 销售页文案 |
| Amelia / Rain / Angela | EOI 1v1 跟进 24-72h-7d |
| Neomi | EOI 派单 / SLA 监控 |
| Designer | 海报 / 销售页视觉（themeColor #FF5757）|
| Dev | 销售页 / SEO / 报名表单 / 埋点 |

## 6. 周报

> 每周一 `/course-promotion-architect weekly ai-engineer-bootcamp` 追加一行。

### Week of 2026-06-16
- 上周完成：PERSONAS.md / FUNNEL_PLAN.md / PROMOTION_PLAN.md init 骨架
- 阻塞：launch date + 报名目标 + 真实客单价 + 导师实名 全部 ⚠️ 待补；PERSONAS GT 仅 0.15
- 本周目标：①定 launch date/target ②启动 PERSONAS §7 GT task ③核实导师实名 + 销售页客单价
- 风险 flag：GT < 0.5 之前，所有外发文案只能搭骨架不能定稿投放

## 7. 风险与决策日志

- 2026-06-16 init：识别 Type 1，按 8 周 T-30→D+30 排。最大风险 = PERSONAS GT 0.15（渠道/文案全是 AI 推断），必须 T-30 周内补到 0.5+，否则 marketing 物料是拍脑袋驱动。
- ⚠️ 待补 ground truth（防幻觉）：launch date / 报名目标 / 真实三档客单价 / 导师实名履历 / 前 4 期渠道数据 / 校友真实转岗案例素材 — 全部标 ⚠️，不瞎填。

## 8. 调用子 skill 索引

| Task | 子 skill |
|------|---------|
| 补 persona GT | `/persona-ground-truth-scraper` + `target-user-persona-mapper/INTERVIEW_SCRIPT.md` → `/target-user-persona-mapper validate` |
| 定三档/引流课/过渡 | `/course-funnel-architect`（→ tier-design / intro-course-design / funnel-handoff-design）|
| 销售页 | `/course-custom-landing`（Mode B）|
| 公众号 | `/blog-longform-writer` + `/wechat-article-quality` |
| 小红书 | `/xhs-topic-picker` → `/xhs-draft` → `/xhs-poster` → `/xhs-review` → `/xhs-score` |
| 讲座审 topic | `/webinar-topic-feasibility` |
| 海报测试 | `/poster-user-test`（ChatGPT 侧）|
| SEO | `/seo-optimizer` + `/eeat-optimizer` |
| EOI 跟进 | `/eoi-followup` |

---

## 本周 3 条必做（给用户口播）

1. **定 launch date + 三档报名目标**（不定 = 整个时间轴排不了，P0 阻塞）。
2. **启动 PERSONAS §7 GT task**（面访销售 + 扒评论 + curl 销售页核单价），2 周内把 GT 从 0.15 拉到 0.5+，否则所有文案是 AI 拍脑袋。
3. **核实导师实名履历**（Meta/MS/Amazon 真名 + LinkedIn）— Type 1 求职课 Faculty 实名是销售页命脉。
