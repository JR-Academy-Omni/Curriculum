/* 右侧文案面板 — 小红书 / 朋友圈 / 社群 三 Tab 切换 (business-analyst) */
(function () {
  const XHS_COPY = {
    p1: {
      title: '从 BA 卷成 AI 产品经理｜2026 产品岗已经换代',
      body: `不知道大家最近有没有感觉，产品岗的 JD 今年变化特别大。\n之前问的是『要什么功能』，现在问的是『这个 AI feature 准确率多少 / 成本多少 / 怎么评估』。\n\n扒了 12 份澳洲 AI PM JD 以后发现，传统 BA 那套（User Story / PRD / Jira）还得保留，但要加上：AI PRD 七章、Prompt 工程、RAG 选型、成本管理、评估指标。\n\n🌿 这 7 周课刚好把我从『写 PRD』带到能定 AI feature 指标。`,
      tags: '#AI产品经理 #BA转AIPM #产品经理 #转岗 #澳洲求职 #PM日常 #小白学AI #AIPM学习',
      wechat: [
        '2026 年的产品岗 JD 已经换代了 — 除了 User Story，还要会 AI PRD / Prompt A/B / RAG 成本。7 周课开始 🌿',
        '从传统 BA 卷成 AI 产品经理的完整路径图，我放在主页了 👀',
        '不只是多几个 AI 关键词 — 需求方法论、指标体系、风险清单全都变了。'
      ],
      community: [
        '【BA / 产品岗学员看过来】\n第 4 期 AI 产品经理（BA）训练营开放咨询\n7 周 · 94 节课 · 7 个 Lab + 真实 P3 项目实习\n主页看课程大纲 🌿',
        '2026 的 PM 招聘已经右移了：AI PRD、Prompt A/B、RAG 成本、评估指标 全是入门线。想系统补的看看新一期 👀'
      ]
    },
    p1b: {
      title: '会用 ChatGPT ≠ 会做 AI PM｜2026 产品岗要的是这个',
      body: `别被『我会用 AI』骗了。\n\n❌ 很多人停在：问 ChatGPT 几个问题、生成文案、润色 PRD\n✅ 岗位真正要：写能落地的 AI PRD、选模型、算成本、定指标、落 A/B 实验\n\n这 7 周带你跨过这个鸿沟，从『会用』到『会做』。\n不只是产品直觉，是可以放 portfolio 的真实产出。`,
      tags: '#AI产品经理 #产品经理 #AIPM #AI转岗 #BA学习 #PM求职 #AIPRD',
      wechat: [
        '会用 ChatGPT 不等于会做 AI PM。2026 要的是能把 AI 做成生产 feature 的人 🌱',
        '别再写流水账 PRD 了 — AI PRD 要写数据 / 模型 / 成本 / 风险。7 周课开始。'
      ],
      community: [
        '【认知纠正】会用 ChatGPT 不等于会做 AI PM。\n岗位真正要的是能写 AI PRD、做 Prompt A/B、管成本的人。新一期 7 周课帮你补齐。主页咨询 🌿'
      ]
    },
    p1c: {
      title: '从传统 BA 升级成 AI PM｜薪资上一档的路径',
      body: `澳洲 BA 的薪资 range：$65K–$95K；\n澳洲 AI PM 的薪资 range：$110K–$180K+\n\n中间不是加一个关键词『AI』就过了。\n差的是：AI PRD、Prompt 工程、RAG 选型、成本评估、合规风险五样核心技能。\n\n7 周帮你把这 5 样补齐，做一份针对 AI PM 岗位的 portfolio。非承诺区间 · 仅参考 Seek / LinkedIn 数据。`,
      tags: '#BA转产品 #AIPM转岗 #澳洲求职 #产品经理薪资 #职业升级',
      wechat: [
        'BA → AI PM：薪资区间差一档。中间差的不是头衔，是 5 样核心技能。7 周补齐 🚀',
        '从 $65K 到 $110K+ 的产品岗升级路径，看主页。'
      ],
      community: [
        '【职业升级】传统 BA $65K-$95K → AI PM $110K-$180K+（澳洲 range · 非承诺）。\n差的是 AI PRD、Prompt、RAG、成本、合规。7 周帮你补齐。'
      ]
    },
    p1d: {
      title: '不会这 6 样 AI PM 面试接不上｜2026 新基线',
      body: `AI PM 面试已经不是问『你带过什么产品』了。\n\n现在问的是：\n→ RAG 召回不好你怎么做 eval？\n→ 你这个 feature 准确率 80% 够吗？cost 多少？\n→ Prompt injection 风险怎么写进 PRD？\n→ 用户 PII 能不能进 RAG 数据？\n\n不会这 6 样的话，面试第 2 轮基本接不上 🥲`,
      tags: '#AIPM面试 #产品经理面试 #求职 #AI产品经理 #澳洲科技 #PM学习',
      wechat: [
        '不会 RAG eval / Prompt A/B / 成本估算？AI PM 面试接不上 🥲',
        '今年的 AI PM 面试都在考什么？6 样核心技能 checklist 看主页。'
      ],
      community: [
        '【面试避坑】别等面试挂了才发现 AI PRD 没写过、成本没算过。\n7 周带你把 AI PM 核心 6 样补齐，写进简历里。主页咨询 🎯'
      ]
    },
    p2: {
      title: '同样做产品 差距居然这么大｜一张图看完',
      body: `年初还在跟同事一起写 PRD，半年不到差距这么大。\n\n❌ 我还在：堆功能清单、写『提升体验』当指标、风险章节 = 进度延期\n✅ 他们已经：AI PRD 七章结构、三维指标、Prompt A/B、算 token 成本\n\n不是努力没用，是方向换了。\n扒了 12 份澳洲 AI PM JD 后发现，岗位基线整体右移。`,
      tags: '#产品经理日常 #AI产品经理 #PM技能 #AIPM #小红书学习 #产品思维',
      wechat: [
        '2026 PM JD 已经换代了：AI PRD / 三维指标 / Prompt A/B 全是入门 🥲',
        '同行已经在写 AI PRD 了，你还在堆功能清单？差距不是能力，是方向。',
        '一张图看完 2026 PM 岗位的代际差距 👇'
      ],
      community: [
        '【差距对比】\n❌ 还在：堆功能、『提升体验』当指标、风险等于进度延期\n✅ 他们：AI PRD 七章、三维指标、Prompt A/B、算 token 成本\n方向不对，努力白费。新一期课看主页。'
      ]
    },
    p3: {
      title: '群里突然聊 RAG Eval｜作为 PM 我…这是什么',
      body: `真的就是个普通的周二下午。\n\nTech Lead 在群里：『我们下一版要上 RAG，PM 你来定 evaluation 指标吧。』\n我：『Evaluation 指标……是看 accuracy 吗？』\nTech Lead：『还要 latency / hallucination rate / cost per query，别忘了做 A/B。』\nData：『顺便看下 Stakeholder 有没有批过 PII 脱敏流程。』\n\n那一刻突然意识到：产品岗真的换代了 🥲`,
      tags: '#产品经理日常 #PM成长 #RAG学习 #AI产品经理 #技术焦虑 #AIPM',
      wechat: [
        '同事群突然聊 RAG Eval 和 Prompt A/B — 你跟得上吗？🌱',
        '『PM 你来定 evaluation 指标』—— 这句话最近听到好几次了 😅',
        '下午茶时间的 AI 焦虑：evaluation 到底怎么定 😂'
      ],
      community: [
        '【自测】群里聊到下面这些你能接上话吗？\n→ RAG eval 指标怎么定\n→ Prompt A/B 怎么设计\n→ Token 成本怎么算\n→ PII 能不能进 RAG\n接不上的话，新一期课刚好补 🌱'
      ]
    },
    p4: {
      title: '学完你能拿这 4 个能力｜每一个都能放 portfolio',
      body: `7 周课下来不是听讲，是真的做出 4 份可以讲给面试官的东西：\n\n1️⃣ 一份完整 AI PRD（数据 / 模型 / 指标 / 风险 五章齐全）\n2️⃣ Prompt 工程 4 层 + A/B 测试报告\n3️⃣ RAG 文档问答原型（无代码搭，带评估）\n4️⃣ 端到端自动化链路（Notion → AI → Jira，含成本控制）\n\n每一个都能放 LinkedIn，拿去面试直接讲 case study。`,
      tags: '#AI产品经理 #产品经理作品集 #PM portfolio #AIPM #转岗 #AI学习',
      wechat: [
        '7 周课 = 4 份可以放 LinkedIn 的产出：AI PRD / Prompt A/B / RAG 原型 / 自动化链路 ✍️',
        '面试 AI PM 拿什么讲 case study？这 4 个产出够用 1 年。'
      ],
      community: [
        '【学完你能做什么】\n① 一份完整 AI PRD（7 章齐全）\n② Prompt 工程 4 层 + A/B 报告\n③ RAG 文档问答原型\n④ Notion→AI→Jira 自动化链路\n四个产出直接进 portfolio。主页看大纲。'
      ]
    },
    p5: {
      title: '7 周 6 Phases｜94 节课完整地图',
      body: `很多人问课程到底怎么安排，放个地图给大家看：\n\n🔵 Phase 0 · Week 0 · 14 节：AI 基础 + 工具配置\n🟢 Phase 1 · Week 1 · 25 节：BA 角色 + 求职\n🟡 Phase 2 · Week 2 · 23 节：需求 + 敏捷\n🔴 Phase 3 · Week 3-4 · 17 节：AI PRD + Prompt 工程\n🟣 Phase 4 · Week 5 · 9 节：AI 原型实战\n🔵 Phase 5 · Week 6 · 6 节：自动化 + Agent 落地\n\n每个 Phase 结尾有章节 Quiz，卡关才能解锁下一个。`,
      tags: '#AI产品经理 #课程大纲 #AIPM #学习路线 #产品经理学习',
      wechat: [
        '7 周 6 Phases · 94 节课 · 10 个 Quiz · 7 个 Lab。课程地图主页见 🗺️',
        'BA → AI PM 的 7 周路线图（每周干什么）主页可看。'
      ],
      community: [
        '【课程地图】\nWK0 启程 14 · WK1 求职 25 · WK2 敏捷 23\nWK3-4 PRD/Prompt 17 · WK5 原型 9 · WK6 落地 6\n每 Phase 结尾 Quiz 卡关。主页查完整大纲 🌿'
      ]
    },
    p6: {
      title: 'AI PM 真正要会的 12 个工具｜不是堆 logo',
      body: `整理了 AI PM 每天要用的工具栈：\n\n- LLM：ChatGPT / Claude / Gemini（选型对比）\n- PRD：Notion + AI 辅助写作\n- 任务：Jira / Linear（Sprint 管理）\n- 原型：Figma + Prototype 联动\n- 研究：Perplexity（用户访谈摘要）\n- RAG：GPTs / Notion AI Q&A\n- 自动化：n8n / Zapier\n- 代码协作：Cursor（看懂前后端）\n\n课里每个都配一张 Cheat Sheet 速查卡。`,
      tags: '#AIPM工具 #产品经理工具 #AI工具推荐 #PM效率 #工具栈',
      wechat: [
        'AI PM 每天要用的 12 个工具 · 每个都配 Cheat Sheet 🧰',
        '别再用 Excel 写需求了 — Notion + Jira + n8n 才是 2026 标配。'
      ],
      community: [
        '【AI PM 工具栈】\nLLM · PRD · 任务 · 原型 · 研究 · RAG · 自动化 · 代码\n12 个工具 + 12 张 Cheat Sheet 打包送。主页看课表。'
      ]
    },
    p7: {
      title: '学员真实反馈｜不是代言是群聊',
      body: `往期 3 条真实学员反馈（课后群里直接复制出来）：\n\n📝『讲 Prompt 不是教技巧，是教我怎么把需求翻成机器能懂的话。这个转译能力现在每天都在用。』\n\n📝『AI PRD 七章模板我直接拿去公司用了，Tech Lead 看完说这版终于不用他补数据章了。』\n\n📝『以前觉得 PM 就是写需求催进度，学完才发现 AI 时代 PM 真的要懂成本和评估指标。』`,
      tags: '#学员反馈 #AIPM #产品经理 #AI学习 #真实评价',
      wechat: [
        '往期学员说『AI PRD 模板直接拿去公司用了』 🌱',
        '『PM 真的要懂成本和评估指标』—— 学完最大的认知升级。'
      ],
      community: [
        '【学员真实反馈】\n"AI PRD 模板 Tech Lead 说终于不用他补数据章了"\n"Prompt 是把需求翻译成机器能懂的语言"\n"PM 要懂成本和评估指标"\n想听更多主页咨询。'
      ]
    },
    p8: {
      title: '94 节课到底装了什么｜一张图看全',
      body: `很多同学问课里到底有什么，开个清单：\n\n📚 课程主体\n- 94 节课 / 6 Phases / 7 周直播 + 录播\n- 7 个浏览器内 Lab（做出来再走）\n- 10 个章节 Quiz（卡关验收）\n- 2 次 1v1 面试简历辅导（Xin / Tiger 等导师）\n\n🎁 打包资源\n- AI PRD 7 章模板 · PM Prompt 库 20+\n- 成本估算卡 · 毕业 portfolio 定稿\n- 真实 P3 项目实习（4-6 周 MVP）\n- 学员群长期答疑`,
      tags: '#课程配置 #AIPM课程 #产品经理学习 #AI训练营',
      wechat: [
        '94 节 + 7 Lab + 10 Quiz + 1v1 × 2 + P3 项目 + portfolio 定稿。7 周搞定 📦',
        'AI PM 训练营的完整配置清单，主页可查。'
      ],
      community: [
        '【课程配置】\n94 节课 · 7 Lab · 10 Quiz · 1v1 × 2\n+ AI PRD 模板 · Prompt 库 · P3 实习 · Portfolio 定稿\n第 4 期开放咨询 🌿'
      ]
    },
    p9: {
      title: '还想再卷一卷｜7 周从 BA 到 AI PM',
      body: `2026 已经不再是『我会用 AI』就够的时代了。\n\n会不会定 AI feature 的指标 / 算月成本 / 写 AI PRD / 做 Prompt A/B — 这几样已经是产品岗的入门线。\n\n7 周 · 94 节课 · 6 Phase · 一期走完。\n第 4 期招生中，2025.12.01 开课。`,
      tags: '#AI产品经理 #AIPM #转岗 #7周 #学习 #产品经理',
      wechat: [
        '第 4 期 AI PM 训练营招生中 · 2025.12 开课 · 7 周 94 节课 🌿',
        '还想再卷？7 周把 AI PM 核心技能补齐。主页可看课程大纲。'
      ],
      community: [
        '【第 4 期招生中】\nAI 产品经理（BA）训练营 · 2025.12.01 → 2026.01.18\n7 周 · 94 节课 · 6 Phase\n主页课程大纲看详细 🌿'
      ]
    },
    p10: {
      title: 'AI PM 到底一天在做什么｜不看官话看日常',
      body: `『AI 产品经理』听起来很唬人，实际一天是这样：\n\n🕘 09:30 跟客服团队聊用户投诉场景，找一个能自动化分诊的环节\n🕛 12:00 写 3 套 Prompt 让 LLM 分诊，对比 accuracy / cost / latency\n🕒 15:00 和工程师 review RAG 召回不理想的 case，定下周 eval 计划\n🕔 17:30 给 Stakeholder 写一页『本周 AI 指标 + 下周取舍』周报\n\nAI PM = 把 AI 能力翻译成业务结果的人。`,
      tags: '#AIPM日常 #AI产品经理 #PM一天 #产品经理工作 #AIPM学习',
      wechat: [
        'AI PM 一天的真实工作：聊场景 / 写 Prompt / eval RAG / 周报取舍 👀',
        '『AI PM = 把 AI 能力翻译成业务结果的人』—— 最贴切的定义。'
      ],
      community: [
        '【AI PM 一天】\n09:30 聊自动化场景 · 12:00 Prompt A/B · 15:00 RAG eval · 17:30 Stakeholder 周报\n不是问卷调研 + 画 PPT，是真实在做 AI feature 的取舍。'
      ]
    },
    p11: {
      title: '传统 BA vs AI PM｜5 维度技能栈对照',
      body: `整理了 5 个维度的对比，发给还在犹豫要不要转的朋友：\n\n📐 需求方法论：User Story → + AI Capability Spec\n🛠 工具链：Jira/Figma → + GPTs/n8n/RAG\n📊 评估指标：完成率/转化 → + accuracy/latency/hallucination/cost\n👥 利益相关者：业务/开发/QA → + 数据/合规/AI 伦理\n⚠️ 风险清单：范围/进度 → + Prompt 注入/泄漏/偏见/成本失控\n\n不是替换，是加码。传统 BA 技能保留，上层加 AI 专项。`,
      tags: '#BA转AIPM #产品经理技能 #AI产品经理 #技能对比',
      wechat: [
        '传统 BA vs AI PM · 5 维度对比表。不是替换是加码 📊',
        'User Story 保留，上面加 AI Capability Spec / 三维指标 / AI 风险。'
      ],
      community: [
        '【BA vs AI PM 5 维度】\n方法论 · 工具 · 指标 · Stakeholder · 风险\n每一维都是『保留 + 加码』，不是推倒重来。主页可看全表。'
      ]
    },
    p12: {
      title: 'AI 产品 PRD 必备的 7 个章节｜后 4 章是差异化',
      body: `传统 PRD 写 3 章就能交，AI 产品 PRD 要写 7 章。多的 4 章是 AI 时代的差异化必修：\n\n1. 功能定义（有）\n2. 用户流程（有）\n3. 约束 / NFR（有）\n4. 🆕 数据章节（RAG 数据源 + PII 脱敏）\n5. 🆕 模型策略（选型 + Prompt + fallback）\n6. 🆕 成功指标（accuracy / latency / cost 三维）\n7. 🆕 风险与合规（Prompt 注入 / 幻觉 / GDPR / 伦理）\n\n没有这 4 章的 PRD 过不了 2026 的评审。`,
      tags: '#AIPRD #产品经理PRD #AI产品经理 #PM文档 #AIPM',
      wechat: [
        'AI 产品 PRD 必备 7 章。传统 3 章 + AI 4 章（数据/模型/指标/风险）📝',
        '没有数据章 + 指标章的 AI PRD 过不了评审。模板主页可下 🎁'
      ],
      community: [
        '【AI PRD 7 章】\n① 功能 ② 流程 ③ 约束 ④ 数据 ⑤ 模型 ⑥ 指标 ⑦ 风险\n后 4 章是 AI 时代差异化必修。L74 Lab 里会练一遍。'
      ]
    },
    p13: {
      title: 'Prompt 不是问得好｜是你的产品语言',
      body: `很多人觉得 Prompt 是『怎么问得好』的技巧。\n错。Prompt 是把产品需求翻译成机器能懂的语言。\n\n📚 4 层次：\n01. Basic — 指令 + 上下文（新人多停这里）\n02. Few-shot — 给示例让 AI 学（生成符合 INVEST 的 User Story）\n03. Chain-of-Thought — 推理路径显式化（复杂决策）\n04. Agent Prompt — 工具调用 + 反思循环（2026 必会）\n\n会写 Prompt = 会把需求精确翻译给机器。`,
      tags: '#Prompt工程 #AI产品经理 #PromptEngineering #AIPM #产品经理技能',
      wechat: [
        'Prompt ≠ 问得好。Prompt = 把产品需求翻成机器能懂的语言 🎯',
        '4 层 Prompt 等级：Basic / Few-shot / CoT / Agent。你在哪层？'
      ],
      community: [
        '【Prompt 4 层次】\nBasic · Few-shot · Chain-of-Thought · Agent\n2026 的 PM 必须能走到第 4 层。L76-78 专门练。'
      ]
    },
    p14: {
      title: '这 4 类人来学最划得来｜对号入座',
      body: `不是所有人都适合。看看你在哪一类：\n\n📚 文科 / 商科背景：想转产品，不会代码也能上 — 7 个 Lab 全是无代码 / 低代码\n💼 已有 BA / PM 经验：想补 AI 技能栈，薪资上一档\n🎨 设计 / 运营转产品：看得懂 PRD + 会用 AI 工具 = 转岗竞争力\n🛠 技术转产品：懂工程 + 学 Stakeholder / 商业视角 = AI PM 顶配\n\n❌ 不适合：想做 AI 工程师（看 AI Engineer Bootcamp）`,
      tags: '#适合谁学 #AIPM转岗 #产品经理 #AI学习',
      wechat: [
        '适合 4 类人：文科/商科 · BA/PM · 设计运营 · 技术转产品 🌱',
        '不适合：想做 AI 工程师的（那是另一个 bootcamp）。'
      ],
      community: [
        '【谁来学最合适】\n文科/商科想转 · 已有 BA/PM 想加码 · 设计运营想转 · 技术转产品\n对号入座看主页。'
      ]
    },
    p15: {
      title: '7 个 Lab 做出来再走｜每个都能放 portfolio',
      body: `训练营不是听讲，是做出来：\n\nL06 · 工具与账号配置（Prompt 入门）\nL38 · AI 应用体验对比（3×3 评估矩阵）\nL50 · AI 小编剧（Few-shot 生成 User Story）\nL74 · 写一份完整 AI PRD（数据/模型/指标/风险）\nL78 · Prompt A/B 测试（6 套对比报告）\nL84 · 文档问答助手（GPTs/Notion AI）\nL89 · 🌟 毕业 Lab：Notion → AI → Jira 自动化链路\n\n每个 Lab 产出都能放 portfolio，面试直接讲 case study。`,
      tags: '#AIPM课程 #产品经理作品集 #AI训练营 #AIPortfolio',
      wechat: [
        '7 个 Lab · 每个都是可放 portfolio 的真实产出 🎯',
        '面试 AI PM 缺 case study？这 7 个 Lab 够讲 1 年。'
      ],
      community: [
        '【7 个 Lab】\nL06 · L38 · L50 · L74 AI PRD · L78 Prompt A/B · L84 RAG · L89 毕业自动化链路\n每个都可放 portfolio。主页看详细。'
      ]
    },
    p16: {
      title: 'Week 0 → Offer 的 10 周时间线｜不是打卡是卡关',
      body: `很多人问节奏怎么安排：\n\n📅 Week 0-6 直播 + 录播\n  WK0 AI 基础 · WK1 BA 求职\n  WK2 敏捷需求 · WK3-4 PRD+Prompt\n  WK5 原型 · WK6 落地\n📅 Week 7-10 P3 项目实习\n  真实 stakeholder / 真实 deadline / 上线演示\n📅 + 2 次 1v1 辅导\n  简历 + 面试定稿\n\n每 Phase 结尾 Quiz 卡关，没通过补看再考。不是打卡，是真卡关。`,
      tags: '#学习节奏 #AIPM训练营 #课程时间线 #AI学习',
      wechat: [
        '7 周直播 + 4 周 P3 项目实习 + 1v1 × 2 · 总计 10 周从零到 portfolio 📅',
        '每 Phase 结尾 Quiz 卡关 — 没通过补看再考，不给混。'
      ],
      community: [
        '【10 周时间线】\nWK0-6 直播（6 Phase 卡关）\nWK7-10 P3 项目（真实 stakeholder）\n+ 1v1 × 2 简历面试辅导\n节奏紧 · 产出多 · 主页看大纲。'
      ]
    },
    p17: {
      title: 'P3 真实项目实习｜不是模拟是真的要上线',
      body: `P3 = Project Phase 3，JR Academy 独有的真实项目实习机制。\n\n你不是一个人做需求，是作为 AI PM 代表，跟 Web 全栈班 / DevOps 班同学组队，4-6 周做一个真实可上线的 MVP。\n\n你的产出：\n✍️ Project Brief 1 页 · AI PRD 7 章\n📋 User Story Backlog · Stakeholder 周报\n✅ 验收标准表 · 上线演示 + 复盘\n\n项目直接进 portfolio，面试讲 case study 的压轴素材。`,
      tags: '#P3项目 #AIPM实习 #真实项目 #产品经理作品集',
      wechat: [
        'P3 = 不是模拟，是真的要上线的项目。你是 AI PM 代表 🚀',
        '和全栈班 / DevOps 班组队 · 4-6 周 · 真实 stakeholder · 上线演示。'
      ],
      community: [
        '【P3 项目实习】\n和全栈/DevOps 班组队 · 4-6 周真实 MVP\n你作为 AI PM：Project Brief · AI PRD · Backlog · 周报 · 验收 · 演示\n直接进 portfolio。'
      ]
    },
    p18: {
      title: 'AI PM 从接需求到出 Ticket｜中间这 6 步',
      body: `经常有同学问：AI PM 到底每天在做什么？\n放一个完整工作流，从 Stakeholder 一句话开始：\n\n1️⃣ Stakeholder 访谈（Perplexity + 1:1）\n2️⃣ 业务目标 + 用户画像（ChatGPT）\n3️⃣ AI PRD 7 章（Notion + AI 辅助）⭐ 核心\n4️⃣ User Story Backlog（Few-shot 生成）\n5️⃣ 评审 + 风险对齐（Stakeholder 会议）\n6️⃣ Jira Story + Sprint（n8n 自动化 + 通知）\n\n整个 workflow 走一遍大概 3-5 天。`,
      tags: '#AIPM工作流 #产品经理日常 #AI产品经理 #PM流程',
      wechat: [
        'AI PM 从 Stakeholder 到 Jira 中间 6 步 · 3-5 天跑完一轮 🛠',
        '整套工作流课里 L61-L70 会走一遍。'
      ],
      community: [
        '【AI PM 工作流 6 步】\n访谈 → 目标 → AI PRD → Backlog → 评审 → Jira\n每一步用什么工具课里会手把手带。L61-L70 专门练。'
      ]
    },
    p19: {
      title: '一个 AI feature 月成本多少｜token 经济 PM 必修',
      body: `很多 PM 做 AI feature 卡在『这个多少钱我不知道』。\n\n📐 基础公式：\n月成本 ≈ 调用量 × token/call × $/token + 向量库 + Prompt cache 折扣\n\n常见场景参考（GPT-4o-mini / Claude Sonnet）：\n- 客服分诊 Bot（5 万次/月）：$150–$600\n- 🌟 RAG 文档问答：$800–$2,500（prompt caching 决定上下限）\n- 文档摘要批处理：$200–$700（批量 API 有 50% 折扣）\n- Code Assistant：$1,000–$4,000\n\n非承诺区间，视 Prompt 长度、缓存命中率、模型选型调整。`,
      tags: '#AI成本 #Token经济 #AI产品经理 #AIPM #PM技能',
      wechat: [
        '一个 AI feature 月成本多少？PM 必须会算的基础公式 💰',
        'RAG 文档问答 $800-$2500 区间 · prompt caching 决定上下限。'
      ],
      community: [
        '【AI 成本参考】\n客服 Bot $150-$600 · RAG $800-$2500 · 批处理 $200-$700 · Code Assistant $1000-$4000（月）\n非承诺区间。L87/L92 专门讲 token 经济学。'
      ]
    },
    p20: {
      title: '澳洲 AI PM 大量招人的公司｜JD 挖完整理',
      body: `扒了一圈澳洲 2026 的 AI PM 岗位分布：\n\n🔥 重点招（面经多）：Canva · Atlassian\n💰 Fintech：Airwallex（独角兽）· 四大行 CBA/Westpac/ANZ/NAB\n🏛 政府：Service NSW 数字化项目\n📱 电信：Telstra · Optus\n📊 平台：REA（房产）· Seek（招聘）\n🛒 零售：Coles · Woolies\n\n公司列表每期会更新。挖 JD 才发现基本都在招 AI PM，不只是传统 PM。`,
      tags: '#澳洲AIPM #AI产品经理 #澳洲求职 #产品经理招聘',
      wechat: [
        '澳洲 AI PM 大量在招：Canva / Atlassian / Airwallex / 四大行 / Service NSW 🇦🇺',
        '扒了一圈 2026 的 JD，传统 PM 招聘量明显在让位给 AI PM。'
      ],
      community: [
        '【澳洲 AI PM 招聘市场】\nCanva (RICH) · Atlassian (RICH) · Airwallex · CBA/Westpac/ANZ/NAB · Service NSW · Telstra/Optus · REA/Seek\nCompany Intelligence 每期更新。'
      ]
    },
    p21: {
      title: '澳洲 AI PM 一年拿多少｜3 档区间参考',
      body: `数据来源：Seek / LinkedIn Salary / Glassdoor AU · 2026-Q1。\n\n💼 Junior（0–2 年 / 转岗）：$85K–$110K AUD\n💼 Mid（2–5 年 / 独立带 feature）：$110K–$145K AUD\n💼 Senior（5 年+ / Principal）：$145K–$180K+ AUD\n\nAI PM 比传统 PM 薪资大约高一档（Senior 差距更明显）。\n非承诺区间，仅作为参考 — 实际 offer 要看面试表现、公司、技术方向深度。`,
      tags: '#澳洲薪资 #AIPM薪资 #产品经理薪资 #澳洲求职',
      wechat: [
        '澳洲 AI PM 薪资 3 档：$85K / $110K / $145K+。非承诺区间 📊',
        'AI PM 比传统 PM 高一档 · Senior 差距更明显。'
      ],
      community: [
        '【澳洲 AI PM 薪资】\nJunior $85K-$110K · Mid $110K-$145K · Senior $145K-$180K+\n数据源：Seek/LinkedIn/Glassdoor。非承诺 · 仅参考。'
      ]
    },
    p22: {
      title: 'AI Capability Spec｜AI PRD 的灵魂那一章',
      body: `传统 User Story 写『用户能做什么』；\nAI Capability Spec 写『AI 在什么范围做得到多准』。\n这是 AI PRD 和传统 PRD 最核心的差异章节。\n\n一份 Capability Spec 长这样：\n▸ SCOPE：LLM 对 5 类问题分类 ≥ 85%\n▸ INPUT：自由文本 ≤ 500 字\n▸ OUTPUT：枚举（5 选 1）+ 置信度\n▸ LATENCY：P95 < 2s\n▸ COST：≤ $0.008/query · 超则 fallback\n▸ FALLBACK：< 0.7 置信度转人工\n\n没有这章的 AI PRD = 给工程师挖坑。`,
      tags: '#AIPRD #AI产品经理 #PM文档 #AIPM技能',
      wechat: [
        'AI PRD 的灵魂章节：Capability Spec — 定范围、准确率、成本、fallback 📝',
        '没有 Capability Spec 的 AI PRD 等于给工程师挖坑 ⚠️'
      ],
      community: [
        '【独家模块】AI Capability Spec\n业内找不到第二家的模板。SCOPE / INPUT / OUTPUT / LATENCY / COST / FALLBACK 六字段。课里会练一遍。'
      ]
    },
    p23: {
      title: '老的 Power/Interest 矩阵｜加上 AI 两个新变量',
      body: `Stakeholder 管理的 Power/Interest 2×2 经典矩阵，AI 时代要加 2 个新维度：\n\n🔹 HIGH POWER × HIGH INTEREST：CDO / 数据负责人\n+ 新变量：数据权 — 决定 RAG 能不能用哪些数据\n\n🔹 HIGH POWER × LOW INTEREST：CFO / 法务\n+ 新变量：成本 + 合规授权\n\n🔹 LOW POWER × HIGH INTEREST：终端用户代表\n+ 新变量：AI 可解释性需求（黑盒要不要）\n\n🔹 LOW POWER × LOW INTEREST：旁观部门\n周报 cc · 不要惊动\n\n不加这 2 个新维度的 Stakeholder 地图，AI 项目做不下去。`,
      tags: '#Stakeholder #AIPM #AI产品经理 #产品经理技能',
      wechat: [
        '老的 Power/Interest 2×2 + AI 两个新维度（数据权 / 合规权）🗺',
        'AI 时代做 Stakeholder 管理，光看 Power 和 Interest 不够。'
      ],
      community: [
        '【独家模块】Stakeholder × AI 矩阵\n经典 Power/Interest + 数据权 + 合规权 + 可解释性需求\n不加这 2 个新维度 AI 项目做不下去。'
      ]
    },
    p24: {
      title: '最常被问的 3 个问题｜开课前咨询 Top 3',
      body: `咨询群里被问最多的 3 个：\n\n❓ 文科背景能学 AI PM 吗？\n👉 可以。7 个 Lab 全是无代码/低代码；毕业学员里有运营/设计/教师/HR 转岗案例。\n\n❓ 和老的 BA 训练营（¥3500）有什么区别？\n👉 新加了 40% 的 AI 内容：AI PRD / Prompt 工程 / RAG 原型 / 成本管理 / 合规。外加 5 个新 Lab + 6 张速查卡。\n\n❓ 学完能拿 offer 吗？\n👉 无法保证。我们提供 1v1 辅导 / 澳洲市场信号 / 毕业 portfolio — 拿 offer 还得靠你自己面试。`,
      tags: '#AIPM训练营 #常见问题 #AI产品经理 #课程咨询',
      wechat: [
        '咨询 Top 3：文科能学吗 · 和老课区别 · 能不能拿 offer。答案看主页 💬',
        '不承诺 offer，但承诺 portfolio + 市场信号 + 1v1 辅导。'
      ],
      community: [
        '【FAQ Top 3】\nQ1 文科能学吗？A：可以\nQ2 和老课区别？A：+40% AI 内容\nQ3 能拿 offer？A：不保证，但给你面试要的素材\n主页完整 FAQ 10 条。'
      ]
    },
    p25: {
      title: '第 4 期招生中｜早鸟 ¥4,400',
      body: `🌱 AI 产品经理（BA）训练营第 4 期\n📅 2025.12.01 → 2026.01.18（7 周直播）\n📚 94 节课 · 6 Phase · 7 Lab · 10 Quiz\n+ 4 周 P3 真实项目实习 + 2 次 1v1 辅导\n\n💰 价格\n标准 ¥4,800 · 早鸟 ¥4,400（省 ¥400）\n老学员 / 推荐 额外减 ¥200\n\n❗ 适合想转 AI PM / 想加码 AI 技能栈的朋友。\n不承诺 offer，只承诺学完有 portfolio + 市场认知 + 1v1 辅导。`,
      tags: '#AIPM训练营 #AI产品经理招生 #BA转产品 #匠人学院',
      wechat: [
        '第 4 期 AI PM 训练营招生中 · 早鸟 ¥4,400 · 2025.12 开课 🌿',
        '7 周 94 节课 + P3 项目实习 + 1v1 辅导 · 主页看大纲。'
      ],
      community: [
        '【第 4 期招生】\nAI 产品经理（BA）训练营 · 2025.12-2026.01\n标价 ¥4,800 · 早鸟 ¥4,400 · 推荐减 ¥200\n不承诺 offer · 承诺 portfolio + 1v1 + 市场认知\njiangren.com.au/bootcamp/business-analyst'
      ]
    }
  };

  function injectPanels() {
    document.querySelectorAll('.poster-frame').forEach(frame => {
      const id = frame.id;
      const data = XHS_COPY[id];
      if (!data) return;
      // find the existing empty .copy-panel placeholder
      const panel = frame.querySelector('.copy-panel');
      if (!panel) return;
      panel.innerHTML = '';  // clear in case of re-run

      const titleHead = document.createElement('div');
      titleHead.className = 'cp-title';
      titleHead.textContent = id.toUpperCase() + ' · 文案素材';
      panel.appendChild(titleHead);

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

      // 小红书 pane
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

      // 朋友圈 pane
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

      // 社群 pane
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
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectPanels);
  } else {
    injectPanels();
  }
})();
