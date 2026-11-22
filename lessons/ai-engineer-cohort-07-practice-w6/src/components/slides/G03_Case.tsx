import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Card, Ink, Arrow, Ring, Mark, Move, Shift, Hi, Swipe, Tag, Pill, Disc, MarkGlyph, Fill, cloudPath, INK, RED, BLUE, GREY, ACCENT, PAPER } from '../world/prims';
import { Checklist, NAVY } from '../world/checklist';
import { EP2, e2van } from '../world/layout';

// 案例区（舞台）：第 16–23 页在这里搭出 case 017 的正面 / 背面 / 清单 A；
// 第 3 章（第 31–44 页）回到同一块板上原地跑一次 test run。局部坐标写好，整体右移 EP2.dx。
// 第 4 章开头（runit）时舞台静默复原成起始板（不单独占页）。

const CORAL = '#e0705a';
const SLATE = '#3d4a5c';
const SKY = '#4fa3e0';
const SAGE = '#6f9c7c';
const PLUM = '#7d4e7a';
const CREAM = '#fff6dc';

const rrect = (x0: number, y0: number, x1: number, y1: number, r: number) =>
	`M ${x0 + r} ${y0} H ${x1 - r} Q ${x1} ${y0} ${x1} ${y0 + r} V ${y1 - r} Q ${x1} ${y1} ${x1 - r} ${y1} H ${x0 + r} Q ${x0} ${y1} ${x0} ${y1 - r} V ${y0 + r} Q ${x0} ${y0} ${x0 + r} ${y0} Z`;

/** 三次曲线箭头（第 38 页的弯箭头） */
function CArrow({ d, end, prev, show, c = BLUE, w = 7, delay = 0, head = 26 }: { d: string; end: [number, number]; prev: [number, number]; show: boolean; c?: string; w?: number; delay?: number; head?: number }) {
	const a = Math.atan2(end[1] - prev[1], end[0] - prev[0]);
	const hx = (k: number) => end[0] - head * Math.cos(a + k), hy = (k: number) => end[1] - head * Math.sin(a + k);
	return <>
		<Ink d={d} show={show} c={c} w={w} delay={delay} />
		<Ink d={`M ${hx(0.45)} ${hy(0.45)} L ${end[0]} ${end[1]} L ${hx(-0.45)} ${hy(-0.45)}`} show={show} c={c} w={w} delay={delay + 0.45} duration={0.2} />
	</>;
}

/** 一闪而过的荧光（出现、停一下、消失；打印时不画） */
function Flash({ x0, y0, x1, y1, on, delay = 0, hold = 1.6 }: { x0: number; y0: number; x1: number; y1: number; on: boolean; delay?: number; hold?: number }) {
	const { isStatic, reduced, lag } = useBeat();
	if (isStatic || !on) return null;
	return <motion.div style={{ position: 'absolute', left: x0, top: y0, width: x1 - x0, height: y1 - y0, background: ACCENT, mixBlendMode: 'multiply', borderRadius: 14, pointerEvents: 'none' }}
		initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }}
		transition={{ duration: reduced ? 0.01 : hold + 0.8, times: [0, 0.2, 0.75, 1], delay: reduced ? 0 : delay + lag }} />;
}

/** 印刷卡片：左上角 (x, y)，带色带标题 */
function PCard({ x, y, w, h, band, bandH = 76, show, delay = 0, bg = PAPER, rim = INK, children }: { x: number; y: number; w: number; h: number; band?: string; bandH?: number; show: boolean; delay?: number; bg?: string; rim?: string; children?: ReactNode }) {
	return <Card x={x} y={y} w={w} h={h} band={band} bandH={bandH} show={show} delay={delay} bg={bg} style={{ borderColor: rim }}>{children}</Card>;
}

/** 分数磁贴（深色石板）：中心 (cx, cy)，宽高 w × h，三行文字的基线与字号 */
function ScoreMagnet({ cx, cy, w, h, show, delay = 0, title, illus, children }: { cx: number; cy: number; w: number; h: number; show: boolean; delay?: number; title: [number, number]; illus: [number, number]; children: ReactNode }) {
	return <>
		<Card x={cx - w / 2} y={cy - h / 2} w={w} h={h} show={show} delay={delay} bg={SLATE} />
		<T x={cx} y={title[0]} fs={title[1]} print align="center" c="#cfd5df" weight={800} show={show} delay={delay + 0.15}>eval 得分</T>
		{children}
		<T x={cx} y={illus[0]} fs={illus[1]} print align="center" c="#9aa3b2" weight={600} show={show} delay={delay + 0.15}>示例</T>
	</>;
}

function VanIcon({ x, y, w = 75 }: { x: number; y: number; w?: number }) {
	return <svg width={w} height={w * 0.42} viewBox="-145 -140 290 140" style={{ position: 'absolute', left: x - w / 2, top: y - w * 0.21 }}>
		<path d="M -140 -26 L -140 -128 L 62 -136 L 112 -84 L 142 -70 L 142 -26 Z" fill="#fff" />
		<circle cx={-86} cy={-24} r={24} fill="#fff" /><circle cx={90} cy={-24} r={24} fill="#fff" />
	</svg>;
}

