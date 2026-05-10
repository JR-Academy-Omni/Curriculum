import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface IStat {
	label: string;
	value: string;
	unit?: string;
	source: string;
	color: string;
}

const stats: IStat[] = [
	{ label: '澳洲 Full-Stack + AI 岗位年薪中位数', value: '145', unit: 'K AUD', source: 'SEEK 2026 Q1', color: colors.m4 },
	{ label: '2026 年 AI-coding JD 同比增长', value: '+312', unit: '%', source: 'LinkedIn Tech Trend', color: colors.m7 },
	{ label: '要求 "Cursor / Copilot / Claude Code"', value: '68', unit: '% JDs', source: 'SEEK + Indeed', color: colors.m8 },
	{ label: '能落地 RAG / Agent 的候选人占比', value: '< 8', unit: '%', source: '匠人招聘方调研', color: colors.red },
];

const salaryTiers = [
	{ role: 'Junior Full-Stack (无 AI)', salary: '75K – 95K', color: '#999' },
	{ role: 'Junior Full-Stack + 能用 AI', salary: '95K – 120K', color: colors.m4 },
	{ role: 'Full-Stack + AI 产品落地', salary: '130K – 165K', color: colors.m7 },
	{ role: 'Senior AI Engineer', salary: '180K – 240K', color: colors.red },
];

export default function S04_MarketData() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, padding: '28px 28px', display: 'flex', flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{ display: 'inline-block', padding: '5px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, letterSpacing: 2, border, boxShadow: shadowSm, marginBottom: 12 }}>
						MARKET · 2026 Q1
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '52px', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1.5, margin: 0 }}>
						2026 澳洲就业市场 —{' '}
						<span style={{ display: 'inline-block', padding: '0 12px', background: colors.yellow, border, boxShadow: `5px 5px 0 ${colors.black}`, transform: 'rotate(-1deg)' }}>
							AI 时代的全栈
						</span>{' '}
						是稀缺岗
					</h2>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
					style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 24 }}
				>
					{stats.map((s) => (
						<motion.div
							key={s.label}
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							transition={{ duration: 0.4 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 16px' }}
						>
							<div style={{ fontFamily: fonts.heading, fontSize: '56px', fontWeight: 900, color: s.color, letterSpacing: -2, lineHeight: 1 }}>
								{s.value}
								{s.unit && <span style={{ fontSize: '0.5em', marginLeft: 4, color: colors.black }}>{s.unit}</span>}
							</div>
							<div style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 700, color: colors.black, marginTop: 8, lineHeight: 1.3 }}>
								{s.label}
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#888', marginTop: 6, letterSpacing: 0.5 }}>
								{s.source}
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					style={{ background: colors.dark, border, boxShadow: shadow, padding: '20px 22px' }}
				>
					<div style={{ display: 'inline-block', padding: '4px 12px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, marginBottom: 14 }}>
						SALARY LADDER · AUD / YEAR
					</div>
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10 }}>
						{salaryTiers.map((t) => (
							<div key={t.role} style={{ background: 'rgba(255,255,255,0.08)', border: `2px solid ${t.color}`, padding: '10px 12px' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 700, marginBottom: 6 }}>
									{t.role}
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: '22px', fontWeight: 900, color: t.color }}>
									{t.salary}
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
