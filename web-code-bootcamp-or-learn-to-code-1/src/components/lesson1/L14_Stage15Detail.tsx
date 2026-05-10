import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const STAGES = [
	{ s: '1', name: 'Web Foundations', what: 'HTML / CSS / JS / Sass + 第一个 Landing Page', weeks: '1-4 周', color: colors.blue },
	{ s: '2', name: 'Web App Delivery', what: 'React + Node + MongoDB + Login / Auth + 部署', weeks: '5-10 周', color: colors.green },
	{ s: '3', name: 'Agile Team Project', what: 'P3 真项目 · 团队 Sprint · Code Review · CI/CD', weeks: '11-16 周', color: colors.orange },
	{ s: '4', name: 'AI Engineering & Integration', what: 'OpenAI · Prompt · RAG · Agent · MCP · Production AI', weeks: '17-22 周', color: colors.red },
	{ s: '5', name: 'Career Coaching · 求职冲刺', what: '简历 · LinkedIn · Mock Interview · Reference · 内推', weeks: '23 周开始', color: colors.dark },
];

export default function L14_Stage15Detail() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, padding: '32px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.green, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 12,
					}}>
						COURSE STRUCTURE · 5 STAGES
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 76, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						5 个阶段 · 一步步把你<br />
						<span style={{
							display: 'inline-block', background: colors.dark, color: colors.yellow,
							padding: '0 16px', border: `4px solid ${colors.black}`,
							boxShadow: `5px 5px 0 ${colors.black}`, marginTop: 8,
						}}>
							从 0 推到拿 offer
						</span>
					</h2>
				</motion.div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
					{STAGES.map((s, i) => (
						<motion.div
							key={s.s}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
							style={{
								background: colors.white, border, boxShadow: shadowSm,
								padding: '16px 22px',
								display: 'grid', gridTemplateColumns: '90px 1fr 130px', gap: 22, alignItems: 'center',
							}}
						>
							<div style={{
								width: 80, height: 80, background: s.color, color: colors.white,
								border: `4px solid ${colors.black}`, boxShadow: shadowSm,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontFamily: fonts.heading, fontSize: 48, fontWeight: 900, letterSpacing: -2,
							}}>
								{s.s}
							</div>
							<div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 26, fontWeight: 900,
									color: colors.black, lineHeight: 1.15, letterSpacing: -0.5, marginBottom: 4,
								}}>
									Stage {s.s} · {s.name}
								</div>
								<div style={{
									fontFamily: fonts.body, fontSize: 20, color: '#444',
									fontWeight: 600, lineHeight: 1.4,
								}}>
									{s.what}
								</div>
							</div>
							<div style={{
								background: s.color, color: colors.white,
								fontFamily: fonts.mono, fontSize: 17, fontWeight: 900,
								letterSpacing: 1, padding: '8px 12px', textAlign: 'center',
								border: `2.5px solid ${colors.black}`,
							}}>
								{s.weeks}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</Slide>
	);
}
