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

<div class="section-eyebrow">完整路线图 · 后面 8 周走的路</div>

# AI Coding · From Idea to Product

<div class="muted" style="margin-bottom: 12px; font-size: 18px;">
45 个知识点 · 40 小时 · jiangren.com.au/roadmaps/ai-coding
</div>

<iframe
  src="https://jiangren.com.au/roadmaps/ai-coding"
  style="width: 100%; height: 740px; border: 1px solid rgba(20,20,19,0.10); border-radius: 12px; background: white; box-shadow: 0 1px 2px rgba(20,20,19,0.04), 0 4px 16px rgba(20,20,19,0.06);"
  loading="lazy"
></iframe>

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

<svg width="700" height="420" viewBox="0 0 800 460" style="background: white; border-radius: 12px; box-shadow: 0 1px 2px rgba(20,20,19,0.04), 0 4px 16px rgba(20,20,19,0.06); display: block;">
  <g stroke="#e8e6dc" stroke-width="1">
    <line x1="80" y1="80" x2="760" y2="80" />
    <line x1="80" y1="160" x2="760" y2="160" />
    <line x1="80" y1="240" x2="760" y2="240" />
    <line x1="80" y1="320" x2="760" y2="320" />
  </g>
  <line x1="80" y1="40" x2="80" y2="380" stroke="#141413" stroke-width="2" />
  <line x1="80" y1="380" x2="760" y2="380" stroke="#141413" stroke-width="2" />

  <text class="svg-axis" x="80"  y="402" text-anchor="middle">0%</text>
  <text class="svg-axis" x="216" y="402" text-anchor="middle">20%</text>
  <text class="svg-axis" x="352" y="402" text-anchor="middle">40%</text>
  <text class="svg-axis" x="488" y="402" text-anchor="middle">60%</text>
  <text class="svg-axis" x="624" y="402" text-anchor="middle">80%</text>
  <text class="svg-axis" x="760" y="402" text-anchor="middle">100%</text>

  <text class="svg-axis" x="68" y="64"  text-anchor="end">High</text>
  <text class="svg-axis" x="68" y="384" text-anchor="end">Low</text>

  <text class="svg-label" x="420" y="438" text-anchor="middle">Context Window Usage (%)</text>
  <text class="svg-label" x="28" y="210" text-anchor="middle" transform="rotate(-90 28 210)">Model Intelligence / Accuracy</text>

  <path d="M 80,60 L 540,60 Q 600,60 640,110 Q 690,240 740,360 L 760,378"
        stroke="#d97757" stroke-width="4" fill="none" stroke-linecap="round" />

  <text class="svg-anno-em" x="430" y="240">Performance Degrades</text>
  <text class="svg-anno-zh" x="430" y="266">（遗忘指令 / 犯错）</text>

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
<code>CLAUDE.md</code><br/><code>.claude/rules/</code><br/>
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

# Daily Job Card

<div class="big-icon mt-4">🎯</div>

---

<div class="section-eyebrow">Demo 目标 · 完整流程</div>

# 9 步 · 从 idea 到能跑

<div class="grid mt-6" style="grid-template-columns: 1fr 1fr; gap: 32px;">

<div class="card card-accent">
<div class="pill pill-accent">Phase A · 开局 5 件事</div>
<ol class="mt-3" style="font-size: 17px; line-height: 1.8;">
  <li><strong>PRD</strong> — 把 idea 写成结构化文档</li>
  <li><strong>Rules</strong> — <code>CLAUDE.md</code> 约束 AI 行为</li>
  <li><strong>design.md</strong> — 颜色 / 字体 / 间距规范</li>
  <li><strong>README</strong> — 项目长什么样</li>
  <li><strong>CLAUDE.md</strong> — AI 项目记忆</li>
</ol>
</div>

<div class="card card-blue">
<div class="pill">Phase B · 让 AI 动手</div>
<ol class="mt-3" start="6" style="font-size: 17px; line-height: 1.8;">
  <li><strong>PLAN</strong> — Plan Mode 列文件再写</li>
  <li><strong>IMPLEMENTATION</strong> — AI 写代码 + 你边讲</li>
  <li><strong>DEBUG</strong> — 报错贴回 Claude</li>
  <li><strong>PR</strong> — AI 写 commit · 你 review</li>
