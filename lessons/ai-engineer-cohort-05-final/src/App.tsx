import SlideEngine from './components/SlideEngine';
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Outcomes';
import S03 from './components/slides/S03_ColdStart';
import S04 from './components/slides/S04_BlankSystem';
import S05 from './components/slides/S05_SystemMap';
import S06 from './components/slides/S06_MissingLayers';
import S07 from './components/slides/S07_SystemChain';
import S08 from './components/slides/S08_RoleMap';
import S09 from './components/slides/S09_AppliedAI';
import S10 from './components/slides/S10_AgentEngineer';
import S11 from './components/slides/S11_FDE';
import S12 from './components/slides/S12_PlatformEval';
import S13 from './components/slides/S13_MLEngineer';
import S14 from './components/slides/S14_ProductThinking';
import S15 from './components/slides/S15_ProductQuestions';
import S16 from './components/slides/S16_Backgrounds';
import S17 from './components/slides/S17_Maturity';
import S18 from './components/slides/S18_Incident';
import S19 from './components/slides/S19_Diagnosis';
import S20 from './components/slides/S20_ClaudeCerts';
import S21 from './components/slides/S21_CohortFive';
import S22 from './components/slides/S22_CohortSeven';
import S23 from './components/slides/S23_UpgradePath';
import S24 from './components/slides/S24_Close';

export default function App() {
	return (
		<SlideEngine>
			{/* CH 0 · 开场 */}
			<S01 />
			<S02 />
			<S03 />
			{/* CH 1 · System Map */}
			<S04 />
			<S05 />
			<S06 />
			<S07 />
			{/* CH 2 · Roles */}
			<S08 />
			<S09 />
			<S10 />
			<S11 />
			<S12 />
			<S13 />
			{/* CH 3 · Product and growth */}
			<S14 />
			<S15 />
			<S16 />
			<S17 />
			{/* CH 4 · Incident */}
			<S18 />
			<S19 />
			{/* CH 5 · Next path */}
			<S20 />
			<S21 />
			<S22 />
			<S23 />
			<S24 />
		</SlideEngine>
	);
}
