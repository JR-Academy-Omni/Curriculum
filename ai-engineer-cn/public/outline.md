<!-- generated-from: outline.json · do not edit by hand -->

# AI Engineer 训练营

> 🤖 本文件由 `lineage/build_lineage.py` 从同目录 `outline.json` 自动生成 —— **勿手改**。要改大纲改 `outline.json`，再重跑 `python3 lineage/build_lineage.py`。
> （`outline.json` 是生产管线吃的机器权威；这份 `.md` 是给人读、给谱系当真相文档的统一格式。）

对着国内大模型应用开发岗的真实 JD 学，在匠人真实项目 Dispatch AI 上边学边做，毕业带着扛得住面试追问的真项目，冲 25-40K offer。

**级别** 中级进阶 · **类型** training · **时长** 12 周技术 + 职业孵化（每周 2 节直播 ≤3h，录播 + Lab + Quest 自主节奏） · **总课时** 61 · **步骤** 154 · **直播** 24 · **互动 Lab** 18 · **预计学时** 96

**适合**：有编程基础、想转大模型应用开发的后端/全栈工程师，以及拼 AI 校招的应届生、想补 LLM 工程能力的算法/数据岗

**目标**：掌握国内大模型应用开发岗所需的全栈工程能力：国产大模型 API、Prompt/Function Calling、RAG 工程化、Agent + MCP、微调与私有化部署、AI 评测与安全，全部在真实项目 Dispatch AI 上落地。

---

## P0 — 工程地基（第 1 周）

_摸底 + 国产开发环境 + 本地跑通 Dispatch AI_

- **Pre-work：先修要求与国产开发环境** — 50 分钟
- **Lab: Python 工程化基础** — 30 分钟
- **Lab: FastAPI 起一个服务** — 30 分钟
- **Lab: Git 分支与 PR** — 30 分钟
- **【直播 W1-1】训练营导览 + Dispatch AI 架构拆解** — 180 分钟 · 🔴直播
- **【直播 W1-2】Docker Compose 本地一键启动陪跑** — 120 分钟 · 🔴直播
- **Quest：本地跑通 Dispatch AI** — 60 分钟

## P1 — 大模型应用基础（第 2 周）

_国产大模型 API · Prompt · Function Calling · 接进 Dispatch AI_

- **国产大模型全景与选型** — 45 分钟
- **【直播 W2-1】国产大模型 API 接入 Dispatch AI** — 150 分钟 · 🔴直播
- **Lab: Prompt 四要素与结构化输出** — 30 分钟
- **Lab: JSON Schema 受控输出** — 30 分钟
- **【直播 W2-2】Function Calling + 第一个派单 Function Call** — 150 分钟 · 🔴直播
- **扣子 Coze / Dify 低代码编排速览** — 30 分钟
- **Quest：Dispatch AI 接国产模型 + 跑通首个 Function Call** — 60 分钟

## P2 — RAG 工程化（第 3-5 周）

_Embedding · 向量库 · RAG Pipeline · 混合检索 · RAG 评测 · 接进调度决策_

- **【直播 W3-1】Embedding 与向量化原理** — 120 分钟 · 🔴直播
- **向量库选型：Milvus / Chroma / pgvector** — 40 分钟
- **Lab: 文本向量化与相似检索** — 30 分钟
- **【直播 W3-2】给 Dispatch AI 建调度知识库** — 150 分钟 · 🔴直播
- **Lab: 文档分块与索引** — 30 分钟
- **【直播 W4-1】RAG Pipeline 全流程 + 混合检索** — 180 分钟 · 🔴直播
- **Lab: 混合检索 + Rerank** — 30 分钟
- **Lab: 查询重写与上下文压缩** — 30 分钟
- **【直播 W4-2】把 RAG 接进调度决策** — 150 分钟 · 🔴直播
- **PDF / 工单文档解析实战** — 30 分钟
- **【直播 W5-1】RAG 评测体系：RAGAS / Langfuse** — 150 分钟 · 🔴直播
- **Lab: 搭建 RAG 评测面板** — 30 分钟
- **【直播 W5-2】成本、限流与缓存优化** — 120 分钟 · 🔴直播
- **Quest：给 Dispatch AI 接私有知识库 + 跑出评测指标** — 90 分钟

