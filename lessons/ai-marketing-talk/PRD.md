---
title: 网页版讲座《新时代的 AI Marketing — 一个人 = 一支营销队伍》PRD
status: build
owner: @lightman
priority: high
---

> ⚙️ **v0.4 build（已部署 + 广告位）**：deck 工程已建在本目录（React 19 + Vite + SlideEngine，主题色 `#E63977`）。当前 **46 页**：双 Poll 开场（P50/P95 立论，克隆 `ai-engineer-resume-interview` S02–S05）+ 5 转变 + 5 级阶梯 + Master/SoT + 一人公司/AI Coding 必会 + 双轴自检导流 + 合作伙伴收尾。**广告位 ×3（重点推 OPC 一人创业营）**：S16b CH2 热度顶点插播广告（OPC 钩子 + 二维码）、S29 价格卡加二维码、S31b Q&A 挂屏大广告（OPC 大码 + AI Coding 小码）。两课二维码已生成（`public/qr/{opc,coding}.png`，指向 `/program-course/` 落地页，curl 实测 200）。`bun run build` 通过（tsc 0 / vite 465 模块）。本地讲：`cd curriculum/lessons/ai-marketing-talk && bun run dev`。**deploy.yml 已注册 + lessons.html 已加卡片**，线上地址 `jiangren.com.au/curriculum/lessons/ai-marketing-talk/`。待办：CH2 现场 demo 接真实 case 素材。

# PRD · 网页版讲座《新时代的 AI Marketing》

> 文档类型：产品需求文档 (PRD)
> 版本：v0.1（待 sign-off → 今晚要讲，按 §4 快通道走）
> 项目代号：`ai-marketing-talk`
> Lesson 目录：`curriculum/lessons/ai-marketing-talk/`
> 线上地址（部署后）：`jiangren.com.au/curriculum/lessons/ai-marketing-talk/`
> 主题色：`#E63977`（玫红 · 与 `curriculum/ai-marketing/` 营销课线品牌对齐）

---

## 0. 项目背景与目标

### 0.1 业务背景

- **这是一场独立的公开讲座 PPT**（网页版，非 pptx），主题是「新时代怎么做 AI Marketing」，~2 小时，配现场 demo。
- **真正目的不是讲营销技巧，是导流**：讲座是漏斗顶部，结尾自然收口到两门付费课 ——
  - 『**人人都能学的 AI Coding 实战课**』（`ai-programming`）= 把产品**做得出**
  - 『**AI 一人创业营**』（`ai-solo-founder-bootcamp`）= 把做得出 + 卖得动组装成**自己的公司**
- **复用已验证资产**：`curriculum/lessons/ai-new-jobs-talk/` 的 CH5（Z01–Z07）是一条现场反馈最好的「AI Adoption 营销 pipeline 5 级阶梯」，配套 `xhs/case-T01/` 有同一选题跑完每一级的真实成品。本讲座把这条阶梯**抽出来做主体**并加现场 demo，不从零造。
- **听众**：混合背景（在职专业人士 / 创业者 / 求职转型 / 留学生），中文为主。

### 0.2 核心主线（整场只讲清楚这一件事）

> **新时代的营销不再是一个"部门"，而是一个人 + 一套 AI 工具链跑通的闭环。**
> - 会 AI Marketing = 一个人能把东西**卖得动**
> - 会 AI Coding = 一个人能把东西**做得出**
> - 把两件事组装起来 = 一家你自己的公司（一人公司）

这条线让结尾两门课"自然长出来"，不是硬切广告。**讲座本身就是一次 AI Marketing 的现身演示**（结尾点破）。

### 0.3 学习目标（Learning Outcomes）

听众听完应该能：

