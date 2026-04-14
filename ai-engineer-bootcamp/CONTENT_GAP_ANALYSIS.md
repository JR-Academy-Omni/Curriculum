# AI Engineer Bootcamp 第五期 — 内容缺口分析

> 日期: 2026-04-14
> 分析范围: 171 节课 / 10 Phase / 61 个 InteractiveLab
> 目的: 找出缺少的 Lab、缺少的知识点、Lab 配置问题

---

## 一、Lab 覆盖度分析

### 各 Phase Lab 数量

| Phase | 名称 | 直播课 | Lab 数 | Lab/直播比 | 状态 |
|-------|------|--------|--------|-----------|------|
| 1 | Foundation Layer | 3 | 19 | 6.3 | ✅ 充足（Pre-work Labs 多） |
| 2 | Context Engineering | 3 | 11 | 3.7 | ✅ 充足 |
| 3 | RAG | 17 | 15 | 0.9 | ✅ 合理 |
| 4 | **Capability Layer** | **6** | **1** | **0.17** | **❌ 严重不足** |
| 5 | **Agent Core** | **5** | **2** | **0.4** | **⚠️ 偏少** |
| 6 | **Multi-Agent & Orchestration** | **5** | **1** | **0.2** | **❌ 严重不足** |
| 7 | **Memory System** | **1** | **0** | **0** | **❌ 没有 Lab** |
| 8 | **Harness Engineering** | **5** | **1** | **0.2** | **❌ 严重不足** |
| 9 | Model Layer | 10 | 6 | 0.6 | ✅ 合理 |
| 10 | Observability & Evals | 4 | 5 | 1.25 | ✅ 充足 |

**结论**：Phase 4-8（中段 Agent 相关）Lab 严重不足，跟前段（P1-3）和后段（P9-10）形成鲜明对比。

---

### 缺 Lab 的直播课（需要补充）

#### Phase 4: Capability Layer — 6 节直播仅 1 个 Lab

| 直播课 | 建议补充的 Lab | 理由 |
|--------|---------------|------|
| L100 MCP Server 构建 (180m) | **MCP Server Lab** — 从零搭建一个 MCP Server | MCP 是本课程重点，180m 直播没有配套 Lab |
| L102 MCP 工程集成实战 (120m) | — | 本身就是实操课，可不补 |
| L103-L104 MCP 实战项目 (各 120m) | — | 项目课不需要独立 Lab |
| L106 Computer Use (120m) | **Browser Use Lab** — 用 Computer Use API 自动化浏览器任务 | 新兴技术，需要动手体验 |

**建议新增 Lab**: 1-2 个

#### Phase 5: Agent Core — 5 节直播仅 2 个 Lab

| 直播课 | 建议补充的 Lab | 理由 |
|--------|---------------|------|
| L112 Agent SDK 对比 (90m) | **Agent SDK Lab** — 同一任务用 OpenAI/Claude/Google 三个 SDK 实现 | 课程亮点，必须有动手对比 |
| L114 构建第一个 Agent (60m) | **Build Agent Lab** — 从零构建完整 Agent（带 Tool + Memory） | "构建第一个"必须配 Lab |
| L115 Agentic RAG (120m) | — | 项目课，可不补 |

**建议新增 Lab**: 1-2 个

#### Phase 6: Multi-Agent & Orchestration — 5 节直播仅 1 个 Lab

| 直播课 | 建议补充的 Lab | 理由 |
|--------|---------------|------|
| L119 Multi-Agent + LangGraph (60m) | **LangGraph Lab** — 用 LangGraph 编排多 Agent 工作流 | LangGraph 是核心框架，需要实操 |
| L120 A2A Protocol (60m) | **A2A Lab** — 两个 Agent 通过 A2A 协议通信 | 新协议，动手才能理解 |
| L122 Multi-Agent RAG (60m) | — | 综合项目课 |

**建议新增 Lab**: 1-2 个

#### Phase 7: Memory System — 0 个 Lab

| 直播课 | 建议补充的 Lab | 理由 |
|--------|---------------|------|
| L126 Agent Memory + Mem0 (60m) | **Memory Lab** — 实现 STM/LTM + Mem0 集成 | Phase 唯一直播课，必须配 Lab |

**建议新增 Lab**: 1 个（必须）

#### Phase 8: Harness Engineering — 5 节直播仅 1 个 Lab

| 直播课 | 建议补充的 Lab | 理由 |
|--------|---------------|------|
| L130 Harness Engineering 基础 (90m) | — | 理论铺垫，L133 已有 Tool Loop Lab |
| L132 从零构建 Harness (120m) | **Harness Build Lab** — 完成一个 mini harness 的核心 loop | 120m 实操课需要配套练习 |
| L134 Harness 工程化 (90m) | **Hooks Lab** — 实现 PreTool/PostTool Hook | 工程化要点，需要动手 |
| L136 Skills 范式 (60m) | — | L137 Quest 已覆盖 |
| L137 Claude Code Skills (180m) | — | 课本身就是大量实操 |

**建议新增 Lab**: 1-2 个

---

## 二、知识点缺口分析

### 完全缺失（课程标题和内容都没有提到）

