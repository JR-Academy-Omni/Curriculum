import { colors } from '../ui';
import { PatternPage } from './_pattern';

export default function S15_Sequential() {
	return (
		<PatternPage title="Sequential：后一步依赖前一步"
		  flow={[{ t: 'Plan', d: '定下要做什么' }, { t: 'Execute', d: '按计划做' }, { t: 'Verify', d: '独立检查', bg: colors.yellow }]}
		  use="步骤有明确依赖，而且检查的人需要不同的视角或权限。"
		  avoid="每一步都由代码决定顺序。那是 Workflow，用代码写更便宜、更好测。"
		  example="Note drafter 写 Draft → Policy checker 只读核对。检查员不能改，只能报告。" />
	);
}
