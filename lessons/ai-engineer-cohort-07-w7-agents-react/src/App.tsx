import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';

// 第七期 W7 · Agents 基础 + The ReAct Framework（90 分钟，53 页：开场 + 八个部分）。讲师备注按 N 显示，内容见 data/notes.ts；demo 源码在 ../demo/，不部署

import S01_Cover from './components/slides/S01_Cover';
import S02_Agenda from './components/slides/S02_Agenda';
import S03_Footprint from './components/slides/S03_Footprint';
import S04_Review1 from './components/slides/S04_Review1';
import S05_Review2 from './components/slides/S05_Review2';
import C06_Part1 from './components/slides/C06_Part1';
import S07_WhoDecides from './components/slides/S07_WhoDecides';
import S08_Workflow from './components/slides/S08_Workflow';
import S09_ToolOnce from './components/slides/S09_ToolOnce';
import S10_Loop from './components/slides/S10_Loop';
import S11_Tradeoff from './components/slides/S11_Tradeoff';
import S12_Check1 from './components/slides/S12_Check1';
import C13_Part2 from './components/slides/C13_Part2';
import S14_Cycle from './components/slides/S14_Cycle';
import S15_Analogy from './components/slides/S15_Analogy';
import S16_Trace from './components/slides/S16_Trace';
import S18_LoopCode from './components/slides/S18_LoopCode';
import S19_Live3 from './components/slides/S19_Live3';
import S20_Check2 from './components/slides/S20_Check2';
import C21_Part3 from './components/slides/C21_Part3';
import S22_WhatSdkDoes from './components/slides/S22_WhatSdkDoes';
import S23_QueryClient from './components/slides/S23_QueryClient';
import S24_AllowedTools from './components/slides/S24_AllowedTools';
import S25_Live4 from './components/slides/S25_Live4';
import S25b_Architecture from './components/slides/S25b_Architecture';
import C27_Part4 from './components/slides/C27_Part4';
import S28_ThreeStates from './components/slides/S28_ThreeStates';
import C31_Part5 from './components/slides/C31_Part5';
import S32_Exits from './components/slides/S32_Exits';
import S33_MaxVsLoop from './components/slides/S33_MaxVsLoop';
import S34_Live6 from './components/slides/S34_Live6';
import C35_Part6 from './components/slides/C35_Part6';
import S36_FiveWords from './components/slides/S36_FiveWords';
import S37_ErrorTypes from './components/slides/S37_ErrorTypes';
import S38_RuleOfThumb from './components/slides/S38_RuleOfThumb';
import S39_Idempotency from './components/slides/S39_Idempotency';
import S40_Live7 from './components/slides/S40_Live7';
import S41_Check3 from './components/slides/S41_Check3';
import C42_Part7 from './components/slides/C42_Part7';
import S43_AuthFirst from './components/slides/S43_AuthFirst';
import S44_ThreeTools from './components/slides/S44_ThreeTools';
import S45_Structural from './components/slides/S45_Structural';
import S47_Live8 from './components/slides/S47_Live8';
import S48_Live9 from './components/slides/S48_Live9';
import S49_ApprovalVsHandoff from './components/slides/S49_ApprovalVsHandoff';
import S50_HandoffDesign from './components/slides/S50_HandoffDesign';
import S51_HandoffExample from './components/slides/S51_HandoffExample';
import C52_Part8 from './components/slides/C52_Part8';
import S52b_Patterns from './components/slides/S52b_Patterns';
import S53_Frameworks from './components/slides/S53_Frameworks';
import S54_Choose from './components/slides/S54_Choose';
import S55_Interview from './components/slides/S55_Interview';
import S56_Next from './components/slides/S56_Next';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			{/* CH 0 开场 */}
			<S01_Cover />
			<S02_Agenda />
			<S03_Footprint />
			<S04_Review1 />
			<S05_Review2 />
			{/* CH 1 谁决定下一步 */}
			<C06_Part1 />
			<S07_WhoDecides />
			<S08_Workflow />
			<S09_ToolOnce />
			<S10_Loop />
			<S11_Tradeoff />
			<S12_Check1 />
			{/* CH 2 ReAct */}
			<C13_Part2 />
			<S14_Cycle />
			<S15_Analogy />
			<S16_Trace />
			<S18_LoopCode />
			<S19_Live3 />
			<S20_Check2 />
			{/* CH 3 SDK */}
			<C21_Part3 />
			<S22_WhatSdkDoes />
			<S23_QueryClient />
			<S24_AllowedTools />
			<S25_Live4 />
			<S25b_Architecture />
			{/* CH 4 State */}
			<C27_Part4 />
			<S28_ThreeStates />
			{/* CH 5 停止条件 */}
			<C31_Part5 />
			<S32_Exits />
			<S33_MaxVsLoop />
			<S34_Live6 />
			{/* CH 6 失败 */}
			<C35_Part6 />
			<S36_FiveWords />
			<S37_ErrorTypes />
			<S38_RuleOfThumb />
			<S39_Idempotency />
			<S40_Live7 />
			<S41_Check3 />
			{/* CH 7 副作用与约束 */}
			<C42_Part7 />
			<S43_AuthFirst />
			<S44_ThreeTools />
			<S45_Structural />
			<S47_Live8 />
			<S48_Live9 />
			<S49_ApprovalVsHandoff />
			<S50_HandoffDesign />
			<S51_HandoffExample />
			{/* CH 8 选型 */}
			<C52_Part8 />
			<S52b_Patterns />
			<S53_Frameworks />
			<S54_Choose />
			<S55_Interview />
			<S56_Next />
		</SlideEngine>
	);
}
