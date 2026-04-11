# PRD — 编程入门班 AI 时代重构

- **Course**: 编程入门班 · Web Code Bootcamp (Python + Web 入门)
- **Slug**: `web-code-bootcamp-or-learn-to-code`
- **Production ID**: `5b4b5ad403c44f38ca79e74b`
- **Target Audience**: 完全零基础学员，无任何编程经验
- **Doc Status**: Draft v1
- **Owner**: Claude + Product
- **Date**: 2026-04-11
- **Direction**: 🅰️ 保留 slug + 换内核 + 只加不减

---

## 1. 背景

编程入门班是 JR Academy 2018 年开班的第一门编程入门课（`courseCode: weba1801`），8 年里跑了 23 个 cohort，累计服务数千位零基础学员从 Wordpress 开始学起，一路演进到 Python + Web 全栈入门。第22期是当前正在进行的班次，2025-10-29 开课，2026-02-26 结课。

但 2024-2026 年 AI coding 工具的爆发让这门课的教学范式开始站不住：Cursor / Claude Code / Lovable / v0 让"3 小时直播手敲代码"变成低价值动作，同时课程里的 Instagramly CRUD 毕业项目、PHP/Wordpress 扩展内容、"先学变量后学应用"的大学式结构，都和零基础学员 2026 年的真实学习路径脱节。

但课程的**知识内核不烂** — HTML/CSS/JS/Git/Python/SQL 这些基础在 AI 时代反而更重要（读代码能力 = 在 AI 时代不被淘汰的护城河）。所以本次重构不是重做一门课，而是**给老课换内核**：保留 slug/SEO/历史学员关系，改变教学叙事和资源组织。

## 2. 目标

### 主目标
1. **把"零基础学员"的入门路径从"手写代码"改为"和 AI 一起写代码 + 看懂 AI 写的代码"**
2. **整合平台已有资源**（Frontend Lab ~65 个 / Python Lab 30 个 / Git Lab 10 个 / Prompt Lab 40+ 个 / Vibe Coding Learn 方向 30+ 章节 / Static Wiki 工具栈）—— 课程不再是一堆孤立视频，每节课都有 lab/wiki/learn 作为"练习 + 延展"
3. **修复错位的课程顺序** —— 把毕业项目 Instagramly 从 Phase 7 下移到 Phase 8，让它真正成为 capstone；Python 上提到 Phase 7
4. **不删任何历史内容** —— 所有 73 节原始 lesson 全部保留，老的 Workshop 视频 / PHP/WP 内容放到扩展 phase (`isExtension: true`)

### 非目标
- ❌ 不重做一门新课，不换 slug
- ❌ 不砍掉任何现有 lesson
- ❌ 不动第22期在册学员的学习路径
- ❌ 不做 React / Vue / 框架内容（超出"编程入门"范畴）
- ❌ 不做 Python Data Science / ML（那是 Data/AI bootcamp 的范畴）

## 3. 现状分析

### 3.1 老课程数据（从 production snapshot 提取）

来源：`skills-data/training-outlines/web-code-bootcamp-or-learn-to-code.json` 第22期 cohort (`_id: 68da20032635ef924e6863ba`)

- **73 节 lesson**，总时长约 153 小时
- **6 种类型**：Lesson (直播), Workshop (直播), Video (录播), Information (图文), Lab (互动), Assignment (作业)
- **15 节直播课** + 大量录播 + 图文资料 + 4 个 legacy frontend lab
- **9 个历史 phase**（按主题分组，原始是按时间线堆在一起的）
- **讲师阵容**: Ally Tang（前端/JS/Node/Python 主讲）、Yolanda Yang（开课）、Haixin Zhang（数据库/全栈）、大宝（早期）、Xiao Hua（Workshop）、Huansong Zeng（Python Workshop）、MINGCHAO Xu（PHP/WP legacy）

### 3.2 诊断出的问题

| 问题 | 严重程度 | 说明 |
|---|---|---|
| 🔴 Python 放在全栈项目之后 | 硬错 | 学员刚做完 Node.js 全栈项目，突然从零学 Python，心理断档 |
| 🔴 "3 小时直播手敲代码" 的 15 节直播 | 硬错 | 2026 年学员用 Cursor 15 分钟能做出比直播 demo 更完整的东西 |
| 🟡 Phase 1 (Vibe Coding) → Phase 2 (手写 HTML) 叙事冲突 | 软错 | 需要 `phase.summary` 桥接文案 |
| 🟡 数据库 3 节太薄 | 软错 | 纯作为项目前置，练习密度不够 |
| 🟡 JavaScript 14 节连续 | 软错 | 零基础学员疲劳，需要把 L34/L35 资源集合类移到扩展 |
| 🟡 Lab 太少 | 软错 | 73 节课只有 7 个 InteractiveLab；平台实际有 150+ 个可复用 lab |
| 🟡 无 wiki 绑定 | 软错 | 学员遇到工具问题无处可查 |
| ⚪ Phase 8 PHP/WordPress 8 节 | 历史包袱 | 2018-2020 年的 legacy，2026 年不应在主路径 |

