import SlideEngine from './components/SlideEngine';

// 每页一个组件，按章节注释分块（前缀 S/C/Z + 两位序号 + PascalCase）
import S01 from './components/slides/S01_Cover';
import S01b from './components/slides/S01b_Agenda';
import S01c from './components/slides/S01c_Objectives';
import S02 from './components/slides/S02_Example';
import S03 from './components/slides/S03_ExitTicket';
import S04 from './components/slides/S04_ProjectAutopsy';
import S04b from './components/slides/S04b_WaterfallToIterations';
import C05 from './components/slides/C05_ExecutionStack';
import S05b from './components/slides/S05b_IterationAnatomy';
import S05c from './components/slides/S05c_AgileRoles';
import S05d from './components/slides/S05d_RolesToAgents';
import S05e from './components/slides/S05e_AgenticIteration';
import S06 from './components/slides/S06_KeepConstraints';
import S06b from './components/slides/S06b_CostOfChange';
import S07 from './components/slides/S07_InspectAdapt';
import S07b from './components/slides/S07b_MethodMap';
import S07c from './components/slides/S07c_DoDont';
import S07d from './components/slides/S07d_DecisionIndex';
import S08 from './components/slides/S08_AnchorCase';
import S09 from './components/slides/S09_MessyBacklog';
import S10 from './components/slides/S10_BusyVsValidated';
import C11 from './components/slides/C11_SetBoundaries';
import S12 from './components/slides/S12_OutputOutcome';
import S12b from './components/slides/S12b_BuildMeasureLearn';
import S13 from './components/slides/S13_Appetite';
import S14 from './components/slides/S14_FixedTime';
import S15 from './components/slides/S15_SevenDayResult';
import S16 from './components/slides/S16_ScopeHammer';
import C17 from './components/slides/C17_Backlog';
import S18 from './components/slides/S18_WorkHierarchy';
import S19 from './components/slides/S19_ReadyGate';
import S20 from './components/slides/S20_AIGuardrails';
import S21 from './components/slides/S21_HillChart';
import S21b from './components/slides/S21b_BankHillChart';
import S22 from './components/slides/S22_Premortem';
import S23 from './components/slides/S23_RiskFirst';
import S24 from './components/slides/S24_Break';
import C25 from './components/slides/C25_Priority';
import S25b from './components/slides/S25b_SupplyChainSwimlanes';
import S26 from './components/slides/S26_FourGates';
import S27 from './components/slides/S27_EisenhowerInbox';
import S28 from './components/slides/S28_RICE';
import S29 from './components/slides/S29_FourCosts';
import S30 from './components/slides/S30_PriorityAntipatterns';
import S31 from './components/slides/S31_PrioritizedBacklog';
import C32 from './components/slides/C32_Flow';
import S33 from './components/slides/S33_ThreeLevels';
import S33b from './components/slides/S33b_AgenticThreeIterations';
import S34 from './components/slides/S34_FiveCuts';
import S35 from './components/slides/S35_ReadyVsDone';
import S36 from './components/slides/S36_DoDFormula';
import S37 from './components/slides/S37_EvidenceLadder';
import S38 from './components/slides/S38_FiveItemPlan';
import S39 from './components/slides/S39_CapacityPacking';
import S40 from './components/slides/S40_WIP';
import S41 from './components/slides/S41_IfThen';
import S41b from './components/slides/S41b_MidSprintRecovery';
import S42 from './components/slides/S42_RecoveryProtocol';
import C43 from './components/slides/C43_AIPM';
import S44 from './components/slides/S44_HumanAIBoundary';
import S45 from './components/slides/S45_DailyPulse';
import S46 from './components/slides/S46_SundayReview';
import S47 from './components/slides/S47_PromptStack';
import C48 from './components/slides/C48_YourCase';
import S48b from './components/slides/S48b_CaseAssignments';
import S48c from './components/slides/S48c_WorkshopDeliverables';
import S49 from './components/slides/S49_ThirtyMinuteRunbook';
import S50 from './components/slides/S50_CasePrompt';
import S51 from './components/slides/S51_ReviewSchedule';
import S52 from './components/slides/S52_FinalChecklist';
import S52b from './components/slides/S52b_WorkshopRubric';
import S52c from './components/slides/S52c_ScoringScale';
import S53 from './components/slides/S53_Sources';

export default function App() {
	return (
		<SlideEngine>
			{/* 开场 · 议程与目标 */}
			<S01 />
			<S01b />
			<S01c />
			{/* PART 1 · Agile 基础 */}
			<S02 />
			<S03 />
			<S04 />
			<S04b />
			<C05 />
			<S05b />
			<S05c />
			<S05d />
			<S05e />
			{/* PART 1 · 为什么有效与方法选择 */}
			<S06 />
			<S06b />
			<S07 />
			<S07b />
			<S07c />
			<S07d />
			<S08 />
			<S09 />
			<S10 />
			{/* PART 2 · 目标与边界 */}
			<C11 />
			<S12 />
			<S12b />
			<S13 />
			<S14 />
			<S15 />
			<S16 />
			{/* PART 3 · CASE 1 · 银行核心系统上云 */}
			<C17 />
			<S18 />
			<S19 />
			<S20 />
			<S21 />
			<S21b />
			<S22 />
			<S23 />
			<S24 />
			{/* PART 3 · CASE 2 · 制造企业供应链部署 */}
			<C25 />
			<S25b />
			<S26 />
			<S27 />
			<S28 />
			<S29 />
			<S30 />
			<S31 />
			{/* PART 3 · CASE 3 · 微软产品组 Copilot 企业代理试点 */}
			<C32 />
			<S33 />
			<S33b />
			<S34 />
			<S35 />
			<S36 />
			<S37 />
			<S38 />
			<S39 />
			<S40 />
			<S41 />
			<S41b />
			<S42 />
			{/* PART 4 · 行业方法提炼 */}
			<C43 />
			<S44 />
			<S45 />
			<S46 />
			<S47 />
			{/* PART 5 · 最终案例工作坊 */}
			<C48 />
			<S48b />
			<S48c />
			<S49 />
			<S50 />
			<S51 />
			<S52 />
			<S52b />
			<S52c />
			<S53 />
		</SlideEngine>
	);
}
