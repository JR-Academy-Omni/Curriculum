import SlideEngine from './components/SlideEngine';

// ===== Vibe Coding 大师课 · 第七节课 =====
// Subagent —— 给 context 分家
// 课型：120 分钟动手工作坊（两次实验：一次正收益，一次红灯）
//
// 主干（内容 SoT：VIBE_CODING_MASTER_L7_BLUEPRINT.md v1.0 §11 逐页表）：
//   开场    P00–P02  L6 的病 → 问题在结构不在你交得不好
//   立论    P03–P06  子 Agent = 多一个独立的 context → Hub-and-spoke →
//                    收益/代价 → 两层门
//   开跑前  P07–P12  能力预检 → 选档 → 它由什么构成 → 六格 brief →
//                    实际怎么派 → 怎么落盘（唯一出现路径/命令的一页）
//   两次实验 P13–P16 动手 A（正收益）→ 汇总矩阵 →
//                    动手 B（红灯，真的跑）→ 你自己的判断线
//   底线    P17–P20  workspace 隔离 → 完成回执 → 独立验收 → 最小配置
//   收尾    P21      Exit + 作业 + 预告 L8
//
// ⚠️ 顺序铁律（蓝图 §8）：
//   两次实验必须相邻（中间只隔休息），对比的冲击力全靠紧邻；
//   判断线（P16）必须在两次实验之后 —— 先撞墙，再给尺子。
//
// Agent Team 已整体移到 L8（见 VIBE_CODING_MASTER_L8_BLUEPRINT.md）。
// 本节所有子 Agent 都只跟中心说话；学员追问协作，标准答复是「那是下节课的结构」。
//
// 数据纪律（蓝图 §16.3）：deck 上不出现模型名、价格、版本号、参数名或开关字面量 ——
// 只讲档位（最强 / 中间 / 最快）和判断线，具体当天口播，细节见蓝图 §18。

import L7P00 from './components/slides/L7P00_Cover';
import L7P01 from './components/slides/L7P01_TheL6Disease';
import L7P02 from './components/slides/L7P02_ItsTheStructure';
import L7P03 from './components/slides/L7P03_OneMoreContext';
import L7P04 from './components/slides/L7P04_HubAndSpoke';
import L7P05 from './components/slides/L7P05_NotAFreeLunch';
import L7P06 from './components/slides/L7P06_TwoGates';
import L7P07 from './components/slides/L7P07_CapabilityCheck';
import L7P08 from './components/slides/L7P08_ModelChoice';
import L7P09 from './components/slides/L7P09_Anatomy';
import L7P10 from './components/slides/L7P10_SixBoxBrief';
import L7P11 from './components/slides/L7P11_HowToSpawn';
import L7P12 from './components/slides/L7P12_HowToCreate';
import L7P13 from './components/slides/L7P13_LabA';
import L7P14 from './components/slides/L7P14_SummaryMatrix';
import L7P15 from './components/slides/L7P15_RedLightHandsOn';
import L7P16 from './components/slides/L7P16_YourOwnLine';
import L7P17 from './components/slides/L7P17_ContextVsWorkspace';
import L7P18 from './components/slides/L7P18_Receipt';
import L7P19 from './components/slides/L7P19_IndependentVerify';
import L7P20 from './components/slides/L7P20_MinimalConfig';
import L7P21 from './components/slides/L7P21_ExitAndNext';

export default function App() {
	return (
		<SlideEngine>
			{/* 开场：L6 的病 → 问题在结构 */}
			<L7P00 />
			<L7P01 />
			<L7P02 />

			{/* 立论：多一个独立的 context（P03 慢讲，讲不透后面全是零散技巧） */}
			<L7P03 />
			<L7P04 />
			<L7P05 />
			<L7P06 />

			{/* 开跑前：预检 → 选档 → 它由什么构成 → brief → 怎么派 */}
			<L7P07 />
			<L7P08 />
			<L7P09 />
			<L7P10 />
			<L7P11 />
			<L7P12 />

			{/* 两次实验 + 判断线（顺序不可调） */}
			<L7P13 />
			<L7P14 />
			<L7P15 />
			<L7P16 />

			{/* 底线：所有权 · 回执 · 验收 · 最小配置 */}
			<L7P17 />
			<L7P18 />
			<L7P19 />
			<L7P20 />

			{/* 收尾 */}
			<L7P21 />
		</SlideEngine>
	);
}