### 3.3 A1-A3 已完成的修复

| Step | 动作 | 状态 |
|---|---|---|
| A1 | 15 节直播课全部转成录播（`isLive: true → false`） | ✅ 2026-04-11 |
| A2 | PHP/Wordpress 8 节抽到新建 Phase 10 扩展阅读（`isExtension: true`） | ✅ 2026-04-11 |
| A3 | 新增 Phase 1 "第一次和 AI 一起写代码"（L74-L78, 5 节，零基础友好） | ✅ 2026-04-11 |

## 4. 新课程架构

### 4.1 Phase 总览（目标结构，A5 完成后）

```
Phase 0   入学准备 & 开课                   3 lessons  核心
Phase 1   🆕 第一次和 AI 一起写代码            5 lessons  核心   ← 新增的 Vibe Coding 入门
Phase 2   HTML & CSS 前端基础               12 lessons  核心   ← 看懂 AI 生成的前端
Phase 3   Git & 版本控制                     6 lessons  核心   ← 发布你的第一个网页
Phase 4   JavaScript 前端编程               12 lessons  核心   ← L34/L35 移扩展后
Phase 5   Node.js 后端开发                   7 lessons  核心
Phase 6   数据库基础                         3 lessons  核心
Phase 7   Python 编程入门 ⬆️                11 lessons  核心   ← 从 Phase 8 上提
Phase 8   🎯 全栈项目 Instagramly (capstone) ⬇️ 6 lessons  核心   ← 从 Phase 7 下移
Phase 9   职业发展                           3 lessons  核心
Phase 10  扩展阅读 · 传统 Web 栈 (WP + JS 集合类)  10 lessons  扩展
─────────────────────────────────────────────────────────────
                                           78 lessons  (核心 68 + 扩展 10)
```

### 4.2 核心叙事（零基础学员视角）

```
Phase 0: "我来学编程了"  (orientation)
   ↓
Phase 1: "原来 AI 能帮我写代码!"  (dopamine hit, 80 min 做出第一个网页)
   ↓
Phase 2-3: "我要能看懂 AI 写的前端"  (HTML/CSS/Git — 让 AI 生成的东西能部署出去)
   ↓
Phase 4-6: "我要能让它动起来 + 存数据"  (JS → Node → DB)
   ↓
Phase 7: "换一门更适合 AI 时代的语言"  (Python — 连接 Data/AI bootcamp 的桥梁)
   ↓
Phase 8: "把前面全部用上做一个真项目"  (Instagramly capstone — 用 AI 辅助完成)
   ↓
Phase 9: "接下来去哪里"  (职业发展 + 跳板)
   ↓
Phase 10 (可选): "如果你想看看老派 Web 怎么写的"  (PHP/WP 扩展)
```

### 4.3 教学原则

1. **先让学员做出东西，再回头理解**（Phase 1 建立世界观）
2. **每节课的概念讲解 ≤ 15 分钟，其余全是 hands-on**
3. **每节课必须绑定 ≥ 1 个 lab 或 learn chapter 或 wiki**（不能是孤立的视频）
4. **直播课的语义从"讲代码"变成"答疑/项目评审/面试模拟/开课会"**（A7 重新引入）
5. **尊重老师的劳动** —— 原录播继续用，只是改变它们在学习路径里的位置

## 5. 资源整合清单（平台已有，可立即复用）

### 5.1 Frontend Lab (~65 个原子 lab)

路径：`jr-academy-web-zh/src/config/labs/*.ts`

#### HTML (10)
`html-semantic`, `html-forms`, `html-tables`, `html-lists`, `html-links`, `html-meta`, `html-accessibility`, `html-audio-video`, `html-media`

#### CSS (14)
`css-box-model`, `css-backgrounds`, `css-typography`, `css-variables`, `css-positioning`, `css-transforms`, `css-shadows`, `css-gradient`, `css-filters`, `css-animation`, `css-responsive`, `css-pseudo-elements`, `css-clip-path`, `css-buttons`, `flexbox-cards`, `grid-gallery`, `form-styling`, `dark-mode`

