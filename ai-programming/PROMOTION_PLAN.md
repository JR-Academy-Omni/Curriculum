# 人人都能学的 AI Coding 实战课 推广方案 PROMOTION_PLAN.md

> 由 `/course-promotion-architect init` 生成 · 2026-05-28 · **enhanced 2026-05-29 with real prod data**
> 维护人：Aurora / Seren（Marketing 主管）+ Mason（课程主理人）+ Lightman 把关
>
> ✅ **2026-05-29 更新**：定价 / cohort / 销售页文案全部用真实 production 数据替换原占位。FUNNEL_PLAN.md 已建（推荐选项 B + ¥99 引流课）。
> 🚨 **仍存在的 1 个硬依赖**：PERSONAS.md GT 覆盖率 0.25 → enhance 后 0.55（合格阈值刚过）。强力推荐继续跑 INTERVIEW × 2 + scraper × 3 源升到 0.75+ 让方案更稳。

---

## 0. Meta

| Field | Value |
|-------|-------|
| Course Slug | ai-programming |
| Course 中文名 | 人人都能学的 AI Coding 实战课 |
| Prod Training ID | `68d27c49150c9d0071939f7a` |
| **🎯 Course Type** | **Type 2 · Bootcamp 在职提效** + **Type 6 · 引流课**（推荐组合，详 FUNNEL_PLAN.md 选项 B）|
| 类型识别理由 | 6 周基础 / 8 周进阶多周课 + 33 工具 + 4 大可上线交付物 + 非技术转型人群为主 + 不主打 offer / 不主打 VC |
| **🧑 PERSONAS.md 状态** | ✅ enhanced 0.55 GT（2026-05-29）— 阈值刚过，可用 |
| PERSONAS.md 引用 | [./PERSONAS.md](./PERSONAS.md) — 2026-05-28 v0 → 2026-05-29 enhance |
| FUNNEL_PLAN.md 引用 | [./FUNNEL_PLAN.md](./FUNNEL_PLAN.md) — 2026-05-29（推荐选项 B：¥99 引流 + 现 2 档）|
| **真实定价**（AUD 预售）| **基础班 6 周 $860**（原 $960）/ **进阶班 8 周 $1360**（原 $2080）|
| 多币种 | USD $559/$884 · CNY ¥4042/¥6388 · SGD/MYR/GBP 已配 |
| **02 期 launch date** | 2025-11-16（已开）|
| **03 期 launch date** | ⚠️ 待运营 / Mason 定 — 推广节奏强依赖此日期 |
| **目标 Target Enrollment** | ⚠️ 待 Aurora + Mason 拍板（§2 给 50 / 80 / 120 三档反推参考）|
| Status | active（销售页跑着 + 02 期已开课）|
| Created | 2026-05-28 by `/course-promotion-architect init` |
| Updated | 2026-05-29 with real prod data (curl prod 销售页 + prod-state.json) |
| Related Docs | [PERSONAS.md](./PERSONAS.md) / [FUNNEL_PLAN.md](./FUNNEL_PLAN.md) / [DESIGN.md](./DESIGN.md) / outline.json / custom landing content.ts |

---

## 0.5. Production Reality Update 2026-05-29

**🎯 5/29 完成 marketing workflow 完整系统**：当日产出 7 个新 deliverable，把 5 phase × 76 task 的 GAP_AUDIT 从「诊断报告」翻译成「下周一就能干」的执行包：
- `MARKETING_WORKFLOW_MASTER.md` — 全局总指挥（统领本文件 + FUNNEL + PERSONAS + AUDIT_LOG + 3 SOP + 2 新 skill）
- `EXECUTION_TIMELINE.md` — W1 → W4+ 团队下周一开干的 task 派单时间轴（ASCII 图 + 04 期 launch date 决策辅助）
- `MARKETING_WORKFLOW_GAP_AUDIT.md` — 5 phase × 76 task 缺口诊断 + 5 系统性 gap + 12 优先级 task
- `sops/COHORT_GROUP_OPERATIONS_SOP.md` — 班级群日常运营 SOP（早报 / 进度 / 晚总结 / 答疑收口）
- `sops/STUDENT_OUTPUT_COLLECTION_SOP.md` — 学员作品收集 SOP（截图 + 1 句话 + 同意书三段式）
- `sops/ALUMNI_NURTURE_LOOP.md` — 老学员推下一期 / 推 ai-engineer SOP
- `.claude/skills/cohort-ops-conductor/SKILL.md` — Phase C 课程运营总指挥 skill（填补 7% 黑洞）
- `.claude/skills/marketing-data-collector/SKILL.md` — 全渠道数据回收 skill（填补 B/C/D/E 数据回收失效）

