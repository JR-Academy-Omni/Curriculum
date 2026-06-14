import SlideEngine from './components/SlideEngine';

// 开场
import S01 from './components/slides/S01_Cover';
import P01 from './components/slides/P01_Poll';
import A01 from './components/slides/A01_Agenda';
import A02 from './components/slides/A02_Setup';
import S01b from './components/slides/S01b_ForEverything';

// CH 0 · 为什么先讲 Source of Truth
import S02 from './components/slides/S02_Hook';
import S03 from './components/slides/S03_SourceOfTruth';
import S04 from './components/slides/S04_NoSoTChaos';
import S04b from './components/slides/S04b_TeamWork';
import S04c from './components/slides/S04c_SoTCase';
import S04c2 from './components/slides/S04c2_SoTCaseAnswer';
import S04d from './components/slides/S04d_SoTLadder';
import S04d2 from './components/slides/S04d2_SoTFirst';
import S04d3 from './components/slides/S04d3_ManagerLayer';
import S04e from './components/slides/S04e_FromSoT';

// CH 1 · AI OS / 记忆系统
import S05 from './components/slides/S05_AIOS';
import S05a from './components/slides/S05a_TwoLayers';
import S05b from './components/slides/S05b_FourC';
import S06 from './components/slides/S06_GoalContextMemory';
import S07 from './components/slides/S07_ContextVsMemory';

// CH 2 · 匠人的记忆系统（活教材）
import S08 from './components/slides/S08_JRMemoryMap';
import S09 from './components/slides/S09_ClaudeMd';
import S09b from './components/slides/S09b_RulesFirst';
import S09c from './components/slides/S09c_ClaudeMdTiers';
import S10 from './components/slides/S10_OptimizeClaudeMd';
import L01 from './components/slides/L01_FirstClaudeMd';
import S10b from './components/slides/S10b_ContextWindow';
import S10c from './components/slides/S10c_ContextRot';
import BR1 from './components/slides/BR1_Break';
import S11 from './components/slides/S11_AutoMemory';
import S11b from './components/slides/S11b_MemoryTaxonomy';
import L02 from './components/slides/L02_Memory';
import S12 from './components/slides/S12_TeamMemory';
import S12b from './components/slides/S12b_RepoStrategy';
import S13 from './components/slides/S13_MemoryPlanning';
import S13b from './components/slides/S13b_MemoryVsRAG';
import S14 from './components/slides/S14_GitVsNotion';
import S14b from './components/slides/S14b_DesignSystem';

// CH 4 · 第一个武器 Skills（提前到 Part 2 做动手）
import S19 from './components/slides/S19_NotAutocomplete';
import S20 from './components/slides/S20_ThreeWeapons';
import S21 from './components/slides/S21_Skills';
import S21b from './components/slides/S21b_ProgressiveDisclosure';
import L03 from './components/slides/L03_Skill';
import BR2 from './components/slides/BR2_Break';

// CH 3 · ADLC
import S15 from './components/slides/S15_ADLCCover';
import S16 from './components/slides/S16_ADLCStages';
import S16b from './components/slides/S16b_AgileVsADLC';
import S17 from './components/slides/S17_PRD';
import L04 from './components/slides/L04_PRD_ADLC';
import S18 from './components/slides/S18_Workflow';
import S18b from './components/slides/S18b_Worktree';
import S22 from './components/slides/S22_MCP';
import S23 from './components/slides/S23_Hooks';
import S23b from './components/slides/S23b_Schedule';
import L05 from './components/slides/L05_Subagent';

// CH 5 · 实战闭环
import S24 from './components/slides/S24_Pipeline';
import L06 from './components/slides/L06_Capstone';

// CH 6 · 心法 + 收尾
import S25 from './components/slides/S25_Principles';
import S26 from './components/slides/S26_NoHallucination';
import S27 from './components/slides/S27_ThreeSteps';
import S27b from './components/slides/S27b_Handbook';
import S28b from './components/slides/S28b_ForEveryone';
import S28 from './components/slides/S28_Closing';