| 知识点 | 重要程度 | 建议 | 放哪个 Phase |
|--------|---------|------|-------------|
| **Vision / Multimodal** | 🔴 高 | GPT-4V / Claude Vision，图像理解+生成是 2026 刚需 | P1 Foundation 或 P2 Context Engineering |
| **Docker / Containerization** | 🔴 高 | AI 应用部署必备，vLLM/TGI 都跑在 Docker 里 | P9 Model Layer（部署相关） |
| **Agent Planning (Plan-and-Execute)** | 🟡 中 | Agent 设计模式之一，跟 ReAct 并列 | P5 Agent Core |
| **Agent Reflection / Self-Critique** | 🟡 中 | Agent 自我改进模式，LangGraph 常用 | P5 Agent Core 或 P6 Multi-Agent |
| **Human-in-the-Loop** | 🟡 中 | 生产 Agent 必须有人工审批节点 | P6 Multi-Agent 或 P8 Harness |
| **Distillation** | 🟡 中 | 大模型知识蒸馏到小模型，降本关键 | P9 Model Layer |
| **Latency Optimization** | 🟡 中 | TTFT、KV Cache、Speculative Decoding | P9 Model Layer 或 P10 Observability |
| **Voice / Audio (TTS/STT)** | 🟢 低 | 语音 Agent 是趋势但不是核心 | 可选，P4 Capability Layer |

### 标题没提但内容实际覆盖了的

以下知识点在课程描述或 steps 里有涉及，但不够突出：

| 知识点 | 在哪里 | 覆盖程度 |
|--------|--------|---------|
| Streaming | L59 RAG from Scratch 的 steps 里 | 浅，没有独立讲 |
| Prompt Caching | L37 Context Engineering 的 steps 里 | 浅，可以加深 |
| Chunking Strategies | L63 PDF Parsing 101 + RAG steps | 中，但没有独立 Lab |
| Re-ranking | L82 GraphRAG 混合检索 steps 里 | 中 |
| Quantization | L154 PEFT + QLoRA 里 | 中，作为 QLoRA 的一部分 |
| Semantic Search | L53 Embeddings 里 | 中 |
| Agentic Patterns | L117 Multi-Agent Architectures 里 | 中 |

---

## 三、Lab 配置问题

### 57 个 Lab 缺少 `interactiveLabType` 字段

**问题**：61 个 InteractiveLab 中有 57 个没有设置 `interactiveLabType`（应为 `prompt` / `llm` / `python` / `frontend` / `aws` / `azure` / `git`）。只有 1 个 Lab（`tool-loop-harness`）设置了 `llm` 类型。

**影响**：前端可能无法正确路由到对应的 Lab 组件。

**建议**：批量补充 `interactiveLabType`，按 slug 前缀分类：
- `python-*` → `python`
- `git-*` → `git`
- `ec2-*`, `iam-*`, `s3-*`, `secrets-*`, `lambda-*`, `serverless-*`, `cloudwatch-*`, `bedrock-*`, `sagemaker-*`, `opensearch-*` → `aws`
- `rag-*`, `llm-*`, `model-*`, `data-*`, `inference-*`, `supervised-*`, `preference-*`, `mlops-*` → `llm`
- 其余 Prompt 相关 → `prompt`

---

## 四、建议新增 Lab 汇总

### 优先级排序

| # | Lab 名称 | Phase | 优先级 | 理由 |
|---|---------|-------|--------|------|
| 1 | **MCP Server Lab** | P4 | P0 | MCP 是课程核心差异点，180m 直播无配套 Lab |
| 2 | **Agent SDK 对比 Lab** | P5 | P0 | 三大 SDK 对比是课程卖点，必须动手 |
| 3 | **Memory Lab (Mem0)** | P7 | P0 | Phase 7 连一个 Lab 都没有 |
| 4 | **LangGraph Lab** | P6 | P1 | LangGraph 是 Multi-Agent 核心框架 |
| 5 | **Vision / Multimodal Lab** | P1/P2 | P1 | 2026 热门技术缺失 |
| 6 | **A2A Protocol Lab** | P6 | P1 | 新协议需要动手理解 |
| 7 | **Harness Hooks Lab** | P8 | P2 | 工程化要动手 |
| 8 | **Browser Use Lab** | P4 | P2 | Computer Use 新兴技术 |

### 新增后的 Lab 分布预估

| Phase | 现有 Lab | 新增 | 总计 |
|-------|---------|------|------|
| P4 Capability | 1 | +2 | 3 |
| P5 Agent Core | 2 | +1 | 3 |
| P6 Multi-Agent | 1 | +2 | 3 |
| P7 Memory | 0 | +1 | 1 |
| P8 Harness | 1 | +1 | 2 |
| **总新增** | — | **+7** | — |

---

## 五、建议新增知识点课程

| # | 课程标题 | Phase | 类型 | 理由 |
|---|---------|-------|------|------|
| 1 | **Vision & Multimodal AI** | P2 Context Eng | Lesson + Lab | GPT-4V/Claude Vision 图片理解，2026 基本功 |
| 2 | **Docker for AI Engineers** | P9 Model Layer | Information + Lab | vLLM/TGI 部署都需要 Docker |
| 3 | **Agent Planning & Reflection** | P5 Agent Core | Information | Plan-and-Execute + Self-Critique 两大模式 |
| 4 | **Human-in-the-Loop Patterns** | P8 Harness | Information | 生产 Agent 的审批/确认/回退设计 |
| 5 | **Latency & Performance** | P10 Observability | Information | TTFT、KV Cache、推理加速 |

---

## 六、下一步

1. ☐ 确认本分析的优先级排序
2. ☐ 确认 `interactiveLabType` 批量修复方案
3. ☐ 决定新增哪些 Lab（P0 必做 / P1 建议 / P2 后续）
4. ☐ 决定新增哪些知识点课程
5. ☐ 执行修改 outline.json
6. ☐ 更新 HTML 页面 + review 审核表
