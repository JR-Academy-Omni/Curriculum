<!-- generated-from: outline.json · do not edit by hand -->

# AI Engineer Bootcamp

> 🤖 本文件由 `lineage/build_lineage.py` 从同目录 `outline.json` 自动生成 —— **勿手改**。要改大纲改 `outline.json`，再重跑 `python3 lineage/build_lineage.py`。
> （`outline.json` 是生产管线吃的机器权威；这份 `.md` 是给人读、给谱系当真相文档的统一格式。）

第七期理论线在 W12 结束，实践线延长至 W13：前 12 周每周一场理论 Live 和一场实践 Live，W13 增加 180 分钟 Production Readiness Review & Demo Day。CareKind AI 贯穿 AI Coding、RAG、Agents、Memory、Harness、Model Routing、Evals 与 Governance。

**级别** 中级进阶 · **类型** training · **时长** 理论 12 周 + 实践 13 周（25 场正式直播：12 场理论 + 13 场实践；共 45 小时） · **总课时** 309 · **步骤** 1022 · **直播** 25 · **互动 Lab** 72 · **预计学时** 45

**适合**：有编程基础的开发者、数据科学家、ML 工程师、DevOps 工程师

**目标**：独立设计、实现、评估并治理一个 production-ready Applied AI 产品；能在面试中解释 RAG、Agents、MCP、Model Routing、Fine-Tuning 决策和 AI Governance 的工程取舍。

---

## PHASE 1: Foundation Layer

_GenAI 全景 · LLM API · Transformer Architecture · ML/DL 基础 · AI 模型选型_

- **Pre-work：必要知识储备** — 50 分钟
- **Lab: Python Hello World** — 30 分钟
- **Lab: Python 变量与类型** — 30 分钟
- **Lab: Python 函数** — 30 分钟
- **Lab: Python API 基础** — 30 分钟
- **Lab: Git 首次提交** — 30 分钟
- **Lab: Git 分支基础** — 30 分钟
- **Lab: EC2 基础** — 30 分钟
- **Lab: IAM 权限管理** — 30 分钟
- **Lab: Secrets Manager** — 30 分钟
- **Preparation：开发环境配置** — 25 分钟
- **Lab: Python OpenAI API** — 30 分钟
- **Lab: Python JSON 处理** — 30 分钟
- **Lab: S3 存储** — 30 分钟
- **GenAI Foundations & AI Engineer Landscape** — 90 分钟 · 🔴直播
- **自学：AI Coding 工作流** — 20 分钟
- **自学：AI Rules 配置实战** — 20 分钟
- **自学：Claude Code 自定义命令** — 20 分钟
- **Vibe Coding: AI-Assisted Development** — 120 分钟
- **Quest: 装好你的 AI Engineer 工作台** — 30 分钟
- **Lab: 第一次 LLM 体验** — 30 分钟
- **Lab: AI 基础概念** — 30 分钟
- **第七期学习与项目导览** — 30 分钟
- **Structured Data vs Unstructured Data** — 15 分钟
- **Introduction to Machine Learning** — 15 分钟
- **Supervised, Unsupervised & Reinforcement Learning** — 15 分钟
- **Introduction to Deep Learning** — 20 分钟
- **Lab: AI/ML 基础** — 30 分钟
- **AI 模型对比参考** — 5 分钟
- **自学：AI 模型对比参考** — 20 分钟
- **Tokens, Context Windows & Cache Efficiency** — 90 分钟 · 🔴直播
- **自学：AI 产品与体验** — 20 分钟
- **LLM API 入门** — 5 分钟
- **Lab: LLM API 实操** — 30 分钟
- **自学：LLM API 入门** — 20 分钟
- **Transformer Architecture: An Engineering View** — 30 分钟
- **自学：LLM API 入门** — 20 分钟
- **Tokenization & Input Embeddings** — 15 分钟
- **Lab: LLM 核心概念** — 30 分钟
- **Lab: Transformer & Attention** — 30 分钟
- **Lab: 模型参数调优** — 30 分钟
- **第七期项目路线与交付标准** — 16 分钟
- **独立项目 / P3：选题与 Proposal 指南** — 45 分钟

