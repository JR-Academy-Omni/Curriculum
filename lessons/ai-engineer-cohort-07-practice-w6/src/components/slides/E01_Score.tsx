import type { ReactNode } from 'react';
import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Card, Ink, Move, Shift, Hi, Pill, Disc, MarkGlyph, Vehicle, INK, RED, GREY, PAPER } from '../world/prims';
import { NAVY } from '../world/checklist';
import { VanArt } from '../world/World';
import { EP2, e2van } from '../world/layout';

// 分数区（第 45–49 页）：案例区上方。pass^k / pass@k → k = 3 → 50 个 case 的格子 → 80% → 改了东西重考 → 88%。
// 坐标整体右移 EP2.dx。第 4 章开头（runit）时整块清空（第 49 页之后、下一页到达时）。

const SLATE = '#3d4a5c';
const GREEN = '#2f9e5b';
type M = 'tick' | 'cross';
const t: M = 'tick', x: M = 'cross';

// 格子：slot 0 是 case 017，其余是 001–050（去掉 017），两次运行的三次标记
const FAIL80: Record<string, M[]> = {
	'017': [t, x, t], '003': [t, x, t], '008': [t, t, x], '011': [x, t, t], '020': [t, x, t],
	'023': [t, t, x], '027': [x, t, x], '034': [t, x, t], '039': [x, t, x], '048': [t, x, t],
};
const FIXED88 = new Set(['017', '020', '034', '039']);
const CASES = ['017', ...Array.from({ length: 50 }, (_, i) => String(i + 1).padStart(3, '0')).filter(c => c !== '017')];
const marksOf = (c: string, run: 80 | 88): M[] => (run === 88 && FIXED88.has(c)) ? [t, t, t] : (FAIL80[c] ?? [t, t, t]);
const slot = (i: number) => ({ cx: 9188 + 130 * (i % 10), cy: 2240 + 104 * Math.floor(i / 10) });

/** 格子里的一个 case tile（116 × 96） */
function GridTile({ i, c, run, show, delay }: { i: number; c: string; run: 80 | 88; show: boolean; delay: number }) {
	const { cx, cy } = slot(i);
	const marks = marksOf(c, run);
	const fail = marks.includes(x);
	const special = run === 80 && c === '017'; // 80% 那次：case 017 保留石板色描边、深色粗体标签
	return <El x={cx - 58} y={cy - 48} w={116} h={96} show={show} anim="pop" delay={delay}
		style={{ background: fail ? '#e4e6eb' : PAPER, border: special ? `4px solid ${SLATE}` : `2px solid ${fail ? '#b9bec8' : '#9aa3b2'}`, borderRadius: 10, boxSizing: 'border-box' }}>
		<div style={{ position: 'absolute', left: 0, right: 0, top: 48 - 19 - 23 * 0.8 - (special ? 4 : 2), textAlign: 'center', fontSize: 23, lineHeight: 1, fontWeight: special ? 800 : 600, color: special ? INK : GREY, whiteSpace: 'nowrap' }}>案例 {c}</div>
		{marks.map((k, j) => <div key={j} style={{ position: 'absolute', left: 58 - 30 + j * 30 - (special ? 4 : 2), top: 66 - (special ? 4 : 2), width: 0, height: 0, filter: fail && k === t ? 'opacity(.55)' : undefined }}><MarkGlyph kind={k} size={20} /></div>)}
		{fail && <Badge x={116 - 6} y={-6} d={32} />}
	</El>;
}

/** 红色 ✗ 徽章（贴在 tile 右上角） */
function Badge({ x: bx, y: by, d }: { x: number; y: number; d: number }) {
	return <div style={{ position: 'absolute', left: bx - d / 2 + 6, top: by - d / 2 - 2, width: d, height: d, borderRadius: '50%', background: RED, border: '2px solid #fff' }}>
		<MarkGlyph kind="cross" size={d * 0.5} c="#fff" />
	</div>;
}

/** 大号案例 017 tile（224 × 186）：在分数区出现、变灰、贴 ✗ 徽章 */
function BigTile({ show, grey }: { show: boolean; grey: boolean }) {
	return <El x={10500 - 112} y={1860 - 93} w={224} h={186} show={show} anim="pop"
		style={{ background: grey ? '#e4e6eb' : PAPER, border: `6px solid ${grey ? '#9aa3b2' : SLATE}`, borderRadius: 16, boxSizing: 'border-box', transition: 'background .4s, border-color .4s' }}>
		<div style={{ position: 'absolute', left: 0, right: 0, top: 1823 - (1860 - 93) - 45 * 0.8 - 6, textAlign: 'center', fontWeight: 800, fontSize: 45, lineHeight: 1, color: grey ? GREY : INK, whiteSpace: 'nowrap' }}>案例 017</div>
		{([t, x, t] as M[]).map((k, i) => <div key={i} style={{ position: 'absolute', left: 38 + i * 68, top: 100, width: 0, height: 0 }}><MarkGlyph kind={k} size={44} /></div>)}
		{grey && <div style={{ position: 'absolute', left: 198, top: -30, width: 60, height: 60, borderRadius: '50%', background: RED, border: '3px solid #fff' }}><MarkGlyph kind="cross" size={30} c="#fff" /></div>}
	</El>;
}

