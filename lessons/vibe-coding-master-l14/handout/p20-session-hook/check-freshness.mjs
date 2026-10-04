// 正常版 —— 只报告，不拦人。
// 一个会话启动钩子该长的样子：它告诉你落后了多少，然后放你过去。
const behind = Number(process.env.L14_DEMO_BEHIND ?? 3);
if (behind > 0) console.log(`[提醒] 你这份检出落后 ${behind} 个提交。要不要拉一下由你决定。`);
process.exit(0);   // ← 关键：永远正常退出