</ol>
</div>

</div>

<blockquote class="mt-6 text-center" style="font-size: 18px;">
产出：<code>daily-jobs.html</code> · 单文件 · 双击能跑 · 学员明天就能用
</blockquote>

---
layout: section
class: text-center
---

<div class="section-eyebrow">Phase A</div>

# 项目开局 · 5 件事

<div class="muted mt-4">PRD · Rules · design.md · README · CLAUDE.md</div>

---

<div class="section-eyebrow">Step 1 · PRD</div>

## PRD · 写给 AI 看

<div class="terminal mt-3" style="font-size: 16px; line-height: 1.55; padding: 18px 24px;">

<div class="t-row"><span class="t-meta">~/projects/daily-jobs</span> · <span class="t-prompt">❯</span> <span class="t-cmd">claude</span></div>
<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-prompt">›</span> 我要做 <code style="color:#faf9f5;">daily-jobs.html</code> — 单文件，每天推荐工作机会。</div>
<div class="t-row" style="padding-left:18px;">- 顶部搜索框：关键词 / 城市过滤 · 写 localStorage</div>
<div class="t-row" style="padding-left:18px;">- 15 条示例 jobs · "今日推荐" hero · ⭐ 收藏</div>
<div class="t-row" style="padding-left:18px;">- 纯 HTML + JS · 不要 npm install · 双击能跑</div>
<div class="t-row" style="padding-left:18px;"><strong style="color:#faf9f5;">先给我 PRD，等我确认。</strong></div>
<div class="t-row"><span class="t-ai">⏺</span> <span class="t-em">Drafting PRD.md...</span></div>

<div class="t-plan" style="padding: 14px 18px; margin: 10px 0;">
<div class="t-plan-header" style="font-size: 18px; margin-bottom: 6px;">📋 PRD · Daily Job Card v0.1</div>
<ol style="list-style: none; padding-left: 0; font-size: 15px; line-height: 1.55;">
  <li><strong style="color:#faf9f5;">1. Goal</strong> · 求职者每天打开 1 个 HTML，看到匹配岗位</li>
  <li><strong style="color:#faf9f5;">2. User</strong> · 学员本人 · 单设备 · 浏览器</li>
  <li><strong style="color:#faf9f5;">3. Data</strong> · <code>Job { id, title, company, location, salary, link }</code></li>
  <li><strong style="color:#faf9f5;">4. UI</strong> · Hero + 搜索 + 卡片列表 + ⭐ 收藏</li>
  <li><strong style="color:#faf9f5;">5. Storage</strong> · <code>localStorage</code> 存关键词 + 收藏</li>
  <li><strong style="color:#faf9f5;">6. Out of scope</strong> · 后端 / 登录 / 真实 API</li>
</ol>
</div>

<div class="t-row"><span class="t-mode">⏸ plan mode · awaiting approval</span></div>

</div>

<blockquote class="mt-3" style="font-size: 18px;">
我<strong>没说</strong>"写代码" — 先要 PRD。这就是 PLAN MODE 思维。
</blockquote>

---

<div class="section-eyebrow">Step 2 · Rules · 概念 + 目录</div>

# <code>CLAUDE.md</code> + <code>.claude/rules/</code> 约束 AI

<div class="grid mt-4" style="grid-template-columns: 1.1fr 1fr; gap: 32px;">

