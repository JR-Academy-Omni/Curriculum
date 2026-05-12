/* 澳洲校招 GP Program Workshop — 右侧文案面板 · 三通道 Tab */
(function () {
  const XHS_COPY = {
    p1: { title: '投了 30 家 GP 都没回音？', body: `周三下午又一次 reject 邮件 🥲\n\n大三投了 EY / PwC / KPMG / Macquarie 一圈，30 多家全挂在 OA 这关 — 是 GPA 不够吗？\n后来听一个学长讲：不是 GPA 问题，是没按招聘日历 + JD 关键词没对齐 ATS。\n\n他推了一个 3 小时的 GP Workshop — 把整条招聘漏斗一节一节拆开讲：找岗位 → 简历 → OA → 面试 → AC。\n大纲全公开 主页可看 ☕`, tags: '#澳洲找工作 #GraduateProgram #留学生求职 #简历 #面试 #校招', wechat: ['投了 30 家 GP 没回音？不是 GPA 问题 是方法 🥲','澳洲 GP 申请 3 小时系统化方案 — 主页大纲','简历过不了 ATS + 漏了招聘窗口 = 申 GP 的两大死穴。'], community: ['【GP Workshop · 3h 线上 Zoom】\n澳洲在读 / 应届留学生专属\n7 个 Block + 8 份模板带走\n主页搜 匠人 AI · GP ☕','申了一圈 GP 没回音的朋友看一下 — 不是 GPA 问题，是方法。'] },
    p1b: { title: 'GPA 高 ≠ 你拿得到 GP Offer', body: `这是我大三投了 30 家挂完才学到的事 🥲\n\nGPA 高的留学生很多 — 拿到 GP Offer 的人很少。差距不在分数，在系统化：\n\n❌ 海投 30 家 / 等拒信再改简历 / OA 现场慌\n✅ 6 行业日历 / JD 关键词反推 / STAR 故事工程\n\n3 小时把这套方法装到你身上。大纲全公开 主页可看 🌿`, tags: '#GraduateProgram #澳洲留学 #校招 #简历 #STAR', wechat: ['GPA 高 ≠ 你拿得到 GP Offer — 留学生必看 🌿','投 30 家拿不到 1 个 OA？不是 GPA 是方法。','GPA 是入场券 — 系统化方法才是赢面。'], community: ['【现实差距】\nGPA 高 ≠ 拿好 Offer\n投简历 ≠ 进 OA\nOA 过 ≠ 进 AC\n3 件都要单独学 🌿','大三的同学听一个学长说的：GPA 是地板，方法是天花板。'] },
    p1c: { title: '从盲投到能进 AC 终面', body: `这是我大四上学期重新冲 GP 的真实路径 💼\n\n大三上：海投 30 家 / 0 个 OA\n大三下：听完 3h Workshop · 改了方法\n大四上：重投 12 家 · 4 个 OA · 进 3 家 AC\n\n不是奇迹 — 是先看 6 行业招聘节奏 → ATS 改简历 → 5-7 STAR 故事 → AC 入门。每一步都有方法。\n大纲主页可看 ☕`, tags: '#GraduateProgram #校招经验 #简历 #AC #澳洲求职', wechat: ['从 30 家 0 OA → 12 家 4 OA — 方法换了一切 💼','大三海投全挂 · 大四上系统化 · AC 入场券拿到','申 GP 不是奇迹 — 方法决定结果。'], community: ['【蜕变路径】\n大三上：30 家 0 OA\n大三下：补方法\n大四：12 家 4 OA 3 AC\n方法决定结果 ☕','申 GP 卡住的朋友别灰心 — 不是你不行，是方法换了一切。'] },
    p1d: { title: '在澳申 GP 只靠 GPA 真没用', body: `2026 澳洲 GP 招聘已经卷到提前 12-15 个月开放 ⚠️\n\n只会海投简历 = 永远 ghost。你需要这 6 块武器叠加：\n\n📅 招聘日历（6 大行业窗口）\n📋 投递清单（精投 5 家/周）\n📝 ATS 简历（关键词反推）\n🧠 OA 通关（Pymetrics / SHL）\n💬 STAR 面试（5-7 故事模块）\n🤝 AC 战术（群面 / Case / Role Play）\n\n3 小时一次磨好。主页大纲可看 🌿`, tags: '#澳洲GP #校招 #留学生 #简历 #面试技巧', wechat: ['澳洲 GP 6 块武器：日历 / 投递 / ATS / OA / STAR / AC ⚠️','只投简历 = 海里捞针。系统化才是正确打开。','申 GP — 你需要不止"GPA 够"。'], community: ['【6 块求职武器】\n📅 招聘日历\n📋 投递清单\n📝 ATS 简历\n🧠 OA 通关\n💬 STAR 面试\n🤝 AC 战术\n3 小时一次磨好 🌿'] },
    p2: { title: '盲投 vs 系统申请 差距很大', body: `不是你 GPA 不够 — 是方法不对 🥲\n\n❌ 盲投：海搜 SEEK / 简历自己改 5 版 / OA 慌\n✅ 系统：6 行业日历 + JD 反推 + 5-7 STAR 模块\n\n3 小时把整条招聘漏斗一节一节拆开讲。主页大纲可看 ☕`, tags: '#GraduateProgram #求职方法 #简历优化 #面试技巧', wechat: ['盲投 vs 系统化 — 差距在方法不在 GPA 💪','投 30 家没回音 ≠ 你 GPA 不够，是方法。','3 小时把申 GP 的方法装到身上 — 不再靠运气。'], community: ['【盲投 vs 系统】\n盲投：海投 + 慌张 + 等拒信\n系统：日历 + 反推 + STAR\n方法决定结果','努力是基础 — 方法决定上限。'] },
    p3: { title: '悉尼留学生群里都在聊', body: `悉尼留学生群周三下午真实截图 💬\n\n小柚：投了 EY / PwC / KPMG / Macquarie 30 多家 OA 这关全挂\n学长：不是你不行 是没按招聘日历 + JD 关键词没对齐\n小柚：STAR 我也练了 面试还是紧张 🥲\n学长：STAR 不是背 是 5-7 个故事模块化 现场拼装\n\n这种对话每天都在发生。`, tags: '#澳洲留学生 #GraduateProgram #求职焦虑 #面试', wechat: ['悉尼留学生群：投 30 家全挂 怎么办？💬','申 GP 的痛：自己改 5 版简历还是被刷 🥲','GPA OK 但 Offer 不来 = 看看是不是系统问题。'], community: ['【真实对话】\n30 家 0 OA\n→ 招聘日历漏了\n→ ATS 关键词没对齐\n→ 系统化方法可以解\n这种对话每天发生 💬'] },
    p4: { title: '学完你会真的会这 4 件事', body: `3 小时正课 + 30 分钟答疑 具体落地 📌\n\n1️⃣ 看懂 6 行业招聘节奏 — Big 4 / Banks / Gov / Consulting / Tech / Engineering\n2️⃣ STAR + ATS 改简历 — 当场看老师改 1-2 条 bullet · Cover Letter 模板直接套\n3️⃣ OA + Video 不紧张 — SHL / Pymetrics / HireVue 各家题型 + 时间分配\n4️⃣ 5-7 STAR 故事模块 — 实习 / 社团 / 兼职拆成可拼装的库\n\n每项都有配套模板带走。`, tags: '#GraduateProgram #简历 #STAR #校招', wechat: ['学完 4 件事：节奏 / 简历 / OA / STAR 💪','3h 不学概念 — 学能直接用的方法。','带走 6 份模板 — 课后立刻能动手改。'], community: ['【4 件能力】\n✅ 6 行业招聘节奏\n✅ ATS 简历改写\n✅ OA 通关思路\n✅ STAR 故事工程\n每件都有模板 📌'] },
    p5: { title: '3h 正课 + 30min 答疑 完整结构', body: `市面"留学生求职课"大多泛泛而谈 — 这门课每个 Block 都有具体产出 🗺️\n\nL00 开场 + 3 误区（5 min）\nL01 GP 认知 + 招聘节奏（20 min）\nL02 找 GP + 投递清单（20 min · 主推 SEEK Grad）\nL03 Resume + Cover Letter 现场改（35 min）\nL04 OA + Video 通关（20 min）\nL05 STAR 面试 + Breakout 15 min（50 min ⭐）\nL06 Networking + AC 入门（25 min）\n—— 正课结束 ——\nL07 Q&A + 资源包（30 min · 充足答疑）`, tags: '#GraduateProgram #校招 #求职课程', wechat: ['8 个 Block 把招聘漏斗每一关拆开 🗺️','L05 STAR 那 50 分钟是核心 · Breakout 15 min 实战','L07 充足 30 min Q&A — 这是这门课的亮点之一。'], community: ['【8 Block 全景】\nL00 开场 + 3 误区\nL01 招聘节奏\nL02 找 GP\nL03 简历改写\nL04 OA 通关\nL05 STAR 面试 ⭐ 50 min\nL06 AC 入门\nL07 Q&A 充足 30 min 🗺️'] },
    p6: { title: '澳洲申 GP 必备 12 个工具', body: `不是工具课 — 是工具 + 方法论 🛠️\n\n📅 找岗位：SEEK Grad（前 GradConnection · 留学生最常用）/ Prosple / 公司 careers / LinkedIn Jobs\n💼 校友：LinkedIn\n🧠 Aptitude：SHL / Cut-e / Practice Aptitude Tests\n🎮 Pymetrics（Big 4 / Banks 高频）\n🎥 HireVue 录播视频面\n📝 ATS 检测：Jobscan\n📊 追踪：自己用 Excel / Notion 搭\n\n每个工具都有具体怎么用。`, tags: '#GraduateProgram #LinkedIn #Pymetrics #求职工具', wechat: ['GP 求职 12 个工具栈 — 每个都有具体用法 🛠️','SHL / Pymetrics / HireVue — 各家招聘必经','找岗位主推 SEEK Grad（前 GradConnection）。'], community: ['【12 个工具栈】\n岗位：SEEK Grad（前 GradConnection）/ 公司 careers\n校友：LinkedIn\nAptitude：SHL / Cut-e\nSJT：Pymetrics\nVideo：HireVue\nATS 检：Jobscan 🛠️'] },
    p7: { title: '听完知道往哪走', body: `学员群里几条真实反馈 💬\n\n"课前自己投 30 多家 0 OA。照 L03 改了简历，下一轮 10 家来了 4 个 OA"\n"STAR 50 分钟最值。把社团 + 实习 + 兼职拆成 6 个故事 — 面试不慌"\n"L07 30 min Q&A 帮我把困了 2 个月的问题一次答完 — 终于不慌了"\n\n3h 正课 + 30min Q&A 不解决一切 — 至少给你地图。`, tags: '#GraduateProgram #学员反馈 #校招经验', wechat: ['学员反馈：照方法改简历 下一轮 4 个 OA 💬','STAR 50 分钟 = workshop 灵魂 · Breakout 15 min 实战','L07 30 min Q&A — 终于不带着问号走。'], community: ['【真实反馈】\n"重投 10 家 4 个 OA"\n"6 故事 模块化"\n"30 min Q&A 答完困了 2 个月的问题"\n留学生日常 💬'] },
    p8: { title: '不只 3h 直播 是完整方法包', body: `看了一圈同类课 — 要么贵到上千要么内容散 📘\n\n这次买到手的：\n📘 3 小时 Zoom 正课直播\n💬 30 分钟充足 Q&A 答疑\n📦 8 个 Block · L00-L07\n🧰 6 份能直接用的模板\n👥 15 min Breakout STAR 演练\n\n+ 课后 24h 录播（正课 + Q&A 全程）\n+ 课前 1 周可上传简历（脱敏后老师当场改）\n+ Resume + Cover Letter + STAR Worksheet + LinkedIn 话术`, tags: '#GraduateProgram #Bootcamp #校招课', wechat: ['3h 正课 + 30min Q&A + 6 份模板 + 录播 💼','不是录播合集 — 是直播 + 答疑 + 模板 + 互动一整套。','课前 1 周可上传简历 = 免费 1v1 简历精修机会。'], community: ['【你买到的】\n📘 3h Zoom 正课\n💬 30 min Q&A\n🧰 6 份模板\n👥 15 min Breakout\n📺 24h 录播\n📂 课前简历审改'] },
    p9: { title: '正在申 GP 或下一轮重投', body: `2026 澳洲 GP 申请不容易 — 但方法对了还是能进 AC 🌿\n\n如果你正在：\n→ 投简历没回音\n→ OA 卡住\n→ 想冲 Big 4 / Banks / Gov / Tech\n→ 大三末 / Master 倒数第二学期了\n\n不妨看看这 3h Workshop — 大纲全公开，先看方向对不对 ☕`, tags: '#GraduateProgram #澳洲留学生 #校招 #求职', wechat: ['正在申 GP 或下一轮重投？大纲全公开 主页可看 🌿','澳洲 GP Workshop 新一期 — 3h 把漏斗讲透 ☕','不卖焦虑 — 但 2026 GP 是真的难，方法很重要。'], community: ['【咨询窗口开放】\n澳洲校招 GP Workshop\n3h · 7 Block · 8 模板\n大纲全公开\n主页搜 匠人 AI · GP ☕'] },
    p10: { title: '不是泛泛的留学生职业规划课', body: `这不是一门"上岸速成班" — 是把招聘漏斗每一关拆开教方法 🗺️\n\n一句话：\n👉 GP Workshop = 不是教你"投简历"，是教你 5 关漏斗每一关该做什么。\n\n节奏：\n• 第 1h：认知 + 找岗位 + 简历\n• 第 2h：OA + STAR 故事工程\n• Breakout：3-4 人 STAR 演练 15 min\n• 第 3h：AC 入门 + 资源包\n• +30 min：充足 Q&A 答疑\n\n3h + 30min 给你地图 + 模板，路自己走。`, tags: '#GraduateProgram #求职规划 #校招', wechat: ['GP Workshop = 招聘漏斗每一关方法 不是"上岸课" 🗺️','3h 正课 + 30 min Q&A — 不只听课还能问透。','不教你套路 — 教你 5 关漏斗每一关的方法。'], community: ['【课程定位】\nGP Workshop\n= 招聘漏斗每一关方法\n不是"上岸课"\n3h 正课 + 30 min Q&A + 录播 🗺️'] },
    p11: { title: '课前 vs 课后 多会什么', body: `报课前最关心的不是大纲 — 是"学完到底多会什么" 💪\n\n6 维度对比：\n🔸 找岗位：SEEK 主站海搜 → SEEK Grad + 公司 careers + LinkedIn\n🔸 简历：通用模板 → JD 反推 ATS\n🔸 Cover Letter：复制 GPT → 模板套用 + 公司细节\n🔸 OA：考前 1 天查 → 题型 + 时间练熟\n🔸 面试：背模板 → 5-7 故事拼装\n🔸 Networking：发"求内推" → 校友邀约话术`, tags: '#GraduateProgram #能力升级 #求职课', wechat: ['6 维度看课程效果：渠道 / 简历 / OA / STAR / Networking 💪','报课前看这张 — 学完具体多会什么。','每一维都从"卡住"到"有方法"。'], community: ['【6 维升级】\n找岗位：海搜 → SEEK Grad + careers\n简历：模板 → JD 反推\nOA：临时抱佛脚 → 题型\n面试：背 → 拼装 💪'] },
    p12: { title: 'L01 招聘日历讲 6 大行业', body: `市面 GP 课大多只讲 Big 4 — L01 把 6 大行业全讲一遍 🎯\n\n🏢 Big 4 Audit/Consulting · Feb-Apr 开\n🏦 四大银行 · Mar-May 开\n🏛 Gov Grad · Feb-Jun 开\n💻 Tech (Atlassian / Canva) · 滚动招聘\n🎯 Tier-1 Consulting (BCG / Bain) · Feb-Apr 开\n🛠 Engineering · Mar-Jul 开\n\n每家的窗口 / OA 月份 / 签证要求都对照讲。`, tags: '#Big4 #澳洲GP #校招日历', wechat: ['L01 不只讲 Big 4 — 6 大行业招聘日历都讲透 🎯','Tech / Engineering / Gov / Banks 各自开放窗口','每年开课前老师核对当期最新数据。'], community: ['【L01 · 6 大行业】\nBig 4 · Banks · Gov\nConsulting · Tech · Eng\n各自窗口 + OA + 签证\n对照表带走 🎯'] },
    p13: { title: 'GP 招聘 5 关 每关刷多少', body: `很多留学生不知道 GP 招聘漏斗是 5 关 — 不是只看技术 🥲\n\n5 关漏斗 · 行业平均通过率：\n📄 网申 / Resume → 50% 留\n🧠 Online Assessment → 40-60%\n🎥 Video Interview → 20-30%\n🏢 Assessment Centre → 5-10%\n🎉 Offer → 2-5%\n\n看清漏斗 = 知道自己卡哪关 = 有针对性改。`, tags: '#GraduateProgram #澳洲校招 #求职漏斗', wechat: ['GP 5 关漏斗 · 每关刷掉多少 = 申请决策必看 🥲','网申 → OA → Video → AC → Offer 每关战术不同','看清漏斗 = 知道自己卡在哪关。'], community: ['【5 关漏斗】\n网申 50%\nOA 40-60%\nVideo 20-30%\nAC 5-10%\nOffer 2-5%\n看清才能改 📊'] },
    p14: { title: '这 4 类留学生学完对口最高', body: `经常被问"我适不适合学" — 客观说这 4 类对口最高 💼\n\n🎓 大三 / Master 倒数第二学期 — 接下来就要投了\n📅 已投 20+ 家全挂 — 来诊断卡哪关\n🛠 Casual / Working Holiday 想转 GP — 补完整流程认知\n🎯 目标行业明确但不知怎么落地 — 看具体行业玩法\n\n大一大二来是"提前看地图"。`, tags: '#GraduateProgram #留学生 #澳洲求职', wechat: ['这 4 类留学生学 GP Workshop 对口最高 💼','大三大四 / 重投 / Casual 转 GP / 目标明确','大一大二来 = "提前 1-2 年看地图"。'], community: ['【对口人群】\n🎓 大三 / Master 末\n📅 已投 20+ 全挂\n🛠 Casual 想转 GP\n🎯 目标行业明确'] },
    p15: { title: '6 份模板带走 不止是听', body: `Workshop 最值钱的是带走的模板 — 不是听 是真用 🧰\n\n📝 ATS Graduate Resume 模板\n✉️ Cover Letter 模板（直接套用）\n💬 STAR 故事工程 Worksheet（5-7 故事 + 12 类高频题）\n🎥 Video 30 秒自介 3 模板（Consulting / Tech / Finance）\n🤝 LinkedIn 邀约话术 ×2（中英）\n☕ Coffee Chat 5 个深度问题\n\n每份都能直接复制改名用。`, tags: '#GraduateProgram #简历模板 #求职模板', wechat: ['6 份模板带走 — 不是听课是真用 🧰','Resume + CL + STAR + Video + LinkedIn + Coffee Chat','买课最怕只剩 PPT — 这次都是能用的模板。'], community: ['【6 份模板】\nResume 模板\nCover Letter 模板\nSTAR Worksheet\nVideo 自介 3 模板\nLinkedIn 话术（中英）\nCoffee Chat 5 问 🧰'] },
    p16: { title: '12 个月倒推 GP 申请路径', body: `知道流程的人才能赢 — 12 个月倒推路径 📅\n\nT-12 月：列目标公司 + 看招聘日历\nT-10 月：简历 + Cover Letter 完稿\nT-8 月：网申 + OA 阶段\nT-6 月：Video + AC 阶段\nT-3 月：Offer 阶段\nT-0：毕业 + 入职\n\n每一步课上都会讲怎么做。`, tags: '#GraduateProgram #学习路径 #校招', wechat: ['12 个月倒推 GP 申请 — 每步都有具体动作 📅','T-12 列公司 · T-8 网申 · T-6 AC · T-3 Offer','大三开始倒推 = 大四毕业前拿 Offer。'], community: ['【12 个月路径】\nT-12 列公司 + 日历\nT-10 简历 + CL\nT-8 网申 + OA\nT-6 Video + AC\nT-3 Offer\nT-0 入职 📅'] },
    p17: { title: '结束带走 7 件真东西', body: `3h 正课 + 30 min Q&A 不是听完就完 — 带走 7 件能用的 📂\n\n01 ATS Graduate Resume 模板\n02 Cover Letter 模板（直接套用）\n03 STAR 故事工程 Worksheet\n04 Video 30 秒自介 3 模板（Consulting/Tech/Finance）\n05 LinkedIn 邀约话术（中英）\n06 Coffee Chat 5 个深度问题\n07 全程录播（正课 + Q&A）\n\n每件都能直接用。`, tags: '#GraduateProgram #毕业交付 #求职模板', wechat: ['3h + 30min Q&A 带走 7 件真东西 — 不是听完就完 📂','Resume / CL / STAR / Video / LinkedIn / Coffee Chat / 录播','30 秒自介 3 模板 = Consulting / Tech / Finance 各 1。'], community: ['【7 件交付】\n01 Resume\n02 Cover Letter\n03 STAR Worksheet\n04 Video 模板 ×3\n05 LinkedIn 话术\n06 Coffee Chat 5 问\n07 录播 📂'] },
    p18: { title: '4 种组合学习方式 不是干听课', body: `买课最大浪费 = 买了不做只听 📚\n\n4 种组合：\n🎙️ 3 小时 Zoom 直播 — 老师讲 + 屏幕共享\n📝 L03 现场改简历 — 课前 1 周可上传 · 老师当场改\n👥 L05 Breakout 演练 — 3-4 人组 STAR + 巡场点评\n📺 录播 + 资源包 — 24h 内邮件链接\n\n听 + 看演示 + 自己练 + 录播回看 = 闭环。`, tags: '#GraduateProgram #学习方法 #Workshop', wechat: ['4 种学法组合：直播 + 改简历 + Breakout + 录播 📚','L05 Breakout Room 是 workshop 灵魂 — 现场互评。','听 + 看 + 做 + 复盘 = 学习闭环。'], community: ['【4 种学法】\n🎙️ 3h Zoom 直播\n📝 L03 现场改简历\n👥 L05 Breakout\n📺 24h 录播 + 模板包'] },
    p19: { title: '投 30 家全挂 看你卡在哪关', body: `不要再瞎改简历了 — 先诊断卡哪关 🎯\n\n📄 卡在网申：ATS 关键词没对齐 → L03 改简历\n🧠 卡在 OA：Numerical 时间不够 → L04 题型 + 备考站\n🎥 卡在 Video：30 秒自介背稿 → L04 模板 + 录 10 遍\n🏢 卡在 AC：群面没节奏 → L06 群面 3 角色 + MECE\n\n课上 L01 用 Zoom 投票自我诊断 — 老师按结果调整后半段节奏。`, tags: '#GraduateProgram #求职诊断 #校招', wechat: ['投 30 家全挂 看你卡在哪关 🎯','网申 / OA / Video / AC — 每关战术不同。','瞎改简历前 — 先诊断卡哪关。'], community: ['【分关诊断】\n网申 → ATS 没对齐\nOA → 时间不够\nVideo → 自介背稿\nAC → 没框架\n找对关再改 🎯'] },
    p20: { title: '盲投 vs 系统申请 8 维对比', body: `想清楚盲投和系统的差距 = 报课决定 90% 完成 🔄\n\n8 维度：\n📅 找岗位 / 📋 投递节奏 / 📝 简历 / ✉️ Cover Letter\n🧠 OA / 💬 面试 / 🤝 Networking / 🏢 AC\n\n左边是"自己摸"— 右边是"有方法"。\n方法决定上限 — GPA 决定下限。`, tags: '#GraduateProgram #求职方法 #校招', wechat: ['盲投 vs 系统 8 维对比 — 方法决定上限 🔄','自己改 5 版简历 vs JD 反推 ATS — 完全两回事。','GPA 是基础 — 方法决定能不能赢。'], community: ['【8 维对比】\n找岗位 · 投递 · 简历\nCL · OA · 面试\nNetworking · AC\n左盲投 · 右系统 🔄'] },
    p21: { title: '报名前最常问的 5 个问题', body: `整理 5 个高频问题 直接答 👌\n\nQ1 大一大二能来？A 能 — 提前 1-2 年看地图\nQ2 目标是 Tech 不是 Big 4？A 6 行业都讲 · Tech 偏 Coding + Pymetrics\nQ3 485 学生签能投？A Gov 大多要 PR · Tech / Eng 对 485 友好\nQ4 有录播吗？A 有 · 24h 内邮件链接\nQ5 投 30+ 家全挂还能救？A 能诊断 · 不保证一定救`, tags: '#GraduateProgram #FAQ #校招', wechat: ['5 个高频问题 — 直接答 👌','大三大四 / Tech / 485 / 录播 / 重投 都答了。','报名前先看 FAQ — 省得课上一堆误会。'], community: ['【FAQ】\n大一大二能来 · 看地图\nTech 也讲 · 偏 Coding\n485 看行业\n有录播 24h\n重投能诊断卡哪关'] },
    p22: { title: '行为面 90% 用 STAR', body: `STAR 框架很多人听过 — 但用得好的不多 🎯\n\nS Situation（20%）：1 句话讲背景 — 不要 45 秒铺垫\nT Task（10%）：你的角色 + 明确 deliverable\nA Action（50%）：用"我"不用"我们" — 具体做了什么\nR Result（20%）：量化数字 — % / $ / 人 / 时间\n\n课上 L05 整整 50 分钟讲 STAR + 12 类高频题 + Breakout 15 min 现场演练。`, tags: '#STAR #BehaviouralInterview #面试技巧 #校招', wechat: ['STAR 框架：S 情景 T 任务 A 行动 R 结果 🎯','行为面 90% 用 STAR — 但用得好的人很少。','L05 那 50 分钟最值 · Breakout 15 min 现场演练 + 老师点评。'], community: ['【STAR 框架】\nS 1 句背景（20%）\nT 你的角色（10%）\nA "我"做了什么（50%）\nR 量化结果（20%）\n12 类高频 + Breakout 15 min 🎯'] },
    p23: { title: '别的求职课没有这 2 块硬货', body: `市面留学生求职课大多套路 — 这 2 块是别人没做的硬货 🔥\n\n🗺 L01 · 6 大行业招聘节奏\n— 大多课只讲 Big 4 · 这里 Big 4 / Banks / Gov / Consulting / Tech / Engineering 全口播一遍 · 每年开课前核对当期窗口\n\n💬 L05 · STAR 故事工程方法 50 min ⭐\n— 不是教你背 12 个标准答案 · 是把 5-7 真实经历模块化打 tag · Breakout 15 min 现场演练拼装\n\n这 2 块决定你能不能进 AC。`, tags: '#GraduateProgram #STAR #校招方法', wechat: ['2 块独家硬货：6 行业节奏 + STAR 故事工程 🔥','别的留学生求职课大多只讲 Big 4 — 我们 6 行业都点到。','STAR 不是背 — 是模块化拼装 + 现场 Breakout 演练。'], community: ['【2 块独家】\n🗺 6 行业招聘节奏\n💬 STAR 故事工程\n每年开课前核对\nL05 整整 50 分钟 🔥'] },
    p24: { title: '课程覆盖 6 行业 25+ 主流雇主', body: `报课前我做的事：扒澳洲头部 GP 雇主 📊\n\n• Big 4 Audit/Consulting — EY · PwC · KPMG · Deloitte\n• 四大银行 + Macquarie — CBA · NAB · WBC · ANZ · MQG\n• Gov Grad — NSW · VIC · APS\n• Tech — Atlassian · Canva · REA · Xero\n• Tier-1 Consulting — BCG · Bain · McKinsey · Accenture\n• Engineering — WSP · Aurecon · Arup · BHP · Rio Tinto`, tags: '#GraduateProgram #澳洲求职 #Big4 #Atlassian', wechat: ['6 行业 25+ 主流 GP 雇主 — 课程全覆盖 📊','EY / PwC / CBA / NSW Gov / Atlassian / Canva / BCG / BHP','按真实雇主反推课程 — 不是空谈。'], community: ['【6 行业雇主】\nBig 4 · Banks\nGov · Tech\nConsulting · Eng\nEY / PwC / CBA / Atlassian / BCG / BHP 📊'] },
    p25: { title: '澳洲 GP Year 1 起薪对照', body: `2026 澳洲 GP Year 1 起薪参考（Glassdoor + SEEK Grad + 公司官网公开数据）💰\n\n💰 Gov / 中小企业：$60K-$72K\n💰 Big 4 / 银行 / 工程咨询：$70K-$90K\n💰 Tier-1 / 本土 Tech：$95K-$130K\n\n部分雇主：\n• EY / PwC：$72-82K\n• CBA / Macquarie：$80-95K\n• Atlassian / Canva：$95-115K\n• BCG / Bain：$110-130K\n• BHP / Rio Tinto：$80-95K\n\n数据给自己定位用 🙏`, tags: '#GraduateProgram #澳洲薪资 #校招', wechat: ['澳洲 GP Year 1 起薪：Gov $60K · Big 4 $72K · Tech $95K+ 💰','EY / CBA / Atlassian / BCG / BHP 真实区间','薪资数据 = 选 Offer 决策武器。'], community: ['【2026 GP Year 1 起薪】\nGov $60-72K\nBig 4 $70-82K\n银行 $80-95K\nTech $95-115K\nTier-1 Consulting $110-130K 💰'] }
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
