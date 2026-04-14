# AI Engineer Bootcamp — 第四期 vs 第五期 审计报告

> 生成日期: 2026-04-13
> 最后更新: 2026-04-14
> 数据来源: Production syllabus `68f87a8b71ceada12fdce8b2` (第四期) vs `curriculum/ai-engineer-bootcamp/public/outline.json` (第五期)
>
> **状态**: ✅ 第五期大纲调整完成（172 节课，10 个 Phase），待 `/bootcamp-sync` 同步到 production。

---

## 一、核心结论

| 指标 | 数值 |
|------|------|
| 第四期 Production 课程数 | 95 节 |
| 第五期 outline.json 课程数 | 172 节 |
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
| 12 | The transformer architecture | Video | `678077891a34b016b187998f`, `67b58a11a344e7de0e5c2ba3` | ✅ **已加入** Phase 1 L29，作为 L28 "Transformer Architecture + API" 的补充视频课。 |
| 15 | Input embeddings | Video | `67b58a11a344e7de0e5c2baa` | ✅ **已加入** Phase 1 L30，紧跟 Transformer 子视频后面。 |
| 75 | 解读原码 | Video | `6884ce8e5a6a2578189ef0ab` | ✅ **已加入** Phase 4 L101 "MCP 源码解读"。 |
| 76 | Integrating MCP into AI Engineering | Lesson | `69ccff66d3a18e68bc810e2b` | ✅ **已加入** Phase 4 L102 "MCP 工程集成实战"。 |
| 77 | Building a MCP Project 01 | Lesson | `69d6478ffeadc80f02f8b61b` | ✅ **已加入** Phase 4 L103 "MCP 实战项目 01"。 |
| 78 | Building a MCP Project 02 | Lesson | `69da3bc176e3e0c1b3a31a7c` | ✅ **已加入** Phase 4 L104 "MCP 实战项目 02"。 |

### 2.2 无视频但第五期也缺失的课程（24 节 — 按需处理）

| Prod# | 第四期标题 | 类型 | 是否建议加入第五期 | 原因 |
|-------|----------|------|------------------|------|
| 13 | GenAI Capstone Project: ISA | Assignment | ✅ 已有 Phase 1 L33 |  |
| 14 | Prompt Engineering | Information | ❌ 不加 | 拆分到 Phase 2 Context Engineering 多个 Lab |
| 17 | Chain-of-Thought (CoT) | Information | ❌ 不加 | 已有 Phase 2 L40 Lab: Chain of Thought 推理 |
| 18 | Context Engineering Fundamentals | Information | ❌ 不加 | 已有 Phase 2 L37 Context Engineering + L47 Playbook |
| 19 | Define your success criteria | Information | ⚠️ 考虑 | 独立的方法论内容，教学员定义成功标准 |
| 20 | Prompt Engineering: Best Practices | Lesson | ❌ 不加 | 合并到 Phase 2 L37 Context Engineering |
| 21 | Prompt Iteration through a User Interface | Lesson | ❌ 不加 | 合并到 Vibe Coding 相关课程 |
| 25 | ChatGPT Prompt Set | Information | ❌ 不加 | Notion 外部链接，已过时 |
| 28 | Embedding Models vs. LLM Chat Models | Lesson | ❌ 不加 | 已有 Phase 3 L56 |
| 30 | Introduction to RAG | Lesson | ❌ 不加 | 已有 Phase 3 L57 |
| 48 | Metrics: Context Recall, Context Precision... | Lesson | ✅ 已覆盖 | Phase 3 L86 "RAG Metrics 详解" |
| 59 | ReAct介绍 | Information | ❌ 不加 | 已有 Phase 5 L109 Lab: ReAct Agent |
| 61 | Search and Retrieval with Tools (Function Calling) | Lesson | ❌ 不加 | 已有 Phase 4 L97 Function Calling + Tool Use |
| 64 | Agent 框架对比参考 | Information | ✅ 已覆盖 | Phase 5 L112 Agent SDK 对比参考 |
| 67 | Hierarchical, Multi-Agent Collaboration... | Lesson | ❌ 不加 | 合并到 Phase 6 L117 Multi-Agent Architectures |
| 68 | Agent Operations (Agent Ops) with LangSmith | Lesson | ❌ 不加 | 已有 Phase 6 L122 Agent Ops with LangSmith |
| 71 | Multi-Agent Application Toolbox | Information | ❌ 不加 | 已有 Phase 6 L124 Multi-Agent + Protocol Ecosystem Map |
| 79 | Deep agents 01 | Lesson | ⚠️ 考虑 | 深度 Agent 实战课，可加入 Phase 5 或 Phase 6 |
| 80 | Deep agents 02 | Lesson | ⚠️ 考虑 | 深度 Agent 实战课 Part 2 |
| 85 | Fine-Tuning & MTEB | Lesson | ❌ 不加 | 已有 Phase 9 L146 |
| 91 | Parameter Efficient Fine-Tuning (PEFT) | Lesson | ❌ 不加 | 合并到 Phase 9 L153 PEFT + QLoRA + Unsloth |
| 92 | Quantization | Lesson | ❌ 不加 | 合并到 Phase 9 L153 PEFT + QLoRA + Unsloth |
| 93 | Fine-Tuning Llama 3.1 with PEFT-QLoRA | Lesson | ❌ 不加 | 已有 Phase 9 L155 |
| 95 | 自拟小组Final Demo | Lesson | ❌ 不加 | 对应 Phase 10 L168 P3 Demo Day |