1. **换脑** — 说清新时代 AI Marketing 的 5 个结构性转变（不是"AI 帮你写文案"那种烂大街认知）。
2. **自检定位** — 用「AI Marketing 成熟度 5 级阶梯」判断自己现在卡在哪一层（朴素 ChatGPT → 模板化 → 多平台 Master/Variant → 反馈闭环 → 企业记忆）。
3. **看见落差** — 通过同一选题跑 5 级的对照 demo，亲眼看到"我用的 AI"和"真正的 AI pipeline"差多远。
4. **拿到下一步** — 知道往上爬缺的是什么能力（搭 pipeline / 接 skill+API → AI Coding）、想要终态该走哪条路（一个人 + 有记忆的 AI 系统 = 一人公司）。

### 0.4 交付物

- 一份 **~48 页网页版 slides**（React 19 + framer-motion + inline styles，Neo-Brutalism，主题色 `#E63977`）
- 部署到 `jiangren.com.au/curriculum/lessons/ai-marketing-talk/`
- 现场讲 + 录播后做引流素材；后续可按 `talk-to-xhs-posters` 扩成小红书系列
- 配套：结尾两门课入口卡 + EOI 留资二维码

---

## 1. 讲座内容大纲（~48 页 · 弹性 110–120 分钟）

### 1.1 整体节奏

| 章节 | 页数 | 时长 | 干什么 |
|---|---|---|---|
| CH 0 · 开场 + 立论 | 5 | 12 min | 反差钩子 + 主线"做得出+卖得动=一人公司" + 今晚承诺 |
| CH 1 · 换脑：5 个结构性转变 | 8 | 18 min | 新时代 AI Marketing 到底新在哪（认知层） |
| **CH 2 · 主体：AI Marketing 成熟度 5 级阶梯** | **16** | **42 min** | 同一选题跑 5 级 + 现场 demo（**全场王牌**） |
| CH 3 · 升维：营销只是一半 | 8 | 22 min | 卖得动 + 做得出 = 一人公司引擎（桥接两门课） |
| CH 4 · 落地：你卡在哪一层 + 入口 | 7 | 16 min | 诊断 CTA + 两门课作为"下一台阶" + EOI |
| Q&A | 4 | 10 min | 引导问题 + 资源链接 |

**总计**：~48 页。**现场 demo 是这场讲座的命门** —— AI Marketing 讲座最忌纯讲，必须边讲边用 AI 当场出东西，观众才信"一个人真能干完一个团队的活"。

### 1.2 Slide-by-Slide Spec

#### **CH 0 · 开场 + 立论**（5 页 / 12 min）

1. **S01 · 封面** — 主标题《新时代的 AI Marketing》/ 副标题《一个人 = 一支营销队伍》/ JR logo / 日期。主题色 `#E63977` 大色块。
2. **S02 · 一个真实反差** — Pieter Levels / Marc Lou / Tony Dinh 这类**一个人**做到 $30k–100k MRR 的 indie hacker 不再是孤例，而是可复制 playbook。左"过去一个营销团队的活"vs 右"现在一个人 + AI 工具链"。
3. **S03 · 今晚的主线** — 一张图：**做得出（coding）+ 卖得动（marketing）= 一人公司**。今晚我们练"卖得动"这条腿。
4. **S04 · 今晚的承诺 + 红线** — 听完你能(1)换脑(2)自检卡在哪一层(3)看见落差(4)拿到下一步。**明确不承诺**：不教你月入多少、不是副业幻想、不包就业 —— 只讲**能力、作品、能自己跑的 pipeline**。
5. **S05 · 一个反直觉的开场问句** — "你以为的'用 AI 做营销'，和真正的 AI Marketing，差了 4 个段位。" → 引出 CH1。

#### **CH 1 · 换脑：新时代 AI Marketing 的 5 个结构性转变**（8 页 / 18 min）

> 认知层。不讲"AI 帮你写文案"，讲 5 个**结构性**转变。第 2 条（GEO）和第 5 条（真实性溢价）是最有信息差的弹药。

