// 翻车② · 第二步：改成这个版本
//
// 只改了一个地方：【出错】和【确实是空的】不再被写成同一个结果。
//
//   node fixed.mjs reports      → ok，报真实数量
//   node fixed.mjs repor7s      → FAILED，而且退出码非 0
import { readdir } from 'node:fs/promises';

const dir = process.argv[2] ?? 'reports';

async function countReports(path) {
	try {
		const files = await readdir(path);
		return { state: 'ok', items: files.filter(f => f.endsWith('.md')) };
	} catch (err) {
		// ← 改的就是这里：把错误带出来，不要把它变成空数组。
		return { state: 'failed', reason: err.code ?? String(err) };
	}
}

const r = await countReports(dir);

if (r.state === 'failed') {
	console.log(`本期报告数：FAILED（${r.reason}）`);
	console.log(`  这次运行没能覆盖：${dir}`);
	console.log(`  所以本次结论不成立。`);
	console.log(`  恢复它的确切一步：确认 ${dir} 这个路径存在，然后重跑。`);
	process.exit(1);
}

// 注意：到这里才可能是 0，而这个 0 是【真零】。
console.log(`本期报告数：${r.items.length}`);
