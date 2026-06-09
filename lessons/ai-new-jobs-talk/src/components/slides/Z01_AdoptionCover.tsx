import ChapterCover from '../ChapterCover';
import { colors } from '../ui';

export default function Z01_AdoptionCover() {
	return (
		<ChapterCover
			chapter="CHAPTER 5 · 正在发生的事"
			count="01"
			title="AI Adoption 不是用 AI，是搭 pipeline"
			subtitle="一个 Social Media 工作流 4 步演进 + 企业级长期记忆系统 · 本章现场演示 Claude Cowork 怎么搭这条 pipeline"
			bg={colors.warmBg}
			accent={colors.techPurple}
		/>
	);
}
