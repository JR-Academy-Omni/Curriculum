# 第三期 D3 · 职业成长与提升 — 新增 20 节课完整大纲

> **新增两个 Module**：Module X (AI 时代持续学习) + Module Y (职业方向深度发展)
> **目标**：把 D3 从 15 节扩到 28+ 节，让课程价值延伸到入职后
> **制定日期**: 2026-04-11

---

## Module X · AI 时代的持续学习（10 节）

**定位**：拿到 offer 后，怎么用 AI 工具让自己每天都在变强。
**插入位置**：Part 10 职业晋升 之后，Part 11 大厂求职之前。

### X1 — 入职后的第一个 90 天

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | 入职第一天到第 90 天的关键节点：Week 1 搞清楚代码仓库和团队、Week 2-4 完成第一个 PR、Month 2 独立负责一个小需求、Month 3 拿到第一次正式 review。每个阶段该做什么、不该做什么。大部分人在这 90 天就决定了未来 2 年的发展。 |
| **Handbook** | `career-growth` |
| **Wiki** | — |
| **Prompt Lab** | — |

### X2 — 如何建立可持续的 learning routine

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | 技术更新太快，不学就被淘汰。建立每天 30 分钟、每周 2 小时的学习节奏：morning 15 分钟读新闻（Hacker News / TLDR）、commute 30 分钟播客（Lex Fridman / Syntax FM）、weekend 2 小时 deep work（一个技术专题）。工具：Readwise + Obsidian + Anki。 |
| **Learn** | `/learn/vibe-coding/hub` |
| **Wiki** | `remote-work` (远程工作下的学习节奏) |
| **Free Resources** | Harvard CS50, Google AI Essentials |

### X3 — 用 AI 做日常学习笔记

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | 读一篇技术博客、看一个会议演讲，怎么让 AI 帮你提炼成可复用的笔记？实操：把文章喂给 Claude，让它生成三层笔记——核心概念（10 句话）、关键代码/数据（原样保留）、延伸思考（3 个你可以应用的场景）。用 Obsidian + AI 构建个人知识库。 |
| **Learn** | `/learn/prompt-master` |
| **Prompt Lab** | `information-extraction`, `prompt-engineering` |

### X4 — 技术人如何管理信息焦虑

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | "Twitter 上每天都有新模型、新工具、新框架"——FOMO 是技术人最大的敌人。三个原则：(1) 80/20 法则——20% 的核心技术解决 80% 的问题；(2) 工具的半衰期——新出的工具 90% 两年后消失；(3) 建立"延迟学习"机制——新东西先收藏，3 个月后还在讨论才学。 |
| **Handbook** | `career-growth` |

### X5 — Cursor 实战：提升 3x 编码效率

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | Cursor 是 2026 年最强的 AI 编程工具。从零到熟练：Cmd+K 快速改代码、Cmd+L 对话调试、Composer 多文件改造、.cursorrules 定义项目约定。5 个高频场景：写单元测试、生成 TypeScript 类型、重构老代码、解释陌生代码库、debug 复杂 bug。 |
| **Wiki** | `cursor` |
| **Learn** | `/learn/vibe-coding/hub` |

### X6 — Claude Code：AI 结对编程新范式

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | Claude Code 是终端里的 AI 结对编程工具。和 Cursor 的区别：Cursor 在 IDE 里改代码，Claude Code 像有个 senior engineer 坐你旁边。适合的场景：项目初始化、复杂调试、代码 review、大规模重构。配合 MCP 协议可以访问数据库、文件系统、API。 |
| **Wiki** | `claude-code-guide`, `mcp-guide` |

### X7 — 用 AI 做代码 review 和重构

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | Code review 是最高 ROI 的学习方式之一。用 AI 让自己成为更好的 reviewer：把 PR diff 给 Claude，让它从 5 个维度评审——可读性、性能、安全性、错误处理、测试覆盖。实操：批量审自己过去 3 个月的 PR，你会发现很多一直没注意的问题。 |
| **Prompt Lab** | `code-generation`, `chain-of-thought` |
| **Wiki** | `cursor`, `claude-code-guide` |

### X8 — AI 辅助技术调研与方案设计

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | 技术选型、架构设计、技术债评估——这些"思考工作"以前要花几天，现在用 AI 几小时就能做出一份有深度的方案。模板：输入业务需求 + 约束条件 + 3 个候选方案，让 AI 做 trade-off 分析。例子：选 PostgreSQL 还是 MongoDB、用 REST 还是 GraphQL、要不要上 Kubernetes。 |
| **Prompt Lab** | `chain-of-thought` |
| **Handbook** | `system-design` |

