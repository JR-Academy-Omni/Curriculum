# 01 · AI Coding 全景

## 1.1 开场 / 课程定位

- 主题：Vibe Coding — AI 时代的编码新范式
- 讲师：Lightman（JR Academy）
- 核心问题：AI 不是替代程序员，而是把"会写 PRD + 会拆任务 + 会读 diff"的人放大 10×
- 本节目标：建立工具地图，知道 2025 年市场上"AI Coding"到底有几条赛道

---

## 1.2 AI Coding · Annual Revenue Report

- 一句话：AI Coding 是过去 18 个月营收增长最快的 SaaS 赛道，没有之一
- 现场互动：让学员说出他们听过的 AI Coding 工具，板书在白板，再用下一节归类

---

## 1.3 四大工具类（讲师板书结构）

| 类别 | 代表产品 | 用户画像 |
|------|---------|---------|
| **AI 网页生成 / Vibe Coding** | Lovable, v0, Bolt | 不写代码 / 只想要 demo / 产品经理 |
| **Coding Agent (7×24)** | OpenAI Codex, Cursor Agent, SWE-agent | 异步派活 / 长跑任务 / 团队协作 |
| **IDE** | Cursor, GitHub Copilot, Antigravity | 主力开发者 / 日常写代码 |
| **CLI** | Claude Code, Codex CLI, gemini-cli | 重度终端用户 / 自动化脚本 |

> 讲师提示：四类不是替代关系，资深开发者一天会同时用 IDE + CLI + Agent。

---

## 1.4 #01 · IDE & VS Code Fork 路线

- VS Code 是底座，所有 AI IDE 几乎都基于它的 Fork 或 Extension
- **Extension 路线**：GitHub Copilot / Codium / Windsurf 早期 / Cline
  - 优点：留在熟悉的 VS Code 里
  - 缺点：受限于 Extension API，Agent 模式发挥不开
- **Agent Mode 升级**：GitHub Copilot Agent Mode、Cline 1.9
  - 把"补全"升级到"派活"
- **Fork 路线**：Cursor / Windsurf
  - 优点：可以改底层 UI、加 Composer / Agent 面板
  - 缺点：更新跟不上 VS Code 主干、扩展生态可能脱节

---

## 1.5 #02 · CLI 路线

- Claude Code = Anthropic 官方 Coding Agent CLI（不是 IDE 插件）
- 对标：Cursor 是 IDE，Claude Code 是终端 Agent
- 三大主流：
  - **Claude Code** — Anthropic 官方
  - **OpenAI Codex CLI** — OpenAI 官方
  - **Google Gemini CLI** — Google 官方 + 开源
- 共同点：都跑在终端、都可读写文件、都可执行 shell、都吃 `*.md` 项目说明

---

## 1.6 #03 · Vibe Coding 工具

- 2025 年新概念："vibe coding" — 不写代码，只描述你要的"感觉"
- 代表：**Lovable**、**Bolt.new**、**Replit**
- 流程：自然语言描述 → 生成完整 web app → 部署 → 拿链接
- 适合：MVP / Demo / 创业 idea 验证 / 内部工具
- 不适合：复杂业务系统、长期维护、性能敏感场景

---

## 1.7 #04 · Coding Agent · 7×24

- "Agent" 关键词：异步、长跑、可被打断、自主决策
- 代表：**OpenAI Codex**（基于 codex-1，蒸馏自 OpenAI o3）
- 用法：在 ChatGPT 或 GitHub PR 里派活 → Agent 在云端跑 → 完成后返回 diff
- 优势：你不用守在屏幕前，下班前派活，明早看结果

---

## 1.8 SME（中小企业）应用场景

- 谁会先用 AI Coding？
  - 没有专职开发的 SME（夫妻店 / 小工作室）
  - 内部工具（库存 / 排班 / CRM）一个人就能撑
  - 替代"找外包写半年才上线"的旧路径
- 讲师案例：JR Academy 自己内部就有大量 AI Coding 实战

---

## 1.9 实战案例 1 · SigmaQ

- SigmaQ = JR Academy 旗下的模考 / 测评 SaaS 平台
- 技术栈：Express + React + MongoDB
- 关键特性：
  - 6 大模式：SaaS / Multi-Tenant / Snapshot of Results / Super Admin / Survey / Assessment / Live / Quiz / Onboarding
  - 通过 iframe + SSO 嵌入 JR Academy 主站
- 开发节奏：4 days（讲师强调："以前要 4 个月的功能，现在 4 天"）

---

## 1.10 实战案例 2 · SuperAdmin CMS

- SuperAdmin CMS = JR Academy 超管后台（jr-academy-admin）
- 用途：替代 old-cms 的 Keystone 4 legacy
- 设计目标：non-tech 也能改课程数据
- 教学要点：
  - AI 帮你设计 schema → 生成 CRUD → 接入 MongoDB
  - 设计是关键，CRUD 是 AI 的体力活