## P3 — Agent 与 MCP（第 6-8 周）

_ReAct Agent · MCP 协议 · 接后端工具 · Multi-Agent · 重做 AI 大脑_

- **【直播 W6-1】Agent 原理与 ReAct 框架** — 150 分钟 · 🔴直播
- **Lab: 手写一个 ReAct Agent** — 30 分钟
- **Lab: Agent 设计模式** — 30 分钟
- **【直播 W6-2】把 AI 大脑重写成 ReAct 分诊 Agent** — 150 分钟 · 🔴直播
- **【直播 W7-1】MCP 协议与 MCP Server 构建** — 180 分钟 · 🔴直播
- **Lab: 写一个 MCP Server** — 30 分钟
- **【直播 W7-2】用 MCP 接 Dispatch 后端 API** — 150 分钟 · 🔴直播
- **MCP 生态与发布指南** — 25 分钟
- **【直播 W8-1】Multi-Agent 架构与工作流编排** — 150 分钟 · 🔴直播
- **Lab: 多智能体协作** — 30 分钟
- **【直播 W8-2】升级成多智能体协作调度** — 150 分钟 · 🔴直播
- **Quest：Dispatch AI 的 AI 大脑 = Agent + MCP** — 90 分钟

## P4 — 微调与私有化部署（第 9-10 周）

_LoRA/QLoRA · Llama Factory · vLLM/SGLang 私有化部署 · 量化 · 合规_

- **Transformer 速览与微调原理** — 50 分钟
- **【直播 W9-1】LoRA / QLoRA + Llama Factory** — 180 分钟 · 🔴直播
- **Lab: 微调一个调度路由小模型** — 45 分钟
- **【直播 W9-2】数据准备与微调实操陪跑** — 150 分钟 · 🔴直播
- **【直播 W10-1】vLLM / SGLang 私有化部署 + 量化** — 180 分钟 · 🔴直播
- **Lab: 部署 + 压测** — 45 分钟
- **国内合规与数据安全要点** — 30 分钟
- **【直播 W10-2】把微调模型部署进 Dispatch AI** — 150 分钟 · 🔴直播
- **Quest：vLLM 私有化部署进 Dispatch AI** — 90 分钟

## P5 — 评测·安全·综合项目（第 11-12 周）

_AI Eval · 防注入护栏 · 可观测 · 个性化扩展 · Demo Day_

- **【直播 W11-1】AI Eval Engineering + 调度决策质量评测** — 150 分钟 · 🔴直播
- **Lab: Prompt 注入防御** — 30 分钟
- **Lab: 幻觉检测与护栏** — 30 分钟
- **【直播 W11-2】生产级可观测（监控/日志）** — 120 分钟 · 🔴直播
- **【直播 W12-1】个性化扩展设计 + 答疑陪跑** — 150 分钟 · 🔴直播
- **Quest / Capstone：给 Dispatch AI 加专属扩展** — 120 分钟
- **【直播 W12-2】Demo Day + 面试叙事 + 职业路径** — 180 分钟 · 🔴直播

## P6 — 职业孵化（与课程并行 / 收尾）

_反模板简历 · 国内八股精讲 · 投递策略 · 模拟面试 · 内推_

- **反模板简历：把 Dispatch AI 改造写成项目经历** — 40 分钟
- **国内大模型八股精讲** — 60 分钟
- **BOSS 直聘 / 猎聘 / 脉脉 投递策略** — 45 分钟
- **模拟面试 + 追问演练** — 60 分钟
- **内推与 offer 谈判** — 30 分钟
