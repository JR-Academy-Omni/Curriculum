import SlideEngine from './components/SlideEngine';

// W4 · 把想法做出来 —— 用 AI 把一个想法做成能给人看的东西
// 今天的例子是 Beerops（一场真要办的活动），但主题是流程，不是办活动
// 内容来源：
//   本次课由 Lightman 重新定义（2026-08-15），未取自 outline.json 原 W4 description
//   方法论承接：W1 SoT（curriculum/ai-solo-founder-bootcamp/W1_RUNSHEET.md）
//   活动流程参照：jr-omni/orientation-festival/（新生节三城实际落地）
//   活动运营口径：jr-academy-memory/events/（24h 首触 / consent 三 touchpoint / 到场率）
// 🚨 Beerops 的活动细节（定位、日期、场地、规模）现场口述，deck 内不写死、不编造。

// CH0 · 开场（14:00–14:15）
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Takeaways';
import S03 from './components/slides/S03_Roadmap15Weeks';
import S04 from './components/slides/S04_TodayTarget';

// CH1 · 把事情拆成 AI 能干的活（14:15–14:50）
import S06 from './components/slides/S06_FiveStages';
import S06b from './components/slides/S06b_Timeline';
import S07 from './components/slides/S07_AIvsHuman';
import S07b from './components/slides/S07b_PlainWords';
import S08 from './components/slides/S08_EventSoT';
import S08b from './components/slides/S08b_HowToAsk';
import S08c from './components/slides/S08c_BeeropsCase';
import S09 from './components/slides/S09_CodexRun1_SoT';

// CH2 · 做品牌：规范 → logo → 吉祥物 → 周边（14:50–15:25）
import S10 from './components/slides/S10_WhyDSFirst';
import S11 from './components/slides/S11_DSChecklist';
import S12 from './components/slides/S12_CodexRun2_DS';
import S13 from './components/slides/S13_CodexRun3_Logo';
import S14 from './components/slides/S14_CodexRun4_Mascot';
import S14b from './components/slides/S14b_CodexRun5_Merch';
import S15 from './components/slides/S15_BrandCheck';

// 中场 · Founder Exchange 30min（15:20–15:50）
import S16 from './components/slides/S16_FounderExchange';

// CH3 · 一步一步带着做：介绍 → 招商 → 内容 → 网页（最后）
import S17 from './components/slides/S17_LandingHero';
import S18 from './components/slides/S18_BannedWords';
import S18b from './components/slides/S18b_CodexRun6_Intro';
import S18c from './components/slides/S18c_CodexRun7_Sponsor';
import S19 from './components/slides/S19_CodexRun5_Landing';
import S20 from './components/slides/S20_Deploy';
import S21 from './components/slides/S21_ConsistencyCheck';

// CH4 · 执行自动化（16:35–16:50）
import S22 from './components/slides/S22_ExecAutomation';

// CH5 · 收尾（16:50–17:00）
import S23 from './components/slides/S23_Homework';
import S24 from './components/slides/S24_NextWeek';
import S25 from './components/slides/S25_Closing';

export default function App() {
	return (
		<SlideEngine>
			<S01 />
			<S02 />
			<S03 />
			<S04 />
			<S06 />
			<S06b />
			<S07 />
			<S07b />
			<S08 />
			<S08b />
			<S08c />
			<S09 />
			<S10 />
			<S11 />
			<S12 />
			<S13 />
			<S14 />
			<S14b />
			<S15 />
			<S16 />
			<S18b />
			<S18c />
			<S17 />
			<S18 />
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