## PHASE 2: Context Engineering

_Prompt Engineering · Context 系统设计 · 结构化输出 · Vibe Coding · GPT Store_

- **AI 原型模式：Prompt、RAG、Tools/Agent 与 Fine-Tuning** — 60 分钟
- **自学：Prompt Engineering 系统方法** — 20 分钟
- **Lab: Zero-shot 零示例** — 30 分钟
- **Lab: Few-shot 示例学习** — 30 分钟
- **Context Engineering: Selection, Assembly & Lifecycle** — 90 分钟 · 🔴直播
- **Quest: CareKind Context Architecture Blueprint** — 45 分钟
- **自学：Context Engineering 基础** — 20 分钟
- **Lab: Context Engineering — 信息筛选、Token Budget 与上下文组装** — 30 分钟
- **Lab: 上下文管理** — 30 分钟
- **Lab: Reasoning Prompt 对照实验（CoT）** — 30 分钟
- **Lab: System Prompt 设计** — 30 分钟
- **自学：System Prompt 设计实战** — 20 分钟
- **自学：System Prompt 案例库** — 20 分钟
- **Lab: 输出格式控制** — 30 分钟
- **Lab: JSON Schema 结构化输出** — 30 分钟
- **Lab: 代码生成** — 30 分钟
- **Building Your First GPT in GPT Store** — 120 分钟
- **Vision & Multimodal AI** — 30 分钟
- **自学：多模态与工具链** — 20 分钟
- **自学：多模态 Prompt 设计** — 20 分钟
- **Context Engineering Playbook** — 33 分钟
- **Lab: Prompt 评估** — 30 分钟
- **Lab: Self-Consistency 一致性** — 30 分钟
- **Vibe Coding 工具对比** — 20 分钟
- **GenAI Toolbox** — 5 分钟
- **自学：LLM 工程化与网关** — 20 分钟
- **自学：工具与模型最新动态** — 20 分钟

## PHASE 3: RAG

_Embedding · 向量数据库 · RAG Pipeline · GraphRAG · LangChain · RAG Evaluation · AWS Bedrock_

