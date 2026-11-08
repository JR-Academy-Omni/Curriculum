import { Box, Cols, Page } from './_parts';

export default function S55_Interview() {
	return (
		<Page part="第 8 部分" title="面试问“你怎么设计一个 Agent”，这样答">
		  <Cols n={2} gap={12}>
		    <Box size={26}><strong>1 · 先问要不要 Agent</strong><br />Workflow 能解决就不用</Box>
		    <Box size={26}><strong>2 · 工具和权限</strong><br />最小集合，写操作单独把关</Box>
		    <Box size={26}><strong>3 · 怎么停</strong><br />步数、时间、费用、循环检测</Box>
		    <Box size={26}><strong>4 · 怎么失败</strong><br />错误分类，幂等键，交接单</Box>
		    <Box size={26}><strong>5 · 约束放哪</strong><br />放在 hook 和工具里，不只在 prompt</Box>
		    <Box size={26}><strong>6 · 怎么证明</strong><br />运行记录，失败路径的测试</Box>
		  </Cols>
		</Page>
	);
}
