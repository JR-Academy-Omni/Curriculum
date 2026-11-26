import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DeckFrame, colors, fonts } from '../kit';
import { StillScope, useStill, ini, Count } from '../live';

const card = { background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 20, padding: '14px 18px', boxShadow: '6px 6px 0 rgba(255,222,89,.92)', display: 'flex', flexDirection: 'column' as const };
const src = (t: string) => <div style={{ marginTop: 'auto', fontSize: 12, color: '#514c48' }}>来源：{t}</div>;

// 1. 应届生招聘，2019 = 100
function HiringBars({ d }: { d: number }) {
	const still = useStill();
	const H = 180;
	const bars = [{ k: '2019', v: 100, c: '#d8d4ce' }, { k: '大厂 2026', v: 35, c: colors.red }, { k: '创业公司 2026', v: 24, c: colors.red }];
	return <div style={card}>
		<div style={{ fontSize: 17, fontWeight: 900 }}>招应届生的数量（2019 = 100）</div>
		<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: H + 62, marginTop: 14 }}>
			{bars.map((b, i) => <div key={b.k} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, width: 90 }}>
				<span style={{ fontSize: 24, fontWeight: 900, color: i ? colors.red : colors.dark }}>{i ? `−${100 - b.v}%` : '100'}</span>
				<motion.div initial={ini(still, { height: 0 })} animate={{ height: (b.v / 100) * H }} transition={{ delay: still ? 0 : d + i * .15, duration: .6, ease: [0.16, 1, 0.3, 1] }}
					style={{ width: 64, background: b.c, border: `2px solid ${colors.dark}`, borderBottom: 'none', borderRadius: '10px 10px 0 0' }} />
				<span style={{ fontSize: 13, fontWeight: 800, textAlign: 'center' }}>{b.k}</span>
			</div>)}
		</div>
		{src('SignalFire State of Talent 2026')}
	</div>;
}

// 2. 应届失业率 2022 → 2024
function Unemployment({ d }: { d: number }) {
	const still = useStill();
	const W = 250, H = 180, MAX = 9;
	const y = (v: number) => H - (v / MAX) * H;
	const lines = [{ k: '计算机工程', a: 2.3, b: 7.8, c: colors.red }, { k: '计算机科学', a: 4.3, b: 7.0, c: colors.orange }];
	return <div style={card}>
		<div style={{ fontSize: 17, fontWeight: 900 }}>美国应届毕业生失业率</div>
		<svg width={W + 80} height={H + 40} style={{ marginTop: 10, overflow: 'visible' }} role="img" aria-label="计算机工程从 2.3% 升到 7.8%，计算机科学从 4.3% 升到 7.0%">
			{[0, 3, 6, 9].map(t => <g key={t}><line x1={30} x2={W} y1={y(t)} y2={y(t)} stroke="rgba(16,22,47,.12)" /><text x={0} y={y(t) + 4} fontSize={11} fill="#514c48">{t}%</text></g>)}
			<text x={40} y={H + 22} fontSize={13} fontWeight={700}>2022</text><text x={W - 30} y={H + 22} fontSize={13} fontWeight={700}>2024</text>
			{lines.map((l, i) => <g key={l.k}>
				<motion.line x1={50} y1={y(l.a)} x2={W - 20} y2={y(l.b)} stroke={l.c} strokeWidth={4} strokeLinecap="round"
					initial={ini(still, { pathLength: 0 })} animate={{ pathLength: 1 }} transition={{ delay: still ? 0 : d + i * .2, duration: .7 }} />
				<circle cx={50} cy={y(l.a)} r={5} fill={l.c} /><circle cx={W - 20} cy={y(l.b)} r={6} fill={l.c} />
				<text x={W - 4} y={y(l.b) + (i ? 18 : -8)} fontSize={15} fontWeight={900} fill={l.c}>{l.b}%</text><text x={W - 4} y={y(l.b) + (i ? 34 : 8)} fontSize={12} fontWeight={700} fill={l.c}>{l.k}</text>
			</g>)}
		</svg>
		{src('纽约联储 College Labor Market，2024 年数据')}
	</div>;
}

