import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, Ink, Ring, Shift } from '../world/prims';
import { topS, EP1 } from '../world/layout';

// 第 6 页：两栏对照表。局部坐标（camera (9050, 850, 0.95)）写好后平移。
const { dx, dy } = EP1.tests;

const ROWS: [string, string][] = [
	['unit test', '一步：一次 tool call'],
	['end-to-end', '整个任务'],
	['regression suite', '从真实失败里长出来'],
	['CI gate', '上线门槛 threshold'],
];

function Render() {
	const { on } = useBeat();
	const k = 'tests';
	return (
		<Shift dx={dx} dy={dy}>
			<Ink d="M 9100 400 L 9100 1250" w={6} show={on(k)} />
			<T x={8560} y={450} h={58} align="center" show={on(k)}>软件测试</T>
			<Ink d="M 8380 485 L 8740 485" w={6} show={on(k)} delay={0.4} />
			<T x={9640} y={450} h={58} align="center" show={on(k)} delay={0.2}>AI EVALS</T>
			<Ink d="M 9400 485 L 9880 485" w={6} show={on(k)} delay={0.6} />
			{ROWS.map(([l, r], i) => <div key={l}>
				<T x={8240} y={650 + i * 160} h={48} show={on(k, i + 1)}>{l}</T>
				<T x={9180} y={650 + i * 160} h={48} show={on(k, i + 1)} delay={0.35}>{r}</T>
			</div>)}
			<Ring cx={9640} cy={428} rx={300} ry={88} show={on(k, 5)} />
		</Shift>
	);
}

export const W05: Chapter = {
	stops: [{
		key: 'tests', chapter: '第 1 章 · 为什么要 eval', cam: { cx: 14300, cy: 3780, z: 0.95 }, builds: 5, van: { s: topS(15120) },
	}],
	area: { id: 'tests', bbox: [13450, 3250, 15350, 4230], Render },
};