- **RAG 学习路线：原理、评估与实现** — 5 分钟
- **自学：RAG 系统入门** — 20 分钟
- **自学：Techniques · RAG** — 20 分钟
- **Retrieval Embeddings：向量表示、相似度与检索验证** — 30 分钟
- **Lab: Grounded Answer Contract** — 30 分钟
- **Lab: Versioned RAG Ingestion Pipeline** — 30 分钟
- **Embedding Model Contracts & Index Migration** — 90 分钟
- **RAG Fundamentals: Ingestion, Retrieval & Grounding** — 90 分钟 · 🔴直播
- **Lab: Permission-Aware RAG Query Pipeline** — 30 分钟
- **自学：数据与知识库协作** — 20 分钟
- **RAG Component Selection Guide** — 5 分钟
- **自学：RAG 系统入门** — 20 分钟
- **AI Resource Hub** — 3 分钟
- **Building Simple User Interfaces in Python** — 30 分钟
- **Document Ingestion: PDF Parsing, OCR & Lineage** — 90 分钟
- **Lab: LLM Cost Engineering & Budget Guard** — 30 分钟
- **LLM Rate Limits：Backpressure、Retry Budget 与 Idempotency** — 30 分钟
- **自学：部署与成本优化** — 20 分钟
- **自学：性能与成本优化** — 20 分钟
- **P3 职业孵化器 Proposal** — 120 分钟
- **LLM Unit Economics：Cost per Successful Task** — 12 分钟
- **自学：部署与成本优化** — 20 分钟
- **自学：性能与成本优化** — 20 分钟
- **CareKind RAG Testing with RAGAS（旧提案候选）** — 120 分钟
- **RAG Quality, Testing & Controlled Improvement** — 90 分钟 · 🔴直播
- **Legacy Duplicate：RAG Testing（已由 C7T05 替代）** — 90 分钟
- **Build the Evaluation Pipeline First** — 120 分钟 · 🔴直播
- **RAGAS Framework：Metric Contract 与 Human Calibration** — 60 分钟
- **Skills Engineering：可复用、可测试的 AI Coding Workflow** — 60 分钟
- **自学：Skills 范式：从 Agent 到技能库** — 20 分钟
- **自学：Skill 开发入门** — 20 分钟
- **自学：开发你的第一个 Skill** — 20 分钟
- **Lab: LLM 工具链** — 30 分钟
- **Lab: Lambda Serverless** — 30 分钟
- **Lab: Serverless API** — 30 分钟
- **End-to-End RAG Toolbox** — 5 分钟
- **Introduction to LangChain** — 20 分钟
- **自学：LangChain 框架** — 20 分钟
- **Lab: Typed Prompt Pipeline、Validation 与 Failure Recovery** — 30 分钟
- **LangChain Expression Language** — 60 分钟
- **自学：LangChain 框架** — 20 分钟
- **Lab: QA 系统设计** — 30 分钟
- **Tracing Fundamentals：Run Tree、Correlation 与 Data Boundaries** — 60 分钟
- **自学：Evaluation & Quality Monitoring** — 20 分钟
- **自学：可观测性与 Guardrails** — 20 分钟
- **Lab: MLOps/LLMOps** — 30 分钟
- **GraphRAG 入门** — 5 分钟
- **Graph Query Decomposition：关系问题与 Evidence Path** — 20 分钟
- **LLMs Overview** — 12 分钟
- **GraphRAG + RAG Evaluation（进阶候选）** — 90 分钟
- **Lab: OpenSearch Hybrid Retrieval 与 Filtered k-NN** — 30 分钟
- **CareKind RAG Eval Harness（后续候选）** — 120 分钟
- **Quest: 给你的 RAG 跑一次完整 RAGAS 评估** — 45 分钟
- **自学：Evaluation & Quality Monitoring** — 20 分钟
- **自学：LLM-as-a-Judge 评测** — 20 分钟
- **Lab: LLM 评估** — 30 分钟
- **RAG Failure Diagnosis Matrix：从指标到可验证修复** — 120 分钟
- **自学：Evaluation & Quality Monitoring** — 20 分钟
- **Lab: Prompt 评估** — 30 分钟
- **Vibe Coding for RAG Optimization** — 120 分钟
- **自学：Evaluation & Quality Monitoring** — 20 分钟
- **Langfuse：Trace、Score 与 Dataset Lineage** — 60 分钟
- **自学：Evaluation & Quality Monitoring** — 20 分钟
- **自学：可观测性与 Guardrails** — 20 分钟
- **RAG Evaluation Toolbox** — 5 分钟
- **GraphRAG Decision Lab：One Worked Evidence Graph** — 8 分钟
- **自学：Techniques · GraphPrompts** — 20 分钟
- **RAG QA Application with LangChain** — 120 分钟
- **自学：LangChain 框架** — 20 分钟
- **AWS RAG Architecture：Optional Production Mapping** — 22 分钟
- **自学：生产环境部署** — 20 分钟
- **Lab: Bedrock RAG 知识库** — 30 分钟
- **Lab: AWS Bedrock RAG Deployment** — 60 分钟

## PHASE 4: Capability Layer

_Function Calling · Tool Use · MCP Server · Browser Use · Computer Use · Code Interpreter_

- **Function Calling：Provider Adapters 与 Safe Tool Execution** — 30 分钟
- **Lab: Safe Tool Selection、Validation 与 Side-Effect Safety** — 30 分钟
- **Introducing MCP** — 180 分钟
- **MCP Engineering Checklist：Contract、Transport 与 Trust Boundary** — 20 分钟
- **自学：MCP 集成** — 20 分钟
- **Tool Calling, MCP & CLI Integration** — 90 分钟 · 🔴直播
- **Synthetic Test Data for RAG：Coverage、Leakage 与 Human Review** — 60 分钟
- **Lab: Build a Typed MCP Server with FastMCP** — 30 分钟
- **Quest: 发布你的第一个 MCP Server** — 45 分钟
- **MCP 源码解读** — 60 分钟
- **自学：MCP 开发最佳实践** — 20 分钟
- **自学：MCP 开发最佳实践** — 20 分钟
- **自学：MCP 集成** — 20 分钟
- **自学：MCP 开发最佳实践** — 20 分钟
- **自学：MCP 发布指南** — 20 分钟
- **MCP Packaging & Release Checklist** — 5 分钟
- **自学：MCP 发布指南** — 20 分钟
- **Production Agents: Computer Use + Agent Ops** — 120 分钟
- **Computer Use Architecture：Perception、Action 与 Approval Boundary** — 5 分钟
- **自学：AI Agent 开发基础** — 20 分钟
- **Lab: Controlled Computer Use** — 45 分钟

