import { Mono, Page, Say, Tbl } from './_parts';

export default function S22_WhatSdkDoes() {
	return (
		<Page part="第 3 部分" at={["agent.py · run_agent()", "agent.py · agent_options()"]} title="我们手写的部分，SDK 替你做了">
		  <Tbl size={25} widths="1fr 1.5fr" head={['手写循环里', 'Claude Agent SDK']} rows={[
		    ['for 循环和步数上限', <Mono>max_turns</Mono>],
		    ['执行工具、接回结果', 'SDK 内部完成，工具可以走 MCP'],
		    ['messages 列表', 'session，可以用 session_id 恢复'],
		    ['校验放在工具前', 'hooks（PreToolUse）'],
		    ['谁能调用哪个工具', <><Mono>tools</Mono>、<Mono>allowed_tools</Mono>、permission mode</>],
		  ]} />
		  <Say>SDK 省掉的是写循环的功夫，边界还要你来定。</Say>
		</Page>
	);
}