**已经在卖的真实状态**：

| 维度 | 真实状态 |
|------|---------|
| 销售页 | ✅ Custom landing 已上线（5 文件 19KB · `program-course/ai-programming/`）|
| 6 KILL POINTS | ✅ 已在 content.ts 写好（零基础 / 4 交付物 / 33 工具 / 双班型 / Lab+Quest / 答辩制）|
| 4 大交付物 | ✅ PPT(HTML) / PDF 全家桶 / Landing Page / 60s 视频 已详描 |
| Faculty | ⚠️ 销售页未列 Faculty 实名（不像 ai-engineer-bootcamp 有 5 张校友 OFFER）|
| 02 期 Cohort | ✅ 已开课 113 lessons 完整 |
| 校友作品 / 反馈 | ❌ content.ts 还没加（参考 ai-engineer-bootcamp v1.6 OFFER WALL 模式可补）|
| FAQ | ✅ 6 条已写（编程基础 / 时间 / 工具费 / 学习方式 / 学完做什么 / 双班选择）|
| 海报 | ✅ 8 张 (poster-v1 ~ v6 + poster.html + xhs-posters 文件夹) |
| ¥99 引流课 | ❌ 未做（FUNNEL_PLAN 选项 B 推荐做 — Phase 0 可直接拆出来）|
| 7 天过渡序列 | ❌ 未做 |
| 03 期开课倒计时 banner | ❌ 03 期日期未定，无法做 |

---

## 1. 课程定位摘要

> 🧑 目标用户画像见 [./PERSONAS.md](./PERSONAS.md)（2026-05-28，⚠️ AI 初稿未验证）

**One-liner**（来自 outline.json）：
- 中文：零基础用 Cursor + AI 从想法到产品上线
- English：Zero to product with Cursor + AI

**目标人群**（来自 outline.json，PERSONAS 待验证）：
- A · 非技术创业者（有 idea 请不起开发团队）— 核心 ~40% ⚠️
- B · 传统行业转型者（市场/运营/教师想加 AI 技能）— 核心 ~35% ⚠️
- C · 在校学生 / 应届（作品集/求职）— 边缘 ~20% ⚠️
- ❌ 不是目标：资深程序员（去 ai-engineer-bootcamp / ai-builder）

**关键卖点**（来自 outline.json highlights）：
1. 零基础友好 — 从"打开浏览器"教起，不学编程语法
2. 基础班 6 周交付 5 件可上线真作品（PPT/PDF/网站/自动化/视频）/ 进阶班 8 周加 Chatbot/Admin CMS/Dashboard
3. Cursor + AI 实操，每节课带互动 Lab（不是干看视频）

**主推内容角度**（Type 2 在职提效 playbook Top 3 × PERSONAS 痛点，⚠️ persona 待验证后才能定原话）：
1. ⭐⭐⭐⭐⭐ "学完当晚能用 / 做出能上线的真产品"（quick win + 作品导向）
2. ⭐⭐⭐⭐⭐ "零基础不学语法，用中文写代码"（破除"我学不会编程"心理门槛）
3. ⭐⭐⭐⭐ "跟你一样不懂代码的人做出了产品"（同类案例，破除疑虑）

**承诺红线**：❌ 不写"包做出 APP / 月入 / 靠这个变现 / 包就业"；✅ 只承诺"做出 1 个可上线产品 + 5 件作品 + 掌握 Cursor 工作流"。

---

## 2. 目标与漏斗反推

> ⚠️ **以下全是示例占位**（target=50），真实数字待 launch + target + FUNNEL_PLAN 定。公式来自行业基线，不是 ai-programming 实测。

```
报名目标：示例 50 人
  ↓ 主课转化率：假设 5%（行业基线）
加微信目标：~1000 人
  ↓ 渠道分摊（Type 2 基线，⚠️ persona 未验证不可作权威）
  - 小红书种草：~400 UV（40%）
  - 公众号长文：~200 UV（20%）
  - 讲座直播：~200 UV（20%）
  - SEO + 自然：~100 UV（10%）
  - 其他（朋友圈/视频号）：~100 UV（10%）
```