/** 车顶上的记录片（第 33 页） */
function Chip({ cy, label, icon, show, delay = 0 }: { cy: number; label: string; icon: ReactNode; show: boolean; delay?: number }) {
	return <El x={9205 - 170} y={cy - 31.5} w={340} h={63} show={show} anim="drop" delay={delay}
		style={{ background: PAPER, border: `4px solid ${NAVY}`, borderRadius: 12, boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 12, padding: '0 14px', fontWeight: 800, fontSize: 36, whiteSpace: 'nowrap', color: INK }}>
		<span style={{ display: 'inline-flex', width: 40, justifyContent: 'center', fontSize: 30, color: NAVY }}>{icon}</span>{label}
	</El>;
}

/** 评分器的三个块（第 37 页） */
function GraderChip({ cx, tile, label, glyph, show, delay = 0 }: { cx: number; tile: string; label: string; glyph: ReactNode; show: boolean; delay?: number }) {
	return <El x={cx - 165} y={4105 - 112.5} w={330} h={225} show={show} anim="drop" delay={delay}
		style={{ background: PAPER, border: `4px solid ${SLATE}`, borderRadius: 18, boxSizing: 'border-box' }}>
		<div style={{ position: 'absolute', left: 165 - 64 - 4, top: 4017 - (4105 - 112.5) - 4, width: 128, height: 128, borderRadius: 16, background: tile, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 45 }}>{glyph}</div>
		<div style={{ position: 'absolute', left: 0, right: 0, top: 4195.9 - (4105 - 112.5) - 46 * 0.8 - 4, textAlign: 'center', fontWeight: 800, fontSize: 46, lineHeight: 1, whiteSpace: 'nowrap' }}>{label}</div>
	</El>;
}

const SCALES = <svg width={84} height={84} viewBox="-42 -42 84 84"><g stroke="#fff" strokeWidth={5} fill="none" strokeLinecap="round"><line x1={0} y1={-30} x2={0} y2={30} /><line x1={-30} y1={-20} x2={30} y2={-20} /><path d="M -30 -20 L -40 6 A 10 6 0 0 0 -20 6 Z" /><path d="M 30 -20 L 20 6 A 10 6 0 0 0 40 6 Z" /><line x1={-16} y1={30} x2={16} y2={30} /></g></svg>;
const PERSON = <svg width={84} height={84} viewBox="-42 -42 84 84"><circle cx={0} cy={-16} r={15} fill="#fff" /><path d="M -28 34 Q -28 4 0 4 Q 28 4 28 34 Z" fill="#fff" /></svg>;

/** 案例 tile（案例 017 · ✓ ✗ ✓），中心 (cx, cy) */
function CaseTile({ cx, cy, show, delay = 0 }: { cx: number; cy: number; show: boolean; delay?: number }) {
	return <El x={cx - 112} y={cy - 93} w={224} h={186} show={show} anim="pop" delay={delay}
		style={{ background: PAPER, border: `6px solid ${SLATE}`, borderRadius: 16, boxSizing: 'border-box' }}>
		<div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontWeight: 800, fontSize: 45, lineHeight: 1, whiteSpace: 'nowrap' }}>案例 017</div>
		{(['tick', 'cross', 'tick'] as const).map((k, i) => <div key={i} style={{ position: 'absolute', left: 38 + i * 68, top: 100, width: 0, height: 0 }}><MarkGlyph kind={k} size={44} /></div>)}
	</El>;
}

// 正面卡的四行（第 17 页；第 3 章时整张卡下移 150）
const FRONT_ROWS = ['邮件：「转账手续费太高了」', '付款批次 PB-1001 · 30 笔转账', '发票 INV-2001', '合同 C-2024-01'];
const FRONT_BASE = [3281.3, 3333.5, 3385.7, 3437.9];
// 背面卡、答案卡的三行（名 / 值）
const ROW_BASE = [3281.3, 3333.5, 3385.7, 3437.9];
// 第 39–40 页：缝隙里的 ✓ 和横条的 y 范围
const GAP_Y: [number, number][] = [[3251, 3299], [3303, 3351], [3355, 3403], [3408, 3455]];

