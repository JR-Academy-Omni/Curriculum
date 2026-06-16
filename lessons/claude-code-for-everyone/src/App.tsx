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

// 第三块 · 怎么给 AI 做记忆
import S05 from './components/slides/S05_AIOS';
import S09b from './components/slides/S09b_RulesFirst';
import S11 from './components/slides/S11_AutoMemory';
import S12 from './components/slides/S12_TeamMemory';

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

			{/* ===== 第三块 · 怎么给 AI 做记忆 ===== */}
			<S05 />{/* AI OS：模型是 CPU，你缺一套记忆 + 操作系统 */}
			<S09b />{/* 第一层记忆：规则 rules（CLAUDE.md 概念） */}
			<S11 />{/* 第二层记忆：边干边记 auto-memory */}
			<S12 />{/* 第三层记忆：从「我的记忆」到「团队共享记忆」 */}

			{/* ===== 心法 + 收尾 ===== */}
			<S25 />{/* 三条心法 */}
			<S26 />{/* 🚫 禁止幻觉：先验证再说 */}
			<S28b />{/* 🌟 AI Coding for Everyone */}
			<S28 />{/* 收尾 */}
		</SlideEngine>
	);
}