#### JavaScript (35+)
`js-variables`, `js-operators`, `js-conditionals`, `js-loops`, `js-strings`, `js-arrays`, `js-objects`, `js-functions`, `js-arrow-functions`, `js-destructuring`, `js-spread-rest`, `js-template-literals`, `js-default-params`, `js-optional-chaining`, `js-classes`, `js-dom-basics`, `js-events`, `js-async`, `js-promise-all`, `js-async-await-patterns`, `js-array-methods`, `js-error-handling`, `js-let-const-scope`, `js-modules`, `js-iterators-generators`, `js-memoization`, `js-debounce-throttle`, `js-state-machine`, `js-pubsub`, ...

### 5.2 Git Lab (10 个)

路径：`jr-academy-web-zh/src/config/git-labs/*.ts`

`git-what-is-version-control`, `git-first-commit`, `git-modify-and-undo`, `git-understanding-history`, `git-branch-basics`, `git-merge-basics`, `git-merge-conflict`, `git-stash-and-reset`, `git-rebase`, `git-team-workflow`

### 5.3 Python Lab (30 个) + Python Learn 方向 (70 章节)

- **Python Lab slugs**: `python-hello`, `python-variables`, `python-data-types`, `python-strings`, `python-numbers`, `python-lists`, `python-tuples`, `python-sets`, `python-dictionaries`, `python-list-comprehension`, `python-conditionals`, `python-loops`, `python-functions`, `python-lambda`, `python-args-kwargs`, `python-classes`, `python-inheritance`, `python-modules`, `python-decorators`, `python-generators`, `python-error-handling`, `python-file-io`, `python-json`, `python-datetime`, `python-operators-math`, `python-boolean-logic`, `python-input`, `python-comments-style`, `python-f-strings`, `project-mini-calculator`

- **Python Learn 方向** (`direction: python`)：70 章节 = 40 text chapter + 30 lab chapter，分成 9 个模块：
  - Python 基础（10 章节）
  - 数据类型（10）
  - 控制流（7）
  - 函数（9）
  - 模块与包（4）
  - 面向对象（6）
  - 异常与文件（8）
  - 高级特性（7）
  - 实战项目（9）

### 5.4 Prompt Lab (40+ 个)

路径：`jr-academy-web-zh/src/config/prompt-labs/*.ts`

零基础直接可用：`hello-ai`, `ai-basics`, `clear-task`, `browser-basics`, `constraints`, `output-format`, `role-playing`, `few-shot`, `chain-of-thought`

### 5.5 Vibe Coding Learn 方向 (30+ 章节)

路径：`jr-academy-web-zh/src/config/learn/directions/vibe-coding.config.ts`

**直接可用的零基础章节**：
- `vibe-coding` (overview)
- `what-is-vibe-coding`
- `install-cursor` ⭐️ Phase 1 L75 直接对应
- `first-prompt` ⭐️ Phase 1 L76 直接对应
- `vibe-mindset`
- `prompt-patterns`
- `understand-ai` ⭐️ Phase 1 L77 直接对应
- `debug-with-ai` ⭐️ Phase 1 L78 直接对应
- `pair-programming`
- `multi-file`
- `ship-a-feature`
- `api-fullstack` ⭐️ Phase 5/9 可绑
- `real-project` ⭐️ Phase 8 Capstone 可绑
- `cursor-rules`
- `git-commit-conventions` ⭐️ Phase 3 可绑

### 5.6 Static Wiki

路径：`jr-academy-web-zh/src/config/staticWikis/*.ts`

#### Vibe Coding 相关
- `cursor/getting-started/installation` ⭐️ Phase 1 L75
- `cursor/getting-started/first-project`
- `cursor/features/chat`, `composer`, `tab`, `shortcuts`
- `cursor/advanced/rules`, `context`, `prompts`
- `claude/*` (Claude Code 整套)
- `copilot/*`
- `gemini/*`
- `antigravity/getting-started`

#### Data & Dev Tools 相关
- `pandas/getting-started`
- `polars/getting-started`
- `jupyter/getting-started`
- `duckdb/getting-started`
- `troubleshooting/getting-started`
- `vscode-extensions/getting-started`

---

## 6. Phase-by-Phase 重构方案

> **标注说明**：
> - ✅ 已完成
> - 🔧 本 PRD 待执行
> - 📚 = 绑定 Learn chapter
> - 🧪 = 绑定 Lab
> - 📖 = 绑定 Wiki
> - 🆕 = 新增内容

### Phase 0 — 入学准备 & 开课 (3 lessons, 不动)

