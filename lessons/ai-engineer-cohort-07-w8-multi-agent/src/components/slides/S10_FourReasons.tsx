import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S10_FourReasons() {
	return (
		<Page part="第 2 部分" title="四个站得住的拆分理由">
		  <Cols n={2} gap={16}>
		    <Box title="① 能并行的独立工作" size={23}>六位住户互不依赖，可以同时写。<br /><strong>赚的是墙钟时间。</strong></Box>
		    <Box title="② 不同的工具或权限" size={23}>检查员只能读，不能写 Draft。<br /><strong>赚的是安全边界。</strong></Box>
		    <Box title="③ 专门的上下文" size={23}>每位住户的记录不挤进同一个窗口。<br /><strong>赚的是注意力，协调者的上下文保持干净。</strong></Box>
		    <Box title="④ 少数难步骤要更强的模型" size={23}>措辞敏感的事件，咨询 advisor。<br /><strong>赚的是质量，只在需要的地方花钱。</strong></Box>
		  </Cols>
		  <Say bg={colors.green}>说不出是这四个里的哪一个，就先别拆。</Say>
		</Page>
	);
}