// 3. 新招的人里应届生占比
function Donut({ d }: { d: number }) {
	const still = useStill();
	const R = 70, C = 2 * Math.PI * R;
	return <div style={card}>
		<div style={{ fontSize: 17, fontWeight: 900 }}>大厂新招的人里，应届生占</div>
		<div style={{ position: 'relative', width: 180, height: 180, margin: '10px auto 0' }}>
			<svg width={180} height={180} viewBox="0 0 180 180" style={{ transform: 'rotate(-90deg)' }}>
				<circle cx={90} cy={90} r={R} fill="none" stroke="#e8e4de" strokeWidth={26} />
				<motion.circle cx={90} cy={90} r={R} fill="none" stroke={colors.red} strokeWidth={26} strokeDasharray={C}
					initial={ini(still, { strokeDashoffset: C })} animate={{ strokeDashoffset: C * (1 - .07) }} transition={{ delay: still ? 0 : d, duration: .8 }} />
			</svg>
			<div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
				<span style={{ fontSize: 44, fontWeight: 900, color: colors.red, lineHeight: 1 }}><Count value={7} />%</span>
				<span style={{ fontSize: 13, fontWeight: 700, color: '#514c48' }}>其余 93% 有经验</span>
			</div>
		</div>
		{src('SignalFire State of Talent 2025')}
	</div>;
}

// 4. 软件开发新增岗位的构成
function SeniorBar({ d }: { d: number }) {
	const still = useStill();
	return <div style={card}>
		<div style={{ fontSize: 17, fontWeight: 900 }}>软件开发近一年新增的岗位</div>
		<div style={{ display: 'flex', height: 54, marginTop: 22, border: `2px solid ${colors.dark}`, borderRadius: 12, overflow: 'hidden' }}>
			<motion.div initial={ini(still, { width: '0%' })} animate={{ width: '71%' }} transition={{ delay: still ? 0 : d, duration: .7 }}
				style={{ background: colors.dark, color: colors.white, display: 'flex', alignItems: 'center', paddingLeft: 12, fontSize: 18, fontWeight: 900, whiteSpace: 'nowrap' }}>资深 71%</motion.div>
			<div style={{ flex: 1, background: '#f4f1ec', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800 }}>其他 29%</div>
		</div>
		<div style={{ fontSize: 15, lineHeight: 1.5, marginTop: 14 }}>岗位在回来，回来的是有经验、能直接交付的人。</div>
		<div style={{ fontSize: 15, lineHeight: 1.5, marginTop: 6 }}>澳洲毕业生岗位已<b>连续三年减少</b>。</div>
		{src('Indeed Hiring Lab 2026-07；Indeed Australia 2026-04')}
	</div>;
}

function Body() {
	const still = useStill();
	const [open, setOpen] = useState(still);
	return <div>
		<motion.div layout style={{ background: colors.dark, color: colors.white, borderRadius: 22, boxShadow: `8px 8px 0 ${colors.red}`, padding: open ? '14px 26px' : '44px 30px', display: 'flex', alignItems: 'center', gap: 24 }}>
			<div style={{ flex: 1 }}>
				<div style={{ fontSize: open ? 18 : 30, fontWeight: 800, color: '#d8d8dd' }}>今年毕业、学计算机，能找到工作吗？</div>
				{open && <motion.div initial={ini(still, { opacity: 0, y: 10 })} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginTop: 4 }}>不用等到 2027，<span style={{ color: colors.yellow }}>现在入门岗就已经少了一大半。</span></motion.div>}
			</div>
			{!open && <button type="button" className="live-toggle" onClick={() => setOpen(true)} style={{ fontFamily: fonts.body, fontSize: 24, fontWeight: 900, padding: '14px 28px', borderRadius: 999, border: `3px solid ${colors.white}`, background: colors.red, color: colors.white, cursor: 'pointer' }}>揭晓答案</button>}
		</motion.div>
		<AnimatePresence>
			{open && <motion.div initial={ini(still, { opacity: 0 })} animate={{ opacity: 1 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr .95fr 1fr', gap: 14, marginTop: 18, height: 380 }}>
				<HiringBars d={still ? 0 : .3} />
				<Unemployment d={still ? 0 : .5} />
				<Donut d={still ? 0 : .7} />
				<SeniorBar d={still ? 0 : .9} />
			</motion.div>}
		</AnimatePresence>
	</div>;
}

export default function C07e_GradJobs() {
	return <DeckFrame tag="01 · Junior 还有工作吗" title="毕业生有工作吗？" accent={colors.red}>
		<StillScope><Body /></StillScope>
	</DeckFrame>;
}
