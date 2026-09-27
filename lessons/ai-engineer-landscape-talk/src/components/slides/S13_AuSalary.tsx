import { motion } from 'framer-motion';
import { Slide, Title, CountUp, GrowBar, colors, fonts, border, shadow, shadowSm } from '../ui';
import { AU_AI_ENGINEER, AU_FDE, SALARY_DISCLAIMER } from '../../data/aiSalaries';

const { min, max, ticks } = AU_FDE.axis;
const pos = (k: number) => `${(((k - min) / (max - min)) * 100).toFixed(2)}%`;

// 澳洲薪资：上排 AI Engineer 三档 base，下排 FDE 分城市 base 区间条
export default function S13_AuSalary() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '100%', height: '100%', padding: '34px 64px 54px', display: 'flex', flexDirection: 'column', gap: 14 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '4px 10px', background: colors.yellow, border: `2px solid ${colors.black}` }}>AUSTRALIA · AI ENGINEER & FDE SALARY</span>
					<Title size="40px" style={{ marginTop: 10 }}>{AU_AI_ENGINEER.headline}</Title>
					<p style={{ fontSize: 18, fontWeight: 500, color: colors.dark, opacity: 0.75, margin: '6px 0 0' }}>{AU_AI_ENGINEER.sub}</p>
				</motion.div>

				<div style={{ flex: 'none', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
					{AU_AI_ENGINEER.bands.map((b, i) => (
						<motion.div key={b.tag}
							initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.2 + i * 0.15 }}
							style={{ background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0px ${colors[b.color]}`, padding: '18px 24px' }}>
							<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '4px 10px', background: colors[b.color], color: colors.black, border: `2px solid ${colors.black}` }}>{b.tag}</span>
							<div style={{ fontFamily: fonts.heading, fontSize: 56, fontWeight: 900, lineHeight: 1.1, margin: '12px 0 4px', letterSpacing: -1 }}>
								A$<CountUp value={b.low} duration={1} />K{b.high && <>–<CountUp value={b.high} duration={1.3} />K</>}
							</div>
							<div style={{ fontSize: 17, opacity: 0.85 }}>{b.caption}</div>
						</motion.div>
					))}
				</div>
				<p style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.dark, opacity: 0.65, margin: 0 }}>来源：{AU_AI_ENGINEER.source}</p>

				{/* FDE 区间条 */}
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.7 }}
					style={{ flex: 1, minHeight: 0, background: colors.white, border, boxShadow: shadow, padding: '16px 24px', display: 'flex', flexDirection: 'column' }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '4px 10px', background: colors.orange, border: `2px solid ${colors.black}` }}>FORWARD DEPLOYED ENGINEER</span>
						<span style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900 }}>{AU_FDE.headline}</span>
					</div>
					<div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
						{AU_FDE.bands.map((b, i) => (
							<div key={b.city + b.level} style={{ display: 'flex', alignItems: 'center', height: 40 }}>
								<span style={{ width: 210, flex: 'none', fontSize: 18, fontWeight: 700 }}>
									{b.city} <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, opacity: 0.7 }}>· {b.level}</span>
								</span>
								<div style={{ position: 'relative', flex: 1, height: '100%' }}>
									{ticks.map((t) => (
										<div key={t} style={{ position: 'absolute', top: 0, bottom: 0, left: pos(t), borderLeft: `1px solid ${colors.black}`, opacity: 0.15 }} />
									))}
									<div style={{ position: 'absolute', left: 0, right: 0, top: 8, height: 24 }}>
										<GrowBar delay={0.9 + i * 0.15} left={pos(b.low)} width={`${(((b.high - b.low) / (max - min)) * 100).toFixed(2)}%`} color={b.level === 'Tech lead' ? colors.red : colors.orange} style={{ border: `2px solid ${colors.black}` }} />
									</div>
									<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 + i * 0.15 }}
										style={{ position: 'absolute', top: 9, left: `calc(${pos(b.high)} + 10px)`, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, whiteSpace: 'nowrap' }}>
										A${b.low}K–{b.high}K
									</motion.span>
								</div>
							</div>
						))}
						<div style={{ display: 'flex', height: 18 }}>
							<span style={{ width: 210, flex: 'none' }} />
							<div style={{ position: 'relative', flex: 1 }}>
								{ticks.map((t) => (
									<span key={t} style={{ position: 'absolute', left: pos(t), transform: 'translateX(-50%)', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, opacity: 0.6 }}>{t}K</span>
								))}
							</div>
						</div>
					</div>
				</motion.div>

				<div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginRight: 96 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.dark, opacity: 0.65 }}>来源：{AU_FDE.source}</span>
					<span style={{ marginLeft: 'auto', fontSize: 15, fontWeight: 700, padding: '2px 10px', background: colors.yellow, border: `2px solid ${colors.black}`, boxShadow: shadowSm, whiteSpace: 'nowrap' }}>{SALARY_DISCLAIMER}</span>
				</div>
			</div>
		</Slide>
	);
}
