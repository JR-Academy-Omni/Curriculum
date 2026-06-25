# AI Engineer Bootcamp · 美国 JD–技能映射图 JD_SKILL_MAP.us.md

> 课程：AI Engineer Bootcamp（美区独立 cohort · 中文授课）· 大纲见 [`public/outline.md`](./public/outline.md)
> 配套：定位 [`POSITIONING.us.md`](./POSITIONING.us.md) · 画像 [`PERSONAS.us.md`](./PERSONAS.us.md)
> 用途：把**美国 AI Engineer 真实 JD 的高频技能** ←→ **本课程实际教的 Phase/Lesson** 一一对上，反推课程重点、销售页卖点、讲座主题、小红书选题。
> Created 2026-06-25 · 维护人待定

---

## 🚧 数据底座说明（先读，别当 100% 一手 JD scrape）

本文档的技能词频与 title 分类来自 **2025-2026 公开市场报告 + JD 聚合分析**（Lightcast 生成式 AI 就业报告、InterviewStack 岗位板、多家 JD 拆解文章，出处见 §7），**全部可核**。

但它**还不是「10 份指定公司 live JD 逐条 scrape」**——那是把本表可信度再拉一档的下一步（§6 待办）。现在的表足够搭课程重点 / 销售页 / 讲座骨架；任何要写进销售页的**具体百分比数字**，引用时带上 §7 出处即可。

🚨 红线：薪资数字是市场中位数，**不等于 entry-level / OPT 求职者容易拿到**。任何对外引用都要配「不承诺 offer / 不承诺薪资」口径（见 [`POSITIONING.us.md`](./POSITIONING.us.md) §红线）。

---

## 1. 美国 AI 工程岗的 title 全景（别只盯 "AI Engineer"）

2026 年这条赛道已裂成至少 6-7 个 title，简历信号各不相同。投递和做项目都要按 title 反推技能栈：

| Title | 干什么（一句话） | 技能重心 | 本课覆盖度 |
|-------|----------------|---------|-----------|
| **AI Engineer / Applied AI Engineer** | 把基础模型接成可上线的产品功能（RAG pipeline / 调 LLM API / tool-use 逻辑 / 运维推理服务）| RAG · LangChain · vector DB · prompt · cloud · API | 🟢 高（课程主线就是这个）|
| **LLM Engineer** | 专攻 LLM 微调 + prompt/RAG pipeline + 非结构化文本规模化 | RAG · vector DB · fine-tuning · 文本工程 | 🟢 高 |
| **ML Engineer (LLM/RAG)** | 训练/微调/部署/运维模型，规模化 | 分布式训练 · 微调 · RLHF/DPO · 部署 | 🟡 中（微调有，分布式训练偏轻）|
| **Agentic AI Engineer** | 构建多 agent 系统 / 工具编排 / agent ops | LangGraph · Agent SDK · MCP · multi-agent · eval | 🟢 高（P4-P8 是课程强项）|
| **AI Platform / LLMOps / MLOps Engineer** | LLM 系统的可观测 / 成本 / CI-CD / serving | Docker/K8s · 可观测 · serving · 成本 | 🟡 中（可观测+成本有，K8s/serving 偏轻）|
| **Backend Engineer, AI Products** | AI 产品后端（API server + 推理服务集成）| Python/TS · FastAPI · cloud · 系统设计 | 🟡 中 |
| **AI Solutions Engineer** | 客户侧落地 / demo / 方案 | RAG · agent · 沟通 · cloud | 🟢 高 |

> 关键事实：标 "LLM" / "RAG" 的岗位自 2024 起 **增长 340%**，同期通用 "machine learning" 岗位下降 18%（见 §7）。→ 课程主线（RAG + Agent + 工程化）正好踩在增长曲线上，这是定位时可以打的硬趋势。

---

## 2. 🔑 核心映射表：JD 高频技能 → 本课 Phase/Lesson

「JD 频率」列：🔥🔥🔥 = 几乎每个 JD 必有 / 🔥🔥 = 多数 JD 出现 / 🔥 = 加分项。
「课程覆盖」：✅ 主线深教 · 🟡 教到但偏轻 · ⬜ 课程目前没有（= 缺口，见 §3）。

