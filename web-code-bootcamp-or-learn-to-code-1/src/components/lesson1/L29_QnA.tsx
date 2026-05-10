import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import VideoBg from './VideoBg';

const FAQ = [
	{
		q: '我之前没编程基础 / 学过别的语言转 IT，能跟上吗？',
		a: 'M1-M3 是从零教 · 第 1-4 周专门照顾 0 基础。但 6 个月节奏比较紧，每周 12h 投入 minimum。',
	},
	{
		q: '工作很忙 · 不能每周直播都上怎么办？',
		a: '37 节直播全部录播 + 章节 timestamp · 任何时候补 · 关键 Sprint 节点 (P3 阶段) 建议尽量参加。',
	},
	{
		q: 'Project 1/2/3 我没做完会被劝退吗？',
		a: '不劝退，但会影响 Reference Check 申请资格 (P3 完成度 ≥ 75%)。Career Coach 会跟你单独排追赶计划。',
	},
	{
		q: 'AI Coding 这块我现在 Cursor 都没用过，会不会拖后腿？',
		a: 'Day 1-2 就装好 Cursor / Claude Code · 第一个 Quest 就是 AI Tutor 带你装环境。从零开始。',
	},
	{
		q: '6 个月学不完想加时间 · 行不行？',
		a: '可以 · Career Support 是 12 个月持续陪伴。学完主课 26 周后还有 26 周帮你拿 offer。',
	},
];

export default function L29_QnA() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			<VideoBg src="videos/cinematic-wide.mp4" overlay="rgba(255,241,231,0.85)" />
			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1500, padding: '32px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.indigo, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 12,
					}}>
						Q&A · 5 个最常被问到
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 64, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						开课前最常见的 <span style={{ color: colors.indigo }}>5 个问题</span>
					</h2>
					<div style={{
						marginTop: 8, fontFamily: fonts.body, fontSize: 20, color: '#555',
						fontWeight: 600, lineHeight: 1.4,
					}}>
						其他问题随时在群里抛 · 不用攒到下节课
					</div>
				</motion.div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
					{FAQ.map((f, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
							style={{
								background: colors.white, border, boxShadow: shadowSm,
								padding: '14px 20px',
							}}
						>
							<div style={{
								display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8,
							}}>
								<span style={{
									flexShrink: 0, padding: '2px 8px',
									background: colors.dark, color: colors.yellow,
									fontFamily: fonts.mono, fontSize: 15, fontWeight: 900,
									border: `2px solid ${colors.black}`,
								}}>
									Q
								</span>
								<div style={{
									fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
									color: colors.black, lineHeight: 1.3, letterSpacing: -0.3,
								}}>
									{f.q}
								</div>
							</div>
							<div style={{
								display: 'flex', alignItems: 'flex-start', gap: 10, paddingLeft: 4,
							}}>
								<span style={{
									flexShrink: 0, padding: '2px 8px',
									background: colors.green, color: colors.white,
									fontFamily: fonts.mono, fontSize: 15, fontWeight: 900,
									border: `2px solid ${colors.black}`,
								}}>
									A
								</span>
								<div style={{
									fontFamily: fonts.body, fontSize: 18, color: '#333',
									fontWeight: 600, lineHeight: 1.5,
								}}>
									{f.a}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</Slide>
	);
}
