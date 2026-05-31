# ai-programming — Marketing Workflow MASTER

> 课程：人人都能学的 AI Coding 实战课（零基础 · Cursor + AI · 从想法到产品上线）
> 创建：2026-05-29 · 总指挥文档 · 整套 marketing 系统单一真相入口
>
> 📌 团队任何人打开就知道：(a) 全局状态 (b) 自己这周该干什么 (c) 谁在阻塞谁
> 📌 不写代码不部署不发文 — 这是「下一步去打开哪个文件 / 调哪个 skill / 找谁拍板」的指挥总台
> 📌 真相源：production 销售页 + prod-state.json + outline.json + 6 个 marketing 文档 + GAP_AUDIT

---

## §0. Meta + 真相源

### 0.1 课程基础真相（不要再编造）

| Field | Value | 来源（每次怀疑都回这里 verify）|
|-------|-------|------|
| Slug | `ai-programming` | — |
| 中文名 | 人人都能学的 AI Coding 实战课 | outline.json |
| Prod Training ID | `68d27c49150c9d0071939f7a` | `prod-state.json` |
| 定位 | 零基础 Cursor + AI 从想法到产品上线（入门 / 大众线）| outline.json |
| 主题色 | `#FF7B5A` 暖珊瑚 + JR Neo-Brutalism | DESIGN.md |
| 基础班定价（AUD 预售）| **$860**（原 $960，10% off，前 10 名）| jiangren.com.au 销售页 curl |
| 进阶班定价（AUD 预售）| **$1360**（原 $2080，35% off）| 同上 |
| 多币种 | USD $559/$884 · CNY ¥4042/¥6388 · SGD/MYR/GBP 已配 | 销售页 regionalPrices |
| 02 期开课日 | 2025-11-16（已开课 113 lessons）| prod-state.json |
| **03 期开课日** | **⚠️ 待 Lightman 拍板**（整个时间轴用 `L` 作变量）| 等决策 |
| 总课时 | 113 lessons / 138 steps / 27 直播 / 18 Lab / 14 Quest / 33 工具 / 4 大可上线交付物 | outline.json |
| 销售页 | `/program-course/ai-programming`（custom landing 5 文件 19KB）| `jr-academy-web-zh/src/app/[locale]/program-course/ai-programming/` |
| 海报 | 8 张（poster-v1~v6 + poster.html + xhs-posters/）| `curriculum/ai-programming/public/` |
| OFFER WALL | ❌ 0 张校友作品截图 | content.ts 待加 |

### 0.2 6 个 marketing 文档指针

每个文档负责一件事，互相引用，不重复内容。

| 文档 | 路径 | 谁产出 | 谁消费 | 状态 |
|------|------|--------|--------|------|
| **DESIGN.md** | `curriculum/ai-programming/DESIGN.md` | Designer + Lightman | 海报 / Slide / 销售页 | ✅ 完整（主色 + Neo-Brutalism + AI 出图 prompt）|
| **PERSONAS.md** | `curriculum/ai-programming/PERSONAS.md` | `target-user-persona-mapper` + Beta + Summer | 销售页 hero / xhs 切角 / 顾问话术 / funnel 决策周期 | 🟡 v0.5 enhanced GT 0.55（阈值刚过，待升 0.75）|
| **PERSONAS-INIT-REPORT.md** | 同目录 | persona-mapper init dogfood 产出 | Lightman 看对账 | ✅ 已写 |
| **FUNNEL_PLAN.md** | `curriculum/ai-programming/FUNNEL_PLAN.md` | `course-funnel-architect` + Aurora + Beta | promotion / 销售页定价 / 引流课 | ✅ v0 init 推荐选项 B（¥99 引流 + 现 2 档），等拍板 |
| **PROMOTION_PLAN.md** | `curriculum/ai-programming/PROMOTION_PLAN.md` | `course-promotion-architect` + Aurora | 11 账号矩阵 + 公众号 + 讲座 + EOI | 🟡 enhanced 2026-05-29，时间轴只写到 T-14（待 launch date 才能展开 T-7→D+30）|
| **AUDIT_LOG.md** | `curriculum/ai-programming/AUDIT_LOG.md` | `bootcamp-sync` 操作者 / Beta | 翻车追责 / cohort 复盘喂回 PERSONAS refresh | 🟡 有 2026-05-12 _id 重对齐 1 条，无 cohort 02 复盘 |
| **MARKETING_WORKFLOW_GAP_AUDIT.md** | 同目录 | workflow `wf_0d1c4499-b1b` 6 agent 25min | **本 MASTER 文档主输入** | ✅ 完整 5 phase × 76 task + 5 系统性 gap + 12 top 优先级 |

### 0.3 跟 GAP_AUDIT 的关系

本 MASTER 文档 = GAP_AUDIT 的「执行视角」。

```
GAP_AUDIT.md  ← 诊断报告（哪里漏 / 多严重）
   ↓ 翻译
MASTER.md（本文件）  ← 执行调度台（这周谁干什么 / 卡在哪 / ETA）
   ↓ 拆解
2 个新 skill + 3 个 SOP + 1 时间轴 + 1 dashboard tab  ← 具体落地
```

### 0.4 数据真相源（永远以这里为准）

| 数据 | 真相源 | 怎么 verify |
|------|--------|------------|
| 定价 | `curl https://jiangren.com.au/program-course/ai-programming` → `pricingOptions` | 销售页 SSR |
| Training schema | `tools/skills-data-manager/SCHEMA_REFERENCE.md` | 改字段必读 |
| 02 期 lessons | `curriculum/ai-programming/public/prod-state.json` | SDM Refresh 拉 |
| outline 唯一数据源 | `curriculum/ai-programming/public/outline.json` | 编辑这个，sync 时推到 prod |
| 销售页 content | `jr-academy-web-zh/src/app/[locale]/program-course/ai-programming/content.ts` | 改完跑 prod deploy workflow |
| Persona ground truth 5 类来源 | PERSONAS.md §0 GT-01~GT-05 + GT-AI | 见 PERSONAS.md table |

---

## §1. 全局状态板（dashboard 视角）

### 1.1 5 phase 健康度