| # | JD 高频技能 | JD 频率 | 本课对应 Phase / Lesson | 课程覆盖 |
|---|-----------|:------:|------------------------|:------:|
| 1 | **Python + 数据库 (Pandas/NumPy/SQL)** | 🔥🔥🔥 | P1 Python Labs（Hello World→函数→API→JSON）| ✅ |
| 2 | **LLM API (OpenAI / Anthropic)** | 🔥🔥🔥 | P1 LLM API 入门 + Lab: Python OpenAI API；P2 全程 | ✅ |
| 3 | **Prompt Engineering** | 🔥🔥（市场频率 8.9%）| P2 全 Phase（四要素 / CoT / system prompt / 结构化输出）| ✅ |
| 4 | **RAG 实现（chunking / 检索 / pipeline）** | 🔥🔥🔥 | P3 整个 Phase（RAG from Scratch / Feature & Inference Pipeline / Production RAG）| ✅ |
| 5 | **Vector Database** | 🔥🔥（市场频率 4.5%）| P3 Embeddings + Lab: OpenSearch 向量搜索 + Bedrock 知识库 | 🟡（教 OpenSearch/Bedrock，**Pinecone/Weaviate/Chroma/Qdrant/pgvector 未点名**）|
| 6 | **混合检索 + reranking + GraphRAG** | 🔥🔥 | P3 GraphRAG + 混合检索 | ✅ |
| 7 | **Embedding 模型选型 / 微调** | 🔥 | P3 Embedding Models vs Chat Models；P9 Sentence Transformers & Fine-Tuning Embeddings | ✅ |
| 8 | **LLM 编排框架 (LangChain / LangGraph / LlamaIndex)** | 🔥🔥🔥 | P3 LangChain + LCEL；P6 LangGraph | 🟡（LangChain/LangGraph ✅，**LlamaIndex 未覆盖**）|
| 9 | **Agent / Multi-Agent (Agent SDK / CrewAI)** | 🔥🔥🔥（agentic 赛道暴涨）| P5 ReAct + Agent SDK 对比(OpenAI/Claude/Google ADK)；P6 Multi-Agent + LangGraph + A2A | ✅（**CrewAI 未点名**，但 LangGraph/ADK 更主流）|
| 10 | **Eval 框架 (RAGAS / DeepEval / LLM-as-judge)** | 🔥🔥 | P3 RAG Evaluation + RAGAS + RAG Metrics + LLM-as-a-Judge 自学 | ✅（RAGAS ✅，**DeepEval 未点名**）|
| 11 | **可观测 / 监控 (LangSmith / Langfuse / drift / latency)** | 🔥🔥 | P3 LangSmith + Langfuse；P6 Agent Ops with LangSmith | ✅ |
| 12 | **Cloud 部署 (AWS / GCP / Azure)** | 🔥🔥🔥 | P1 EC2/IAM/S3/Secrets；P3 Lambda/Bedrock；P9 SageMaker | 🟡（**AWS 很深**，GCP/Azure 几乎没有）|
| 13 | **Docker / Kubernetes** | 🔥🔥🔥（K8s 市场频率 17.6%！）| P9 Docker for AI Engineers | 🟡（**Docker 有，Kubernetes 缺**——这是高频缺口）|
| 14 | **模型 serving (vLLM / TGI / TensorRT-LLM)** | 🔥🔥 | P9 Loading LMs on GPU + 推理优化 Lab | 🟡（讲 GPU 加载/推理优化，**vLLM/TGI 未点名**）|
| 15 | **Fine-Tuning (QLoRA / PEFT / RLHF / DPO)** | 🔥🔥 | P9 PEFT+QLoRA+Unsloth + SFT Lab + RLHF/DPO Lab | ✅ |
| 16 | **实验跟踪 (MLflow / W&B)** | 🔥🔥 | — | ⬜（**缺口**，见 §3）|
| 17 | **成本 / 延迟控制** | 🔥🔥 | P3 成本优化 Lab + LLM Rate Limits + API Costs | ✅ |
| 18 | **Guardrails / 安全 / 数据治理** | 🔥🔥（2026 新重点）| P3/P6 可观测性与 Guardrails 自学 | 🟡（自学覆盖，**偏轻**）|
| 19 | **Function Calling / Tool Use / MCP** | 🔥🔥（快速上升）| P4 Function Calling + MCP Server 构建 + 发布 | ✅（**领先市场——课程强项**）|
| 20 | **Harness / Agent 工作流 (Claude Code 原理)** | 🔥（前沿加分）| P8 Harness Engineering 全 Phase | ✅（**领先市场——差异化王牌**）|
| 21 | **生产级系统设计 + 作品集** | 🔥🔥🔥（面试核心）| 7 个 capstone + Quest（ISA 项目贯穿 P1-P9）| ✅ |

---

## 3. 缺口分析：JD 高频但课程偏轻/没有的（行动项）

