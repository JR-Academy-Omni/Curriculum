import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const outline = JSON.parse(await readFile(join(root, 'outline.json'), 'utf8'));

const live = outline.phases
  .flatMap((phase) => phase.lessons)
  .filter((lesson) => Number.isInteger(lesson.cohort7SessionOrder))
  .sort((a, b) => a.cohort7SessionOrder - b.cohort7SessionOrder);

const esc = (value = '') => String(value).replace(/[&<>\"]/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'
}[char]));

const nav = [
  ['cohort-7.html', '13 周排课'],
  ['curriculum.html', '课程总览'],
  ['architecture.html', '系统架构'],
  ['phase1.html', 'Stage 1'],
  ['phase2.html', 'Stage 2'],
  ['phase3.html', 'Stage 3'],
  ['phase4.html', 'Stage 4'],
  ['learning-plan.html', '学习方式'],
  ['jd-mapping.html', '面试能力']
];

const shell = ({ title, eyebrow, intro, active, body }) => `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="${esc(intro)}">
  <title>${esc(title)} · JR Academy AI Engineer 第七期</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>">
  <link rel="stylesheet" href="cohort-7-premium.css">
</head>
<body>
  <header class="topbar">
    <a class="brand" href="cohort-7.html"><img src="posters/assets/jr-academy-logo-zh.svg" alt="JR Academy 匠人学院"></a>
    <nav>${nav.map(([href, label]) => `<a href="${href}"${href === active ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav>
  </header>
  <main>
    <section class="hero">
      <img class="hero-visual" src="posters/assets/cohort-7-stack-hero-v2.png" alt="CareKind AI production system stack">
      <div class="hero-copy">
        <p class="eyebrow">${esc(eyebrow)}</p>
        <h1>${esc(title)}</h1>
        <p class="lead">${esc(intro)}</p>
        <div class="metrics"><span>12 场理论 Live</span><span>13 场实践 Live</span><span>45 小时</span><span>1 个连续项目</span></div>
      </div>
    </section>
    ${body}
  </main>
  <footer>AI Engineer Bootcamp · Cohort 07 · Australia · 课程排课以 <a href="cohort-7.html">第七期大纲</a>为准</footer>
</body>
</html>`;

const sessionCards = (start, end) => live
  .filter((s) => s.cohort7Week >= start && s.cohort7Week <= end)
  .map((s) => `<article class="session ${s.cohort7Track}"><div><span class="week">W${s.cohort7Week}</span><span class="track">${s.cohort7Track === 'theory' ? '理论 LIVE' : '实践 LIVE'}</span></div><h3>${esc(s.code)} · ${esc(s.title)}</h3><p>${esc(s.description)}</p></article>`)
  .join('');

const section = (title, content, className = '') => `<section class="section ${className}"><h2>${title}</h2>${content}</section>`;
const cards = (items) => `<div class="grid">${items.map(([title, text]) => `<article class="card"><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>`;

const pages = {
  'curriculum.html': shell({
    title: '第七期课程总览', eyebrow: 'THEORY × PRACTICE', active: 'curriculum.html',
    intro: '理论线与实践线独立推进：理论建立 Applied AI Engineer 的系统判断，实践从 W1 启动同一项目主线，逐周建设可评估、可治理、可答辩的 production Agent 系统；代码库按系统边界合理拆分。',
    body: section('这一期的结构', cards([
      ['理论不是实践课前置录像', 'W1–W12 每周一场理论 Live。RAG、Agents、ReAct、Multi-Agent、Memory、Harness、Governance 与 Model Routing 保留现场讲解。'],
      ['实践不是零散 Lab', 'W1–W13 沿同一 CareKind AI 项目主线，围绕一套 Enterprise Agent System 从 ADLC、UI、业务底座进入 Voice AI、结构化文档、RAG、MCP、Agent、Memory、Harness、Routing 和生产评审；代码库按系统边界合理拆分。'],
      ['录播承担稳定知识', '不依赖课堂互动、时效性低的基础内容转为必修录播；Fine-Tuning 保留工程决策边界，深度训练工具降为选修。'],
      ['Governance 贯穿全程', '合规不是最后一周加一张安全清单。数据确认、权限、citation、memory lifecycle、evaluation threshold、release 与 incident evidence 均有明确边界。']
    ])) + section('四个交付阶段', cards([
      ['Stage 1 · W1–W3', '产品、UI 与非 AI care workflow foundation。'],
      ['Stage 2 · W4–W7', '第一次接入 AI，完成结构化文档和两周 RAG MVP。'],
      ['Stage 3 · W8–W10', 'MCP tools、bounded Agent 与安全长期 Memory。'],
      ['Stage 4 · W11–W13', 'Production Harness、Model Routing、Evals、Safety 与 Demo Defense。']
    ]), 'tint') + section('正式排课', `<p><a class="button" href="cohort-7.html">查看 13 周、25 场 Live 完整大纲 →</a></p>`)
  }),
  'architecture.html': shell({
    title: 'CareKind Production AI Architecture', eyebrow: 'SYSTEM DESIGN', active: 'architecture.html',
    intro: '项目架构按风险边界成长，不把 Voice、RAG、Agent 或 Memory 当作孤立 demo；每一层都要留下人工确认、权限、trace、evaluation 和失败恢复证据。',
    body: section('主运行链路', `<div class="flow">Voice / Manual Input <b>→</b> Human-confirmed Transcript <b>→</b> Structured Facts <b>→</b> Context Builder <b>→</b> Policy RAG <b>→</b> MCP Tools <b>→</b> Bounded Agent <b>→</b> Safe Memory <b>→</b> Production Harness <b>→</b> Model Router <b>→</b> Human Review / Escalation</div>`) +
      section('四条不可绕过的边界', cards([
        ['事实边界', '原始 transcript、AI 推断和未确认 draft 不能成为 resident fact；人工确认是写入 gate。'],
        ['权限边界', '每次 tool、retrieval 和 memory read/write 都重新检查 resident、user、team、role 与 purpose。'],
        ['运行边界', 'Harness 控制 budget、termination、checkpoint、retry、resume、replay、idempotency 和 human approval。'],
        ['发布边界', 'Deterministic checks、LLM-as-a-Judge、人评分校准、red team 和 failure drill 共同决定 go/no-go。']
      ])) + section('Governance 在哪里', `<p>Governance 同时存在于 ADLC、data provenance、RAG citation、MCP permission、Agent termination、Memory lifecycle、routing policy、evaluation threshold、release decision 和 incident response。W11 理论集中建立 governance framework，W13 用真实 production evidence 验收。</p>`, 'tint')
  }),
  'learning-plan.html': shell({
    title: '第七期学习方式', eyebrow: 'WEEKLY RHYTHM', active: 'learning-plan.html',
    intro: '每周一场理论 Live 和一场独立实践 Live。两条线相关但不强行绑定：理论回答为什么与如何判断，实践负责把 CareKind AI 的一个可验收 vertical slice 做完。',
    body: section('每周闭环', cards([
      ['课前 · 录播与阅读', '完成稳定基础知识、starter system 准备和必要的软件工程前置；录播不替代阶段性核心 Live。'],
      ['理论 Live · 90 分钟', '建立概念模型、工程 trade-off、面试表达和系统设计判断。'],
      ['实践 Live · 90 分钟', '围绕同一套系统实现、调试并验收本周能力；代码库按系统边界合理拆分，W13 为 180 分钟最终评审。'],
      ['课后 · Evidence', '提交代码、测试、trace、evaluation、decision log 或 system design artifact，不以“模型跑通一次”为完成。']
    ])) + section('三类内容怎么分', `<table><thead><tr><th>形式</th><th>放什么</th><th>不放什么</th></tr></thead><tbody><tr><td>Live 理论</td><td>RAG、Agents、ReAct、Multi-Agent、Memory、Harness、Governance、Model Routing</td><td>可稳定自学的工具点击演示</td></tr><tr><td>Live 实践</td><td>CareKind 连续工程交付、故障定位、评审与答辩</td><td>互不相干的小 demo</td></tr><tr><td>必修录播 / 选修</td><td>稳定基础、Fine-Tuning 决策、深度 LoRA/QLoRA 工具</td><td>本期阶段性核心主线</td></tr></tbody></table>`, 'tint')
  }),
  'jd-mapping.html': shell({
    title: 'Applied AI Engineer 面试能力映射', eyebrow: 'INTERVIEW READINESS', active: 'jd-mapping.html',
    intro: '不把课程变成 Career Readiness 课；每个技术模块都要求学员能解释设计选择、失败模式、证据和替代方案，最终用 CareKind 系统设计答辩验证。',
    body: section('核心能力', cards([
      ['LLM 与 Context', '解释 token/API behaviour、prompt/context boundary、structured output 与 reasoning pattern 的适用范围。'],
      ['RAG', '解释 chunking、embedding、retrieval、grounding、citation、RAGAS、LLM-as-a-Judge 与 GraphRAG 何时值得。'],
      ['Agents', '解释 ReAct、tool calling、bounded loop、Multi-Agent trade-off、termination、human approval 与 failure recovery。'],
      ['Production Runtime', '解释 Memory lifecycle、Harness、trace、budgets、checkpoint/replay、Model Routing、fallback 与 escalation。'],
      ['Governance', '解释 risk register、privacy、permission、eval threshold、vendor risk、release gate、rollback 与 incident response。'],
      ['Fine-Tuning 决策', '先证明 prompt、context、RAG、tools 或 routing 不足，再根据数据、质量、隐私、成本和维护能力决定是否训练。']
    ])) + section('最终面试证据', `<p>一套可运行的 CareKind Agent system；一份 system architecture；一组 production eval cases；一份 routing decision log；一套 release / rollback / incident evidence；以及能说明“为什么这样设计”的现场 defense。</p>`, 'tint')
  })
};

const stages = [
  ['phase1.html', 1, 3, 'Stage 1 · Product & Workflow Foundation', '先把产品、信息架构和可审计业务流程做对，再接 AI。W1 启动 CareKind，W2 完成完整 UI，W3 交付非 AI vertical slice。', ['PRODUCT', 'DESIGN', 'WORKFLOW']],
  ['phase2.html', 4, 7, 'Stage 2 · First AI, Documentation & RAG MVP', 'W4 第一次接入 AI，只做可编辑、可确认的 Speech-to-Text；W5 生成结构化 care documentation；W6–W7 用两周完成 Policy RAG 与 MVP。', ['VOICE AI', 'STRUCTURED OUTPUT', 'RAG']],
  ['phase3.html', 8, 10, 'Stage 3 · MCP, Bounded Agent & Safe Memory', '先把已有能力包装成有权限和审计的 MCP tools，再构建 bounded single Agent，最后增加带 provenance、scope、TTL 和删除规则的长期 Memory。', ['MCP', 'AGENT', 'MEMORY']],
  ['phase4.html', 11, 13, 'Stage 4 · Production Harness, Routing & Release', '把 Agent 与 Memory 放进可控制、可恢复、可观测的 Harness；加入 Model Routing；最终用 eval、安全与故障演练完成 release decision 和 system design defense。', ['HARNESS', 'ROUTING', 'GOVERNANCE']]
];

for (const [file, start, end, title, intro, tags] of stages) {
  pages[file] = shell({
    title, eyebrow: tags.join(' · '), active: file, intro,
    body: section(`W${start}–W${end} 正式 Live`, `<div class="sessions">${sessionCards(start, end)}</div>`) +
      section('阶段完成标准', `<p>${start === 1 ? '业务 workflow、role、version 与 audit 可运行；UI 和代码不是只有截图。' : start === 4 ? '每一条 AI output 都可人工修订、确认并追溯；RAG 有 citation 和 evaluation evidence。' : start === 8 ? 'Tool、Agent 与 Memory 都有明确 permission、termination、human review 和 poisoning/越权测试。' : '系统通过 production eval、security/failure drill 与 release gate；未达门槛时必须明确 blocked release。'}</p>`, 'tint')
  });
}

pages['outline.html'] = shell({
  title: '课程大纲入口', eyebrow: 'CANONICAL OUTLINE', active: '',
  intro: '第七期正式大纲已经独立成页。旧版长大纲已保留在 archive，不再作为当前排课依据。',
  body: section('当前版本', `<p><a class="button" href="cohort-7.html">打开第七期 13 周完整大纲 →</a></p><p class="muted">历史版本：<a href="archive/cohort-5/outline.html">Cohort 5 / pre-Cohort-7 legacy snapshot</a></p>`)
});

pages['internal.html'] = shell({
  title: '第七期课程治理说明', eyebrow: 'CURRICULUM GOVERNANCE', active: '',
  intro: '公开页面只展示已经确认的第七期安排。排课、课程内容和统计数字统一读取 outline.json；历史页面只用于追溯。',
  body: section('内容状态', cards([
    ['正式 Live', '带 cohort7Week、cohort7Track、cohort7SessionOrder 和 confirmed status 的 25 场课。'],
    ['录播候选', '由 Ada 对过去五期视频的完成度、讲解质量和可复用性做证据核查后再选用。'],
    ['Pool', '尚未排入正式学习顺序的内容留在 pool，不因为旧大纲存在就自动占用 Live。'],
    ['Archive', '旧页面保留原貌并脱离当前导航；不删除历史 URL。']
  ])) + section('历史入口', `<p><a class="button secondary" href="archive/cohort-5/index.html">查看 Cohort 5 / legacy archive →</a></p>`, 'tint')
});

for (const [file, html] of Object.entries(pages)) await writeFile(join(root, file), html);

for (const [file, label] of [
  ['landing-us.html', '美国第六期 Landing Page'],
  ['review-new-content.html', '旧版新增内容 Review'],
  ['review-restructure.html', '旧版重组 Review']
]) {
  const archived = `archive/cohort-5/${file}`;
  await writeFile(join(root, file), shell({
    title: `${label}已归档`, eyebrow: 'LEGACY URL · ARCHIVED', active: '',
    intro: '这个线上 URL 为兼容历史链接继续保留，但旧内容已经退出当前课程导航。第七期内容请以新的正式大纲为准。',
    body: section('请选择版本', `<p><a class="button" href="cohort-7.html">打开 AI Engineer 第七期大纲 →</a></p><p><a href="${archived}">查看只读历史快照</a></p>`)
  }));
}

await writeFile(join(root, 'cohort-7-pages.css'), `:root{--ink:#151515;--paper:#fff1e7;--red:#ff5757;--yellow:#ffd84d;--blue:#8ed7ff;--green:#a8efbd;--white:#fff;--muted:#665f5a}*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,Arial,"PingFang SC",sans-serif;line-height:1.65}.topbar{position:sticky;top:0;z-index:5;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:15px 4vw;background:rgba(255,241,231,.96);border-bottom:3px solid #000}.brand{font-size:26px;font-weight:1000;color:#000;text-decoration:none;letter-spacing:-1px}.brand span{display:block;font:700 10px monospace;letter-spacing:2px}.topbar nav{display:flex;flex-wrap:wrap;gap:6px}.topbar nav a{color:#000;text-decoration:none;font-size:13px;font-weight:800;padding:7px 9px;border:2px solid transparent}.topbar nav a:hover,.topbar nav a[aria-current=page]{background:var(--yellow);border-color:#000}main{max-width:1180px;margin:auto;padding:42px 24px 70px}.hero{padding:48px clamp(24px,5vw,70px);background:var(--red);border:3px solid #000;box-shadow:9px 9px 0 #000}.eyebrow,.week,.track{font:800 12px monospace;letter-spacing:1px}.hero h1{max-width:900px;margin:8px 0 14px;font-size:clamp(38px,6vw,74px);line-height:1;letter-spacing:-3px}.lead{max-width:900px;font-size:19px;font-weight:600}.metrics{display:flex;flex-wrap:wrap;gap:9px;margin-top:24px}.metrics span,.week,.track{background:#fff;border:2px solid #000;padding:5px 9px}.section{padding:52px 0 10px}.section>h2{font-size:clamp(28px,4vw,44px);line-height:1.05;letter-spacing:-1.5px}.tint{margin-top:40px;padding:38px;background:var(--blue);border:3px solid #000;box-shadow:7px 7px 0 #000}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.card,.session{padding:22px;background:#fff;border:3px solid #000;box-shadow:6px 6px 0 #000}.card h3,.session h3{margin:4px 0 8px;font-size:21px}.card p,.session p{margin:0}.sessions{display:grid;gap:16px}.session.practice{background:#fff}.session.theory{background:var(--green)}.session .track{margin-left:8px;background:var(--yellow)}.flow{padding:30px;background:#fff;border:3px solid #000;box-shadow:7px 7px 0 #000;font:800 clamp(16px,2.5vw,24px)/1.8 monospace}.button{display:inline-block;background:var(--yellow);color:#000;text-decoration:none;font-weight:900;padding:13px 18px;border:3px solid #000;box-shadow:5px 5px 0 #000}.secondary{background:#fff}table{width:100%;border-collapse:collapse;background:#fff}th,td{padding:14px;border:2px solid #000;text-align:left;vertical-align:top}.muted,footer{color:var(--muted)}footer{padding:28px;text-align:center;border-top:3px solid #000}footer a{color:#000}@media(max-width:760px){.topbar{position:static;align-items:flex-start;flex-direction:column}.topbar nav{overflow:auto;flex-wrap:nowrap;width:100%}.topbar nav a{white-space:nowrap}main{padding:24px 14px 55px}.hero{padding:30px 20px;box-shadow:6px 6px 0 #000}.hero h1{letter-spacing:-2px}.grid{grid-template-columns:1fr}.tint{padding:22px}.section{padding-top:38px}th,td{display:block;width:100%}th{background:var(--yellow)}}`);

outline.curriculumPages = {
  pages: ['cohort-7.html', 'curriculum.html', 'architecture.html', 'phase1.html', 'phase2.html', 'phase3.html', 'phase4.html', 'learning-plan.html', 'jd-mapping.html'],
  defaultPage: 'cohort-7.html'
};
await writeFile(join(root, 'outline.json'), `${JSON.stringify(outline, null, 2)}\n`);
await writeFile(join(root, 'pages.json'), `${JSON.stringify(outline.curriculumPages, null, 2)}\n`);

await mkdir(join(root, 'archive', 'cohort-5'), { recursive: true });
await writeFile(join(root, 'archive', 'cohort-5', 'index.html'), `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AI Engineer 历史课程页面 Archive</title><link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"><link rel="stylesheet" href="../../cohort-7-premium.css"></head><body><main><section class="hero archive-hero"><div class="hero-copy"><p class="eyebrow">READ-ONLY ARCHIVE</p><h1>Cohort 5 / Legacy Pages</h1><p class="lead">2026-08-25 第七期页面更新前保存的历史快照。仅用于追溯，不代表当前排课。</p></div></section><section class="section"><h2>归档页面</h2><div class="grid">${['curriculum','outline','architecture','learning-plan','phase1','phase2','phase3','phase4','jd-mapping','internal','landing-us','review-new-content','review-restructure'].map((name)=>`<a class="card" href="${name}.html"><h3>${name}.html</h3><p>打开只读历史页面</p></a>`).join('')}</div><p><a class="button" href="../../cohort-7.html">返回第七期大纲</a></p></section></main></body></html>`);

console.log(`Generated ${Object.keys(pages).length} Cohort 7 pages from ${live.length} live sessions.`);