function Render() {
	const { on, during, lag } = useBeat();
	const restored = on('runit'); // 第 4 章：舞台复原
	const stage = (from: [string, number?]) => on(from[0], from[1] ?? 0) && !restored; // 第 3 章舞台上的东西，复原时清掉
	const frontDy = on('inputin') && !restored ? 150 : 0;
	const backDx = on('follow', 1) && !restored ? 1180 : 0;
	const clHidden = on('follow', 1) && !restored;

	// 答案卡的值（第 36 页起；run 2 先擦掉再写 $540.00；run 3 改回 $564.30）
	const valsRun1 = during(['reply', 2], ['run2', 1]);
	const valsRun2 = stage(['run2', 3]);
	const credit564 = valsRun1 || stage(['run3', 1]);
	const credit540 = during(['run2', 3], ['run3', 1]);

	return (
		<Shift dx={EP2.dx} dy={EP2.dy}>
			{/* ── 第 16 页：agent 的行李牌、客户邮件 ── */}
			<Tag cx={7690} cy={3880} w={267} text="agent" tie={[7660, 4190]} show={during(['complaint', 1], ['suspects', 1])} delay={0.9} />
			<PCard x={9150 - 320} y={3220 - 145} w={640} h={290} band={SKY} show={during(['complaint', 2], ['front', 1])}>
				<div style={{ position: 'absolute', left: 22, top: 20, width: 46, height: 32, border: '4px solid #fff', borderRadius: 4, boxSizing: 'border-box' }}>
					<div style={{ position: 'absolute', left: 3, top: -6, width: 30, height: 22, borderRight: '4px solid #fff', borderBottom: '4px solid #fff', transform: 'rotate(45deg) scaleY(.7)' }} />
				</div>
			</PCard>
			<T x={8938} y={3125} fs={36} print c="#fff" weight={800} show={during(['complaint', 2], ['front', 1])} delay={0.2}>邮件</T>
			<T x={9438} y={3125} fs={32} print c="#fff" align="right" show={during(['complaint', 2], ['front', 1])} delay={0.2}>来自：客户</T>
			<El x={8850} y={3185} w={600} h={110} show={during(['complaint', 2], ['front', 1])} delay={0.35} anim="pop"
				style={{ background: '#eef6fd', border: `4px solid ${SKY}`, borderRadius: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38, fontWeight: 700, whiteSpace: 'nowrap', fontStyle: 'italic' }}>
				转账手续费太高了！
			</El>

			{/* ── 正面卡（第 17 页）：第 3 章起下移 150，标签 / 圈 / 箭头一起动 ── */}
			<Move dy={frontDy} delay={-lag * 0.7} duration={0.8}>
				<PCard x={8060} y={3142.5} w={720} h={555} band={NAVY} show={on('front', 1)} />
				<T x={8094} y={3192.5} fs={36} print c="#fff" weight={800} show={on('front', 1)} delay={0.2}>案例 017 · 正面</T>
				{FRONT_ROWS.map((r, i) => <T key={r} x={8094} y={FRONT_BASE[i]} fs={i < 2 ? 34 : 36} print show={on('front', 1)} delay={0.7 + i * 0.3}>{r}</T>)}
				<T x={8746} y={3675.7} fs={28} print c={GREY} align="right" show={on('front', 1)} delay={0.2}>示例</T>
				<Ink d={rrect(8076, 3243, 8768, 3462, 34)} c={RED} w={7} show={on('front', 2)} />
				<Arrow from={[8420, 3134]} to={[8420, 3072]} c={RED} w={7} head={22} show={on('front', 2)} delay={0.5} />
				<T x={8420} y={3052} h={62} align="center" c={BLUE} show={on('front', 2)} delay={0.8}>INPUT</T>
				{/* 第 33 页：输入一行一行交给 agent（荧光划线） */}
				{FRONT_BASE.map((b, i) => <Hi key={b} x0={8086} y0={b - 30} x1={8086 + [441, 472, 260, 290][i]} y1={b + 9} show={stage(['inputin', 2 + i])} />)}
			</Move>

			{/* ── 背面卡（第 18 页）：第 32 页起右移 1180，标签 / 圈 / 签名一起动 ── */}
			<Move dx={backDx} duration={1}>
				<PCard x={8960} y={3142.5} w={720} h={555} band={CORAL} show={on('back', 1)} />
				<T x={8994} y={3192.5} fs={36} print c="#fff" weight={800} show={on('back', 1)} delay={0.2}>案例 017 · 背面</T>
				{[['结论', '客户有理'], ['退款', '$564.30'], ['转交', '账务团队']].map(([n, v], i) => <div key={n}>
					<T x={8994} y={ROW_BASE[i]} fs={36} print show={on('back', 1)} delay={0.35}>{n}</T>
					<T x={9646} y={ROW_BASE[i]} fs={36} print align="right" weight={700} show={on('back', 1)} delay={0.35}>{v}</T>
				</div>)}
				<El x={8994} y={3408} w={652} h={3} show={on('back', 1)} delay={0.35} style={{ background: '#c3c7d0' }} />
				<T x={8994} y={3464} fs={36} print show={on('back', 1)} delay={0.45}>误差 ±$0.01 以内</T>
				<T x={8994} y={3516.2} fs={36} print show={on('back', 1)} delay={0.45}>理由须引用费率条款 C-1</T>
				<El x={8994} y={3539} w={652} h={3} show={on('back', 1)} delay={0.45} style={{ background: '#c3c7d0' }} />
				<T x={8994} y={3605.3} fs={36} print c={GREY} show={on('back', 1)} delay={0.5}>核对人</T>
				<El x={9194} y={3607} w={452} h={4} show={on('back', 1)} delay={0.5} style={{ background: INK }} />
				<Ink d={rrect(8976, 3243, 9658, 3408, 30)} c={RED} w={7} show={on('back', 2)} />
				<Arrow from={[9320, 3134]} to={[9320, 3072]} c={RED} w={7} head={22} show={on('back', 2)} delay={0.5} />
				<T x={9320} y={3052} h={62} align="center" c={BLUE} show={on('back', 2)} delay={0.8}>EXPECTED OUTPUT</T>
				<Ink d={rrect(8976, 3430, 9528, 3538, 26)} c={RED} w={7} show={on('back', 3)} />
				<Arrow from={[9538, 3484]} to={[9722, 3474]} c={RED} w={7} head={22} show={on('back', 3)} delay={0.5} />
				<T x={9740} y={3470} h={56} c={BLUE} show={on('back', 3)} delay={0.8}>GRADING</T>
				<T x={9740} y={3540} h={56} c={BLUE} show={on('back', 3)} delay={1.0}>CRITERIA</T>
				{/* 第 19 页：对 agent 不可见；签名 */}
				<T x={9350} y={3797.7} h={50} align="center" c={RED} show={on('rules', 2)} delay={0.9}>不给 agent 看</T>
				<Swipe x0={9198} x1={9464} y={3600} h={62} show={on('suspects', 3)} />
				<Ink d="M 9210 3598 C 9222 3556, 9240 3556, 9246 3594 S 9268 3626, 9284 3586 S 9306 3556, 9318 3598 S 9346 3622, 9362 3582 S 9392 3566, 9398 3600 S 9428 3612, 9440 3588" c={INK} w={5} show={on('rules', 3)} duration={0.8} />
				<T x={9214} y={3659} h={36} c={BLUE} show={on('rules', 3)} delay={0.8}>账务主管</T>
				<Mark x={9576} y={3587} size={50} show={on('rules', 3)} delay={1.2} />
			</Move>

			{/* 第 19 页：两条视线（下一页到达时擦掉） */}
			<Ink d="M 7835 4225 L 8360 3708" c={BLUE} w={6} dash="18 14" show={during(['rules', 1], ['drop'])} />
			<Ink d="M 7835 4225 L 9020 3708" c={BLUE} w={6} dash="18 14" show={during(['rules', 2], ['drop'])} />
			<Mark x={8570} y={3904} size={60} kind="cross" show={during(['rules', 2], ['drop'])} delay={0.4} />

			{/* ── 第 20 页：分数掉了（92% → 78%）── */}
			<ScoreMagnet cx={10000} cy={3190} w={460} h={310} show={during(['drop', 1], ['five'])} title={[3097, 38]} illus={[3323, 28]}>
				<T x={10000} y={3260} fs={140} print align="center" c="#fff" weight={800} anim="pop" show={during(['drop', 1], ['drop', 2])} delay={0.3}>92%</T>
				<T x={10000} y={3260} fs={140} print align="center" c="#fff" weight={800} anim="pop" show={during(['drop', 2], ['five'])}>78%</T>
			</ScoreMagnet>
			<Arrow from={[10290, 3065]} to={[10292, 3335]} c={RED} w={9} show={during(['drop', 2], ['five'])} delay={0.2} />

			{/* ── 第 21 页：两个嫌疑人 ── */}
			<Tag cx={7760} cy={3880} w={338} text="嫌疑" tie={[7660, 4190]} show={during(['suspects', 1], ['five'])} delay={0.3} />
			<Tag cx={10160} cy={4080} w={338} text="嫌疑" tie={[9682, 3530]} show={during(['suspects', 2], ['five'])} dim={on('suspects', 3) ? 0.4 : 1} />
			<Ring cx={7700} cy={4228} rx={155} ry={102.5} c={RED} w={9} show={during(['suspects', 4], ['five'])} />

			{/* ── 第 22 页：专家的时间要计划 ── */}
			<PCard x={10030 - 150} y={3690 - 135} w={300} h={270} show={during(['cost', 1], ['five'])}>
				<div style={{ position: 'absolute', left: 150 - 62 - 5, top: 22, width: 124, height: 124, borderRadius: '50%', border: `9px solid ${NAVY}`, boxSizing: 'border-box' }}>
					<div style={{ position: 'absolute', left: 49, top: 18, width: 8, height: 40, background: NAVY, borderRadius: 4 }} />
					<div style={{ position: 'absolute', left: 51, top: 50, width: 34, height: 8, background: NAVY, borderRadius: 4 }} />
				</div>
			</PCard>
			<T x={10030} y={3793} fs={40} print align="center" c={NAVY} weight={800} show={during(['cost', 1], ['five'])} delay={0.2}>专家时间</T>
			<T x={9940} y={3925} h={70} c={BLUE} show={during(['cost', 2], ['five'])}>计划</T>
			<Ink d="M 9930 3942 L 10130 3936" c={BLUE} w={7} show={during(['cost', 2], ['five'])} delay={0.5} />

			{/* ── 第 23 页：三个部分 + 两条规则 → 清单 A ── */}
			<Flash x0={8250} y0={2990} x1={8590} y1={3070} on={during(['five', 1], ['five', 2])} />
			<Flash x0={8900} y0={2990} x1={9740} y1={3070} on={during(['five', 1], ['five', 2])} delay={0.8} />
			<Flash x0={9730} y0={3405} x1={10080} y1={3560} on={during(['five', 1], ['five', 2])} delay={1.6} />
			<Flash x0={9190} y0={3560} x1={9620} y1={3630} on={during(['five', 1], ['five', 2])} delay={2.4} />
			<Flash x0={9080} y0={3750} x1={9620} y1={3815} on={during(['five', 1], ['five', 2])} delay={2.4} />
			<Checklist X={10500} Y={3480} show={on('five', 2) && !clHidden}
				rows={[0, 1, 2, 3, 4].map(i => on('five', 3 + i) && !clHidden)} />

			{/* ══ 第 3 章 ══ */}
			{/* 第 31 页：起始板上的回顾标签（离开时移除） */}
			<Pill cx={8700} cy={2905} fs={40} h={68} bg={SKY} show={during(['start'], ['follow'])}>回顾 · 第 2 章</Pill>
			{/* 第 32 页：agent 到场，行李牌 */}
			<Tag cx={9510} cy={3900} w={265} text="agent" tie={[9330, 4170]} show={stage(['follow', 2])} delay={1.2} />

			{/* 第 33 页：输入交给 agent：蓝箭头 + 车顶四张记录片 */}
			<Arrow from={[8800, 3700]} to={[9060, 4000]} c={BLUE} w={8} show={stage(['inputin', 1])} />
			<Chip cy={4132.5} label="邮件" icon="💬" show={stage(['inputin', 2])} delay={0.3} />
			<Chip cy={4065.5} label="付款批次" icon="☰" show={stage(['inputin', 3])} delay={0.3} />
			<Chip cy={3998.5} label="发票" icon={<b>$</b>} show={stage(['inputin', 4])} delay={0.3} />
			<Chip cy={3931.5} label="合同" icon={<span style={{ color: RED }}>●</span>} show={stage(['inputin', 5])} delay={0.3} />

			{/* 第 34–35 页：思考气泡（发票、合同、应付、差额） */}
			<Thought show={during(['reads', 1], ['reply', 1])} />
			<T x={8972} y={3236} fs={30} print c={GREY} show={during(['reads', 1], ['reply', 1])} delay={0.4} dim={on('due', 2) ? 0.25 : 1}>思考中…</T>
			<BubbleBox x0={8971} y0={3263} x1={10080} y1={3404} show={during(['reads', 2], ['reply', 1])} />
			<Calc y={3319} show={during(['reads', 2], ['reply', 1])} label="发票：" a="$57 × 30 笔" b="= 1,710.00" delay={0.2} />
			<Calc y={3375.8} show={during(['reads', 2], ['reply', 1])} a="+ 附加费 4.5%" b="76.95" c="= 收取 1,786.95" delay={0.8} />
			<BubbleBox x0={8971} y0={3412} x1={10050} y1={3495} show={during(['reads', 3], ['reply', 1])} />
			<T x={8992} y={3468.7} fs={38} print show={during(['reads', 3], ['reply', 1])} delay={0.2}>合同：C-1 每笔 $39 · C-5 附加费 4.5%</T>
			<BubbleBox x0={8971} y0={3506} x1={10080} y1={3644} show={during(['due', 1], ['reply', 1])} />
			<Calc y={3561.6} show={during(['due', 1], ['reply', 1])} label="应付：" a="$39 × 30 笔" b="= 1,170.00" delay={0.2} />
			<Calc y={3618.3} show={during(['due', 1], ['reply', 1])} a="+ 附加费 4.5%" b="52.65" c="= 1,222.65" delay={0.8} />
			<BubbleBox x0={8971} y0={3655} x1={9720} y1={3738} show={during(['due', 2], ['reply', 1])} bg={CREAM} />
			<T x={8992} y={3711.2} fs={38} print weight={800} show={during(['due', 2], ['reply', 1])} delay={0.2}>1,786.95 − 1,222.65 = 多收 $564.30</T>
			<Ring cx={9527} cy={3699} rx={90} ry={44} c={RED} w={7} show={during(['due', 3], ['reply', 1])} />

			{/* 第 36 页：agent 的答案卡（和背面同样的几格） */}
			<PCard x={9300} y={3142} w={720} h={336} band={SLATE} show={stage(['reply', 1])} />
			<T x={9334} y={3192.5} fs={34} print c="#fff" weight={800} show={stage(['reply', 1])} delay={0.2}>agent 的答案</T>
			<El x={9950} y={3206} show={stage(['reply', 1])} delay={0.2}><VanIcon x={0} y={0} /></El>
			{['结论', '退款', '转交', '理由'].map((n, i) => <T key={n} x={9334} y={ROW_BASE[i]} fs={36} print show={stage(['reply', 1])} delay={0.3}>{n}</T>)}
			<Arrow from={[9250, 3876]} to={[9470, 3500]} c={BLUE} w={8} show={stage(['reply', 1])} />
			<Hi x0={10164} y0={3243} x1={10836} y1={3408} show={during(['reply', 1], ['reply', 2])} anim="fade" />
			<T x={9986} y={ROW_BASE[0]} fs={36} print align="right" weight={700} show={valsRun1 || valsRun2} delay={0.1}>客户有理</T>
			<T x={9986} y={ROW_BASE[1]} fs={36} print align="right" weight={700} show={credit564} delay={0.4}>$564.30</T>
			<T x={9986} y={ROW_BASE[1]} fs={36} print align="right" weight={700} show={credit540} delay={0.4}>$540.00</T>
			<T x={9986} y={ROW_BASE[2]} fs={36} print align="right" weight={700} show={valsRun1 || valsRun2} delay={0.7}>账务团队</T>
			<T x={9986} y={ROW_BASE[3]} fs={36} print align="right" weight={700} show={valsRun1 || valsRun2} delay={1.0}>C-1 是 $39，收了 $57</T>

			{/* 第 37 页：grader */}
			<PCard x={9700} y={3880} w={1150} h={382} rim={SLATE} show={stage(['grader', 1])} />
			<T x={10275} y={3970.4} fs={64} print align="center" weight={800} show={stage(['grader', 1])} delay={0.2}>grader</T>
			{[9903, 10275, 10647].map(x => <El key={x} x={x - 170} y={3988} w={340} h={240} show={stage(['grader', 1])} delay={0.3} style={{ border: '4px dashed #9aa3b2', borderRadius: 18, boxSizing: 'border-box' }} />)}
			<GraderChip cx={9903} tile={NAVY} label="代码检查" glyph="</>" show={stage(['grader', 2])} />
			<GraderChip cx={10275} tile={PLUM} label="LLM-as-judge" glyph={SCALES} show={stage(['grader', 3])} />
			<GraderChip cx={10647} tile={SAGE} label="人类专家" glyph={PERSON} show={stage(['grader', 4])} />

			{/* 第 38 页：grader 拿到的三样东西 */}
			<CArrow d="M 11098 3570 C 11069 3758, 10930 3846, 10826 3875" end={[10826, 3875]} prev={[10930, 3846]} show={stage(['gets', 1])} />
			<Arrow from={[9820, 3500]} to={[9886, 3875]} c={BLUE} w={7} head={26} show={stage(['gets', 2])} />
			<CArrow d="M 10136 3366 C 10095 3418, 10078 3517, 10084 3875" end={[10084, 3875]} prev={[10078, 3517]} show={during(['gets', 3], ['rows1', 1])} />

			{/* 第 39–40 页：逐行比对 */}
			{GAP_Y.map(([a, b], i) => <Hi key={a} x0={9310} y0={a} x1={10850} y1={b} anim="fade"
				show={i === 0 ? during(['rows1', 1], ['rows1', 2]) : i === 1 ? during(['rows1', 2], ['rows2', 1]) : i === 2 ? during(['rows2', 1], ['rows2', 2]) : false} />)}
			{GAP_Y.map(([a, b], i) => <Mark key={a} x={10086} y={(a + b) / 2} size={56}
				show={during(i === 0 ? ['rows1', 1] : i === 1 ? ['rows1', 2] : i === 2 ? ['rows2', 1] : ['rows2', 2], ['run2', 1])} delay={0.3} />)}
			<Hi x0={10166} y0={3432} x1={10454} y1={3476} show={during(['rows1', 2], ['rows2', 1])} />
			<CArrow d="M 10560 3458 Q 10572 3326, 10686 3322" end={[10686, 3322]} prev={[10572, 3326]} show={during(['rows1', 2], ['run2', 1])} delay={0.3} w={6} head={20} />
			<Hi x0={10166} y0={3484} x1={10574} y1={3528} show={during(['rows2', 2], ['passes'])} />
			<Arrow from={[10132, 3522]} to={[10026, 3458]} c={BLUE} w={6} head={20} show={during(['rows2', 2], ['run2', 1])} delay={0.3} />
			<Ink d="M 9628 3449 L 9690 3449" c={RED} w={5} show={during(['rows2', 2], ['run2', 1])} delay={0.6} />

			{/* 第 41 页：run board，run 1 ✓ */}
			<PCard x={10920} y={3934} w={594} h={274} rim={SLATE} show={stage(['passes', 1])} />
			{/* 中间的「第 2 次」在案例 017 结果 tile 盖上来时收起：中文字比 tile 上沿高，会露出半截 */}
			{[11023, 11217, 11411].map((x, i) => <T key={x} x={x} y={4005.9} fs={46} print align="center" weight={800} show={stage(['passes', 1]) && !(i === 1 && on('run3', 2))} delay={0.2}>{`第 ${i + 1} 次`}</T>)}
			{[11023, 11217, 11411].map(x => <El key={x} x={x - 75} y={4104.6 - 60} w={150} h={140} show={stage(['passes', 1])} delay={0.3} style={{ border: '4px dashed #9aa3b2', borderRadius: 14, boxSizing: 'border-box' }} />)}
			<Flash x0={10040} y0={3248} x1={10132} y1={3460} on={during(['passes', 2], ['twoans'])} hold={0.8} />
			<Disc cx={11023} cy={4100} d={112} kind="tick" anim="slide" from={[-760, -20]} show={during(['passes', 2], ['run3', 2])} delay={0.8} />
			{/* run 2：slot 亮一下、✗ */}
			<Hi x0={11142} y0={4040} x1={11292} y1={4180} anim="fade" show={during(['run2', 2], ['run2', 4])} />
			<Disc cx={11217} cy={4100} d={112} kind="cross" anim="slide" from={[-950, -20]} show={during(['run2', 4], ['run3', 2])} delay={0.9} />
			{/* run 3 ✓ */}
			<Disc cx={11411} cy={4100} d={112} kind="tick" anim="slide" from={[-1140, -20]} show={during(['run3', 1], ['run3', 2])} delay={0.3} />
			{/* case 017 的结果 tile（离开这一页时往上飞走） */}
			<CaseTile cx={11217} cy={4070.9} show={during(['run3', 2], ['passk'])} delay={0.4} />

			{/* 第 42 页：同一个问题，两个答案 */}
			<Pill cx={9050} cy={3330} fs={46} h={81} bg={PAPER} c={INK} show={during(['twoans', 1], ['run2', 1])} style={{ border: `4px solid ${INK}` }}>退款 $564.30</Pill>
			<Pill cx={9050} cy={3450} fs={46} h={81} bg={PAPER} c={INK} show={during(['twoans', 1], ['run2', 1])} style={{ border: `4px solid ${INK}` }}>退款 $540.00</Pill>

			{/* 第 43 页：run 2 漏了 surcharge */}
			<Puff show={during(['run2', 2], ['run2', 3])} />
			<Flash x0={9310} y0={3303} x1={10850} y1={3351} on={during(['run2', 4], ['run3'])} hold={1.8} />
			<Flash x0={10166} y0={3432} x1={10454} y1={3476} on={during(['run2', 4], ['run3'])} hold={1.8} />
			<Ink d="M 9850 3342.5 L 9988 3342.5" c={RED} w={4} show={during(['run2', 4], ['run3', 1])} />
			<Ink d="M 10690 3342.5 L 10828 3342.5" c={RED} w={4} show={during(['run2', 4], ['run3', 1])} delay={0.2} />
			<Mark x={10086} y={3327} size={44} kind="cross" show={during(['run2', 4], ['run3', 1])} delay={0.4} />
		</Shift>
	);
}