## PHASE 5: Agent Core

_Agent 基础 · ReAct Framework · Agent SDK 对比 · 构建第一个 Agent · Agentic RAG_

- **Legacy Placeholder：W8 Theory（已由 L122 替代）** — 90 分钟
- **Legacy Placeholder：W8 Practice（已由 L104 替代）** — 120 分钟
- **Agents 基础：执行循环、状态与边界** — 30 分钟
- **Agents 基础 + The ReAct Framework** — 90 分钟 · 🔴直播
- **Build and Prove Policy RAG from Scratch** — 120 分钟 · 🔴直播
- **LangChain Foundations & RAG Composition** — 30 分钟
- **Lab: RAG with LangChain + Chroma** — 45 分钟
- **Lab: AWS Bedrock RAG — 模型接入、知识库与评估** — 30 分钟
- **Lab: ReAct Loop with Typed Actions and Stop Conditions** — 30 分钟
- **Lab: Agent Control Patterns—Router、Planner、Reviewer 与 Escalation** — 30 分钟
- **Agent SDK Selection: Contracts & Trade-offs** — 90 分钟
- **Agent SDK 对比参考** — 5 分钟
- **自学：Agent 框架速览** — 20 分钟
- **自学：Agent 框架横向对比** — 20 分钟
- **Lab: Compare One Alternative Agent SDK** — 45 分钟
- **Agent Planning & Reflection Patterns** — 15 分钟
- **自学：Techniques · Reflexion** — 20 分钟
- **Deep Agents：Planning、Context Isolation 与 Delegation Boundaries** — 20 分钟
- **Quest: 跑通你的第一个工具调用 Agent** — 45 分钟
- **自学：AI Agent 开发基础** — 20 分钟
- **自学：Agents · Introduction** — 20 分钟
- **自学：Agents · Components** — 20 分钟
- **自学：生产环境部署** — 20 分钟
- **Operating RAG in Production：Freshness、Re-index 与 Recovery** — 5 分钟
- **自学：生产环境部署** — 20 分钟
- **自学：部署与成本优化** — 20 分钟

## PHASE 6: Multi-Agent & Orchestration

_Multi-Agent 架构 · LangGraph · A2A Protocol · Agent Ops · Claude Code 原理_

- **Multi-Agent Architectures** — 90 分钟 · 🔴直播
- **Extract the Data Layer, then Connect MCP & CLI** — 120 分钟 · 🔴直播
- **MCP 进阶对照：SaaS 工具适配** — 120 分钟
- **MCP 进阶对照：数据库访问边界** — 120 分钟
- **Lab: Multi-Agent Orchestration with Measured Coordination Cost** — 30 分钟
- **LangGraph：State Graph、Interrupt 与 Durable Execution** — 60 分钟
- **Quest: 用 LangGraph 编排你的 ISA 多 Agent 系统** — 60 分钟
- **A2A Protocol 入门** — 5 分钟
- **Multi-Agent Patterns：Delegation、Handoff 与 Shared-State Risks** — 20 分钟
- **自学：多 Agent 路由** — 20 分钟
- **Multi-Agent Care Workflow with LangGraph** — 120 分钟
- **自学：Multi-Agent Patterns** — 20 分钟
- **自学：工作流与自动化** — 20 分钟
- **Agent Ops with LangSmith** — 30 分钟
- **自学：Evaluation & Quality Monitoring** — 20 分钟
- **自学：可观测性与 Guardrails** — 20 分钟
- **Agent Protocol Map：MCP、A2A 与场景协议** — 5 分钟
- **自学：Multi-Agent Patterns** — 20 分钟
- **Agent Operations：Runbook、SLO 与 Failure Ownership** — 5 分钟
- **自学：Debugging & Incident Playbook** — 20 分钟
- **自学：可观测性与 Guardrails** — 20 分钟

