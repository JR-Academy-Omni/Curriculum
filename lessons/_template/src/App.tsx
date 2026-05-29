import SlideEngine from './components/SlideEngine';

// 每页一个组件，按章节注释分块（前缀 S/C/Z + 两位序号 + PascalCase）
import S01 from './components/slides/S01_Cover';
import S02 from './components/slides/S02_Example';

export default function App() {
	return (
		<SlideEngine>
			{/* CH 0 · 开场 */}
			<S01 />
			<S02 />
			{/* …在这里按放映顺序加更多 slide… */}
		</SlideEngine>
	);
}
