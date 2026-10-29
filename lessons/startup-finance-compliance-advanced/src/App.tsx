import { useEffect } from 'react';
import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_CourseMap';
import S03 from './components/slides/S03_CompanyStructure';
import S04 from './components/slides/S04_StructureChoice';
import S05 from './components/slides/S05_Governance';
import S06 from './components/slides/S06_TaxBasics';
import S07 from './components/slides/S07_ComplianceRhythm';
import S08 from './components/slides/S08_GovernmentGrants';
import S09 from './components/slides/S09_GrantMap';
import S10 from './components/slides/S10_GrantScreening';
import S11 from './components/slides/S11_Rdti';
import S12 from './components/slides/S12_Emdg';
import S13 from './components/slides/S13_BusinessModel';
import S14 from './components/slides/S14_CustomerValue';
import S15 from './components/slides/S15_BusinessCanvas';
import S16 from './components/slides/S16_UnitEconomics';
import S17 from './components/slides/S17_ServiceScaling';
import S18 from './components/slides/S18_BusinessBoundaries';
import S19 from './components/slides/S19_Stakeholders';
import S20 from './components/slides/S20_ServiceContract';
import S21 from './components/slides/S21_PayrollCase';
import S22 from './components/slides/S22_RiskChecklist';
import S23 from './components/slides/S23_CompetitiveMoat';
import S24 from './components/slides/S24_MoatFormula';
import S25 from './components/slides/S25_MoatLadder';
import S26 from './components/slides/S26_GrowthFlywheel';
import S27 from './components/slides/S27_TwelveMonthPlan';
import S28 from './components/slides/S28_ThirtyDayPlan';
import S29 from './components/slides/S29_SummaryQa';
import S30 from './components/slides/S30_OfficialResources';

export default function App() {
	useEffect(() => { document.title = '创业财税与合规进阶课 · Seven'; }, []);
	return (
		<SlideEngine notes={notes}>
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
		</SlideEngine>
	);
}