⚠️ 待补 ground truth：launch date / target / 定价 / 是否有引流课 / 历史同类课转化率。**全部需要 FUNNEL_PLAN.md + 真实数据。**

---

## 3. 渠道矩阵（⚠️ 待验证草稿）

> 🚨 因 PERSONAS coverage 25%，本表是 Type 2 playbook 行业基线 + 课程内容推测，**不是 persona 反推的权威清单**。补完 persona 后跑 `/target-user-persona-mapper export-channels ai-programming` 重算。

### 启用渠道（Type 2 基线）

| 渠道 | 主负责 | 子 skill | 频次（Type 2 基线）| 本课适配备注 |
|------|--------|---------|------------------|------------|
| 1. 小红书种草 | Summer | xhs-topic-picker→draft→poster→review | 9 篇/周 | 三 persona 都在小红书（推测），主战场 |
| 2. 公众号长文 | 文案 | blog-longform-writer + wechat-article-quality | 1-2 篇/周 | B 转型者深度阅读 |
| 3. 线上讲座 | Mason | webinar-topic-feasibility | 2-3 场 | "零基础做出第一个产品"试听爆点 |
| 4. 海报套图 | Designer | poster-user-test | 3-4 套 | 主色 #FF7B5A 暖珊瑚（DESIGN.md）|
| 5. SEO 长尾 | Dev | seo-optimizer + eeat-optimizer | 一次性 + 月度 | "零基础 AI 编程 / Cursor 教程 / 不会代码做网站" |
| 6. 销售页 | Dev + Mason | course-custom-landing | T-21 上线 | 零基础人群尤其需要"fit feeling"页面 |
| 7. EOI/试听跟进 | Amelia + Neomi | eoi-followup | 讲座后 24-72h-7d | 零基础人群决策慢，跟进很关键 |

### ❌ 暂不启用

| 渠道 | 原因 |
|------|------|
| 线下活动 | Type 2 可选，零基础大众线上更高效，除非重点城市有资源 |
| LinkedIn | 主中文站，目标人群不在 LinkedIn（待确认是否做英文站）|
| 私域 1v1 | 仅 rescue 期 |
| 付费投放 | ⚠️ Lightman 拍板，首期默认不投 |

---

## 4. 时间轴 Task 矩阵（先给近期 2 个时间点，待 launch 确认后展开全程）

> skill 规范：init 不一次写完全部 task，先出最近 2 个时间点让你确认节奏对不对。
> ⚠️ 以下 task 的"周几"是 Type 2 节奏示意，**真实日期待 launch date 锁定后回填**。
> 🚨 启动前提：必须先补 persona（task 见 PERSONAS.md §7）+ 定 launch/target + 销售页（task 6）。

### T-21（开班前 3 周）— 地基

| Time | Task | 负责 | 分工 | Skill | 耗时 | 优先级 | 完成判据 |
|------|------|------|------|-------|------|------|---------|
| 周一 09:00 | 补 persona 真实访谈（PERSONAS §7 task 1+2+5）| Mason+顾问 | ✏️ | target-user-persona-mapper | 1d | **P0 前置** | coverage 过 50% |
| 周一 14:00 | 定 launch date + target + 定价（出 FUNNEL_PLAN）| Aurora+Mason+Lightman | ✏️ | course-funnel-architect | 半天 | **P0 前置** | FUNNEL_PLAN.md v1 |
| 周二 09:00 | 启动销售页（零基础人群强 fit feeling）| Dev | ✏️ | course-custom-landing | 5d | P0 | UAT 可访问 |
| 周二 11:00 | 第 1 场讲座 topic 审"零基础 30 分钟做出第一个网页" | Mason | 🤖→✏️ | webinar-topic-feasibility | 2h | P1 | 评分 ≥ 80 |
| 周三 09:00 | 小红书第 1 周选题（persona 验证后定切角）| Summer | 🤖→✏️ | xhs-topic-picker→draft→poster→review | 3h | P1 | 9 稿入库 |
| 周三 14:00 | SEO 关键词调研 + 销售页 metadata | Dev | 🤖→✏️ | seo-optimizer | 3h | P1 | 20 长尾词 + metadata 上线 |
| 周四 10:00 | 公众号长文 1「不会代码的人怎么用 AI 做出能上线的产品」| 文案 | 🤖→✏️ | blog-longform-writer + wechat-article-quality | 6h | P1 | 评分 ≥ 80 发布 |

