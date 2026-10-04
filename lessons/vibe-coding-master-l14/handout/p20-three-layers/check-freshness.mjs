// 会话启动钩子 —— 告诉你这份检出落后远端多少。
//
// 它守两条本课自己教的规矩：
//   ① 永远正常退出，永远不拦你（启动钩子是提醒，不是关卡）
//   ② 判断不了的时候，明说「判断不了」—— 绝不静默通过
//
// 装：把它配成 SessionStart 钩子（见 README）
// 试：node check-freshness.mjs
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const run = promisify(execFile);

async function behindCount() {
	try {
		await run('git', ['rev-parse', '--is-inside-work-tree']);
	} catch {
		return { state: 'unknown', why: '这里不是一个 git 仓库' };
	}
	try {
		await run('git', ['rev-parse', '--abbrev-ref', '@{u}']);
	} catch {
		return { state: 'unknown', why: '当前分支没有设置上游，比不了' };
	}
	try {
		const { stdout } = await run('git', ['rev-list', '--count', 'HEAD..@{u}']);
		const n = Number(stdout.trim());
		if (!Number.isInteger(n)) return { state: 'unknown', why: `读到的不是一个数：${stdout.trim()}` };
		return { state: 'ok', n };
	} catch (err) {
		return { state: 'unknown', why: `git 跑失败：${err.code ?? err.message}` };
	}
}

const r = await behindCount();

if (r.state === 'unknown') {
	// ⭐ 这两行是重点：判断不了就说判断不了，不要假装一切正常。
	console.log(`[新鲜度] 无法判断你落后多少 —— ${r.why}`);
	console.log(`[新鲜度] 这不代表没问题，只代表这条检查这次没覆盖到。`);
} else if (r.n > 0) {
	console.log(`[新鲜度] 你这份检出落后远端 ${r.n} 个提交。要不要拉一下，由你决定。`);
} else {
	console.log(`[新鲜度] 是最新的。`);
}

// 不写 process.exit —— 自然结束就是 0。启动钩子永远不拦人。
