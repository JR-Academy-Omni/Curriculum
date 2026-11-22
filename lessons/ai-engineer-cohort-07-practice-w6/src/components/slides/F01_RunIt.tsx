import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Ink, Ring, Swipe, Shift, INK, RED, GREY } from '../world/prims';
import { bottomS, EP1 } from '../world/layout';

// 第 50 页：新旧模型的打分卡。局部坐标（camera (3050, 5850)）写好后平移到下边的路上方。
// 镜头放宽到 z 0.6，让左下角小地图不压字；第 2 步（安全那一行）推近，第 3 步拉回。
// 车停在红灯前（路的内侧，车往左开）。
const { dx, dy } = EP1.runit;

const ROWS = ['质量', '可靠性 (pass^3)', '成本 / 每条预警', '速度 (p95)', '安全 *'];
const YS = [5530, 5680, 5830, 5980, 6130];
// 行号 → [旧模型, 新模型]
const VALUES: [string, string][] = [['94%', '94%'], ['89%', '88%'], ['5¢', '3¢'], ['8 s', '4 s'], ['1%', '10%']];

function Light({ red }: { red: boolean }) {
	// 小红绿灯：立在下边路的内侧（局部坐标里路面上沿 y 6520）
	const x = 2870, y = 6200;
	return <>
		<Ink d={`M ${x + 30} ${y + 160} L ${x + 30} 6522`} w={10} />
		<El x={x} y={y} w={60} h={160} style={{ background: INK, borderRadius: 12 }}>
			{['#e8453c', '#f2b233', '#2fa05a'].map((c, i) => (
				<div key={c} style={{ position: 'absolute', left: 12, top: 12 + i * 48, width: 36, height: 36, borderRadius: 18, background: i === 0 && red ? c : '#3a3f52', boxShadow: i === 0 && red ? `0 0 26px 8px ${c}` : undefined }} />
			))}
		</El>
	</>;
}

function Render() {
	const { on } = useBeat();
	const k = 'runit';
	// 每行两列一起出现；第 1 步依次：成本、速度、质量 + 可靠性
	const rowAt: Record<number, { b: number; d: number }> = { 0: { b: 1, d: 1.2 }, 1: { b: 1, d: 1.2 }, 2: { b: 1, d: 0 }, 3: { b: 1, d: 0.6 }, 4: { b: 2, d: 0.8 } };
	return (
		<Shift dx={dx} dy={dy}>
			<T x={1800} y={5220} h={42} show={on(k)}>每一行 × 跑 3 次 <span style={{ color: GREY }}>· 由代码检查、LLM-as-judge 和人工一起打分</span></T>
			<T x={3060} y={5370} h={50} align="center" weight={800} show={on(k)} delay={0.3}>旧模型</T>
			<T x={3900} y={5370} h={50} align="center" weight={800} show={on(k)} delay={0.3}>新模型</T>
			<Ink d="M 1790 5405 L 4340 5405" w={6} show={on(k)} delay={0.4} />
			<Ink d="M 2700 5300 L 2700 6170" w={5} show={on(k)} delay={0.5} />
			<Ink d="M 3500 5300 L 3500 6170" w={5} show={on(k)} delay={0.5} />
			{ROWS.map((r, i) => <T key={r} x={1800} y={YS[i]} h={48} show={on(k)} delay={0.6 + i * 0.1}>{r}</T>)}
			{VALUES.map(([o, n], i) => {
				const { b, d } = rowAt[i];
				const isSafety = i === 4;
				return <div key={i}>
					<T x={3060} y={YS[i]} h={52} align="center" show={on(k, b)} delay={d}>{o}</T>
					<T x={3900} y={YS[i]} h={52} align="center" c={isSafety ? RED : undefined} weight={isSafety ? 800 : undefined} show={on(k, b)} delay={isSafety ? d + 0.9 : d}>{n}</T>
				</div>;
			})}
			<Ring cx={3905} cy={6110} rx={120} ry={62} double show={on(k, 2)} delay={1.8} />
			<T x={1800} y={6230} h={32} c={GREY} print show={on(k)} delay={0.9}>* 高风险漏判 · 示例</T>
			<T x={1800} y={6380} h={50} show={on(k, 3)}>凭感觉：直接上线 ✓</T>
			<Swipe x0={3150} x1={3720} y={6390} h={68} show={on(k, 4)} delay={0.6} />
			<T x={3150} y={6390} h={68} weight={800} show={on(k, 4)}>eval：还不行</T>
			<Light red={on(k, 4)} />
		</Shift>
	);
}

export const F01: Chapter = {
	stops: [{
		key: 'runit', chapter: '第 4 章 · 回到周五：能上线吗？', cam: { cx: 2940, cy: 10500, z: 0.6 }, builds: 4, van: { s: bottomS(3450), faceBack: false },
		camAt: { 2: { cx: 3630, cy: 10780, z: 1.0 }, 3: { cx: 2940, cy: 10500, z: 0.6 } },
	}],
	area: { id: 'runit', bbox: [1900, 9850, 4600, 11300], Render },
};
