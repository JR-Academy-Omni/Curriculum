import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第八节课 =====
// Agent Team —— 从「多开 context」到「共同完成任务」
// 课型：120 分钟 **先讲后做** 工作坊
//
// 内容 SoT：VIBE_CODING_MASTER_L8_BLUEPRINT.md **v1.0（2026-08-09 从零重写）**
//           deck 严格按 §12.2 逐页表实现，20 页 P00–P19。
// 课堂仓库：star-mansions（必须锁 commit）
//
// ⚠️ 旧 deck 已整体作废并重建。旧版拍次（12 拍做/讲交替）、旧版双实验（浅题/深题）、
//    旧版角色编号全部不再有效 —— 见蓝图 §0「重写决定」。
//
// 两幕结构（§0）：
//   第一幕 · 先讲（0–50）   定义 → 判断 → 最小单位 → 必要设置 → 角色与任务 → 通信 → Lead 验收
//   过渡   （50–60）        老师 smoke test → 休息
//   第二幕 · 后做（60–113）  环境预检 → 建最小 Team → 验证 → 扩成标准组合 → 跑案例 → Lead 收口
//   结尾   （113–120）      组合选择 → Exit ticket → 作业
//
// 逐页（§12.2）：
//   P00 封面 · 今天必须亲手建 Team        P10 三类关键消息
//   P01 L7 → L8 两问分工                  P11 Lead 的四项责任
//   P02 Team 的价值发生在哪（立论）        P12 六个最容易错的地方
//   P03 两张拓扑                          P13 Smoke test 四个证明（老师演示）
//   P04 选择 Team 的三问                  P14 现在做：创建最小 Team
//   P05 六张任务卡（不给答案）             P15 Smoke test 验收卡
//   P06 必须设置 vs 可选设置               P16 扩成标准 Team + Charter
//   P07 最小可用单位 Lead + 2             P17 正式 Lab
//   P08 从 Lead+2 到 Lead+3 · 扩展顺序    P18 Conflict → Decision
//   P09 Team charter 五项                 P19 组合重构 + Exit + 作业
//
// ⚠️ Deck 性质铁律（§12.1，每一条都是硬约束）：
//   ① 每页只承担一个教学任务。
//   ② 完整配置 / charter / prompt / 消息模板放 HANDOUT，deck 只显示必要片段。
//   ③ 讲授页可以完整呈现结论 —— 本节明确先讲后做，不靠隐藏答案制造戏剧性。
//   ④ **实践页（P14–P18）只显示「现在做什么 / 完成判据 / 硬停时间」，不出现标准答案。**
//      答案只在 RUNSHEET 的老师兜底材料里。
//   ⑤ 禁止按时间自动出现答案；需要分步时用拆页，不用 delay 揭晓。
//   ⑥ 字号下限：主正文 26px / 代码与证据 22px / 辅助脚注 16px（见 deck.tsx 的 FS）。
//   ⑦ 不在一页同时放完整代码、解释表、prompt 和警告。
//
// 节奏铁律（§10.1）：
//   0–55 分钟不让学员创建 Team；60 分钟后不再插入新概念；
//   最小 Team 验证不过不进正式 Lab；不以「找到根因」替代「证明真实协作」；
//   时间不足先砍组合重构与讲评，不砍最小 Team、直接消息和 Lead 验收。
//
// 数据纪律（§20.2）：deck 不出现模型名、价格或并发上限；
//   feature flag 作为必要设置保留（不开就无法完成课堂目标）；
//   产品 UI 位置与快捷键写进 RUNSHEET 的「当天映射」。

import L8P00 from './components/slides/L8P00_Cover';
import L8P01 from './components/slides/L8P01_FromL7';
import L8P02 from './components/slides/L8P02_WhereValueHappens';
import L8P03 from './components/slides/L8P03_Topologies';
import L8P04 from './components/slides/L8P04_ThreeQuestions';
import L8P05 from './components/slides/L8P05_SixCards';
import L8P06 from './components/slides/L8P06_SetupMap';
import L8P07 from './components/slides/L8P07_MinimalUnit';
import L8P08 from './components/slides/L8P08_Ladder';
import L8P09 from './components/slides/L8P09_Charter';
import L8P10 from './components/slides/L8P10_Messages';
import L8P11 from './components/slides/L8P11_LeadDuties';
import L8P12 from './components/slides/L8P12_SixMistakes';
import L8P13 from './components/slides/L8P13_SmokeTestDemo';
import L8P14 from './components/slides/L8P14_BuildMinimalTeam';
import L8P15 from './components/slides/L8P15_SmokeTestCard';
import L8P16 from './components/slides/L8P16_AddVerifier';
import L8P17 from './components/slides/L8P17_Lab';
import L8P18 from './components/slides/L8P18_ConflictToDecision';
import L8P19 from './components/slides/L8P19_Recompose';

export default function App() {
	return (
		<SlideEngine>
			{/* ── 第一幕 · 先讲（0–50 min）────────────────────── */}

			{/* 开场与课程合同 0–5 */}
			<L8P00 />

			{/* L7 → L8：两种拓扑 5–15 */}
			<L8P01 />
			<L8P02 />
			<L8P03 />

			{/* 选择 Team 的三问 15–25 */}
			<L8P04 />
			<L8P05 />

			{/* 必须设置与最小单位 25–34 */}
			<L8P06 />
			<L8P07 />
			<L8P08 />

			{/* Charter、角色与共享任务 34–42 */}
			<L8P09 />

			{/* 消息协议、Lead 与失败模式 42–50 */}
			<L8P10 />
			<L8P11 />
			<L8P12 />

			{/* ── 过渡（50–60 min）：老师演示 → 休息 ──────────── */}
			<L8P13 />

			{/* ── 第二幕 · 后做（60–113 min）──────────────────── */}
			<L8P14 />
			<L8P15 />
			<L8P16 />
			<L8P17 />
			<L8P18 />

			{/* ── 结尾（113–120 min）─────────────────────────── */}
			<L8P19 />
		</SlideEngine>
	);
}
