import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';

// 第七期 W6 · Tool Calling, MCP & CLI Integration（90 分钟，41 页：目录 + 八个部分，第 2–8 部分前一张过渡页；环节见 data/sections.ts）
// 页面给学生看：一页一件事；全课只用一个类比（前台客服派工单给后台窗口），终端输出都来自本机实测（research/demo-runs.md）
import S01 from './components/slides/S01_Cover';
import S01b from './components/slides/S01b_Agenda';
import S02 from './components/slides/S02_Footprint';
import S03 from './components/slides/S03_Q1';
import S04 from './components/slides/S04_Q2';
import S05 from './components/slides/S05_Q3';
import C02 from './components/slides/C02_BasicsCover';
import S06 from './components/slides/S06_Why';
import S07 from './components/slides/S07_Terms1';
import S08 from './components/slides/S08_Terms2';
import S09 from './components/slides/S09_BigPicture';
import C03 from './components/slides/C03_CallingCover';
import S10 from './components/slides/S10_RoundTrip';
import S10b from './components/slides/S10b_Request';
import S11 from './components/slides/S11_Check1';
import S12 from './components/slides/S12_TypedParams';
import S12b from './components/slides/S12b_InternTest';
import S13 from './components/slides/S13_Result';
import S14 from './components/slides/S14_AuthZ';
import C04 from './components/slides/C04_McpCover';
import S15 from './components/slides/S15_WhyProtocol';
import S16 from './components/slides/S16_ThreeKinds';
import S17 from './components/slides/S17_Check2';
import S18 from './components/slides/S18_NotMCP';
import C05 from './components/slides/C05_FastmcpCover';
import S19 from './components/slides/S19_Server';
import S20 from './components/slides/S20_Schema';
import S21 from './components/slides/S21_ManualCall';
import C06 from './components/slides/C06_CliCover';
import S22 from './components/slides/S22_Config';
import S23 from './components/slides/S23_Lifecycle';
import S24 from './components/slides/S24_Stdout';
import S25 from './components/slides/S25_Env';
import S26 from './components/slides/S26_Check3';
import C07 from './components/slides/C07_SafetyCover';
import S27 from './components/slides/S27_Gates';
import S28 from './components/slides/S28_Simulated';
import C08 from './components/slides/C08_WrapCover';
import S29 from './components/slides/S29_Pi';
import S30 from './components/slides/S30_NextMap';
import S31 from './components/slides/S31_End';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			{/* 开场 */}
			<S01 />
			<S01b />
			{/* 第 1 部分 · 开场：足迹地图 + 三道 W5 复习 */}
			<S02 />
			<S03 />
			<S04 />
			<S05 />
			{/* 第 2 部分 · 先打基础 */}
			<C02 />
			<S06 />
			<S07 />
			<S08 />
			<S09 />
			{/* 第 3 部分 · Tool calling */}
			<C03 />
			<S10 />
			<S10b />
			<S11 />
			<S12 />
			<S12b />
			<S13 />
			<S14 />
			{/* 第 4 部分 · MCP */}
			<C04 />
			<S15 />
			<S16 />
			<S17 />
			<S18 />
			{/* 第 5 部分 · FastMCP */}
			<C05 />
			<S19 />
			<S20 />
			<S21 />
			{/* 第 6 部分 · 接进 CLI */}
			<C06 />
			<S22 />
			<S23 />
			<S24 />
			<S25 />
			<S26 />
			{/* 第 7 部分 · 安全与真实结果 */}
			<C07 />
			<S27 />
			<S28 />
			{/* 第 8 部分 · 边界与后续 + 收尾 */}
			<C08 />
			<S29 />
			<S30 />
			<S31 />
		</SlideEngine>
	);
}
