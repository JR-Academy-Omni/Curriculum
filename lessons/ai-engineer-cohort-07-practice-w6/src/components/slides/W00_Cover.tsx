import type { Chapter } from '../world/beat';
import { T, Swipe, El, INK, BLUE, GREY } from '../world/prims';
import { COPYRIGHT } from '../world/World';
import { colors, fonts } from '../ui';

// 封面：路的起点。车还没上路（第 1 页）。标题与周次来自 outline.json C7P07。
const CX = 2600, CY = 3720;

function Render() {
	return <>
		<El x={CX} y={3060} shift="-50%" anim="fade" style={{ whiteSpace: 'nowrap' }}>
			<div style={{ padding: '14px 32px', borderRadius: 14, background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, letterSpacing: 5 }}>
				AI ENGINEER 第七期 · W6 实践课 · C7P07
			</div>
		</El>
		<T x={CX} y={3420} h={118} align="center" anim="fade">Build the Evaluation</T>
		<Swipe x0={CX - 640} x1={CX + 640} y={3610} h={118} />
		<T x={CX} y={3610} h={118} align="center" anim="fade">Pipeline First</T>
		<T x={CX} y={3800} h={58} align="center" c={BLUE} anim="fade">Evals &amp; Golden Datasets · 先有考试，再写 RAG</T>
		<T x={CX} y={3930} align="center" c={INK} print fs={44} weight={500}>120 分钟</T>
		{/* 版权声明（LICENSE.md）：不要删 */}
		<T x={CX} y={4060} align="center" c={GREY} print fs={24} weight={500}>{COPYRIGHT}</T>
	</>;
}

export const W00: Chapter = {
	stops: [{
		key: 'cover', chapter: '封面', cam: { cx: CX, cy: CY, z: 0.82 }, builds: 0, van: null, minimap: false,
	}],
	area: { id: 'cover', bbox: [1450, 2950, 3750, 4000], Render },
};
