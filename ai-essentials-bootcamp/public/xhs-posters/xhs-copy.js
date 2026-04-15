/* AI 必修课 第 1 期 — 三通道文案 */
(function () {
  const XHS_COPY = {
    p1: { title: '同事偷偷用 AI 你还在加班抄数据', body: `今天又被领导 cue 周报为啥比同事晚 🥲\n\n隔壁组小丽下午 5 点准点下班 — 偷偷问她，原来她每天用 AI 省了一半时间。\n\n她推荐了我一门课：AI 必修课。4 周 33 节，从打开浏览器开始教，零基础也能学。\n首期 $299，7 天无条件退款。主页搜「匠人 AI 必修课」🌸`, tags: '#AI入门 #ChatGPT #办公室 #提效 #零基础学AI', wechat: ['同事偷偷用 AI 你还在加班 — 4 周入门补回来 🥲','AI 必修课首期 $299 · 7 天退款 — 不亏 🌸','零基础也能学：从打开浏览器开始教。'], community: ['【AI 必修课 第 1 期】\n4 周 · 33 节 · 17 Lab · 2 直播\n零基础友好 · 全人群\n首期 $299（原 $399）\n7 天无条件退款\n主页搜 匠人 AI 必修课 🌸','买了 ChatGPT 但不会用？— 4 周补完。'] },
    p1b: { title: '买了 ChatGPT 会员还是不会用', body: `这是身边好多人的真实状态 💸\n\n买了 ChatGPT Plus 半年，每月 $20 — 用了不到 5 次。\n问 AI"帮我写邮件"，输出又长又官话，还不如自己写。\n\n问题不在 AI — 问题在没人教你怎么问。\n4 周入门课 $299，主页搜「匠人 AI 必修课」🌸`, tags: '#ChatGPT #AI入门 #Prompt #提效', wechat: ['买了 Plus 不会用 = 每月白给 OpenAI $20 💸','问题不在 AI — 在你不会问 Prompt 🌸','$299 学会用 — 比你订阅 Plus 半年还便宜。'], community: ['【ChatGPT 用不起来？】\n买了会员 ≠ 会用\n核心是不会写 Prompt\n4 周 33 节系统教\n$299 一次永久 🌸','身边好多人买了 Plus 不会用 — 学会一个月就回本。'] },
    p1c: { title: '从加班 9 点到准点下班', body: `这是过去 4 周最值得的一次小投资 ✨\n\nBefore：每天写邮件改 5 遍 / 周报到半夜 / 数据手动整理\nAfter：用 AI 5 分钟搞定邮件 / AI 起稿周报 / 表格让 AI 解读\n\n每天省 30 分钟 = 一年多 130 小时。\n够多陪孩子 + 多睡觉 + 多读 30 本书 🌸`, tags: '#AI提效 #办公室 #ChatGPT #准点下班', wechat: ['从加班到准点下班 — 4 周 AI 入门可以 ✨','每天省 30 分钟 × 一年 = 130 小时多陪家人 🌸','改造 4 大职场场景：邮件 / 报告 / 数据 / 内容。'], community: ['【4 周转折】\nBefore：加班到 9 点\nAfter：5 点准点下班\n\n每天省 30 min × 一年 = 130 h\n够多陪孩子 + 多睡 ✨'] },
    p1d: { title: 'AI 替你搞定办公室 4 大重复活', body: `办公室人人都在做的 4 件重复活 — AI 都能帮 📝\n\n📧 邮件回复\n📊 周报 / 月报\n📋 表格数据\n✍️ 文案 / 内容\n+ 📅 日程整理\n+ 🔍 资料查找\n\n4 周学完，每天能省一两小时。$299 主页见 🌸`, tags: '#AI提效 #办公室 #自动化 #ChatGPT', wechat: ['办公室 4 大重复活：邮件 / 报告 / 数据 / 内容 — AI 全包 📝','4 周入门 · 每天省 1-2 小时 🌸','$299 学会 · 一周回本（按工资时薪算）。'], community: ['【AI 替你做的 4 件事】\n📧 邮件\n📊 报告\n📋 数据\n✍️ 内容\n+ 📅 日程 + 🔍 查资料\n4 周学会 🌸'] },
    p2: { title: '同样是上班族 差距已经在用不用 AI', body: `不是你笨 — 是你没学过怎么用 AI 🥲\n\n苦力族：邮件改 5 遍 / 报告写到半夜 / 表格手动算\nAI 族：5 分钟 AI 起稿 / 表格让 AI 解读 / 准点下班\n\n会用的人每天省 30 min — 一年就是 130 h。\n这就是同事看起来"做事更快"的真相。`, tags: '#AI提效 #办公室 #ChatGPT', wechat: ['同样是上班族 — 差距在用不用 AI 不在能力 🥲','会用 AI 每天省 30 min — 一年差 130 h 📊','学会 AI 不是为了取代你 — 是为了不被取代。'], community: ['【苦力 vs AI 族】\n苦力：手动 / 加班\nAI 族：Prompt + 模板 / 准点\n\n每天 30 min × 一年 = 130 h\n这就是差距源头 📊'] },
    p3: { title: '办公室群最近都在聊 AI', body: `真实截图 — 周三办公室微信群 💬\n\n姐姐："这周报又要写到几点啊 😭"\n丽丽："我用 AI 5 分钟搞定 你不会用吗"\n姐姐："啊？我也买了 ChatGPT 但不会用…"\n丽丽："我学了一个 AI 入门课 4 周教得很清楚"\n\n原来差距就在这一句话之间。`, tags: '#AI入门 #办公室 #ChatGPT', wechat: ['办公室群截图：会用 AI 的同事 5 分钟搞定周报 💬','"我也买了 ChatGPT 但不会用" — 听过最多的话。','差距不在工具 — 在使用方法。'], community: ['【真实截图】\n姐姐："周报又要熬夜"\n丽丽："AI 5 分钟搞定"\n姐姐："我也买了 ChatGPT…"\n答案：4 周入门课 💬'] },
    p4: { title: '4 周学完 你会真的会这四件事', body: `不是听完就完了 — 4 周毕业你会做这 4 件事 📌\n\n1️⃣ 邮件不再改 5 遍 — 5 句 Prompt 直接发\n2️⃣ 报告不再加班写 — 大纲 + AI 起稿 + 修改\n3️⃣ 数据让 AI 解读 — Excel 摘要 + 洞察 + 图表\n4️⃣ 内容创作有套路 — 朋友圈 / 公众号 / PPT 文案\n\n每件每天都用得上。`, tags: '#AI提效 #ChatGPT #办公室', wechat: ['4 周学完 4 件事：邮件 / 报告 / 数据 / 内容 — 每件天天用 📌','学会用 AI = 把"重复活"变成"5 分钟活"。','4 件事每件能省 15-30 分钟。'], community: ['【4 大能力】\n📧 邮件 5 句搞定\n📊 报告大纲 + 起稿\n📋 数据 AI 解读\n✍️ 内容有套路\n📌'] },
    p5: { title: '4 周路径 从打开浏览器到 AI 改造工作', body: `课程结构很清晰 4 个阶段 🗺️\n\nP0 从零开始（7 节）— 装 ChatGPT + 直播带做\nP1 Prompt 基础（16 节）— 4 要素框架 + 模板\nP2 职场实战（5 节）— 邮件 / 报告 / 数据 / 内容 Lab\nP3 进阶 + 行业（5 节）— 行业深入 + 毕业测试\n\n零基础也能跟下来。`, tags: '#AI入门 #课程结构 #4周', wechat: ['4 周 4 Phase：从零 → Prompt → 实战 → 进阶 🗺️','Phase 0 从打开浏览器开始 — 真的零基础。','每周一个台阶 不会跨太大。'], community: ['【4 Phase】\nP0 从零（7L）\nP1 Prompt（16L）\nP2 实战（5L）\nP3 进阶（5L）\n零基础友好 🗺️'] },
    p6: { title: '12+ AI 工具入门必备', body: `不是只用 ChatGPT — 课程会教这些 🛠️\n\n🤖 通用：ChatGPT / Claude / Gemini\n📊 Office：Copilot 365 / Notion AI\n🎨 内容：Gamma（PPT）/ Canva AI / 即梦\n🔍 搜索：Perplexity\n🇨🇳 国内：DeepSeek / 豆包 / Kimi\n\n每个工具都教什么场景用最合适。`, tags: '#AI工具 #ChatGPT #国内AI', wechat: ['12+ AI 工具入门 — 不是只学 ChatGPT 🛠️','国内国外都教：DeepSeek / 豆包 / Kimi 都有。','场景化选型 — 不焦虑选哪个。'], community: ['【12+ 工具】\nChatGPT / Claude / Gemini\nCopilot / Notion / Gamma\nDeepSeek / 豆包 / Kimi\n场景化选型 🛠️'] },
    p7: { title: '50 岁阿姨学员都跟下来了', body: `课程最让我意外的是：受众真的全人群 💗\n\n"我是行政完全不懂电脑 — 第一周直播课带我装 ChatGPT，到周报那一节真的省一半时间"\n— 50 岁行政 · 入营第 2 周\n\n"买过 ChatGPT 半年没怎么用 — 学完知道怎么写 Prompt"\n— 销售 · 入营第 3 周\n\n"Phase 0 真的从打开浏览器讲起"\n— 退休财务 · 毕业 1 个月`, tags: '#零基础 #AI入门 #学员反馈', wechat: ['50 岁阿姨都能跟下来 — Phase 0 真的从零开始 💗','买了 ChatGPT 半年不会用？4 周补回来。','零基础友好不是宣传词 — 是真实学员反馈。'], community: ['【真实反馈】\n50 岁行政：周报省一半\n销售：每天用 5-10 次\n退休财务：从打开浏览器学\n零基础真友好 💗'] },
    p8: { title: '$299 买到的不只是 33 节课', body: `首期特惠 · 实在话 💝\n\n买到手的：\n📘 33 节课（视频 + 直播 + Lab）\n🧪 17 个浏览器互动 Lab\n🎙️ 2 次直播 · 老师手把手\n⏱️ 10 小时学习时长\n\n+ 🎁 一次付费永久有效\n+ 🛡️ 7 天无条件退款\n+ 📜 毕业证书\n+ 🆙 课程持续更新 老学员免费跟新\n\n$299（原 $399 · 首期省 $100）`, tags: '#AI必修课 #首期特惠 #ChatGPT', wechat: ['$299 买到 33 节 + 17 Lab + 2 直播 + 永久有效 💝','7 天退款不亏 — 报名风险为 0。','首期特惠 $299 — $399 之后涨价。'], community: ['【$299 包含】\n📘 33 节\n🧪 17 Lab\n🎙️ 2 直播\n♾️ 永久有效\n🛡️ 7 天退款\n📜 证书 💝'] },
    p9: { title: '还在问 AI 怎么用 不如 4 周一次性学会', body: `每次别人问 AI 用法 你要不要直接给推这个？🌸\n\n4 周 · 33 节 · $299 首期特惠\n7 天无条件退款 · 永久有效\n零基础友好 · 从打开浏览器讲起\n\n主页搜「匠人 AI 必修课」 ☕`, tags: '#AI入门 #首期特惠 #零基础', wechat: ['还在问 AI 怎么用？4 周入门课 $299 主页见 🌸','买了 ChatGPT 不会用 = 每月白付费。','7 天退款 · 一次永久 · 报名零风险。'], community: ['【咨询窗口】\nAI 必修课 第 1 期\n$299 首期 · $399 原价\n4 周 33 节\n7 天退款\n主页搜 匠人 AI 必修课 ☕'] },
    p10: { title: 'AI 必修课 一句话讲清这是什么', body: `不是技术课 — 是办公室人人都能上的 AI 入门 🌸\n\n一句话：教你每天用 AI 省 30 分钟。\n\n一周节奏：\n• 周一：自学视频 P0 装 ChatGPT\n• 周三：直播课 老师带做职场场景\n• 周末：互动 Lab 邮件 / 报告 / 数据动手\n• 周日：测试 跟进度 + 拿小阶段证书\n\n4 周后 — 你的工作能 AI 改造的部分都改造完了。`, tags: '#AI入门 #ChatGPT #办公室 #必修课', wechat: ['一句话：每天用 AI 省 30 min 🌸','不是技术课 — 是办公室人人能学的入门。','4 周后你的工作 AI 能改造的都改完。'], community: ['【一句话定义】\n= 教你每天用 AI 省 30 min\n4 周节奏：自学 + 直播 + Lab + 测试\n零基础友好 🌸'] },
    p11: { title: '报课前 vs 毕业后 6 件事直接对比', body: `具体多会什么？6 维度看 💪\n\n🔸 写邮件：改 5 遍 → 5 句 Prompt 直接发\n🔸 写报告：加班到半夜 → 大纲 + AI 起稿\n🔸 读数据：手动算 → AI 解读 + 出图表\n🔸 做内容：想标题 1 小时 → AI 给 10 个\n🔸 查资料：百度十几页 → Perplexity 直答\n🔸 做 PPT：从空白页 → Gamma 1 句生成`, tags: '#AI提效 #能力升级', wechat: ['6 件事报课前 vs 后对比 💪','每件每天都做 — 加起来一天省 1-2 小时。','学完不是新增技能 — 是替换原本的工作方式。'], community: ['【6 维升级】\n邮件 / 报告 / 数据\n内容 / 资料 / PPT\n每件天天做\n累计 1-2 小时/天 💪'] },
    p12: { title: '每个上班族都用得上 4 大场景', body: `这门课为什么叫"必修"？因为这 4 件事人人都做 📋\n\n📧 邮件 / 沟通 — "回投诉邮件 礼貌但坚定"省 15 min\n📊 报告 / 文档 — "基于这些 bullet 写周报"省 2h\n📋 数据 / 表格 — "分析销售表 找趋势"省 4h/月\n✍️ 内容 / 创作 — "写 3 个朋友圈版本"省 1h/周\n\n哪个场景你天天做？那门课就值你天天回本。`, tags: '#AI场景 #办公室 #提效', wechat: ['4 大场景人人天天做：邮件 / 报告 / 数据 / 内容 📋','每个场景都教真实 Prompt + 模板。','你做哪件最多 哪件就是回本最快的。'], community: ['【4 大场景】\n📧 邮件 (15 min/d)\n📊 报告 (2 h/w)\n📋 数据 (4 h/m)\n✍️ 内容 (1 h/w)\n📋'] },
    p13: { title: 'Prompt 4 要素框架 R-T-C-F', body: `这是这门课最值钱的 1 个框架 🌸\n\nR · Role 角色 — "你是 5 年经验 HR"\nT · Task 任务 — "帮我写一封拒信"\nC · Context 背景 — "对方应届生 技术不匹配"\nF · Format 格式 — "3 段以内 礼貌简洁"\n\n按这 4 个套 — AI 输出质量直接翻几倍。`, tags: '#Prompt #PromptEngineering #ChatGPT', wechat: ['Prompt 4 要素：R-T-C-F · 角色 / 任务 / 背景 / 格式 🌸','按这 4 个套 — AI 输出质量翻几倍。','学完一辈子都用得上的提问框架。'], community: ['【R-T-C-F 框架】\nR Role 角色\nT Task 任务\nC Context 背景\nF Format 格式\n一辈子用得上 🌸'] },
    p14: { title: '这 4 类人学完受益最大', body: `课程定位"全人群" — 但这 4 类人受益最明显 💗\n\n👩‍💼 办公室白领 — 邮件 / 报告 / 数据 / 内容 4 大场景\n👨‍💼 管理者 / 创业者 — 想推团队用 AI · 自己先要会\n🌸 传统行业 — 会计 / 教师 / 医生 / 律师 跨行业入门\n🎓 AI 零基础 — 完全没接触过 · 从打开浏览器开始`, tags: '#AI入门 #全人群 #传统行业', wechat: ['这 4 类人受益最大：白领 / 管理者 / 传统行业 / 零基础 💗','跨行业 AI 入门 — 不止 IT 人能学。','50 岁阿姨学员的真实反馈：完全跟得上。'], community: ['【4 类受众】\n👩‍💼 办公室白领\n👨‍💼 管理者\n🌸 传统行业\n🎓 零基础\n全人群覆盖 💗'] },
    p15: { title: '17 个互动 Lab 不是干看视频', body: `买课最大浪费 = 看完不会做 🧪\n\nPhase 0 入门 × 2 — 装 ChatGPT / 第一次对话\nPrompt 框架 × 7 — R-T-C-F / 角色 / 输出格式\n邮件 × 2 / 报告 × 2 / 数据 × 2 / 内容 × 2\n\n每个 Lab 浏览器内即时反馈 — 不是看视频打勾。`, tags: '#互动Lab #AI练习 #ChatGPT', wechat: ['17 个互动 Lab — 不是干看视频 🧪','浏览器内即时反馈 — 学到肌肉记忆。','买课最怕看完不会做 — 这次每节配 Lab。'], community: ['【17 Lab 分布】\n入门 2 · Prompt 7\n邮件 2 · 报告 2\n数据 2 · 内容 2\n动手练到会 🧪'] },
    p16: { title: '4 周 从零到每天用 AI 提效', body: `课程节奏紧但每周都有具体交付 📅\n\nW1 P0 · 从零开始 — 装 ChatGPT + 直播带做\nW2 P1 · Prompt 基础 — 4 要素 + 7 个 Lab\nW3 P2 · 职场实战 — 1 直播 + 邮件 / 报告 / 数据 / 内容\nW4 P3 · 进阶 + 行业 — 行业深入 + 毕业测试`, tags: '#AI入门 #4周 #学习路径', wechat: ['4 周节奏：从零 → Prompt → 实战 → 进阶 📅','每周一个台阶 不会跨太大。','节奏紧但每天 30 分钟就跟得上。'], community: ['【4 周路径】\nW1 装环境\nW2 Prompt 框架\nW3 4 大场景\nW4 进阶 + 毕业 📅'] },
    p17: { title: '毕业带走 6 件能用的东西', body: `不是听完就完了 — 带走 6 件每天能用的 📂\n\n01 Prompt 模板库（邮件 / 报告 / 数据 / 内容）\n02 12+ 工具选型清单\n03 4 大职场场景 SOP 流程\n04 每天 30 min 改造方案\n05 毕业测试报告 · 量化进步\n06 结业证书 · LinkedIn 可贴`, tags: '#毕业交付 #模板库', wechat: ['毕业 6 件真东西：模板库 / 工具清单 / SOP / 改造方案 / 报告 / 证书 📂','每件都能直接用 — 不是装饰。','学完不会忘 — 模板拿来直接套。'], community: ['【6 件交付】\n01 Prompt 模板库\n02 12+ 工具清单\n03 4 场景 SOP\n04 改造方案\n05 测试报告\n06 证书 📂'] },
    p18: { title: '4 种学法组合 不是录播合集', body: `买课最怕"买了不做只听" 📚\n\n📺 33 节自学视频 — 任意时间看 · 自控节奏\n🧪 17 个互动 Lab — 浏览器内即时反馈\n🎙️ 2 次直播带做 — 老师手把手 · 现场答疑\n📊 每 Phase 小测 — 跟进度 + 量化提升`, tags: '#学习方法 #AI入门 #直播课', wechat: ['4 种学法：视频 / Lab / 直播 / 测试 📚','听课 + 动手 + 一对一带 + 量化反馈 = 闭环。','不是录播合集 — 直播 + Lab 才是关键。'], community: ['【4 种学法】\n📺 33 视频\n🧪 17 Lab\n🎙️ 2 直播\n📊 测试\n闭环学习 📚'] },
    p19: { title: '7 天无条件退款 报名风险 0', body: `这门课最贴心的一点 🛡️\n\n💰 7 天无条件退款 — 不问理由\n♾️ 一次付费永久有效 — 不是订阅\n🆙 课程持续更新 — 老学员免费跟新\n🎓 完成测试 = 毕业证书\n\n$299 首期 · $399 原价\n买了不合适 7 天退 — 学得会就赚。`, tags: '#7天退款 #AI必修课 #首期', wechat: ['7 天无条件退款 — 报名风险 0 🛡️','一次付费永久有效 — 不是订阅。','$299 首期 · 不合适退 学会就赚。'], community: ['【4 大保障】\n💰 7 天退款\n♾️ 永久有效\n🆙 持续更新\n🎓 毕业证书\n零风险报名 🛡️'] },
    p20: { title: '同样 8 小时 用 AI 的能省一半', body: `8 维度直接对比 ⏰\n\n🔸 邮件：改 5 遍 30 min → 5 句 5 min\n🔸 周报：手动 1.5 h → AI 起稿 20 min\n🔸 PPT：从空白 3 h → Gamma 30 min\n🔸 表格：手动算 1 h → AI 解读 5 min\n🔸 文案：想标题 1 h → AI 10 个 5 min\n🔸 资料：百度十几页 → Perplexity 直答\n🔸 会议：边听边记 2 h → AI 转录 10 min\n🔸 总和：8 小时干不完 → 6 小时准点下班`, tags: '#AI提效 #办公室 #ChatGPT', wechat: ['8 维度对比：用 AI 同样 8 小时省一半 ⏰','邮件 / 报告 / PPT / 表格 / 文案 / 资料 / 会议 全包。','学完每天 6 小时干完 8 小时的活。'], community: ['【8 维提效】\n邮件 30→5\n周报 90→20\nPPT 180→30\n表格 60→5\n文案 60→5\n8h → 6h ⏰'] },
    p21: { title: '报名前最常被问的 5 个问题', body: `5 个高频问题直接答 👌\n\nQ1 完全零基础能学？A 能 — 50 岁阿姨都跟下来了\nQ2 和免费教程区别？A 系统 + Lab + 直播 + 答疑\nQ3 要付 ChatGPT Plus？A 不强制 — 教用免费组合\nQ4 不合适怎么办？A 7 天无条件退款 不问理由\nQ5 学完能继续学？A 能 — 老学员免费跟新内容`, tags: '#FAQ #AI入门 #ChatGPT', wechat: ['5 个高频问题直接答 👌','零基础真能学：50 岁阿姨学员证明过。','免费教程 vs 这门课：系统 + 答疑 + 直播 + 退款。'], community: ['【5 问答】\n零基础？能\nvs 免费？系统\nPlus？不强制\n不合适？7 天退\n继续学？能 👌'] },
    p22: { title: '一天用 AI 真的能省 30 分钟', body: `不是宣传词 — 实际时间表 ⏰\n\n9:00 回 12 封邮件 · Prompt 模板 → 省 15 min\n11:00 整理客户表格 · AI 解读 → 省 8 min\n14:00 写汇报 PPT · Gamma 生成 → 省 25 min\n16:00 查行业资料 · Perplexity → 省 10 min\n17:30 写日报 · 口述转 AI 整理 → 省 12 min\n\n每天省 70 min × 一年 = 280 小时\n够多陪家人 / 多读 30 本书 / 多睡好觉。`, tags: '#AI提效 #时间管理 #办公室', wechat: ['一天 AI 实际省时表：5 个时段 70 min ⏰','每天 70 min × 一年 = 280 h — 复利惊人。','省下时间多陪家人 / 多读书 / 多睡 — 这才是 ROI。'], community: ['【一天时间表】\n9:00 邮件 -15 min\n11:00 表格 -8 min\n14:00 PPT -25 min\n16:00 资料 -10 min\n17:30 日报 -12 min\n年省 280 h ⏰'] },
    p23: { title: '这 3 块独家 别的入门课没有', body: `对比过 5-6 门 AI 入门课 这 3 块找不到第二家 🔥\n\n🌟 真正零基础 · 从打开浏览器讲起\nPhase 0 不假装你会装软件 — 50 岁阿姨学员都跟上了。\n\n🌟 2 次直播 · 老师手把手带\n不是录播合集 — 直播带操作 卡住直接问。\n\n🌟 $299 + 7 天退款 + 永久有效\n不是订阅 — 一次付永久。试 7 天不合适退。`, tags: '#零基础 #AI必修课 #首期', wechat: ['3 块独家：真零基础 / 直播带做 / 7 天退款 🔥','其他课假装零基础 — 这门课真从打开浏览器讲。','永久有效 + 7 天退 — 报名风险为 0。'], community: ['【独家 3 块】\n🌟 真零基础（Phase 0）\n🌟 2 直播带做\n🌟 7 天退款 + 永久有效\n找不到第二家 🔥'] },
    p24: { title: '不只技术行业 这 6 行业都在用 AI', body: `各行各业 AI 应用举例 🌍\n\n📚 教师 — 备教案 / 出试题 / 学情分析\n💼 会计 — 报表 / 凭证 / 数据汇总\n⚖️ 律师 — 合同审查 / 案例查找 / 文书\n🏥 医护 — 病历整理 / 文献查找 / 患者沟通\n🛒 销售 — 话术 / 客户跟进 / 文案\n🏠 地产 — 房源描述 / 客户匹配\n\n你的行业一定能用上。`, tags: '#各行业AI #传统行业 #AI应用', wechat: ['不只技术行业 — 6 大行业都在用 AI 🌍','教师 / 会计 / 律师 / 医护 / 销售 / 地产 都覆盖。','你的行业 AI 应用案例 — 课上都有讲。'], community: ['【6 行业 AI 应用】\n📚 教师\n💼 会计\n⚖️ 律师\n🏥 医护\n🛒 销售\n🏠 地产\n各行各业都用 🌍'] },
    p25: { title: '$299 学完 能拿回多少时间', body: `算笔账 ROI 直接看 💎\n\n📊 每天省 30 min × 一年 = 130 小时\n📊 每节课成本 $0.07 — 比早餐还便宜\n\n130 小时 = \n📚 多读 30 本书\n👨‍👩‍👧 每天多陪孩子 1 h\n💪 能开始一个新爱好\n😴 每天多睡 1 h\n📈 升职加薪有筹码\n\n$299 一次付 · 永久有效 · 7 天退款`, tags: '#ROI #时间管理 #AI必修课', wechat: ['$299 = 130 h 时间 = 30 本书 + 多陪孩子 + 多睡 💎','每节课成本 $0.07 — 比早餐便宜。','学得到就赚 不合适退 — 没有亏的版本。'], community: ['【ROI】\n$299 → 130 h/年\n$0.07/节\n\n时间 = 多读书 + 陪家人\n+ 新爱好 + 多睡\n+ 加薪筹码 💎'] }
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
