import { colors } from '../ui';
import { Code, Page } from './_parts';

export default function S18_LoopCode() {
	return (
		<Page part="第 2 部分" at={["01_control.py · react_loop()", "01_control.py · run_tool()"]} title="手写一个 ReAct 循环" bg={colors.white}>
		  <Code file="demo/01_control.py" size={16} code={"def react_loop(task: str, model, desk: Desk, trace: Trace, max_steps: int = MAX_STEPS) -> str:\n    messages = [{\"role\": \"user\", \"content\": task}]\n\n    for _ in range(max_steps):                          # 上限写在代码里\n        response = model(messages, TOOLS)               # 模型决定下一步\n        messages.append({\"role\": \"assistant\", \"content\": response.content})\n\n        if response.stop_reason == \"refusal\":\n            return \"refused\"\n        calls = [b for b in response.content if b.type == \"tool_use\"]\n        if not calls:                                   # 没有 Action：模型认为做完了\n            trace.reply(text_of(response))\n            return \"done\"\n\n        results = []\n        for call in calls:                              # Action\n            trace.action(call.name, call.input)\n            observation = run_tool(desk, call.name, call.input)\n            trace.observation(observation)              # Observation\n            results.append({\"type\": \"tool_result\", \"tool_use_id\": call.id,\n                            \"content\": json.dumps(observation, ensure_ascii=False),\n                            \"is_error\": observation[\"status\"] == \"error\"})\n        messages.append({\"role\": \"user\", \"content\": results})  # 结果进入状态，回到循环\n\n    return \"max_steps\""} />
		</Page>
	);
}
