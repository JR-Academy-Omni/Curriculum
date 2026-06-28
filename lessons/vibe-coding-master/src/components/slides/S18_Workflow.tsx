import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// Workflow —— 从一次性 prompt → 静态编排 → 动态 Workflow（Fable 5 + Ultra Plan）
const tiers = [
	{ n: '①', t: '一句 prompt', d: '「帮我审一下这门课」→ 结果飘忽、看运气、没法复现', bg: colors.white, fg: colors.black, tag: '#999', tagLabel: '最朴素' },
	{ n: '②', t: '静态编排（你写死流程）', d: '多维并行审 → 各自找问题 → 对抗复核 → 去重 → 人确认。控制流固定，谁跑都一样', bg: colors.dark, fg: colors.white, tag: colors.yellow, tagLabel: '可复现' },
	{ n: '③', t: '动态 Workflow', d: 'AI 自己规划步骤、自己派子 agent、循环到收敛 —— 不用你写死脚本。Fable 5 + Ultra Plan 解锁', bg: '#1c1430', fg: colors.white, tag: colors.purple, tagLabel: 'Fable 5 · 自驱' },
];

export default function S18_Workflow() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.purple} color={colors.white}>BUILD 阶段 · 编排</Tag>
						<Title size="46px" style={{ marginTop: 14, lineHeight: 1.14 }}>
							Workflow：从「<span style={{ color: colors.red }}>看手感</span>」到<span style={{ background: colors.yellow, padding: '0 8px' }}>可复现</span>，再到<span style={{ color: colors.purple }}>自驱</span>
						</Title>
						<p style={{ fontSize: 18, color: '#444', marginTop: 16, lineHeight: 1.6 }}>
							一次性 prompt 这次行、下次未必行。把「该怎么干」固化成<b>编排</b>：哪步并行、哪步验证、哪步要人确认 —— 大任务（审计、迁移、批量生成）尤其需要。
						</p>
						<div style={{ marginTop: 16, background: '#1c1430', color: colors.white, border, boxShadow: `5px 5px 0 ${colors.purple}`, padding: '13px 18px', fontSize: 15, lineHeight: 1.55 }}>
							<b style={{ color: colors.purple }}>③ 动态 Workflow</b> 更进一步：你只给目标，<b style={{ color: colors.yellow }}>AI 自己编排 + 自己派 agent + 自驱循环</b>。
							这套自主编排靠 <b>Fable 5</b> 的强规划，开 <b>Ultra Plan</b> 模式启用。
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
						{tiers.map((x, i) => (
							<motion.div key={x.n}
								initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
								style={{ background: x.bg, color: x.fg, border, boxShadow: i === 2 ? `6px 6px 0 ${colors.purple}` : shadow, padding: '13px 17px' }}>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
									<span style={{ fontSize: 16, fontWeight: 900 }}><span style={{ color: x.tag }}>{x.n}</span> {x.t}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: i === 0 ? x.tag : colors.black, background: i === 0 ? 'transparent' : x.tag, padding: i === 0 ? 0 : '3px 8px' }}>{x.tagLabel}</span>
								</div>
								<div style={{ fontSize: 14, color: x.fg === colors.white ? '#cfd3e6' : '#666', marginTop: 6, lineHeight: 1.5 }}>{x.d}</div>
							</motion.div>
						))}
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
