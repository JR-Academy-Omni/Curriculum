---
theme: default
title: Build Your First Claude Skill
info: |
  ## JR Academy · Skill Workshop · 半天课
  从零到上线，30 分钟做出你的第一个 Claude Skill。
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
canvasWidth: 1280
aspectRatio: 16/9
layout: default
fonts:
  sans: 'Inter, Noto Sans SC, PingFang SC'
  serif: 'EB Garamond, Songti SC'
  mono: 'JetBrains Mono'
---

<!-- ====================================================
     P01 · 封面
     ==================================================== -->

<div class="masthead">
  <div>
    <span class="badge">JR ACADEMY</span>
    <span style="margin-left: 0.6rem;">SKILL WORKSHOP · VOL 001</span>
  </div>
  <div>2026 · 04 · 28</div>
</div>

<div style="flex: 1; display: grid; grid-template-columns: 1fr auto; gap: 2rem; align-items: center;">

<div style="text-align: left;">

<div style="font-family: var(--f-mono); font-size: 0.78rem; margin-bottom: 0.75rem;">
  <span class="highlight">本期金句 · HIGHLIGHT</span>
</div>

<div style="font-family: var(--f-cn-bold); font-weight: 900; font-size: 1.3rem; margin-bottom: 1.8rem; max-width: 32rem;">
  架构比 Prompt 更值得抄。
</div>

<h1 style="font-family: var(--f-cn-bold); font-weight: 900; font-size: 3rem; line-height: 1.05; text-align: left; margin: 0;">
  从零做出<br/>
  你的第一个<br/>
  <span class="highlight">Claude Skill</span>。
</h1>

<div style="font-family: var(--f-serif); font-style: italic; font-size: 1.2rem; color: var(--c-ink-soft); margin-top: 1rem; text-align: left;">
  how to build a production-ready skill in a single sitting.
</div>

</div>

<div style="display: flex; flex-direction: column; align-items: center; gap: 0.6rem;">

<img src="/claude-logo.svg" alt="Claude" style="width: 220px; height: auto; filter: drop-shadow(4px 4px 0 var(--c-ink));" />

<div style="font-family: var(--f-mono); font-size: 0.65rem; letter-spacing: 0.15em; color: var(--c-muted); text-transform: uppercase;">
  Built on Claude
</div>

</div>

</div>

<div class="bottom-meta">
  <div>★ DURATION · 4 H</div>
  <div>SLIDES · 36</div>
  <div>LANGUAGE · 中 · EN</div>
  <div>#001 · WORKSHOP</div>
</div>

---
layout: default
---

<!-- ====================================================
     P02 · 课程地图
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">课程地图</span><span style="margin-left: 0.6rem;">COURSE MAP</span></div>
  <div>P.02 / 36</div>
</div>

# 4 小时，9 个章节

<div class="grid grid-cols-3 gap-4 mt-6">

<div v-click class="card">
  <div class="fig-tag">CH.0 · 10 MIN</div>
  <h3 style="margin-top: 0.5rem;">开场</h3>
  <p style="font-size: 0.95rem;">课程地图 + 终点：你今天能做出什么。</p>
</div>

<div v-click class="card" style="background: var(--c-accent);">
  <div class="fig-tag">CH.1 · 30 MIN</div>
  <h3 style="margin-top: 0.5rem;">什么是 Skill</h3>
  <p style="font-size: 0.95rem;">概念建立 + Skill / MCP / Tool 区分。</p>
</div>

<div v-click class="card">
  <div class="fig-tag">CH.2 · 30 MIN</div>
  <h3 style="margin-top: 0.5rem;">Anatomy</h3>
  <p style="font-size: 0.95rem;">文件结构 + 三层进步式披露。</p>
</div>

<div v-click class="card">
  <div class="fig-tag">CH.3 · 30 MIN</div>
  <h3 style="margin-top: 0.5rem;">Planning</h3>
  <p style="font-size: 0.95rem;">先有 Use Case，再写代码。</p>
</div>

<div v-click class="card" style="background: var(--c-accent);">
  <div class="fig-tag">CH.4 · 45 MIN</div>
  <h3 style="margin-top: 0.5rem;">写好 SKILL.md</h3>
  <p style="font-size: 0.95rem;">YAML + Markdown 工艺（核心）。</p>
</div>

<div v-click class="card">
  <div class="fig-tag">CH.5 · 30 MIN</div>
  <h3 style="margin-top: 0.5rem;">Test & Iterate</h3>
  <p style="font-size: 0.95rem;">三种测试 + 反馈循环。</p>
</div>

<div v-click class="card">
  <div class="fig-tag">CH.6 · 25 MIN</div>
  <h3 style="margin-top: 0.5rem;">Distribution</h3>
  <p style="font-size: 0.95rem;">Claude.ai / GitHub / API。</p>
</div>

<div v-click class="card">
  <div class="fig-tag">CH.7 · 25 MIN</div>
  <h3 style="margin-top: 0.5rem;">Patterns</h3>
  <p style="font-size: 0.95rem;">5 种进阶模式 + 5 大坑。</p>
</div>

<div v-click class="card" style="background: var(--c-signal); color: white;">
  <div class="fig-tag" style="color: white;">CH.8 · 25 MIN</div>
  <h3 style="margin-top: 0.5rem; color: white;">实战</h3>
  <p style="font-size: 0.95rem;">现场用 skill-creator 做一个 Skill。</p>
</div>

</div>

<div class="bottom-meta">
  <div>OUTLINE · 9 CHAPTERS</div>
  <div>HANDS-ON · 15%</div>
  <div>DEMO · 25%</div>
  <div>P.02</div>
</div>

---
layout: default
class: chapter-cover
style: 'background-color: #8FA773;'
---

<!-- ====================================================
     P03 · 章节封面 1
     ==================================================== -->

<div class="ch-tag">Chapter 1</div>

<h1 style="font-family: var(--f-serif); font-weight: 500; font-size: 4.5rem; line-height: 1.05;">
  什么是 Skill
</h1>

<div style="margin-top: 1.5rem; font-family: var(--f-mono); font-size: 0.9rem; opacity: 0.75;">
  Skill = 把你的 best practice 装进一个文件夹。
</div>

---
layout: default
---

<!-- ====================================================
     P04 · 一个真实痛点
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">PROBLEM</span><span style="margin-left: 0.6rem;">CH.1 · 痛点场景</span></div>
  <div>P.04 / 36</div>
</div>

# 你是不是也写过这样的 Prompt？

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

<div class="fig-tag" style="margin-bottom: 0.5rem;">FIG.01 · 第一次</div>

```text
"帮我用 Linear 规划这周的 Sprint，
要先看团队 velocity，
然后按优先级排，
还要给每个 task 加 estimate……"
```

<div style="margin-top: 1rem;" class="fig-tag">FIG.02 · 第二周再来一遍</div>

```text
"帮我用 Linear 规划这周的 Sprint，
要先看团队 velocity，
（重复同样的话）……"
```

</div>

<div>

<h3>痛在哪？</h3>

<ul>
<li>每次重写一遍同样的 Prompt</li>
<li>团队里每个人写出来不一样</li>
<li>今天能跑、明天忘了某一步</li>
<li>新人加入要从零教一次</li>
</ul>

<div style="margin-top: 2rem; padding: 1rem; background: var(--c-accent); border: 1px solid var(--c-ink);">
  <strong>Skill 解决的就是这件事 ——</strong><br/>
  把"做这件事的最佳实践"装进一个文件夹，让 Claude 自动加载。
</div>

</div>
</div>

<div class="bottom-meta">
  <div>痛点 · MOTIVATION</div><div></div><div></div><div>P.04</div>
</div>

---
layout: default
---

<!-- ====================================================
     P05 · Skill 的官方定义
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">DEFINITION</span><span style="margin-left: 0.6rem;">CH.1 · 官方定义</span></div>
  <div>P.05 / 36</div>
</div>

# Skill 的官方定义

