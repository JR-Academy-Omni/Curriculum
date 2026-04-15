/* AI Engineer 全栈项目班 第 30 期 — 右侧文案面板 · 三通道 Tab */
(function () {
  const XHS_COPY = {
    p1: { title: 'Junior AI Engineer 入门首选', body: `这是 2026 最值得报的一门全栈班 🌿\n\n不是普通全栈 — 是"全栈 + AI 集成"。毕业直接对标 Junior AI Engineer 岗位。\n\n16 周 · 485 节 · 3 个实战项目（含 1 个 AI 商业项目）· AI 实习 · 12 个月求职辅导。\n第 30 期 2026 Q2+ 筹备中，主页大纲可以先看 ☕`, tags: '#AI工程师 #转码 #Bootcamp #澳洲IT #留学生找工作 #全栈', wechat: ['Junior AI Engineer 入门首选 — 16 周全栈 + AI 🌿','2026 转码新方向：全栈 + AI，不是分开的两段。','第 30 期筹备中 2026 Q2+，可以先看 26-28 期大纲。'], community: ['【AI Engineer 全栈项目班 · 第 30 期】\n16 周 · 485 节 · 3 个项目\nJunior AI Engineer 入门首选\n2026 Q2+ 开课 · 主页大纲 ☕','转码 / 留学生 / 想进 AI 产品 — 这门课比纯算法课更实用。'] },
    p1b: { title: '会写 React 不等于会做 AI 产品', body: `这是看 2026 Junior JD 总结的 📍\n\n会 React / 会 Node 的人很多 — 但 AI 产品要的不是两段分开的技术。\n\n要的是：从前端 UI 到后端 API 到 RAG 集成的端到端能力。\n第 30 期整整 16 周把这条链路走通。主页大纲可看 🌿`, tags: '#AI工程师 #全栈 #RAG #React #Nodejs #Junior', wechat: ['会 React ≠ 能做 AI 产品 — 差距在端到端交付 📍','写过 Demo 的人多 — 写过生产 AI 产品的人少。','全栈 + AI 集成 — 2026 Junior 的新基线。'], community: ['【认知差距】\n会 React + 会 Node ≠ 会做 AI 产品\n需要：端到端交付能力\n16 周补齐这条链路 🌿','简历写"会 React + OpenAI API"很多人 — 面试让现场跑能过的很少。'] },
    p1c: { title: '从零到能交付 AI 产品', body: `这半年转码 + 转 AI 的黄金路径 💼\n\n入学：没作品 / 没团队协作经验 / 不会 AI\n毕业：3 个项目 + AI 实习履历 + 12 个月求职辅导\n\n不是个人做作品 — 是跟 BA / DevOps / UI 真团队协作。简历最有说服力的那种经验。\n\n第 30 期 2026 Q2+，主页大纲 ☕`, tags: '#转码 #AI转型 #Junior #Bootcamp', wechat: ['零基础 → Junior AI Engineer — 16 周路径 💼','简历最有说服力：真团队协作 + AI 实习。','第 30 期 2026 Q2+ 筹备中 ☕'], community: ['【转码路径】\nDay 0：没作品\nWeek 16：3 项目 + AI 实习\n路径在主页大纲里 💼'] },
    p1d: { title: '2026 Junior AI 要会这 6 块技能', body: `对照 15 份澳洲 Junior AI Engineer JD 📍\n\n要的技能栈：\n✅ React（前端）\n✅ Node.js / .NET / Python（后端任一）\n✅ RAG（AI 检索）\n✅ OpenAI API（AI 集成）\n✅ Agile（团队协作）\n✅ AI 产品经验（能讲能跑）\n\n16 周一次性装上。`, tags: '#JuniorAI #技能栈 #AI求职 #全栈', wechat: ['2026 Junior AI 要会 6 块技能：React / Node / RAG / OpenAI / Agile / 项目 📍','技能栈 = 面试通行证。缺一都尴尬。','16 周一次性补齐 — 主页大纲可看。'], community: ['【6 块核心技能】\nReact / Node / RAG / OpenAI / Agile / 项目\n对照澳洲 JD 总结\n16 周补齐 📍'] },
    p2: { title: '写 Demo vs 能交付 差距很大', body: `Junior AI Engineer 面试最容易翻车的点：简历写得好 → 现场跑不起来 🥲\n\n❌ Demo 级：Notebook 里能跑 / 真实业务崩\n✅ 生产级：前端到 AI 集成 + Agile 流程打通\n\n16 周练的是"能交付"这件事 — 不是多背工具名。`, tags: '#AI求职 #面试 #JuniorAI #Demo', wechat: ['写 Demo ≠ 能交付 — 面试最容易翻车 🥲','简历会写 / 现场跑不起来 = 白搭。','16 周把"能交付"装到身上。'], community: ['【Demo vs 生产】\nNotebook 能跑 ≠ 上线能跑\n面试考的是端到端交付\n16 周练这件事 🥲'] },
    p3: { title: '转码求职群都在聊这事', body: `实际聊天截图 — 2026 澳洲 Junior 求职群 💬\n\n小雨："会 React 会 Python 怎么还是没 Offer？"\n阿哲："会分开的技能 ≠ 会做产品，面试考端到端"\n小雨："要怎么练…"\n阿哲："跟团队做才有说服力 不然简历都长一样"\n\n这段对话发生过几百次。`, tags: '#转码 #求职 #AI求职 #Junior', wechat: ['转码群：会技能 ≠ 有 Offer — 端到端才是考点 💬','简历都长一样 — 团队协作经验是差异化。','2026 Junior 的新基线：能独立交付。'], community: ['【真实对话】\n会 React + 会 Python\n≠ 拿 Offer\n= 需要端到端 + 团队经验 💬'] },
    p4: { title: '毕业 4 件事 全是硬能力', body: `16 周能学到的具体落地 📌\n\n1️⃣ 全栈工程基础 — React + Node.js + 多方向后端\n2️⃣ AI 产品集成 — RAG + OpenAI API + 业务融合\n3️⃣ Agile 团队协作 — BA / DevOps / UI 协同实战\n4️⃣ 3 个实战项目 — 含 1 个 AI 商业项目\n\n每件都能写进简历。`, tags: '#全栈 #AI工程师 #Bootcamp #简历', wechat: ['毕业 4 件事：全栈基础 / AI 集成 / Agile 协作 / 3 个项目 📌','每件都能写进简历 — 不是"学过"而是"做过"。','全栈 + AI — 2026 Junior 的完整配置。'], community: ['【4 件硬能力】\n✅ 全栈基础\n✅ AI 产品集成\n✅ Agile 协作\n✅ 3 个实战项目\n每件都进简历 📌'] },
    p5: { title: '全栈 + DevOps 5 阶全流程', body: `不只是写代码 — 是全流程交付 🔧\n\n1️⃣ Plan · 计划（需求 / Sprint）\n2️⃣ Develop · 开发（全栈 + AI）\n3️⃣ Build · 构建（Docker / CI）\n4️⃣ Test · 测试（单元 / 集成 / E2E）\n5️⃣ Release · 发布（部署 / 监控 / 迭代）\n\n真实公司的开发流程，不是个人作业。`, tags: '#DevOps #全栈 #Agile #敏捷开发', wechat: ['全栈 + DevOps 5 阶全流程：Plan → Dev → Build → Test → Release 🔧','不只是写代码 — 是全流程交付。','真实公司开发节奏 — 不是个人作业。'], community: ['【5 阶流程】\nPlan → Dev → Build → Test → Release\n真实公司开发节奏\n16 周全跑通 🔧'] },
    p6: { title: '16 周真实用到 15+ 技术', body: `全栈 + AI + DevOps 完整技术栈 🛠️\n\n前端：React / TypeScript / Next.js\n后端：Node.js / .NET / Python（任选）+ Express\n数据库：PostgreSQL / MongoDB / Redis\nAI：OpenAI API / RAG / Claude API\nDevOps：Docker / Git / Jira / Agile\n\n每个工具都是真项目里用，不是点名介绍。`, tags: '#全栈 #技术栈 #React #Nodejs #OpenAI #RAG', wechat: ['15+ 全栈 + AI 技术栈 — 每个都有项目落地 🛠️','React / Node / RAG / OpenAI / Docker — 2026 Junior 标配。','技术栈 = 工具 + 场景 — 不是点名式学。'], community: ['【技术栈】\n前端：React / TS / Next\n后端：Node / .NET / Python\nAI：OpenAI / RAG\nDevOps：Docker / Git / Agile'] },
    p7: { title: '过往学员从零作品到拿 Offer', body: `26-28 期毕业生的真实反馈 💼\n\n"入学刚毕业 3 个月没项目 — 毕业时 3 个能跑的全栈项目"\n"团队协作经验直接写进简历 面试官问得很开心"\n"实习接入 RAG 给公司知识库 — 这段履历没人能伪造"\n\n不是编的数据，就是普通转码生。`, tags: '#学员反馈 #Junior #转码 #AI求职', wechat: ['26-28 期学员反馈：零作品 → 3 个项目 + AI 实习 💼','团队协作 + AI 实习 — 简历最有说服力的组合。','第 30 期延续这条验证过的路径。'], community: ['【过往学员】\n"3 个月没项目 → 3 个项目"\n"团队经验写进简历"\n"RAG 实习没法伪造"\n普通转码生 💼'] },
    p8: { title: '16 周 = 完整 Junior AI 打包', body: `不是单纯课程 — 是一整套 Junior AI 打包 💼\n\n📘 485 节课（含 26-28 期精华）\n🎙️ 20 次直播 · FLAG / 大厂大咖\n🚀 3 个项目（含 AI 商业项目）\n⏱️ 853 小时累计学习\n\n+ FLAG / 澳洲大厂导师\n+ Agile 真实团队协作\n+ AI 实习机会\n+ 12 个月求职辅导\n+ 多后端方向可选`, tags: '#AI工程师 #Bootcamp #澳洲IT #转码', wechat: ['16 周 = 485 节 + 20 直播 + 3 项目 + AI 实习 + 12 月辅导 💼','不是录播合集 — 是完整 Junior AI 打包。','FLAG 导师 + 真团队协作 — 同类课没有这两块。'], community: ['【课程包】\n📘 485 节\n🎙️ 20 直播\n🚀 3 项目 + AI 商业\n🏢 AI 实习\n🎓 12 月辅导'] },
    p9: { title: '想做 AI 产品 但还没入门', body: `2026 Junior AI Engineer 窗口期开着 🌿\n\n如果你：\n→ 想做 AI 产品但不知道从哪开始\n→ 会点前端或后端但搞不定全栈\n→ 简历没项目 / 想补团队协作履历\n→ 想进 AI 方向但缺实习\n\n第 30 期 2026 Q2+ 筹备中。可以先看 26-28 期 485 节做预习，主页搜"匠人 AI · 全栈项目班" ☕`, tags: '#转码 #AI工程师 #Bootcamp #澳洲IT', wechat: ['想做 AI 产品 / 转码 / 补项目经验？第 30 期筹备中 🌿','主页可以先看 485 节老内容做预习 ☕','第 30 期延续 26-28 期验证过的路径 + AI 升级。'], community: ['【第 30 期预告】\n2026 Q2+ 开课\n筹备中 · 暂不推广\n可以先看大纲做预习\n主页搜 匠人 AI · 全栈 ☕'] },
    p10: { title: 'AI Engineer 全栈项目班 一周在学什么', body: `这门课不是"录播合集" — 是 16 周跟团队一起做项目 🗺️\n\n一周节奏：\n• 周一：视频自学 + React 组件 Lab\n• 周三：直播 BA/UI/DevOps 协作 Sprint 会议\n• 周末：动手写 AI 产品项目代码\n• 下周：Code Review + 导师一对一反馈\n\n16 周后你手里是一个能上线的 AI 产品 + 3 个项目作品集。`, tags: '#Bootcamp #AI工程师 #全栈 #转码', wechat: ['这门课 = 16 周跟团队做项目 不是录播合集 🗺️','一周节奏：自学 → 直播 → 实战 → Review','目标：Junior AI Engineer · 能独立交付 AI 产品。'], community: ['【一周节奏】\n周一：自学 + Lab\n周三：直播协作\n周末：写代码\n下周：Review\n16 周打通 🗺️'] },
    p11: { title: '报课前 vs 毕业后 多会什么', body: `6 维度对比 学完具体多会什么 💪\n\n🔸 前端：HTML/JS → React + TS + Next.js 生产级\n🔸 后端：跟 tutorial → 独立搭服务\n🔸 AI：调过 ChatGPT → RAG + OpenAI 业务集成\n🔸 协作：独自写 → Agile 团队协作\n🔸 项目：简历空白 → 3 个能跑项目\n🔸 履历：零经验 → AI 实习 + 协作证据`, tags: '#能力升级 #Junior #全栈', wechat: ['6 维升级：前端 / 后端 / AI / 协作 / 项目 / 履历 💪','每一维从"见过" → "做过"。','不是学技能 — 是攒履历。'], community: ['【6 维升级】\n前端 / 后端 / AI\n协作 / 项目 / 履历\n从见过到做过 💪'] },
    p12: { title: '不是教程抄写 是 3 个能上线的项目', body: `这是课程最有价值的部分 🚀\n\n项目 1 · 全栈 Web 应用\nReact + Node.js + 数据库 — 全栈基础落地\n\n项目 2 · AI 商业项目\nRAG + OpenAI API + 业务集成 — 简历最有说服力\n\n项目 3 · 团队协作项目\n跟 BA / DevOps / UI 协作 — 不是个人作品\n\n都能写进简历 + 面试讲故事。`, tags: '#全栈项目 #AI项目 #RAG #简历', wechat: ['3 个能上线的项目：全栈 / AI 商业 / 团队协作 🚀','简历最有说服力的组合 — 教程抄写比不了。','AI 商业项目 · 用 RAG + OpenAI 做业务集成。'], community: ['【3 个项目】\n🌐 全栈 Web\n🤖 AI 商业（RAG + OpenAI）\n🏢 团队协作\n都能进简历 + 讲故事 🚀'] },
    p13: { title: 'DevOps 5 阶 全流程交付', body: `不只是写代码 — 是全流程交付 ⚙️\n\n1️⃣ Plan · 需求 / Sprint 规划\n2️⃣ Develop · 全栈 + AI 编码\n3️⃣ Build · Docker / CI 流水线\n4️⃣ Test · 单元 / 集成 / E2E / AI Eval\n5️⃣ Release · 部署 / 监控 / 迭代\n\n这就是真实公司工程师的日常。`, tags: '#DevOps #全栈 #Agile #工程流程', wechat: ['DevOps 5 阶全流程：Plan → Dev → Build → Test → Release ⚙️','真实公司日常 — 不是 demo 作业。','16 周全跑通 — Junior AI 标配。'], community: ['【DevOps 5 阶】\nPlan · Dev · Build · Test · Release\n真实公司流程\n不是 demo ⚙️'] },
    p14: { title: '这 4 类人学完回报最高', body: `看自己是否在这 4 类 💼\n\n🎓 CS 留学生 / 应届 — 有基础没澳洲经验\n🔄 转码零基础 — 想进 IT 抓 AI 风口\n💻 只会一端的开发 — 补另一端 + AI\n🌏 海外 IT 移民 — 缺澳洲项目 + 协作履历\n\n不在这 4 类的可以先看大纲看方向对不对。`, tags: '#转码 #留学生 #AI转型 #澳洲IT', wechat: ['4 类人学完回报最高：留学生 / 转码 / 单栈 / 海外移民 💼','不在这 4 类先看大纲对方向 — 不着急报。','每一类背景都有具体的毕业去向路径。'], community: ['【受众 4 类】\n🎓 留学生 / 应届\n🔄 转码零基础\n💻 单栈开发\n🌏 海外移民 💼'] },
    p15: { title: '前端固定 后端 4 个方向可选', body: `每个人基础不同 — 后端方向可选 🔷\n\n🔷 Node.js · 同栈 JS / 最适合零基础 / AI 生态好\n🟪 .NET · 企业级 / 澳洲大企业主流 / C#\n🐍 Python · AI 原生 / FastAPI / 最 AI 友好\n☕ Java · Spring Boot / 金融 / 大型系统\n\n报名前会有咨询帮你选方向。`, tags: '#全栈 #Nodejs #dotnet #Python #Java', wechat: ['后端 4 个方向可选：Node / .NET / Python / Java 🔷','零基础选 Node · 想进大公司 .NET · 主 AI 用 Python','报名前有咨询帮你选方向。'], community: ['【后端方向】\nNode.js · 同栈 JS\n.NET · 企业级\nPython · AI 原生\nJava · 金融大系统 🔷'] },
    p16: { title: '16 周 从零到 Junior AI Engineer', body: `看完整路径就知道这 16 周怎么走 📅\n\nW1-3 前端基础 + React\nW4-7 后端方向 + 数据库\nW8-10 AI 集成 + RAG\nW11-13 团队协作项目\nW14-15 AI 商业项目 + 实习\nW16 毕业 + 求职辅导启动\n\n每周都有具体交付。`, tags: '#学习路径 #Junior #AI工程师', wechat: ['16 周完整路径：前端 → 后端 → AI → 团队 → 实习 → 求职 📅','每周都有具体交付 — 不是"听完就过"。','W14-15 AI 实习是这门课的关键卖点。'], community: ['【16 周路径】\nW1-3 前端\nW4-7 后端 + DB\nW8-10 AI 集成\nW11-13 团队项目\nW14-15 AI 实习\nW16 求职启动 📅'] },
    p17: { title: '毕业带走 7 件真东西', body: `不是听完就完了 — 带走 7 件真东西 📂\n\n01 全栈项目（部署上线）\n02 AI 商业项目（含 RAG）\n03 团队项目（Code Review 记录）\n04 AI 实习履历\n05 简历 + LinkedIn 包（按 JD 反推）\n06 GitHub 作品集（3 项目完整代码）\n07 结业证书 + 12 个月辅导\n\n每件都能直接用。`, tags: '#毕业交付 #简历 #作品集', wechat: ['毕业 7 件真东西：3 项目 + AI 实习 + 简历包 + 作品集 + 12 月辅导 📂','每件都能直接贴 LinkedIn / 简历 / 面试。','12 个月辅导 — 毕业不结束陪你到拿 Offer。'], community: ['【7 件交付】\n01 全栈项目\n02 AI 商业项目\n03 团队项目\n04 AI 实习履历\n05 简历包\n06 GitHub 作品集\n07 12 月辅导 📂'] },
    p18: { title: '跟 4 种角色协作 不是独自写代码', body: `团队协作是简历最有说服力的部分 🏢\n\n📋 BA 业务分析师 — 一起做需求 + User Story\n🎨 UI Designer — 基于设计稿实现\n🛠️ DevOps — 部署流水线协同\n🧪 QA Tester — Bug / PR / Review 流程\n\n跟真人协作过 vs 只做个人项目 — 面试官一眼看出来。`, tags: '#团队协作 #Agile #全栈 #Junior', wechat: ['跟 BA / UI / DevOps / QA 协作 — 个人作品比不了 🏢','面试最怕"独自完成的项目" — 团队协作是加分项。','16 周真团队 — 不是模拟。'], community: ['【协作 4 角色】\n📋 BA\n🎨 UI Designer\n🛠️ DevOps\n🧪 QA\n跟真人一起做 🏢'] },
    p19: { title: 'AI 实习 + 12 个月求职辅导', body: `简历最有说服力的两块 🌟\n\n🏢 AI 实习机会 — 用 RAG / LLM 解决企业真实业务（不是模拟）\n📝 简历 + LinkedIn — 按 Junior AI 岗位反推打磨\n🎤 模拟面试 — 导师一对一 + Code Interview\n🤝 校友内推 — FLAG / 澳洲大厂社群\n\n🎓 12 个月全程辅导 — 毕业不结束 · 陪你到拿 Offer`, tags: '#AI实习 #求职辅导 #简历 #内推', wechat: ['AI 实习 + 12 个月辅导 — 简历最有说服力的两块 🌟','RAG / LLM 解决企业真实业务 — 没人能伪造这段履历。','毕业不结束 — 陪你到拿 Offer 才算完。'], community: ['【求职闭环】\n🏢 AI 实习（真业务）\n📝 简历优化\n🎤 模拟面试\n🤝 校友内推\n🎓 12 月辅导 🌟'] },
    p20: { title: '第 30 期把 AI 放到 C 位', body: `26-28 期 → 第 30 期的最大升级 🔄\n\n📍 定位：全栈 Web → Junior AI Engineer\n📍 AI：选修附加 → 核心技术栈（RAG + OpenAI）\n📍 项目：2-3 个全栈 → + 1 AI 商业项目\n📍 后端：单方向 → 4 个方向可选\n📍 实习：通用开发 → AI 方向实习\n📍 辅导：6 个月 → 12 个月\n\n跟 2026 市场对齐。`, tags: '#第30期 #AI转型 #Bootcamp', wechat: ['第 30 期最大升级：把 AI 放到 C 位 🔄','不再是全栈 Web — 是 Junior AI Engineer。','实习方向换成 AI + 辅导加到 12 个月。'], community: ['【30 期升级】\n全栈 Web → Junior AI Eng\nAI 选修 → 核心栈\n通用实习 → AI 实习\n6 月辅导 → 12 月辅导 🔄'] },
    p21: { title: '报名前最常被问的 5 个问题', body: `整理了 5 个高频问题 直接答 👌\n\nQ1 零基础能学吗？A 能 · 第 1-3 周从 HTML 打底\nQ2 没身份能学吗？A 课程可以 · AI 实习需要工作权限\nQ3 选哪个后端？A 零基础 Node · 进大公司 .NET · 主 AI 用 Python\nQ4 和网上课区别？A 真团队协作 + AI 实习 + 12 月辅导\nQ5 第 30 期什么时候开？A 2026 Q2+ 筹备中`, tags: '#FAQ #Bootcamp #报名咨询', wechat: ['5 个高频问题：基础 / 身份 / 后端选型 / 和网课区别 / 开课时间 👌','实习部分需要工作权限 — 其他都无门槛。','第 30 期 2026 Q2+ 筹备中 · 可以先看 485 节老内容。'], community: ['【FAQ 快答】\n零基础？能\n身份？课程可以\n后端？看目标\n区别？真团队 + AI 实习\n时间？2026 Q2+ 👌'] },
    p22: { title: 'Agile 敏捷 听过不算 要跑过', body: `Agile 是写在每个 JD 上的词 — 但真正跑过的 Junior 很少 🏃\n\n16 周 5 阶敏捷流程：\n1️⃣ Sprint Planning — 跟 BA 定目标\n2️⃣ Daily Standup — 每天 15 分钟同步\n3️⃣ Development — 写代码 + PR + Review\n4️⃣ Sprint Review — 团队 demo + 收反馈\n5️⃣ Retrospective — 复盘改进\n\n面试说"用过 Agile" vs 能讲 Sprint 细节 — 完全两码事。`, tags: '#Agile #Sprint #团队协作 #Junior', wechat: ['Agile 不是听过 — 是跑过。5 阶流程 16 周全走一遍 🏃','面试说"用过 Agile" ≠ 能讲 Sprint 细节 ≠ 加分。','这是 Junior 最容易糊弄被戳破的一块。'], community: ['【Agile 5 阶】\n1 Planning\n2 Standup\n3 Development\n4 Review\n5 Retro\n16 周跑一遍 🏃'] },
    p23: { title: '这 3 块 别的 Bootcamp 没有', body: `对比过 5-6 门同类课 — 这 3 块找不到第二家 🔥\n\n🌟 FLAG / 澳洲大厂导师\n不是讲师 — 是在 FAANG / Atlassian 的在职工程师\n\n🌟 真实 AI 实习\n不是模拟项目 — 进合作企业做真业务 RAG / LLM\n\n🌟 12 个月全程辅导\n毕业不是结束 — 求职 / 内推 / 简历 / 面试持续陪跑直到 Offer`, tags: '#FLAG #AI实习 #求职辅导 #独家', wechat: ['3 块独家：FLAG 导师 · AI 实习 · 12 月辅导 🔥','别的 Bootcamp 要么没导师要么没实习要么没辅导。','这 3 块叠加 = Junior AI 求职最短路径。'], community: ['【独家 3 块】\n🌟 FLAG / 大厂导师\n🌟 真实 AI 实习\n🌟 12 月辅导\n同类课没有 🔥'] },
    p24: { title: '15 份澳洲 Junior AI JD 覆盖 94%', body: `报课前做的事：扒 15 份澳洲 Junior AI Engineer JD 📊\n\n覆盖：\n• React + TS — 98%（15/15）\n• Node / 后端任一 — 95%（14/15）\n• RAG + OpenAI — 92%（12/15）\n• 数据库 + API — 96%（15/15）\n• Git + Agile — 95%（15/15）\n• 项目经验 — 90%（13/15）\n\nJD 公司：Atlassian / Canva / CBA / Westpac / REA / SEEK / Xero 等澳洲本地。`, tags: '#澳洲IT #JD分析 #Junior #AI求职', wechat: ['扒 15 份澳洲 Junior AI JD — 覆盖 94% 📊','Atlassian / Canva / CBA / REA / SEEK 真实 JD 对照。','按 JD 反推课程 — 不是拍脑袋设计。'], community: ['【JD 覆盖】\nReact 98% · 后端 95%\nRAG 92% · DB 96%\nAgile 95% · 项目 90%\n15 份澳洲本地 JD 📊'] },
    p25: { title: '澳洲 Junior AI Engineer 起薪', body: `levels.fyi + Seek + Glassdoor 2026 澳洲数据 💰\n\n💰 Grad（0-1 年）：$75K-$95K\n💰 Junior（1-3 年）：$95K-$130K\n💰 Mid（3-5 年）：$130K-$180K\n\n部分公司：\n• Atlassian：$95-130K\n• Canva：$90-125K\n• CBA / Westpac：$80-110K\n• REA / SEEK：$85-125K\n• Xero：$90-125K\n\n数据给自己定位用 🙏`, tags: '#澳洲IT #薪资 #Junior #起薪', wechat: ['澳洲 Junior AI 起薪：Grad $75-95K · Junior $95-130K · Mid $130-180K 💰','Atlassian / Canva / CBA / REA / SEEK 真实区间。','2026 Junior AI 回报 > 传统 Junior Dev。'], community: ['【澳洲薪资 2026】\nGrad $75-95K\nJunior $95-130K\nMid $130-180K\n\nAtlassian / Canva / CBA\n/ REA / SEEK / Xero 💰'] }
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
