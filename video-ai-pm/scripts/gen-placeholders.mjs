#!/usr/bin/env node
/**
 * 生成 13 张占位 PNG（1242×1660，3:4，彩色 + scene 编号文字）
 * 只是为了让 Studio 首次打开时不报 image not found；
 * 真用时用 mp-article 批量下载的高清图覆盖它们。
 */
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, '..', 'src', 'assets', 'images');
mkdirSync(OUT_DIR, { recursive: true });

const scenes = [
	{ idx: '01', slug: 'p2-painpoint', color: [255, 87, 87] },
	{ idx: '02', slug: 'p3-conversation', color: [255, 206, 68] },
	{ idx: '03', slug: 'p4-outcomes', color: [59, 130, 246] },
	{ idx: '04', slug: 'p5-roadmap', color: [139, 92, 246] },
	{ idx: '05', slug: 'p6-stack', color: [16, 185, 129] },
	{ idx: '06', slug: 'p12-rag', color: [255, 87, 87] },
	{ idx: '07', slug: 'p13-agent', color: [139, 92, 246] },
	{ idx: '08', slug: 'p15-labs', color: [59, 130, 246] },
	{ idx: '09', slug: 'p17-projects', color: [255, 206, 68] },
	{ idx: '10', slug: 'p16-timeline', color: [16, 185, 129] },
	{ idx: '11', slug: 'p7-feedback', color: [255, 87, 87] },
	{ idx: '12', slug: 'p8-format', color: [59, 130, 246] },
	{ idx: '13', slug: 'p9-cta', color: [255, 87, 87] },
];

/* ---- zero-dep PNG encoder ---- */
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
	let c = n;
	for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
	crcTable[n] = c >>> 0;
}
function crc32(buf) {
	let c = 0xffffffff;
	for (const b of buf) c = (crcTable[(c ^ b) & 0xff] ^ (c >>> 8)) >>> 0;
	return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
	const len = Buffer.alloc(4);
	len.writeUInt32BE(data.length);
	const typeBuf = Buffer.from(type, 'ascii');
	const crcBuf = Buffer.alloc(4);
	crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
	return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function makePng(w, h, r, g, b, accentR, accentG, accentB) {
	const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

	// IHDR
	const ihdr = Buffer.alloc(13);
	ihdr.writeUInt32BE(w, 0);
	ihdr.writeUInt32BE(h, 4);
	ihdr[8] = 8;
	ihdr[9] = 2; // RGB
	ihdr[10] = 0;
	ihdr[11] = 0;
	ihdr[12] = 0;

	// Build rows: gradient top->bottom from (r,g,b) to accent; add dark border
	const rowSize = 1 + w * 3;
	const raw = Buffer.alloc(rowSize * h);
	for (let y = 0; y < h; y++) {
		raw[y * rowSize] = 0; // filter type
		const t = y / h;
		const rr = Math.round(r + (accentR - r) * t);
		const gg = Math.round(g + (accentG - g) * t);
		const bb = Math.round(b + (accentB - b) * t);
		for (let x = 0; x < w; x++) {
			const i = y * rowSize + 1 + x * 3;
			// 80px dark border
			const onBorder = x < 24 || x >= w - 24 || y < 24 || y >= h - 24;
			if (onBorder) {
				raw[i] = 16;
				raw[i + 1] = 22;
				raw[i + 2] = 47;
			} else {
				raw[i] = rr;
				raw[i + 1] = gg;
				raw[i + 2] = bb;
			}
		}
	}
	const idat = deflateSync(raw);
	return Buffer.concat([
		sig,
		chunk('IHDR', ihdr),
		chunk('IDAT', idat),
		chunk('IEND', Buffer.alloc(0)),
	]);
}

/* ---- generate 13 ---- */
const W = 414; // 1242 / 3  — small is fine for placeholder
const H = 553; // 1660 / 3

for (const s of scenes) {
	const [r, g, b] = s.color;
	// Accent: darken toward navy
	const png = makePng(W, H, r, g, b, 16, 22, 47);
	const filename = `mp-ai-engineer-${s.idx}-${s.slug}.png`;
	writeFileSync(resolve(OUT_DIR, filename), png);
	console.log(`✓ ${filename}  (${W}×${H}, ${(png.length / 1024).toFixed(1)} KB)`);
}
console.log(`\n✅ Wrote 13 placeholder PNGs → ${OUT_DIR}`);
console.log('💡 用 mp-article 批量下载的真实海报替换这些占位图即可。');
