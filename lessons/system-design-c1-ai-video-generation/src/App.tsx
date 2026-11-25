import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';
import P01_Cover from './components/slides/P01_Cover';
import S01b_Recap from './components/slides/S01b_Recap';
import S02_Outcome from './components/slides/S02_Outcome';
import S03_Architecture from './components/slides/S03_Architecture';
import S04_Quality from './components/slides/S04_Quality';
import S05_Jobs from './components/slides/S05_Jobs';
import S05b_Reliability from './components/slides/S05b_Reliability';
import S06_VersionTree from './components/slides/S06_VersionTree';
import S07_Budget from './components/slides/S07_Budget';
import S08_Command from './components/slides/S08_Command';
import S09_Rework from './components/slides/S09_Rework';
import S10_Exercise from './components/slides/S10_Exercise';
import S11_Failure from './components/slides/S11_Failure';
import S12_Review from './components/slides/S12_Review';
import S13_Materials from './components/slides/S13_Materials';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			<P01_Cover />
			<S01b_Recap />
			<S02_Outcome />
			<S03_Architecture />
			<S04_Quality />
			<S05_Jobs />
			<S05b_Reliability />
			<S06_VersionTree />
			<S07_Budget />
			<S08_Command />
			<S09_Rework />
			<S10_Exercise />
			<S11_Failure />
			<S12_Review />
			<S13_Materials />
		</SlideEngine>
	);
}
