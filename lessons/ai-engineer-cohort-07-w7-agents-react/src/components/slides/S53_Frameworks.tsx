import { Mono, Page, Say, Tbl } from './_parts';

export default function S53_Frameworks() {
	return (
		<Page part="第 8 部分" title="同样的概念，四个 SDK">
		  <Tbl size={18} widths="130px 1fr 1fr 1fr 1fr" head={['', 'Claude Agent SDK', 'OpenAI Agents SDK', 'PydanticAI', 'LangGraph']} rows={[
		    ['循环', '内置 Claude Code 运行时', 'Runner', 'Agent.run', '自己画图：节点和边'],
		    ['步数上限', <Mono>max_turns</Mono>, <Mono>max_turns</Mono>, <Mono>UsageLimits</Mono>, <Mono>recursion_limit</Mono>],
		    ['人工审批', 'hooks、can_use_tool', <Mono>needs_approval</Mono>, <Mono>requires_approval</Mono>, <Mono>interrupt()</Mono>],
		    ['暂停和恢复', 'session_id + resume', <Mono>RunState</Mono>, <Mono>DeferredToolRequests</Mono>, 'checkpointer + thread_id'],
		    ['特色', '自带工具、hooks、sessions', 'handoffs、guardrails、tracing', '类型和校验，ModelRetry', '显式状态图，持久化'],
		  ]} />
		  <Say>学一个框架，先问这五个问题。答案不同，要解决的问题相同。</Say>
		</Page>
	);
}