### T-14（开班前 2 周）— 流量 + 试听

| Time | Task | 负责 | 分工 | Skill | 耗时 | 优先级 | 完成判据 |
|------|------|------|------|-------|------|------|---------|
| 周一 09:00 | 销售页上线 prod + GTM 埋点 | Dev | ✏️ | — | 2h | P0 | prod 可访问 + 转化事件上报 |
| 周一 11:00 | 海报第 1 套（主色 #FF7B5A）+ user-test | Designer+Marketing | ✏️ | poster-user-test | 1d | P1 | 6 persona 选 3 反馈 |
| 周二 19:30 | 第 1 场讲座（试听性质，现场做出一个网页）| Mason | ✏️ | — | 1.5h | P1 | 在线 ≥ 60 |
| 周三 09:00 | 第 1 场讲座 EOI 派单 + 24h SLA | Neomi+顾问 | ✏️ | eoi-followup | 4h | P0 | 100% 24h first contact |
| 周三起 | 小红书第 2 周 9 稿（学员/讲师做出的真产品截图）| Summer | 🤖→✏️ | xhs 四件套 | 3h | P1 | 9 稿入库 |
| 周四 10:00 | 公众号长文 2（学员零基础做出产品的故事）| 文案 | 🤖→✏️ | blog-longform-writer | 6h | P1 | 发布 |
| 周五 16:00 | 周回顾 + 招生进度 review | Aurora+Lightman | ✏️ | course-promotion-architect weekly | 1h | P0 | 周报更新 |

### T-7 / T-3 / T-1 / D0 / D+N

⚠️ 待 launch date 锁定后用 `/course-promotion-architect` 展开（参考 TASKS_LIBRARY.md Type 2 裁剪：T-21→D+30）。

---

## 5. 责任分配（RACI）

| 角色 | Name | Primary 负责 |
|------|------|------------|
| Lightman | — | 定价/launch/target 拍板 / 红线 / 付费审批 |
| Marketing 主管 | Aurora / Seren | 跨渠道排期 / 周报 / KPI |
| 新媒体 | Summer / Lily / KIKI | 小红书选题+写+配图+发 |
| Marketing 文案 | — | 公众号 / 销售页文案 / 海报文案 |
| 课程主理人 | Mason | persona 验证 / 讲座主持 / 销售页定位 / 定价 |
| 课程顾问 | Amelia / Rain / Angela | 1v1 跟进 24-72h-7d |
| 销售助理 | Neomi | EOI 派单 / SLA |
| Designer | — | 海报（主色 #FF7B5A）/ banner |
| Dev | — | 销售页 / SEO / 埋点 / 报名表单 |

⚠️ 待补：当前团队是否齐？缺岗在此标 🚨。

---

## 6. 周报 + 关联文档（每周一晨会更新，永不删旧周）

### 关联文档（5/29 marketing workflow 系统完工 — 全部入索引）

| 文档 | 路径 | 角色 |
|------|------|------|
| **MASTER 总指挥** | [MARKETING_WORKFLOW_MASTER.md](./MARKETING_WORKFLOW_MASTER.md) | 全局状态板 + 5 phase 覆盖率 + 单一真相入口 |
| **执行 TIMELINE** | [EXECUTION_TIMELINE.md](./EXECUTION_TIMELINE.md) | 团队下周一开干 W1 → W4+ task 派单时间轴 |
| **GAP_AUDIT 诊断** | [MARKETING_WORKFLOW_GAP_AUDIT.md](./MARKETING_WORKFLOW_GAP_AUDIT.md) | 5 phase × 76 task 缺口 + 12 优先级 + 5 系统性 gap |
| **班级群运营 SOP** | [sops/COHORT_GROUP_OPERATIONS_SOP.md](./sops/COHORT_GROUP_OPERATIONS_SOP.md) | Mason / Beta 助教每日跑 cohort 班级群 |
| **学员产出收集 SOP** | [sops/STUDENT_OUTPUT_COLLECTION_SOP.md](./sops/STUDENT_OUTPUT_COLLECTION_SOP.md) | OFFER WALL / xhs / 公众号 素材来源 |
| **Alumni Nurture SOP** | [sops/ALUMNI_NURTURE_LOOP.md](./sops/ALUMNI_NURTURE_LOOP.md) | 老学员推下一期 + 推 ai-engineer 闭环 |
| **cohort-ops-conductor skill** | [.claude/skills/cohort-ops-conductor/SKILL.md](../../.claude/skills/cohort-ops-conductor/SKILL.md) | Phase C 运营总指挥（填补 7% 黑洞）|
| **marketing-data-collector skill** | [.claude/skills/marketing-data-collector/SKILL.md](../../.claude/skills/marketing-data-collector/SKILL.md) | 全渠道数据回收（填补数据回收失效）|

