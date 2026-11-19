import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Retrenchment';
import S03 from './components/slides/S03_Paths';
import S04 from './components/slides/S04_Market';
import S05 from './components/slides/S05_Roles';
import S06 from './components/slides/S06_Engineer';
import S07 from './components/slides/S07_FdeSplit';
import S08 from './components/slides/S08_FdeBusiness';
import S09 from './components/slides/S09_FdeTech';
import S10 from './components/slides/S10_Product';
import SalesComparison from './components/slides/S11d_SalesComparison';
import S11 from './components/slides/S11_Sales';
import S12 from './components/slides/S12_Pay';
import S13 from './components/slides/S13_Compare';
import S14 from './components/slides/S14_Jd';
import S15 from './components/slides/S15_Next';
import S16 from './components/slides/S16_Sources';
import Cohort07AudienceGap from './components/slides/S03a_AudienceGap';
import Cohort07Convergence from './components/slides/S03a_Convergence';
import Cohort07Formula from './components/slides/S03a_Formula';
import Cohort07SkillCheck from './components/slides/S03e_SkillCheck';
import S06b from './components/slides/S06b_EngineerSalary';
import S08a from './components/slides/S08a_FdeBusinessCapability';
import S08b from './components/slides/S08b_FdeBusinessSalary';
import S09a from './components/slides/S09a_FdeTechCapability';
import PartnerLearning from './components/slides/S09c_PartnerLearning';
import ProductComparison from './components/slides/S10c_ProductComparison';
import S09b from './components/slides/S09b_FdeTechSalary';
import S10a from './components/slides/S10a_ProductCapability';
import S10b from './components/slides/S10b_ProductSalary';
import S11a from './components/slides/S11a_SalesCapability';
import PartnerSales from './components/slides/S11c_PartnerSales';
import S11b from './components/slides/S11b_SalesSalary';
import './styles/charts.css';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			<S01 /><S02 /><S03 /><S04 /><S05 /><S06 />
			<Cohort07AudienceGap /><Cohort07Convergence /><Cohort07Formula /><Cohort07SkillCheck />
			<S06b /><S07 /><S08 /><S08a /><S08b />
			<S09 /><S09a /><PartnerLearning /><S09b /><S10 /><ProductComparison /><S10a /><S10b /><SalesComparison /><S11 /><S11a /><PartnerSales /><S11b /><S12 /><S13 /><S14 /><S15 /><S16 />
		</SlideEngine>
	);
}
