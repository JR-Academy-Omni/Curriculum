import TutorBio from './_TutorBio';
import { colors } from '../ui';

export default function L09_TutorBio_Lightman() {
	return (
		<TutorBio
			name="Lightman Wang"
			role="Founder · CEO · Career Coach"
			org="JR Academy"
			accentColor={colors.dark}
			icon="🎯"
			bullets={[
				'UQ Computer Science 毕业',
				'Part-time → Full-time → Startup · 工作 3 年后 2017 创办 JR Academy',
				'亲自做过 200+ 学员的 1v1 Career Coaching',
				'600+ 学员通过 JR Academy 拿到 IT offer',
				'9 年一线 IT 教学 + 同时还在写代码',
			]}
			stack={['Career Coaching', 'Full-Stack', 'AI Eng', 'Reference Check', 'LinkedIn 优化']}
			quote="我教的不是教科书内容，是我在公司见过、也在学员身上见过的真实坑。"
		/>
	);
}
