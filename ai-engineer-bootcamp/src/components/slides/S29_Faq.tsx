import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const faqs = [
	{
		q: '我 Python 基础很一般，跟得上吗？',
		a: 'Phase 1 有 10 个 Python / Git / AWS Pre-work Lab 打底，前 2 周节奏慢，不会把人甩下。',
		color: colors.p1,
	},
	{
		q: '上班族能跟吗？直播错过咋办？',
		a: '所有直播有录播（永久回看）。工作日晚上学习是多数学员的方式，按自己节奏补。',
		color: colors.p3,
	},
	{
		q: '12 周学完就能找 AI Engineer 工作吗？',
		a: '技术课 12 周 + P3 孵化 12 周 = 24 周。毕业时你有 7 个 resume 项目 + LinkedIn & CV workshop + 内推。第四期 82% 结业 3 个月内拿 offer。',
		color: colors.p5,
	},
	{
		q: '和 AI Builder / AI Adoption 有啥区别？',
		a: 'AI Builder = 不写代码搭 AI 产品。AI Adoption = 企业 AI 落地。AI Engineer = 亲手写 RAG / Agent / MCP / 微调的真工程师。三个目标完全不同。',
		color: colors.p6,
	},
	{
		q: '如果学不下去可以退款吗？',
		a: '开课 2 周内不满意可退款（扣一笔工本）。第四期真实退款率 <5%。',
		color: colors.p8,
	},
	{
		q: '第五期和第四期区别到底多大？',
		a: '课时 95 → 183（+93%）。10 Phase 完整分层。新增 Memory System + Harness Engineering。详细见前面 V4 vs V5 那张。',
		color: colors.red,
	},
];

export default function S29_Faq() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '94%', maxWidth: 1400, height: '90%', padding: '24px 16px',
				display: 'flex', flexDirection: 'column', gap: 16,
			}}>
				{/* 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 'clamp(28px,3.8vw,48px)', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: 0,
					}}>
						你可能<span style={{
							display: 'inline-block', padding: '0 12px', background: colors.yellow,
							border, boxShadow: shadowSm, transform: 'rotate(-1deg)',
						}}>担心的 6 件事</span>
					</h2>
					<p style={{
						fontFamily: fonts.mono, fontSize: 'clamp(11px,1.2vw,14px)', color: '#555',
						fontWeight: 700, marginTop: 8, letterSpacing: 0.5,
					}}>
						我们提前帮你想好了
					</p>
				</motion.div>

				{/* FAQ 3x2 */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gridTemplateRows: 'repeat(2, 1fr)',
					gap: 12,
					flex: 1,
					minHeight: 0,
				}}>
					{faqs.map((f, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
							style={{
								background: colors.white, border, boxShadow: shadow,
								display: 'flex', flexDirection: 'column',
								overflow: 'hidden',
							}}
						>
							{/* Q 头部 */}
							<div style={{
								padding: '12px 16px',
								background: f.color, color: colors.white,
								borderBottom: `3px solid ${colors.black}`,
								display: 'flex', gap: 10, alignItems: 'flex-start',
							}}>
								<div style={{
									flexShrink: 0,
									fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
									lineHeight: 1, color: colors.yellow,
								}}>
									Q{i + 1}
								</div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 'clamp(14px,1.35vw,18px)',
									fontWeight: 800, lineHeight: 1.3,
								}}>
									{f.q}
								</div>
							</div>

							{/* A 回答 */}
							<div style={{
								padding: '14px 16px', flex: 1,
								display: 'flex', gap: 8, alignItems: 'flex-start',
							}}>
								<div style={{
									flexShrink: 0,
									fontFamily: fonts.heading, fontSize: 16, fontWeight: 900,
									color: colors.red, lineHeight: 1.2,
								}}>
									A
								</div>
								<div style={{
									fontSize: 'clamp(13px,1.25vw,15px)', lineHeight: 1.55,
									color: '#333', fontWeight: 600,
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
