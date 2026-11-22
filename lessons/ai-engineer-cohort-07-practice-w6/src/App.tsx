import SlideEngine from './components/SlideEngine';
import World from './components/world/World';
import { STOPS, AREAS } from './components/slides/registry';
import { notes } from './data/notes';

// 第七期 W6 实践课 · Build the Evaluation Pipeline First（C7P07）
// 一张大地图 + 一条环路：每页是地图上的一个镜头停点，翻页时镜头和车（= agent）开到下一个区域。
// 区域文件见 components/slides/，放映顺序见 registry.ts。
const builds = STOPS.map(s => s.builds);

export default function App() {
	return (
		<SlideEngine
			notes={notes}
			builds={builds}
			stage={(pos, mode) => <World slide={pos.slide} build={pos.build} mode={mode} stops={STOPS} areas={AREAS} />}
		/>
	);
}