这些是「美国 JD 反复出现、但课程现在 🟡 或 ⬜」的点。不一定都要新增主课，但**至少要在项目里点到、在销售页别吹**：

| 缺口 | JD 频率 | 建议处理 |
|------|:------:|---------|
| **Kubernetes** | 🔥🔥🔥（17.6%，最大缺口）| P9 至少加一节「容器化部署：Docker → K8s 概念」自学/Lab，或在 capstone 部署环节点到。LLMOps title 必问。|
| **MLflow / W&B 实验跟踪** | 🔥🔥 | P9 微调环节加一节实验跟踪自学/Lab，简历能写「用 MLflow 管 fine-tuning 实验」。|
| **托管 vector DB 点名 (Pinecone/Weaviate/Chroma/Qdrant/pgvector)** | 🔥🔥 | P3 现教 OpenSearch/Bedrock，建议补一节「主流向量库对比 + 选型」，让学员简历能写出 JD 里的具体产品名（ATS 关键词匹配）。|
| **vLLM / TGI serving 点名** | 🔥🔥 | P9 推理优化环节点名 vLLM/TGI，简历可写「用 vLLM 部署 serving」。|
| **GCP / Azure** | 🔥🔥 | 不必新建，但销售页别只说「云」，明确「以 AWS 为主，概念可迁移 GCP/Azure」。|
| **LlamaIndex / CrewAI / DeepEval** | 🔥 | 课程用了更主流的 LangChain/LangGraph/RAGAS，**这是合理取舍**——在 JD 对齐课里用一节「框架生态地图」让学员知道同类替代品即可，不必都教。|
| **Guardrails / 安全 / 数据治理** | 🔥🔥 | 2026 新重点（bias/fairness/隐私），建议从自学升一节直播或 Lab，分量配得上 JD 权重。|

> ⚠️ 处理这些缺口前，先跑 §6 的「10 份 live JD scrape」确认频率，再决定加课优先级——别凭本表的聚合数字就大改大纲。

---

## 4. 课程的「领先项」= 销售页该重点打的差异化

课程有几块**比典型 JD/竞品 bootcamp 超前**，这是定位和宣传的王牌：

- **MCP（Model Context Protocol）**：P4 完整教 MCP Server 构建 + 发布。市场刚起，会的人少，简历亮点强。
- **Harness Engineering / Claude Code 原理**：P8 从零构建 AI Coding Agent Harness。对齐「会用 AI 放大自己」的 2026 趋势，老牌 bootcamp 完全没有。
- **Agent SDK 横向对比（OpenAI / Claude / Google ADK）**：多数课程只教一个，本课对比教，面试讲 trade-off 有料。
- **Multi-Agent + A2A Protocol**：agentic 赛道暴涨，课程覆盖深。
- **7 个贯穿式 capstone（ISA 项目从 P1 跟到 P9）**：直接对应 JD 最看重的「生产级系统设计 + 作品集」。

→ 对应 [`POSITIONING.us.md`](./POSITIONING.us.md) §3 的「AI-native 工作方式做成卖点」「证据层」。

---

## 5. 🔑 技能之外，美国公司还看什么（拿 offer 的隐藏权重）

§2 的技能只是**入场券**。很多因素比技能更早被筛、更决定成败——华人求职者最容易在「技能之外」吃亏。这一节既是课程要补的能力，也是极强的宣传钩子（「美国 AI 岗看的不只是技能」比纯讲技术更打动焦虑的求职者）。

