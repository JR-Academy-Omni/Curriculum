# PM / BA 资源目录（可复用）

> **这个文件给课程设计者用。** 当你在做 Product Manager / Business Analyst / AI 产品经理相关的 bootcamp 时，从下面这张单子里挑 slug，直接 paste 到 `curriculum/{bootcamp}/public/outline.json` 的 lesson 字段里。
>
> **所有 slug 都经过实际文件系统验证**（videos / wikis / cheat-sheets / interview-questions / roadmaps / prompt-labs 各目录都扫过了），不是幽灵引用。
>
> **首次使用**：`curriculum/business-analyst/public/outline.json`（2025-12 期，89/94 lesson 有绑定）。

---

## 1. 使用方法

`outline.json` 里每个 lesson 都可以带 5 种 resource binding（参考 `curriculum/OUTLINE_JSON_FORMAT.md`）：

```json
{
  "code": "L01",
  "title": "Welcome",
  "type": "Video",
  "duration": 120,
  "description": "...",
  "cheatSheets": [{ "slug": "chatgpt" }],
  "wikis": [{ "slug": "business-analyst" }],
  "videos": [{ "slug": "ba-business-analyst-user-story-ba" }],
  "roadmaps": [{ "slug": "2026ai-learning-roadmap" }],
  "interviewQuestions": [{ "bank": "agile" }]
}
```

同步到 production 后学员会在 lesson 详情页看到这 5 类推荐资源的卡片入口。

---

## 2. Videos（视频 — 13 个）

按用途分组。每个视频条目给 slug + 时长 + type（`skills` = 教学，`interview` = 采访）+ 一句话教了什么 + 建议用在哪类 lesson。

### 2.1 User Story / Requirements 教学（3 个）

| Slug | 时长 | Type | 教什么 |
|------|-----|------|--------|
| **`ba-business-analyst-user-story-ba`** | 67 min | skills | Thoughtworks 资深 BA Xin 系统讲 User Story：INVEST 原则、Acceptance Criteria、Story 拆分、PO 沟通，配合真实项目案例 |
| `business-analyst-user-story` | 29 min | skills | User Story 三段式结构、Acceptance Criteria、Epic vs Story 层级、Story Mapping 梳理需求全貌 |
| `ba-irelia` | 长版 | skills | BA 实习学员 Irelia 讲 BA 日常工作：需求分析 / stakeholder 沟通 / 文档编写 / 实习经验的实际价值 |

**建议绑到**: User Story 相关 lesson（如 BA bootcamp 的 L44-L49、L61 GenAI-empowered BA）、需求分析基础 lesson

### 2.2 BA Day-in-Life / 职业介绍（2 个）

| Slug | 时长 | Type | 教什么 |
|------|-----|------|--------|
| **`ba-or-or-or-or-it-or-it-or-or-business-analyst`** | 42 min | skills | Michelle 还原澳洲大厂 BA 一天：standup → stakeholder workshop → 需求文档 → 跨部门协作。核心技能 + 职业发展路径 |
| `business-analyst-ba-ba-bowen` | 4 min | interview | BA 实习学员 Bowen 简短采访：澳洲 BA 岗位看重的技能（需求分析 / Stakeholder / SQL / 可视化），实习找法 |

**建议绑到**: "什么是 BA" 类 lesson（如 BA bootcamp L32）、BA 角色介绍 lesson（L15-L19）

### 2.3 BA 求职 / 面试经验（3 个）

| Slug | 时长 | Type | 教什么 |
|------|-----|------|--------|
| **`50-or-uq-is-ba-local-pr-local-ba-offer-it-it-business-analyst-ba-or`** | 37 min | interview | UQ IS 专业学长无 PR 无本地经验拿 Local BA offer：BA 面试 behavioural questions + case study 实战、STAR 法则、stakeholder management case |
| `business-analyst-ba-irelia` | 5 min | interview | Irelia 谈实习对 BA 求职的关键作用：项目案例积累 / Jira & Confluence / scenario-based 面试题 |
| `business-analyst-ba-ba-bowen` | 4 min | interview | （见 2.2，同一个视频）Bowen 实习找法 + BA 面试准备路径 |

**建议绑到**: BA 求职 / 面试 lesson（如 BA bootcamp L20-L28 career 模块）、IS 专业就业相关 lesson

### 2.4 PRD / AI PM 工作流（1 个 — 重磅）

