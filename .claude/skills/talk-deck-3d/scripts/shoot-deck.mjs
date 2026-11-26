#!/usr/bin/env node
// 逐页真实停留后截图，并检查坏图、超出画布和控制台错误。只用 Node 内置能力 + 本机 Chrome。
// 用法：node shoot-deck.mjs <deck 地址> <页数> <输出目录> [宽=1600] [高=900]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';

const [url, total, out, W = 1600, H = 900] = process.argv.slice(2);
if (!out) throw new Error('用法: node shoot-deck.mjs <url> <pages> <outDir> [w] [h]');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 9300 + Math.floor(Math.random() * 500);
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'deck-shot-'));
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore' });
let page;
for (let i = 0; i < 40 && !page; i++) {
	try { page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page'); } catch { /* Chrome 还没起来 */ }
	if (!page) await sleep(500);
}
if (!page) { chrome.kill(); throw new Error('Chrome 没有启动'); }
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map(), errors = [];
ws.onmessage = (e) => {
	const m = JSON.parse(e.data);
	if (pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); }
	else if (m.method === 'Runtime.exceptionThrown' || (m.method === 'Network.loadingFailed' && !m.params.canceled)) errors.push(JSON.stringify(m.params).slice(0, 300));
};
const send = (method, params = {}) => new Promise((r) => { pending.set(++id, r); ws.send(JSON.stringify({ id, method, params })); });
await send('Runtime.enable'); await send('Network.enable');
await send('Emulation.setDeviceMetricsOverride', { width: +W, height: +H, deviceScaleFactor: 1, mobile: +W < 900 });
fs.mkdirSync(out, { recursive: true });
for (let i = 1; i <= +total; i++) {
	const u = new URL(url); u.searchParams.set('page', String(i));
	await send('Page.navigate', { url: u.toString() });
	await sleep(Number(process.env.WAIT_MS || 4000));
	const result = await send('Runtime.evaluate', { returnByValue: true, expression: `(() => {
		const cv = document.querySelector('[data-slide-canvas]'); if (!cv) return 'NO CANVAS';
		const box = cv.getBoundingClientRect();
		const bad = [...cv.querySelectorAll('img')].filter((x) => !x.complete || !x.naturalWidth).map((x) => x.src);
		const over = [...cv.querySelectorAll('h1,h2,p,li,figcaption,blockquote,div,span,img')].filter((x) => !x.closest('.offer-wall'))
			.filter((x) => { const r = x.getBoundingClientRect(); return r.width && (r.bottom > box.bottom + 2 || r.right > box.right + 2); }).map((x) => (x.innerText || x.alt || x.tagName).slice(0, 30));
		return JSON.stringify({ bad: bad.slice(0, 5), over: over.slice(0, 5) });
	})()` });
	console.log(i, result.result.value);
	fs.writeFileSync(path.join(out, `p${String(i).padStart(2, '0')}.png`), Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).data, 'base64'));
}
console.log('errors', errors.slice(0, 8));
ws.close(); chrome.kill();
process.exit(0);