/** 第 34 页的思考气泡：云朵 + 从车顶升上来的三个小圈 */
function Thought({ show }: { show: boolean }) {
	return <>
		<Fill d={cloudPath(8900, 3150, 10100, 3815, 56)} show={show} w={6} />
		{[[9238, 3836, 13], [9228, 3862, 9], [9220, 3882, 6]].map(([x, y, r]) => <Fill key={y} d={`M ${x - r} ${y} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`} show={show} w={4} />)}
	</>;
}

/** 第 43 页的小思考云：只算转账费 */
function Puff({ show }: { show: boolean }) {
	return <>
		<Fill d={cloudPath(8850, 3215, 9290, 3660, 40)} show={show} w={6} />
		{[[9150, 3690, 17], [9178, 3768, 12], [9196, 3830, 8], [9204, 3872, 5]].map(([x, y, r]) => <Fill key={y} d={`M ${x - r} ${y} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`} show={show} w={4} />)}
		<T x={8906} y={3285.5} fs={30} print c={GREY} show={show} delay={0.2}>思考中…</T>
		<T x={8926} y={3372.4} fs={42} print show={show} delay={0.3}>只算</T>
		<T x={8926} y={3432} fs={42} print show={show} delay={0.3}>转账费：</T>
		{['1,710.00', '− 1,170.00', '= 540.00'].map((t, i) => <T key={t} x={9250} y={3492 + i * 60} fs={42} print align="right" weight={i === 2 ? 800 : 600} show={show} delay={0.6 + i * 0.3}>{t}</T>)}
	</>;
}

