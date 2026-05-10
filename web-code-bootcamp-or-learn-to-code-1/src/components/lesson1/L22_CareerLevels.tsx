import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const LEVELS = [
	{ lv: 'L1', title: 'Part-time / Grad', salary: '$22-30 / hr · $40-55k', who: '在校实习 · 起步岗位', stack: 'HTML/CSS/JS · 基础项目', color: colors.blue },
	{ lv: 'L2', title: 'Junior Full-stack', salary: '$60-75k', who: '毕业 0-1 年 · 第一份正式工作', stack: 'React + Node + MongoDB · CRUD 业务', color: colors.green },
	{ lv: 'L3', title: 'Junior to Mid', salary: '$75-100k', who: '工作 1-2 年 · 独立交付 feature', stack: '+ TypeScript · API design · 代码 review', color: colors.orange },
	{ lv: 'L4', title: 'Mid Full-stack / AI App Dev', salary: '$100-130k', who: '工作 2-4 年 · 能 own module', stack: '+ Cloud (AWS) · CI/CD · RAG / Agent', color: colors.red },
	{ lv: 'L5', title: 'Senior / AI Engineer', salary: '$130-200k+', who: '5+ 年 · 架构 + Mentor', stack: '+ System Design · Multi-Agent · Production AI', color: colors.dark },
];

export default function L22_CareerLevels() {
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
						JOB OUTCOME · LEVEL 1-5
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 64, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						你能去到哪个 Level<br />
						<span style={{ fontSize: 26, color: '#555', fontWeight: 700 }}>
							= 你做了多少项目 + 项目复杂度 + 在线时长
						</span>
					</h2>
				</motion.div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
					{LEVELS.map((l, i) => (
						<motion.div
							key={l.lv}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
							style={{
								background: colors.white, border, boxShadow: shadowSm,
								padding: '12px 18px',
								display: 'grid', gridTemplateColumns: '64px 200px 1fr 220px', gap: 16, alignItems: 'center',
							}}
						>
							<div style={{
								width: 56, height: 56, background: l.color, color: colors.white,
								border: `3px solid ${colors.black}`, boxShadow: shadowSm,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, letterSpacing: -0.5,
							}}>
								{l.lv}
							</div>
							<div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
									color: colors.black, lineHeight: 1.15, letterSpacing: -0.3, marginBottom: 2,
								}}>
									{l.title}
								</div>
								<div style={{
									fontFamily: fonts.mono, fontSize: 15, color: '#666',
									fontWeight: 700, letterSpacing: 0.5,
								}}>
									{l.who}
								</div>
							</div>
							<div style={{
								fontFamily: fonts.body, fontSize: 17, color: '#444',
								fontWeight: 600, lineHeight: 1.4,
							}}>
								{l.stack}
							</div>
							<div style={{
								background: l.color, color: colors.white,
								padding: '8px 12px', textAlign: 'center',
								border: `2.5px solid ${colors.black}`,
								fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
								letterSpacing: -0.3,
							}}>
								{l.salary}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.0 }}
					style={{
						marginTop: 18, padding: '14px 22px',
						background: colors.indigo, color: colors.white,
						border, boxShadow: `6px 6px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
						letterSpacing: -0.3, lineHeight: 1.4, textAlign: 'center',
					}}
				>
					本课程目标：6 个月 + 12 月 Career Support · 帮你拿到 <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>L2 Junior</span> 第一份 offer
				</motion.div>
			</div>
		</Slide>
	);
}
