import { colors } from '../ui';
import { PatternPage } from './_pattern';

export default function S17_Specialization() {
	return (
		<PatternPage title="Specialization：不同的人拿不同的钥匙"
		  flow={[{ t: 'Drafter', d: '读记录、查政策、写 Draft' }, { t: 'Checker', d: '读 Draft、查政策', bg: colors.yellow }, { t: 'Lead', d: '只能交给 RN' }]}
		  use="不同子任务需要不同的工具、权限、prompt 或模型。差别越大，越值得拆。"
		  avoid="几个 Agent 的工具和权限其实一样，只是 prompt 里的角色名不同。"
		  example="三个 Agent 各有一份工具清单。Checker 用便宜的模型，因为它只读、只对照。" />
	);
}