| Code | Title | Type | Duration | 资源绑定 |
|---|---|---|---|---|
| L01 | 课前须知 | Information | 15 min | 📖 `claude/getting-started/index`（开课工具概览）|
| L02 | 计算机专业要学哪些？白嫖三年必修课 | Information | 120 min | 📚 `vibe-coding:what-is-vibe-coding`（建立 Vibe Coding 世界观）|
| L06 | 开课讲解会 | Information | 60 min | —（纯 orientation 视频，不绑定）|

### Phase 1 — 🆕 第一次和 AI 一起写代码 (5 lessons, ✅ A3 已创建)

| Code | Title | Type | Duration | 资源绑定 |
|---|---|---|---|---|
| L74 | 什么是代码？3 分钟搞懂 | Information | 15 min | 📚 `vibe-coding:what-is-vibe-coding` |
| L75 | 给电脑装 Cursor（图文步骤） | Information | 15 min | 📚 `vibe-coding:install-cursor`<br>📖 `cursor/getting-started/installation` |
| L76 | 你的第一次 AI 对话：做一个网页 | InteractiveLab | 30 min | 📚 `vibe-coding:first-prompt`<br>🧪 `prompt-lab/hello-ai`<br>🧪 `prompt-lab/clear-task` |
| L77 | 文件、代码、网页的关系 | Information | 15 min | 📚 `vibe-coding:understand-ai`<br>📖 `cursor/features/composer` |
| L78 | 改一个字：让 AI 修改已有代码 | InteractiveLab | 30 min | 📚 `vibe-coding:debug-with-ai`<br>📚 `vibe-coding:pair-programming` |

> 🔧 **Phase 1 summary 需要在 A4 补上桥接文案**（解决 Phase 1 → Phase 2 叙事冲突）：
> > "现在你知道 AI 能帮你做出东西了。但 AI 会犯错 —— Phase 2 开始教你看懂 AI 生成的前端代码在说什么。不是让你手写，是让你能判断 AI 写得对不对。"

### Phase 2 — HTML & CSS 前端基础 (12 lessons, 加绑定)

> 🔧 **Phase 2 summary 桥接**（新增）：
> > "你在 Phase 1 看到 AI 生成了一堆代码。这一章不是让你忘掉 AI、回去手写 —— 而是让你能**看懂 AI 到底生成了什么**。AI 会犯错，你得能判断它对不对、改得该不该。这是 Vibe Coding 的真正护城河。"

| Code | Title | Type | Duration | 资源绑定 |
|---|---|---|---|---|
| L03 | HTML5 & CSS3 Project – Registration Form | Lesson (非直播) | 180 min | 🧪 `html-forms` / `form-styling` / `html-meta` |
| L04 | Registration Form Assignment | Information | 30 min | 🧪 `html-forms` |
| L07 | HTML & CSS Part I | Lesson (非直播) | 180 min | 🧪 `html-semantic` / `html-lists` / `html-links` / `html-meta` |
| L08 | HTML & CSS Part II | Lesson (非直播) | 180 min | 🧪 `css-box-model` / `css-backgrounds` / `css-typography` / `css-variables` |
| L09 | HTML & CSS Part III | Lesson (非直播) | 180 min | 🧪 `css-responsive` / `css-positioning` / `css-pseudo-elements` |
| L10 | HTML/CSS 开发规范指南 | Information | 15 min | 📖 `vscode-extensions/getting-started` |
| L11 | HTML5 & CSS3 Project – Login Page | Lesson (非直播) | 180 min | 🧪 `flexbox-cards` / `form-styling` / `css-buttons` / `css-animation` |
| L12 | Landing Page Assignment | Information | 30 min | 🧪 `css-animation` / `css-gradient` / `dark-mode` |
| L13 | Build Profile Website | InteractiveLab | 30 min | 🧪 `css-positioning` / `css-transforms` / `css-shadows` |
| L14 | Build Photo Gallery | InteractiveLab | 30 min | 🧪 `grid-gallery` / `css-filters` |
| L15 | Build Contact Us Form | InteractiveLab | 30 min | 🧪 `html-forms` / `form-styling` |
| L16 | Build Responsive Blog Layout | InteractiveLab | 30 min | 🧪 `css-responsive` / `css-animation` / `flexbox-cards` |

> 🔧 **新增 Lab-Day 建议**：不创建新 lesson，把 CSS 进阶的 `css-clip-path`、`css-transforms`、`css-filters` 作为"Phase 2 可选深入练习"放进 Phase 10 扩展阅读里，让想深入学 CSS 的学员自主选学。

### Phase 3 — Git & 版本控制 (6 lessons, 加绑定)

