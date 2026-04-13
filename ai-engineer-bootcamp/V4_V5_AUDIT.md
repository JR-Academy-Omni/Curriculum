# AI Engineer Bootcamp — 第四期 vs 第五期 审计报告

> 生成日期: 2026-04-13
> 数据来源: Production syllabus `68f87a8b71ceada12fdce8b2` (第四期) vs `curriculum/ai-engineer-bootcamp/public/outline.json` (第五期)

---

## 一、核心结论

| 指标 | 数值 |
|------|------|
| 第四期 Production 课程数 | 95 节 |
| 第五期 outline.json 课程数 | 157 节 (96 原始 + 61 InteractiveLab) |
| 第四期有录播视频的课 | 44 节 (s3Videos 42 + videoPlayTimes 2) |
| 视频能匹配到第五期的 | 35 节 ✅ |
| 第四期独有（第五期缺失）| 7 节有视频 + 24 节无视频 = 31 节 ❌ |

**同步策略**: 第五期使用独立的 Program + Syllabus，**不动第四期任何数据**。

---

## 二、第五期缺失的内容（需要补充）

### 2.1 有录播视频但第五期无对应课程（7 节 — 必须处理）

| Prod# | 第四期标题 | 类型 | s3Videos | 建议处理方式 |
|-------|----------|------|----------|------------|
| 5 | 自拟小组AI项目介绍 | Video | `68e24d53c6b04dad7f1f2651` | 第四期专属展示，**不需要加入第五期**。内容是学员小组项目介绍视频，每期不同。 |
| 12 | The transformer architecture | Video | `678077891a34b016b187998f`, `67b58a11a344e7de0e5c2ba3` | **加入第五期** Phase 1，作为 L28 "Transformer Architecture + API" 的补充视频课。原始录播拆分出来的子视频，讲 Transformer 架构原理。 |
| 15 | Input embeddings | Video | `67b58a11a344e7de0e5c2baa` | **加入第五期** Phase 1，紧跟 Transformer 子视频后面。讲输入嵌入层原理。 |
| 75 | 解读原码 | Video | `6884ce8e5a6a2578189ef0ab` | **加入第五期** Phase 3，MCP 模块内。Claude Code / MCP 源码解读，对理解 MCP 协议有帮助。 |
| 76 | Integrating MCP into AI Engineering | Lesson | `69ccff66d3a18e68bc810e2b` | **加入第五期** Phase 3，在 L117 "MCP Server 构建" 之后。讲如何把 MCP 集成到工程项目中。 |
| 77 | Building a MCP Project 01 | Lesson | `69d6478ffeadc80f02f8b61b` | **加入第五期** Phase 3。MCP 实战项目 Part 1。 |
| 78 | Building a MCP Project 02 | Lesson | `69da3bc176e3e0c1b3a31a7c` | **加入第五期** Phase 3。MCP 实战项目 Part 2。 |

### 2.2 无视频但第五期也缺失的课程（24 节 — 按需处理）

