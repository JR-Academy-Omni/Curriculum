import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';
import P01_Cover from './components/slides/P01_Cover';
import S02_Watch from './components/slides/S02_Watch';
import S03_Path from './components/slides/S03_Path';
import S04_Playlists from './components/slides/S04_Playlists';
import S05_Audiences from './components/slides/S05_Audiences';
import S06_Compare from './components/slides/S06_Compare';
import S07_Capacity from './components/slides/S07_Capacity';
import S08_Command from './components/slides/S08_Command';
import S09_Observe from './components/slides/S09_Observe';
import S10_Exercise from './components/slides/S10_Exercise';
import S11_Incident from './components/slides/S11_Incident';
import S12_Review from './components/slides/S12_Review';
import S13_Materials from './components/slides/S13_Materials';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			<P01_Cover />
			<S02_Watch />
			<S03_Path />
			<S04_Playlists />
			<S05_Audiences />
			<S06_Compare />
			<S07_Capacity />
			<S08_Command />
			<S09_Observe />
			<S10_Exercise />
			<S11_Incident />
			<S12_Review />
			<S13_Materials />
		</SlideEngine>
	);
}
