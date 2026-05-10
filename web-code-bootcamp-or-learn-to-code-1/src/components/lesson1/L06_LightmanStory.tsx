import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import VideoBg from './VideoBg';

const STAGES = [
	{ s: 'S1', label: '第一学期 · 学生兼职', what: 'UQ CS · 学 C# MVC · cleaner / sushi / pizza · Gumtree 一周打工 ~$300', tone: 'survive' },
	{ s: 'S2', label: '第二年 · 第一份 Dev', what: '拿到 Part-time Developer offer · SEO / Angular SSR / CSR 优化', tone: 'grow' },
	{ s: 'S3', label: '第三年 · 全职公司', what: '进正规公司做 Full-time Developer · 攒真实在职经验', tone: 'grow' },
	{ s: 'S4', label: '工作 3 年后 · 2017', what: '有了真实在职经验，才创办 JR Academy — 而不是毕业就开课教别人', tone: 'leap' },
];

export default function L06_LightmanStory() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			<VideoBg src="videos/cinematic-2.mp4" overlay="rgba(255,241,231,0.78)" />
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
						02 · MY STORY
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 76, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						我也是从<br />
						<span style={{
							display: 'inline-block', background: colors.dark, color: colors.yellow,
							padding: '0 16px', border: `4px solid ${colors.black}`,
							boxShadow: `5px 5px 0 ${colors.black}`, marginTop: 6,
						}}>
							UQ CS · 一份零工
						</span>
						{' '}走过来的
					</h2>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.4fr', gap: 28 }}>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{
							background: colors.dark, color: colors.white,
							border, boxShadow: shadow, padding: '28px 28px',
						}}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
							color: colors.yellow, letterSpacing: 2, marginBottom: 14,
						}}>
							LIGHTMAN WANG
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 32, fontWeight: 900,
							lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 18,
						}}>
							UQ CS · 2017 创办 JR Academy
						</div>
						<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
							{[
								{ k: '200+', v: '亲自送出的 offer' },
								{ k: '600+', v: '通过 JR Academy 拿 offer 的学员' },
								{ k: '9 年', v: '一线 IT Career Coaching 经验' },
								{ k: 'CEO', v: '同时还在写代码 · 带 30 期全栈班' },
							].map((m) => (
								<li key={m.v} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
									<span style={{
										minWidth: 70, fontFamily: fonts.heading, fontSize: 24, fontWeight: 900,
										color: colors.yellow, letterSpacing: -0.5,
									}}>{m.k}</span>
									<span style={{ fontFamily: fonts.body, fontSize: 19, fontWeight: 600, lineHeight: 1.4 }}>
										{m.v}
									</span>
								</li>
							))}
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4, delay: 0.5 }}
						style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
					>
						{STAGES.map((s, i) => (
							<motion.div
								key={s.s}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
								style={{
									background: colors.white, border, boxShadow: shadowSm,
									padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 18,
								}}
							>
								<div style={{
									flexShrink: 0, width: 64, height: 64,
									background: s.tone === 'leap' ? colors.red : s.tone === 'grow' ? colors.indigo : colors.dark,
									color: colors.white, border: `3px solid ${colors.black}`,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.heading, fontSize: 24, fontWeight: 900,
								}}>
									{s.s}
								</div>
								<div style={{ flex: 1 }}>
									<div style={{
										fontFamily: fonts.mono, fontSize: 16, color: '#666',
										fontWeight: 800, letterSpacing: 1, marginBottom: 4,
									}}>
										{s.label}
									</div>
									<div style={{
										fontFamily: fonts.body, fontSize: 18, color: colors.black,
										fontWeight: 600, lineHeight: 1.4,
									}}>
										{s.what}
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.2 }}
					style={{
						marginTop: 24, padding: '14px 24px',
						background: colors.indigo, color: colors.white,
						border, boxShadow: `6px 6px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
						letterSpacing: -0.3, textAlign: 'center', lineHeight: 1.4,
					}}>
					所以我比谁都清楚：留学生第一份 IT 工作 <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>到底卡在哪</span>
				</motion.div>
			</div>
		</Slide>
	);
}
