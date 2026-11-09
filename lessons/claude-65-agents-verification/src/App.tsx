import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';

import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Result';
import S03 from './components/slides/S03_Voice';
import S04 from './components/slides/S04_Flowchart';
import S05 from './components/slides/S05_ClaudeMd';
import S06 from './components/slides/S06_Permission';
import S07 from './components/slides/S07_ReadFile';
import S08 from './components/slides/S08_ProgramCalc';
import S09 from './components/slides/S09_Pipeline';
import S10 from './components/slides/S10_Brief';
import S11 from './components/slides/S11_Format';
import S12 from './components/slides/S12_Recheck';
import S13 from './components/slides/S13_RuleUpgrade';
import S14 from './components/slides/S14_Fail1';
import S15 from './components/slides/S15_Fail2';
import S16 from './components/slides/S16_MoreFails';
import S17 from './components/slides/S17_Guardrails';
import S18 from './components/slides/S18_Daily';
import S19 from './components/slides/S19_Video';
import S20 from './components/slides/S20_PromptAnatomy';
import S21 from './components/slides/S21_Exercise';
import S22 from './components/slides/S22_Takeaways';
import S23 from './components/slides/S23_End';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			{/* CH 0 · 先看成品 */}
			<S01 />
			<S02 />
			{/* CH 1 · 先画图，再让 AI 动手 */}
			<S03 />
			<S04 />
			<S05 />
			{/* CH 2 · 让 AI 自己去拿数据 */}
			<S06 />
			<S07 />
			<S08 />
			{/* CH 3 · 一个人指挥 65 个 AI */}
			<S09 />
			<S10 />
			<S11 />
			<S12 />
			<S13 />
			{/* CH 4 · AI 会犯错，怎么管住它 */}
			<S14 />
			<S15 />
			<S16 />
			<S17 />
			{/* CH 5 · 让系统每天自己跑 */}
			<S18 />
			{/* CH 6 · 连宣传片也让 AI 做 */}
			<S19 />
			{/* CH 7 · 带走你的第一个 AI 系统 */}
			<S20 />
			<S21 />
			<S22 />
			<S23 />
		</SlideEngine>
	);
}