| 隐藏权重 | 为什么决定成败 | 课程是否覆盖 |
|---------|--------------|:------:|
| **① 工作授权 / 签证 sponsorship** | 常是**第一道筛**，不 sponsor 的公司技能再强也进不去 | ✅ [`VISA_JOB_SEARCH_GUIDE.us.md`](./VISA_JOB_SEARCH_GUIDE.us.md)（筛 sponsor + 得体应对）|
| **② 沟通 + 英文表达** | 讲清技术决策、写设计文档、code review、async 协作——华人最易吃亏处 | ✅ 英文简历/面试辅导 + deep dive 讲法 |
| **③ Shipping 证据（ship 过真东西吗）** | 招聘问「你交付过扛生产的系统吗」，repo/demo > 证书 | ✅ 7 个项目作品集（[`P3_US_PROJECT_BRIEFS.md`](./P3_US_PROJECT_BRIEFS.md)）|
| **④ 系统设计判断力 / trade-off** | 面试 deep dive 逼问取舍/失败模式，**有判断 > 会写代码**（senior 信号）| ✅ 每项目 deep dive 三件套（架构/取舍/失败模式）|
| **⑤ 业务 / 产品理解** | 能把 AI 接到业务价值，只懂技术偏初级 | 🟡 ISA 行业选题 + 业务价值三段式简历，可加强 |
| **⑥ Referral / 内推网络** | 美国找工约一半靠内推，能跳过冷投初筛 | 🟡 校友 referral 网络（[`PROMOTION_PLAN.us.md`](./PROMOTION_PLAN.us.md)），长期价值 |
| **⑦ 简历信号 + LinkedIn + ATS 关键词** | recruiter 15 秒扫 RAG/Agent/MCP/production，关键词决定能否被看见 | ✅ 简历 workshop（技术选型+指标+业务价值三段式）|
| **⑧ 行为面试 / 文化匹配 / red flag** | 解释 gap/跳槽/转型动机、ownership、协作——态度 red flag 直接挂人 | ✅ behavioral 环节 |
| **⑨ AI-native 工作方式（2026 新增）** | 会不会用 Claude Code / Cursor / agent 把自己放大 10 倍 | ✅ P8 Harness（**差异化**）|

> 落地：⑤⑥ 是当前偏轻、可加强的两块（业务理解 + referral 网络）。⑨ 是别人没有的差异化，宣传要打。
> → 这一节可独立做成讲座/小红书钩子「美国 AI 岗看的不只是技能」，见 [`PROMOTION_PLAN.us.md`](./PROMOTION_PLAN.us.md) §4 钩子 5。

---

## 6. 下一步（把本表可信度再拉一档）

- [ ] **10 份指定 live JD scrape**：选美国华人常投的 10 家（含会 sponsor 的）真实在招 AI Engineer/Applied AI/LLM JD，逐条抽技能词，回填本表频率列、替换聚合估计。配合 [`PERSONAS.us.md`](./PERSONAS.us.md) §7 ground truth task 一起跑。
- [ ] 缺口（§3）确认后，决定哪些进大纲（改 `outline.json` → 重跑 lineage）。
- [ ] 把本表 → 销售页「JD 对齐」模块 + 讲座「美国 AI Engineer JD 到底要什么」+ 小红书「会调 API ≠ AI Engineer」选题。

---

## 7. Sources（全部可核 · 2025-2026）

- 技能词频（NLP 19.7% · prompt engineering 8.9% · GPT 7.8% · vector DB 4.5% · Kubernetes 17.6% · data pipelines 11.6%）、生成式 AI 岗位增长：[Lightcast — Generative AI Job Market 2025](https://lightcast.io/resources/blog/the-generative-ai-job-market-2025-data-insights)、[CIO — 10 most in-demand generative AI skills](https://www.cio.com/article/653613/10-most-in-demand-generative-ai-skills.html)
- LLM/RAG 岗位 +340%、生产化要求转变：[Zen van Riel — LLM Engineer Career 2025](https://zenvanriel.com/job/llm-engineer-career/)、[MirrorCV — AI Engineer Resume Guide 2026](https://mirrorcv.com/resume-guide/ai-ml-engineer)
- title 分化（6-7 track）、AI Eng vs ML Eng 薪资（AI Eng 中位 base $145k / ML Eng $165k，May 2026）：[InterviewStack — AI vs ML Engineer 2026](https://www.interviewstack.io/blog/ai-engineer-vs-machine-learning-engineer-2026)、[Acceler8 — In-Demand ML Roles 2026](https://www.acceler8talent.com/resources/blog/the-most-in-demand-machine-learning-roles-in-2026--managing-the-ai-talent-frontier/)、[ivanturkovic — AI Job Titles 2026](https://www.ivanturkovic.com/2026/04/24/ai-job-titles-2026-naming-chaos/)
- 2026 必备技能栈（LangChain/LlamaIndex/HF + Pinecone/Weaviate/Chroma/Milvus + MLflow/W&B + vLLM/TGI/TensorRT + Docker/K8s）：[AY Automate — AI Engineer Skills 2026](https://www.ayautomate.com/blog/ai-engineer-skills-2026)、[Indeed — AI Engineer Job Description 2026](https://www.indeed.com/hire/job-description/ai-engineer)
- LLM/RAG 薪资区间 $150K-$250K+：[Udemy — LLM Engineering Master](https://www.udemy.com/course/llm-engineering-master-ai-and-large-language-models/)（课程页引用市场区间）

> 注：薪资为美国市场中位/区间，**不代表 entry-level / OPT 求职者可得**。签证相关以 USCIS / DSO / 移民律师为准。
