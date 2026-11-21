import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';
import Slide1 from './components/slides/S01_Cover';
import Slide2 from './components/slides/S10_WhyDSFirst';
import Slide3 from './components/slides/S11_DSChecklist';
import Slide4 from './components/slides/S12_CodexRun2_DS';
import Slide5 from './components/slides/S05_OpenQuote';
import Slide6 from './components/slides/S06_Scope';
import Slide7 from './components/slides/S07_Calculate';
import Slide8 from './components/slides/S08_Terms';
import Slide9 from './components/slides/S09_Build';
import Slide10 from './components/slides/S10_Revision';
import Slide11 from './components/slides/S11_Export';
import Slide12 from './components/slides/S12_Practice';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			<Slide1 />
			<Slide2 />
			<Slide3 />
			<Slide4 />
			<Slide5 />
			<Slide6 />
			<Slide7 />
			<Slide8 />
			<Slide9 />
			<Slide10 />
			<Slide11 />
			<Slide12 />
		</SlideEngine>
	);
}