| Slug | 时长 | Type | 教什么 |
|------|-----|------|--------|
| **`vibe-coding-workflow-prd-agent`** | 2h 49min | skills | AI 时代 PM 必备工作流：PRD 需求文档 → 任务拆解 → 系统设计 → Cursor/Claude Code/Codex 多 Agent 协作 → 自动化上线链路。从产品分析到部署全流程 |

**建议绑到**: PRD 写作 lesson（如 BA bootcamp L64-L74）、AI PM 定位 lesson（L29 什么是 AI PM）、自动化 / Agent lesson（L86-L94）

### 2.5 Agile / Scrum 实战项目 Demo（5 个 — TechScrum 系列）

这 5 个是学员 P3 项目做的 Jira-like 敏捷项目管理工具 Demo。对讲 Scrum / Sprint / Kanban / Backlog 的 lesson 非常有用 — 直接看真实项目怎么用这些概念。

| Slug | 时长 | 期数 |
|------|-----|-----|
| **`techscrum-final-demo-or-25-or-it`** | 22 min | 25 期（推荐，最新、最完整）|
| `techscrum-demo-or-25-or-it` | 10 min | 25 期中期 |
| `techscrum-finaldemo-or-24-or-it` | 14 min | 24 期 |
| `web-19-p3-final-techscrum` | 14 min | 19 期 |
| `web-18-p3-final-tech-scrum` | 20 min | 18 期 |

**建议绑到**: Scrum ceremonies lesson（如 BA bootcamp L52-L60 Agile 全套）、Kanban / Sprint 管理 lesson、P3 项目介绍 lesson（L08 / L16 / L19）

---

## 3. Wikis（7 个）

⚠️ **Empty draft 标记**: 有几个 wiki 虽然存在但当前 `chapters: []` 为空，绑上去是 placeholder，等着后续填内容。

| Slug | Title | Chapters | 状态 |
|------|------|---------|------|
| **`prompt-engineering`** | Prompt Engineering 实战指南 | **3 章** | ✅ 有内容 |
| **`n8n-workflow-automation`** | n8n 工作流自动化实战手册 | **5 章** | ✅ 有内容 |
| **`n8n-guide`** | n8n 自动化工作流实战指南 | 1 章 | ✅ 有内容 |
| **`claude-code-guide`** | Claude Code 从入门到实战 | **5 章** | ✅ 有内容 |
| `business-analyst` | Business Analyst | 0 章 | ⚠️ **empty draft**（BA v2 PRD 计划扩写）|
| `ai-engineer` | AI Engineer | 0 章 | ⚠️ **empty draft** |
| `data-analyst-career-guide` | Data Analyst Career Guide | 0 章 | ⚠️ **empty draft** |

**建议绑法**：

```json
// Prompt 工程类 lesson
"wikis": [{ "slug": "prompt-engineering" }]

// Automation / workflow 类 lesson
"wikis": [{ "slug": "n8n-workflow-automation" }, { "slug": "n8n-guide" }]

// AI Coding / Agent 类 lesson
"wikis": [{ "slug": "claude-code-guide" }]

// BA 角色介绍（placeholder，等待填充）
"wikis": [{ "slug": "business-analyst" }]
```

---

## 4. Cheat Sheets（15 张，AI 工具 + 办公工具）

所有 slug 都在 `jr-academy-web-zh/src/constants/cheatSheets.ts` index 里，学员能直接访问 `/cheat-sheets/{slug}`。

### 4.1 AI 工具（10 张）

| Slug | 用途 |
|------|-----|
| **`chatgpt`** | ChatGPT 完整速查（1017 行，最全）|
| **`claude`** | Claude 速查（689 行）|
| **`gemini`** | Gemini 速查（589 行）|
| `perplexity` | Perplexity AI 研究助手 |
| **`cursor`** | Cursor IDE（AI coding）|
| `github-copilot` | GitHub Copilot |
| **`v0-dev`** | v0.dev（AI 生成 React UI）|
| `midjourney` | Midjourney（AI 图像）|
| `stable-diffusion` | Stable Diffusion（AI 图像）|
| **`notion-ai`** | Notion AI（559 行）|

### 4.2 办公 / 协作工具（5 张）

| Slug | 用途 |
|------|-----|
| **`notion`** | Notion（文档 / 项目管理）|
| **`figma`** | Figma（设计协作）|
| `slack` | Slack（团队沟通）|
| `markdown` | Markdown 语法速查（User Story / PRD 写作必备）|
| `obsidian` | Obsidian（笔记 / 知识库）|

