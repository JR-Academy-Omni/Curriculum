import ChapterCover from '../ChapterCover';
import { colors } from '../ui';

export default function S05_TechCover() {
	return (
		<ChapterCover
			chapter="CHAPTER 1 · 技术岗"
			count="13"
			title="AI 时代的工程师们"
			subtitle="从 Prompt 到 Agent 到 FDE —— 这一类岗位的薪资天花板正在被打穿"
			bg={colors.techBg}
			accent={colors.techPurple}
		/>
	);
}
