import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S07_WhoDecides() {
	return (
		<Page part="第 1 部分" at={["01_control.py · workflow()", "01_control.py · tool_once()", "01_control.py · react_loop()"]} title="三个级别，差别只有一个：谁决定下一步">
		  <Cols n={3}>
		    <Box title="1 · Workflow" bg={colors.white}><strong>代码决定。</strong><br />步骤写死，每次都一样。模型最多帮忙写字。</Box>
		    <Box title="2 · Tool-using app" bg={colors.yellow}><strong>模型选一次。</strong><br />它挑一个工具，代码执行，然后结束。W6 就在这里。</Box>
		    <Box title="3 · Agent" bg={colors.red} style={{ color: colors.white }}><strong>模型一直决定。</strong><br />看到结果再想下一步，直到它认为做完，或被代码叫停。</Box>
		  </Cols>
		  <Say>W6 留的预告：Agent 就是客服自己决定下一张派什么单。</Say>
		</Page>
	);
}
