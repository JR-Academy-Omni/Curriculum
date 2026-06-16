import SlideEngine from './components/SlideEngine';

// 开场
import S01 from './components/slides/S01_Cover';
import S01b from './components/slides/S01b_ForEverything';

// 第一块 · 什么是 Source of Truth（唯一真相源）
import S02 from './components/slides/S02_Hook';
import S03 from './components/slides/S03_SourceOfTruth';
import S04 from './components/slides/S04_NoSoTChaos';
import S04b from './components/slides/S04b_TeamWork';
import S04d2 from './components/slides/S04d2_SoTFirst';

// 第二块 · 怎么跟 AI 交流（把一件事说清楚）
import S19 from './components/slides/S19_NotAutocomplete';
import S06 from './components/slides/S06_GoalContextMemory';
import S07 from './components/slides/S07_ContextVsMemory';
import S10c from './components/slides/S10c_ContextRot';

// 第三块 · 怎么给 AI 做记忆（全景 + 分层）
import S05 from './components/slides/S05_AIOS';
import S08 from './components/slides/S08_JRMemoryMap';
import S09b from './components/slides/S09b_RulesFirst';
import S11 from './components/slides/S11_AutoMemory';
import S12 from './components/slides/S12_TeamMemory';

// 第四块 · 一条完整的演进线：从现在大家怎么用 AI → 逐步 → AI 记忆系统（借自 AI Marketing 课）
import M11 from './components/slides/M11_Step1Naive';
import M12 from './components/slides/M12_Step2Auto';
import M13 from './components/slides/M13_Step3Skills';
import M14 from './components/slides/M14_MasterVariant';
import M15 from './components/slides/M15_MasterTree';
import M16 from './components/slides/M16_Step4Loop';
import M04 from './components/slides/M04_EnterpriseMemory';
import M05 from './components/slides/M05_Ladder';
// — 一份真相怎么落地
import M01 from './components/slides/M01_WhatsInMaster';
import M17 from './components/slides/M17_DesignSoT';
import M18 from './components/slides/M18_RealExample';
// — 真实 workflow + 心法
import M02 from './components/slides/M02_OfflineWorkflow';
import M03 from './components/slides/M03_RoleAmplifier';

// 心法 + 收尾
import S25 from './components/slides/S25_Principles';
import S26 from './components/slides/S26_NoHallucination';
import S28b from './components/slides/S28b_ForEveryone';
import S28 from './components/slides/S28_Closing';

export default function App() {
	return (
		<SlideEngine>
			{/* ===== 开场 ===== */}
			<S01 />
			<S01b />{/* 🌍 AI Coding for Everyone — 非技术也能用 */}

			{/* ===== 第一块 · 什么是 Source of Truth ===== */}
			<S02 />{/* 🐟 金鱼痛点：AI 没记忆、没唯一真相 */}
			<S03 />{/* ⭐ SoT 定义：一件事只有一处权威出处 */}
			<S04 />{/* 有 SoT vs 没 SoT 的对比 */}
			<S04b />{/* 👥 团队视角：统一 SoT = 大家同质量 */}
			<S04d2 />{/* ✋ 一句话结论：动手前先确定 SoT */}

			{/* ===== 第二块 · 怎么跟 AI 交流 ===== */}
			<S19 />{/* Claude 不是自动补全，是会干活的 agent */}
			<S06 />{/* ⭐ Goal · Context · Memory — 让 AI 干活的三个核心词 */}
			<S07 />{/* Context ≠ Memory：工作记忆 vs 长期记忆 */}
			<S10c />{/* 🧠 对话越长越笨：80% 甜区，别把窗口塞满 */}

			{/* ===== 第三块 · 怎么给 AI 做记忆（全景 → 分层） ===== */}
			<S05 />{/* AI OS：模型是 CPU，你缺一套记忆 + 操作系统 */}
			<S08 />{/* 🗺 记忆系统四层全景：规则 / 自动记忆 / 团队记忆 / 知识库 RAG */}
			<S09b />{/* 第一层：规则 rules（CLAUDE.md 概念） */}
			<S11 />{/* 第二层：边干边记 auto-memory */}
			<S12 />{/* 第三层：从「我的记忆」到「团队共享记忆」 */}

			{/* ===== 第四块 · 一条演进线：从现在大家怎么用 AI → 逐步 → AI 记忆系统（借自 AI Marketing 课） ===== */}
			{/* 这 7 页是一条连续的递进，终点就是企业级 AI 记忆系统 */}
			<M11 />{/* 现在大家的用法：用 ChatGPT 手写一条（基线 ×1） */}
			<M12 />{/* 进一步：AI 帮你执行，你只做决策（自动化流程） */}
			<M13 />{/* 再进一步：从内容生产者升级为内容架构师（5 层栈） */}
			<M14 />{/* 1 份 Master 自动 fan-out 到 N 个平台 */}
			<M15 />{/* 同一份真相，长出枝叶（一棵树：文字/视频/视觉/SEO…） */}
			<M16 />{/* 会自我进化的系统 = AI-native 团队 */}
			<M04 />{/* 🏢 终点：企业级 AI 长期记忆系统（员工 / 公司 / 业务 三层 + AI 主动行动） */}
			<M05 />{/* 📈 回看这条线：用 AI ×1 → 搭 pipeline ×10 → 会设计 ×100 */}

			{/* ===== 第五块 · 一份真相怎么落地 + 真实案例 ===== */}
			<M01 />{/* 一份真相 = 7 样东西（明早回去就能写的清单） */}
			<M17 />{/* DESIGN.md = 你品牌的视觉真相 */}
			<M18 />{/* 我们每门课，就一份真相（真实 md 文件示例） */}
			<M02 />{/* 匠人线下活动 workflow：7 个 skill 接力 */}
			<M03 />{/* AI 是放大器：真相对了放大 100 倍，空了放大混乱 */}

			{/* ===== 心法 + 收尾 ===== */}
			<S25 />{/* 三条心法 */}
			<S26 />{/* 🚫 禁止幻觉：先验证再说 */}
			<S28b />{/* 🌟 AI Coding for Everyone */}
			<S28 />{/* 收尾 */}
		</SlideEngine>
	);
}
