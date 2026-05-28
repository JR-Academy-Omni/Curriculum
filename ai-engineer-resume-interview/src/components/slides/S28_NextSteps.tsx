import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

/**
 * S28 — 接下来深化服务（讲座收尾）
 * 4 张深化服务卡 · 满屏布局
 */

interface ServiceCard {
	emoji: string;
	title: string;
	tagline: string;
	desc: string;
	color: string;
	dark?: boolean;
}

const services: ServiceCard[] = [
	{
		emoji: '🎯',
		title: '1:1 面试辅导',
		tagline: 'Jason 老师亲带',
		desc: '简历 review · mock interview · offer 谈判方法论',
		color: colors.p1,
	},
	{
		emoji: '🏢',
		title: 'Production 级企业项目',
		tagline: 'P3 Premium · 真给企业交付',
		desc: '付费企业客户出题 · 代码进客户 production · 推荐信 + GitHub + 真 metrics',
		color: colors.p5,
	},
	{
		emoji: '☸️',
		title: 'AI + K8s 项目培训',
		tagline: '更大型企业级项目',
		desc: 'LLM Ops + Kubernetes + 多 Agent 部署 + Helm + GPU 调度 + 监控全栈',
		color: colors.indigo,
	},
	{
		emoji: '👨‍🏫',
		title: '导师手把手带项目',
		tagline: '导师陪你一起做 · 不只是 review',
		desc: '从需求分析 → 架构 → 实现 → 上 prod · 全程跟做 · 出来即作品',
		color: colors.p7,
	},
	{
		emoji: '🚀',
		title: '一人创业营',
		tagline: '不打工的另一条路',
		desc: '用 AI 一个人扛起一家公司 · 含 VC / 法务 / 增长',
		color: colors.yellow,
		dark: true,
	},
];

export default function S28_NextSteps() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '94%', maxWidth: 1440, height: '92%', padding: '30px 24px',
				display: 'flex', flexDirection: 'column', gap: 24,
			}}>
				{/* 顶部标签 + 主标题 */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<div style={{
						display: 'inline-block',
						padding: '6px 16px', background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: `4px 4px 0 ${colors.black}`,
						marginBottom: 16,
					}}>
						接下来
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: '68px', fontWeight: 900,
						lineHeight: 1.05, letterSpacing: -2, margin: 0,
					}}>
						<span style={{
							display: 'inline-block', padding: '4px 20px', background: colors.yellow,
							border, boxShadow: `6px 6px 0 ${colors.black}`, transform: 'rotate(-1deg)',
						}}>深化服务</span>
					</h2>
				</motion.div>

				{/* 5 张深化服务卡 · 3+2 布局（前 3 张占 2col span 2，后 2 张占 3col span 3） */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
					style={{
						flex: 1, display: 'grid',
						gridTemplateColumns: 'repeat(6, 1fr)', gridTemplateRows: 'repeat(2, 1fr)',
						gap: 16, minHeight: 0,
					}}
				>
					{services.map((s, i) => (
						<motion.div
							key={s.title}
							variants={{
								hidden: { opacity: 0, y: 30, scale: 0.95 },
								visible: { opacity: 1, y: 0, scale: 1 },
							}}
							transition={{ duration: 0.4, ease: 'easeOut' }}
							whileHover={{ y: -4, transition: { duration: 0.15 } }}
							style={{
								// 前 3 张占 2 列在第一行；后 2 张占 3 列在第二行
								gridColumn: i < 3 ? 'span 2' : 'span 3',
								background: s.dark ? colors.dark : colors.white,
								color: s.dark ? colors.white : colors.black,
								border,
								boxShadow: s.dark ? `6px 6px 0 ${colors.yellow}` : `6px 6px 0 ${colors.black}`,
								padding: '20px 24px',
								display: 'flex', flexDirection: 'column', gap: 10,
								position: 'relative',
								overflow: 'hidden',
							}}
						>
							{/* 顶部 emoji + 色块标题 */}
							<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
								<div style={{
									width: 64, height: 64,
									background: s.color, color: s.dark ? colors.black : colors.white,
									border: `3px solid ${s.dark ? colors.white : colors.black}`,
									boxShadow: s.dark ? `4px 4px 0 ${colors.white}` : `4px 4px 0 ${colors.black}`,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontSize: 36, flexShrink: 0,
								}}>
									{s.emoji}
								</div>
								<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
									<div style={{
										fontFamily: fonts.heading, fontSize: 32, fontWeight: 900,
										letterSpacing: -1, lineHeight: 1.05,
										color: s.dark ? colors.yellow : colors.black,
									}}>
										{s.title}
									</div>
									<div style={{
										fontFamily: fonts.mono, fontSize: 14, fontWeight: 800,
										color: s.dark ? colors.white : s.color,
										letterSpacing: 0.5,
									}}>
										{s.tagline}
									</div>
								</div>
							</div>

							{/* 描述 */}
							<div style={{
								marginTop: 'auto',
								padding: '12px 14px',
								background: s.dark ? 'rgba(255,255,255,0.08)' : '#fafafa',
								border: s.dark ? `2px dashed ${colors.yellow}` : `2px dashed ${colors.black}`,
								fontFamily: fonts.body, fontSize: 16, fontWeight: 700,
								color: s.dark ? colors.white : colors.black,
								lineHeight: 1.5,
							}}>
								{s.desc}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* 底部 logo */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.8 }}
					style={{
						display: 'flex', alignItems: 'center', justifyContent: 'space-between',
						padding: '10px 18px', background: colors.white,
						border, boxShadow: shadowSm,
					}}
				>
					<span style={{
						fontFamily: fonts.heading, fontSize: 15, fontWeight: 900, letterSpacing: -0.3,
					}}>
						JR Academy · AI Engineer 简历 + 面试
					</span>
					<span style={{
						fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#666',
					}}>
						2026 · jiangren.com.au
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}

export const __unused = shadow;
