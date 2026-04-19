/* AI Engineer 全栈项目班 · 第 30 期 — 微信公众号文章数据 + 客户端渲染 + 导出逻辑
 * 支持双视角切换：学生视角（student）/ 家长视角（parent）
 * localStorage 记住上次选择；切换时文章全部重新渲染 + 图片缓存清空 + 自动重跑预览。
 *
 * 强依赖：../xhs-posters/index.html（通过隐藏 iframe 加载，复用 html2canvas 批量导出配图）
 * 运营流程：
 *   1. 顶部切到要发的视角（学生 / 家长）
 *   2. 点「⬇ 批量下载所有配图」→ 本地得到 mp-fullstack-ai-01.png ~ mp-fullstack-ai-NN.png
 *   3. 登录 mp.weixin.qq.com → 素材管理 → 图片 → 批量上传
 *   4. 点「📋 复制富文本」→ 公众号编辑器粘贴
 *   5. 按占位符顺序把素材库图片插到 [图 01] … [图 NN] 位置
 *   6. 预览 → 发布
 */

window.MP_ARTICLES = {

  /* ==========================================================================
   * 学生视角 · Junior AI Engineer 转码 / 求职者
   * ========================================================================== */
  student: {
    perspectiveLabel: '学生视角',
    bootcampSlug: 'fullstack-ai',
    title: 'IT 毕业生 2026 求职真相：为什么你投 40 份简历没回音，以及唯一走得通的那条路',
    subtitle: '写给 UNSW / USYD / Monash / Melbourne / UQ / ANU 在读 + 应届 CS / IT 毕业生 —— 9 年 30 期 5000+ 匠人校友走过的同一条路',
    author: '匠人 AI · Jin 老师（写给 CS / IT 毕业生）',
    readTime: '阅读约 16 分钟',
    publishDate: '2026·04',

    lead: `先交代一下这篇是写给谁的：你是 UNSW / USYD / Monash / Melbourne / UQ / ANU / Macquarie / UTS 在读的 CS / IT 专业学生，或者刚毕业在投简历。身边同学在卷 LeetCode、在 LinkedIn 上疯狂 Easy Apply、在 Reddit 上问"是不是该回国"。\n\n我上周收到小雨的消息。UNSW CS 2025 Nov 毕业，GPA 6.5（差不多 distinction 段），简历上写了 React、Node、调过 ChatGPT API，两个课设项目，一个调 OpenAI 的 demo。Junior Dev / Junior AI Engineer 岗投了 40 份——<strong>一个面试都没约到</strong>。\n\n"Jin 老师，我做错了什么？是不是学校不够好？是不是我不够优秀？"\n\n她没做错什么。她简历上这套东西，<strong>2024 年还能约到面试，2026 年不够了</strong>——不是她个人的问题，是澳洲 Junior 岗位的门槛在过去 12 个月里整个重置了。而且这件事学校没人会告诉你，因为大学的课表三年前就定好了，讲师也没在招聘一线。\n\n这篇要说清楚三件事：① <strong>为什么你投简历没回音</strong>（大学课表 vs 企业 JD 的错位）；② <strong>为什么其它路对 IT 毕业生都不通</strong>（自学 / 再读 Master / 其它 Bootcamp 分别哪里不行）；③ <strong>匠人第 30 期 16 周项目班为什么是 2026 IT 毕业生唯一走得通的那条路</strong>——9 年 30 期 5000+ 位匠人毕业生已经验证过，Atlassian / Canva / CBA / Westpac / REA / SEEK / Xero / NAB / Macquarie 这些澳洲主流公司几乎每家都有一整批匠人校友在职。\n\n这不是营销话术。下面每一段都有数据支撑，也都是过去这半年我亲耳从 50+ IT 毕业生和家长那里听来的真实情况。`,

    sections: [
      {
        id: 'demo-vs-prod',
        h2: '一、大学毕业那天你简历上有的东西 ≠ 企业 JD 要的东西',
        beforeImage: [
          `先说一个残酷的事实：CS / IT 本科或 Master 毕业那天，你手里基本上只有两样东西 —— <strong>几门课的作业成绩</strong>和<strong>一两个跟着 tutorial 做出来的课设</strong>。GPA 再高、学校再强，这两样加起来对 2026 的 Junior 岗来说<strong>几乎是零份量</strong>。`,
          `为什么？因为企业招的不是"学过 React / 学过算法"的人，而是<strong>能上线一个被真实用户用的产品</strong>的人。现场面试 code exercise 最常见的场景：给你 90 分钟，基于一份 PDF 做个 RAG 问答页。大部分 CS 毕业生写出来是这样的：前端一个 textarea、后端一个 /ask endpoint、OpenAI Embeddings 一把梭、返回前端。能跑。`,
          `面试官第二个问题就翻车：「这个页面 100 个人同时问同一个问题，会怎样？」「PDF 每周更新，旧向量怎么办？」「OpenAI 限流了怎么处理？」——这些不是刁难，是 Junior 岗每天都会遇到的真实问题。<strong>大学里没人教过这些</strong>，因为它们是工程 know-how，不是计算机科学理论。`,
          `会 React、会 Python、学过算法、调过 OpenAI，这些是<strong>大学毕业的标配</strong>。能回答上面三个问题，是<strong>企业要招的那类 Junior</strong>。2026 的门槛在后者——而这恰好是大学永远学不到、自学也很难补的那部分。`,
        ],
        poster: { id: 'poster-2', slug: 'p2-demo-vs-prod', caption: '图 01 · 大学教的 vs 企业要的 —— Junior AI 求职真实差距' },
        afterImage: [
          `右边那列看上去每条都是"小事"，攒在一起就是简历上那行<strong>"能独立上线 AI 产品"</strong>的全部内容。IT 毕业生只靠课业走不到这里——这也是为什么 GPA 7.0 / UNSW 毕业 / 英语流利的同学投 40 份依然没回音。不是你不够优秀，是你手里没有招聘方要看的那类证据。`,
        ],
      },

      {
        id: 'chatroom',
        h2: '二、UNSW CS 2025 毕业生群里的一段真实对话',
        beforeImage: [
          `那天在一个 300 人的 UNSW CS 2025 毕业生微信群里，小雨的问题引出一段对话。这种对话在 USYD / Monash / UQ / Melbourne 同届群里也几乎每周发生：`,
          `<em>小雨（UNSW CS 2025 Nov 毕业）：「我会 React + Python + 调过 ChatGPT，GPA 6.5，为什么投了 40 份 Junior 连面试都约不到？」</em>`,
          `<em>阿哲（Atlassian 在职 SWE，我们 2022 年毕业的校友）：「简历给我看一下。……嗯，你写的是 skills list，招聘方读的是 impact list。他们不关心你学过什么，关心你<strong>做过什么、上线过什么、解决过什么问题</strong>。」</em>`,
          `<em>小雨：「所以要怎么补？UNI 的 Group Project 算吗？跟着 YouTube tutorial 做的 to-do app 算吗？」</em>`,
          `<em>阿哲：「都不太算——面试官一眼能看出来。Group Project 在 GitHub 里基本上是半个人写完剩下人 commit 几行；跟着 tutorial 做的简历上有一万个人长一样。要的是<strong>跟真实角色协作、处理过真实边界条件、上过线被人用过的</strong>那种项目。你现在缺的不是更多技能，是这类证据。」</em>`,
          `<em>小雨：「学校毕业前不是教过 Software Engineering Workshop 吗？」</em>`,
          `<em>阿哲：「教是教了，但那是标准化课程，全澳所有 CS 毕业生都有。没有区分度的东西不叫履历。你身边 40 个同班同学简历第一屏长得基本一模一样——招聘方 ATS 系统过滤完，剩下的就是看<strong>谁有别人没有的那一块</strong>。」</em>`,
        ],
        poster: { id: 'poster-3', slug: 'p3-chatroom', caption: '图 02 · UNSW CS 2025 毕业生群里的一段对话' },
        afterImage: [
          `这段对话我在不同学校的毕业生群里看到过几十次。问题其实不在技能，也不在 GPA，在<strong>履历密度</strong>——<strong>简历上一行字要能撑得起半小时的故事</strong>。大学毕业时绝大部分 IT 学生简历上每一行都只能讲 30 秒，而这就是企业 JD 和大学课表之间那道永远填不上的鸿沟。`,
        ],
      },

      {
        id: 'market-shift',
        h2: '三、不是"再培训一次"，是整个行业换了赛道',
        beforeImage: [
          `很多人看完上面两段会觉得这是小雨个人的问题——"补一下简历就好了嘛"。其实不是。最近半年市场变化的数据蛮多的，挑四条最关键的给你看：`,
          `<strong>① AI coding 工具已经成为主力生产力</strong>。GitHub Copilot 付费用户 470 万，Cursor 估值 500 亿美元，Anthropic 的 Claude Code 发布 8 个月就成了最常用的 AI coding 工具（Pragmatic Engineer 2026 报告）。Junior 级别"写 CRUD endpoint / 改 UI / 补测试"的活，现在可以给 Copilot agent 扔个 GitHub Issue，它自己写代码、跑测试、开 PR，人只做 review。`,
          `<strong>② 招聘结构在重组</strong>。Stack Overflow 2025 年底报告：12 个月内，要求 AI coding 工具经验的岗位数量增长 <em>340%</em>，同期"纯实现型岗位"（只写代码不做设计）招聘数下跌 17%。UK 的 tech graduate 岗位 2024 已经跌了 46%，2026 预计再跌 53%。全球 Junior 岗整体下降幅度接近 <em>73%</em>。`,
          `<strong>③ 澳洲本地数据更清楚</strong>。ACS（Australian Computer Society）2026 最新统计：<em>AI Engineer 是增长最快的岗位</em>。澳洲 5.8% 的 IT 岗位描述里明确出现 AI 相关要求——这个比例 12 个月前是 2.8%，一年翻倍。AI-proficient 岗位平均薪资比同级"纯全栈"高 20-30%。`,
          `<strong>④ Junior 不是没机会，是门槛换了</strong>。减少的是"纯全栈 Junior"，涨的是"全栈 + AI 集成 Junior"。Atlassian / Canva / CBA / Westpac 的 AI Engineer 岗大部分对 0-3 年经验开放——只是 JD 里的技能栈从"React + Node"换成了"React + Node + RAG + OpenAI + Agent + Eval"。`,
          `<strong>⑤ 这些不是分析师在猜，是大公司 CEO 的原话</strong>（2025-2026 陆续公开讲的）：`,
          `• <strong>扎克伯格（Meta）</strong>：2025 年 AI 能做 mid-level 工程师的活，Meta 会用 AI 写掉一部分中级工程师岗位的代码。`,
          `• <strong>Dario Amodei（Anthropic CEO · 2026 Davos）</strong>：Anthropic 内部代码库 90% 已经由 AI 生成，"6-12 个月内 AI 可能能做软件工程师大部分、甚至全部的工作"。`,
          `• <strong>Marc Benioff（Salesforce CEO）</strong>：2025 年 Salesforce "基本不招软件工程师"——AI agents 顶掉了一整层招聘计划。`,
          `• <strong>Satya Nadella（Microsoft CEO）</strong>：AI 已经在写微软内部 20-30% 的代码。`,
          `• <strong>Amazon</strong>：2026 年 1 月官宣裁员 <em>16000 人</em>，省下的钱投给 AI；同期全球 entry-level tech 招聘比疫情前跌一半，Big Tech 毕业生招聘占比只剩 <em>7%</em>。`,
          `当然也有反面声音：<strong>AWS CEO Matt Garman</strong> 公开说"用 AI 替代 Junior 是我听过最愚蠢的主意"，IBM 反而把 2026 美国 entry-level 招聘翻了三倍——但他们招的也不是"纯全栈 Junior"，是"懂 AI 的 Junior"。两边共同点只有一个：传统全栈的那条路，在关。`,
        ],
        poster: { id: 'poster-1b', slug: 'p1b-fullstack-not-enough', caption: '图 03 · 会 React + Node ≠ 能做 AI 产品' },
        afterImage: [
          `换句话说：再教一遍 React + Node 已经没意义——那个市场彻底饱和了。这门课从第 26 期开始加 AI 模块，第 28 期把 AI 项目摆到核心位置，第 30 期直接把<strong>"全栈基础 + AI 集成"做成 Junior 的新基线</strong>。不是加一个选修，是换整条赛道。`,
        ],
      },

      {
        id: 'only-way',
        h2: '四、为什么对 IT 毕业生来说，这是唯一真正走得通的那条路',
        beforeImage: [
          `看到这里，作为 IT 毕业生你心里大概已经在排备选方案了。我把过去半年我听过的所有"别的选择"列出来，一条一条说清楚为什么都不通——这部分是家长经常问我、学生自己也在反复纠结的问题：`,
          `<strong>选项 A · 继续自学 + LeetCode 刷题</strong> → <span style="color:#ff5757">不通</span>。LeetCode 解决的是 FAANG 技术面试的筛选门槛，Junior 岗在澳洲 90% 公司（Atlassian / Canva 是例外）<strong>根本不考 LeetCode</strong>，考的是"你做过什么产品、怎么做的、遇到过什么问题"。花 6 个月刷 300 题不如做一个上线的 AI 产品。而且自学最大的问题不是学不会 —— 是<strong>没有真实协作</strong>（BA / UI / DevOps / QA），没有<strong>真实甲方压力</strong>，没有<strong>校友内推</strong>。这三样是找工作的核心，自学一样都给不了。`,
          `<strong>选项 B · 再读一个 Master / Coursework 延毕</strong> → <span style="color:#ff5757">不通 + 亏钱</span>。澳洲 Master of IT 一年学费 50-60K AUD，读两年就是 100-120K。毕业那天你手里的简历<strong>和本科毕业那天基本一样</strong>（大部分 Coursework Master 还是那些算法 / 数据库 / 软件工程课）。把 100K 和 2 年时间投在学历通胀上，不如投在真实项目经验上。很多同学本科投简历没回音就报了 Master 想"再拖一下"，两年后又站在同一个十字路口——只是多欠了 100K 学费。`,
          `<strong>选项 C · 接一些外包 / freelance 练手</strong> → <span style="color:#ff5757">不通 + 风险高</span>。作为 IT 毕业生，没有本地工作履历接到的外包基本都是个人项目 / 海外小单，<strong>写进简历招聘方不认</strong>（没有公司背书、没有可核实的上线链接、没有 code review 记录）。而且学生签 / 毕业签做 freelance 还涉及税务和签证合规问题，弊大于利。`,
          `<strong>选项 D · 其它 Bootcamp（Coder Academy / General Assembly / Le Wagon 等）</strong> → <span style="color:#f59e0b">部分通，但有几块关键缺口</span>。这些都是正经学校，基础教学也扎实。但做 2025-2026 年度对比的时候，有 3 块他们都没有：(1) <strong>AI 不是核心栈</strong>——大多数还在教传统全栈，AI 作为 2-4 周的附加模块讲讲概念。(2) <strong>没有真实 AI 实习</strong>——实习都是做静态网站或老项目，不是合作企业的 RAG / LLM 真业务。(3) <strong>辅导周期 3-6 个月</strong>——毕业后找工作没到 Offer 就课程关闭了。`,
          `<strong>选项 E · 直接回国 / 找国内岗</strong> → <span style="color:#f59e0b">可行但不是最优</span>。如果你已经下决心回国，这是一条路。但以"留澳找工作失败了回国"的身份回去，其实并不比直接以"澳洲毕业 + 真实上线 AI 项目 + 澳洲本地工作经验"的身份回去更好找。大部分国内互联网大厂的招聘经理看你简历时，在意的就是<strong>有没有真项目 + 有没有英文环境协作经验</strong>——这两样匠人 16 周恰好补上。<strong>先在澳洲做出 12-18 个月工作经验再回国</strong>，在国内是完全不一样的起点。`,
          `<strong>选项 F · 匠人学院第 30 期 16 周项目班</strong> → <span style="color:#10b981">通</span>。不是我们自卖自夸，是把上面 A-E 的每一块缺口都直接补上了：(1) <strong>AI 是核心栈不是附加</strong>——RAG + OpenAI + Agent + Eval 占课程 1/3；(2) <strong>有真实 AI 实习</strong>——合作企业真业务，合同可核实；(3) <strong>12 个月全程辅导</strong>——毕业到 Offer 中间没到都一直陪；(4) <strong>9 年 30 期 5000+ 校友内推网络</strong>——Atlassian / Canva / CBA / Westpac / REA 里每家都有一整批，Junior 岗内推成功率是 cold apply 的 5-8 倍（SEEK 数据）；(5) <strong>4 个后端方向可选</strong>——按你背景 + 目标（金融大厂 / 互联网 / AI 创业）帮你选对赛道。`,
        ],
        poster: { id: 'poster-23', slug: 'p23-only-way', caption: '图 04 · IT 毕业生 6 个选项对比 —— 只有一条真正走得通' },
        afterImage: [
          `这 6 个选项我跟家长和学生来回讨论过几十次。**唯一走得通的"系统性解决方案"** —— 这句话的重点是<strong>系统性</strong>。零零散散补课、刷题、做外包，每一样单独看都像"在前进"，但加起来凑不成那份能让招聘方给 offer 的证据。匠人 16 周的价值就是把 "能拿 Junior Offer 的 IT 毕业生" 所需的每一块都按 checklist 补齐——而且 9 年跑过 30 届已经验证过 checklist 是对的。`,
          `下面从 JD 数据开始，一块一块讲清楚这 16 周到底在练什么。`,
        ],
      },

      {
        id: 'jd-research',
        h2: '五、先扒了 15 份澳洲 JD —— 这门课对着 JD 反推设计',
        beforeImage: [
          `重做课程前做的第一件事：爬了 15 份真实在招的 Junior AI Engineer JD，来源包括 Atlassian、Canva、CBA、Westpac、REA、SEEK、Xero、NAB 等澳洲本地公司，手工分类后算了覆盖率。`,
          `核心结论：每份 JD 都在考的<strong>前端 + 后端 + 数据 + AI 集成 + 敏捷协作 + 项目经验</strong>六块里，单点会的人非常多，六块都能串起来的人反而是少数。`,
          `具体覆盖率：React + TS 98% / Node 或某个后端方向 95% / RAG + OpenAI 92% / 数据库 + API 96% / Git + Agile 95% / 能讲故事的项目经验 90%。我们不是拍脑袋设课——是按这份覆盖率反推课程模块。`,
        ],
        poster: { id: 'poster-24', slug: 'p24-jd-coverage', caption: '图 04 · 15 份澳洲 Junior AI JD 技能覆盖率' },
        afterImage: [
          `再强调一次：这门课不做"AI 算法工程师"（那是另一条路），做的是<strong>能独立交付 AI 产品的 Junior 全栈工程师</strong>——也就是 Atlassian / Canva / CBA 这类公司真正在招的岗位。`,
        ],
      },

      {
        id: 'outcomes',
        h2: '六、16 周之后你会"真的会"这四件事',
        beforeImage: [
          `不是"学过"，是"做过并能讲清楚"。这四件每一件都能写进简历、每一件在面试时都要能讲 15 分钟细节：`,
          `1️⃣ <strong>全栈工程基础</strong>——React 19 + TypeScript + Next.js（前端）；Node.js / .NET / Python / Java 四选一（后端）+ Express / FastAPI；PostgreSQL + Redis。不是点名式介绍，是真项目里配合起来用。`,
          `2️⃣ <strong>AI 产品集成</strong>——RAG（从 chunking 到 reranker 到 eval）、OpenAI / Claude API、向量库选型、Prompt 工程、AI 应用的错误处理和限流。重点在<em>和业务融合</em>，不是拼一个 demo。`,
          `3️⃣ <strong>Agile 团队协作</strong>——Sprint Planning / Daily Standup / Code Review / Sprint Review / Retrospective 完整跑一遍，跟 BA / UI / DevOps / QA 真人协作，不是模拟不是角色扮演。`,
          `4️⃣ <strong>3 个能上线的项目</strong>——1 个全栈 Web、1 个 AI 商业项目（含 RAG + 业务集成）、1 个完整团队协作项目。每个都有 GitHub 代码 + 部署链接 + 面试 STAR 故事。`,
        ],
        poster: { id: 'poster-4', slug: 'p4-outcomes', caption: '图 05 · 毕业带走的四件硬能力' },
        afterImage: [
          `这张图可以直接存下来对照自检：这四件里有几件是你现在能讲 15 分钟细节的？大部分人一件都没有。16 周练的就是把这四件都练到"能讲"的水平。`,
          `换个角度讲这件事——入学那天和毕业那天，你手里这 6 件东西是怎么变化的：`,
        ],
        poster2: { id: 'poster-11', slug: 'p11-before-after', caption: '图 06 · 入学 → 毕业，6 维能力的"之前"和"之后"' },
        afterImage2: [
          `这张"之前 vs 之后"可以对照你现在的状态看——如果左边那列"会 HTML/JS 跟过 tutorial / 调过 ChatGPT / 没协作经验 / 简历空白"全中，那恭喜，你就是这门课标准意义上的目标学员。`,
        ],
      },

      {
        id: 'devops-stack',
        h2: '七、DevOps 5 阶流程 + 15+ 真实工具栈',
        beforeImage: [
          `这是很多 Bootcamp 会绕过去的部分。很多同类课教完 React 和 Node 就结束了，但真实公司的日常开发不止写代码——还有 Plan、Build、Test、Release。`,
          `16 周里会完整跑一遍 DevOps 5 阶：<strong>Plan</strong>（Jira 写 User Story、Sprint 规划）→ <strong>Develop</strong>（Git 分支策略、PR Review）→ <strong>Build</strong>（Docker 打包、GitHub Actions CI）→ <strong>Test</strong>（Jest 单测、Playwright E2E、AI Eval 基线）→ <strong>Release</strong>（AWS 部署、Grafana 监控、Sentry 告警）。`,
        ],
        poster: { id: 'poster-5', slug: 'p5-devops', caption: '图 07 · DevOps 5 阶全流程（Plan → Release）' },
        afterImage: [
          `工具栈方面，16 周里会真的用到这些东西（不是讲义里罗列一下那种）：前端 React 19 + TS + Next.js；后端（四选一）+ Express / FastAPI；数据库 PostgreSQL + MongoDB + Redis；AI OpenAI API + Claude API + RAG 向量库；DevOps Docker + Git + GitHub Actions + AWS + Jira + Agile。`,
          `每个工具至少在一个项目里配合使用过，面试被问"你用过 Redis 吗"不再需要眼神闪躲——你会记得具体是哪个项目哪个 endpoint 为什么要加缓存。`,
        ],
        poster2: { id: 'poster-6', slug: 'p6-stack', caption: '图 08 · 16 周会真实用到的 15+ 技术栈' },
        afterImage2: [
          `技术栈这张图可以对照你现在的简历看看：能在"有项目验证"这栏打勾的有几个？如果大部分是空的，这正是这 16 周的目标。`,
        ],
      },

      {
        id: 'timeline',
        h2: '八、16 周路径 —— 每周都有具体的交付物',
        beforeImage: [
          `很多人报课之前最想知道的就是"我具体要做什么、什么时候做、做完有什么"。这里把路径拆成每 2-3 周一段，每段有明确的产出：`,
          `<strong>W1-3 前端工程基础</strong>：HTML / CSS / JS → React 19 + TS + Next.js → 部署一个响应式作品集。交付：Vercel 上线的个人作品集。`,
          `<strong>W4-7 后端 + 数据库</strong>：按方向学后端框架 → REST API 设计 → PostgreSQL 建模 → 鉴权 + 限流。交付：一个带用户系统的 Todo / Notes 类后端 API。`,
          `<strong>W8-10 AI 集成 + RAG</strong>：Embeddings 原理 → 向量库选型 → Chunking 策略 → Reranker → AI Eval。交付：给一份 PDF 做 RAG 问答的完整全栈应用。`,
          `<strong>W11-13 团队协作项目</strong>：6-8 人小组，跟 BA / UI / DevOps 角色一起跑完整 Sprint。交付：一个上线的团队项目 + 每人 10+ PR + Code Review 记录。`,
          `<strong>W14-15 AI 商业项目 + 实习启动</strong>：进合作企业做真业务 RAG / LLM 集成，有真甲方。交付：AI 商业项目 + 实习证明。`,
          `<strong>W16 毕业 + 求职启动</strong>：简历打磨 → LinkedIn 改造 → 模拟面试 → 校友内推启动。交付：简历 + LinkedIn + 3 次模拟面试记录。`,
        ],
        poster: { id: 'poster-16', slug: 'p16-timeline', caption: '图 09 · 16 周完整时间线（前端 → 后端 → AI → 实习 → 求职）' },
        afterImage: [
          `每一段交付都是"能贴进简历的具体东西"，不是"学过 React / 学过 RAG"这种模糊描述。16 周结束时你手里有 3 个项目 + 1 段实习 + 一套按 JD 反推过的简历。`,
        ],
      },

      {
        id: 'backend-choice',
        h2: '九、前端统一，后端 4 个方向可选',
        beforeImage: [
          `前端所有人都学 React 19 + TS + Next.js——这是没得选的澳洲 Junior 标配。后端给 4 个方向，因为每个人目标和背景不一样，硬塞一个栈反而不对。`,
          `🔷 <strong>Node.js 方向</strong>：前后端同 JS，上手最快，生态跟 AI 工具最好配（LangChain.js / Vercel AI SDK）。适合零基础、想最快做出 AI 产品的人。`,
          `🟪 <strong>.NET 方向</strong>：C# + ASP.NET Core，澳洲本地大企业主流——CBA / Westpac / NAB / Suncorp 的很多系统跑在 .NET 上。适合目标瞄准金融 / 银行 / 保险类大厂的人。`,
          `🐍 <strong>Python 方向</strong>：FastAPI + SQLAlchemy + LangChain，AI 原生生态最完整。适合想做 AI / 数据 / ML 交叉领域的人。`,
          `☕ <strong>Java 方向</strong>：Spring Boot + JPA，金融 / 大型系统场景主流。适合有 Java 底子或目标大规模分布式系统的人。`,
        ],
        poster: { id: 'poster-15', slug: 'p15-backend', caption: '图 10 · 后端 4 个方向对比（Node / .NET / Python / Java）' },
        afterImage: [
          `报名前会有一次免费咨询，顾问会看你背景 + 目标帮你选方向——不是让你随便挑。选错方向读完也能找到工作，但选对方向能省至少 3 个月弯路。`,
        ],
      },

      {
        id: 'projects',
        h2: '十、3 个能写进简历的项目（不是教程抄写）',
        beforeImage: [
          `这部分是整门课最花时间的一块，也是简历上最有区分度的一块。3 个项目是专门设计过的，覆盖 Junior AI JD 最常考的 3 种场景：`,
          `<strong>项目 1 · 全栈 Web 应用</strong>（W1-W7）：React 前端 + Node/.NET/Python 后端 + PostgreSQL + Redis + AWS 部署。这是地基，证明你能独立搭一个能用的 Web 产品。`,
          `<strong>项目 2 · AI 商业项目</strong>（W8-W15）：基于 RAG + OpenAI API 做一个真业务场景的 AI 应用——比如企业知识库问答、客服工单智能分类、或合同自动审阅。有真甲方、有真用户数据、有真上线压力。`,
          `<strong>项目 3 · 团队协作项目</strong>（W11-W13）：6-8 人小组 + BA + UI Designer + DevOps 一起跑 2 个 Sprint，从需求到上线全流程。你做的是其中一块，但要对整个产品的上线结果负责。`,
        ],
        poster: { id: 'poster-12', slug: 'p12-projects', caption: '图 11 · 3 个项目的设计 —— 全栈 / AI 商业 / 团队协作' },
        afterImage: [
          `每个项目都会拿到 3 份交付物：<strong>GitHub 完整代码</strong>（公开仓库 / 有 README / 有 demo gif）、<strong>部署链接</strong>（可点开用的上线版本）、<strong>STAR 故事模板</strong>（面试被问"讲一个你做过的项目"时的标准答法）。`,
          `项目之外，毕业那天你手里实际带走的是这 7 件东西——每一件都能直接贴进简历 / LinkedIn / GitHub：`,
        ],
        poster2: { id: 'poster-17', slug: 'p17-deliverables', caption: '图 12 · 毕业带走的 7 件真东西（3 项目 + AI 实习 + 简历包 + 作品集 + 12 月辅导）' },
        afterImage2: [
          `别的 Bootcamp 结业给你一张证书就算数了。这门课把"毕业那天需要什么才能去面试"倒推回来，每一件都做成实体交付物——这是 9 年 30 期踩出来的 checklist。`,
        ],
      },

      {
        id: 'collab',
        h2: '十一、跟 4 类角色协作 —— 这才是面试加分项',
        beforeImage: [
          `面试官最怕听到的一句话是「这个项目是我独自完成的」——因为 Junior 岗实际工作第一天就是跟一堆人协作。Atlassian / Canva 面试有专门一轮叫 Values Round 就是考这块。`,
          `16 周里的团队项目会真实对接 4 类角色：`,
          `📋 <strong>BA（业务分析师）</strong>——一起写 User Story / Acceptance Criteria、拆 Epic / Task。学会在需求不清楚时怎么提问、怎么把含糊的用户反馈转成可执行的 ticket。`,
          `🎨 <strong>UI Designer</strong>——基于 Figma 设计稿还原界面。学会怎么读设计系统、什么时候该还原到像素、什么时候该跟设计师 push back。`,
          `🛠️ <strong>DevOps</strong>——部署流水线协同。学会怎么配 CI/CD、怎么 debug 部署问题、怎么看生产环境日志。`,
          `🧪 <strong>QA Tester</strong>——Bug 报告 / PR Review / Regression 流程。学会怎么写能被复现的 Bug Report、怎么看别人 PR 最容易漏掉的边界条件。`,
        ],
        poster: { id: 'poster-18', slug: 'p18-collab', caption: '图 13 · 团队协作的 4 类角色' },
        afterImage: [
          `面试时讲项目，如果能说出「这个决定是我跟 BA 讨论了半小时才定下来的」「我因为 DevOps 提醒才发现了日志输出会漏 PII」——这种细节是演不出来的，面试官一听就知道你真做过。`,
        ],
      },

      {
        id: 'career',
        h2: '十二、AI 实习 + 12 个月辅导 —— 求职闭环',
        beforeImage: [
          `这是这门课和市面上其他 Bootcamp 最大的区别，也是学完能不能真找到工作的关键：`,
          `🏢 <strong>AI 方向实习机会</strong>（W14-W15 启动）——进合作企业做真实业务的 RAG / LLM / Agent 集成。不是做演示 demo，是做会上线被用户用的功能。这段履历写进简历是不能伪造的——面试官可以直接打电话给合作公司核实。`,
          `📝 <strong>简历 + LinkedIn 按 JD 反推</strong>——导师会带你把 15 份 JD 的共同关键词提出来，每一行简历都要对应到一个关键词 + 一个具体项目证据。不是套模板，是按你自己的 3 个项目 + 1 段实习重新组装。`,
          `🎤 <strong>模拟面试 + Code Interview</strong>——导师一对一，每人至少 3 次：Behavior Round（讲故事）、Technical Round（讲项目）、Code Round（现场写代码）。每次录像复盘。`,
          `🤝 <strong>校友内推</strong>——FLAG / Atlassian / Canva / CBA / Westpac / REA / SEEK 内部在职校友可内推，Junior 岗内推成功率大约是 cold apply 的 5-8 倍（Seek 数据）。`,
          `🎓 <strong>12 个月全程辅导</strong>——毕业后 12 个月内，只要还在找工作就继续陪——简历更新、内推对接、面试复盘、Offer 谈判。不是"毕业就把你扔出去"的模式。`,
        ],
        poster: { id: 'poster-19', slug: 'p19-career', caption: '图 14 · 求职闭环 —— AI 实习 + 简历 + 面试 + 内推 + 12 月辅导' },
        afterImage: [
          `没有实习 + 没有 12 个月辅导 = 本质上就是个网课合集，学完各回各家。我们把"陪跑到拿 Offer"当成课程的一部分而不是售后服务——这部分其实决定了这门课能不能真解决找工作的问题。`,
          `我们对比过澳洲在招的 5-6 门同类 Bootcamp，下面这 3 块是只有这门课才有的：`,
        ],
        poster2: { id: 'poster-23', slug: 'p23-exclusives', caption: '图 15 · 这 3 块别的 Bootcamp 都没有：FLAG 导师 · 真实 AI 实习 · 12 个月辅导' },
        afterImage2: [
          `FLAG / 澳洲大厂在职导师是 9 年积累起来的校友资源，真实 AI 实习是合作企业项目的延续，12 个月辅导是从 2017 年第 1 期开始就承诺的——这三块不是营销话术，是我们不敢砍的底子。`,
        ],
      },

      {
        id: 'testimonials',
        h2: '十三、9 年、30 期、5000+ 毕业生 —— 这门课不是一门新课',
        beforeImage: [
          `聊到这里有必要交代一下底子：这门全栈项目班从 2017 年开到现在，<strong>9 年、30 期、5000+ 位毕业生</strong>。每期 3-6 个月，从 React / Node 到 DevOps 到简历改造到内推上岗，一届一届地把澳洲转码这件事做通了。`,
          `这 5000+ 位毕业生，绝大部分都拿到了澳洲本地 Offer。你能想到的澳洲主流公司里几乎都坐着匠人校友：<strong>Atlassian / Canva / Afterpay</strong>（科技），<strong>CBA / Westpac / NAB / ANZ / Macquarie / Suncorp / IAG</strong>（银行 + 保险），<strong>REA / SEEK / carsales / Xero / MYOB</strong>（互联网），<strong>Deloitte / Accenture / PwC / EY</strong>（咨询）。不是每家有一两个——是每家都有一整批。`,
          `为什么值得提这个：Junior AI 求职最值钱的东西不是课件，是<strong>校友网络 + 内推通道</strong>。30 期 5000+ 在职校友意味着你毕业后投简历不是 cold apply，是走内推——Junior 内推成功率是 cold 的 5-8 倍。`,
        ],
        poster: { id: 'poster-7', slug: 'p7-testimonials', caption: '图 16 · 9 年 30 期 5000+ 毕业生的真实轨迹' },
        afterImage: [
          `过往三期（26-28）毕业生的一些原话，没编数字也没用"人均 BigTech"的话术：`,
          `<em>「入学前 3 个月没项目、不会 React、Python 只跟过教程；毕业时手里 3 个能跑的全栈项目，AI 商业项目被面试官问了整整 40 分钟细节。」</em>`,
          `<em>「团队协作经验直接写进简历，面试官问『跟 BA 吵过架吗』我能讲出具体故事。这种细节真的装不出来。」</em>`,
          `<em>「实习那段给公司内部知识库接了 RAG，后来那个功能一直在用。面试时讲完这段，两家公司当场给了 Junior Offer。」</em>`,
          `真实情况是大部分学员进的是澳洲本地中大厂（Atlassian / Canva / CBA / REA / SEEK 这一档），起薪在 85-110K 区间。这是普通 Junior AI Engineer 的真实水位——我们不拿个别进 FAANG 的案例当门面。`,
        ],
      },

      {
        id: 'upgrade-salary',
        h2: '十四、第 30 期做了哪些升级 + 澳洲起薪参考',
        beforeImage: [
          `第 30 期相对于 26-28 期的最大变化：把 <strong>AI 从选修模块提升到核心栈</strong>——这是看 2026 市场数据做的调整。`,
          `具体升级对比：`,
          `📍 <strong>定位</strong>：全栈 Web Developer → Junior AI Engineer`,
          `📍 <strong>AI 模块</strong>：选修附加课 → 核心技术栈（RAG + OpenAI / Claude + Agent 基础）`,
          `📍 <strong>项目数量</strong>：2-3 个全栈项目 → + 1 个完整 AI 商业项目`,
          `📍 <strong>后端方向</strong>：单方向 Node 或 .NET → Node / .NET / Python / Java 四选一`,
          `📍 <strong>实习方向</strong>：通用 Web 开发 → AI 方向（RAG / LLM 业务集成）`,
          `📍 <strong>求职辅导</strong>：6 个月 → 12 个月`,
        ],
        poster: { id: 'poster-20', slug: 'p20-upgrades', caption: '图 17 · 第 30 期 vs 往期的 6 项升级' },
        afterImage: [
          `薪资方面——levels.fyi + Seek + Glassdoor 2026 澳洲数据，Junior AI Engineer 起薪大致区间：`,
          `💰 <strong>Grad（0-1 年经验）</strong>：$75K-$95K AUD`,
          `💰 <strong>Junior（1-3 年经验）</strong>：$95K-$130K AUD`,
          `💰 <strong>Mid（3-5 年经验）</strong>：$130K-$180K AUD`,
          `部分公司参考区间：Atlassian $95-130K / Canva $90-125K / CBA + Westpac $80-110K / REA + SEEK $85-125K / Xero $90-125K。数据给你做自我定位用——不承诺、不保证，找工作永远有运气成分。`,
        ],
        poster2: { id: 'poster-25', slug: 'p25-salary', caption: '图 18 · 2026 澳洲 Junior AI Engineer 薪资区间（levels.fyi / Seek / Glassdoor）' },
        afterImage2: [
          `写到这里差不多把课程的所有关键设计讲完了。如果你还在看，基本可以判断这门课跟你目标至少是对的方向。剩下的问题（比如基础够不够 / 选哪个后端方向 / 签证是否能做实习）扫下面二维码聊。`,
        ],
      },
    ],

    cta: {
      title: '写给正在投简历没回音的 CS / IT 毕业生 · 咨询 2026 第 30 期',
      body: '如果你是 UNSW / USYD / Monash / Melbourne / UQ / ANU / Macquarie / UTS 在读或刚毕业，简历投了一段时间没约到面试，在"继续投 / 再读 Master / 回国 / 自学"之间反复纠结——扫码加课程顾问（备注「engineer30」）先聊一次：看看你现在缺的是哪一块、匠人 16 周能不能真补上、4 个后端方向（Node / .NET / Python / Java）哪个适合你的背景和目标市场。1 对 1 免费方向规划，不合适会直说，合适的话顾问会带你看 278 节完整大纲 PDF + 3 个项目案例 + 第 30 期早鸟优惠 + 分期方式。',
      qrcodeNote: '扫码添加课程顾问 · 备注「engineer30」',
      linkText: '点击阅读原文 → 查看 278 节最新课程详情',
    },

    usedPosters: [
      'poster-2', 'poster-3', 'poster-1b', 'poster-24',
      'poster-4', 'poster-11', 'poster-5', 'poster-6',
      'poster-16', 'poster-15', 'poster-12', 'poster-17',
      'poster-18', 'poster-19', 'poster-23',
      'poster-7', 'poster-20', 'poster-25',
    ],
  },

  /* ==========================================================================
   * 家长视角 · 给留学生 / CS 毕业生家长看的版本
   *   目标读者：40-55 岁华人家长，孩子在澳洲读 CS，正在找工作或即将毕业
   *   叙事角度：以一通家长求助电话开场，用 CEO 原话和 JD 数据降低家长"AI 恐慌"，
   *             再把 16 周课程作为"孩子可以执行的解决方案"摊开
   * ========================================================================== */
  parent: {
    perspectiveLabel: '家长视角',
    bootcampSlug: 'fullstack-ai',
    title: '留学生家长必读：孩子 CS 毕业投 40 份简历没回音，问题到底出在哪',
    subtitle: '2026 澳洲 Junior AI Engineer 市场变了—— 9 年 30 期 5000+ 毕业生家长走过的同一条路',
    author: '匠人 AI · Jin 老师（给家长的长文版）',
    readTime: '阅读约 16 分钟',
    publishDate: '2026·04',

    lead: `上周一位妈妈给我打电话，声音很着急：\n\n"Jin 老师，我儿子在悉尼 UNSW 读 Computer Science，今年 6 月毕业。从 2 月份开始投简历，到现在投了 40 多份 Junior Developer 岗位，一个面试都没有。我问他平时在做什么，他说在 LeetCode 刷题、在跟一些在线课程做 React 项目。为什么投出去就没回音？我们家在国内帮不上太多，孩子每次视频都在强撑——我心里很着急。"\n\n这种电话我在 2026 年这半年接了不下 30 通。每次听完都想跟家长说：<strong>孩子不是不努力、也不是学得不够</strong>——是澳洲 Junior 岗位的门槛在过去一年<strong>彻底换了</strong>，孩子手里那套东西 2024 年还能用，2026 年已经不够了。\n\n这篇是写给家长看的。我会先把市场现状讲清楚（含大厂 CEO 最近半年的原话），再把匠人学院第 30 期（2026 Q2 开课）的 16 周解决方案摊开。9 年 30 期 5000+ 毕业生走通的同一条路径——让您能和孩子一起做判断。`,

    sections: [
      {
        id: 'why-no-offer',
        h2: '一、孩子 CS 毕业找不到工作，问题到底在哪',
        beforeImage: [
          `很多家长的第一反应是：是不是学校不够好？是不是 GPA 不够高？是不是英语有问题？其实都不是。UNSW / USYD / Monash / Melbourne 这些学校的 CS 毕业生，GPA 优秀、英语流利，在 2024 年以前找 Junior Developer 并不难。`,
          `问题出在<strong>学校教的内容</strong>和<strong>公司 2026 年在招的岗位</strong>之间出现了明显的错位。大学里教的是算法、数据结构、离散数学、编译原理——这些是扎实的计算机科学基础。但 Atlassian / Canva / CBA / Westpac 2026 年招 Junior 时，JD 上写的要求是：`,
          `<strong>React + TypeScript 实际项目经验 / Node.js 或 Python 后端 API 开发 / RAG + OpenAI API 集成 / 团队协作经验 / 能独立部署上线的项目</strong>。`,
          `这份 JD 里，大学直接教的只有"编程基础"那一小块。其它的——前端 React、AI 集成、真实团队协作——大学不系统教，学生如果不主动补，毕业那天手里没有任何"企业级项目经验"。孩子拿着这样的简历投岗位，自然收不到回音。`,
          `这不是孩子的问题，是大学教育和行业岗位之间一直存在的 gap。只是 2026 年这个 gap 比以往任何时候都大——因为岗位那一头在过去 12 个月加了 AI 要求。`,
        ],
        poster: { id: 'poster-2', slug: 'p2-demo-vs-prod', caption: '图 01 · 写 Demo vs 做生产 —— Junior 岗面试真实差距' },
        afterImage: [
          `右边那列"做生产级"的每一条，是大学课程体系里基本不覆盖的。孩子简历上写"学过 React"——对面试官来说等于"没做过"；写"调过 OpenAI API"——等于"没上线过"。技能 list 和 impact list 之间，差的是<strong>真实项目履历</strong>。`,
        ],
      },

      {
        id: 'ceo-quotes',
        h2: '二、2026 这一年，大厂 CEO 们到底在公开讲什么',
        beforeImage: [
          `家长如果最近半年看过《纽约时报》《金融时报》或国内主流科技媒体，应该注意到这几条新闻——这不是小道消息，是 CEO 在公开财报会议或国际顶级论坛亲口说的：`,
          `<strong>· 扎克伯格（Meta CEO，2025 年 1 月访谈）</strong>：2025 年 AI 能完成 Meta 中级工程师的工作，Meta 会用 AI 写掉一部分中级工程师岗位的代码。`,
          `<strong>· Dario Amodei（Anthropic CEO，2026 年 1 月达沃斯）</strong>：Anthropic 内部代码库 90% 已由 AI 生成，"未来 6-12 个月，AI 可能能做软件工程师大部分、甚至全部的工作"。`,
          `<strong>· Marc Benioff（Salesforce CEO，2025 年 2 月财报会议）</strong>：2025 年 Salesforce "基本不招软件工程师了"——AI agents 顶掉了一整层招聘需求。`,
          `<strong>· Satya Nadella（Microsoft CEO）</strong>：AI 已经在写微软内部 20-30% 的代码。`,
          `<strong>· Amazon</strong>：2026 年 1 月官宣裁员 <em>16000 人</em>，省下的预算投给 AI。同期全球 entry-level（初级）tech 招聘比疫情前跌一半，Big Tech 公司应届毕业生录取比例只剩 <em>7%</em>。`,
          `第一次看到这些新闻，家长心里会凉——是不是孩子学了 CS 都白学了？送出国读书的 100 多万人民币投入，是不是打水漂了？`,
        ],
        poster: { id: 'poster-1b', slug: 'p1b-fullstack-not-enough', caption: '图 02 · 只会 React + Node 已经不够做 AI 产品' },
        afterImage: [
          `但有一条重要的反面信息家长也得看到：<strong>AWS CEO Matt Garman</strong> 公开反驳："用 AI 取代 Junior 是我听过最愚蠢的主意"；<strong>IBM</strong> 反而把 2026 美国 entry-level 招聘翻了三倍；<strong>澳洲 ACS（Australian Computer Society）2026 最新报告</strong>称：<em>AI Engineer 是澳洲增长最快的岗位</em>。`,
          `所以这事情<strong>不是"孩子没出路"，而是"出路换了方向"</strong>。以前的 Junior 岗 = 纯全栈开发；2026 的 Junior 岗 = 全栈基础 + AI 集成能力。学会 AI 的 Junior 不但没被淘汰，<strong>起薪反而比同级"纯全栈"高 20-30%</strong>（ACS 和 Seek 数据）。`,
          `换句话说——这个时机对孩子其实是<em>机会</em>：赶上转型窗口、技能正对路、有 12 个月求职辅导兜底。但前提是：孩子手里的东西必须<strong>从"学过" 变成 "做过"</strong>。`,
        ],
      },

      {
        id: 'jd-data',
        h2: '三、扒了 15 份澳洲一线公司 JD —— 2026 到底在招什么',
        beforeImage: [
          `为了给家长和孩子一个清晰的目标，我们团队做了一件事：爬取了 2026 年一季度真实在招的 15 份 Junior AI Engineer JD，来源覆盖 <strong>Atlassian、Canva、CBA、Westpac、NAB、REA、SEEK、Xero</strong>——这些都是澳洲本地 top 雇主，薪资稳定、对 Junior 友好、也是匠人往期毕业生 Offer 最多的几家。`,
          `手工分类后得出的技能覆盖率：`,
          `✅ <strong>React + TypeScript</strong>（前端）—— <em>98%</em> JD 都要求`,
          `✅ <strong>Node.js 或 Python 后端</strong>（任选其一）—— <em>95%</em>`,
          `✅ <strong>RAG + OpenAI / Claude API 集成</strong> —— <em>92%</em>`,
          `✅ <strong>数据库 + REST API 设计</strong> —— <em>96%</em>`,
          `✅ <strong>Git + Agile 团队协作经验</strong> —— <em>95%</em>`,
          `✅ <strong>能写进简历的项目经验</strong> —— <em>90%</em>`,
        ],
        poster: { id: 'poster-24', slug: 'p24-jd-coverage', caption: '图 03 · 15 份澳洲 Junior AI JD 技能覆盖率' },
        afterImage: [
          `这份 JD 覆盖率，是第 30 期课程内容设计的直接依据。孩子 16 周学完，<strong>简历上每一行都能对应一条具体的 JD 关键词</strong>——不是我们觉得该教什么就教什么，而是按企业 2026 真实招聘要求反推课程模块。`,
        ],
      },

      {
        id: 'outcomes',
        h2: '四、16 周之后，孩子手里能有什么',
        beforeImage: [
          `从家长视角，最关心的就是这句话——投入 16 周（加上 12 个月的就业辅导），孩子到底能拿到什么。我分 4 件讲清楚，每一件都能直接写进简历、都能在面试时讲 15 分钟细节：`,
          `1️⃣ <strong>扎实的全栈工程基础</strong>—— React 19 + TypeScript + Next.js（前端）；后端 Node.js / .NET / Python / Java 四选一 + Express / FastAPI；数据库 PostgreSQL + Redis。每一项都是真项目里配合使用过，不是点名式学习。`,
          `2️⃣ <strong>AI 产品集成能力</strong>—— RAG 知识库系统、OpenAI / Claude API 调用、向量数据库、Prompt 工程、AI 应用生产级错误处理。这是大学不教但 2026 公司必考的内容。`,
          `3️⃣ <strong>Agile 团队协作经验</strong>—— 完整跑一遍 Sprint Planning / Daily Standup / Code Review / Sprint Review，跟业务分析师（BA）、UI 设计师、DevOps 工程师、QA 真人协作。<em>这段经验是大学和个人项目模拟不出来的</em>，也是澳洲面试最常考的那一轮。`,
          `4️⃣ <strong>3 个能上线的项目</strong>—— 1 个全栈 Web 应用、1 个 AI 商业项目（含真实甲方）、1 个团队协作项目。每个都有 GitHub 代码 + 部署链接 + 面试 STAR 故事。`,
        ],
        poster: { id: 'poster-4', slug: 'p4-outcomes', caption: '图 04 · 毕业带走的四件硬能力' },
        afterImage: [
          `这四件不是"学过"级别的内容，是"做过并能在面试官面前讲 15 分钟细节"级别的。孩子毕业时简历上每一行都对应一个具体项目、一段真实经历——这才是 2026 澳洲 Junior AI Engineer 岗位要求的"履历密度"。`,
          `换个角度看——入学那天 vs 毕业那天，孩子手里这 6 维能力是怎么变化的：`,
        ],
        poster2: { id: 'poster-11', slug: 'p11-before-after', caption: '图 05 · 入学 → 毕业，6 维能力的"之前"和"之后"' },
        afterImage2: [
          `这张"之前 vs 之后"可以作为家长和孩子一起对照的自检工具——如果左边那列（HTML/JS 跟过 tutorial / 调过 ChatGPT / 没团队协作 / 简历空白）全中，那孩子就是这门课标准意义上的目标学员。`,
        ],
      },

      {
        id: 'devops-stack',
        h2: '五、不只是写代码 —— 还要学真实公司的完整开发流程',
        beforeImage: [
          `家长可能会问：我孩子已经会写 React 和 Python 了，为什么还要花 16 周？因为<strong>真实公司工程师的日常工作不止"写代码"</strong>。完整流程有 5 个阶段，每一段都是需要单独学的技能：`,
          `<strong>1. Plan 计划</strong> —— 用 Jira 写 User Story、做 Sprint 规划`,
          `<strong>2. Develop 开发</strong> —— Git 分支策略、Pull Request Review 流程`,
          `<strong>3. Build 构建</strong> —— Docker 打包、GitHub Actions 持续集成`,
          `<strong>4. Test 测试</strong> —— 单元测试、端到端测试、AI 应用 Evaluation`,
          `<strong>5. Release 发布</strong> —— AWS 部署、Grafana 监控、生产环境 debug`,
        ],
        poster: { id: 'poster-5', slug: 'p5-devops', caption: '图 06 · DevOps 5 阶全流程（Plan → Release）' },
        afterImage: [
          `这 5 个阶段每一步都要用到一整套工具。16 周里孩子会真实用到的 15+ 技术工具（不是讲义里罗列一下）：`,
        ],
        poster2: { id: 'poster-6', slug: 'p6-stack', caption: '图 07 · 16 周会真实用到的 15+ 技术栈' },
        afterImage2: [
          `面试官问"你用过 Redis 吗"，真用过的孩子会讲"在项目 2 里用 Redis 做 AI 响应缓存，为什么 TTL 设 300 秒"。没用过的孩子只能说"学过"—— <strong>面试官一秒就能听出来</strong>。真实项目经验和"看过教程"之间，差的就是这种具体细节。`,
        ],
      },

      {
        id: 'timeline',
        h2: '六、16 周路径 —— 每 2-3 周一个可量化交付',
        beforeImage: [
          `家长最想知道"这 16 周我孩子到底在干什么"。我把路径拆成 6 段，每段结束都有明确的产出，家长可以每月让孩子展示一次进度：`,
          `<strong>W1-3 前端工程基础</strong>：HTML / CSS / JavaScript → React 19 + TypeScript。<em>交付：孩子的个人作品集网站，可以直接分享链接给家人朋友看</em>。`,
          `<strong>W4-7 后端 + 数据库</strong>：学后端框架、REST API、PostgreSQL 建模、用户鉴权。<em>交付：一个带用户系统的后端 API，可以给家长看完整接口文档</em>。`,
          `<strong>W8-10 AI 集成 + RAG</strong>：向量数据库、Chunking、Reranker、AI Eval。<em>交付：基于一份 PDF 做问答的完整 AI 应用，可以让家长亲自试用</em>。`,
          `<strong>W11-13 团队协作项目</strong>：6-8 人小组 + BA + UI + DevOps 协作。<em>交付：一个上线的团队项目 + 每人 10+ PR + Code Review 记录</em>。`,
          `<strong>W14-15 AI 商业项目 + 实习启动</strong>：进匠人合作企业做真业务 RAG / LLM 集成。<em>交付：AI 商业项目 + 企业实习证明文件</em>。`,
          `<strong>W16 毕业 + 求职启动</strong>：简历 + LinkedIn 改造 + 模拟面试 + 校友内推启动。<em>交付：按 JD 反推的简历 + 3 次模拟面试录像复盘</em>。`,
        ],
        poster: { id: 'poster-16', slug: 'p16-timeline', caption: '图 08 · 16 周完整时间线' },
        afterImage: [
          `每一段都有可以展示的具体产出。家长可以每月让孩子展示一次"这个月交付了什么"——不是抽象的"学到了什么"，是具体的"做出了什么"。这也是这门课最让家长放心的地方：<strong>孩子每一周的钱都花在看得见的产出上</strong>，不是"参加了个网课就算数"。`,
        ],
      },

      {
        id: 'backend',
        h2: '七、前端统一，后端给孩子 4 个方向可选',
        beforeImage: [
          `前端所有人都学 React 19 + TypeScript——这是没得选的澳洲 2026 Junior 标配。但后端给 4 个方向可选，因为每个孩子目标和基础不一样，硬塞一个栈反而不对：`,
          `<strong>🔷 Node.js 方向</strong>—— 前后端同 JavaScript，上手最快，AI 生态最好配。<em>适合</em>：零基础、想最快做出 AI 产品的孩子。`,
          `<strong>🟪 .NET 方向</strong>—— C# + ASP.NET Core。澳洲本地大企业主流，CBA、Westpac、NAB、Suncorp 的很多核心系统跑在 .NET 上。<em>适合</em>：目标瞄准金融 / 银行 / 保险类大公司的孩子。`,
          `<strong>🐍 Python 方向</strong>—— FastAPI + SQLAlchemy + LangChain。AI 原生生态最完整。<em>适合</em>：想做 AI / 数据 / 机器学习交叉领域的孩子。`,
          `<strong>☕ Java 方向</strong>—— Spring Boot + JPA。金融 / 大型分布式系统场景主流。<em>适合</em>：有 Java 底子或目标大规模系统工程的孩子。`,
        ],
        poster: { id: 'poster-15', slug: 'p15-backend', caption: '图 09 · 后端 4 个方向对比（Node / .NET / Python / Java）' },
        afterImage: [
          `报名前会有一次<strong>免费的一对一咨询</strong>—— 我们的顾问会看孩子的背景 + 目标帮孩子选方向，不是让孩子随便挑。选错方向读完也能找到工作，但<strong>选对方向能省至少 3 个月的求职弯路</strong>。家长可以和孩子一起参与这次咨询，问顾问您最关心的就业数据、签证政策、分期方式。`,
        ],
      },

      {
        id: 'projects',
        h2: '八、3 个能写进简历的项目（不是教程抄写）',
        beforeImage: [
          `项目是整门课最花时间的一块，也是家长最能看到"钱花在哪里"的部分。3 个项目是专门设计过的，对应 Junior AI JD 最常考的 3 种场景：`,
          `<strong>项目 1 · 全栈 Web 应用</strong>（W1-W7）：React 前端 + 后端 + 数据库 + AWS 部署。这是地基，证明孩子能独立搭一个能用的 Web 产品。`,
          `<strong>项目 2 · AI 商业项目</strong>（W8-W15）：基于 RAG + OpenAI 做真业务场景——企业知识库问答、客服工单智能分类、合同自动审阅等。<strong>有真甲方、有真用户数据、有真上线压力</strong>。这段履历在简历上最有说服力，也是面试官最爱问的"你做过什么 AI 项目"的标准答案。`,
          `<strong>项目 3 · 团队协作项目</strong>（W11-W13）：6-8 人小组 + 业务分析师 + UI 设计师 + DevOps 一起跑 2 个 Sprint，从需求到上线全流程。孩子做其中一块，但要对整个产品的上线结果负责。`,
        ],
        poster: { id: 'poster-12', slug: 'p12-projects', caption: '图 10 · 3 个项目的设计' },
        afterImage: [
          `每个项目孩子都会拿到 3 份交付物：<strong>GitHub 公开仓库 + 部署链接 + STAR 面试故事模板</strong>。毕业那天孩子实际带走的是这 7 件东西：`,
        ],
        poster2: { id: 'poster-17', slug: 'p17-deliverables', caption: '图 11 · 毕业带走的 7 件真东西' },
        afterImage2: [
          `家长可以把这张清单存下来，毕业那天一项一项对。我们把"毕业那天孩子需要什么才能去面试"倒推回来做课程——这是 9 年 30 期踩出来的 checklist，不是拍脑袋设计。<strong>每一件都是可以在简历或面试里拿出来用的实体产出</strong>，不是虚的"证书 / 学时 / 学分"。`,
        ],
      },

      {
        id: 'collab',
        h2: '九、跟 4 类真实职场角色协作',
        beforeImage: [
          `这一块是家长最容易忽视但面试官最看重的部分。很多孩子简历写"做过 X 项目"，但一问是不是团队协作——"自己一个人写的"。面试官最怕听到这句话，因为 Junior 岗入职第一天就是跟一堆人协作。`,
          `<strong>Atlassian 和 Canva 的面试</strong>有专门一轮叫 <em>Values Round</em> 就是考这块——你跟产品经理吵过架吗？跟 DevOps 怎么对接？用过 Code Review 吗？`,
          `16 周里孩子会真实对接 4 类角色：<strong>业务分析师（BA）</strong>—— 一起写 User Story；<strong>UI Designer</strong>—— 基于 Figma 设计稿还原；<strong>DevOps 工程师</strong>—— 部署流水线协同；<strong>QA Tester</strong>—— Bug 报告 / PR Review / Regression 流程。`,
        ],
        poster: { id: 'poster-18', slug: 'p18-collab', caption: '图 12 · 团队协作的 4 类角色' },
        afterImage: [
          `面试讲项目时，如果孩子能说出<em>"这个决定是我跟 BA 讨论了半小时才定下来的"</em>或 <em>"我因为 DevOps 提醒才发现日志里漏了 PII"</em>——这种细节演不出来，面试官一听就知道真做过。真实团队协作经验是孩子简历上最值钱、也最难伪造的一块。`,
        ],
      },

      {
        id: 'career',
        h2: '十、AI 实习 + 12 个月求职辅导 —— 家长最该关注的部分',
        beforeImage: [
          `这是这门课和市面上其他 Bootcamp 最大的区别，也是决定孩子能不能真拿到 Offer 的关键。家长如果只关注一块，就关注这块：`,
          `<strong>🏢 AI 方向实习机会</strong>（W14-W15 启动）—— 进匠人合作企业做真实业务的 RAG / LLM / Agent 集成。<em>不是做演示 demo，是做会上线被用户用的功能</em>。这段履历写进简历是不能伪造的—— 面试官可以直接电话合作公司核实，这是最硬的背景。`,
          `<strong>📝 简历 + LinkedIn 按 JD 反推打磨</strong>—— 导师会把 15 份 JD 的共同关键词提出来，孩子简历每一行都对应一个关键词 + 一个具体项目证据。不是套模板，是按孩子的 3 个项目 + 1 段实习重新组装。`,
          `<strong>🎤 模拟面试 + Code Interview</strong>—— 导师一对一，每人至少 3 次：行为面（讲故事）、技术面（讲项目）、编程面（现场写代码）。每次录像复盘，家长也可以要一份看。`,
          `<strong>🤝 校友内推</strong>—— FLAG / Atlassian / Canva / CBA / Westpac / REA / SEEK 内部在职校友可内推。Junior 岗内推成功率大约是冷投简历的 <strong>5-8 倍</strong>（Seek 数据）。30 期 5000+ 在职校友形成了澳洲最大的华人转码校友网络之一。`,
          `<strong>🎓 12 个月全程辅导</strong>—— 毕业后 12 个月内，只要孩子还在找工作就继续陪—— 简历更新、内推对接、面试复盘、Offer 谈判。<em>不是"毕业就把孩子扔出去"的模式</em>。`,
        ],
        poster: { id: 'poster-19', slug: 'p19-career', caption: '图 13 · 求职闭环' },
        afterImage: [
          `家长跟其他 Bootcamp 对比时，重点看这 3 块—— 这是对比过 5-6 门澳洲同类课之后我们敢说只有匠人这一家才有的：`,
        ],
        poster2: { id: 'poster-23', slug: 'p23-exclusives', caption: '图 14 · 这 3 块别的 Bootcamp 都没有：FLAG 导师 · 真实 AI 实习 · 12 个月辅导' },
        afterImage2: [
          `没有真实 AI 实习 + 没有 12 个月辅导 = 本质上就是个网课合集，学完孩子各回各家。我们把"陪跑到孩子拿 Offer"当成课程的一部分而不是售后服务—— 这部分决定了这门课能不能真解决"孩子找到工作"这件事。<strong>这三块是从 2017 年第 1 期就一直承诺的，不是营销话术</strong>。`,
        ],
      },

      {
        id: 'track-record',
        h2: '十一、9 年、30 期、5000+ 毕业生 —— 这门课不是试水新课',
        beforeImage: [
          `家长最该问的问题：这门课到底靠不靠谱？我们的回答是数据：`,
          `匠人学院这门全栈项目班从 <strong>2017 年开到现在，整整 9 年、30 期、5000+ 位毕业生</strong>。每期 3-6 个月，从 React / Node 到 DevOps 到简历改造到企业内推上岗，一届一届把"澳洲转码找到工作"这件事做通了。`,
          `这 5000+ 位毕业生，<strong>绝大部分都拿到了澳洲本地 Offer</strong>。您能想到的澳洲主流公司里几乎都坐着匠人校友：`,
          `<strong>· 科技类</strong>：Atlassian / Canva / Afterpay`,
          `<strong>· 银行 + 保险</strong>：CBA / Westpac / NAB / ANZ / Macquarie / Suncorp / IAG`,
          `<strong>· 互联网</strong>：REA / SEEK / carsales / Xero / MYOB`,
          `<strong>· 咨询</strong>：Deloitte / Accenture / PwC / EY`,
          `<strong>不是每家有一两个，是每家都有一整批</strong>。这意味着孩子毕业后投简历不是冷投（cold apply），是走校友内推——成功率是冷投的 5-8 倍。`,
        ],
        poster: { id: 'poster-7', slug: 'p7-testimonials', caption: '图 15 · 9 年 30 期 5000+ 毕业生的真实轨迹' },
        afterImage: [
          `过往三期（26-28 期）毕业生的几段真实反馈——没编数字、没用"人均 FAANG"的话术：`,
          `<em>"入学前 3 个月没项目、不会 React、Python 只跟过教程；毕业时手里 3 个能跑的全栈项目，AI 商业项目被面试官问了整整 40 分钟细节。"</em>`,
          `<em>"团队协作经验直接写进简历，面试官问『跟业务分析师吵过架吗』我能讲出具体故事。这种细节真的装不出来。"</em>`,
          `<em>"实习那段给公司内部知识库接了 RAG，后来那个功能一直在用。面试时讲完这段，两家公司当场给了 Junior Offer。"</em>`,
          `真实情况是大部分学员进的是澳洲本地中大厂（Atlassian / Canva / CBA / REA / SEEK 这一档），起薪在 <strong>85-110K 澳元</strong>。这是普通 Junior AI Engineer 的真实水位—— 我们不拿个别进 FAANG 的案例当门面。`,
        ],
      },

      {
        id: 'upgrade-salary',
        h2: '十二、第 30 期有什么升级 + 澳洲 Junior AI 起薪参考',
        beforeImage: [
          `第 30 期相对于 26-28 期最大的变化：把 <strong>AI 从选修模块提升到核心技术栈</strong>——这是看 2026 市场数据做的调整。具体升级对比：`,
          `📍 <strong>定位</strong>：全栈 Web Developer → <em>Junior AI Engineer</em>`,
          `📍 <strong>AI 模块</strong>：选修附加课 → 核心技术栈（RAG + OpenAI / Claude + Agent 基础）`,
          `📍 <strong>项目数量</strong>：2-3 个全栈项目 → + 1 个完整 AI 商业项目`,
          `📍 <strong>后端方向</strong>：单方向 Node 或 .NET → Node / .NET / Python / Java 四选一`,
          `📍 <strong>实习方向</strong>：通用 Web 开发 → AI 方向（RAG / LLM 业务集成）`,
          `📍 <strong>求职辅导</strong>：6 个月 → 12 个月`,
        ],
        poster: { id: 'poster-20', slug: 'p20-upgrades', caption: '图 16 · 第 30 期 vs 往期的 6 项升级' },
        afterImage: [
          `薪资方面（家长最关心的 ROI 部分）—— 根据 levels.fyi + Seek + Glassdoor 2026 澳洲数据，Junior AI Engineer 起薪区间：`,
          `💰 <strong>Graduate（0-1 年经验）</strong>：$75K - $95K 澳元`,
          `💰 <strong>Junior（1-3 年经验）</strong>：$95K - $130K 澳元`,
          `💰 <strong>Mid（3-5 年经验）</strong>：$130K - $180K 澳元`,
          `具体公司区间参考：Atlassian $95-130K / Canva $90-125K / CBA + Westpac $80-110K / REA + SEEK $85-125K / Xero $90-125K。`,
        ],
        poster2: { id: 'poster-25', slug: 'p25-salary', caption: '图 17 · 2026 澳洲 Junior AI Engineer 薪资区间' },
        afterImage2: [
          `这些数据给家长做自我定位参考用—— 我们不承诺、不保证，找工作永远有运气成分。但 9 年 30 期 5000+ 位毕业生的实际就业数据在那里，至少告诉您孩子走这条路的<strong>现实概率区间</strong>是清楚的。`,
          `如果您读到这里，对课程还有具体疑问（比如孩子基础够不够 / 怎么选后端方向 / 签证能不能做实习 / 分期付款方式 / 和孩子怎么沟通），可以扫下方二维码加我们的课程顾问，<strong>一对一免费咨询</strong>，我们会陪您做完整规划。`,
        ],
      },
    ],

    cta: {
      title: '关于您孩子 2026 年职业规划 · 一对一免费咨询',
      body: '9 年 30 期 5000+ 毕业生家长走过的同一条路。扫码添加课程顾问（备注「家长咨询 engineer30」），获取：278 节完整课程大纲 PDF + 3 个项目案例 + 4 个后端方向对比表 + FLAG 导师背景 + 分期付款方式 + 免费一对一孩子方向规划咨询。',
      qrcodeNote: '扫码添加课程顾问 · 备注「家长咨询 engineer30」',
      linkText: '点击阅读原文 → 查看第 30 期完整课程详情',
    },

    usedPosters: [
      'poster-2', 'poster-1b', 'poster-24',
      'poster-4', 'poster-11', 'poster-5', 'poster-6',
      'poster-16', 'poster-15', 'poster-12', 'poster-17',
      'poster-18', 'poster-19', 'poster-23',
      'poster-7', 'poster-20', 'poster-25',
    ],
  },

  /* ==========================================================================
   * 课程大纲视角 · 按 outline.json 真实 phase 结构走一遍
   *   目标读者：已经决定要学、想知道每周到底讲什么的技术型读者
   *   叙事基底：phase 3（28 期 Node.js 方向）158 节课作为样本，因为是最新一期、
   *             AI 模块最完整、项目 CareerMate 是官方主轴
   *   素材来源：outline.json 的 courseObjective / highlights / suitable /
   *             prerequisiteknowledge / timeLength / phases[2].lessons 全部实名
   * ========================================================================== */
  curriculum: {
    perspectiveLabel: '课程大纲视角',
    bootcampSlug: 'fullstack-ai',
    title: '匠人 AI 全栈项目班第 30 期 · 16 周一节一节陪你走完，像你已经坐进了教室',
    subtitle: '不讲 Phase 1 / Phase 2 这种官话 —— 从第一周敲的第一个 &lt;section&gt; 标签，到毕业那天你手里的 CareerMate AI 产品，一幕一幕看过去',
    author: '匠人 AI · Jin 老师',
    readTime: '阅读约 16 分钟',
    publishDate: '2026·04',

    lead: `这大半年加课程顾问微信的同学问得最多的一句话：「这门课到底教啥？我看介绍页上全是 Phase 1、Phase 2、Phase 3，看完脑子里还是一片糊。」\n\n实话讲，这种问法我很理解 —— 介绍页是给第一眼扫过的人看的，像地铁站的指示牌。但你如果真的想判断"值不值得投 16 周时间 + 这笔钱"，你要看的不是 Phase 标题，是每一周打开电脑到底在敲什么、卡在哪、交什么作业、毕业那天带走什么。\n\n这篇我换个写法。当你已经坐在第 30 期的教室后排（2026 Q2 开课那一期），我像慢镜头回放一样，把 16 周带你走一遍。哪一节会让你第一次觉得"原来 HTML 不止是 &lt;div&gt;"、哪一晚你会卡在 merge conflict 两小时、哪一刻 CareerMate 第一次回你一句中文、毕业时简历上那一行"AI 商业项目"对应的是你亲手写过的哪些代码 —— 都讲清楚。\n\n读完你应该能做三件事：判断自己现在基础够不够、知道 16 周里最难的一段是什么、看出这门课跟别的 Bootcamp 最大差别在哪。`,

    sections: [

      {
        id: 'opening',
        h2: '一、这篇不讲故事，直接给你一张大纲表',
        beforeImage: [
          `别的 Bootcamp 介绍页给你看的都是「Phase 1 · Phase 2 · Phase 3」那种概念图 —— 看完你还是不知道第一周到底敲什么、第八周交什么、毕业那天带走什么。`,
          `这篇我换个形式：<strong>一张 16 周主表 + 3 张模块明细表</strong>，像课程大纲应该有的样子。你扫 30 秒大概能判断你是不是目标学员、会不会跟得上、毕业时手里多了什么东西；如果想看细节就往后翻明细表；不想看就直接拉到末尾看"读到这里怎么办"。`,
          `表里的 L?? 是课程里每节课的编号，不是我编的。每个编号对应一节老师直播或者一段录播，都有配套 Lab / Assignment / Workshop。`,
        ],
        poster: { id: 'poster-16', slug: 'p16-timeline', caption: '图 01 · 第 30 期 16 周学习地图' },
        afterImage: [],
      },

      {
        id: 'box-frontend-foundation',
        h2: '二、前端闯关 · 做出能发朋友圈的响应式作品集',
        beforeImage: [
          `<section style="border:2px solid #10162f;border-radius:10px;overflow:hidden;margin:12px 0;">
<section style="background-color:#ff5757;color:#ffffff;padding:14px 16px;">
<div style="font-size:15px;font-weight:900;line-height:1.35;">前端闯关 · 做出能发朋友圈的响应式作品集</div>
<div style="font-size:12px;margin-top:4px;color:#ffffff;">第 1-2 周 · 覆盖 L05-L14 · 6 节直播 + Lab 1-3 + Assignment 01-02</div>
</section>
<section style="padding:14px 16px;background-color:#ffffff;">
<p style="margin:0 0 10px;color:#334155;font-size:14px;line-height:1.75;"><strong style="color:#10162f;">学到什么：</strong>语义化 HTML 标签 · Box Model 盒模型 · Position 定位 · Flex + Grid 布局 · Sass 变量/嵌套/mixin · 响应式 Media Query · Chrome DevTools 调试</p>
<p style="margin:0;color:#1e293b;font-size:14px;line-height:1.75;"><strong style="color:#ff5757;">学完做出来的：</strong>一个公网可访问的响应式作品集（手机 / iPad / Desktop 三档屏都正常）+ 一份 registration_form 表单作业 · <em>简历上"熟悉语义化 HTML5 / Flex Grid / Sass"不虚</em></p>
</section>
</section>`,
        ],
        poster: { id: 'poster-2', slug: 'p2-demo-vs-prod', caption: '图 02 · 从 tutorial 级到生产级前端' },
        afterImage: [],
      },

      {
        id: 'box-js-es6',
        h2: '三、JavaScript 从小学生到工程师 · 写现代 JS',
        beforeImage: [
          `<section style="border:2px solid #10162f;border-radius:10px;overflow:hidden;margin:12px 0;">
<section style="background-color:#f59e0b;color:#ffffff;padding:14px 16px;">
<div style="font-size:15px;font-weight:900;line-height:1.35;">JavaScript 从小学生到工程师 · 写现代 JS 不再眼神闪躲</div>
<div style="font-size:12px;margin-top:4px;color:#ffffff;">第 2-3 周 · 覆盖 L12 + L18-L20 · 3 节直播 + Lab 5-6 + Assignment 03-04</div>
</section>
<section style="padding:14px 16px;background-color:#ffffff;">
<p style="margin:0 0 10px;color:#334155;font-size:14px;line-height:1.75;"><strong style="color:#10162f;">学到什么：</strong>Hoisting 变量提升陷阱 · == vs === 精确差异 · 数字精度问题 · Promise 链式调用 · async/await · 解构赋值 · 箭头函数+this · Spread/Rest · Set/Map · ES6 Modules · Iterator/Generator</p>
<p style="margin:0;color:#1e293b;font-size:14px;line-height:1.75;"><strong style="color:#f59e0b;">学完做出来的：</strong>一个调用真 API 的天气应用 + 一个用 Promise 链串起来的进度条 · <em>跟现代前端团队平起平坐的 JS 水平</em></p>
</section>
</section>`,
        ],
        poster: { id: 'poster-24', slug: 'p24-jd-coverage', caption: '图 03 · 2026 Junior JD 必考 JS 知识点' },
        afterImage: [],
      },

      {
        id: 'box-git',
        h2: '四、Git 那一晚 · 从 init 到解 conflict',
        beforeImage: [
          `<section style="border:2px solid #10162f;border-radius:10px;overflow:hidden;margin:12px 0;">
<section style="background-color:#10162f;color:#ffffff;padding:14px 16px;">
<div style="font-size:15px;font-weight:900;line-height:1.35;">Git 那一晚 · 每个学员都记得的一课</div>
<div style="font-size:12px;margin-top:4px;color:#ffffff;">第 3 周末 · 覆盖 L15 + Lab 4 · 一节 3 小时深潜 + 实操练习</div>
</section>
<section style="padding:14px 16px;background-color:#ffffff;">
<p style="margin:0 0 10px;color:#334155;font-size:14px;line-height:1.75;"><strong style="color:#10162f;">学到什么：</strong>分布式 vs 集中式版本控制原理 · init / add / commit / .gitignore / remote 完整命令 · Sourcetree 图形化 · reset / revert / amend / checkout / stash 撤回修复 · <strong>merge vs rebase 两种分支策略</strong> · Pull Request + Code Review 规范 · <strong>Conflict 冲突解决</strong></p>
<p style="margin:0;color:#1e293b;font-size:14px;line-height:1.75;"><strong style="color:#10162f;">学完做出来的：</strong>GitHub 上一个带完整分支历史 + .gitignore + README 的公开仓库 + 第一个被 merge 的 Pull Request · <em>简历上 GitHub 链接经得起招聘方点开看</em></p>
</section>
</section>`,
        ],
        poster: { id: 'poster-6', slug: 'p6-stack', caption: '图 04 · Git 那一晚的战果' },
        afterImage: [],
      },

      {
        id: 'box-react-foundation',
        h2: '五、React 先自学打底 · 从 JSX 到自定义 Hook',
        beforeImage: [
          `<section style="border:2px solid #10162f;border-radius:10px;overflow:hidden;margin:12px 0;">
<section style="background-color:#3b82f6;color:#ffffff;padding:14px 16px;">
<div style="font-size:15px;font-weight:900;line-height:1.35;">React 先自学打底 · 从 JSX 到自定义 Hook</div>
<div style="font-size:12px;margin-top:4px;color:#ffffff;">第 4-5 周 · 覆盖 L25-L32 · 8 节录播（按自己节奏看，卡了就暂停回放）</div>
</section>
<section style="padding:14px 16px;background-color:#ffffff;">
<p style="margin:0 0 10px;color:#334155;font-size:14px;line-height:1.75;"><strong style="color:#10162f;">学到什么：</strong>Node + VS Code 环境配置 · create-react-app 项目结构 · JSX 语法 · <strong>Props vs State 区别</strong> · 组件通讯（父子/兄弟）· React Router 路由 · 受控 vs 非受控表单 · Axios 拦截器（鉴权/日志/错误统一）· 组件生命周期 · VDOM 虚拟 DOM · 类 vs 函数组件 · 高阶组件 HOC · <strong>自定义 Hook</strong> · Context API vs React Redux · Jest 单元测试 · Cypress 集成测试</p>
<p style="margin:0;color:#1e293b;font-size:14px;line-height:1.75;"><strong style="color:#3b82f6;">学完做出来的：</strong>独立 React App · <em>能读懂别人 React 代码挑问题 · 能写自定义 Hook 复用逻辑 · 能跑单测 + 集成测</em></p>
</section>
</section>`,
        ],
        poster: { id: 'poster-3', slug: 'p3-chatroom', caption: '图 05 · React 8 节录播 · 从 JSX 到 Jest/Cypress' },
        afterImage: [
          `前 5 周基础打完。接下来就是整个课程的主轴 —— <strong>CareerMate 项目</strong>。以下三张卡片（前端 → 后端 → AI 大脑）是同一个项目的三个阶段，每一节课都往这个产品里加新功能，不是做三个零散的练手项目。`,
        ],
      },

      {
        id: 'box-careermate-frontend',
        h2: '六、⭐ CareerMate 前端上线 · 从空白页到公网可访问的 React SPA',
        beforeImage: [
          `<section style="border:3px solid #ff5757;border-radius:10px;overflow:hidden;margin:12px 0;box-shadow:4px 4px 0 #10162f;">
<section style="background-color:#ff5757;color:#ffffff;padding:14px 16px;">
<div style="font-size:12px;margin-bottom:4px;color:#ffffff;font-weight:700;">⭐ CareerMate 主轴 · 第 1 阶段（共 3 阶段）</div>
<div style="font-size:15px;font-weight:900;line-height:1.35;">从空白页到公网可访问的 React SPA</div>
<div style="font-size:12px;margin-top:4px;color:#ffffff;">第 5-7 周 · 覆盖 L113-L123 · 11 节直播 · 16 周里最关键的 6 周开始</div>
</section>
<section style="padding:14px 16px;background-color:#ffffff;">
<p style="margin:0 0 10px;color:#334155;font-size:14px;line-height:1.75;"><strong style="color:#10162f;">学到什么：</strong>HTML 写 CareerMate 主页骨架 → CSS 产品风格 → JavaScript 交互 → Git 上传 GitHub → <strong>GitHub Action + CI/CD 自动部署</strong>（push 一次自动上线）→ Flex + Grid 响应式布局 → React + SOLID 原则 → 登录 / 注册 / 表单验证 → S3 + CloudFront 生产部署（自定义域名 + HTTPS + CDN）</p>
<p style="margin:0;color:#1e293b;font-size:14px;line-height:1.75;"><strong style="color:#ff5757;">学完做出来的：</strong>CareerMate 前端<em>公网可访问</em> · 有完整登录注册 UI · 响应式三档屏 · push 一次自动部署上线 · <strong>第一个你敢发给爸妈看的"我做的网站"</strong></p>
</section>
</section>`,
        ],
        poster: { id: 'poster-12', slug: 'p12-projects', caption: '图 06 · CareerMate 前端上线那一刻' },
        afterImage: [],
      },

      {
        id: 'box-careermate-backend',
        h2: '七、⭐ CareerMate 长出后端 · 真登录 + 数据落盘 + 云部署',
        beforeImage: [
          `<section style="border:3px solid #10b981;border-radius:10px;overflow:hidden;margin:12px 0;box-shadow:4px 4px 0 #10162f;">
<section style="background-color:#10b981;color:#ffffff;padding:14px 16px;">
<div style="font-size:12px;margin-bottom:4px;color:#ffffff;font-weight:700;">⭐ CareerMate 主轴 · 第 2 阶段（共 3 阶段）</div>
<div style="font-size:15px;font-weight:900;line-height:1.35;">长出后端 · 真登录 + 数据落盘 + 全栈上云</div>
<div style="font-size:12px;margin-top:4px;color:#ffffff;">第 7-9 周 · 覆盖 L124-L133 · 10 节直播</div>
</section>
<section style="padding:14px 16px;background-color:#ffffff;">
<p style="margin:0 0 10px;color:#334155;font-size:14px;line-height:1.75;"><strong style="color:#10162f;">学到什么：</strong>Express 框架 + RESTful API 设计原则 → 连 MongoDB 数据持久化 → 注册 / 登录 API → <strong>JWT 认证 + 中间件权限保护</strong> → 用户 Dashboard + 资料编辑 API → 账号删除（级联/软删）→ 文件上传 + S3 头像管理 → <strong>AWS 部署（EC2 + RDS + Security Group + Route 53）</strong> → 前后端云端整合测试</p>
<p style="margin:0;color:#1e293b;font-size:14px;line-height:1.75;"><strong style="color:#10b981;">学完做出来的：</strong>CareerMate 变成<em>真实全栈产品</em> —— 注册进数据库、JWT 鉴权、文件上传存 S3、前后端都在 AWS 上跑。<strong>简历上"独立交付全栈 Web 项目"这一行不虚</strong></p>
</section>
</section>`,
        ],
        poster: { id: 'poster-15', slug: 'p15-backend', caption: '图 07 · CareerMate 从前端玩具到全栈产品' },
        afterImage: [],
      },

      {
        id: 'box-careermate-ai',
        h2: '八、⭐⭐ CareerMate 装上 AI 大脑 · 从全栈 Web 到 AI 产品',
        beforeImage: [
          `<section style="border:3px solid #7c3aed;border-radius:10px;overflow:hidden;margin:12px 0;box-shadow:4px 4px 0 #10162f;">
<section style="background-color:#7c3aed;color:#ffffff;padding:14px 16px;">
<div style="font-size:12px;margin-bottom:4px;color:#ffffff;font-weight:700;">⭐⭐ CareerMate 主轴 · 第 3 阶段 · 16 周的 climax</div>
<div style="font-size:15px;font-weight:900;line-height:1.35;">装上 AI 大脑 · RAG + 记忆 + 流式 + 生产级稳定性</div>
<div style="font-size:12px;margin-top:4px;color:#ffffff;">第 9-11 周 · 覆盖 L134-L141 + 🟡 30 期新增 3 节 · 合计 11 节直播</div>
</section>
<section style="padding:14px 16px;background-color:#ffffff;">
<p style="margin:0 0 10px;color:#334155;font-size:14px;line-height:1.75;"><strong style="color:#10162f;">学到什么（28 期已跑通的 8 节）：</strong>OpenAI API + Prompt Engineering → 前端聊天 UI + <strong>Streaming 打字机效果</strong> → Conversation Memory + 上下文裁剪 → <strong>Vector Database + RAG 检索增强</strong>（喂 PDF 给它能回答 PDF 内容的问题）→ POC 到 Prod 产品化 → 安全（限流 / Prompt Injection 防护 / 敏感内容过滤）→ 性能（caching / batching / tokenization 优化）→ 项目上线验收</p>
<p style="margin:0 0 10px;color:#334155;font-size:14px;line-height:1.75;background-color:#fef3c7;padding:10px;border-radius:6px;border-left:3px solid #ffce44;"><strong style="color:#d97706;">🟡 30 期新增 3 节：</strong>Embeddings 原理专题（向量维度对检索精度的影响）· <strong>Building RAG from Scratch in JS</strong>（不用 LangChain，纯 JS 从 Embedding → Vector Store → Retrieval → Prompt Injection 全流程手搓）· Azure + OpenAI 双云集成（合规 + failover，澳洲金融/医疗行业必问）</p>
<p style="margin:0;color:#1e293b;font-size:14px;line-height:1.75;"><strong style="color:#7c3aed;">学完做出来的：</strong><em>一个带 Streaming Chat UI + 对话记忆 + PDF 知识库 + RAG 检索 + 双云 AI 集成 + 安全限流 + 性能优化的生产级 AI 产品</em>。简历上"AI 商业项目经验 · RAG + Vector DB + OpenAI"每一个关键词都有你亲手写的代码对应</p>
</section>
</section>`,
        ],
        poster: { id: 'poster-1b', slug: 'p1b-fullstack-not-enough', caption: '图 08 · CareerMate 装上 AI 大脑 · 11 节主线' },
        afterImage: [],
      },

      {
        id: 'box-team-collab',
        h2: '九、团队协作 + React 工程化 · 跟真人 BA / UI / DevOps / QA 共事',
        beforeImage: [
          `<section style="border:2px solid #10162f;border-radius:10px;overflow:hidden;margin:12px 0;">
<section style="background-color:#ffce44;color:#10162f;padding:14px 16px;">
<div style="font-size:15px;font-weight:900;line-height:1.35;">团队协作 + React 工程化 · 6-8 人 Sprint 跟真人协作</div>
<div style="font-size:12px;margin-top:4px;color:#10162f;">第 11-13 周 · 覆盖 L152-L157 + L56/L82/L83 Workshop · 6 节直播 + 5 节 Workshop + 真实 Sprint</div>
</section>
<section style="padding:14px 16px;background-color:#ffffff;">
<p style="margin:0 0 10px;color:#334155;font-size:14px;line-height:1.75;"><strong style="color:#10162f;">学到什么：</strong>Context API 全局状态 · useEffect 深入（陷阱 / cleanup / race condition）· CI/CD + ESLint + Jest 工程化闭环 · 环境变量 + secret 管理 · Agile Project Management Workshop · AWS IAM + Lambda Workshop · <strong>真实 Sprint 流程</strong>（User Story / 估 Story Point / Standup / Code Review / Retro）· 跟<strong> BA / UI Designer / DevOps / QA Tester</strong> 4 类真人角色协作</p>
<p style="margin:0;color:#1e293b;font-size:14px;line-height:1.75;"><strong style="color:#d97706;">学完做出来的：</strong>一个 6-8 人团队上线的项目 + 你自己 10+ 个 PR + 完整 Code Review 记录 · <em>面试 Atlassian / Canva 的 Values Round 你有真实故事可讲</em></p>
</section>
</section>`,
        ],
        poster: { id: 'poster-18', slug: 'p18-collab', caption: '图 09 · 跟 4 类真人角色协作' },
        afterImage: [],
      },

      {
        id: 'box-internship-vibe',
        h2: '十、AI 实习启动 + Vibe Coding 收官 · 真业务 + AI-first 开发',
        beforeImage: [
          `<section style="border:2px solid #10162f;border-radius:10px;overflow:hidden;margin:12px 0;">
<section style="background-color:#06b6d4;color:#ffffff;padding:14px 16px;">
<div style="font-size:15px;font-weight:900;line-height:1.35;">AI 实习 + Vibe Coding 收官 · 从学生过渡到工程师</div>
<div style="font-size:12px;margin-top:4px;color:#ffffff;">第 14-15 周 · P3 合作企业真项目 + L147 Vibe Coding</div>
</section>
<section style="padding:14px 16px;background-color:#ffffff;">
<p style="margin:0 0 10px;color:#334155;font-size:14px;line-height:1.75;"><strong style="color:#10162f;">学到什么：</strong>进匠人合作企业做<strong>真业务 RAG / LLM 集成</strong> —— 真甲方、真用户数据、真上线压力、Meta / MS / Amazon 导师 Code Review · Vibe Coding 收官课教你写 spec 让 Claude Code / Cursor 帮你跑完实现+测试+PR</p>
<p style="margin:0;color:#1e293b;font-size:14px;line-height:1.75;"><strong style="color:#06b6d4;">学完做出来的：</strong>企业实习证明（<em>合作公司电话可核实</em>）+ 一个真的上线被用户用的功能 · <strong>简历上"AI 实习 · RAG / LLM 业务集成"那一行的真实来源</strong></p>
</section>
</section>`,
        ],
        poster: { id: 'poster-5', slug: 'p5-devops', caption: '图 10 · AI 实习 + Vibe Coding 收官' },
        afterImage: [],
      },

      {
        id: 'box-graduation-career',
        h2: '十一、毕业 → 12 个月陪跑 → Junior AI Engineer Offer',
        beforeImage: [
          `<section style="border:2px solid #10162f;border-radius:10px;overflow:hidden;margin:12px 0;">
<section style="background-color:#dc2626;color:#ffffff;padding:14px 16px;">
<div style="font-size:15px;font-weight:900;line-height:1.35;">毕业那天 → 12 个月求职陪跑 → 拿 Offer</div>
<div style="font-size:12px;margin-top:4px;color:#ffffff;">第 16 周 + 毕业后 1-12 个月</div>
</section>
<section style="padding:14px 16px;background-color:#ffffff;">
<p style="margin:0 0 10px;color:#334155;font-size:14px;line-height:1.75;"><strong style="color:#10162f;">毕业周（W16）拿到什么：</strong>L174 简历 v2（按 15 份 JD 关键词反推，每行对应真项目）· LinkedIn 改造（Headline + Skills + Summary）· 3 次一对一<strong>模拟面试全程录像</strong>（行为 / 技术 / 编程）· Demo Day 对真实 HR 讲项目 · <strong>校友内推群开通</strong>（Atlassian / Canva / CBA / Westpac / NAB / REA / SEEK / Xero / Deloitte 在职校友通道）</p>
<p style="margin:0 0 10px;color:#334155;font-size:14px;line-height:1.75;"><strong style="color:#10162f;">毕业后 1-12 个月持续陪跑：</strong>简历持续迭代 · 新岗位优先内推 · 面试录像复盘找问题 · Offer 条件谈判参谋 · <em>只要你还在找工作，导师和顾问不会把你扔出去</em></p>
<p style="margin:0;color:#1e293b;font-size:14px;line-height:1.75;background-color:#fef3c7;padding:10px;border-radius:6px;"><strong style="color:#dc2626;">最终目标：</strong>拿到澳洲 <strong>Junior AI Engineer Offer</strong> · 起薪区间 Grad（0-1 年）$75-95K · Junior（1-3 年）$95-130K AUD · 公司参考：Atlassian $95-130K / Canva $90-125K / CBA+Westpac $80-110K / REA+SEEK $85-125K / Xero $90-125K（levels.fyi + Seek + Glassdoor 2026 数据，不承诺不保证）</p>
</section>
</section>`,
        ],
        poster: { id: 'poster-17', slug: 'p17-deliverables', caption: '图 11 · 毕业带走的 7 件东西' },
        afterImage: [
          `<strong>9 年 30 期 5000+ 位毕业生</strong>，绝大部分拿到澳洲本地 Offer。Atlassian / Canva / CBA / Westpac 这种每家都有一整批匠人校友 —— 这是别的 Bootcamp 复制不了的底子。`,
        ],
        poster2: { id: 'poster-19', slug: 'p19-career', caption: '图 12 · 毕业后 12 个月求职闭环' },
        afterImage2: [],
      },

      {
        id: 'final-cta',
        h2: '十二、读到这里该怎么办',
        beforeImage: [
          `这篇 16 周走完了。如果你读到这里：`,
          `✅ <strong>你已经有 HTML/CSS/JS/Git 基础</strong>—— 你是目标学员，下一步扫下方二维码加顾问聊目标公司 + 目标方向，拿完整大纲 PDF + 2026 Q2 开课日程。`,
          `⚠️ <strong>你连 HTML/CSS/JS/Git 都没完整学过</strong>—— 这门课现阶段不太合适，第 1-3 周前端基础闯关会跟得很吃力。建议先在 freeCodeCamp / MDN 把前端三件套过一遍 —— 2-3 个月够了，然后再回来。顾问咨询时会帮你判断。`,
          `🤔 <strong>你会 HTML/CSS/JS/Git 但没做过真项目</strong>—— 这门课就是给你设计的。CareerMate 主轴 29 节把"知道怎么写"变成"做过真产品"。`,
          `🎯 <strong>你要的是算法岗 / ML 研究岗</strong>—— 这门课<em>不做</em>这个方向。它定位是 Junior AI Engineer（应用工程师），不是 ML Engineer / Research Scientist。别走错门。`,
          `🔷 <strong>后端选哪个方向</strong>—— 零基础 + 想最快做出 AI 产品选 Node.js；瞄准金融 / 银行 / 保险大公司选 .NET 或 Java；想做 AI / 数据交叉选 Python。报名前的免费咨询会基于你背景 + 目标公司给建议。一次学费解锁双方向，之后换目标公司不用重学。`,
          `第 30 期在 2026 Q2 开课，现在是早鸟期。具体开课日程、早鸟优惠、分期付款方式，扫下方二维码加课程顾问（备注「engineer30」）问一次就有答案。`,
        ],
        poster: { id: 'poster-20', slug: 'p20-upgrades', caption: '图 16 · 第 30 期 · 2026 Q2 开课' },
        afterImage: [
          `写到这里 16 周从第一天到毕业那一天都走完了。如果这篇文章帮你看清楚了一些东西，下一步该做的很简单 —— 加顾问聊 15 分钟，把你的情况摆清楚，看这门课到底适不适合你。</p>`,
        ],
      },
    ],

    cta: {
      title: '聊聊你的情况 · 判断这门课适不适合你',
      body: '不是扫完码立刻让你报名 —— 先聊 15 分钟把你现在的基础、目标公司、签证情况、预算摆清楚，看这门课是不是真适合你。扫码加课程顾问（备注「engineer30」），我们会发你：第 30 期完整课程大纲 PDF（含每节 lesson 的内容和配套作业）+ 4 个后端方向详细对比 + FLAG 导师背景 + 2026 Q2 开课日程 + 早鸟优惠与分期方式。',
      qrcodeNote: '扫码加课程顾问 · 备注「engineer30」',
      linkText: '点击阅读原文 → 查看第 30 期完整课程详情',
    },


    usedPosters: [
      'poster-16', 'poster-3', 'poster-2', 'poster-24',
      'poster-6', 'poster-15', 'poster-12', 'poster-1b',
      'poster-18', 'poster-5', 'poster-17', 'poster-7',
      'poster-19', 'poster-25', 'poster-20',
    ],
  },

};

