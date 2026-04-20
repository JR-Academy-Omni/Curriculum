import PhaseSlide from '../PhaseSlide';
import { phases } from '../../data/phases';

export default function S15_P8Harness() {
	return (
		<PhaseSlide
			phase={phases[7]}
			whyItMatters="Claude Code、Cursor 背后就是 Harness。学会它你不只能写 Agent，你能造 Agent 的 IDE。V5 独家，别的 Bootcamp 都没有。"
			representativeLessons={[
				'Harness 架构原理',
				'Hook System 设计',
				'构建你自己的 AI Harness',
			]}
		/>
	);
}
