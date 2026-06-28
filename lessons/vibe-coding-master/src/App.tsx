import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第一节课（公开试听） =====
// 核心：确定 SoT + 怎么带着确定 + 打造个人 AI OS 记忆系统（企业=联想）。
// PRD 正式教学 + 完整 ADLC 留下节课。讲稿见 LESSON_01_RUNSHEET.md。

// 开场 + 自我介绍 + 钩子
import S01 from './components/slides/S01_Cover';
import A00 from './components/slides/A00_L1Agenda';             // 今晚内容总览
import A03 from './components/slides/A03_SelfIntro';            // 学生自我介绍（提前）
import S01b from './components/slides/S01b_ForEverything';      // 🔴 全课主线 AI coding for everything
import S02 from './components/slides/S02_Hook';                 // 金鱼钩子
import S02b from './components/slides/S02b_Reality';            // 300 人真实数据
import S02c from './components/slides/S02c_Benchmark';          // SSO 一小时标尺
import S02d from './components/slides/S02d_Stakes';             // 不会的代价

// 课程安排：先解释开发流程为什么变了（SDLC→ADLC）→ 总览 → 4 Phase 详细 → 大纲是活的
import S00b from './components/slides/S00b_Roadmap';            // 8 周路线图总览
import S16c from './components/slides/S16c_SDLCFlow';           // 传统 SDLC 三栏流程图
import S16d from './components/slides/S16d_ADLCFlow';           // ADLC：Agent Development Lifecycle 闭环
import ARR1 from './components/slides/ARR1_Phase1';            // Phase 1 详细
import ARR2 from './components/slides/ARR2_Phase2';            // Phase 2 详细
import ARR3 from './components/slides/ARR3_Phase3';            // Phase 3 详细
import ARR4 from './components/slides/ARR4_Phase4';            // Phase 4：AI-native 企业记忆系统
import S00c from './components/slides/S00c_LivingSyllabus';     // 大纲随 Claude/Codex 迭代
import S00d from './components/slides/S00d_TenAgents';          // 毕业北极星：同时跑 10 个 agent

// SoT 核心概念
import S03 from './components/slides/S03_SourceOfTruth';
import S04 from './components/slides/S04_NoSoTChaos';
import S04c from './components/slides/S04c_SoTCase';
import S04c2 from './components/slides/S04c2_SoTCaseAnswer';
import S04d from './components/slides/S04d_SoTLadder';
import S04d2 from './components/slides/S04d2_SoTFirst';
import S04e from './components/slides/S04e_FromSoT';

// AI OS / 第二大脑 / 记忆系统（个人 → 公司）
import S05 from './components/slides/S05_AIOS';
import S05a from './components/slides/S05a_TwoLayers';
import S05b from './components/slides/S05b_FourC';
import S05c from './components/slides/S05c_MemorySystem';       // raw→结构化 数据流
import S05f from './components/slides/S05f_MdNotJson';          // LLM 擅长 md/yaml，不擅长 json
import S05d from './components/slides/S05d_MyAIOS';             // 真实例子：讲师个人 ai-os 文件树
import S05e from './components/slides/S05e_CompanyOS';          // 联想到企业：公司 AI OS 层级

// 动手 + 作业（PRD 正式教学 + ADLC 移到下节课）
import D01 from './components/slides/D01_SecondBrain';          // 现场 demo：简历→第二大脑→渲染
import H01 from './components/slides/H01_HandsOn';              // 学员动手：写你的 experiences
import HW01 from './components/slides/HW01_Homework';           // 作业：想清楚你要做什么 AI 产品
import Q01 from './components/slides/Q01_Check';                // 理解检查 MCQ

// 收尾
import S28b from './components/slides/S28b_ForEveryone';
import S28 from './components/slides/S28_Closing';

export default function App() {
	return (
		<SlideEngine>
			{/* ① 开场 + 自我介绍 + 钩子 */}
			<S01 />
			<A00 />{/* 今晚内容总览 */}
			<A03 />{/* 自我介绍（提前） */}
			<S01b />{/* 🔴 全课主线：AI coding for everything */}
			<S02 />
			<S02b />{/* 300 人数据 */}
			<S02c />{/* SSO 标尺 */}
			<S02d />{/* 不会的代价 */}

			{/* ② 为什么开发流程变了：传统 SDLC → ADLC */}
			<S16c />{/* 传统 SDLC：一支团队 */}
			<S16d />{/* ADLC：一个 Agent 端到端闭环 */}

			{/* ③ 课程安排：总览 → 4 Phase 详细 → 大纲是活的 */}
			<S00b />{/* 8 周总览 */}
			<ARR1 />
			<ARR2 />
			<ARR3 />
			<ARR4 />{/* Phase 4：AI-native 企业记忆系统 */}
			<S00c />{/* 大纲随 Claude/Codex 迭代 */}
			<S00d />{/* 毕业北极星：同时指挥 10 个 agent */}

			{/* ④ SoT 核心概念 */}
			<S03 />
			<S04 />
			<S04c />
			<S04c2 />
			<S04d />
			<S04d2 />
			<S04e />{/* 一份 SoT 长出多产物 */}

			{/* ⑤ AI OS / 记忆系统（个人 → 公司） */}
			<S05 />
			<S05a />
			<S05b />
			<S05c />
			<S05f />{/* LLM 擅长读 md/yaml，不擅长 json */}
			<S05d />{/* 真实例子：个人 ai-os 文件树 */}
			<S05e />{/* 联想到企业：公司 AI OS */}

			{/* ⑥ 现场 Demo + 学员动手 + 作业 */}
			<D01 />
			<H01 />
			<HW01 />{/* 作业：想清楚你要做什么 AI 产品 */}

			{/* ⑦ 理解检查 + 收尾钩子 */}
			<Q01 />
			<S28b />
			<S28 />
		</SlideEngine>
	);
}
