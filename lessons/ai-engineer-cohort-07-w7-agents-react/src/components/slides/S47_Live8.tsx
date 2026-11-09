import { Live } from './_parts';

export default function S47_Live8() {
	return (
		<Live part="第 7 部分" at={["agent.py · make_gate()", "agent.py · make_ask_human()"]} n={5} title="主管签字" cmd={["uv run python agent.py --order A4096", "# 第一次输入 n，第二次输入 y"]} watch={["hook 暂停，终端等你回答", "审批界面显示的是系统里的金额", "输入 n：循环停止，账本为空，出交接单", "输入 y：审批号由代码写入，模型编不出来"]} file="demo/agent.py" code={"order = desk.orders[args[\"order_id\"]]\nif await ask_human(order, reason):\n    # approval_id 由代码写入，模型看不到也编不出来\n    approval_id = desk.grant_approval(args[\"order_id\"], order[\"amount\"], \"主管\")\n    return {\"hookSpecificOutput\": {\n        \"hookEventName\": \"PreToolUse\",\n        \"permissionDecision\": \"allow\",\n        \"updatedInput\": {**args, \"approval_id\": approval_id},\n    }}\nstop[\"reason\"] = \"approval_denied\"\nreturn deny(\"主管拒绝了这笔退款\", continue_=False, stopReason=\"审批被拒绝，Agent 停止\")"} />
	);
}
