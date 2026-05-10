import TutorBio from './_TutorBio';
import { colors } from '../ui';

export default function L11_TutorBio_Long() {
	return (
		<TutorBio
			name="Long Zhao"
			role="Engineering Lead"
			org="Qantas"
			accentColor={colors.indigo}
			icon="✈️"
			bullets={[
				'Qantas Engineering Lead · 带团队做生产级 React 应用',
				'8 年一线 Full-stack 经验 · 主攻 React 工程化',
				'通过 JR Academy 个人帮过 86 位学员拿到 offer',
				'本课负责：React 工程化 + Code Review + 架构指导',
				'熟悉澳洲 / 新西兰 / 新加坡大公司面试流程 · 能给学员 mock interview',
			]}
			stack={['React 19', 'TypeScript', 'Next.js', 'Code Review', 'Mock Interview']}
			quote="React 学到的不是 useEffect 怎么写，是怎么把 100 个 component 组织成一个不会崩的系统。"
		/>
	);
}