| Phase | Stage | 覆盖率 | 总 task | None gap | 主要阻塞 | 趋势 |
|-------|-------|--------|---------|----------|---------|------|
| **A** | Pre-launch | **71%** ✅ | 17 | 3 | 销售页加 OFFER WALL（缺学员素材）/ 倒计时 banner 等 launch date | 稳定 |
| **B** | 招生期 T-7→D0 | **62%** 🟡 | 14 | 5 | D-1 学员入营 SOP 0 / 7 天 nurture 序列内容 0 / 紧迫感无 SOP | 待时间轴展开 |
| **C** | 课程运营（开课→结业）| **7%** 🔴 | 16 | 13 | **最大黑洞**：班级群运营 / 进度看板 / 掉队介入 / 答辩 / NPS 全 0 SOP | 恶化中（02 期裸奔）|
| **D** | 课后复盘续费 | **42%** 🟡 | 14 | 5 | OFFER WALL 收集 / Testimonial 视频 / 跨课程升学路径 0 | 02 期已结业窗口要关 |
| **E** | 内容生产闭环 | **39%** 🟡 | 18 | 8 | 一稿多发 0 skill / 11 账号排期 30% 漏 / 评论运营 0 SOP / attribution 黑盒 | 内容产能砍半 |

> 覆盖率公式：`(Full + 0.5 × Partial) / Total`。来源：MARKETING_WORKFLOW_GAP_AUDIT.md §1。

### 1.2 5 个系统性 Gap 当前状态

| # | Gap | 出现 Phase | 严重度 | Owner | ETA |
|---|-----|-----------|-------|-------|-----|
| 1 | **数据回收 / 归因黑盒**（marketing 黑 + cohort 黑）| A/B/C/D/E | 🔴 P0 | Dev + Aurora | 待数据系统 4 collection 上线 |
| 2 | **学员侧 ground truth 采集 0 机制**（PERSONAS / 作品 / Testimonial / NPS）| A/C/D/E | 🔴 P0 | Beta | 02 期已开课 = 最佳窗口，错过断崖 |
| 3 | **Cohort 学员侧 onboarding / 运营 / 留存 SOP 全套 0**（B→C→D 三段裸奔）| B/C/D | 🔴 P0 | Beta + Beta | 03 期开班前 1 周必须 ship |
| 4 | **内容 → 分发 → 评论运营 → 引流 → 转化 全链路断点** | A/B/E | 🔴 P0 | Aurora + Summer + Lily + KIKI | 11 账号矩阵漏 60% 流量 |
| 5 | **Product decision 阻塞 + Marketing 文案岗空缺** | A/B/D | 🔴 P0 | Lightman + HR | 文案岗 0 人，每多等 1 周招生窗口 -1 周 |

### 1.3 3 个跨 phase 衔接断裂

| 断裂 | 现状 | 影响 | 修复优先级 |
|------|------|------|-----------|
| **B → C** | EOI 收单数据 + 入群名单 不传给运营 | 助教 1v1 介入无 context / cohort 名单与画像断链 | P0 |
| **C → D** | cohort NPS / 卡点 / 产出 不传复盘 | OFFER WALL 没素材 + Testimonial 无候选 + PERSONAS refresh 无依据 | P0 |
| **D → A** | 复盘转化率 / OFFER WALL 不回灌下一期销售页 | 每期 cohort 都「冷启动」/ 行业基线 5% 跑 N 期没替成真实数据 | P1 |

### 1.4 Top 10 优先级（按 ROI 排序）

来源：GAP_AUDIT §4。**所有 ETA 都是 `L` 相对值**（L = 03 期 launch day）。

| # | Sev | Effort | Action | Owner | Status | ETA |
|---|-----|--------|--------|-------|--------|-----|
| 1 | P0 | 1h | 拍板 03 期 launch + target + 早鸟截止 | Lightman | 🔴 阻塞中 | 本周内必出 |
| 2 | P0 | 2-3d | 新建 `cohort-graduate-portfolio-collector` skill（02 期作品采集）| Beta | 🔴 未启动 | L-28 前必须 ship（02 期结业窗口正在关）|
| 3 | P0 | 1w | 新建 cohort 三件套 skill（launch-sop / daily-ops / progress-tracker）| Beta + Beta | 🔴 未启动 | L-7 前 ship |
| 4 | P0 | 1w | 数据系统：cohort + attribution + referral 三 collection + admin Content ROI tab | Dev | 🔴 未启动 | L+0 前 ship 1/3，L+14 全部 ship |
| 5 | P0 | 2-3d | Beta 强制完成 5 个 02 期学员访谈 + Summer 扫 xhs 评论 → PERSONAS GT 0.55→0.75+ | Beta + Summer | 🟡 skill 齐全没排时间 | 本周内启动 |
| 6 | P0 | 2-3d | 新建 `xhs-comment-ops` + `content-to-private-domain-bridge` skill | Summer + Aurora | 🔴 未启动 | L-21 前 ship |
| 7 | P0 | 1w | 新建 `content-multi-platform-distributor` + `content-schedule-planner` | Aurora + Dev | 🔴 未启动 | L-21 前 ship |
| 8 | P0 | 1w | 新建 `marketing-metrics-collector` + `content-attribution-tracker` | Aurora + Dev | 🔴 未启动 | 配合 #4 数据系统一起 ship |
| 9 | P1 | half-day | HR 补 Marketing 文案岗（短期兼职即可）| Lightman + HR | 🔴 0 人 | 1 周内出兼职 JD |
| 10 | P1 | 2-3d | 新建 `enrollment-urgency-sop` + 销售页 CountdownBanner 组件 | Aurora + Dev | 🔴 未启动 | L-7 前 ship |

🚨 **当前所有 P0 都是「未启动」**——不是技术难度高，是排期没人喊号。本 MASTER 文档的核心作用 = 强制排期。

---

## §2. T-N → D+N 时间轴（03 期为例，L = 待拍板的 launch day）

> ⚠️ 03 期 launch date 未定 → 用 `L` 作变量。Lightman 拍板后 1 小时内把所有 `L` 替换成具体日期。
> ⚠️ 本时间轴只展开到 D+30。后续 Day+30+（alumni → 04 期）等拍板后跑 `course-promotion-architect` 续。

### L-28（开班前 4 周）— 地基铺设

