import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { PartFrame, card, line, muted, softShadow } from './_shared';
import { weeks, stages, type Week } from '../../data/footprint';

// 足迹地图（讲师 2026-10-27 要求：复习先看学到哪，再做概念测试）。
// 两排各 6 站；学过的打勾并写一个问题 + 关键词，本周「你在这里」，后面只写课名
const bgOf = (s: Week['status']) => (s === 'here' ? colors.yellow : s === 'done' ? colors.white : '#f6efe9');

function StopCard({ wk, i }: { wk: Week; i: number }) {
	const here = wk.status === 'here';
	const later = wk.status === 'later';
	return (
		<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: later ? 0.45 : 1, y: 0 }} transition={{ duration: 0.3, delay: 0.12 + i * 0.06 }}
			style={{ ...card, background: bgOf(wk.status), minHeight: 228, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8, position: 'relative',
				...(here ? { borderWidth: 3, boxShadow: `6px 6px 0 ${colors.dark}` } : wk.status === 'done' ? { boxShadow: softShadow } : {}) }}>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<span style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700 }}>W{wk.w}</span>
				{wk.status === 'done' && <span style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, background: colors.green, borderRadius: radii.pill, width: 36, height: 36, display: 'grid', placeItems: 'center' }}>✓</span>}
				{wk.status === 'next' && <span style={{ fontSize: 16, fontWeight: 800, border: line, borderRadius: radii.pill, padding: '1px 10px' }}>下一站</span>}
			</div>
			<div style={{ fontSize: 21, fontWeight: 900, lineHeight: 1.25 }}>{wk.title}</div>
			{wk.q && <div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.35, color: here ? colors.black : muted }}>{wk.q}</div>}
			{wk.keys && (
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 'auto' }}>
					{wk.keys.map((k) => <span key={k} style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, background: '#f3ece6', borderRadius: radii.label, padding: '2px 8px' }}>{k}</span>)}
				</div>
			)}
			{here && <div style={{ marginTop: 'auto', fontSize: 22, fontWeight: 900 }}>📍 你在这里</div>}
		</motion.div>
	);
}

export default function S02_Footprint() {
	const rows = [weeks.slice(0, 6), weeks.slice(6)];
	return (
		<PartFrame part="frame" title="我们走到哪了" titleSize={50}>
			<div style={{ display: 'grid', gap: 14 }}>
				{rows.map((row, r) => (
					<div key={r} style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
						{row.map((wk, i) => <StopCard key={wk.w} wk={wk} i={r * 6 + i} />)}
					</div>
				))}
			</div>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.9 }}
				style={{ display: 'flex', gap: 14, marginTop: 14, fontSize: 19, fontWeight: 800, color: muted }}>
				{stages.map((s) => <span key={s.zh} style={{ border: line, borderRadius: radii.pill, padding: '3px 14px', background: colors.white }}>W{s.from}–W{s.to}：{s.zh}</span>)}
			</motion.div>
		</PartFrame>
	);
}
