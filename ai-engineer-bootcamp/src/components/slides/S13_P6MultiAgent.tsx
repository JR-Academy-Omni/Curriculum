import PhaseSlide from '../PhaseSlide';
import { phases } from '../../data/phases';

export default function S13_P6MultiAgent() {
	return (
		<PhaseSlide
			phase={phases[5]}
			whyItMatters="Multi-Agent 是下一代 AI 系统。LangGraph 做编排、A2A Protocol 做通信、LangSmith 做 Agent Ops —— 一条龙全打通。"
			representativeLessons={[
				'Multi-Agent Architectures',
				'LangGraph 工程实战',
				'Agent Ops with LangSmith',
			]}
		/>
	);
}
