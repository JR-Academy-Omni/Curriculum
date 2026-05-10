---
theme: default
title: Vibe Coding · Lesson 1
info: |
  ## AI Engineer 全栈项目班 · Lesson 1
  讲师：Lightman / JR Academy
class: text-center
highlighter: shiki
colorSchema: light
aspectRatio: 16/9
canvasWidth: 1920
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Poppins'
  serif: 'Lora'
  mono: 'JetBrains Mono'
  weights: '400,500,600,700,800'
---

<div class="cover-eyebrow">AI Engineer 全栈项目班 · Lesson 1</div>

# Vibe Coding

<div class="pull-quote" style="margin-top: 32px;">
AI 时代的 Web 全栈编码新范式
</div>

<div class="logo-bar" style="margin-top: 64px; opacity: 0.7;">
  <span class="logo-mark is-sm"><img src="https://api.iconify.design/simple-icons/anthropic.svg?color=%23141413" alt="Anthropic" /></span>
  <span class="logo-mark is-sm"><img src="https://api.iconify.design/simple-icons/openai.svg?color=%23141413" alt="OpenAI" /></span>
  <span class="logo-mark is-sm"><img src="https://api.iconify.design/simple-icons/cursor.svg?color=%23141413" alt="Cursor" /></span>
  <span class="logo-mark is-sm"><img src="https://api.iconify.design/simple-icons/githubcopilot.svg?color=%23141413" alt="GitHub Copilot" /></span>
  <span class="logo-mark is-sm"><img src="https://api.iconify.design/simple-icons/googlegemini.svg?color=%23141413" alt="Gemini" /></span>
  <span class="logo-mark is-sm"><img src="/jr-logo.svg" alt="JR Academy" /></span>
</div>

<div class="cover-byline">Lightman / JR Academy</div>

<!--
开场第 1 句话（不要急着翻页）：
"这门课结束的时候，你能做到的事是 ——
把脑子里的产品 idea，一个人在一个周末跑出 demo，下周一上线给朋友试。"
-->

---
layout: center
---

<div class="big-icon">🌅</div>

<div class="pull-quote">
把脑子里的 <strong>idea</strong>，
<br/>
一个人在一个 <strong>周末</strong> 跑出 demo，
<br/>
<strong>下周一</strong> 上线给朋友试。
</div>

---

<div class="section-eyebrow">关于讲师</div>

# 我是谁

<div class="grid grid-cols-2 gap-12 mt-8">

<div>

### Lightman

JR Academy 创始人之一。

每天用 AI Coding 写：

- **jr-academy** — Bootcamp 平台
- **SigmaQ** — 模考 / 测评 SaaS
- **SuperAdmin CMS** — 超管后台

</div>

<div>

### 我的信念

AI 不是取代程序员。

AI 是把**一个人**放大成**一个团队**。

<div class="pull-quote accent" style="margin-top: 32px;">
你的核心竞争力 ——
<br/>
写 PRD · 拆任务 · 读 diff
</div>

</div>

</div>

---

<div class="section-eyebrow">课程定位</div>

# 这门课跟其他 AI 课不一样

<div class="grid grid-cols-2 gap-12 mt-8">

<div class="card card-muted">

<div class="big-icon-sm">💬</div>

### 其他课

- 教你**调 ChatGPT**
- 停在 Prompt
- 没有交付物

</div>

<div class="card card-accent">

<div class="big-icon-sm">🚀</div>

### 这门课

- 教你**让 AI 写完整 Web 应用**
- 交付 PR / 跑 CI/CD / 上线
- 第 8 周交毕业项目（自己的 web app 上线）

</div>

</div>

<div class="muted text-center mt-12" style="font-size: 18px;">
8 周 · 每周 2 次 · 每次都有 deliverable
</div>

---
layout: center
---

<div class="big-icon">🔄</div>

# 五阶段循环

<div class="pull-quote mt-8">
PRD → PLAN → IMPLEMENTATION → DEBUG → PR
</div>

<div class="muted mt-12" style="font-size: 18px;">
这是你下周开始 <strong>每天</strong> 做的循环
</div>

<!--
板书写出这 5 个词。整门课的核心循环，反复回到它。
-->

---
layout: section
class: text-center
---

<div class="section-eyebrow">Block 1</div>

# AI Coding 全景


---

<div class="section-eyebrow">互动 · 板书</div>

# 你听过哪些 AI Coding 工具？

<div class="muted text-center mt-4">大声说出来 · 老师板书</div>

<div class="grid grid-cols-4 gap-4 mt-12 stagger">
<div class="card">Cursor</div>
<div class="card">Copilot</div>
<div class="card">Claude</div>
<div class="card">ChatGPT</div>
<div class="card">Bolt</div>
<div class="card">Lovable</div>
<div class="card">v0</div>
<div class="card">Codex</div>
<div class="card">Windsurf</div>
<div class="card">Devin</div>
<div class="card">Cline</div>
<div class="card">Antigravity</div>
</div>

---

<div class="section-eyebrow">归位</div>

# 4 类工具 · 没有谁取代谁