<blockquote style="font-size: 1.4rem; max-width: 50rem; margin-top: 2rem;">
A <span class="highlight">skill</span> is a set of instructions — packaged as a simple folder — that teaches Claude how to handle specific tasks or workflows.
</blockquote>

<div class="grid grid-cols-3 gap-4 mt-8">

<div v-click class="card">
  <div class="fig-tag" style="color: var(--c-signal);">FIG.01</div>
  <h3>一组指令</h3>
  <p style="font-size: 0.95rem;">
  用 Markdown 写的、Claude 看得懂的步骤说明。<br/>
  <em style="color: var(--c-muted);">Not code. Plain English (or 中文).</em>
  </p>
</div>

<div v-click class="card">
  <div class="fig-tag" style="color: var(--c-signal);">FIG.02</div>
  <h3>一个文件夹</h3>
  <p style="font-size: 0.95rem;">
  打包成可以分享的目录，里面可以带脚本、文档、模板。<br/>
  <em style="color: var(--c-muted);">Just a folder. Zip it and ship it.</em>
  </p>
</div>

<div v-click class="card">
  <div class="fig-tag" style="color: var(--c-signal);">FIG.03</div>
  <h3>教 Claude 做事</h3>
  <p style="font-size: 0.95rem;">
  Claude 在合适的时候自动加载，不用你每次都写一遍。<br/>
  <em style="color: var(--c-muted);">Loaded automatically when relevant.</em>
  </p>
</div>

</div>

<div class="bottom-meta">
  <div>DEFINITION · 三句话</div><div></div><div></div><div>P.05</div>
</div>

---
layout: default
---

<!-- ====================================================
     P06 · Skill vs MCP vs Tool
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">CONCEPTS</span><span style="margin-left: 0.6rem;">CH.1 · 三个易混概念</span></div>
  <div>P.06 / 36</div>
</div>

# 厨房比喻：MCP × Skill × Tool

<div class="grid grid-cols-3 gap-4 mt-6">

<div v-click class="card" style="background: #FFF; border-top: 6px solid var(--c-signal);">
  <div class="fig-tag" style="color: var(--c-signal);">MCP</div>
  <h2 style="margin-top: 0.5rem;">🏭 厨房</h2>
  <p><strong>提供连接性</strong></p>
  <p style="font-size: 0.95rem;">
  接进 Notion / Linear / Slack 这些外部服务，让 Claude 能访问你的数据和工具。
  </p>
  <p style="font-size: 0.85rem; color: var(--c-muted);">
  <em>What Claude can do.</em>
  </p>
</div>

<div v-click class="card" style="background: var(--c-accent); border-top: 6px solid var(--c-ink);">
  <div class="fig-tag">SKILL</div>
  <h2 style="margin-top: 0.5rem;">📖 菜谱</h2>
  <p><strong>提供知识 / 工艺</strong></p>
  <p style="font-size: 0.95rem;">
  教 Claude 怎么用厨房里的工具，把原始的 tool call 变成可复用的最佳实践。
  </p>
  <p style="font-size: 0.85rem; color: var(--c-muted);">
  <em>How Claude should do it.</em>
  </p>
</div>

<div v-click class="card" style="background: #FFF; border-top: 6px solid var(--c-muted);">
  <div class="fig-tag">TOOL</div>
  <h2 style="margin-top: 0.5rem;">🔪 单件工具</h2>
  <p><strong>原子能力</strong></p>
  <p style="font-size: 0.95rem;">
  例如 <code>create_task</code>、<code>send_email</code>，Skill 和 MCP 都通过 Tool 落地。
  </p>
  <p style="font-size: 0.85rem; color: var(--c-muted);">
  <em>The unit of action.</em>
  </p>
</div>

</div>

<div style="margin-top: 1.5rem; padding: 1rem; background: var(--c-base-soft); border-left: 4px solid var(--c-signal);">
  <strong>记住这一句：</strong>MCP 给 Claude <em>access</em>，Skill 给 Claude <em>expertise</em>。
</div>

<div class="bottom-meta">
  <div>MCP × SKILL × TOOL</div><div></div><div></div><div>P.06</div>
</div>

---
layout: default
---

<!-- ====================================================
     P07 · 为什么 Skill 重要
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">WHY</span><span style="margin-left: 0.6rem;">CH.1 · 价值主张</span></div>
  <div>P.07 / 36</div>
</div>

# 为什么 Skill 值得你做？

<div class="grid grid-cols-2 gap-6 mt-6">

<div v-click class="card">
  <h3><span class="signal">①</span> Token 效率</h3>
  <p>三层进步式披露：metadata 只占 <strong>~100 tokens</strong>，SKILL.md 不超过 <strong>5,000 tokens</strong>，引用文件按需读。</p>
  <p style="font-size: 0.85rem; color: var(--c-muted);">不用每次塞满 context window。</p>
</div>

<div v-click class="card">
  <h3><span class="signal">②</span> 跨平台便携</h3>
  <p>同一个 Skill 在 <strong>Claude.ai · Claude Code · API</strong> 三端通用，写一次到处跑。</p>
  <p style="font-size: 0.85rem; color: var(--c-muted);">已被 Anthropic 推为开放标准（Agent Skills）。</p>
</div>

<div v-click class="card">
  <h3><span class="signal">③</span> 自动触发</h3>
  <p>Claude 看到匹配的 description 关键词时，<strong>自动加载</strong>对应 skill，不需要 user 手动 @mention。</p>
  <p style="font-size: 0.85rem; color: var(--c-muted);">90% 的相关查询都能命中（设计目标）。</p>
</div>

<div v-click class="card">
  <h3><span class="signal">④</span> 组合性强</h3>
  <p>多个 skill 可以同时启用，互不干扰。团队级 / 工作区级也能批量部署（2025-12-18 上线）。</p>
  <p style="font-size: 0.85rem; color: var(--c-muted);">企业管理员一次部署，全员自动更新。</p>
</div>

</div>

<div class="bottom-meta">
  <div>FOUR REASONS</div><div></div><div></div><div>P.07</div>
</div>

---
layout: default
class: chapter-cover
style: 'background-color: #C16A85;'
---

<!-- ====================================================
     P08 · 章节封面 2
     ==================================================== -->

<div class="ch-tag">Chapter 2</div>

<h1 style="font-family: var(--f-serif); font-weight: 500; font-size: 4.5rem; line-height: 1.05;">
  Skill 的<br/>解剖学
</h1>

<div style="margin-top: 1.5rem; font-family: var(--f-mono); font-size: 0.9rem; opacity: 0.75;">
  三层披露：让 Claude 只读它需要的。
</div>

---
layout: default
---

<!-- ====================================================
     P09 · 文件结构
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">STRUCTURE</span><span style="margin-left: 0.6rem;">CH.2 · 文件结构</span></div>
  <div>P.09 / 36</div>
</div>

# 一个 Skill 长什么样？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

```text
your-skill-name/
├── SKILL.md                # 必填 · 主入口
├── scripts/                # 可选 · 可执行代码
│   ├── process_data.py
│   └── validate.sh
├── references/             # 可选 · 文档资源
│   ├── api-guide.md
│   └── examples/
└── assets/                 # 可选 · 模板 / 图片
    └── report-template.md
```

</div>

<div>

<div v-click class="card">
  <h3><span class="signal">SKILL.md</span> <span style="font-size: 0.85rem; color: var(--c-muted);">(必填)</span></h3>
  <p>YAML frontmatter + Markdown 主体。文件名严格大小写敏感。</p>
</div>

<div v-click class="card" style="margin-top: 0.75rem;">
  <h3>scripts/</h3>
  <p>Python / Bash 脚本，Claude 在需要时调用。</p>
</div>

<div v-click class="card" style="margin-top: 0.75rem;">
  <h3>references/</h3>
  <p>详细文档、API 列表、示例 ——<strong> 按需加载</strong>，不进首层。</p>
</div>

<div v-click class="card" style="margin-top: 0.75rem;">
  <h3>assets/</h3>
  <p>模板、字体、icon —— 输出物用得上的素材。</p>
</div>

</div>
</div>

