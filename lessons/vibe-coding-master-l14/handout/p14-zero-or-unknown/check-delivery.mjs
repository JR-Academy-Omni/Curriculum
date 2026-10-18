// 数一下交付清单里还有几项没完成。
//
// 它扫一个目录下的所有 .md，找三种「还没完成」的凭据：
//   needs-human        卡在要人拍板的决策上
//   SIGNOFF ... false  还没签字
//   - [ ]              还没勾掉的事项
//
// 跑两次：
//   node check-delivery.mjs ~/Desktop/star-mansions/doc
//   node check-delivery.mjs ~/Desktop/star-mansions/dco     ← 路径故意写错
//
// 注意看第二次的输出。
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const PENDING = /needs-human|SIGNOFF[^=]*=\s*false|^\s*- \[ \]/;

async function mdFiles(dir) {
	const out = [];
	for (const e of await readdir(dir, { withFileTypes: true })) {
		const full = join(dir, e.name);
		if (e.isDirectory()) out.push(...await mdFiles(full));
		else if (e.name.endsWith('.md')) out.push(full);
	}
	return out;
}

async function openItems(dir) {
	try {
		const files = await mdFiles(dir);
		const hits = [];
		for (const f of files) {
			const text = await readFile(f, 'utf8');
			for (const line of text.split('\n')) {
				if (PENDING.test(line)) hits.push(line.trim());
			}
		}
		return hits;
	} catch {
		return [];
	}
}

const dir = process.argv[2] ?? 'doc';
const open = await openItems(dir);

console.log(`交付清单里还没完成的：${open.length} 项`);
if (open.length === 0) console.log(`也就是说 —— 全都交付完了。`);