### X9 — 如何成为团队的 AI Champion

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | 不管你是 Junior 还是 Senior，主动在团队里推动 AI 使用就是最快的加薪路径。怎么做：(1) 每周分享一个 AI 使用小技巧；(2) 为团队写一份 AI 工具使用指南；(3) 组织一次 AI 工作坊；(4) 帮老板算 AI 的 ROI。案例：一个 Junior Developer 因为推动 Copilot 全员采用，半年内从 P2 跳到 P4。 |
| **Learn** | `/learn/ai-adoption` |
| **Wiki** | `cursor`, `copilot` |

### X10 — 2026 必须掌握的 5 个 AI 工具

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | 不是"知道"，是"深度掌握到能教别人"。清单：(1) Cursor——AI 编码；(2) Claude Code——AI 结对；(3) Perplexity——AI 搜索替代 Google；(4) NotebookLM——知识库对话；(5) v0/bolt——AI 生成 UI。每个工具的学习路径、常见坑、和其他工具怎么配合。 |
| **Wiki** | `cursor`, `claude-code-guide`, `copilot`, `windsurf`, `antigravity` |
| **Free Resources** | Cursor Free Tier, Copilot 学生版 |

---

## Module Y · 职业方向深度发展（10 节）

**定位**：入职后不是"保住工作"，是"选对方向长期发展"。
**插入位置**：Module X 之后。

### Y1 — 选择技术专精方向：T 型 vs π 型人才

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | T 型人才（一专多能）在 3-5 年前是黄金模型，但 AI 时代变了。π 型人才（两个专精 + 广博基础）更吃香——比如"后端 + AI" 或 "前端 + 设计"。怎么选第二专精：看自己的兴趣曲线、看市场的薪资溢价、看 5 年后的需求预测。 |
| **Handbook** | `engineering-levels`, `career-growth` |
| **Roadmap** | `full-stack-developer-roadmap`, `ai-engineer` |

### Y2 — 从 Junior 到 Senior 的 5 个关键跨越

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | 这 5 个跨越定义了你能不能成为 Senior：(1) 从"完成需求"到"发现需求"；(2) 从"写代码"到"设计系统"；(3) 从"靠 manager 安排"到"主动 manage up"；(4) 从"独善其身"到"mentoring 别人"；(5) 从"技术视角"到"业务视角"。每个跨越的具体动作清单。 |
| **Handbook** | `career-growth`, `engineering-levels` |

### Y3 — 如何建立技术影响力（blog / talk / OSS）

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | Senior 和 Staff 的核心区别之一：你的影响力范围。三个建立影响力的路径：(1) 技术博客——每月一篇，Dev.to 或自建；(2) 会议演讲——从公司内部 Tech Talk 开始，到 local Meetup，再到 Conference；(3) 开源贡献——从 good first issue 开始，到成为某个项目的 maintainer。每条路径的 2 年发展计划。 |
| **Wiki** | `remote-work` (全球技术社区参与) |

### Y4 — 技术路线：Staff / Principal 的真实要求

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | Senior 到 Staff 是 IC 路线最难的一跳。Staff 不是"比 Senior 技术更好"，是"能影响整个组织的技术方向"。真实要求：(1) 能跨团队推动技术决策；(2) 能写 technical strategy doc；(3) 能 mentor 多个 Senior；(4) 有标志性技术成果（开源项目 / 公司核心系统 / 行业影响力）。Google/Atlassian/Canva 的 Staff 真实 JD 对比。 |
| **Handbook** | `engineering-levels`, `interview-formats-top-companies` |

### Y5 — 管理路线：Tech Lead / EM 的技能树

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | 不是所有人都适合做管理，但每个 Senior 都应该了解管理路径。从 TL → EM → Senior EM → Director 的完整路径。核心技能差异：TL 还在写代码（50%），EM 基本不写代码（10%），Director 完全不写代码（0%）。怎么判断自己适不适合：一周内让你不写代码，你痛苦吗？ |
| **Handbook** | `career-growth`, `engineering-levels` |

### Y6 — 转型 AI Engineer 的完整路径

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | 从普通开发者转型 AI Engineer 的 6 个月路径。Month 1-2：ML 基础（Andrew Ng 的课 + 实战）；Month 3：LLM 和 RAG（LangChain + 向量数据库）；Month 4：Agent 开发（LangGraph / CrewAI）；Month 5：部署和 MLOps；Month 6：个人项目（开源一个 AI 应用到 GitHub）。真实案例：一个 Java 后端开发者 8 个月后拿到 AI Engineer offer。 |
| **Learn** | `/learn/ai-engineer/hub` |
| **Roadmap** | `ai-engineer`, `machine-learning-roadmap-1`, `rag-retrieval-augmented-generation-roadmap` |

### Y7 — 转型 AI Product Manager

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | AI PM 是 2026 年最火的复合型岗位。技术背景转 AI PM 的优势：能和工程师沟通、理解模型能力边界、能做真正可行的产品决策。需要补的技能：产品思维、用户研究、数据分析、商业模式。AI PM 的日常：1/3 时间和模型打交道（评估、测试），1/3 和用户（需求、反馈），1/3 和团队（规划、对齐）。 |
| **Learn** | `/learn/ai-pm` |

