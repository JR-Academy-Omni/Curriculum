import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';

// 第七期 W9 · L133 Agent Memory & State Management（90 分钟，44 页：开场 + 八个部分）。没有 code demo。讲师备注按 N 显示，内容见 data/notes.ts

import { S01_Cover, S02_Agenda, S03_Ladder } from './components/slides/P0_Opening';
import { C04_Part1, S05_FourThings, S06_TwoTraps, S07_Check1 } from './components/slides/P1_StateVsMemory';
import { C08_Part2, S10_TaskState, S10b_SessionState, S11_WorkingMemory, S11b_Compaction, S11c_FactsVsSummary, S12_SessionEnd } from './components/slides/P2_ShortTerm';
import { C14_Part3, S15_ThreeTypes, S16_Episode, S16b_Semantic, S19_Procedural, S20_Check3 } from './components/slides/P3_LongTermTypes';
import { C21_Part4, S22_WriteGate, S23_ReadPolicy, S24_Check4 } from './components/slides/P4_ReadWrite';
import { C25_Part5, S26_Scopes, S27_Leaks, S28_Check5 } from './components/slides/P5_Scope';
import { C29_Part6, S30_TtlRetention, S31_UpdateDelete, S32_Consent, S33_Check6 } from './components/slides/P6_Lifecycle';
import { C34_Part7, S35_Conflict, S36_Provenance, S37_Poisoning, S38_Check7 } from './components/slides/P7_Integrity';
import { C39_Part8, S40_Architecture, S41_Tools, S42_Interview, S43_RedFlags, S44_Next } from './components/slides/P8_Architecture';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			{/* 开场 */}
			<S01_Cover />
			<S02_Agenda />
			<S03_Ladder />
			{/* 1 State 与 Memory（10 分钟） */}
			<C04_Part1 />
			<S05_FourThings />
			<S06_TwoTraps />
			<S07_Check1 />
			{/* 2 Task state、Working memory、Session memory（15 分钟） */}
			<C08_Part2 />
			<S10_TaskState />
			<S10b_SessionState />
			<S11_WorkingMemory />
			<S11b_Compaction />
			<S11c_FactsVsSummary />
			<S12_SessionEnd />
			{/* 3 Episodic、Semantic、Preference（15 分钟） */}
			<C14_Part3 />
			<S15_ThreeTypes />
			<S16_Episode />
			<S16b_Semantic />
			<S19_Procedural />
			<S20_Check3 />
			{/* 4 读写策略（10 分钟） */}
			<C21_Part4 />
			<S22_WriteGate />
			<S23_ReadPolicy />
			<S24_Check4 />
			{/* 5 Scope 与权限（10 分钟） */}
			<C25_Part5 />
			<S26_Scopes />
			<S27_Leaks />
			<S28_Check5 />
			{/* 6 TTL、retention、更正、删除、consent（10 分钟） */}
			<C29_Part6 />
			<S30_TtlRetention />
			<S31_UpdateDelete />
			<S32_Consent />
			<S33_Check6 />
			{/* 7 冲突、过期、provenance、poisoning（10 分钟） */}
			<C34_Part7 />
			<S35_Conflict />
			<S36_Provenance />
			<S37_Poisoning />
			<S38_Check7 />
			{/* 8 Coding Agent Memory 架构与面试表达（10 分钟） */}
			<C39_Part8 />
			<S40_Architecture />
			<S41_Tools />
			<S42_Interview />
			<S43_RedFlags />
			<S44_Next />
		</SlideEngine>
	);
}
