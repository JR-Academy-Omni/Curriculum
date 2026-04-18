#!/usr/bin/env node
/**
 * 为 curriculum 每个 bootcamp 的 mp-article 预渲染 xhs-posters 成真实 PNG 文件。
 *
 * 为什么：mp-article 之前用 iframe + html2canvas 按需渲染图片，最后 toDataURL 得到
 * base64。base64 粘到公众号编辑器会被丢弃（微信只接受可抓取的外链图片）。
 * 预渲染成 `.png` 文件部署到 github.io/jiangren.com.au 之后，就变成微信可以自动
 * re-host 的外链 —— 真正实现"复制 → 粘贴 → 发布"。
 *
 * 技术选型：page.screenshot（Chrome paint 层），不用 html2canvas。
 * 参考实现：jr-wiki/scripts/render-ai-news-posters.mjs、
 *           video-ai-engineer/scripts/export-xhs-to-images.mjs
 *
 * 用法：
 *   bun run scripts/render-mp-posters.mjs                # 处理所有配置的 bootcamp
 *   bun run scripts/render-mp-posters.mjs ai-engineer    # 只处理匹配名字的
 *
 * 输出：{bootcamp}/public/mp-article/images/poster-{id}.png
 */

import puppeteer from 'puppeteer-core';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ========== 配置：哪些 bootcamp 要跑 ==========
// 只有同时拥有 public/xhs-posters/index.html 和 public/mp-article/index.html 的才处理
const BOOTCAMPS = [
	'ai-engineer-bootcamp',
	'business-analyst',
	'web-code-bootcamp-or-learn-to-code-1',
];

// ========== Chrome 路径探测 ==========
const CHROME_CANDIDATES = [
	process.env.PUPPETEER_EXECUTABLE_PATH,
	process.env.CHROME_PATH,
	'/opt/hostedtoolcache/setup-chrome/chromium/latest/x64/chrome',
	'/usr/bin/google-chrome-stable',
	'/usr/bin/google-chrome',
	'/usr/bin/chromium-browser',
	'/usr/bin/chromium',
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	`${process.env.HOME || ''}/.cache/puppeteer/chrome-headless-shell/mac_arm-146.0.7680.153/chrome-headless-shell-mac-arm64/chrome-headless-shell`,
].filter(Boolean);
const chromePath = CHROME_CANDIDATES.find((p) => p && existsSync(p));
if (!chromePath) {
	console.error('❌ 找不到 Chrome，已尝试：');
	CHROME_CANDIDATES.forEach((p) => console.error('   ' + p));
	process.exit(1);
}
console.log(`🌐 Chrome: ${chromePath}`);

// ========== 过滤要处理的 bootcamp ==========
const filter = process.argv[2];
const targets = BOOTCAMPS.filter((b) => {
	if (filter && !b.includes(filter)) return false;
	const xhs = resolve(ROOT, b, 'public/xhs-posters/index.html');
	const mp = resolve(ROOT, b, 'public/mp-article/index.html');
	if (!existsSync(xhs)) {
		console.log(`⚠️ ${b}: 没有 xhs-posters/index.html，跳过`);
		return false;
	}
	if (!existsSync(mp)) {
		console.log(`⚠️ ${b}: 没有 mp-article/index.html，跳过`);
		return false;
	}
	return true;
});

if (!targets.length) {
	console.log('⚠️ 没有匹配的 bootcamp，退出');
	process.exit(0);
}
console.log(`📦 将处理 ${targets.length} 个 bootcamp：${targets.join(', ')}\n`);

// ========== 启 browser ==========
const browser = await puppeteer.launch({
	executablePath: chromePath,
	headless: 'new',
	defaultViewport: null,
	args: [
		'--no-sandbox',
		'--disable-dev-shm-usage',
		'--disable-setuid-sandbox',
		'--font-render-hinting=none',
		'--disable-font-subpixel-positioning',
	],
});

let totalOk = 0;
let totalFail = 0;
const startAll = Date.now();