| 类别 | 代表产品 | 用户画像 |
|------|---------|---------|
| **AI 网页生成** | Lovable / v0 / Bolt | 不写代码 / 只想要 demo |
| **Coding Agent** (7×24) | OpenAI Codex / Cursor Agent | 异步派活 / 长跑任务 |
| **IDE** | Cursor / Copilot / Antigravity | 主力开发 / 日常写代码 |
| **CLI** | Claude Code / Codex CLI / Gemini CLI | 重度终端 / 自动化 |

<blockquote>
资深开发者一天会同时用 IDE + CLI + Agent。
</blockquote>

---

<div class="section-eyebrow">#01</div>

# IDE & VS Code Fork 路线

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="card card-blue">
<div class="big-icon-sm">🧩</div>
<h3>Extension 路线</h3>
<p class="muted" style="margin-bottom: 16px;">GitHub Copilot · Codium · Windsurf 早期 · Cline</p>
<div style="display: flex; flex-direction: column; gap: 6px; padding-top: 12px; border-top: 1px solid rgba(20,20,19,0.08);">
  <div>✅ 留在熟悉的 VS Code</div>
  <div>❌ 受限于 Extension API</div>
</div>
</div>

<div class="card card-accent">
<div class="big-icon-sm">🔱</div>
<h3>Fork 路线</h3>
<p class="muted" style="margin-bottom: 16px;"><strong>Cursor</strong> · Windsurf</p>
<div style="display: flex; flex-direction: column; gap: 6px; padding-top: 12px; border-top: 1px solid rgba(20,20,19,0.08);">
  <div>✅ 可改底层 UI / Composer</div>
  <div>❌ 跟不上 VS Code 主干</div>
</div>
</div>

</div>

---

<div class="section-eyebrow">#02</div>

# CLI 路线

<div class="grid grid-cols-3 gap-6 mt-12 stagger">

<div class="card card-accent logo-card">
<span class="logo-mark"><img src="https://api.iconify.design/simple-icons/anthropic.svg?color=%23d97757" alt="Anthropic" /></span>

### Claude Code

**Anthropic 官方** · 我们这门课主用

</div>

<div class="card logo-card">
<span class="logo-mark"><img src="https://api.iconify.design/simple-icons/openai.svg?color=%23141413" alt="OpenAI" /></span>

### Codex CLI

OpenAI 官方

</div>

<div class="card logo-card">
<span class="logo-mark"><img src="https://api.iconify.design/simple-icons/googlegemini.svg?color=%236a9bcc" alt="Gemini" /></span>

### Gemini CLI

Google 官方 + 开源

</div>

</div>

<div class="muted mt-12 text-center">
共同点：终端 · 读写文件 · 执行 shell · 吃 <code>*.md</code> 项目说明
</div>

<!--
对标：Cursor 是 IDE，Claude Code 是终端 Agent。
不要把 Claude Code 想成 IDE 插件。
-->

---

<div class="section-eyebrow">#03</div>

# Vibe Coding · 不写代码

<div class="big-icon mt-4">🎨</div>

<div class="pull-quote">
2025 新概念："只描述你要的<strong>感觉</strong>"
</div>

<div class="grid grid-cols-3 gap-6 mt-12 text-center">
  <div class="card"><strong>Lovable</strong></div>
  <div class="card"><strong>Bolt.new</strong></div>
  <div class="card"><strong>Replit</strong></div>
</div>

<div class="grid grid-cols-2 gap-12 mt-12" style="font-size: 18px;">
<div>
<strong>适合</strong>：MVP / Demo / idea 验证 / 内部工具
</div>
<div class="muted">
不适合：复杂业务系统、长期维护
</div>
</div>

---

<div class="section-eyebrow">#04</div>

# Coding Agent · 7×24 不睡觉

<div class="big-icon">🤖</div>

<div class="muted text-center" style="font-size: 18px;">
关键词：异步 · 长跑 · 可被打断 · 自主决策
</div>

<div class="card card-accent mt-12 stagger">

**代表**：OpenAI Codex（基于 codex-1，蒸馏自 OpenAI o3）

**用法**：
1. 在 ChatGPT / GitHub PR 里派活
2. Agent 在云端跑
3. 完成后返回 diff

</div>

<div class="pull-quote accent text-center mt-8">
下班前派活，明早看结果。
</div>

---
layout: center
class: text-center
---

<div class="section-eyebrow">我们这门课怎么选</div>

<div class="grid grid-cols-3 gap-8 mt-8 stagger">

<div class="card card-accent logo-card">
<span class="logo-mark"><img src="https://api.iconify.design/simple-icons/anthropic.svg?color=%23d97757" alt="Anthropic" /></span>
<div class="pill pill-accent">主力</div>
<h3>Claude Code</h3>
<p class="muted">CLI · 全栈最友好</p>
</div>

<div class="card card-blue logo-card">
<span class="logo-mark"><img src="https://api.iconify.design/simple-icons/cursor.svg?color=%236a9bcc" alt="Cursor" /></span>
<div class="pill">辅助</div>
<h3>Cursor</h3>
<p class="muted">IDE · UI 直观</p>
</div>

<div class="card card-sage logo-card">
<span class="logo-mark"><img src="https://api.iconify.design/simple-icons/openai.svg?color=%23788c5d" alt="OpenAI" /></span>
<div class="pill">进阶</div>
<h3>Codex</h3>
<p class="muted">Agent · 后期自动化</p>
</div>

</div>

<div class="muted mt-12">
不用：Lovable / Bolt — 适合 demo 不适合教全栈
</div>

