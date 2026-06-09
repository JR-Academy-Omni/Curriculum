# AI Engineer 简历 + 面试讲座 PRD

> 内部学员课 · 90min · 学习导向 · 强行认可派 → 危机感 hook

## 场景

- 听众：已报名 AI Engineer Bootcamp 的内部学员
- 时长：90 min（开场 hook 25 + skills 30 + 经验描述 25 + 面试 + 收尾 10）
- 目的：让学员当晚就能开始改简历 + 准备 1-2 周后的投递面试

## 载体

- 新建 React Vite deck：`curriculum/ai-engineer-resume-interview/`
- 复用 `ai-engineer-bootcamp` 的 SlideEngine + theme + ui
- 浏览器 `npm run dev` 全屏放映（**不是 pptx**，符合二进制文件铁律）

## Hook 路径（用户拍板）

开场投票题 → **强行认可派** → 危机感 → 重塑简历是凭证

> 投票题："Claude/LLM 是否比所有人类 Coding 能力强？" A 认可 / B 不认可
> 揭示："认可派对了一半 — LLM 比 P50 工程师强，比 P95 弱。企业不缺 P50，缺 P95 + 会驾驭 LLM 的人。这就是 AI Engineer。"
> 落点："你的简历凭什么让企业相信你是那 P95？"

## 26 张 slide 结构

### Module 1 · Hook（S01-S05, 15 min）

| # | 文件 | 内容 |
|---|------|------|
| S01 | Cover | 标题 + 讲师 + 议程 |
| S02 | PollQuestion | A/B 投票卡 + 倒计时 30s |
| S03 | PollReveal | LLM vs 人类 benchmark 数据（SWE-bench / HumanEval） |
| S04 | WhyHireAiEngineer | 企业招 AI Engineer 的 4 个理由 |
| S05 | RoleDistinction | AI Engineer ≠ ML Engineer ≠ Prompt Engineer |

### Module 2 · Skills 部分（S06-S13, 30 min）⭐ 重点

> **核心**：跟讲课流程一致的 AI Engineer 技术分层（10 个 layer），每层都要具体技术栈名字
> **红线**：禁止写 "AI coding assistance" 这种泛泛描述，必须具体到工具名 + 版本 + 用途

| # | 文件 | 内容 |
|---|------|------|
| S06 | SkillsOverview | 10 layer 全景图（对应 P1-P10） |
| S07 | LayerFoundation | P1 Foundation Layer：GPT-4o / Claude 4 / Gemini 2.0 / Llama 3.3 / Qwen / DeepSeek / Bedrock |
| S08 | LayerContext | P2 Context Engineering：CoT / ReAct / Tree-of-Thought / Structured Output / DSPy |
| S09 | LayerRAG | P3 RAG：Pinecone / Qdrant / pgvector / BGE / Cohere Rerank / LangChain / LlamaIndex / RAGAS |
| S10 | LayerMCPAgent | P4-P6 MCP / Agent / Multi-Agent：MCP Server / LangGraph / OpenAI Agent SDK / Claude Agent SDK |
| S11 | LayerMemoryHarness | P7-P8 Memory / Harness：Mem0 / Claude Code 原理 / Hook System / Subagents |
| S12 | LayerModelEval | P9-P10 Model / Eval：LoRA / DPO / vLLM / LangSmith / Helicone / Promptfoo |
| S13 | SkillsBadVsGood | 简历 skills 写法 bad vs good 对照表 |

### Module 3 · 经验描述部分（S14-S20, 25 min）⭐ 重点

> **核心**：每个 bullet 必须有 量化指标 + LLM 特有维度（cost / latency / accuracy / hallucination rate / 召回率）
> **红线**：不承诺金钱结果 / 禁用"副业"一词 / 只承诺过程作品技能

| # | 文件 | 内容 |
|---|------|------|
| S14 | ExperienceFramework | STAR + 量化 + LLM 特有维度公式 |
| S15 | BadExamples | 烂经验 3 个 case（堆 buzzword / 无指标 / 模板化） |
| S16 | RewriteCase1 | 改写 case 1: RAG 客服系统 before/after |
| S17 | RewriteCase2 | 改写 case 2: Agent 工作流自动化 before/after |
| S18 | RewriteCase3 | 改写 case 3: AI Coding 工作流改造 before/after |
| S19 | MetricsCatalog | LLM 项目量化指标全清单（cost / latency p50/p95 / accuracy / token / 召回率） |
| S20 | NoExperiencePath | 没有正式 AI 工作经验怎么办（开源贡献 / 内部 POC / Bootcamp 项目） |

### Module 4 · 面试模块（S21-S24, 15 min）

| # | 文件 | 内容 |
|---|------|------|
| S21 | InterviewPipeline | 5 环节：Resume screen / LLM 基础 / System Design / Coding / Behavioral |
| S22 | TopQuestions | 15 道高频题 + 答题框架 |
| S23 | SystemDesignCase | System design 例题：客服 AI agent 1M query/day |
| S24 | BehavioralReverse | Behavioral 高频 + 5 个反向问问题 |

### Module 5 · Bootcamp 模块 + 收尾（S25-S26, 5 min）

| # | 文件 | 内容 |
|---|------|------|
| S25 | BootcampOutline | 完整 Bootcamp 简历面试模块 12 节大纲 |
| S26 | NextSteps | 7 天行动清单 + Q&A |

## 完整 Bootcamp 模块大纲（12 节）

后续延展的完整 career-prep 模块（不是今晚要做完）：

1. AI Engineer 角色定位（**= 今晚讲座**）
2. 简历 Skills + 经验描述 workshop（**= 今晚讲座实战部分**）
3. 项目实战 1 — Production-grade RAG 文档问答
4. 项目实战 2 — Multi-Agent 工作流自动化
5. 项目实战 3 — Fine-tune + Eval pipeline
6. LinkedIn 优化 + 推荐策略
7. 投递策略 + ATS 优化
8. 一面 — LLM 基础题库刷题
9. 二面 — System Design with LLM
10. 三面 — Coding + Behavioral
11. Mock interview（peer review）
12. Offer 评估与谈判（方法论，不承诺金额）

## 执行计划（2 小时内并行）

| Agent | 任务 | 输出 |
|-------|------|------|
| A | 脚手架（cp ai-engineer-bootcamp 模板，清空 slides） | package.json / vite.config / theme / SlideEngine / 空 App.tsx |
| B | Module 1 Hook | S01-S05 (5 张) |
| C | Module 2 Skills | S06-S13 (8 张) ⭐ |
| D | Module 3 经验描述 | S14-S20 (7 张) ⭐ |
| E | Module 4-5 面试+收尾 | S21-S26 (6 张) |

整合：手动拼 App.tsx import 顺序 → `npm install && npm run dev` → 本地预览。

## 红线（写所有 slide 必须遵守）

- ❌ 不承诺金钱结果（无收入/Offer 金额/订单数承诺）
- ❌ 不使用"副业"一词
- ❌ Skills 部分禁止 "AI coding assistance" 这种泛泛描述，必须具体工具名（Cursor / Claude Code / Aider / Cline / Windsurf / Continue）
- ❌ 不写"在当今 AI 时代 / 让我们一起 / 准备好了吗"等 AI 味套话
- ❌ 不生成 pptx / docx
- ✅ 每个量化指标必须有数据来源或合理范围（不编具体数字，给区间）
- ✅ 改写 case 用真实项目场景（RAG / Agent / AI Coding），不能编虚构产品名
