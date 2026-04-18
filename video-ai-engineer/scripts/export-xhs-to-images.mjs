#!/usr/bin/env node
/**
 * 用 puppeteer-core + Chrome 原生 page.screenshot 导出 xhs-posters 真实海报。
 *
 * 为什么改用 page.screenshot 而不是 html2canvas：
 *   html2canvas 是用 canvas 重新"模拟渲染"DOM，对复杂 CSS（渐变、阴影、
 *   webkit-filter、某些字体）常有失真。page.screenshot 直接调 Chrome 的
 *   paint 层 → 和浏览器里你肉眼看到的像素级一致。
 *
 * 做法：
 *   1. 载入 xhs-posters/index.html
 *   2. 把每张 poster 暂时摘出来放到页面顶层、transform 清零、再裹一层
 *      和导出按钮一样的边框+投影 frame
 *   3. page.screenshot({ clip: 精确坐标 }) → 直接拿到 PNG bytes
 *   4. 复原 DOM
 *
 * 用法：bun run scripts/export-xhs-to-images.mjs
 */
import puppeteer from 'puppeteer-core';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_DIR = resolve(ROOT, 'src/assets/images');
const XHS_PATH = resolve(
	ROOT,
	'../ai-engineer-bootcamp/public/xhs-posters/index.html',
);

const CHROME_CANDIDATES = [
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	`${process.env.HOME}/.cache/puppeteer/chrome-headless-shell/mac_arm-146.0.7680.153/chrome-headless-shell-mac-arm64/chrome-headless-shell`,
];
const chromePath = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chromePath) {
	console.error('❌ 找不到 Chrome');
	process.exit(1);
}
console.log(`🌐 Chrome: ${chromePath}`);

/* ---- 13 张 poster ↔ 输出文件 ---- */
const MAP = [
	{ dom: 'poster-2', slug: 'p2-painpoint', out: 'mp-ai-engineer-01-p2-painpoint.png' },
	{ dom: 'poster-3', slug: 'p3-conversation', out: 'mp-ai-engineer-02-p3-conversation.png' },
	{ dom: 'poster-4', slug: 'p4-outcomes', out: 'mp-ai-engineer-03-p4-outcomes.png' },
	{ dom: 'poster-5', slug: 'p5-roadmap', out: 'mp-ai-engineer-04-p5-roadmap.png' },
	{ dom: 'poster-6', slug: 'p6-stack', out: 'mp-ai-engineer-05-p6-stack.png' },
	{ dom: 'poster-12', slug: 'p12-rag', out: 'mp-ai-engineer-06-p12-rag.png' },
	{ dom: 'poster-13', slug: 'p13-agent', out: 'mp-ai-engineer-07-p13-agent.png' },
	{ dom: 'poster-15', slug: 'p15-labs', out: 'mp-ai-engineer-08-p15-labs.png' },
	{ dom: 'poster-17', slug: 'p17-projects', out: 'mp-ai-engineer-09-p17-projects.png' },
	{ dom: 'poster-16', slug: 'p16-timeline', out: 'mp-ai-engineer-10-p16-timeline.png' },
	{ dom: 'poster-7', slug: 'p7-feedback', out: 'mp-ai-engineer-11-p7-feedback.png' },
	{ dom: 'poster-8', slug: 'p8-format', out: 'mp-ai-engineer-12-p8-format.png' },
	{ dom: 'poster-9', slug: 'p9-cta', out: 'mp-ai-engineer-13-p9-cta.png' },
];

mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
	executablePath: chromePath,
	headless: true,
	defaultViewport: null,
	args: [
		'--no-sandbox',
		'--disable-dev-shm-usage',
		// 让 CJK 字体完全加载（默认 headless 有时跳 font loading）
		'--font-render-hinting=none',
		'--disable-font-subpixel-positioning',
	],
});

