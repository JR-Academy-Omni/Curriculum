import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, Title, CountUp, colors, fonts, border } from '../ui';
import { GLOBAL_AI_ENGINEER as G, SALARY_DISCLAIMER } from '../../data/aiSalaries';

// 全球 AI Engineer Total Compensation 参考 —— 悬停某个国家放大查看；澳洲卡标“你在这里”承接上一页
export default function S14_GlobalSalary() {
	const [hover, setHover] = useState<string | null>(null);
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '100%', height: '100%', padding: '44px 64px 54px', display: 'flex', flexDirection: 'column', color: colors.white }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 3 }}>
						<span style={{ width: 48, height: 8, background: colors.yellow }} />{G.kicker}
					</div>
					<Title white size="52px" style={{ margin: '14px 0 10px' }}>{G.headline}</Title>
					<p style={{ fontSize: 20, opacity: 0.8, margin: 0 }}>{G.sub}</p>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: `repeat(${G.items.length}, 1fr)`, gap: 16, margin: '48px 0 40px' }}>
					{G.items.map((c, i) => (
						<motion.div key={c.country}
							onMouseEnter={() => setHover(c.country)} onMouseLeave={() => setHover(null)}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: hover && hover !== c.country ? 0.45 : 1, y: hover === c.country ? -10 : 0, scale: hover === c.country ? 1.06 : 1 }}
							transition={hover === null ? { type: 'spring', stiffness: 200, damping: 16, delay: 0.25 + i * 0.1 } : { duration: 0.2 }}
							style={{ position: 'relative', background: colors.white, color: colors.black, border, boxShadow: `6px 6px 0px ${colors[c.color]}`, padding: '28px 20px 30px', cursor: 'default' }}>
							{c.home && (
								<span style={{ position: 'absolute', top: -14, right: 10, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, padding: '2px 8px', background: colors.yellow, border: `2px solid ${colors.black}`, transform: 'rotate(3deg)' }}>你在这里</span>
							)}
							<div style={{ fontSize: 48, lineHeight: 1 }}>{c.flag}</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, margin: '20px 0 14px' }}>{c.country}</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 29, fontWeight: 700, color: colors.red, whiteSpace: 'nowrap' }}>
								{c.currency} <CountUp value={c.value} duration={1.1} />K
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, marginTop: 12, opacity: 0.7, whiteSpace: 'nowrap' }}>参考区间 {c.range}</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 1 }}
					style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '20px 26px', border: `3px solid ${colors.white}`, boxShadow: `6px 6px 0px ${colors.yellow}` }}>
					<span style={{ flex: 'none', fontSize: 20, fontWeight: 900, padding: '8px 18px', background: colors.yellow, color: colors.black, border: `2px solid ${colors.black}` }}>{G.noteTitle}</span>
					<p style={{ fontSize: 19, lineHeight: 1.55, margin: 0 }}>{G.note}</p>
				</motion.div>

				<div style={{ marginTop: 'auto', display: 'flex', alignItems: 'baseline', gap: 16, marginRight: 96 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 12, opacity: 0.6 }}>{G.source}</span>
					<span style={{ marginLeft: 'auto', fontSize: 15, fontWeight: 700, color: colors.yellow, whiteSpace: 'nowrap' }}>{SALARY_DISCLAIMER}</span>
				</div>
			</div>
		</Slide>
	);
}
