import SlideEngine from './components/SlideEngine';

// W1 · 搭起你的创业 AI OS
// 目标：理解创业的基本循环，建立 Business SoT v0.1，并搭好后续 15 周共用的个人 AI OS。

import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Takeaways';
import S02c from './components/slides/S02c_BootcampPurpose';
import S02a from './components/slides/S02a_BusinessForms';
import S02b from './components/slides/S02b_Entrepreneurship';
import S03 from './components/slides/S03_StartupMistakes';
import S03a from './components/slides/S03a_WorthSolving';
import S03b from './components/slides/S03b_ProblemFirstCases';
import S03c from './components/slides/S03c_OpportunitySources';
import S03f from './components/slides/S03f_OpportunityScan';
import S03i from './components/slides/S03i_FilterKillSwitches';
import S03j from './components/slides/S03j_FilterWorkshop';
import S03k from './components/slides/S03k_EvidenceLadder';
import S04b from './components/slides/S04b_ProductValidationPath';
import S04d from './components/slides/S04d_ProductOnlyValidationPath';
import S16 from './components/slides/S16_SoTFields';
import S16b from './components/slides/S16b_OpportunityWriting';
import S16d from './components/slides/S16d_WriteCard';
import S12 from './components/slides/S12_CaseAccountingOps';
import S12b from './components/slides/S12b_CaseRenovationService';
import S09 from './components/slides/S09_WeeklySessionRhythm';
import S10b from './components/slides/S10b_WhySOT';
import S11 from './components/slides/S11_WhatIsSOT';
import S11b from './components/slides/S11b_SoTProjectControl';
import S11c from './components/slides/S11c_SoTWeeklyLoop';
import S11d from './components/slides/S11d_SoTQuiz';
import S11e from './components/slides/S11e_SoTQuizAnswers';
import S11f from './components/slides/S11f_SoTAnatomy';
import S19 from './components/slides/S19_MinimumAIOS';
import S19b from './components/slides/S19b_AIOSSchematic';
import S20 from './components/slides/S20_LoadSOT';
import S20b from './components/slides/S20b_ActivateW1Skill';
import S21 from './components/slides/S21_FirstRealTask';
import S21b from './components/slides/S21b_EvidenceStates';
import S21c from './components/slides/S21c_HumanBoundary';
import S22 from './components/slides/S22_NextWeek';
import S23 from './components/slides/S23_Closing';
import S04 from './components/slides/S04_Roadmap15Weeks';
import S04e from './components/slides/S04e_GTMFounderClub';
import S04f from './components/slides/S04f_FounderClubFunding';
import S04g from './components/slides/S04g_FounderClubTracks';
import S04h from './components/slides/S04h_FounderClubAftercare';
import S05 from './components/slides/S05_PhaseOutputs';
import S04c from './components/slides/S04c_WeeklyFounderSkills';
import S06 from './components/slides/S06_TimeInvestment';

export default function App() {
	return (
		<SlideEngine>
			<S01 />
			<S02 />
			<S02c />
			{/* 课程全景先讲：学生先知道 15 周怎么走，再进入 W1 */}
			<S04 />
			<S04e />
			<S04f />
			<S04g />
			<S04h />
			<S05 />
			<S04c />
			<S06 />
			<S02a />
			<S02b />
			<S03 />
			<S03a />
			<S03b />
			<S03c />
			<S03f />
			<S03k />
			<S03i />
			<S03j />
			<S04b />
			<S04d />
			<S16 />
			<S16b />
			<S12 />
			<S12b />
			<S16d />
			<S09 />
			<S10b />
			<S11 />
			<S11b />
			<S11f />
			<S11c />
			<S11d />
			<S11e />
			<S19 />
			<S19b />
			<S20 />
			<S20b />
			<S21 />
			<S21c />
			<S21b />
			<S22 />
			<S23 />
		</SlideEngine>
	);
}
