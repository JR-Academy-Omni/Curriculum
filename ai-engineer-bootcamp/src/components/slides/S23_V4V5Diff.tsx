import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { courseMeta } from '../../data/phases';

const rows = [
	{ label: '正式直播', before: '60 个 Live lesson', after: `${courseMeta.liveClasses} 场：12 理论 + 12 实践`, delta: '固定周节奏' },
	{ label: '直播时长', before: '约 82 小时', after: `${courseMeta.estimatedHours} 小时`, delta: '稳定理论录播化' },
	{ label: '课程内容', before: '292 个条目', after: `${courseMeta.totalLessons} 个条目`, delta: '旧内容不删除' },
	{ label: '实践主线', before: '多个分散项目', after: 'CareKind AI 贯穿 12 周', delta: '同一产品持续迭代' },
	{ label: '模型能力', before: 'Fine-Tuning 实操偏重', after: 'Model Routing 核心 + FT 决策', delta: '更贴近面试与生产' },
];

export default function S23_V4V5Diff() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '90%', padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
				<motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ textAlign: 'center' }}>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '48px', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1, margin: 0 }}>
						第七期改变的不是知识量，<span style={{ display: 'inline-block', padding: '0 12px', background: colors.yellow, border, boxShadow: shadowSm, transform: 'rotate(-1deg)' }}>是交付方式</span>
					</h2>
					<p style={{ fontFamily: fonts.mono, fontSize: 14, color: '#555', fontWeight: 700, marginTop: 8 }}>
						10 个 Phase 保留 · 每周一场理论 Live + 一场实践 Live
					</p>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '140px 1fr 40px 1.35fr 150px', gap: 10, alignItems: 'center', padding: '6px 14px', background: colors.dark, color: colors.white, border, boxShadow: shadowSm, fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, letterSpacing: 1 }}>
					<div>维度</div><div style={{ opacity: 0.6 }}>旧交付结构</div><div /><div style={{ color: colors.yellow }}>COHORT 7</div><div style={{ textAlign: 'right' }}>WHY</div>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
					{rows.map((row, index) => (
						<motion.div key={row.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 + index * 0.1 }} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 40px 1.35fr 150px', gap: 10, alignItems: 'center', padding: '12px 14px', background: colors.white, border, boxShadow: shadowSm }}>
							<div style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 800 }}>{row.label}</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: '#999' }}>{row.before}</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 900, color: colors.red, textAlign: 'center' }}>→</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900 }}>{row.after}</div>
							<div style={{ textAlign: 'right', fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: colors.white, background: colors.red, padding: '4px 8px', border: `2px solid ${colors.black}`, justifySelf: 'end' }}>{row.delta}</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} style={{ padding: '14px 18px', background: colors.dark, color: colors.white, border, boxShadow: shadow, textAlign: 'center' }}>
					<span style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900 }}>
						<span style={{ color: colors.yellow }}>W1 AI Coding + ADLC</span> → W2 Design System → W3 CareKind MVP → RAG → Agents → <span style={{ color: colors.red }}>Model Routing + Governance</span>
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
