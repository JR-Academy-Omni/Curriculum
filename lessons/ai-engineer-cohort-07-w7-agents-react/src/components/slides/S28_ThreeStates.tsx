import { colors } from '../ui';
import { Box, Code, Cols, Page, Say } from './_parts';

export default function S28_ThreeStates() {
	return (
		<Page part="第 4 部分" at={["agent.py · save_task_state()", "agent.py · resume_run()"]} title="三种 state，谁说了算">
		  <Cols n={3}>
		    <Box title="Agent state" bg={colors.blue}>这次对话里发生过什么：消息、工具调用。<br /><br />谁管：SDK 的 session。resume 能接回来。</Box>
		    <Box title="Task state" bg={colors.yellow}>业务做到哪了：等审批、已退款。<br /><br />谁管：你的代码和数据库。</Box>
		    <Box title="Tool result" bg={colors.green}>某次工具调用的结果：当时查到的事实。<br /><br />谁管：工具返回。只代表查的那一刻。</Box>
		  </Cols>
		  <Code file="demo/agent.py" size={16} code={"def save_task_state(order_id: str, customer_id: str, status: str, session_id: str | None, trace: Trace) -> dict:\n    \"\"\"task state：我们自己存，不靠模型记忆。\"\"\"\n    state = {\"order_id\": order_id, \"customer_id\": customer_id, \"status\": status,\n             \"session_id\": session_id, \"trace_id\": trace.trace_id}\n    state_file().write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding=\"utf-8\")\n    return state"} />
		  <Say>resume 只接回对话。模型记得“审批过”不算数，审批和金额都以系统为准。
		    <div style={{ fontWeight: 500, fontSize: 23, marginTop: 6 }}>记忆和上下文怎么管，W9、W10 再讲。</div>
		  </Say>
		</Page>
	);
}
