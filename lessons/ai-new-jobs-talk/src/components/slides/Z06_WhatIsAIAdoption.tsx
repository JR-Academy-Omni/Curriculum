import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, colors, fonts, border, shadow } from '../ui';

interface Tier {
	level: string;
	role: string;
	who: string;
	what: string;
	tools: string[];
	value: string;
	valueDetail: string;
	bg: string;
	accent: string;
	emoji: string;
}

const TIERS: Tier[] = [
	{
		level: 'LEVEL 1',
		role: 'AI 用户',
		who: '大部分人',
		what: '用 ChatGPT 写一段话、改一封邮件',
		tools: ['ChatGPT', 'Gemini', '"复制粘贴"'],
		value: '约 $0/hr 提升',
		valueDetail: '替代不了你现有工作\n提速 20% 不会涨工资',
		bg: '#fafafa',
		accent: '#999',
		emoji: '👤',
	},
	{
		level: 'LEVEL 2',
		role: 'AI Operator',
		who: '会用工具的人',
		what: '知道用 Cursor / N8N / Zapier 把任务串起来',
		tools: ['Cursor', 'N8N', 'Zapier', 'Make'],
		value: '约 $30/hr 提升',
		valueDetail: '能把团队效率拉 2-3 倍\n但还是在帮别人优化',
		bg: colors.govBg,
		accent: colors.govOrange,
		emoji: '🛠',
	},
	{
		level: 'LEVEL 3',
		role: 'AI Adoption Specialist /\nAI Engineer / AI Agent Dev',
		who: '前面讲的新岗位',
		what: '设计整条 pipeline · 监控 · 让它会自己进化',
		tools: ['LangChain', 'LlamaIndex', 'API 编排', '业务建模'],
		value: '$80 - $200 /hr',
		valueDetail: 'AU $130k-$200k 年薪\n直接对接公司核心指标',
		bg: colors.techBg,
		accent: colors.techPurple,
		emoji: '🏗',
	},
];

export default function Z06_WhatIsAIAdoption() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 24, width: '100%' }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.black,
						color: colors.yellow, fontFamily: fonts.mono, fontSize: 12,
						fontWeight: 700, letterSpacing: 2, marginBottom: 12,
					}}>CHAPTER 5 · 概念收口</div>
					<Title size="44px">
						AI Adoption 不是<span style={{ color: '#999' }}> 用 AI</span>，是把 AI 做成
						<span style={{ color: colors.red }}> pipeline</span>
					</Title>
				</motion.div>

				{/* 3 tiers */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } } }}
					style={{ width: '100%', marginBottom: 22 }}
				>
					<Grid cols={3} gap={20}>
						{TIERS.map((tier, idx) => (
							<motion.div
								key={tier.level}
								variants={{
									hidden: { opacity: 0, y: 30, scale: 0.92 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
								style={{
									background: tier.bg, border, boxShadow: shadow,
									padding: '24px 22px', minHeight: 420,
									display: 'flex', flexDirection: 'column',
									position: 'relative', overflow: 'hidden',
								}}
							>
								{/* Big level indicator */}
								<div style={{
									position: 'absolute', top: -10, right: -10,
									fontFamily: fonts.mono, fontSize: 90, fontWeight: 700,
									color: tier.accent, opacity: 0.12, lineHeight: 1,
									pointerEvents: 'none',
								}}>{idx + 1}</div>

								<div style={{
									display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12,
								}}>
									<div style={{ fontSize: 32 }}>{tier.emoji}</div>
									<div style={{
										fontFamily: fonts.mono, fontSize: 11, color: tier.accent,
										letterSpacing: 2, fontWeight: 700,
									}}>{tier.level}</div>
								</div>

								<div style={{
									fontSize: 22, fontWeight: 900, lineHeight: 1.2, marginBottom: 6,
									whiteSpace: 'pre-line', color: colors.black,
								}}>{tier.role}</div>
								<div style={{
									fontSize: 13, color: '#666', marginBottom: 18, fontStyle: 'italic',
								}}>{tier.who}</div>

								<div style={{
									fontSize: 14, color: '#222', lineHeight: 1.5, marginBottom: 14,
									minHeight: 44,
								}}>{tier.what}</div>

								<div style={{
									display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18,
								}}>
									{tier.tools.map((t) => (
										<span key={t} style={{
											fontFamily: fonts.mono, fontSize: 11, fontWeight: 700,
											padding: '3px 8px', background: colors.white,
											border: `2px solid ${colors.black}`, color: colors.black,
										}}>{t}</span>
									))}
								</div>

								<motion.div
									initial={{ scale: 0.7, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{
										duration: 0.5, delay: 0.6 + idx * 0.2,
										type: 'spring', stiffness: 200, damping: 14,
									}}
									style={{
										marginTop: 'auto', padding: '12px 14px',
										background: colors.black, color: colors.white,
									}}
								>
									<div style={{
										fontFamily: fonts.mono, fontSize: 10, color: tier.accent,
										letterSpacing: 1.5, marginBottom: 4, fontWeight: 700,
									}}>市场价值</div>
									<div style={{
										fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
										color: tier.accent, lineHeight: 1.1, marginBottom: 4,
									}}>{tier.value}</div>
									<div style={{
										fontSize: 11, color: '#bbb', whiteSpace: 'pre-line',
										lineHeight: 1.4,
									}}>{tier.valueDetail}</div>
								</motion.div>
							</motion.div>
						))}
					</Grid>
				</motion.div>

				{/* Final tagline */}
				<motion.div
					initial={{ opacity: 0, scale: 0.92, y: 16 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.55, delay: 1.4, type: 'spring', stiffness: 200, damping: 14 }}
					style={{
						width: '100%', padding: '20px 28px', background: colors.red,
						color: colors.white, display: 'flex', alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<div style={{
						fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, letterSpacing: -0.5,
					}}>
						差价 = 这条 <span style={{ color: colors.yellow }}>pipeline 的设计 + 落地能力</span>
					</div>
					<div style={{
						fontFamily: fonts.mono, fontSize: 12, color: colors.yellow,
						letterSpacing: 2,
					}}>L1 → L3 · ×100 价值跃迁</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