## PHASE 7: Memory System

_Agent Memory · STM/LTM · Mem0 · Session 管理 · Memory 技术全景_

- **Agent Memory & State Management** — 90 分钟 · 🔴直播
- **Build Safe Long-Term Memory for the CareKind Agent** — 120 分钟 · 🔴直播
- **Build a Bounded CareKind Agent** — 120 分钟 · 🔴直播
- **Agentic Retrieval：Query Planning、Evidence Budget 与 Stop Rules** — 120 分钟
- **Lab: 受控浏览器 Agent — 操作、审批与失败恢复** — 30 分钟
- **Lab: Implement and Validate Agent Memory with Mem0** — 30 分钟
- **Agent Memory Architecture：Store、Retrieve、Consolidate 与 Forget** — 8 分钟
- **Context Engineering & Memory：Working Context 与 Persistent State** — 20 分钟
- **自学：Context Compression & Optimization** — 20 分钟
- **自学：Context Degradation Patterns** — 20 分钟

## PHASE 8: Harness Engineering

_Harness 架构 · Hook System · Tool Loop · Skills 范式 · ADLC · 个人 Harness 构建_

- **AI Coding + ADLC：CareKind 项目启动** — 120 分钟 · 🔴直播
- **CareKind Product UI & Design System** — 120 分钟 · 🔴直播
- **Rapid CareKind MVP Build with Claude Code** — 120 分钟 · 🔴直播
- **Legacy Placeholder：W3 Theory（已由 L37 替代）** — 90 分钟
- **Legacy Placeholder：W4 Theory（已由 L58 替代）** — 90 分钟
- **CareKind Voice AI: Confirmed Transcript Pipeline** — 120 分钟 · 🔴直播
- **AI-Native Engineering Workspace：Spec-to-Work、Living Docs、Hooks 与 Skills** — 120 分钟 · 🔴直播
- **Claude Code：Context 与 Runtime 边界** — 20 分钟
- **Skills 范式** — 15 分钟
- **Harness Engineering for Production AI Agents** — 90 分钟 · 🔴直播
- **Build the CareKind Production Agent Harness** — 120 分钟 · 🔴直播
- **Lab: Mem0 接入、隔离与更正删除** — 30 分钟
- **自学：Claude Code 全面拆解** — 20 分钟
- **Harness 架构剖析：以 Claude Code 为例** — 30 分钟
- **自学：Claude Code 技术原理：上下文与记忆管理** — 20 分钟
- **自学：Claude Code 全面拆解** — 20 分钟
- **自学：Claude Code 子代理配置** — 20 分钟
- **Lab: Production Tool Loop State Machine** — 30 分钟
- **Harness 工程化：运行预算、恢复与副作用控制** — 90 分钟
- **Lab: Harness Hooks—Policy Enforcement、Audit 与 Output Filtering** — 30 分钟
- **Harness Patterns 参考** — 20 分钟
- **自学：高质量 Prompt 模板** — 20 分钟
- **Human-in-the-Loop：授权、暂停、恢复与补偿** — 15 分钟
- **自学：AI Coding 工作流** — 20 分钟
- **自学：与 AI 结对编程** — 20 分钟
- **自学：Skills 范式：从 Agent 到技能库** — 20 分钟
- **自学：Claude Code Skills 进阶** — 20 分钟
- **Claude Code Skills 最佳实践** — 180 分钟
- **Quest: 在你电脑上构建个人 Harness** — 30 分钟

## PHASE 9: Model Layer

_Open-Weight Models · Fine-Tuning · QLoRA · Unsloth · PEFT · SDG · Sentence Transformers_