---
layout: section
class: text-center
---

<div class="section-eyebrow">Block 2</div>

# AI 时代的岗位地图


---

<div class="section-eyebrow">传统 IT 岗位</div>

# 软件开发是个团队运动

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="card">
<div class="pill">业务侧</div>

- Stakeholder
- Business Analyst
- Product Owner

</div>

<div class="card">
<div class="pill">设计</div>

- UI Designer
- UX

</div>

<div class="card">
<div class="pill">全栈</div>

- Front-end
- Back-end
- Full-stack

</div>

<div class="card">
<div class="pill">数据</div>

- Data Engineer
- Data Analyst
- Warehouse / Lake

</div>

<div class="card">
<div class="pill">质量</div>

- QA & Tester
- UAT / Staging / Prod

</div>

<div class="card">
<div class="pill">基建</div>

- DevOps & SRE
- Cloud Engineer

</div>

</div>

<div class="pull-quote text-center accent mt-8">
全栈 = 跨 3-5 个岗位的能力
</div>

---

<div class="section-eyebrow">Convergence · 收敛</div>

# 三条 Engineering 路径<br/>都在收敛到 <span class="accent">AI Builder</span>

<div class="grid mt-8" style="grid-template-columns: 280px 60px 1fr 80px 360px; align-items: center; gap: 24px;">

<div class="card" style="text-align: center;">
  <div class="cover-eyebrow" style="margin: 0 0 12px;">Entry Point</div>
  <h3 style="margin: 0;">Software<br/>Engineer</h3>
  <p class="accent" style="font-size: 14px; margin-top: 12px;">大多数人的起点</p>
</div>

<div style="text-align: center; font-size: 32px; color: var(--c-mid-gray);">→</div>

<div class="stagger" style="display: flex; flex-direction: column; gap: 12px;">
  <div class="card card-accent" style="padding: 16px 24px;">
    <strong>Software Engineer</strong>
    <div class="muted" style="font-size: 16px;">Full-stack Developer</div>
  </div>
  <div class="card card-blue" style="padding: 16px 24px;">
    <strong>DevOps Engineer</strong>
    <div class="muted" style="font-size: 16px;">SRE / Platform</div>
  </div>
  <div class="card card-sage" style="padding: 16px 24px;">
    <strong>Data Engineer</strong>
    <div class="muted" style="font-size: 16px;">ETL · Pipeline · Warehouse</div>
  </div>
</div>

<div style="text-align: center;">
  <div style="font-size: 32px; color: var(--c-terracotta);">→</div>
  <div class="cover-eyebrow accent" style="margin-top: 8px;">Converge</div>
</div>

<div class="card card-accent" style="background: var(--c-terracotta); color: var(--c-cream);">
  <div class="cover-eyebrow" style="color: var(--c-cream); opacity: 0.85; margin-bottom: 8px;">Convergence · 终点</div>
  <h3 style="margin: 0; color: var(--c-cream);">AI Builder</h3>
  <ul style="margin: 16px 0 0; padding-left: 20px; font-size: 16px; color: var(--c-cream);">
    <li style="list-style: disc;">Feature Implementation</li>
    <li style="list-style: disc;">CI/CD · Data Pipeline</li>
    <li style="list-style: disc;">LLM / RAG / Agent</li>
    <li style="list-style: disc;">Multi-cloud Deployment</li>
    <li style="list-style: disc;">AI Solution Design</li>
  </ul>
</div>

</div>

<blockquote class="mt-8 text-center">
无论你现在是 <strong>SDE / DevOps / Data Engineer</strong>，往前走 <strong>同一个目的地</strong>。
</blockquote>

---

<div class="section-eyebrow">AI 重塑后</div>

# 这些岗位被改造了

<div class="grid grid-cols-2 gap-12 mt-8">

<div class="card card-accent">

<div class="big-icon-sm">🛠️</div>

### 被改造的岗位

- **BA → AI Builder**
  写 PRD 给 AI 看
- **Developer → Vibe Coder**
  审 AI 写的 1000 行
- **DevOps → CI/CD Operator**
  AI 帮你写 pipeline

</div>

<div class="card card-sage">

<div class="big-icon-sm">🌳</div>

### 不变的事

- Stakeholder 沟通
- 系统设计
- 业务理解
- **判断力**

</div>

</div>

<div class="pull-quote accent text-center mt-8">
过去 3 个人 6 个月 · 现在 1 个 AI Builder 4 周
</div>

---
layout: center
class: text-center
---

<div class="section-eyebrow">From Idea to Live Product</div>

# Agile 13 步 · 一半节点都被 AI 改写

<div class="grid grid-cols-2 gap-12 mt-8">

<div>

| # | 节点 | AI 介入 |
|---|------|---------|
| 1 | Business Analyst 收集需求 | 🤖 |
| 2 | Wireframe 草图 | 🤖 |
| 3 | Product Owner 拍板优先级 | — |
| 4 | Sprint Plan 排期 | — |
| 5 | User Story 拆任务 | 🤖 |
| 6 | Refinement Meeting 评审 | — |
| 7 | QA 写测试用例 | 🤖 |

</div>

<div>