6. **S06 · 章节封面** — "营销的底层逻辑，这 18 个月被换了一遍"
7. **S07 · 转变① 从拼产能 → 拼判断力** — 内容边际成本→0。"AI 让所有人都能写一万篇，于是**写什么、为什么写**变成唯一护城河。"
8. **S08 · 转变② 从 SEO → GEO** — 用户不再 Google 十个蓝链，而是问 ChatGPT / Perplexity 一个答案。营销目标从"排第一"变成"**被 AI 当答案说出来**"。金句："你妈已经不 Google 了，她问 AI。"（对应 ai-marketing 课 W2 GEO 模块）
9. **S09 · 转变③ 从人推人 → agent 推流程** — 私域客服 / 线索分层 / 跟进 SOP 交给 agent 7×24 跑。"一个 agent = 一个不睡觉、不离职、不闹情绪的运营团队。"
10. **S10 · 转变④ 从月底复盘 → 实时心电图** — AI 每天读数据告诉你哪条素材该停、哪个角度加投。"复盘从'事后尸检'变成'实时心电图'。"
11. **S11 · 转变⑤ 真实性溢价（反直觉但最重要）** — AI 内容泛滥 → 真人 / 真案例 / 真数据 / 真踩坑反而成稀缺信号。"AI 越多，**人味越值钱** —— 人味是 AI 时代最后的奢侈品。"（呼应禁模版化红线）
12. **S12 · 5 个转变汇总卡** — 一张总览（旧范式 → 新范式 + 一句钩子）。
13. **S13 · 转场** — "道理听完了。但 90% 的人听完还是在用最原始的方式。我们来看实际差多少。" → 引出 CH2 阶梯。

#### **CH 2 · 主体：AI Marketing 成熟度 5 级阶梯**（16 页 / 42 min）🔥 全场王牌

> **复用 `ai-new-jobs-talk` 的 Z01–Z07 阶梯设计 + `xhs/case-T01/` 实操素材**，但本讲座 **(a) 换一个营销味更足的选题**（如"AI 简历"或一个 JR 课程推广选题，避免和原讲座撞 T01）、**(b) 每一级配现场 demo**。
> **核心设计不能改**：用**同一个选题跑 5 个进化等级**，让观众肉眼看到落差。它不讲道理，它**演示落差**。
> **一句话立论**：**「AI Marketing 不是『用 AI』，是『搭一条会自己跑的 pipeline』。」**

