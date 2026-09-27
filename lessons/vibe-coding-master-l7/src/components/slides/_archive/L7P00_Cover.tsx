import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// 封面：Vibe Coding 大师课 · 第七节 —— 多 Agent 协作
// 标题口径取自蓝图 §17 待确认项 5 的建议值
export default function L7P00_Cover() {
	const chips = ['两种结构', '两问决策', '两次体验'];
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ textAlign: 'center' }}>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							display: 'inline-block', padding: '8px 20px',
							background: colors.black, color: colors.yellow,
							fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
							letterSpacing: 3, marginBottom: 28,
						}}>
						VIBE CODING 大师课 · 第七节
					</motion.div>

					<Title size="76px" style={{ lineHeight: 1.08, marginBottom: 18 }}>
						<motion.span
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.15 }}
							style={{ display: 'block' }}
						>
							多 Agent 协作
						</motion.span>
					</Title>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}
					>
						<span style={{
							fontFamily: fonts.mono, fontSize: 27, fontWeight: 700,
							background: colors.blue, color: colors.white, padding: '4px 18px',
							border, boxShadow: '4px 4px 0 #000',
						}}>Subagent</span>
						<span style={{ fontSize: 22, fontWeight: 900, color: '#888' }}>还是</span>
						<span style={{
							fontFamily: fonts.mono, fontSize: 27, fontWeight: 700,
							background: colors.purple, color: colors.white, padding: '4px 18px',
							border, boxShadow: '4px 4px 0 #000',
						}}>Agent Team</span>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.7 }}
						style={{ display: 'inline-flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
						{chips.map((c, i) => (
							<span key={c} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, background: colors.white, color: colors.black, border: `2px solid ${colors.black}`, padding: '5px 12px' }}>{c}</span>
								{i < chips.length - 1 && <span style={{ color: colors.red, fontWeight: 900 }}>→</span>}
							</span>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.95 }}
						style={{
							display: 'inline-flex', gap: 16, alignItems: 'center',
							padding: '16px 28px', marginTop: 26,
							background: colors.white, border, boxShadow: shadow,
						}}>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, color: '#666', letterSpacing: 2 }}>JR ACADEMY</span>
						<span style={{ fontSize: 18, fontWeight: 700 }}>多 Agent 改变的是信息怎样流动，不会转移最终验收责任</span>
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.15 }}
						style={{ marginTop: 20, fontSize: 14, color: '#999', fontFamily: fonts.mono, letterSpacing: 1 }}>
						← → 翻页 · F 全屏 · V 开摄像头
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