function BubbleBox({ x0, y0, x1, y1, show, bg = '#fffaf0' }: { x0: number; y0: number; x1: number; y1: number; show: boolean; bg?: string }) {
	return <El x={x0} y={y0} w={x1 - x0} h={y1 - y0} show={show} anim="fade" style={{ background: bg, border: '3px solid #d9c9a3', borderRadius: 10 }} />;
}

/** 气泡里的一行算式：标签列 / 算式列 / 右对齐金额列 / 右对齐结果列 */
function Calc({ y, label, a, b, c, show, delay = 0 }: { y: number; label?: string; a: string; b: string; c?: string; show: boolean; delay?: number }) {
	return <>
		{label && <T x={8992} y={y} fs={38} print weight={800} show={show} delay={delay}>{label}</T>}
		<T x={9160} y={y} fs={38} print show={show} delay={delay}>{a}</T>
		<T x={9745} y={y} fs={38} print align="right" show={show} delay={delay + 0.2}>{b}</T>
		{c && <T x={10070} y={y} fs={38} print align="right" weight={800} show={show} delay={delay + 0.4}>{c}</T>}
	</>;
}

const C2 = '第 2 章 · golden case 长什么样';
const C3 = '第 3 章 · 一次 test run';
const CAM_CASE = { cx: e2xCam(8800), cy: 3620, z: 0.7 };
const CAM_AGENT = { cx: e2xCam(8840), cy: 3815, z: 0.75 };
const CAM_ANSWER = { cx: e2xCam(10215), cy: 3751, z: 0.685 };
function e2xCam(x: number) { return x + EP2.dx; }
const V77 = { s: e2van(7700) }, V92 = { s: e2van(9200) };

