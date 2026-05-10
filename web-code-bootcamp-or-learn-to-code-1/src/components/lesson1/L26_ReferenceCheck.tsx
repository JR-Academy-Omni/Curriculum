import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import VideoBg from './VideoBg';

export default function L26_ReferenceCheck() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			<VideoBg src="videos/hf-extra.mp4" overlay="rgba(255,241,231,0.82)" />
			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1500, padding: '32px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.dark, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 12,
					}}>
						REFERENCE CHECK · LINKEDIN RULES
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 56, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						面试到 Reference Check 阶段 · <span style={{ color: colors.dark }}>我们能给你做 Reference</span>
					</h2>
					<div style={{
						marginTop: 8, fontFamily: fonts.body, fontSize: 20, color: '#555',
						fontWeight: 600, lineHeight: 1.5,
					}}>
						但有规则 — 不是说"老师给我背书"那么简单。9 年下来这套机制让招聘方 reference 通过率 95%+。
					</div>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 16 }}>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{
							background: colors.white, border, boxShadow: shadow,
							padding: '20px 24px',
						}}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
							color: colors.red, letterSpacing: 2, marginBottom: 12,
						}}>
							✅ 可以申请 Reference Check 的前提
						</div>
						<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
							{[
								'P3 真项目完成度 ≥ 75% (Project 1 / Agile / Git 100%)',
								'有真实 commit 历史 / Code Review 记录',
								'有 12 周以上 LinkedIn Recommendation 互推记录',
								'参加过至少 1 次 Mock Interview · tutor 评估通过',
								'通过邮件提前 7 天联系 JR Academy · 不能临时',
							].map((s) => (
								<li key={s} style={{
									display: 'flex', alignItems: 'flex-start', gap: 10,
									fontFamily: fonts.body, fontSize: 18, color: '#222',
									fontWeight: 600, lineHeight: 1.5,
								}}>
									<span style={{ color: colors.green, fontWeight: 900, fontSize: 18, lineHeight: 1, marginTop: -1, flexShrink: 0 }}>✓</span>
									<span>{s}</span>
								</li>
							))}
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
					>
						<div style={{
							background: colors.dark, color: colors.white, border, boxShadow: shadowSm,
							padding: '18px 22px',
						}}>
							<div style={{
								fontFamily: fonts.mono, fontSize: 15, fontWeight: 900,
								color: colors.yellow, letterSpacing: 2, marginBottom: 10,
							}}>
								LINKEDIN RECOMMENDATION
							</div>
							<div style={{
								fontFamily: fonts.body, fontSize: 17, color: colors.white,
								fontWeight: 600, lineHeight: 1.5,
							}}>
								• 1 周 1 条 · 持续 12 周<br />
								• 跟同期/tutor 互推 · 不是模板抄<br />
								• 至少 1 条 Medium Post / YouTube Demo
							</div>
						</div>
						<div style={{
							background: colors.red, color: colors.white, border, boxShadow: shadowSm,
							padding: '18px 22px',
						}}>
							<div style={{
								fontFamily: fonts.mono, fontSize: 15, fontWeight: 900,
								color: colors.yellow, letterSpacing: 2, marginBottom: 10,
							}}>
								⚠ 不会做 Reference 的情况
							</div>
							<div style={{
								fontFamily: fonts.body, fontSize: 17, color: colors.white,
								fontWeight: 600, lineHeight: 1.5,
							}}>
								没完成 P3 / 没 Mock 记录 / 临时申请 / 简历夸大经历 — 一律拒绝。这是为了保护后面所有学员的 reference 信用度。
							</div>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 16, padding: '12px 22px',
						background: colors.indigo, color: colors.white,
						border, boxShadow: `5px 5px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
						letterSpacing: -0.3, lineHeight: 1.4, textAlign: 'center',
					}}
				>
					Reference Check 通过 = 你过去 6 个月在课上的 <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>真实表现</span> 直接投射到 offer
				</motion.div>
			</div>
		</Slide>
	);
}
