import PhaseSlide from '../PhaseSlide';
import { phases } from '../../data/phases';

export default function S14_P7Memory() {
	return (
		<PhaseSlide
			phase={phases[6]}
			whyItMatters="Agent 没有 Memory 就是金鱼。V5 新增的这一层，让你的 AI 能记住用户偏好、项目上下文、历史决策 —— 从一次性对话走向真正的长期协作。"
			representativeLessons={[
				'Short-term vs Long-term Memory',
				'Mem0 实操',
				'Memory 技术全景',
			]}
		/>
	);
}
