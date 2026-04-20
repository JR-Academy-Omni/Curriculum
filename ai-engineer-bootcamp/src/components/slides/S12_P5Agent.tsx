import PhaseSlide from '../PhaseSlide';
import { phases } from '../../data/phases';

export default function S12_P5Agent() {
	return (
		<PhaseSlide
			phase={phases[4]}
			whyItMatters="ReAct 是所有 Agent 的基石。3 大 Agent SDK（OpenAI / Claude / Google）对比实操 —— 不是 PPT 对比，是真写代码跑起来再做 trade-off。"
			representativeLessons={[
				'ReAct Framework',
				'Agent 详解：构建第一个 Agent',
				'Agentic RAG',
			]}
		/>
	);
}
