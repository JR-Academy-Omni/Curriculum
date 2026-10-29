(function(){
  const key=document.body.dataset.course;
  const c=window.COURSES[key];
  if(!c){document.body.innerHTML='<main class="page"><h1>课程信息暂不可用</h1></main>';return;}
  document.title=`${c.title}｜JR Academy AI Agent 工作实战课`;
  document.documentElement.style.setProperty('--accent',c.accent);
  document.documentElement.style.setProperty('--accent2',c.accent2);
  document.documentElement.style.setProperty('--accentDark',c.accentDark);
  const cards=(items,mapper)=>items.map(mapper).join('');
  const list=items=>`<ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul>`;
  document.getElementById('app').innerHTML=`
    <main class="page">
      <div class="topbar"><a class="back" href="../posters.html#agent-workshops-2026">← 返回十门课程入口</a><span class="tier">${c.tier}</span></div>
      <section class="hero" data-code="${c.code}"><span class="eyebrow">AI AGENT FOR WORK · HANDS-ON</span><h1>${c.title}</h1><p class="promise">${c.promise}</p><div class="stats"><span class="stat">${c.duration}</span><span class="stat">${c.level}</span><span class="stat">真实工作成果</span><span class="stat">现场实操</span></div></section>
      <section class="section"><div class="section-head">Before → Codex → After</div><h2>你可能已经会用 Codex，课程帮你把“会用”变成稳定工作能力</h2><div class="compare"><article class="compare-card"><span class="label">你现在可能</span><h3>能完成，但不稳定</h3>${list(c.before)}</article><article class="compare-card"><span class="label">Codex 可以帮助</span><h3>加速实现与重复执行</h3>${list(c.codex)}</article><article class="compare-card"><span class="label">学完以后</span><h3>形成可交付工作系统</h3>${list(c.after)}</article></div></section>
      <section class="section"><div class="section-head">Course Highlights</div><h2>这门课真正解决什么</h2><div class="grid">${cards(c.highlights,(x,i)=>`<article class="card"><span class="num">0${i+1}</span><h3>${x.t}</h3><p>${x.d}</p></article>`)}</div></section>
      <section class="section"><div class="section-head">What You Build</div><h2>结课时，你手里会有这些可以继续使用的成果</h2><div class="outcomes">${cards(c.outcomes,x=>`<article class="result-card"><span class="check">✓</span><div><strong>${x}</strong><span>课堂完成，可带回真实工作继续迭代。</span></div></article>`)}</div></section>
      <section class="section"><div class="section-head">Use It At Work</div><h2>可以怎样实际运用在工作里</h2><div class="grid">${cards(c.applications,(x,i)=>`<article class="card"><span class="num">${String(i+1).padStart(2,'0')}</span><h3>${x}</h3><p>用课堂建立的Agent、模板和检查机制处理真实任务。</p></article>`)}</div></section>
      <section class="section"><div class="section-head">Who It Is For</div><h2>适合人群</h2><div class="audience">${cards(c.audience,x=>`<span class="audience-card">${x}</span>`)}</div></section>
      <section class="section"><div class="section-head">Course Schedule</div><h2>${c.duration}课程安排</h2><div class="schedule">${cards(c.modules,(x,i)=>`<article class="module"><span class="index">${String(i+1).padStart(2,'0')}</span><div><h3>${x.t}</h3><p>${x.d}</p></div><span class="time">${x.m}</span></article>`)}</div></section>
      <section class="section"><div class="section-head">Important</div><h2>重点不是多学几个工具，而是把工作做对</h2><div class="focus"><h3>课程坚持的工作标准</h3>${list(c.focus)}</div></section>
      <section class="cta"><h2>带一个真实任务来，带一套可复用成果回去</h2><p>${c.promise} 课堂以示范、跟做、验证和复盘为主，不用大量时间讲泛泛的AI概念。</p></section>
      <footer class="footer">JR Academy · AI Agent 在职实战短课系列 · 课程内容会随主流模型、Codex能力和企业实践持续更新。</footer>
    </main>`;
})();
