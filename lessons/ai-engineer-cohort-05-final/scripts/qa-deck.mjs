import { createRequire } from 'node:module';
import fs from 'node:fs/promises';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('/Users/lightman/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const baseUrl = process.env.DECK_URL ?? 'http://127.0.0.1:8014/';
const outDir = path.resolve('out/qa');
const viewports = [
	{ name: '1366x768', width: 1366, height: 768 },
	{ name: '1440x900', width: 1440, height: 900 },
	{ name: '1920x1080', width: 1920, height: 1080 },
];
const keySlides = new Set([1, 5, 8, 11, 15, 18, 20, 22, 23, 24, 25, 27]);
await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = [];
for (const viewport of viewports) {
	const page = await browser.newPage({ viewport });
	for (let slide = 1; slide <= 27; slide += 1) {
		await page.goto(`${baseUrl}?page=${slide}`, { waitUntil: 'networkidle' });
		await page.waitForTimeout(900);
		const audit = await page.evaluate(() => {
			const root = document.documentElement;
			const overflowNodes = [...document.querySelectorAll('h1,h2,h3,p,div,span')]
				.filter((node) => {
					const el = node;
					const style = getComputedStyle(el);
					if (style.display === 'none' || style.visibility === 'hidden') return false;
					if (el.getAttribute('aria-hidden') === 'true') return false;
					if (el.children.length > 0) return false;
					return el.scrollWidth > el.clientWidth + 8 || el.scrollHeight > el.clientHeight + 8;
				})
				.slice(0, 12)
				.map((node) => ({ text: node.textContent?.trim().slice(0, 90), sw: node.scrollWidth, cw: node.clientWidth, sh: node.scrollHeight, ch: node.clientHeight }));
			return {
				documentOverflow: root.scrollWidth > root.clientWidth || root.scrollHeight > root.clientHeight,
				overflowNodes,
			};
		});
		results.push({ viewport: viewport.name, slide, ...audit });
		if (viewport.name === '1366x768' || keySlides.has(slide)) {
			await page.screenshot({ path: path.join(outDir, `${viewport.name}-slide-${String(slide).padStart(2, '0')}.png`) });
		}
	}
	await page.close();
}
await browser.close();
await fs.writeFile(path.join(outDir, 'qa-results.json'), `${JSON.stringify(results, null, 2)}\n`);

const failures = results.filter((item) => item.documentOverflow || item.overflowNodes.length > 0);
console.log(JSON.stringify({ checked: results.length, failures: failures.length, details: failures.slice(0, 20) }, null, 2));
if (failures.length) process.exitCode = 1;
