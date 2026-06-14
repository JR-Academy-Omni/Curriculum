import { Slide, Inner, Half, Title, Tag, Card, colors, fonts } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

// Context ≠ Memory
export default function S07_ContextVsMemory() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.blue} color={colors.white}>最容易搞混的一对</Tag>
						<Title size="56px" style={{ marginTop: 16, lineHeight: 1.12 }}>
							Context 不等于 Memory
						</Title>
						<p style={{ fontSize: 21, color: '#444', marginTop: 18, lineHeight: 1.6 }}>
							很多人以为「我这次讲清楚了 AI 就记住了」。错。
							那只是<b>这一次对话的上下文</b>，窗口一关、对话一新，<b style={{ color: colors.red }}>全部清零</b>。
						</p>
						<p style={{ fontSize: 21, color: '#444', marginTop: 16, lineHeight: 1.6 }}>
							要真正「记住」，必须把它<b>写进文件落盘</b> ——
							这才是 Memory，下次开机自动回到上下文里。
						</p>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
						<Card bg={colors.white}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.blue, fontWeight: 800 }}>CONTEXT · 工作记忆</div>
							<div style={{ fontSize: 18, marginTop: 8, lineHeight: 1.5 }}>
								临时 · 有上限 · 会被截断 / 总结 · 关掉就没
							</div>
							<div style={{ fontSize: 15, color: '#777', marginTop: 6 }}>类比：桌面上摊开的草稿纸</div>
						</Card>
						<div style={{ textAlign: 'center', fontSize: 28, fontWeight: 900, color: colors.red }}>↓ 必须落盘 ↓</div>
						<Card bg={colors.dark}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.green, fontWeight: 800 }}>MEMORY · 长期记忆</div>
							<div style={{ fontSize: 18, marginTop: 8, lineHeight: 1.5, color: colors.white }}>
								持久 · 进 git · 跨会话 / 跨人 / 跨 agent 共享
							</div>
							<div style={{ fontSize: 15, color: '#bbb', marginTop: 6 }}>类比：归档进档案柜的文件</div>
						</Card>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