| # | 节点 | AI 介入 |
|---|------|---------|
| 8 | User Story Sprint 进入开发 | — |
| 9 | UI Designer 出高保真 | 🤖 |
| 10 | Developer 写代码 | 🤖🤖 |
| 11 | Code Review + Merge | 🤖 |
| 12 | CI/CD → UAT → Staging | 🤖 |
| 13 | Release → Production | — |

</div>

</div>

<blockquote class="mt-8 text-center">
AI 在 <strong class="accent">9 个节点</strong> 出现 — 不是一次性魔法，是端到端的协作伙伴。
</blockquote>

---
layout: center
class: text-center
---

<div class="big-icon">🎯</div>

# 这门课让你成为 AI Builder

<div class="muted">横跨 BA + 全栈 + 部署</div>

<div class="grid grid-cols-3 gap-4 mt-12 stagger">
<div class="card">PRD</div>
<div class="card">LLM Prompt</div>
<div class="card">AI Coding</div>
<div class="card">Feature 拆分</div>
<div class="card">Git</div>
<div class="card">Deployment</div>
</div>

<blockquote class="mt-12">
在笔记本上写：<strong>我现在最弱的是哪个技能？</strong>
</blockquote>

<!--
让学员写下答案，下课收上来作为分组依据。
-->

---
layout: section
class: text-center
---

<div class="section-eyebrow">Block 3</div>

# Vibe Coding 工作流


---

<div class="section-eyebrow">五阶段</div>

# 你 vs AI · 各做什么

| 阶段 | 你做什么 | AI 做什么 |
|------|---------|---------|
| **PRD** | 把 idea 写成结构化文档 | 帮你补完整 / 找漏洞 |
| **PLAN** | 检查 AI 出的 plan | 列出要改的文件 + 影响 |
| **IMPLEMENTATION** | 一边监督一边喝咖啡 | 写代码 + 跑测试 |
| **DEBUG & TESTING** | 看测试 / 浏览器实测 | 自动修 bug / 重跑 |
| **PR** | review diff + 写好 commit | 写 commit message + PR |

<div class="pull-quote accent text-center mt-8">
人做判断 · AI 做体力
</div>

---
layout: center
---

<div class="section-eyebrow">PLAN MODE</div>

# Plan Mode 是 Vibe Coding 的灵魂

<div class="big-icon mt-4">🧭</div>

<div class="pull-quote">
先让 AI <strong>想清楚</strong> 再动手 ——
<br/>
省下 90% 返工
</div>

<div class="grid grid-cols-2 gap-8 mt-12">
  <div class="card card-muted">
    <h3 class="muted">❌ 不用 Plan Mode</h3>
    <p>"帮我加个登录功能" → AI 闷头写 → 改了 50 个文件 → 你看不懂 → 全推倒重来</p>
  </div>
  <div class="card card-accent">
    <h3>✅ 用 Plan Mode</h3>
    <p>"先列出要改的文件 + 每个文件改什么，等我确认" → 你 review → 删掉两个不必要的 → 再开始写</p>
  </div>
</div>

---

<div class="section-eyebrow">实操 · Claude Code Plan Mode 长这样</div>

# 在终端按 <span class="t-key" style="font-size: inherit; padding: 4px 12px;">Shift</span> + <span class="t-key" style="font-size: inherit; padding: 4px 12px;">Tab</span> · 进入 Plan Mode

<div class="terminal mt-4">

<div class="t-row"><span class="t-meta">~/projects/mini-crm</span></div>
<div class="t-row"><span class="t-prompt">❯</span> <span class="t-cmd">claude</span></div>
<div class="t-row">&nbsp;</div>

<div class="t-banner">⏵ Claude Code · Anthropic · v0.49</div>

<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-prompt">›</span> 帮我做一个 Mini CRM，管理客户列表（姓名 / 公司 / email）。</div>
<div class="t-row" style="padding-left: 18px;">4 个 action：Create / Edit / Delete / List。</div>
<div class="t-row" style="padding-left: 18px;">数据存本地 JSON。<strong style="color:#faf9f5;">先给我 PRD，等我确认。</strong></div>
<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-ai">⏺</span> <span class="t-em">Let me plan this out before writing any code...</span></div>

<div class="t-plan">
<div class="t-plan-header">📋 Plan</div>
<ol>
  <li>Create <code>app/page.tsx</code> — 客户列表 + 搜索框</li>
  <li>Create <code>app/api/customers/route.ts</code> — GET / POST / DELETE</li>
  <li>Create <code>lib/db.ts</code> — JSON 文件读写</li>
  <li>Create <code>components/CustomerForm.tsx</code> — Create + Edit 复用</li>
  <li>Add Tailwind base styles + 简单 layout</li>
</ol>
<div class="t-plan-footer"><span class="t-key">Tab</span> to accept · <span class="t-key">e</span> to edit · <span class="t-key">Esc</span> to refine</div>
</div>

<div class="t-row"><span class="t-mode">⏸ plan mode · read-only · no files written</span></div>

</div>

<blockquote class="mt-4" style="font-size: 18px;">
看到了吗？AI 没动手写一行代码 —— 列出 5 个文件等你按 <strong>Tab</strong> 才开始。
</blockquote>

---

<div class="section-eyebrow">项目类型</div>

# Brand New vs Existing · 喂法不同

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="card card-accent">

<div class="big-icon-sm">🌱</div>

### Brand New · 从 0 起