<div class="terminal" style="font-size: 16px;">
<div class="t-row"><span class="t-meta">~/projects/daily-jobs</span></div>
<div class="t-row"><span class="t-prompt">❯</span> <span class="t-cmd">tree -L 3 . | grep -v node_modules</span></div>
<div class="t-row">&nbsp;</div>
<div class="t-row" style="color:#d4d2c8;">.</div>
<div class="t-row" style="color:#d4d2c8;">├── <span style="color:#d97757;">CLAUDE.md</span>                   <span class="t-meta"># 项目主入口 · AI 启动自动读</span></div>
<div class="t-row" style="color:#d4d2c8;">├── <span style="color:#6a9bcc;">.claude/</span></div>
<div class="t-row" style="color:#d4d2c8;">│   ├── <span style="color:#6a9bcc;">rules/</span>                  <span class="t-meta"># 模块化规则</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │   ├── architecture.md  <span class="t-meta"># 系统架构</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │   ├── <span style="color:#6a9bcc;">frontend/</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │   │   ├── component.md  <span class="t-meta"># 前端组件</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │   │   ├── styling.md    <span class="t-meta"># 样式 + 主题</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │   │   └── state.md      <span class="t-meta"># 状态管理</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │   ├── <span style="color:#6a9bcc;">backend/</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │   │   ├── api-design.md <span class="t-meta"># API</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │   │   └── database.md   <span class="t-meta"># 数据库</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │   ├── <span style="color:#6a9bcc;">workflow/</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │   │   ├── git.md        <span class="t-meta"># Git</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │   │   └── ci-cd.md      <span class="t-meta"># CI/CD</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │   └── <span style="color:#6a9bcc;">code-quality/</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │       ├── naming.md     <span class="t-meta"># 命名</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │       ├── testing.md    <span class="t-meta"># 测试</span></div>
<div class="t-row" style="color:#d4d2c8;">│   │       └── performance.md <span class="t-meta"># 性能</span></div>
<div class="t-row" style="color:#d4d2c8;">│   ├── <span style="color:#788c5d;">commands/</span>               <span class="t-meta"># 自定义 /slash 命令</span></div>
<div class="t-row" style="color:#d4d2c8;">│   └── <span style="color:#788c5d;">skills/</span>                 <span class="t-meta"># 复用型 skill 模块</span></div>
</div>

<div class="stagger" style="display: flex; flex-direction: column; gap: 16px;">

<div class="card card-accent">
<h3>为什么要 Rules？</h3>
<p>让 AI 的回答 <strong>不会那么随心所欲</strong> — 约束它符合我们的项目要求。</p>
</div>

<div class="card card-blue">
<h3>CLAUDE.md 是核心</h3>
<p>项目根目录 · Claude Code 启动 <strong>自动读</strong>。子模块用 <code>@import .claude/rules/xxx.md</code> 引入。</p>
</div>

<div class="card card-sage">
<h3>怎么拆分</h3>
<p>按 <strong>架构 / 前后端 / 工作流 / 代码质量</strong> 4 大类，每个 <code>.md</code> 一个 topic。复杂度低就全写在 CLAUDE.md。</p>
</div>

</div>

</div>

---

<div class="section-eyebrow">Step 2 · Rules · 三大核心原则</div>

# SOLID · DRY · KISS · 你必须教 AI 的常识

<div class="grid grid-cols-3 gap-6 mt-8 stagger">

<div class="card card-accent">
<div class="big-icon-sm">🏛️</div>
<h3>SOLID</h3>
<p style="font-size: 17px; line-height: 1.6;">
<strong>S</strong>ingle Responsibility · 每个模块一件事<br/>
<strong>O</strong>pen/Closed · 扩展开放 / 修改关闭<br/>
<strong>L</strong>iskov Substitution · 子类可替换父类<br/>
<strong>I</strong>nterface Segregation · 接口窄 → 不臃肿<br/>
<strong>D</strong>ependency Inversion · 依赖抽象不依赖具体
</p>
</div>

<div class="card card-blue">
<div class="big-icon-sm">🔁</div>
<h3>DRY</h3>
<p style="font-size: 18px; line-height: 1.7;">
<strong>D</strong>on't <strong>R</strong>epeat <strong>Y</strong>ourself
</p>
<p style="font-size: 16px; line-height: 1.6; color: var(--c-mid-gray);">
每个知识点在 codebase 里有<strong>唯一权威表达</strong>。
不要 copy-paste · 抽出可复用的 function / constant / config。
</p>
</div>

