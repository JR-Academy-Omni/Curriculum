import SlideEngine from './components/SlideEngine';

// W2 · 你的 AI 员工上岗 · Agents at Work
// 目标：把 W1 建好的「懂你的秘书」升级成有权限、有工作说明书、有排程的「替你干活的员工」。
// 内容真相源：ai-solo-founder-bootcamp/public/outline.json 的 W2 现场课六个 step；结构规矩见 HANDOVER_DECKS.md §4。

/* CH0 · 开场 */
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Takeaways';
import S02b from './components/slides/S02b_WeekOneRecap';
import S03 from './components/slides/S03_SecretaryVsEmployee';
import S04 from './components/slides/S04_TodayRundown';

/* CH1 · ① 四条 agent 路线选型 */
import S05 from './components/slides/S05_FourRoutes';
import S05b from './components/slides/S05b_ChooseByJob';
import S05c from './components/slides/S05c_OneMainline';

/* CH2 · ② 装上 + 接权限 */
import S06 from './components/slides/S06_InstallCheckpoints';
import S07 from './components/slides/S07_PermissionMatrix';
import S07b from './components/slides/S07b_AuditAndSensitive';
import S07c from './components/slides/S07c_DataRedLines';

/* CH3 · ③ 给 agent 写工作说明书 */
import S08 from './components/slides/S08_WhyAgentsFail';
import S09 from './components/slides/S09_AgentJDFive';
import S09b from './components/slides/S09b_JDExample';
import S10 from './components/slides/S10_JDvsSoT';
import S10b from './components/slides/S10b_WriteJDNow';

/* CH4 · Founder Exchange 中段 30 min + 首次组队 */
import S11 from './components/slides/S11_FounderExchange';
import S11b from './components/slides/S11b_TeamForming';
import S11c from './components/slides/S11c_TeamContract';

/* CH5 · ④⑤ Agent Schedule 工作坊 */
import S12 from './components/slides/S12_ScheduleAnatomy';
import S13 from './components/slides/S13_CaseCompetitor';
import S14 from './components/slides/S14_CaseSEO';
import S15 from './components/slides/S15_CaseFinance';
import S16 from './components/slides/S16_CaseReports';
import S17 from './components/slides/S17_CronCheatsheet';
import S18 from './components/slides/S18_PlatformTimers';
import S18b from './components/slides/S18b_PickYourTimer';

/* CH6 · ⑥ 验收 · 边界 · 本周作业 */
import S19 from './components/slides/S19_FiveFailures';
import S20 from './components/slides/S20_HumanBoundary';
import S21 from './components/slides/S21_OutputIsNotEvidence';
import S22 from './components/slides/S22_BackToSoT';
import S23 from './components/slides/S23_MomTest';
import S24 from './components/slides/S24_ThisWeek';
import S25 from './components/slides/S25_Checkout';

export default function App() {
	return (
		<SlideEngine>
			{/* CH0 · 开场 14:00–14:10 */}
			<S01 />
			<S02 />
			<S02b />
			<S03 />
			<S04 />

			{/* CH1 · ① 选型 14:10–14:30 */}
			<S05 />
			<S05b />
			<S05c />

			{/* CH2 · ② 装上 + 接权限 14:30–14:55 */}
			<S06 />
			<S07 />
			<S07b />
			<S07c />

			{/* CH3 · ③ 写 JD 14:55–15:20 */}
			<S08 />
			<S09 />
			<S09b />
			<S10 />
			<S10b />

			{/* CH4 · Founder Exchange 15:20–15:50 */}
			<S11 />
			<S11b />
			<S11c />

			{/* CH5 · ④⑤ Agent Schedule 16:00–16:50 */}
			<S12 />
			<S13 />
			<S14 />
			<S15 />
			<S16 />
			<S17 />
			<S18 />
			<S18b />

			{/* CH6 · ⑥ 验收 · 边界 · 作业 16:50–17:00 */}
			<S19 />
			<S20 />
			<S21 />
			<S22 />
			<S23 />
			<S24 />
			<S25 />
		</SlideEngine>
	);
}
