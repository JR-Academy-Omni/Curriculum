import { Page, Say, Tbl } from './_parts';

export default function S22_TwoSurfaces() {
	return (
		<Page part="第 4 部分" title="两条 Anthropic 的路，各管什么">
		  <Tbl size={20} widths="220px 1fr 1fr" head={['', 'Claude Agent SDK', 'Claude Managed Agents（beta）']} rows={[
		    ['循环跑在哪', '你的进程里（Claude Code 打包成库）', 'Anthropic 的服务上，每个 session 一个容器'],
		    ['子 Agent 怎么定义', '代码里的 AgentDefinition', '存在服务端的 Agent，带版本号'],
		    ['协调方式', '主 Agent 用内置的子 Agent 工具派活', 'Coordinator + roster，可固定版本'],
		    ['隔离单位', '每个 subagent 自己的上下文', '每个 thread：自己的历史、模型、system、tools、MCP、skills'],
		    ['你写的代码', 'hooks、权限、session', '回答工具调用、读事件流、设预算'],
		    ['W7 用过', '是（agent.py）', '今天的 demo'],
		  ]} />
		  <Say>Managed Agents 是 Anthropic 的 beta 托管服务，不是跨厂商的开放标准。学的是编排思想，不绑定这一家的 API。</Say>
		</Page>
	);
}
