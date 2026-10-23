/* Deterministic teaching works. No model, analytics, form or publishing request. */
(async () => {
	const d = await fetch('case-study.json').then(r => {
		if (!r.ok) throw Error('作品资料暂不可用');
		return r.json();
	});
	const root = document.getElementById('main');
	const esc = s =>
		String(s).replace(
			/[&<>"']/g,
			c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
		);
	const image =
		'<img src="assets/coffee-editorial-v2.png" alt="拾序咖啡 两款咖啡产品与奶咖的 Image Model 品牌概念图">';
	const officeImage =
		'<img src="assets/coffee-office-v2.png" alt="Image Model 生成的 Daily Filter 挂耳与办公桌场景概念图">';
	const embed = new URLSearchParams(location.search).has('embed');
	if (embed) document.body.classList.add('embed');
	const action = (text, href) =>
		`<a class="action" href="${href}" target="_blank" rel="noopener">${text} ↗</a>`;
	const header = () =>
		`<nav class="topnav"><a class="wordmark" href="example-website.html">SHIXU COFFEE</a><span class="tiny">拾序咖啡 / 虚构教学品牌</span></nav>`;
	const footer =
		'<footer class="footer-note">JR Academy · 企业 AI 自动化实战营作品示例。品牌、产品、价格均为虚构设定；图像由 Image Model 生成，为品牌概念图。互动仅作用于当前页面，不收集信息、不下单、不发送、不调用模型。</footer>';
	const opening = (n, title, desc) =>
		`<header class="opening"><span class="micro">${n} / SHIXU COFFEE</span><h1>${title}</h1><p class="muted">${desc}</p></header>`;
	function website() {
		return `${header()}<section class="brandhero"><div><span class="micro">A SLOWER START.</span><h1>早晨很赶，<br>咖啡可以<br>慢一点。</h1><p class="lead">不用先变成咖啡专家。选一包适合自己的豆子，给早晨留一杯顺口的奶咖。</p><div class="actions"><a class="action" href="#products">找到你的那一杯 ↓</a><a class="action secondary" href="#brew">三步冲煮指南</a></div><p class="brand-note muted">House Blend · 200g · 可可 / 榛果 / 焦糖</p></div>${image}</section><section class="section" id="products"><header><h2>家里一包，工位一盒。</h2><span class="tiny">两种场景，选择简单一点。</span></header><div class="grid"><article class="card product"><div class="art">${image}</div><div class="info"><span class="price">A$22</span><span class="micro">AT HOME</span><h3>House Blend</h3><p>200g 咖啡豆 · 可可 / 榛果 / 焦糖<br>适合喜欢坚果与可可风味的奶咖爱好者。</p><a class="action secondary" href="#brew">看看怎么冲</a></div></article><article class="card product"><div class="art">${officeImage}</div><div class="info"><span class="price">A$18</span><span class="micro">AT WORK</span><h3>Daily Filter</h3><p>10 包独立挂耳 · 每包 10g<br>办公室不用再多添一台机器，有耐热杯和热水即可开始。</p><a class="action secondary" href="#chooser">帮我选一款</a></div></article></div><p class="tiny">示例价格为虚构品牌设定，与课程学费无关。本站不开放购买。</p></section><section class="section" id="brew"><header><h2>明早，先试这个起点。</h2><span class="tiny">示范配方，按器材与口味调整。</span></header><div class="grid3"><article class="card guide"><div class="number">01</div><h3>18g 咖啡粉</h3><p>从固定粉量开始。使用适合意式萃取的研磨，保持其余条件一致。</p></article><article class="card guide"><div class="number">02</div><h3>约 36g 咖啡液</h3><p>先尝一口，再判断偏酸、偏苦还是太淡。一次只改一个变量。</p></article><article class="card guide"><div class="number">03</div><h3>约 150ml 牛奶</h3><p>加入热牛奶，按喜好调整比例。热液与设备操作注意防烫。</p></article></div></section><section class="section card selector" id="chooser"><span class="micro">FIND YOUR CUP</span><h2>你会在哪里喝这一杯？</h2><div class="actions"><button class="action" data-choice="home" aria-pressed="true">在家，有咖啡机</button><button class="action" data-choice="office" aria-pressed="false">工位，只有杯子</button></div><p class="selector-result" id="choice-result" role="status">给你的选择：House Blend。先从可可与坚果风味的奶咖开始。</p><p class="tiny">本地选豆互动，仅按场景切换建议。</p></section><section class="section grid"><div><span class="micro">OUR LITTLE RITUAL</span><h2>把选择变简单，<br>把早晨留给自己。</h2></div><div><p>拾序是本课程的虚构咖啡品牌。品牌围绕两个日常场景展开：厨房里的第一杯奶咖，与工位上的午后挂耳。</p><p>没有夸张的评分、销量或“人人都适合”。产品规格、适用场景和冲煮起点写清楚，你再决定从哪里开始。</p></div></section><section class="section"><h2>你可能还想知道</h2><details><summary>咖啡里添加了可可和榛果吗？</summary><p>这里的可可、榛果、焦糖是风味描述，不代表添加了这些食材。实际食材与过敏原信息需以正式产品包装为准；本页为虚构原型。</p></details><details><summary>我没有咖啡机，可以选哪款？</summary><p>可浏览 Daily Filter：10 包独立挂耳，每包 10g。准备耐热杯与热水，冲煮时注意防烫，具体方法以实际产品说明为准。</p></details><details><summary>这里可以下单吗？</summary><p>不能。这是课程的隔离教学原型，没有真实商品、订单、支付或联系表单。</p></details></section><section class="section brand-spec"><details><summary>打开这套网站的 Mini Brand System</summary><div class="brandstrip"><div><div class="type">SHIXU COFFEE</div><div class="swatches"><div class="swatch"><i style="background:#243b35"></i>Forest</div><div class="swatch"><i style="background:#f2e5d4"></i>Oat</div><div class="swatch"><i style="background:#a74828"></i>Terracotta</div></div></div><div><p>温暖纸色 + 深林绿 + 陶土色。包装用 serif 字标，网页用清楚的无衬线字体。产品卡同时写明规格、场景和下一步。</p>${download(
			'下载完整品牌规范',
			'shixu-brand-guide.md'
		)}</div></div></details></section>${footer}`;
	}
	let requestKey = 'home';
	const chips = labels =>
		`<div class="source-chips">${labels.map(t => `<span>${esc(t)}</span>`).join('')}</div>`;
	const download = (label, file) =>
		`<a class="action secondary" href="downloads/${file}" download>${label} ↓</a>`;
	const copyControl = target =>
		`<button class="action secondary" data-copy="${target}">复制全文</button><span class="tiny" role="status" data-copy-status="${target}"></span>`;
	function workspace() {
		const sample = d.assistantSamples[requestKey];
		return `${opening(
			'01',
			'企业资料放一次，四种工作都能用。',
			'切换任务，直接查看客户回复、品牌介绍、FAQ 与异常交接。'
		)}<section class="workspace-banner"><div><span class="micro">SHIXU / AI WORKSPACE</span><h2>一个品牌，<br>不用从头解释四次。</h2><p>产品、语气和已知事实保持一致。<br>左边是一份 Brief，右边是能直接读完的成果。</p></div>${image}</section><div class="workspace upgraded"><aside class="brief-sidebar"><span class="micro">BRAND BRIEF / V1</span><h3>拾序咖啡</h3><p>给忙碌早晨的一杯顺口咖啡。</p><ul class="brief-list"><li><b>House Blend</b>200g · 可可 / 榛果 / 焦糖<br>居家奶咖 · 教学价 A$22</li><li><b>Daily Filter</b>10 × 10g · 独立挂耳<br>工位咖啡 · 教学价 A$18</li><li><b>品牌语气</b>${esc(
			d.business.voice
		)}</li></ul><p class="tiny">虚构产品与价格，不代表实际经营。</p><details><summary>查看完整资料与工作指令</summary><p>${esc(
			d.business.audience
		)}</p><p>只使用 Brief 的产品事实。缺少库存、配送、活动或证言时列出待确认；不补写承诺。</p><p>输出完整草稿、依据、待确认项和审核清单；不发送、不发布、不下单。</p></details>${download(
			'下载四份完整成果',
			'shixu-assistant-workbook.md'
		)}</aside><section class="reply-workbench"><div class="controlbar" aria-label="选择预生成任务">${Object.entries(
			d.assistantSamples
		)
			.map(
				([key, x]) =>
					`<button data-request="${key}" aria-pressed="${requestKey === key}">${
						x.label
					}</button>`
			)
			.join('')}</div><div class="request" id="request-text">${esc(
			sample.request
		)}</div><article class="finished-reply"><span class="micro">READY TO REVIEW / 预生成</span><h2>${
			sample.title
		}</h2><div class="reply-body" id="reply-text">${esc(
			sample.body
		)}</div></article><div class="reply-toolbar">${copyControl(
			'reply-text'
		)}</div><div class="evidence-strip"><strong>这段内容依据什么？</strong>${chips(
			sample.sources
		)}<p>${sample.handoff}</p></div></section></div>${footer}`;
	}
	function brand() {
		return `${opening(
			'02',
			'同一份品牌，从包装走到官网。',
			'色彩、标题、产品卡和按钮保持一致。打开网站，可以逛产品、看指南、体验选豆。'
		)}<section class="card brandstrip"><div><span class="micro">MINI BRAND SYSTEM</span><div class="type">SHIXU COFFEE<br>MAKE ROOM FOR<br>A SLOW MORNING.</div><div class="swatches"><div class="swatch"><i style="background:#243b35"></i>Forest</div><div class="swatch"><i style="background:#f2e5d4"></i>Oat</div><div class="swatch"><i style="background:#a74828"></i>Terracotta</div></div><p class="tiny">虚构咖啡品牌的 VI；课程官网继续使用 JR Academy Design System。</p></div><div><h2>早晨很赶，<br>咖啡可以慢一点。</h2><p>标题用一句日常场景，正文写清规格。深色按钮只留给明确动作，产品卡同时展示包装、适用场景与价格。</p>${action(
			'打开完整品牌官网',
			'example-website.html'
		)}</div></section><section class="section">${website()
			.replace(header(), '')
			.replace(footer, '')}</section>${footer}`;
	}
	let channel = 'xhs';
	const channelNames = {
		xhs: '小红书图文',
		wechat: '公众号文章',
		linkedin: 'LinkedIn',
		email: '产品邮件'
	};
	let slide = 0;
	const cardArt = i => {
		const card = d.carousel[i];
		return `<div class="social-art ${card.style}"><span>${card.kicker}</span><h2>${esc(
			card.title
		).replace(/\n/g, '<br>')}</h2>${
			i === 0
				? image
				: i === 1
				? '<div class="taste-notes"><b>COCOA</b><b>HAZELNUT</b><b>CARAMEL</b></div>'
				: i === 2
				? '<div class="recipe-numbers"><b>18<small>g 粉</small></b><i>→</i><b>36<small>g 液</small></b><i>→</i><b>150<small>ml 奶</small></b></div>'
				: '<div class="brand-signature">SHIXU<br>COFFEE<span>A SLOWER START.</span></div>'
		}<p>${esc(card.body).replace(/\n/g, '<br>')}</p><small>SHIXU COFFEE · ${
			i + 1
		} / 4 · 教学设计</small></div>`;
	};
	const readingBody = key =>
		['xhs', 'wechat'].includes(key)
			? d.week1[key].split('\n\n').slice(1).join('\n\n')
			: d.week1[key];
	const channelTitle = {
		xhs: '奶咖总是酸？先别急着换机器。',
		wechat: '早上只想喝一杯顺口奶咖。',
		linkedin: 'One product. A consistent story.',
		email: '给忙碌早晨的一封邮件'
	};
	function content() {
		const cover =
			channel === 'xhs'
				? `<div class="carousel-preview"><div id="slide-art">${cardArt(
						slide
				  )}</div><div class="carousel-controls"><button class="action secondary" data-slide="previous" aria-label="上一张图文">←</button><span id="slide-count" aria-live="polite">${
						slide + 1
				  } / 4</span><button class="action secondary" data-slide="next" aria-label="下一张图文">→</button></div><p class="tiny">左右切换完整四张图文设计。</p></div>`
				: `<div class="channel-cover ${channel}">${image}<span class="micro">${
						channel === 'email'
							? 'A LETTER FOR YOUR MORNING'
							: channel === 'linkedin'
							? 'SHIXU COFFEE / BRAND JOURNAL'
							: '拾序来信 / COFFEE JOURNAL'
				  }</span><h2 id="cover-title">${
						channelTitle[channel]
				  }</h2><p>一个场景，一份清楚的产品介绍。</p></div>`;
		return `${opening(
			'03',
			'一组产品素材，做出四种完整内容。',
			'图文能翻页，邮件能阅读，四个渠道都保留全文。'
		)}<div class="channel-heading"><div class="controlbar" aria-label="选择内容渠道">${Object.entries(
			channelNames
		)
			.map(
				([key, name]) =>
					`<button data-channel="${key}" aria-pressed="${
						channel === key
					}">${name}</button>`
			)
			.join('')}</div>${download(
			'下载完整 Content Pack',
			'shixu-content-pack.md'
		)}</div><section class="campaign-layout">${cover}<article class="channel-reading ${channel}"><header><span class="pill" id="channel-label">${
			channelNames[channel]
		} · draft</span><h3 id="post-title">${channelTitle[channel]}</h3>${
			channel === 'email'
				? '<div class="email-address">FROM / SHIXU COFFEE<br>TO / 教学订阅读者 · 未发送</div>'
				: ''
		}</header><div class="post-copy" id="post-body">${esc(
			readingBody(channel)
		)}</div><div class="reply-toolbar">${copyControl(
			'post-body'
		)}</div><p class="source-note">依据：品牌 Brief、两款产品规格与冲煮示范。图像为 Image Model 概念图；未发布或发送。</p></article></section><section class="section campaign-calendar"><div><span class="micro">ONE WEEK / FOUR CHANNELS</span><h3>一个主题，<br>用不同方式讲清楚。</h3></div><ol class="calendar"><li><strong>MON</strong><span>小红书｜四张图，一张清单<br>用生活问题切入，保存后明早能试。</span></li><li><strong>TUE</strong><span>公众号｜一篇完整解释<br>选豆、冲煮与使用场景连起来。</span></li><li><strong>WED</strong><span>LinkedIn｜品牌表达<br>用英文说明产品与信息一致性。</span></li><li><strong>THU</strong><span>Email｜一封产品来信<br>主题、正文、下一步入口一起交付。</span></li></ol></section>${footer}`;
	}
	const shotArt = index => {
		if (index === 1)
			return `<div class="shot-product">${image}<div class="flavour-tags"><span>COCOA</span><span>HAZELNUT</span><span>CARAMEL</span></div></div>`;
		if (index === 2)
			return '<div class="recipe-art"><span>ONE SIMPLE START</span><strong>18g<small>咖啡粉</small></strong><b>↓</b><strong>36g<small>咖啡液</small></strong><b>↓</b><strong>150ml<small>牛奶</small></strong></div>';
		if (index === 3)
			return `<div class="office-art photo">${officeImage}<span>给工位，留三分钟。</span></div>`;
		if (index === 4)
			return '<div class="end-art"><span>SHIXU COFFEE</span><strong>MAKE ROOM<br>FOR A SLOW<br>MORNING.</strong><small>HOUSE BLEND / DAILY FILTER</small></div>';
		return image;
	};
	let shot = 0;
	function video() {
		const s = d.shots[shot];
		return `${opening(
			'04',
			'45 秒品牌短片，先把每一镜做清楚。',
			'选择下方任一镜头，查看画面、字幕和剪辑安排。这是可逐镜查看的 Storyboard，不是已渲染视频。'
		)}<section class="shot-stage"><div id="shot-art">${shotArt(
			shot
		)}</div><div><span class="micro" id="shot-time">SHOT ${shot + 1} / ${
			s.time
		}s</span><h2 id="shot-title">${s.title}</h2><p id="shot-caption">${
			s.caption
		}</p><span class="pill">Storyboard · 非 MP4 成片</span></div></section><div class="shot-list" aria-label="选择分镜">${d.shots
			.map(
				(s, i) =>
					`<button data-shot="${i}" aria-pressed="${shot === i}"><strong>0${i + 1} · ${
						s.time
					}s</strong>${s.title}</button>`
			)
			.join(
				''
			)}</div><section class="grid"><article class="card"><h3>画面怎么做</h3><p id="shot-visual">${
			s.visual
		}</p><p class="tiny" id="shot-direction">${
			s.direction
		}</p></article><article class="card"><h3>Codex 在这一课做什么</h3><p>把品牌资料、产品图与 Script 组织成可修改的场景代码；调整镜头时长、字幕位置和转场，再检查手机画面的可读性。</p><p class="tiny">这里展示完整五镜脚本。完整 MP4 尚未制作，不能据此判断成片效果。</p></article></section><details class="card section"><summary>阅读完整 45 秒 Script / Storyboard</summary>${d.shots
			.map(
				s =>
					`<h3 style="margin-top:24px">${s.time}s · ${s.title}</h3><p>${s.visual}</p><p>字幕：${s.caption}</p><p class="tiny">${s.direction}</p>`
			)
			.join('')}</details>${footer}`;
	}
	let week = 1;
	function weekly() {
		const w = d['week' + week];
		return `${opening(
			'05',
			'周一打开，就知道这一周发什么。',
			'切换两周，直接比较业务更新如何变成完整草稿和审核交接。预生成样例，不是真实排程。'
		)}<div class="controlbar"><button data-week="1" aria-pressed="${
			week === 1
		}">Week 01 · 居家奶咖</button><button data-week="2" aria-pressed="${
			week === 2
		}">Week 02 · 工位挂耳</button></div><section class="week-campaign-hero">${
			week === 1 ? image : officeImage
		}<div><span class="micro">WEEKLY CONTENT DESK</span><h2>${w.theme}</h2><p>${
			w.update
		}</p>${download(
			'下载本周完整工作包',
			`shixu-week-0${week}.md`
		)}</div></section><section class="card"><div class="week-head"><div><span class="micro">WEEK 0${week} / READY TO REVIEW</span><h2>${
			w.theme
		}</h2></div><span class="pill">2 篇完整草稿 · 等待人工审核</span></div><div class="workflow-line"><span>本周更新</span>→<span>选题与草稿</span>→<span>人工审核</span>→<span>交接</span></div><div class="grid"><div><strong>这一周，有什么新资料？</strong><p>${
			w.update
		}</p></div><div><strong>为什么选这个题？</strong><p>${esc(
			w.why
		)}</p></div></div><article class="week-output"><span class="pill">小红书 · draft</span><h3>${
			w.topic
		}</h3>${esc(
			w.xhs
		)}</article><article class="week-output"><span class="pill">Email · draft / 未发送</span><h3>给负责人一起审核的邮件</h3>${esc(
			w.email
		)}</article></section><section class="section grid"><article class="card"><h3>本周交接简报</h3><p>${esc(
			w.handoff
		)}</p><ul class="checklist">${d.workflow.review
			.map(x => `<li>${esc(x)}</li>`)
			.join(
				''
			)}</ul></article><article class="card"><h3>接下来，由你决定。</h3><p>打开全文 → 修改 → 审核 → 批准。Workflow 把准备工作交给 AI，把最后的业务判断留给负责人。</p><details><summary>查看 Scheduled Task 模板</summary><div class="code">${esc(
			d.workflow.schedule
		)}</div></details><p class="tiny">没有执行真实模型或 Scheduled Task。真实定时触发仍待验收。</p></article></section>${footer}`;
	}
	let selectedPanel = 3;
	function panel() {
		const m = location.hash.match(/result-L0([1-5])/);
		if (m) selectedPanel = Number(m[1]);
		return selectedPanel;
	}
	function render() {
		if (document.body.dataset.page === 'website') {
			root.innerHTML = website();
			return;
		}
		const n = panel();
		root.innerHTML =
			header() +
			`<nav class="studio-nav" aria-label="作品导航">${[
				'AI Workspace',
				'品牌与官网',
				'营销内容',
				'视频分镜',
				'每周工作包'
			]
				.map(
					(t, i) =>
						`<a href="#result-L0${i + 1}" ${
							n === i + 1 ? 'aria-current="page"' : ''
						}>0${i + 1} ${t}</a>`
				)
				.join('')}</nav>` +
			[workspace, brand, content, video, weekly][n - 1]();
	}
	document.addEventListener('click', e => {
		const b = e.target.closest('button');
		if (!b) return;
		if (b.dataset.choice) {
			document
				.querySelectorAll('[data-choice]')
				.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
			document.getElementById('choice-result').textContent =
				b.dataset.choice === 'home'
					? '给你的选择：House Blend。先从可可与坚果风味的奶咖开始。'
					: '给你的选择：Daily Filter。10 包独立挂耳，让工位上的一杯简单一点。';
		}
		if (b.dataset.request) {
			requestKey = b.dataset.request;
			render();
			document
				.querySelector(`[data-request="${requestKey}"]`)
				?.focus({ preventScroll: true });
		}
		if (b.dataset.channel) {
			channel = b.dataset.channel;
			render();
			document.querySelector(`[data-channel="${channel}"]`)?.focus({ preventScroll: true });
		}
		if (b.dataset.slide) {
			slide = (slide + (b.dataset.slide === 'next' ? 1 : 3)) % 4;
			document.getElementById('slide-art').innerHTML = cardArt(slide);
			document.getElementById('slide-count').textContent = `${slide + 1} / 4`;
		}
		if (b.dataset.copy) {
			const target = b.dataset.copy;
			const status = document.querySelector(`[data-copy-status="${target}"]`);
			navigator.clipboard
				?.writeText(
					(target === 'post-body' ? channelTitle[channel] + '\n\n' : '') +
						document.getElementById(target).innerText
				)
				.then(() => {
					status.textContent = '已复制完整内容';
				})
				.catch(() => {
					status.textContent = '复制未成功，可选择正文复制或下载成果稿。';
				});
			if (!navigator.clipboard) status.textContent = '请手动选择正文复制，或下载成果稿。';
		}
		if (b.dataset.shot) {
			shot = Number(b.dataset.shot);
			const s = d.shots[shot];
			document.getElementById('shot-art').innerHTML = shotArt(shot);
			document
				.querySelectorAll('[data-shot]')
				.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
			document.getElementById('shot-time').textContent = `SHOT ${shot + 1} / ${s.time}s`;
			document.getElementById('shot-title').textContent = s.title;
			document.getElementById('shot-caption').textContent = s.caption;
			document.getElementById('shot-visual').textContent = s.visual;
			document.getElementById('shot-direction').textContent = s.direction;
		}
		if (b.dataset.week) {
			week = Number(b.dataset.week);
			render();
			document.querySelector(`[data-week="${week}"]`)?.focus({ preventScroll: true });
		}
	});
	render();
	window.addEventListener('hashchange', () => {
		// Internal website anchors must not reset the selected work to the default panel.
		if (document.body.dataset.page !== 'website' && /^#result-L0[1-5]$/.test(location.hash))
			render();
	});
	if (embed) {
		let previous = 0;
		const notify = () => {
			const height = Math.ceil(document.documentElement.getBoundingClientRect().height);
			if (height !== previous) {
				parent.postMessage(
					{ type: 'enterprise-course-example-height', height },
					location.origin
				);
				previous = height;
			}
		};
		new ResizeObserver(notify).observe(document.body);
		notify();
	}
})().catch(() => {
	document.getElementById('main').innerHTML = '<h1>作品暂时未能加载</h1><p>请刷新页面重试。</p>';
});