**建议绑法**：

```json
// Tool setup / 工具介绍 lesson
"cheatSheets": [{ "slug": "chatgpt" }, { "slug": "claude" }, { "slug": "notion-ai" }, { "slug": "notion" }]

// PRD 写作 lesson
"cheatSheets": [{ "slug": "markdown" }, { "slug": "notion" }, { "slug": "figma" }]

// AI coding lesson
"cheatSheets": [{ "slug": "cursor" }, { "slug": "github-copilot" }, { "slug": "v0-dev" }]

// Stakeholder 沟通 lesson
"cheatSheets": [{ "slug": "slack" }, { "slug": "notion" }]
```

---

## 5. Interview Question Banks（17 个相关）

全部在 `skills-data/interview-questions/` 下。格式 `{ "bank": "slug" }`。

### 5.1 方法论 / 软实力（6 个）

| Bank | 说明 |
|------|-----|
| **`behavioral`** | 行为面试通用题库（STAR 法则核心）|
| **`star`** | STAR 回答法专项题库 |
| **`hr`** | HR 轮面试题库 |
| **`agile`** | Agile 方法论题库 |
| **`agile-testing`** | Agile 测试题库 |
| **`scrum-master`** | Scrum Master 专属题库 |

### 5.2 澳洲 BA/PM 目标公司（11 个）

| Bank | 公司 | 备注 |
|------|-----|------|
| **`atlassian`** | Atlassian | 澳洲本土，BA/PM 重镇 |
| **`canva`** | Canva | Sydney 独角兽 |
| **`anz`** | ANZ | 四大行，AI 转型 |
| **`cba`** | Commonwealth Bank | 四大行 |
| **`macquarie`** | Macquarie Group | 投行 |
| **`afterpay`** | Afterpay | Fintech |
| `asana` | Asana | 项目管理 SaaS |
| `amazon` | Amazon | AWS / retail |
| `google` | Google | — |
| `microsoft` | Microsoft | — |
| `anthropic` | Anthropic | AI lab |

**建议绑法**：

```json
// BA 面试准备 lesson
"interviewQuestions": [
  { "bank": "behavioral" },
  { "bank": "hr" },
  { "bank": "star" },
  { "bank": "agile" }
]

// 澳洲 target company lesson
"interviewQuestions": [
  { "bank": "atlassian" },
  { "bank": "canva" },
  { "bank": "anz" }
]

// Scrum ceremonies lesson
"interviewQuestions": [{ "bank": "scrum-master" }, { "bank": "agile" }]
```

---

## 6. Roadmaps（6 个最相关）

**⚠️ 平台目前没有 AI PM / BA career 专属 roadmap**。以下是 43 个 roadmap 里最相关的几个。BA v2 PRD 提出要新建 `ai-product-manager-roadmap`，完成后本节更新。

| Slug | 说明 |
|------|-----|
| **`2026ai-learning-roadmap`** | 2026 AI 学习路径（所有人通用，AI PM 入门友好）|
| **`ai-engineer`** | AI Engineer 技术栈（给 AI PM 理解工程侧用）|
| **`ai-engineering`** | AI 工程整体 roadmap |
| `data-analyst-roadmap` | Data Analyst 路径（BA/DA 转型参考）|
| `vibe-coding` | Vibe Coding（AI 编程）roadmap |
| **`agent-system-overview-roadmap`** | Agent 系统概览（L86+ Agent lesson 绑）|
| `rag-retrieval-augmented-generation-roadmap` | RAG 架构 roadmap（L83+ RAG lesson 绑）|

**建议绑法**：

```json
// AI 入门 / AI PM 定位 lesson
"roadmaps": [{ "slug": "2026ai-learning-roadmap" }]

// 讲 Agent / Tool calling 的 lesson
"roadmaps": [{ "slug": "agent-system-overview-roadmap" }]

// 讲 RAG / 知识库 lesson
"roadmaps": [{ "slug": "rag-retrieval-augmented-generation-roadmap" }]
```

---

## 7. Prompt Labs（可作为独立 InteractiveLab lesson 的 slug）

⚠️ **重要规则**（来自 `curriculum/CLAUDE.md` 铁律）：**Lab 必须是独立的 Lesson，不能作为 `labs[]` attachment 塞到 concept lesson 里**。

如果 PM/BA 课程需要 hands-on 练习，**新建一节 `type: "InteractiveLab"` 的 lesson**，字段：