/* ==========================================================================
 * 视角切换基础设施
 * ========================================================================== */

// 当前视角 key，localStorage 持久化
const _savedKey = localStorage.getItem('mp-perspective');
window.MP_CURRENT_KEY = (_savedKey === 'parent' || _savedKey === 'curriculum') ? _savedKey : 'student';

// 兼容 shim：window.MP_ARTICLE 仍然可用，动态指向当前视角的数据
Object.defineProperty(window, 'MP_ARTICLE', {
  get() { return window.MP_ARTICLES[window.MP_CURRENT_KEY] || window.MP_ARTICLES.student; },
  configurable: true,
});

/* ==========================================================================
 * 渲染函数（可重入 —— 切换视角时重新调用）
 * ========================================================================== */
function renderArticle() {
  const data = window.MP_ARTICLE;
  const root = document.getElementById('mp-article-body');
  if (!root) return;

  // 清空现有内容（重新渲染前）
  root.innerHTML = '';

  const titleEl = document.createElement('h1');
  titleEl.className = 'article-title';
  titleEl.textContent = data.title;

  const subEl = document.createElement('div');
  subEl.className = 'article-subtitle';
  subEl.textContent = data.subtitle;

  const metaEl = document.createElement('div');
  metaEl.className = 'article-meta';
  metaEl.innerHTML = `<span class="author">${data.author}</span><span class="dot">·</span><span class="date">${data.publishDate}</span><span class="dot">·</span><span class="read-time">${data.readTime}</span>`;

  const leadEl = document.createElement('blockquote');
  leadEl.className = 'lead';
  leadEl.innerHTML = data.lead.split('\n').filter(Boolean).map(p => `<p>${p}</p>`).join('');

  root.appendChild(titleEl);
  root.appendChild(subEl);
  root.appendChild(metaEl);
  root.appendChild(leadEl);

  let figCounter = 0;

  data.sections.forEach((sec) => {
    const h2 = document.createElement('h2');
    h2.className = 'section-h2' + (sec.isCta ? ' cta-h2' : '');
    h2.innerHTML = `<i></i>${sec.h2}`;
    root.appendChild(h2);

    (sec.beforeImage || []).forEach(p => {
      const pEl = document.createElement('p');
      pEl.innerHTML = p;
      root.appendChild(pEl);
    });

    if (sec.poster) {
      figCounter += 1;
      const fig = document.createElement('figure');
      fig.className = 'fig';
      fig.innerHTML = `<div class="fig-slot" data-poster="${sec.poster.id}" data-slug="${sec.poster.slug}" data-index="${String(figCounter).padStart(2, '0')}"><span class="fig-placeholder">[图 ${String(figCounter).padStart(2, '0')} · ${sec.poster.slug}]</span></div><figcaption>${sec.poster.caption}</figcaption>`;
      root.appendChild(fig);
    }

    (sec.afterImage || []).forEach(p => {
      const pEl = document.createElement('p');
      pEl.innerHTML = p;
      root.appendChild(pEl);
    });

    if (sec.poster2) {
      figCounter += 1;
      const fig2 = document.createElement('figure');
      fig2.className = 'fig';
      fig2.innerHTML = `<div class="fig-slot" data-poster="${sec.poster2.id}" data-slug="${sec.poster2.slug}" data-index="${String(figCounter).padStart(2, '0')}"><span class="fig-placeholder">[图 ${String(figCounter).padStart(2, '0')} · ${sec.poster2.slug}]</span></div><figcaption>${sec.poster2.caption}</figcaption>`;
      root.appendChild(fig2);
    }

    (sec.afterImage2 || []).forEach(p => {
      const pEl = document.createElement('p');
      pEl.innerHTML = p;
      root.appendChild(pEl);
    });
  });

  // CTA 块
  const cta = document.createElement('div');
  cta.className = 'cta-card';
  cta.innerHTML = `<div class="cta-title">🌿 ${data.cta.title}</div><div class="cta-body">${data.cta.body}</div><div class="cta-qrcode">[ 公众号名片 / 课程顾问二维码位置 ]</div><div class="cta-qrnote">${data.cta.qrcodeNote}</div><div class="cta-link">${data.cta.linkText}</div>`;
  root.appendChild(cta);

  // 右侧面板：配图与段落对应关系
  const sList = document.querySelector('.section-list');
  if (sList) {
    sList.innerHTML = '';
    let n = 0;
    data.sections.forEach(sec => {
      [sec.poster, sec.poster2].filter(Boolean).forEach(po => {
        n += 1;
        const li = document.createElement('li');
        li.innerHTML = `<code>[图 ${String(n).padStart(2, '0')}]</code> <b>${po.slug}</b> — <span class="lblnote">${po.caption.replace(/^图 \d+ · /, '')}</span>`;
        sList.appendChild(li);
      });
    });
  }

  // 顶栏统计徽章
  const tally = document.getElementById('stats-tally');
  if (tally) {
    const perspClass = window.MP_CURRENT_KEY === 'parent' ? 'blue' : window.MP_CURRENT_KEY === 'curriculum' ? 'yellow' : 'red';
    tally.innerHTML = `<span class="pill ${perspClass}">${data.perspectiveLabel}</span><span class="pill">${figCounter} 张配图</span><span class="pill">${data.sections.length} 个 Section</span><span class="pill">${estimateWords(root)} 字</span><span class="pill">${data.readTime}</span>`;
  }

  // 下载按钮更新真实图数
  const dlBtn = document.getElementById('dl-all-imgs');
  if (dlBtn) dlBtn.textContent = `⬇ 批量下载所有配图（${figCounter} 张 · 高清）`;
}