14. **S14 · 章节封面** — "同一句'帮我写条小红书'，我跑给你看 5 个段位。"
15. **S15 · Step 1 · 朴素版**（演示对象）— ChatGPT 一句话 → "宝子们👋" 模板垃圾，2 分钟发布。**现场 demo①**：当场用一句 prompt 让 ChatGPT 出一条，读出来。金句："**99% 的人停在这里 —— 这就是大多数人以为的'用 AI 做营销'。**"
16. **S16 · Step 1 为什么不行** — 拆解：没数据、没人设、AI 味、一条就完、发完没人管。这不是 AI 的错，是**你只用了 AI 的 1%**。
17. **S17 · Step 2 · 模板化自动化** — 5 阶段 cron pipeline：`TRIGGER → GENERATE → VISUAL → REVIEW → SCHEDULE`，每周一 9 点自动跑。角色变化：你写你发你重复 → **AI 执行，你只决策**。
18. **S18 · Step 2 关键差异** — 对照表：一句话 prompt → 200 字固化 System Prompt（人设/规则/红线/真实数据点注入）；1 条 → 一次出 5 条候选；ChatGPT 编 → 预先注入真实数据。
19. **S19 · Step 3 · 自动选题 + 多平台分发** — 5 层 pipeline：数据采集（Reddit / X / Google Trends / 评论区情绪）→ AI Agent 每天扫信号打分选 Top3 → 4 平台版本生成（X 280 / 小红书 400 / LinkedIn 1200 / 公众号 1800）→ 配图水印 → 发布追踪。Built with Claude Skills × 5。
20. **S20 · Step 3 演示：T 选题怎么被选中的** — 展示一段真实信号日志（Reddit 热帖 / X 大 V 转发 / Trends 上升）→ AI 排出当日 Top3 + hook + rationale。**现场 demo②**：展示一份 `01-topic.json`。
21. **S21 · Step 3.5 · 匠人 Master/Variant 架构** — 1 份 Master（单一真相）→ per-platform variant transformers 并行 → publisher → feedback loop。**金句："改 1 处，5 个平台同步生效。"** 你从审核员升级为**内容架构师**。
22. **S22 · Step 4 · 完整 pipeline + 反馈学习闭环** — 互动数据回流，AI 自动分析 hook 转化 / 时段表现 → 自动调 prompt 权重。AI-native，飞轮自己转。
23. **S23 · Step 4 演示：朴素版 vs pipeline 版同选题对照** — 左 Step1 的"宝子们"垃圾，右 pipeline 跑完的爆款级成品（过了 `/xhs-topic-picker → /xhs-draft → /xhs-review → /xhs-poster → /xhs-score` 5 个 skill）。**现场 demo③（全场最强冲击点）**：素材取 `xhs/case-T01/STEP1_CHATGPT_NAIVE.md` vs `STEP4_PIPELINE_FINAL.md`。
24. **S24 · Step 5 · 企业级长期记忆** — 3 层记忆（员工长期记忆 / 公司知识库 / 业务状态）→ AI BRAIN → 4 件 AI 主动做的事（自动安排 / 动态调整 / 内容自动生成 / 主动提醒决策）。**金句："没有记忆的 AI = 工具，有记忆的 AI = 同事。"**
25. **S25 · 5 级阶梯总览图** — 一张大图把 L1→L5 串起来，标注每级的"角色"和"省的工"。
26. **S26 · 概念收口** — L1（用 AI）→ L2（搭 pipeline）→ L3（设计 + 落地能力）。**L1→L3 · ×100 价值跃迁。**
27. **S27 · 一个人能转动整条飞轮** — 把 5 个转变 + 5 级阶梯收成一句："内容 → 投放 → 私域 → 数据，一个人 + 一套 AI 系统就能转起来。这就是一人营销队伍。"
28. **S28 · 自检铺垫** — "现在问自己：我卡在哪一层？" → 引出 CH3/CH4。
29. **S29 · 转场** — "但你发现没有 —— 营销跑得再顺，你得**有个东西可卖**。" → 引出升维。

#### **CH 3 · 升维：营销只是一半**（8 页 / 22 min）

> 桥接段。把"卖得动"接到"做得出"，引出两门课的底层需求，但**不卖课**，只讲逻辑。

30. **S30 · 章节封面** — "营销是后半句。前半句是：东西得先存在。"
31. **S31 · 一人公司的两条腿** — 一张图：做得出（coding）+ 卖得动（marketing）= 一人公司。缺一条腿都跑不起来。
32. **S32 · 爬上 Step 2–4 需要什么** — 拆穿：Step 2 的 cron、Step 3 的数据采集、Step 3.5 的 variant transformer、Step 4 的反馈闭环 —— **全要你能把 skill / API / 自动化接成一条 pipeline**。这不是营销技能，是**做得出**的能力。
33. **S33 · 但你不用是程序员** — 现在零基础也能用 Cursor / Claude Code 从想法到上线。**现场 demo④（可选）**：当场用 Cursor 把一个 idea 跑成一个能打开的网页。
34. **S34 · Step 5 的终态 = 一人公司** — 一个人 + 一套有记忆的 AI 系统，把营销 + 产品 + 运营全转起来 —— 这已经不是"做营销"，是**经营一家自己的公司**。
35. **S35 · 一人公司真实画像** — 不画饼、讲真实：35–45 岁、有积累、敢辞职、敢为"能自己干"付费。**不适合谁也讲清楚**（没储蓄、想躺赚的不该走这条路）。守红线：不承诺收入。
36. **S36 · 澳洲特色 = 全球独家定位** — 澳洲华人 + AI 工具栈 + 拿 Grant + 三城线下 networking，是全世界独一份的组合（对应一人创业营定位）。
37. **S37 · 把两半合起来** — 回到主线大图：今晚你学了"卖得动"的思路；要补"做得出"的能力；想组装成公司有现成的路径。
38. **S38 · 转场** — "所以，回到那个问题：你卡在哪一层？卡在哪，就知道下一步学什么。" → 引出 CH4。