---

## 三、视频映射表（35 节已匹配）

第四期 lesson 的 `s3Videos` → 第五期 outline.json 的 lesson code（10-Phase 新编号）。同步第五期时需要把这些视频绑定到正确位置。

| Prod# | 第四期标题 | s3Video IDs | → V5 Phase | → V5 Code | 第五期标题 |
|-------|----------|-------------|------------|-----------|----------|
| 3 | AWS Agentcore + AI Engineer 职业路径 | `69632f2f0e32007ea0ecdd55` | Phase 10 | L171 | AI Engineer 职业路径 |
| 4 | GenAI Overview+Ops | `696783d6fa809e6d38ad5999` | Phase 1 | L16 | GenAI Overview + Ops |
| 6 | 开课讲解会 | `696d8800e6ae93548e8c138e` | Phase 1 | L21 | 开课讲解会 |
| 7 | Structured Data vs Unstructured Data | `67b58a11a344e7de0e5c2b39` | Phase 1 | L22 | Structured Data vs Unstructured Data |
| 8 | Introduction to Machine Learning | `67b58a11a344e7de0e5c2b40` | Phase 1 | L23 | Introduction to Machine Learning |
| 9 | Supervised, Unsupervised... | `67b58a11a344e7de0e5c2b47` | Phase 1 | L24 | Supervised, Unsupervised & Reinforcement Learning |
| 10 | Introduction to Deep Learning | `67b58a11a344e7de0e5c2b6f` | Phase 1 | L25 | Introduction to Deep Learning |
| 11 | Transformer Architecture+API | `6969c90f3695832c6e0b32bc`, `696b738fe6ae93548e6dbe27` | Phase 1 | L28 | Transformer Architecture + API |
| 12 | The Transformer Architecture | `678077891a34b016b187998f`, `67b58a11a344e7de0e5c2ba3` | Phase 1 | L29 | The Transformer Architecture |
| 15 | Input Embeddings | `67b58a11a344e7de0e5c2baa` | Phase 1 | L30 | Input Embeddings |
| 16 | The Four Prototyping Patterns | `697211a71f88a3acd71a98c8` | Phase 2 | L34 | The Four Prototyping Patterns |
| 24 | Building Your First GPT | `685a8ce76aa070c1cd358cb0` | Phase 2 | L46 | Building Your First GPT in GPT Store |
| 27 | Introduction to Embeddings | `6974accea39c9c5c3a15106f` | Phase 3 | L53 | Introduction to Embeddings |
| 31 | Building RAG from Scratch | `698737b97b2003634490f7a9` | Phase 3 | L59 | RAG from Scratch in Python |
| 34 | Building Simple UIs in Python | `698885107b20036344a93f05` | Phase 3 | L62 | Building Simple User Interfaces in Python |
| 37 | 学习小组项目proposal | `6983f8867b20036344367c1f` | Phase 3 | L66 | P3 职业孵化器 Proposal |
| 38 | Budgeting and API costs | `67b58a12a344e7de0e5c2bb8` | Phase 3 | L67 | Budgeting and API Costs |
| 39 | Production RAG Application | `698c49d412f6f984427e6555` | Phase 3 | L68 | Production RAG Application |
| 41 | Introduction to LangChain | `67b58a12a344e7de0e5c2bb1` | Phase 3 | L73 | Introduction to LangChain |
| 42 | LangChain Core Constructs | `6991b7ec3f26820ea038cc8d`, `6992d3c33f26820ea046c55a` | Phase 3 | L74 | LangChain Core Constructs |
| 46 | LLMs Overview | `6783a87eb7cbe38fcc4c0b73` | Phase 3 | L81 | LLMs Overview |
| 47 | RAG Evaluation | `6999a0b63e3c05b510612ba7` | Phase 3 | L84 | RAG Evaluation |
| 49 | Vibe Coding | `699edddb11d46650959fc52b` | Phase 2 | L44 | Vibe Coding: AI-Assisted Development |
| 52 | RAGAS Framework | `69a6cda71fac73b30e8c32f4` | Phase 3 | L89 | RAGAS Framework |
| 56 | RAG QA Application | `690b30ab8e9052303877d991` | Phase 3 | L93 | RAG QA Application with LangChain |
| 57 | 用 AWS 构建 RAG应用 | `688b4941e4dde04ef9a70320` | Phase 3 | L94 | 用 AWS 构建 RAG 应用 |
| 58 | Agents | `69abf81b8c89114b4d575c2d` | Phase 5 | L108 | Agents 基础 |
| 60 | The ReAct Framework | `682591fc754b6a4959ec7281` | Phase 5 | L110 | The ReAct Framework |
| 63 | 构建第一个Agent | `69afe6337e980d25ae068c93` | Phase 5 | L114 | Agent 详解：构建第一个 Agent |
| 65 | Production-grade Agentic RAG | `69b5365774de3441b469e2c2` | Phase 5 | L115 | Production-grade Agentic RAG |
| 66 | Multi-Agent Architectures | `69ba90cb8639a1eb66f0dcc6` | Phase 6 | L117 | Multi-Agent Architectures |
| 69 | Multi-Agent Frameworks | `69bfc9b873c39279043cca9b` | Phase 6 | L119 | Multi-Agent + LangGraph |
| 70 | Multi-Agent RAG with LangGraph | `69c3ae6bb850a5602d35d384` | Phase 6 | L123 | Multi-Agent RAG with LangGraph |
| 72 | Introducing MCP | `687ba26f8773b9de0d8557fe` | Phase 4 | L99 | Introducing MCP |
| 73 | Build MCP Server | `69c7caccd3a18e68bc2b289d` | Phase 4 | L100 | MCP Server 构建 + Production 集成 |
| 75 | MCP 源码解读 | `6884ce8e5a6a2578189ef0ab` | Phase 4 | L101 | MCP 源码解读 |
| 76 | Integrating MCP | `69ccff66d3a18e68bc810e2b` | Phase 4 | L102 | MCP 工程集成实战 |
| 77 | MCP Project 01 | `69d6478ffeadc80f02f8b61b` | Phase 4 | L103 | MCP 实战项目 01 |
| 78 | MCP Project 02 | `69da3bc176e3e0c1b3a31a7c` | Phase 4 | L104 | MCP 实战项目 02 |
| 45 | Claude Code Skills 最佳实践 | `6992c2a73f26820ea045f616` | Phase 10 | L172 | Claude Code Skills 最佳实践 |
| 94 | Linkedin & CV | `67b447d34db5045ac58813df` | Phase 10 | L167 | LinkedIn & CV Workshop |

