import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { TopoSubagent } from '../TopoDiagram';

// P04：Hub-and-spoke —— 它们之间没有连线
// SoT：蓝图 v1.0 §2「这一句要讲透，因为它同时定义了 Subagent 的能力和边界」
export default function L7P04_HubAndSpoke() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 54%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.blue}>Hub-and-spoke</Tag>
						<Tag bg={colors.dark}>主从式</Tag>
					</div>
					<Title size="40px" style={{ marginBottom: 4 }}>
						它们之间<span style={{ background: colors.yellow, padding: '0 8px' }}>没有连线</span>
					</Title>
					<p style={{ fontSize: 16.5, color: '#555', fontWeight: 500, marginBottom: 8 }}>
						分工、补 context、冲突处理——全部经过 Hub。
					</p>
					<div style={{ border, boxShadow: shadow, background: colors.white, padding: '8px 8px 2px' }}>
						<TopoSubagent height={310} />
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						同一句话，同时定义了能力和边界
					</div>

					<motion.div
						initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.42, delay: 0.25 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 16 }}
					>
						<div style={{ background: colors.green, color: colors.black, padding: '9px 15px', fontSize: 15.5, fontWeight: 800 }}>
							✓ 能力
						</div>
						<div style={{ padding: '14px 16px', fontSize: 16.5, lineHeight: 1.65, color: colors.dark }}>
							每个子 Agent 的噪音<strong>留在自己那边</strong>，
							主 context 不被污染。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.42, delay: 0.42 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 18 }}
					>
						<div style={{ background: colors.red, color: colors.white, padding: '9px 15px', fontSize: 15.5, fontWeight: 800 }}>
							✕ 边界
						</div>
						<div style={{ padding: '14px 16px', fontSize: 16.5, lineHeight: 1.65, color: colors.dark }}>
							A 的发现<strong>不会自动传给 B</strong>。
							要传，只能经过你或主 Agent。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.42, delay: 0.65 }}
						style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '15px 18px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.yellow, letterSpacing: 1.3, fontWeight: 700, marginBottom: 8 }}>
							一定会有人问
						</div>
						<div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.55, marginBottom: 10 }}>
							「那要是它们需要互相说话呢？」
						</div>
						<div style={{
							fontSize: 15.5, lineHeight: 1.6, paddingTop: 10,
							borderTop: '2px solid rgba(255,255,255,0.25)', opacity: 0.92,
						}}>
							那是<strong style={{ color: colors.yellow }}>下节课的结构</strong>。
							今天先把这一种用透——大部分任务根本不需要它们说话。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
