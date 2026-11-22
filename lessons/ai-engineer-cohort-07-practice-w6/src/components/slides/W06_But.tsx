import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Ink, Shift, INK, RED, GREY } from '../world/prims';
import { topS, EP1 } from '../world/layout';

// 第 7 页（画面「但是」）。局部坐标（camera (11520, 960, 0.85)）写好后平移；
// 三行整体上移 30，让第 3 行下面那行小字避开左下角小地图。
const { dx, dy } = EP1.but;
const U = -30;

function Render() {
	const { on } = useBeat();
	const k = 'but';
	return (
		<Shift dx={dx} dy={dy}>
			<T x={10560} y={580} h={150} weight={800} c={RED} show={on(k)} anim="pop">但是</T>
			<T x={11160} y={540} h={48} show={on(k)} delay={0.4}>这个类比有 3 处不成立</T>

			<T x={10600} y={800 + U} h={54} show={on(k, 1)}>1  pass / fail  →  一个分数</T>
			<T x={12000} y={800 + U} h={60} show={on(k, 1)} delay={0.5}>✓</T>
			<Ink d={`M 11990 ${770 + U - 30} L 12060 ${770 + U + 10}`} c={RED} w={7} show={on(k, 1)} delay={0.8} />
			<T x={12090} y={800 + U} h={60} show={on(k, 1)} delay={1}>94%</T>

			<T x={10600} y={1050 + U} h={54} show={on(k, 2)}>2  跑一次  →  跑很多次</T>
			{[0, 1, 2].map(i => <El key={i} x={12010 + i * 22} y={960 + U + i * 18} w={150} h={96} show={on(k, 2)} anim="drop" delay={0.4 + i * 0.15}
				style={{ background: '#fff', border: `5px solid ${INK}`, borderRadius: 12 }} />)}
			<T x={12230} y={1080 + U} h={54} show={on(k, 2)} delay={0.9}>×3</T>

			<T x={10600} y={1300 + U} h={54} show={on(k, 3)}>3  断言  →  grader</T>
			<T x={10660} y={1385 + U} h={42} c={GREY} show={on(k, 3)} delay={0.5}>代码检查 · LLM-as-judge · 人类专家</T>
		</Shift>
	);
}

export const W06: Chapter = {
	stops: [{
		key: 'but', chapter: '第 1 章 · 为什么要 eval', cam: { cx: 16900, cy: 3740, z: 0.85 }, builds: 3, van: { s: topS(17850) },
	}],
	area: { id: 'but', bbox: [15900, 3100, 17750, 4230], Render },
};
