/* AI Adoption Bootcamp — 右侧文案面板 · 小红书 / 朋友圈 / 社群 Tab 切换 */
(function () {
  const XHS_COPY = {
    p1: { title: '别人都在用 AI 你还在手动抄表？', body: `周会又被领导 call out 的周二 🌿\n\n隔壁组运营主管上周把部门周报流程彻底改了一遍，省了一半的时间。\n我问她怎么做到的，她发给我一门课 — AI Adoption Specialist Bootcamp。\n\n不是教用 ChatGPT 写段子，是教"怎么让整个公司用好 AI"。\n8 周 74 节课 + 48 场景 + 39 Lab，主页能看大纲 ☕`, tags: '#AI学习 #AI工具 #职场效率 #运营 #AI采纳 #非技术', wechat: ['别人都在用 AI 推业务落地，你还在手动抄表？8 周 AI Adoption Bootcamp 主页见 🌿','2026 职场新岗位叫 AI Adoption Specialist — 零代码，$120K+ 💼','非技术抓 AI 风口 — 不教你写代码，教你推落地。'], community: ['【AI Adoption Bootcamp 开放咨询】\n8 周从 AI 工具升级到组织级采纳\n74 节课 + 39 Lab + 48 场景\n零代码 · 主页查看大纲 🌿','非技术朋友看过来 — 不用写代码也能吃 AI 红利：AI Adoption Specialist。'] },
    p1b: { title: '会用 ChatGPT ≠ 能推 AI 落地', body: `这是这半年我看到的最大的认知差距 🌿\n\n会用 ChatGPT 的人很多 — 能让一整个公司用好 AI 的人很少。\n2026 企业真正在抢的是后者：AI Adoption Specialist。\n\n不是教你写 Prompt — 是教你怎么识别机会、跑试点、做培训、写 ROI 报告。\n零代码 · 8 周 · 主页可看完整大纲 ☕`, tags: '#AI采纳 #ChatGPT #职场转型 #非技术AI #AI学习', wechat: ['会用 ChatGPT 不等于能推 AI 落地 — 差距在组织层 🌿','2026 企业要的不是 AI 用户 — 是 AI 推手。','工具课停在"会用"，Adoption 课带你到"能推"。'], community: ['【认知差距】\n会用 AI 的人多 — 能让公司用好 AI 的人少\n这就是 AI Adoption Specialist 的市场\n零代码 · 8 周 · 主页大纲 🌿','看了一圈：写 Prompt 的人到处是，能写 ROI 报告的几乎没有。'] },
    p1c: { title: '从写周报 到能交付 AI 采纳方案', body: `这两年最值得的转岗方向：业务岗 → AI Adoption Specialist 💼\n\n之前：手动抄表、整理报表、开不完的会\n之后：写 ROI 报告、推部门试点、主导 AI 培训\n\n不需要写代码，不需要 ML 背景。\n需要的是：业务理解 + 一套 AI 采纳方法论。\n\n8 周可以补齐。主页 "匠人 AI · AI Adoption" ☕`, tags: '#转岗 #AI转型 #非技术AI #职业规划 #AI采纳', wechat: ['业务岗最值得的转岗方向：AI Adoption Specialist 💼','从写周报到写 ROI 报告 — 8 周转岗路径在主页。','不写代码也能转 AI — Adoption 是最短路径。'], community: ['【转岗路径】\nBefore：手动抄表 / 开会不停\nAfter：写 ROI / 推试点 / 做培训\n8 周完成 · 不写代码 ☕','业务岗想转 AI 但不会写代码？— Adoption 就是为你准备的。'] },
    p1d: { title: '不会推 AI 落地 业务岗晋升没你份', body: `2026 业务岗的隐形门槛已经变了 ⚠️\n\n以前晋升看：业务数据 + 团队带教\n现在晋升看：能不能推 AI 落地、能不能写 ROI、能不能做变革管理\n\n这 6 块 — 机会识别 / 试点 / ROI / 变革 / 培训 / 治理 — 是 2026 业务管理者的新基线。\n\n8 周一次性补齐，主页可看大纲 🌿`, tags: '#职场晋升 #AI采纳 #业务管理 #2026 #AI转型', wechat: ['2026 业务岗晋升看 AI 推动力 — 你还停在执行层吗？⚠️','机会识别 / ROI / 变革 / 培训 — 业务管理者新基线。','不会推 AI 落地 — 业务岗 5 年内会被边缘化。'], community: ['【业务岗 2026 新基线】\n机会识别 · 试点 · ROI\n变革管理 · 员工培训 · AI 治理\n6 块缺一不可 ⚠️\n主页大纲补齐路径','以前看业务数据晋升 — 现在看 AI 推动力。'] },
    p2: { title: '同样用 ChatGPT 差距在组织层', body: `HR 朋友公司买了 Copilot 给所有员工，一个月使用率不到 20% 🥲\n\n我才意识到这就是"AI 采纳"的差距：\n❌ 工具使用者：自己溜 / 推不动团队 / ROI 说不清\n✅ 采纳专家：机会识别 + 试点 + 培训 + ROI + 治理\n\n会不会用 ChatGPT 是个人问题 — 能不能让一整个公司用好 AI 才是专业能力。`, tags: '#AI采纳 #ChatGPT #组织管理 #AI培训', wechat: ['工具使用者和采纳专家的差距在组织层 💼','Copilot 使用率不到 20% — 缺的就是 Adoption 角色。','工具课教怎么用 — 我们教怎么让整个公司用好。'], community: ['【工具使用者 vs 采纳专家】\n❌ 自己用得溜\n❌ ROI 说不清\n✅ 推动团队\n✅ 跑通试点\n✅ 写报告给 C 层','公司买了工具没人用 — 2026 最常见的企业 AI 浪费。'] },
    p3: { title: 'HR 群里都在聊 Adoption 这是什么', body: `真的是一个普通的周三下午，HR 群里 Linda 突然问大家：公司 Copilot 使用率 18%，老板要答案怎么办？🤔\n\n旁边做咨询的阿哲说：你需要的不是再买工具，是 Adoption 方法。\n\n那一刻我才意识到 — 2026 缺的不是 AI 工具，是会推 AI 落地的人。\n发小红书记录一下开始学习的过程 🌱`, tags: '#AI采纳 #HRBP #企业培训 #AI落地', wechat: ['HR 群都在聊 Adoption 你接得上话吗？🌱','Copilot 使用率 18% — 这就是 Adoption 能解决的问题。','2026 企业真正缺的岗位：AI Adoption Specialist 💼'], community: ['【自测】\n公司 AI 使用率不到 30% 的，举手 🙋\n这是全球企业的通病 — 解法叫 AI Adoption。','说个真事：咨询圈正在抢 Adoption Specialist，非技术路径里最值钱的一个方向。'] },
    p4: { title: '毕业那天 你会真的会这四件事', body: `报课前最怕的就是：学完堆 buzzword，让做还是不会 📌\n\n这次 8 周下来真的落地的四件事：\n1️⃣ 用好 20+ AI 工具 — ChatGPT / Claude / Copilot / Notion / Midjourney\n2️⃣ 解 48 业务场景 — 市场 / 销售 / 运营 / HR / 财务 / 法务\n3️⃣ 跑通采纳方法论 — 机会识别 → 试点 → 培训 → ROI → 治理\n4️⃣ 输出完整方案 — 给老板的报告 + Demo Day + 证书`, tags: '#AI采纳 #AI工具 #职场转型', wechat: ['8 周毕业交付：20+ 工具 + 48 场景 + 方法论 + 完整方案 📌','四件事每件都能直接用回公司。','不学 buzzword — 8 周跑通 AI 采纳全链路。'], community: ['【毕业 4 件事】\n✅ 用好 20+ 工具\n✅ 解 48 场景\n✅ 跑采纳方法\n✅ 输出方案','每件能直接带回公司用 — 这才是"值回票价"的定义 💼'] },
    p5: { title: '8 周 4 个 Phase 从工具到组织', body: `之前看过不少 AI 课都停在"工具使用"，这次第一次看到把"组织采纳"单独成 Phase 🌿\n\n📍 P1 AI 工具精通 + 角色定位（W1-2）\n📍 P2 业务场景实战 · 48 场景（W3-5）\n📍 P3 组织采纳方法论（W6-7）\n📍 P4 毕业项目 + Demo Day（W8）\n\n每个 Phase 有模板 + Lab + 直播 + Clinic。`, tags: '#AI采纳 #课程路径 #8周', wechat: ['8 周 4 Phase：工具 → 场景 → 方法论 → 方案 🌿','P3 组织采纳方法论是核心竞争力。','课程路径决定学习效果 — 主页看完整 Phase。'], community: ['【8 周路径】\nP1 工具（W1-2）\nP2 场景（W3-5）\nP3 方法论（W6-7）\nP4 毕业（W8）','别的课停在 P1 — 我们讲到组织治理。'] },
    p6: { title: '8 周真实用到的 20+ AI 工具', body: `工具更新比课程更新还快 🛠️\n\n这次盘了一下 8 周真实用到的：\n🔧 LLM：ChatGPT / Claude / Gemini\n🔧 Office：Copilot 365 / Notion AI / Gamma\n🔧 研究：Perplexity / NotebookLM\n🔧 视觉：Midjourney / Canva AI / HeyGen\n🔧 自动化：n8n / Zapier\n🔧 会议：Zoom AI / Fireflies / Otter\n\n每个都有 Lab 实操。`, tags: '#AI工具 #Copilot #Midjourney #AI自动化', wechat: ['20+ AI 工具盘点 — 每个都有 Lab 🛠️','按业务线 × 工具矩阵，选工具不焦虑。','ChatGPT / Copilot / n8n / Midjourney — 2026 必会。'], community: ['【工具分层】\nLLM · Office · 研究 · 视觉 · 自动化 · 会议\n20+ 工具按场景落位 🛠️','工具课只讲怎么用 — 我们讲什么场景用哪个。'] },
    p7: { title: '学到第 3 周 已经有人在跑试点', body: `学员群有几条反馈让我比较意外 💬\n\n"W3 运营场景做完，直接改了部门周报流程，团队少开一次会"\n"老板真的看懂了 ROI 报告，转头给我加 headcount"\n"内部分享完 Adoption 框架，老板让我做全公司 AI 培训"\n\n不是编的数据，普通职场人日常。`, tags: '#AI采纳 #学员反馈 #AI落地', wechat: ['W3 做完就改了公司周报流程 💬','ROI 报告让老板加了 headcount 📊','毕业 2 个月被推去做全公司培训。'], community: ['【真实反馈】\n"改了部门周报"\n"老板加了 headcount"\n"被推去做全公司培训"','学到一半就能产生业务价值 — 不用等毕业。'] },
    p8: { title: '不只是 8 周课 是完整采纳工具箱', body: `同类课很多只给录播 📘\n\n这次买到手的：\n📘 74 节（直播 + 录播 + Lab + 自学）\n🧪 39 个浏览器 Lab\n📊 48 业务场景\n🎙️ 22 直播 · 约 44h\n\n+ 7 Adoption 独家模块\n+ AI Tutor 中英双语 24h\n+ AI 采纳方案模板库\n+ Demo Day + 证书\n+ 校友社群`, tags: '#AIBootcamp #AI课程 #职场转型', wechat: ['74 课 + 39 Lab + 48 场景 + 7 模块 — 完整 Adoption 工具箱 💼','不是录播合集 — 是课程 + 模板 + 社群全套。','最值的不是课时是 7 个独家模块 + 模板库。'], community: ['【课程配置】\n📘 74 课 🧪 39 Lab\n📊 48 场景 🎙️ 22 直播\n🎓 7 独家模块\n💬 AI Tutor 24h','对比过 3-4 家同类 — 方法论这块没竞品。'] },
    p9: { title: '如果你是非技术又想抓 AI 这波', body: `2026 AI 红利不只在技术岗 🌿\n\n非技术背景抓 AI 最短路径：\n→ 8 周零代码入门\n→ 带业务场景学工具\n→ 毕业给老板 AI 采纳方案\n\n主页搜"匠人 AI · AI Adoption"先看大纲。\n不着急报，先看方向对不对 ☕`, tags: '#非技术AI #AI职业 #AI转型', wechat: ['非技术抓 AI 红利最短路径 — Adoption Specialist 🌿','不写代码也能吃 AI 红利 — 方向叫 Adoption。','新一期 AI Adoption Bootcamp 开放咨询 ☕'], community: ['【咨询窗口开放】\n大纲公开 · 零代码 · 8 周 74 课\n主页"匠人 AI · AI Adoption" ☕','不会代码但懂业务的朋友 — Adoption 是你的最佳切入点。'] },
    p10: { title: 'AI Adoption 到底是什么岗位', body: `被问"AI Adoption 和 AI PM 有什么区别" — 我也是最近才整理清楚 🤔\n\nAI Adoption Specialist：让整个组织用好 AI\n→ 不是个人会用 ChatGPT\n→ 是帮公司识别机会 / 跑试点 / 培训团队 / 度量 ROI / 落地合规\n\n2026 企业最抢的非技术 AI 岗，薪资 $120K-$200K+。`, tags: '#AI采纳 #AI岗位 #职业规划', wechat: ['AI Adoption Specialist = 让整个公司用好 AI 的人 💼','2026 最抢的非技术 AI 岗 — $120K-$200K+','76% 高管把 AI 采纳列为 2026 首要任务（McKinsey）。'], community: ['【岗位定义】\nAI Adoption = 组织级 AI 落地\n不是用工具 — 是推工具落地\n薪资：$120K-$200K+','非技术 AI 最高岗 — Adoption 是天花板。'] },
    p11: { title: '报课前 vs 毕业后 具体多会什么', body: `报课最关心的不是课表，是"学完我到底多会什么" 💪\n\n对比一下：\n🔸 工具：ChatGPT 对话 → 20+ 按业务线精通\n🔸 场景：通用 Prompt → 48 场景对号入座\n🔸 机会：看报道 → Value-Effort 矩阵自己扫\n🔸 试点：拍脑袋 → KPI + 成功指标\n🔸 ROI：说不清 → 给 C 层看懂的报告\n🔸 合规：听说过 → 公司 AI 政策模板`, tags: '#AI采纳 #学习效果 #职场转型', wechat: ['毕业水平从"工具使用者"升级到"组织采纳专家" 💪','6 个维度 V1 vs V2，具体多会什么看对比。','报课前先看这张 — 知道学完能做什么。'], community: ['【能力升级】\n工具：1 个 → 20+\n场景：通用 → 48\n试点：拍脑袋 → KPI\nROI：说不清 → 给 C 层','每一条都能带回公司用 🌿'] },
    p12: { title: '48 场景 7 业务线全覆盖', body: `工具课只讲"ChatGPT 怎么用"— 我们按业务线盘场景 📋\n\n📊 市场 × 8（内容 / SEO / 投放 / 社媒）\n💼 销售 × 7（Lead / 话术 / CRM / 提案）\n⚙️ 运营 × 8（流程 / 报表 / SOP / 客服）\n👥 HR × 6（JD / 简历 / 面试 / 手册）\n💰 财务 × 6（发票 / 预算 / 合规）\n📜 法务 × 5（合同 / 政策 / 风险）\n\n你所在的业务线一定覆盖 ✅`, tags: '#AI采纳 #业务场景 #AI运营 #AIHR', wechat: ['48 场景 7 业务线 — 你在的那条线一定有 ✅','按业务线学场景落地 — 比学"通用 Prompt"快 10 倍。','市场 / 销售 / 运营 / HR / 财务 / 法务全覆盖。'], community: ['【48 场景拆解】\n市场 8 · 销售 7 · 运营 8\nHR 6 · 财务 6 · 法务 5\n项目 4 · 通用 4','学 AI 最有感的方式：挑本职一个场景，跑一遍。'] },
    p13: { title: '市场没人教 7 个 Adoption 模块', body: `工具课到处是 — 但"怎么让整个公司用好"这套方法论，市面找不到第二家 🔥\n\n01 AI 机会识别（Value-Effort 矩阵）\n02 试点设计（KPI → 成功指标）\n03 员工培训体系（分角色 Prompt 库）\n04 变革管理（抵制 / 恐惧）\n05 ROI 度量（给 C 层的报告）\n06 合规治理（EU AI Act）\n07 AI 政策制定（公司级规范）`, tags: '#AI采纳 #组织变革 #AI治理 #AIROI', wechat: ['7 个 Adoption 独家模块 — 市面没有第二家 🔥','工具课教怎么用 — 这 7 块教怎么让公司用好。','老板问"怎么落地"说不出 — 就缺这 7 块。'], community: ['【7 独家模块】\n01 机会识别\n02 试点设计\n03 员工培训\n04 变革管理\n05 ROI\n06 合规\n07 政策','缺这 7 块 = 永远停留在"工具使用者"。'] },
    p14: { title: '这 4 类人学完回报最高', body: `经常被问"我这个岗位适合学 AI Adoption 吗"💼\n\n客观说：\n👩‍💼 部门经理 / Lead — 推不动团队用 AI 的管理者\n📊 运营 / 项目管理 — 每天做报表周报的人\n💼 咨询顾问 / 培训师 — 加进服务组合客单价翻\n🚀 HR / 市场 / 销售 — 想转型"AI 赋能者"的职能岗\n\n不需要技术背景 — 需要业务理解。`, tags: '#非技术AI #AI职业 #职场转型', wechat: ['这 4 类人学 Adoption 回报最高 💼','有业务理解就够了 — 不需要写代码。','非技术抓 AI 风口最短路径 ✅'], community: ['【适合人群】\n👩‍💼 管理者\n📊 运营 / 项目\n💼 咨询 / 培训\n🚀 HR / 市场 / 销售','零代码 · 需业务理解 ✅'] },
    p15: { title: '不只是听 每个场景都配互动 Lab', body: `买课最怕被动听课 🧪\n\n39 个浏览器 Lab 分布：\n🟣 Prompt Lab × 10（CoT / Schema / System）\n🟢 工具场景 Lab × 12（Copilot / Notion / Gamma）\n🔵 业务场景 Lab × 10（跨 7 业务线）\n🟠 自动化 Lab × 4（n8n / Zapier）\n⚫ 分析 / ROI Lab × 2\n🔴 合规 Lab × 1\n\n每个都是独立 Lesson。`, tags: '#互动Lab #AI学习 #Prompt', wechat: ['39 个浏览器 Lab — 每个知识点配一个 🧪','Prompt 10 · 工具 12 · 场景 10 · 自动化 4 · ROI 2 · 合规 1','Lab 独立成 Lesson — 动手做到会，不是被动听。'], community: ['【39 Lab 分布】\nPrompt 10 · 工具 12\n场景 10 · 自动化 4\nROI 2 · 合规 1\n全部浏览器跑 🧪','每个 Lab 可追踪进度 ✅'] },
    p16: { title: '8 周从工具到落地方案', body: `看到的时候觉得"8 周太短"，看完时间线发现每周都有具体交付 📅\n\n📅 W1-2 AI 工具精通\n📅 W3-5 业务场景实战（48 场景）\n📅 W6-7 组织采纳方法论\n📅 W8 毕业项目 + Demo Day\n\n每周直播 + Lab + Clinic，节奏紧但进度跟得上。`, tags: '#AI采纳 #学习路径 #8周', wechat: ['8 周路径：工具 → 场景 → 方法论 → 方案 📅','每周直播 + Lab + Clinic — 进度跟得上。','8 周后手上会有完整 AI 采纳方案。'], community: ['【8 周节奏】\nW1-2 工具\nW3-5 场景\nW6-7 方法论\nW8 Demo Day','每周都有交付 — 不是"讲完就过"。'] },
    p17: { title: '毕业带走 7 件真东西', body: `买课最怕"听完就完了" 📂\n\n这次毕业带走的 7 件东西：\n01 AI 工具地图（按业务线整理）\n02 分角色 Prompt 库（直接套用）\n03 48 场景 Playbook（步骤 + 效果）\n04 AI 采纳方案（给老板的完整报告）\n05 ROI 报告模板\n06 AI 政策草案（合规 checklist）\n07 Demo Day 作品 + 证书\n\n都是能直接带回公司用的。`, tags: '#AI采纳 #毕业交付 #方案模板', wechat: ['毕业 7 件真东西 — 不是"学完就完了" 📂','每件都能直接带回公司用 — 这才叫值回票价。','工具地图 / Prompt 库 / 场景 Playbook / ROI 模板。'], community: ['【毕业 7 交付】\n01 工具地图\n02 Prompt 库\n03 场景 Playbook\n04 采纳方案\n05 ROI 模板\n06 政策草案\n07 作品 + 证书'] },
    p18: { title: '不是录播合集 4 种学法组合', body: `买课最大的浪费是"买了不做只听"📚\n\n这次 4 种学法组合：\n🎙️ 22 节直播 — 老师带做真实场景 + 现场答疑\n🧪 39 个 Lab — 浏览器即时反馈\n💬 Clinic 案例诊所 — 带自己工作场景来诊断\n🤖 AI Tutor 24h — 中英双语答疑\n\n直播 + 动手 + 一对一诊断 + 随时问。`, tags: '#学习方法 #AI学习 #Bootcamp', wechat: ['4 种学法组合：直播 + Lab + Clinic + AI Tutor 📚','Clinic 可以把自己工作场景带来 — 超有用 💬','不是录播合集 — 边做边学 + 一对一诊断。'], community: ['【4 种学法】\n🎙️ 22 直播\n🧪 39 Lab\n💬 Clinic\n🤖 AI Tutor 24h','听课 + 动手 + 诊断 + 答疑 — 学习闭环。'] },
    p19: { title: '最后一周 你会输出这些', body: `毕业项目不是应付 — 是真正的场景方案 🎤\n\nWeek 8 你会：\n🎯 选题：基于本职工作挑一个场景\n📝 撰写：跟模板做 AI 采纳完整报告\n👀 互审：小组交叉 Review\n🎤 Demo Day：5-10 分钟展示 + 行业 Q&A\n\n🎓 带走：结业证书 + 作品集\n直接放 LinkedIn / 简历 / 升职包。`, tags: '#DemoDay #结业证书 #AI采纳', wechat: ['Week 8 毕业项目 + Demo Day + 证书 🎤','作品集直接放 LinkedIn / 简历 / 升职包。','基于本职挑场景 — 毕业方案直接带回公司用。'], community: ['【毕业流程】\n🎯 选题（本职场景）\n📝 写方案\n👀 互审\n🎤 Demo Day\n🎓 证书 + 作品集'] },
    p20: { title: '从"用 AI"到"推 AI 落地"不同量级', body: `很多人觉得"用 AI 和推 AI 是一回事" — 完全不是 🔄\n\n8 个维度对比：\n🔸 工具 · 场景 · 机会 · 试点\n🔸 培训 · 变革 · ROI · 治理\n\n左边是"自己用"— 右边是"让整个公司用好"。\n差距不是能力 — 是工作方式。`, tags: '#AI采纳 #组织转型 #认知升级', wechat: ['"用 AI"和"推 AI 落地"不是一个量级 🔄','8 维度对比：工具 / 场景 / 试点 / ROI / 治理...','差距不是能力 — 是工作方式。'], community: ['【8 维度升级】\n工具 · 场景 · 机会 · 试点\n培训 · 变革 · ROI · 治理\n\n"用"vs"推" — 完全不同的工作。'] },
    p21: { title: '报名前最常被问的 5 个问题', body: `整理了咨询最多的 5 个问题，直接答 👌\n\nQ1 要会编程吗？A 零代码\nQ2 vs 工具课？A 教组织采纳方法论\nQ3 初学者？A 适合，从工具精通开始\nQ4 毕业岗位？A Adoption / Enablement / 咨询\nQ5 公司已用 AI？A 超适合，升级成组织级`, tags: '#Bootcamp #AI课程 #AI学习', wechat: ['AI Adoption 常问 5 问：编程 / 工具课 / 初学者 / 岗位 / 公司已用 👌','零代码 · 从零开始 · 毕业做 Adoption Specialist','公司已经在用 AI 反而更值得学 — 能升级成组织级。'], community: ['【FAQ】\nQ 编程？A 零代码\nQ vs 工具课？A 教组织落地\nQ 初学者？A 适合\nQ 岗位？A Adoption / Enablement\nQ 已用 AI？A 更适合'] },
    p22: { title: 'AI 采纳 5 阶段 不是拍脑袋做', body: `Adoption 不是凭感觉推 — 是一套方法论 🧭\n\n5 阶 AI 采纳框架：\n🟣 Stage 1 机会识别（扫全部门）\n🔵 Stage 2 试点设计（KPI + 指标）\n🟢 Stage 3 培训推广（分角色 Prompt 库）\n🟡 Stage 4 ROI 度量（给 C 层汇报）\n🔴 Stage 5 治理落地（公司政策）\n\n每一阶都有模板可复用。`, tags: '#AI采纳 #方法论 #组织变革', wechat: ['AI 采纳 5 阶方法论 — 不是拍脑袋做的 🧭','机会 → 试点 → 培训 → ROI → 治理，每步有模板。','从个人工具升级到组织采纳的完整框架。'], community: ['【5 阶方法论】\n🟣 机会识别\n🔵 试点设计\n🟢 培训推广\n🟡 ROI 度量\n🔴 治理落地','每阶都有模板 + 案例 + Lab 🧭'] },
    p23: { title: '别的课不教 2 块最难最值钱能力', body: `Adoption 最值钱的能力不是工具 — 是处理"人和政策" 🔥\n\n🧠 Change Management（变革管理）\n推 AI 最大阻力是人：员工抵制 / 恐惧被替代 / 中层阴阳怪气。怎么处理？工具课永远教不到。\n\n🛡️ AI Governance（AI 治理）\n用 AI 没政策 = 裸奔。EU AI Act 落地，企业合规要求越来越严。\n\n这 2 块不会 = 永远推不到组织层。`, tags: '#变革管理 #AI治理 #EUAIAct', wechat: ['Change Management + AI Governance — 2 块最难最值钱 🔥','推 AI 最大阻力是人 — 不是技术问题。','EU AI Act 落地 — 企业必须有 AI 政策。'], community: ['【独家 2 模块】\n🧠 Change Management\n— 阻力图谱 / Stakeholder 地图 / 沟通话术\n🛡️ AI Governance\n— EU AI Act / 隐私 / 版权 / AI 政策'] },
    p24: { title: '扒了 15 份 Adoption JD 我们覆盖多少', body: `报课前做的第一件事：扒 15 份头部公司 Adoption JD 📊\n\n覆盖数据：\n• AI 工具精通（10/10）— 98%\n• 业务场景落地（9/10）— 95%\n• 试点 / 变革管理（8/10）— 92%\n• 培训 / Enablement（8/10）— 90%\n• ROI 度量（7/10）— 88%\n• 合规 / 治理（6/10）— 92%\n\n来源：Microsoft / Accenture / Deloitte / IBM / Salesforce`, tags: '#AI采纳 #JD分析 #求职', wechat: ['扒 15 份 Adoption JD — 平均覆盖 93% 📊','Microsoft / Accenture / Deloitte / IBM — 头部公司都在招。','报课前按 JD 反推课程 — 最推荐的方法。'], community: ['【JD 对照】\n工具 98% · 场景 95%\n试点 92% · 培训 90%\nROI 88% · 治理 92%\n平均覆盖 93% ✅'] },
    p25: { title: 'AI Adoption 现在能赚多少钱', body: `整理了 levels.fyi + LinkedIn 2026 数据 💰\n\nJunior（0-2 年）：$80K-$120K\nMid（2-5 年）：$120K-$180K\nSenior（5+ 年）：$180K-$250K+\n\n部分公司区间：\n• Microsoft：$150K-$220K\n• Accenture：$130K-$200K\n• Deloitte：$140K-$210K\n• McKinsey：$160K-$240K\n\n数据给自己定位用 🙏`, tags: '#AI薪资 #AI采纳 #职业规划', wechat: ['AI Adoption 薪资：Junior $80-120K · Mid $120-180K · Senior $180-250K+ 💰','Microsoft / Accenture / McKinsey — 非技术 AI 岗薪资对标。','转 Adoption 值不值 — 看数据。'], community: ['【薪资地图】\nJunior $80-120K\nMid $120-180K\nSenior $180-250K+\n\n非技术 AI 最高岗 💰'] }
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