| Code | Title | Type | Duration | 资源绑定 |
|---|---|---|---|---|
| L05 | Git and GitHub for Beginners Tutorial | Information | 15 min | 🧪 `git-what-is-version-control`<br>🧪 `git-first-commit` |
| L17 | Git & Shell | Lesson (非直播) | 180 min | 🧪 `git-first-commit`<br>🧪 `git-understanding-history` |
| L18 | Git – Version Control Practice | Lesson (非直播) | 180 min | 🧪 `git-modify-and-undo`<br>🧪 `git-branch-basics`<br>🧪 `git-merge-basics` |
| L19 | Git Assignment | Information | 30 min | 🧪 `git-merge-conflict` |
| L20 | 匠人 Github Page | Information | 15 min | 📖 `claude/usage/prompting` |
| L21 | Git, GitHub & GitHub Desktop for Beginners | Information | 15 min | 📚 `vibe-coding:git-commit-conventions` |

### Phase 4 — JavaScript 前端编程 (14 → 12 lessons, L34/L35 移扩展)

| Code | Title | Type | Duration | 资源绑定 |
|---|---|---|---|---|
| L22 | Javascript Part I | Lesson (非直播) | 180 min | 🧪 `js-variables` / `js-operators` / `js-conditionals` / `js-loops` |
| L23 | JavaScript Part I Assignment | Information | 30 min | 🧪 `js-loops` / `js-strings` |
| L24 | Javascript Part II | Lesson (非直播) | 180 min | 🧪 `js-strings` / `js-arrays` / `js-objects` / `js-functions` |
| L25 | JavaScript Part II Assignment | Information | 30 min | 🧪 `js-functions` / `js-arrow-functions` |
| L26 | Javascript Part III | Lesson (非直播) | 180 min | 🧪 `js-dom-basics` / `js-events` / `js-async` |
| L27 | JS Project – Number Plus Game | Lesson (非直播) | 180 min | 🧪 `js-events` / `js-string-padding` / `js-dom-basics` |
| L28 | JS Project – Priority Planner | Lesson (非直播) | 180 min | 🧪 `js-array-methods` / `js-destructuring` / `js-spread-rest` |
| L29 | JS Project – Best Performer / Quiz Game | Lesson (非直播) | 180 min | 🧪 `js-objects` / `js-async-await-patterns` / `js-error-handling` |
| L30 | Build a Digital Clock | InteractiveLab | 30 min | 🧪 `js-dom-basics` / `js-events` |
| L31 | Build Interactive To-Do List | InteractiveLab | 30 min | 🧪 `js-events` / `js-array-methods` / `js-classes` |
| L32 | Building a Simple Calculator | InteractiveLab | 30 min | 🧪 `js-functions` / `js-operators` / `js-events` |
| L33 | Front-end Project | Lesson (非直播) | 180 min | 🧪 `js-async` / `js-promise-all` / `js-optional-chaining` |
| ~~L34~~ | ~~100+ JavaScript Concepts~~ | ~~Information~~ | ~~15 min~~ | 🔧 **移到 Phase 10 扩展阅读** |
| ~~L35~~ | ~~50 days of 50 projects~~ | ~~Information~~ | ~~15 min~~ | 🔧 **移到 Phase 10 扩展阅读** |

### Phase 5 — Node.js 后端开发 (7 lessons, 加绑定)

| Code | Title | Type | Duration | 资源绑定 |
|---|---|---|---|---|
| L36 | Nodejs Introduction | Lesson (非直播) | 180 min | 📚 `vibe-coding:api-fullstack` |
| L37 | Node 2 | Lesson (非直播) | 180 min | 🧪 `js-modules` / `js-classes` |
| L38 | Node 3 | Lesson (非直播) | 180 min | 🧪 `js-async` / `js-promise-all` |
| L39 | Node – Express Server Setup | Lesson (非直播) | 180 min | 📚 `vibe-coding:api-fullstack` |
| L40 | Node 4 | Lesson (非直播) | 180 min | 🧪 `js-async-await-patterns` |
| L41 | Node 5 | Lesson (非直播) | 180 min | 🧪 `js-error-handling` |
| L42 | Node Project – User List | Lesson (非直播) | 180 min | 📚 `vibe-coding:ship-a-feature` |

### Phase 6 — 数据库基础 (3 lessons, 加绑定)

| Code | Title | Type | Duration | 资源绑定 |
|---|---|---|---|---|
| L43 | 数据库基础 | Lesson (非直播) | 180 min | 📖 `duckdb/getting-started` |
| L44 | MySQL | Lesson (非直播) | 180 min | 📖 `pandas/getting-started`（数据处理关联）|
| L45 | Instagramly 项目介绍 | Information | 15 min | 📚 `vibe-coding:real-project`（项目导入）|

