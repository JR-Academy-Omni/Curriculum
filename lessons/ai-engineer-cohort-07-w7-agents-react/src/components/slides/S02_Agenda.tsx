import { Box, Cols, Page, Say } from './_parts';

export default function S02_Agenda() {
	return (
		<Page part="今天的路线" title="一个问题，八个部分">
		  <Cols n={2} gap={14}>
		    <Box size={26}>1 · 谁决定下一步：Workflow 与 Agent</Box>
		    <Box size={26}>5 · 循环怎么停</Box>
		    <Box size={26}>2 · ReAct：Action 和 Observation</Box>
		    <Box size={26}>6 · 出错了怎么办：重试还是升级</Box>
		    <Box size={26}>3 · Claude Agent SDK</Box>
		    <Box size={26}>7 · 副作用、审批、约束与交接</Box>
		    <Box size={26}>4 · State：记住了什么</Box>
		    <Box size={26}>8 · 框架怎么选，面试怎么答</Box>
		  </Cols>
		  <Say>主线例子还是 W6 的退款客服。合成数据，写操作全部是模拟的。</Say>
		</Page>
	);
}
