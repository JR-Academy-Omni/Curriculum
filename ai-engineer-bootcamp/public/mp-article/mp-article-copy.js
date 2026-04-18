/* 微信公众号文章数据 + 客户端渲染 + 导出逻辑
 * 强依赖：../xhs-posters/index.html（通过隐藏 iframe 加载，复用 html2canvas 批量导出配图）
 * 运营流程：
 *   1. 点「⬇ 批量下载所有配图」→ 本地得到 mp-ai-engineer-01.png ~ mp-ai-engineer-12.png
 *   2. 登录 mp.weixin.qq.com → 素材管理 → 图片 → 批量上传
 *   3. 点「📋 复制富文本」→ 公众号编辑器粘贴
 *   4. 按占位符顺序把素材库图片插到 [图 01] … [图 12] 位置
 *   5. 预览 → 发布
 */

window.MP_ARTICLE = {
  bootcampSlug: 'ai-engineer',
  title: '2026 年，AI Engineer 这个岗位已经完全不是去年那一套了',
  subtitle: '扒了 15 份一线公司 JD 之后，把"基线右移"的部分做成了 12 周课',
  author: '匠人 AI · Jin 老师',
  readTime: '阅读约 9 分钟',
  publishDate: '2026·04',

  lead: `周二下午在后端同事群里划水，平台组突然聊起 GraphRAG 怎么调、Eval 怎么做回归。\n\n作为写了好几年 CRUD 的 small potato，我一脸懵。隔壁阿哲只留下一句：「兄弟你得补一下了，现在 AI Engineer JD 基本都考这个。」\n\n那一刻突然意识到——技术栈不是又升级了一次，是换代了。这篇是把"换代"的那部分拆成一张清单，也把我们重做的 12 周课顺便讲一下。`,

  sections: [
    {
      id: 'gap',
      h2: '一、身边的 AI 工程师在做什么？差距真的拉开了',
      beforeImage: [
        `年初拼 Prompt 的时候，没想到半年不到差距会拉这么大。身边做 AI 的朋友分成了两拨：一拨还在写字符串拼 Prompt、复制 ChatGPT 答案、把 RAG 理解成"搜索"；另一拨已经在搭 <strong>GraphRAG</strong>、玩 <strong>Claude Agent SDK</strong>、自己起 <strong>MCP Server</strong>、用 <strong>QLoRA</strong> 微调了。`,
        `这不是"会不会"的区别，是方向完全不一样。我后来补着补着才意识到：2026 的 AI 岗位基线已经整体右移了，年初还算进阶的东西，现在是入门线。`,
      ],
      poster: { id: 'poster-2', slug: 'p2-painpoint', caption: '图 1 · 2026 AI 工程师岗位要求：还在做什么 vs 他们已经做了什么' },
      afterImage: [
        `如果你看完这张图觉得"右边的我一条都没做过"，那你大概率和我年初是同一类人。别急，下面逐条拆，看怎么从左边走到右边。`,
      ],
    },
    {
      id: 'chatroom',
      h2: '二、同事群里聊到这些词你能接上话吗',
      beforeImage: [
        `讲个真实场景：那天下午 3 点，平台组消息炸群。`,
        `阿哲在吐槽：「我们 GraphRAG 实体抽取召回率卡在 72%，加 co-reference 之后掉到 68%，是不是 prompt 写反了」。另一个同事回：「你们 Eval 用的 RAGAS 还是自己写的？我们这边 Langfuse 接上之后 trace 看起来干净多了」。`,
        `整个对话大概 15 分钟，我只能在群里发了一个"学到了"。`,
      ],
      poster: { id: 'poster-3', slug: 'p3-conversation', caption: '图 2 · 一个普通周二下午的 AI 工程师群聊' },
      afterImage: [
        `那之后我扒了一下各大公司 2026 的 JD，发现这些词已经不是"加分项"了。不懂 GraphRAG / Eval / MCP 的人，从技术面开始就会被问卡。`,
      ],
    },
    {
      id: 'outcomes',
      h2: '三、12 周之后你会"真的会"这四件事',
      beforeImage: [
        `课程最怕的一种反馈是：「学完一堆 buzzword，真让做还是不会」。所以设计新一期的时候我们盯着"毕业能真落地什么"倒推。`,
        `四件事，每件都有配套项目能写进简历：`,
        `<strong>① 搭生产级 RAG</strong> — 向量库选型 / GraphRAG 实体关系 / 混合检索 / RAGAS + Langfuse Eval，全链路。不是跑一个 LangChain demo 就算数。`,
        `<strong>② 吃透 3 大 Agent SDK</strong> — OpenAI / Claude / Google 三家亲手做对比，不是只学一家，面试被问"你选 SDK 的理由"能答得出来。`,
        `<strong>③ Multi-Agent + MCP 编排</strong> — LangGraph 跑协作、A2A 跨 Agent、自建 Harness 调度工具。这一块是 2026 面试频率最高的。`,
        `<strong>④ Fine-Tune + AI Eval</strong> — QLoRA 在 Colab 免费版跑通、用 Eval Pipeline 量化迭代。不会微调的 AI Engineer 在 2026 已经是明显短板。`,
      ],
      poster: { id: 'poster-4', slug: 'p4-outcomes', caption: '图 3 · 12 周毕业交付的四大能力' },
      afterImage: [
        `四个能力对应四个独立项目，外加一个贯穿全程的 ISA Capstone。下面这张"结构图"就是这一整套能力怎么分布到课程里。`,
      ],
    },
    {
      id: 'structure',
      h2: '四、10 个 Phase 全景图：每周都有新武器',
      beforeImage: [
        `市面上的 AI Engineer 课很多是 4-6 个 Phase 草草带过。我们新一期拆到 <strong>10 个 Phase</strong>，每个 Phase 是一个独立能力，连 Memory / Harness 这种市面几乎没课教的都单独拉出来讲。一句话过一遍：`,
        `🧱 <strong>P1 Foundation</strong> — Transformer / GPT / 训练推理基础。不学论文，但要看懂 token、temperature、context window 在底层是什么。`,
        `🧠 <strong>P2 Context Engineering</strong> — 比 Prompt 更上一层。System Prompt 怎么写、上下文怎么裁、Few-shot 怎么给样本，决定 LLM 表现的 80%。`,
        `🔍 <strong>P3 RAG</strong> — 让 AI 带着你的私有文档回答。向量检索 + GraphRAG + LangChain + Eval 全链路，整整 45 节课。`,
        `🧱 <strong>P4 Capability</strong> — 给 Agent 装"手脚"：Function Calling、MCP 协议、Computer Use（让 Agent 操作浏览器）。`,
        `🧠 <strong>P5 Agent Core</strong> — Agent 的"大脑"：ReAct 循环、Plan-Execute、OpenAI / Claude / Google 三家 SDK 亲手对比。`,
        `🌐 <strong>P6 Multi-Agent</strong> — 多个 Agent 协作：LangGraph 编排、A2A 跨 Agent 协议、Agent Ops 监控。`,
        `💾 <strong>P7 Memory</strong> — Agent 的"长期记忆"：STM / LTM 分层、Mem0、Graph Memory、跨会话记忆。这块决定 Agent 是"玩具"还是"产品"。`,
        `🛠️ <strong>P8 Harness</strong> — Agent 的"调度系统"：Claude Code 是怎么调度几十个工具不出错的？拆 Hook / Tool Loop / Skills / SubAgent。`,
        `🎯 <strong>P9 Model Layer</strong> — 模型选型 + 微调：GPT/Claude/Llama/Qwen 选哪个、QLoRA + Unsloth 在 Colab 免费版跑通。`,
        `📊 <strong>P10 Eval</strong> — 怎么知道"改了一行 prompt 之后系统变好还是变差"。RAGAS / Langfuse / Red-team / 自定义 metrics。`,
        `光 Agent 一块就拆成了 P4-P8 五个 Phase。别的课大概一两节带过的内容，我们是五个 Phase × 平均 15+ 节课。`,
      ],
      poster: { id: 'poster-5', slug: 'p5-roadmap', caption: '图 4 · 12 周 10 Phase 全景图' },
      afterImage: [
        `工具栈同样给到 2026 标准，15+ 个工具都配了 Lab，不是放 PPT 上点个名就完事：Claude Agent SDK、LangGraph、Pinecone、Neo4j GraphRAG、MCP、A2A、QLoRA、Unsloth、Mem0、Guardrails AI……`,
      ],
      poster2: { id: 'poster-6', slug: 'p6-stack', caption: '图 5 · 2026 真实用到的 15+ 主流工具' },
      afterImage2: [
        `下面挑三个最不好教、也最差异化的 Phase 展开讲 —— RAG、Agent 五层、以及 Lab 实战。`,
      ],
    },
    {
      id: 'rag',
      h2: '五、RAG 独立一个 Phase 45 节，不只是跑 Demo',
      beforeImage: [
        `几乎每门 AI 课都讲 RAG，但 90% 停在"跑通一个向量检索 Demo"。真正线上做 RAG 的人知道，问题根本不在"能不能跑"，在"准不准、快不快、能不能评估"。`,
        `我们 P3 整整 <strong>45 节</strong>，做了这些：`,
        `🔍 <strong>向量检索</strong>：Embedding 原理、Pinecone / Chroma / Weaviate 选型、chunk 策略、hybrid search；`,
        `🕸️ <strong>GraphRAG</strong>：Neo4j 知识图谱 + 实体 + 关系抽取，解决向量检索天花板；`,
        `⛓️ <strong>LangChain 工程化</strong>：LCEL 串联、LangSmith 可观测、失败重试；`,
        `📊 <strong>RAG Eval</strong>：RAGAS 四指标 + Langfuse trace + 自定义 metrics，能量化迭代。`,
        `课程配套是 3 个递进项目：RAG from Scratch（纯 Python，不用 LangChain）→ Production RAG（带监控）→ GraphRAG（带图谱）。简历一栏能写满。`,
      ],
      poster: { id: 'poster-12', slug: 'p12-rag', caption: '图 6 · P3 RAG · 45 节深潜' },
      afterImage: [
        `做过 RAG demo 的人很多，做过 Production + GraphRAG + Eval 全链路的不多。这个差就是 Junior 和 Senior 的距离。`,
      ],
    },
    {
      id: 'agent',
      h2: '六、Agent 拆成 5 个 Phase，不是"带过一下"',
      beforeImage: [
        `Agent 是今年被问爆的方向，但市面大多数课的处理是：「Agent 一节课带过，讲一下 Tool Use 就完了」。`,
        `我们反着来，把 Agent 拆成整整 5 个 Phase 讲透：`,
        `🧱 <strong>P4 Capability</strong> — Function Calling、MCP、Computer Use，工具层；`,
        `🧠 <strong>P5 Agent Core</strong> — ReAct、3 大 SDK 对比、Agentic RAG；`,
        `🌐 <strong>P6 Multi-Agent</strong> — LangGraph、A2A 协议、Agent Ops；`,
        `💾 <strong>P7 Memory</strong> — STM / LTM、Mem0 三层、跨会话记忆；`,
        `🛠️ <strong>P8 Harness</strong> — Claude Code 架构、Hook、Skills、ADLC。`,
        `其中 Memory 和 Harness 是真的几乎找不到第二家系统讲的地方 —— 因为这俩都是 2025 Q4 之后才火起来的词，很多课还没来得及更新。`,
      ],
      poster: { id: 'poster-13', slug: 'p13-agent', caption: '图 7 · Agent 五层架构拆解 · P4-P8' },
      afterImage: [
        `每一层都有独立项目，毕业简历"Agent 相关经验"可以写成 5 段独立 bullet，不是一句"做过 Agent"。`,
      ],
    },
    {
      id: 'labs',
      h2: '七、68 个互动 Lab + 7 个能写简历的项目',
      beforeImage: [
        `买课最怕的是买回来只能被动听。旧版我们没做 Lab，新一期一口气做了 68 个浏览器内互动 Lab：`,
        `🟣 Prompt Lab × 15（CoT、System Prompt、JSON 输出）`,
        `🟢 Python Lab × 11（基础 + OpenAI SDK）`,
        `🔵 LLM Lab × 15（API、调优、RAG Eval、Agent）`,
        `🟠 AWS Lab × 10（EC2、IAM、Bedrock）`,
        `⚫ Git Lab × 5（协作全流程）`,
        `🔴 前端 Lab × 12（HTML → React）`,
        `全部浏览器里跑，不用本地配环境。关键是——<strong>每个 Lab 都是独立 Lesson</strong>，有进度追踪、可单独完成，不是挂在别的课下面的"附属练习"。`,
      ],
      poster: { id: 'poster-15', slug: 'p15-labs', caption: '图 8 · 68 个互动 Lab 按类型分布' },
      afterImage: [
        `Lab 是练手，<strong>7 个大项目</strong>才是能写进简历的主菜：`,
        `01 ISA Capstone（从 v1 Prompt 版升级到 v5 生产版，贯穿全程）；02 Context-Driven App；03 RAG from Scratch；04 Production RAG + GraphRAG；05 Multi-Agent RAG（3 SDK 对比）；06 Production Agent System（MCP + Memory + A2A）；07 Fine-Tune + Eval Pipeline（QLoRA）。`,
        `每个项目都能写成 STAR 故事，面试 behavioral + technical 轮都能用。`,
      ],
      poster2: { id: 'poster-17', slug: 'p17-projects', caption: '图 9 · 7 个能写进简历的实战项目' },
      afterImage2: [
        `项目做出来之后，怎么把它讲成面试 offer —— 那是课后 12 周 P3 孵化要做的事。`,
      ],
    },
    {
      id: 'timeline',
      h2: '八、从"学会"到"拿 Offer"，其实是 24 周',
      beforeImage: [
        `很多人看到"12 周"就觉得短。但时间线往后看，课程结束并不是结束。`,
        `📅 W1-3：Foundation + Context Engineering，打底；`,
        `📅 W4-7：RAG 全链路 + 3 个项目；`,
        `📅 W8-10：Agent + Multi-Agent + Memory + Harness；`,
        `📅 W11-12：Model Layer + Eval + 毕业；`,
        `📅 W13-24：<strong>P3 职业孵化</strong> —— 3-5 人团队真实企业项目 / 4 个 Sprint / Meta / MS / Amazon 导师 Code Review / Demo Day / 内推群 / 面试陪跑到 Offer。`,
        `P3 是这门课我自己最想推的一部分。大部分 Bootcamp 毕业就结束，这里后面还有 12 周有人陪你把项目做完、简历写好、面试过掉。`,
      ],
      poster: { id: 'poster-16', slug: 'p16-timeline', caption: '图 10 · 24 周完整时间线：学会 → P3 → Offer' },
      afterImage: [
        `到这里你应该已经能判断："我到底要不要学"。下面这两张是最近学员和课程配置的真实数据，帮你做最后决定。`,
      ],
    },
    {
      id: 'feedback',
      h2: '九、学员反馈都蛮日常的，没有夸张数字',
      beforeImage: [
        `没有"三个月涨薪 50%"这种话术，就是群里捞了几条反馈：`,
        `💬 「Phase 3 做完第一个 RAG，公司内部文档搜索就直接用上了」`,
        `💬 「亲手跑通 Agent SDK 那一刻突然觉得：就这？我也能做」`,
        `💬 「P3 孵化做的 Multi-Agent 项目直接写进简历，面试聊得挺开心」`,
        `都是挺普通的工程师日常。课程最有意思的一点是：学到一半就开始产生真实项目价值，不用等毕业才"用得上"。`,
      ],
      poster: { id: 'poster-7', slug: 'p7-feedback', caption: '图 11 · 学员反馈（都是日常片段，不编数字）' },
      afterImage: [
        `反馈之外，你拿到手的到底是什么——下面这张配置图一次说清。`,
      ],
    },
    {
      id: 'package',
      h2: '十、你拿到手的是一整套求职武器库',
      beforeImage: [
        `对比了一圈同类课，很多只给录播 + 作业。这次买到手的是：`,
        `📘 <strong>183 节课</strong>（直播 + 录播 + Lab + 自学）`,
        `🧪 <strong>68 个互动 Lab</strong>（浏览器内，独立进度）`,
        `🧩 <strong>10 个 Phase</strong>（每个都是独立能力，不是草草带过）`,
        `📂 <strong>7 个实战项目</strong>（都能写进简历的 STAR 故事）`,
        `👥 <strong>12 周 P3 职业孵化</strong>（真实企业项目）`,
        `🤖 <strong>AI Tutor 中英双语 24h</strong> 答疑`,
        `🧑‍🏫 Meta / MS / Amazon 在职导师 Code Review`,
        `🤝 校友内推群 + Demo Day`,
      ],
      poster: { id: 'poster-8', slug: 'p8-format', caption: '图 12 · 完整课程配置一览' },
      afterImage: [
        `这也是为什么我自己复盘下来觉得值 —— 不是课时多，是课程之外的支持（P3 真实项目 + 导师 Review + 内推）才是真正决定能不能拿 Offer 的地方。`,
      ],
    },
    {
      id: 'cta',
      h2: '结尾 · 如果今年只认真做一件 AI 投资',
      beforeImage: [
        `AI 的学习窗口期在缩。去年随便学点就能跟上，今年已经开始卷 Agent / Memory / Harness。明年的门槛会继续往上移。`,
        `如果你今年只打算认真做一件 AI 投资，推荐看看新一期 AI Engineer Bootcamp：<strong>第五期</strong>，12 周 + 12 周 P3，183 节课 + 68 Lab + 7 个项目。`,
        `完整大纲、项目案例、导师背景都公开。不着急报，先看看方向对不对。`,
      ],
      poster: { id: 'poster-9', slug: 'p9-cta', caption: '图 13 · 新一期 AI Engineer Bootcamp' },
      afterImage: [],
      isCta: true,
    },
  ],

  cta: {
    title: '咨询新一期 AI Engineer Bootcamp',
    body: '课程大纲 / 项目案例 / 导师背景 / 报名优惠，扫码添加课程顾问（备注「Engineer」），获取完整课程 PDF。',
    qrcodeNote: '扫码咨询 · 回复「engineer」领课程大纲',
    linkText: '点击阅读原文 → 查看完整课程详情',
  },

  // 以出现顺序列出用到的 poster id（去重）
  usedPosters: [
    'poster-2', 'poster-3', 'poster-4',
    'poster-5', 'poster-6',
    'poster-12', 'poster-13',
    'poster-15', 'poster-17',
    'poster-16', 'poster-7',
    'poster-8', 'poster-9',
  ],
};

