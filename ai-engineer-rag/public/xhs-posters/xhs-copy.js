/* AI Engineer 入门 · V2 · AI Tutor · $299 — 右侧文案面板 · 小红书 / 朋友圈 / 社群 Tab 切换 */
(function () {
  const XHS_COPY = {
    p1: { title: '写了 5 年后端 今年开始上 LLM', body: `坐标一线后端工程师 💙\n\n写了 5 年 CRUD 和微服务，今年老板突然说要上 RAG，才发现自己除了调 OpenAI API 啥都不懂。\n\n找了一圈 $2-3K 的课都挺贵，匠人 AI 这个 $299 的 AI Engineer 入门是 V2 改成 AI Tutor 带练的，内容没缩水。\n4 周 · 37 视频 + 25 Lab + 5 节 AI Tutor Quest，从 Prompt 讲到 RAG 部署，主页有大纲 ☕`, tags: '#AIEngineer #RAG #LLM #后端转AI #AIlearning', wechat: ['后端想转 AI 不用先砸几千块 💙 $299 AI Engineer 入门课','V2 改成 AI Tutor 带练 — 内容是训练营级的','4 周从 Prompt 到 RAG 部署 · 主页有大纲'], community: ['【匠人 AI Engineer 入门 V2 · $299 开放】\n4 周 · 79 节课 · 5 节 AI Tutor Quest\n从调 API 到能设计 RAG 系统\n主页可查大纲 💙','后端 / 云 / 数据岗想转 AI Engineer — $299 先打底不亏。'] },
    p1b: { title: '会调 OpenAI 不等于你能上线 RAG', body: `这半年最深的体会 💙\n\n身边的后端同学，大家都会调 chat completions，但真能把 RAG 做成能上线系统的一个都没有。\nChunk 怎么切？top-k 怎么调？召回率烂怎么 debug？成本爆了怎么办？—— 这些在 API 文档里根本找不到。\n\n$299 这门入门课把这些都讲了，V2 的 AI Tutor 还带着你在自己电脑上做 Quest，不是看完视频就完事。`, tags: '#AIEngineer #RAG #LLM #Embedding #向量数据库', wechat: ['会调 API ≠ 会做 RAG — 差的是系统能力 💙','大多数后端止步"能跑" — 少数人能上线','$299 这个价位拿到的 RAG 内容蛮扎实'], community: ['【认知差距】\n会调 chat API 的后端很多\n能上线一个 RAG 系统的很少\n\n这就是 AI Engineer 入门课在补的那块 💙','从"能跑 Demo"到"能扛流量"才是 AI Engineer。'] },
    p1c: { title: '从写 CRUD 到能上 RAG 系统', body: `技术栈这两年最大的转折点 💼\n\nBefore：写 CRUD · 调 API · Embedding 是啥不知道\nAfter：拆 chunk · 做 eval · 部署 PDF RAG 到 Azure\n\n不需要 ML / DL 背景（普及向讲原理就够），会写 Python 函数 + 调 HTTP API 就能学。\n\n$299 · 4 周 · AI Tutor 带练 · 主页搜"匠人 AI · AI Engineer 入门"看大纲 ☕`, tags: '#后端转AI #AIEngineer #RAG #职业升级', wechat: ['后端转 AI Engineer 最短路径 — $299 入门课 💙','不学反向传播 — 4 周能设计 + 排错一个 RAG','从 CRUD 到 RAG · 不需要 ML 背景'], community: ['【转岗路径】\nBefore：调 API 写 Demo\nAfter：拆 chunk 做 eval 部署 RAG\n4 周补齐 · $299 · 不学反向传播 ☕','AI Engineer 不是 ML 科学家 — 是把 LLM 做成系统的人。'] },
    p1d: { title: '不懂 RAG 再写 5 年后端也接不到 AI 活', body: `最近最大的感受 ⚠️\n\n公司推 AI 项目一拨一拨，但真能接的同事就 2-3 个 — 大家都卡在"会用 ChatGPT 不等于会做 RAG"这一步。\n\n想接 AI 活要会 6 件事：写 Prompt · 跑 Embedding · 搭向量库 · 拆 Chunk · 做 Eval · 部署云端。\n\n$299 · 4 周把这 6 件事从"听过"变成"做过" 💙`, tags: '#AIEngineer #RAG #后端转AI #LLM #Embedding', wechat: ['不懂 RAG 接不到 AI 活 ⚠️ 4 周补完 6 件事','$299 先打底 · 不赌一把先试水','AI Engineer 6 件事：Prompt · Embedding · 向量库 · Chunk · Eval · 部署'], community: ['【6 件能做的事】\n写 Prompt · 跑 Embedding\n搭向量库 · 拆 Chunk\n做 Eval · 部署云端\n\n每一件都是真接活的钥匙 💙'] },
    p2: { title: '同样都用 OpenAI 差距在系统能力', body: `对比身边后端 3 年的差距，集中在能不能把 AI "做成系统" 🛠️\n\n❌ API 调用者：\n只会调 chat completions · Chunk / top-k 瞎选 · 效果烂不知咋 debug · 成本爆了才发现没监控\n\n✅ AI Engineer：\n画 RAG 架构拆 6 层 · 对比 chunk 策略做 A/B · 写 eval 看召回率 · 部署扛流量\n\n$299 的入门课就在补这一步。`, tags: '#AIEngineer #RAG #LLMOps #Embedding', wechat: ['同样用 OpenAI 差距在系统能力 🛠️','会调 API 不稀奇 — 能上线扛流量才值钱','$299 差距就体现在这 4 件事上'], community: ['【两种人】\n❌ API 调用者\n跑得起来就算完 · 上线就炸\n✅ AI Engineer\n设计 / Eval / 上线 / 排错全跑通','这门课把这 6 层能力一层层教你。'] },
    p3: { title: '后端群里都在聊 RAG 你接得上话吗', body: `昨天后端群里老王突然问 🤔\n"老板让做个公司文档问答系统，要用 RAG，Embedding 是啥？"\n\n阿哲说："先别急，有个 $299 的入门课，从 Embedding 讲到部署，V2 AI Tutor 带练。"\n老王："不会 ML 能学吗？反向传播我都忘了。"\n阿哲："普及向讲原理，会写 Python 就够。"\n\n发个小红书记录 — 后端不补 AI 迟早被问住 💙`, tags: '#AIEngineer #RAG #后端转AI #LLM', wechat: ['后端群都在聊 RAG 你接得上话吗 🤔','不会 Embedding 会被老板当场问住','$299 先把基础补上不赌'], community: ['【真实对话】\n— 老板让做公司 RAG\n— Embedding 是啥？\n— 先补个入门课再接活 💙\n\n后端不补 AI 迟早遇到这种场景。','AI Engineer 不是神秘岗 — 把 LLM 做成系统的后端就行。'] },
    p4: { title: '毕业那天 你会真的会这四件事', body: `买课最怕的就是学完记了一堆名词让做啥都不会 📌\n\n4 周后真的会的四件事：\n1️⃣ 理解 LLM 底层 — Tokenization / Embedding / Attention\n2️⃣ 做出你的第一个 GPT — Prompt 四要素 + GPT Store 发布\n3️⃣ 从零搭 Python RAG — 不靠 LangChain · ChromaDB + 检索生成\n4️⃣ 部署生产级 PDF RAG — Streamlit + Azure OpenAI · 拿到 URL`, tags: '#AIEngineer #RAG #LLM #Embedding #学习效果', wechat: ['4 周毕业 4 件事：LLM 原理 / GPT Store / Python RAG / 云部署 📌','每一件都能带回到工作里用','不学 buzzword — 真的能 demo 给面试官'], community: ['【毕业 4 件事】\n✅ 理解 LLM 底层原理\n✅ 发布第一个 GPT\n✅ Python 从零 RAG\n✅ PDF RAG 部署到云\n\n面试能拿出 Demo URL — 比任何证书值钱 💙'] },
    p5: { title: '4 大板块 从 GenAI 到 RAG 部署', body: `看过不少 AI 入门课都在"拼 Prompt 模板"，这次第一次看到拆成 4 大板块的完整路径 💙\n\n📍 Part 1 GenAI 基础与生产力（13 节）\n📍 Part 2 ML 基础 + Transformer 原理（12 节）\n📍 Part 3 Prompt + 第一个 GPT（含 Project 1）\n📍 Part 4 RAG 工程实战（含 Project 2 + 3）\n\n每个 Part 都配 Lab + Quest，一路做下来有作品。`, tags: '#AIEngineer #RAG #学习路径 #LLM', wechat: ['4 Part 清晰：GenAI → ML → Prompt+GPT → RAG 💙','每个板块都有 Lab + Quest — 不只是听课','从看不懂 Transformer 到能拆 RAG 架构'], community: ['【4 大板块】\nP1 GenAI 基础（13 节）\nP2 ML + Transformer（12 节）\nP3 Prompt + GPT Store\nP4 RAG 工程实战\n\n每 Part 都有 Lab + Quest 💙'] },
    p6: { title: '4 周真的用到的 RAG 工具链', body: `工具选型比学 buzzword 重要多了 🛠️\n\n这次 4 周真实用到的：\n🔧 LLM：OpenAI / Claude / Azure OpenAI\n🔧 向量 DB：ChromaDB（主）/ Pinecone / Qdrant\n🔧 框架：LangChain / 自己 Python 实现\n🔧 前端：Streamlit\n🔧 微调：HuggingFace + Colab\n🔧 观测：Langfuse\n\n每个都有 Lab 真实跑过 · 不是纸上列表。`, tags: '#AIEngineer #RAG #ChromaDB #LangChain #Azure', wechat: ['12 个工具一个不多 — 都是真要用的 🛠️','OpenAI + ChromaDB + Streamlit 是核心三件套','工具跟 Lab 一起走 — 不会卡在"装不上"'], community: ['【工具分层】\nLLM：OpenAI / Claude / Azure\n向量 DB：ChromaDB / Pinecone\n框架：LangChain / Python\n前端：Streamlit\n微调：HuggingFace + Colab\n观测：Langfuse','对齐企业真实技术栈 ✅'] },
    p7: { title: '4 周后同学都在群里晒 RAG Demo', body: `翻了下学员群聊 💬\n\n"W3 跟 AI Tutor Quest 在自己电脑把 ChromaDB 跑起来，终于知道召回率是啥"\n"以前 Embedding 和 Fine-tune 分不清，这次被逼做 eval 对比 chunk 策略，感觉是真上手了"\n"$299 拿到的 RAG 内容比我司花几千订的某平台还扎实，AI Tutor 答疑秒级"\n\n不是编的，真实后端 / 云 / 数据岗同学。`, tags: '#AIEngineer #RAG #学员反馈 #AITutor', wechat: ['W3 就能把 RAG 跑起来 · AI Tutor 带节奏 💬','Embedding 和 Fine-tune 的区别终于搞懂了 🛠️','$299 居然比企业账号的内容还扎实 — 同学原话 💙'], community: ['【真实反馈】\n"W3 自己电脑跑通 RAG"\n"Eval 对比 chunk 策略"\n"$299 比企业账号扎实"','边学边做 — 不是视频合集 🌿'] },
    p8: { title: '$299 不是视频合集 是完整入门包', body: `同类 LLM+RAG 课大多 $2-3K 📘\n\n这次 $299 买到：\n📘 79 节课（Video + Lab + Quest + Info）\n🧪 25 个浏览器 Lab — 每个独立成课\n🌟 5 节 AI Tutor Quest — 真实环境带练\n🎯 3 个渐进式 Project — GPT Store / Python RAG / PDF RAG\n\n+ AI Tutor 24h 中英双语\n+ 视频永久回看 + 倍速\n+ GPT Store / RAG 代码模板\n+ 可衔接 Bootcamp`, tags: '#AIEngineer #RAG #Bootcamp前置 #课程配置', wechat: ['79 课 + 25 Lab + 5 Quest + 3 Project · $299 💼','不是录播合集 — Lab 独立成课可追踪','对比过 3-4 家 — $299 这个价位内容最扎实'], community: ['【课程配置】\n📘 79 课 🧪 25 Lab\n🌟 5 Quest 🎯 3 Project\n💬 AI Tutor 24h\n🎓 可衔接 Bootcamp','RAG 内容深度 · 同价位找不到第二家。'] },
    p9: { title: '技术背景想转 AI 又不想先砸几千', body: `这两年问过 20+ 个技术同事 💙\n\n都想转 AI Engineer，但 $2-3K 的课怕踩坑 · $9,999 的 Bootcamp 又太重。\n\n$299 AI Engineer 入门是折中点：\n→ 4 周 · 自主节奏\n→ AI Tutor 24/7 答疑\n→ 能拿出来 demo 的作品\n→ 学完适合再进 Bootcamp 不掉队\n\n主页搜"匠人 AI · AI Engineer 入门"先看大纲。`, tags: '#AIEngineer #RAG #入门课 #Bootcamp前置', wechat: ['技术想转 AI Engineer 最短路径 · $299 打底 💙','不赌一把 — 先看大纲再决定','主页搜"匠人 AI · AI Engineer" ☕'], community: ['【咨询窗口开放】\n4 周 · $299 · AI Tutor 带练\n主页"匠人 AI · AI Engineer 入门"\n先看大纲再报 ☕','技术背景不是没门槛 — 是门在正确的地方。'] },
    p10: { title: 'AI Engineer 一天到底在做什么', body: `AI Engineer 这岗位 2024 才火起来，大部分人搞不清跟 ML Engineer 啥区别 🤔\n\n一句话讲清：\n👉 不是训模型的 — 是把 LLM / RAG / Agent 做成能扛流量的生产系统的那群人。\n\n一天工作：\n• 早上读 Embedding benchmark\n• 下午改 Chunk 策略跑 eval\n• 傍晚调 top-k + re-rank\n• 下周搭 eval framework\n\n门槛：会写 Python · 产出：能上线的 RAG`, tags: '#AIEngineer #RAG #新岗位 #职业规划', wechat: ['AI Engineer = 把 LLM 做成系统的人 · 不是训模型的 💼','跟 ML Engineer 区别终于搞清楚了','一图看懂 AI Engineer 一天在做什么 👇'], community: ['【岗位解释】\nAI Engineer\n= 把 LLM / RAG / Agent 做成生产系统\n门槛：会写 Python · 产出：能上线的 RAG\n\n不是 ML Scientist — 不需要训模型。'] },
    p11: { title: '报课前 vs 毕业后 具体多会什么', body: `报课最关心的不是课表 — 是"学完到底多会什么" 💪\n\n6 维度升级：\n🔸 对 LLM：只会调 API → 理解 token / embedding / attention\n🔸 做 RAG：不知从哪开始 → 能解释 + 设计 + 排错\n🔸 Embedding：没听过 → 懂 cosine / dot / 向量空间\n🔸 效果烂：只能换模型 → 会 debug chunk / top-k\n🔸 Fine-tune：以为都要微调 → 知道啥时候用 RAG\n🔸 部署：没部署过 → Streamlit + Azure`, tags: '#AIEngineer #RAG #学习效果 #Embedding', wechat: ['6 维度升级：LLM / RAG / Embedding / Debug / Fine-tune / 部署 💪','毕业从"API 调用者"升到"AI Engineer"','报课前先看这张 — 知道自己会变啥样'], community: ['【能力升级】\nLLM：调 API → 懂原理\nRAG：不会 → 能设计 + 排错\nEmbedding：没听过 → 懂向量空间\n效果：换模型 → debug chunk\nFine-tune：都要 → 知道啥时候用\n部署：没做过 → 上云','每条都能带回工作里 💙'] },
    p12: { title: '5 节 AI Tutor Quest 在你真实环境做', body: `V2 最大升级就是 5 节 Quest 🌟\n\nQ01 第一个 Prompt 工程任务（30 min）— 技术摘要 + JSON 输出\nQ02 Colab 跑通 Fine-Tuning（40 min）— LoRA base vs FT 对比\nQ03 本地搭 RAG Pipeline（45 min）— ChromaDB 跑通\nQ04 Chunk 策略对比实验（40 min）— 看召回率变化\nQ05 部署 RAG 到云端（50 min）— Streamlit + Azure\n\n不是 iframe 假练习 — AI 小花老师带你在自己电脑 / 云账号做真事。`, tags: '#AIEngineer #RAG #AITutor #Quest #ChromaDB', wechat: ['5 节 Quest 是 V2 最大亮点 🌟','AI 小花老师带你在自己电脑装 ChromaDB / 部署 Azure','真实环境 · 真做过 · 不是看视频'], community: ['【5 Quest 列表】\nQ01 Prompt 任务（30 min）\nQ02 Colab FT（40 min）\nQ03 本地 RAG（45 min）\nQ04 Chunk 对比（40 min）\nQ05 云端部署（50 min）','每节产出一个真作品 — 不是一堆截图 🌟'] },
    p13: { title: 'V1 $2-3K 压到 V2 $299 怎么做到的', body: `同样的 RAG 内容从训练营价压到 $299 — 省的是老师工资 💙\n\n6 个升级：\n01 答疑：群里排队 → AI Tutor 24/7 秒级\n02 节奏：按周直播 → 自主节奏\n03 带练：被动问 → AI 主动带\n04 记忆：换老师忘 → 跨 session\n05 价格：$2-3K → $299\n06 容量：限额 → 无上限\n\n全球华人随时开学，不用等开班。`, tags: '#AIEngineer #V2 #AITutor #$299', wechat: ['V1 $2-3K 到 V2 $299 · 省的是老师工资 💙','训练营级内容压到自学价 · 不是缩水版','6 个升级 · 整段重做 · 不是改标题'], community: ['【V2 升级 6 项】\n01 AI Tutor 24/7\n02 自主节奏\n03 AI 主动带练\n04 跨 session 记忆\n05 $299 定价\n06 不限招生','同样的内容 · 技术降本 · 不是偷工减料。'] },
    p14: { title: '这 4 类技术人 学完回报最高', body: `经常被问"我这个身份适合学吗" 💼\n\n4 类回报最高：\n⚙️ 后端 / 全栈想转 AI — 写过 CRUD 接 API 熟\n☁️ Infra / DevOps / Cloud — 想接 AI Platform 方向\n📊 数据工程师 / 分析师 — Python + SQL 底子在\n🎯 准备进 Bootcamp — $299 先打底不掉队\n\n不需要 ML 背景 — 需要会写 Python + 有技术基础。`, tags: '#AIEngineer #后端转AI #DevOps #数据工程师', wechat: ['4 类技术人学 AI Engineer 回报最高 💼','会 Python 就能学 — 不需要 ML / DL 背景','$299 是 Bootcamp 前的最佳试水'], community: ['【适合人群】\n⚙️ 后端 / 全栈\n☁️ Infra / DevOps / Cloud\n📊 数据工程师 / 分析师\n🎯 准备进 Bootcamp\n\n会 Python · 有技术基础 ✅'] },
    p15: { title: '25 Lab + 5 Quest 按板块分布', body: `买课最怕只听不做 🧪\n\n25 Lab + 5 Quest 分布：\n🟦 GenAI 基础 × 6（First LLM · Hello AI · MLOps vs LLMOps）\n🟪 Prompt × 5（Clear Task · Constraints · CoT）\n🟩 ML / Transformer × 4（AI/ML 基础 · Attention · Fine-Tuning）\n🟧 Embedding + 向量 DB × 5（可视化 · Cosine · ChromaDB · Top-K）\n🟥 RAG 工程 × 5（Chunk · 召回 · re-rank · Eval · 成本）\n🌟 Quest × 5（真实环境带练）\n\n每个 Lab 独立成课 · 进度可追踪。`, tags: '#AIEngineer #RAG #互动Lab #Quest', wechat: ['25 Lab + 5 Quest 按板块分布 🧪','每个 Lab 独立成课 — 进度可追踪','RAG + Embedding 10 个 Lab — 动手最多的部分'], community: ['【25 Lab 分布】\nGenAI 6 · Prompt 5\nML/Transformer 4\nEmbedding+向量 5 · RAG 5\nQuest 5 (真实环境)','动手比例比纯视频课高 ✅'] },
    p16: { title: '4 周节奏 但你自己说了算', body: `跟人类老师课不一样 — 自主节奏 📅\n\n推荐 4 周：\n📅 W1 GenAI 基础 + ML / Transformer（25 节）\n📅 W2 Prompt + GPT Store 发布（Project 1）\n📅 W3 Embedding + 向量数据库\n📅 W4 RAG 工程 + 部署上云（Project 2 + 3）\n\n快 2 周刷完也行 · 慢 8 周细嚼也行 · AI Tutor 不挑你节奏。\n学完能衔接 AI Engineer Bootcamp。`, tags: '#AIEngineer #RAG #自主节奏 #Bootcamp', wechat: ['4 周节奏 · 但自主 — 快慢自己定 📅','不等开课 · 不赶直播 · 不挤群答疑','AI Tutor 跟你节奏 · 不是你跟它'], community: ['【4 周节奏】\nW1 GenAI + ML\nW2 Prompt + GPT Store\nW3 Embedding + 向量 DB\nW4 RAG + 部署\n\n想快 2 周 · 想慢 8 周 ✅'] },
    p17: { title: '4 周后你能做的这些真事', body: `买课最怕听完就完了 📂\n\n毕业能做的 6 件真事：\n01 发布你的 GPT（GPT Store）\n02 本地跑通 RAG（ChromaDB + Python）\n03 部署 PDF RAG 到云（Streamlit + Azure）\n04 写 RAG Eval（看召回率 / faithfulness / 成本）\n05 Debug 召回率（chunk / top-k / re-rank）\n06 跟面试官聊 RAG（架构 / 边界 / 选型）\n\n每一件都是能放到简历 / LinkedIn 的作品。`, tags: '#AIEngineer #RAG #作品集 #简历', wechat: ['4 周后 6 件真事 — 都能放简历的 📂','Demo URL 比一堆证书值钱 10 倍','从"听过"到"做过" · 这就是差距'], community: ['【毕业 6 件事】\n01 发布 GPT\n02 本地 RAG\n03 部署 PDF RAG\n04 写 Eval\n05 Debug 召回\n06 面试聊 RAG','每一件都是简历一行 💙'] },
    p18: { title: '不是视频合集 4 种学法组合', body: `买课最大的浪费是买了只听不做 📚\n\n4 种学法组合：\n🎥 37 节视频 — 8-15 min / 节 · 倍速可看\n🧪 25 个 Lab — 浏览器里写代码即时反馈\n🌟 5 Quest — AI 主动在真实环境带练\n🤖 AI Tutor 24h — 中英双语秒级答疑 + 跨 session 记忆\n\n视频看 · Lab 练 · Quest 带 · Tutor 答 — 闭环。`, tags: '#AIEngineer #RAG #AITutor #学习方式', wechat: ['4 种学法组合：视频 + Lab + Quest + AI Tutor 📚','闭环设计 — 不是单向灌输','AI Tutor 是今年最大升级'], community: ['【4 种学法】\n🎥 37 视频\n🧪 25 Lab\n🌟 5 Quest\n🤖 AI Tutor 24h\n\n看 · 练 · 带 · 答 · 闭环 ✅'] },
    p19: { title: '3 个渐进式 Project 从易到难', body: `Project 设计很用心 — 从零代码到部署上云的渐进链路 🎯\n\nP1 GPT Store 发布 — 零代码 · 懂 Prompt + 发布流程\nP2 Python 从零搭 RAG — 不依赖 LangChain · 6 层组件全跑通\nP3 生产级 PDF RAG 部署 — Streamlit + Azure OpenAI · 真 URL\n\n每个 Project 都有明确交付物 · 代码 repo + Demo URL 能放简历。`, tags: '#AIEngineer #RAG #项目实战 #GPTStore', wechat: ['3 Project 渐进式：GPT Store → Python RAG → PDF RAG 🎯','每个都有 Demo URL + 代码 repo','面试官看到就知道你真做过'], community: ['【3 Project 链路】\nP1 GPT Store 发布\nP2 Python 从零 RAG\nP3 PDF RAG 部署 Azure\n\n每个都能放简历 + Demo URL 💙'] },
    p20: { title: 'RAG 不是黑盒 就是这 6 层组件', body: `好多人觉得 RAG 很玄乎 — 其实就是 6 层组件 🧠\n\n1️⃣ Load 加载（PDF / Notion / DB 读原始文档）\n2️⃣ Split 切分（Chunk 策略 — 最影响效果）\n3️⃣ Embed 向量化（text-embedding-3 · bge）\n4️⃣ Store 存储（ChromaDB / Pinecone）\n5️⃣ Retrieve 检索（top-k + re-rank）\n6️⃣ Generate 生成（检索结果 + 问题 → LLM）\n\n每层都能单独调 — 效果烂不是 LLM 菜 · 是某一层没调好。`, tags: '#RAG #AIEngineer #向量数据库 #Embedding', wechat: ['RAG 不是黑盒 — 就是这 6 层组件 🧠','效果烂大概率是 chunk 或 top-k 没调对','每层都能独立 debug · 不用换模型'], community: ['【RAG 6 层】\n1 Load 加载\n2 Split 切分（核心）\n3 Embed 向量化\n4 Store 存储\n5 Retrieve 检索\n6 Generate 生成','看懂架构 · 才有排错能力 💙'] },
    p21: { title: '报名前最常被问的 5 个问题', body: `整理咨询最多的 5 个 👌\n\nQ1 要不要自己买 GPU？A 不用 · 全程调云 API\nQ2 没 ML 背景能学吗？A 能 · ML 章是普及向\nQ3 V2 AI Tutor 靠谱吗？A 24/7 秒级 · 跨 session 记\nQ4 学完能直接找 AI Engineer 工作吗？A 要先补 Bootcamp\nQ5 跟 Bootcamp 啥关系？A 官方前置入门课`, tags: '#AIEngineer #RAG #FAQ #$299', wechat: ['常问 5 问：GPU / ML / AI Tutor / 找工作 / Bootcamp 👌','不用 GPU · 不学 ML · $299 先试水','要找工作再进 Bootcamp — 这门是打底'], community: ['【FAQ】\nQ GPU？A 不用\nQ ML 背景？A 不用\nQ AI Tutor？A 24/7\nQ 找工作？A 进 Bootcamp\nQ Bootcamp 关系？A 前置入门'] },
    p22: { title: '从会调 API 到能设计系统 4 步', body: `学 AI Engineer 的核心框架 — 记住这 4 步就不会迷 🧭\n\n🟦 Stage 1 · 看原理 — Token / Embedding / Attention 是啥\n🟪 Stage 2 · 调 API — 用起来跑 Demo · prompt + fine-tune 决策\n🟩 Stage 3 · 拆系统 — RAG 6 层组件每层能调啥\n🟧 Stage 4 · 修效果 — chunk / top-k / re-rank / eval / 成本\n\n卡壳多半是跳了某一步。`, tags: '#AIEngineer #RAG #方法论 #学习框架', wechat: ['API → 系统 4 步：看原理 → 调 → 拆 → 修 🧭','只会第 2 步是 API 调用者 · 走到第 4 才是 AI Engineer','框架不是学完忘 · 是贯穿 4 周的主线'], community: ['【4 步框架】\n🟦 Stage 1 看原理\n🟪 Stage 2 调 API\n🟩 Stage 3 拆系统\n🟧 Stage 4 修效果\n\n每个 Lab 都按这 4 步练 💪'] },
    p23: { title: 'AI Tutor 到底怎么取代人类老师', body: `$299 能拿到训练营级内容 — 关键就在这 4 维 💙\n\n⚡ 答疑速度：群里排队 → 中英 24/7 秒级\n🎯 主动带练：你问才答 → AI 先开口追问验证\n🧠 进度记忆：换老师忘 → 跨 session 记得你卡哪\n🎨 个性化：一套节奏给所有人 → 按你背景调节\n\n学完还"反向体验"了一个生产级 AI Tutor 长啥样 — 这恰好就是 AI Engineer 在做的事。`, tags: '#AIEngineer #AITutor #V2 #$299', wechat: ['AI Tutor 4 维取代老师：答疑 / 带练 / 记忆 / 个性化 💙','学 AI Engineer 顺便体验一个生产级 AI Tutor','$299 拿 Bootcamp 级内容 — 省的是老师工资'], community: ['【AI Tutor 4 维】\n⚡ 24/7 秒级\n🎯 主动追问\n🧠 跨 session 记忆\n🎨 按背景个性化','学完会觉得 — 这不就是 AI Engineer 在做的事吗 🌟'] },
    p24: { title: '学完 AI Engineer 5 个方向可以挑', body: `大家最关心学完能去哪干活 💼\n\n5 个方向：\n🚀 AI 应用工程师（需求最大）\n⚙️ LLM Platform 工程师（高薪岗）\n🔍 RAG 工程师（本课主线）\n☁️ AI Infra 工程师（Cloud 背景友好）\n📊 数据 + AI 工程师（数据岗转型）\n\n招聘公司：OpenAI · Anthropic · Scale AI · 字节 · 阿里 · 腾讯 · Atlassian · Canva · Cohere`, tags: '#AIEngineer #RAG #职业方向 #大厂', wechat: ['5 个方向 · 9 家标杆公司 💼','全球都在招 AI Engineer — 澳洲 / 美国 / 中国','RAG 工程师是本课主线 · 对口最直接'], community: ['【5 个方向】\n🚀 AI 应用工程师\n⚙️ LLM Platform\n🔍 RAG 工程师\n☁️ AI Infra\n📊 数据 + AI','公司：OpenAI · Anthropic · 字节 · 阿里 · Atlassian · Canva ✅'] },
    p25: { title: '全球 AI Engineer 薪资参考区间', body: `整理了 AU / US / CN 三地参考区间（非承诺）💰\n\n🇦🇺 澳洲 AI Engineer：AUD 130-200K\n🇺🇸 美国 AI Engineer：USD 150-280K\n🇨🇳 中国一线大厂：RMB 60-120万\n\n标杆薪酬：\n• OpenAI / Anthropic: USD 250-400K\n• 字节 / 阿里 / 腾讯: RMB 60-150万\n• Atlassian / Canva: AUD 140-210K\n\n来源 levels.fyi / Seek / LinkedIn / 脉脉。`, tags: '#AIEngineer #薪资 #职业规划 #全球求职', wechat: ['AI Engineer 全球薪资区间：AUD 130-200K / USD 150-280K 💰','OpenAI / Anthropic 顶薪 USD 250-400K','标准区间 · 具体看经验 + 地区 + 面试'], community: ['【全球薪资参考】\n🇦🇺 AUD 130-200K\n🇺🇸 USD 150-280K\n🇨🇳 RMB 60-120万\n顶薪：OpenAI USD 250-400K\n\n来源：levels.fyi / Seek / 脉脉 · 非承诺 💙','AI Engineer 是未来 5 年薪资涨幅最大的方向之一。'] }
  };

  function injectPanels() {
    document.querySelectorAll('.poster-frame').forEach(frame => {
      if (frame.querySelector('.copy-panel')) return;
      const data = XHS_COPY[frame.id];
      if (!data) return;

      const main = document.createElement('div');
      main.className = 'poster-main';
      while (frame.firstChild) main.appendChild(frame.firstChild);
      frame.appendChild(main);

      const panel = document.createElement('div');
      panel.className = 'copy-panel';
      const head = document.createElement('div');
      head.className = 'cp-title';
      head.textContent = frame.id.toUpperCase() + ' · 文案素材';
      panel.appendChild(head);

      const tabs = document.createElement('div');
      tabs.className = 'cp-tabs';
      const tabDefs = [
        { key: 'xhs', label: '📕 小红书', color: '#ff2442' },
        { key: 'wx',  label: '💬 朋友圈', color: '#059669' },
        { key: 'qun', label: '👥 社群',   color: '#2563eb' }
      ];
      const panes = {};
      tabDefs.forEach((t, idx) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'cp-tab' + (idx === 0 ? ' active' : '');
        b.textContent = t.label;
        b.style.setProperty('--tab-color', t.color);
        b.addEventListener('click', () => {
          panel.querySelectorAll('.cp-tab').forEach(x => x.classList.toggle('active', x === b));
          Object.entries(panes).forEach(([k, p]) => p.classList.toggle('hidden', k !== t.key));
        });
        tabs.appendChild(b);
      });
      panel.appendChild(tabs);

      const mkSection = (label, text, cls) => {
        const sec = document.createElement('div');
        sec.className = 'cp-section';
        const lab = document.createElement('div');
        lab.className = 'cp-label';
        lab.textContent = label;
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
        sec.appendChild(lab); sec.appendChild(box); sec.appendChild(btn);
        return sec;
      };

      const xhsPane = document.createElement('div');
      xhsPane.className = 'cp-pane';
      xhsPane.appendChild(mkSection('📌 标题', data.title, ''));
      xhsPane.appendChild(mkSection('✍️ 正文', data.body, ''));
      xhsPane.appendChild(mkSection('# 话题标签', data.tags, 'hashtags'));
      const allSec = document.createElement('div');
      allSec.className = 'cp-section';
      const allBtn = document.createElement('button');
      allBtn.type = 'button';
      allBtn.className = 'cp-btn';
      allBtn.style.cssText = 'align-self:stretch;background:#ff2442;padding:9px 14px;font-size:12px';
      allBtn.textContent = '📕 复制小红书完整版（标题 + 正文 + 标签）';
      allBtn.addEventListener('click', async () => {
        const full = data.title + '\n\n' + data.body + '\n\n' + data.tags;
        try {
          await navigator.clipboard.writeText(full);
          allBtn.textContent = '✓ 已复制完整版';
          setTimeout(() => { allBtn.textContent = '📕 复制小红书完整版（标题 + 正文 + 标签）'; }, 1500);
        } catch (e) { alert('复制失败：' + e.message); }
      });
      allSec.appendChild(allBtn);
      xhsPane.appendChild(allSec);
      panes.xhs = xhsPane;
      panel.appendChild(xhsPane);

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