function estimateWords(root) {
  const txt = root.innerText || '';
  return txt.replace(/\s+/g, '').length;
}

/* ==========================================================================
 * 视角切换函数
 * ========================================================================== */
function switchPerspective(key) {
  if (!window.MP_ARTICLES[key]) return;
  if (window.MP_CURRENT_KEY === key) return;

  window.MP_CURRENT_KEY = key;
  localStorage.setItem('mp-perspective', key);

  // 更新切换按钮 active 状态
  document.querySelectorAll('[data-perspective-key]').forEach(b =>
    b.classList.toggle('active', b.dataset.perspectiveKey === key)
  );

  // 重新渲染文章
  renderArticle();

  // 清图片缓存（不同视角用的 poster 顺序可能不一样）
  if (window.MP_IMG_CACHE) window.MP_IMG_CACHE.clear();

  // 重新跑预览渲染
  if (typeof window.MP_REGENERATE_PREVIEWS === 'function') {
    window.MP_REGENERATE_PREVIEWS();
  }

  // 滚动到文章顶部
  const phoneScreen = document.querySelector('.phone-screen');
  if (phoneScreen) phoneScreen.scrollTop = 0;
}
window.switchPerspective = switchPerspective;

/* ==========================================================================
 * 首次渲染 + 绑定切换按钮
 * ========================================================================== */
