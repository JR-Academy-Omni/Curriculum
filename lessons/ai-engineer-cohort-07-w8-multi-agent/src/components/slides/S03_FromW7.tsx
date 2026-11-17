import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S03_FromW7() {
	return (
		<Page part="接上 W7" title="上周一个 Agent，今天问：要不要拆？">
		  <Cols n={2}>
		    <Box title="W7 留下的" size={25}>
		      <div>→ 能写成 Workflow 的，就不用 Agent</div>
		      <div>→ 循环交给模型，边界留给代码</div>
		      <div>→ 停止、失败、审批、交接都写在代码里</div>
		      <div>→ Multi-agent 留给 W8</div>
		    </Box>
		    <Box title="今天多出来的问题" bg={colors.yellow} size={25}>
		      <div>→ 一个 Agent 什么时候不够？</div>
		      <div>→ 拆开以后谁协调、谁汇总？</div>
		      <div>→ 每个 Agent 能看到什么、能做什么？</div>
		      <div>→ 怎么证明拆了更好？</div>
		    </Box>
		  </Cols>
		  <Say>每多一个 Agent，W7 讲的停止、失败和审批就多一份。</Say>
		</Page>
	);
}
