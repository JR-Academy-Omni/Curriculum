/* IT Career Coaching Bootcamp — 右侧文案面板 · 三通道 Tab */
(function () {
  const XHS_COPY = {
    p1: { title: '投了 200 简历都没回音？', body: `周三下午又一次面试 reject 邮件 🥲\n\n投了 3 个月，200 多份简历，就 2 个 phone screen — 是我不行吗？\n后来一个学长跟我说：不是你不行，是简历没过 ATS + LinkedIn 没人主动找你。\n\n他给我看了 IT Career Coaching Bootcamp — 12 周 479 节课覆盖：行业认知 → 简历 → 面试 → 谈薪 → 晋升。\n主页可以看完整大纲 ☕`, tags: '#澳洲找工作 #IT求职 #海外IT #简历 #面试 #程序员', wechat: ['投了 200 简历没回音？不是你不行 是方法问题 🥲','澳洲 IT 求职 12 周系统化方案 — 主页可以看大纲','简历过不了 ATS + LinkedIn 没人找你 = 求职 90% 的死穴。'], community: ['【IT Career Coaching Bootcamp 开放咨询】\n12 周澳洲 IT 全周期\n479 节课 + 31 Lab + 11 直播\n从找工作到升职加薪\n主页搜 匠人 AI 🌿','找工作 3 个月没结果的朋友看一下 — 系统化方法 比硬撑更重要。'] },
    p1b: { title: '能写代码 ≠ 你会找到好工作', body: `这是我转过 2 轮才学到的事 🥲\n\n会写代码的人很多 — 拿到好 Offer 的人很少。差距不在技术，在求职系统：\n\n❌ 海投简历 + 面试碰运气\n✅ 简历有公式 + STAR 故事库 + 谈薪有数据\n\n12 周把这套系统装到自己身上。主页可以看大纲 🌿`, tags: '#IT求职 #简历 #LinkedIn #面试 #程序员转型', wechat: ['能写代码 ≠ 会找好工作 — 求职是独立技能 🌿','投 200 拿不到 2 个面试？你需要的不是再投，是系统化方法。','技术 vs 求职 — 完全是两套能力。'], community: ['【现实差距】\n会写代码 ≠ 拿好 Offer\n投简历 ≠ 拿到面试\n面试技术好 ≠ 谈薪好\n这 3 件都需要单独学 🌿','一个学长跟我说的：技术是入场券，求职才是赢面。'] },
    p1c: { title: '从 Junior 到能拿 Staff Offer', body: `这两年最值得投资的求职方向：从 Junior 进阶到 Staff Engineer 💼\n\n之前：海投简历、面试紧张、不敢谈薪\n之后：被 recruiter 主动找、Multiple Offer、谈薪 +30%\n\n12 周完整路径，从 P1 行业认知 一路到 P10 晋升 + P13 大厂攻略。\n主页搜 IT Career Coaching ☕`, tags: '#职业规划 #IT求职 #程序员晋升 #澳洲IT', wechat: ['Junior → Staff Offer — 这是 12 年职业规划，不是 12 周课','从面试紧张 freeze 到主动选 Offer — 12 周路径在主页','晋升不靠等 — 主动 promo case + 跳槽节奏。'], community: ['【职业进阶路径】\nJunior → Mid → Senior → Staff\n每一阶都有不同打法\n12 周完整规划 ☕','卡在 Junior 上不去？不是技术问题，是没人教你怎么 promo。'] },
    p1d: { title: '在澳洲找 IT 只靠投简历没用', body: `2026 澳洲 IT 求职已经卷出新高度 ⚠️\n\n只会海投简历 = 永远 ghost。要的是这 6 块武器叠加：\n\n📄 简历优化（过 ATS）\n💼 LinkedIn 引流\n🎤 行为面试 STAR\n💻 技术面试系统\n💰 薪资谈判\n🚀 大厂攻略\n\n12 周一次性磨好。主页大纲可看 🌿`, tags: '#澳洲找工作 #IT求职 #简历 #LinkedIn #面试', wechat: ['2026 澳洲 IT 求职 6 块武器：简历 / LinkedIn / 行为面 / 技术面 / 谈薪 / 大厂 ⚠️','只投简历 = 海里捞针。系统化才是正确打开方式。','在澳洲 IT 找工作 — 你需要不止"会写代码"。'], community: ['【6 块求职武器】\n📄 简历过 ATS\n💼 LinkedIn 引流\n🎤 行为面 STAR\n💻 技术面系统\n💰 薪资谈判\n🚀 大厂攻略\n12 周一次磨好 🌿'] },
    p2: { title: 'DIY 求职 vs 系统化求职 差距很大', body: `不是你不努力 — 是方法不对 🥲\n\n❌ DIY 求职：自己改简历 N 版 / 紧张到 freeze / 接 first offer\n✅ 系统化：JD 反推 / STAR 故事库 / 数据谈薪 +30%\n\n12 周把这套系统装到你身上 — 不再靠运气找工作。\n主页可看完整大纲 ☕`, tags: '#IT求职 #求职方法 #简历优化 #面试技巧', wechat: ['DIY 求职 vs 系统化 — 差距在方法不在努力 💪','投 200 没回音 ≠ 你不行，是方法问题 🥲','12 周把求职系统装到身上 — 不再靠运气。'], community: ['【DIY vs 系统化】\nDIY：海投 + 紧张 + 接 first offer\n系统：JD 反推 + STAR + 谈薪 +30%\n方法决定结果','努力是基础 — 但方法决定上限。'] },
    p3: { title: '悉尼 IT 群里都在聊这事', body: `真实截图 — 悉尼 IT 群周二下午 💬\n\n小李：投了 3 个月就 2 个面试 我是不是不行？\n阿哲：不是你不行 是简历没过 ATS + LinkedIn 没人找你\n小李：那要怎么改… 自己改 10 版了\n阿哲：简历有公式 自己改不如系统学一下\n\n这场对话发生过几百次了 — 每个找工作的 IT 人都会遇到。`, tags: '#澳洲IT #IT求职 #程序员日常 #求职焦虑', wechat: ['悉尼 IT 群聊：投 200 没回音 怎么办？💬','找工作的痛：自己改 N 版简历还是没用 🥲','技术 OK 但 Offer 没来？看看是不是系统问题。'], community: ['【真实对话】\n投了 3 个月 2 个面试\n→ 简历没过 ATS\n→ LinkedIn 没人找\n→ 系统化方法可以解\n这场对话每天都在发生 💬'] },
    p4: { title: '毕业那天 你会真的会这四件事', body: `12 周 IT Career Coaching 的具体落地 📌\n\n1️⃣ 简历 + LinkedIn 双修 — 过 ATS + 让 HR 主动找你\n2️⃣ 行为 + 技术面试通关 — STAR 库 + 算法 + 系统设计\n3️⃣ 谈薪 +30% 不是运气 — 数据 + 话术 + 不留钱在桌\n4️⃣ Junior → Staff 路径 — 主动 promo case + 跳槽节奏\n\n每一项都有配套 Lab 和模板。`, tags: '#IT求职 #面试 #谈薪 #职业规划', wechat: ['毕业 4 件事：简历 / 面试 / 谈薪 / 晋升 — 都是真技能 💪','12 周不学概念 — 学的是能直接用的方法论。','Junior → Staff 完整路径 — 不只是入门求职课。'], community: ['【毕业 4 件事】\n✅ 简历 + LinkedIn\n✅ 面试通关\n✅ 谈薪 +30%\n✅ 晋升路径\n每件都有 Lab 📌'] },
    p5: { title: '12 周 14 个 Part 全周期路径', body: `市面 IT 求职课大多停在"简历 + 面试" — 这门课覆盖 14 个 Part 完整生命周期 🗺️\n\nP1 行业认知 → P2 规划 → P3 简历 → P4 LinkedIn → P5 投递 → P6-P9 面试 + 谈薪 → P10 晋升 → P11-P12 终身学习 → P13 大厂 → P14 结营\n\n这才是从 Junior 到 Staff 的完整路径。`, tags: '#IT求职 #职业规划 #程序员晋升 #课程大纲', wechat: ['14 个 Part 覆盖 IT 职业全周期 🗺️','不只是求职课 — 是 Junior → Staff 的完整路径。','行业 / 简历 / 面试 / 谈薪 / 晋升 / 大厂 — 一门课全包。'], community: ['【14 Part 全景】\nP1-P5 求职准备\nP6-P9 面试通关\nP10 晋升\nP11-P12 终身学习\nP13 大厂\nP14 结营 🗺️'] },
    p6: { title: '澳洲 IT 求职 15+ 真实工具栈', body: `不是工具课 — 是工具 + 方法论 🛠️\n\n📄 简历：Jobscan / Notion 模板 / Greenhouse / Workday\n💼 LinkedIn 引流 + Seek / Indeed 投递\n💻 LeetCode / NeetCode / System Design Primer\n🎤 Pramp 模拟面试 + Glassdoor 面经\n💰 levels.fyi 薪资数据\n🤖 Cursor / Claude Code / ChatGPT AI 助手\n\n每个工具都有具体怎么用。`, tags: '#IT求职工具 #LinkedIn #LeetCode #levelsfyi #程序员', wechat: ['IT 求职 15+ 工具栈 — 每个都有具体用法 🛠️','LinkedIn / LeetCode / levels.fyi / Cursor — 真实在用的工具。','工具不是越多越好 — 是用对场景。'], community: ['【15+ 工具栈】\n简历：Jobscan / Notion\n投递：Greenhouse / Workday\n面试：LeetCode / Pramp\n薪资：levels.fyi\nAI：Cursor / Claude Code 🛠️'] },
    p7: { title: '简历改完一周就有人约面试', body: `学员群里几条让我意外的反馈 💬\n\n"P3 简历章节做完，重投一周 3 个 phone screen，之前自己改 10 版都没用"\n"行为面试练完 STAR，最后那个面试 HR 当晚就给 Offer"\n"谈薪那一节 +22%，一节课赚回学费"\n\n不是编的数据，就是普通工程师日常。`, tags: '#学员反馈 #IT求职 #面试经验 #谈薪', wechat: ['学员反馈：简历改完一周 3 个 phone screen 💬','谈薪那一节 +22% — 一节课赚回学费 💰','行为面试练 STAR — HR 当晚给 Offer 🎤'], community: ['【真实反馈】\n"重投一周 3 个 phone screen"\n"HR 当晚给 Offer"\n"谈薪 +22% 赚回学费"\n普通工程师日常 💬'] },
    p8: { title: '不只是 12 周课 是完整求职操作系统', body: `看了一圈同类课，要么只讲算法，要么只讲简历 📘\n\n这次买到手的：\n📘 479 节课（视频 + Lab + 直播）\n🧪 31 个浏览器互动 Lab\n📺 277 节视频课覆盖行业到大厂\n🎙️ 11 次 Group Tutorial\n\n+ 21 节 AI 求职专题\n+ 7 次模拟面试 + 2 次薪资谈判\n+ 入营 + 结营测试\n+ 简历 / LinkedIn / STAR 模板包`, tags: '#IT求职 #Bootcamp #程序员 #职业培训', wechat: ['479 节课 + 31 Lab + 11 直播 + 21 AI 求职专题 — 完整求职操作系统 💼','不是录播合集 — 是课程 + Lab + 模板 + 社群一整套。','21 节 AI 求职专题：用 AI 写简历 / 模拟面试 / 分析 Offer。'], community: ['【你买到的】\n📘 479 节课\n🧪 31 Lab\n🎙️ 11 直播\n🤖 21 AI 求职\n📊 入营 + 结营测试\n📂 全套模板包'] },
    p9: { title: '正在找 IT 工作 或想升职加薪', body: `2026 澳洲 IT 求职市场不友好 — 但有方法的人还是能拿到 Offer 🌿\n\n如果你正在：\n→ 投简历没回音\n→ 面试通过不了\n→ 想跳大厂但不知道怎么准备\n→ 在职但晋升停滞\n\n不妨看看 IT Career Coaching Bootcamp — 主页大纲全公开，先看方向对不对 ☕`, tags: '#IT求职 #澳洲找工作 #程序员晋升 #职业规划', wechat: ['正在找工作或想升职？大纲全公开 主页可看 🌿','澳洲 IT 求职新一期开放咨询，先看方向对不对 ☕','不卖焦虑 — 但 2026 求职是真的难，方法很重要。'], community: ['【咨询窗口开放】\nIT Career Coaching Bootcamp\n12 周 · 479 节 · 31 Lab\n大纲全公开\n主页搜 匠人 AI · IT Career ☕'] },
    p10: { title: 'IT Career Coaching 一周到底学什么', body: `这不是一门"求职速成班" — 是 12 年职业生涯怎么走的路径图 🗺️\n\n一句话讲清：\n👉 IT Career Coaching = 不是教你"投简历"，是教你 12 年怎么一步步升到 Staff。\n\n一周节奏：\n• 周一：自学视频 + 互动 Lab 改简历\n• 周三：直播 Group Tutorial 模拟面试\n• 周末：用 STAR 模板写自己的故事库\n• 下周：把简历投出去看真实反馈调整\n\n12 周 · 479 节 · 不只解决眼下找工作。`, tags: '#IT求职 #职业规划 #Bootcamp', wechat: ['IT Career = 12 年职业生涯路径图，不只是求职课 🗺️','一周节奏：自学 + Lab + 直播 + 实投反馈调整','不教你套路 — 教你一辈子的求职 / 晋升思维。'], community: ['【课程定位】\nIT Career Coaching\n= 12 年职业生涯路径图\n不只是求职 — 是规划\n12 周 · 479 节 · 199h 🗺️'] },
    p11: { title: '报课前 vs 毕业后 多会什么', body: `报课最关心的不是大纲 — 是"学完到底多会什么" 💪\n\n6 维度对比：\n🔸 简历：自己改 10 版 → JD 反推优化\n🔸 LinkedIn：没人找 → 每周 2-3 inMail\n🔸 行为面：紧张 freeze → 30+ STAR 故事\n🔸 技术面：算法忘了 → 88 节系统拆\n🔸 谈薪：接 first offer → +20-30%\n🔸 晋升：等领导 → 主动 promo case`, tags: '#IT求职 #能力升级 #面试 #谈薪', wechat: ['6 维度看课程效果：简历 / LinkedIn / 行为面 / 技术面 / 谈薪 / 晋升 💪','报课前先看这张 — 学完具体多会什么。','每一维都从"卡住"到"主动"。'], community: ['【6 维升级】\n简历：N 改 → JD 反推\n面试：紧张 → STAR 库\n谈薪：first offer → +30%\n晋升：等 → 主动 case 💪'] },
    p12: { title: '大厂求职不是玄学是套路', body: `Part 11 大厂求职 整整 40 节深拆 🎯\n\n🎯 FAANG / Atlassian 各家招聘流程拆解\n📚 30+ 经典系统设计题 + 大厂判分标准\n🎤 Phone + Onsite 每轮 45 分钟时间分配\n🗣️ Amazon LP / Google googleyness / Atlassian Values\n\n大厂招聘有套路 — 知道套路就能准备。`, tags: '#FAANG #大厂求职 #系统设计 #程序员', wechat: ['大厂求职不是玄学 — Part 11 整整 40 节拆解 🎯','FAANG / Atlassian 招聘套路全公开。','Amazon LP / Google googleyness — 知道考点才能准备。'], community: ['【Part 11 · 大厂求职】\n40 节深拆\nFAANG / Atlassian / Big Banks\n系统设计 30+ 题\n行为面试 LP / Values 全套 🎯'] },
    p13: { title: '面试别只刷算法 真考 4 层能力', body: `很多人面试只准备技术 — 结果 1/4 都没覆盖 🥲\n\n面试真正考 4 层：\n🔵 L1 面试基础（18 节）— 准备 / 心态 / 节奏\n🟣 L2 行为面试（30 节）— STAR 库 + 30+ 高频\n🟠 L3 技术面试（88 节）— 算法 + 系统设计\n🔴 L4 谈薪 + Offer（23 节）— 不留钱在桌\n\n4 层都强 = 拿 Offer 概率最高。`, tags: '#面试 #IT面试 #STAR #系统设计 #谈薪', wechat: ['面试 4 层能力：基础 / 行为 / 技术 / 谈薪 — 别只刷算法 🥲','技术好但行为面 freeze = 50% Offer 直接没了。','谈薪那 23 节 — 是回报最高的部分。'], community: ['【面试 4 层】\nL1 基础 18 节\nL2 行为 30 节\nL3 技术 88 节\nL4 谈薪 23 节\n4 层都强 = 拿 Offer 概率最高 🎤'] },
    p14: { title: '这 4 类人学完回报最高', body: `经常被问"我适不适合学" — 客观说这 4 类人回报最高 💼\n\n🎓 澳洲 IT 应届 / 留学生 — 没经验 / 不会写澳洲简历\n🌏 海外 IT 移民 — 技术过硬但找不到 local job\n💼 2-5 年 Junior 想跳大厂 — 卡在 mid 上不去\n🚀 5+ 年想冲 Staff — 晋升停滞 / 谈薪不会\n\n找工作 / 想升职 — 都适合。`, tags: '#IT求职 #澳洲移民 #程序员晋升 #FAANG', wechat: ['这 4 类人学 IT Career Coaching 回报最高 💼','澳洲应届 / 海外移民 / Junior 跳大厂 / Senior 冲 Staff','找工作 / 想升职 / 想换方向 — 都覆盖。'], community: ['【适合人群】\n🎓 澳洲应届 / 留学生\n🌏 海外 IT 移民\n💼 2-5 年想跳大厂\n🚀 5+ 年冲 Staff'] },
    p15: { title: '31 个 Lab 不只是听 是动手', body: `课程最值钱的部分是 Lab — 不是听 是真做 🧪\n\n📄 简历 Lab × 8：ATS 检测 / JD 反推 / Bullet 公式\n💼 LinkedIn Lab × 5：关键词 / Headline / About\n🎤 STAR 故事 Lab × 6：挖掘 / 写故事 / 量化\n💻 算法 Lab × 4：白板 coding / 边讲边写\n🏗️ 系统设计 Lab × 4：需求 / 架构 / 取舍\n💰 谈薪 Lab × 4：话术 / Offer 对比 / counter\n\n每个 Lab 都是浏览器内即时反馈。`, tags: '#互动Lab #IT求职 #简历 #STAR', wechat: ['31 个浏览器 Lab — 不是听课是真做 🧪','简历 8 / LinkedIn 5 / STAR 6 / 算法 4 / 系统 4 / 谈薪 4','买课最怕被动听 — 这次每环节都有 Lab。'], community: ['【31 Lab 分布】\n简历 8 · LinkedIn 5\nSTAR 6 · 算法 4\n系统 4 · 谈薪 4\n全部浏览器跑 🧪'] },
    p16: { title: '从认知到 Offer 12 周完整路径', body: `看时间线就知道 12 周一点都不短 📅\n\nW1-2 行业认知 + 职业规划\nW3-4 简历 + LinkedIn + 投递\nW5-7 面试通关（基础 + 行为 + 技术 88 节）\nW8-9 谈薪 + Offer 决策\nW10-11 晋升 + 持续成长\nW12 大厂攻略 + 结营测试\n\n每周都有具体交付。`, tags: '#IT求职 #学习路径 #12周', wechat: ['12 周从行业认知到 Offer 拿到 📅','每周都有具体交付 — 不是"听完就过"。','面试通关 5-7 周整整 3 周深拆 88 节技术。'], community: ['【12 周节奏】\nW1-2 认知 + 规划\nW3-4 简历 + LinkedIn\nW5-7 面试通关\nW8-9 谈薪\nW10-11 晋升 + 学习\nW12 大厂 + 结营 📅'] },
    p17: { title: '毕业带走 7 件真东西', body: `不是听完就完了 — 带走的 7 件东西 📂\n\n01 过 ATS 的简历（多版本）\n02 引流 LinkedIn（关键词 + Headline）\n03 STAR 故事库（30+ 自己的版本）\n04 算法 + 系统设计笔记\n05 谈薪 playbook（话术 + counter）\n06 晋升 promo case 模板\n07 结业证书 + 测试报告\n\n每件都能直接用。`, tags: '#IT求职 #毕业交付 #简历 #STAR', wechat: ['毕业 7 件真东西 — 不是听完就完了 📂','简历 / LinkedIn / STAR / 算法 / 谈薪 / Promo case','结业证书 + 测试报告 直接放 LinkedIn 📊'], community: ['【7 件交付】\n01 过 ATS 简历\n02 引流 LinkedIn\n03 STAR 故事库\n04 技术面笔记\n05 谈薪 playbook\n06 Promo case\n07 证书 + 报告 📂'] },
    p18: { title: '4 种学法组合 不是录播合集', body: `买课最大浪费 = 买了不做只听 📚\n\n4 种学法组合：\n📺 277 节视频 — 自己控节奏\n🧪 31 个互动 Lab — 浏览器即时反馈\n🎙️ 11 次 Group Tutorial — 直播模拟面试\n🤖 AI Tutor + 校友群 — 24h 答疑 + 内推\n\n听课 + 动手 + 模拟 + 答疑 — 学习闭环。`, tags: '#学习方法 #Bootcamp #IT求职', wechat: ['4 种学法组合：视频 / Lab / 直播 / AI Tutor 📚','11 次 Group Tutorial 真实模拟面试 — 是这门课灵魂。','听 + 做 + 模拟 + 答疑 = 闭环。'], community: ['【4 种学法】\n📺 277 视频\n🧪 31 Lab\n🎙️ 11 直播 Tutorial\n🤖 AI Tutor + 校友群'] },
    p19: { title: '入营 + 结营测试 量化你的进步', body: `这是这门课最特别的地方 — 学完到底进步多少 有数据可看 📊\n\n📝 入营测试：开课前评估基础\n🎯 每 Phase 小测：跟进进度\n🎤 模拟面试评分：导师 + 录像复盘\n📊 结营测试：对比量化报告\n\n+ 🎓 结业证书可贴 LinkedIn / 简历 / Promo case\n\n不再"学完不知道学到啥"。`, tags: '#结业证书 #学习成果 #IT求职 #量化', wechat: ['学完到底进步多少 — 入营 + 结营测试给你数据 📊','结业证书 + 测试报告可贴 LinkedIn 🎓','导师评分 + 录像复盘 — 模拟面试不糊弄。'], community: ['【可量化成果】\n📝 入营测试\n🎯 Phase 小测\n🎤 模拟面试评分\n📊 结营对比报告\n🎓 证书 + 报告 📊'] },
    p20: { title: 'DIY 求职 vs 系统化 8 维对比', body: `想清楚 DIY 和系统化的差距 = 报课决定 90% 完成 🔄\n\n8 个维度：\n📄 简历 / 💼 LinkedIn / 📤 投递 / 🎤 行为面 / 💻 技术面 / 💰 谈薪 / 🚀 晋升 / 📚 长期\n\n左边是"自己摸"— 右边是"有方法"。\n方法决定上限 — 努力决定下限。`, tags: '#求职方法 #IT求职 #系统化', wechat: ['DIY vs 系统化 8 维对比 — 方法决定上限 🔄','自己改 10 版简历 vs JD 反推优化 — 完全两回事。','努力是基础 — 方法决定能不能赢。'], community: ['【8 维对比】\n简历 · LinkedIn · 投递\n行为面 · 技术面 · 谈薪\n晋升 · 长期\n左边 DIY · 右边系统化 🔄'] },
    p21: { title: '报名前最常被问的 5 个问题', body: `整理了 5 个高频问题 直接给答案 👌\n\nQ1 在职还需要学吗？A 尤其需要 — 议价权 + Promo 才是回报最高\nQ2 没找到工作能学吗？A 完美适配 — P1-P9 完整流程\nQ3 12 周学得完？A 能 — 平均每周 10-15h 灵活组合\nQ4 和 LeetCode 课区别？A LeetCode 只是 1/4，我们覆盖全周期\nQ5 毕业能继续学？A 能 — 绑定 JR 平台 75+ 资源`, tags: '#IT求职 #FAQ #Bootcamp', wechat: ['5 个高频问题 — 直接答 👌','在职跳槽 vs 失业找工作 — 都适配。','和 LeetCode 课区别？— 我们覆盖全周期不只算法。'], community: ['【FAQ】\n在职：要学 — 谈薪 / 晋升回报最高\n失业：完美 — P1-P9 完整流程\n12 周：能 — 10-15h/周\n继续学：能 — 绑定 75+ 资源'] },
    p22: { title: '行为面试 90% 都用 STAR', body: `STAR 框架很多人听过 — 但用得好的不多 🎯\n\nS Situation：1 句话讲背景 — 不要长篇 setup\nT Task：你的角色 + 明确 deliverable\nA Action：具体做了什么 — 用"我"不用"我们"\nR Result：量化数字 — % / $ / 时间 三选一\n\n这门课 30 节专门讲 STAR + 30+ 高频问题 + 你自己的故事库。`, tags: '#行为面试 #STAR #面试技巧 #IT求职', wechat: ['STAR 框架：S 情景 T 任务 A 行动 R 结果 🎯','行为面试 90% 用 STAR — 但用得好的人很少。','30 节专门讲 STAR + 自己的故事库。'], community: ['【STAR 框架】\nS 1 句背景\nT 你的角色\nA "我"做了什么\nR 量化结果\n30 节 + 30+ 高频问题 🎯'] },
    p23: { title: '别的求职课没有这 2 个独家模块', body: `找到工作 ≠ 终点 — v3.1 新增 2 个独家模块 🔥\n\n🧠 Module X · AI 时代终身学习（42 节）\n— 入职第一天就开始过时？教你用 Cursor / Claude Code 持续学习\n\n🚀 Module Y · 职业方向深度发展（39 节）\n— 5 年后想成为什么？技术专家 / 管理 / 架构师 / 创业\n\n这 2 块决定你 5 年后的位置。`, tags: '#职业规划 #AI编程 #Cursor #ClaudeCode #程序员晋升', wechat: ['v3.1 新增 2 模块：AI 终身学习 + 职业方向深度发展 🔥','42 节 AI 学习 + 39 节方向规划 — 别的课没有。','5 年后你想成为什么？— Module Y 给你答案。'], community: ['【独家 2 模块】\n🧠 Module X · AI 终身学习 42 节\n🚀 Module Y · 方向深度发展 39 节\n找到工作不是终点 — 5 年后的位置才是 🔥'] },
    p24: { title: '15 份澳洲 IT JD 课程覆盖 95%', body: `报课前我做的事：扒 15 份澳洲头部公司 JD 📊\n\n• 简历 + ATS — 98%（15/15 JD）\n• LinkedIn — 95%（14/15）\n• 行为面试 STAR — 97%（15/15）\n• 技术面 / 算法 — 93%（13/15）\n• 系统设计 — 90%（10/15）\n• 谈薪 / Offer — 95%（15/15）\n\nJD 来源：Atlassian / Canva / CommBank / Westpac / Google / Microsoft / Amazon AU 等。`, tags: '#澳洲IT #JD #IT求职', wechat: ['扒 15 份澳洲 IT JD — 课程覆盖 95% 📊','Atlassian / Canva / CommBank / Google AU 全覆盖','按 JD 反推课程 — 这是最靠谱的方法。'], community: ['【JD 覆盖】\n简历 98% · LinkedIn 95%\n行为面 97% · 技术面 93%\n系统设计 90% · 谈薪 95%\n来源：Atlassian / Canva / CBA / Google / Amazon AU 📊'] },
    p25: { title: '澳洲 IT 工程师能拿多少钱', body: `levels.fyi + Glassdoor + Seek 2026 数据 💰\n\n💰 Junior（0-2 年）：$80K-$120K\n💰 Mid-Senior（3-7 年）：$130K-$200K\n💰 Staff+（7+ 年）：$200K-$350K+\n\n部分公司：\n• Atlassian / Canva：$120K-$230K\n• Google AU：$160K-$320K\n• Amazon AWS：$140K-$280K\n• CommBank / Westpac：$130K-$230K\n\n数据给自己定位用 🙏`, tags: '#澳洲IT #程序员薪资 #levelsfyi', wechat: ['澳洲 IT 薪资 2026：Junior $80-120K · Senior $200K+ 💰','Atlassian / Canva / Google AU / Amazon AWS 真实区间','薪资数据 = 谈薪武器。'], community: ['【澳洲 IT 薪资 2026】\nJunior $80-120K\nMid $130-200K\nStaff+ $200-350K+\n\nAtlassian $120-230K\nGoogle AU $160-320K\nAmazon $140-280K 💰'] }
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
        { key: 'qun', label: '👥 社群',   color: '#3b82f6' }
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