<div class="card card-sage">
<div class="big-icon-sm">✂️</div>
<h3>KISS</h3>
<p style="font-size: 18px; line-height: 1.7;">
<strong>K</strong>eep <strong>I</strong>t <strong>S</strong>imple, <strong>S</strong>tupid
</p>
<p style="font-size: 16px; line-height: 1.6; color: var(--c-mid-gray);">
favor 最简单能跑的设计。
避免 clever 一行 · 不必要的 pattern · 过早优化 —
今天的读者（包括你未来 self 和 LLM）会感谢你。
</p>
</div>

</div>

---

<div class="section-eyebrow">Step 2 · Rules · 13 条可执行清单</div>

# Rules List · 写进 <code>CLAUDE.md</code> 或 <code>.claude/rules/code-quality.md</code>

<div class="grid grid-cols-2 gap-6 mt-6 stagger">

<div class="card card-accent">
<h4 style="color: var(--c-terracotta);">🛡️ 工程纪律</h4>
<ul style="font-size: 18px; line-height: 1.7; margin: 8px 0 0;">
<li>Single Responsibility</li>
<li>Clear Naming</li>
<li>No Hard-Coded Secrets</li>
<li>Comments First</li>
<li>Test-Driven</li>
<li>Explicit Error Handling</li>
<li>Secure by Default</li>
</ul>
</div>

<div class="card card-blue">
<h4 style="color: var(--c-blue);">⚡ 性能 + 可读性</h4>
<ul style="font-size: 18px; line-height: 1.7; margin: 8px 0 0;">
<li>Performance Boundaries</li>
<li>Minimal Dependencies</li>
<li>YAGNI — You Aren't Gonna Need It</li>
<li>Code for the Reader</li>
<li>Every exported value has explicit type / interface</li>
<li>No <code>any</code> unless whitelisted</li>
</ul>
</div>

</div>

<div class="card card-sage mt-6" style="padding: 18px 24px;">

<h4 style="color: var(--c-sage); margin: 0;">🎯 三步用法 · 落地这套规则</h4>
<div class="grid grid-cols-3 gap-4 mt-3">
  <div><strong>1. Prompt it in</strong><br/><span style="font-size: 14px;">"Follow SOLID, DRY, KISS, and readability rules above."</span></div>
  <div><strong>2. Audit the output</strong><br/><span style="font-size: 14px;">每个 PR 对照 13 点 checklist 检查</span></div>
  <div><strong>3. Refine</strong><br/><span style="font-size: 14px;">AI 违反规则 → 更新 prompt 或 inline comment 再问</span></div>
</div>

</div>

---

<div class="section-eyebrow">Step 3 · design.md · 设计规范</div>

# 让 AI 知道 "好看是什么" · 不靠它瞎猜

<div class="grid mt-4" style="grid-template-columns: 1fr 1fr; gap: 32px;">

<div>

```markdown
# Design System · daily-jobs

## Color
- Background: #faf9f5 (cream)
- Text: #141413 (near-black)
- Accent: #d97757 (terracotta)
- Secondary: #6a9bcc (dusty blue)

## Typography
- Headings: Poppins 700 / 800
- Body: Lora 400 (serif)
- Mono: JetBrains Mono

## Spacing
8px base · 8 / 16 / 24 / 32 / 48 / 64 / 96

## Shapes
- Border-radius: 8px (cards) · 999px (pills)
- Shadow: 0 1px 2px rgba(0,0,0,0.04),
          0 4px 16px rgba(0,0,0,0.06)
- Border: none, or 1px @ 8% opacity
```

</div>

<div class="stagger" style="display: flex; flex-direction: column; gap: 16px;">

<div class="card card-accent">
<h3>为什么要 design.md？</h3>
<p>没有它 → AI 默认套 Bootstrap 风 + 蓝色按钮 + 圆角乱给。<br/>有它 → AI 套你的色板和字体。</p>
</div>

<div class="card card-blue">
<h3>该写什么</h3>
<p><strong>颜色 · 字体 · 间距 · 圆角 · 阴影</strong> 5 件事。<br/>放 hex / px 数值，不要"友好"、"现代"这种形容词。</p>
</div>

<div class="card card-sage">
<h3>怎么用</h3>
<p>放在 repo 根目录 / 在 PRD 里引用 <code>see design.md</code>。<br/>AI 会自动读。</p>
</div>

</div>

</div>

---

