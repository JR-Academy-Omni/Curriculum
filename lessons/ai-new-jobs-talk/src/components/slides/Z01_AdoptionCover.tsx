import ChapterCover from '../ChapterCover';
import { colors } from '../ui';

export default function Z01_AdoptionCover() {
	return (
		<ChapterCover
			chapter="CHAPTER 5 · CASE STUDY"
			count="01"
			title="AI Adoption 正在发生"
			subtitle="看完职业地图，再看一件正在发生的事 —— 一个 Social Media 工作流，怎么从「人 + AI」变成「全自动 pipeline」"
			bg={colors.warmBg}
			accent={colors.techPurple}
		/>
	);
}
