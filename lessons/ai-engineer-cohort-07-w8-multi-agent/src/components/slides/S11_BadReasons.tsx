import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S11_BadReasons() {
	return (
		<Page part="第 2 部分" title="站不住的拆分理由">
		  <Cols n={3}>
		    <Box title="按职位拆" bg={colors.red} size={23}>“护士 Agent”“经理 Agent”“家属沟通 Agent”。<br />名字不同，工具、权限、上下文一样。</Box>
		    <Box title="Agent 越多越聪明" bg={colors.red} size={23}>多一个 Agent 不会多出新知识，只多一次转述和一次出错的机会。</Box>
		    <Box title="为了好看的流程图" bg={colors.red} size={23}>五个框连成一条线，每个框只做一步。这是 Workflow，写成代码更好。</Box>
		  </Cols>
		  <Say>Anthropic 的建议：先用最简单、可组合的做法，确实需要时才加复杂度。</Say>
		</Page>
	);
}
