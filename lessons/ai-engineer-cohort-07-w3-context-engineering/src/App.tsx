import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';

// 第七期 W3 · Context Engineering（90 分钟，精简版，环节见 data/parts.ts）
// 页面给学生看：一页一件事，几行「大白话 → 术语」；例子都来自「客服 agent 处理退款」
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Quiz1';
import S03 from './components/slides/S03_Quiz2';
import S04 from './components/slides/S04_Quiz3';
import S05 from './components/slides/S05_Quiz4';
import S06 from './components/slides/S06_Why';
import S07 from './components/slides/S07_Map';
import S08 from './components/slides/S08_Inventory';
import S09 from './components/slides/S09_Selection';
import S10 from './components/slides/S10_Freshness';
import S11 from './components/slides/S11_Fallback';
import S12 from './components/slides/S12_Assembly';
import S13 from './components/slides/S13_Compress';
import S14 from './components/slides/S14_Trust';
import S15 from './components/slides/S15_Observability';
import S16 from './components/slides/S16_Metrics';
import S17 from './components/slides/S17_Load';
import S18 from './components/slides/S18_Update';
import S19 from './components/slides/S19_Mechanisms';
import S20 from './components/slides/S20_Blueprint';
import S21 from './components/slides/S21_End';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			{/* 开场 */}
			<S01 />
			{/* 上节课复习测试 */}
			<S02 />
			<S03 />
			<S04 />
			<S05 />
			{/* 为什么要管上下文 */}
			<S06 />
			<S07 />
			{/* Source */}
			<S08 />
			{/* Policy */}
			<S09 />
			<S10 />
			<S11 />
			{/* Assembly */}
			<S12 />
			<S13 />
			{/* Trust Boundary */}
			<S14 />
			{/* Validation */}
			<S15 />
			<S16 />
			{/* Lifecycle 与五种机制 */}
			<S17 />
			<S18 />
			<S19 />
			{/* 总结 */}
			<S20 />
			<S21 />
		</SlideEngine>
	);
}
