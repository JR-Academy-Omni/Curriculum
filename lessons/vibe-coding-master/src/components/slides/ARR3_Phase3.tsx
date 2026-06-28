import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 对照 ai-builder/public/outline.json phases[2]（Phase 3 — 多模型 & Prompt 精调，L67–L83，共 16 节 / 6 Lab）
// 16 节按主题归 5 簇；count 之和 = 3+6+2+2+3 = 16；Lab 之和 = 1+3+0+2+0 = 6
const clusters = [
	{
		num: '①',
		theme: '多模型对比 & 工具选型',
		learn: '给每个能力选对模型：Claude 复杂推理 / Codex 本地小步改 / GPT-5.5 快速生成',
		rep: 'Lab: 工具选型实战 — 没有绝对的最好，只有最适合',
		count: 3,
		labs: 1,
	},
	{
		num: '②',
		theme: 'Prompt 精调四技巧',
		learn: 'Zero-shot / Chain of Thought 思维链 / Self-Consistency 多路投票 / Prompt Chaining，把准确率提上去',
		rep: 'Lab: Chain of Thought · Lab: Self-Consistency',
		count: 6,
		labs: 3,
	},
	{
		num: '③',
		theme: 'Codex CLI 实战 & 调试',
		learn: '终端里一条命令让 AI 写 / 改 / 跑代码；config.toml 配置 + 与 Claude Code 配合的工作流',
		rep: 'Codex CLI 与高效调试技巧全解析',
		count: 2,
		labs: 0,
	},
	{
		num: '④',
		theme: 'Prompt 评估 & 迭代',
		learn: '量化 Prompt 质量（评分标准 / A-B 测试），用追问把 AI 的半成品一步步改到能用',
		rep: 'Lab: Prompt 评估 · Lab: Prompt 迭代与追问',
		count: 2,
		labs: 2,
	},
	{
		num: '⑤',
		theme: '性能 · 成本优化闭环',
		learn: '从「能生成代码」推到「稳定交付」：质量 / 速度 / 成本三个指标一起调，少返工少等待少无效调用',
		rep: 'AI Coding 优化闭环：质量、速度、成本一起调',
		count: 3,
		labs: 0,
	},
];

// Phase 3 详细课程安排 —— 选引擎、调优
export default function ARR3_Phase3() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.blue} color={colors.black}>Phase 3 · Week 5-7 · 多模型 & Prompt 精调</Tag>
					<Title size="42px" style={{ marginTop: 10 }}>
						Phase 3 · 多模型 & Prompt 精调<span style={{ color: '#888', fontWeight: 800 }}>（约 16 节）</span>
					</Title>
					<p style={{ fontSize: 17, color: '#555', marginTop: 8, lineHeight: 1.5 }}>
						<b style={{ color: colors.blue }}>选引擎、调优</b> —— 给每个能力选对模型，把<b style={{ color: colors.black }}>质量和成本</b>压到能上生产。
					</p>
				</motion.div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
					{clusters.map((c, i) => (
						<motion.div key={i}
							initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.1, type: 'spring', stiffness: 160, damping: 18 }}
							style={{ display: 'flex', alignItems: 'center', gap: 16, background: colors.white, border, boxShadow: shadowSm, padding: '10px 16px' }}>
							<div style={{ width: 42, flexShrink: 0, fontSize: 30, fontWeight: 900, lineHeight: 1, color: colors.blue, textAlign: 'center' }}>{c.num}</div>
							<div style={{ width: 4, alignSelf: 'stretch', background: colors.blue, flexShrink: 0 }} />
							<div style={{ flex: 1, minWidth: 0 }}>
								<div style={{ fontSize: 18, fontWeight: 900, color: colors.black }}>{c.theme}</div>
								<div style={{ fontSize: 13.5, color: '#666', marginTop: 2, lineHeight: 1.4 }}>{c.learn}</div>
								<div style={{ fontSize: 12.5, color: colors.black, marginTop: 4, fontFamily: fonts.mono }}>
									<span style={{ color: '#999' }}>代表 ·</span> {c.rep}
								</div>
							</div>
							<div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5 }}>
								<span style={{ padding: '3px 10px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800 }}>{c.count} 节</span>
								{c.labs > 0 && (
									<span style={{ padding: '3px 10px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800 }}>🔨 {c.labs} Lab</span>
								)}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 14, background: colors.dark, border, boxShadow: shadow, padding: '12px 20px' }}>
					<span style={{ fontSize: 15, fontWeight: 900, color: colors.white }}>本阶段 16 节 = 5 大主题</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: '#cfd3e6' }}>3 直播 · 7 自学/参考 · 6 互动 Lab</span>
					<span style={{ marginLeft: 'auto', padding: '5px 14px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 13, fontWeight: 900 }}>
						🔨 含 6 个互动 Lab — 边调边量化
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
