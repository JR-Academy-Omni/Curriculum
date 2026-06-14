import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

// 两层一个系统 —— 记忆层（记得）+ AI OS（做事）
export default function S05a_TwoLayers() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ textAlign: 'center' }}>
					<Tag bg={colors.blue} color={colors.white}>你真正在搭的</Tag>
					<Title white size="48px" style={{ marginTop: 12 }}>
						两层，<span style={{ color: colors.blue }}>一个系统</span>
					</Title>
				</motion.div>

				{/* 上层：AI OS 做事 */}
				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
					style={{ marginTop: 26, alignSelf: 'center', width: '78%', background: '#13251a', border: `3px solid ${colors.green}`, boxShadow: `6px 6px 0 ${colors.green}`, padding: '16px 22px' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.green, fontWeight: 800, letterSpacing: 1, textAlign: 'center' }}>上层 · AI OS —— 它「做事」</div>
					<div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 10 }}>
						{['Skills', 'Subagents', 'Workflow', 'Hooks / Schedule'].map((x) => (
							<span key={x} style={{ background: colors.green, color: colors.black, border, fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, padding: '6px 14px' }}>{x}</span>
						))}
					</div>
				</motion.div>

				{/* 向上箭头 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
					style={{ alignSelf: 'center', display: 'flex', gap: 90, color: colors.blue, fontSize: 28, fontWeight: 900, margin: '6px 0' }}>
					<span>↑</span><span>↑</span><span>↑</span>
				</motion.div>

				{/* 下层：记忆层 记得 */}
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
					style={{ alignSelf: 'center', width: '78%', background: '#0f1f33', border: `3px solid ${colors.blue}`, boxShadow: `6px 6px 0 ${colors.blue}`, padding: '16px 22px' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.blue, fontWeight: 800, letterSpacing: 1, textAlign: 'center' }}>下层 · 记忆层（第二大脑）—— 它「记得」</div>
					<div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 10 }}>
						{['CLAUDE.md 规则', '决策 / 踩坑', '团队记忆', '真实数据'].map((x) => (
							<span key={x} style={{ background: colors.white, color: colors.black, border, fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, padding: '6px 14px' }}>{x}</span>
						))}
					</div>
				</motion.div>

				{/* 两句定义 */}
				<div style={{ display: 'flex', gap: 14, marginTop: 22, width: '78%', alignSelf: 'center' }}>
					<div style={{ flex: 1, background: '#0f1f33', border, padding: '11px 16px', fontSize: 14.5, color: '#cfd3e6', lineHeight: 1.5 }}>
						<b style={{ color: colors.blue }}>记忆层</b> = 你所有的真相，需要时取回
					</div>
					<div style={{ flex: 1, background: '#13251a', border, padding: '11px 16px', fontSize: 14.5, color: '#cfd3e6', lineHeight: 1.5 }}>
						<b style={{ color: colors.green }}>AI OS</b> = 替你干活，你在它之上工作
					</div>
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 16, fontSize: 16, color: colors.yellow, fontWeight: 800, textAlign: 'center', fontFamily: fonts.mono }}>
					// 今天上半场建「记得」这层，下半场装「做事」这层
				</motion.p>
			</Inner>
		</Slide>
	);
}