| Day | Task | Owner | Skill / SOP |
|-----|------|-------|------------|
| Mon | 🔴 **Lightman 拍板 03 期 launch / target（50/80/120 三档） / 早鸟截止日** | Lightman | 决策会 30min |
| Mon | 🚨 **Beta + 顾问访谈 × 3 拉 PERSONAS GT 0.55→0.75** | Beta | `INTERVIEW_SCRIPT.md` |
| Tue | Summer 跑 `/persona-ground-truth-scraper init --source=xhs,wechat` | Summer | `persona-ground-truth-scraper` |
| Tue | Beta 启动 `cohort-graduate-portfolio-collector` 给 02 期发授权同意表 | Beta | 新 skill #2（先跑手动版）|
| Wed | Aurora 把 FUNNEL_PLAN.md 选项 B 落地：¥99 引流课设计 | Aurora | `intro-course-design` |
| Wed | Dev 启动数据系统 4 collection 后端建表 | Dev | `cohortProgress` / `contentAttributions` / `referrals` / `alumni_journey` |
| Thu | 文案（缺岗 🚨）写公众号长文 1「不会代码做出可上线产品」 | TBD | `blog-longform-writer` + `wechat-article-quality` |
| Fri | Aurora 跑 `course-promotion-architect weekly` 周报 | Aurora | 同 skill |

### L-21（开班前 3 周）— 流量启动

| Day | Task | Owner | Skill / SOP |
|-----|------|-------|------------|
| Mon | 销售页 Mode B 升级：加 OFFER WALL + Faculty 占位 + 03 期 commenceCourseDate banner | Dev + Beta | `course-custom-landing` Mode B |
| Mon | 海报第 1 套（主色 #FF7B5A）+ user-test | Designer + Marketing | `poster-user-test` |
| Tue | 第 1 场讲座 topic 审「零基础 30min 做出第一个网页」 | Beta | `webinar-topic-feasibility` |
| Tue | Summer 用 `content-multi-platform-distributor`（新 skill）把 1 稿改 6 平台 | Summer | 新 skill #7 |
| Wed | 小红书第 1 周 9 稿（用真实 GT 0.75 后的切角）| Summer | `xhs-topic-picker→draft→poster→review` |
| Wed | SEO 长尾词调研 + 销售页 metadata | Dev | `seo-optimizer` |
| Thu | 公众号长文 2「02 期校友做了什么」案例长文 | 文案（缺岗 🚨）| `blog-longform-writer` |
| Thu | `xhs-comment-ops` SOP 开始执行（前 24h 评论运营）| Summer + 小号矩阵 | 新 skill #6 |
| Fri | Aurora 周报 + 招生进度 review | Aurora | `course-promotion-architect weekly` |

### L-14（开班前 2 周）— 流量 + 试听

| Day | Task | Owner | Skill / SOP |
|-----|------|-------|------------|
| Mon | 销售页上线 prod + GTM 埋点 + UTM 短链全渠道 | Dev | — |
| Mon | `enrollment-urgency-sop`：早鸟梯度 + 真席位规则 + 涨价警告 | Aurora | 新 skill #10 |
| Tue 19:30 | 第 1 场讲座（试听性质，现场做出一个网页）| Beta | `classroom-deck-builder`（kickoff-ceremony mode）|
| Wed | 第 1 场讲座 EOI 派单 + 24h SLA 监控 | Neomi + Amelia/Rain/Angela | `eoi-followup`（path 适配 cohort-03/eoi.json）|
| Wed | 小红书第 2 周 9 稿 + 02 期校友真实案例融入 | Summer | xhs 四件套 + OFFER WALL 数据 |
| Thu | 公众号长文 3（实战案例 / 同类人做到了）| 文案（缺岗 🚨）| `blog-longform-writer` |
| Thu | Aurora 跑 daily-standup mode（新扩展） | Aurora | `course-promotion-architect daily-standup` |
| Fri | Aurora 周报 + 朋友圈刷屏第 1 轮 | Aurora | 同 |

### L-7（开班前 1 周）— 临门一脚

| Day | Task | Owner | Skill / SOP |
|-----|------|-------|------------|
| Mon | 7 天 nurture 序列启动（D-7→D-1）| 文案 + Neomi | `funnel-handoff-design`（pre-enrollment mode 扩展）|
| Mon | `cohort-launch-sop`：拉群 SOP + Welcome Email + 班委选举模板上线 | Beta + Beta | 新 skill #3a |
| Tue | T-7 公开试听讲座（销售导向）| Beta + Aurora | `classroom-deck-builder` |
| Tue | EOI 第 2 波 24h SLA | Neomi + 顾问 | `eoi-followup` |
| Wed | `cohort-readiness-check`：T-7 实测 18 Lab + 33 工具是否还能用 | Beta | `curriculum-review`（cohort-readiness mode 扩展）|
| Wed | 朋友圈刷屏第 2 轮 + 销售页倒计时 72h banner | Aurora + Dev | CountdownBanner 组件 |
| Thu | T-3 涨价警告推送（如设了早鸟）+ 24h 未付款 lead 唤醒 | Aurora + 顾问 | 同 |
| Fri | 销售页倒计时 24h + 最后 EOI 收单 | Aurora + Neomi | — |

### L-3 / L-1

| Day | Task | Owner | Skill / SOP |
|-----|------|-------|------------|
| L-3 | 涨价后 24h 唤醒未付款 lead（合规边界 cross-check）| 顾问 + Lightman 审 | `enrollment-urgency-sop` 红线 |
| L-1 | **D-1 拉群仪式**：班委选举 + 自我介绍接龙 + Day 1 作业派发 | Beta | `cohort-launch-sop` |
| L-1 | Welcome Email 发送 | Beta + Dev | 同 |
| L-1 | 班级群入营徽章 + 助教分组（每 10 人 1 个）| Beta + 助教 | 同 |

### D0（开课当天）

| Time | Task | Owner | Skill / SOP |
|------|------|-------|------------|
| 09:00 | 开学典礼 deck 准备 | Beta + Beta | `classroom-deck-builder`（kickoff-ceremony mode 新扩展）|
| 19:30 | 开学典礼直播（破冰 + 仪式感 + Faculty 亮相 + Q&A）| Beta | 同 |
| 21:00 | 当晚答疑闸 + 群内 Day 1 作业回流 | Beta + 助教 | `cohort-daily-ops` |
| D0 全天 | EOI 最后一批（未付款 → 转 D+3 last call）| 顾问 | `eoi-followup` |

