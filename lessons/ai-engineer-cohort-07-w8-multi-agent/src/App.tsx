import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';

// 第七期 W8 · Multi-Agent Architectures · CCAR-F Alignment（90 分钟，47 页：开场 + 八个部分）。讲师备注按 N 显示，内容见 data/notes.ts；demo 源码在课程代码仓库的 w8/，不部署

import S01_Cover from './components/slides/S01_Cover';
import S02_Agenda from './components/slides/S02_Agenda';
import S03_FromW7 from './components/slides/S03_FromW7';
import S04_Scenario from './components/slides/S04_Scenario';
import C05_Part1 from './components/slides/C05_Part1';
import S06_Ladder from './components/slides/S06_Ladder';
import S07_StayDeterministic from './components/slides/S07_StayDeterministic';
import S08_Check1 from './components/slides/S08_Check1';
import C09_Part2 from './components/slides/C09_Part2';
import S10_FourReasons from './components/slides/S10_FourReasons';
import S11_BadReasons from './components/slides/S11_BadReasons';
import S12_Cost from './components/slides/S12_Cost';
import S13_Check2 from './components/slides/S13_Check2';
import C14_Part3 from './components/slides/C14_Part3';
import S15_Sequential from './components/slides/S15_Sequential';
import S16_FanOut from './components/slides/S16_FanOut';
import S17_Specialization from './components/slides/S17_Specialization';
import S18_Advisor from './components/slides/S18_Advisor';
import S19_DynamicWorkflow from './components/slides/S19_DynamicWorkflow';
import S20_PatternMap from './components/slides/S20_PatternMap';
import C21_Part4 from './components/slides/C21_Part4';
import S22_TwoSurfaces from './components/slides/S22_TwoSurfaces';
import S23_SdkSubagents from './components/slides/S23_SdkSubagents';
import S24_ManagedModel from './components/slides/S24_ManagedModel';
import S25_RosterCode from './components/slides/S25_RosterCode';
import S26_Live1 from './components/slides/S26_Live1';
import S27_RunMap from './components/slides/S27_RunMap';
import C28_Part5 from './components/slides/C28_Part5';
import S29_WhatIsolated from './components/slides/S29_WhatIsolated';
import S30_RosterTable from './components/slides/S30_RosterTable';
import S31_TwoLayers from './components/slides/S31_TwoLayers';
import S32_Check3 from './components/slides/S32_Check3';
import C33_Part6 from './components/slides/C33_Part6';
import S34_Contract from './components/slides/S34_Contract';
import S35_BadVsGood from './components/slides/S35_BadVsGood';
import S36_ArtifactRef from './components/slides/S36_ArtifactRef';
import S37_Synthesis from './components/slides/S37_Synthesis';
import C38_Part7 from './components/slides/C38_Part7';
import S39_FailureModes from './components/slides/S39_FailureModes';
import S40_Stops from './components/slides/S40_Stops';
import S41_HumanAudit from './components/slides/S41_HumanAudit';
import S42_Live2 from './components/slides/S42_Live2';
import S43_Eval from './components/slides/S43_Eval';
import S44_Verdict from './components/slides/S44_Verdict';
import C45_Part8 from './components/slides/C45_Part8';
import S46_Interview from './components/slides/S46_Interview';
import S47_Next from './components/slides/S47_Next';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			{/* 开场 */}
			<S01_Cover />
			<S02_Agenda />
			<S03_FromW7 />
			<S04_Scenario />
			{/* 1 要不要 Agent */}
			<C05_Part1 />
			<S06_Ladder />
			<S07_StayDeterministic />
			<S08_Check1 />
			{/* 2 一个还是多个 */}
			<C09_Part2 />
			<S10_FourReasons />
			<S11_BadReasons />
			<S12_Cost />
			<S13_Check2 />
			{/* 3 编排模式 */}
			<C14_Part3 />
			<S15_Sequential />
			<S16_FanOut />
			<S17_Specialization />
			<S18_Advisor />
			<S19_DynamicWorkflow />
			<S20_PatternMap />
			{/* 4 Agent SDK 与 Managed Agents */}
			<C21_Part4 />
			<S22_TwoSurfaces />
			<S23_SdkSubagents />
			<S24_ManagedModel />
			<S25_RosterCode />
			<S26_Live1 />
			<S27_RunMap />
			{/* 5 Context isolation */}
			<C28_Part5 />
			<S29_WhatIsolated />
			<S30_RosterTable />
			<S31_TwoLayers />
			<S32_Check3 />
			{/* 6 委派契约与汇总 */}
			<C33_Part6 />
			<S34_Contract />
			<S35_BadVsGood />
			<S36_ArtifactRef />
			<S37_Synthesis />
			{/* 7 上线以后 */}
			<C38_Part7 />
			<S39_FailureModes />
			<S40_Stops />
			<S41_HumanAudit />
			<S42_Live2 />
			<S43_Eval />
			<S44_Verdict />
			{/* 8 系统设计 */}
			<C45_Part8 />
			<S46_Interview />
			<S47_Next />
		</SlideEngine>
	);
}
