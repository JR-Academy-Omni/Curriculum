import ChapterCover from '../ChapterCover';
import { colors } from '../ui';

export default function S14_GovCover() {
	return (
		<ChapterCover
			chapter="CHAPTER 3 · 治理管理岗"
			count="6"
			title="董事会上谈 AI 战略的人"
			subtitle="不需要 PhD、不需要 10 年工程经验 —— 业务 × 技术 × 沟通的交叉点"
			bg={colors.govBg}
			accent={colors.govOrange}
		/>
	);
}