### D+7（开课第 1 周末）

| Day | Task | Owner | Skill / SOP |
|-----|------|-------|------------|
| D+1 | 日 SOP：08:00 早安 + 12:00/20:00 答疑闸 + 22:00 静默 | Beta + 助教 | `cohort-daily-ops` 新 skill #3b |
| D+3 | 第 1 次掉队检测（3 天 0 动作 → 1v1 私聊）| Beta + 助教 | `cohort-1v1-intervention`（待新建）|
| D+7 | 第 1 周 cohort 进度周报（lesson 完成 / Lab 通过 / Quest 提交分桶）| 自动从 cohortProgress collection 生成 | `cohort-progress-tracker` 新 skill #3c |
| D+7 | Aurora 跑 `course-promotion-architect weekly` 招生期复盘 | Aurora | 同 |

### D+14（开课 2 周）

| Day | Task | Owner | Skill / SOP |
|-----|------|-------|------------|
| D+14 | W2 NPS 调研（救急型，发现卡点）| 自动从 cohortProgress collection 触发 | `cohort-nps-collector`（待新建）|
| D+14 | Phase E 内容生产：02 期校友 Testimonial 视频 brief 启动 | Aurora + Designer | `testimonial-video-brief`（待新建）|
| D+14 | xhs / 公众号 加 02 期真实案例 | Summer + 文案 | `xhs-draft` + `blog-longform-writer` |
| D+14 | 第 2 次掉队检测 + 1v1 介入 | Beta + 助教 | `cohort-1v1-intervention` |

### D+30（开课 1 月）

| Day | Task | Owner | Skill / SOP |
|-----|------|-------|------------|
| D+30 | 30 天落地追踪问卷（守红线：不问金钱只问技能落地）| 自动从 cohortProgress | `cohort-nps-collector` 30d set |
| D+30 | Aurora 跑 `course-promotion-architect postmortem`（学员侧 + 课程侧 + 漏斗侧三层）| Aurora + Beta | 同 |
| D+30 | FUNNEL_PLAN.md 真实转化率回写（行业基线 5% → 03 期真值）| Beta | `course-funnel-architect` postmortem |
| D+30 | PERSONAS.md refresh（用 03 期真实学员数据）| Beta | `target-user-persona-mapper refresh` |
| D+30 | 04 期 init（喂 03 期数据进 GAP_AUDIT v2 + 本 MASTER v2）| Aurora + Beta | 本文件 update |

---

## §3. 依赖图（谁阻塞谁）

```
[Lightman 拍板 03 期 launch+target+早鸟] (P0)
       │
       ├─→ FUNNEL_PLAN.md 选项 B 真正落地（¥99 引流课 / 7d nurture）
       │       │
       │       └─→ PROMOTION_PLAN.md 时间轴 T-7→D+30 展开
       │               │
       │               └─→ 销售页倒计时 banner 上线 + EOI 7d nurture 序列内容产出
       │                       │
       │                       └─→ 招生期 7 天高压窗口（30-40% 报名贡献）
       │
       ├─→ 海报 / 朋友圈刷屏 / 早鸟价梯度 全部解锁
       │
       └─→ Marketing 团队从「等待」状态切「执行」状态

[Beta + Summer 拉 PERSONAS GT 0.55→0.75] (P0 · 2-3d)
       │
       ├─→ 销售页 hero 原话替换（推测语料 → 真实痛点原话）
       ├─→ xhs 切角真实化（Summer 9 稿/周不再凭推测写）
       ├─→ 公众号文案有真实人物语料
       ├─→ 顾问话术库 Top 5 异议补完（最关键字段，目前全空）
       └─→ 7 天 nurture 序列 14 内容草稿可信

[02 期学员产出收集 SOP](cohort-graduate-portfolio-collector) (P0 · 2-3d)
       │
       ├─→ 销售页 OFFER WALL 上线（学员 4 大交付物 + 1 句 testimonial + 头像）
       │       │
       │       └─→ 零基础人群最大异议「我能不能学会」破除
       │               │
       │               └─→ 03 期转化率 base 5% → 8-10%（ai-engineer-bootcamp v1.6 数据已验证）
       │
       ├─→ 公众号案例长文有真实素材
       └─→ Testimonial 视频拍摄候选名单（D+14 启动）

[数据系统 4 collection 上线 + admin Content ROI tab] (P0 · 1w)
       │
       ├─→ cohortProgress collection → cohort-progress-tracker skill 可跑
       │       │
       │       └─→ Phase C 16 task 13 个 none gap 才能填
       │
       ├─→ contentAttributions collection → marketing-metrics-collector + content-attribution-tracker
       │       │
       │       └─→ $50k+ marketing 预算才有 ROI 归因（当前全黑盒）
       │
       ├─→ referrals collection → 老带新档位 / 防刷规则
       └─→ alumni_journey collection → 跨课程升学路径

[Marketing 文案岗补人] (P1 · 1w)
       │
       ├─→ 公众号 2 篇/周
       ├─→ 销售页文案改版（Mode B 升级）
       ├─→ 7 天 nurture 序列 14 内容草稿
       └─→ OFFER WALL testimonial 改写

[cohort 进度 dashboard（C 段裸奔修复）] (P0 · 1w)
       │
       ├─→ Phase C 整段 0 SOP 才能启动
       ├─→ 完课率不跌破 50%
       │       │
       │       └─→ 作品交付率 > 50% → D 段 OFFER WALL 有素材 → A 段下期销售页转化提升
       └─→ 助教 1v1 介入有 trigger 条件（不再凭记忆）
```

---

## §4. 决策点（必须 Lightman / Beta 拍板的事）

> 这 8 个决策每多卡 1 天 = 整条链路停 1 天。

