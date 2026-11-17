import { Page, Say, Tbl } from './_parts';

export default function S29_WhatIsolated() {
	return (
		<Page part="第 5 部分" title="每个 Agent 自己的六样东西">
		  <Tbl size={22} widths="220px 1fr 1fr" head={['', '决定什么', '设计时问']} rows={[
		    ['Model', '能力和单价', '这件事要多强的模型？'],
		    ['System prompt', '它以为自己是谁、该怎么做', '只写这个角色需要的规则'],
		    ['Tools', '它能做什么', '最少够用。能读的不给写'],
		    ['MCP servers', '它能连哪些外部系统', '只连它那一块需要的'],
		    ['Skills', '它带着哪些额外的说明和脚本', '别把所有 skills 都给所有人'],
		    ['Permission scope', '同一个工具，它能动哪些数据', '在后台按调用者再查一次'],
		  ]} />
		  <Say>不共享的还有对话：子 Agent 看不到协调者和用户说过什么。它只知道任务里写了什么。</Say>
		</Page>
	);
}
