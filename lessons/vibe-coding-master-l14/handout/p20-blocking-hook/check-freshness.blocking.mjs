// 翻车版 —— 检查不过就卡住你。
// 只改了最后一行。跑两天你就会亲手把它关掉，然后连提醒都没有了。
const behind = Number(process.env.L14_DEMO_BEHIND ?? 3);
if (behind > 0) {
	console.error(`[拦截] 你这份检出落后 ${behind} 个提交。拉取之后才能继续。`);
	process.exit(1);   // ← 只有这一行不一样
}
process.exit(0);