| # | 决策 | 谁拍 | 卡了什么 | 卡了多久 | 备注 |
|---|------|------|---------|---------|------|
| 1 | **03 期 launch date** | Lightman + Beta | 整个时间轴 / 销售页 banner / 7d nurture | 自 2026-05-28 起 | 拖 1 周 = 招生窗口 -1 周 |
| 2 | **03 期 target 报名人数（50 / 80 / 120 三档）** | Aurora + Lightman | 漏斗反推 / 预算分配 / 渠道配比 | 自 2026-05-28 起 | 不定 target 没法算渠道 UV 目标 |
| 3 | **早鸟截止日 + 涨价幅度** | Aurora + Lightman | T-3 紧迫感 / CountdownBanner / 涨价后 24h 唤醒 | 自 2026-05-28 起 | 红线 cross-check：真席位规则 |
| 4 | **是否做 ¥99 引流课**（FUNNEL_PLAN 选项 B）| Lightman + Beta | Phase 0 是否拆出独立卖 / 7d 过渡能否启动 / 流量入口宽度 | 自 2026-05-29 起 | ROI 推测 4-5x，但需 Phase 0 拆课 1 周 |
| 5 | **进阶班升级折扣** | Aurora + Lightman | 基础 → 进阶 30% 升级转化目标 | 自 2026-05-29 起 | 可参考 ai-essentials 升级折扣 |
| 6 | **Marketing 文案岗：兼职 vs 全职 vs 现有员工兼** | Lightman + HR | 公众号 2 篇/周 / 销售页改版 / 7d nurture / OFFER WALL | 自 2026-05-28 起 | RACI 标 — 未指派 |
| 7 | **Faculty 实名是谁**（销售页加 Faculty section）| Beta + Lightman | 销售页信任建设（ai-engineer 有 5 张校友 OFFER，本课全空）| 自 2026-05-29 起 | 至少 2-3 人 |
| 8 | **是否启动 PBL 项目融入 ai-programming**（与 ai-engineer 拉开档次）| Lightman + Beta | 进阶班是否升级到包含 PBL | 长期决策 | 影响定价 + 招生定位 |

---

## §5. 责任矩阵 RACI（实名版）

> R = Responsible / A = Accountable / C = Consulted / I = Informed
> 🚨 标记 = 缺岗 / 没人 / 必须 HR 补

| 角色 | 实名 | 本 workflow 的 Primary 负责 | 状态 |
|------|------|--------------------------|------|
| 总指挥 | **Lightman** | 8 决策拍板 / 红线 / 付费投放审批 / Faculty 名单 | ✅ |
| Marketing 主管 | **Aurora / Seren** | 跨渠道排期 / 周报 / KPI / FUNNEL 决策 / 渠道分配 | ✅ |
| 新媒体小红书 | **Summer / Lily / KIKI**（11 账号矩阵）| 选题 + 写 + 配图 + 发 + 评论运营 | ✅（但需 `xhs-comment-ops` SOP）|
| **Marketing 文案** | **🚨 未指派** | 公众号 2 篇/周 / 销售页文案 / 7d nurture 内容 / OFFER WALL testimonial 改写 | 🔴 P1 决策 #6 |
| 课程主理人 | **Beta** | PERSONAS 验证 / 讲座主持 / 销售页定位 / 学员访谈 / cohort 设计 | ✅（bandwidth 紧）|
| 课程顾问 | **Amelia / Rain / Angela** | EOI 1v1 跟进 24-72h-7d / 异议处理 | ✅ |
| 销售助理 | **Neomi** | EOI 派单 / 24h SLA / 入群名单管理 | ✅ |
| 课程运营 | **Beta** | cohort 班级群运营 / D-1 拉群 / Day 1 作业 / 进度看板 | ✅（一人扛 24 人凭记忆 = 必翻车）|
| Designer | **未明确实名**（看 COMPANY_TEAM）| 海报（主色 #FF7B5A）/ banner / OFFER WALL 卡片 | 🟡 |
| Dev | **Lightman / 后端开发** | 销售页 / 数据系统 4 collection / GTM 埋点 / CountdownBanner | ✅ |
| 教学主管 | **未明确实名** | Faculty 协调 / 教学质量 / cohort 答辩评委 | 🟡 |
| IT 辅导员 | **未明确实名** | 工具帮助 / 环境配置答疑 | 🟡 |
| 数据 / 分析 | **🚨 兼任** | marketing 数据回收 / cohort dashboard / attribution | 🔴 P0 决策（看是兼 Dev 还是单独招）|

### 5.1 缺岗预警 🚨

| 缺岗 | 严重度 | 替代方案 | ETA |
|------|--------|----------|------|
| Marketing 文案 | 🔴 P1（不补 → 4 条产出链全延期）| 短期：Aurora / Beta / Seren 兼；中期：兼职 freelancer | 1 周内 |
| 数据 / 分析 | 🔴 P0（不补 → 5 phase 数据黑盒）| 短期：Dev 兼；中期：复用兼职 Marketing 文案？| 2 周内 |
| 教学主管 | 🟡 P2 | Beta 兼 | 短期可 |
| Designer | 🟡（看 8 张海报已有，新做 OFFER WALL 卡片 + Faculty 占位卡 + Testimonial 视频片头）| Designer 现有人手 | 不阻塞 |

---

## §6. KPI baseline + 数据回收契约

> ⚠️ 当前 5 phase 数据系统都不存在，全部待造。本节定义「该追什么 / 从哪取 / 谁取 / 多久 refresh / 落到哪」契约。

### 6.1 Phase A · Pre-launch KPI

| KPI | baseline | target | 数据源 | 频次 | 谁取 |
|-----|----------|--------|--------|------|------|
| 销售页 UV | ⚠️ 未追 | 1000+/月 | GA4 + GSC | 周 | Dev → admin Content ROI tab |
| 销售页 → ApplyForm 提交率 | ⚠️ 未追 | 5%+ | GA4 conversion event | 周 | Dev |
| OFFER WALL 张数 | 0 张 | 5+ 张 / cohort | 02 期学员授权 + content.ts | 一次性 | Beta |
| PERSONAS GT 覆盖率 | 0.55 | 0.75+ | 数 GT sources 数量 / weight | 月 | Beta |

### 6.2 Phase B · 招生期 KPI（核心 4 指标）

| KPI | baseline | target | 数据源 | 频次 | 谁取 |
|-----|----------|--------|--------|------|------|
| 销售页日 UV | ⚠️ 未追 | 200+/日（招生期）| GA4 | 日 | Aurora daily-standup |
| EOI 收单数 | ⚠️ 未追 | 每日 5-10 | admin EOI dashboard | 日 | Neomi |
| 24h first contact 完成率 | ⚠️ 未追 | 100% SLA | `eoi-followup` skill 数据 | 日 | Neomi |
| 付款转化率 | ⚠️ 未追 | EOI → 付款 30%+ | admin orders | 日 | Aurora |

