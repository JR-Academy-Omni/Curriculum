import { TestSlide } from './_shared';

// M2 后测：两个同学的 /context，分别给建议
export default function S14_M2Post() {
	return (
		<TestSlide
			module="M2"
			kind="post"
			question="两位同学的 /context 长这样，各给一条改进建议，并说出依据的是哪条标准"
			items={[
				'同学 A：MCP tools 占了一大块，但这周只用到其中一个 server',
				'同学 B：Messages 占了大半，因为让 agent 把整个日志目录都读了一遍',
			]}
			answer={<>A：关掉用不上的 MCP server，或者确认 tool search 开着，让工具定义按需加载 —— information density。B：把「读日志找原因」交给 subagent，只把结论带回主对话；也可以在任务之间 /compact —— isolation / recency。</>}
		/>
	);
}
