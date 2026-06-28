/* Vibe Coding 大师课 第 2 期 — 三通道文案 */
(function () {
  const XHS_COPY = {
    p1: { title: '用 AI 从 PRD 到部署上线', body: `不是教你用 ChatGPT 写代码片段 🌟\n\n这门课是：Claude Code Skills + MCP Server + Agent 架构 → 从 PRD 到数据库到部署，全程 AI 驱动。\n\n8 周 · 113 节 · 39 Lab · 5 Quest\n第 2 期 · 面向有基础的开发者\n主页搜"匠人 AI · Vibe Coding" ☕`, tags: '#ClaudeCode #AICoding #MCP #Agent #Skills #VibeCoding', wechat: ['用 AI 从 PRD 到部署 — 不是写代码片段 🌟','Vibe Coding 第 2 期：Skills + MCP + Agent 三件套','8 周把 AI 工具链装成工程化工作流。'], community: ['【Vibe Coding 大师课 · 第 2 期】\n8 周 · 113 节 · 39 Lab · 5 Quest\nClaude Code Skills + MCP + Agent\n面向有基础开发者 ☕','Cursor 用腻了想升级？第 2 期筹备中，主页看大纲。'] },
    p1b: { title: '会用 Cursor 不等于会用 AI 做全栈', body: `这是 2026 AI Coding 的最大认知差 💡\n\n会 Cursor = 起点\n能 Skills + MCP + Agent 做工程化 = 你正在成为真 AI 工程师\n\n8 周从"用 AI 写片段"升级到"用 AI 做全栈"。\n主页大纲可看 🌿`, tags: '#ClaudeCode #Cursor #AICoding #Skills', wechat: ['会 Cursor ≠ 会用 AI 做全栈 — 差在工程化 💡','2026 AI Coding 真正的分水岭：Skills 体系。','Prompt 熟练度 vs 工程化能力 = 完全不同级别。'], community: ['【认知差距】\n会 Cursor = 起点\nSkills + MCP + Agent = 工程化\n8 周补这块 💡'] },
    p1c: { title: '从会 Cursor 到会 Skills', body: `我这半年最值得的工具升级 🚀\n\nBefore：Prompt 拼片段、手动复制、记不住上下文\nAfter：Skills 封装 + MCP 接真实系统 + Agent 拆任务\n\n一个词：工程化。\n8 周的差距就在这里。第 2 期筹备中 主页大纲 ☕`, tags: '#ClaudeCode #Skills #MCP #AI工程化', wechat: ['从 Cursor 到 Skills — 是工具升级更是认知升级 🚀','Skills 封装 · MCP 集成 · Agent 编排 三件套。','2026 AI Coding 工程化的标准答案。'], community: ['【升级路径】\nCursor 熟练 → Skills 封装 → MCP 集成 → Agent 编排\n8 周补 🚀'] },
    p1d: { title: '2026 AI Coding 要会这 6 个核心', body: `2026 AI Coding 工程师的技能树 📍\n\n✅ Claude Code\n✅ Cursor\n✅ Codex\n✅ Skills\n✅ MCP\n✅ SubAgent\n\n会工具是底线 — 会组合是门槛。8 周把这 6 块装上。`, tags: '#AICoding #Skills #MCP #Agent #Claude #Cursor', wechat: ['2026 AI Coding 6 个核心：Claude / Cursor / Codex / Skills / MCP / SubAgent 📍','会工具是底线 会组合是门槛。','8 周把这 6 块装到自己身上。'], community: ['【6 核心技能】\nClaude Code · Cursor · Codex\nSkills · MCP · SubAgent\n2026 AI Coding 工程师配置 📍'] },
    p2: { title: '同样用 AI 写代码 差距在工程化', body: `2026 AI Coding 工程师的真实分水岭 🔀\n\n❌ Prompt 级：复制片段 / 上下文乱 / 不可复用\n✅ Workflow 级：Skills 封装 / MCP 接业务 / SubAgent 拆任务\n\n不是 Prompt 熟练度 — 是工程化能力。`, tags: '#AICoding #Skills #工程化 #Agent', wechat: ['同样用 AI 写代码 — 差距在工程化不在 Prompt 🔀','Workflow 级别 vs Prompt 级别 = 完全不同的 Engineer。','8 周补这一块。'], community: ['【分水岭】\nPrompt 级：片段 / 无复用\nWorkflow 级：Skills + MCP + Agent\n2026 工程化才是竞争力 🔀'] },
    p3: { title: '开发群都在聊 Skills 这是啥', body: `真实截图 — 开发群周三下午 💬\n\n小林："Cursor 用得挺溜，但复杂项目还是接不上"\n阿哲："你需要的是 Skills + MCP"\n小林："Skills 是啥… 听过没用过"\n阿哲："Claude Code 的可复用技能封装 — 工程化 AI 的关键"\n\n很多开发者卡在 Prompt 这一步。`, tags: '#ClaudeCode #Skills #AI工程化', wechat: ['开发群日常：Cursor 用熟了但复杂项目接不上 💬','答案是 Skills — 但很多人连名字都没听过。','2026 AI Coding 的关键词是"工程化"。'], community: ['【真实对话】\n"Cursor 挺溜"\n"复杂项目接不上"\n"你缺的是 Skills + MCP"\n这段对话每天都在发生 💬'] },
    p4: { title: '毕业 4 件事 全是硬工程能力', body: `8 周学完的具体落地 📌\n\n1️⃣ Claude Code Skills — 封装可复用 AI 工作流\n2️⃣ MCP Server 集成 — 让 AI 直连业务系统\n3️⃣ Agent 架构 — SubAgent / Tool Loop / 工程化\n4️⃣ 全栈 AI 项目 — PRD → 部署 · 可上线\n\n不是"学过"，是能写进简历和 GitHub 的硬能力。`, tags: '#ClaudeCode #Skills #MCP #Agent #全栈', wechat: ['毕业 4 件事：Skills / MCP / Agent / 全栈 AI 项目 📌','每件都能写进简历 + 放 GitHub。','不是听完就完了 — 是带走工程化能力。'], community: ['【4 件硬能力】\n✅ Claude Code Skills\n✅ MCP Server\n✅ Agent 架构\n✅ 全栈 AI 项目 📌'] },
    p5: { title: '8 周 4 Phase · 从 PRD 到交付', body: `课程节奏紧但走得稳 🗺️\n\n📍 P1 · Vibe Coding 入门 + PRD（W1-2 · 32L）\n📍 P2 · Skills / MCP / Agent（W3-5 · 37L）\n📍 P3 · 多模型 + Prompt 精调（W5-7 · 18L）\n📍 P4 · 全栈项目 + 交付（W7-8 · 26L）\n\n每 Phase 都有配套 Lab + 直播。`, tags: '#课程大纲 #ClaudeCode #AICoding', wechat: ['8 周 4 Phase：PRD → Skills → 多模型 → 全栈交付 🗺️','每 Phase 有 Lab + 直播 + Quest。','不是知识点堆砌 — 是项目驱动的工程化路径。'], community: ['【4 Phase 结构】\nP1 入门 + PRD（32L）\nP2 Skills / MCP / Agent（37L）\nP3 多模型 + Prompt（18L）\nP4 全栈 + 交付（26L）'] },
    p6: { title: '4 大 AI Coding 工具深度对比', body: `Claude Code / Cursor / Codex / Gemini 真实场景选型 🛠️\n\n🔥 Claude Code — Skills + MCP 原生 · 工程化最深\n🔥 Cursor — IDE 集成最好 · 上手最快\n🔥 Codex — OpenAI 官方 · 长任务 autonomous\n🔥 Gemini CLI — 免费额度大 · 轻量场景\n\n不是"选一个最好的" — 是"哪个场景用哪个"。课上每个都动手做。`, tags: '#ClaudeCode #Cursor #Codex #Gemini #AICoding', wechat: ['4 大 AI Coding 工具场景化选型：Claude / Cursor / Codex / Gemini 🛠️','不是选一个最好 — 是场景化用最合适。','课上 4 个都亲手做一遍。'], community: ['【4 工具选型】\nClaude Code · 工程化最深\nCursor · IDE 集成\nCodex · 长任务\nGemini · 免费轻量 🛠️'] },
    p7: { title: '做完 Skills 那节就上工具链了', body: `过往学员真实反馈 💬\n\n"Skills 那节做完直接把重复流程封装 — 团队 Review 速度翻倍"\n"MCP 接公司内部 API — 老板问怎么做到的"\n"毕业项目 PRD 到部署全 AI 驱动 — 面试聊了 40 分钟"\n\n不是编的数据，就是开发者日常。`, tags: '#学员反馈 #Skills #MCP #AICoding', wechat: ['学员反馈：Skills 封装 → Review 速度翻倍 💬','MCP 接公司 API — 面试官问怎么做到的。','毕业项目直接成面试王牌。'], community: ['【真实反馈】\n"Skills 封装 → 翻倍效率"\n"MCP 接公司 API"\n"毕业项目面试聊 40 分钟"'] },
    p8: { title: '8 周 = AI Coding 工程化全套', body: `不只是课程 — 是工程化工具箱 💼\n\n📘 113 节（Phase 1-4 完整）\n🧪 39 个独立互动 Lab\n🎙️ 22 次直播 · 实战演练\n🎯 5 节 Quest · 本机跑通\n\n+ 4 工具深度对比\n+ Skills 模板库\n+ MCP Server 案例\n+ Agent 架构参考\n+ Context Engineering 实战`, tags: '#Bootcamp #AICoding #Skills #MCP', wechat: ['113 节 + 39 Lab + 22 直播 + 5 Quest 全套 💼','不是录播合集 — 是 AI Coding 工程化完整工具箱。','Skills 模板 / MCP 案例 / Agent 架构 全部带走。'], community: ['【课程包】\n📘 113 节\n🧪 39 Lab\n🎙️ 22 直播\n🎯 5 Quest\n4 工具对比 + Skills 模板 💼'] },
    p9: { title: '已经会 Cursor 想升级 Skills + MCP', body: `Cursor 用熟了想进阶？你需要的是工程化 🌿\n\nVibe Coding 大师课第 2 期：\n→ Claude Code Skills 体系深拆\n→ MCP Server 集成真实业务\n→ Agent 架构（SubAgent / Tool Loop）\n→ 全栈 AI 项目毕业\n\n第 2 期筹备中 · 主页大纲可看 ☕`, tags: '#ClaudeCode #AICoding #Skills #MCP', wechat: ['Cursor 会了 想升级到 Skills + MCP + Agent 🌿','第 2 期筹备中 主页大纲可看 ☕','AI Coding 工程化最系统的中文课。'], community: ['【第 2 期咨询】\n面向有基础开发者\nSkills + MCP + Agent 工程化\n8 周 113 节\n主页搜 匠人 AI · Vibe Coding ☕'] },
    p10: { title: 'Vibe Coding 大师课 一周到底学什么', body: `这门课不是"教 Prompt 技巧"— 是把 AI 变成工程化工具链 🗺️\n\n一句话：给已经会 Cursor 的开发者升级到 Skills + MCP + Agent。\n\n一周节奏：\n• 周一：视频 + Skills 封装 Lab\n• 周三：直播 MCP 集成业务系统\n• 周末：SubAgent + Quest 本机跑通\n• 下周：Code Review + 导师调优\n\n8 周后你手里是：工程化工具链 + 1 个全栈 AI 项目。`, tags: '#Bootcamp #ClaudeCode #Skills #MCP', wechat: ['Vibe Coding 大师课 = 把 AI 变成工程化工具链 🗺️','一周节奏：自学 + 直播 + Quest + Review','毕业：工具链 + 全栈 AI 项目。'], community: ['【一周节奏】\n周一 自学 + Lab\n周三 直播\n周末 Quest\n下周 Review\n8 周工程化 🗺️'] },
    p11: { title: '报课前 vs 毕业后 多会什么', body: `6 维度看学完具体变化 💪\n\n🔸 AI 工具：只会 Cursor → 4 工具场景选型\n🔸 Prompt：一条一条写 → Context Eng 系统设计\n🔸 Skills：没听过 → 封装 + 共享 + 治理\n🔸 MCP：不清楚 → 接真实业务系统\n🔸 Agent：用别人的 → 自己写 SubAgent\n🔸 全栈 AI：片段拼 → PRD → 部署全流程`, tags: '#能力升级 #AICoding', wechat: ['6 维看能力升级：工具 / Prompt / Skills / MCP / Agent / 全栈 💪','从"用 AI"到"设计 AI 工作流"。','不是加技能 — 是换认知。'], community: ['【6 维升级】\n工具 · Prompt\nSkills · MCP\nAgent · 全栈\n从用到设计 💪'] },
    p12: { title: 'Claude Code Skills 4 层深拆', body: `Skills 是 2026 AI Coding 最值学的一块 📦\n\n1️⃣ Skill 封装 — 把重复工作变成可复用技能\n2️⃣ Trigger 设计 — 按场景自动触发\n3️⃣ Skill 组合 — 多 Skill 串联成任务流\n4️⃣ Skills 工程化 — 版本 / 调试 / 监控 / 治理\n\n市面上没人系统讲这个 — 我们做成了一整个章节。`, tags: '#ClaudeCode #Skills #工程化', wechat: ['Claude Code Skills 4 层深拆 📦','封装 → Trigger → 组合 → 工程化','市面上第一个系统讲 Skills 的课。'], community: ['【Skills 4 层】\n1 封装\n2 Trigger\n3 组合\n4 工程化\n一整章深拆 📦'] },
    p13: { title: 'Agent 架构 4 层拆解', body: `Agent 不是"调 AI 多次" — 是架构设计 🏗️\n\nL1 · SubAgent — 把任务拆给专门 Agent\nL2 · Tool Loop — AI 自己决定调工具\nL3 · MCP Server — 业务系统标准化暴露\nL4 · 工程化部署 — 监控 / 日志 / 版本\n\n不是玩具 — 是生产级 Agent 的完整架构。`, tags: '#Agent #AICoding #工程化 #SubAgent', wechat: ['Agent 架构 4 层拆解 🏗️','SubAgent · Tool Loop · MCP · 工程化部署','不是调 AI 多次 — 是系统设计。'], community: ['【Agent 4 层】\nL1 SubAgent\nL2 Tool Loop\nL3 MCP Server\nL4 工程化部署 🏗️'] },
    p14: { title: '这 4 类开发者回报最高', body: `看自己是否在这 4 类 💻\n\n💻 全栈 / 前端 / 后端工程师 — 想从会 Cursor 升到工程化 AI\n🛠️ DevOps / 基建 — 想把 AI 接进 CI/CD / 自动化\n🚀 技术创业者 / Indie Dev — 一人团队 AI 放大产出\n📐 Tech Lead / 架构师 — 团队引入 Skills + MCP 治理\n\n有编程基础都适合。`, tags: '#开发者 #AICoding #ClaudeCode', wechat: ['4 类开发者回报最高：工程师 / DevOps / Indie / Tech Lead 💻','有编程基础都能学。','Tech Lead 学这个 = 团队技术影响力翻倍。'], community: ['【4 类受众】\n💻 开发工程师\n🛠️ DevOps\n🚀 Indie Dev\n📐 Tech Lead\n有基础都行 💻'] },
    p15: { title: '39 Lab + 5 Quest 每块都动手', body: `买课最怕被动听 — 这次每块都练 🧪\n\nPRD Lab × 6 / Skills Lab × 10 / MCP Lab × 8\nAgent Lab × 6 / 多模型 Lab × 5 / 全栈 Lab × 4\n\n+ 🎯 5 节 Quest 本机实战\n在你自己电脑跑通：装环境 / 写 Skill / 搭 MCP / 部署\n\n不是 iframe Lab — 是真实流程。`, tags: '#互动Lab #Quest #ClaudeCode #AICoding', wechat: ['39 个 Lab + 5 节 Quest — 每个概念都动手 🧪','Quest 是在你自己电脑跑通真实流程。','不是看视频打勾 — 是真实操作。'], community: ['【Lab 分布】\nPRD 6 · Skills 10\nMCP 8 · Agent 6\n多模型 5 · 全栈 4\n+ 5 Quest 本机实战 🧪'] },
    p16: { title: '8 周从 PRD 到部署 完整路径', body: `8 周节奏清晰每周都有交付 📅\n\nW1-2 P1 Vibe Coding 入门 + PRD\nW3-5 P2 Skills / MCP / Agent\nW5-7 P3 多模型 + Prompt 精调\nW7-8 P4 全栈项目 + 交付\n\n每周都有 Lab + Quest + 直播 Code Review。`, tags: '#学习路径 #Bootcamp #ClaudeCode', wechat: ['8 周 4 Phase：入门 → Skills → 多模型 → 全栈 📅','每周都有交付 — 不是看完就过。','W3-5 Skills + MCP 是课程核心周。'], community: ['【8 周路径】\nW1-2 入门 + PRD\nW3-5 核心三件套\nW5-7 多模型\nW7-8 全栈交付 📅'] },
    p17: { title: '毕业带走 6 件真东西', body: `不是听完就完了 — 带走 6 件能用的 📂\n\n01 Skills 模板库（10+ 个可复用）\n02 MCP Server 样例（数据库 / API）\n03 Agent 架构文档（SubAgent / Tool Loop）\n04 全栈 AI 项目（可上线 · 简历可写）\n05 4 工具对比报告（场景选型）\n06 结业证书 + Demo Day\n\n每件都能直接拿来用。`, tags: '#毕业交付 #ClaudeCode #Skills #MCP', wechat: ['毕业 6 件真东西：模板库 / 案例 / 文档 / 项目 / 报告 / 证书 📂','不是听完就完了 — 每件都能直接用。','简历写 "Skills + MCP + Agent" 面试加分。'], community: ['【6 件交付】\n01 Skills 模板库\n02 MCP 样例\n03 Agent 文档\n04 全栈项目\n05 工具报告\n06 证书 📂'] },
    p18: { title: '不是录播合集 4 种学法组合', body: `买课最大浪费 = 买了不做只听 📚\n\n4 种学法组合：\n📺 视频自学 — Skills / MCP / Agent 系统教程\n🧪 39 个互动 Lab — 浏览器即时反馈\n🎯 5 节 Quest — 在你自己电脑跑通\n🎙️ 22 次直播 — Code Review + 导师调优\n\n听 + 做 + 本机跑 + 一对一 = 学习闭环。`, tags: '#学习方法 #Quest #Lab', wechat: ['4 种学法：视频 / Lab / Quest / 直播 📚','Quest 是在你自己电脑跑 — 不是教室模拟。','学习闭环：听 + 做 + 本机 + 一对一。'], community: ['【4 种学法】\n📺 视频自学\n🧪 39 Lab\n🎯 5 Quest 本机\n🎙️ 22 直播'] },
    p19: { title: '5 节 Quest 在你电脑跑真实流程', body: `这是这门课最特别的设计 🎯\n\nQ1 装 Claude Code + 首次对话\nQ2 自己写第一个 Skill\nQ3 搭本地 MCP Server\nQ4 SubAgent 拆分任务\nQ5 PRD → Ship 全流程\n\n不是教室 Lab — AI 带你在自己电脑跑真实流程，跑通才算过。`, tags: '#Quest #ClaudeCode #实战', wechat: ['5 节 Quest 本机实战：装环境 → 写 Skill → 搭 MCP → SubAgent → 部署 🎯','AI 带你在自己电脑跑 — 跑通才算过。','这是买了这门课最对得起学费的部分。'], community: ['【5 Quest】\nQ1 装 Claude Code\nQ2 写第一个 Skill\nQ3 本地 MCP\nQ4 SubAgent\nQ5 PRD → Ship\n本机真实跑 🎯'] },
    p20: { title: '第 1 期 → 第 2 期 跟上工具变化', body: `AI 工具 2026 换代快 — 第 2 期做了 7 项升级 🔄\n\n🔸 核心工具：Cursor 为主 → Claude Code + Skills C 位\n🔸 工程化：Prompt 拼接 → Skills + MCP + Agent 三件套\n🔸 Agent：单轮调用 → SubAgent + Tool Loop\n🔸 多模型：只用一家 → 4 工具场景选型\n🔸 Lab：较少 → 39 个独立 Lab\n🔸 Quest：无 → 5 节本机实战\n🔸 毕业：零散项目 → PRD → 部署 完整 Demo`, tags: '#第2期 #升级 #ClaudeCode', wechat: ['第 2 期 7 项升级：工具 / 工程化 / Agent / 多模型 / Lab / Quest / 毕业 🔄','跟上 2026 工具变化 — 不是去年的内容重放。','老学员可以看升级点决定是否升级。'], community: ['【第 2 期升级】\n7 项核心变化\nClaude Code + Skills C 位\nAgent 工程化 + Quest 实战 🔄'] },
    p21: { title: '报名前最常问的 5 个问题', body: `整理了 5 个高频问题直接答 👌\n\nQ1 要多少基础？能独立做 Web 项目就够\nQ2 和 Cursor 教程区别？教工程化不是用法\nQ3 要买 Claude Pro 吗？建议但非必需\nQ4 Skills 会过时吗？Anthropic 官方方向 · 不会\nQ5 学完能做什么？AI Coding Engineer / Tech Lead / Indie Dev`, tags: '#FAQ #ClaudeCode #Bootcamp', wechat: ['5 个高频问题：基础 / vs 教程 / Pro / 会过时 / 岗位 👌','Skills 是 Anthropic 官方方向 — 2026 更主流。','学完岗位：AI Coding Eng / Tech Lead / Indie。'], community: ['【FAQ】\n基础：Web 项目\nvs 教程：教工程化\nPro：建议\n过时：不会\n岗位：AI / Tech Lead 👌'] },
    p22: { title: 'AI 驱动开发 6 阶方法论', body: `从 PRD 到 Ship 完整流程 🔧\n\n1️⃣ PRD 工程化 — AI 辅助拆解需求\n2️⃣ Skills 设计 — 封装可复用技能\n3️⃣ MCP 集成 — 接真实业务系统\n4️⃣ Agent 编排 — SubAgent + Tool Loop\n5️⃣ Context 精调 — 整个上下文架构\n6️⃣ 部署 + 监控 — 工程化上线\n\n每阶都有 Lab + Quest。`, tags: '#方法论 #AI开发 #ClaudeCode #工程化', wechat: ['AI 驱动开发 6 阶方法论：PRD → Ship 🔧','每阶有 Lab + Quest 配套。','这是 2026 AI Coding 工程师的标准流程。'], community: ['【6 阶方法论】\n1 PRD\n2 Skills\n3 MCP\n4 Agent\n5 Context\n6 部署 🔧'] },
    p23: { title: '这 3 块独家 别的 AI 编程课没有', body: `对比过 5-6 门 AI 编程课 这 3 块找不到第二家 🔥\n\n🌟 Claude Code Skills 体系\n市面上没人系统讲 — 封装 / Trigger / 组合 / 工程化一整章\n\n🌟 MCP Server 深集成\n不是概念 — 是教你搭 MCP 把真实业务 API 接进 AI\n\n🌟 5 节 Quest · 本机实战\n不是 iframe Lab — AI 带你在自己电脑跑真实流程`, tags: '#ClaudeCode #Skills #MCP #Quest #独家', wechat: ['3 块独家：Skills 体系 / MCP 集成 / 本机 Quest 🔥','市面上没有第二家系统讲 Claude Code Skills。','Quest 在你电脑真实跑 — 这才是独家。'], community: ['【独家 3 块】\n🌟 Skills 体系\n🌟 MCP 深集成\n🌟 5 节 Quest 本机\n找不到第二家 🔥'] },
    p24: { title: '哪个场景用哪个 AI Coding 工具', body: `2026 AI Coding 工具选型指南 🛠️\n\nClaude Code — 复杂工程化 / 长期项目\nCursor — 日常 IDE 编程\nCodex — 长任务 autonomous\nGemini CLI — 轻量 / 免费额度\n\n不是选一个最好的 — 是场景化用最合适的。课上每个都做一遍，自己判断。`, tags: '#ClaudeCode #Cursor #Codex #Gemini #工具选型', wechat: ['4 工具场景选型：Claude / Cursor / Codex / Gemini 🛠️','不是选一个最好 — 是场景化配置。','课上 4 个都做一遍，自己判断怎么搭配。'], community: ['【工具选型】\nClaude Code — 工程化\nCursor — 日常 IDE\nCodex — 长任务\nGemini — 轻量'] },
    p25: { title: '8 周学完能拿回什么', body: `ROI 直接看 💎\n\n📊 3-5× 个人产出提升（把重复流程变 Skills）\n📊 10+ 可复用 Skills（团队资产）\n📊 1 个全栈 AI 项目（简历 / GitHub）\n\n5 个具体价值：\n⚡ 重复工作变 Skills — 每天省 1-2 小时\n🏗️ MCP 接公司 API — 老板眼里你是"能落地 AI"的人\n💼 简历写 Skills + MCP + Agent — AI 岗面试加分\n🚀 Indie Dev 1 人做 MVP — 原本 3 人的事\n📐 团队引入 Skills 体系 — Tech Lead 技术影响力`, tags: '#ROI #AI工程化 #职业成长', wechat: ['8 周能拿回：3-5× 产出 · 10+ Skills · 1 个全栈 AI 项目 💎','每天省 1-2 小时 × 一年 = 好几百小时。','这门课的 ROI 不是学费 是时间复利。'], community: ['【ROI】\n3-5× 产出\n10+ Skills 资产\n1 个项目\n\n5 个具体价值\n时间复利 💎'] }
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