### 6.3 Phase C · 课程运营 KPI

| KPI | baseline | target | 数据源 | 频次 | 谁取 |
|-----|----------|--------|--------|------|------|
| Lesson 完成率（按 lesson 维度）| ⚠️ 未追 | 80%+ | `cohortProgress` collection | 周 | `cohort-progress-tracker` 自动 |
| Lab 通过率 | ⚠️ 未追 | 70%+ | 同上 | 周 | 同 |
| Quest 提交率 | ⚠️ 未追 | 60%+ | `QuestSubmission` collection（待建）| 周 | 同 |
| 掉队学员数（3 天 0 动作）| ⚠️ 未追 | < 3 人 / cohort | `cohortProgress` 触发 | 日 | Beta + 助教 |
| W3 / 结业 / 30 天 NPS | ⚠️ 0 数据 | NPS ≥ 50 | `cohort-nps-collector` 问卷 | event | Beta + Beta |

### 6.4 Phase D · 课后复盘续费 KPI

| KPI | baseline | target | 数据源 | 频次 | 谁取 |
|-----|----------|--------|--------|------|------|
| 4 大交付物完成率 | ⚠️ 未追 | 60%+ | `cohort-graduate-portfolio-collector` | event | Beta |
| 进阶班升级率 | ⚠️ 未追 | 30%+ | orders join cohort | 一次性 | Aurora |
| 跨课程 LTV（推荐 ai-engineer 等）| ⚠️ 0 系统 | 待数据 | `alumni_journey` collection | 月 | `alumni-next-course-recommender`（待建）|
| 老带新推荐数 | 0 | 5+ 推荐 / cohort | `referrals` collection | 月 | `referral-program-designer`（待建）|

### 6.5 Phase E · 内容生产闭环 KPI

| KPI | baseline | target | 数据源 | 频次 | 谁取 |
|-----|----------|--------|--------|------|------|
| 11 账号矩阵 × 6 平台总曝光 | ⚠️ 漏填 50% | 实时全采 | 平台后台 API + 爬取 | 日 | `marketing-metrics-collector`（待建）|
| 单稿爆款率 | 5%（推测）| 15-20% | xhs 后台 + `xhs-postmortem` | 周 | Summer |
| 内容 → 引流课付费 → 主课付费 attribution | ⚠️ 0 链路 | 全链路追踪 | `contentAttributions` collection + UTM | 实时 | `content-attribution-tracker`（待建）|
| 评论 → 私域 → EOI conversion | ⚠️ 0 数据 | 待 baseline | `xhs-comment-ops` SOP 数据 | 周 | Summer + Aurora |

### 6.6 数据回收契约总表

> 🚨 当前数据系统 5 个都不存在（待造）。Dev 必须先 ship 这 5 个底座，所有 metrics-collector / progress-tracker / referral-program skill 才跑得动。

| 数据系统 | 状态 | Owner | ETA |
|---------|------|-------|------|
| `cohortProgress` collection（lesson 完成 / Lab 通过 / Quest 提交 / NPS）| 🔴 未建 | Dev | L-14 |
| `contentAttributions` collection（contentId / platform / leadsCount / paidUsers）| 🔴 未建 | Dev | L-14 |
| `referrals` collection（推荐人 / 被推荐人 / 优惠码）| 🔴 未建 | Dev | L+7 |
| `alumni_journey` collection（cohortHistory / coursesEnrolled / nextRecommendedCourse）| 🔴 未建 | Dev | L+30 |
| `QuestSubmission` collection（questId / submissionUrl / aiScore / humanReviewStatus）| 🔴 未建 | Dev | L+7 |
| admin Content ROI tab + Cohort Ops tab + 招生期专用 dashboard | 🔴 未建 | Dev + Aurora | L-7 招生期 dashboard 必须先有 |

---

## §7. 跟 7 个新 deliverable 的关系

本 MASTER 文档不是孤立的，它指挥下游 7 个新 deliverable 共同形成 marketing 生态。

```
MARKETING_WORKFLOW_MASTER.md  ← 本文件（总指挥）
       │
       ├─→ [2 个新 skill]
       │     ├─ /cohort-portfolio-collector  → 02 期学员产出收集 + OFFER WALL wiring
       │     └─ /cohort-launch-ops-tracker   → cohort 三件套（launch SOP + daily ops + progress tracker）
       │
       ├─→ [3 个新 SOP（落到 docs/sop/）]
       │     ├─ SOP_STUDENT_OUTPUT_HANDOFF.md     → C 段产出 → D 段 OFFER WALL → A 段销售页回灌
       │     ├─ SOP_DATA_HANDOFF_B_TO_C.md        → EOI 数据 + 入群名单 → cohort 名单 + 画像
       │     └─ SOP_COHORT_NPS_PIPELINE.md        → W3 / 结业 / D+30 三套问卷 + 守红线
       │
       ├─→ [1 个整合时间轴]（本文件 §2 已展开）
       │     └─ L-28 → D+30 全链路 task 矩阵（待 Lightman 拍板 launch date 后回填具体日期）
       │
       └─→ [1 个 dashboard tab]
             └─ admin / Cohort Ops tab + Content ROI tab + 招生期专用 dashboard
                 (Dev 在数据系统 6.6 上 ship 后才能跑)
```

### 7.1 引用关系

| Deliverable | 消费本文件哪节 | 反过来更新本文件哪节 |
|-------------|--------------|------------------|
| `cohort-portfolio-collector` skill | §2 L-28 启动 / §6.4 KPI | OFFER WALL 张数 → §1 状态板 |
| `cohort-launch-ops-tracker` skill | §2 L-1 / D0 / D+7 / §6.3 KPI | cohort 进度 → §1 Phase C 覆盖率 |
| SOP_STUDENT_OUTPUT_HANDOFF | §6.4 / §3 D→A 衔接 | OFFER WALL 完成度 → §1 状态板 |
| SOP_DATA_HANDOFF_B_TO_C | §3 B→C 衔接 / §2 D+1 | 学员画像数据 → PERSONAS refresh |
| SOP_COHORT_NPS_PIPELINE | §6.3 / §2 D+14 / D+30 | NPS 分数 → §1 Phase C/D 覆盖率 |
| L-28→D+30 时间轴 | 本文件 §2 | 实际执行偏差 → 周报 update §1.4 |
| admin Cohort Ops tab + Content ROI tab | §6.6 数据契约 | 实时 KPI → §1.1 5 phase 健康度 |

