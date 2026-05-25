import { motion } from 'framer-motion';
import { Slide, Inner, Title, Divider, colors, fonts, border, shadow } from '../ui';

const phases = [
	{ weeks: 'Week 1-2', title: 'AI 工具精通', icon: '🔧', color: colors.indigo, items: ['ChatGPT / Claude / Copilot 深度实操', 'Prompt Engineering 实战', 'Zapier / n8n 自动化', 'Vibe Coding (Non-coder 版)'] },
	{ weeks: 'Week 3-5', title: '业务场景实战', icon: '🎯', color: colors.teal, items: ['AI 做 Facebook 广告', 'AI 做 Sales Outreach', 'AI 做简历筛选', 'AI 做发票处理', '+ 更多 48 个场景'] },
	{ weeks: 'Week 6-7', title: '部门工作流方法论', icon: '🏢', color: colors.orange, items: ['AI 就绪度评估', 'AI 机会审计 & ROI', '变革管理 (ADKAR)', 'AI 治理 & 合规'] },
	{ weeks: 'Week 8', title: '毕业项目', icon: '🎓', color: colors.red, items: ['5 个可复用 SOP + ROI 报告', 'Demo Day 展示', 'AI Workflow Specialist 证书'] },
];

export default function S05_Curriculum() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<Title size="clamp(30px,4vw,50px)">课程结构 — 8 周</Title>
				<Divider center />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, width: '100%', maxWidth: 1200, marginTop: 8 }}>
					{phases.map((p, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.12 }}
							style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden' }}
						>
							<div style={{ background: p.color, padding: '14px 16px', color: '#fff' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, opacity: 0.8 }}>{p.weeks}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 800, marginTop: 4 }}>{p.icon} {p.title}</div>
							</div>
							<ul style={{ padding: '14px 16px', listStyle: 'none', fontSize: 14, lineHeight: 2 }}>
								{p.items.map((item, j) => (
									<li key={j}><span style={{ color: p.color, fontWeight: 700 }}>→ </span>{item}</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</Inner>
		</Slide>
	);
}
