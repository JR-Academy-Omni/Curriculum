import SlideEngine from './components/SlideEngine';
// Lesson 1 专属
import L01 from './components/lesson1/L01_Cover';
import L02 from './components/lesson1/L02_AgendaToday';
import L03 from './components/lesson1/L03_WelcomeAndCohort';
import L04 from './components/lesson1/L04_AiEraIs2026';
import L04b from './components/lesson1/L04b_MarketData';
import L04c from './components/lesson1/L04c_SdeOnlyPath';
import L04d from './components/lesson1/L04d_CodingIsDead';
import L05 from './components/lesson1/L05_AiEngineerEquation';
import L05b from './components/lesson1/L05b_WhyRenamedAiEngineer';
import L05c from './components/lesson1/L05c_SchoolToEnterpriseGap';
import OfferProof from './components/lesson1/L_OfferProof';
import L05d from './components/lesson1/L05d_AngularJsAnalogy';
import L06 from './components/lesson1/L06_LightmanStory';
import L07 from './components/lesson1/L07_JrAcademyTimeline';
import L08 from './components/lesson1/L08_TutorMatrix';
// L13_TenModuleOverview 已被 ModuleOverview (S06) 替代，保留文件未引用
import L14 from './components/lesson1/L14_Stage15Detail';
import L15 from './components/lesson1/L15_MultiChannel';
import L16 from './components/lesson1/L16_CareerMateIntro';
import L17 from './components/lesson1/L17_CareerMateBreakdown';
import L19 from './components/lesson1/L19_ScheduleAll';
import L22 from './components/lesson1/L22_CareerLevels';
import L23 from './components/lesson1/L23_TechStack';
import L24 from './components/lesson1/L24_LearningCulture';
import L26 from './components/lesson1/L26_ReferenceCheck';
import L29 from './components/lesson1/L29_QnA';
import L31 from './components/lesson1/L31_DemoHermes';
import L32 from './components/lesson1/L32_JobRoles';
import L33 from './components/lesson1/L33_DemoMultiAgent';
import AwsAiAgentArch from './components/lesson1/L_AwsAiAgentArch';
import L30 from './components/lesson1/L30_WelcomeClose';

// 公开课已有 slide · 直接复用 (避免重写)
import PainCold from './components/slides/S03_PainCold';
import CapabilityMap from './components/slides/S05_CapabilityMap';
import ModuleOverview from './components/slides/S06_ModuleOverview';
import AlumniProof from './components/slides/S20b_AlumniProof';
import WhoFor from './components/slides/S21_WhoFor';
import M1 from './components/slides/S07_M1_Launchpad';
import M2 from './components/slides/S08_M2_Agile';
import M3 from './components/slides/S09_M3_WebFundamentals';
import Stage1Deploy from './components/lesson1/L_Stage1WebDeploy';
import M4 from './components/slides/S10_M4_React';
import Stage2Deploy from './components/lesson1/L_Stage2ReactDeploy';
import M5 from './components/slides/S11_M5_Backend';
import M6 from './components/slides/S12_M6_FullStack';
import FullStackDelivery from './components/lesson1/L_FullStackDelivery';
import M7 from './components/slides/S13_M7_AiFoundations';
import M8 from './components/slides/S14_M8_RagAgentMcp';
import M9 from './components/slides/S15_M9_ProductionAI';
import M10 from './components/slides/S16_M10_Career';
import CareerMateCapstone from './components/slides/S17_CareerMateCapstone';
import P3CareerIncubator from './components/lesson1/L_P3CareerIncubator';
import P3Partners from './components/lesson1/L_P3Partners';
import MetatownChecklist from './components/lesson1/L_MetatownChecklist';
import Study1000Hours from './components/lesson1/L_Study1000Hours';

export default function Lesson1App() {
	return (
		<SlideEngine>
			{/* 开场 */}
			<L01 />
			<L02 />
			<L03 />
			<AlumniProof />
			{/* 行业背景 */}
			<L04 />
			<PainCold />
			<L04b />
			<L04c />
			<L04d />
			<CapabilityMap />
			<L05 />
			<L05b />
			<L05c />
			<OfferProof />
			<L05d />
			{/* 创始人故事 */}
			<L06 />
			<L07 />
			{/* 师资 */}
			<L08 />
			<WhoFor />
			{/* 课程结构总览 */}
			<ModuleOverview />
			<L14 />
			<L15 />
			{/* M1-M10 详解（复用公开课 deck） */}
			<M1 />
			<M2 />
			<M3 />
			<Stage1Deploy />
			<M4 />
			<Stage2Deploy />
			<M5 />
			<M6 />
			<FullStackDelivery />
			<M7 />
			<M8 />
			<M9 />
			<M10 />
			{/* 旗舰项目 */}
			<L16 />
			<L17 />
			<CareerMateCapstone />
			<P3CareerIncubator />
			<P3Partners />
			<MetatownChecklist />
			{/* 排课 + 求职出口 */}
			<L19 />
			<Study1000Hours />
			<L22 />
			<L23 />
			{/* 学习文化 + 第一周清单 */}
			<L24 />
			<L26 />
			<L29 />
			{/* 进阶视野：Harness/Agent 架构 + 毕业岗位映射 (复用 ai-engineer 课程内容) */}
			<L31 />
			<L32 />
			<L33 />
			<AwsAiAgentArch />
			<L30 />
		</SlideEngine>
	);
}