```json
{
  "code": "L06",
  "title": "Lab: Clear Task",
  "type": "InteractiveLab",
  "isLive": false,
  "isInteractiveLab": true,
  "interactiveLabType": "prompt",
  "interactiveLabSlug": "clear-task",
  "duration": 30,
  "description": "Prompt 实验：把一个模糊需求改造成四要素 Prompt。在浏览器内完成实操练习，即时验证结果。"
}
```

### 7.1 PM/BA 最相关的 prompt-lab slugs（从 37 个里挑的）

这些都在 `jr-academy-web-zh/src/config/prompt-labs/` 实际存在。

| Slug | 用途 | 适合什么 BA/PM lesson |
|------|-----|----------------------|
| **`hello-ai`** | 第一次对话 | 工具 setup、AI 入门 |
| **`workplace-scenarios`** | 职场场景 prompting | 需求分析实战、AI 应用探索 |
| **`clear-task`** | 清晰任务定义 | 需求澄清、Stakeholder interview sim |
| **`few-shot`** | Few-shot 示例 | User Story 生成 lab |
| **`output-format`** | 输出格式控制 | User Story / PRD 格式化 |
| **`json-schema`** | 结构化输出 | PRD 需求字段生成 |
| **`business-writing`** | 商业写作 | PRD 写作 lab |
| **`role-playing`** | 角色扮演 | Stakeholder 模拟面谈 |
| **`chain-of-thought`** | 思维链推理 | 需求拆解逻辑 |
| **`context-management`** | 多轮对话上下文 | 多轮需求迭代 |
| **`information-extraction`** | 信息提取 | 访谈记录结构化 |
| **`text-summarization`** | 摘要 | 会议纪要 / 用户反馈摘要 |
| **`prompt-evaluation`** | Prompt 评估 | A/B 测试 lab、AI 产品评估 |
| **`cost-optimization`** | 成本优化 | AI 成本管理 |
| **`prompt-chaining`** | 链式 prompt | 自动化流程、Notion→AI→Jira |
| **`qa-system-design`** | QA 系统设计 | 文档问答助手 lab |
| **`rag-basics`** | RAG 基础 | 知识库产品设计 |
| **`tool-use`** | Tool calling | Agent / MCP lesson |
| **`multi-agent`** | 多 Agent 编排 | Agent 工作流 |
| **`react-agent`** | ReAct Agent | Agent 落地实战 |

### 7.2 BA bootcamp 已用的 Lab 绑定（v2 第一个落地）

| Lesson | Lab slug | 说明 |
|--------|---------|------|
| L06 工具与账号配置 | `hello-ai` | 第一次对话 |
| L38 AI 应用体验 | `workplace-scenarios` | 职场场景 |
| L50 AI 小编剧：User Story 生成 | `few-shot` | Few-shot 生成 Story |
| L74 撰写 PRD | `business-writing` | 商业写作 |
| L78 Prompt A/B | `prompt-evaluation` | Prompt 评估 |
| L84 文档问答助手 | `qa-system-design` | QA 系统设计 |
| L89 Notion→AI→Jira 自动化 | `prompt-chaining` | 链式 prompt |

---

## 8. 完整 outline.json 示例（L01 Welcome）

```json
{
  "code": "L01",
  "title": "Welcome — 为什么要做 AI 产品经理",
  "description": "开篇课 — AI 时代 BA/PM 的定位变化、就业数据、课程结构、老师介绍",
  "type": "Video",
  "isLive": false,
  "duration": 120,
  "steps": [],
  "cheatSheets": [
    { "slug": "chatgpt" },
    { "slug": "claude" }
  ],
  "wikis": [
    { "slug": "business-analyst" }
  ],
  "videos": [
    { "slug": "business-analyst-ba-ba-bowen" },
    { "slug": "ba-or-or-or-or-it-or-it-or-or-business-analyst" }
  ],
  "roadmaps": [
    { "slug": "2026ai-learning-roadmap" }
  ],
  "interviewQuestions": [
    { "bank": "behavioral" }
  ]
}
```

学员打开这节课，Skills Data Manager / 前端 lesson 详情页都会看到 7 个资源 badge：
`📋 chatgpt` `📋 claude` `📖 business-analyst` `🎬 business-analyst-ba-ba-bowen` `🎬 ba-or-or-or-...` `🗺️ 2026ai-learning-roadmap` `💼 behavioral`

---

## 9. 缺口清单（TODO — 未来应创建的资源）

