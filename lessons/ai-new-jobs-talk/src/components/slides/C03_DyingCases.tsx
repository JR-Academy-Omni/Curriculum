import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, colors, fonts, border, shadow } from '../ui';

interface Case {
	job: string;
	change: string;
	replacedBy: string;
	transition: string;
	accent: string;
}

const CASES: Case[] = [
	{
		job: 'CRUD Developer',
		change: '-65%',
		replacedBy: 'Cursor / Claude Code / GitHub Copilot 直接生成 CRUD 代码，一个高级工程师顶 5 个 junior',
		transition: 'AI Engineer · Full-Stack with AI · Forward Deployed Engineer',
		accent: '#dc2626',
	},
	{
		job: 'Manual SEO Specialist',
		change: '-58%',
		replacedBy: 'GEO (Generative Engine Optimization) + AI 内容生成 + AI 关键词研究替代了堆词、外链、手工 audit',
		transition: 'GEO Specialist · AI Content Strategist',
		accent: '#ea580c',
	},
	{
		job: 'Data Analyst',
		change: '-52%',
		replacedBy: 'ChatGPT Code Interpreter + Hex AI + 自动化 dashboard 工具，业务人员自己问数',
		transition: 'AI Product Analyst · Decision Engineer',
		accent: colors.fast,
	},
	{
		job: 'Admin Assistant',
		change: '-45%',
		replacedBy: 'Claude / GPT 排程 + Zapier + AI 自动处理 email、会议纪要、报销审批',
		transition: 'Chief of Staff · Executive Operations Lead',
		accent: '#f87171',
	},
];

export default function C03_DyingCases() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 18 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ width: '100%' }}
				>
					<div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
						<span style={{
							padding: '5px 12px', background: colors.dark, color: colors.white,
							fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 2,
						}}>4 CASES · DEEP DIVE</span>
					</div>
					<Title size="50px">
						挑 4 个<span style={{ color: colors.explosive }}>典型样本</span>看清楚
					</Title>
					<p style={{ fontSize: 18, color: '#555', marginTop: 8 }}>
						每个岗位：被什么替代了 · 数据降幅 · 同一批人的转型出口在哪。
					</p>
				</motion.div>

				{/* 4 case cards */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } } }}
					style={{ width: '100%' }}
				>
					<Grid cols={2} gap={20}>
						{CASES.map((c, idx) => (
							<motion.div
								key={c.job}
								variants={{
									hidden: { opacity: 0, y: 30, scale: 0.94 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
								style={{
									border, background: colors.white, boxShadow: shadow,
									padding: '24px 22px', position: 'relative',
								}}
							>
								{/* 顶部 job 名 + 跌幅大字 */}
								<div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 16 }}>
									<div>
										<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#888', letterSpacing: 2, marginBottom: 6 }}>
											CASE 0{idx + 1}
										</div>
										<div style={{ fontSize: 24, fontWeight: 900, lineHeight: 1.2 }}>{c.job}</div>
									</div>
									<motion.div
										initial={{ scale: 0.3, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.5 + idx * 0.15, type: 'spring', stiffness: 220, damping: 14 }}
										style={{
											fontFamily: fonts.mono, fontSize: 38, fontWeight: 700,
											color: c.accent, lineHeight: 1, flexShrink: 0,
										}}
									>
										{c.change}
									</motion.div>
								</div>

								{/* Replaced by */}
								<div style={{ marginBottom: 14 }}>
									<div style={{
										display: 'inline-block', padding: '3px 10px', background: c.accent,
										color: colors.white, fontFamily: fonts.mono, fontSize: 12,
										fontWeight: 700, letterSpacing: 1.5, marginBottom: 8,
									}}>
										REPLACED BY
									</div>
									<div style={{ fontSize: 14, lineHeight: 1.6, color: '#333' }}>
										{c.replacedBy}
									</div>
								</div>

								{/* Transition */}
								<div style={{ paddingTop: 14, borderTop: '2px dashed #ddd' }}>
									<div style={{
										display: 'inline-block', padding: '3px 10px', background: '#16a34a',
										color: colors.white, fontFamily: fonts.mono, fontSize: 12,
										fontWeight: 700, letterSpacing: 1.5, marginBottom: 8,
									}}>
										→ TRANSITION
									</div>
									<div style={{ fontSize: 14, lineHeight: 1.6, color: colors.black, fontWeight: 600 }}>
										{c.transition}
									</div>
								</div>
							</motion.div>
						))}
					</Grid>
				</motion.div>
			</Inner>
		</Slide>
	);
}
