import { Live } from './_parts';

export default function S25_Live4() {
	return (
		<Live part="第 3 部分" at={["agent.py · new_run()", "agent.py · run_agent()"]} n={2} title="换成 SDK：今天的 Agent 登场" cmd={["uv run python agent.py --order A1024"]} watch={["循环代码不见了，Action / Observation 还在", "工具来自 W6 的 refund_server（MCP）", "消息一条条流出来：streaming", "结尾有回合数、费用和 session_id", "后面的 LIVE 都是这一个 Agent，只换场景"]} />
	);
}
