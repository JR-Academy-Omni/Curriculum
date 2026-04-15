/* 右侧文案面板 — 小红书 / 朋友圈 / 社群 三 Tab 切换
 * OpenClaw 4 小时沉浸式工作坊（核心场景：PPT + 官网 + A4 Brochure 批量出稿）
 */
(function () {
  const XHS_COPY = {
    p1: {
      title: '🦞 装不上"龙虾"？线下 1 老师 + 2 Tutor 保你装上',
      body: `OpenClaw（大家叫它"龙虾"🦞）是现在最火的本地 AI Agent — 问题是 90% 的人卡在装机就放弃了。\n\n自学时最容易踩的坑：Windows 没装 WSL2 / Node 版本不对 / 用错 Bun · 报错看不懂。\n\n这次线下工作坊的配置直接拉满：\n👨‍🏫 1 位主讲老师\n👩‍💻 2 位 Tutor 一对一陪装\n🌸 AI 小花工具辅助\n\n4 小时走出教室 · 龙虾在你电脑上跑 · 还能替你出 PPT / Brochure / 官网 🏷️`,
      tags: '#OpenClaw #龙虾 #AI装机 #AIAgent #AI工作坊 #线下课 #AI小白',
      wechat: [
        '"龙虾"（OpenClaw）装不上？线下 1 老师 + 2 Tutor 陪你装 🦞',
        '90% 的人卡在装机放弃 — 4 小时线下帮你跨过这一关 💪',
        '装上龙虾之后能出 PPT / Brochure / 官网 — 但前提是得装得上啊 😅'
      ],
      community: [
        '【OpenClaw（龙虾）4 小时线下工作坊】\n🦞 核心卖点：1 老师 + 2 Tutor 保证你装上\n📑 装好之后：龙虾帮你出 PPT / Brochure / 官网 Landing\n\n自学装机放弃率 90% · 线下来 4h 一次搞定',
        '同事朋友想装 OpenClaw（龙虾）自学一周没装上的 · 直接推荐这个工作坊。\n现场 1 位主讲老师 + 2 位 Tutor 一对一陪装 · 装完用它出 Brochure / Deck / 官网 🏷️'
      ]
    },
    p1b: {
      title: '自学装龙虾卡一周｜线下课 30 分钟装上',
      body: `朋友圈看到 OpenClaw（龙虾）能出 PPT / Brochure / 官网 很心动 — 自学一周还没装上的举手 🙋\n\n自学最常卡住的 3 个坑：\n❌ Windows 没装 WSL2 · 原生 PowerShell 跑不了\n❌ Node.js 版本低于 22 · 报错信息里根本看不出是版本问题\n❌ 手滑用了 Bun · WhatsApp/Telegram 连不上\n\n线下工作坊：1 位老师 + 2 位 Tutor · 进场前你装不上 / 出门前龙虾在跑 🦞\n\n装好之后 L7 用你自己素材出一套 Brochure / PPT / Landing · 4h 不虚此行。`,
      tags: '#OpenClaw #龙虾 #AI装机 #WSL2 #AI工作坊 #线下课',
      wechat: [
        '自学装龙虾一周没成功的朋友 — 线下 30 分钟 Tutor 帮你装上 🦞',
        'Windows WSL2 / Node 22 / 别用 Bun — 这 3 个坑现场 Tutor 带你避 ✅',
        '装上龙虾才是起点 · 装不上就啥都做不了 🥲'
      ],
      community: [
        '【装龙虾最常卡的 3 点】\n❌ Win 没装 WSL2\n❌ Node < 22 报错看不懂\n❌ 手滑用 Bun · WhatsApp 连不上\n\n线下 1 老师 + 2 Tutor · 装机全程陪 🛟',
        '做销售 / 房产的想装龙虾出 Brochure 的朋友：\n自学这周搞不定？报这期工作坊吧 — 进门装不上 · 出门龙虾跑 · 还带你用它出一套物料。'
      ]
    },
    p1c: {
      title: '从"手动 3 天一套 Deck" 到"AI 30 分钟出稿"',
      body: `4 小时前：打开 Keynote · 找模板 · 抠素材 · 改配色 · 改字号 · 3 天做完客户不满意再改\n\n4 小时后：OpenClaw 装在电脑上 · 把卖点丢给它 · "出一份 12 页产品 Deck 配品牌色" · 30 分钟成品\n\n中间只差这一个下午的线下工作坊。\n\n不是 PPT 技术问题 · 是该不该让 AI 出的问题 🚀`,
      tags: '#AI出稿 #PPT模板 #销售Deck #OpenClaw #AI效率',
      wechat: [
        '3 天做 Deck → 30 分钟出稿 · 差的只是一个下午的线下工作坊 ⚡',
        'Keynote 抠半天不如把素材丢给 Agent 让它出稿 🏷️',
        '做 Deck 不是 PPT 水平问题 — 是该不该给 AI 做的问题 🚀'
      ],
      community: [
        '【Before / After】\n3 天抠模板 → 30 分钟 AI 出稿\n改 3 轮 → 让 Agent 按品牌色再跑一遍\n找设计师 300 刀 → 本地跑 API $几刀\n\n4 小时线下学一次 · 无缝衔接 🚀',
        '群里做市场 / 销售的朋友 — 做 Deck 是不是最吃时间的活？\nOpenClaw 工作坊的核心就是解决这个。4 小时回去 Deck / Brochure / 官网全能 AI 出。'
      ]
    },
    p1d: {
      title: '房产 · 销售 · 市场 · 教培 · 个人品牌都在用',
      body: `这个工作坊最特别的一点：完全不用写代码。\n\n来的都是"天天出物料的人"：\n🏠 房产经纪：户型 + 卖点 → 项目 Brochure · A4 双面\n💼 B2B 销售：产品参数 → 12 页 Pitch Deck\n📣 市场 / 新媒体：活动文案 → 头图 + Landing Page\n🎓 教培 / 讲师：课程大纲 → 招生页 + 介绍 PPT\n✍️ 个人品牌：个人故事 → 个人介绍页 + 自媒体素材\n🛠️ 小 B 创业者：产品说明 → 官网首屏 · 可直接上线\n\n用过 ChatGPT 就能来 · 素材扔进去出稿 🏷️`,
      tags: '#房产 #销售 #市场 #教培 #个人品牌 #OpenClaw #AI做物料',
      wechat: [
        '房产 · 销售 · 市场 · 教培 · 个人品牌 — 出物料的人都该来一次 🏷️',
        '不用写代码 · 用过 ChatGPT 就够 · 素材进去出稿出来 ⚡',
        '6 类人群 · 每类都有对应现场 Live Demo 🎯'
      ],
      community: [
        '【谁最适合这期工作坊】\n🏠 房产经纪（Brochure / 户型 PPT）\n💼 B2B 销售（Pitch Deck）\n📣 市场新媒体（KV / Landing）\n🎓 教培讲师（招生页 / 课程 PPT）\n✍️ 个人品牌（个人页 / 素材）\n🛠️ 小 B 创业者（官网首屏）',
        '这期学员画像：非技术向 · 天天出宣传物料。\n不写代码 · 用过 ChatGPT 就能跟上。Live Demo 按学员行业定制 · 报名问一下本期是什么方向 📍'
      ]
    },
    p2: {
      title: '同行已经在用 AI 出 PPT 和 Brochure｜你还在找模板',
      body: `说个刺耳但真实的 — 上周帮同事看新房项目 Brochure · 他说"OpenClaw 出的初稿 · 我就调了配色"。\n\n❌ 我还在：打开 Canva 翻模板 · 抠素材 · 对着品牌色一点点调\n❌ 我还在：找设计师 · 等三天 · 回来改 · 再等一天\n\n✅ 他已经：素材丢给 Agent · 30 分钟 A4 双面 Brochure 出稿\n✅ 他已经：同一份内容 Agent 自动生成 PPT + Landing Page 三件套\n\n差距不在设计能力 — 在有没有把 AI 当工人用起来。`,
      tags: '#AI做宣传 #AI做PPT #AIBrochure #效率差距 #OpenClaw',
      wechat: [
        '同事用 OpenClaw 出项目 Brochure 30 分钟搞定 · 我还在 Canva 翻模板 🥲',
        '一份素材 Agent 自动出 PPT + Brochure + Landing 三件套 — 同行已经在用 🏷️',
        '差距不是设计能力 · 是有没有把 AI 当工人用起来 ⚡'
      ],
      community: [
        '【真实差距】\n❌ 你：Canva 翻模板 · 抠素材 · 找设计师排期\n✅ 他：素材扔给 OpenClaw · 一份内容出 PPT + Brochure + 官网\n\n不是设计问题 · 是该不该让 AI 做的问题 🏷️',
        '群里做房产 / 销售的可以问问自己：上个月出宣传物料花了多少时间？\n同行正在用 OpenClaw 把这事压到 30 分钟 · 工作坊就是学这个。'
      ]
    },
    p3: {
      title: '同事群晒 OpenClaw 出的 Brochure｜我没跟上',
      body: `周三下午 · 销售群突然变成炫图大会：\n\n同事 A："OpenClaw 帮我出的户型 Brochure · 客户说专业"\n同事 B："新产品 Pitch Deck 让 Agent 从一篇文章直接扩成 15 页"\n同事 C："我们公司官网首屏 AI 出的 · 老板以为找了设计师"\n\n作为群里唯一还在 Canva 拖图的我 · 突然觉得自己落后了一个时代 😅\n\n老 A："下周去 OpenClaw 线下工作坊 · 和我一起？"`,
      tags: '#AI做宣传 #OpenClaw #AI同行 #销售素材 #AI工具',
      wechat: [
        '销售群炫图大会 — 大家都在晒 OpenClaw 出的 Brochure / Deck / 官网 📣',
        '"OpenClaw 30 分钟出的初稿老板以为找了设计师" — 这种话最近听烦了 😅',
        '同事都会用 Agent 出宣传物料了 · 我还在 Canva 拖图 🥲'
      ],
      community: [
        '【对号入座】\n群里这些你能接上吗？\n→ "Agent 出的 Brochure 客户说专业"\n→ "一篇文章扩成 15 页 Deck"\n→ "官网首屏 AI 出老板以为找了设计"\n\n接不上 · 4 小时工作坊补一次 🌿',
        '真实现象：做销售 / 房产的同行现在用 OpenClaw 出物料越来越多。\n工作坊的价值就是让你在这波里不掉队。'
      ]
    },
    p4: {
      title: '4 小时走出来｜你会"真的会"这四件事',
      body: `报课前最怕的：学完一堆概念 · 回家还是不会出稿。\n\n这 4 小时真正落地的四件事：\n1️⃣ 会用 OpenClaw 出 PPT — 卖点丢进去出 12-20 页 Deck 初稿\n2️⃣ 会用 OpenClaw 出 A4 Brochure — 支持打印尺寸 · 双面排版\n3️⃣ 会用 OpenClaw 出 Landing Page — HTML 直接能上线\n4️⃣ 会让 Agent 用"你的风格" — 品牌色 · 文案语气 · 可复用\n\n走时电脑里留下一份可复用的 Agent 配置 · 下次出稿只要 30 分钟 🏷️`,
      tags: '#AI出稿 #OpenClaw #PPT #Brochure #Landing #AI技能',
      wechat: [
        '4 小时交付：PPT + A4 Brochure + Landing + 可复用风格配置 🏷️',
        '不是学概念 — 是学完回去每次出稿都能省 2 天 ⚡',
        '4 件事每一件单独都值一个下午 💪'
      ],
      community: [
        '【工作坊 4 大交付】\n✅ OpenClaw 出 PPT Deck\n✅ OpenClaw 出 A4 Brochure\n✅ OpenClaw 出 Landing Page HTML\n✅ Agent 调成你的品牌风格\n\n每次出稿从 3 天压到 30 分钟 🏷️',
        '最喜欢的是"风格可复用"这一条：\nAgent 调好一次 · 下次同样风格的 Brochure / Deck 直接出稿 · 不用从零排版。'
      ]
    },
    p5: {
      title: '4 小时｜7 模块｜每 30 分钟做一件事',
      body: `之前去过那种"一整天讲概念"的 AI 课吗 — 这次完全不是。\n\n📍 L1（30 min）AI 认知 · 老师讲\n📍 L2（30 min）装机 · AI 小花带你装 OpenClaw\n📍 L3（30 min）Skill 地图 · 出 PPT / Brochure / 官网的现成 Skill 在哪找\n📍 L4（30 min）Live Demo · 老师现场出一套物料（按学员行业）\n📍 L5（30 min）Workshop 基础 · Tutor 陪你跟老师思路跑一遍\n📍 L6（30 min）Networking · 跨行业交换玩法\n📍 L7（60 min）Workshop 进阶 · 用你自己要出的素材练一次 🚀\n\nL5 + L7 共 90 分钟实操 · 回去无缝衔接。`,
      tags: '#OpenClaw #4小时 #工作坊 #课程设计 #AI出稿',
      wechat: [
        '4 小时 7 模块 — 90 分钟实操 + 60 分钟 Demo + 30 分钟 Networking 🔥',
        '每 30 分钟切一次节奏 — 不会"听到睡着" 💪',
        'L7 用你自己要出的素材练 60 分钟 · 全课高光 🚀'
      ],
      community: [
        '【7 模块 · 4 小时】\nL1 认知 · L2 装机 · L3 Skill 地图\nL4 Demo · L5 陪练 · L6 Networking\nL7 用你自己素材 60min 🚀\n\n实操占一半时间 · 非听课型',
        '这次课程设计特别用心：\n听课只占 90 分钟 · 实操占 90 分钟 · Networking + Demo 各 30 分钟。\n动手型工作坊 · 不是听讲座。'
      ]
    },
    p6: {
      title: 'OpenClaw 能接的工具｜做物料的人会爱上',
      body: `工作坊会带你过一遍 OpenClaw 的 "接入点" — 做物料的人看了会很爽：\n\n📑 输出：pptx / pdf / html / md / docx — 直接可用的文件格式\n🎨 模板：ClawHub 上几百个 PPT / Brochure / Landing Skill 装了就用\n🧠 LLM：Claude / OpenAI / Gemini 任选 · 课上推荐 Gemini 免费\n💾 本地：素材在你电脑上跑 · 不上传客户隐私\n💬 WhatsApp / Telegram：手机发一句 "帮我出个 Brochure" Agent 就做\n⚙️ MCP：连 Notion / 素材库 / 模板文件夹\n\n这些课上都会动手过一遍 🔧`,
      tags: '#OpenClaw #AI工具 #PPT生成 #ClawHub #MCP #AI出稿',
      wechat: [
        'OpenClaw 直接输出 pptx / pdf / html · 不用再复制粘贴到 Canva 🏷️',
        'ClawHub 上几百个 PPT / Brochure / Landing Skill · 装了就用 🧩',
        '素材本地跑 · 客户资料不上传云端 — 房产销售特别在意这点 🔒'
      ],
      community: [
        '【OpenClaw 生态】\n📑 输出 pptx / pdf / html / docx\n🎨 ClawHub PPT/Brochure Skill\n🧠 Claude / OpenAI / Gemini\n💾 本地跑 · 素材不上传\n💬 WhatsApp · Telegram\n⚙️ MCP · Notion · 模板 📎',
        '做宣传物料的朋友最关心的 2 条 OpenClaw 都有：\n① 直接输出 pptx/pdf/html（不用再从对话框里复制粘贴）\n② 本地跑 · 客户素材不上传云端 🔒'
      ]
    },
    p7: {
      title: '学员回去第二周都在怎么用',
      body: `课后群里刷到的真实分享 · 截一些 · 不打广告 · 不美化：\n\n💬"上周帮老板出的新盘 Brochure 30 分钟初稿 · 客户当场拍板"\n💬"讲师朋友用 OpenClaw 把一篇公众号扩成 20 页招生 Deck"\n💬"自己的个人品牌官网首屏 AI 出的 · 朋友以为我请了设计师"\n💬"每周要出的活动 KV · 现在变成 1 个 Skill · 复用 3 个月了"\n\n不是硬凹 — 是学员第 2 周开始产生真实价值的日常 🏷️`,
      tags: '#OpenClaw #学员反馈 #AI做宣传 #真实案例 #工作坊',
      wechat: [
        '学员真实反馈：30 分钟出 Brochure · 客户当场拍板 🏷️',
        '"朋友以为我请了设计师" — 最喜欢这种反馈 😂',
        '做物料的工具里 OpenClaw 真的挺能打 💪'
      ],
      community: [
        '【课后群摘选】\n"30min Brochure 初稿客户拍板"\n"公众号扩成 20 页招生 Deck"\n"个人品牌官网 AI 出首屏"\n"活动 KV 固化成 Skill 复用 3 月" 🏷️',
        '课后群最有意思的是学员会互相抄作业：\n做房产的用的 Skill 被做教培的拿去改改就能用。\n跨行业 Skill 复用比课上学的还多 🌿'
      ]
    },
    p8: {
      title: '4h · 7 模块 · 1 老师 + 2 Tutor · 3 类物料',
      body: `这次工作坊的真实配置 — 不灌水：\n\n📘 时长 / 结构：4 小时 · 7 模块 · 2 轮实操 · 1 场 Live Demo\n👥 师资：1 位主讲老师 + 2 位现场 Tutor + AI 小花辅助\n🦞 装机成果：龙虾在你电脑上跑起来\n🏷️ 出稿成果：PPT / A4 Brochure / Landing Page 三类都摸一遍\n🎨 风格配置：Agent 记住你品牌色 + 文案语气 · 下次复用\n📚 平台资源：16 章 Learn + 18 个 Lab + 3 篇 Wiki = 37 个免费解锁\n🤝 课后支持：使用者群 3 个月持续答疑\n\n一句话 — 4h 买的是一整套 🦞`,
      tags: '#OpenClaw #工作坊 #AI配置 #AI资源 #可复用',
      wechat: [
        '4 小时走出教室：装好的 OpenClaw + 你的风格配置 + 37 个资源 + 课后群 📌',
        '带走的不是讲义 PDF — 是一个调成你风格的 Agent 🏷️',
        '下次出 Brochure 30 分钟 · 就是因为这套配置 💪'
      ],
      community: [
        '【带走的 6 件】\n📘 4h 现场 · 2 轮实操\n🧩 装好的 OpenClaw + 可复用 Skill\n🎨 调成你品牌风格的 Agent\n📚 37 个平台资源 · 全免费\n🤝 课后群答疑 3 月\n🌏 跨行业人脉',
        '这期工作坊最值的不是课时 · 是"可复用的 Agent 风格配置"。\n你第一次跑完 · Agent 记住你公司的品牌色 / 文案语气 · 下次同风格素材直接出稿。'
      ]
    },
    p9: {
      title: '花一个下午｜回家省掉 N 个周末',
      body: `不卷长课 · 不画饼。\n\n就 4 小时 · 一个下午 ·\n把 OpenClaw 装在你自己电脑上 ·\n让 Tutor 陪你把 PPT / Brochure / Landing 3 类物料跑一遍 ·\n带走一个像你本人风格的 AI 物料助手。\n\n别再每次做物料都重来一遍了 — 线下工作坊的意义就是让 "以后出稿 30 分钟" 这件事今天就成立 🌱\n\n📍 每期 Live Demo 按学员行业定制\n📍 自带笔记本 + 用过 ChatGPT 就可来\n📍 报名自动解锁平台 37 个配套资源`,
      tags: '#OpenClaw #AI工作坊 #线下课 #AI做宣传 #4小时',
      wechat: [
        '4 小时 · 一个下午 · 以后每次出稿 30 分钟 🌱',
        '不囤课不画饼 — 就坐一次线下把 Agent 装起来 💪',
        '想让 AI 帮你做物料？4 小时工作坊上手 🏷️'
      ],
      community: [
        '【OpenClaw 4 小时沉浸式工作坊】\n📍 一次线下课 · 不拖\n📍 Tutor 陪跑 · 装机不卡\n📍 你自己物料练一次 · 回去能用\n📍 37 个平台资源 · 课后继续\n\n用过 ChatGPT 就能来 🌱',
        '别再每次做 Brochure / PPT / Landing 都重来一遍了。\n4 小时学一次 · 以后出稿 30 分钟。\n每期城市不同 · Live Demo 按行业定 · 报名前问清这期方向 📍'
      ]
    },
    p10: {
      title: '先说清楚｜OpenClaw 到底是什么',
      body: `很多人以为 OpenClaw 是 JR 的产品 — 不是。\n\n🔍 发起人：Peter Steinberger（奥地利开发者 · 前 PSPDFKit 创始人）\n🔍 时间：2025 年 11 月正式发布（原名 Clawdbot）\n🔍 协议：MIT 开源 · 免费可商用\n🔍 GitHub：68,000+ 星\n🔍 Wikipedia：已有词条\n\n它本质上 = 装在你自己电脑上的 AI Agent · 能读写本地文件 · 可以直接出 pptx / pdf / html。\n\n这些特性让它特别适合做物料 — 输入素材 · 输出成品 · 全程本地 · 客户资料不上云 🔒`,
      tags: '#OpenClaw #AIAgent #开源 #GitHub #MIT #AI工具',
      wechat: [
        'OpenClaw 不是 JR 的产品 — Peter Steinberger 的开源项目 · 68K 星 🔥',
        '直接输出 pptx / pdf / html · 本地跑 · 客户素材不上云 🔒',
        '做物料的 Agent 选它的原因就是这两条 🏷️'
      ],
      community: [
        '【OpenClaw 是什么】\nPeter Steinberger（奥地利）发起\n2025-11 发布 · MIT 开源\nGitHub 68K+ 星 · 有 Wiki\n本地运行 · 能读写文件\n直接出 pptx / pdf / html ✅',
        '澄清：OpenClaw 不是 JR 自己的东西 — 开源项目 · 我们做的是课程整合。\n官网 openclaw.ai · GitHub openclaw/openclaw 可公开查 🔗'
      ]
    },
    p11: {
      title: '装龙虾这事｜线上课真的教不会你',
      body: `为啥 OpenClaw 工作坊只开线下？一句话：**装机是教不会的 · 只能手把手陪你装**。\n\n📺 视频课（6-8h）：跟着装 · 报错看不懂 · 90% 卡在这一步放弃\n📖 自学文档：Google 到一半迷路 · Stackoverflow 无人回复\n✅ 线下工作坊（4h）：1 老师讲坑 + 2 Tutor 一对一陪装 + AI 小花验证\n\n装上龙虾之后才是价值 — L4-L7 用它出 PPT / Brochure / Landing。\n但前提是你得装得上 🦞`,
      tags: '#AI学习方法 #OpenClaw #线下课 #PPT #Brochure',
      wechat: [
        '做物料这事线上课教不会你 — 因为需要有人看你的素材调风格 🥲',
        '视频课 50% 卡装机 · 自学迷路 · 线下 ROI 最高 🚀',
        '4 小时线下 = 2 周自学踩坑的节省 💰'
      ],
      community: [
        '【3 种学法】\n📺 视频课：装机卡住放弃\n📖 自学：Google 到迷路\n✅ 线下：Tutor 看你素材陪调\n\n做物料 = 要用自己素材跑 · 线上做不到 🚀',
        '为啥 OpenClaw 工作坊只线下：\n因为做 PPT / Brochure / Landing 这种物料 · 必须用你自己的素材练一次 · 需要有人看着你的素材帮你调风格。\n线上课天花板就在这里。'
      ]
    },
    p12: {
      title: '4 个人带你装龙虾｜6 步闭环 不卡壳',
      body: `装龙虾这一节课是整个工作坊最核心的 30 分钟 — 配置拉满：\n\n👨‍🏫 1 位主讲老师：讲清楚 OpenClaw 是什么、坑在哪\n👩‍💻 2 位现场 Tutor：一对一挨个到你电脑前帮装\n🌸 AI 小花：辅助工具 · 每步验证输出\n\n装机 6 步：\n1️⃣ 确认操作系统（Mac / Win-WSL2 / Linux）\n2️⃣ 检查 Node ≥ 22（这一步最常卡）\n3️⃣ pnpm 全局装 OpenClaw（⚠️ 千万别用 Bun）\n4️⃣ openclaw --version 验证\n5️⃣ 配 LLM API Key\n6️⃣ 发第一条指令 · 龙虾回复就算跑通 ✅`,
      tags: '#OpenClaw #龙虾 #装机 #工作坊 #Tutor #线下课',
      wechat: [
        '装龙虾配 1 老师 + 2 Tutor + AI 小花 — 4 个人伺候你一个 🦞',
        '6 步闭环 · Tutor 一对一挨个到你电脑前帮 · 装不上不让走 💪',
        '这 30 分钟是整个工作坊最核心 · 装不上后面啥都做不了 🔥'
      ],
      community: [
        '【装龙虾 · 4 人配置】\n👨‍🏫 1 主讲老师\n👩‍💻 2 位 Tutor 一对一\n🌸 AI 小花工具辅助\n\n6 步骨架 · 老师讲 + Tutor 挨个装 · AI 小花每步验证 · 出门前 100% 跑通 ✅',
        '为啥装机要 4 个人配？\n因为这是整个工作坊的生死线 — 装不上后面 L3-L7 都白搭。\n1 老师统筹讲坑 · 2 Tutor 分组陪装 · AI 小花做步骤检查 · 多层保险一次装成。'
      ]
    },
    p13: {
      title: '三层配置｜老师讲坑 · Tutor 陪装 · AI 小花验证',
      body: `装龙虾这一关的配置真的蛮狠的 — 为了保证你装上整出了三层：\n\n👨‍🏫 第一层：主讲老师（统筹）\n讲清楚 OpenClaw 是什么 · 装机 3 大坑在哪（WSL2 / Node 22 / 别用 Bun）· 整体节奏把控。\n\n👩‍💻 第二层：2 位现场 Tutor（主力）\n一对一挨个到学员电脑前陪装 · 卡哪步当场接手 · 装到能跑第一条指令为止。Windows WSL2 / Node 升级 / API Key 配错都包。\n\n🌸 第三层：AI 小花（辅助）\n每步帮学员验证终端输出 · 装错自动提示 · 给 Tutor 节省"检查"时间。\n\n老师讲 · Tutor 陪 · AI 验 — 这种配置国内外很少见 🔥`,
      tags: '#OpenClaw #龙虾 #Tutor #老师 #AI小花 #工作坊',
      wechat: [
        '装龙虾 3 层配置：1 老师讲坑 + 2 Tutor 一对一陪装 + AI 小花每步验 🔥',
        '为啥这么多人伺候装机？因为装不上后面都白搭 💪',
        '这种人+AI 混合配置国内外少见 · 装机放弃率 ≈ 0 🛟'
      ],
      community: [
        '【装机三层配置】\n👨‍🏫 1 老师：统筹 · 讲 3 大坑\n👩‍💻 2 Tutor：一对一陪装\n🌸 AI 小花：每步验证输出\n\n老师讲 · Tutor 陪 · AI 验 🔥',
        '为啥要 3 层配置：\n① 自学装龙虾放弃率超高（90%+）\n② 线下配置越重 · 装成率越高\n③ 装不上后面 L3-L7 全部白搭\n所以这里配置硬拉满 — 出门前龙虾必须在你电脑上跑 💪'
      ]
    },
    p14: {
      title: '谁最适合来｜6 类天天出物料的人',
      body: `工作坊是按这 6 类人群设计的 — 对号入座：\n\n🏠 房产经纪：户型 + 卖点 → 项目 Brochure · A4 双面可印\n💼 B2B 销售：产品参数 → 12 页 Pitch Deck · 客户拿就能看\n📣 市场 / 新媒体：活动卖点 → 头图 + Landing 首屏\n🎓 教培讲师：课程大纲 → 招生页 + 介绍 PPT\n✍️ 个人品牌：个人故事 → 个人介绍页 + 自媒体素材\n🛠️ 小 B 创业者：产品说明 → 官网首屏 · 直接上线\n\n完全不用写代码 · 用过 ChatGPT / 豆包 / Claude 任一个就够 · 剩下 Tutor 教 👌`,
      tags: '#房产 #销售 #市场 #教培 #个人品牌 #创业 #OpenClaw',
      wechat: [
        '6 类最适合来：房产 · 销售 · 市场 · 教培 · 个人品牌 · 小 B 创业 🏷️',
        '共同点：天天要出 PPT / Brochure / 官网 / 素材的人 📑',
        '不写代码 · 用过 ChatGPT 就能来 💼'
      ],
      community: [
        '【6 类场景】\n🏠 房产 · Brochure / 户型 PPT\n💼 B2B 销售 · Pitch Deck\n📣 市场 · KV / Landing\n🎓 教培 · 招生页 / 课程 PPT\n✍️ 个人品牌 · 介绍页\n🛠️ 小 B · 官网首屏',
        '这期工作坊面向"天天出宣传物料的人" — 6 类对号入座。\n每期 Live Demo 按当期学员行业定 · 报名前问清方向。'
      ]
    },
    p15: {
      title: '4 小时完整时间线｜00:00 → 04:00',
      body: `贴一下 4 小时怎么过 · 看完就知道值不值。\n\n⏱️ 00:00-00:30｜L1 AI 认知\n⏱️ 00:30-01:00｜L2 装机（AI 小花 Quest）🌸\n⏱️ 01:00-01:30｜L3 Skill 地图（PPT / Brochure / Landing 在哪找）\n⏱️ 01:30-02:00｜L4 Live Demo 现场出一套物料 ⚡\n⏱️ 02:00-02:30｜L5 跟练 Workshop 🛟\n⏱️ 02:30-03:00｜L6 Networking ☕\n⏱️ 03:00-04:00｜L7 用你自己要出的物料练 60min 🚀\n\n听课 90min · 实操 90min · 交流 30min · Demo 30min — 结构非常动 🔥`,
      tags: '#OpenClaw #4小时 #课程设计 #工作坊 #时间表',
      wechat: [
        '4 小时怎么过：听 90 + 实操 90 + Demo 30 + Networking 30 🔥',
        'L7 用你自己要出的物料 60 分钟 · 全课高光 🚀',
        '每 30 分钟切一次模块 · 动手型工作坊 💪'
      ],
      community: [
        '【4 小时时间表】\n00:00 L1 认知\n00:30 L2 装机\n01:00 L3 Skill 地图\n01:30 L4 Demo\n02:00 L5 陪练\n02:30 L6 Networking\n03:00 L7 你的物料 60min 🚀',
        '课程结构非常用心：\n实操占 1.5 小时（L5 + L7）· 其中 L7 60 分钟是你自己真实物料。\n回去无缝衔接。'
      ]
    },
    p16: {
      title: '走时带走 6 件｜都不是讲义 PDF',
      body: `报课前最关心："4 小时到底带走啥"。\n\n✅ 装好的 OpenClaw 实例（不用回家"有空再装"）\n✅ 2 次真实出稿经验（1 跟练 + 1 自己物料）\n✅ Skill 地图（PPT / Brochure / Landing 现成哪个装哪个）\n✅ 可复用 Agent 配置（调成你品牌色 · 文案语气）\n✅ OpenClaw 使用者群（课后持续答疑 3 月）\n✅ 跨行业同学人脉（Networking 认识的）\n\n没有"送你一本 PDF" — 那玩意回家不会翻 📌`,
      tags: '#OpenClaw #工作坊 #交付 #AI配置 #带走',
      wechat: [
        '4 小时带走 6 件：装好的 OpenClaw + 2 次出稿 + Skill 地图 + 品牌配置 + 课后群 + 人脉 📌',
        '不送讲义 PDF — 送一个调成你风格的 Agent 🏷️',
        '最值的是 "Agent 的风格配置" — 以后同风格素材直接出稿 💪'
      ],
      community: [
        '【工作坊带走 6 件】\n✅ 装好的 OpenClaw\n✅ 2 次真实出稿\n✅ Skill 地图（PPT/Brochure/Landing）\n✅ 品牌风格 Agent 配置\n✅ 使用者群 3 月答疑\n✅ 跨行业人脉 📌',
        '对比过几个同类课 — 最实在的就是"Agent 风格配置"可复用。\n下次同品牌风格的 Brochure / Deck 直接 call Skill · 30 分钟出稿。'
      ]
    },
    p17: {
      title: 'Live Demo 每期不一样｜按学员行业跑',
      body: `工作坊一个很特别的设定 — 每期 L4 Live Demo 不一样。\n\n🏠 悉尼房产期：现场出一套新盘 A4 Brochure + 户型 PPT\n🛡️ 墨尔本保险期：现场出一份产品介绍 Deck + 客户版 Landing\n📣 内容期：一篇公众号 → 8 图小红书 + 对应 Landing\n🎓 教培期：课程大纲 → 招生页 + 10 页介绍 PPT\n\n老师会提前问当期学员行业分布 · 现场跑一个最贴近你们的场景。\n\n这是线上课做不到的 — 报名前可以问清楚这期是什么方向 📍`,
      tags: '#Live Demo #OpenClaw #行业定制 #工作坊',
      wechat: [
        '工作坊 Live Demo 每期不一样 — 按当期学员行业定制 🎯',
        '悉尼房产 / 墨尔本保险 / 内容 / 教培每期不同 📍',
        '线上课不可能做的事 — 定制 Demo 只有线下 🔥'
      ],
      community: [
        '【L4 Live Demo · 按期定】\n🏠 房产 · 新盘 Brochure + PPT\n🛡️ 保险 · 产品 Deck + Landing\n📣 内容 · 公众号→小红书+Landing\n🎓 教培 · 招生页 + 课程 PPT\n\n报名前问清这期方向 📍',
        '老师在开课前会调研当期学员画像 · 现场跑最贴近你们的 Demo。\n这是线下工作坊和视频课最大的差别之一 — 可以"定制"。'
      ]
    },
    p18: {
      title: '1 老师 + 2 Tutor｜4 小时你不会独自对屏幕',
      body: `很多课说 "Tutor 陪跑" 结果就是群里发表情 🥲 — 这次是真配置：\n\n👨‍🏫 1 位主讲老师：全程在场 · 讲 + 答疑 + 统筹\n👩‍💻 2 位现场 Tutor：一对一挨个到你电脑前\n\n4 小时他们做什么：\n🛟 L2 装龙虾：2 Tutor 挨个到位陪装 · 装不上不走\n🛟 L5 跟练：卡住举手 · Tutor 过来带你跑一遍\n🛟 L7 你自己素材：1v1 看着你的真实 PPT / Brochure 素材帮你调 Agent 风格\n🛟 课后群：3 个月持续答疑不收费\n\n4 小时你独自对屏幕的时间基本为 0 💪`,
      tags: '#OpenClaw #龙虾 #Tutor #老师 #线下课 #工作坊',
      wechat: [
        '1 位老师 + 2 位 Tutor 真坐教室 — 不是群里发表情那种 😂',
        '4h 独自对屏幕时间 ≈ 0 · 随时举手有人来 🛟',
        '课后 3 月群答疑不收费 · 这才叫陪跑 💪'
      ],
      community: [
        '【1 老师 + 2 Tutor 现场】\n🛟 L2 装龙虾：2 Tutor 挨个陪\n🛟 L5 跟练：举手 Tutor 过来\n🛟 L7 素材：1v1 调 Agent 风格\n🛟 课后群：3 月答疑 ✅',
        '线下工作坊最值的就是"人手多"这一条 —\n1 位主讲老师 + 2 位 Tutor · 装机到出稿全程有人看着你做。\n自学 AI 最大的痛点就是"卡了没人告诉你" · 现场配置直接化解。'
      ]
    },
    p19: {
      title: '报名解锁｜平台 37 个免费资源陪你过 2 周',
      body: `4 小时工作坊只是起点 — 大多数人回家 2 周才把 OpenClaw 真正玩溜。\n\n报名自动解锁配套资源：\n\n📚 16 章 OpenClaw 学习方向（入门 → 生产部署）\n🧪 18 个 Prompt 互动 Lab（浏览器内练习）\n📖 3 篇 Wiki（Prompt Eng / Claude Code / n8n）\n\n课上遇到问题 — Skill 怎么改、Brochure Skill 怎么装、连 WhatsApp — 这 37 个资源里都有答案。\n\n都是平台免费资源 · 不用另外付费 🌿`,
      tags: '#OpenClaw #学习资源 #免费 #平台资源',
      wechat: [
        '工作坊解锁 37 个平台免费资源 · 陪你过开课后 2 周 🌿',
        '16 章 Learn + 18 个 Lab + 3 篇 Wiki 📚',
        '不额外付费 · 工作坊学员自动解锁 ✅'
      ],
      community: [
        '【报名解锁】\n📚 16 章 OpenClaw Learn\n🧪 18 个 Prompt Lab\n📖 3 篇 Wiki\n合计 37 个 · 全免费 · 2 周陪跑 🌿',
        '4 小时只是 kickoff — 真正玩溜 OpenClaw 要 2 周。\n平台 37 个资源覆盖课上所有坑（Skill / 模板 / 连工具）· 这段过渡期不孤单 📚'
      ]
    },
    p20: {
      title: '报名前高频 5 问｜直接给短答案',
      body: `咨询最多的 5 个问题 — 一次性答完：\n\nQ1 我担心装不上龙虾怎么办？\nA 线下 1 位老师 + 2 位 Tutor 一对一陪装 · 装不上不让走 🦞\n\nQ2 没用过 AI 能来吗？\nA 用过 ChatGPT / 豆包 / Claude 任一个就行 · 不写代码\n\nQ3 需要带什么？\nA 笔记本（Mac / Win-WSL2）· 充电器 · 一份你要出稿的真实素材\n\nQ4 装龙虾要另外花钱吗？\nA OpenClaw 本身 MIT 免费 · LLM API Key 自付（一月几刀到十几刀）\n\nQ5 能线上吗？\nA 不能 — 装机 + 看素材调风格都需要现场`,
      tags: '#OpenClaw #FAQ #报名咨询 #工作坊',
      wechat: [
        'FAQ 快答：没 AI 基础可来 · 带笔记本 · OpenClaw 免费 · 只线下 👌',
        '"能不能线上？" — 不能 · L7 要看你素材 · 线上做不到 📍',
        '"要花钱吗？" — OpenClaw 免费 · LLM API 一月几刀 💰'
      ],
      community: [
        '【FAQ】\nQ 没 AI 基础？A 用过 ChatGPT 就行\nQ 带什么？A 笔记本 + 要出的素材\nQ 花钱？A 免费 · LLM 几刀/月\nQ 线上？A 不行\nQ 课后？A 群 3 月 ✅',
        '特别强调：只线下 · 每期城市不同 · 报名前看清期次和 Live Demo 方向。'
      ]
    },
    p21: {
      title: '到场前 30 分钟｜5 件事做完再来',
      body: `报名后到场前的准备 — 做完你会更从容：\n\n① 确认笔记本能上课（Mac OS / Win 10+）\n② Mac：会开「终端」（Cmd+Space 搜 Terminal）\n   Win：装好 WSL2（PowerShell 管理员跑 wsl --install）\n③ 熟悉终端里打字 + 复制粘贴\n④ 注册 LLM API Key（推荐 Gemini 免费）\n⑤ 带一份你要出的真实物料素材 — 产品卖点 / 户型图 / 课程大纲 / 活动文案都行（L7 要用）\n\n⚠️ Windows 必须 WSL2 · 原生 PowerShell 跑不了\n⚠️ 不做也能来 · 做完更顺`,
      tags: '#OpenClaw #课前预习 #装机 #WSL2',
      wechat: [
        '课前 30min 预习 5 件事 · 让 L2 装机更顺 ✅',
        'Windows 同学必装 WSL2 · 原生 PS 跑不了 ⚠️',
        'LLM Key 第一次推荐 Gemini · 免费额度最大 💰'
      ],
      community: [
        '【到场前 5 件事】\n① 笔记本能上课\n② Mac 会开终端 / Win 装 WSL2\n③ 终端复制粘贴熟悉\n④ LLM Key（Gemini 免费）\n⑤ 带一份要出的真实素材 📎',
        '特别强调第 5 点 — 带一份你要出的物料素材来。\nL7 Workshop 60 分钟就用你自己的素材练一次 · 回去无缝衔接。\n来空手了只能用样例素材 · 效果打折 💡'
      ]
    },
    p22: {
      title: '传统 AI 课 vs OpenClaw 工作坊｜12 维度对比',
      body: `对比过好几家课 — 挑 AI 工作坊我按这个 checklist 来：\n\n维度 · 传统 AI 课 vs OpenClaw 工作坊\n\n形式：视频录播 vs 4h 线下\n装机：回家自己 vs Tutor 当场\n实操：做题 vs 用你自己要出的物料\n Tutor：群客服 vs 坐你旁边\nDemo：PPT 案例 vs 现场出一套\nNetworking：无 vs 30min 跨行业\n交付：讲义 PDF vs 能出稿的 Agent\n答疑：慢 vs 5min 接手\n定制：通用 vs 按行业改 Demo\n风格：通用模板 vs 调成你品牌\n验证：无 vs AI 每步验\n产出：学完没了 vs 可复用 Skill\n\n12 项里 11 项线下胜 🏆`,
      tags: '#AI学习方法 #OpenClaw #对比 #线下课',
      wechat: [
        '视频课 vs 线下工作坊 12 维度 — 11 项线下胜 🏆',
        '最大差 3 条：用自己物料 · 调成你风格 · 带走能出稿的 Agent 🔥',
        '挑 AI 工作坊的 checklist 给你参考 ✅'
      ],
      community: [
        '【12 维度】\n形式｜装机｜实操｜Tutor\nDemo｜Networking｜交付｜答疑\n定制｜风格｜验证｜产出\n\n线下 11:1 胜 🏆',
        '挑课 checklist 送大家 · 核心差别 3 条：\n① 用你自己真实素材练 · ② Agent 调成你品牌风格 · ③ 带走能出稿的配置。\n这三条线上课都做不到。'
      ]
    },
    p23: {
      title: '独家 2 块｜AI 小花装机 + 按行业定制 Demo',
      body: `这 2 块市面几乎找不到第二家：\n\n🌸 AI 小花 Quest 装机\n— AI 主动开口 · 每步等你贴 output\n— 装错当场纠正 · 超时 Tutor 接手\n— 6 Step 闭环 · 平均 20 分钟跑通\n\n⚡ Live Demo 按期定制\n— 老师提前调研学员行业\n— 现场跑最贴近你们的场景（房产 Brochure · 保险 Deck · 教培招生页 等）\n— 每期都不一样\n\n这 2 块是工作坊最不可替代的内容 · 线上永远做不到 🔥`,
      tags: '#OpenClaw #AI小花 #Live Demo #独家',
      wechat: [
        'AI 小花装机 + 定制 Live Demo — 2 块市面找不到第二家 🔥',
        '线上永远做不到的 2 件事：AI 陪装 + 行业现场 Demo ⚡',
        '这 2 块是 4 小时工作坊最值的部分 · 线下独占 💎'
      ],
      community: [
        '【独家 2 块】\n🌸 AI 小花 Quest\nAI 主动 · 每步验 output · 20min\n\n⚡ Live Demo 按期定\n提前调研 · 跑学员行业场景\n\n线上做不到 · 线下独占 🔥',
        '对比过同类课 · 这 2 块最不可替代：\nAI 陪装模式国内外没见过第二家 · 行业定制 Demo 只有线下能做。'
      ]
    },
    p24: {
      title: '装好之后｜OpenClaw 能帮你出这 6 类物料',
      body: `不空泛 — 这是学员装完 OpenClaw 真在用的 6 类输出：\n\n📑 销售 / Pitch Deck（12-20 页 · pptx 直接可改）\n📄 A4 Brochure（双面 · 打印尺寸 · 房产 / 产品最常用）\n🌐 Landing Page（HTML 一页纸 · 放 Vercel 或挂官网二级域）\n🎯 招生 / 活动落地页（banner + CTA + 表单）\n📣 社交卡图（小红书 9 张图 / 朋友圈长图 / 头图）\n✍️ 内容系列（一篇文章扩展成 Deck + 小红书 + Newsletter）\n\nL7 Workshop 就用你自己要出的素材 · 选一类出一套 🛠️`,
      tags: '#OpenClaw #AI物料 #PPT #Brochure #Landing #社交卡图',
      wechat: [
        '装好 OpenClaw 能出 6 类物料：Deck / Brochure / Landing / 招生页 / 社交卡图 / 内容矩阵 🛠️',
        'L7 用你自己要出的素材练一次 · 选一类出一套 🚀',
        '这 6 类是学员第 2 周最高频在用的场景 💪'
      ],
      community: [
        '【OpenClaw 能出的 6 类】\n📑 Pitch Deck（pptx）\n📄 A4 Brochure（打印）\n🌐 Landing Page（HTML）\n🎯 招生 / 活动落地页\n📣 社交卡图系列\n✍️ 一篇文章多平台扩展',
        '这 6 类是现任学员最高频在用的。\n每类都有对应 Skill · L3 会过一遍哪些可以直接套模板 · L7 选一类用你素材出一套。'
      ]
    },
    p25: {
      title: '4h 线下 vs 1 月视频课｜差别就在"装机"',
      body: `最常被问："为啥不做个在线课？"\n\n真相：视频课装不上龙虾 · 一切都免谈。\n\n📺 1 个月视频课：90% 卡装机放弃（Win WSL2 / Node 22 / Bun 坑）\n✅ 4 小时线下：1 老师 + 2 Tutor 一对一陪装 · 装成率接近 100%\n➕ 30min Networking：跨行业 Skill 互抄作业 · 视频课没有\n\n不是 4 小时塞 1 个月的料 —\n是把"装机 + 2 轮出稿 + 调风格 + 答疑"一次做完 ·\n省掉自学时 80% 会卡住的地方。\n\n线上课天花板就在"装机"这一步 🦞`,
      tags: '#OpenClaw #学习效率 #线下课 #ROI #对比',
      wechat: [
        '4h 线下 vs 1 月视频课 — 视频课 50% 卡装机放弃 🥲',
        '不是塞了 1 月的料 · 是把"装机 + 出稿 + 调风格"一次做完 🚀',
        '时间 ROI 最高的 AI 学法就是去一次线下工作坊 ✅'
      ],
      community: [
        '【为啥 4h > 1 月视频】\n📺 视频：50% 卡装机\n✅ 工作坊：Tutor 当场 · 看你素材\n➕ Networking：Skill 互抄\n\n一次做完 · 省 80% 自学踩坑 🚀',
        '做物料这种事 · 线上教学天花板就在那 — 因为需要有人看你的素材帮你调。\n4h 现场 ROI 远 > 1 月视频课 · 尤其对非技术同学。'
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

      const titleHead = document.createElement('div');
      titleHead.className = 'cp-title';
      titleHead.textContent = frame.id.toUpperCase() + ' · 文案素材';
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
