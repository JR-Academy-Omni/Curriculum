import SlideEngine from './components/SlideEngine';
import { notes } from './data/notes';
import P01_Cover from './components/slides/P01_Cover';
import S02_WhatIs from './components/slides/S02_WhatIs';
import S03_Method from './components/slides/S03_Method';
import S04_Requirements from './components/slides/S04_Requirements';
import S05_Capacity from './components/slides/S05_Capacity';
import S06_Numbers from './components/slides/S06_Numbers';
import S07_SingleBox from './components/slides/S07_SingleBox';
import S08_Storage from './components/slides/S08_Storage';
import S09_LoadBalancer from './components/slides/S09_LoadBalancer';
import S10_Cache from './components/slides/S10_Cache';
import S11_Queue from './components/slides/S11_Queue';
import S12_SyncAsync from './components/slides/S12_SyncAsync';
import S13_ComponentMap from './components/slides/S13_ComponentMap';
import S14_Failures from './components/slides/S14_Failures';
import S15_Idempotency from './components/slides/S15_Idempotency';
import S16_Outcome from './components/slides/S16_Outcome';
import S17_Exercise from './components/slides/S17_Exercise';
import S18_Next from './components/slides/S18_Next';

export default function App() {
	return (
		<SlideEngine notes={notes}>
			<P01_Cover />
			<S02_WhatIs />
			<S03_Method />
			<S04_Requirements />
			<S05_Capacity />
			<S06_Numbers />
			<S07_SingleBox />
			<S08_Storage />
			<S09_LoadBalancer />
			<S10_Cache />
			<S11_Queue />
			<S12_SyncAsync />
			<S13_ComponentMap />
			<S14_Failures />
			<S15_Idempotency />
			<S16_Outcome />
			<S17_Exercise />
			<S18_Next />
		</SlideEngine>
	);
}
