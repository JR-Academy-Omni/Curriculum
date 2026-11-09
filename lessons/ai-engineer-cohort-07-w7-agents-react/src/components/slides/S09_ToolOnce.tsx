import { Code, Page, Say } from './_parts';

export default function S09_ToolOnce() {
	return (
		<Page part="第 1 部分" at={["01_control.py · tool_once()"]} title="第 2 级：模型选一次工具">
		  <Code file="demo/01_control.py" size={20} code={"response = ask(messages, TOOLS, tool_choice=one_at_a_time)\nmessages.append({\"role\": \"assistant\", \"content\": response.content})\n\ncalls = [block for block in response.content if block.type == \"tool_use\"]\nfor call in calls:                                 # 只有这一轮\n    trace.action(call.name, call.input)\n    result = getattr(desk, call.name)(**call.input)\n    trace.observation(result)"} />
		  <Say>模型决定调哪个工具，但只有一轮。如果还想查第二样东西，程序已经结束了。</Say>
		</Page>
	);
}
