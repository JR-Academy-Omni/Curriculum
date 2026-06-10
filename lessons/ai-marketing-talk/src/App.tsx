import SlideEngine from './components/SlideEngine';
import SectionCover from './components/SectionCover';
import { colors } from './components/ui';

// CH 0 · 开场（封面 + 双 Poll + 主线 + 承诺）
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Poll1Question';
import S03 from './components/slides/S03_Poll1Reveal';
import S04 from './components/slides/S04_Poll2Question';
import S05 from './components/slides/S05_Poll2Reveal';
import S06 from './components/slides/S06_Spine';
import S07 from './components/slides/S07_Promise';
import S07b from './components/slides/S07b_Landscape';
import S07c from './components/slides/S07c_Tools';

// CH 1 · 换脑：5 个范式转变
import S08 from './components/slides/S08_FiveShifts';
import S09 from './components/slides/S09_ShiftGEO';
import S10 from './components/slides/S10_ShiftAuthenticity';

// CH 2 · 演示落差：AI Marketing 成熟度 5 级阶梯
import S11 from './components/slides/S11_Step1Naive';
import S12 from './components/slides/S12_Workflow';
import S12b from './components/slides/S12b_Step2Templated';
import S13 from './components/slides/S13_Step3Skills';
import S13b from './components/slides/S13b_MasterVariant';
import S13c from './components/slides/S13c_MasterTree';
import S14 from './components/slides/S14_Step4Loop';
import S14b from './components/slides/S14b_XhsAudit';
import S15 from './components/slides/S15_Step5Memory';
import S16 from './components/slides/S16_LadderRecap';
import S16b from './components/slides/S16b_AdOPC';

// CH 3 · 核心：维护一份真相（Master / Source of Truth）
import S17 from './components/slides/S17_SoTThesis';
import S18 from './components/slides/S18_WhatsInMaster';
import S18b from './components/slides/S18b_KnowledgeWiki';
import S19b from './components/slides/S19b_DesignSystemSoT';
import S21b from './components/slides/S21b_MarketingToAI';
import S21c from './components/slides/S21c_OfflineEventWorkflow';
import S20 from './components/slides/S20_MasterRealExample';
import S21 from './components/slides/S21_RoleAmplifier';

// CH 4 · 升维：做得出 + 卖得动 = 一人公司
import S22 from './components/slides/S22_TwoLegs';
import S23 from './components/slides/S23_RedefineCoding';
import S24 from './components/slides/S24_Inevitable';
import S25 from './components/slides/S25_WhyEveryone';
import S26 from './components/slides/S26_OPC';

// CH 5 · 落地：你卡在哪一层 + 两门课 + 收尾
import S27 from './components/slides/S27_SelfCheck';
import S28 from './components/slides/S28_CourseCoding';
import S29 from './components/slides/S29_CourseOPC';
import S30 from './components/slides/S30_MetaClose';
import S31 from './components/slides/S31_End';
import S31b from './components/slides/S31b_AdOPC';
import S32 from './components/slides/S32_Metatree';

export default function App() {
	return (
		<SlideEngine>
			{/* CH 0 · 开场 */}
			<S01 />
			<S02 /><S03 />
			<S04 /><S05 />
			<S06 />
			<S07 />
			<S07b />
			<S07c />

			{/* CH 1 · 换脑 */}
			<SectionCover kicker="CHAPTER 1 · 换脑" title="新时代的 AI Marketing" titleAccent="新在哪" sub="5 个结构性转变 —— 不是「AI 帮你写文案」那种小事" bg={colors.rose} />
			<S08 /><S09 /><S10 />

			{/* CH 2 · 演示落差 · 5 级阶梯 */}
			<SectionCover kicker="CHAPTER 2 · 演示落差" title="同一句话，我跑给你看" titleAccent="5 个段位" sub="AI Marketing 不是「用 AI」，是搭一条会自己跑的 pipeline" bg={colors.dark} />
			<S11 /><S12 /><S12b /><S13 /><S13b /><S13c /><S14 /><S14b /><S15 /><S16 />
			{/* 广告位 · CH2 热度顶点插播 OPC（重点推广） */}
			<S16b />

			{/* CH 3 · 核心 · 维护一份真相 */}
			<S17 /><S18 /><S18b /><S19b /><S20 /><S21 />
			{/* 总结：page 8 全景 → 每步映射成 AI 角色 */}
			<S21b />
			{/* 真实例子：匠人线下活动 workflow */}
			<S21c />

			{/* CH 4 · 升维 */}
			<SectionCover kicker="CHAPTER 4 · 升维" title="营销只是一半" sub="做得出（coding）+ 卖得动（marketing）= 一人公司" bg={colors.rose} />
			<S22 /><S23 /><S24 /><S25 /><S26 />

			{/* CH 5 · 落地 */}
			<S27 /><S28 /><S29 /><S30 /><S31 />
			{/* 广告位 · Q&A 挂屏：OPC 大二维码 + AI Coding 小入口 */}
			<S31b />

			{/* 合作伙伴 · 收尾 */}
			<S32 />
		</SlideEngine>
	);
}
