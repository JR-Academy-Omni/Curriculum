import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

// 收尾
export default function S28_Closing() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
					style={{ display: 'inline-block', padding: '8px 20px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 3, marginBottom: 28 }}>
					谢谢 · Q&A
				</motion.div>

				<Title white size="68px" style={{ textAlign: 'center', lineHeight: 1.12 }}>
					<motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} style={{ display: 'block' }}>
						先有 <span style={{ color: colors.yellow }}>Source of Truth</span>，
					</motion.span>
					<motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} style={{ display: 'block' }}>
						AI 才真正替你干活。
					</motion.span>
				</Title>

				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
					style={{ display: 'inline-flex', gap: 16, alignItems: 'center', padding: '16px 30px', marginTop: 34, background: colors.white, border, boxShadow: shadow }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, color: '#666', letterSpacing: 2 }}>JR ACADEMY</span>
					<span style={{ fontSize: 18, fontWeight: 700 }}>全球华人学习 AI 第一站 · jiangren.com.au</span>
				</motion.div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 26, fontSize: 16, color: '#8890b0', fontFamily: fonts.mono }}>
					记忆系统 · ADLC · Skills / Subagents / Workflow —— 回去就建起来
				</motion.p>
			</Inner>
		</Slide>
	);
}
