import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const PARTNERS = [
	{
		k: '🏢 Big 4 / Enterprise',
		examples: ['Deloitte', 'KPMG', 'EY', 'Accenture', 'HSBC', 'Macquarie', 'Westpac', 'Telstra'],
		desc: '德勤等大公司真实业务需求 · 学员进 P3 团队对接 · 转正概率高',
		color: colors.dark,
		accent: colors.indigo,
	},
	{
		k: '🚀 Startup · Scale-up',
		examples: ['Canva', 'Atlassian', 'Airwallex', 'Afterpay', 'Linktree', 'Eucalyptus', 'Zip', 'SafetyCulture'],
		desc: '澳/新增长期 startup · 急需 AI Engineer 加入战斗 · 给股权 + 快速晋升',
		color: colors.red,
		accent: colors.orange,
	},
	{
		k: '🌱 Incubator Project',
		examples: ['Antler', 'Angeloop', 'Stone & Chalk', 'Cicada', '校友新创项目'],
		desc: '匠人内孵化的创业项目 · 学员可联合创始人参与 · 真出 SaaS / 拿 VC funding',
		color: colors.green,
		accent: colors.purple,
	},
];

export default function L_P3Partners() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1600, padding: '32px 40px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.dark, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 12,
					}}>
						P3 · 对接资源 · 三类出口
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 56, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						P3 直接对接 <span style={{
							display: 'inline-block', background: colors.yellow,
							padding: '0 14px', border: `4px solid ${colors.black}`,
							boxShadow: `5px 5px 0 ${colors.black}`,
						}}>大公司 / Startup / 孵化项目</span>
					</h2>
					<div style={{
						marginTop: 10, fontFamily: fonts.body, fontSize: 18, color: '#444',
						fontWeight: 600, lineHeight: 1.4,
					}}>
						不是"作品集"放简历 · 是真业务 / 真团队 / 真上线 · 学员通过 P3 直接进就业管道
					</div>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
					{PARTNERS.map((p, i) => (
						<motion.div
							key={p.k}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
							style={{
								background: colors.white, border, boxShadow: `6px 6px 0 ${p.accent}`,
								padding: '20px 22px', borderTop: `10px solid ${p.color}`,
								display: 'flex', flexDirection: 'column', gap: 14,
							}}
						>
							<div style={{
								fontFamily: fonts.heading, fontSize: 26, fontWeight: 900,
								color: colors.black, letterSpacing: -0.5, lineHeight: 1.15,
							}}>
								{p.k}
							</div>

							<div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
								{p.examples.map((e) => (
									<span key={e} style={{
										padding: '4px 10px', background: '#f5f5f5', color: colors.dark,
										fontFamily: fonts.mono, fontSize: 14, fontWeight: 800,
										border: `2px solid ${colors.black}`, boxShadow: `2px 2px 0 ${p.accent}`,
									}}>
										{e}
									</span>
								))}
							</div>

							<div style={{
								marginTop: 4, fontFamily: fonts.body, fontSize: 16, color: '#333',
								fontWeight: 600, lineHeight: 1.5,
							}}>
								{p.desc}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 22, padding: '14px 24px',
						background: colors.indigo, color: colors.white,
						border, boxShadow: `6px 6px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
						letterSpacing: -0.3, lineHeight: 1.4, textAlign: 'center',
					}}
				>
					P3 不是 portfolio · 是 <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>真实业务推荐通道</span> · 80+ 公司持续招匠人学员
				</motion.div>
			</div>
		</Slide>
	);
}
