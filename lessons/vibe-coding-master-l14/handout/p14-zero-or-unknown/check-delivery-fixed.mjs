// 跟 check-delivery.mjs 一模一样，只改了一个地方。
//
//   node check-delivery-fixed.mjs ~/Desktop/star-mansions/doc
//   node check-delivery-fixed.mjs ~/Desktop/star-mansions/dco     ← 路径故意写错
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
		return { state: 'ok', hits };
	} catch (err) {
		// ← 改的就是这里：把错误带出来，不要把它变成一个空数组。
		return { state: 'failed', reason: err.code ?? String(err) };
	}
}

const dir = process.argv[2] ?? 'doc';
const r = await openItems(dir);

if (r.state === 'failed') {
	console.log(`交付清单里还没完成的：FAILED（${r.reason}）`);
	console.log(`  这次运行没能覆盖：${dir}`);
	console.log(`  所以「交付完了没有」这个问题，本次没有答案 —— 不是答案为零。`);
	console.log(`  恢复它的确切一步：确认 ${dir} 这个路径存在，然后重跑。`);
	process.exit(1);
}

// 到这里才可能是 0，而这个 0 是真零。
console.log(`交付清单里还没完成的：${r.hits.length} 项`);
if (r.hits.length === 0) console.log(`这是一个真零 —— 确实扫过了，确实没有。`);
