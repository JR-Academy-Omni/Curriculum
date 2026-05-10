import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const COL1 = [
	{ icon: '🔥', label: 'Logo' },
	{ icon: '🌐', label: '域名 / 官网' },
	{ icon: '🔗', label: 'LinkedIn Company Page' },
	{ icon: '📝', label: 'One-liner' },
	{ icon: '🎨', label: '品牌一致性' },
	{ icon: '📹', label: 'Demo 视频' },
	{ icon: '🎮', label: 'Live Demo' },
	{ icon: '📄', label: 'Landing Page' },
	{ icon: '📋', label: '功能列表' },
	{ icon: '📚', label: '用户文档 / FAQ' },
];

const COL2 = [
	{ icon: '👤', label: '用户访谈记录' },
	{ icon: '💬', label: '使用反馈' },
	{ icon: '📊', label: '注册或试用数据' },
	{ icon: '📢', label: '社媒曝光' },
	{ icon: '💭', label: 'Testimonials' },
	{ icon: '💰', label: '收费逻辑设计' },
	{ icon: '💳', label: '支付页面' },
	{ icon: '💸', label: 'Pricing Page' },
	{ icon: '🧪', label: 'A/B 测试策略' },
	{ icon: '📦', label: '套餐设计' },
];

const COL3 = [
	{ icon: '🧭', label: 'Agile 方法论' },
	{ icon: '🗂️', label: 'User Story 编写' },
	{ icon: '🔍', label: '需求文档 (PRD)' },
	{ icon: '🔄', label: 'SCRUM 管理工具' },
	{ icon: '🧩', label: '技术文档 (Tech Spec)' },
	{ icon: '🖌️', label: 'UI 设计稿' },
	{ icon: '👥', label: 'Standup 记录' },
	{ icon: '✅', label: 'QA 流程' },
	{ icon: '🚀', label: '版本迭代' },
	{ icon: '⚙️', label: 'DevOps 流程' },
];

const ALL_COLS = [
	{ items: COL1, accent: '#5fd6c5' },   // cyan
	{ items: COL2, accent: '#5fd6c5' },
	{ items: COL3, accent: '#5fd6c5' },
];

function ChecklistRow({ icon, label, accent, delay }: { icon: string; label: string; accent: string; delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -10 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.25, delay }}
			style={{
				background: accent, color: colors.dark,
				border: `2.5px solid ${colors.black}`, boxShadow: `2px 2px 0 ${colors.black}`,
				borderRadius: 999, padding: '6px 14px',
				display: 'grid', gridTemplateColumns: '32px 1fr 24px', gap: 8, alignItems: 'center',
			}}
		>
			<div style={{
				width: 28, height: 28, borderRadius: '50%',
				background: colors.dark, color: colors.white,
				display: 'flex', alignItems: 'center', justifyContent: 'center',
				fontSize: 14, lineHeight: 1, border: `2px solid ${colors.black}`,
			}}>
				<span>{icon}</span>
			</div>
			<div style={{
				fontFamily: fonts.heading, fontSize: 16, fontWeight: 900,
				color: colors.dark, letterSpacing: -0.3, lineHeight: 1.1,
			}}>
				{label}
			</div>
			<div style={{
				width: 22, height: 22, borderRadius: '50%',
				background: colors.dark, color: colors.white,
				display: 'flex', alignItems: 'center', justifyContent: 'center',
				fontSize: 13, fontWeight: 900, border: `1.5px solid ${colors.black}`,
			}}>
				✓
			</div>
		</motion.div>
	);
}

export default function L_MetatownChecklist() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '96%', maxWidth: 1700, padding: '24px 32px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 18, display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}
				>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 56, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.dark,
					}}>
						Metatown <span style={{ color: '#5fd6c5' }}>Commercial Checklist</span>
					</h2>
					<div style={{
						padding: '4px 12px', background: colors.dark, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 2,
						border: `2.5px solid ${colors.black}`,
					}}>
						30 项 · P3 是不是真商业的标准
					</div>
					<div style={{
						width: 80, height: 4, background: colors.red, marginLeft: 0,
					}} />
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
					{ALL_COLS.map((col, ci) => (
						<div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
							{col.items.map((it, i) => (
								<ChecklistRow
									key={it.label}
									icon={it.icon}
									label={it.label}
									accent={col.accent}
									delay={0.2 + ci * 0.08 + i * 0.025}
								/>
							))}
						</div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.0 }}
					style={{
						marginTop: 18, padding: '12px 22px',
						background: colors.indigo, color: colors.white,
						border, boxShadow: `5px 5px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
						letterSpacing: -0.3, lineHeight: 1.4, textAlign: 'center',
					}}
				>
					30 项全打勾 = 真商业项目 · P3 团队按这个标准交付 ·{' '}
					<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>
						结业即"在职经验"
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
