/* 微信公众号文章数据 + 客户端渲染 + 导出逻辑
 * 强依赖：../xhs-posters/index.html（通过隐藏 iframe 加载，复用 html2canvas 批量导出配图）
 * bootcamp: business-analyst (AI 产品经理 BA 训练营)
 */

window.MP_ARTICLE = {
  bootcampSlug: 'business-analyst',
  title: '2026 年的产品岗 JD 已经换代了｜从 BA 到 AI PM 要补什么',
  subtitle: '扒了 12 份澳洲 AI PM JD，把"基线右移"的部分做成 7 周课',
  author: '匠人 AI · Xin 老师',
  readTime: '阅读约 8 分钟',
  publishDate: '2026·04',

  lead: `上周在 Stakeholder 对齐会上被问了一个问题：「这个 AI feature 月成本多少？准确率可接受下限是多少？hallucination 怎么量化？」\n\n作为做了 3 年传统 BA 的人，当场没答上来。回头扒了 12 份澳洲 AI PM 的 JD（Canva / Atlassian / Airwallex / 四大行），发现这些已经不是"加分项"了——是入门线。\n\n这篇把"入门线右移了什么"拆成一张清单，也顺便讲一下我们为什么重做了 BA 训练营。`,

  sections: [
    {
      id: 'gap',
      h2: '一、同样做产品，差距已经这么大了',
      beforeImage: [
        `年初还在跟同事一起写 PRD 的时候，觉得都差不多。半年不到才发现，身边产品同行分成两拨：一拨还在堆功能清单、写"提升用户体验"当指标；另一拨已经在写 <strong>AI PRD 七章结构</strong>、用 <strong>accuracy / latency / cost</strong> 三维指标、做 <strong>Prompt A/B</strong> 测试了。`,
        `不是能力差距，是方向完全不一样。后来扒完 JD 才意识到：2026 的 PM 岗位基线已经整体右移了。`,
      ],
      poster: { id: 'poster-2', slug: 'p2-gap', caption: '图 1 · 2026 PM 岗位差距对比：还在做什么 vs 他们已经在做什么' },
      afterImage: [
        `如果你看完这张图觉得"右边的我一条都没做过"，别急。下面逐条拆开来看。`,
      ],
    },
    {
      id: 'chatroom',
      h2: '二、那天下午群里突然聊 RAG Eval 指标',
      beforeImage: [
        `讲个真实场景：`,
        `周二下午，Tech Lead 在群里说：「我们下一版要上 RAG，PM 你来定 evaluation 指标。」我回了一句「看 accuracy 吗？」，对方说还要 <strong>latency / hallucination rate / cost per query</strong>，别忘了做 A/B。Data 同事补了一刀：「顺便确认 Stakeholder 有没有批过 PII 脱敏。」`,
        `整个对话大概 5 分钟，我只回了一个"好的我晚点回你 🥲"。`,
      ],
      poster: { id: 'poster-3', slug: 'p3-chat', caption: '图 2 · 一个普通周二下午的产品经理群聊' },
      afterImage: [
        `那之后才认真去看了什么是 Eval 指标、什么是 PII 脱敏。发现这些词已经不是"了解就行"，而是 PM 要能给出决策。`,
      ],
    },
    {
      id: 'outcomes',
      h2: '三、7 周之后你会"真的能做"这四件事',
      beforeImage: [
        `课程最怕的反馈是"学完一堆 buzzword，真让做还是不会"。所以新一期的设计是倒推——毕业能放 portfolio 的产出是什么。`,
        `四件事，每件配一个 Lab 可以做出来：`,
        `<strong>① 写一份完整 AI PRD</strong> — 数据 / 模型 / 指标 / 风险 / 成本五章齐整。不是传统 PRD 加个"AI"标题。L74 Lab 里会练一遍。`,
        `<strong>② Prompt 工程 4 层 + A/B</strong> — basic / few-shot / CoT / Agent，每层会写会测。L78 Lab 3 套 Prompt 对比 accuracy / cost。`,
        `<strong>③ 搭一个 RAG 文档问答原型</strong> — 用 ChatGPT GPTs 或 Notion AI 无代码搭，含 System Prompt + 5 条测试 Q&A。`,
        `<strong>④ 打通 Notion → AI → Jira 自动化链路</strong> — 端到端，含成本控制和失败重试。L89 毕业 Lab 的压轴产出。`,
      ],
      poster: { id: 'poster-4', slug: 'p4-skills', caption: '图 3 · 7 周毕业交付的四大能力' },
      afterImage: [
        `四个能力分布在 6 个 Phase 里。下面是完整结构图。`,
      ],
    },
    {
      id: 'structure',
      h2: '四、6 个 Phase 7 周，每周都有新武器',
      beforeImage: [
        `94 节课拆成 6 个 Phase，每个 Phase 一个独立阶段目标，结尾有 Quiz 卡关。一句话过一遍：`,
        `🔵 <strong>Phase 0 · Week 0 · 14 节</strong> — AI 时代 BA 定位，工具装好，P3 实习机制了解。`,
        `🟢 <strong>Phase 1 · Week 1 · 25 节</strong> — BA 工作流 + Initiation / Discovery / Delivery 三阶段 + AI PM 差异 + 求职准备。这个 Phase 最大，是整个"传统 BA 基本功"的浓缩。`,
        `🟡 <strong>Phase 2 · Week 2 · 23 节</strong> — User Story 全套（INVEST 标准 + few-shot 生成）+ Scrum 五仪式 + GenAI-empowered 需求分析。`,
        `🔴 <strong>Phase 3 · Week 3-4 · 17 节</strong> — AI PRD 7 章结构 + Stakeholder 管理 + Prompt 工程 4 层 + A/B 测试。两周最密集。`,
        `🟣 <strong>Phase 4 · Week 5 · 9 节</strong> — 前后端入门（用 Cursor 不写代码）+ 四大 AI 模式（Prompt / FT / RAG / Agent）+ 文档问答原型。`,
        `🔵 <strong>Phase 5 · Week 6 · 6 节</strong> — 自动化链路 + Agent 产品设计 + 毕业 Lab。`,
      ],
      poster: { id: 'poster-5', slug: 'p5-phases', caption: '图 4 · 7 周 6 Phase 课程地图' },
      afterImage: [
        `工具栈也更新到 2026 标准。不是放 PPT 点名，是每一个都在课里用到：`,
      ],
      poster2: { id: 'poster-6', slug: 'p6-tools', caption: '图 5 · AI PM 真实工具栈 12 个' },
      afterImage2: [
        `下面挑两个最独家、也最难找到其他课教的模块展开讲 —— AI PRD 七章结构和 Prompt 四层次。`,
      ],
    },
    {
      id: 'prd',
      h2: '五、AI PRD 七章结构：后四章是差异化必修',
      beforeImage: [
        `传统 PRD 写 3 章就能交：功能定义、用户流程、约束 / NFR。AI 产品 PRD 要写 7 章，多出来的 4 章是 2026 的差异化必修：`,
        `<strong>④ 数据章节</strong> — RAG 数据源、PII 脱敏规则、训练数据 vs 上下文数据分界。`,
        `<strong>⑤ 模型策略</strong> — OpenAI / Claude / 开源选型依据、Prompt 策略、fallback 机制。`,
        `<strong>⑥ 成功指标</strong> — accuracy / latency / cost per query 三维度。不是"提升用户体验"。`,
        `<strong>⑦ 风险与合规</strong> — Prompt injection / 幻觉 / GDPR / 澳洲 APP / 伦理。`,
        `没有这 4 章的 AI PRD，交给工程师等于挖坑。L64 讲结构，L74 Lab 会练一遍完整版。`,
      ],
      poster: { id: 'poster-12', slug: 'p12-prd', caption: '图 6 · AI PRD 七章结构' },
      afterImage: [
        `其中最核心的一章叫 <strong>Capability Spec</strong>——传统 User Story 写"用户能做什么"，Capability Spec 写"AI 在什么范围做得到多准"。这是我们的独家模块，业内找不到第二家。`,
      ],
    },
    {
      id: 'prompt',
      h2: '六、Prompt 不是"问得好"，是产品语言',
      beforeImage: [
        `很多人把 Prompt 理解成"怎么问 ChatGPT 能得到好答案"。错。Prompt 是把产品需求翻译成机器能懂的可执行语言。会写 Prompt = 会做需求文档的可执行版本。`,
        `课里讲 4 层：`,
        `<strong>01 Basic</strong> — 指令 + 上下文。大多数新人停在这里。`,
        `<strong>02 Few-shot</strong> — 给示例让 AI 学。L50 Lab 用它生成符合 INVEST 的 User Story。`,
        `<strong>03 Chain-of-Thought</strong> — 推理路径显式化。复杂决策前先让 AI 说思路。`,
        `<strong>04 Agent Prompt</strong> — 工具调用 + 反思循环。2026 的 PM 必会。`,
        `L78 Lab 是 Prompt A/B 测试：两个业务场景 × 3 套策略，对比 accuracy / latency / cost 三维度。这是 AI PM 面试频率最高的实操题之一。`,
      ],
      poster: { id: 'poster-13', slug: 'p13-prompt', caption: '图 7 · Prompt 工程 4 层次' },
      afterImage: [
        `学员反馈：「讲 Prompt 不是教技巧，是教我怎么把需求翻成机器能懂的话。这个转译能力现在每天在用。」`,
      ],
    },
    {
      id: 'labs',
      h2: '七、7 个 Lab + P3 真实项目实习',
      beforeImage: [
        `课不只是听讲。7 个 Lab 在浏览器内做，每个有明确产出物。外加一个 4-6 周的真实 P3 项目实习（和全栈班 / DevOps 班组队，你是 AI PM 代表）。`,
        `Lab 清单：L06 工具配置、L38 AI 应用对比、L50 Few-shot User Story、L74 AI PRD、L78 Prompt A/B、L84 文档问答原型、<strong>L89 毕业 Lab</strong>（Notion → AI → Jira 自动化链路）。`,
        `P3 项目你的产出：Project Brief · AI PRD 7 章 · User Story Backlog · Stakeholder 周报 · 验收标准表 · 上线演示 + 复盘。直接进 portfolio。`,
      ],
      poster: { id: 'poster-15', slug: 'p15-labs', caption: '图 8 · 7 个 Lab 产出清单' },
      afterImage: [],
      poster2: { id: 'poster-17', slug: 'p17-p3', caption: '图 9 · P3 真实项目实习：你是 AI PM 代表' },
      afterImage2: [],
    },
    {
      id: 'timeline',
      h2: '八、7 周直播 + 4 周 P3 项目，不是打卡是卡关',
      beforeImage: [
        `总路线：Week 0-6 直播 + 录播（6 Phase 每个结尾 Quiz 卡关）→ Week 7-10 P3 项目（真实 Stakeholder、真实 deadline）→ 2 次 1v1 面试简历辅导 → portfolio 定稿。`,
        `建议周学习强度：3-4h 直播 + 4-6h 自学 + 2-3h Lab/作业，总计 10-13h/周。适合在职学员。`,
      ],
      poster: { id: 'poster-16', slug: 'p16-timeline', caption: '图 10 · Week 0 → Offer 的 10 周时间线' },
      afterImage: [],
    },
    {
      id: 'feedback',
      h2: '九、往期学员说得最对的三句话',
      beforeImage: [
        `不是代言，是课后群里直接复制出来的（已脱敏）：`,
      ],
      poster: { id: 'poster-7', slug: 'p7-voices', caption: '图 11 · 往期学员反馈' },
      afterImage: [
        `Lisa（运营转产品岗 3 个月）、Eric（悉尼 Fintech BA, $80K AUD）、Wei（回国互联网产品岗）——三位都是非 CS 背景转岗成功的案例。`,
      ],
    },
    {
      id: 'extras',
      h2: '十、课程配置 + AI PM 到底一天在做什么',
      beforeImage: [
        `先放配置清单：94 节课 / 6 Phase / 7 Lab / 10 Quiz / 1v1 × 2 / P3 项目 / AI PRD 模板 / PM Prompt 库 / 成本估算卡 / portfolio 定稿 / 学员群长期答疑。`,
      ],
      poster: { id: 'poster-8', slug: 'p8-inside', caption: '图 12 · 课程配置全清单' },
      afterImage: [
        `如果你还不确定 AI PM 这个岗位到底在做什么，下面这张图拆了一天的 4 件事。不是抽象描述，是具体场景——上午聊客服自动化、中午写 Prompt A/B、下午 review RAG eval、傍晚写 Stakeholder 周报。`,
      ],
      poster2: { id: 'poster-10', slug: 'p10-role', caption: '图 13 · AI PM 一天在做什么（4 件具体工作）' },
      afterImage2: [],
    },
    {
      id: 'cta-section',
      h2: '十一、第 4 期招生中 · 早鸟 ¥4,400',
      beforeImage: [
        `2025 年 12 月 1 日开课 → 2026 年 1 月 18 日结课（7 周直播）→ 之后 4 周 P3 项目实习。`,
        `标准学费 ¥4,800 · 早鸟 ¥4,400（省 ¥400）· 老学员 / 推荐额外减 ¥200。`,
        `适合：文科 / 商科 / 设计 / 运营想转产品岗，或已有 BA/PM 经验想补 AI 技能栈的朋友。不适合想做 AI 工程师的（那个看 AI Engineer Bootcamp）。`,
        `不承诺 offer，但承诺学完有 portfolio + 澳洲 AI PM 市场认知 + 2 次 1v1 辅导。`,
      ],
      poster: { id: 'poster-25', slug: 'p25-enrol', caption: '图 14 · 第 4 期招生信息' },
      afterImage: [],
    },
  ],

  cta: {
    title: '🌿 想了解更多？',
    body: '扫码关注「匠人 AI 学院」公众号，回复 <strong>BA</strong> 获取课程大纲 PDF + 免费 AI PRD 模板。<br>或直接访问课程页面了解详情。',
    qrcodeNote: '长按识别 → 关注公众号 → 回复"BA"',
    linkText: '🔗 jiangren.com.au/bootcamp/business-analyst',
  },
};

