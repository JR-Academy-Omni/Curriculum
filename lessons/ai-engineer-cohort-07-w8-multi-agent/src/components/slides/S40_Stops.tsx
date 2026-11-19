import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S40_Stops() {
	return (
		<Page part="第 7 部分" at={['handover.py · DEADLINE_S', 'settings.py · budget_cents']} title="谁来叫停：四层，都在模型外面">
		  <Cols n={2} gap={16}>
		    <Box title="① 钱：session 预算" size={22}>整个 session 一个上限，所有线程共用。到了就暂停，不会多花。</Box>
		    <Box title="② 时间：墙钟上限" size={22}>我们的代码计时，超过 15 分钟发 interrupt。</Box>
		    <Box title="③ 规模：平台限制" size={22}>只有一层委派；子线程有上限；roster 固定，不许临时造 Agent。</Box>
		    <Box title="④ 正常结束" size={22}>协调者交出交班表，session 进入 idle（end_turn）。</Box>
		  </Cols>
		  <Say bg={colors.red}><span style={{ color: colors.white }}>预算要在创建 session 时就设好，之后不能再补。</span></Say>
		</Page>
	);
}
