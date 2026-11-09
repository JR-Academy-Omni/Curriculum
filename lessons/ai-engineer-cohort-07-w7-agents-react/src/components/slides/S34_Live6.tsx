import { Live } from './_parts';

export default function S34_Live6() {
	return (
		<Live part="第 5 部分" at={["agent.py · make_gate()", "agent.py · stop_reason_of()"]} n={3} title="一个永远 pending 的工具" cmd={["uv run python agent.py --order A8192 --max-turns 4 --no-loop-detect", "uv run python agent.py --order A8192"]} watch={["第一条：撞到回合上限才停", "第二条：第三次重复时，hook 把它停下", "两条都输出交接单，原因不一样", "聊天框：哪种更省钱？"]} file="demo/agent.py" code={"if detector and detector.is_looping(tool, args):\n    stop[\"reason\"] = \"loop_detected\"\n    return {\"continue_\": False, \"stopReason\": \"检测到重复调用，停止循环\"}"} />
	);
}
