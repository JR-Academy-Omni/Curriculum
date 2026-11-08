import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';

import P01Cover from './components/slides/P01_Cover';
import S01Cover from './components/slides/S01_Cover';
import S02Ceiling from './components/slides/S02_Ceiling';
import S03RealVsFake from './components/slides/S03_RealVsFake';
import P02OneLine from './components/slides/P02_OneLine';
import P03WhyGitHub from './components/slides/P03_WhyGitHub';
import S03bHub from './components/slides/S03b_Hub';
import S03cJRCases from './components/slides/S03c_JRCases';
import S03dTriggers from './components/slides/S03d_Triggers';
import S03eIssuePR from './components/slides/S03e_IssuePR';
import P05Memory from './components/slides/P05_Memory';
import P06Research from './components/slides/P06_Research';
import P06bTopicSoT from './components/slides/P06b_TopicSoT';
import P06cFanOut from './components/slides/P06c_FanOut';
import P06dWorkflow from './components/slides/P06d_Workflow';
import P07Write from './components/slides/P07_Write';
import P08Eval from './components/slides/P08_Eval';
import P09Learnings from './components/slides/P09_Learnings';
import P10Publish from './components/slides/P10_Publish';
import P11Daily from './components/slides/P11_Daily';
import S04Map from './components/slides/S04_Map';
import S05SingleStep from './components/slides/S05_SingleStep';
import S06Chain from './components/slides/S06_Chain';
import S07Contract from './components/slides/S07_Contract';
import S08Event from './components/slides/S08_Event';
import S09Watch from './components/slides/S09_Watch';
import S10Batch from './components/slides/S10_Batch';
import S11Feedback from './components/slides/S11_Feedback';
import S12Approval from './components/slides/S12_Approval';
import S13ThreeWays from './components/slides/S13_ThreeWays';
import S14WayA from './components/slides/S14_WayA';
import S15WayB from './components/slides/S15_WayB';
import S16Demo from './components/slides/S16_Demo';
import S17Failures from './components/slides/S17_Failures';
import S18Rule from './components/slides/S18_Rule';
import S19Rerun from './components/slides/S19_Rerun';
import S20Practice from './components/slides/S20_Practice';
import S21PracticeCheck from './components/slides/S21_PracticeCheck';
import S22TaskBook from './components/slides/S22_TaskBook';
import S23Closing from './components/slides/S23_Closing';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			{/* 开场 */}
			<P01Cover />
			<S01Cover />
			<S02Ceiling />
			<S03RealVsFake />
			<P02OneLine />
			{/* 主线 · 为什么是 GitHub */}
			<P03WhyGitHub />
			<S03bHub />
			<S03cJRCases />
			<S03dTriggers />
			<S03eIssuePR />
			{/* 主线 · 四步 */}
			<P05Memory />
			<P06Research />
			<P06bTopicSoT />
			<P06cFanOut />
			<P06dWorkflow />
			<P07Write />
			<P08Eval />
			<P09Learnings />
			<P10Publish />
			<P11Daily />
			{/* 扩展 · 同一套方法的六种形态 */}
			<S04Map />
			<S05SingleStep />
			<S06Chain />
			<S07Contract />
			<S08Event />
			<S09Watch />
			<S10Batch />
			<S11Feedback />
			<S12Approval />
			{/* 怎么实现 */}
			<S13ThreeWays />
			<S14WayA />
			<S15WayB />
			<S16Demo />
			{/* 不翻车 */}
			<S17Failures />
			<S18Rule />
			<S19Rerun />
			{/* 练习 30 分钟 */}
			<S20Practice />
			<S21PracticeCheck />
			{/* 收口 */}
			<S22TaskBook />
			<S23Closing />
		</SlideEngine>
	);
}