✅ 严格走五阶段 PRD → PLAN → IMPL
✅ Rules / Docs 一开始就立规矩

⚠️ 容易让 AI 一口气堆 1 万行没人 review

</div>

<div class="card card-blue">

<div class="big-icon-sm">🏛️</div>

### Existing · 老仓库

✅ 业务上下文清晰，有真实 user
✅ AI 能学到生产环境约束

⚠️ AI 不懂老代码风格 — **必须先喂 Rules + README + 关键模块导览**

</div>

</div>

<blockquote class="mt-8 text-center">
两种共同点：<strong>不管哪种，都先写 PRD</strong>，不要直接 "帮我加个功能"。
</blockquote>

---

<div class="section-eyebrow">Token</div>

# Context Window · 是上限也是预算

<div class="grid grid-cols-3 gap-6 mt-8 stagger">

<div class="card logo-card">
<span class="logo-mark"><img src="https://api.iconify.design/simple-icons/anthropic.svg?color=%23d97757" alt="Anthropic" /></span>
<h3>Claude Sonnet</h3>
<div class="big-num" style="font-size: 56px;">200k</div>
<p class="muted">Opus: 1M (beta)</p>
</div>

<div class="card logo-card">
<span class="logo-mark"><img src="https://api.iconify.design/simple-icons/openai.svg?color=%23141413" alt="OpenAI" /></span>
<h3>GPT-4o</h3>
<div class="big-num" style="font-size: 56px; color: var(--c-dark);">128k</div>
<p class="muted">o3: 200k</p>
</div>

<div class="card logo-card">
<span class="logo-mark"><img src="https://api.iconify.design/simple-icons/googlegemini.svg?color=%236a9bcc" alt="Gemini" /></span>
<h3>Gemini 1.5 Pro</h3>
<div class="big-num" style="font-size: 56px; color: var(--c-blue);">2M</div>
<p class="muted">最大 context</p>
</div>

</div>

<div class="grid grid-cols-2 gap-8 mt-12" style="font-size: 18px;">

<div>

**Token ≈ 计费单位**

- 1 个英文单词 ≈ 1.3 token
- 1 个汉字 ≈ 1.5 token
- 1 行代码 ≈ 10–20 token
- input + output **两端都算钱**

</div>

<div>

**实战影响**

- 大 repo 不能整个塞 → 用 **submodule + Rules** 让 AI 按需读
- 长对话越聊越贵 → 适时 `/compact` 或开新会话

</div>

</div>

---

<div class="section-eyebrow">核心约束</div>

# Context is Currency · 上下文即货币

<div class="grid mt-4" style="grid-template-columns: 1.2fr 1fr; gap: 32px; align-items: center;">

<div>

<svg viewBox="0 0 800 460" style="width: 100%; height: auto; background: white; border-radius: 12px; box-shadow: 0 1px 2px rgba(20,20,19,0.04), 0 4px 16px rgba(20,20,19,0.06);">
  <!-- Grid lines -->
  <g stroke="#e8e6dc" stroke-width="1">
    <line x1="80" y1="80" x2="760" y2="80" />
    <line x1="80" y1="160" x2="760" y2="160" />
    <line x1="80" y1="240" x2="760" y2="240" />
    <line x1="80" y1="320" x2="760" y2="320" />
  </g>

  <!-- Axes -->
  <line x1="80" y1="40" x2="80" y2="380" stroke="#141413" stroke-width="2" />
  <line x1="80" y1="380" x2="760" y2="380" stroke="#141413" stroke-width="2" />

  <!-- X-axis ticks -->
  <g font-family="JetBrains Mono, monospace" font-size="13" fill="#6b6a65" text-anchor="middle">
    <text x="80" y="405">0%</text>
    <text x="216" y="405">20%</text>
    <text x="352" y="405">40%</text>
    <text x="488" y="405">60%</text>
    <text x="624" y="405">80%</text>
    <text x="760" y="405">100%</text>
  </g>

  <!-- Y-axis labels -->
  <g font-family="JetBrains Mono, monospace" font-size="13" fill="#6b6a65" text-anchor="end">
    <text x="68" y="60">High</text>
    <text x="68" y="385">Low</text>
  </g>

  <!-- Axis titles -->
  <text x="420" y="445" font-family="Lora, serif" font-size="16" fill="#141413" text-anchor="middle">Context Window Usage (%)</text>
  <text x="22" y="210" font-family="Lora, serif" font-size="16" fill="#141413" text-anchor="middle" transform="rotate(-90 22 210)">Model Intelligence / Accuracy</text>

  <!-- The performance curve: flat high until ~70%, gentle drop to 80%, cliff after 85% -->
  <path d="M 80,60
           L 540,60
           Q 600,60 640,110
           Q 690,240 740,360
           L 760,378"
        stroke="#d97757" stroke-width="4" fill="none" stroke-linecap="round" />

  <!-- Annotation -->
  <g font-family="Lora, serif" fill="#d97757">
    <text x="430" y="240" font-size="20" font-style="italic">Performance Degrades</text>
    <text x="430" y="268" font-size="16">（遗忘指令 / 犯错）</text>
  </g>
  <!-- Arrow pointing to cliff -->
  <path d="M 615,255 L 690,295" stroke="#d97757" stroke-width="2" fill="none" />
  <polygon points="690,295 678,288 678,300" fill="#d97757" />
