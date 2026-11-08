import { colors } from '../ui';
import { Box, Code, Flow, Page } from './_parts';

export default function S38_RuleOfThumb() {
	return (
		<Page part="第 6 部分" at={["errors.py · decide()"]} title="经验法则：重试 → 模型修正 → 升级">
		  <Flow size={23} items={[
		    { t: '① 代码重试', d: '临时错误，有上限', bg: colors.green },
		    { t: '② 模型修正', d: '能修的错误，改一次', bg: colors.yellow },
		    { t: '③ 升级给人', d: '带着交接单', bg: colors.red },
		  ]} />
		  <Box title="什么时候升级给人工" size={22}>
		    重试次数用完　·　同样的失败重复出现　·　权限或政策挡住了　·　副作用状态未知　·　预算用完
		  </Box>
		  <Code file="demo/errors.py" size={17} code={"category = result[\"error\"][\"category\"]\nif category == \"transient\":\n    return Decision.RETRY if attempt < max_attempts else Decision.ESCALATE\nif category == \"fixable\":\n    return Decision.ESCALATE if model_fix_used else Decision.RETURN_TO_MODEL\nif category == \"unknown_outcome\":\n    return Decision.ESCALATE if status_checked else Decision.CHECK_STATUS\nif code in NEEDS_HUMAN:\n    return Decision.ESCALATE\nreturn Decision.TELL_CUSTOMER"} />
		</Page>
	);
}