这些 PM/BA 场景当前平台**没有**对应资源，建议按优先级新建（来自 `curriculum/business-analyst/PRD.md`）：

### Must Have

- **`wiki/business-analyst`** 扩写（当前 0 章）— BA 职业全景、Delivery / Discovery / Initiation 三阶段、BA vs PM vs PO 对比
- **`wiki/ai-context-engineering`** — Context Engineering 入门（新建）
- **`wiki/mcp-protocol-for-pm`** — MCP 架构（新建，给 PM 视角）
- **`wiki/llm-token-economics`** — Token 经济学（新建）
- **`wiki/ai-product-evaluation`** — AI 产品评估体系（新建）
- **`cheat-sheets/user-story-invest`** — INVEST 检查卡
- **`cheat-sheets/prd-template-ai`** — AI 产品 PRD 模板
- **`cheat-sheets/pm-prompt-library`** — PM 日常 Prompt 库
- **`cheat-sheets/ai-cost-estimator`** — AI 成本估算卡
- **`roadmap/ai-product-manager-roadmap`** — AI PM 成长路径（5 层节点）
- **`interview-questions/product-manager`** — PM 通用题库
- **`interview-questions/requirements-analysis`** — BA 需求分析题库
- **`interview-questions/stakeholder-management`** — Stakeholder 管理题库

### Should Have

- PM Day-in-Life video（更详细的 AI PM 工作流演示）
- PRD walkthrough video（拿一个真实 AI feature PRD 做演示）
- AI Product A/B testing demo video

---

## 10. 维护规则

- **新增资源**（无论 video / wiki / cheat sheet / interview bank / roadmap）时，如果对 PM/BA 有用，**在本文件对应 section 追加一行**
- **已有资源被删除**时，先检查 `curriculum/*/public/outline.json` 里有没有引用，引用处处理完再删
- **本文件是只增不删**的参考目录，不记录具体 bootcamp 的进度（那些进度放在 `curriculum/{bootcamp}/CHANGELOG.md` / `PRD.md`）
- 本文件**不是 source of truth** — 真实 source of truth 是各自的 `skills-data/` 目录和前端 config。本文件是**索引**

---

## 附录 A: 所有 slug 一览（快速查找）

```
VIDEOS (13)
  Teaching:    ba-business-analyst-user-story-ba, business-analyst-user-story, ba-irelia
  Day-in-life: ba-or-or-or-or-it-or-it-or-or-business-analyst, business-analyst-ba-ba-bowen
  Career:      50-or-uq-is-ba-local-pr-local-ba-offer-it-it-business-analyst-ba-or,
               business-analyst-ba-irelia
  PRD/AI PM:   vibe-coding-workflow-prd-agent
  TechScrum:   techscrum-final-demo-or-25-or-it, techscrum-demo-or-25-or-it,
               techscrum-finaldemo-or-24-or-it, web-19-p3-final-techscrum,
               web-18-p3-final-tech-scrum

WIKIS (7)
  With content: prompt-engineering, n8n-workflow-automation, n8n-guide, claude-code-guide
  Empty draft:  business-analyst, ai-engineer, data-analyst-career-guide

CHEAT SHEETS (15)
  AI tools:  chatgpt, claude, gemini, perplexity, cursor, github-copilot, v0-dev,
             midjourney, stable-diffusion, notion-ai
  Office:    notion, figma, slack, markdown, obsidian

INTERVIEW BANKS (17)
  Methods:   behavioral, star, hr, agile, agile-testing, scrum-master
  Companies: atlassian, canva, anz, cba, macquarie, afterpay, asana,
             amazon, google, microsoft, anthropic

ROADMAPS (6)
  2026ai-learning-roadmap, ai-engineer, ai-engineering, data-analyst-roadmap,
  vibe-coding, agent-system-overview-roadmap, rag-retrieval-augmented-generation-roadmap

PROMPT LABS (20 BA/PM relevant)
  hello-ai, workplace-scenarios, clear-task, few-shot, output-format, json-schema,
  business-writing, role-playing, chain-of-thought, context-management,
  information-extraction, text-summarization, prompt-evaluation, cost-optimization,
  prompt-chaining, qa-system-design, rag-basics, tool-use, multi-agent, react-agent
```

---

**维护者**: 课程设计团队 + Claude AI
**最后扫描时间**: 2026-04-11
**首次落地**: `curriculum/business-analyst/public/outline.json`（第 4 期 2025-12 / AI 产品经理（BA）训练营+实习，89/94 lesson 有 binding）
