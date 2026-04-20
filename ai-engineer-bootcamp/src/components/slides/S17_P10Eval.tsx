import PhaseSlide from '../PhaseSlide';
import { phases } from '../../data/phases';

export default function S17_P10Eval() {
	return (
		<PhaseSlide
			phase={phases[9]}
			whyItMatters="AI Eval 是 Anthropic / OpenAI 招聘 JD 的硬门槛。没 Eval 的 AI 系统上不了生产。Guardrails + Red-teaming + LangSmith 监控 + 职业路径 Workshop，一起毕业。"
			representativeLessons={[
				'AI Evaluation Framework',
				'Guardrails + Safety',
				'Red-teaming 实战',
				'LinkedIn & CV Workshop',
			]}
		/>
	);
}