#### **CH 4 · 落地：你卡在哪一层 + 入口**（7 页 / 16 min）

> 诊断式 CTA。让观众自己得出"我需要学"，不硬卖。

39. **S39 · 章节封面 · 自检** — "SELF CHECK · 现在轮到你"
40. **S40 · 5 级自检表** — 一张大卡，每级一句"你是不是这样"：L1 还在 ChatGPT 复制粘贴 / L2 有几个固定模板 / L3 想多平台但每个手改 / L4 想要数据闭环但不会接 / L5 想把整个公司交给 AB 系统。**勾出你的位置。**
41. **S41 · 导流分叉（核心 CTA 页）** — 两条路：
    - **缺"做得出"的能力**（想往上爬却卡在搭 pipeline）→ 『**人人都能学的 AI Coding 实战课**』：零基础 Cursor，从想法到产品上线。
    - **想要 Step 5 终态 / 自己开公司** → 『**AI 一人创业营**』：OPC + 澳洲 Grant + 三城线下。
42. **S42 · 课程卡①：AI Coding 实战课** — 一句价值主张（零基础也能把想法做成上线产品）+ 33 个 AI 工具 + 4 个可上线交付物（PPT/PDF/网站/视频）+ 基础班 6 周 / 进阶班 8 周 + 二维码。**只讲过程与作品，不讲钱。**
43. **S43 · 课程卡②：AI 一人创业营** — 一句价值主张（把会 AI 转成自己的公司）+ OPC 主轴 + 拿澳洲 Grant + 三城线下 networking + 预售/早鸟阶梯 + 二维码。**只讲能力与机会，不承诺收入。**
44. **S44 · 点破 meta** — "今晚这场讲座本身，**就是一次 AI Marketing 的演示** —— 我怎么选的题、怎么准备的内容、怎么把你引到这两张卡，全是你今天看到的那套 pipeline。"
45. **S45 · 收尾 + EOI** — 一个今晚就能做的小动作 + 留资二维码 + 社群入口 + 1 对 1 咨询。

#### **Q&A**（4 页 / 10 min）

46. **S46 · Q&A 封面**
47. **S47 · 引导问题** — 预置 3 个常见问题（"我完全零基础能学吗""GEO 具体怎么做""一个人真的够吗"）打破冷场。
48. **S48 · 资源 + 谢幕** — 三个链接（AI Coding 课页 / 一人创业营页 / 社群）+ 谢幕。

---

## 2. 内容口径与红线（必须遵守）

### 2.1 红线（不可触碰 · 参照全局 `feedback_no_revenue_promise`）

| 不能说 | 替代说法 |
|---|---|
| "学完月入 X / 接单变现 / 副业" | "你会掌握一套能自己跑的 pipeline / 做出 1 个上线产品" |
| "包做出 APP / 包就业 / 100% 成功" | 任何结果承诺一律不写，只承诺过程与能力 |
| "躺赚 / 被动收入 / 财富自由" | 中性叙述，讲能力跃迁不画饼 |
| AI 味套话（"在当今快速发展的 / 让我们一起 / 准备好了吗 / 深入探讨"） | 直接说重点，每页一个具体命令/数据/案例（参照 `curriculum/CLAUDE.md` 禁模版化） |