| Prod# | 第四期标题 | 类型 | 是否建议加入第五期 | 原因 |
|-------|----------|------|------------------|------|
| 13 | GenAI Capstone Project: ISA | Assignment | ✅ 加入 | 贯穿全课程的 capstone 项目说明，第五期有 L31 但标题改了，确认是否同一个 |
| 14 | Prompt Engineering | Information | ❌ 不加 | 被拆分成了 L35 Context Engineering + 多个 Prompt Lab |
| 17 | Chain-of-Thought (CoT) | Information | ❌ 不加 | 已有 L38 Lab: Chain of Thought 推理 |
| 18 | Context Engineering Fundamentals | Information | ❌ 不加 | 已有 L35 Context Engineering + L45 Context Engineering Playbook |
| 19 | Define your success criteria | Information | ⚠️ 考虑 | 独立的方法论内容，教学员定义成功标准 |
| 20 | Prompt Engineering: Best Practices | Lesson | ❌ 不加 | 内容合并到 L35 Context Engineering 里了 |
| 21 | Prompt Iteration through a User Interface | Lesson | ❌ 不加 | 内容合并到 Vibe Coding 相关课程 |
| 25 | ChatGPT Prompt Set | Information | ❌ 不加 | Notion 外部链接，已过时 |
| 28 | Embedding Models vs. LLM Chat Models | Lesson | ❌ 不加 | 第五期有 L54，标题一样（匹配成功）|
| 30 | Introduction to RAG | Lesson | ❌ 不加 | 第五期有 L55 |
| 48 | Metrics: Context Recall, Context Precision... | Lesson | ✅ 加入 | 第五期 L84 "RAG Metrics 详解" 可能覆盖了，但这节课标题更具体，确认是否需要独立保留 |
| 59 | ReAct介绍 | Information | ❌ 不加 | 第五期有 L96 Lab: ReAct Agent |
| 61 | Search and Retrieval with Tools (Function Calling) | Lesson | ❌ 不加 | 第五期有 L99 Function Calling + Tool Use |
| 64 | Agent 框架对比参考 | Information | ✅ 加入 | 独立参考资料，对比 LangGraph/CrewAI/AutoGen 等框架 |
| 67 | Hierarchical, Multi-Agent Collaboration... | Lesson | ❌ 不加 | 内容合并到 L107 Multi-Agent Architectures |
| 68 | Agent Operations (Agent Ops) with LangSmith | Lesson | ❌ 不加 | 第五期有 L112 Agent Ops with LangSmith |
| 71 | Multi-Agent Application Toolbox | Information | ❌ 不加 | 第五期有 L114 Multi-Agent + Protocol Ecosystem Map |
| 79 | Deep agents 01 | Lesson | ✅ 加入 | 深度 Agent 实战课，第五期完全缺失 |
| 80 | Deep agents 02 | Lesson | ✅ 加入 | 深度 Agent 实战课 Part 2 |
| 85 | Fine-Tuning & MTEB | Lesson | ❌ 不加 | 第五期有 L134 |
| 91 | Parameter Efficient Fine-Tuning (PEFT) | Lesson | ❌ 不加 | 合并到 L141 PEFT + QLoRA + Unsloth |
| 92 | Quantization | Lesson | ❌ 不加 | 合并到 L141 PEFT + QLoRA + Unsloth |
| 93 | Fine-Tuning Llama 3.1 with PEFT-QLoRA | Lesson | ❌ 不加 | 第五期有 L143 |
| 95 | 自拟小组Final Demo | Lesson | ❌ 不加 | 对应第五期 L154 P3 Demo Day |

---

## 三、视频映射表（35 节已匹配）

第四期 lesson 的 `s3Videos` → 第五期 outline.json 的 lesson code。同步第五期时需要把这些视频绑定到正确位置。

