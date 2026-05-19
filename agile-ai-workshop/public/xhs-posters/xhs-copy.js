/* AI 时代敏捷消亡？Workshop — 右侧文案面板 · 三通道 Tab（B 端高管 / EXCO 投流） */
(function () {
  const XHS_COPY = {
    p1: {
      title: 'AI 时代，敏捷真的正在消亡吗？',
      body: `这堂课不教你怎么做 Scrum — 那已经讲了 20 年 🤔\n\n质疑你的敏捷转型：你团队是真敏捷，还是在"执行敏捷"？\n3 小时穿过 6 个反思层，落到一个被忽视的能力 — Human Agility。\n\n面向 EXCO / 部门负责人 / 转型 Lead。180 分钟，0 销售推销。\n大纲全公开，主页可看 ☕`,
      tags: '#敏捷转型 #Scrum #数字化转型 #AI转型 #组织发展 #Leadership',
      wechat: [
        'AI 时代敏捷真的在消亡吗？还是我们从未真正理解过敏捷？',
        '180 分钟把"敏捷"放在显微镜下 — 给 EXCO 看的那种 🔥',
        '不教 Scrum 是质疑 Scrum — 转型 Lead 的反思课。'
      ],
      community: [
        '【3h 线上 Workshop · EXCO / 转型 Lead 专属】\nAI 时代敏捷真的在消亡吗？\n6 反思层 + 5 反思问题 + 0 销售\n大纲全公开 主页可看 ☕',
        '推一个反思课给敏捷转型卡了 3 年的朋友 — 不卖答案，卖更好的问题。'
      ]
    },
    p1b: {
      title: '你在"做敏捷" 还是在"执行敏捷"',
      body: `EXCO 圈最近一个尖锐的问题 ⚠️\n\n❌ 仪式化敏捷：开 Stand-up 是打卡 / Sprint 不改优先级 / Scrum Master 守护流程\n✅ 真敏捷：用思考节奏改决策 / 在不确定中前进 / 流程让位于判断\n\n3 小时让你看清自己组织在哪一头。\n大纲全公开 主页可看 🌿`,
      tags: '#敏捷转型 #组织发展 #Scrum #数字化转型 #Leadership',
      wechat: [
        '你团队在"做敏捷"还是"执行敏捷"？两者差距是组织生死。',
        '仪式化敏捷 vs 真敏捷 — 你们 Stand-up 是同步还是打卡？',
        '看自己组织在哪一头 — 决定你下一步推什么转型。'
      ],
      community: [
        '【两种敏捷的差距】\n仪式化：开会 / 打卡 / 守流程\n真敏捷：改决策 / 进不确定 / 让判断\n3h 反思课 主页可看 🌿',
        '推给所有觉得"敏捷转型卡住"的 Leader — 大概率不是方法论问题。'
      ]
    },
    p1c: {
      title: '从"我在做敏捷"到"我在执行敏捷"',
      body: `这是很多 EXCO 上完这堂课的真实自白 💼\n\n课前：以为团队在做敏捷 — 每周开 Stand-up / 每月跑 Sprint / 半年请咨询调流程\n课后：发现团队在"执行敏捷" — 流程对了 但思考没变 / 仪式有了 但判断没出现\n\n这不是失败 — 是看清。看清才能改。\n大纲主页可看 ☕`,
      tags: '#敏捷转型 #组织反思 #Scrum #AI转型',
      wechat: [
        '从"我在做敏捷"到"我在执行敏捷" — EXCO 上完课的真实自白 💼',
        '看清 ≠ 失败 — 看清才能改。这堂课就做这件事。',
        '推转型推了 3 年还卡 — 大概率是问题问错了。'
      ],
      community: [
        '【认知蜕变】\n课前：我们在做敏捷\n课后：我们在"执行敏捷"\n看清 → 才能改\n3h 反思课 ☕'
      ]
    },
    p1d: {
      title: '让 EXCO 睡不着觉的 4 个问题',
      body: `不卖答案 — 卖让你睡不着觉的问题 🌙\n\n这 4 个问题如果你答不上来，你的敏捷转型大概率在原地踏步：\n\n→ 上次 Sprint 真的改变优先级了吗？\n→ 你团队里多少人只会执行不会判断？\n→ AI 明天做掉 80% 执行 — 剩下 20% 你团队真的会做吗？\n→ 你组织在培养判断力 还是在加固流程？\n\n3 小时把这些问题写进你脑子里。`,
      tags: '#EXCO #敏捷转型 #数字化转型 #AI转型 #Leadership',
      wechat: [
        '4 个让 EXCO 睡不着觉的问题 — 答不上来转型大概率原地踏步 🌙',
        '不卖答案，卖更好的问题 — 这是 AI 时代真正稀缺的东西。',
        '推转型推到第 3 年还卡，先看看是不是问题问错了。'
      ],
      community: [
        '【4 个让 EXCO 睡不着的问题】\nSprint 真改优先级吗？\n多少人只会执行？\nAI 做掉 80% 剩 20% 谁做？\n培养判断还是加固流程？\n3h 反思课 🌙'
      ]
    },
    p2: {
      title: '仪式化敏捷 vs Human Agility',
      body: `你在推的转型，到底在哪一栏 ⚖️\n\n❌ 仪式化敏捷的症状\n· Stand-up 是打卡不是同步\n· Sprint 不改优先级 只走流程\n· Scrum Master 守护流程不守护判断\n· 团队越敏捷越慢\n\n✅ Human Agility 的特征\n· 在不确定中前进\n· 在模糊中做决定\n· 在变化中持续学习\n· 流程让位于判断\n\n3 小时帮你诊断你的组织在哪一头。`,
      tags: '#敏捷转型 #HumanAgility #Scrum #组织发展',
      wechat: [
        '仪式化敏捷 vs Human Agility — 8 个特征对照 ⚖️',
        '看症状 → 看特征 → 看自己组织在哪一头。',
        '推转型先诊断现状 — 不然方法论再多也是无效输入。'
      ],
      community: [
        '【症状 vs 特征】\n仪式化敏捷：打卡 / 走流程 / 守仪式\nHuman Agility：进不确定 / 做决定 / 持续学\n3h 反思课对照诊断 ⚖️'
      ]
    },
    p3: {
      title: 'EXCO 群里都在讨论的几句话',
      body: `截了几句最近 EXCO 群里真实对话 💬\n\nCEO：上次 Sprint 真的改变优先级了吗？\nCOO：流程都按敏捷走了 — 但决策还是月报会才出\nCTO：我们装了 AI 工具 但流程没变\nCEO：那敏捷给我们带来了什么？\n\n这种对话越来越多 — 因为 AI 让旧问题被放大。3 小时帮你拆开这些问题。`,
      tags: '#EXCO #敏捷转型 #AI转型 #数字化转型',
      wechat: [
        'EXCO 群里的真实对话 — 上次 Sprint 真的改优先级了吗？💬',
        '装了 AI 工具 但流程没变 — 这句话最近你听了几次？',
        'AI 不是新问题 — 是把旧问题放大。'
      ],
      community: [
        '【EXCO 群对话片段】\n"上次 Sprint 改优先级了吗"\n"流程对了 决策还是月报会"\n"装了 AI 工具 流程没变"\n这种对话越来越多 💬'
      ]
    },
    p4: {
      title: '带走 5 个比咨询报告更值的问题',
      body: `不是又一份 PPT — 是 5 个反思问题 📋\n\n01 我们最近一次 Sprint 真的改变了优先级吗？还是只是按部就班开 5 个会？\n02 我作为 Leader 最近一次推动了一个"不确定但更对"的决定 是什么时候？\n03 如果 AI 明天做掉团队 80% 执行 剩下 20% 你团队真的会做吗？\n04 未来不需要"更快的人" 需要"更会判断的人" 你团队准备好了吗？\n05 我组织里的核心人才 是在"执行敏捷" 还是在"成为敏捷"？\n\n这 5 个问题 — 比一份咨询报告更值。`,
      tags: '#敏捷转型 #反思 #EXCO #Leadership #HumanAgility',
      wechat: [
        '5 个反思问题 — 课后能直接拿到 EXCO 开始对话 📋',
        '不是咨询报告 — 是 5 个让团队睡不着的问题。',
        '带回去问 EXCO / 转型 Lead — 比方法论实在 10 倍。'
      ],
      community: [
        '【5 个反思问题】\nSprint 真改优先级吗？\n不确定但更对的决定？\nAI 做掉 80% 剩 20%？\n更会判断的人？\n执行敏捷 vs 成为敏捷？\n3h 课后带走 📋'
      ]
    },
    p5: {
      title: '6 反思层 + 1 揭幕 完整地图',
      body: `不是"上课"是"穿过 6 个反思层" 🗺️\n\nM01 开场 + 抛三连问（15 min）\nM02 敏捷真的在消亡吗？（25 min）\nM03 问题不在敏捷 在我们（25 min）\n☕ 中场休息（10 min）\nM04 AI 在放大这个问题（25 min）\nM05 真正在消失的不是敏捷（20 min）\nM06 答案指向更深的能力（20 min）\nM07 揭幕 Human Agility（25 min）\nM08 收尾 + 反思清单（15 min）\n\n9 模块节奏 = 不让你走神。`,
      tags: '#敏捷转型 #HumanAgility #反思课 #EXCO',
      wechat: [
        '9 模块地图 — 每段都有抓手 不让你走神 🗺️',
        '6 反思层 + 1 揭幕 — 3h 节奏拆给你看。',
        '180 min Workshop = 8 段 15-25min + 中场休息。'
      ],
      community: [
        '【9 模块地图】\nM01 开场抛三连问\nM02-M03 敏捷消亡？\nM04-M05 AI 放大问题\nM06-M07 揭幕 Human Agility\nM08 反思清单\n3h 节奏拆开 🗺️'
      ]
    },
    p6: {
      title: '5 句话讲透这堂课',
      body: `投流前先把课程的"魂"说清楚 🔥\n\n01 敏捷没有死 — 被取代的是不会思考的人\n02 AI 让执行变得廉价 但判断变得稀缺\n03 你的团队在做敏捷 还是在"执行敏捷"\n04 未来组织不需要"更快的人" 需要"更会判断的人"\n05 Scrum 教你怎么做事 Human Agility 教你怎么应对变化\n\n这 5 句话 是这堂课的精神。`,
      tags: '#敏捷 #HumanAgility #AI #Leadership #EXCO',
      wechat: [
        '"敏捷没有死 — 被取代的是不会思考的人" 🔥',
        'AI 让执行廉价 判断稀缺 — 这是这堂课的 hook。',
        '5 句话 = 这堂课的精神。'
      ],
      community: [
        '【5 句金句】\n敏捷没死 不思考的人会死\nAI 让执行廉价 判断稀缺\n做敏捷 vs 执行敏捷\n不要更快 要更会判断\nScrum 教做事 HA 教应变 🔥'
      ]
    },
    p7: {
      title: 'AI 时代正在淘汰这 3 种人',
      body: `不是 AI 淘汰人 — 是 AI 让 3 种人失去价值 ⚠️\n\n❌ 依赖流程的人\n— "我按流程做了 出问题不是我责任"\n— AI 让流程更快 但价值不在按流程上\n\n❌ 只会执行的人\n— "你告诉我做什么 我就做"\n— AI 几秒钟做完几周的执行 这种价值归零\n\n❌ 缺乏判断的人\n— "等老板拍板"\n— AI 时代决策窗口越来越短 等不起\n\n剩下的人 = 在做判断的人。`,
      tags: '#AI转型 #未来组织 #人才战略 #Leadership',
      wechat: [
        'AI 时代 3 种人正在被淘汰 — 不是 AI 淘汰人 是 AI 让他们失去价值 ⚠️',
        '依赖流程 / 只会执行 / 缺乏判断 — 你团队多少人是这三种？',
        '剩下的人 = 在做判断的人。这是 AI 时代真正稀缺的。'
      ],
      community: [
        '【3 种正在被淘汰的人】\n依赖流程的人\n只会执行的人\n缺乏判断的人\nAI 让他们失去价值 ⚠️\n你团队多少人是这三种？'
      ]
    },
    p8: {
      title: '180 / 6 / 5 / 2 / 0 — 课程数据',
      body: `用 5 个数字讲清这堂课 📊\n\n180 min Workshop 总时长\n6 反思层（不是 6 个知识点 — 是 6 次穿越）\n5 反思问题（课后带回 EXCO 的硬通货）\n2 现场投票（开场 + M07 二次投票对照）\n0 销售推销（自然引导 Mini-Bootcamp 续作）\n\n3 小时的密度 + 0 销售压力 = EXCO 投流的诚意。`,
      tags: '#敏捷转型 #EXCO #Workshop #HumanAgility',
      wechat: [
        '180/6/5/2/0 — 5 个数字讲清这堂课 📊',
        '3 小时密度 + 0 销售推销 — EXCO 投流的诚意。',
        '不是又一节"听完没用"的咨询课 — 5 个反思问题硬通货。'
      ],
      community: [
        '【课程数据】\n180 min 时长\n6 反思层\n5 反思问题\n2 现场投票\n0 销售推销\nEXCO 投流诚意 📊'
      ]
    },
    p9: {
      title: '如果你的敏捷转型卡了 3 年',
      body: `这堂课不会给你完整答案 🌿\n\n但它会让你开始看到：\n→ 为什么你的敏捷转型遇到瓶颈\n→ 为什么 AI 让问题变得更明显\n→ 为什么单靠流程 已经不够\n\n180 分钟后 你能回去问对的问题 — 而不是继续买另一套敏捷工具。\n\n大纲全公开 主页可看 ☕\n面向 EXCO / 部门负责人 / 转型 Lead。`,
      tags: '#敏捷转型 #EXCO #数字化转型 #AI转型',
      wechat: [
        '如果你的敏捷转型卡了 3 年 — 大概率不是方法论问题 🌿',
        '不卖答案 卖更好的问题 — 这是 AI 时代真正稀缺的。',
        '180 min 后 回去问对的问题 — 而不是再买一套工具。'
      ],
      community: [
        '【适合谁】\n敏捷转型卡住的 EXCO\n推 AI 转型工具装了流程没变\nScrum 做了 5 年没价值\n面向 Leader 不是执行岗 🌿'
      ]
    },
    p10: {
      title: 'Human Agility 是什么 一句话定义',
      body: `不是新概念 — 是新名字 🌟\n\nHuman Agility = AI 无法取代的人类适应力\n\n3 种底层能力：\n01 在不确定中前进 — 没有完整信息时也能走下一步\n02 在模糊中做决定 — 接受"不完美但更对"的选项\n03 在变化中持续学习 — 把每次失败转成下一次的判断\n\n不取代敏捷 — 是敏捷的"心法层"。`,
      tags: '#HumanAgility #敏捷 #Leadership #AI',
      wechat: [
        'Human Agility = AI 无法取代的人类适应力 🌟',
        '3 种底层能力：进不确定 / 做决定 / 持续学。',
        '不是另一个 buzzword — 是敏捷的"心法层"。'
      ],
      community: [
        '【Human Agility 定义】\n= AI 无法取代的适应力\n进不确定 + 做决定 + 持续学\n不取代敏捷 是敏捷的心法层 🌟'
      ]
    },
    p11: {
      title: 'Doing Agile vs Being Agile',
      body: `一字之差 — 整个组织走向不同 🔄\n\nDoing Agile（做敏捷）\n· 学方法论 / 跑 Sprint / 开 Stand-up\n· 流程优先 / 工具优先 / 可教可审\n· AI 一来 价值大幅缩水\n\nBeing Agile（成为敏捷）\n· 进不确定 / 做决定 / 持续学\n· 人本身的能力 / 须练不可教\n· AI 越强 越稀缺\n\n你组织在哪一头 决定 AI 时代的位置。`,
      tags: '#敏捷转型 #HumanAgility #DoingAgile #BeingAgile',
      wechat: [
        'Doing Agile vs Being Agile — 一字之差 整个组织走向不同 🔄',
        'AI 一来 Doing Agile 价值缩水 Being Agile 越稀缺。',
        '"做敏捷" 不等于 "成为敏捷"。'
      ],
      community: [
        '【Doing vs Being】\nDoing：方法论 / 流程 / 可教\nBeing：能力 / 人 / 须练\nAI 让前者缩水 后者稀缺 🔄'
      ]
    },
    p12: {
      title: '这 4 类 Leader 学完最对口',
      body: `Workshop 不是"全员适合" — 这 4 类对口最高 💼\n\n✅ EXCO / 部门负责人 — 推转型推不动想看真问题\n✅ 数字化 / AI 转型 Lead — 装了工具流程没变想知道为什么\n✅ 资深敏捷实践者 — Scrum 做了 5 年想看下一步\n✅ HR / 组织发展 — 招聘 / 培养 / 评估标准想重写\n\n❌ 不太合适：纯执行岗 / 在校学生 / 找方法论速成的人`,
      tags: '#EXCO #敏捷转型 #数字化转型 #Leadership #HR',
      wechat: [
        '4 类 Leader 学完最对口 — 也写清楚谁不合适 💼',
        'EXCO / 转型 Lead / 敏捷老兵 / HR — 对口度高。',
        '纯执行岗 / 找速成的 — 这堂课不适合 别浪费 180 min。'
      ],
      community: [
        '【对口人群】\nEXCO / 部门负责人\n数字化 / AI 转型 Lead\n资深敏捷实践者\nHR / 组织发展\n纯执行岗不合适 💼'
      ]
    },
    p13: {
      title: '课前 5 件事 让 180min ROI 最高',
      body: `线上 3 小时 — 5 件事让 ROI 翻倍 📝\n\n01 把"课前预热反思题"发给团队 1-2 个核心成员（5 min · 推荐）\n02 装好 Zoom / 腾讯会议 + 测音视频（5 min · 必做）\n03 准备 1 张 A4 + 笔（手写比打字激活反思更深）\n04 想 1 个你正在推的转型项目（敏捷 / AI / 数字化）\n05 关闭微信 + 邮件 + 其他 tab（打断 1 次损失 5 min 思考链）\n\n反思课最怕被打断 — 专注 3 小时 = 5 个能去 EXCO 的问题。`,
      tags: '#Workshop #敏捷转型 #高效学习',
      wechat: [
        '课前 5 件事 — 让 180 min ROI 翻倍 📝',
        '手写比打字激活反思更深 — 准备纸笔。',
        '关掉微信 + 其他 tab — 反思课最怕被打断。'
      ],
      community: [
        '【课前 5 件事】\n发预热题给团队\n测 Zoom\n纸笔（手写更深）\n想 1 个转型项目\n关微信 + tab 📝'
      ]
    },
    p14: {
      title: 'AI 让执行变廉价 但判断变稀缺',
      body: `这是这堂课的一句话总结 💡\n\n过去 30 年：\n执行能力 = 公司护城河\n敏捷 / Scrum / Lean = 让执行更快\n\nAI 来之后：\n执行 = 几秒钟 / 几乎免费\n判断 = 真正稀缺\n\nScrum 教你怎么做事 Human Agility 教你怎么应对变化。\n\n这不是要不要学敏捷 — 是问敏捷之后是什么。`,
      tags: '#AI #敏捷转型 #HumanAgility #Leadership',
      wechat: [
        'AI 让执行变廉价 但判断变稀缺 — 这是这堂课的灵魂句 💡',
        'Scrum 教做事 Human Agility 教应变 — 一句话讲清差别。',
        '不是要不要学敏捷 — 是问敏捷之后是什么。'
      ],
      community: [
        '【一句话总结】\nAI 让执行变廉价\n判断变稀缺\nScrum 教做事\nHA 教应变 💡'
      ]
    },
    p15: {
      title: 'Mini-Bootcamp 路径：3h → 深度训练',
      body: `今天这 3 小时 = 看见问题 🔜\n下一步 = 建立能力（Human Agility 深度训练工作坊）\n\nMini-Bootcamp 路径：\n→ Step 1 · 本次 3h Workshop（看见问题 + 反思工具）\n→ Step 2 · Human Agility 深度训练（建立能力 + 转型推进）\n\n本次课不强推后续 — 报今天就独立成立。\n报后续的学员 = 被这堂课触动到睡不着的人。`,
      tags: '#敏捷转型 #HumanAgility #MiniBootcamp #EXCO',
      wechat: [
        'Mini-Bootcamp 路径：本节 3h → Human Agility 深度训练 🔜',
        '本次不强推后续 — 报今天就独立成立。',
        '后续课是给被这堂课"触动到睡不着"的学员的。'
      ],
      community: [
        '【Mini-Bootcamp 路径】\nStep 1 · 本次 3h（看见问题）\nStep 2 · 深度训练（建立能力）\n本次不强推 — 自愿 🔜'
      ]
    }
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