### 2.2 数据口径

- 两门课的定价 / 周数 / 工具数 / 交付物**必须**用真实数据（见 §5 素材源），不编造。
- 阶梯里的信号日志（Reddit 热帖 / X 转发数 / Trends）沿用 `xhs/case-T01/` 的真实示例，或换选题时同步换真实信号，不要孤数字。
- indie hacker 案例（Levels / Marc Lou）用其公开 ARR/MRR 数字，slide 署来源。

### 2.3 语气

- **认知 + 演示为主，卖课只在 CH4 集中出现**（S41–S43 三页），前面不提课。
- 每个"段位"都要有一个能现场跑/能对照的真实成品，不是空讲概念。

---

## 3. 技术实现

### 3.1 Slide Deck 技术栈（复刻 `ai-new-jobs-talk` 工程结构）

- **Vite 8 + React 19 + framer-motion 12 + inline styles**（参照 `curriculum/CLAUDE.md` 技术标准，禁 Next/Tailwind/UI 库/状态管理库）
- **Neo-Brutalism**：黑 3px 边框 + `6px 6px 0 #000` 硬阴影 + hover 移位
- **主题色 `#E63977`**：直接改 `src/styles/theme.ts` 的 primary（与 `curriculum/ai-marketing/DESIGN.md` 对齐，区别于 ai-new-jobs-talk 的 `#ff5757`）
- **字体**：Bricolage Grotesque（标题）/ DM Sans（正文）/ Space Mono（数据）/ Noto Sans SC（中文）
- **共享 UI**：复用 `ui.tsx`（Slide / Card / Title / Highlight / Grid / Stagger）+ `SlideEngine.tsx`
- **每张 slide 独立文件**：`src/components/slides/S01_Cover.tsx` → `S48_*.tsx`

### 3.2 复用策略（省时间 · 今晚要讲）

| 来源 | 复用到 | 怎么用 |
|---|---|---|
| `lessons/ai-new-jobs-talk/src/components/slides/Z02–Z05b` | CH2 阶梯（S15–S26） | **移植 + 改选题配色**，pipeline 图直接复用 |
| `lessons/ai-new-jobs-talk/src/components/{SlideEngine,ui}.tsx` + `theme.ts` | 全局骨架 | 拷贝改主题色即可 |
| `lessons/ai-new-jobs-talk/xhs/case-T01/STEP1/STEP4` | S23 对照 demo | 直接当现场素材 |
| `lessons/_template/` | 脚手架 | `cp -r` 起步 |

### 3.3 部署

- push 到 `main` → GitHub Actions `deploy.yml` 自动构建
- **🔴 必做**：改 `.github/workflows/deploy.yml` 的 Assemble 步骤加入 `ai-marketing-talk` slug（参照 `curriculum/CLAUDE.md` 强制规则 1，否则线上 404）
- 上线地址：`jiangren.com.au/curriculum/lessons/ai-marketing-talk/`

### 3.4 海报（可选 · 二期）

- 做海报则注册到 `curriculum/posters.html`（参照强制规则 2），1242×1660 竖版，字号 ≥24px

---

## 4. 时间表与下一步（今晚要讲 · 快通道）

### 4.1 阶段拆解

| 阶段 | 内容 | 预计 |
|---|---|---|
| **当前** | PRD v0.1 → 用户 sign-off | — |
| **Phase 1** | `cp` 脚手架 + 改主题色 `#E63977` + App.tsx 装配 48 页骨架（标题 + 占位） | 1 hr |
| **Phase 2** | CH2 阶梯移植 Z 系列 + 接 case-T01 对照素材（**最高优先**，这是主体） | 1.5 hr |
| **Phase 3** | CH0/CH1/CH3/CH4 填实质内容 + 两门课真实数据卡 | 2–3 hr |
| **Phase 4** | 本地预览（`bun run dev`）+ 文字校对 + 部署 | 1 hr |

