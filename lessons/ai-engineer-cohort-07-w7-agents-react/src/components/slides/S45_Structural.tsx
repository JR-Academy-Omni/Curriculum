import { colors } from '../ui';
import { Box, Code, Cols, Page, Say } from './_parts';

export default function S45_Structural() {
	return (
		<Page part="第 7 部分" at={["guards.py · guarded_call()"]} title="结构性约束，强过 system prompt">
		  <Cols n={3}>
		    <Box title="① System prompt" bg={colors.white}>“超过 500 元不要自动退款”<br /><br />这是请求。模型可能忽略、遗忘，也可能被注入的文字带偏。</Box>
		    <Box title="② Allowlist / hook" bg={colors.yellow}>调用到达工具之前被拦下。<br /><br />不管模型怎么想，这个调用过不去。</Box>
		    <Box title="③ 工具内部检查" bg={colors.green}>最后一道线。<br /><br />就算前两层被绕过，工具也拒绝执行。</Box>
		  </Cols>
		  <Code file="demo/guards.py" size={15} code={"error = validate_args(tool, args)\nif error:\n    return \"schema\", error\nif not skip_hook:\n    decision, reason = policy_gate(desk, tool, args)\n    if decision != \"allow\":\n        return \"hook\", make_error(\"approval_required\" if decision == \"ask\" else \"forbidden\", reason)\nresult = getattr(desk, tool)(**args)\nreturn (\"tool\" if result[\"status\"] == \"error\" else \"放行\"), result"} />
		  <Say>Prompt 负责表达意图，代码负责保证结果。重要的规则不能只写在 prompt 里。</Say>
		</Page>
	);
}
