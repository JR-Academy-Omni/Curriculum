import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Ink, Hi, Shift, BLUE } from '../world/prims';
import { Checklist, NAVY } from '../world/checklist';
import { EP2, e2van } from '../world/layout';

// 第 27–29 页：工棚（精炼流水线）、四道门、门牌；清单副本 E 标出每一行走哪道门。
// 工棚的线条从一开始就在画布上，这一页才第一次进镜头。
const E = { X: 23100, Y: 2640 };
const DOORS = [21750, 22650, 23550, 24450];
const PLATES: { digit: string; words: [string, number][] }[] = [
	{ digit: '1', words: [['INPUT', 3216.8]] },
	{ digit: '2', words: [['EXPECTED', 3176.9], ['OUTPUT', 3256.7]] },
	{ digit: '3', words: [['GRADING', 3176.9], ['CRITERIA', 3256.7]] },
	{ digit: '4', words: [['签字确认', 3216.8]] },
];
// 清单五行各走哪道门：第 5 行（不给 agent 看）也由第 1 道门负责
const ROW_DOOR: [number, string][] = [[2471, '1'], [2558, '2'], [2644, '3'], [2798, '4'], [2917, '1']];
const C = '第 2 章 · golden case 长什么样';

function roofPath() {
	let d = 'M 21070 3500 L 21100 3500';
	for (let i = 0; i < 6; i++) d += ` L ${(21566.7 + 666.7 * i).toFixed(1)} 3330 L ${(21766.7 + 666.7 * i).toFixed(1)} 3500`;
	return d + ' L 25130 3500';
}

function Render() {
	const { on, during } = useBeat();
	return (
		<Shift dx={EP2.dx} dy={EP2.dy}>
			{/* 工棚：两面墙、锯齿屋顶、四道门（常驻） */}
			<Ink d="M 21100 4290 L 21100 3500 M 25100 4290 L 25100 3500" w={9} />
			<Ink d={roofPath()} w={9} />
			{DOORS.map(x => <Ink key={x} d={`M ${x - 220} 4290 L ${x - 220} 3640 L ${x + 220} 3640 L ${x + 220} 4290 M ${x} 3640 L ${x} 4290`} w={7} />)}

			{/* door1 build 1：门牌 1 后面的蓝色光晕（先画，在门牌下面） */}
			<El x={21750 - 315} y={3200 - 160} w={630} h={320} show={during(['door1', 1], ['door1', 3])} anim="fade"
				style={{ borderRadius: 160, background: 'rgba(70,140,255,.55)', filter: 'blur(36px)' }} />

			{/* 四块门牌：一块一块落到门上方 */}
			{DOORS.map((x, i) => {
				const show = on('doors', i + 1);
				const p = PLATES[i];
				return (
					<div key={x}>
						<Ink d={`M ${x - 162} 3311 L ${x - 162} 3481 M ${x + 162} 3311 L ${x + 162} 3481`} c="#9aa0ad" w={14} show={show} delay={0.3} duration={0.3} />
						<El x={x - 270} y={3085} w={540} h={230} show={show} anim="drop"
							style={{ background: NAVY, borderRadius: 22, boxShadow: 'inset 0 0 0 10px #1e2f6b, inset 0 0 0 15px #fff, 0 0 40px rgba(90,150,255,.55)' }}>
							<div style={{ position: 'absolute', left: 86 - 52, top: 115 - 52, width: 104, height: 104, borderRadius: '50%', background: '#fff' }} />
						</El>
						<T x={x - 184} y={3223} fs={66} print weight={800} c={NAVY} align="center" show={show} delay={0.15}>{p.digit}</T>
						{p.words.map(([w, y]) => <T key={w} x={x + 62} y={y} fs={70} print weight={800} c="#fff" align="center" show={show} delay={0.2}>{w}</T>)}
					</div>
				);
			})}

			{/* 清单副本 E（到达时就在）；door1 build 2：第 5 行发光（先画，压在文字下） */}
			<Checklist X={E.X} Y={E.Y} show={on('doors')} />
			<Hi x0={22855} y0={2884} x1={23200} y1={2952} show={on('door1', 2)} />

			{/* doors build 5：每行旁边写门号 1 · 2 · 3 · 4 · 1 */}
			{ROW_DOOR.map(([y, n], i) => {
				const r = 40;
				return (
					<div key={y}>
						<Ink d={`M ${23531 + r} ${y} A ${r} ${r} 0 1 1 ${23531 + r - 0.1} ${y - 1}`} c={BLUE} w={6} show={on('doors', 5)} delay={i * 0.3} duration={0.35} />
						<T x={23531} y={y + 24} h={50} c={BLUE} align="center" weight={800} show={on('doors', 5)} delay={i * 0.3 + 0.2}>{n}</T>
					</div>
				);
			})}

			{/* door1 build 2：粗蓝箭头，从第 5 行的「1」指向 INPUT 门牌 */}
			<Ink d="M 23531 2963 L 23531 3030 L 22441 3030 L 21991 3090" c={BLUE} w={18} show={on('door1', 2)} delay={0.5} duration={0.8} />
			<Ink d={arrowHead([22441, 3030], [21991, 3090], 56)} c={BLUE} w={18} show={on('door1', 2)} delay={1.3} duration={0.2} />
		</Shift>
	);
}

function arrowHead(from: [number, number], to: [number, number], len: number) {
	const a = Math.atan2(to[1] - from[1], to[0] - from[0]);
	const p = (k: number) => `${to[0] - len * Math.cos(a + k)} ${to[1] - len * Math.sin(a + k)}`;
	return `M ${p(0.5)} L ${to[0]} ${to[1]} L ${p(-0.5)}`;
}

export const G07: Chapter = {
	stops: [
		{
			key: 'doors', chapter: C, cam: { cx: 50300, cy: 3350, z: 0.42 }, builds: 5, van: { s: e2van(19100), faceBack: true }, minimap: false,
		},
		{
			key: 'door1', chapter: C, cam: { cx: 49720, cy: 2830, z: 0.78 }, builds: 3, van: { s: e2van(19100), faceBack: true }, minimap: false,
		},
		{
			key: 'holdup', chapter: C, cam: { cx: 49850, cy: 2867, z: 0.774 }, builds: 0, van: { s: e2van(19100), faceBack: true }, minimap: false,
		},
	],
	area: { id: 'shed', bbox: [EP2.dx + 21060, 2290, EP2.dx + 25140, 4300], Render },
};
