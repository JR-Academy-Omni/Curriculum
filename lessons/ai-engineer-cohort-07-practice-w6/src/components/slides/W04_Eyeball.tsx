import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Arrow, Ink, Shift, INK, GREY } from '../world/prims';
import { topS, EP1 } from '../world/layout';

// 第 5 页。局部坐标（camera (6400, 1700)）写好后平移。
// 最后一行从 y 2040 提到 1965：避开左下角小地图。
const { dx, dy } = EP1.eyeball;

function Render() {
	const { on } = useBeat();
	const k = 'eyeball';
	const brace = 'M 6790 1300 Q 6758 1300 6758 1340 L 6758 1468 Q 6758 1500 6730 1500 Q 6758 1500 6758 1532 L 6758 1660 Q 6758 1700 6790 1700';
	return (
		<Shift dx={dx} dy={dy}>
			<T x={5500} y={1320} h={54} show={on(k)}>肉眼看看就行？</T>
			<T x={5500} y={1430} h={44} c={GREY} show={on(k, 1)}>计算器：2 + 2 = 4，每次都一样</T>
			<El x={5520} y={1560} w={170} h={220} show={on(k, 2)} anim="drop"
				style={{ background: '#fff', border: `5px solid ${INK}`, borderRadius: 12 }}>
				{[0, 1, 2, 3].map(i => <div key={i} style={{ position: 'absolute', left: 26, top: 40 + i * 42, width: i === 3 ? 70 : 110, height: 12, borderRadius: 6, background: '#d6d8df' }} />)}
			</El>
			<Arrow from={[5710, 1630]} to={[5975, 1595]} show={on(k, 2)} w={7} head={26} delay={0.2} />
			<Arrow from={[5710, 1710]} to={[5975, 1790]} show={on(k, 2)} w={7} head={26} delay={0.2} />
			<T x={6000} y={1610} h={54} show={on(k, 2)} delay={0.5}>第 1 次：高风险</T>
			<T x={6000} y={1820} h={54} show={on(k, 2)} delay={0.5}>第 2 次：中风险</T>
			<Ink d={brace} show={on(k, 3)} w={7} />
			{['模型', 'prompt', '工具', '数据'].map((w, i) => <T key={w} x={6820} y={1360 + i * 110} h={50} show={on(k, 3)} delay={0.2 + i * 0.2}>{w}</T>)}
			<T x={6820} y={1790} h={40} c={GREY} show={on(k, 3)} delay={1}>……一直在变</T>
			<T x={5500} y={1965} h={46} show={on(k, 4)}>没有考试 → 用户先替你发现 bug</T>
		</Shift>
	);
}

export const W04: Chapter = {
	stops: [{
		key: 'eyeball', chapter: '第 1 章 · 为什么要 eval', cam: { cx: 11900, cy: 3760, z: 0.9 }, builds: 4, van: { s: topS(12750) },
	}],
	area: { id: 'eyeball', bbox: [10950, 3350, 12850, 4230], Render },
};