<div class="bottom-meta">
  <div>FILE TREE</div><div></div><div></div><div>P.09</div>
</div>

---
layout: default
---

<!-- ====================================================
     P10 · 进步式披露三层
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">PROGRESSIVE DISCLOSURE</span><span style="margin-left: 0.6rem;">CH.2 · 三层披露</span></div>
  <div>P.10 / 36</div>
</div>

# Progressive Disclosure · 三层进步式披露

<div class="grid grid-cols-3 gap-3 mt-4">

<div v-click class="card" style="background: #FFF;">
  <div class="fig-tag" style="color: var(--c-signal);">LAYER 1 · ~100 TOKENS</div>
  <h3 style="margin-top: 0.5rem;">YAML Frontmatter</h3>
  <p style="font-size: 0.95rem;"><strong>始终加载</strong>到 Claude 系统 prompt。</p>
  <p style="font-size: 0.95rem;">告诉 Claude：<em>这个 skill 是干嘛的、什么时候该用。</em></p>
  <p style="font-size: 0.85rem; color: var(--c-muted);">name + description</p>
</div>

<div v-click class="card" style="background: var(--c-accent);">
  <div class="fig-tag">LAYER 2 · &lt;5K TOKENS</div>
  <h3 style="margin-top: 0.5rem;">SKILL.md 正文</h3>
  <p style="font-size: 0.95rem;"><strong>命中时加载</strong>。Claude 判断当前任务相关，才把整篇正文读进 context。</p>
  <p style="font-size: 0.95rem;">完整指令、步骤、最佳实践。</p>
</div>

<div v-click class="card" style="background: #FFF;">
  <div class="fig-tag" style="color: var(--c-signal);">LAYER 3 · ON-DEMAND</div>
  <h3 style="margin-top: 0.5rem;">Linked Files</h3>
  <p style="font-size: 0.95rem;"><strong>按需加载</strong>。SKILL.md 里指定的 references/scripts/assets，Claude 自己决定何时去读。</p>
  <p style="font-size: 0.85rem; color: var(--c-muted);">references/api-patterns.md</p>
</div>

</div>

<div style="margin-top: 1.5rem; padding: 1rem; background: var(--c-base-soft); border-left: 4px solid var(--c-signal);">
  <strong>核心动机：</strong>把"专家级知识"压缩成"启动只占 100 tokens"的模块，让 Claude 同时携带数十个 skill 也不撑爆 context。
</div>

<div class="bottom-meta">
  <div>LAYER 1 · 2 · 3</div><div></div><div></div><div>P.10</div>
</div>

---
layout: default
---

<!-- ====================================================
     P11 · 命名硬规则
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">NAMING RULES</span><span style="margin-left: 0.6rem;">CH.2 · 命名硬规则</span></div>
  <div>P.11 / 36</div>
</div>

# 命名硬规则 · 这几个会让你上传失败

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<h3><span class="signal">①</span> 文件夹名 · kebab-case</h3>

<div v-click class="card card-good">
✅ <code>notion-project-setup</code>
</div>
<div v-click class="card card-bad" style="margin-top: 0.4rem;">
❌ <code>Notion Project Setup</code> (有空格)
</div>
<div v-click class="card card-bad" style="margin-top: 0.4rem;">
❌ <code>notion_project_setup</code> (下划线)
</div>
<div v-click class="card card-bad" style="margin-top: 0.4rem;">
❌ <code>NotionProjectSetup</code> (大写)
</div>

<h3 style="margin-top: 1.5rem;"><span class="signal">②</span> 文件名 · 严格 SKILL.md</h3>

<div v-click class="card card-good">
✅ <code>SKILL.md</code> (大小写敏感)
</div>
<div v-click class="card card-bad" style="margin-top: 0.4rem;">
❌ <code>skill.md</code> / <code>Skill.md</code> / <code>SKILL.MD</code>
</div>

</div>

<div>

<h3><span class="signal">③</span> 不要放 README.md</h3>

<div v-click class="card">
<p>Skill 文件夹内 <strong>禁止</strong> 出现 <code>README.md</code>。</p>
<p style="font-size: 0.9rem;">原因：所有文档应该放进 <code>SKILL.md</code> 或 <code>references/</code>，README 会和 Skill 元数据混淆。</p>
<p style="font-size: 0.9rem; color: var(--c-muted);">仓库级 README 例外（GitHub 用，给人看的）。</p>
</div>

<h3 style="margin-top: 1.5rem;"><span class="signal">④</span> 保留前缀</h3>

<div v-click class="card card-bad">
❌ Skill 名称里不能含 <code>claude</code> 或 <code>anthropic</code>（保留字）
</div>

<h3 style="margin-top: 1.5rem;"><span class="signal">⑤</span> Frontmatter 安全</h3>

<div v-click class="card card-bad">
❌ 不要用 XML 尖括号 <code>&lt; &gt;</code><br/>
（会被当作 system prompt 注入，被拒绝）
</div>

</div>
</div>

<div class="bottom-meta">
  <div>5 RULES · CRITICAL</div><div></div><div></div><div>P.11</div>
</div>

---
layout: default
---

<!-- ====================================================
     P12 · Skill + MCP 协作
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">SKILL × MCP</span><span style="margin-left: 0.6rem;">CH.2 · 协作模式</span></div>
  <div>P.12 / 36</div>
</div>

# Skill × MCP 协作模式

<table style="margin-top: 1rem;">
<thead>
<tr>
<th style="width: 40%;">维度</th>
<th>MCP (Connectivity)</th>
<th>Skill (Knowledge)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>负责什么</strong></td>
<td>连接服务（Notion / Asana / Linear...）</td>
<td>教 Claude 怎么有效使用这些服务</td>
</tr>
<tr>
<td><strong>提供什么</strong></td>
<td>实时数据访问 + Tool 调用</td>
<td>workflow + 最佳实践</td>
</tr>
<tr>
<td><strong>回答什么</strong></td>
<td><em>What Claude can do</em></td>
<td><em>How Claude should do it</em></td>
</tr>
<tr>
<td><strong>没有它会怎样</strong></td>
<td>Claude 看不到你的数据</td>
<td>Claude 看到了但不知道按什么顺序、什么模板做</td>
</tr>
</tbody>
</table>

<div style="margin-top: 1.5rem; padding: 1rem; background: var(--c-accent); border: 1px solid var(--c-ink);">
  <strong>实战推荐：</strong>已经做了 MCP，再加一层 Skill —— 等于多了一份"使用说明书"，让用户不用再问 "How do I do X with your integration"。
</div>

<div class="bottom-meta">
  <div>MCP + SKILL = COMPLETE</div><div></div><div></div><div>P.12</div>
</div>

---
layout: default
class: chapter-cover
style: 'background-color: #B5A0D6;'
---

<!-- ====================================================
     P13 · 章节封面 3
     ==================================================== -->

<div class="ch-tag">Chapter 3</div>

<h1 style="font-family: var(--f-serif); font-weight: 500; font-size: 4.5rem; line-height: 1.05;">
  规划<br/>Planning
</h1>

<div style="margin-top: 1.5rem; font-family: var(--f-mono); font-size: 0.9rem; opacity: 0.75;">
  Start with use cases, not code.
</div>

---
layout: default
---

<!-- ====================================================
     P14 · Use Case 模板
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">USE CASE</span><span style="margin-left: 0.6rem;">CH.3 · 模板</span></div>
  <div>P.14 / 36</div>
</div>

# 写代码前，先写 2-3 个具体 Use Case

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<h3>Good Use Case 模板</h3>

```yaml
Use Case: Project Sprint Planning

Trigger:
  User says "help me plan this sprint"
  or "create sprint tasks"

Steps:
  1. Fetch current project status from Linear (via MCP)
  2. Analyze team velocity and capacity
  3. Suggest task prioritization
  4. Create tasks in Linear with proper labels and estimates

Result:
  Fully planned sprint with tasks created
```

</div>

<div>

<h3>问自己 4 个问题</h3>

