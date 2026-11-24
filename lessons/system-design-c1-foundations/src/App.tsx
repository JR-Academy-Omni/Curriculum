import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';
import P01_Cover from './components/slides/P01_Cover';
import S02_Outcome from './components/slides/S02_Outcome';
import S03_Requirements from './components/slides/S03_Requirements';
import S04_Capacity from './components/slides/S04_Capacity';
import S05_Sync from './components/slides/S05_Sync';
import S06_Async from './components/slides/S06_Async';
import S07_States from './components/slides/S07_States';
import S08_Idempotency from './components/slides/S08_Idempotency';
import S09_Fault from './components/slides/S09_Fault';
import S10_Exercise from './components/slides/S10_Exercise';
import S11_Review from './components/slides/S11_Review';
import S12_Tradeoffs from './components/slides/S12_Tradeoffs';
import S13_Materials from './components/slides/S13_Materials';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			<P01_Cover />
			<S02_Outcome />
			<S03_Requirements />
			<S04_Capacity />
			<S05_Sync />
			<S06_Async />
			<S07_States />
			<S08_Idempotency />
			<S09_Fault />
			<S10_Exercise />
			<S11_Review />
			<S12_Tradeoffs />
			<S13_Materials />
		</SlideEngine>
	);
}
