import SlideEngine from './components/SlideEngine';

// W3 · 这是不是一门好生意 —— Prove the Business
// 讲师：Stan Luo（Ex-McKinsey）· 2026-08-23（周日）14:00–17:00 · 180min / 32 页
//
// 内容来源（详见 PRD.md §5 与 README.md）：
//   主来源  ../../ai-solo-founder-bootcamp/public/outline.json → L09 六个 step（环节顺序与内容照做，未自创环节）
//   作业    同上 → L10 / L11
//   路线    ../../ai-solo-founder-bootcamp/COURSE_REDESIGN.md
//   SoT     ../../ai-solo-founder-bootcamp/W1_RUNSHEET.md §1.2（六个业务字段）
//   排期    ../../ai-solo-founder-bootcamp/cohort-01/STATE.md（本期 W3/W4 对调）
//   红线    ../../ai-solo-founder-bootcamp/HANDOVER_DECKS.md §2.3 / §4.1
//
// 🚨 数据纪律：deck 内不出现任何具体金额、转化率、市场规模或案例收入。
//    S10 的数字是现场除法的结果（算术，非承诺）；其余需要数字的地方一律留白，由学员现场填。

// CH0 · 开场（14:00–14:10）
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Takeaways';
import S03 from './components/slides/S03_Roadmap15Weeks';
import S04 from './components/slides/S04_TodayFrame';

// CH1 · 顾问怎么看一门生意（14:10–14:25 · outline step ①）
import S05 from './components/slides/S05_ConsultantView';
import S06 from './components/slides/S06_ThreeSelfDeceptions';
import S07 from './components/slides/S07_EvidenceLadder';

// CH2 · 变现路径全景 + 赚钱算式（14:25–14:50 · outline step ②）
import S08 from './components/slides/S08_MoneyPaths';
import S09 from './components/slides/S09_MoneyFormula';
import S10 from './components/slides/S10_ReverseMath';
import S11 from './components/slides/S11_TrafficCeiling';

// CH3 · 麦肯锡四把尺子（14:50–15:10 · outline step ③）
import S12 from './components/slides/S12_FourRulers';
import S13 from './components/slides/S13_RulerMarketSize';
import S14 from './components/slides/S14_RulerCompetition';
import S15 from './components/slides/S15_RulerUnitEcon';
import S16 from './components/slides/S16_RulerMoat';
import S17 from './components/slides/S17_Scorecard';

// 中场 · Founder Exchange 30min（15:10–15:40 · HANDOVER §4.1 固定环节）
import S18 from './components/slides/S18_FounderExchange';

// CH4 · 现场拆学员 idea · Stan 主刀（15:40–16:15 · outline step ④ LIVE）
import S19 from './components/slides/S19_TeardownRules';
import S20 from './components/slides/S20_AudienceScorecard';
import S21 from './components/slides/S21_WhenYouWantToPivot';

// CH5 · 形态决策 + 定价选型（16:15–16:35 · outline step ⑤）
import S22 from './components/slides/S22_FormFour';
import S23 from './components/slides/S23_PricingFive';
import S24 from './components/slides/S24_ThreeAxis';
import S25 from './components/slides/S25_PriceAnchor';
import S26 from './components/slides/S26_MismatchAlarm';

// CH6 · 现场写一页裁决书（16:35–16:55 · outline step ⑥）
import S27 from './components/slides/S27_OnePagerStructure';
import S28 from './components/slides/S28_WriteNow';
import S29 from './components/slides/S29_Verdict';

// CH7 · 收尾（16:55–17:00）
import S30 from './components/slides/S30_Homework';
import S31 from './components/slides/S31_NextWeek';
import S32 from './components/slides/S32_Closing';

export default function App() {
	return (
		<SlideEngine>
			<S01 />
			<S02 />
			<S03 />
			<S04 />
			<S05 />
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
			<S21 />
			<S22 />
			<S23 />
			<S24 />
			<S25 />
			<S26 />
			<S27 />
			<S28 />
			<S29 />
			<S30 />
			<S31 />
			<S32 />
		</SlideEngine>
	);
}
