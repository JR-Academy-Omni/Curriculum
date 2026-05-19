import SlideEngine from './components/SlideEngine';

// Chapter 0 · Opening
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_ContrastData';
import S04 from './components/slides/S04_CategoryMap';
import S04b from './components/slides/S04b_TodaysMap';

// Chapter 1 · Disappearing Jobs (NEW)
import C01 from './components/slides/C01_DyingCover';
import C02 from './components/slides/C02_DyingMap';
import C02b from './components/slides/C02b_AffectedCategories';
import C03 from './components/slides/C03_DyingCases';
import C04 from './components/slides/C04_DyingPattern';
import C05 from './components/slides/C05_NotEqualUnemployed';

// Chapter 2 · Tech Jobs (incl Vibe Coder / Robotics / Synthetic Data merged from old MISSING)
import S05 from './components/slides/S05_TechCover';
import S06 from './components/slides/S06_AIEngineer';
import S06b from './components/slides/S06b_AIEngineerTransition';
import S07 from './components/slides/S07_FDE';
import S07b from './components/slides/S07b_FDETransition';
import S08 from './components/slides/S08_AIAgentDev';
import S08b from './components/slides/S08b_AIAgentDevTransition';
import S29 from './components/slides/S29_VibeCoder';
import S29b from './components/slides/S29b_VibeCoderTransition';
import S30 from './components/slides/S30_Robotics';
import S30b from './components/slides/S30b_RoboticsTransition';
import S31 from './components/slides/S31_SyntheticData';
import S31b from './components/slides/S31b_SyntheticDataTransition';
import S10 from './components/slides/S10_TechBrief';
import S11 from './components/slides/S11_TechSalaryChart';
import S12 from './components/slides/S12_TechPaths';
import S13 from './components/slides/S13_TechTransition';

// Chapter 3 · Governance Jobs (incl AI Adoption Specialist relocated from Tech)
import S14 from './components/slides/S14_GovCover';
import S09 from './components/slides/S09_AIAdoption';
import S09b from './components/slides/S09b_AIAdoptionTransition';
import S16 from './components/slides/S16_AIPM';
import S16b from './components/slides/S16b_AIPMTransition';
import S17 from './components/slides/S17_AIEthics';
import S17b from './components/slides/S17b_AIEthicsTransition';
import S18 from './components/slides/S18_GovBrief';
import S19 from './components/slides/S19_GovInsight';
import S20 from './components/slides/S20_GovTransition';

// Chapter 4 · Industry Vertical Jobs (Healthcare removed, AI Sales Eng merged from old MISSING)
import S21 from './components/slides/S21_IndustryCover';
import S22 from './components/slides/S22_GEO';
import S22b from './components/slides/S22b_GEOTransition';
import S24 from './components/slides/S24_FinanceCompliance';
import S24b from './components/slides/S24b_FinanceComplianceTransition';
import S32 from './components/slides/S32_AISalesEng';
import S32b from './components/slides/S32b_AISalesEngTransition';
import S25 from './components/slides/S25_IndustryBrief';
import S26 from './components/slides/S26_IndustryInsight';

// Chapter 5 · AI Adoption Case Study (NEW — Social Media automation 4-step + Enterprise Memory)
import Z01 from './components/slides/Z01_AdoptionCover';
import Z02 from './components/slides/Z02_Step1_KnownWay';
import Z03 from './components/slides/Z03_Step2_Templated';
import Z04 from './components/slides/Z04_Step3_AutoTopic';
import Z04b from './components/slides/Z04b_MasterVariantArch';
import Z05 from './components/slides/Z05_Step4_FullPipeline';
import Z05b from './components/slides/Z05b_EnterpriseMemory';
import Z06 from './components/slides/Z06_WhatIsAIAdoption';
import Z07 from './components/slides/Z07_YourPosition';

// Closing
import S35 from './components/slides/S35_SelfCheck';
import S35a from './components/slides/S35a_DiagnosticRoles';
import S36 from './components/slides/S36_ThreePaths';
import S37 from './components/slides/S37_JREntry';
import S38 from './components/slides/S38_Closing';

// Appendix · CAIO (moved here from CH 2 per request — niche role)
import S15 from './components/slides/S15_CAIO';
import S15b from './components/slides/S15b_CAIOTransition';

export default function App() {
	return (
		<SlideEngine>
			{/* CH 0 · Opening */}
			<S01 />
			<S02 />
			<S04 />
			<S04b />

			{/* CH 1 · Disappearing Jobs */}
			<C01 />
			<C02 />
			<C02b />
			<C03 />
			<C04 />
			<C05 />

			{/* CH 2 · Tech Jobs (6 deep + 9 brief = 15) */}
			<S05 />
			<S06 /><S06b />
			<S07 /><S07b />
			<S08 /><S08b />
			<S29 /><S29b />
			<S30 /><S30b />
			<S31 /><S31b />
			<S10 />
			<S11 />
			<S12 />
			<S13 />

			{/* CH 3 · Governance Jobs (3 deep + 2 brief + 1 appendix = 6) */}
			<S14 />
			<S09 /><S09b />
			<S16 /><S16b />
			<S17 /><S17b />
			<S18 />
			<S19 />
			<S20 />

			{/* CH 4 · Industry Vertical Jobs (3 deep + 2 brief = 5) */}
			<S21 />
			<S22 /><S22b />
			<S24 /><S24b />
			<S32 /><S32b />
			<S25 />
			<S26 />

			{/* CH 5 · AI Adoption Case Study */}
			<Z01 />
			<Z02 />
			<Z03 />
			<Z04 />
			<Z04b />
			<Z05 />
			<Z05b />
			<Z06 />
			<Z07 />

			{/* Closing */}
			<S35 />
			<S35a />
			<S36 />
			<S37 />
			<S38 />

			{/* Appendix · CAIO (moved to end — niche role) */}
			<S15 /><S15b />
		</SlideEngine>
	);
}