<div class="section-eyebrow">Step 4 + 5 · README + CLAUDE.md</div>

# 给人看的 README · 给 AI 看的 CLAUDE.md

<div class="grid mt-6" style="grid-template-columns: 1fr 1fr; gap: 32px;">

<div class="card card-accent" style="padding: 28px 32px;">

<div class="big-icon-sm">📖</div>
<h3>README.md · 给人看</h3>

```markdown
# daily-jobs

每天打开看到匹配的工作机会。

## Run
double-click daily-jobs.html

## Features
- 关键词 / 城市搜索
- localStorage 存"我的关注"
- ⭐ 收藏 / 一键 Copy JD

## Stack
HTML + JS + Tailwind CDN · 0 deps
```

<p style="font-size: 16px;" class="muted mt-2">
新人 / 协作者 / 未来的你打开第一眼看的东西。
</p>

</div>

<div class="card card-blue" style="padding: 28px 32px;">

<div class="big-icon-sm">🤖</div>
<h3>CLAUDE.md · 给 AI 看</h3>

```markdown
# Project Memory · daily-jobs

## Tech constraints
- 单文件 HTML · 严禁拆多文件
- 不要引 React / Vue / 任何 framework
- Tailwind 用 CDN · 不要本地编译

## Style
按 design.md · cream + 赤陶橙

## Don't
- 不要加 backend
- 不要加 login
- 不要"顺便重构"未提到的部分
```

<p style="font-size: 16px;" class="muted mt-2">
Claude Code 启动时<strong>自动读</strong> · 永久生效。
</p>

</div>

</div>

<blockquote class="mt-4 text-center" style="font-size: 18px;">
README 给<strong>人</strong>看 · CLAUDE.md 给<strong>AI</strong>看 · 两者并存不冲突
</blockquote>

---
layout: section
class: text-center
---

<div class="section-eyebrow">Phase B</div>

# 让 AI 真正动手

<div class="muted mt-4">PLAN · IMPLEMENTATION · DEBUG · PR</div>

---
layout: center
---

<div class="section-eyebrow">PLAN MODE</div>

# Plan Mode 是 Vibe Coding 的灵魂

<div class="big-icon mt-4">🧭</div>

<div class="pull-quote">
先让 AI <strong>想清楚</strong> 再动手 —— 省下 90% 返工
</div>

<div class="grid grid-cols-2 gap-8 mt-8">
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

<div class="section-eyebrow">怎么进入 Plan Mode</div>

# 在终端按 <span class="t-key" style="font-size: inherit; padding: 4px 12px;">Shift</span> + <span class="t-key" style="font-size: inherit; padding: 4px 12px;">Tab</span>

<div class="terminal mt-3" style="font-size: 16px; padding: 18px 24px;">

<div class="t-row"><span class="t-meta">~/projects/daily-jobs</span> · <span class="t-prompt">❯</span> <span class="t-cmd">claude</span></div>
<div class="t-banner">⏵ Claude Code · Anthropic · v0.49</div>
<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-prompt">›</span> 帮我做 <code>daily-jobs.html</code> · 单文件 · 自动推荐工作机会。</div>
<div class="t-row" style="padding-left:18px;">15 条示例 jobs · 关键词搜索 · localStorage 收藏。</div>
<div class="t-row" style="padding-left:18px;"><strong style="color:#faf9f5;">先给我 PRD，等我确认。</strong></div>
<div class="t-row"><span class="t-ai">⏺</span> <span class="t-em">Let me plan this out before writing any code...</span></div>

<div class="t-plan" style="padding: 14px 18px; margin: 8px 0;">
<div class="t-plan-header" style="font-size: 18px;">📋 Plan</div>
<ol style="font-size: 15px; line-height: 1.55;">
  <li>Single <code>daily-jobs.html</code> · &lt;style&gt; + &lt;body&gt; + &lt;script&gt;</li>
  <li>JOBS[] · 15 条种子数据 · 内嵌 JSON</li>
  <li><code>renderHero()</code> · 随机选 1 条匹配 hero</li>
  <li><code>renderList()</code> · 过滤 + 卡片 + ⭐ 收藏</li>
  <li><code>onSearchInput()</code> · debounce 写 localStorage</li>
