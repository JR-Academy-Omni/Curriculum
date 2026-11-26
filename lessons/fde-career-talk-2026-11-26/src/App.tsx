import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';

import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_ThreeQuestions';
import C03 from './components/slides/C03_LayoffNumbers';
import C04 from './components/slides/C04_AuCuts';
import C05 from './components/slides/C05_NotAllAI';
import C06 from './components/slides/C06_Timeline';
import C07 from './components/slides/C07_Shift';
import C07b from './components/slides/C07b_DyingJobs';
import C07g from './components/slides/C07g_Dying2027';
import C07c from './components/slides/C07c_NewStart';
import C07d from './components/slides/C07d_Kitchen';
import C07e from './components/slides/C07e_GradJobs';
import C07f from './components/slides/C07f_UniGap';
import S08 from './components/slides/S08_WhatIsFDE';
import S08b from './components/slides/S08b_NotFriendly';
import S08c from './components/slides/S08c_CLevel';
import S09 from './components/slides/S09_CaseFlow';
import S09b from './components/slides/S09b_VoiceAgents';
import S10 from './components/slides/S10_RoleMap';
import S11 from './components/slides/S11_RealJobs';
import S12 from './components/slides/S12_Overlap';
import S13 from './components/slides/S13_TwoKinds';
import S13b from './components/slides/S13b_FdeTech';
import S13c from './components/slides/S13c_FdeBusiness';
import S13d from './components/slides/S13d_Markets';
import S13e from './components/slides/S13e_BizTasks';
import S13f from './components/slides/S13f_TechTasks';
import S14 from './components/slides/S14_FourAbilities';
import S15 from './components/slides/S15_TwoEntrances';
import S15c from './components/slides/S15c_YourGap';
import S16 from './components/slides/S16_ThreeStarts';
import S17 from './components/slides/S17_Salary';
import S18 from './components/slides/S18_AskFirst';
import S19 from './components/slides/S19_Portfolio';
import S20 from './components/slides/S20_Paths';
import S21 from './components/slides/S21_Faculty';
import S21b from './components/slides/S21b_WhyUs';
import S22 from './components/slides/S22_QA';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			<S01 />
			<S02 />
			<C03 />
			<C04 />
			<C05 />
			<C06 />
			<C07 />
			<C07b />
			<C07g />
			<C07c />
			<C07d />
			<C07e />
			<C07f />
			<S08 />
			<S08b />
			<S08c />
			<S09 />
			<S09b />
			<S10 />
			<S11 />
			<S12 />
			<S13 />
			<S13d />
			<S17 />
			<S18 />
			<S14 />
			<S13c />
			<S13b />
			<S13e />
			<S13f />
			<S15 />
			<S15c />
			<S16 />
			<S19 />
			<S21b />
			<S20 />
			<S22 />
		</SlideEngine>
	);
}
