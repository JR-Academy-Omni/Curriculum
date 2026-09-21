import SlideEngine from './components/SlideEngine';

// 每页一个组件，按章节注释分块（前缀 S/C/Z + 两位序号 + PascalCase）
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_TimeTravelQuestion';
import S03 from './components/slides/S03_AuAiTimeline';
import S04 from './components/slides/S04_Stages1to2';
import S05 from './components/slides/S05_Stages3to4';
import S06 from './components/slides/S06_Stages5to6';
import S07 from './components/slides/S07_Stages7to8';
import S08 from './components/slides/S08_Stage9';
import S09 from './components/slides/S09_SkillTimeMachine';
import S09b from './components/slides/S09b_JobPosts';
import S10 from './components/slides/S10_JdAiEngineer';
import S11 from './components/slides/S11_JdFde';
import S12 from './components/slides/S12_JdMarketAndRoles';
import S12b from './components/slides/S12b_InterviewEval';
import S13 from './components/slides/S13_AuSalary';
import S14 from './components/slides/S14_GlobalSalary';
import S15 from './components/slides/S15_Curriculum';
import S16 from './components/slides/S16_CohortSchedule';
import S17 from './components/slides/S17_ArchitectureDiagram';

export default function App() {
	return (
		<SlideEngine>
			{/* CH 0 · 开场 */}
			<S01 />
			<S02 />
			{/* CH 1 · 澳洲 AI 变迁时间进程图：总览 → 九阶段细节 */}
			<S03 />
			<S04 />
			<S05 />
			<S06 />
			<S07 />
			<S08 />
			{/* CH 2 · 技能时光机：九阶段 × 技能表（可交互） */}
			<S09 />
			{/* CH 3 · 回到现在：在招岗位举例 → 澳洲 JD 在要什么（AI Engineer → FDE → 市场特点与区别） */}
			<S09b />
			<S10 />
			<S11 />
			<S12 />
			<S12b />
			{/* CH 4 · 薪资：澳洲 AI Engineer / FDE → 全球 AI Engineer */}
			<S13 />
			<S14 />
			{/* CH 5 · 课程大纲 */}
			<S15 />
			<S16 />
			<S17 />
			{/* …在这里按放映顺序加更多 slide… */}
		</SlideEngine>
	);
}
