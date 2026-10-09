import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';

import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_WhyJR';
import S03 from './components/slides/S03_Problem';
import S04 from './components/slides/S04_WhyNow';
import S04b from './components/slides/S04b_ProblemAnswer';
import S05 from './components/slides/S05_Loop';
import S06 from './components/slides/S06_Architecture';
import S07 from './components/slides/S07_DemoStages';
import S08 from './components/slides/S08_DemoActProve';
import S09 from './components/slides/S09_SkillsAnd30Days';
import S10 from './components/slides/S10_Status';
import S11 from './components/slides/S11_Moat';
import S12 from './components/slides/S12_Business';
import S13 from './components/slides/S13_GTM';
import S14 from './components/slides/S14_Competition';
import S15 from './components/slides/S15_Roadmap';
import S16 from './components/slides/S16_Team';
import S17 from './components/slides/S17_Ask';
import A01 from './components/slides/A01_Methodology';
import A02 from './components/slides/A02_Risks';
import A03 from './components/slides/A03_Sources';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			{/* CH 0 · 开场与问题 */}
			<S01 />
			<S02 />
			<S03 />
			<S04 />
			<S04b />
			{/* CH 1 · 产品与证明 */}
			<S05 />
			<S06 />
			<S07 />
			<S08 />
			<S09 />
			<S10 />
			{/* CH 2 · 生意 */}
			<S11 />
			<S12 />
			<S13 />
			<S14 />
			<S15 />
			{/* CH 3 · 团队与需求 */}
			<S16 />
			<S17 />
			{/* 附录 */}
			<A01 />
			<A02 />
			<A03 />
		</SlideEngine>
	);
}