export const CASE: Chapter = {
	stops: [
		{ key: 'complaint', chapter: C2, cam: CAM_CASE, builds: 2, van: { s: e2van(7200) }, vanAt: { 1: V77 }, minimap: false },
		{ key: 'front', chapter: C2, cam: CAM_CASE, builds: 2, van: V77, minimap: false },
		{ key: 'back', chapter: C2, cam: CAM_CASE, builds: 3, van: V77, minimap: false },
		{ key: 'rules', chapter: C2, cam: CAM_CASE, builds: 3, van: V77, minimap: false },
		{ key: 'drop', chapter: C2, cam: { cx: e2xCam(9190), cy: 3630, z: 0.72 }, builds: 2, van: V77, minimap: false },
		{ key: 'suspects', chapter: C2, cam: { cx: e2xCam(8900), cy: 3640, z: 0.65 }, builds: 4, van: V77, minimap: false },
		{ key: 'cost', chapter: C2, cam: { cx: e2xCam(8900), cy: 3640, z: 0.65 }, builds: 2, van: V77, minimap: false },
		{ key: 'five', chapter: C2, cam: { cx: e2xCam(9470), cy: 3640, z: 0.66 }, builds: 7, van: V77, minimap: false },
	],
	area: { id: 'case', bbox: [34740, 2860, 38900, 4300], Render },
};

