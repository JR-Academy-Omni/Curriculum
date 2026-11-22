import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { Shift, Vehicle, INK, RED, PAPER } from '../world/prims';
import { EP2 } from '../world/layout';
import { fonts } from '../ui';

// 三辆矿车，装着公司的原始数据（原矿）。第 13 页从左边开进来停在 hook 区；
// 到第 24 页时跟着镜头一起开到 raw 区。车身上不写字，标签写在板上。
// 车：约 645 长，车斗上沿离路 254，矿堆顶约 390；车身中心 x，车轮落在 y 4300。

type Kind = 'invoice' | 'envelope' | 'report';

function Paper({ x, y, r, kind }: { x: number; y: number; r: number; kind: Kind }) {
	return (
		<g transform={`translate(${x} ${y}) rotate(${r})`}>
			<rect x={-36} y={-46} width={72} height={92} rx={6} fill={PAPER} stroke={INK} strokeWidth={5} />
			{kind === 'invoice' && <>
				<text x={0} y={4} textAnchor="middle" fontFamily={fonts.body} fontWeight={800} fontSize={42} fill={RED}>$</text>
				<line x1={-20} y1={22} x2={20} y2={22} stroke="#b9bcc6" strokeWidth={5} strokeLinecap="round" />
				<line x1={-20} y1={34} x2={10} y2={34} stroke="#b9bcc6" strokeWidth={5} strokeLinecap="round" />
			</>}
			{kind === 'envelope' && <>
				<rect x={-30} y={-22} width={60} height={42} fill="#f3efe4" stroke={INK} strokeWidth={4} />
				<path d="M -30 -22 L 0 4 L 30 -22" fill="none" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
			</>}
			{kind === 'report' && <>
				<rect x={-22} y={2} width={11} height={26} fill="#2459d8" />
				<rect x={-6} y={-14} width={11} height={42} fill="#2459d8" />
				<rect x={10} y={-26} width={11} height={54} fill="#2459d8" />
				<line x1={-26} y1={29} x2={26} y2={29} stroke={INK} strokeWidth={4} />
			</>}
		</g>
	);
}

export function TruckArt({ kind }: { kind: Kind }) {
	return (
		<svg width={1} height={1} style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible' }}>
			{/* 露出来的纸先画，矿堆盖住下半截 */}
			<Paper x={-150} y={-392} r={-14} kind={kind} />
			<Paper x={10} y={-420} r={6} kind={kind} />
			<Paper x={160} y={-380} r={18} kind={kind} />
			<path d="M -300 -250 C -250 -320 -170 -372 -80 -380 C 0 -398 90 -386 170 -352 C 240 -322 285 -285 300 -250 Z" fill="#7a4a2a" stroke={INK} strokeWidth={6} strokeLinejoin="round" />
			<circle cx={-170} cy={-300} r={9} fill="#5b3519" />
			<circle cx={60} cy={-330} r={11} fill="#5b3519" />
			<circle cx={210} cy={-290} r={8} fill="#5b3519" />
			{/* 车斗 */}
			<path d="M -322 -254 L 322 -254 L 286 -70 L -286 -70 Z" fill="#d98c3f" stroke={INK} strokeWidth={7} strokeLinejoin="round" />
			<line x1={-305} y1={-200} x2={305} y2={-200} stroke={INK} strokeWidth={4} opacity={0.5} />
			<rect x={-300} y={-72} width={600} height={22} fill="#4a5068" stroke={INK} strokeWidth={5} />
			{[-220, -80, 80, 220].map(cx => (
				<g key={cx}>
					<circle cx={cx} cy={-40} r={40} fill={INK} />
					<circle cx={cx} cy={-40} r={15} fill="#d9dbe3" />
				</g>
			))}
		</svg>
	);
}

const KINDS: Kind[] = ['invoice', 'envelope', 'report'];
const AT_HOOK = [4400, 5200, 6000];
const AT_RAW = [12180, 12920, 13660];

function Render() {
	const { on } = useBeat();
	const atRaw = on('raw');
	return (
		<Shift dx={EP2.dx} dy={EP2.dy}>
			{KINDS.map((kind, i) => (
				<Vehicle key={kind} x={(atRaw ? AT_RAW : AT_HOOK)[i]} y={4300} show={on('hook')}
					from={-2600} duration={atRaw ? 1.8 : 1.5} delay={atRaw ? 0 : 0.3 + i * 0.25}>
					<TruckArt kind={kind} />
				</Vehicle>
			))}
		</Shift>
	);
}

export const G00: Chapter = {
	stops: [],
	// 两处停车位都在内（hook x 4400–6000、raw x 12180–13660，各 ±323），开进来时从左边 2600 外出发
	area: { id: 'trucks', bbox: [EP2.dx + 3800, 3880, EP2.dx + 14000, 4310], Render },
};