<ol style="font-size: 1.05rem;">
<li>用户想完成什么？<br/><span style="color: var(--c-muted); font-size: 0.9rem;">What does a user want to accomplish?</span></li>
<li>需要什么样的多步流程？<br/><span style="color: var(--c-muted); font-size: 0.9rem;">What multi-step workflow does this require?</span></li>
<li>会用到哪些工具？(built-in 还是 MCP)<br/><span style="color: var(--c-muted); font-size: 0.9rem;">Which tools are needed?</span></li>
<li>需要嵌入什么领域知识？<br/><span style="color: var(--c-muted); font-size: 0.9rem;">What domain expertise should be embedded?</span></li>
</ol>

<div style="margin-top: 1rem; padding: 1rem; background: var(--c-accent); border: 1px solid var(--c-ink);">
<strong>动手 5 分钟：</strong>在纸上写下你想做的 Skill 的 Use Case（Trigger / Steps / Result）。
</div>

</div>
</div>

<div class="bottom-meta">
  <div>USE CASE · 4 QUESTIONS</div><div></div><div></div><div>P.14</div>
</div>

---
layout: default
---

<!-- ====================================================
     P15 · 三大类 Skill
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">CATEGORIES</span><span style="margin-left: 0.6rem;">CH.3 · 三大类</span></div>
  <div>P.15 / 36</div>
</div>

# Skill 的三大类型

<div class="grid grid-cols-3 gap-3 mt-4">

<div v-click class="card">
  <div class="fig-tag" style="color: var(--c-signal);">CATEGORY 1</div>
  <h3 style="margin-top: 0.5rem;">📝 Document & Asset</h3>
  <p style="font-size: 0.95rem;"><strong>用于：</strong>生成一致风格的产出物。</p>
  <p style="font-size: 0.9rem;">范例：<code>frontend-design</code>、<code>docx/pptx/xlsx/pdf</code> 官方 skill</p>
  <p style="font-size: 0.85rem; color: var(--c-muted);">嵌入 style guide / 模板 / 质量清单。</p>
</div>

<div v-click class="card">
  <div class="fig-tag" style="color: var(--c-signal);">CATEGORY 2</div>
  <h3 style="margin-top: 0.5rem;">⚙️ Workflow Automation</h3>
  <p style="font-size: 0.95rem;"><strong>用于：</strong>多步流程，跨多个 MCP 协调。</p>
  <p style="font-size: 0.9rem;">范例：<code>skill-creator</code> 自身、<code>customer-onboarding</code></p>
  <p style="font-size: 0.85rem; color: var(--c-muted);">step-by-step + 验证关卡 + 迭代循环。</p>
</div>

<div v-click class="card">
  <div class="fig-tag" style="color: var(--c-signal);">CATEGORY 3</div>
  <h3 style="margin-top: 0.5rem;">🔌 MCP Enhancement</h3>
  <p style="font-size: 0.95rem;"><strong>用于：</strong>给已有的 MCP 加一层使用指南。</p>
  <p style="font-size: 0.9rem;">范例：<code>sentry-code-review</code>（Sentry 团队出品）</p>
  <p style="font-size: 0.85rem; color: var(--c-muted);">协调多个 MCP call + 错误处理。</p>
</div>

</div>

<div style="margin-top: 1.5rem; padding: 1rem; background: var(--c-base-soft); border-left: 4px solid var(--c-signal);">
  <strong>选对 Category，</strong>再决定要不要带 <code>scripts/</code> 和 <code>references/</code>。Document 类常常只要 SKILL.md + 模板就够；Workflow 类通常会带验证脚本。
</div>

<div class="bottom-meta">
  <div>3 CATEGORIES</div><div></div><div></div><div>P.15</div>
</div>

---
layout: default
---

<!-- ====================================================
     P16 · 成功标准
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">SUCCESS METRICS</span><span style="margin-left: 0.6rem;">CH.3 · 怎么算成功</span></div>
  <div>P.16 / 36</div>
</div>

# 怎么知道你的 Skill "在工作"？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<h3>📊 量化指标</h3>

<div v-click class="card">
  <strong>1. 触发率 ≥ 90%</strong>
  <p style="font-size: 0.9rem;">跑 10–20 个应该触发的测试 query，记录自动加载次数。</p>
</div>

<div v-click class="card" style="margin-top: 0.6rem;">
  <strong>2. 工作流在 X 个 tool calls 内完成</strong>
  <p style="font-size: 0.9rem;">对比有 / 无 skill 的 tool call 数和 token 消耗。</p>
</div>

<div v-click class="card" style="margin-top: 0.6rem;">
  <strong>3. API 调用 0 失败</strong>
  <p style="font-size: 0.9rem;">监控 MCP server 日志，看 retry / error code。</p>
</div>

</div>

<div>

<h3>👥 定性指标</h3>

<div v-click class="card">
  <strong>1. 用户不需要再追问下一步</strong>
  <p style="font-size: 0.9rem;">观察 redirect / clarify 出现的频率。</p>
</div>

<div v-click class="card" style="margin-top: 0.6rem;">
  <strong>2. 同一 query 跑 3-5 次，输出一致</strong>
  <p style="font-size: 0.9rem;">对比结构和质量的稳定度。</p>
</div>

<div v-click class="card" style="margin-top: 0.6rem;">
  <strong>3. 新用户首次能完成</strong>
  <p style="font-size: 0.9rem;">最小指引下，能否一遍搞定？</p>
</div>

</div>
</div>

<div style="margin-top: 1rem; font-size: 0.85rem; color: var(--c-muted);">
  <em>Note: These are aspirational targets — rough benchmarks rather than precise thresholds.</em>
</div>

<div class="bottom-meta">
  <div>METRICS · QUANT + QUAL</div><div></div><div></div><div>P.16</div>
</div>

---
layout: default
class: chapter-cover
style: 'background-color: #6E97C8;'
---

<!-- ====================================================
     P17 · 章节封面 4
     ==================================================== -->

<div class="ch-tag">Chapter 4</div>

<h1 style="font-family: var(--f-serif); font-weight: 500; font-size: 4.5rem; line-height: 1.05;">
  写好<br/>SKILL.md
</h1>

<div style="margin-top: 1.5rem; font-family: var(--f-mono); font-size: 0.9rem; opacity: 0.75;">
  Frontmatter 决定生死。
</div>

---
layout: default
---

<!-- ====================================================
     P18 · 最小可运行模板
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">MINIMAL</span><span style="margin-left: 0.6rem;">CH.4 · 最小模板</span></div>
  <div>P.18 / 36</div>
</div>

# 6 行 YAML，立刻能跑

```yaml
---
name: your-skill-name
description: What it does. Use when user asks to [specific phrases].
---

# Your Skill Name

## Instructions

### Step 1: ...
```

<div class="grid grid-cols-2 gap-6 mt-6">

<div>
<h3>这就够了</h3>
<ul>
<li><code>name</code> + <code>description</code> 是<strong>仅有的两个必填</strong>字段</li>
<li>Frontmatter 用 <code>---</code> 包起来（YAML 标准）</li>
<li>正文用 <code>#</code>、<code>##</code> 写步骤即可</li>
<li>把这段保存成 <code>SKILL.md</code>，放进一个 kebab-case 文件夹，就能上传</li>
</ul>
</div>

<div>
<div v-click class="card" style="background: var(--c-accent);">
<strong>动手 3 分钟：</strong>用上面这 6 行模板，给你刚才想的 Use Case 起一个 name 和写一句 description。<br/><br/>
不用追求完美，先跑通。
</div>
</div>

</div>

<div class="bottom-meta">
  <div>MINIMAL VIABLE SKILL</div><div></div><div></div><div>P.18</div>
</div>

---
layout: default
---

<!-- ====================================================
     P19 · description 公式
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">DESCRIPTION FORMULA</span><span style="margin-left: 0.6rem;">CH.4 · 描述字段</span></div>
  <div>P.19 / 36</div>
</div>

# description 字段 · 决定 Claude 触不触发

