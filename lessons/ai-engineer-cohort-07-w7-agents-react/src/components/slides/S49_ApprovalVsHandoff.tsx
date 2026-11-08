import { colors } from '../ui';
import { Box, Cols, Page, Say } from './_parts';

export default function S49_ApprovalVsHandoff() {
	return (
		<Page part="第 7 部分" at={["agent.py · make_gate()", "handoff.py · build_handoff()"]} title="审批和交接，不是一回事">
		  <Cols n={2}>
		    <Box title="人工审批 Approval" bg={colors.yellow}>Agent 暂停，问一个问题。<br />答 yes，<strong>Agent 继续</strong>。<br /><br />主管签字。</Box>
		    <Box title="交接 Handoff（今天：交给人）" bg={colors.blue}>Agent 停下，把案子交出去。<br /><strong>人接手</strong>，Agent 不再继续。<br /><br />下班前写交接条。</Box>
		  </Cols>
		  <Say>交接单的标准：接手的人不用读完整运行记录，就能开始处理。
		    <div style={{ fontWeight: 500, fontSize: 23, marginTop: 6 }}>Agent 之间也能交接，比如 OpenAI Agents SDK 的 handoffs。W8 讲多 Agent 时再看，标准一样：接手方不用从头查。</div>
		  </Say>
		</Page>
	);
}
