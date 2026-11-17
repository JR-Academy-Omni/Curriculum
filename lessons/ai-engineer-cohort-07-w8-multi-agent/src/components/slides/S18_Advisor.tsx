import { colors } from '../ui';
import { PatternPage } from './_pattern';

export default function S18_Advisor() {
	return (
		<PatternPage title="Escalation / advisor：难的才往上交"
		  flow={[{ t: '执行者', d: '日常步骤，中档模型' }, { t: 'Advisor', d: '卡住时咨询更强的模型', bg: colors.yellow }, { t: '人', d: '需要负责任的决定', bg: colors.red }]}
		  use="大部分步骤简单，少数步骤难。只在难的地方付贵的钱。"
		  avoid="把“要人负责的决定”交给更强的模型。advisor 给建议，不替人拍板。"
		  example="Shift lead 跑在 Sonnet 5.5，措辞拿不准时咨询 Opus 5.5。R-106 是否上报：交给 RN。" />
	);
}
