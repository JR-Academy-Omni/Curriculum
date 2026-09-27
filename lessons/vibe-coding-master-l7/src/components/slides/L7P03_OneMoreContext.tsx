import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P03：全节立论页 —— 子 Agent = 多一个独立的 context
// SoT：蓝图 v1.0 §6.2「如果学员只带走一句话，必须是这句」+ §9.2 对比图
// ⚠️ 这一页要占足时间，不能一句话带过。讲不透这一句，后面全是零散技巧。
const INFERENCES = [
	{ k: '收益', v: '脏活在它的 context 里发生，主 context 只收结论', c: colors.green },
	{ k: '代价', v: '独立 context 要从零建，而且它看不见你的对话', c: colors.red },
	{ k: '铁律', v: '要它知道的，必须写进指令或落盘', c: colors.orange },
	{ k: '冲突', v: 'context 隔离了，文件系统没隔离', c: colors.purple },
];

export default function L7P03_OneMoreContext() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
				<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
					<Tag bg={colors.red}>全节立论</Tag>
					<Tag bg={colors.dark}>只带走一句话的话，是这句</Tag>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					style={{ marginBottom: 18 }}
				>
					<Title size="46px" style={{ lineHeight: 1.25 }}>
						子 Agent 不是<span style={{ color: '#aaa', textDecoration: 'line-through' }}>多一个人手</span>，<br />
						是多一个<span style={{ background: colors.yellow, padding: '0 10px' }}>独立的 context</span>
					</Title>
				</motion.div>

				<div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
					{/* L6 */}
					<motion.div
						initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.2 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: '#ddd', padding: '8px 15px', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, color: '#666', letterSpacing: 1.2 }}>
							L6 · 一个 context
						</div>
						<div style={{ padding: '14px 16px', fontFamily: fonts.mono, fontSize: 13, lineHeight: 1.95, color: '#555' }}>
							你 → 主 Agent ──读 50 个文件──→<br />
							<span style={{ color: colors.red, fontWeight: 700 }}>　context 里堆了 39 份「不是这里」</span><br />
							<span style={{ color: '#999' }}>　　↓ 这些垃圾持续影响它后面每一轮</span><br />
							<span style={{ color: colors.red, fontWeight: 700 }}>　　结论质量下滑</span>
						</div>
					</motion.div>

					{/* L7 */}
					<motion.div
						initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.35 }}
						style={{ flex: 1.25, border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: colors.blue, padding: '8px 15px', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, color: colors.white, letterSpacing: 1.2 }}>
							L7 · 分家
						</div>
						<div style={{ padding: '14px 16px', fontFamily: fonts.mono, fontSize: 13, lineHeight: 1.95, color: '#555' }}>
							你 → 主 Agent ──派──→ <span style={{ color: colors.blue, fontWeight: 700 }}>子 A（自己的 context）</span>→ 只回结论<br />
							　　　　　　　├──→ <span style={{ color: colors.blue, fontWeight: 700 }}>子 B（自己的 context）</span>→ 只回结论<br />
							　　　　　　　└──→ <span style={{ color: colors.blue, fontWeight: 700 }}>子 C（自己的 context）</span>→ 只回结论<br />
							<span style={{ color: colors.green, fontWeight: 700 }}>　主 context 只多了三条结论，没多 39 份垃圾</span>
						</div>
					</motion.div>
				</div>

				<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 9 }}>
					这一句立住之后，后面所有内容都是它的推论
				</div>
				<div style={{ display: 'flex', gap: 12 }}>
					{INFERENCES.map((inf, i) => (
						<motion.div
							key={inf.k}
							initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.6 + i * 0.1 }}
							style={{ flex: 1, border, boxShadow: '3px 3px 0 #000', background: colors.white }}
						>
							<div style={{ background: inf.c, padding: '6px 12px', fontSize: 14, fontWeight: 800, color: colors.white, textAlign: 'center' }}>
								{inf.k}
							</div>
							<div style={{ padding: '10px 12px', fontSize: 13.5, color: '#444', lineHeight: 1.5, minHeight: 62 }}>
								{inf.v}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
					style={{ marginTop: 14, fontSize: 15.5, color: '#666', textAlign: 'center', lineHeight: 1.6 }}
				>
					讲不透这一句，后面全是<strong style={{ color: colors.dark }}>零散技巧</strong>。
				</motion.div>
			</Inner>
		</Slide>
	);
}