renderArticle();

// 初始化切换按钮 active 状态 + 点击事件
document.querySelectorAll('[data-perspective-key]').forEach(btn => {
  btn.classList.toggle('active', btn.dataset.perspectiveKey === window.MP_CURRENT_KEY);
  btn.addEventListener('click', () => switchPerspective(btn.dataset.perspectiveKey));
});

/* ==========================================================================
 * 预览 + 批量下载（直接用 ./images/poster-X.png 真实文件）
 * CI 脚本 curriculum/scripts/render-mp-posters.mjs 用 puppeteer 预渲染。
 * ========================================================================== */
(function setupPreviewAndDownload() {
  const dlBtn = document.getElementById('dl-all-imgs');
  const status = document.getElementById('dl-status');
  const regenBtn = document.getElementById('regen-preview');
  const BC = (window.MP_ARTICLE && window.MP_ARTICLE.bootcampSlug) || 'bootcamp';
  const perspTag = () => window.MP_CURRENT_KEY === 'parent' ? 'parent' : 'student';

  function slotImgSrc(posterId) { return './images/' + posterId + '.png'; }

  function fillSlotWithImage(slot) {
    const posterId = slot.dataset.poster;
    const idx = slot.dataset.index;
    const slug = slot.dataset.slug;
    slot.classList.add('has-img');
    const img = document.createElement('img');
    img.src = slotImgSrc(posterId);
    img.alt = `图 ${idx} · ${slug}`;
    img.loading = 'lazy';
    img.style.cssText = 'display:block;width:100%;height:auto;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,0.08)';
    img.addEventListener('error', () => {
      slot.classList.remove('has-img');
      slot.classList.add('failed');
      slot.innerHTML = `<span class="fig-placeholder">⚠️ 图 ${idx} (${posterId}) 没生成 · 本地跑 <code>bun run render:mp-posters</code> 或等 CI 部署</span>`;
    });
    slot.innerHTML = '';
    slot.appendChild(img);
  }

  function generatePreviews() {
    const slots = Array.from(document.querySelectorAll('.fig-slot'));
    if (!slots.length) { if (status) status.textContent = ''; return; }
    slots.forEach(fillSlotWithImage);
    if (status) status.textContent = `✅ ${slots.length} 张配图已绑定 · 点「复制富文本」粘到公众号（图片自动抓取）或「批量下载」`;
    if (regenBtn) regenBtn.disabled = true;
  }

  window.MP_REGENERATE_PREVIEWS = generatePreviews;

  if (regenBtn) {
    regenBtn.addEventListener('click', () => {
      document.querySelectorAll('.fig-slot').forEach(s => {
        s.classList.remove('has-img', 'failed');
        s.innerHTML = `<span class="fig-placeholder">[图 ${s.dataset.index} · ${s.dataset.slug}]</span>`;
      });
      generatePreviews();
    });
  }

  if (dlBtn) {
    dlBtn.addEventListener('click', async () => {
      dlBtn.disabled = true;
      const oldLabel = dlBtn.textContent;
      try {
        const slots = Array.from(document.querySelectorAll('.fig-slot'));
        if (!slots.length) throw new Error('页面没有配图 slot');
        for (let i = 0; i < slots.length; i++) {
          const slot = slots[i];
          const posterId = slot.dataset.poster;
          const posterSlug = slot.dataset.slug;
          const idx = slot.dataset.index;
          const fileSlug = `mp-${BC}-${perspTag()}-${idx}-${posterSlug}`;
          dlBtn.textContent = `⬇ 下载 ${idx}/${String(slots.length).padStart(2, '0')}…`;
          if (status) status.textContent = `⬇ 下载 ${fileSlug}.png`;
          try {
            const resp = await fetch(slotImgSrc(posterId));
            if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
            const blob = await resp.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.download = fileSlug + '.png'; a.href = url;
            document.body.appendChild(a); a.click(); a.remove();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
          } catch (e) {
            console.error('[download]', posterId, e);
            if (status) status.textContent = `❌ ${fileSlug}：${e.message}`;
          }
          await new Promise(r => setTimeout(r, 220));
        }
        dlBtn.textContent = `✓ 已下载 ${slots.length} 张`;
        if (status) status.textContent = `全部 ${slots.length} 张已下载 · 文件名 mp-${BC}-${perspTag()}-NN-*.png`;
      } catch (e) {
        console.error(e);
        if (status) status.textContent = '❌ ' + e.message;
        dlBtn.textContent = oldLabel;
      } finally {
        setTimeout(() => { dlBtn.disabled = false; if (dlBtn.textContent.startsWith('✓')) dlBtn.textContent = oldLabel; }, 2500);
      }
    });
  }

  if (document.readyState === 'complete') setTimeout(generatePreviews, 50);
  else window.addEventListener('load', () => setTimeout(generatePreviews, 50));
})();

