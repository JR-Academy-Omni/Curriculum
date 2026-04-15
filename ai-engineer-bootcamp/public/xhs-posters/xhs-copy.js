/* 右侧文案面板 — 小红书 / 朋友圈 / 社群 三 Tab 切换 */
(function () {
  const XHS_COPY = {
    p1: {
      title: 'AI 都这么卷了 还在只会调 API 拼 Prompt？',
      body: `不知道姐妹们有没有感觉，今年 AI 工程师的岗位要求已经完全不是去年那一套了。\n还停留在写 Prompt 和调 ChatGPT 的话，很多 JD 已经直接接不上。\n\n花了挺久时间扒了 15 份一线公司 2026 的 JD，发现现在真正在招的是：能搭生产级 RAG、会用 Agent SDK、看得懂 MCP 的人。\n\n🌿 这 12 周课刚好把我从"只会调模型"带到能做 Multi-Agent。`,
      tags: '#AI工程师 #AI学习 #AI转行 #程序员 #Agent开发 #RAG #小白学AI #技术成长',
      wechat: [
        '2026 的 AI Engineer 岗位已经不卷 Prompt 了 — 卷 Agent / MCP / Eval。新课上线，12 周把基础补回来。',
        '扒了 15 份一线公司 JD，写 Prompt 已经不够看了。新一期 AI Engineer Bootcamp 来了，主页见 👀',
        '还在只会调 API？看看 2026 的 JD 都在要什么。课程大纲主页 🌿'
      ],
      community: [
        '【第五期 AI Engineer Bootcamp 开放咨询】\n12 周从"只会调 API"到"能做 Multi-Agent"\n183 节课 + 68 个 Lab + 7 个简历项目\n主页查看课程大纲 🌿',
        '姐妹们，2026 的 AI Engineer 岗位要求大换代了：Agent SDK、MCP、GraphRAG、Eval 全是入门线。想系统补的看看新一期课 👀'
      ]
    },
    p2: {
      title: '身边的 AI 工程师都在做这些事｜差距真的拉开了',
      body: `年初还在跟同事拼 Prompt 的时候，没想到半年不到差距会拉这么大。\n\n❌ 我还在：字符串拼 Prompt、复制 ChatGPT 答案、RAG 等于"搜索"\n✅ 他们已经：GraphRAG、Claude Agent SDK、MCP Server、QLoRA 微调\n\n这不是"会不会"的问题，是方向完全不一样。\n后来补了一下才发现，2026 的岗位基线已经整体右移了 🥲`,
      tags: '#AI工程师 #技术选型 #AI学习路线 #Agent #RAG #程序员日常 #转行AI',
      wechat: [
        '2026 的 AI Engineer 岗位基线右移了：GraphRAG / Agent SDK / MCP / QLoRA 成了入门要求 🥲',
        '同行已经在搭 GraphRAG + Agent SDK 了，你还在拼 Prompt？差距不是能力，是方向。',
        '一张图看懂 AI 工程师这半年的代际差距 👇'
      ],
      community: [
        '【差距对比】\n❌ 还在：拼 Prompt、复制答案、RAG=搜索\n✅ 他们：GraphRAG、Agent SDK、MCP Server、QLoRA\n\n方向不对，努力白费。新一期课程大纲看主页。',
        '同事群讨论一下：今年你们组做到哪一步了？\n我们这边 GraphRAG + Multi-Agent 已经上生产了 💬'
      ]
    },
    p3: {
      title: '同事群里都在聊 GraphRAG 和 Eval 这是什么…',
      body: `真的是一个普通的周二下午，平台组突然在群里聊 GraphRAG 怎么调、Eval 怎么做回归。\n\n作为后端 small potato 的我：... 什么是 Eval？\n隔壁阿哲："兄弟你得补了，现在 AI Engineer JD 基本都考这个。"\n\n那一刻突然意识到，技术栈不是变了，是彻底换代了。\n发小红书记录一下补课过程 🌱`,
      tags: '#AI学习日记 #程序员成长 #技术焦虑 #GraphRAG #Eval #AI工程师',
      wechat: [
        '同事群突然开始聊 GraphRAG 和 Eval — 你跟得上吗？🌱',
        '"你得补一下了兄弟" — 这句话最近听到好几次了 😅',
        '下午茶时间的 AI 焦虑时刻：Eval 是什么 😂'
      ],
      community: [
        '【自测一下】\n同事群聊到下面这些你能接上话吗？\n→ GraphRAG 怎么调\n→ Eval 怎么做回归\n→ Agent SDK 三家对比\n接不上的话，新一期课刚好补 🌱',
        '说个真事：今天后端组群里聊 GraphRAG，全组只有 1 个人能接话。\n2026 的 AI 技术栈真的换代了 💬'
      ]
    },
    p4: {
      title: '毕业那天 你会"真的会"这四件事',
      body: `报课之前最怕的就是：学完一堆 buzzword，真让做还是不会。\n\n这次 12 周下来真的落地的四件事：\n1️⃣ 搭生产级 RAG — 向量库、GraphRAG、混合检索、Eval 全链路\n2️⃣ 吃透 3 大 Agent SDK — OpenAI / Claude / Google 亲手做对比\n3️⃣ Multi-Agent + MCP 编排 — LangGraph、A2A、自建 Harness\n4️⃣ Fine-Tune + AI Eval — QLoRA 跑通、Eval 可量化迭代\n\n每一项都有配套项目可以直接写进简历 📌`,
      tags: '#AI工程师 #AI学习 #Agent #RAG #FineTuning #技能提升 #程序员',
      wechat: [
        '12 周 AI Engineer Bootcamp 的毕业交付：生产级 RAG + 3 大 Agent SDK + Multi-Agent + Fine-Tune。每项都有项目。',
        '学完能真的做四件事：生产级 RAG / 三大 Agent SDK / Multi-Agent+MCP / QLoRA 微调 📌',
        '别再学 buzzword 了，12 周把这 4 件事跑通一遍 👇'
      ],
      community: [
        '【课程毕业交付】\n✅ 搭生产级 RAG（含 GraphRAG + Eval）\n✅ 吃透 3 大 Agent SDK 对比\n✅ Multi-Agent + MCP + Harness\n✅ QLoRA 微调 + Eval Pipeline\n每项都有项目写进简历 📌',
        '报名前最担心"学完 buzzword 还是不会做"。\n新一期 4 大核心能力全部落地到项目，7 个项目都能写简历 💪'
      ]
    },
    p5: {
      title: '12 周 10 个 Phase｜每周都有新武器',
      body: `之前看过不少 AI 课大纲都是 4-6 个 phase 草草带过，这次第一次看到把 Agent 单独拆成 5 个 phase 的。\n\n📍 P1 Foundation → P2 Context Engineering → P3 RAG\n📍 P4 Capability → P5 Agent Core → P6 Multi-Agent\n📍 P7 Memory → P8 Harness → P9 Model Layer → P10 Eval\n\n每个 Phase 都是一个独立能力，不再是"讲一下就过"。\nMemory 和 Harness 这两个 phase 市面真的很少有课系统教。`,
      tags: '#AI工程师 #课程大纲 #Agent架构 #RAG #学习路径 #Memory #Harness',
      wechat: [
        '12 周 10 个 Phase，Agent 拆成 5 个独立模块，Memory + Harness 单独讲 🔥',
        'Foundation → Context → RAG → Capability → Agent → Multi-Agent → Memory → Harness → Model → Eval。新一期完整版。',
        'AI Engineer 课程大纲升级，10 个 Phase 全景图看这里 📍'
      ],
      community: [
        '【10 个 Phase 全景】\nP1 Foundation · P2 Context · P3 RAG\nP4 Capability · P5 Agent · P6 Multi-Agent\nP7 Memory · P8 Harness · P9 Model · P10 Eval\n每周都有新武器 🔥',
        '比较少见把 Agent 拆成 5 个 Phase 讲的课，Memory 和 Harness 独立成块。新一期大纲可以直接主页看 📍'
      ]
    },
    p6: {
      title: '12 周你会真实用到的主流工具｜2026 版',
      body: `有时候比起"学什么"，更焦虑的是"工具又更新了"。\n\n这次盘了一下 12 周课里真实会动手的工具栈：\n🔧 Claude Agent SDK / OpenAI / Gemini\n🔧 LangChain / LangGraph / Pinecone\n🔧 Neo4j GraphRAG / MCP Server / A2A\n🔧 QLoRA / Unsloth / Mem0 / Guardrails AI\n\n不是点名式介绍，每一个都有对应 Lab 或项目在用 🛠️`,
      tags: '#AI工具 #AI工程师 #LangChain #MCP #Agent #技术栈 #程序员装备',
      wechat: [
        '2026 AI Engineer 真实技术栈：Claude/OpenAI SDK + LangGraph + Pinecone + MCP + QLoRA。12 周课全部上手 🛠️',
        '15+ 主流工具盘点，每一个都有对应 Lab，不是 PPT 介绍。',
        '工具学得再多不动手还是零 — 这次每个工具都配 Lab 🔧'
      ],
      community: [
        '【12 周真实用到的工具】\nAgent：Claude SDK / OpenAI / Gemini\nRAG：LangChain / Pinecone / Neo4j\n协议：MCP / A2A\n微调：QLoRA / Unsloth / Mem0\n每个都有 Lab 🛠️',
        '老问题：AI 工具太多学哪个？\n这次课按"会 5 个精通 3 个"的原则整理，减少选择困难 👌'
      ]
    },
    p7: {
      title: '才学到 Phase 5 就有人开始接项目了',
      body: `学员群里蛮多真实反馈让我比较意外：\n\n💬"Phase 3 做完第一个 RAG，公司内部文档搜索就直接用上了"\n💬"亲手跑通 Agent SDK 那一刻突然觉得：就这？我也能做"\n💬"P3 孵化做的 Multi-Agent 项目直接写进简历，面试聊得挺开心"\n\n不是硬凹的数据，就是蛮普通的工程师日常。`,
      tags: '#AI工程师 #学员反馈 #AI转行 #项目实战 #面试经验 #程序员成长',
      wechat: [
        '学员群的真实反馈：Phase 3 做完就有人把 RAG 用到公司内部文档搜索了 💪',
        '"就这？我也能做"— 这大概是上课最想听到的一句反馈 😂',
        '毕业 3 个月，学员写进简历的 Multi-Agent 项目真的让面试官聊到忘了时间。'
      ],
      community: [
        '【学员反馈】\n"Phase 3 RAG 做完，公司内部搜索直接用上了"\n"跑通 Agent SDK 那刻：就这？我也能做"\n"毕业 3 个月，Multi-Agent 项目让面试官聊很久"\n💬 平常人的日常',
        '课程最有意思的一点：学到一半就开始产生真实项目价值了。\n不用等毕业才能"用得上" 💪'
      ]
    },
    p8: {
      title: '不是只给 12 周课 是一整套求职武器库',
      body: `看了一圈同类课，很多只给录播。\n\n这次买到手的其实是：\n📘 183 节课（直播 + 录播 + Lab + 自学）\n🧪 68 个浏览器互动 Lab\n🧩 10 个 Phase 拆到每个具体能力\n📂 7 个能放简历的实战项目\n\n+ 12 周 P3 真实企业项目\n+ AI Tutor 中英双语 24h\n+ Meta / MS / Amazon 导师 Review\n+ 校友内推群 + Demo Day`,
      tags: '#AI工程师 #Bootcamp #转行 #AI学习 #简历项目 #求职 #程序员',
      wechat: [
        '183 节课 + 68 个互动 Lab + 7 个简历项目 + 12 周 P3 孵化，一次搞定 AI Engineer 转行 💼',
        '这不是 12 周课，是一整套求职包：课程 + 项目 + 内推 + Demo Day。',
        '别再只看录播了 — 68 个 Lab + Meta/MS/Amazon 导师 Review 才是关键。'
      ],
      community: [
        '【你买到的是什么】\n📘 183 节课\n🧪 68 个互动 Lab\n📂 7 个简历项目\n👥 12 周 P3 真实企业项目\n🤝 校友内推 + Demo Day\n💬 AI Tutor 24h + 一线导师 Review',
        '同类课对比了一圈，这期最值的不是课时 — 是 P3 真实企业项目 + 内推群这一整套后端支持 💼'
      ]
    },
    p9: {
      title: '如果今年只做一件认真的 AI 投资',
      body: `不知道大家有没有感觉，AI 的学习窗口期在缩。\n去年随便学点就能跟上，今年已经开始卷 Agent、Memory、Harness 了。\n\n🌱 如果今年只打算认真做一件 AI 投资，推荐看看这个课。\n可以主页搜"匠人 AI · AI Engineer"，课程大纲和项目案例都公开。\n\n不着急报，先看看自己方向对不对 ☕`,
      tags: '#AI学习 #AI工程师 #转行 #程序员成长 #2026 #AI课程',
      wechat: [
        '2026 的 AI 学习窗口期在缩 — 今年卷的是 Agent / Memory / Harness，不是 Prompt 🌱',
        '想认真学 AI 的话，课程大纲和项目案例都公开，可以先看看方向对不对。',
        '新一期 AI Engineer Bootcamp 开放咨询，主页搜"匠人 AI · AI Engineer" ☕'
      ],
      community: [
        '【咨询窗口开放】\n新一期 AI Engineer Bootcamp 大纲、项目案例、导师背景全部公开。\n主页"匠人 AI · AI Engineer"可以直接查看 ☕\n不着急报，先看看方向对不对。',
        '不卖焦虑 — 但 AI 的学习窗口期确实在缩。\n去年随便学点能跟上，今年已经开始要 Agent + Memory + Harness 了 🌱'
      ]
    },
    p10: {
      title: '第五期大重构｜96 → 183 节 新增 68 个 Lab',
      body: `之前第四期的课体量就很够了，没想到第五期直接翻 1.8 倍。\n\n📊 课时：96 → 183（+87）\n📊 Phase：4 → 10（重构）\n📊 Lab：0 → 68（全新互动）\n📊 Agent：从 1 个 phase 拆到 5 个 phase\n\nMemory 和 Harness 两个独立模块真的是业内头一个这么拆的 🔥`,
      tags: '#AI工程师 #课程升级 #Bootcamp #Agent #AI学习 #2026',
      wechat: [
        '第五期 AI Engineer Bootcamp 大重构：课时 96→183，新增 68 个 Lab，Agent 拆成 5 个 phase 🔥',
        'Memory + Harness 两个独立模块，业内还没见过第二家这么讲的。',
        '课程体量翻 1.8 倍，新一期大纲看这里 👇'
      ],
      community: [
        '【第五期大重构】\n📊 课时：96 → 183\n📊 Phase：4 → 10\n📊 Lab：0 → 68\n📊 Agent：1 phase → 5 phase\n体量 1.8× + 全新 Memory / Harness 模块 🔥',
        '之前第四期已经够大了，没想到第五期还能翻 1.8 倍。\n新版大纲主页直接能看。'
      ]
    },
    p11: {
      title: '第四期 vs 第五期｜学完之后具体多会什么',
      body: `报课最关心的不是课表，是"学完我到底会什么"。\n\n对比了新旧两期：\n🔸 Lab：0 → 68 个\n🔸 Agent：25 节揉一起 → 5 个 phase 41 节系统拆\n🔸 Harness：无 → Claude Code 架构深拆\n🔸 Memory：无 → Mem0 + Graph Memory\n🔸 Eval：1 课 → P10 独立 17 节\n🔸 毕业水平：能搭 RAG → 独立交付生产级 Agent System`,
      tags: '#AI工程师 #课程对比 #学习效果 #Agent #Harness #Memory',
      wechat: [
        '新旧两期对比：毕业水平从"能搭 RAG"升级到"独立交付生产级 Agent System" 💪',
        'Lab 0→68 · Agent 1 phase→5 phase · Harness & Memory 新增独立模块。',
        '报课前先看这张对比：新版具体多教什么，新版多会做什么。'
      ],
      community: [
        '【新旧对比】\nLab：0 → 68 个\nAgent：1 phase 揉一起 → 5 phase 系统拆\nHarness / Memory：无 → 独立模块\nEval：1 课 → 17 节\n毕业：会搭 RAG → 交付 Agent System 💪',
        '老学员想问升级吗？新期对旧期学员有无折扣政策 — 主页咨询。'
      ]
    },
    p12: {
      title: 'RAG 独立一个 Phase 45 节｜不只是 demo',
      body: `市面上讲 RAG 的课很多，但大部分停在"跑通一个 demo"。\n\n这次 P3 RAG 整整 45 节，做了这些：\n🔍 向量检索 — Embedding 原理、Pinecone/Chroma 选型\n🕸️ GraphRAG — Neo4j 知识图谱 + 实体关系\n⛓️ LangChain — Core + LCEL + LangSmith 可观测\n📊 RAG Eval — RAGAS + Langfuse + 自定义 Metrics\n\n3 个递进项目：Scratch → Production → GraphRAG`,
      tags: '#RAG #GraphRAG #LangChain #AI工程师 #RAG优化 #AI学习',
      wechat: [
        'P3 RAG 整整 45 节，从 Scratch 一路做到 GraphRAG 生产部署 🔍',
        '讲 RAG 的课很多，做到 GraphRAG + RAGAS + Langfuse 全链路的不多见。',
        '3 个递进 RAG 项目：纯 Python → Production → GraphRAG，都能写进简历 📄'
      ],
      community: [
        '【P3 · RAG 45 节】\n🔍 向量检索 + Pinecone/Chroma 选型\n🕸️ GraphRAG + Neo4j 图谱\n⛓️ LangChain LCEL + LangSmith\n📊 RAGAS + Langfuse 评估\n3 个递进项目 📄',
        '做过 RAG Demo 的人多 — 做过 Production + GraphRAG + Eval 全链路的少。\n这次 P3 整整 45 节帮你补齐。'
      ]
    },
    p13: {
      title: '别的课讲 Agent 一节 我们拆成 5 个 Phase',
      body: `2026 的 Agent 岗位要求已经不是"能跑 Tool Use"了。\n\n这次整整拆了 5 个 Phase：\n🧱 P4 Capability — Function Calling、MCP、Computer Use\n🧠 P5 Agent Core — ReAct、3 大 SDK 对比、Agentic RAG\n🌐 P6 Multi-Agent — LangGraph、A2A、Agent Ops\n💾 P7 Memory — STM/LTM、Mem0、跨会话记忆\n🛠️ P8 Harness — Claude Code 架构、Hook、Skills\n\n每一层都有独立项目 🎯`,
      tags: '#Agent #AIAgent #MultiAgent #AI工程师 #LangGraph #MCP #架构',
      wechat: [
        '别的课讲 Agent 一节带过，我们拆成 5 个 Phase 讲 🎯',
        'Capability / Agent Core / Multi-Agent / Memory / Harness — 这才是 2026 Agent 工程师的完整地图。',
        'Agent 系统工程化，每一层都有独立项目，简历上直接成五段经验。'
      ],
      community: [
        '【Agent 五层拆解】\n🧱 P4 Capability — Tool Use / MCP\n🧠 P5 Agent Core — ReAct / 3 SDK\n🌐 P6 Multi-Agent — LangGraph / A2A\n💾 P7 Memory — Mem0 / 跨会话\n🛠️ P8 Harness — Claude Code 架构',
        '别人：Agent 1 节课讲完。\n我们：拆成 5 个 Phase 讲。\n\n工程化程度决定简历厚度 🎯'
      ]
    },
    p14: {
      title: '这 4 类人学完回报最高',
      body: `经常被问"我这个背景适不适合学 AI"。\n\n客观说，这 4 类人回报最明显：\n👨‍💻 软件工程师 — 用 Agent SDK 从写 CRUD 转型 AI Engineer\n📊 数据 / ML 工程师 — 补 Agent 工程化和 Context Engineering\n☁️ DevOps / 云工程师 — 转型 AI Infra，掌握 Eval 流水线\n🚀 AI 创业者 / SaaS 团队 — 快速搭 Multi-Agent 原型\n\n非技术背景需要先补 Python + API`,
      tags: '#AI工程师 #转行 #程序员转AI #AIInfra #AI创业 #职业规划',
      wechat: [
        '这 4 类人学 AI Engineer 回报最高：软件/数据/DevOps/创业者 💼',
        '"我这个背景适合学 AI 吗？"— 软件工程师和 DevOps 回报最明显。',
        '写 CRUD 的软件工程师转 AI Engineer，这门课就是为你准备的。'
      ],
      community: [
        '【目标人群】\n👨‍💻 软件工程师（写 CRUD → AI Engineer）\n📊 数据 / ML 工程师（补 Agent 工程化）\n☁️ DevOps（转 AI Infra）\n🚀 AI 创业者（Multi-Agent 原型）',
        '【先修】\n需要：Python + API 开发 + Git + 云基础\n不需要：ML 背景、ML 论文阅读\n课程从 Transformer 原理开始补 ✅'
      ]
    },
    p15: {
      title: '不只是看 每个知识点都有互动 Lab',
      body: `买课最怕的是买回来只能被动听。\n\n这次 68 个浏览器内互动 Lab 分布：\n🟣 Prompt Lab × 15（CoT、System Prompt、JSON）\n🟢 Python Lab × 11（基础 + OpenAI SDK）\n🔵 LLM Lab × 15（API、调优、RAG Eval、Agent）\n🟠 AWS Lab × 10（EC2、IAM、Bedrock）\n⚫ Git Lab × 5（协作全流程）\n🔴 前端 Lab × 12（HTML → React）\n\n每个 Lab 都是独立 Lesson 不是附属品 🧪`,
      tags: '#AI学习 #互动Lab #Prompt #Python #AI工程师 #编程学习',
      wechat: [
        '68 个浏览器内互动 Lab：Prompt 15 · Python 11 · LLM 15 · AWS 10 · Git 5 · 前端 12 🧪',
        '不是听课型课程，每个 Lab 都是独立 Lesson，动手做到会。',
        'AI Engineer 最完整的互动练习体系，全部浏览器跑不用本地环境。'
      ],
      community: [
        '【68 个互动 Lab 分布】\n🟣 Prompt × 15\n🟢 Python × 11\n🔵 LLM × 15\n🟠 AWS × 10\n⚫ Git × 5\n🔴 前端 × 12\n全部浏览器跑 🧪',
        '买课最怕被动听课。新一期每个知识点都配 Lab，独立 Lesson 可追踪进度 ✅'
      ]
    },
    p16: {
      title: '从零到拿 Offer｜完整 24 周时间线',
      body: `看的时候觉得"12 周太短"，看完时间线才发现后面还有 12 周 P3。\n\n📅 W1-3 Foundation + Context 打底\n📅 W4-7 RAG 全链路 + 3 个项目\n📅 W8-10 Agent + Multi-Agent + Memory + Harness\n📅 W11-12 Model Layer + Eval + 毕业\n📅 W13-24 P3 真实企业项目 + 简历 + 面试 + 内推\n\n求职闭环到 Offer，不是"学完就结束" 🎯`,
      tags: '#AI工程师 #Bootcamp #求职路径 #AI转行 #简历优化 #面试',
      wechat: [
        '完整 24 周闭环：12 周课 + 12 周 P3 真实项目 → 简历 → 面试 → 内推 → Offer 🎯',
        '不是"学完就结束"，课后还有 12 周陪你到拿 Offer。',
        '从零到 AI Engineer Offer 的完整时间线，一张图看懂 📅'
      ],
      community: [
        '【24 周完整路径】\nW1-3 Foundation + Context\nW4-7 RAG 全链路 + 3 个项目\nW8-10 Agent + Memory + Harness\nW11-12 模型层 + 毕业\nW13-24 P3 项目 + 求职 → Offer 🎯',
        '看课别只看 12 周 — 后面还有 12 周 P3 孵化，陪你到拿 Offer。\n完整闭环在主页。'
      ]
    },
    p17: {
      title: '不是跑 demo｜7 个能放简历的项目',
      body: `简历最吃亏的就是"项目一栏全是教程复制"。\n\n这次 7 个项目每个都能独立拿出来讲：\n01 ISA 贯穿项目（从 Prompt 升级到生产）\n02 Context-Driven App\n03 RAG from Scratch（纯 Python）\n04 Production RAG + GraphRAG\n05 Multi-Agent RAG（3 SDK 对比）\n06 Production Agent System（MCP + Memory + A2A）\n07 Fine-Tune + Eval Pipeline（QLoRA）\n\n每个都能写成 STAR 故事 📄`,
      tags: '#简历项目 #AI工程师 #AI项目 #RAG #Agent #求职 #面试',
      wechat: [
        '简历项目栏最怕写不出东西 — 这次 7 个项目每个都能拿出来讲 📄',
        '从 RAG from Scratch 到 Multi-Agent + MCP + Memory，7 个项目覆盖 AI Engineer 全链路。',
        '不是 Notebook demo，是能部署能写 STAR 故事的真项目。'
      ],
      community: [
        '【7 个简历项目】\n01 ISA 贯穿项目\n02 Context-Driven App\n03 RAG from Scratch\n04 Production RAG + GraphRAG\n05 Multi-Agent RAG\n06 Production Agent System\n07 Fine-Tune + Eval 📄',
        '简历项目栏写满 3 个以上就能打动面试官。\n这次 7 个项目全部能写成 STAR 故事 💬'
      ]
    },
    p18: {
      title: '别人在听课 你在动手做｜翻转课堂',
      body: `传统模式：老师讲 2 小时概念 → 课上 demo → 课后卡住没人问。\n\n这次改成：\n① 课前 Lab 自学基础\n② 直播课专门做项目\n③ AI Tutor 24h 答疑\n④ 导师 Code Review\n\n结果：\n📉 直播时长 -40%\n📈 实操时间 +300%\n🧪 68 个互动 Lab`,
      tags: '#学习方法 #翻转课堂 #AI学习 #程序员成长 #Bootcamp',
      wechat: [
        '翻转课堂：课前 Lab → 直播做项目 → AI Tutor 答疑。实操时间 +300%，直播时长 -40% 📈',
        '买课最大的浪费就是听完不会做 — 这次把听课和练习倒过来。',
        '别再被动听课了 — AI Tutor 24h 答疑 + 导师 Code Review 才是真练习。'
      ],
      community: [
        '【翻转课堂模式】\n① 课前 Lab 自学\n② 直播课做项目\n③ AI Tutor 24h 答疑\n④ 导师 Code Review\n\n直播时长 -40%，实操时间 +300% 📈',
        '买了课最怕被动听课 — 这次改翻转：听课变自学，直播变实战。'
      ]
    },
    p19: {
      title: '课程结束 ≠ 学完了｜还有 12 周真实项目',
      body: `大部分 Bootcamp 到毕业就结束，这里后面还有 12 周 P3 职业孵化。\n\n👥 3-5 人团队用课上技术栈\n🏃 4 个 Sprint（Planning/Standup/Review/Retro）\n👨‍💻 Meta / MS / Amazon 导师 Code Review\n🎤 Demo Day 面向招聘企业展示\n📝 Case Study + STAR + 简历 bullet\n🤝 校友内推群 + 面试直到 Offer`,
      tags: '#AI工程师 #职业孵化 #求职 #AI转行 #简历项目 #内推',
      wechat: [
        '大部分 Bootcamp 毕业就结束 — 这里后面还有 12 周 P3 真实企业项目 + 求职全流程 💼',
        '3-5 人团队 + 4 个 Sprint + Demo Day + 内推，一条龙到 Offer。',
        '简历最怕写不出真项目 — P3 12 周帮你把项目做完并讲好 🎤'
      ],
      community: [
        '【P3 职业孵化】\n👥 3-5 人团队\n🏃 4 个 Sprint（真 Agile 流程）\n👨‍💻 Meta/MS/Amazon 导师 Review\n🎤 Demo Day\n🤝 内推群 + 面试到 Offer 💼',
        '这一套不是模拟项目 — 是真实企业项目。\n简历上最有说服力的一行就是 P3 🎤'
      ]
    },
    p20: {
      title: '2026 AI Engineer 要会的新技术栈',
      body: `扒了 15 份 2026 JD，发现岗位基线已经整体右移：\n\n📍 Prompt Eng → Context Engineering\n📍 向量检索 → + GraphRAG 混合检索\n📍 LangChain Agent → 3 大 Agent SDK 对比\n📍 Buffer Memory → Mem0 三层 + Graph\n📍 无 → MCP + A2A 双协议\n📍 无 → Harness（Claude Code 架构）\n📍 RAGAS 1 课 → Eval Eng 整周 + Red-team\n📍 PEFT + QLoRA → + Unsloth + LLaMA-Factory`,
      tags: '#AI工程师 #技术栈 #2026 #ContextEngineering #Agent #Harness',
      wechat: [
        '2026 AI Engineer 岗位基线右移了：Context Eng + GraphRAG + MCP + Harness + Eval 全成入门要求 🔄',
        '不是名词更新，是标准切了。看看你还差多少 👇',
        'Prompt Eng → Context Eng · 向量检索 → GraphRAG · 1 个 SDK → 3 个 SDK。新标准。'
      ],
      community: [
        '【2026 AI Engineer 新标准】\nPrompt Eng → Context Engineering\n向量检索 → + GraphRAG\n1 SDK → 3 SDK 对比\nBuffer Memory → Mem0 三层\n无 → MCP + A2A\n无 → Harness',
        '技术栈不是迭代，是换代。\n2026 岗位要求基线已经整体右移 🔄'
      ]
    },
    p21: {
      title: '报名前最常被问的 5 个问题',
      body: `整理了咨询最多的 5 个问题，直接给短答案：\n\nQ1 需要什么基础？Python + API 开发就够\nQ2 为什么学 3 个 Agent SDK？面试会问对比\nQ3 和其他 AI 课区别？生产部署全链路\nQ4 需要 GPU 吗？P1-8 用 API 就行\nQ5 能做什么岗位？AI / Agent / LLM / Eval Engineer`,
      tags: '#AI工程师 #Bootcamp #报名咨询 #AI学习 #转行',
      wechat: [
        '报名前最常问的 5 个问题：基础、SDK 选择、和别的课区别、GPU、岗位 — 直接给答案。',
        '不需要 ML 背景，Python + API 开发基础就能上。GPU 只有 Fine-Tune 部分用 Colab 免费版。',
        '想报 AI Engineer Bootcamp 又犹豫？这 5 个问题看完应该能决定 👌'
      ],
      community: [
        '【FAQ 快答】\nQ 基础要求？A Python + API\nQ 需要 GPU？A 只有 P9 用 Colab 免费版\nQ 和别的课区别？A 生产全链路\nQ 学完做什么？A AI / Agent / LLM / Eval Eng',
        '群里高频被问的 5 个问题整理好了 — 图里直接能看，省点咨询时间 👌'
      ]
    },
    p22: {
      title: '一个项目跟你升级 5 次｜ISA 贯穿全程',
      body: `最喜欢这次课程设计的一点：有个项目从 Day 1 跟到毕业。\n\n🌱 ISA（智能学习助手）的 5 次升级：\nv1 Prompt 版（P1-2）→ Context Engineering\nv2 RAG 版（P3）→ 接文档检索\nv3 Agent 版（P4-5）→ Function Calling\nv4 Multi-Agent 版（P6-7）→ 协作 + Memory\nv5 生产版（P8-10）→ Harness + Fine-Tune + Eval`,
      tags: '#Capstone项目 #AI工程师 #项目成长 #Agent #RAG #学习项目',
      wechat: [
        'ISA Capstone：一个项目从 Day 1 跟到毕业，升级 5 次 🧬',
        'Prompt → RAG → Agent → Multi-Agent → 生产版 — 这就是成长轨迹本迹。',
        '简历上最会讲的项目大概就是 ISA，从 v1 到 v5 每一版都有成长故事。'
      ],
      community: [
        '【ISA Capstone】\nv1 Prompt 版 → v2 RAG 版 → v3 Agent 版 → v4 Multi-Agent → v5 生产版\n\n一个项目跟 5 次升级，简历讲成长故事 🧬',
        '最有意思的课程设计：Day 1 建的项目，毕业时已经升级到生产版。\n简历写起来有层次。'
      ]
    },
    p23: {
      title: '别的课不教 我们单独开了 2 个 Phase',
      body: `Memory System 和 Harness Engineering 这两块，找遍国内外课程资源几乎没有人系统讲。\n\n🧠 Memory System\n— Agent 从"玩具"变"产品"的关键\n— STM / LTM / Mem0 / Graph Memory / 跨会话\n\n🛠️ Harness Engineering\n— Claude Code 怎么调度几十个工具不出错？\n— Hook / Tool Loop / Skills / ADLC / SubAgent\n\n2026 技术面反复问到 但市面没课教 — 因为太新了 🔥`,
      tags: '#Agent #Memory #Harness #ClaudeCode #AI工程师 #2026',
      wechat: [
        'Memory System + Harness Engineering — 2026 最被问到但最少有课教的两块 🔥',
        'Claude Code 怎么调度几十个工具不出错？答案在 Harness 这个 Phase。',
        'Agent 从"玩具"变"产品"的关键就是 Memory + Harness — 我们独立讲。'
      ],
      community: [
        '【独家模块】\n🧠 Memory System（Phase 7）\nSTM / LTM / Mem0 / Graph Memory\n\n🛠️ Harness Engineering（Phase 8）\nClaude Code 架构 / Hook / Skills / ADLC\n\n市面几乎找不到第二家系统讲 🔥',
        '2026 技术面频繁被问的两块 — Memory 和 Harness。\n市面课程资源少，因为太新了。\n我们独立成 Phase 讲。'
      ]
    },
    p24: {
      title: '扒了 15 份真实 JD｜我们覆盖了多少',
      body: `报课之前我做的第一件事：把 15 份头部公司的 AI Engineer JD 扒了一遍。\n\n📊 覆盖数据：\n• Agent 系统构建（9/10 JD）— 95%\n• Context Engineering（8/10 JD）— 90%\n• RAG + GraphRAG（9/10 JD）— 95%\n• LLM Ops 可观测（7/10 JD）— 90%\n• AI Eval & Safety（8/10 JD）— 90%\n• Fine-Tune + Open-Weight（6/10 JD）— 90%\n\nJD 来源：OpenAI / Anthropic / Google / Meta / Cursor 等`,
      tags: '#AI工程师 #JD分析 #求职 #AI技能 #面试准备',
      wechat: [
        '扒了 OpenAI / Anthropic / Google / Meta / Cursor 等 15 份真实 JD — 课程平均覆盖率 92% 📊',
        '报课之前做的第一件事：逐条对照 JD — 6 大核心能力都在 90%+。',
        '看 JD 挑课程 — 这是我这半年最推荐的方法 ✅'
      ],
      community: [
        '【JD 对照】\nAgent 构建 — 95%\nContext Eng — 90%\nRAG + GraphRAG — 95%\nLLM Ops — 90%\nEval & Safety — 90%\nFine-Tune — 90%\n\n15 份 JD 平均覆盖 92% 📊',
        '报课之前先扒 JD — 这半年最推荐的方法。\n我们课程大纲直接按 JD 反推设计 ✅'
      ]
    },
    p25: {
      title: 'AI Engineer 现在到底能赚多少钱',
      body: `整理了 levels.fyi + Glassdoor + LinkedIn 2026 的数据：\n\n💰 Junior（0-2 年）：$100K - $150K\n💰 Mid（2-5 年）：$150K - $220K\n💰 Senior（5+ 年）：$220K - $350K+\n\n部分公司薪资区间：\n• OpenAI / Anthropic：$180K - $350K\n• Google / Meta：$170K - $330K\n• Cursor / Stripe：$160K - $320K\n\n数据是给自己定位用，不是保证拿到 🙏`,
      tags: '#AI工程师 #薪资 #levelsfyi #求职 #职业规划',
      wechat: [
        'AI Engineer 2026 薪资图：Junior $100-150K · Mid $150-220K · Senior $220-350K+ 💰',
        'OpenAI / Anthropic $180-350K，Google / Meta $170-330K — 数据给自己定位用。',
        '转 AI Engineer 到底值不值 — 薪资数据直接告诉你 📊'
      ],
      community: [
        '【2026 AI Engineer 薪资】\nJunior $100-150K\nMid $150-220K\nSenior $220-350K+\n\nOpenAI / Anthropic $180-350K\nGoogle / Meta $170-330K\n数据自定位用 🙏',
        '转 AI Engineer 值不值？\n看数据 — levels.fyi + Glassdoor + LinkedIn 2026 都能佐证 📊'
      ]
    }
  };

  function injectPanels() {
    document.querySelectorAll('.poster-frame').forEach(frame => {
      if (frame.querySelector('.copy-panel')) return;
      const data = XHS_COPY[frame.id];
      if (!data) return;

      // Wrap existing kids in .poster-main
      const main = document.createElement('div');
      main.className = 'poster-main';
      while (frame.firstChild) main.appendChild(frame.firstChild);
      frame.appendChild(main);

      // Build panel shell
      const panel = document.createElement('div');
      panel.className = 'copy-panel';

      const titleHead = document.createElement('div');
      titleHead.className = 'cp-title';
      titleHead.textContent = frame.id.toUpperCase() + ' · 文案素材';
      panel.appendChild(titleHead);

      // Tabs
      const tabs = document.createElement('div');
      tabs.className = 'cp-tabs';
      const tabDefs = [
        { key: 'xhs', label: '📕 小红书', color: '#ff2442' },
        { key: 'wx',  label: '💬 朋友圈', color: '#059669' },
        { key: 'qun', label: '👥 社群',   color: '#3b82f6' }
      ];
      const panes = {};
      tabDefs.forEach((t, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cp-tab' + (idx === 0 ? ' active' : '');
        btn.dataset.tab = t.key;
        btn.textContent = t.label;
        btn.style.setProperty('--tab-color', t.color);
        btn.addEventListener('click', () => {
          panel.querySelectorAll('.cp-tab').forEach(b => b.classList.toggle('active', b === btn));
          Object.entries(panes).forEach(([k, pane]) => pane.classList.toggle('hidden', k !== t.key));
        });
        tabs.appendChild(btn);
      });
      panel.appendChild(tabs);

      // Helper: section block
      const mkSection = (label, text, cls) => {
        const sec = document.createElement('div');
        sec.className = 'cp-section';
        const head = document.createElement('div');
        head.className = 'cp-label';
        head.textContent = label;
        const box = document.createElement('div');
        box.className = 'cp-box ' + (cls || '');
        box.textContent = text;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cp-btn';
        btn.textContent = '复制';
        btn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(text);
            btn.textContent = '✓ 已复制';
            btn.classList.add('copied');
            setTimeout(() => { btn.textContent = '复制'; btn.classList.remove('copied'); }, 1500);
          } catch (e) { alert('复制失败：' + e.message); }
        });
        sec.appendChild(head); sec.appendChild(box); sec.appendChild(btn);
        return sec;
      };

      // Pane: 小红书
      const xhsPane = document.createElement('div');
      xhsPane.className = 'cp-pane';
      xhsPane.appendChild(mkSection('📌 标题', data.title, ''));
      xhsPane.appendChild(mkSection('✍️ 正文', data.body, ''));
      xhsPane.appendChild(mkSection('# 话题标签', data.tags, 'hashtags'));

      const xhsAllSec = document.createElement('div');
      xhsAllSec.className = 'cp-section';
      const xhsAllBtn = document.createElement('button');
      xhsAllBtn.type = 'button';
      xhsAllBtn.className = 'cp-btn cp-all';
      xhsAllBtn.style.cssText = 'align-self:stretch;background:#ff2442;padding:9px 14px;font-size:12px';
      xhsAllBtn.textContent = '📕 复制小红书完整版（标题 + 正文 + 标签）';
      xhsAllBtn.addEventListener('click', async () => {
        const full = data.title + '\n\n' + data.body + '\n\n' + data.tags;
        try {
          await navigator.clipboard.writeText(full);
          xhsAllBtn.textContent = '✓ 已复制完整版';
          setTimeout(() => { xhsAllBtn.textContent = '📕 复制小红书完整版（标题 + 正文 + 标签）'; }, 1500);
        } catch (e) { alert('复制失败：' + e.message); }
      });
      xhsAllSec.appendChild(xhsAllBtn);
      xhsPane.appendChild(xhsAllSec);
      panes.xhs = xhsPane;
      panel.appendChild(xhsPane);

      // Pane: 朋友圈（短文案，不折叠）
      const wxPane = document.createElement('div');
      wxPane.className = 'cp-pane hidden';
      const wxTip = document.createElement('div');
      wxTip.className = 'cp-tip';
      wxTip.textContent = '💡 朋友圈 6 行内不折叠，建议控制在 90 字以内';
      wxPane.appendChild(wxTip);
      (data.wechat || []).forEach((txt, i) => {
        wxPane.appendChild(mkSection('版本 ' + (i + 1) + ' · ' + txt.length + ' 字', txt, 'wechat'));
      });
      panes.wx = wxPane;
      panel.appendChild(wxPane);

      // Pane: 社群（稍长，可排版）
      const qunPane = document.createElement('div');
      qunPane.className = 'cp-pane hidden';
      const qunTip = document.createElement('div');
      qunTip.className = 'cp-tip';
      qunTip.textContent = '💡 社群文案可稍长 / 带换行，直接群发';
      qunPane.appendChild(qunTip);
      (data.community || []).forEach((txt, i) => {
        qunPane.appendChild(mkSection('版本 ' + (i + 1) + ' · ' + txt.length + ' 字', txt, 'community'));
      });
      panes.qun = qunPane;
      panel.appendChild(qunPane);

      frame.appendChild(panel);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectPanels);
  } else {
    injectPanels();
  }
})();