export const CASE3: Chapter = {
	stops: [
		{ key: 'start', chapter: C3, cam: { cx: e2xCam(9470), cy: 3640, z: 0.66 }, builds: 0, van: V77, minimap: false },
		{ key: 'follow', chapter: C3, cam: { cx: e2xCam(9650), cy: 3880, z: 0.565 }, builds: 2, van: V77, vanAt: { 2: V92 }, minimap: false },
		{ key: 'inputin', chapter: C3, cam: CAM_AGENT, builds: 5, van: V92, minimap: false },
		{ key: 'reads', chapter: C3, cam: CAM_AGENT, builds: 3, van: V92, minimap: false },
		{ key: 'due', chapter: C3, cam: CAM_AGENT, builds: 3, van: V92, minimap: false },
		{ key: 'reply', chapter: C3, cam: CAM_ANSWER, builds: 2, van: V92, minimap: false },
		{ key: 'grader', chapter: C3, cam: CAM_ANSWER, builds: 4, van: V92, minimap: false },
		{ key: 'gets', chapter: C3, cam: CAM_ANSWER, builds: 3, van: V92, minimap: false },
		{ key: 'rows1', chapter: C3, cam: CAM_ANSWER, builds: 2, van: V92, minimap: false },
		{ key: 'rows2', chapter: C3, cam: CAM_ANSWER, builds: 2, van: V92, minimap: false },
		{ key: 'passes', chapter: C3, cam: CAM_ANSWER, builds: 2, van: V92, minimap: false },
		{ key: 'twoans', chapter: C3, cam: CAM_ANSWER, builds: 1, van: V92, minimap: false },
		{ key: 'run2', chapter: C3, cam: CAM_ANSWER, builds: 4, van: V92, minimap: false },
		{ key: 'run3', chapter: C3, cam: CAM_ANSWER, builds: 2, van: V92, minimap: false },
	],
};