| Prod# | 第四期标题 | s3Video IDs | → V5 Code | 第五期标题 |
|-------|----------|-------------|-----------|----------|
| 3 | AWS Agentcore + AI Engineer 职业路径 | `69632f2f0e32007ea0ecdd55` | L156 | AI Engineer 职业路径 |
| 4 | GenAI Overview+Ops-* | `696783d6fa809e6d38ad5999` | L16 | GenAI Overview + Ops |
| 6 | 开课讲解会 | `696d8800e6ae93548e8c138e` | L21 | 开课讲解会 |
| 7 | Structured Data vs Unstructured Data | `67b58a11a344e7de0e5c2b39` | L22 | Structured Data vs Unstructured Data |
| 8 | Introduction to Machine Learning | `67b58a11a344e7de0e5c2b40` | L23 | Introduction to Machine Learning |
| 9 | Supervised, Unsupervised... | `67b58a11a344e7de0e5c2b47` | L24 | Supervised, Unsupervised & Reinforcement Learning |
| 10 | Introduction to Deep Learning | `67b58a11a344e7de0e5c2b6f` | L25 | Introduction to Deep Learning |
| 11 | Transformer Architecture+API | `6969c90f3695832c6e0b32bc`, `696b738fe6ae93548e6dbe27` | L28 | Transformer Architecture + API |
| 16 | The Four Prototyping Patterns | `697211a71f88a3acd71a98c8` | L32 | The Four Prototyping Patterns |
| 20 | Prompt Engineering: Best Practices | *(videoPlayTimes only)* | — | 无直接对应，playTimes 引用的 s3Video 来自其他 lesson |
| 21 | Prompt Iteration through a User Interface | *(videoPlayTimes only)* | — | 同上 |
| 24 | Building Your First GPT | `685a8ce76aa070c1cd358cb0` | L44 | Building Your First GPT in GPT Store |
| 27 | Introduction to Embeddings | `6974accea39c9c5c3a15106f` | L51 | Introduction to Embeddings |
| 30 | Introduction to RAG | *(videoPlayTimes only)* | L55 | Introduction to RAG |
| 31 | Building RAG from Scratch | `698737b97b2003634490f7a9` | L57 | RAG from Scratch in Python |
| 34 | Building Simple UIs in Python | `698885107b20036344a93f05` | L60 | Building Simple User Interfaces in Python |
| 37 | 学习小组项目proposal | `6983f8867b20036344367c1f` | L64 | P3 职业孵化器 Proposal |
| 38 | Budgeting and API costs | `67b58a12a344e7de0e5c2bb8` | L65 | Budgeting and API Costs |
| 39 | Production RAG Application | `698c49d412f6f984427e6555` | L66 | Production RAG Application |
| 41 | Introduction to LangChain | `67b58a12a344e7de0e5c2bb1` | L71 | Introduction to LangChain |
| 42 | LangChain Core Constructs | `6991b7ec3f26820ea038cc8d`, `6992d3c33f26820ea046c55a` | L72 | LangChain Core Constructs |
| 45 | Claude Code Skills 最佳实践 | `6992c2a73f26820ea045f616` | L157 | Claude Code Skills 最佳实践 |
| 46 | LLMs Overview | `6783a87eb7cbe38fcc4c0b73` | L79 | LLMs Overview |
| 47 | RAG Evaluation | `6999a0b63e3c05b510612ba7` | L82 | RAG Evaluation |
| 49 | Vibe Coding | `699edddb11d46650959fc52b` | L42 | Vibe Coding: AI-Assisted Development |
| 52 | RAGAS Framework | `69a6cda71fac73b30e8c32f4` | L87 | RAGAS Framework |
| 56 | RAG QA Application | `690b30ab8e9052303877d991` | L91 | RAG QA Application with LangChain |
| 57 | 用 AWS 构建 RAG应用 | `688b4941e4dde04ef9a70320` | L92 | 用 AWS 构建 RAG 应用 |
| 58 | Agents | `69abf81b8c89114b4d575c2d` | L95 | Agents 基础 |
| 60 | The ReAct Framework | `682591fc754b6a4959ec7281` | L97 | The ReAct Framework |
| 63 | 构建第一个Agent | `69afe6337e980d25ae068c93` | L105 | Agent 详解：构建第一个 Agent |
| 65 | Production-grade Agentic RAG | `69b5365774de3441b469e2c2` | L106 | Production-grade Agentic RAG |
| 66 | Multi-Agent Architectures | `69ba90cb8639a1eb66f0dcc6` | L107 | Multi-Agent Architectures |
| 69 | Multi-Agent Frameworks | `69bfc9b873c39279043cca9b` | L108 | Multi-Agent + LangGraph |
| 70 | Multi-Agent RAG with LangGraph | `69c3ae6bb850a5602d35d384` | L113 | Multi-Agent RAG with LangGraph |
| 72 | Introducing MCP | `687ba26f8773b9de0d8557fe` | L116 | Introducing MCP |
| 73 | Build MCP Server | `69c7caccd3a18e68bc2b289d` | L117 | MCP Server 构建 + Production 集成 |
| 76 | Integrating MCP | `69ccff66d3a18e68bc810e2b` | — | 第五期缺失，需新增 |
| 77 | MCP Project 01 | `69d6478ffeadc80f02f8b61b` | — | 第五期缺失，需新增 |
| 78 | MCP Project 02 | `69da3bc176e3e0c1b3a31a7c` | — | 第五期缺失，需新增 |
| 94 | Linkedin & CV | `67b447d34db5045ac58813df` | L153 | LinkedIn & CV Workshop |