</svg>

</div>

<div class="stagger" style="display: flex; flex-direction: column; gap: 14px;">

<div class="card card-accent" style="padding: 18px 22px;">
<h4 style="margin: 0; color: var(--c-terracotta); font-size: 16px;">⚠️ The Problem</h4>
<p style="margin: 6px 0 0; font-size: 16px;">所有对话历史 + 读过的文件 + 命令输出全在 context 里。<strong>窗口填满 → 模型性能急剧下降</strong>。</p>
</div>

<div class="card card-blue" style="padding: 18px 22px;">
<h4 style="margin: 0; color: var(--c-blue); font-size: 16px;">📐 Context Management</h4>
<p style="margin: 6px 0 0; font-size: 16px;">主动管理喂进去的内容，避免无关信息污染。</p>
</div>

<div class="card card-sage" style="padding: 18px 22px;">
<h4 style="margin: 0; color: var(--c-sage); font-size: 16px;">🧹 Compaction</h4>
<p style="margin: 6px 0 0; font-size: 16px;">Claude 会自动压缩历史，但你要养成 <code>/compact</code> · <code>/clear</code> 习惯。</p>
</div>

</div>

</div>

<blockquote class="mt-4" style="font-size: 16px;">
一次 debug session 或 codebase 探索能烧掉<strong>几万 tokens</strong> — 一旦填满，AI 开始遗忘指令、犯错。
</blockquote>

---

<div class="section-eyebrow">三大基石</div>

# Rules · Docs · README

<div class="grid grid-cols-3 gap-6 mt-12 stagger">

<div class="card card-accent logo-card" style="height: 100%;">
<div class="big-icon-sm">📜</div>
<h3>Rules</h3>
<p style="font-size: 18px;">AI <strong>必须</strong> 遵守的硬规则</p>
<p class="muted" style="font-size: 14px;">
<code>.cursor/rules/</code><br/>
<code>CLAUDE.md</code>
</p>
</div>

<div class="card card-blue logo-card" style="height: 100%;">
<div class="big-icon-sm">📋</div>
<h3>Docs · PRD</h3>
<p style="font-size: 18px;">这次要做什么<br/>业务上下文</p>
<p class="muted" style="font-size: 14px;">每个 feature 一份 PRD</p>
</div>

<div class="card card-sage logo-card" style="height: 100%;">
<div class="big-icon-sm">📖</div>
<h3>README</h3>
<p style="font-size: 18px;">这个项目 / 模块 / 函数<br/>是干什么的</p>
<p class="muted" style="font-size: 14px;">每层都要有</p>
</div>

</div>

<blockquote class="mt-12 text-center">
任何一项缺失 → AI 输出质量直线下降
<br/>
三件齐全 → AI 输出接近 <strong class="accent">mid-level 工程师</strong>
</blockquote>

---

<div class="section-eyebrow">Editor 推荐</div>

# 工具不用全装 · 装对的

<div class="grid grid-cols-3 gap-6 mt-12">

<div class="card card-sage">

<div class="big-icon-sm">✅</div>

### 推荐

- **Claude Code** (CC)
- **Gemini CLI**

</div>

<div class="card">

<div class="big-icon-sm">➖</div>

### 中性

- Cursor
- GitHub Copilot

</div>

<div class="card card-muted">

<div class="big-icon-sm">⚠️</div>

### 不推荐

- Amazon Kiro

</div>

</div>

<blockquote class="mt-12">
不要花时间装 Cursor — 课后自己装，下节课带电脑来。
</blockquote>

---
layout: section
class: text-center
---

<div class="section-eyebrow">Block 4 · Live Demo</div>

# Mini CRM

<div class="big-icon mt-4">🎬</div>


---

<div class="section-eyebrow">Demo 目标</div>

# 30 分钟 · 从 idea 到能跑

<div class="grid grid-cols-3 gap-6 mt-12">

<div class="card card-accent">
<div class="pill pill-accent">产出</div>

<div class="mt-4">
能 add / list / edit / delete 客户的 Mini CRM
</div>

</div>

<div class="card card-blue">
<div class="pill">技术栈</div>

<div class="mt-4">
Next.js 14<br/>+ Tailwind<br/>+ 本地 JSON
</div>

</div>

<div class="card card-sage">
<div class="pill">时长</div>

<div class="mt-4">
30 min 写代码<br/>+ 10 min 演示
</div>

</div>

</div>

<div class="pull-quote accent text-center mt-12">
你看到的，是你下周开始每天做的事
</div>

---

<div class="section-eyebrow">Step 1 · PRD</div>

# 写给 AI 看 · 不是写给人看

<div class="terminal mt-4">

<div class="t-row"><span class="t-meta">~/projects/mini-crm</span></div>
<div class="t-row"><span class="t-prompt">❯</span> <span class="t-cmd">claude</span></div>
<div class="t-row">&nbsp;</div>
<div class="t-banner">⏵ Claude Code · Anthropic · v0.49</div>
<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-prompt">›</span> 我要做一个 Mini CRM，给小型咨询工作室用。</div>
<div class="t-row" style="padding-left:18px;">- 管理客户列表（姓名 / 公司 / email / 备注）</div>
<div class="t-row" style="padding-left:18px;">- 4 个 Action：Create / Edit / Delete / List</div>
<div class="t-row" style="padding-left:18px;">- 数据存本地 JSON · Next.js 14 + Tailwind</div>
<div class="t-row" style="padding-left:18px;"><strong style="color:#faf9f5;">先生成 PRD，等我确认。</strong></div>
<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-ai">⏺</span> <span class="t-em">Drafting PRD.md...</span></div>

