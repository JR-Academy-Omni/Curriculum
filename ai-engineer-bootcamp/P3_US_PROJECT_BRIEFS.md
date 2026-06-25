# AI Engineer Bootcamp · 美国版项目作品集简报 P3_US_PROJECT_BRIEFS.md

> 课程：AI Engineer Bootcamp（美区独立 cohort · 中文授课）· 大纲见 [`public/outline.md`](./public/outline.md)
> 配套：定位 [`POSITIONING.us.md`](./POSITIONING.us.md) · JD 映射 [`JD_SKILL_MAP.us.md`](./JD_SKILL_MAP.us.md) · 签证 [`VISA_JOB_SEARCH_GUIDE.us.md`](./VISA_JOB_SEARCH_GUIDE.us.md)
> 用途：把课程**已有的 ISA 主线 + 7 个 Project** 包装成「美国 JD 读得懂 + 能写进简历 + 面试讲得清」的项目简报。
> Created 2026-06-25 · 维护人待定

---

## 🚨 红线（写简历/作品集前先记住）

1. **简历数字不许编**：本文档给的是 bullet **模板 + 占位符 `{你的真实数字}`**。学员填自己项目跑出来的真实指标（Faithfulness、延迟、成本、token 量），**绝不允许套用课程示例里的数字当自己的成绩**。编造指标 = 面试 deep dive 当场穿帮 + 诚信风险。
2. **不碰真实敏感数据**：行业项目用**合成数据或公开数据集**。不碰真实客户 PII、医疗病历、金融账户等敏感数据（既是合规，也避免面试时讲不清数据来源）。
3. **不承诺结果**：作品集是「求职准备度 + JD 对齐证据」，不是「保 offer」。对外口径见 [`POSITIONING.us.md`](./POSITIONING.us.md) §红线。

---

## 1. 主线：ISA = Industry Solution Assignment（美国版怎么定方向）

课程的 ISA 是**贯穿 12 周的主线项目**：学员从**自己的行业/兴趣**挑一个真问题，每个 Phase 给它加一个新能力，最后产出一个可部署、可 demo、可写简历的完整 AI 系统。

> ⚠️ 数据一致性提示：大纲里 ISA 出现两个名字——主线定义是 **"Industry Solution Assignment"**（capstone proposal），但部分 lesson 用了示例实现 **"Intelligent Study Assistant"**。美区对外统一用 **"Industry Solution Assignment"** 框架（学员自选行业），"Study Assistant" 只当课堂示例。（建议有空在 `outline.json` 统一口径后重跑 lineage，这里先不动大纲。）

**美区选题建议**（让作品集对得上美国 JD 和 STEM 相关性叙事）：

| 方向 | 例子 | 为什么适合美区 |
|------|------|--------------|
| **Enterprise / SaaS** | 企业知识库 RAG 助手 + eval dashboard | 美国 AI Engineer JD 最主流场景 |
| **Developer Tools** | AI code review / workflow harness | 对齐 P8 Harness 强项，硅谷友好 |
| **Domain GenAI（合成/公开数据）** | legal / healthcare / fintech 文档问答 | 显示领域落地能力，但**只用合成或公开数据** |
| **Customer Support** | Multi-agent 客服工作流 | 对齐 multi-agent JD，业务价值好讲 |

→ 选题时对照 [`VISA_JOB_SEARCH_GUIDE.us.md`](./VISA_JOB_SEARCH_GUIDE.us.md) §3：项目与 STEM 学位的直接相关性，同时是 OPT/STEM 合规叙事的素材。

---

## 2. 7 个 Project 简报（每个 = 简历一段 + 面试一题）

每份简报结构：**课程出处 → 对齐的 JD（链 JD_SKILL_MAP）→ 交付物 → 简历 bullet 模板 → 面试 deep dive 三件套（架构/取舍/失败模式）→ 签证相关性**。

---

### Project 1 · Context Engineering 方案（3 版本迭代）

- **课程出处**：P2「ISA Context Engineering 方案（3 版本迭代）」V1 纯 Prompt → V2 +RAG → V3 完整 Context Engineering
- **对齐 JD**：JD_SKILL_MAP #3 Prompt Engineering、#4 RAG（入门）
- **交付物**：GitHub repo（3 版本可复现）+ V1→V2→V3 的 Faithfulness/Relevancy 对比表
- **简历 bullet 模板**：
  > Built a layered context-engineering pipeline (system prompt → RAG → dynamic context budgeting) for a {你的行业} assistant, improving answer faithfulness from `{你的V1分}` to `{你的V3分}` (RAGAS) across `{N}` test queries.