<div style="text-align: center; margin: 1.5rem 0; font-family: var(--f-mono); font-size: 1.4rem; padding: 1rem; background: var(--c-accent); border: 1px solid var(--c-ink); display: inline-block;">
  [What it does] + [When to use it] + [Key capabilities]
</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div>
<h3 style="color: #2E7D32;">✅ Good</h3>

<div v-click class="card card-good">

```yaml
description: Manages Linear project workflows
including sprint planning, task creation, and status
tracking. Use when user mentions "sprint", "Linear
tasks", "project planning", or asks to "create tickets".
```

</div>

<div v-click class="card card-good" style="margin-top: 0.6rem;">

```yaml
description: End-to-end customer onboarding workflow
for PayFlow. Handles account creation, payment setup,
and subscription management. Use when user says
"onboard new customer", "set up subscription",
or "create PayFlow account".
```

</div>
</div>

<div>
<h3 style="color: var(--c-signal);">❌ Bad</h3>

<div v-click class="card card-bad">

```yaml
# Too vague
description: Helps with projects.
```

</div>

<div v-click class="card card-bad" style="margin-top: 0.6rem;">

```yaml
# Missing triggers — Claude 不知道何时用
description: Creates sophisticated multi-page
documentation systems.
```

</div>

<div v-click class="card card-bad" style="margin-top: 0.6rem;">

```yaml
# Too technical, no user phrases
description: Implements the Project entity model
with hierarchical relationships.
```

</div>
</div>

</div>

<div style="margin-top: 1rem; padding: 0.75rem; background: var(--c-base-soft); border-left: 4px solid var(--c-signal); font-size: 0.95rem;">
  <strong>2026 趋势：</strong>description 可以稍微 "pushy" ——直接列出用户会说的原话，比含蓄表达更能命中触发。
</div>

<div class="bottom-meta">
  <div>FORMULA · GOOD vs BAD</div><div></div><div></div><div>P.19</div>
</div>

---
layout: default
---

<!-- ====================================================
     P20 · 完整字段清单
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">ALL FIELDS</span><span style="margin-left: 0.6rem;">CH.4 · 字段清单</span></div>
  <div>P.20 / 36</div>
</div>

# YAML Frontmatter · 完整字段清单

```yaml
---
name: skill-name                          # 必填 · kebab-case
description: [What] + [When] + [Key]      # 必填 · ≤ 1024 字符

# 以下都是可选 ↓↓↓
license: MIT                              # 开源时建议
allowed-tools: "Bash(python:*) WebFetch"  # 限定 Claude 可用的 tool
compatibility: "Claude.ai, Claude Code, API"  # 平台兼容性
metadata:                                 # 自定义元数据
  author: Your Company
  version: 1.0.0
  mcp-server: server-name
  category: productivity
  tags: [project-management, automation]
  documentation: https://example.com/docs
  support: support@example.com
---
```

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>
<h3>必填红线</h3>
<ul>
<li><code>name</code>: kebab-case，匹配文件夹名</li>
<li><code>description</code>: ≤ 1024 chars，含 trigger phrase</li>
</ul>
</div>

<div>
<h3>常见可选项</h3>
<ul>
<li><code>allowed-tools</code>: 启用后这些 tool 不再每次问授权</li>
<li><code>metadata.version</code>: 团队协作时强烈建议</li>
</ul>
</div>

</div>

<div class="bottom-meta">
  <div>FIELDS · REQ + OPT</div><div></div><div></div><div>P.20</div>
</div>

---
layout: default
---

<!-- ====================================================
     P21 · 主体写作 4 原则
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">WRITING</span><span style="margin-left: 0.6rem;">CH.4 · 写作 4 原则</span></div>
  <div>P.21 / 36</div>
</div>

# Frontmatter 之后，正文怎么写？

<div class="grid grid-cols-2 gap-4 mt-4">

<div v-click class="card">
  <h3><span class="signal">①</span> 具体可执行</h3>

```text
✅ Run `python scripts/validate.py --input {file}`
   to check data format. If validation fails:
   - Missing required fields (add them to the CSV)
   - Invalid date formats (use YYYY-MM-DD)

❌ Validate the data before proceeding.
```

</div>

<div v-click class="card">
  <h3><span class="signal">②</span> 包含错误处理</h3>

```text
## Common Issues

### MCP Connection Failed
If you see "Connection refused":
1. Verify MCP server is running
2. Confirm API key is valid
3. Try reconnecting via Settings
```

</div>

<div v-click class="card">
  <h3><span class="signal">③</span> 用进步式披露</h3>

```text
Before writing queries, consult
`references/api-patterns.md` for:
- Rate limiting guidance
- Pagination patterns
- Error codes and handling
```

  <p style="font-size: 0.9rem;">SKILL.md 保持精简，把详细文档丢进 references/。</p>
</div>

<div v-click class="card">
  <h3><span class="signal">④</span> 给出明确范例</h3>

```text
## Example: Onboard a new customer

User says: "Set up new account for Acme Corp"

Actions:
1. Create customer via MCP
2. Setup payment method
3. Send welcome email

Result: Account ID returned, email sent.
```

</div>

</div>

<div class="bottom-meta">
  <div>4 PRINCIPLES</div><div></div><div></div><div>P.21</div>
</div>

---
layout: default
---

<!-- ====================================================
     P22 · 安全限制
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">SECURITY</span><span style="margin-left: 0.6rem;">CH.4 · 安全限制</span></div>
  <div>P.22 / 36</div>
</div>

# 安全限制 · 这些会让你直接被拒

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<h3 style="color: var(--c-signal);">❌ Frontmatter 里禁止</h3>

<div v-click class="card card-bad">
<strong>XML 尖括号 <code>&lt; &gt;</code></strong>
<p style="font-size: 0.9rem;">原因：frontmatter 会被注入 system prompt，恶意尖括号可能被解析为指令注入。</p>
</div>

<div v-click class="card card-bad" style="margin-top: 0.6rem;">
<strong>name 含 <code>claude</code> 或 <code>anthropic</code></strong>
<p style="font-size: 0.9rem;">这两个前缀是 Anthropic 保留的，避免冒充官方 skill。</p>
</div>

<div v-click class="card card-bad" style="margin-top: 0.6rem;">
<strong>YAML 内执行代码</strong>
<p style="font-size: 0.9rem;">Anthropic 用的是 safe YAML loader，不会执行任意标签。</p>
</div>

</div>

<div>

<h3 style="color: #2E7D32;">✅ Frontmatter 里允许</h3>

<div v-click class="card card-good">
<strong>所有标准 YAML 类型</strong>
<p style="font-size: 0.9rem;">字符串、数字、布尔、列表、对象 —— 都可以。</p>
</div>

<div v-click class="card card-good" style="margin-top: 0.6rem;">
<strong>自定义 metadata 字段</strong>
<p style="font-size: 0.9rem;">想加什么键值都行：author / version / cost-center 等。</p>
</div>

<div v-click class="card card-good" style="margin-top: 0.6rem;">
<strong>长 description（≤ 1024 字符）</strong>
<p style="font-size: 0.9rem;">不要怕长，trigger phrase 列得越具体越好。</p>
</div>

</div>
</div>

<div class="bottom-meta">
  <div>SECURITY · DO/DONT</div><div></div><div></div><div>P.22</div>
</div>

---
layout: default
class: chapter-cover
style: 'background-color: #B0C9B8;'
---

<!-- ====================================================
     P23 · 章节封面 5
     ==================================================== -->

<div class="ch-tag">Chapter 5</div>

<h1 style="font-family: var(--f-serif); font-weight: 500; font-size: 4.5rem; line-height: 1.05;">
  测试与<br/>迭代
</h1>

<div style="margin-top: 1.5rem; font-family: var(--f-mono); font-size: 0.9rem; opacity: 0.75;">
  Skill 是活文档。先迭代再扩展。
</div>

---
layout: default
---

<!-- ====================================================
     P24 · 三种测试方式
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">TESTING LEVELS</span><span style="margin-left: 0.6rem;">CH.5 · 三种测试</span></div>
  <div>P.24 / 36</div>
</div>

# 三种测试方式 · 按严格度选