---

## §8. 启动顺序（团队下周一就干什么）

> ⚠️ 本节只展开到 Day+7（一周）。等真实数据出来再展开 Day+8 以后。
> 启动前提：本 MASTER 文档已被 Lightman / Aurora / Beta 三人 review 过。

### Day 1（周一）— 拍板 + 启动学员产出收集

| Time | Task | Owner | Output |
|------|------|-------|--------|
| 09:00 - 09:30 | **Lightman 拍板 03 期 launch date + target（50/80/120 三档）+ 早鸟截止日** | Lightman | 决策落到本文件 §0.1 + PROMOTION_PLAN.md §0 + FUNNEL_PLAN.md §0 |
| 09:30 - 10:00 | Aurora 把决策同步到所有 marketing 文档（5 处 `⚠️ 待运营定` 替换成真实日期）| Aurora | 5 文档 update |
| 10:00 - 11:00 | **Beta 启动 `cohort-graduate-portfolio-collector` 给 02 期学员发授权同意表 + 4 大交付物收集表单** | Beta | 02 期 24 学员收到表单 |
| 11:00 - 12:00 | Beta 约 Amelia / Rain / Angela 3 个 INTERVIEW 时段（本周内排满）| Beta | 3 个 30min 会议时段 |
| 14:00 - 17:00 | Dev 启动数据系统：先建 `cohortProgress` + `contentAttributions` 两个 collection schema + 后端 model | Dev | 2 schema PR |
| 14:00 - 16:00 | Aurora 把本 MASTER §1 状态板 print 出来给团队 / 钉群发 | Aurora | 团队知情 |
| 16:00 - 17:00 | HR 出 Marketing 文案兼职 JD（决策 #6 配套）| Lightman + HR | JD 草案 |

### Day 2（周二）— Aurora 用本 MASTER 开周会 + Summer 启动 PERSONAS scrape

| Time | Task | Owner | Output |
|------|------|-------|--------|
| 09:00 - 10:30 | **Aurora 用本 MASTER 给 Marketing + 课程团队开周会**（讲全局状态 + 个人下周任务 + Top 10 优先级）| Aurora | 全团队对齐 |
| 10:30 - 12:00 | Summer 跑 `/persona-ground-truth-scraper init ai-programming --source=xhs,wechat`（10 张截图 + AI 提取）| Summer | `gt-sources/scrape-xhs-2026-MM-DD.json` + scrape-wechat |
| 14:00 - 15:00 | Beta INTERVIEW 第 1 场（Amelia）| Beta + Amelia | `gt-sources/interview-sales-amelia.md` |
| 15:00 - 17:00 | Dev 继续数据系统 + 销售页 CountdownBanner 组件起步 | Dev | 组件骨架 |

### Day 3（周三）— FUNNEL 选项 B 落地启动

| Time | Task | Owner | Output |
|------|------|-------|--------|
| 09:00 - 10:00 | Aurora + Beta 决策 #4：是否做 ¥99 引流课 | Aurora + Beta + Lightman | 拍板（本文件 §4 update）|
| 10:00 - 12:00 | 若 yes：Aurora 用 `/intro-course-design ai-programming-intro-99` 跑 ¥99 引流课设计 | Aurora | `curriculum/ai-programming-intro/` 目录 + 课程 outline |
| 14:00 - 15:00 | Beta INTERVIEW 第 2 场（Rain）| Beta + Rain | `gt-sources/interview-sales-rain.md` |
| 15:00 - 17:00 | Designer 开始做 03 期专属海报（基于已有 8 张迭代）| Designer | poster-v9.html 起步 |

### Day 4（周四）— 销售页 Mode B 升级 + 公众号长文 1

| Time | Task | Owner | Output |
|------|------|-------|--------|
| 09:00 - 12:00 | Dev + Beta 跑 `course-custom-landing` Mode B：加 OFFER WALL 占位 + Faculty 占位 + 03 期 commenceCourseDate banner | Dev + Beta | 销售页 content.ts update PR |
| 10:00 - 16:00 | 文案（或兼任）写公众号长文 1「不会代码做出可上线产品」用 `blog-longform-writer` + `wechat-article-quality` 审 | 文案 | 长文 + 评分 ≥ 80 |
| 14:00 - 15:00 | Beta INTERVIEW 第 3 场（Angela）| Beta + Angela | `gt-sources/interview-sales-angela.md` |
| 16:00 - 17:00 | Summer 把 2 天前 scraper 结果 + 3 场访谈语料合并 → 跑 `/target-user-persona-mapper validate ai-programming` | Summer + Beta | PERSONAS.md GT 0.55 → 0.75 |

### Day 5（周五）— 第 1 周复盘 + 周报

| Time | Task | Owner | Output |
|------|------|-------|--------|
| 09:00 - 11:00 | Aurora 跑 `course-promotion-architect weekly ai-programming`（生成本周报 + 下周 task）| Aurora | PROMOTION_PLAN.md §6 周报 update |
| 11:00 - 12:00 | 02 期学员产出回收进度对账（Beta vs 表单实际收到数）| Beta | 收到张数 / 24 |
| 14:00 - 17:00 | 全团队碰头：本周完成的 / 未完成的 / 下周风险 | Aurora 主持 | §1 状态板 update |

### Day 6-7（周末）— 缓冲 + 数据系统继续

| Day | Task | Owner |
|-----|------|-------|
| Sat | Dev 数据系统 `cohortProgress` + `contentAttributions` 测试环境 ship | Dev |
| Sun | 缓冲日（不强制工作）| — |

### 🚨 第 1 周交付判据

完成下面 5 项才算第 1 周 OK：

- [ ] Lightman 03 期 launch / target / 早鸟 拍板（决策 #1-3）
- [ ] 02 期学员产出表单已发（24 学员收到）
- [ ] PERSONAS GT 升到 0.75+
- [ ] 销售页 Mode B 升级 PR merge（OFFER WALL + Faculty 占位 + 03 期 banner）
- [ ] `cohortProgress` + `contentAttributions` collection schema PR merge