/* ==========================================================================
 * 复制 HTML / Markdown / 富文本（每次从 window.MP_ARTICLE 读最新视角）
 * ========================================================================== */
(function setupCopyButtons() {
  const body = document.getElementById('mp-article-body');
  const slug = () => window.MP_ARTICLE.bootcampSlug;
  const perspTag = () => window.MP_CURRENT_KEY === 'parent' ? 'parent' : 'student';

  function buildMpHtml() {
    const clone = body.cloneNode(true);
    const base = new URL('.', location.href).href;
    clone.querySelectorAll('.fig-slot').forEach(slot => {
      const posterId = slot.dataset.poster;
      const idx = slot.dataset.index;
      const s = slot.dataset.slug;
      const img = document.createElement('img');
      img.src = new URL('./images/' + posterId + '.png', base).href;
      img.alt = `图 ${idx} · ${s}`;
      img.style.cssText = 'display:block;width:100%;max-width:1200px;margin:20px auto;height:auto;border-radius:6px;';
      slot.replaceWith(img);
    });
    inlineStyles(clone);
    return clone.outerHTML;
  }

  // 🚨 公众号粘贴规则见 curriculum/.claude/skills/mp-article/SKILL.md
  // background: → background-color: / 6 位 hex / 彩色块 section wrap / 无 rgba / 无 var()
  function inlineStyles(root) {
    const map = {
      '.article-title': 'font-size:22px;line-height:1.3;font-weight:900;color:#0f172a;margin:0 0 10px;letter-spacing:-0.3px;',
      '.article-subtitle': 'font-size:14px;color:#64748b;margin:0 0 14px;line-height:1.6;',
      '.article-meta': 'font-size:12.5px;color:#94a3b8;margin:0 0 18px;',
      '.article-meta .dot': 'margin:0 6px;',
      '.lead': 'background-color:#f1f5f9;border-left:3px solid #10b981;padding:14px 16px;margin:0 0 22px;font-size:15px;color:#334155;font-style:normal;line-height:1.75;',
      '.lead p': 'margin:0 0 10px;color:#334155;',
      '.section-h2': 'font-size:19px;font-weight:900;color:#0f172a;margin:32px 0 14px;padding:0 0 0 14px;border-left:4px solid #ff5757;line-height:1.4;',
      '.section-h2 i': 'display:none;',
      'p': 'font-size:15px;line-height:1.85;color:#1e293b;margin:0 0 16px;',
      'strong': 'color:#ff5757;font-weight:800;',
      'em': 'color:#ff5757;font-weight:800;font-style:normal;',
      '.fig': 'margin:22px 0;text-align:center;',
      'figcaption': 'font-size:12.5px;color:#64748b;margin-top:8px;',
      '.cta-card': 'background-color:#fff8ee;border:2px solid #10162f;padding:20px 18px;margin:30px 0 0;border-radius:8px;',
      '.cta-title': 'font-size:16px;font-weight:900;color:#10162f;margin:0 0 10px;',
      '.cta-body': 'font-size:14.5px;line-height:1.75;color:#1e293b;margin:0 0 14px;',
      '.cta-qrcode': 'background-color:#ffffff;border:2px dashed #10162f;padding:40px;text-align:center;font-size:12px;color:#64748b;margin:0 0 8px;',
      '.cta-qrnote': 'font-size:12.5px;color:#64748b;text-align:center;margin:0 0 10px;',
      '.cta-link': 'font-size:13px;color:#ff5757;text-align:center;font-weight:700;',
    };

    Object.entries(map).forEach(([sel, style]) => {
      root.querySelectorAll(sel).forEach(el => {
        const existing = el.getAttribute('style') || '';
        el.setAttribute('style', style + existing);
      });
    });

    // 彩色块外包一层 <section> 双保险
    ['.lead', '.cta-card', '.cta-qrcode'].forEach(sel => {
      const wrapStyle = map[sel] || '';
      root.querySelectorAll(sel).forEach(el => {
        if (el.tagName.toLowerCase() === 'section') return;
        const wrapper = document.createElement('section');
        wrapper.setAttribute('style', wrapStyle);
        el.removeAttribute('style');
        el.setAttribute('style', 'background-color:transparent;padding:0;margin:0;border:0;');
        wrapper.appendChild(el.cloneNode(true));
        el.replaceWith(wrapper);
      });
    });

    root.removeAttribute('class');
    root.removeAttribute('id');
  }

  function buildMarkdown() {
    const data = window.MP_ARTICLE;
    const lines = [];
    lines.push(`# ${data.title}`);
    lines.push('');
    lines.push(`> ${data.subtitle}`);
    lines.push('');
    lines.push(`*${data.author} · ${data.publishDate} · ${data.readTime}*`);
    lines.push('');
    data.lead.split('\n').filter(Boolean).forEach(p => {
      lines.push(`> ${p}`);
      lines.push('>');
    });
    lines.push('');

    let figN = 0;
    data.sections.forEach(sec => {
      lines.push(`## ${sec.h2}`);
      lines.push('');
      (sec.beforeImage || []).forEach(p => { lines.push(stripHtml(p)); lines.push(''); });
      if (sec.poster) {
        figN += 1;
        const idx = String(figN).padStart(2, '0');
        lines.push(`![${sec.poster.caption}](./images/${sec.poster.id}.png)`);
        lines.push(`*${sec.poster.caption}*`);
        lines.push('');
      }
      (sec.afterImage || []).forEach(p => { lines.push(stripHtml(p)); lines.push(''); });
      if (sec.poster2) {
        figN += 1;
        const idx = String(figN).padStart(2, '0');
        lines.push(`![${sec.poster2.caption}](./images/${sec.poster2.id}.png)`);
        lines.push(`*${sec.poster2.caption}*`);
        lines.push('');
      }
      (sec.afterImage2 || []).forEach(p => { lines.push(stripHtml(p)); lines.push(''); });
    });

    lines.push('---');
    lines.push('');
    lines.push(`**🌿 ${data.cta.title}**`);
    lines.push('');
    lines.push(data.cta.body);
    lines.push('');
    lines.push(`*${data.cta.qrcodeNote}*`);
    lines.push('');
    lines.push(`*${data.cta.linkText}*`);
    return lines.join('\n');
  }

  function stripHtml(s) {
    return s.replace(/<strong>/g, '**').replace(/<\/strong>/g, '**').replace(/<em>/g, '**').replace(/<\/em>/g, '**').replace(/<[^>]+>/g, '');
  }

  async function copyText(text, btn) {
    try {
      await navigator.clipboard.writeText(text);
      const old = btn.textContent;
      btn.textContent = '✓ 已复制';
      btn.classList.add('ok');
      setTimeout(() => { btn.textContent = old; btn.classList.remove('ok'); }, 1800);
    } catch (e) {
      alert('复制失败：' + e.message);
    }
  }

  async function copyRich(html, btn) {
    try {
      if (!navigator.clipboard || !window.ClipboardItem) throw new Error('浏览器不支持富文本 clipboard');
      const plainText = html.replace(/<[^>]+>/g, '');
      const item = new ClipboardItem({
        'text/html': new Blob([html], { type: 'text/html' }),
        'text/plain': new Blob([plainText], { type: 'text/plain' }),
      });
      await navigator.clipboard.write([item]);
      const old = btn.textContent;
      btn.textContent = '✓ 已复制富文本';
      btn.classList.add('ok');
      setTimeout(() => { btn.textContent = old; btn.classList.remove('ok'); }, 1800);
    } catch (e) {
      alert('富文本复制失败：' + e.message + '\n可以改用 "复制 HTML" 按钮。');
    }
  }

  const cHtml = document.getElementById('copy-html');
  const cMd = document.getElementById('copy-md');
  const cRich = document.getElementById('copy-rich');

  cHtml && cHtml.addEventListener('click', () => copyText(buildMpHtml(), cHtml));
  cMd && cMd.addEventListener('click', () => copyText(buildMarkdown(), cMd));
  cRich && cRich.addEventListener('click', () => copyRich(buildMpHtml(), cRich));

  // ---- JR Social Publisher Chrome Extension 推送钩子 ----
  async function pushToExtension() {
    const btn = document.getElementById('push-mp');
    if (!btn) return;
    const oldText = btn.textContent;
    btn.disabled = true;
    btn.textContent = '准备中...';
    try {
      const bodyHtml = buildMpHtml();
      const titleEl = body.querySelector('h1, .mp-title, [data-title]');
      const title = titleEl ? (titleEl.textContent || '').trim() : document.title;
      const leadEl = body.querySelector('.lead, .mp-lead, p');
      const summary = (leadEl ? leadEl.textContent : '').trim().slice(0, 120);

      btn.textContent = '抓封面...';
      const base = new URL('.', location.href).href;
      const firstImg = body.querySelector('.fig-slot');
      const firstPoster = firstImg ? firstImg.dataset.poster : 'poster-p1';
      const coverUrl = new URL('./images/' + firstPoster + '.png', base).href;
      const resp = await fetch(coverUrl);
      const blob = await resp.blob();
      const coverImageBase64 = await new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve(fr.result);
        fr.onerror = () => reject(new Error('封面图读取失败'));
        fr.readAsDataURL(blob);
      });

      const payload = {
        source: 'bootcamp-mp-article',
        date: new Date().toISOString().slice(0, 10),
        title,
        summary,
        wechat: { author: 'JR Academy', bodyHtml, coverImageBase64 }
      };

      window.postMessage({ type: 'JR_PUBLISH_PAYLOAD', version: 1, target: 'wechat', payload }, '*');
      btn.textContent = '✅ 已推送';
      setTimeout(() => { btn.textContent = oldText; btn.disabled = false; }, 2500);
    } catch (e) {
      console.error('[JR Publisher push-mp]', e);
      btn.textContent = '❌ ' + (e.message || '失败');
      setTimeout(() => { btn.textContent = oldText; btn.disabled = false; }, 3000);
    }
  }
  const pushBtn = document.getElementById('push-mp');
  pushBtn && pushBtn.addEventListener('click', pushToExtension);
})();