- **Model Selection & Fine-Tuning Go/No-Go** — 60 分钟
- **Build the CareKind Model Router inside the Agent Harness** — 120 分钟 · 🔴直播
- **Quest: 本机 Ollama 跑 Qwen 3.5** — 45 分钟
- **Docker for AI Engineers** — 20 分钟
- **自学：生产环境部署** — 20 分钟
- **Lab: Model Serving Contract—Health、Load 与 Rollback** — 30 分钟
- **Lab: Inference Optimization—KV Cache、Batching 与 Quality Guard** — 30 分钟
- **Lab: SageMaker ML 平台** — 30 分钟
- **SDG for Fine-Tuning** — 60 分钟
- **Lab: 数据工程** — 30 分钟
- **自学：Synthetic Data & Augmentation** — 20 分钟
- **SDG Toolkit** — 5 分钟
- **自学：Synthetic Data & Augmentation** — 20 分钟
- **Fine-Tuning & MTEB** — 60 分钟
- **Downloading Open-Source Model Weights** — 60 分钟
- **Loading LMs on GPU** — 60 分钟
- **Sentence Transformers & Fine-Tuning Embeddings** — 120 分钟
- **自学：RAG 系统入门** — 20 分钟
- **Lab: SFT 数据、训练与独立评估** — 30 分钟
- **Fine-Tuning Toolkit** — 5 分钟
- **The Primary Roles of Fine-Tuning** — 30 分钟
- **PEFT + QLoRA + Unsloth** — 60 分钟
- **Lab: DPO 偏好数据与对齐验证** — 30 分钟
- **Fine-Tuning Llama with PEFT-QLoRA** — 60 分钟
- **Quest: 你的第一次 QLoRA 微调** — 60 分钟

## PHASE 10: AI Governance, Safety, Observability & Evals

_AI Governance · Risk Classification · Accountability · AI Evaluation · Safety · Guardrails · Red-teaming · 监控 · Incident Response · 毕业_

- **Legacy Placeholder：W9 Theory（已由 L133 替代）** — 90 分钟
- **Legacy Placeholder：W9 Practice（已由 L119 替代）** — 120 分钟
- **Evaluation Engineering: Extend the Existing Pipeline** — 90 分钟
- **Quest: 给你的 ISA 接 LangSmith Eval Pipeline** — 60 分钟
- **Lab: LLM 评估** — 30 分钟
- **Lab: Prompt 评估** — 30 分钟
- **AI Governance, Evals & Risk Management** — 90 分钟 · 🔴直播
- **Lab: Multi-Agent Handoff 与状态恢复** — 30 分钟
- **进阶案例：受控 Coding Agent Harness** — 120 分钟
- **Production AI System Design & Model Routing** — 90 分钟 · 🔴直播
- **A2A Governance: Identity, Trust & Delegation** — 60 分钟
- **Lab: A2A — 授权委派与失败处理** — 30 分钟
- **AI Governance Pack：Risk Register、RACI、System Card 与 Release Evidence** — 75 分钟
- **Lab: Prompt Injection Source-to-Sink Defense** — 30 分钟
- **Lab: Hallucination Detection、Abstention 与 Evidence Verification** — 30 分钟
- **Lab: CloudWatch 监控** — 30 分钟
- **Evaluation & Quality Monitoring** — 5 分钟
- **自学：Evaluation & Quality Monitoring** — 20 分钟
- **自学：LLM-as-a-Judge 评测** — 20 分钟
- **Latency & Performance Optimization** — 15 分钟
- **自学：部署与成本优化** — 20 分钟
- **自学：性能与成本优化** — 20 分钟
- **Evaluation Tools Selection：Metrics、Tracing、Experiments 与 Deployment Constraints** — 5 分钟
- **自学：Evaluation & Quality Monitoring** — 20 分钟
- **Red-teaming Playbook** — 5 分钟
- **自学：Prompt Library · Jailbreaking** — 20 分钟
- **自学：Adversarial Prompts** — 20 分钟
- **自学：安全与威胁建模** — 20 分钟
- **LinkedIn & CV：展示真实 AI Engineering 项目证据** — 17 分钟
- **CareKind Production Readiness Review & Demo Day** — 180 分钟 · 🔴直播
- **CareKind Production Demo Day & System Design Defense** — 120 分钟
- **学员小组项目展示** — 60 分钟
- **往期 P3 项目案例（材料待核验）** — 15 分钟
- **Quest: 把你的 ISA 部署上生产（毕业 Quest）** — 60 分钟