- **面试 deep dive 三件套**：
  - 架构：四层 context（指令/检索/状态/动态预算）怎么分层
  - 取舍：context window 不是越大越好（>20K 注意力下降）→ 为什么做动态预算
  - 失败模式：检索噪声拉低 faithfulness 时怎么定位
- **签证相关性**：展示对自选行业问题的工程化能力，支撑 STEM 岗位相关性

---

### Project 2 · Production RAG Application（部署到 AWS）

- **课程出处**：P3「Production RAG Application」+「RAG QA Application with LangChain」+ Quest「把 ISA RAG 部署到 AWS Bedrock」
- **对齐 JD**：JD_SKILL_MAP #4 RAG、#5 Vector DB、#6 混合检索、#8 LangChain、#11 可观测、#12 AWS、#17 成本
- **交付物**：可公网访问的 RAG 应用 + 架构图 + LangSmith trace 截图 + 成本估算
- **简历 bullet 模板**：
  > Deployed a production RAG QA system on AWS (Bedrock + Lambda + OpenSearch) with hybrid retrieval and reranking, serving `{N}` docs at `{你的延迟}` p50 latency and `${你的成本}`/1k queries, instrumented with LangSmith for trace-level observability.
- **面试 deep dive 三件套**：
  - 架构：ingestion → chunking → embedding → 向量检索 → rerank → generation 全链路
  - 取舍：chunk size / 检索 top-k / rerank 开不开 对质量 vs 成本/延迟的影响
  - 失败模式：hallucination / 检索不到 / 延迟尖刺 的排查路径
- **签证相关性**：「部署过生产 LLM 系统」是 JD 反复要的硬信号（JD_SKILL_MAP §1）

---

### Project 3 · MCP Server（3 Tools）

- **课程出处**：P4「ISA MCP Server (3 Tools)」+ Quest「发布你的第一个 MCP Server」
- **对齐 JD**：JD_SKILL_MAP #19 Function Calling/Tool Use/MCP（**课程领先项**）
- **交付物**：开源 MCP server repo + 发布记录 + 3 个可调用 tool 的 demo
- **简历 bullet 模板**：
  > Built and published an MCP (Model Context Protocol) server exposing `{3}` tools ({你的工具}), enabling LLM clients to call {你的行业} APIs with structured tool schemas and error handling.
- **面试 deep dive 三件套**：
  - 架构：MCP 协议、tool schema 定义、client-server 交互
  - 取舍：什么逻辑放 tool vs 放 prompt；tool 粒度怎么定
  - 失败模式：tool 调用失败/参数错误的 graceful handling
- **签证相关性 + 差异化**：MCP 市场刚起、会的人少，简历亮点强，面试谈资稀缺

---

### Project 4 · Agentic RAG + Agent SDK 选型

- **课程出处**：P5「ISA Agent SDK 选型文档」+「ISA Agent 升级（Naive→Agentic RAG）+ LangSmith Trace」
- **对齐 JD**：JD_SKILL_MAP #9 Agent、#8 编排框架、#11 可观测
- **交付物**：Agent SDK 选型文档（OpenAI/Claude/Google ADK 对比）+ Naive vs Agentic 质量对比 + Agentic trace 截图
- **简历 bullet 模板**：
  > Upgraded a RAG assistant to an agentic architecture (tool-routing ReAct agent), evaluated across OpenAI / Claude / Google ADK SDKs, improving complex-query faithfulness from `{你的Naive分}` to `{你的Agentic分}` while documenting the latency trade-off.
- **面试 deep dive 三件套**：
  - 架构：ReAct 决策循环、工具路由 system prompt
  - 取舍：Agentic 比 Naive 慢 2-3 倍 → 什么场景值得；为什么选这家 SDK
  - 失败模式：Agent 死循环 / 工具选错 的处理
- **签证相关性**：agentic 赛道暴涨（JD_SKILL_MAP §1），强相关信号

---

### Project 5 · Multi-Agent Orchestration（LangGraph）