try {
	for (const slug of targets) {
		const xhsPath = resolve(ROOT, slug, 'public/xhs-posters/index.html');
		const outDir = resolve(ROOT, slug, 'public/mp-article/images');
		mkdirSync(outDir, { recursive: true });

		console.log(`━━━ 📸 ${slug} ━━━`);

		const page = await browser.newPage();
		await page.setViewport({ width: 1600, height: 2000, deviceScaleFactor: 1 });

		await page.goto(`file://${xhsPath}`, { waitUntil: 'networkidle0', timeout: 60000 });
		await page.evaluateHandle('document.fonts.ready');
		await new Promise((r) => setTimeout(r, 800));
		const fontsCount = await page.evaluate(() => document.fonts.size);
		console.log(`  ✓ 字体就绪（${fontsCount} fonts）`);

		// 读取所有 #poster-* 的 id
		const posterIds = await page.evaluate(() => {
			const nodes = document.querySelectorAll('[id^="poster-"]');
			return Array.from(nodes).map((n) => n.id);
		});
		if (!posterIds.length) {
			console.log(`  ⚠️ 没找到任何 #poster-* 元素，跳过`);
			await page.close();
			continue;
		}
		console.log(`  ✓ 找到 ${posterIds.length} 个海报：${posterIds.join(', ')}`);

		await page.evaluate(() => {
			window.__setupForCapture = function (posterId) {
				const poster = document.getElementById(posterId);
				if (!poster) throw new Error('NO_POSTER ' + posterId);

				const POSTER_W = 1242;
				const FRAME_BORDER = 6;
				const FRAME_RADIUS = 36;
				const SHADOW_OFFSET = 24;
				const PADDING = 48;

				const parent = poster.parentNode;
				const next = poster.nextSibling;
				const origStyle = poster.getAttribute('style') || '';

				poster.style.transform = 'none';
				poster.style.position = 'relative';
				poster.style.top = '0';
				poster.style.left = '0';
				poster.style.width = POSTER_W + 'px';
				poster.style.height = 'auto';
				poster.style.margin = '0';

				document.body.appendChild(poster);
				const POSTER_H = poster.offsetHeight;

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

				const totalW = POSTER_W + FRAME_BORDER * 2 + PADDING * 2 + SHADOW_OFFSET;
				const totalH = POSTER_H + FRAME_BORDER * 2 + PADDING * 2 + SHADOW_OFFSET;

				const wrapper = document.createElement('div');
				wrapper.id = '__capture_wrapper__';
				wrapper.style.cssText = [
					'position:absolute',
					'left:0',
					'top:0',
					`width:${totalW}px`,
					`height:${totalH}px`,
					`padding:${PADDING}px ${PADDING + SHADOW_OFFSET}px ${PADDING + SHADOW_OFFSET}px ${PADDING}px`,
					'background:#fff1e7',
					'box-sizing:border-box',
					'z-index:999999',
				].join(';');
				wrapper.appendChild(frameDiv);
				document.documentElement.scrollTo(0, 0);
				document.body.prepend(wrapper);

				window.__restoreInfo = { poster, parent, next, origStyle, wrapper };
				return { totalW, totalH };
			};

			window.__restoreAfterCapture = function () {
				const r = window.__restoreInfo;
				if (!r) return;
				const { poster, parent, next, origStyle, wrapper } = r;
				if (next) parent.insertBefore(poster, next);
				else parent.appendChild(poster);
				if (origStyle) poster.setAttribute('style', origStyle);
				else poster.removeAttribute('style');
				wrapper.remove();
				window.__restoreInfo = null;
			};
		});

		const startBc = Date.now();
		for (const [i, posterId] of posterIds.entries()) {
			const outFile = resolve(outDir, `${posterId}.png`);
			const t0 = Date.now();
			process.stdout.write(
				`  ${String(i + 1).padStart(2, '0')}/${posterIds.length}  ${posterId.padEnd(14)} … `,
			);
			try {
				const dims = await page.evaluate((id) => window.__setupForCapture(id), posterId);
				const png = await page.screenshot({
					type: 'png',
					omitBackground: false,
					clip: { x: 0, y: 0, width: dims.totalW, height: dims.totalH },
				});
				writeFileSync(outFile, png);
				console.log(
					`✓ ${(png.length / 1024).toFixed(0)}KB · ${dims.totalW}×${dims.totalH} · ${((Date.now() - t0) / 1000).toFixed(2)}s`,
				);
				totalOk++;
			} catch (e) {
				console.log(`❌ ${e.message}`);
				totalFail++;
			} finally {
				await page.evaluate(() => window.__restoreAfterCapture());
			}
		}
		console.log(`  ⏱ ${slug} 用时 ${((Date.now() - startBc) / 1000).toFixed(1)}s\n`);

		await page.close();
	}
} finally {
	await browser.close();
}

console.log(
	`✅ 完成 · ok=${totalOk} · fail=${totalFail} · 总用时 ${((Date.now() - startAll) / 1000).toFixed(1)}s`,
);
if (totalFail > 0) process.exit(1);
