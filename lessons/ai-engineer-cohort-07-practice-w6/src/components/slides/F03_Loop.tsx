import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Ink, Shift, INK, ACCENT } from '../world/prims';
import { leftS, EP1 } from '../world/layout';

// 第 52 页：一个顺时针的圆，顶上一个箭头，六个步骤。局部坐标（centre (4300, 3380)）写好后平移。
const { dx, dy } = EP1.loop;
const CX = 4300, CY = 3380, R = 420;
const pt = (deg: number, r = R) => [CX + r * Math.cos((deg * Math.PI) / 180), CY + r * Math.sin((deg * Math.PI) / 180)] as const;

// 顺时针从顶上开始：角度（SVG 里 y 向下，角度增大 = 顺时针）
const STEPS: { deg: number; text: string; lx: number; ly: number; align: 'left' | 'center' | 'right' }[] = [
	{ deg: -90, text: '定义什么是好', lx: CX, ly: CY - R - 45, align: 'center' },
	{ deg: -30, text: '建 golden dataset', lx: CX + 420, ly: CY - 192, align: 'left' },
	{ deg: 30, text: '运行 & 打分', lx: CX + 420, ly: CY + 240, align: 'left' },
	{ deg: 90, text: '做决定', lx: CX, ly: CY + R + 90, align: 'center' },
	{ deg: 150, text: '线上监控', lx: CX - 420, ly: CY + 240, align: 'right' },
	{ deg: 210, text: '失败案例回流', lx: CX - 420, ly: CY - 192, align: 'right' },
];

function Render() {
	const { on } = useBeat();
	const k = 'loop';
	const [sx, sy] = pt(-90), [ex, ey] = pt(265);
	// 箭头：终点处沿顺时针切线方向
	const t = (265 * Math.PI) / 180, tx = -Math.sin(t), ty = Math.cos(t);
	const head = (a: number) => { const c = Math.cos(a), s = Math.sin(a); const bx = -(tx * c - ty * s), by = -(tx * s + ty * c); return `${ex + bx * 40} ${ey + by * 40}`; };
	return (
		<Shift dx={dx} dy={dy}>
			<Ink d={`M ${sx} ${sy} A ${R} ${R} 0 1 1 ${ex} ${ey}`} w={12} show={on(k)} duration={1.2} />
			<Ink d={`M ${head(0.5)} L ${ex} ${ey} L ${head(-0.5)}`} w={12} show={on(k)} delay={1.2} duration={0.2} />
			{STEPS.map((s, i) => {
				const [dx0, dy0] = pt(s.deg);
				return <div key={s.text}>
					<El x={dx0 - 22} y={dy0 - 22} w={44} h={44} show={on(k, i + 1)} anim="pop" style={{ background: ACCENT, border: `6px solid ${INK}`, borderRadius: '50%', boxSizing: 'border-box' }} />
					<T x={s.lx} y={s.ly} h={48} align={s.align} show={on(k, i + 1)} delay={0.2}>{s.text}</T>
				</div>;
			})}
		</Shift>
	);
}

export const F03: Chapter = {
	stops: [{
		key: 'loop', chapter: '第 4 章 · 回到周五：能上线吗？', cam: { cx: 4450, cy: 8460, z: 0.85 }, builds: 6, van: { s: leftS(7300) },
	}],
	area: { id: 'loop', bbox: [3500, 7850, 5450, 8950], Render },
};
