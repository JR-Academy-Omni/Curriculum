import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// Enterprise Long-Term Memory System —— 从单条 pipeline 扩展到整个企业的 AI 大脑
// 企业可以记住员工 / 公司本身的工作内容，自动安排工作、调整工作、生成内容

interface MemoryLayer {
	id: string;
	icon: string;
	title: string;
	subtitle: string;
	examples: string[];
	color: string;
}

const LAYERS: MemoryLayer[] = [
	{
		id: 'employee',
		icon: '👤',
		title: '员工长期记忆',
		subtitle: 'Per-Employee Memory',
		examples: [
			'每个人的工作历史 / 偏好 / 技能图',
			'之前 3 个月写过的所有 doc / code / chat',
			'反复犯过的错 + 反馈',
			'谁擅长 / 不擅长什么',
		],
		color: colors.techPurple,
	},
	{
		id: 'company',
		icon: '🏢',
		title: '公司知识库记忆',
		subtitle: 'Company Knowledge',
		examples: [
			'所有 Notion / Confluence / Drive 文档',
			'Slack 历史 + 决策上下文',
			'客户 / 项目 / 流程 SOP',
			'品牌语调 / 合规规则 / 内部行话',
		],
		color: colors.govOrange,
	},
	{
		id: 'business',
		icon: '📊',
		title: '业务状态记忆',
		subtitle: 'Business State',
		examples: [
			'当前 OKR / 季度目标进展',
			'KPI 历史曲线 / 异常',
			'客户 lifecycle / 续费风险',
			'团队带宽 / 排期 / 阻塞点',
		],
		color: colors.industryCyan,
	},
];

const ACTIONS = [
	{
		icon: '📅',
		label: '自动安排工作',
		example: '"小王这周有 2 个 P0，给他匹配了 2 个 AI 助手帮文档/翻译"',
	},
	{
		icon: '🔄',
		label: '动态调整任务',
		example: '"客户 X 的项目延期了，把 deck 给 designer 改时间，自动通知 PM"',
	},
	{
		icon: '✍️',
		label: '内容自动生成',
		example: '"按公司语调给客户 Y 写续费提案，复用上次 Q3 成功 case"',
	},
	{
		icon: '🎯',
		label: '主动提醒决策',
		example: '"3 个续约客户互动下降 + 同时收到竞品 RFP，建议 CSM 介入"',
	},
];

export default function Z05b_EnterpriseMemory() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 10 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ width: '100%' }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.techPurple,
						color: colors.white, fontFamily: fonts.mono, fontSize: 12,
						fontWeight: 700, letterSpacing: 2, marginBottom: 8,
					}}>STEP 5 · 企业级 · 不止一条 pipeline</div>
					<Title size="40px">
						Enterprise <span style={{ color: colors.techPurple }}>Long-Term Memory</span> System
					</Title>
					<p style={{ fontSize: 15, color: '#555', marginTop: 4 }}>
						AI 不只跑一条 pipeline —— 它<span style={{ fontWeight: 700, color: colors.dark }}>记住整个公司</span>，
						主动安排 / 调整 / 生成。这是 2026 年企业 AI 的下一站。
					</p>
				</motion.div>

				{/* Body: left = 3 memory layers, right = 4 actions */}
				<div style={{ display: 'flex', gap: 14, width: '100%', flex: 1 }}>
					{/* Left: 3 layers stacked */}
					<div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: 10 }}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 11, color: '#666',
							letterSpacing: 2, fontWeight: 700,
						}}>INPUT · 3 层企业记忆</div>
						{LAYERS.map((l, i) => (
							<motion.div
								key={l.id}
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.45, delay: 0.2 + i * 0.15 }}
								style={{
									background: colors.white, border, boxShadow: shadow,
									padding: '12px 14px', position: 'relative', flex: 1,
								}}
							>
								<div style={{
									position: 'absolute', left: 0, top: 0, bottom: 0,
									width: 6, background: l.color,
								}} />
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
									<span style={{ fontSize: 22 }}>{l.icon}</span>
									<div>
										<div style={{ fontSize: 15, fontWeight: 900, color: colors.dark }}>
											{l.title}
										</div>
										<div style={{
											fontFamily: fonts.mono, fontSize: 9, color: '#888',
											letterSpacing: 1.2, textTransform: 'uppercase',
										}}>{l.subtitle}</div>
									</div>
								</div>
								<div style={{
									display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px 12px',
									fontSize: 10.5, color: '#444', lineHeight: 1.5,
								}}>
									{l.examples.map((ex) => (
										<div key={ex}>· {ex}</div>
									))}
								</div>
							</motion.div>
						))}
					</div>

					{/* Center arrow */}
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.85, type: 'spring', stiffness: 220, damping: 14 }}
						style={{
							display: 'flex', flexDirection: 'column', alignItems: 'center',
							justifyContent: 'center', minWidth: 90,
						}}
					>
						<div style={{
							width: 70, height: 70, background: colors.red,
							border: `3px solid ${colors.black}`, boxShadow: shadow,
							color: colors.white, fontSize: 32, fontWeight: 900,
							display: 'flex', alignItems: 'center', justifyContent: 'center',
						}}>AI</div>
						<div style={{
							marginTop: 8, fontFamily: fonts.mono, fontSize: 10,
							color: '#666', letterSpacing: 1.5, fontWeight: 700,
						}}>BRAIN</div>
						<div style={{
							marginTop: 4, fontFamily: fonts.mono, fontSize: 22,
							color: colors.red, fontWeight: 900,
						}}>→</div>
					</motion.div>

					{/* Right: 4 actions */}
					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 11, color: '#666',
							letterSpacing: 2, fontWeight: 700,
						}}>OUTPUT · 4 件 AI 主动做的事</div>
						{ACTIONS.map((a, i) => (
							<motion.div
								key={a.label}
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4, delay: 1.0 + i * 0.1 }}
								style={{
									background: colors.dark, color: colors.white,
									border, boxShadow: shadow,
									padding: '10px 12px', flex: 1, minHeight: 60,
								}}
							>
								<div style={{
									display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4,
								}}>
									<span style={{ fontSize: 18 }}>{a.icon}</span>
									<span style={{ fontSize: 14, fontWeight: 900, color: colors.yellow }}>
										{a.label}
									</span>
								</div>
								<div style={{ fontSize: 11, lineHeight: 1.5, color: '#ddd' }}>
									{a.example}
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Footer banner */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.5 }}
					style={{
						width: '100%', background: colors.yellow, color: colors.black,
						border, padding: '10px 16px', display: 'flex', alignItems: 'center',
						gap: 14, fontSize: 13,
					}}
				>
					<span style={{
						fontFamily: fonts.mono, fontSize: 11, fontWeight: 800,
						letterSpacing: 1.5, background: colors.black, color: colors.yellow,
						padding: '3px 8px',
					}}>WHY 这是终态</span>
					<span style={{ lineHeight: 1.5 }}>
						<span style={{ fontWeight: 800 }}>没有记忆的 AI = 工具</span>。
						<span style={{ fontWeight: 800 }}>有记忆的 AI = 同事</span>。
						前面 26 个新岗位 + Chapter 5 的 4 步 pipeline，都在朝<span style={{ fontWeight: 800 }}>这里</span>走。
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
