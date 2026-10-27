import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';

// 第七期 W5 · RAG Quality, Testing & Controlled Improvement（90 分钟，35 页：目录 + 七个部分，第 2–7 部分前一张过渡页；环节见 data/sections.ts）
// 页面给学生看：一页一件事；例子和数字全部来自老师 reference RAG 的真实运行
import S01 from './components/slides/S01_Cover';
import S01b from './components/slides/S01b_Agenda';
import S02 from './components/slides/S02_Footprint';
import S03 from './components/slides/S03_Q1';
import S04 from './components/slides/S04_Q2';
import S05 from './components/slides/S05_Q3';
import S06 from './components/slides/S06_Q4';
import S07 from './components/slides/S07_System';
import C02 from './components/slides/C02_FailureCover';
import S08 from './components/slides/S08_FourFailures';
import S09 from './components/slides/S09_G04';
import S10 from './components/slides/S10_G01';
import S11 from './components/slides/S11_Check1';
import C03 from './components/slides/C03_GoldenCover';
import S12 from './components/slides/S12_CaseAnatomy';
import S13 from './components/slides/S13_QuoteNotId';
import S14 from './components/slides/S14_Coverage';
import C04 from './components/slides/C04_ReportCover';
import S15 from './components/slides/S15_MetricMap';
import S16 from './components/slides/S16_G03';
import S17 from './components/slides/S17_ReadNumber';
import S18 from './components/slides/S18_JudgeWrong';
import S19 from './components/slides/S19_Check2';
import C05 from './components/slides/C05_ExperimentCover';
import S20 from './components/slides/S20_OneVariable';
import S21 from './components/slides/S21_ReadCompare';
import C06 from './components/slides/C06_KnobCover';
import S22 from './components/slides/S22_Filter';
import S23 from './components/slides/S23_Section';
import S24 from './components/slides/S24_Check3';
import S25 from './components/slides/S25_TopkRerank';
import S26 from './components/slides/S26_Remaining';
import C07 from './components/slides/C07_WrapCover';
import S27 from './components/slides/S27_NextMap';
import S28 from './components/slides/S28_End';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			{/* 开场 */}
			<S01 />
			<S01b />
			{/* 第 1 部分 · 开场：足迹地图 + 四道测试 + 今天的系统 */}
			<S02 />
			<S03 />
			<S04 />
			<S05 />
			<S06 />
			<S07 />
			{/* 第 2 部分 · 四类失败 */}
			<C02 />
			<S08 />
			<S09 />
			<S10 />
			<S11 />
			{/* 第 3 部分 · Golden case */}
			<C03 />
			<S12 />
			<S13 />
			<S14 />
			{/* 第 4 部分 · 读报告 */}
			<C04 />
			<S15 />
			<S16 />
			<S17 />
			<S18 />
			<S19 />
			{/* 第 5 部分 · 单变量实验 */}
			<C05 />
			<S20 />
			<S21 />
			{/* 第 6 部分 · 五个旋钮 */}
			<C06 />
			<S22 />
			<S23 />
			<S24 />
			<S25 />
			<S26 />
			{/* 第 7 部分 · 后续地图 + 收尾 */}
			<C07 />
			<S27 />
			<S28 />
		</SlideEngine>
	);
}
