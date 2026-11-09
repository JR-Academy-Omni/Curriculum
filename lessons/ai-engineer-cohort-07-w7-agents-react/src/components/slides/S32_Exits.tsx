import { colors } from '../ui';
import { Box, Code, Cols, Mono, Page, Say } from './_parts';

export default function S32_Exits() {
	return (
		<Page part="第 5 部分" at={["agent.py · stop_reason_of()"]} title="一个循环至少要有四个出口">
		  <Cols n={4}>
		    <Box title="成功" bg={colors.green}>任务完成，结果经过核对</Box>
		    <Box title="失败" bg={colors.white}>做不了，明确告知或交人工</Box>
		    <Box title="超时" bg={colors.yellow}>时间用完，当前状态要记录下来</Box>
		    <Box title="预算耗尽" bg={colors.orange}>步数或费用到顶，<Mono>max_turns</Mono>、<Mono>max_budget_usd</Mono></Box>
		  </Cols>
		  <Code file="demo/agent.py" size={16} code={"def stop_reason_of(stop: dict, result, failure: str | None) -> str | None:\n    \"\"\"这次运行为什么停下。正常做完返回 None。\"\"\"\n    if stop.get(\"reason\"):\n        return stop[\"reason\"]\n    if failure:\n        return failure\n    if result is None:\n        return \"no_result\"\n    if result.is_error or result.subtype != \"success\":\n        return result.terminal_reason or result.subtype\n    return None"} />
		  <Say>每个出口都要写在代码里。不能指望模型自己知道该停。</Say>
		</Page>
	);
}