---

## 四、Production IDs 参考

| 实体 | ID | 说明 |
|------|----|----|
| Training | `66e3e7641664e500126d237f` | AI Engineer Bootcamp |
| Program (第四期) | `68ef80b7deb73acfa9480629` | AI Engineer训练营04, phase=4 |
| Syllabus (第四期) | `68f87a8b71ceada12fdce8b2` | 95 lessons |
| Program (第五期) | `698c339dbb0ad7fe43b0c99d` | AI Engineer训练营05期, phase=5 |
| Syllabus (第五期) | `69b8e9888639a1eb66afe5d9` | 待同步 |

---

## 五、操作进度

1. ✅ 审计完成，报告已生成 (2026-04-13)
2. ✅ 新增第四期独有的 7 节课到第五期 outline.json (2026-04-13)
3. ✅ 新增 Harness Engineering 课程 (2026-04-14)
4. ✅ 从 5 Phase 重构为 10 Phase (2026-04-14)
   - 172 节课全部重新分配和编号
   - 新增 architecture.html 课程架构全景图
   - 更新 curriculum.html（统计数据、时间轴、Phase 卡片）
   - 更新 posters.html 课程索引
5. ⬜ 更新 phase1-10 详情页（从 4 个 phase 页面扩展为 10 个）
6. ⬜ 通过 `/bootcamp-sync` 同步到第五期独立 Syllabus（`69b8e9888639a1eb66afe5d9`），不动第四期
7. ⬜ 在 Skills Data Manager 确认 diff 无误后一键同步
8. ⬜ 同步后在 admin 里人工绑定第四期已有的 37 节视频到第五期对应 lesson（video binding 不在 outline.json 同步范围内）

## 六、当前大纲结构总览 (10 Phase)

| Phase | 名称 | 课程数 |
|-------|------|--------|
| 1 | **Foundation Layer** | 33 |
| 2 | **Context Engineering** | 18 |
| 3 | **RAG** | 45 |
| 4 | **Capability Layer** | 11 |
| 5 | **Agent Core** | 9 |
| 6 | **Multi-Agent & Orchestration** | 11 |
| 7 | **Memory System** | 2 |
| 8 | **Harness Engineering** | 8 |
| 9 | **Model Layer** | 18 |
| 10 | **Observability & Evals** | 17 |
| **总计** | — | **172** |

- 直播课: 59 节
- InteractiveLab: 62 节
- Quest: 1 节
- 总 steps: 688