</ol>
<div class="t-plan-footer"><span class="t-key">Tab</span> to accept · <span class="t-key">e</span> to edit · <span class="t-key">Esc</span> to refine</div>
</div>

<div class="t-row"><span class="t-mode">⏸ plan mode · read-only · no files written</span></div>

</div>

<blockquote class="mt-3" style="font-size: 18px;">
看到了吗？AI 没动一行代码 — 列出 5 个块等你按 <strong>Tab</strong> 才开始。
</blockquote>

---

<div class="section-eyebrow">Step 6 · PLAN</div>

# 列出实现方案 · 等我确认

<div class="terminal mt-4">

<div class="t-row"><span class="t-prompt">›</span> PRD 看起来不错。请列出 <code>daily-jobs.html</code> 的代码块结构 + 每块职责。</div>
<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-ai">⏺</span> <span class="t-em">Single file with 4 sections...</span></div>

<div class="t-plan">
<div class="t-plan-header">📋 daily-jobs.html · Plan</div>
<ol>
  <li><code>&lt;style&gt;</code> · Tailwind via CDN + 自定义 hero 样式</li>
  <li><code>JOBS = [...]</code> · 15 条种子数据（AI Engineer / Frontend / Data ...）</li>
  <li><code>renderHero()</code> · 随机选一个匹配关键词的 job 当 hero</li>
  <li><code>renderList()</code> · 按搜索框过滤 + 卡片渲染</li>
  <li><code>onSearchInput()</code> · 节流写 localStorage + 重渲</li>
  <li><code>copyJD()</code> · navigator.clipboard 复制描述</li>
</ol>
<div class="t-plan-footer"><span class="t-key">Tab</span> to accept · <span class="t-key">e</span> to edit · <span class="t-key">Esc</span> to refine</div>
</div>

<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-prompt">›</span> 漏了一个：把"我收藏的 jobs"也存 localStorage，每个卡片加个 ⭐ 按钮。然后开始写。</div>
<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-ai">⏺</span> <span class="t-em">Updated plan + 1 function. Starting implementation...</span></div>

</div>

<blockquote class="mt-4" style="font-size: 18px;">
不满意 → 直接说 → AI 改 plan，<strong>没动一行代码</strong>
</blockquote>

---

<div class="section-eyebrow">Step 7 · IMPLEMENTATION</div>

# 让 AI 写 · 你边看边讲解

<div class="terminal mt-4">

<div class="t-row"><span class="t-ai">⏺</span> <span class="t-em">Implementing daily-jobs.html...</span></div>
<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-cmd" style="color:#788c5d;">✓</span> Created <code style="color:#6a9bcc;">daily-jobs.html</code> <span class="t-meta">(238 lines · single file · 0 dependencies)</span></div>
<div class="t-row" style="padding-left:18px;"><span class="t-meta">├─ &lt;style&gt; Tailwind CDN + hero gradient</span></div>
<div class="t-row" style="padding-left:18px;"><span class="t-meta">├─ JOBS[] · 15 条种子（AI Engineer · Frontend · Data ...）</span></div>
<div class="t-row" style="padding-left:18px;"><span class="t-meta">├─ renderHero() · 随机选 1 条匹配 hero</span></div>
<div class="t-row" style="padding-left:18px;"><span class="t-meta">├─ renderList() · 过滤 + 卡片渲染 + ⭐ 收藏</span></div>
<div class="t-row" style="padding-left:18px;"><span class="t-meta">├─ onSearchInput() · debounce 200ms · 写 localStorage</span></div>
<div class="t-row" style="padding-left:18px;"><span class="t-meta">└─ copyJD() · navigator.clipboard.writeText()</span></div>
<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-ai">⏺</span> Done · 1 file · <span class="t-meta">直接</span> <code style="color:#faf9f5;">open daily-jobs.html</code></div>

</div>

