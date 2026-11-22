import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, Ring, Shift, RED, GREY } from '../world/prims';
import { topS, EP1 } from '../world/layout';

// 第 8 页：0.75 × 0.75 × 0.75 ≈ 42%（pass^3）。局部坐标（camera (10950, 3420)）写好后平移。
const { dx, dy } = EP1.trap;

function Render() {
	const { on } = useBeat();
	const k = 'trap';
	return (
		<Shift dx={dx} dy={dy}>
			<T x={10100} y={3060} h={80} weight={800} c={RED} show={on(k)}>陷阱</T>
			<T x={10100} y={3200} h={46} show={on(k)} delay={0.4}>75% 的时候答对 → 试一次看着没问题 ✓</T>
			<T x={10060} y={3520} h={96} show={on(k, 1)}>0.75</T>
			<T x={10370} y={3520} h={96} show={on(k, 2)}>× 0.75</T>
			<T x={10780} y={3520} h={96} show={on(k, 3)}>× 0.75</T>
			<T x={11200} y={3520} h={96} show={on(k, 4)}>≈ 42%</T>
			<Ring cx={11460} cy={3470} rx={160} ry={88} show={on(k, 4)} delay={0.6} />
			<T x={10160} y={3650} h={40} c={GREY} show={on(k, 5)}>pass^3：连续三次都答对</T>
			<T x={10950} y={3770} h={62} align="center" show={on(k, 5)} delay={0.4}>「能答对过吗？」 ≠ 「靠得住吗？」</T>
		</Shift>
	);
}

export const W07: Chapter = {
	stops: [{
		key: 'trap', chapter: '第 1 章 · 为什么要 eval', cam: { cx: 19300, cy: 3800, z: 0.95 }, builds: 5, van: { s: topS(20150) },
	}],
	area: { id: 'trap', bbox: [18380, 3300, 20200, 4230], Render },
};