try {
	const page = await browser.newPage();
	// 视口要够大，装得下海报 + 边框 + 投影
	await page.setViewport({ width: 1600, height: 2000, deviceScaleFactor: 1 });

	const fileUrl = `file://${XHS_PATH}`;
	console.log(`📄 载入 ${fileUrl}`);
	await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 60000 });

	// 等字体完全加载 —— html2canvas 翻车最常见原因就是字体没 ready
	await page.evaluateHandle('document.fonts.ready');
	// 再给个 500ms 让 DOMContentLoaded 里的 injectPanels / p-course-bar 等异步逻辑跑完
	await new Promise((r) => setTimeout(r, 800));
	console.log(`✓ 字体就绪（${await page.evaluate(() => document.fonts.size)} fonts）`);

	/* 安装一个 setup 函数：把指定 poster 搬到页面顶层 + 裹 frame */
	await page.evaluate(() => {
		window.__setupForCapture = function (posterId) {
			const poster = document.getElementById(posterId);
			if (!poster) throw new Error('NO_POSTER ' + posterId);

			const POSTER_W = 1242, POSTER_H = 1660;
			const FRAME_BORDER = 6, FRAME_RADIUS = 36;
			const SHADOW_OFFSET = 24, PADDING = 48;
			const totalW = POSTER_W + FRAME_BORDER * 2 + PADDING * 2 + SHADOW_OFFSET;
			const totalH = POSTER_H + FRAME_BORDER * 2 + PADDING * 2 + SHADOW_OFFSET;

			// 记原位置用于复原
			const parent = poster.parentNode;
			const next = poster.nextSibling;
			const origStyle = poster.getAttribute('style') || '';

			// 摘出来，清 transform（原本为了预览是 scale 0.35）
			poster.style.transform = 'none';
			poster.style.position = 'relative';
			poster.style.top = '0';
			poster.style.left = '0';
			poster.style.width = POSTER_W + 'px';
			poster.style.height = POSTER_H + 'px';
			poster.style.margin = '0';

			// 外层 frame：6px 黑边 + 36px 圆角 + 24px 右下投影（同小红书下载按钮的样式）
			const frameDiv = document.createElement('div');
			frameDiv.style.cssText = [
				'box-sizing:border-box',
				`width:${POSTER_W + FRAME_BORDER * 2}px`,
				`height:${POSTER_H + FRAME_BORDER * 2}px`,
				`border:${FRAME_BORDER}px solid #10162f`,
				`border-radius:${FRAME_RADIUS}px`,
				`box-shadow:${SHADOW_OFFSET}px ${SHADOW_OFFSET}px 0 #10162f`,
				'background:#fff',
				'overflow:hidden',
			].join(';');
			frameDiv.appendChild(poster);

			// 容器：固定在页面顶层，给 page.screenshot 定位
			const wrapper = document.createElement('div');
			wrapper.id = '__capture_wrapper__';
			wrapper.style.cssText = [
				'position:absolute',
				'left:0',
				'top:0',
				`width:${totalW}px`,
				`height:${totalH}px`,
				`padding:${PADDING}px ${PADDING + SHADOW_OFFSET}px ${PADDING + SHADOW_OFFSET}px ${PADDING}px`,
				'background:#eef0f4',
				'box-sizing:border-box',
				'z-index:999999',
			].join(';');
			wrapper.appendChild(frameDiv);

			// 插到页面 top
			document.documentElement.scrollTo(0, 0);
			document.body.prepend(wrapper);

			// 记复原信息
			window.__restoreInfo = { poster, parent, next, origStyle, wrapper };

			return { totalW, totalH };
		};

		window.__restoreAfterCapture = function () {
			const r = window.__restoreInfo;
			if (!r) return;
			const { poster, parent, next, origStyle, wrapper } = r;
			// 把 poster 搬回原位
			if (next) parent.insertBefore(poster, next);
			else parent.appendChild(poster);
			if (origStyle) poster.setAttribute('style', origStyle);
			else poster.removeAttribute('style');
			wrapper.remove();
			window.__restoreInfo = null;
		};
	});

	console.log(`\n📸 用 Chrome 原生 screenshot 导出 ${MAP.length} 张：\n`);
	const start = Date.now();

	for (const [i, m] of MAP.entries()) {
		const t0 = Date.now();
		process.stdout.write(`  ${String(i + 1).padStart(2, '0')}/${MAP.length}  ${m.slug.padEnd(18)} … `);
		try {
			const dims = await page.evaluate((id) => window.__setupForCapture(id), m.dom);

			// page.screenshot 拍固定 clip
			const png = await page.screenshot({
				type: 'png',
				omitBackground: false,
				clip: { x: 0, y: 0, width: dims.totalW, height: dims.totalH },
			});

			writeFileSync(resolve(OUT_DIR, m.out), png);
			console.log(`✓ ${(png.length / 1024).toFixed(0)}KB · ${dims.totalW}×${dims.totalH} · ${((Date.now() - t0) / 1000).toFixed(2)}s`);
		} catch (e) {
			console.log(`❌ ${e.message}`);
		} finally {
			await page.evaluate(() => window.__restoreAfterCapture());
		}
	}
	console.log(`\n✅ 完成，总用时 ${((Date.now() - start) / 1000).toFixed(1)}s`);
	console.log(`💡 下一步: bun run render`);
} finally {
	await browser.close();
}