任意 1 项没完成 → 第 2 周 standup 第一件事就是讨论它，不准跳过。

### 🚨 第 1 周不写什么

- 不写第 8 天之后的具体日程 — 等真实数据 + 真实进度出来再排
- 不一次写完 11 账号矩阵的 9 篇/周（等 GT 0.75 完成后第 2 周再启动 Summer 真实切角）
- 不启动数据系统全 6 个 collection（先 ship 最关键 2 个 → 测了对再扩）

---

## §9. 维护规则

| Trigger | 操作 | 谁做 |
|---------|------|------|
| 03 期 launch date 拍板 | 本文件 §0.1 / §2 所有 `L` 替换为具体日期 / 通知 5 个 marketing 文档 update | Aurora |
| PERSONAS GT 升级（0.55→0.75）| §1.2 gap #2 状态 update / §1.3 影响重审 | Beta |
| 数据系统 collection ship | §6.6 状态 update / §1.4 Top 10 中相关项 ETA update | Dev |
| 每周一晨会 | §1.4 Top 10 owner / status / ETA update | Aurora |
| 每月末 | 跑 `course-promotion-architect audit ai-programming` 复盘 5 phase 覆盖率 → §1.1 update | Aurora + Beta |
| 03 期开课 30 天后 | 用真实数据 refresh PERSONAS + FUNNEL_PLAN + 本 MASTER → 喂 04 期 init | Beta + Aurora |
| 04 期 init | 跑 `course-promotion-architect init ai-programming --launch=L4` 喂本 MASTER 作为依赖 | Aurora |

---

## §10. 红线回顾（每次更新本文件都 cross-check）

> 来自 CLAUDE.md 顶级铁律 + funnel-handoff-design / xhs-review。任何 task / 文案 / SOP 违反这些就 reject。

1. **不承诺金钱 / 副业 / 入职 / offer / 月入**
   - 本课承诺：4 个真实可上线作品 + 33 工具 + 8 种产出能力 = **过程承诺**
   - 禁用：「包做出 APP」「学完月入 X」「副业接单」「包就业」
2. **不假紧迫感**
   - 销售页「前 10 名」必须读 admin `cohort.remainingSeats` 真实数据
   - 不允许静态硬编码倒计时
3. **不假承诺 ground truth**
   - PERSONAS 字段是 AI 推测就必须标 ⚠️
   - 销售页 testimonial 必须是 02 期真实学员授权过的
4. **数据不编造**
   - KPI baseline 是 ⚠️ 未追 就写 ⚠️ 未追，不写假估值
   - 公众号长文里出现的「学员张三零基础做出网站」必须是真实学员
5. **不在 repo 生成 pptx / docx 二进制** — 演示用 Canva / Google Slides

---

## §11. 状态快速看（chatops 命令清单）

如果团队问「现在到哪了 / 缺什么」直接复制下面命令跑：

```bash
# 看本 MASTER 状态板
cat curriculum/ai-programming/MARKETING_WORKFLOW_MASTER.md | head -200

# 看 5 phase 覆盖率
grep "覆盖率" curriculum/ai-programming/MARKETING_WORKFLOW_MASTER.md

# 看 Top 10 优先级
sed -n '/Top 10/,/系统性 Gap/p' curriculum/ai-programming/MARKETING_WORKFLOW_MASTER.md

# 看 8 个待拍板决策
sed -n '/决策点/,/责任矩阵/p' curriculum/ai-programming/MARKETING_WORKFLOW_MASTER.md

# 看下周一干什么
sed -n '/Day 1（周一）/,/Day 6/p' curriculum/ai-programming/MARKETING_WORKFLOW_MASTER.md

# 看 GAP_AUDIT 原始 76 task 细节
cat curriculum/ai-programming/MARKETING_WORKFLOW_GAP_AUDIT.md
```

---

## §12. FAQ（团队常问）

**Q1: 我是新人，第一次打开这个文档，先看哪里？**
A: 按顺序：§0.1（课程基础真相）→ §1（全局状态板）→ §5（自己角色 RACI）→ §8（下周一干什么）。看完 30 分钟有全局观。

**Q2: 我是 Aurora，今天要开周会，该用哪节？**
A: §1.4 Top 10 + §2 当前所在时间点（L-28 / L-21 等）+ §8（如果还在第 1 周）。

**Q3: 我是 Beta，我现在最该做什么？**
A: §4 决策 #1 催 Lightman 拍板 + §2 L-28 三件事（PERSONAS 访谈 / 学员产出收集 / 销售页定位）+ §6.4 启动 OFFER WALL。

**Q4: 我是 Dev，数据系统从哪开始？**
A: §6.6 → 优先 `cohortProgress` + `contentAttributions` 两个 collection（L-14 deadline）。

**Q5: 03 期 launch date 还没定，我能干什么？**
A: 所有 `L-N` task 仍然可以启动（PERSONAS GT 拉升 / 02 期作品收集 / 数据系统 / 文案兼职 JD）— 这些是 launch-independent 的。不要等。

**Q6: 02 期学员我能采访谁？**
A: Beta 手里有 cohort 名单。优先采访：(a) 完成 4 大交付物的 (b) 在群里活跃的 (c) 自我介绍说「零基础」的。每个 30 min INTERVIEW。

**Q7: 这个文档跟 PROMOTION_PLAN.md 有啥区别？**
A: PROMOTION_PLAN = 单期 cohort 的具体推广方案（渠道 + 周排期）；本 MASTER = 跨 cohort + 跨 marketing 系统的总指挥（state / decision / dependency / data contract）。本 MASTER 消费 PROMOTION_PLAN，不替代。

**Q8: 这个文档跟 GAP_AUDIT 有啥区别？**
A: GAP_AUDIT = 诊断报告（哪里漏多少）；本 MASTER = 执行调度（这周谁干什么）。GAP_AUDIT 是只读快照，本 MASTER 持续更新。

---

> 文档版本：v1.0 · 2026-05-29 创建
> 维护人：Aurora（每周一晨会 update §1.4 / §6 KPI / §8 进度）
> review 人：Lightman + Beta
> 下次大版本 v2：03 期 launch + target 拍板后 / GT 升 0.75 后 / 数据系统 2 collection ship 后（任一触发就 v2）