<div class="grid grid-cols-3 gap-4 mt-4">
  <div class="card card-accent" style="padding: 16px 20px;">
    <strong>不要发呆</strong>
    <p style="font-size:14px; margin: 4px 0 0;">边写边讲每段的作用</p>
  </div>
  <div class="card card-blue" style="padding: 16px 20px;">
    <strong>指出 AI 的取舍</strong>
    <p style="font-size:14px; margin: 4px 0 0;">"它用 Tailwind CDN 不打包，因为单文件不能 npm install"</p>
  </div>
  <div class="card card-sage" style="padding: 16px 20px;">
    <strong>有 bug 不要慌</strong>
    <p style="font-size:14px; margin: 4px 0 0;">让 AI 自己 debug — <strong>真实工作流</strong></p>
  </div>
</div>

---

<div class="section-eyebrow">Step 8 · DEBUG</div>

# 浏览器报错？直接贴回 Claude

<div class="terminal mt-4">

<div class="t-row"><span class="t-prompt">❯</span> <span class="t-cmd">open daily-jobs.html</span></div>
<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-meta">// 现场点击搜索框，输入 "AI Engineer"...</span></div>
<div class="t-row"><span style="color:#e8a070;">⨯ Console:</span> <span style="color:#e8a070;">Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')</span></div>
<div class="t-row"><span class="t-meta">    at daily-jobs.html:142</span></div>
<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-prompt">›</span> <span class="t-cmd">[paste 错误]</span> 搜索框 listener 报 null。</div>
<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-ai">⏺</span> <span class="t-em">脚本在 DOM 渲染前执行了。两个修法：</span></div>
<div class="t-row" style="padding-left:18px;"><span class="t-meta">A. 把 &lt;script&gt; 移到 &lt;/body&gt; 之前</span></div>
<div class="t-row" style="padding-left:18px;"><span class="t-meta">B. 包一层 DOMContentLoaded</span></div>
<div class="t-row"><span class="t-ai">⏺</span> <span class="t-em">用 B 改一行...</span></div>
<div class="t-row"><span class="t-cmd" style="color:#788c5d;">✓</span> Updated <code style="color:#6a9bcc;">daily-jobs.html</code> <span class="t-meta">+ 2 lines · DOMContentLoaded wrapper</span></div>

</div>

<div class="card card-muted mt-4" style="padding: 16px 24px;">

### 真实开发常见 — AI 经常忘
```bash
lsof -i:3000      # 查端口占用
kill -9 [PID]     # 强杀旧进程
```

</div>

---

<div class="section-eyebrow">Step 9 · PR</div>

# 让 AI 写 commit · 你 review

<div class="terminal mt-4">

<div class="t-row"><span class="t-prompt">›</span> 帮我 commit。conventional commit 格式，<strong style="color:#faf9f5;">不要 push</strong>，我自己来。</div>
<div class="t-row">&nbsp;</div>
<div class="t-row"><span class="t-ai">⏺</span> <span class="t-em">Staging 1 file · drafting message...</span></div>

<div class="t-plan">
<div class="t-plan-header">💾 Commit Message</div>
<div style="color: #faf9f5; font-size: 14px;">
feat(jobs): daily-jobs.html · 自动推荐工作机会<br/>
<br/>
- 单文件 HTML · Tailwind CDN · 0 dependencies<br/>
- 15 条种子岗位 · 关键词搜索 + 城市过滤<br/>
- localStorage 存"我的关键词"和"⭐ 收藏"<br/>
- Hero "今日推荐" + 一键 Copy JD<br/>
- 238 lines · 双击打开即用<br/>
</div>
</div>

<div class="t-row"><span class="t-cmd" style="color:#788c5d;">✓</span> <code style="color:#6a9bcc;">git commit</code> <span class="t-meta">[main 7a3f2c1]</span></div>
<div class="t-row"><span class="t-meta">    Skipped: git push (per your request)</span></div>

</div>

<div style="text-align: center; margin-top: 24px;">
<div class="pull-quote accent" style="font-size: 32px;">
30 分钟 · 从 idea 到一个你<strong>明天就能用</strong>的工具
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

<div style="margin-top: 64px; display: flex; justify-content: center;">
  <img src="/jr-logo.svg" alt="JR Academy" style="height: 48px; opacity: 0.85;" />
</div>

<div class="cover-byline mt-8">Lightman / JR Academy</div>
