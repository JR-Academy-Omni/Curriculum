import SlideEngine from './components/SlideEngine';
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_XhsHook';
import S03 from './components/slides/S03_PainCold';
import S04 from './components/slides/S04_PainWarm';
import S04b from './components/slides/S04b_Misconceptions';
import S05 from './components/slides/S05_MarketData';
import S05b from './components/slides/S05b_SdeOnlyPath';
import S05b2 from './components/slides/S05b2_EngineeringConvergence';
import S05c from './components/slides/S05c_AiCodingCore';
import S05d from './components/slides/S05d_FiveDimensions';
import S06 from './components/slides/S06_CapabilityMap';
import S07 from './components/slides/S07_PhaseOverview';
import S08 from './components/slides/S08_P1Foundation';
import S09 from './components/slides/S09_P2Context';
import S10 from './components/slides/S10_P3Rag';
import S11 from './components/slides/S11_P4Capability';
import S12 from './components/slides/S12_P5Agent';
import S13 from './components/slides/S13_P6MultiAgent';
import S14 from './components/slides/S14_P7Memory';
import S15 from './components/slides/S15_P8Harness';
import S16 from './components/slides/S16_P9Model';
import S17 from './components/slides/S17_P10Eval';
import S18 from './components/slides/S18_DemoMcp';
import S19 from './components/slides/S19_DemoRag';
import S20 from './components/slides/S20_DemoMultiAgent';
import S20b from './components/slides/S20b_DemoHermes';
import S21 from './components/slides/S21_HarnessHighlight';
import S22 from './components/slides/S22_Projects';
import S22b from './components/slides/S22b_JobRoles';
import S23 from './components/slides/S23_V4V5Diff';
import S24 from './components/slides/S24_Teachers';
// import S25 from './components/slides/S25_StudentWorks'; // 暂时下线，学员作品待补真实数据
import S26 from './components/slides/S26_P3Incubator';
import S27 from './components/slides/S27_Competitors';
import S28 from './components/slides/S28_WhoFor';
import S29 from './components/slides/S29_Faq';
import S30 from './components/slides/S30_PricingCta';
// import S31 from './components/slides/S31_FollowUs'; // 暂时下线

export default function App() {
	return (
		<SlideEngine>
			<S01 />
			<S02 />
			<S03 />
			<S04 />
			<S04b />
			<S05 />
			<S05b />
			<S05b2 />
			<S05c />
			<S05d />
			<S06 />
			<S07 />
			<S08 />
			<S09 />
			<S10 />
			<S11 />
			<S12 />
			<S13 />
			<S14 />
			<S15 />
			<S16 />
			<S17 />
			<S18 />
			<S19 />
			<S20 />
			<S20b />
			<S21 />
			<S22 />
			<S22b />
			<S23 />
			<S24 />
			<S26 />
			<S27 />
			<S28 />
			<S29 />
			<S30 />
		</SlideEngine>
	);
}
