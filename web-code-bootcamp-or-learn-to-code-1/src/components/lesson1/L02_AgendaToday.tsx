import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const AGENDA = [
	{ n: '01', title: '行业背景', sub: 'AI Engineer 时代为什么是 2026', mins: 10, color: colors.indigo },
	{ n: '02', title: '我的故事', sub: 'Lightman + JR Academy 9 年路径', mins: 15, color: colors.purple },
	{ n: '03', title: '师资团队', sub: '20+ tutor + 6 名 Career Coach', mins: 15, color: colors.blue },
	{ n: '04', title: '课程结构', sub: '10 Module · Stage 1-5 · 多通道学习', mins: 25, color: colors.green },
	{ n: '05', title: '旗舰项目 CareerMate AI', sub: 'Project 1 → 2 → 3 演进路径', mins: 20, color: colors.orange },
	{ n: '06', title: '学习文化 + 第一周清单', sub: 'Code Review · Tutor++ · Day 7 todo', mins: 25, color: colors.red },
];

export default function L02_AgendaToday() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1500, padding: '40px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 28 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.dark, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 14,
					}}>
						TODAY'S AGENDA · ~110 MIN
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 88, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						今天我们讲<br />
						<span style={{
							display: 'inline-block', background: colors.yellow,
							padding: '0 18px', border: `5px solid ${colors.black}`,
							boxShadow: `7px 7px 0 ${colors.black}`, transform: 'rotate(-1deg)',
							marginTop: 8,
						}}>
							6 件事
						</span>
					</h2>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
					{AGENDA.map((a, i) => (
						<motion.div
							key={a.n}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
							style={{
								background: colors.white, border, boxShadow: shadow,
								padding: '22px 22px', position: 'relative', overflow: 'hidden',
							}}
						>
							<div style={{
								position: 'absolute', top: 0, left: 0, right: 0, height: 6,
								background: a.color,
							}} />
							<div style={{
								display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 6, marginBottom: 10,
							}}>
								<div style={{
									fontFamily: fonts.heading, fontSize: 56, fontWeight: 900,
									color: a.color, letterSpacing: -2, lineHeight: 1,
								}}>
									{a.n}
								</div>
								<div style={{
									fontFamily: fonts.mono, fontSize: 17, fontWeight: 800,
									color: '#999', letterSpacing: 1,
								}}>
									{a.mins} MIN
								</div>
							</div>
							<div style={{
								fontFamily: fonts.heading, fontSize: 28, fontWeight: 900,
								color: colors.black, lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 8,
							}}>
								{a.title}
							</div>
							<div style={{
								fontFamily: fonts.body, fontSize: 19, color: '#555',
								fontWeight: 600, lineHeight: 1.4,
							}}>
								{a.sub}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.8 }}
					style={{
						marginTop: 28, padding: '16px 24px',
						background: colors.dark, color: colors.white,
						border, boxShadow: `6px 6px 0 ${colors.yellow}`,
						display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
					}}
				>
					<div style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, letterSpacing: -0.3 }}>
						💡 今天结束 = 你知道接下来 6 个月怎么走，第一周做什么
					</div>
					<div style={{
						padding: '4px 14px', background: colors.yellow, color: colors.black,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900,
						border: `2px solid ${colors.white}`,
					}}>
						Q&A · 全程提问
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