/** 深色分数卡：中心 (cx, cy)，文字基线 / 字号 */
function ScoreCard({ cx, cy, w, h, show, figure, title, num, illus, delay = 0 }: { cx: number; cy: number; w: number; h: number; show: boolean; figure: ReactNode; title: [number, number]; num: [number, number]; illus: [number, number]; delay?: number }) {
	return <>
		<Card x={cx - w / 2} y={cy - h / 2} w={w} h={h} show={show} bg={SLATE} delay={delay} />
		<T x={cx} y={title[0]} fs={title[1]} print align="center" c="#cfd5df" weight={800} show={show} delay={delay + 0.15}>eval 得分</T>
		<T x={cx} y={num[0]} fs={num[1]} print align="center" c="#fff" weight={800} show={show} delay={delay + 0.3} anim="pop">{figure}</T>
		<T x={cx} y={illus[0]} fs={illus[1]} print align="center" c="#9aa3b2" weight={600} show={show} delay={delay + 0.15}>示例</T>
	</>;
}

/** 示例行：三个虚线格 + 箭头 + 圆形结果位 */
function ExampleRow({ xs, cy, size, arrow, spot, show, delay = 0 }: { xs: number[]; cy: number; size: number; arrow: [number, number]; spot: number; show: boolean; delay?: number }) {
	return <>
		{xs.map(cx => <El key={cx} x={cx - size / 2} y={cy - size / 2} w={size} h={size} show={show} delay={delay} style={{ border: '4px dashed #9aa3b2', borderRadius: 12, boxSizing: 'border-box' }} />)}
		<Ink d={`M ${arrow[0]} ${cy} L ${arrow[1]} ${cy} M ${arrow[1] - 22} ${cy - 16} L ${arrow[1]} ${cy} L ${arrow[1] - 22} ${cy + 16}`} c={INK} w={7} show={show} delay={delay + 0.2} />
		<El x={spot - size / 2} y={cy - size / 2} w={size} h={size} show={show} delay={delay + 0.3} style={{ border: '4px dashed #9aa3b2', borderRadius: '50%', boxSizing: 'border-box' }} />
	</>;
}