<table style="margin-top: 1.5rem;">
<thead>
<tr>
<th>方式</th>
<th>怎么做</th>
<th>适合谁</th>
<th>时间成本</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1. Manual</strong><br/>Claude.ai 手测</td>
<td>直接在 Claude.ai 跑 query 看反应</td>
<td>个人 skill / 早期迭代</td>
<td>5 分钟</td>
</tr>
<tr>
<td><strong>2. Scripted</strong><br/>Claude Code 脚本</td>
<td>自动化测试用例，每次改完跑一遍</td>
<td>团队 skill / 持续验证</td>
<td>1 小时设置</td>
</tr>
<tr>
<td><strong>3. Programmatic</strong><br/>Skills API 评测</td>
<td>跑评测套件，量化指标</td>
<td>企业级 skill / 千级用户</td>
<td>半天构建</td>
</tr>
</tbody>
</table>

<div style="margin-top: 1.5rem; padding: 1rem; background: var(--c-accent); border: 1px solid var(--c-ink);">
  <strong>Pro Tip：</strong>"Iterate on a single task before expanding." 先把一个 challenging task 跑通，再扩展到其他场景。
</div>

<div class="bottom-meta">
  <div>3 LEVELS · MANUAL→PROG</div><div></div><div></div><div>P.24</div>
</div>

---
layout: default
---

<!-- ====================================================
     P25 · 触发测试范例
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">TRIGGER TEST</span><span style="margin-left: 0.6rem;">CH.5 · 触发测试</span></div>
  <div>P.25 / 36</div>
</div>

# 触发测试 · Should / Should NOT

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

<h3 style="color: #2E7D32;">✅ Should trigger</h3>

```text
- "Help me set up a new ProjectHub workspace"
- "I need to create a project in ProjectHub"
- "Initialize a ProjectHub project for Q4 planning"
- "Set up sprint with team milestones"
- "Create project tickets in Linear"
```

<p style="font-size: 0.9rem; color: var(--c-muted); margin-top: 0.5rem;">
覆盖<strong>原话 + 改写</strong>。Claude 在 paraphrased query 上也能命中才叫稳。
</p>

</div>

<div>

<h3 style="color: var(--c-signal);">❌ Should NOT trigger</h3>

```text
- "What's the weather in San Francisco?"
- "Help me write Python code"
- "Create a spreadsheet"
  (除非你的 skill 真的处理 spreadsheet)
- "Send an email"
  (除非有明确说是 ProjectHub 邮件)
```

<p style="font-size: 0.9rem; color: var(--c-muted); margin-top: 0.5rem;">
负样本同样重要，否则 Skill 会"过度触发"，影响其他任务。
</p>

</div>

</div>

<div style="margin-top: 1rem; padding: 1rem; background: var(--c-base-soft); border-left: 4px solid var(--c-signal);">
  <strong>调试小技巧：</strong>问 Claude "When would you use the [skill name] skill?" 它会复述 description，从复述里能看出你哪里没说清楚。
</div>

<div class="bottom-meta">
  <div>POSITIVE + NEGATIVE</div><div></div><div></div><div>P.25</div>
</div>

---
layout: default
---

<!-- ====================================================
     P26 · 反馈循环
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">FEEDBACK LOOP</span><span style="margin-left: 0.6rem;">CH.5 · 反馈循环</span></div>
  <div>P.26 / 36</div>
</div>

# 迭代 · 看信号、改一处、再测

<div class="grid grid-cols-2 gap-4 mt-4">

<div v-click class="card">
<h3>📉 Undertrigger 信号</h3>
<ul>
<li>Skill 该加载时没加载</li>
<li>用户要手动 enable</li>
<li>support 频繁问 "when to use it"</li>
</ul>

<div style="margin-top: 0.8rem; padding: 0.75rem; background: #E8F5E9; border-left: 4px solid #2E7D32;">
<strong>Fix:</strong> description 加细节 + 加更多 trigger phrase（特别是技术术语）。
</div>
</div>

<div v-click class="card">
<h3>📈 Overtrigger 信号</h3>
<ul>
<li>无关 query 也加载</li>
<li>用户开始手动 disable</li>
<li>对 skill 用途产生困惑</li>
</ul>

<div style="margin-top: 0.8rem; padding: 0.75rem; background: #FFEBEE; border-left: 4px solid var(--c-signal);">
<strong>Fix:</strong> 加 negative trigger，缩窄 scope。<br/>
<code>"Do NOT use for general financial queries."</code>
</div>
</div>

</div>

<div style="margin-top: 1.5rem;">
<h3>用 skill-creator 做闭环</h3>
<p>遇到 edge case 失败时，<strong>把对话直接喂给 skill-creator</strong>：</p>

```text
"Use the issues & solutions identified in this chat
to improve how the skill handles [specific edge case]"
```

</div>

<div class="bottom-meta">
  <div>OBSERVE → REFINE → TEST</div><div></div><div></div><div>P.26</div>
</div>

---
layout: default
class: chapter-cover
style: 'background-color: #6E97C8;'
---

<!-- ====================================================
     P27 · 章节封面 6
     ==================================================== -->

<div class="ch-tag">Chapter 6</div>

<h1 style="font-family: var(--f-serif); font-weight: 500; font-size: 4.5rem; line-height: 1.05;">
  发布与<br/>分发
</h1>

<div style="margin-top: 1.5rem; font-family: var(--f-mono); font-size: 0.9rem; opacity: 0.75;">
  三条路：Claude.ai · GitHub · API。
</div>

---
layout: default
---

<!-- ====================================================
     P28 · Claude.ai 上传
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">CLAUDE.AI</span><span style="margin-left: 0.6rem;">CH.6 · 上传</span></div>
  <div>P.28 / 36</div>
</div>

# 路径 1 · Claude.ai 上传（最快）

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<h3>个人用户 · 4 步</h3>

<ol style="font-size: 1.05rem;">
<li>把 skill 文件夹打包成 <code>.zip</code></li>
<li>打开 <code>Claude.ai → Settings → Capabilities → Skills</code></li>
<li>点 <strong>Upload skill</strong>，选刚才的 zip</li>
<li>启用 toggle，确认 MCP 已连接，开测</li>
</ol>

<div style="margin-top: 1rem; padding: 0.75rem; background: var(--c-accent); border: 1px solid var(--c-ink);">
<strong>注意：</strong>Pro / Max / Team / Enterprise 计划 + Code Execution 启用才能用。
</div>

</div>

<div>

<h3>组织 / 工作区级（2025-12-18 上线）</h3>

<div v-click class="card">
<ul>
<li>Admin 在 Workspace settings 部署 skill</li>
<li>所有成员自动获得，无需各自安装</li>
<li>支持自动更新（push 一次，全员同步）</li>
<li>集中管理：审计 / 撤销 / 版本控制</li>
</ul>
</div>

<p style="margin-top: 1rem; font-size: 0.9rem; color: var(--c-muted);">
适合企业批量分发标准化 workflow，例如 SOX 合规 / 财务结算流程。
</p>

</div>

</div>

<div class="bottom-meta">
  <div>CLAUDE.AI · ZIP UPLOAD</div><div></div><div></div><div>P.28</div>
</div>

---
layout: default
---

<!-- ====================================================
     P29 · GitHub 标准做法
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">GITHUB</span><span style="margin-left: 0.6rem;">CH.6 · 开源分发</span></div>
  <div>P.29 / 36</div>
</div>

# 路径 2 · GitHub 标准做法

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<h3>仓库结构</h3>

```text
your-repo/
├── README.md          # 仓库级 README，给人看
├── LICENSE
├── .github/
│   └── workflows/     # CI 跑 lint / test
└── skills/
    └── your-skill-name/
        ├── SKILL.md   # ← Skill 内 NO README!
        ├── scripts/
        ├── references/
        └── assets/
```

<div style="margin-top: 0.8rem; padding: 0.6rem; background: #FFEBEE; border-left: 4px solid var(--c-signal); font-size: 0.9rem;">
<strong>易错点：</strong>仓库级 README ≠ Skill 内 README。Skill 文件夹内绝不能有 README.md。
</div>

