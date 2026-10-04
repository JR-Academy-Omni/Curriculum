// 翻车② · 第一步：先跑这个版本
//
// 它做一件很普通的事：数一下 reports/ 目录里有几份报告。
// 现在它用的是【绝大多数人都会这么写】的默认写法。
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
		// ← 就是这一行。出错了，返回一个空数组。
		//   写的时候谁都觉得这是"稳健"，不想让脚本崩掉。
		return [];
	}
}

const found = await countReports(dir);
console.log(`本期报告数：${found.length}`);
