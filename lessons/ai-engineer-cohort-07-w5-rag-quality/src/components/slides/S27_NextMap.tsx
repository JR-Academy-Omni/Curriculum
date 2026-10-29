import { colors } from '../ui';
import { PartFrame, TermCards } from './_shared';

// 后续地图：W6 Practice 搭 eval pipeline（第七期排课 C7P06 Build the Evaluation Pipeline First）；W6 理论 Tool Calling & MCP
export default function S27_NextMap() {
	return (
		<PartFrame part="wrap" title="接下来">
			<TermCards minHeight={300} items={[
				{ zh: '下周 Practice', term: 'Eval pipeline', color: colors.green, d: <>把今天的考题、指标和对比报告，搭成你自己项目里的评估流水线。</> },
				{ zh: '以后再讲', term: 'Query rewrite', color: colors.blue, d: <>先改写问题再检索，比如把“去年”换成具体年份。</> },
				{ zh: '下周理论', term: 'Tool calling · MCP', color: colors.orange, d: <>模型不只看资料，开始动手：查订单、发起退款。</> },
			]} />
		</PartFrame>
	);
}