/* ===================== 渲染文章到手机预览 ===================== */
(function renderArticle() {
  const data = window.MP_ARTICLE;
  const root = document.getElementById('mp-article-body');
  if (!root || !data) return;

  // Title / subtitle / meta
  const titleEl = document.createElement('h1');
  titleEl.className = 'article-title';
  titleEl.textContent = data.title;
  root.appendChild(titleEl);

  const subEl = document.createElement('p');
  subEl.className = 'article-subtitle';
  subEl.textContent = data.subtitle;
  root.appendChild(subEl);

  const metaEl = document.createElement('div');
  metaEl.className = 'article-meta';
  metaEl.innerHTML = `${data.author}<span class="dot">·</span>${data.readTime}<span class="dot">·</span>${data.publishDate}`;
  root.appendChild(metaEl);

  // Lead
  const leadEl = document.createElement('div');
  leadEl.className = 'lead';
  data.lead.split('\n\n').forEach(p => {
    const pEl = document.createElement('p');
    pEl.innerHTML = p.replace(/\n/g, '<br>');
    leadEl.appendChild(pEl);
  });
  root.appendChild(leadEl);

  // Sections
  let figCounter = 0;
  data.sections.forEach(sec => {
    const h2 = document.createElement('h2');
    h2.className = 'section-h2' + (sec.id === 'cta-section' ? ' cta-h2' : '');
    h2.textContent = sec.h2;
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
  cta.innerHTML = `<div class="cta-title">${data.cta.title}</div><div class="cta-body">${data.cta.body}</div><div class="cta-qrcode">[ 公众号名片 / 二维码位置 ]</div><div class="cta-qrnote">${data.cta.qrcodeNote}</div><div class="cta-link">${data.cta.linkText}</div>`;
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
 * CI 脚本 curriculum/scripts/render-mp-posters.mjs 用 puppeteer 把 xhs-posters 里的 poster
 * 渲染成真实 PNG 存到 ./images/，这里只需要设置 img src + 下载时 fetch。粘公众号时图片 URL
 * 可访问 → 微信自动抓取 re-host → 真正 copy-paste 发稿闭环。
 */
(function setupPreviewAndDownload() {
  const dlBtn = document.getElementById('dl-all-imgs');
  const status = document.getElementById('dl-status');
  const regenBtn = document.getElementById('regen-preview');
  const BC = (window.MP_ARTICLE && window.MP_ARTICLE.bootcampSlug) || 'bootcamp';

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
    if (status) status.textContent = `✅ ${slots.length} 张配图已绑定 · 点「复制富文本」粘到公众号（图片会自动抓取）或「批量下载」拿 PNG`;
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
    const base = new URL('.', location.href).href;
    clone.querySelectorAll('.fig-slot').forEach((slot) => {
      const posterId = slot.dataset.poster;
      const idx = slot.dataset.index;
      const slug = slot.dataset.slug;
      const img = document.createElement('img');
      img.src = new URL('./images/' + posterId + '.png', base).href;
      img.alt = `图 ${idx} · ${slug}`;
      img.style.cssText = 'display:block;width:100%;max-width:1200px;margin:20px auto;height:auto;border-radius:6px;';
      slot.replaceWith(img);
    });
    return clone.innerHTML;
  }

  function buildMarkdown() {
    let md = '';
    const nodes = body.childNodes;
    nodes.forEach(n => {
      if (n.nodeType === 3) return;
      const tag = (n.tagName || '').toLowerCase();
      const text = (n.textContent || '').trim();
      if (!text) return;
      if (tag === 'h1') md += `# ${text}\n\n`;
      else if (tag === 'h2') md += `## ${text}\n\n`;
      else if (tag === 'figure') {
        const slot = n.querySelector('.fig-slot');
        const cap = n.querySelector('figcaption');
        md += `![${slot ? slot.dataset.slug : ''}](${cap ? cap.textContent : ''})\n\n`;
      }
      else if (n.classList && n.classList.contains('lead')) md += `> ${text}\n\n`;
      else if (n.classList && n.classList.contains('cta-card')) md += `---\n\n**${text}**\n\n`;
      else md += `${text}\n\n`;
    });
    return md.trim();
  }

  async function copyText(text, btn) {
    try {
      await navigator.clipboard.writeText(text);
      const old = btn.textContent;
      btn.textContent = '✓ 已复制';
      btn.classList.add('ok');
      setTimeout(() => { btn.textContent = old; btn.classList.remove('ok'); }, 1500);
    } catch (e) { alert('复制失败：' + e.message); }
  }

  async function copyRich(btn) {
    try {
      const html = buildMpHtml();
      const blob = new Blob([html], { type: 'text/html' });
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })]);
      const old = btn.textContent;
      btn.textContent = '✓ 已复制富文本';
      btn.classList.add('ok');
      setTimeout(() => { btn.textContent = old; btn.classList.remove('ok'); }, 1500);
    } catch (e) { alert('复制失败：' + e.message); }
  }

  const richBtn = document.getElementById('copy-rich');
  const htmlBtn = document.getElementById('copy-html');
  const mdBtn = document.getElementById('copy-md');
  if (richBtn) richBtn.addEventListener('click', () => copyRich(richBtn));
  if (htmlBtn) htmlBtn.addEventListener('click', () => copyText(buildMpHtml(), htmlBtn));
  if (mdBtn) mdBtn.addEventListener('click', () => copyText(buildMarkdown(), mdBtn));
})();
