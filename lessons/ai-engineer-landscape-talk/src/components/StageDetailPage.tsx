import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Slide, Title, assetPath, colors, fonts, border, shadowSm } from './ui';
import { STAGES, TIMELINE_FOOTNOTE, quarter } from '../data/auAiTimeline';

// 阶段细节页的共用版式（内容层，非引擎）：一页放若干张阶段卡，S04–S08 复用
function Col({ head, children }: { head: string; children: ReactNode }) {
	return (
		<div style={{ minWidth: 0 }}>
			<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 1, color: colors.dark, opacity: 0.6, marginBottom: 8 }}>{head}</div>
			{children}
		</div>
	);
}

const bodyText = { fontSize: 18, lineHeight: 1.6, margin: 0 } as const;

export default function StageDetailPage({ from, to, footnote }: { from: number; to: number; footnote?: boolean }) {
	const stages = STAGES.slice(from - 1, to);
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '100%', height: '100%', padding: '40px 64px 60px', display: 'flex', flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
					style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 10 }}>
					<Title size="34px">阶段细节</Title>
					<span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: colors.red }}>
						{from === to ? from : `${from}–${to}`} / {STAGES.length}
					</span>
				</motion.div>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
					{stages.map((s, i) => (
						<motion.div
							key={s.name}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.15 + i * 0.18 }}
							style={{ background: colors.white, border, boxShadow: shadowSm, padding: '14px 26px 14px' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
								<span style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, marginRight: 6 }}>
									<span style={{ fontFamily: fonts.mono, color: colors.red }}>{from + i}.</span> {s.name}
								</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '3px 10px', background: colors.orange, border: `2px solid ${colors.black}` }}>
									全球披露 {s.global[0].at} 起
								</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '3px 10px', background: colors.green, border: `2px solid ${colors.black}` }}>
									澳洲落地 {quarter(s.au[0])} – {quarter(s.au[1])}
								</span>
								{/* 本阶段代表性品牌 logo，靠右排 */}
								<div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
									{s.logos.map((l, j) => (
										<motion.span
											key={l.file}
											initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
											transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.45 + i * 0.18 + j * 0.06 }}
											style={{ display: 'flex', alignItems: 'center', gap: 6, height: 40, padding: '0 6px', background: colors.white, border: `2px solid ${colors.black}` }}>
											<img src={assetPath(`logos/${l.file}`)} alt={l.alt} title={l.alt} style={{ display: 'block', maxHeight: 30, maxWidth: 84 }} />
											{l.label && <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>{l.label}</span>}
										</motion.span>
									))}
								</div>
							</div>
							<div style={{ display: 'grid', gridTemplateColumns: '1.15fr 2.4fr 1.1fr 0.9fr', gap: 28 }}>
								<Col head="技术节点">
									{s.global.map((g) => (
										<p key={g.label} style={{ fontSize: 16, lineHeight: 1.45, margin: '0 0 5px', color: colors.dark }}>{g.label}</p>
									))}
								</Col>
								<Col head="澳洲市场"><p style={bodyText}>{s.market}</p></Col>
								<Col head="面试与 JD"><p style={bodyText}>{s.jd}</p></Col>
								<Col head="谁占优"><p style={{ ...bodyText, fontWeight: 700 }}>{s.winner}</p></Col>
							</div>
						</motion.div>
					))}
				</div>

				{footnote && <p style={{ fontSize: 14, color: colors.dark, opacity: 0.65, marginTop: 12 }}>{TIMELINE_FOOTNOTE}</p>}
			</div>
		</Slide>
	);
}
