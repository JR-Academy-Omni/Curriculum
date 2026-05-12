import ChapterCover from '../ChapterCover';
import { colors } from '../ui';

export default function S21_IndustryCover() {
	return (
		<ChapterCover
			chapter="CHAPTER 3 · 行业垂直岗"
			count="5"
			title="AI 进入了医院、银行、农田、教室、搜索引擎"
			subtitle="不必离开你现在的行业 —— 医生、银行家、农艺师、SEO 专家都能在原行业内升级成 AI 角色"
			bg={colors.industryBg}
			accent={colors.industryCyan}
		/>
	);
}