<div class="t-plan">
<div class="t-plan-header">📋 PRD · Mini CRM v0.1</div>
<ol style="list-style: none; padding-left: 0;">
  <li><strong style="color:#faf9f5;">1. Goal</strong> · 单人咨询工作室管理客户档案</li>
  <li><strong style="color:#faf9f5;">2. User</strong> · 顾问本人 · 单一 admin 角色</li>
  <li><strong style="color:#faf9f5;">3. Data Model</strong> · <code>Customer { id, name, company, email, notes, createdAt }</code></li>
  <li><strong style="color:#faf9f5;">4. Pages</strong> · <code>/</code> List · <code>/new</code> Create · <code>/[id]</code> Detail+Edit</li>
  <li><strong style="color:#faf9f5;">5. Storage</strong> · <code>data/customers.json</code> (fs/promises async)</li>
  <li><strong style="color:#faf9f5;">6. Out of scope</strong> · auth · 多用户 · 部署</li>
</ol>
</div>

<div class="t-row"><span class="t-mode">⏸ plan mode · awaiting your approval</span></div>

</div>

<blockquote class="mt-4" style="font-size: 18px;">
我<strong>没说</strong>"写代码" — 先要 PRD。这就是 PLAN MODE 思维。
</blockquote>

---

<div class="section-eyebrow">Step 2</div>

# PLAN · 让 AI 列文件再写

```text
PRD 看起来不错。现在请列出你要创建/修改的所有文件，
以及每个文件的职责，等我确认再开始写代码。
```

<div class="card card-accent mt-8">

**讲师演示流程**

1. 看 Claude 列出的文件树
2. 故意发现漏掉了 search 功能
3. 现场补一句：

</div>

```text
加一个搜索框，按姓名 / 公司 fuzzy 搜索。
然后开始写。
```

---

<div class="section-eyebrow">Step 3</div>

# IMPLEMENTATION · 边写边讲

<div class="big-icon-sm">⚙️</div>

<div class="stagger mt-8">

<div class="card">
<div class="pill">1</div>

<strong>不要发呆</strong>：边写边讲解每个文件的作用

</div>

<div class="card">
<div class="pill">2</div>

<strong>指出 AI 的取舍</strong>：
"看，它选了 <code>fs/promises</code> 不是 <code>fs.readFileSync</code> — 因为 Next.js 是 async"

</div>

<div class="card">
<div class="pill">3</div>

<strong>有 bug 不要慌</strong>：
现场让 AI 自己 debug — <strong>这就是真实工作流</strong>

</div>

</div>

---

<div class="section-eyebrow">Step 4</div>

# DEBUG · 真实场景

```bash
npm run dev
```

打开 <code>http://localhost:3000</code> 现场操作：
- 添加："张三" / "匠人学院" / 邮箱
- 编辑 / 删除 / 搜索 各做一次
- **报错？直接贴回 Claude Code**

<div class="card card-muted mt-8">

### 端口被占？

```bash
lsof -i:3000
kill -9 [PID]
```

> 这是你每天会遇到 5 次的命令。AI 经常忘记 kill 旧进程。<strong class="accent">记住</strong>。

</div>

---

<div class="section-eyebrow">Step 5</div>

# PR · 让 AI 自己写 commit

```text
帮我把这次改动 commit 一下，
message 按 conventional commit 写，
不要 push，我自己来。
```

```bash
git diff   # 自己看一眼
```

<div style="text-align: center; margin-top: 80px;">
<div class="big-icon">✨</div>

<div class="pull-quote accent">
30 分钟，从 idea 到能跑的 Mini CRM
</div>
</div>

---
layout: section
class: text-center
---

<div class="section-eyebrow">Block 5 · 学员 Lab</div>

# Daily Job Card

<div class="big-icon mt-4">🎯</div>

<div class="muted">让 AI 帮你做一个"每天给自己捞工作机会"的网页</div>

---

<div class="section-eyebrow">为什么做这个</div>

# 第一节课就交付一个<br/>你 <span class="accent">明天就能用</span> 的工具

<div class="grid grid-cols-3 gap-6 mt-12 stagger">

<div class="card card-accent">
  <div class="big-icon-sm">🌅</div>
  <h3>每天早上打开</h3>
  <p>看到为你筛选的当日岗位，按你的关键词排序</p>
</div>

<div class="card card-blue">
  <div class="big-icon-sm">📋</div>
  <h3>一键 Copy JD</h3>
  <p>看上的直接复制描述，丢给 ChatGPT 写 cover letter</p>
</div>

<div class="card card-sage">
  <div class="big-icon-sm">⭐</div>
  <h3>本地保存关键词</h3>
  <p>localStorage 存"我的关注"，下次打开自动应用</p>
</div>

</div>

<blockquote class="mt-8 text-center">
课件里准备好了 <strong>15 条示例 jobs JSON</strong>，复制即用。Block 6 求职 Checklist 直接接上。
</blockquote>

