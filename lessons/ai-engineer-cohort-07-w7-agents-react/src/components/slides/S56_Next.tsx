import { Page, Say, Tbl } from './_parts';

export default function S56_Next() {
	return (
		<Page part="收尾" title="把循环交给模型，把边界留给代码">
		  <Tbl size={25} widths="170px 1fr" head={['接下来', '内容']} rows={[
		    ['W8', 'Multi-Agent 架构；Practice 把 CareKind 接成 MCP tools'],
		    ['W9', 'Agent Memory；Practice 动手做 Bounded CareKind Agent'],
		    ['W10–W11', 'Harness、长期记忆、治理'],
		    ['L115 / L117', '选修：SDK 深入对比和替代 SDK Lab'],
		  ]} />
		  <Say>本课不布置作业。W9 动手时，今天讲的停止、失败和审批都会用上。</Say>
		</Page>
	);
}