function Render() {
	const { on, during } = useBeat();
	const cleared = on('runit'); // 整块清空（第 4 章到达时）
	const live = (from: [string, number?], until?: [string, number?]) => (until ? during(from, until) : on(from[0], from[1] ?? 0)) && !cleared;
	const cardOn = live(['passk'], ['change', 1]);
	const shrunk = on('k3', 2);
	const row2Dim = on('k3', 1) ? 0.4 : 1;
	const tiles80 = live(['grid', 1], ['change', 5]);
	const tiles88 = live(['same', 1]);

	return (
		<Shift dx={EP2.dx} dy={EP2.dy}>
			{/* 第 45–46 页：定义卡（第 46 页第 2 次点击时缩小移到左上角，里面的东西一起缩） */}
			<Move scale={shrunk ? 1205 / 1687 : 1} dx={shrunk ? 9100 - 9407 : 0} dy={shrunk ? 1640 - 1881 : 0} ox={9407} oy={1881} duration={0.9}>
				<Card x={9407} y={1881} w={1687} h={619} show={cardOn} style={{ borderColor: SLATE }} />
				<Hi x0={9466} y0={1955} x1={10980} y1={2030} show={live(['k3', 1], ['change', 1])} />
				<T x={9476.5} y={2011.9} fs={64} print weight={600} show={cardOn} delay={0.3}><b>pass^k：</b>每个 case 跑 k 次，k 次全部通过才算通过</T>
				<ExampleRow xs={[9543.7, 9703.3, 9862.9]} cy={2126.7} size={134} arrow={[9964, 10062]} spot={10165.3} show={live(['passk', 1], ['change', 1])} />
				{[9543.7, 9703.3, 9862.9].map((cx, i) => <Disc key={cx} cx={cx} cy={2126.7} d={118} kind="tick" anim="drop" show={live(['passk', 1], ['change', 1])} delay={0.6 + i * 0.3} />)}
				<Disc cx={10165.3} cy={2126.7} d={118} kind="tick" show={live(['passk', 1], ['change', 1])} delay={1.7} />
				<T x={9476.5} y={2283.7} fs={50} print c={GREY} weight={500} show={live(['passk', 2], ['change', 1])} dim={row2Dim} delay={0.1}><b style={{ fontWeight: 700 }}>pass@k：</b>k 次里有 1 次通过就算通过</T>
				<El x={0} y={0} show={live(['passk', 2], ['change', 1])} dim={row2Dim}>
					<ExampleRow xs={[9529.7, 9661.3, 9792.9]} cy={2376.1} size={106} arrow={[9880, 9978]} spot={10067.3} show delay={0.3} />
				</El>
				{([x, t, x] as M[]).map((k, i) => <Disc key={i} cx={[9529.7, 9661.3, 9792.9][i]} cy={2376.1} d={92} kind={k} anim="drop" dim={row2Dim} show={live(['passk', 3], ['change', 1])} delay={0.2 + i * 0.3} />)}
				<Disc cx={10067.3} cy={2376.1} d={92} kind="tick" dim={row2Dim} show={live(['passk', 3], ['change', 1])} delay={1.3} />
			</Move>
			<T x={9992.5} y={1841.7 + 26} fs={72} print align="center" weight={800} show={live(['k3', 2], ['change', 1])} delay={0.9}>k = 3</T>
			{/* 第 46 页：case 017 → 不及格 */}
			<BigTile show={live(['k3', 3], ['grid', 1])} grey={on('k3', 4)} />

			{/* 第 47 页：50 个 case × 3 次 */}
			<Card x={9100} y={2104} w={1346} h={628} show={live(['grid', 1])} style={{ borderColor: SLATE }} />
			<T x={9140} y={2170} fs={40} print weight={600} show={live(['grid', 1])} delay={0.2}>50 个 case × 每个跑 3 次</T>
			{CASES.map((_, i) => { const { cx, cy } = slot(i); return <El key={i} x={cx - 60} y={cy - 50} w={120} h={100} show={live(['grid', 1])} delay={0.3} style={{ border: '2px dashed #c3c7d0', borderRadius: 10, boxSizing: 'border-box' }} />; })}
			{CASES.map((c, i) => <GridTile key={`80-${c}`} i={i} c={c} run={80} show={tiles80} delay={0.5 + i * 0.035} />)}
			{CASES.map((c, i) => <GridTile key={`88-${c}`} i={i} c={c} run={88} show={tiles88} delay={0.2 + i * 0.035} />)}
			<Pill cx={10950} cy={2235} fs={46} h={80} bg={NAVY} show={live(['grid', 2], ['same', 2])}>50 个 case 通过 40 个</Pill>
			<Pill cx={10950} cy={2235} fs={46} h={80} bg={NAVY} show={live(['same', 2])}>50 个 case 通过 44 个</Pill>
			<El x={11253 - 32} y={2235 - 40} w={64} h={80} show={live(['same', 2])} anim="grow" origin="center bottom" delay={0.3}>
				<svg width={64} height={80} viewBox="0 0 64 80"><path d="M 32 2 L 62 36 L 44 36 L 44 78 L 20 78 L 20 36 L 2 36 Z" fill={GREEN} /></svg>
			</El>
			<ScoreCard cx={10950} cy={2560} w={552} h={372} show={live(['grid', 3], ['change', 5])} figure="80%" title={[2448.4, 46]} num={[2644, 168]} illus={[2719.6, 34]} />

			{/* 第 48 页：改了东西的 agent（第二辆车）开进来 */}
			<Vehicle x={9697} y={2080} show={live(['change', 1])} from={-900} duration={1.4} delay={0.3}>
				<VanArt scale={250 / 280} />
			</Vehicle>
			<Pill cx={9697} cy={1913.75} fs={46} h={78} bg={NAVY} anim="drop" show={live(['change', 2])}>换模型</Pill>
			<Pill cx={9697} cy={1825.25} fs={46} h={78} bg={NAVY} anim="drop" show={live(['change', 3])}>改 prompt</Pill>
			<Pill cx={9697} cy={1736.75} fs={46} h={78} bg={NAVY} anim="drop" show={live(['change', 4])}>加工具</Pill>
			<ScoreCard cx={10640} cy={2555} w={322} h={217} show={live(['change', 5])} figure="80%" title={[2489.9, 46]} num={[2604, 98]} illus={[2648.1, 34]} delay={0.4} />
			<Pill cx={10640} cy={2340} fs={46} h={80} bg="#8a8f9c" anim="drop" show={live(['change', 5])} delay={0.8}>之前</Pill>
			<ScoreCard cx={11140} cy={2555} w={460} h={310} show={live(['change', 5])} figure={on('same', 3) ? '88%' : '…'} title={[2462, 46]} num={[2625, 140]} illus={[2688, 34]} delay={0.6} />
			<Pill cx={11140} cy={2340} fs={46} h={80} bg="#8a8f9c" anim="drop" show={live(['same', 3])} delay={0.4}>现在</Pill>
		</Shift>
	);
}

const C3 = '第 3 章 · 一次 test run';
const CAM = { cx: 10250 + EP2.dx, cy: 2262, z: 0.8 };
const V = { s: e2van(9200) };

export const SCORE: Chapter = {
	stops: [
		{ key: 'passk', chapter: C3, cam: CAM, builds: 3, van: V, minimap: false },
		{ key: 'k3', chapter: C3, cam: CAM, builds: 4, van: V, minimap: false },
		{ key: 'grid', chapter: C3, cam: CAM, builds: 3, van: V, minimap: false },
		{ key: 'change', chapter: C3, cam: CAM, builds: 5, van: V, minimap: false },
		{ key: 'same', chapter: C3, cam: CAM, builds: 3, van: V, minimap: false },
	],
	area: { id: 'score', bbox: [36240, 1600, 38660, 2980], Render },
};
