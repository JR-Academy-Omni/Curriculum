import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';

// 第七期 W2 · Tokens, Context Windows & Cache Efficiency（90 分钟，模块划分见 data/modules.ts）
// 每个模块按 Test → Teach → Test：前测页 → 讲 + 跑 → 后测页
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_TwoQuestions';
import S03 from './components/slides/S03_Agenda';
import S04 from './components/slides/S04_CommandsA';
import S05 from './components/slides/S05_CommandsB';
import S06 from './components/slides/S06_PreTest';
import S07 from './components/slides/S07_M1Pre';
import S08 from './components/slides/S08_M1Context';
import S09 from './components/slides/S09_M1Usage';
import S10 from './components/slides/S10_M1Post';
import S11 from './components/slides/S11_M2Pre';
import S12 from './components/slides/S12_M2Teach';
import S13 from './components/slides/S13_M2Lab';
import S14 from './components/slides/S14_M2Post';
import S15 from './components/slides/S15_M3Pre';
import S16 from './components/slides/S16_M3Lab';
import S17 from './components/slides/S17_M3Teach';
import S18 from './components/slides/S18_M3Post';
import S19 from './components/slides/S19_M4Pre';
import S20 from './components/slides/S20_M4Teach';
import S21 from './components/slides/S21_M4Post';
import S22 from './components/slides/S22_M5Pre';
import S23 from './components/slides/S23_M5ColdWarm';
import S24 from './components/slides/S24_M5Break';
import S25 from './components/slides/S25_M5TTL';
import S26 from './components/slides/S26_M5Production';
import S27 from './components/slides/S27_M5Post';
import S28 from './components/slides/S28_M6Pre';
import S29 from './components/slides/S29_M6ResponseCache';
import S30 from './components/slides/S30_M6Memory';
import S31 from './components/slides/S31_M6Post';
import S32 from './components/slides/S32_M7Summary';
import S33 from './components/slides/S33_M7Interview1';
import S34 from './components/slides/S34_M7Interview2';
import S35 from './components/slides/S35_M7Interview3';
import S36 from './components/slides/S36_M7Interview4';
import S37 from './components/slides/S37_Resources';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			{/* M0 · 开场 + 全课前测 */}
			<S01 />
			<S02 />
			<S03 />
			<S04 />
			<S05 />
			<S06 />
			{/* M1 · Token Budget */}
			<S07 />
			<S08 />
			<S09 />
			<S10 />
			{/* M2 · Context Governance */}
			<S11 />
			<S12 />
			<S13 />
			<S14 />
			{/* M3 · Prefill / Decode */}
			<S15 />
			<S16 />
			<S17 />
			<S18 />
			{/* M4 · KV Cache */}
			<S19 />
			<S20 />
			<S21 />
			{/* M5 · Prefix Cache */}
			<S22 />
			<S23 />
			<S24 />
			<S25 />
			<S26 />
			<S27 />
			{/* M6 · Response Cache + Memory */}
			<S28 />
			<S29 />
			<S30 />
			<S31 />
			{/* M7 · 汇总 + 英文面试练习（一题一页） */}
			<S32 />
			<S33 />
			<S34 />
			<S35 />
			<S36 />
			<S37 />
		</SlideEngine>
	);
}