---

<div class="section-eyebrow">学员任务 · 你来跑一遍 PRD → PLAN</div>

# 把这段 prompt 粘进 Cursor / Claude Code

```text
我要做一个 daily-jobs.html — 单文件页面（HTML + JS + localStorage）。

## 需求
- 顶部搜索框：按关键词 / 城市过滤岗位
  （示例："AI Engineer Sydney" / "Frontend Melbourne"）
- "我的关键词" 存 localStorage，下次打开自动应用
- 内置 15 条示例 jobs（我会贴 JSON 给你）
  字段：title · company · location · salary · link · description · postedAt
- 顶部一个"今日推荐" hero job（每次刷新随机选一个匹配的）
- 卡片列表：title / company / location · salary 标签 / 一键 Copy JD / 跳转链接
- 风格简洁：奶油底 + 卡片 + 软阴影，不花哨

## 不要做
- 不接后端 / 不接 DB / 不接 Auth
- 不要登录 / 不要付费 / 不要花哨动画

请先给我 PRD（不超过 1 页），然后列出文件结构（应该就一个 HTML 文件）。
**先不要写代码**，等我确认。
```

<blockquote class="accent mt-6">
重点是体验"AI 跟我对话规划" — <strong>先 PRD，再 PLAN，最后才 IMPL</strong>
</blockquote>

---
layout: center
class: text-center
---

<div class="big-icon-xl">💡</div>

<div class="pull-quote mt-8">
Prompt 写得清楚
<br/>
→ AI 出的 PRD 就完整
</div>

<div class="muted mt-16" style="font-size: 24px;">

**Prompt** 是新时代的源代码

</div>

---
layout: section
class: text-center
---

<div class="section-eyebrow">Block 6</div>

# 收尾

<div class="muted mt-4">Q&A · 预告 · 作业</div>

---

<div class="section-eyebrow">Q&A</div>

# 高频问题预设

| 问题 | 答案 |
|------|------|
| Cursor / Claude Code 收费吗？ | Cursor 有免费 tier；Claude Code 按 API 计费，新用户 $5 免费额度 |
| 没编程基础能跟上吗？ | 需要写过 1 个 to-do list 项目；零基础先上 ai-essentials-bootcamp |
| 8 周后能找到工作吗？ | 不承诺求职结果，但有完整 4 步求职 Checklist |
| AI 写的代码安全吗？ | 后面专门一节讲 Code Review + Rules + Secrets 管理 |

---

<div class="section-eyebrow">第二节课</div>

# 主题：PRD 工程

<div class="big-icon mt-4">📐</div>

<div class="pull-quote mt-8">
把 idea 翻译成 AI 能精确执行的 PRD
</div>

<div class="card card-accent mt-12">

### 学员要带

- 一个你想做的 web app idea（个人项目 / 副业想法）
- 装好 **Cursor** + **Claude Code**（链接发课程群）

</div>

---

<div class="section-eyebrow">课后作业</div>

# 三件事 · 一周内完成

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="card card-accent">
<div class="big-icon-sm">🛠️</div>

### 必做 · 30 min

照 Mini CRM Demo 复刻一遍，能跑起来即可

</div>

<div class="card card-blue">
<div class="big-icon-sm">📝</div>

### 选做 · 90 min

自己出一个 idea，用 AI 写出 PRD（不写代码）

</div>

<div class="card card-sage">
<div class="big-icon-sm">📖</div>

### 阅读 · 45 min

通读 Claude Code System Prompt 全文 + 解读

</div>

</div>

<div class="muted text-center mt-8" style="font-size: 16px;">

阅读材料：<code>notes/07-claude-code-system-prompt.md</code>

</div>

---

<div class="section-eyebrow">完整路线图 · 课后自学</div>

# AI Coding · From Idea to Product

<div class="muted" style="margin-bottom: 16px;">
45 个知识点 · 40 小时 · jiangren.com.au/roadmaps/ai-coding
</div>

<iframe
  src="https://jiangren.com.au/roadmaps/ai-coding"
  style="width: 100%; height: 720px; border: 1px solid rgba(20,20,19,0.10); border-radius: 12px; background: white; box-shadow: 0 1px 2px rgba(20,20,19,0.04), 0 4px 16px rgba(20,20,19,0.06);"
  loading="lazy"
></iframe>

---
layout: center
class: text-center
---

<div class="big-icon">🌙</div>

<div class="pull-quote mt-8">
这门课 <strong>不教你写代码</strong>
<br/>
教你 <strong>指挥 AI 写代码</strong>
</div>

<div class="muted mt-16" style="font-size: 22px;">

你的核心竞争力不再是手速

是 **写 PRD · 拆任务 · 读 diff** 的判断力

</div>

<div class="pull-quote accent mt-12">
8 周后再见的时候
<br/>
<strong>你的产品已经在跑</strong>
</div>

---
layout: end
class: text-center
---

<div class="big-icon">👋</div>

# Thank You

<div class="muted mt-4" style="font-size: 22px;">下节课见 · PRD 工程</div>

<div style="margin-top: 64px; display: flex; justify-content: center;">
  <img src="/jr-logo.svg" alt="JR Academy" style="height: 48px; opacity: 0.85;" />
</div>

<div class="cover-byline mt-8">Lightman / JR Academy</div>
