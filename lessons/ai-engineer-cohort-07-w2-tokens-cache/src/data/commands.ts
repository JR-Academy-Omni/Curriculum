// 全课命令速查表。参数已对照 Claude Code 官方文档和本机 v2.1.278 的 --help 核实；
// Codex 部分参考官方 Non-interactive mode 文档（本机未安装 Codex，未实测）。
export interface Command {
	module: string;
	tool: 'Claude Code' | 'Codex' | '终端';
	cmd: string;
	look: string; // 看什么
}

const JSON_USAGE = `claude -p "Reply OK" --output-format json | tee -a runs.jsonl | jq .usage`;

export const commandsA: Command[] = [
	{ module: 'M1', tool: 'Claude Code', cmd: '/context', look: '各层 token 占用：system prompt · tools · memory · messages' },
	{ module: 'M1', tool: 'Claude Code', cmd: JSON_USAGE, look: 'input_tokens · cache_creation_input_tokens · cache_read_input_tokens' },
	{ module: 'M1', tool: 'Codex', cmd: 'codex exec --json "Reply OK" | grep turn.completed | tee -a runs-codex.jsonl', look: 'input_tokens · cached_input_tokens · output_tokens' },
	{ module: 'M2', tool: 'Claude Code', cmd: '/context  （在自己的仓库里，治理前后各一次）', look: '占用最大的一项，前后差多少' },
	{ module: 'M3', tool: '终端', cmd: 'seq 1 20000 > big.txt', look: '造一个大输入' },
	{ module: 'M3', tool: 'Claude Code', cmd: 'DISABLE_PROMPT_CACHING=1 python3 ttft.py "Reply OK"', look: '小输入 + 关缓存：TTFT · 总时间 · duration_api_ms' },
	{ module: 'M3', tool: 'Claude Code', cmd: 'cat big.txt | DISABLE_PROMPT_CACHING=1 python3 ttft.py "Reply OK"', look: '大输入 + 关缓存：TTFT 变化' },
	{ module: 'M3', tool: 'Claude Code', cmd: 'cat big.txt | python3 ttft.py "Reply OK"   # 开着 cache，连跑两次', look: '第二次 TTFT 是否回落' },
];

export const commandsB: Command[] = [
	{ module: 'M5', tool: 'Claude Code', cmd: `${JSON_USAGE}   # 连跑两次`, look: '第 1 次 creation 大，第 2 次 read 大' },
	{ module: 'M5', tool: 'Claude Code', cmd: `claude -p "Reply OK" --append-system-prompt "Current time: $(date +%s)" --output-format json | jq .usage`, look: '加了会变的内容：read 下降' },
	{ module: 'M5', tool: 'Claude Code', cmd: 'claude -p "Reply OK" --model sonnet --output-format json | jq .usage', look: '换模型：重新 creation' },
	{ module: 'M5', tool: 'Claude Code', cmd: `claude -p "Reply OK" --output-format json | jq .usage.cache_creation`, look: 'ephemeral_1h_input_tokens / ephemeral_5m_input_tokens（TTL）' },
	{ module: 'M5', tool: 'Claude Code', cmd: '/usage', look: 'Prompt cache (main)：命中率 + 上次没命中的可能原因' },
	{ module: 'M5', tool: 'Codex', cmd: 'codex exec --json "Reply OK" | grep turn.completed   # 连跑两次', look: 'cached_input_tokens 的变化' },
	{ module: 'M7', tool: 'Claude Code', cmd: `jq -s '[.[].usage | select(.)] | {runs: length, read: (map(.cache_read_input_tokens) | add), write: (map(.cache_creation_input_tokens) | add), uncached: (map(.input_tokens) | add)}' runs.jsonl`, look: '汇总：hit rate = read ÷ (read + write + uncached)' },
];