### Phase 7 — Python 编程入门 (11 lessons, ⬆️ 从 Phase 8 上提)

> 🔧 **Phase 序号变更**：目前在 outline.json 里是 Phase 8，A4 要改成 Phase 7，并和当前 Phase 7 (Instagramly) 互换位置。

| Code | Title | Type | Duration | 资源绑定 |
|---|---|---|---|---|
| L52 | Python 入门，你不知道的 Python 技巧（孙禹） | Information | 15 min | 📚 `python:01-introduction` |
| L53 | Python Workshop 1 – Introduction | Lesson (非直播) | 120 min | 📚 `python:01-introduction`<br>🧪 `python-hello` |
| L54 | Python Workshop 2 | Lesson (非直播) | 120 min | 📚 `python:02-variables`<br>🧪 `python-variables` / `python-data-types` |
| L55 | Python Workshop 3 | Lesson (非直播) | 120 min | 📚 `python:03-operators`<br>🧪 `python-operators-math` / `python-boolean-logic` |
| L56 | Python Workshop 4 | Lesson (非直播) | 120 min | 📚 `python:04-strings`<br>🧪 `python-strings` / `python-f-strings` |
| L57 | Python Workshop 5 | Lesson (非直播) | 120 min | 📚 `python:06-lists` / `python:07-tuples`<br>🧪 `python-lists` / `python-tuples` |
| L58 | Python Workshop 6 | Lesson (非直播) | 120 min | 📚 `python:11-conditionals` / `python:12-loops`<br>🧪 `python-conditionals` / `python-loops` |
| L59 | Python Workshop 7 | Lesson (非直播) | 120 min | 📚 `python:15-functions`<br>🧪 `python-functions` / `python-lambda` |
| L60 | Python Workshop 8 | Lesson (非直播) | 120 min | 📚 `python:27-error-handling` / `python:29-json`<br>🧪 `python-error-handling` / `python-json` |
| L61 | Python – Syntax & Setup | Lesson (非直播) | 180 min | 📚 `python:01-introduction`<br>🧪 `python-variables` |
| L62 | Python Project – Log Tracker | Lesson (非直播) | 180 min | 📚 `python:28-file-handling` / `python:40-final-project`<br>🧪 `python-file-io` / `project-mini-calculator` |

### Phase 8 — 🎯 全栈项目 Instagramly (Capstone) (6 lessons, ⬇️ 从 Phase 7 下移)

> 🔧 **Phase 序号变更**：目前在 outline.json 里是 Phase 7，A4 要改成 Phase 8。
>
> 🔧 **教学角度转换**：Instagramly 不再是"跟着老师敲代码"，而是**"用 AI 辅助完成毕业项目"**。让学员用 Cursor + Claude Code 把前面 Phase 2-7 学的东西整合起来。

| Code | Title | Type | Duration | 资源绑定 |
|---|---|---|---|---|
| L46 | Nodejs Project 1 | Lesson (非直播) | 180 min | 📚 `vibe-coding:ship-a-feature` |
| L47 | Nodejs Project 2 | Lesson (非直播) | 180 min | 📚 `vibe-coding:pair-programming` |
| L48 | Project WebPage Part I | Lesson (非直播) | 180 min | 📚 `vibe-coding:real-project` |
| L49 | Project WebPage Part II | Lesson (非直播) | 180 min | 📚 `vibe-coding:multi-file` |
| L50 | Project WebPage Part III | Lesson (非直播) | 180 min | 📚 `vibe-coding:debug-with-ai` |
| L51 | Project WebPage Part IV（网站部署） | Lesson (非直播) | 180 min | 📚 `vibe-coding:ship-a-feature`<br>📖 `cursor/advanced/rules` |

### Phase 9 — 职业发展 (3 lessons, 加绑定)

| Code | Title | Type | Duration | 资源绑定 |
|---|---|---|---|---|
| L63 | 前端 后端 API 入门介绍 (Workshop) | Lesson (非直播) | 120 min | 📚 `vibe-coding:api-fullstack` |
| L64 | 来自澳洲本地猎头 Brodie 告诉你如何找工作 | Lesson (非直播) | 120 min | —（猎头访谈，不绑定）|
| L65 | 2023 年 IT 行业趋势 | Information | 15 min | 🔧 **A8 更新为 "2026 AI Coding 时代的 IT 就业趋势"**（title + description + step 都要改） |

### Phase 10 — 扩展阅读 · 传统 Web 栈 + JS 资源集合 (10 lessons, 已标 isExtension)