### Y8 — 转型 AI Adoption Specialist

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | AI Adoption Specialist 是新兴岗位——帮企业把 AI 真正用起来。$70K-$250K 薪资范围。和 AI Engineer 的区别：Engineer 造工具，Adoption 让工具被用起来。6 个月准备路径：企业 AI 现状调研 → 工具选型 → pilot 设计 → 培训交付 → 变革管理 → 规模化。 |
| **Learn** | `/learn/ai-adoption` |

### Y9 — 副业：用技能做独立开发者

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | 副业不是"兼职打工"，是"用技能建立独立收入流"。三种模式：(1) SaaS——做一个月付工具（Pieter Levels 的 Nomad List 月入 $50K+）；(2) Consulting——技术顾问（$200-500/h）；(3) Content——技术博客 + 课程 + 付费社群。用 AI 降低每种模式的启动成本。2026 年独立开发者真实案例。 |
| **Wiki** | `remote-work` |
| **Free Resources** | GitHub Student Pack |

### Y10 — 持续学习计划：5 年技术规划

| 字段 | 内容 |
|------|------|
| **类型** | Video |
| **描述** | 训练营结束不是学习的终点。用 OKR 框架做 5 年规划：Year 1 站稳 Junior；Year 2 进阶 Mid Level；Year 3 成为 Senior；Year 4 选定方向（IC 或 Management）；Year 5 达到 Staff / EM。每年的 3 个关键 Key Results、需要的学习资源、可能的职业风险。最后交作业：写一份自己的 5 年规划。 |
| **Roadmap** | `frontend`, `backend-developer-roadmap`, `ai-engineer` (按学员方向) |
| **Handbook** | `career-growth` |
| **Assignment** | 提交个人 5 年职业规划 |

---

## 资源绑定汇总（20 节新增课）

### 新增的 Learn 方向绑定（之前没用）

| Learn 方向 | 绑定 Lesson |
|-----------|-----------|
| `/learn/vibe-coding/hub` | X2, X5 |
| `/learn/prompt-master` | X3 |
| `/learn/ai-engineer/hub` | Y6 |
| `/learn/ai-pm` | Y7 |
| `/learn/ai-adoption` | X9, Y8 |

### 新增的 Wiki 绑定（之前没用）

| Wiki | 绑定 Lesson |
|------|-----------|
| `cursor` | X5, X7, X9, X10 |
| `claude-code-guide` | X6, X7, X10 |
| `copilot` | X9, X10 |
| `windsurf` | X10 |
| `antigravity` | X10 |
| `mcp-guide` | X6 |
| `remote-work` | X2, Y3, Y9 |

### 新增的 Roadmap 绑定（之前没用）

| Roadmap | 绑定 Lesson |
|---------|-----------|
| `machine-learning-roadmap-1` | Y6 |
| `rag-retrieval-augmented-generation-roadmap` | Y6 |

### Free Resources 绑定

| Free Resource | 绑定 Lesson |
|--------------|-----------|
| Harvard CS50 | X2 |
| Google AI Essentials | X2 |
| Cursor Free Tier | X10 |
| Copilot 学生版 | X10 |
| GitHub Student Pack | Y9 |

---

## 第三期最终规模

| 分类 | 原方案 | 加 20 节 D3 后 |
|------|-------|---------------|
| **总 Lesson 数** | 128 | **148** |
| D1 认知规划 | 18 (14%) | 18 (12%) |
| D2 求职面试 | 95 (74%) | 95 (64%) |
| **D3 成长提升** | **15 (12%)** | **35 (24%)** |
| 结营 | 2 | 2 |

D3 占比从 12% → **24%**，真正做到"三维度均衡"。

---

## 课程结构总览

```
IT Career Coaching Bootcamp 第三期 (148 节)
│
├─ Part 1 行业认知与入营 (9)
├─ Part 2 职业规划 (9)
├─ Part 3 简历与个人品牌 (18)
├─ Part 4 LinkedIn 与社交网络 (9)
├─ Part 5 求职策略与投递 (9)
├─ Part 6 面试基础 (8)
├─ Part 7 行为面试 (10)
├─ Part 8 技术面试 (20)
├─ Part 9 薪资谈判与 Offer 决策 (8)
├─ Part 10 职业晋升基础 (12)
├─ Part 10.5 🆕 Module X — AI 时代持续学习 (10)  ← 新增
├─ Part 10.6 🆕 Module Y — 职业方向深度发展 (10) ← 新增
├─ Part 11 大厂求职 (14)
└─ Part 12 结营 (2)
```

---

## 执行步骤

1. 把 20 节新增课加到 curriculum.html（Part 10.5 / 10.6）
2. 把 20 节新增课加到 IMPROVEMENT_PLAN.md 主文档
3. 为 Module X / Y 的 20 节新课生成 learningMaterial HTML
4. 生成 outline.json 时包含这 20 节新课
