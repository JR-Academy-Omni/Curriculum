import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';

// 第七期 W4 · RAG Fundamentals（90 分钟，30 页：目录 + 八个部分，每部分前一张过渡页；环节见 data/sections.ts）
// 页面给学生看：一页一件事，几行「大白话 → 术语」；例子都用 CareKind 的虚构探视政策
import S01 from './components/slides/S01_Cover';
import S01b from './components/slides/S01b_Agenda';
import S02 from './components/slides/S02_Layers';
import S03 from './components/slides/S03_Match';
import C02 from './components/slides/C02_PositionCover';
import S04 from './components/slides/S04_Question';
import S05 from './components/slides/S05_ThreeWays';
import C03 from './components/slides/C03_OfflineCover';
import S07 from './components/slides/S07_Pipeline';
import S08 from './components/slides/S08_Chunk';
import S09 from './components/slides/S09_Version';
import C04 from './components/slides/C04_OnlineCover';
import S10 from './components/slides/S10_Online';
import S11 from './components/slides/S11_Permission';
import S12 from './components/slides/S12_NoResult';
import S13 from './components/slides/S13_Check1';
import C05 from './components/slides/C05_AnswerCover';
import S14 from './components/slides/S14_Assembly';
import S15 from './components/slides/S15_Citation';
import S16 from './components/slides/S16_States';
import S17 from './components/slides/S17_CareKind';
import C06 from './components/slides/C06_FallbackCover';
import S18 from './components/slides/S18_NoAnswer';
import S19 from './components/slides/S19_StaleConflict';
import C07 from './components/slides/C07_DebugCover';
import S20 from './components/slides/S20_Layers';
import S21 from './components/slides/S21_Check2';
import C08 from './components/slides/C08_NextMapCover';
import S22 from './components/slides/S22_NextMap';
import S23 from './components/slides/S23_End';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			{/* 开场 */}
			<S01 />
			<S01b />
			{/* 第 1 部分 · 开场 */}
			<S02 />
			<S03 />
			{/* 第 2 部分 · 定位 */}
			<C02 />
			<S04 />
			<S05 />
			{/* 第 3 部分 · 离线 */}
			<C03 />
			<S07 />
			<S08 />
			<S09 />
			{/* 第 4 部分 · 在线 */}
			<C04 />
			<S10 />
			<S11 />
			<S12 />
			<S13 />
			{/* 第 5 部分 · 组装作答 */}
			<C05 />
			<S14 />
			<S15 />
			<S16 />
			<S17 />
			{/* 第 6 部分 · 兜底 */}
			<C06 />
			<S18 />
			<S19 />
			{/* 第 7 部分 · 排错 */}
			<C07 />
			<S20 />
			<S21 />
			{/* 第 8 部分 · 后续地图 */}
			<C08 />
			<S22 />
			{/* 收尾 */}
			<S23 />
		</SlideEngine>
	);
}