export default function App() {
	return (
		<SlideEngine>
			{/* ===== PART 1 · 0:00–0:55 · 为什么 & 记忆系统基础 ===== */}
			<S01 />
			<P01 />{/* 🗳️ 全场第一个互动调查 · AI coding 的前提之问 */}
			<A01 />
			<A02 />
			<S01b />{/* 🌍 AI Coding for Everything（开场 thesis）*/}
			<S02 />
			<S03 />
			<S04 />
			<S04b />{/* 👥 团队视角 · IT 多人协作，SoT = 团队共享真相 */}
			<S04c />{/* 🧪 互动判断② 提问 · 云端 PRD vs 代码侧 PRD 算不算 SoT */}
			<S04c2 />{/* 🧪 互动判断② 揭晓 · 判据 = 谁说了算 + 会不会自动同步 */}
			<S04d />{/* 🪜 SoT 阶梯 · 个人PRD→企业SoT→文档群=企业AI OS（桥接到 S05）*/}
			<S04d3 />{/* 🤔 思考题 · 企业 AI OS 会不会变成 manager 层 */}
			<S04d2 />{/* ✋ 一句话结论 · 动手前先确定 SoT */}
			<S04e />{/* 🌳 从 PRD 出发 → 多产物树（meta：今天这套 deck 就是其一）*/}
			<S05 />
			<S05a />{/* 🧱 两层一系统 · 记忆层「记得」+ AI OS「做事」（参考 agentic OS）*/}
			<S05b />{/* AI OS 4 个 C 主框架 */}
			<S06 />
			<S07 />
			<S08 />
			<S09 />
			<S09c />{/* 📐 CLAUDE.md = 说明书+路线 · 多份分层 per component · 为什么高效 */}
			<S09b />{/* 🎯 第一要务·构建 rules（狭义/广义）+ 只写 LLM 基线之上的 delta */}
			<S10 />
			<L01 />{/* 🔨 动手① 写 CLAUDE.md */}
			<S10b />{/* 🧠 原理 · CLAUDE.md 在 context window 里的占比 + 每轮对话装配逻辑 */}
			<S10c />{/* 🧠 原理续 · context 越满越慢 + 准确率/召回变差 → 按需加载 */}
			<BR1 />{/* ☕ 休息 */}

			{/* ===== PART 2 · 1:05–1:55 · 记忆进阶 + Skills ===== */}
			<S11 />
			<S11b />{/* 记忆分类法 · 类型→落点 */}
			<L02 />{/* 🔨 动手② 建记忆 */}
			<S12 />
			<S12b />{/* repo 规划 · monorepo / submodule */}
			<S13 />
			<S13b />{/* ⚖️ Memory vs RAG · 常驻原则 vs 按需召回 */}
			<S14 />
			<S14b />{/* DESIGN.md · 视觉的 SoT */}
			<S19 />
			<S20 />
			<S21 />
			<S21b />{/* progressive disclosure */}
			<L03 />{/* 🔨 动手③ 写 skill */}
			<BR2 />{/* ☕ 休息 */}

			{/* ===== PART 3 · 2:05–2:45 · ADLC + 编排 ===== */}
			<S15 />
			<S16 />
			<S16b />{/* ⚖️ Agile vs ADLC · ADLC 是 Agile 的 AI 原生版 */}
			<S17 />
			<L04 />{/* 🔨 动手④ PRD + ADLC */}
			<S18 />
			<S18b />{/* 🌿 Worktree · 多个 Claude 并行隔离不打架 */}
			<S22 />
			<S23 />
			<S23b />{/* Claude Code schedule 能力 */}
			<L05 />{/* 🔨 动手⑤ subagent */}

			{/* ===== PART 4 · 2:45–3:00 · 实战闭环 + 收尾 ===== */}
			<S24 />
			<L06 />{/* 🔨 动手⑥ Capstone */}
			<S25 />
			<S26 />
			<S27 />
			<S27b />{/* 📖 课后配套手册 */}
			<S28b />{/* 🌟 AI Coding for Everyone（最后一句）*/}
			<S28 />
		</SlideEngine>
	);
}
