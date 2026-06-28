import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

const flow = [
	{ s: 'spec', zh: 'PRD 写好，还没开工', color: '#9aa0bb' },
	{ s: 'build', zh: '第一次落代码就切', color: '#FF914D' },
	{ s: 'eval', zh: '待 review / 灰度 / 确认', color: '#38B6FF' },
	{ s: 'ship', zh: '上线 / 合并 / 关闭', color: '#7ED957' },
];

// PRD 驱动 + Chorus 看板状态流
export default function S17_PRD() {
	return (
		<Slide bg={colors.dark}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.yellow} color={colors.black}>SPEC 阶段 · 真实做法</Tag>
						<Title white size="48px" style={{ marginTop: 14, lineHeight: 1.14 }}>
							用 <span style={{ color: colors.yellow }}>PRD</span> 把目标<br />变成可追踪的工程
						</Title>
						<p style={{ fontSize: 19, color: '#cfd3e6', marginTop: 16, lineHeight: 1.6 }}>
							复杂任务别上来就让 AI 写代码。先写一份 <b style={{ color: colors.white }}>PRD</b>：
							要解决什么、方案、风险、<b>验收标准</b>。人和 AI 对齐了再动手 —— 返工最少。
						</p>
						<p style={{ fontSize: 19, color: '#cfd3e6', marginTop: 14, lineHeight: 1.6 }}>
							匠人每个 PRD 顶部有 <code style={{ color: colors.yellow }}>status:</code> 字段，
							任务一推进就改状态 —— 看板（Chorus）实时可见，<b>工作不再「消失」</b>。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
						{flow.map((f, i) => (
							<motion.div key={f.s}
								initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.14 }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 14, background: colors.white, border, boxShadow: shadow, padding: '12px 16px' }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, color: colors.white, background: f.color, padding: '4px 12px', minWidth: 72, textAlign: 'center' }}>{f.s}</span>
									<span style={{ fontSize: 17, fontWeight: 700 }}>{f.zh}</span>
								</div>
								{i < flow.length - 1 && <div style={{ textAlign: 'center', color: f.color, fontSize: 18, lineHeight: '20px' }}>↓</div>}
							</motion.div>
						))}
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
							style={{ marginTop: 14, fontFamily: fonts.mono, fontSize: 13, color: '#8890b0', lineHeight: 1.6 }}>
							{'---'}<br />
							title: 某功能 PRD<br />
							<span style={{ color: colors.yellow }}>status: build</span>   {'# ← 改这一行'}<br />
							owner: @lightman<br />
							{'---'}
						</motion.div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
