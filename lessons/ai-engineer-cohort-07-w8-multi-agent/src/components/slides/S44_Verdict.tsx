import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S44_Verdict() {
	return (
		<Page part="第 7 部分" title="收益要盖过成本，Multi-Agent 才成立">
		  <Cols n={3}>
		    <Box title="质量" size={23}>检查通过得更多吗？没有更好，就不要为它多付钱。</Box>
		    <Box title="延迟" size={23}>并行省下的时间，比派活和汇总花掉的多吗？</Box>
		    <Box title="成本和治理" size={23}>多出来的 token、线程、审计和排查，团队负担得起吗？</Box>
		  </Cols>
		  <Say bg={colors.green}>答案取决于任务的形状：同一个系统，一位住户和六位住户可能该用不同的架构。</Say>
		</Page>
	);
}