---

## 四、第四期 Production lesson 顺序 vs 本地 outline.json 原始顺序

第四期 production 上的 lesson 顺序已被人工重排，**和原始 outline.json (dc368aa commit) 的顺序不一致**。

关键差异：
- `AWS Agentcore + AI Engineer 职业路径` 被移到了 #3（原在 Phase 4 末尾）
- `自拟小组AI项目介绍` 被移到了 #5（原在 Phase 4 末尾）
- `Claude Code Skills 最佳实践` 被移到了 #45（Phase 2 RAG 部分中间）
- 多个 Information 课程被重新穿插

**结论**: 第四期 production 的顺序是教学团队手动调整的实际上课顺序，不影响第五期。第五期用自己的 outline.json 顺序即可。

---

## 五、第五期需要新增的课程（Action Items）

基于以上分析，**建议在第五期 outline.json 中新增以下课程**：

### 5.1 Phase 1 新增（Transformer 子视频）

在 L28 "Transformer Architecture + API" 之后插入：

```
L28a - The Transformer Architecture (Video, 录播, ~15min)
       s3Videos: ["678077891a34b016b187998f", "67b58a11a344e7de0e5c2ba3"]
L28b - Input Embeddings (Video, 录播, ~10min)
       s3Videos: ["67b58a11a344e7de0e5c2baa"]
```

### 5.2 Phase 3 新增（MCP 实战 + 源码 + Deep Agents）

在 L117 "MCP Server 构建 + Production 集成" 之后插入：

```
L117a - MCP 源码解读 (Video, 录播, ~60min)
        s3Videos: ["6884ce8e5a6a2578189ef0ab"]
L117b - MCP 工程集成实战 (Lesson, 直播录播, ~120min)
        s3Videos: ["69ccff66d3a18e68bc810e2b"]
L117c - MCP 实战项目 01 (Lesson, 直播录播, ~120min)
        s3Videos: ["69d6478ffeadc80f02f8b61b"]
L117d - MCP 实战项目 02 (Lesson, 直播录播, ~120min)
        s3Videos: ["69da3bc176e3e0c1b3a31a7c"]
```

在 L118 "Production Agents: Computer Use + Agent Ops" 之后插入：

```
L118a - Deep Agents 01 (Lesson, 直播, ~120min)
L118b - Deep Agents 02 (Lesson, 直播, ~120min)
```

### 5.3 Phase 3 新增（参考资料）

```
L_new - Agent 框架对比参考 (Information, ~5min)
        对比 LangGraph / CrewAI / AutoGen / OpenAI Swarm 等框架的适用场景
```

---

## 六、Production IDs 参考

| 实体 | ID | 说明 |
|------|----|----|
| Training | `66e3e7641664e500126d237f` | AI Engineer Bootcamp |
| Program (第四期) | `68ef80b7deb73acfa9480629` | AI Engineer训练营04, phase=4 |
| Syllabus (第四期) | `68f87a8b71ceada12fdce8b2` | 95 lessons |
| Program (第五期) | `698c339dbb0ad7fe43b0c99d` | AI Engineer训练营05期, phase=5 |
| Syllabus (第五期) | `69b8e9888639a1eb66afe5d9` | 待同步 |

---

## 七、下一步操作

1. ✅ 审计完成，报告已生成
2. ⬜ 在 outline.json 中新增第 5.1~5.3 列出的课程
3. ⬜ 新增 Harness Engineering Phase（独立 Phase 4）
4. ⬜ 重新编号所有 lesson (L01-L1xx)
5. ⬜ 通过 `/bootcamp-sync` 同步到第五期独立 Syllabus，不动第四期
6. ⬜ 在 Skills Data Manager 确认 diff 无误后一键同步
