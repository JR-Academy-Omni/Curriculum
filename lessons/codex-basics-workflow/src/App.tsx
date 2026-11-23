import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';

// 每页一个组件，按章节注释分块（前缀 S/C/Z + 两位序号 + PascalCase）
import S01 from './components/slides/S01_Cover'; import S02 from './components/slides/S02_HowCodexWorks';
import S03 from './components/slides/S03_AgentsMd'; import S04 from './components/slides/S04_Skills';
import S05 from './components/slides/S05_Plugins'; import S06 from './components/slides/S06_ConfigChoices';
import S07 from './components/slides/S07_ModelPlan'; import S08 from './components/slides/S08_Permissions';
import S09 from './components/slides/S09_PreviewAnnotate'; import S10 from './components/slides/S10_MessageControls';
import S11 from './components/slides/S11_ForkParallel'; import S12 from './components/slides/S12_TerminalGitWorktree';
import S13 from './components/slides/S13_Tools'; import S14 from './components/slides/S14_Automations';
import S15 from './components/slides/S15_Remote'; import S16 from './components/slides/S16_Workflow';
import S17 from './components/slides/S17_References';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			{/* CH 0 · 开场 */}
			<S01 />
			<S02 /><S03 /><S04 /><S05 /><S06 /><S07 /><S08 /><S09 /><S10 /><S11 /><S12 /><S13 /><S14 /><S15 /><S16 /><S17 />
		</SlideEngine>
	);
}
