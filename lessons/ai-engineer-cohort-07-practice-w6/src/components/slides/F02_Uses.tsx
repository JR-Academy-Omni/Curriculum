import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Ink, Shift, INK, ACCENT, GREY } from '../world/prims';
import { leftS, EP1 } from '../world/layout';

// 第 51 页：左边那段路内侧的五块路牌，从下往上读（车往上爬）。
// 局部坐标（路在 x 450 → 地图 x 600），整体平移 EP1.uses。
const { dx, dy } = EP1.uses;
const SIGNS: { y: number; text: string }[] = [
	{ y: 4470, text: '每次上线：决定 go / no-go' },
	{ y: 4110, text: '在「你的」业务上比较模型和供应商' },
	{ y: 3750, text: '降成本，但不降质量' },
	{ y: 3390, text: '治理的证据："test and monitor"' },
	{ y: 2990, text: '给管理层一条说真话的曲线' },
];

function Lamp({ y, show, traffic }: { y: number; show: boolean; traffic?: boolean }) {
	const cy = y - 20;
	return <>
		<Ink d={`M 510 ${cy} L 616 ${cy}`} w={10} show={show} />
		{traffic
			? <El x={620} y={cy - 80} w={60} h={160} show={show} anim="pop" delay={0.2} style={{ background: INK, borderRadius: 12 }}>
				{['#e8453c', '#3a3f52', '#2fa05a'].map((c, i) => <div key={i} style={{ position: 'absolute', left: 12, top: 12 + i * 48, width: 36, height: 36, borderRadius: 18, background: c }} />)}
			</El>
			: <El x={616} y={cy - 34} w={68} h={68} show={show} anim="pop" delay={0.2} style={{ background: ACCENT, border: `5px solid ${INK}`, borderRadius: '50%', boxSizing: 'border-box' }} />}
	</>;
}

function Render() {
	const { on } = useBeat();
	const k = 'uses';
	return (
		<Shift dx={dx} dy={dy}>
			{SIGNS.map((s, i) => <div key={s.y}>
				<Lamp y={s.y} show={on(k, i)} traffic={i === 0} />
				<T x={760} y={s.y} h={52} show={on(k, i)} delay={0.4}>{s.text}</T>
			</div>)}
			<T x={760} y={3465} h={34} c={GREY} print show={on(k, 3)} delay={0.9}>(Australia: Guidance for AI Adoption, Oct 2025)</T>
			{/* 第 5 块：一条往上走的小折线图 */}
			<Ink d="M 1950 2700 L 1950 2860 L 2350 2860" w={5} c={GREY} show={on(k, 4)} delay={0.6} />
			<Ink d="M 1975 2835 L 2060 2810 L 2140 2818 L 2220 2770 L 2320 2725" w={8} show={on(k, 4)} delay={0.9} />
		</Shift>
	);
}

export const F02: Chapter = {
	stops: [{
		key: 'uses', chapter: '第 4 章 · 回到周五：能上线吗？', cam: { cx: 1550, cy: 9250, z: 0.9 }, builds: 5, van: { s: leftS(9210) },
		camAt: { 1: { cx: 1550, cy: 8890, z: 0.9 }, 2: { cx: 1550, cy: 8530, z: 0.9 }, 3: { cx: 1550, cy: 8170, z: 0.9 }, 4: { cx: 1550, cy: 7770, z: 0.9 }, 5: { cx: 1700, cy: 8300, z: 0.56 } },
		vanAt: { 1: { s: leftS(8850) }, 2: { s: leftS(8490) }, 3: { s: leftS(8130) }, 4: { s: leftS(7730) } },
	}],
	area: { id: 'uses', bbox: [600, 7300, 2600, 9260], Render },
};
