import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import VideoBg from './VideoBg';

const TIMELINE = [
	{ year: '2017', title: 'JR Academy 创办', sub: '从 1 个人 1 节课开始 · UQ', color: colors.dark },
	{ year: '2018', title: '推出 P3 项目体系', sub: '第一次把 Practice → Production → Production Grade 串起来', color: colors.indigo },
	{ year: '2020', title: '突破 1000 学员', sub: '澳洲 4 城线下 + 全球线上 (新西兰 / 新加坡 / 大陆 / 欧美)', color: colors.purple },
	{ year: '2021', title: 'P3 + DevOps', sub: '增加 AWS / Docker / CI/CD 完整链路', color: colors.blue },
	{ year: '2023', title: '4000+ 简历优化 → 4 offer', sub: 'Career Coaching Bootcamp 体系成型', color: colors.green },
	{ year: '2025', title: 'AI Engineering pivot', sub: 'Prompt / RAG / Agent / MCP 进入主课', color: colors.orange },
	{ year: '2026', title: '第 30 期 · 全栈班 v8.0', sub: 'AI Coding 贯穿全程 + CareerMate AI 旗舰项目', color: colors.red },
];

export default function L07_JrAcademyTimeline() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			<VideoBg src="videos/motion-720.mp4" overlay="rgba(255,241,231,0.78)" />
			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1500, padding: '32px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 24 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.purple, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 14,
					}}>
						JR ACADEMY · 9 YEARS
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 76, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						你今天上的这门课<br />
						是 <span style={{
							display: 'inline-block', background: colors.yellow,
							padding: '0 16px', border: `4px solid ${colors.black}`,
							boxShadow: `5px 5px 0 ${colors.black}`, marginTop: 6,
						}}>
							9 年迭代第 30 版
						</span>
					</h2>
				</motion.div>

				<div style={{ position: 'relative', paddingLeft: 20 }}>
					<div style={{
						position: 'absolute', left: 32, top: 8, bottom: 8,
						width: 4, background: colors.dark,
					}} />

					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						{TIMELINE.map((t, i) => (
							<motion.div
								key={t.year}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
								style={{
									display: 'flex', alignItems: 'center', gap: 18, position: 'relative',
								}}
							>
								<div style={{
									flexShrink: 0, width: 72, height: 72,
									background: t.color, color: colors.white,
									border: `4px solid ${colors.black}`,
									boxShadow: shadowSm,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
									letterSpacing: -0.5, position: 'relative', zIndex: 1,
								}}>
									{t.year}
								</div>
								<div style={{
									flex: 1, background: colors.white, border, boxShadow: shadowSm,
									padding: '14px 20px',
								}}>
									<div style={{
										fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
										color: colors.black, letterSpacing: -0.4, lineHeight: 1.2, marginBottom: 4,
									}}>
										{t.title}
									</div>
									<div style={{
										fontFamily: fonts.body, fontSize: 18, color: '#555',
										fontWeight: 600, lineHeight: 1.4,
									}}>
										{t.sub}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</Slide>
	);
}
