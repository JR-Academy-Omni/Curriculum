/* AI Coding 实战课 · 第 2 期 — 右侧文案面板 · 小红书 / 朋友圈 / 社群 Tab 切换 */
(function () {
  const XHS_COPY = {
    p1: { title: '做了 5 年 PPT 今年终于做出网站', body: `坐标写字楼隔间 🧡\n\n做了 5 年 PPT 和 Word，今年终于把一个想了很久的小工具真的做出来上线了。\n不是靠找外包，是自己在 Cursor 里跟 AI 一句一句描述，5 周跑完从 PRD 到 Vercel 部署全流程。\n\n课程叫匠人 AI Coding 实战课第 2 期，零基础能学，主页有完整大纲 ☕`, tags: '#AICoding #Vibecoding #Cursor #非技术AI #零代码建站 #产品经理', wechat: ['做了 5 年 PPT 今年终于做出网站 🧡','非技术背景 5 周上线一个真实产品 — 亲测可以。','用自然语言让 AI 写代码 — 就叫 Vibe Coding。'], community: ['【匠人 AI Coding 第 2 期开放咨询】\n5-8 周从零基础用 Cursor 做产品\n108 节课 + 29 Lab + 5 AI Tutor 带练\n零代码 · 主页查看大纲 🧡','之前一直想做小工具 — 5 周后手上真的有了可以点开访问的网站。'] },
    p1b: { title: '会用 ChatGPT 不等于你能做出产品', body: `聊了一圈身边想做产品的朋友 🧡\n\n大家都在用 ChatGPT，但真能做出东西上线的没几个。\n不是工具不够 — 是没人告诉你怎么用 Cursor 把想法变成代码，怎么推 GitHub，怎么部署 Vercel。\n\n第 2 期新加了 5 节 AI Tutor Quest —— AI 带着你一步步在自己电脑上真的做完。\n主页有 5 周课程路径 ☕`, tags: '#AICoding #Cursor #Vibecoding #非技术 #做产品', wechat: ['会用 ChatGPT ≠ 能做出产品 — 差距在动手那一步 🧡','问答很溜没东西上线 — 这是大多数人的状态。','第 2 期 5 节 Quest 是专治"打开 Cursor 就慌"的。'], community: ['【认知差距】\n会问 ChatGPT 的人很多\n能做出上线产品的人很少\n\n这就是 AI Coding 课要补的那一步 🧡','问 AI 和让 AI 干活是两回事 — 后者才有作品。'] },
    p1c: { title: '从写 PRD 到能独立上线产品', body: `过去两年我最想补的一块能力就是它 💼\n\n之前：写完 PRD 等开发排期，两周变两个月\n之后：打开 Cursor 自己做，周末就能出个能用的版本\n\n不需要学 Java / 算法，不需要 CS 背景。\n需要的是：会描述需求 + 一套 Vibe Coding 方法。\n\n5-8 周可以补齐，主页"匠人 AI · AI Coding"可看大纲 ☕`, tags: '#转岗 #产品经理 #AICoding #非技术AI', wechat: ['产品 / 运营最值得补的一块：用 AI 自己做产品 💼','等开发排期是老黄历了 — 自己做最快。','不学算法语法 — 几周就能上线作品。'], community: ['【转岗路径】\nBefore：写 PRD · 等开发\nAfter：打开 Cursor · 周末做完上线\n5-8 周补齐 · 不学语法 ☕','产品岗这两年真被 AI Coding 拉开了 — 能自己做 Demo 的就是比只写 PRD 的值钱。'] },
    p1d: { title: '不会 AI Coding 好点子永远停在 PPT', body: `这是我今年最大的感慨 ⚠️\n\n脑子里想了 5 个产品，每一个都卡在"找谁帮我做"。\n\n学了一个月 AI Coding 之后，写 PRD / 搭官网 / 部署 Vercel / 嵌 Chatbot / 做落地页 / 接外包 — 6 件事都能自己来了。\n\n5-8 周把"想做"变成"真的做过"，主页可看大纲 🧡`, tags: '#AICoding #独立开发 #副业 #SoloMaker #Cursor', wechat: ['不会 AI Coding 点子永远停在 PPT ⚠️','5-8 周把 6 件事从想做变成做过 🧡','创业点子不落地 — 其实就差这门课。'], community: ['【6 件能自己做】\n写 PRD · 搭官网 · 部署上线\n嵌 Chatbot · 做落地页 · 接外包\n每一件都能单独变现 🧡','想做产品但没人帮你 — 学完就不用再等别人了。'] },
    p2: { title: '同样打开 ChatGPT 差距在产出物', body: `这半年对比身边的朋友，差距明显在"动手做"这一步 🛠️\n\n❌ 聊天框使用者：问答溜 · 代码跑不起来 · 没作品\n✅ AI Coding 实战派：Cursor 配合 · 一周交付 · 能 Demo\n\n差的不是智商 — 是有没有人带你装工具、跑 git、推 Vercel。\n第 2 期 5 节 Quest 就在补这一步。`, tags: '#AICoding #Cursor #动手能力 #产品', wechat: ['同样打开 ChatGPT 差距在产出物 🛠️','问答 vs 动手做 — 一年后差距非常大。','差的不是智商 — 是有没有人带你装工具。'], community: ['【两种人】\n❌ 聊天框使用者\n问答溜 · 没作品 · 想法停 PPT\n✅ AI Coding 实战派\nCursor 配合 · 一周交付 · 能 Demo','5 Quest 就是为了让你从左边变右边。'] },
    p3: { title: '群里都在聊这个你接得上话吗', body: `一个普通的周三下午，运营群里小雅突然问：想做个小工具外包报价 3 万，有没有人有便宜的路子？🤔\n\n做独立开发的阿哲说：你用 Cursor 自己做，一周就能搞定。\n\n那一刻才意识到 — 现在不会 AI Coding，连自己的需求都要花 3 万找人帮你做。\n发个小红书记录开始学习 🌱`, tags: '#AICoding #独立开发 #Cursor #副业', wechat: ['3 万外包 vs 自己一周做完 — 差别就是会不会 AI Coding 💼','群里都在聊 Cursor 你接得上话吗 🌱','这两年最值钱的 soft skill 就是它。'], community: ['【真实对话】\n— 想做小工具外包 3 万\n— 你自己用 Cursor 一周搞定\n\n不会 AI Coding 连自己的想法都要花钱买 💸','2026 新基本功：不是会用 AI — 是能让 AI 帮你做东西。'] },
    p4: { title: '毕业那天 你会真的会这四件事', body: `报课最怕的就是：学完只记住一堆名词，让做还是不会 📌\n\n这次 5-8 周下来真的落地的四件事：\n1️⃣ 打开 Cursor 写代码 — 装工具 → 第一个网页\n2️⃣ 从想法到 PRD — 目标用户 + 核心功能 + User Story\n3️⃣ 搭完整网站上线 — 导航 Hero 产品 评价 Footer + Vercel\n4️⃣ 加 AI 功能 — Coze Bot + 知识库嵌网站`, tags: '#AICoding #学习效果 #Cursor #Vercel #Coze', wechat: ['5-8 周毕业 4 件事：装 Cursor / PRD / 上线 / AI 功能 📌','每一件都能直接带到自己工作 / 副业里用。','不学 buzzword — 跑通从 0 到 1 上线全流程。'], community: ['【毕业 4 件事】\n✅ 打开 Cursor 写代码\n✅ 想法 → PRD\n✅ 搭网站部署上线\n✅ 网站嵌 AI Chatbot','每件都能立刻带回去用 — 这才叫值回票价 💼'] },
    p5: { title: '5-8 周 4 个 Phase 从 0 到上线', body: `看过不少 AI 编程课都在"讲工具"，这次第一次看到把 0 到上线 4 个 Phase 拆清楚 🧡\n\n📍 Phase 0 AI 体验 + 工具准备（7 节）\n📍 Phase 1 产品设计 + PRD（12 节）\n📍 Phase 2 AI 编程实战（16 节）\n📍 Phase 3 AI 功能进阶（11 节 · 进阶班）\n\n每个 Phase 都配 Lab + Quest。`, tags: '#AICoding #学习路径 #5周', wechat: ['4 Phase 清晰：工具 → PRD → 编程 → AI 功能 🧡','基础班 5 周 · 进阶班 8 周自选。','Phase 3 单独做 AI 功能 — 独家。'], community: ['【4 Phase 路径】\nP0 工具准备（7 节）\nP1 PRD 设计（12 节）\nP2 编程实战（16 节）\nP3 AI 功能（11 节 · 进阶）\n\n每 Phase 都有 Lab + Quest 🧡'] },
    p6: { title: '5-8 周真的用到的 AI Coding 工具链', body: `工具更新比课程更新还快 🛠️\n\n这次盘了一下 5-8 周真实用到的：\n🔧 编辑器：Cursor（主力）\n🔧 AI：Claude / ChatGPT\n🔧 代码：GitHub\n🔧 部署：Vercel / Cloudflare\n🔧 AI Bot：Coze + OpenClaw 知识库\n🔧 PRD：Notion / Figma\n🔧 后端：Supabase / Stripe（进阶）\n\n每个都有 Lab 实操。`, tags: '#AICoding #Cursor #Vercel #Coze #工具栈', wechat: ['12 个工具一个不多 — 都是真的要用到的 🛠️','Cursor + Vercel + Coze 是核心三件套。','工具全 · Lab 跟着走 — 不会卡在"装不上"。'], community: ['【工具分层】\n编辑器：Cursor\nAI：Claude / ChatGPT\n代码：GitHub\n部署：Vercel / Cloudflare\nAI Bot：Coze / OpenClaw\nPRD：Notion / Figma','工具课只教用法 — 我们教场景组合。'] },
    p7: { title: '学到第 2 周 已经有人网站上线了', body: `看了一眼第 1 期学员反馈 💬\n\n"W2 跟着 Quest 把 Cursor 装完，第一次跑出自己的网页，真的会上瘾"\n"以前写 PRD 要跟开发扯两周，现在自己打开 Cursor 周末就能把想法做出来"\n"做副业接了 2 单官网外包，客户看 Demo 就付定金"\n\n不是编的，普通学员日常。`, tags: '#AICoding #学员反馈 #副业 #Cursor', wechat: ['W2 就能把网站跑起来 · 真的会上瘾 💬','产品岗写完 PRD 不用等开发了 — 自己周末做完 🛠️','毕业接官网外包 — Demo 就能收定金 💰'], community: ['【真实反馈】\n"W2 跑出第一个网页"\n"周末自己做完想法"\n"接外包 Demo 就收定金"','学到一半就能产生作品 — 不用等毕业 🌿'] },
    p8: { title: '不只是视频课 是完整 Coding 工具箱', body: `同类课大多只给录播 📘\n\n这次买到手的：\n📘 108 节（直播 + 录播 + Lab + Quest + 自学）\n🧪 29 个浏览器 Lab\n🌟 5 节 AI Tutor Quest\n🎙️ 17 直播 · 约 46h\n\n+ 每个 Lab 独立成课\n+ AI Tutor 中英双语 24h\n+ PRD / 网站模板库\n+ Demo Day + 证书\n+ 学员社群持续更新`, tags: '#AICoding #Bootcamp #课程配置', wechat: ['108 课 + 29 Lab + 5 Quest + 17 直播 — 完整工具箱 💼','不是录播合集 — Lab 独立成课追踪进度。','第 2 期新加 5 Quest 是最大亮点 🌟'], community: ['【课程配置】\n📘 108 课 🧪 29 Lab\n🌟 5 Quest 🎙️ 17 直播\n🎓 Demo Day + 证书\n💬 AI Tutor 24h','对比过 3-4 家同类 — 带练深度这块没竞品。'] },
    p9: { title: '非技术又想抓 AI 这波的朋友', body: `2026 AI 红利不只在技术岗 🧡\n\n非技术背景抓 AI 最短路径：\n→ 5-8 周零代码入门\n→ Cursor 带你写真代码\n→ 毕业手上有能上线的作品\n\n主页搜"匠人 AI · AI Coding"先看大纲。\n不着急报 — 先看方向合不合适 ☕`, tags: '#非技术AI #AICoding #职业规划 #Vibecoding', wechat: ['非技术抓 AI 红利最短路径 — AI Coding 🧡','不写代码也能吃 AI 红利 — 方向就叫 Vibe Coding。','新一期 AI Coding 实战课开放咨询 ☕'], community: ['【咨询窗口开放】\n零代码 · 5-8 周 · 108 课\n主页"匠人 AI · AI Coding" ☕\n看完大纲再决定要不要报','不会代码但想做产品的朋友 — 这是你的最佳切入点。'] },
    p10: { title: 'AI Coding 工程师一天到底在做什么', body: `2026 突然多了一个岗位叫 AI Coding 工程师 / Vibe Coder 🤔\n\n用一句话讲清：\n👉 不写语法 · 用自然语言让 AI 写代码的那群人。\n\n一天工作举例：\n• 早上：让 Cursor 改官网文案 + 加新板块\n• 下午：跟老板聊新 feature，回来让 AI 写\n• 傍晚：git push → Vercel 10 秒上线\n• 下周：给网站加 Chatbot + 知识库\n\n门槛：会用浏览器 · 出活：几周不是几年`, tags: '#AICoding #Vibecoding #新岗位 #Cursor #非技术', wechat: ['AI Coding 工程师 = 不写语法让 AI 写代码的人 💼','2026 新岗位，会用浏览器就能入门。','一图看懂 AI Coding 工程师一天在做什么 👇'], community: ['【新岗位 · 一句话讲清】\nAI Coding 工程师 / Vibe Coder\n= 不写语法，用自然语言让 AI 写代码\n门槛：会用浏览器 · 出活：几周','别被"工程师"吓到 — 不考语法，考你能不能描述清楚需求。'] },
    p11: { title: '报课前 vs 毕业后 具体多会什么', body: `报课最关心的不是课表，是"学完到底多会什么" 💪\n\n对比一下：\n🔸 编辑器：打开 VSCode 就关 → Cursor 里跟 AI 配合\n🔸 从 0 到 1：想法停 PPT → 一周出网站\n🔸 PRD：几条 bullet → 完整 User Story\n🔸 部署：没听过 Vercel → git push 自动上线\n🔸 AI 功能：只会聊天 → Coze Bot 嵌网站\n🔸 Bug：报错就崩 → 错误丢给 Cursor 解`, tags: '#AICoding #学习效果 #Cursor #Vercel', wechat: ['6 维度升级：编辑器 / 从 0 到 1 / PRD / 部署 / AI 功能 / Bug 💪','毕业水平从"聊天使用者"升到"独立开发者"。','报课前先看这张 — 知道自己会变什么样子。'], community: ['【能力升级】\n编辑器：VSCode 关掉 → Cursor\n想法：停 PPT → 一周上线\nPRD：几条 bullet → User Story\n部署：不会 → git push\nAI：聊天 → 嵌 Bot\nBug：崩 → 丢给 AI','每一条都能带回到工作里 🧡'] },
    p12: { title: '5 节 AI Tutor Quest 在你电脑上做', body: `第 2 期最大升级就是这 5 节 Quest 🌟\n\nQ01 装 Cursor + 第一个网页（30 min）\nQ02 用 AI 写完整 PRD（40 min）\nQ03 Cursor 搭官网首页（45 min）\nQ04 部署到 Vercel 上线（40 min）\nQ05 网站嵌入 AI Chatbot（45 min）\n\n不是 iframe 里的假练习 — 是 AI 主动带你在自己电脑上做真事。\n装完了吗？跑一下 claude --version 看输出是啥 — 这种追问式验证。`, tags: '#AICoding #AITutor #Quest #Cursor #Vercel', wechat: ['5 节 Quest 是第 2 期独家亮点 🌟','AI 主动带你装 Cursor / 推 Git / 上 Vercel。','在你自己电脑上做 — 不是 iframe 假练习。'], community: ['【5 Quest 全列表】\nQ01 装 Cursor（30 min）\nQ02 写 PRD（40 min）\nQ03 搭官网（45 min）\nQ04 部署 Vercel（40 min）\nQ05 嵌 Chatbot（45 min）','每节产出一件真作品 — 而不是一堆截图 🌟'] },
    p13: { title: '第 2 期把 Lab 和 Quest 全部独立成课', body: `第 1 期学员最大的吐槽就是"Lab 找不到" 🔥\n\n第 2 期结构全改了：\n01 Lab 独立成 Lesson — 不再塞 steps 里\n02 新增 5 Quest — AI 主动带练\n03 Learn 章节独立成课\n04 Wiki 也独立\n05 进度可单独追踪\n06 108 节 lesson 总量\n\n以前藏在别的 lesson 里的 40+ 节，全部翻出来单独列。`, tags: '#AICoding #第2期 #课程升级 #Vibecoding', wechat: ['第 2 期结构大升级 — Lab / Quest / Learn 全部独立 🔥','以前塞在 steps 里找不到的内容 — 第 2 期都拉出来单独列。','108 节课是把之前藏起来的全部 surfaced。'], community: ['【第 2 期 6 个升级】\n01 Lab 独立成课\n02 新增 5 Quest\n03 Learn 独立成课\n04 Wiki 独立\n05 进度可追踪\n06 108 节总量','同样的内容 · 找得到 = 用得上 · 大多数平台做不到。'] },
    p14: { title: '这 4 类人学完 AI Coding 回报最高', body: `经常被问"我这个身份适合学吗" 💼\n\n客观说 4 类：\n🚀 有想法的创业者 — 找外包贵等开发慢，自己做最快\n🔄 传统行业转型 — 做 5-10 年 PPT / 报表，想跟上 AI\n💼 想副业的打工人 — 周末接官网外包 / 做小工具\n📊 产品 / 运营岗 — 小功能不求开发，自己直接做\n\n不需要 CS — 需要有想做的产品。`, tags: '#AICoding #非技术 #副业 #创业 #产品经理', wechat: ['4 类人学 AI Coding 回报最高 💼','有想做的产品就够 — 不需要 CS 背景。','非技术抓 AI 风口 — AI Coding 最短路径。'], community: ['【适合人群】\n🚀 有想法的创业者\n🔄 传统行业转型\n💼 想副业的打工人\n📊 产品 / 运营岗','不需要 CS · 需要有想做的东西 ✅'] },
    p15: { title: '29 Lab + 5 Quest 按 Phase 分布', body: `买课最怕被动听课 🧪\n\n29 个 Lab + 5 Quest 分布：\n🟠 P0 工具准备 × 4\n🟡 P1 PRD 实战 × 6\n🟢 P2 网站搭建 × 11\n🔵 P2 部署上线 × 3\n🟣 P3 AI 功能 × 5\n🌟 Quest 带练 × 5\n\n每个 Lab 独立成 Lesson — 进度可追踪。`, tags: '#AICoding #互动Lab #Quest #Cursor', wechat: ['29 Lab + 5 Quest 按 Phase 分布 🧪','每个 Lab 独立成 Lesson — 进度可单独追踪。','P2 网站搭建 11 个 Lab — 动手最多的阶段。'], community: ['【29 Lab 分布】\nP0 工具 4 · P1 PRD 6\nP2 网站 11 · P2 部署 3\nP3 AI 功能 5 · Quest 5','动手比例比市面上高一个量级 ✅'] },
    p16: { title: '基础班 5 周 进阶班 8 周两种节奏', body: `报课前看清楚节奏很重要 📅\n\n📅 W1 工具 + PRD 起步\n📅 W2 完整 PRD + 原型\n📅 W3-4 搭网站 + 部署上线\n📅 W5 基础班毕业（作品上线 + Demo）\n📅 W6-8 Phase 3 进阶（AI 功能）\n\n基础班够出一个上线网站 · 进阶班加 AI 功能。可自选节奏。`, tags: '#AICoding #学习路径 #5周 #8周', wechat: ['基础班 5 周 · 进阶班 8 周 · 按需自选 📅','W5 就能拿到 .vercel.app URL — 真的上线。','想做带 AI 功能的产品 → 选 8 周进阶。'], community: ['【两种节奏】\n基础班 5 周：做上线网站\n进阶班 8 周：+ AI 功能\n\n不想做 Chatbot 可以只选 5 周 ✅'] },
    p17: { title: '5-8 周后你手上会有这些真产品', body: `买课最怕听完就完了 📂\n\n这次毕业手上有这些真作品：\n01 个人官网 / 简历站（Hero + 作品集 + 域名）\n02 产品落地页（能收邮箱预售）\n03 带 Chatbot 的网站（客服 / 售前）\n04 小型 SaaS 工具（表单 + 数据库 + AI）\n05 接官网外包的底气（能报价能交付）\n06 自己的作品集（4-6 个上线作品）\n\n都是能真点开访问的。`, tags: '#AICoding #毕业作品 #作品集', wechat: ['毕业 6 件真作品 — 都是能点开访问的 📂','作品集直接放 LinkedIn / 简历 / 自媒体。','能接外包的底气 — 比任何证书都有说服力。'], community: ['【毕业 6 产品】\n01 个人官网\n02 落地页\n03 Chatbot 网站\n04 小型 SaaS\n05 外包底气\n06 作品集','每一个都是你的 Demo URL 🧡'] },
    p18: { title: '不是录播合集 4 种学法组合', body: `买课最大的浪费是买了不做只听 📚\n\n这次 4 种学法组合：\n🎙️ 17 节直播 — 老师带做 + 现场改代码\n🧪 29 个 Lab — 浏览器里写代码即时反馈\n🌟 5 Quest — AI 主动在你电脑上带练\n🤖 AI Tutor 24h — 中英双语随时问\n\n直播 + Lab + Quest + 问答四管齐下。`, tags: '#AICoding #学习方式 #AITutor', wechat: ['4 种学法组合：直播 + Lab + Quest + AI Tutor 📚','Quest 是今年最大的升级 — AI 主动带节奏。','不是录播合集 — 边做边学 + 随时答疑。'], community: ['【4 种学法】\n🎙️ 17 直播\n🧪 29 Lab\n🌟 5 Quest\n🤖 AI Tutor 24h','直播讲 · Lab 练 · Quest 带 · Tutor 答 = 闭环 ✅'] },
    p19: { title: '最后一周 你会展示自己的上线网站', body: `毕业 Demo Day 不是走形式 — 是你真把作品给大家看 🎤\n\nWeek 5（或 8）你会：\n🎯 选题：挑自己真在用 / 想做的产品\n🛠️ 动手搭：Cursor + Quest + Lab 一起用\n🚀 部署上线：推 Vercel 拿到公网 URL\n🎤 Demo 展示：5-10 分钟介绍自己的作品\n\n🎓 带走：结业证书 + 作品集 URL\n能点开访问的 Demo 比任何简历都有说服力。`, tags: '#AICoding #DemoDay #作品集', wechat: ['毕业 Demo Day + 证书 + 作品 URL 🎤','能点开访问的 Demo 比简历值钱 10 倍。','基于自己想做的产品 — 毕业作品就能直接用。'], community: ['【毕业流程】\n🎯 选题\n🛠️ 动手搭\n🚀 Vercel 上线\n🎤 Demo 展示\n🎓 证书 + URL'] },
    p20: { title: 'Vibe Coding vs 传统学编程 差在哪', body: `有人担心"零基础学编程太难"— 其实你学的不是传统编程 🔄\n\n6 维度对比：\n🔸 门槛：学语法 VS 会用浏览器\n🔸 时长：几年出活 VS 几周出活\n🔸 怎么写：背文档 VS 跟 AI 描述\n🔸 遇错：Stack Overflow VS 丢给 AI\n🔸 顺序：数据结构 → 算法 VS 直接做项目\n🔸 目标：成为程序员 VS 做出想做的产品`, tags: '#Vibecoding #AICoding #学习路径', wechat: ['Vibe Coding vs 传统编程 6 维度对比 🔄','门槛低 · 出活快 · 路径完全不同 — 不是学编程，是学做产品。','背语法的时代过去了 — 描述需求让 AI 写。'], community: ['【6 维度对比】\n门槛：语法 → 浏览器\n时长：几年 → 几周\n学习：背文档 → 描述需求\n报错：Stack Overflow → AI\n顺序：算法 → 做项目\n目标：程序员 → 做产品','学的路径完全不一样 — 不是"简化版编程"。'] },
    p21: { title: '报名前最常被问的 5 个问题', body: `整理了咨询最多的 5 个问题 👌\n\nQ1 要会编程吗？A 完全不用，从装 Cursor 开始\nQ2 Cursor 付钱吗？A 14 天试用够基础班\nQ3 AI 写的代码能用吗？A 能，课里教怎么检查\nQ4 学完能接外包吗？A 官网 / 落地页可以\nQ5 不会英语行吗？A 行，Cursor 支持中文提问`, tags: '#AICoding #FAQ #Cursor', wechat: ['AI Coding 常问 5 问：编程 / 付费 / 代码能用 / 外包 / 英语 👌','完全不用会编程 · Cursor 支持中文 · 14 天试用够学。','担心的问题这里先给答案 ✅'], community: ['【FAQ】\nQ 编程？A 完全不用\nQ 付费？A 14 天试用够\nQ 代码能用？A 能 + 教怎么检查\nQ 外包？A 官网 / 落地页可以\nQ 英语？A Cursor 支持中文'] },
    p22: { title: 'Vibe Coding 4 步循环 做到就不卡', body: `学 AI Coding 核心不是记语法 — 是记这套循环 🧭\n\n4 步：\n🟠 Describe 描述需求（要什么 / 给谁用）\n🟡 Generate AI 生成（Cursor 写代码）\n🟢 Check 检查结果（跑起来看对不对）\n🔵 Refine 指出问题（不对了跟 AI 说）\n\n卡壳多半是某一步漏了。课里每个 Lab 都按这套练。`, tags: '#Vibecoding #AICoding #方法论', wechat: ['Vibe Coding 4 步循环：描述 → 生成 → 检查 → 指出 🧭','卡壳 = 这 4 步漏了一步。','不是记语法 — 是记这套人机配合节奏。'], community: ['【4 步循环】\n🟠 Describe 描述\n🟡 Generate 生成\n🟢 Check 检查\n🔵 Refine 指出问题','每个 Lab 都在练这套 · 练熟了什么需求都能 vibe 💪'] },
    p23: { title: 'Quest 跟 Lab 到底有啥不一样', body: `很多人问 Quest 跟普通 Lab 区别在哪 🌟\n\n2 个核心差别：\n\n1️⃣ AI 主动 vs 被动\n普通 Lab：你问 AI 才答\nQuest：AI 先开口带节奏，追问验证，等你做完才推进\n\n2️⃣ 做的地方不一样\n普通 Lab：平台 iframe 内（自动校验）\nQuest：在你自己电脑上真装工具 / 真跑 git / 真推 Vercel\n\n第 2 期 5 节 Quest 是独家。`, tags: '#AICoding #Quest #AITutor #Vibecoding', wechat: ['Quest 跟 Lab 差别：AI 主动 + 真实环境 🌟','不是 iframe 假练习 — 真让你在自己电脑装 Cursor。','AI 会追问你"跑 claude --version 输出是啥" — 逼你做真事。'], community: ['【Quest vs Lab】\nLab：iframe · 被动 · 自动校验\nQuest：真电脑 · AI 主动 · 追问验证\n\n一个是练习 · 一个是带练 🌟','第 2 期 5 Quest 是最大亮点 — 以前没有的教学形式。'] },
    p24: { title: '学完 AI Coding 5 个出路可以挑', body: `大家最关心学完能干啥 💼\n\n5 个方向（不是大厂 JD 路线，面向非技术）：\n🚀 独立开发者 / SoloMaker — 门槛低\n📊 产品经理 → 全栈 PM — 最高性价比\n⚙️ 运营岗 → 会做工具 — 最受欢迎\n🔧 创业者 · 自己做 MVP — 省外包钱\n💰 接外包 · 官网 / 落地页 — 副业友好\n\n零 CS 背景就行。`, tags: '#AICoding #职业方向 #副业 #SoloMaker #非技术', wechat: ['5 个出路：独立开发 / 全栈 PM / 运营会做工具 / MVP / 外包 💼','不走大厂 JD 路线 — 面向非技术的 5 条路。','零 CS 背景就能入 — 门槛在想不想做。'], community: ['【5 个出路】\n🚀 独立开发 / SoloMaker\n📊 全栈 PM\n⚙️ 运营会做工具\n🔧 创业做 MVP\n💰 接外包副业','每一条都不需要 CS 背景 ✅'] },
    p25: { title: 'AI Coding 副业 / 独立开发收益参考', body: `整理了独立开发圈常见区间（非承诺）💰\n\n📐 官网 / 落地页外包：每单 500-3000\n🛠️ 小型 SaaS / 付费工具：月付 1-5K\n🤖 Chatbot 嵌入：每单 1000-3000\n💼 独立产品：取决流量和运营\n\n接到单 = 会做 + 会卖 + 会维护。课程负责第一块，后两块靠自己。`, tags: '#AICoding #独立开发 #副业收益', wechat: ['官网外包 500-3K · SaaS 月付 1-5K — 独立开发常见区间 💰','收益不保证 · 能力可以练出来 · 运营靠自己。','课程教你"会做" — 会卖会运营看自己。'], community: ['【副业参考区间】\n官网外包 500-3K / 单\nSaaS 1-5K / 月\nChatbot 1-3K / 单\n独立产品 · 取决运营\n\n均为圈子参考 · 非承诺收益 🧡','能接到单要三块：会做 + 会卖 + 会维护。课教第一块 — 后面靠运营。'] }
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
        { key: 'qun', label: '👥 社群',   color: '#f97316' }
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
