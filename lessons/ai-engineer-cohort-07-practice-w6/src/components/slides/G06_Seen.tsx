import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Card, Ink, Mark, Stamp, Shift, BLUE, GREY, INK, PAPER } from '../world/prims';
import { Checklist, ClMark } from '../world/checklist';
import { EP2, e2van } from '../world/layout';
import { fonts } from '../ui';

// 第 26 页：看着像 golden 的第 3 种：agent 看过答案。清单副本 D 到达时就在，未打勾；车在 build 2 开到 x 19100，build 3 掉头朝向卡片。
const K = 'seen';
const D = { X: 20330, Y: 3600 };
const TEAL = '#2a8c86';
const SLATE = '#2f3a4a';

function Eye({ x, y }: { x: number; y: number }) {
	return (
		<svg width={1} height={1} style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible' }}>
			<path d={`M ${x - 34} ${y} Q ${x} ${y - 30} ${x + 34} ${y} Q ${x} ${y + 30} ${x - 34} ${y} Z`} fill={PAPER} stroke={INK} strokeWidth={4} />
			<circle cx={x} cy={y} r={10} fill={INK} />
		</svg>
	);
}

function Render() {
	const { on, during } = useBeat();
	const card = on(K, 1);
	const score = during([K, 4], [K, 8]);
	return (
		<Shift dx={EP2.dx} dy={EP2.dy}>
			<Checklist X={D.X} Y={D.Y} show={on(K)} />

			{/* 1：agent 的 instructions，里面放了一个解好的例子 */}
			<Card x={18420} y={3340} w={800} h={520} bg="#e6f4f2" band={TEAL} bandH={76} radius={18} show={card}>
				<div style={{ position: 'absolute', left: 25, top: 162, width: 518, height: 14, borderRadius: 7, background: '#c3cfd0' }} />
				<Eye x={705} y={453} />
			</Card>
			<T x={18448} y={3390} fs={40} print weight={800} c="#fff" show={card}>agent 指令</T>
			<T x={18450} y={3471} fs={44} print show={card}>逐一核查有争议的账单。</T>
			<T x={18450} y={3598.6} fs={40} print weight={800} show={card}>示例：转账手续费投诉</T>
			<T x={18450} y={3662.4} fs={44} print weight={800} show={card}>→ 退款 $564.30</T>

			{/* 3：车掉头看卡片；虚线视线；$564.30 从卡片滑到车顶（build 4 拿掉） */}
			<Ink d="M 18990 4180 L 19080 3880" c={BLUE} w={6} dash="18 14" show={on(K, 3)} delay={0.5} />
			<El x={19040 - 135} y={4135 - 42} w={270} h={84} anim="slide" from={[-140, -483]} show={during([K, 3], [K, 4])} delay={0.9}
				style={{ background: TEAL, color: '#fff', borderRadius: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.body, fontWeight: 800, fontSize: 48, whiteSpace: 'nowrap' }}>$564.30</El>

			{/* 4–5：分数磁贴 0% → 100%，印章「被抄进去了」；8 时拿掉 */}
			<El x={19600 - 287.5} y={3560 - 194} w={575} h={388} show={score} anim="drop"
				style={{ background: SLATE, border: `5px solid ${INK}`, borderRadius: 22, boxShadow: '14px 14px 0 rgba(255,222,89,.9)' }} />
			<T x={19600} y={3443.8} fs={47.5} print weight={800} c="#d4d8e0" align="center" show={score}>eval 得分</T>
			<T x={19600} y={3647.5} fs={175} print weight={800} c="#fff" align="center" show={during([K, 4], [K, 5])}>0%</T>
			<T x={19600} y={3647.5} fs={175} print weight={800} c="#fff" align="center" anim="pop" show={during([K, 5], [K, 8])}>100%</T>
			<T x={19600} y={3726.3} fs={35} print c="#9aa3b2" align="center" show={score}>示例</T>
			<Stamp cx={19640} cy={3845} text="被抄进去了" fs={96} rotate={-6} show={during([K, 5], [K, 8])} delay={0.5} />

			{/* 6：清单第 5 行 ✗ */}
			<ClMark X={D.X} Y={D.Y} i={4} kind="cross" show={on(K, 6)} />
			{/* 7：用来搭建 agent 没问题 */}
			<Mark x={19060} y={3302} size={90} show={on(K, 7)} />
			{/* 8：测试用另一套独立的 case */}
			<Card x={19600 - 290} y={3560 - 174} w={580} h={348} band={SLATE} bandH={76} radius={18} show={on(K, 8)}>
				{[460, 435, 282].map((w, i) => <div key={w} style={{ position: 'absolute', left: 34, top: 150 + i * 26, width: w, height: 12, borderRadius: 6, background: '#d0d4dc' }} />)}
			</Card>
			<T x={19344} y={3436} fs={42} print weight={800} c="#fff" show={on(K, 8)}>TEST CASES</T>
			<T x={19344} y={3533.8} fs={46} print show={on(K, 8)}>单独存放</T>
			<T x={19344} y={3688.5} fs={46} print c={GREY} show={on(K, 8)}>永远不进 prompt</T>
		</Shift>
	);
}

export const G06: Chapter = {
	stops: [{
		key: K, chapter: '第 2 章 · golden case 长什么样', cam: { cx: 46760, cy: 3866, z: 0.8 }, builds: 8, van: { s: e2van(7700) },
		vanAt: { 2: { s: e2van(19100) }, 3: { s: e2van(19100), faceBack: true } }, minimap: false,
	}],
	area: { id: K, bbox: [EP2.dx + 18400, 3240, EP2.dx + 20720, 4200], Render },
};