| Code | Title | Type | 来源 |
|---|---|---|---|
| L66 | PHP Programming Basic | Video | A2 移入 |
| L67 | 用 PHP 操作数据库 | Video | A2 移入 |
| L68 | PHP 常用函数 | Video | A2 移入 |
| L69 | Web development | Video | A2 移入 |
| L70 | Wordpress Basic | Video | A2 移入 |
| L71 | Wordpress programming | Video | A2 移入 |
| L72 | Woocommerce | Video | A2 移入 |
| L73 | Wordpress Themes & Plugins | Video | A2 移入 |
| L34 | 100+ JavaScript Concepts you Need to Know | Information | 🔧 A5 待移 |
| L35 | 50 days of 50 projects | Information | 🔧 A5 待移 |

---

## 7. 实施计划

> 所有步骤按顺序跑，每一步都是 non-breaking，跑完立刻可以中断

| Step | 动作 | 涉及文件 | 预估复杂度 |
|---|---|---|---|
| A1 ✅ | 15 节直播课 → 录播 | outline.json | 已完成 |
| A2 ✅ | PHP/WP → Phase 10 扩展 | outline.json | 已完成 |
| A3 ✅ | 新增 Phase 1 Vibe Coding 入门 5 节 | outline.json | 已完成 |
| **A4** | **🔧 Python ↔ Instagramly 顺序互换 + Phase 2 summary 桥接文案** | outline.json | 低（机械数据移动）|
| A5 | L34/L35 (JS 资源集合类) 移 Phase 10 | outline.json | 低 |
| **A6** | **🔧 按本 PRD Section 6 给所有 lesson 加 labs / learns / wikis 绑定**（本步骤最重要） | outline.json | 中（数据量大，要准确） |
| A7 | 重新引入 6-8 节直播课（开课会 / 项目评审 / 面试模拟 / 答疑） | outline.json + 新 lesson | 中 |
| A8 | 73 个老 lesson 补 `description`（销售文案） + 用 `/lesson-design` 展开 `steps` | outline.json | 高（量大、质量要求高） |
| A9 | L65 "2023 IT 行业趋势" 更新为 "2026 AI Coding 趋势" | outline.json | 低 |
| A10 | 创建 `public/curriculum.html` 静态页面 | 新文件 | 中 |
| A11 | 更新 `.github/workflows/deploy.yml` + frontend `CURRICULUM_SLUGS` | 外部 repo 文件 | 中（部署 infra 改动） |
| A12 | 运行 `/bootcamp-sync` 同步到 production（非破坏，只更新 Training 元数据和 Phase 结构） | Skills Data Manager | 中 |

### 7.1 依赖关系

```
A4 (order) ──┐
A5 (L34/L35) ├─► A6 (bindings) ─► A8 (descriptions) ─► A10 (static page) ─► A11 (deploy) ─► A12 (sync)
A9 (L65)    ─┘                ↑
                               └── A7 (new live classes — can be done in parallel with A8)
```

### 7.2 Schema 扩展说明

本 PRD 提出在 outline.json 的 lesson 级别引入新字段 `wikis`：

```json
{
  "code": "L75",
  "labs": [{ "source": "prompt-lab", "slug": "hello-ai" }],
  "learns": [{ "direction": "vibe-coding", "slug": "install-cursor" }],
  "wikis": [{ "slug": "cursor/getting-started/installation" }]
}
```

`wikis` 字段当前**不在** `curriculum/OUTLINE_JSON_FORMAT.md` 的标准里，需要 PRD 落地时同步更新该文档。同步到 production 时映射到 Lesson 的 `staticWikiSlugs[]` 字段（后端已支持）。

同样，Phase 级别的 `isExtension: true` 也是本 PRD 首次引入的自定义字段，需要更新 OUTLINE_JSON_FORMAT.md 标准。

## 8. 成功指标

| 指标 | 目标 | 测量方式 |
|---|---|---|
| **入门阻塞率**（Phase 1 完成率） | ≥ 90% | 用户数据（后端 progress 表） |
| **核心路径完成率**（Phase 0-8 完成率） | ≥ 60%（老课是 ~35%） | 用户数据 |
| **Lab 完成率**（绑定的 lab 至少完成 1 次的比例） | ≥ 50% | Lab 后端统计 |
| **学员满意度**（NPS） | ≥ 40 | 课后问卷 |
| **转化到进阶课程**（毕业后报名 Vibe Coding / AI Engineer bootcamp 的比例） | ≥ 25% | 业务系统 |
| **SEO**（`web-code-bootcamp-or-learn-to-code` slug 流量不下降） | 维持或增长 | GSC |

## 9. 风险与对策

