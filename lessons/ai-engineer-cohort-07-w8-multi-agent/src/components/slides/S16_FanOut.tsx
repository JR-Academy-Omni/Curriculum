import { colors } from '../ui';
import { PatternPage } from './_pattern';

export default function S16_FanOut() {
	return (
		<PatternPage title="Parallel fan-out / synthesis：分头做，再汇总"
		  flow={[{ t: 'Coordinator', d: '拆成独立子任务' }, { t: 'Worker × N', d: '各自的线程，同时跑', bg: colors.yellow }, { t: 'Synthesis', d: '协调者合并、去重、找冲突' }]}
		  use="子任务互不依赖，数量多，单个读起来很重。"
		  avoid="子任务要互相看结果，或者只有一两个。每次派活都要重新交代一遍。"
		  example="六位住户，每位一个 Note drafter 线程。Shift lead 只读回报，不读原始记录。" />
	);
}