- **课程出处**：P6「ISA 多 Agent 系统（LangGraph 编排）」+ Quest + A2A Protocol
- **对齐 JD**：JD_SKILL_MAP #9 Multi-Agent、#8 LangGraph、#11 Agent Ops
- **交付物**：LangGraph 多 agent repo + 编排图 + multi-agent trace 截图
- **简历 bullet 模板**：
  > Designed a multi-agent workflow with LangGraph ({你的agent数} specialized agents: {你的角色}), orchestrating {你的任务} with state management and inter-agent routing, monitored via LangSmith Agent Ops.
- **面试 deep dive 三件套**：
  - 架构：agent 分工、state 传递、路由逻辑
  - 取舍：单 agent vs multi-agent 的复杂度/成本权衡
  - 失败模式：agent 间状态不一致 / 路由死锁 的排查
- **签证相关性**：multi-agent 是高频上升技能

---

### Project 6 · Eval Pipeline + 可观测（RAGAS / Langfuse）

- **课程出处**：P3「ISA Eval Pipeline + 基线/优化分数」+ RAGAS + Langfuse + LangSmith
- **对齐 JD**：JD_SKILL_MAP #10 Eval、#11 可观测（2026 核心信号）
- **交付物**：自动化 eval pipeline repo + 基线 vs 优化对比报告 + RAGAS 四指标 dashboard
- **简历 bullet 模板**：
  > Built an automated evaluation pipeline (RAGAS: faithfulness, answer relevancy, context precision/recall) with Langfuse observability, raising the optimized score from baseline `{你的基线}` to `{你的优化分}` and catching `{N}` regression cases pre-deploy.
- **面试 deep dive 三件套**：
  - 架构：eval 数据集构建、RAGAS 四指标、CI 里怎么跑
  - 取舍：LLM-as-a-judge 的成本 vs 可靠性
  - 失败模式：指标好但体验差（指标盲区）怎么补
- **签证相关性**：「能跑生产级 eval」是 2026 把人和 demo 党区分开的关键信号（JD_SKILL_MAP §1）

---

### Project 7 · Fine-Tuning + Model Routing（QLoRA + 成本）

- **课程出处**：P9「ISA Embedding 微调 + MTEB」+「QLoRA 微调」+「ISA Model Routing + 成本报告」
- **对齐 JD**：JD_SKILL_MAP #7 Embedding、#14 serving、#15 Fine-Tuning、#17 成本
- **交付物**：QLoRA 微调 notebook + MTEB 评测 + model routing 成本报告
- **简历 bullet 模板**：
  > Fine-tuned an open-weight model with QLoRA (PEFT/Unsloth) for {你的领域}, and implemented model routing (open-weight vs API) cutting inference cost by `{你的%}` while holding quality at `{你的指标}`.
- **面试 deep dive 三件套**：
  - 架构：QLoRA 原理、数据准备、MTEB 评测
  - 取舍：微调 vs RAG vs prompt 什么时候选哪个；自托管 vs API 成本
  - 失败模式：过拟合 / 灾难性遗忘 的识别
- **签证相关性**：覆盖偏 ML Engineer 的信号，拓宽可投 title（JD_SKILL_MAP §1）

---

## 3. 毕业交付物包（每个学员的「求职弹药库」）

不是「结课证书」，而是一套能直接投简历/面试的产物（对应 POSITIONING §3 证据层）：

1. **GitHub repo**（ISA 主线 + 7 project，README 写清架构）
2. **Demo video**（2-3 分钟，展示 RAG/Agent/Eval 能力）
3. **Architecture doc**（系统设计图 + 技术选型理由 + trade-off）
4. **Resume bullets**（本文档模板 × 学员真实数字，3 段式：tech stack + metrics + business value）
5. **Interview script**（每个 project 的 deep dive 三件套答法）

> 对应课程已有的简历 workshop（"把 12 周 ISA 项目重写成 技术选型+指标+业务价值 三段式"）和 JD tracking board（含 sponsor 列，见 VISA guide §7）。

---

## 4. 下一步

- [ ] （可选）统一 `outline.json` 里 ISA 命名口径（Industry Solution Assignment），重跑 lineage
- [ ] 把本文档 7 个 bullet 模板做成学员可填的 worksheet（P3 简历 workshop 用）
- [ ] 收集 1-2 个真实学员产出（脱敏 repo/demo）做证据层素材 → 反哺销售页（POSITIONING §3 第 1 项，影响最大）
- [ ] 接着做 `PROMOTION_PLAN.us.md`：渠道（一亩三分地/小红书北美/Reddit，见 PERSONAS §渠道）+ 钩子（POSITIONING §4）+ 用本文档项目做「每个项目都能变简历 bullet」选题
