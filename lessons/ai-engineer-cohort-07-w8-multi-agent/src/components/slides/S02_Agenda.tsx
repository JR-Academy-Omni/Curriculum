import { Box, Cols, Page, Say } from './_parts';

export default function S02_Agenda() {
	return (
		<Page part="今天的路线" title="一个判断，八个部分">
		  <Cols n={2} gap={14}>
		    <Box size={26}>1 · 要不要 Agent：什么时候仍用 Workflow</Box>
		    <Box size={26}>5 · Context isolation：每个 Agent 看到什么</Box>
		    <Box size={26}>2 · 一个还是多个：复杂度、并行、专业化</Box>
		    <Box size={26}>6 · 委派契约、引用和汇总</Box>
		    <Box size={26}>3 · 五种编排模式</Box>
		    <Box size={26}>7 · 停止、预算、部分失败、交给人、评估</Box>
		    <Box size={26}>4 · Agent SDK 与 Managed Agents</Box>
		    <Box size={26}>8 · 系统设计：怎么选、怎么讲</Box>
		  </Cols>
		  <Say>主线例子换成 CareKind 交班。数据是合成的，AI 只写 Draft，不确认、不判断是否上报。</Say>
		</Page>
	);
}