### Week of 2026-05-28（init）
- ✅ 完成：PERSONAS.md AI 初稿 + PROMOTION_PLAN.md 骨架
- ⚠️ 阻塞：persona coverage 25% / launch/target/定价全待补 / 无 FUNNEL_PLAN
- 🎯 本周目标：① 补 persona 真实访谈 ② 定 launch+target+定价 ③ 启动销售页
- 🚨 风险：未补 persona 前所有渠道决策不可信

### Week of 2026-05-29（marketing workflow 系统完工）
- ✅ 完成：MASTER + TIMELINE + GAP_AUDIT + 3 SOP + 2 skill（7 deliverable）
- ⚠️ 阻塞：03 期 launch date 仍待 Lightman 周一拍板；marketing 文案岗仍未指派
- 🎯 下周目标（W1）：① Lightman 拍 launch date ② Mason 启动 02 期学员产出收集 ③ Aurora 跑首次 daily metrics ④ Mason 启动 02 期班级群 SOP ⑤ Marketing 文案岗 JD 发布
- 🚨 风险：Phase C 黑洞 7% → 如果 02 期班级群 SOP W1 没跑通会继续恶化

---

## 7. 风险与决策日志

| 日期 | 事件 | 决策 | 影响 |
|------|------|------|------|
| 2026-05-28 | init 跑出骨架 | 标双重待补（persona + launch/target）| 补全前不可执行 |
| 2026-05-28 | persona coverage 25% | 渠道清单降级为"待验证草稿" | 补访谈后 export-channels 重算 |
| — | ⚠️ 客单价未定可能改变课程类型 | 若 < ¥999 滑向 Type 2+6（加引流课）| 待 FUNNEL_PLAN 定 |

---

## 8. 调用子 skill 索引

| Skill | 用途 | 触发频次 | 责任人 |
|-------|------|---------|--------|
| target-user-persona-mapper | persona 验证（前置）| 立即 + 季度 | Mason |
| course-funnel-architect | 定价/引流/三档（前置）| 立即 | Aurora+Mason |
| course-custom-landing | 销售页 | T-21 | Dev+Mason |
| xhs 四件套 | 小红书 9 篇/周 | 每周 | Summer |
| blog-longform-writer + wechat-article-quality | 公众号 1-2/周 | 每周 | 文案 |
| webinar-topic-feasibility | 讲座 topic 审 | 每场前 | Mason |
| poster-user-test | 海报侧测 | 每套 | Marketing |
| seo-optimizer + eeat-optimizer | SEO | 一次性+月度 | Dev |
| eoi-followup | 试听/讲座后跟进 | 每 lead | Neomi+顾问 |
| course-promotion-architect weekly/audit | 周报/诊断 | 每周一 | Aurora |
| **cohort-ops-conductor**（🆕 5/29 新建）| **cohort 全周期运营（D-1 → 结业）填补 Phase C 7% 黑洞** | **每日 / 每周** | **Mason + Beta 助教** |
| **marketing-data-collector**（🆕 5/29 新建）| **全渠道数据回收 daily（xhs + 公众号 + 销售页 + EOI + 班级群）** | **每日 cron 08:00** | **Aurora** |

---

## 维护规则

- 补全 persona + launch + 定价后 → 重跑 `/course-promotion-architect init ai-programming --launch=X --target=N` 展开完整时间轴
- 每周一 → `/course-promotion-architect weekly ai-programming`
- 开班结束 → `postmortem` 回写 FUNNEL_PLAN.md
