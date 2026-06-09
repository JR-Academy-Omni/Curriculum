import ChapterCover from '../ChapterCover';
import { colors } from '../ui';

export default function C01_DyingCover() {
	return (
		<ChapterCover
			chapter="CHAPTER 1 · 消失中的工作"
			count="01"
			title="正在消失的岗位"
			subtitle="AI 时代职业变化的 A 面：哪些工作正在被吃掉"
			bg={colors.warmBg}
			accent={colors.explosive}
		/>
	);
}
