import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Ink, Mark, Ring, Swipe, Shift, INK } from '../world/prims';
import { topS } from '../world/geometry';

// 第 2 页。下面的局部坐标（camera (3700, 760)），整体平移到地图上路的正上方。
const DX = 1300, DY = 2990;

function Clock({ show }: { show: boolean }) {
	const cx = 3050, cy = 450, r = 105;
	const hand = (deg: number, len: number) => {
		const a = ((deg - 90) * Math.PI) / 180;
		return `M ${cx} ${cy} L ${cx + len * Math.cos(a)} ${cy + len * Math.sin(a)}`;
	};
	return <>
		<Ink d={`M ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx + r - 0.1} ${cy - 1}`} w={9} show={show} />
		<Ink d={hand(135, 58)} w={11} delay={0.4} show={show} />
		<Ink d={hand(180, 84)} w={7} delay={0.5} show={show} />
	</>;
}

function Bubble({ cx, show, delay }: { cx: number; show: boolean; delay: number }) {
	return <El x={cx - 62} y={900} w={124} h={78} show={show} anim="pop" delay={delay}
		style={{ background: '#fff', border: `5px solid ${INK}`, borderRadius: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'inherit', fontSize: 54, fontWeight: 800, color: INK }}>?</El>;
}

function Render() {
	const { on, during } = useBeat();
	const k = 'ship';
	// 「凭感觉」那一行：到最后一页（showme）第 1 步被擦掉
	const vibe = during([k, 4], ['showme', 1]);
	const ticks = during([k, 5], ['showme', 1]);
	return (
		<Shift dx={DX} dy={DY}>
			<Clock show={on(k)} />
			<T x={3050} y={625} h={42} align="center" show={on(k)}>周五 下午 4:30</T>
			<El x={3050} y={705} shift="-50%" show={on(k, 1)} anim="pop"
				style={{ border: `6px solid ${INK}`, borderRadius: 18, padding: '14px 30px', background: '#fff', fontFamily: 'inherit', fontSize: 66, fontWeight: 800, whiteSpace: 'nowrap', lineHeight: 1 }}>新模型</El>
			<T x={2800} y={900} h={42} show={on(k, 2)}>更便宜 ✓</T>
			<T x={2800} y={965} h={42} show={on(k, 2)} delay={0.35}>更快 ✓</T>
			<T x={2800} y={1030} h={42} show={on(k, 2)} delay={0.7}>demo 很惊艳 ✓</T>
			<T x={4040} y={740} h={185} align="center" weight={800} show={on(k, 3)} anim="pop">能上线吗？</T>
			{[3540, 3700, 3860].map((x, i) => <Bubble key={x} cx={x} show={vibe} delay={i * 0.15} />)}
			<T x={3480} y={1130} h={56} show={vibe} delay={0.5}>凭感觉</T>
			{[3540, 3700, 3860].map((x, i) => <Mark key={x} x={x} y={1030} size={50} show={ticks} delay={i * 0.2} />)}
			<T x={4150} y={1010} h={56} show={ticks} delay={0.7}>→ 上线！</T>
			{/* 最后一页（第 54 页）：画面写「拿 eval 说话。」 */}
			<Swipe x0={3560} x1={4300} y={1110} h={92} show={on('showme', 3)} />
			<T x={3990} y={1110} h={92} align="center" weight={800} show={on('showme', 2)}>拿 eval 说话。</T>
			<Ring cx={3960} cy={1078} rx={470} ry={100} double show={on('showme', 3)} delay={0.5} />
		</Shift>
	);
}

export const W01: Chapter = {
	stops: [{
		key: 'ship', chapter: '第 1 章 · 为什么要 eval', cam: { cx: 5000, cy: 3760, z: 0.9 }, builds: 5, van: { s: topS(5880) },
	}],
	area: { id: 'ship', bbox: [3900, 3200, 6100, 4250], Render },
};
