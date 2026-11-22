import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, Swipe, Shift } from '../world/prims';
import { topS, EP1 } from '../world/layout';

// 第 10 页。局部坐标（camera (8550, 5900)）写好后平移。
const { dx, dy } = EP1.good;

const ROWS: [string, string][] = [
	['✓ 真实', '— 来自真实的预警'],
	['✓ 覆盖全', '— 日常 · 奇怪 · 应该拒绝的'],
	['✓ 标准清楚', '— 两个专家会给出同样的判断'],
	['✓ 有版本', '— 外加一份留出集'],
];

function Render() {
	const { on } = useBeat();
	const k = 'good';
	return (
		<Shift dx={dx} dy={dy}>
			<T x={7660} y={5490} h={54} show={on(k)}>好的 golden dataset 要做到：</T>
			{ROWS.map(([cap, rest], i) => (
				<T key={cap} x={7660} y={5640 + i * 135} h={52} show={on(k, i + 1)}>
					<span style={{ fontWeight: 800 }}>{cap}</span>
					<span style={{ fontSize: '0.846em', fontWeight: 600 }}> {rest}</span>
				</T>
			))}
			<Swipe x0={7660} x1={7915} y={6230} h={54} show={on(k, 5)} delay={0.6} />
			<T x={7660} y={6230} h={54} show={on(k, 5)}>20–50 个真实失败案例 = 很好的第一场考试</T>
		</Shift>
	);
}

export const W09: Chapter = {
	stops: [{
		key: 'good', chapter: '第 1 章 · 为什么要 eval', cam: { cx: 24600, cy: 3850, z: 1.0 }, builds: 5, van: { s: topS(25350) },
	}],
	area: { id: 'good', bbox: [23680, 3350, 25200, 4230], Render },
};