/* ===================== 渲染 ===================== */
(function render() {
  const data = window.MP_ARTICLE;
  const root = document.getElementById('mp-article-body');
  if (!root) return;

  const esc = (s) => s; // trust our own content

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

  data.sections.forEach((sec, idx) => {
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

  // CTA block
  const cta = document.createElement('div');
  cta.className = 'cta-card';
  cta.innerHTML = `<div class="cta-title">🌿 ${data.cta.title}</div><div class="cta-body">${data.cta.body}</div><div class="cta-qrcode">[ 公众号名片 / 二维码位置 ]</div><div class="cta-qrnote">${data.cta.qrcodeNote}</div><div class="cta-link">${data.cta.linkText}</div>`;
  root.appendChild(cta);

  // Sidebar: section-list
  const sList = document.querySelector('.section-list');
  if (sList) {
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

  // Populate stats badges
  const tally = document.getElementById('stats-tally');
  if (tally) {
    tally.innerHTML = `<span class="pill red">${figCounter} 张配图</span><span class="pill">${data.sections.length} 个 Section</span><span class="pill">${estimateWords(root)} 字</span>`;
  }
})();

function estimateWords(root) {
  const txt = root.innerText || '';
  return txt.replace(/\s+/g, '').length;
}

/* ===================== 预览 + 批量下载（直接用 ./images/poster-X.png 真实文件） =====================
 * 以前是用 iframe + html2canvas 按需渲染，base64 粘进公众号会被丢弃。现在 CI 预渲染成真实 PNG
 * 文件到 ./images/，这里只需要：设置 img src + 下载时 fetch + buildMpHtml 用绝对 URL。
 * 脚本：curriculum/scripts/render-mp-posters.mjs
 */
(function setupPreviewAndDownload() {
  const dlBtn = document.getElementById('dl-all-imgs');
  const status = document.getElementById('dl-status');
  const regenBtn = document.getElementById('regen-preview');
  const BC = (window.MP_ARTICLE && window.MP_ARTICLE.bootcampSlug) || 'bootcamp';

  function slotImgSrc(posterId) {
    return './images/' + posterId + '.png';
  }

  function fillSlotWithImage(slot) {
    const posterId = slot.dataset.poster;
    const idx = slot.dataset.index;
    const slug = slot.dataset.slug;
    slot.classList.add('has-img');
    const src = slotImgSrc(posterId);
    const img = document.createElement('img');
    img.src = src;
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
    if (status) status.textContent = `✅ ${slots.length} 张配图已绑定 · 点「复制富文本」直接粘到公众号（图片会自动抓取）或「批量下载」拿 PNG`;
    if (regenBtn) regenBtn.disabled = true;
  }

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
          const fileSlug = `mp-${BC}-${idx}-${posterSlug}`;
          dlBtn.textContent = `⬇ 下载 ${idx}/${String(slots.length).padStart(2, '0')}…`;
          if (status) status.textContent = `⬇ 下载 ${fileSlug}.png`;
          try {
            const resp = await fetch(slotImgSrc(posterId));
            if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
            const blob = await resp.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.download = fileSlug + '.png';
            a.href = url;
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
          } catch (e) {
            console.error('[download]', posterId, e);
            if (status) status.textContent = `❌ ${fileSlug}：${e.message}`;
          }
          await new Promise(r => setTimeout(r, 220));
        }
        dlBtn.textContent = `✓ 已下载 ${slots.length} 张`;
        if (status) status.textContent = `全部 ${slots.length} 张已下载 · 文件名 mp-${BC}-NN-*.png`;
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

/* ===================== 复制 HTML / Markdown / 富文本 ===================== */
(function setupCopyButtons() {
  const body = document.getElementById('mp-article-body');

  function buildMpHtml() {
    const clone = body.cloneNode(true);
    const base = new URL('.', location.href).href; // 当前页面目录的绝对 URL
    // Fig-slot → 真实 <img src="绝对 URL"> （WeChat 粘贴时自动抓取 re-host）
    clone.querySelectorAll('.fig-slot').forEach(slot => {
      const posterId = slot.dataset.poster;
      const idx = slot.dataset.index;
      const slug = slot.dataset.slug;
      const img = document.createElement('img');
      img.src = new URL('./images/' + posterId + '.png', base).href;
      img.alt = `图 ${idx} · ${slug}`;
      img.style.cssText = 'display:block;width:100%;max-width:1200px;margin:20px auto;height:auto;border-radius:6px;';
      slot.replaceWith(img);
    });
    inlineStyles(clone);
    return clone.outerHTML;
  }

  function inlineStyles(root) {
    const map = {
      '.article-title': 'font-size:22px;line-height:1.3;font-weight:900;color:#0f172a;margin:0 0 10px;letter-spacing:-0.3px;',
      '.article-subtitle': 'font-size:14px;color:#64748b;margin:0 0 14px;line-height:1.6;',
      '.article-meta': 'font-size:12.5px;color:#94a3b8;margin:0 0 18px;',
      '.article-meta .dot': 'margin:0 6px;',
      '.lead': 'background:#f1f5f9;border-left:3px solid #10b981;padding:14px 16px;margin:0 0 22px;font-size:15px;color:#334155;font-style:normal;line-height:1.75;',
      '.lead p': 'margin:0 0 10px;',
      '.section-h2': 'font-size:19px;font-weight:900;color:#0f172a;margin:32px 0 14px;padding:0 0 0 14px;border-left:4px solid #ff5757;line-height:1.4;',
      '.section-h2 i': 'display:none;',
      'p': 'font-size:15px;line-height:1.85;color:#1e293b;margin:0 0 16px;',
      'strong': 'color:#ff5757;font-weight:800;',
      'em': 'color:#ff5757;font-weight:800;font-style:normal;',
      '.fig': 'margin:22px 0;text-align:center;',
      'figcaption': 'font-size:12.5px;color:#64748b;margin-top:8px;',
      '.cta-card': 'background:#fff8ee;border:2px solid #10162f;box-shadow:4px 4px 0 #10162f;padding:20px 18px;margin:30px 0 0;border-radius:8px;',
      '.cta-title': 'font-size:16px;font-weight:900;color:#10162f;margin:0 0 10px;',
      '.cta-body': 'font-size:14.5px;line-height:1.75;color:#1e293b;margin:0 0 14px;',
      '.cta-qrcode': 'background:#fff;border:2px dashed #10162f;padding:40px;text-align:center;font-size:12px;color:#64748b;margin:0 0 8px;',
      '.cta-qrnote': 'font-size:12.5px;color:#64748b;text-align:center;margin:0 0 10px;',
      '.cta-link': 'font-size:13px;color:#ff5757;text-align:center;font-weight:700;',
    };

    Object.entries(map).forEach(([sel, style]) => {
      root.querySelectorAll(sel).forEach(el => {
        const existing = el.getAttribute('style') || '';
        el.setAttribute('style', style + existing);
      });
    });

    // Apply to root itself if matches
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
})();
