import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface Myth {
	badge: string;           // 01 / 02 …
	myth: string;            // 错误认知（红叉）
	truth: string;           // 真相（黄色强调）
	tag?: string;            // 小 tag 数据
}

const myths: Myth[] = [
	{
		badge: '01',
		myth: 'AI Engineer = 调 OpenAI / Claude API 的人',
		truth: 'Call API 是最表层。真正的工作是 Context 设计 + Eval + Agentic 系统 + 上生产。',
		tag: 'API 调用只是 74 skills 里的 1-2 个',
	},
	{
		badge: '02',
		myth: 'AI Engineer = 研究 LLM 的 ML Researcher',
		truth: '那是 ML Scientist（要 PhD + 数学底子）。AI Engineer 是把模型变产品的工程师。',
		tag: '工程 + 产品 vs 论文 + 实验',
	},
	{
		badge: '03',
		myth: 'AI Engineer = Prompt Engineer',
		truth: 'Prompt 只占 5 大能力之一（11/74 skills）。缺 Full-stack / Cloud / Data 就跑不起来。',
		tag: 'Prompt = 15% 的能力',
	},
	{
		badge: '04',
		myth: '不用写代码，只要"懂 AI"就行',
		truth: '恰恰相反 — AI Engineer 是最 hardcore 的工程岗：Python 或 Node.js/TS + 系统设计 + DevOps + LLM 全栈。',
		tag: '"不用写代码"是 AI Builder / AI Adoption 的方向',
	},
	{
		badge: '05',
		myth: '需要博士 / 数学极好才能入门',
		truth: 'PhD 是 ML Research 门槛。AI Engineer 要的是工程能力 — Python 或 Node.js/TS + API 基础 + 一点 ML 直觉就能起步。',
		tag: '工程门槛 ≠ 研究门槛',
	},
	{
		badge: '06',
		myth: 'AI Engineer 就是做 demo / POC',
		truth: '80% 工作是让 demo 跑到生产 · Eval 稳定 · 成本可控 · 用户真的能用。Production 是唯一标准。',
		tag: 'Demo → Production 才是真难点',
	},
];

export default function S04b_Misconceptions() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* 背景斜线装饰 */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `repeating-linear-gradient(-45deg, rgba(0,0,0,0.025) 0 1px, transparent 1px 16px)`,
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1420, padding: '24px 32px' }}>
				{/* 顶部徽章 + 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 18 }}
				>
					<div style={{
						display: 'inline-block',
						padding: '4px 14px',
						background: colors.dark,
						color: colors.yellow,
						fontFamily: fonts.mono,
						fontSize: 12,
						fontWeight: 800,
						letterSpacing: 1,
						border,
						boxShadow: shadowSm,
						marginBottom: 10,
						transform: 'rotate(-1deg)',
					}}>
						COMMON MYTHS · 6 个最常被问的误区
					</div>
					<h2 style={{
						fontFamily: fonts.heading,
						fontSize: '48px',
						fontWeight: 900,
						lineHeight: 1.1,
						letterSpacing: -1,
						color: colors.black,
						margin: 0,
					}}>
						AI Engineer{' '}
						<span style={{
							display: 'inline-block',
							padding: '0 12px',
							background: colors.red,
							color: colors.white,
							border: `3px solid ${colors.black}`,
							boxShadow: `4px 4px 0 ${colors.black}`,
							transform: 'rotate(-1deg)',
						}}>
							不是
						</span>{' '}
						你想的那样
					</h2>
					<p style={{
						fontSize: '16px',
						color: '#444',
						fontWeight: 600,
						marginTop: 8,
					}}>
						先破除常见误区 · 再看真实定义。
					</p>
				</motion.div>

				{/* 6 张 myth 卡片 · 3x2 */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: 14,
				}}>
					{myths.map((m, i) => (
						<motion.div
							key={m.badge}
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
							style={{
								background: colors.white,
								border,
								boxShadow: shadow,
								padding: '14px 14px 12px',
								display: 'flex',
								flexDirection: 'column',
								gap: 8,
								position: 'relative',
							}}
						>
							{/* 编号 */}
							<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
								<div style={{
									width: 34,
									height: 34,
									background: colors.dark,
									color: colors.yellow,
									fontFamily: fonts.heading,
									fontSize: 15,
									fontWeight: 900,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									border: `2px solid ${colors.black}`,
								}}>
									{m.badge}
								</div>
								<div style={{
									fontFamily: fonts.mono,
									fontSize: 10,
									color: '#888',
									fontWeight: 700,
									letterSpacing: 1,
								}}>
									MYTH #{m.badge}
								</div>
							</div>

							{/* 错误认知（红色删除线） */}
							<div style={{
								display: 'flex',
								gap: 6,
								alignItems: 'flex-start',
								padding: '8px 10px',
								background: '#fff3f3',
								borderLeft: `4px solid ${colors.red}`,
							}}>
								<span style={{
									color: colors.red,
									fontFamily: fonts.heading,
									fontSize: 18,
									fontWeight: 900,
									lineHeight: 1,
									marginTop: 1,
								}}>
									✕
								</span>
								<span style={{
									fontFamily: fonts.heading,
									fontSize: '15px',
									fontWeight: 800,
									color: colors.dark,
									lineHeight: 1.3,
									textDecoration: 'line-through',
									textDecorationColor: colors.red,
									textDecorationThickness: 2,
								}}>
									{m.myth}
								</span>
							</div>

							{/* 真相（黄色高亮） */}
							<div style={{
								display: 'flex',
								gap: 6,
								alignItems: 'flex-start',
								padding: '10px 12px',
								background: colors.yellow,
								border: `2px solid ${colors.black}`,
							}}>
								<span style={{
									color: colors.red,
									fontFamily: fonts.heading,
									fontSize: 16,
									fontWeight: 900,
									lineHeight: 1,
									marginTop: 1,
								}}>
									✓
								</span>
								<span style={{
									fontFamily: fonts.heading,
									fontSize: '14px',
									fontWeight: 700,
									color: colors.black,
									lineHeight: 1.4,
								}}>
									{m.truth}
								</span>
							</div>

							{/* 底部 tag */}
							{m.tag && (
								<div style={{
									marginTop: 'auto',
									padding: '4px 8px',
									background: colors.dark,
									color: colors.white,
									fontFamily: fonts.mono,
									fontSize: 10,
									fontWeight: 700,
									alignSelf: 'flex-start',
									letterSpacing: 0.3,
								}}>
									→ {m.tag}
								</div>
							)}
						</motion.div>
					))}
				</div>

				{/* 底部过渡到 S05 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 16,
						padding: '10px 18px',
						background: colors.dark,
						color: colors.white,
						border,
						boxShadow: `5px 5px 0 ${colors.red}`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: 14,
						flexWrap: 'wrap',
					}}
				>
					<div style={{
						fontFamily: fonts.heading,
						fontSize: '17px',
						fontWeight: 900,
						color: colors.white,
						letterSpacing: -0.2,
					}}>
						那 AI Engineer{' '}
						<span style={{ color: colors.yellow }}>到底</span>{' '}
						是啥？
					</div>
					<div style={{
						fontFamily: fonts.mono,
						fontSize: '13px',
						color: 'rgba(255,255,255,0.85)',
						fontWeight: 700,
						letterSpacing: 0.5,
					}}>
						下一页看行业招聘 JD 给出的真实定义 →
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