| 风险 | 可能性 | 影响 | 对策 |
|---|---|---|---|
| 第22期在册学员反馈 "我报名的不是这个" | 中 | 中 | 第22期保持原 outline 跑完；新 outline 从第23期开始生效 |
| Phase 结构改动同步到 production 失败 | 中 | 高 | 先用 Skills Data Manager `Check Diff` 观察变化，再小范围 sync 测试 |
| 绑定的 lab slug 不存在或 404 | 低 | 中 | A6 步骤前先用脚本验证所有 slug 在 `jr-academy-web-zh/src/config/labs` 真实存在 |
| 新字段 `wikis` / `isExtension` 后端不识别 | 低 | 中 | 同步前先和 `jr-academy/src/modules/admin-cms` 对齐字段支持 |
| SEO 流量因 description 大规模改写下滑 | 低 | 高 | `course.description`（8311 字符 legacy HTML）**不动**，只改 lesson 级文案 |
| 历史 cohort (第9~22期) 被新结构覆盖 | 中 | 高 | Program 不改，只改 Training 本体 + 新建 program 第23期 |
| AI coding 工具短期内再次迭代导致 Phase 1 内容过时 | 高 | 中 | Phase 1 聚焦"和 AI 协作"的抽象技能，不绑死具体工具版本 |

## 10. Out of Scope

- ❌ **不做**：给这门课做 slide deck（`src/App.tsx` + `SlideEngine`）—— 留给做 demo 的时候再说
- ❌ **不做**：把老的 Instagramly 项目重写成 v0/Lovable 项目 —— 那是 A6 之后的"课程内容增强"，不在本 PRD
- ❌ **不做**：完全重写 `course.description`（8311 字符的 legacy HTML "为什么要转行做IT"）—— SEO 风险太大
- ❌ **不做**：为这门课做独立的 `curriculum.html` 以外的静态页面（`phase1.html`, `phase2.html` 等）—— 作为纯 JSON-driven bootcamp
- ❌ **不做**：更改 production Training ID (`5b4b5ad403c44f38ca79e74b`) 或 slug
- ❌ **不做**：触碰第22期在册学员的 program（完整跑完）
- ❌ **不做**：在本 PRD 里做任何 production 的写操作 —— 本 PRD 只描述 local 的 source 变更

## 11. 附录

### 11.1 相关文档

- `README.md` — 本目录快速入门 + 重构进度表
- `public/outline.json` — 课程唯一数据源
- `curriculum/OUTLINE_JSON_FORMAT.md` — outline.json 格式规范（A6 要 PR 更新）
- `curriculum/WORKFLOW.md` — 通用重构工作流
- `curriculum/BOOTCAMP_AUTOMATION_STATUS.md` — 全局状态追踪
- `tools/skills-data-manager/SCHEMA_REFERENCE.md` — Training/Program/Lesson schema 权威参考
- `tools/skills-data-manager/BOOTCAMP_GUIDE.md` — 同步踩坑记录

### 11.2 决策日志

| 日期 | 决策 | 原因 |
|---|---|---|
| 2026-04-11 | 选方向 🅰️ (保留 slug + 换内核) 而非方向 B/C/D | 8 年 SEO 资产 + 在册学员关系 |
| 2026-04-11 | 只加不减原则 | User feedback: "never delete existing content" |
| 2026-04-11 | 第22期作为 canonical 源而非新写 outline | 第22期内容最全（73 lessons）|
| 2026-04-11 | Phase 1 插入位置：Phase 0 之后 Phase 2 之前 | 零基础先要 dopamine hit，再回头学语法 |
| 2026-04-11 | Python ↔ Instagramly 互换 | Capstone 必须在所有语言学完之后 |
| 2026-04-11 | 重组不压缩：L34/L35 移 Phase 10 而非删除 | 只加不减原则 |

### 11.3 待决策（需 Owner 确认）

- [ ] **A7 的直播课选题**：6-8 节，我初步建议是 "开课会 / Phase 1 项目评审 / JS 答疑 / Python 答疑 / 全栈项目中期评审 / 全栈项目终审 / 面试模拟 1 / 面试模拟 2"，但需要和运营/讲师对齐
- [ ] **A12 同步时机**：是先同步纯结构变更（Phase + lesson list），还是等 A8 描述文案全部补完再一起同步？建议前者（结构变更优先）
- [ ] **L02 "计算机专业要学哪些" 这门课是否还适合放在 Phase 0**：Xiao Hua 老师的老课，"白嫖三年科班必修课" 的定位在 AI 时代还成立吗？（建议保留但加新的 summary 框架）
- [ ] **Python 作为第二语言 vs 独立轨道**：Phase 7 提上来之后，Python 是否有必要再引入"Python 方向延伸阅读"放到 Phase 10？
