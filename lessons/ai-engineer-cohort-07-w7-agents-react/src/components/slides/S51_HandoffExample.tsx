import { colors } from '../ui';
import { Box, Code, Cols, Page, Say } from './_parts';

export default function S51_HandoffExample() {
	return (
		<Page part="第 7 部分" at={["handoff.py · build_handoff()"]} title="哪一张，接手的人能直接开工？">
		  <Cols n={2}>
		    <Box title="差的交接" bg={colors.white}>“处理客户退款时遇到问题，请人工跟进。”<br /><br />退了没有？哪张订单？要我做什么？<br />接手的人只能从头查。</Box>
		    <Code file="好的交接（示例）" size={17} code={"原因       unknown_side_effect\n案件       C007 / A7168\n背景       客户申请退款，350 元，已签收 6 天\n已完成     get_order → ok\n           issue_refund → error\n未完成     确认邮件\n副作用     issue_refund A7168：unknown\n需要你决定 到退款系统核实 A7168 是否已\n           入账，再决定是否补发邮件\n运行记录   run-378b00dd"} />
		  </Cols>
		  <Say>最重要的一行是副作用状态。unknown 就写 unknown，不要猜。</Say>
		</Page>
	);
}
