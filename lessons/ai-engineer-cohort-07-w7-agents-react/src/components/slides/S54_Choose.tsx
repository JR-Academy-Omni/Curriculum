import { Mono, Page, Say, Tbl } from './_parts';

export default function S54_Choose() {
	return (
		<Page part="第 8 部分" title="怎么选，以及各自怎么出问题">
		  <Tbl size={19} widths="190px 1fr 1.25fr" head={['', '适合', '要小心']} rows={[
		    ['Claude Agent SDK', '用 Claude，想要现成的运行时', <>默认带内置工具；<Mono>allowed_tools</Mono> 不是白名单</>],
		    ['OpenAI Agents SDK', '轻量编排，handoffs 和 tracing', '并行 guardrail 触发时，工具可能已经执行'],
		    ['PydanticAI', 'Python 团队，重视类型和校验', '类型正确不等于业务正确，授权还要自己做'],
		    ['LangGraph', '流程复杂，要长时间暂停和恢复', <>图变复杂；<Mono>MemorySaver</Mono> 重启后丢失；恢复时节点重跑</>],
		  ]} />
		  <Say>先固定任务、工具、停止条件和测试，再比较框架。换框架解决不了边界没想清楚。</Say>
		</Page>
	);
}
