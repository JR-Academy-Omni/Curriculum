// 数一下 reports/ 目录里有几份报告。
//
// 跑两次：
//   node broken.mjs reports      ← 路径对的
//   node broken.mjs repor7s      ← 路径故意写错
//
// 注意看第二次的输出。
import { readdir } from 'node:fs/promises';

const dir = process.argv[2] ?? 'reports';

async function countReports(path) {
	try {
		const files = await readdir(path);
		return files.filter(f => f.endsWith('.md'));
	} catch {
		return [];
	}
}

const found = await countReports(dir);
console.log(`本期报告数：${found.length}`);