</div>

<div>

<h3>必备的 README 内容</h3>

<div v-click class="card">
<ol style="font-size: 0.95rem;">
<li><strong>价值描述</strong>（聚焦 outcomes，不要堆 features）</li>
<li><strong>截图</strong>（用前 vs 用后对比）</li>
<li><strong>安装步骤</strong>（git clone + Claude.ai 上传 / Claude Code 放 skills 目录）</li>
<li><strong>MCP 关系</strong>（如果配套 MCP，说明 skill + MCP 一起带来什么）</li>
<li><strong>测试方法</strong>（一句 prompt 让用户立刻试）</li>
</ol>
</div>

<p style="margin-top: 1rem; font-size: 0.9rem; color: var(--c-muted);">
社区参考：<code>anthropics/skills</code> 是官方公共仓库，可以 fork 改自己的。
</p>

</div>

</div>

<div class="bottom-meta">
  <div>GITHUB · OPEN-SOURCE</div><div></div><div></div><div>P.29</div>
</div>

---
layout: default
---

<!-- ====================================================
     P30 · API 用法
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">API</span><span style="margin-left: 0.6rem;">CH.6 · 编程使用</span></div>
  <div>P.30 / 36</div>
</div>

# 路径 3 · 通过 API 调用

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<h3>关键能力</h3>

<ul>
<li><code>/v1/skills</code> 端点 ——管理 skills</li>
<li>Messages API 调用时通过 <code>container.skills</code> 参数加载</li>
<li>Claude Console 做版本控制和管理</li>
<li>配合 <strong>Claude Agent SDK</strong> 构建自定义 agent</li>
</ul>

<div style="margin-top: 1rem; padding: 0.6rem; background: #FFEBEE; border-left: 4px solid var(--c-signal); font-size: 0.9rem;">
<strong>前置要求：</strong>API 调用需启用 <code>Code Execution Tool (beta)</code>，给 skill 提供安全沙箱。
</div>

</div>

<div>

<h3>选 API 还是 Claude.ai？</h3>

<table>
<thead><tr><th>场景</th><th>用</th></tr></thead>
<tbody>
<tr><td>End user 直接交互</td><td>Claude.ai</td></tr>
<tr><td>Manual 测试 / 迭代</td><td>Claude.ai</td></tr>
<tr><td>Ad-hoc 个人 workflow</td><td>Claude.ai</td></tr>
<tr><td>应用程序里调用</td><td>API</td></tr>
<tr><td>大规模生产部署</td><td>API</td></tr>
<tr><td>自动化 agent 系统</td><td>API</td></tr>
</tbody>
</table>

</div>

</div>

<div class="bottom-meta">
  <div>API · /v1/skills</div><div></div><div></div><div>P.30</div>
</div>

---
layout: default
class: chapter-cover
style: 'background-color: #B0C9B8;'
---

<!-- ====================================================
     P31 · 章节封面 7
     ==================================================== -->

<div class="ch-tag">Chapter 7</div>

<h1 style="font-family: var(--f-serif); font-weight: 500; font-size: 4.5rem; line-height: 1.05;">
  进阶模式<br/>+ 排错
</h1>

<div style="margin-top: 1.5rem; font-family: var(--f-mono); font-size: 0.9rem; opacity: 0.75;">
  5 种 Pattern · 5 大坑速查。
</div>

---
layout: default
---

<!-- ====================================================
     P32 · 5 种 Pattern
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">5 PATTERNS</span><span style="margin-left: 0.6rem;">CH.7 · 进阶模式</span></div>
  <div>P.32 / 36</div>
</div>

# 5 种生产级 Skill Pattern

<table style="margin-top: 1rem; font-size: 0.95rem;">
<thead>
<tr>
<th>Pattern</th>
<th>用在哪</th>
<th>关键技巧</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>① Sequential Workflow</strong><br/>串行编排</td>
<td>多步流程必须按顺序执行</td>
<td>显式 step ordering · step 间依赖 · 每步验证 · 失败回滚</td>
</tr>
<tr>
<td><strong>② Multi-MCP Coordination</strong><br/>跨 MCP 协调</td>
<td>workflow 跨多个外部服务</td>
<td>清晰 phase 切分 · phase 间数据传递 · 集中错误处理</td>
</tr>
<tr>
<td><strong>③ Iterative Refinement</strong><br/>迭代精炼</td>
<td>输出质量需要多轮提升</td>
<td>明确质量标准 · 验证脚本 · 知道何时停止</td>
</tr>
<tr>
<td><strong>④ Context-aware Tool Selection</strong><br/>上下文选工具</td>
<td>同一目标，不同情境用不同工具</td>
<td>决策树 · fallback 选项 · 透明地告诉用户为什么这么选</td>
</tr>
<tr>
<td><strong>⑤ Domain-specific Intelligence</strong><br/>领域知识嵌入</td>
<td>需要专业 know-how（合规 / 财务 / 法律）</td>
<td>逻辑里嵌入领域规则 · 行动前检查 · audit trail · 治理清晰</td>
</tr>
</tbody>
</table>

<div class="bottom-meta">
  <div>5 PATTERNS</div><div></div><div></div><div>P.32</div>
</div>

---
layout: default
---

<!-- ====================================================
     P33 · 5 大坑速查
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">TROUBLESHOOTING</span><span style="margin-left: 0.6rem;">CH.7 · 速查表</span></div>
  <div>P.33 / 36</div>
</div>

# 5 大坑 · 速查 + 一行 Fix

<div class="grid grid-cols-2 gap-4 mt-4">

<div v-click class="card card-bad">
<h3>① 上传失败</h3>
<p style="font-size: 0.9rem;"><strong>症状：</strong>Could not find SKILL.md / Invalid frontmatter</p>
<p style="font-size: 0.9rem; background: #E8F5E9; padding: 0.4rem; border-left: 3px solid #2E7D32;">
<strong>Fix:</strong> 检查 SKILL.md 大小写、frontmatter <code>---</code> 闭合、name 用 kebab-case。
</p>
</div>

<div v-click class="card card-bad">
<h3>② 不触发</h3>
<p style="font-size: 0.9rem;"><strong>症状：</strong>该用的时候 skill 没加载</p>
<p style="font-size: 0.9rem; background: #E8F5E9; padding: 0.4rem; border-left: 3px solid #2E7D32;">
<strong>Fix:</strong> 改写 description，加技术关键词 + 用户原话 trigger phrase。
</p>
</div>

<div v-click class="card card-bad">
<h3>③ 过度触发</h3>
<p style="font-size: 0.9rem;"><strong>症状：</strong>无关 query 也加载</p>
<p style="font-size: 0.9rem; background: #E8F5E9; padding: 0.4rem; border-left: 3px solid #2E7D32;">
<strong>Fix:</strong> 加 negative trigger，例 "Do NOT use for ..."。
</p>
</div>

<div v-click class="card card-bad">
<h3>④ 不听话</h3>
<p style="font-size: 0.9rem;"><strong>症状：</strong>skill 加载了但 Claude 不照做</p>
<p style="font-size: 0.9rem; background: #E8F5E9; padding: 0.4rem; border-left: 3px solid #2E7D32;">
<strong>Fix:</strong> 关键指令放最上面 · 用 <code>## Critical</code> 标记 · 减少废话。
</p>
</div>

<div v-click class="card card-bad" style="grid-column: span 2;">
<h3>⑤ Context 太大 / 响应慢</h3>
<p style="font-size: 0.9rem;"><strong>症状：</strong>skill 加载后整体变慢、回答质量下降</p>
<p style="font-size: 0.9rem; background: #E8F5E9; padding: 0.4rem; border-left: 3px solid #2E7D32;">
<strong>Fix:</strong> SKILL.md 控制在 <strong>5,000 字以内</strong>，把详细文档移到 references/，同时启用的 skill 总数控制在 20-50 个。
</p>
</div>

</div>

