// 每页一项（顺序与 App.tsx 一致）；N 显示 / 隐藏。只写讲法和操作提醒，不编造数据。
export const notes: string[] = [
	// M0 开场
	'自我介绍；说明今天全程用自己电脑上的 Claude Code / Codex 动手，不需要 API key。提醒：V 开摄像头。',
	'抛出两个问题。强调为什么拿 Claude Code / Codex 当生产案例：它们每天都在做 context 管理和 prompt caching，而且官方有文档可以对照。',
	'过一遍 90 分钟节奏，讲清楚 Test → Teach → Test：每个模块先预测、再跑、再换情境考。',
	'让学员现在建 w2-lab/ 文件夹、确认 claude --version 和 jq 可用。Codex 学员看 Codex 那几行。',
	'提醒 /usage 的版本要求；Codex 命令没在讲师机上实测，学员跑出问题先截图发对话框。',
	'给 2 分钟凭直觉写 5 题答案到对话框，不讲答案，M7 再对照。',
	// M1 Token Budget
	'先收几个预测，不揭晓。',
	'讲师共享屏幕现场跑 /context，逐层解释；再让学员对照自己的结果，说出最大的一层。',
	'现场跑一次 claude -p，把 usage 逐个字段念出来；强调三个 input 字段相加才是总输入；total_cost_usd 只是本地估计。',
	'让学员先自己算比例再点答案；答案约 98.7% 来自 cache。',
	// M2 Context Governance
	'收预测，提醒「用了一小时」这个前提。',
	'逐行讲 6 条标准，每条落到 Claude Code 的具体做法，再问学员在自己应用里会怎么做。',
	'学员在自己项目里动手 5 分钟；讲师巡视对话框里的前后数字。顺带讲 lost-in-the-middle 的结论和出处。',
	'先让学员写建议和标准，再点答案。',
	// M3 Prefill / Decode
	'收预测：会不会慢、慢在哪个阶段。',
	'带学员跑三组，每组 3 次取中位数，填表。提醒计时包含 CLI 启动，只比组间差。',
	'用刚才的表解释 prefill 和 decode；组 3 第二次变快留作 M5 的伏笔。',
	'先让学员各写一个指标再点答案。',
	// M4 KV Cache
	'收预测。',
	'讲清楚云端 API 看不到 KV Cache；让学员把提示词贴进 agent，核对 agent 代入的每个数字。真实配置来自 Hugging Face。',
	'先让学员按线性关系推算，再点答案。',
	// M5 Prefix Cache
	'收预测：连跑两次 usage 会怎么变；加时间戳以后呢。',
	'带学员连跑两次填表；解释前缀逐字节精确匹配和 tools → system → messages 的顺序。',
	'先跑 A（时间戳）再跑 B（换模型），让学员对比 read / creation；联系生产里的同类 bug。',
	'看 cache_creation 里是哪种 TTL；交互模式里跑 /usage → /model → /usage，看失效原因。',
	'对照官方文档讲两列；强调团队把命中率当成和 uptime 一样重要的指标。',
	'让学员在对话框写出 3 个问题、改法和监控字段，再点答案。',
	// M6 Response Cache + Memory
	'收预测：能不能直接复用。',
	'学员让 agent 写 faq_cache.py，先看到 B 拿到 A 的数字，再修 cache key。演示用的公司数据是虚构的。',
	'用对照表收拢四种「复用」；现场演示中途改 CLAUDE.md 不生效。',
	'先举手投票，再逐张翻卡。',
	// M7 汇总 + 英文面试
	'带学员跑 jq 汇总；然后 5 题原题再答一次，和开场的答案对比。',
	'英文面试 1：先在对话框写英文答案，再看参考答案；按 Mechanism → Evidence → Risk 点评。',
	'英文面试 2：提醒验证要落到 cache_read_input_tokens 和 TTFT。',
	'英文面试 3：强调 diff 两次请求、找第一个不同的字节。',
	'英文面试 4：强调 tenant 和权限必须进 cache key。',
	'课后资料和课后练习；视频只核实过标题和频道。',
];