> 如果今晚时间紧：**Phase 1 + Phase 2 先出能讲的 MVP**（CH0 立论 + CH2 阶梯 + CH4 导流 ≈ 25 页），CH1/CH3 用讲师口述补，后续再补全。

### 4.2 待 sign-off 的关键点

1. **CH2 选题**：阶梯用什么选题跑？建议**换成营销味更足的选题**（如"AI 简历"或一个 JR 课推广选题），避免和 ai-new-jobs-talk 的 T01 撞。要不要直接沿用 T01？
2. **现场 demo 深度**：S15/S20/S23/S33 共 4 个 demo 点，今晚现场跑几个？（建议至少跑 S15 朴素版 + S23 对照，冲击最大）
3. **两门课卡的定价怎么露**：S42/S43 价格是写死数字还是只写"早鸟价 + 二维码看详情"？（URL 稳定 + 价格可能变，建议后者）
4. **EOI 留资**：S45 用现有哪个二维码 / 表单？

### 4.3 风险

| 风险 | 应对 |
|---|---|
| 今晚时间紧、48 页做不完 | §4.1 MVP 方案：先出 CH0+CH2+CH4 能讲的 25 页 |
| CH2 和 ai-new-jobs-talk 撞素材 | 换选题 + 换主题色 `#E63977`，pipeline 图复用但内容换 |
| 卖课感太强 | 卖课压到 CH4 三页；前面只讲认知 + 演示；点破 meta 化解 |
| 现场 demo 翻车 | 关键 demo（S23 对照）用**预生成的 case-T01 静态素材**兜底，不依赖现场联网 |

---

## 5. 附录：素材源映射

### 5.1 复用资产（本 repo）

- 阶梯 slide 源：`curriculum/lessons/ai-new-jobs-talk/src/components/slides/Z01–Z07.tsx`
- 阶梯实操素材：`curriculum/lessons/ai-new-jobs-talk/xhs/case-T01/STEP1–STEP4 + ADOPTION_FRAMEWORK.md`
- 工程骨架：`curriculum/lessons/ai-new-jobs-talk/src/{App,components/ui,components/SlideEngine}.tsx` + `_template/`
- 营销课线设计：`curriculum/ai-marketing/DESIGN.md`（主题色 `#E63977` + 配图 prompt）

### 5.2 两门课真实数据（导流卡用 · 已核对）

| | AI Coding 实战课 | AI 一人创业营 |
|---|---|---|
| slug | `ai-programming` | `ai-solo-founder-bootcamp` |
| 定位 | 零基础 Cursor + AI 从想法到产品上线 | OPC 一人公司（做得出 + 卖得动 → 自己的公司）|
| 真实定价 | 基础班 6 周 AUD $860 / 进阶班 8 周 $1360（预售）| 预售 $2,400 / 首期早鸟 $2,800 / 二期 $3,800 |
| 卖点数据 | 33 个 AI 工具 · 4 个可上线交付物（PPT/PDF/网站/视频）| 澳洲 Grant + 三城线下 networking · 35–45 岁 senior |
| 数据源 | `curriculum/ai-programming/FUNNEL_PLAN.md` + 销售页 | `curriculum/ai-solo-founder-bootcamp/PRD.md` |

### 5.3 关联文档

- 营销课全貌：`curriculum/ai-marketing/README.md` + `FUNNEL_PLAN.md`
- 已验证的姊妹讲座：`curriculum/lessons/ai-new-jobs-talk/PRD.md`（CH5 = 本讲座 CH2 的来源）

---

**END · PRD v0.1（待 sign-off）**

> 下一步：用户确认 §4.2 的 4 个点（尤其 CH2 选题）→ 进入 Phase 1 脚手架。今晚时间紧可走 §4.1 MVP 通道。