<div class="bottom-meta">
  <div>5 PITFALLS · QUICK FIX</div><div></div><div></div><div>P.33</div>
</div>

---
layout: default
---

<!-- ====================================================
     P34 · 实战 Demo
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">LIVE DEMO</span><span style="margin-left: 0.6rem;">CH.8 · 现场实战</span></div>
  <div>P.34 / 36</div>
</div>

# 实战 · 25 分钟做出 essay-grader

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<h3>跟着讲师做</h3>

<ol style="font-size: 1.05rem;">
<li>在 Claude Code 里启用 <code>skill-creator</code></li>
<li>说："Use the skill-creator skill to help me build a skill for grading IELTS essays"</li>
<li>回答 skill-creator 的几个问题：<br/>
  · Use case · Trigger phrases<br/>
  · 需不需要 script · Edge case
</li>
<li>产出 <code>essay-grader/SKILL.md</code></li>
<li>在 Claude.ai 上传 zip → 测一句 query → 看效果</li>
<li>不满意？把对话喂回 skill-creator 改</li>
</ol>

</div>

<div>

<h3>预期产出</h3>

```yaml
---
name: essay-grader
description: Grades IELTS Task 2 essays
against the 4 official band descriptors
(Task Response, Coherence, Lexical Resource,
Grammar). Use when student says "grade my
essay", "IELTS feedback", or pastes an essay
asking for band score.
---

# IELTS Essay Grader

## Instructions
### Step 1: Identify task type
### Step 2: Score 4 dimensions (1-9)
### Step 3: Provide concrete examples
### Step 4: Suggest one revision
```

<div style="margin-top: 1rem; padding: 0.6rem; background: var(--c-accent); border: 1px solid var(--c-ink);">
<strong>课后作业：</strong>把 essay-grader 改成你自己学科 / 行业的版本，提交 GitHub repo 链接。
</div>

</div>

</div>

<div class="bottom-meta">
  <div>HANDS-ON · 25 MIN</div><div></div><div></div><div>P.34</div>
</div>

---
layout: default
---

<!-- ====================================================
     P35 · 实战 2: 校招爬取 Skill (AU + CN)
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">LIVE DEMO 2</span><span style="margin-left: 0.6rem;">CH.8 · 求职实战</span></div>
  <div>P.35 / 36</div>
</div>

# 实战 2 · 让 Claude 自动爬校招机会（AU + CN）

<div class="grid grid-cols-2 gap-4 mt-3">

<div>

<h3>SKILL.md（直接复制走）</h3>

```yaml
---
name: campus-job-crawler
description: Crawls grad / intern roles from AU
  (GradAustralia, GradConnection, SEEK) and CN
  (应届生, 牛客). Use when user says "找校招",
  "find graduate jobs", or "intern {role} {city}".
allowed-tools: WebFetch
---

# Campus Job Crawler

## Step 1 · Parse {role, region, level}

## Step 2 · Fetch sources
AU: gradaustralia / au.gradconnection /
    seek.com.au/{slug}-jobs/graduate-jobs
CN: yingjiesheng / nowcoder?type=campus

## Step 3 · Extract per listing
title · company · location · deadline · apply URL

## Step 4 · Output table sorted by deadline, cap 20

## Issues 反爬→站内 RSS · 乱码→检测编码
```

</div>

<div>

<h3>3 步用起来</h3>

<ol style="font-size: 0.95rem;">
<li>存成 <code>campus-job-crawler/SKILL.md</code></li>
<li>放 <code>~/.claude/skills/</code> 或 zip 上传 Claude.ai</li>
<li>说一句：<br/><code style="font-size: 0.78rem;">找一下 Sydney 的 data analyst grad job</code></li>
</ol>

<h3 style="margin-top: 0.8rem;">预期产出（节选）</h3>

<div class="card" style="background: #FAF8F1; padding: 0.5rem;">

| Title | Company | Loc | Deadline |
|-------|---------|-----|----------|
| Data Analyst Grad | Atlassian | SYD | 06-30 |
| BI Intern | Canva | SYD | 07-15 |
| Junior Analyst | Macquarie | SYD | 08-01 |
| 数据分析实习 | 字节 | 上海 | 06-25 |
| 校招·数仓 | 腾讯 | 深圳 | 07-10 |

</div>

<div style="margin-top: 0.7rem; padding: 0.55rem; background: var(--c-accent); border: 1px solid var(--c-ink); font-size: 0.85rem;">
<strong>课后挑战：</strong>fork 这个 skill，加 LinkedIn 公司 careers 页（用公开 RSS），或加 deadline 到期前 7 天自动提醒。
</div>

</div>

</div>

<div class="bottom-meta">
  <div>HANDS-ON 2 · CAMPUS JOBS</div><div>AU + CN</div><div></div><div>P.35</div>
</div>

---
layout: default
class: checklist
---

<!-- ====================================================
     P36 · 检查清单 + 资源
     ==================================================== -->

<div class="masthead">
  <div><span class="badge">CHECKLIST</span><span style="margin-left: 0.6rem;">CH.9 · 收尾</span></div>
  <div>P.36 / 36</div>
</div>

# 出门检查清单 + 资源

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="checklist">

<h3>上传前自检</h3>
<ul>
<li>文件夹用 kebab-case</li>
<li>SKILL.md 大小写正确（不是 skill.md）</li>
<li>YAML 用 <code>---</code> 闭合</li>
<li>name 是 kebab-case，无空格 / 大写</li>
<li>description 含 What + When + Key</li>
<li>frontmatter 没有 XML 尖括号</li>
<li>指令具体可执行（不是 "validate properly"）</li>
<li>包含 error handling 和示例</li>
<li>没有 README.md 在 skill 文件夹内</li>
</ul>

<h3 style="margin-top: 1.5rem;">上传后</h3>
<ul>
<li>跑 10+ 触发测试（正样本 + 负样本）</li>
<li>问 Claude "When would you use this skill?"</li>
<li>收集真实用户反馈</li>
<li>遇到 edge case 喂回 skill-creator 改</li>
<li>每次改完更新 metadata.version</li>
</ul>

</div>

<div>

<h3>📚 资源链接</h3>

<div v-click class="card">
<ul style="font-size: 0.95rem;">
<li><strong>官方手册：</strong>The Complete Guide to Building Skills (PDF, 33p)</li>
<li><strong>API 文档：</strong>platform.claude.com/docs/agents-and-tools/agent-skills</li>
<li><strong>GitHub 公共仓库：</strong>github.com/anthropics/skills</li>
<li><strong>Engineering Blog：</strong>Equipping Agents for the Real World</li>
<li><strong>社区课程：</strong>anthropic.skilljar.com</li>
<li><strong>Discord：</strong>Claude Developers</li>
</ul>
</div>

<h3 style="margin-top: 1rem;">🎓 课后作业</h3>
<div v-click class="card" style="background: var(--c-accent);">
<ol>
<li>构建你自己领域的 Skill（基于 P34 模板改）</li>
<li>跑 10 个触发测试 + 截图</li>
<li>提交 GitHub repo 链接到 Slack #skill-workshop</li>
<li>下周一 Office Hour 同 review</li>
</ol>
</div>

<p style="margin-top: 1.2rem; text-align: center; font-family: var(--f-serif); font-style: italic; font-size: 1.15rem;">
Thanks. Now go build something. — JR Academy
</p>

<div style="display: flex; align-items: center; justify-content: center; gap: 0.9rem; margin-top: 0.7rem; font-family: var(--f-mono); font-size: 0.62rem; letter-spacing: 0.18em; color: var(--c-muted); text-transform: uppercase;">
  <span>Powered by</span>
  <img src="/claude-logo.svg" alt="Claude" style="height: 26px; width: auto;" />
  <span style="font-size: 0.85rem; opacity: 0.5;">×</span>
  <img src="/anthropic-wordmark.svg" alt="Anthropic" style="height: 12px; width: auto;" />
</div>

</div>

</div>

<div class="bottom-meta">
  <div>EXIT · CHECKLIST + LINKS</div><div></div><div></div><div>P.36</div>
</div>
