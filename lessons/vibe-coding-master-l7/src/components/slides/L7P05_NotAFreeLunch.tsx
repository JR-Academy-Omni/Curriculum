import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P05：新 context 不是免费午餐 —— 三项强收益 vs 三项代价
// SoT：蓝图 v1.0 §6.1 不等式 + §6.3 第一层（协作收益已随 Agent Team 移交 L8）
const GAINS = [
	{ k: '隔离收益', v: '会产生大量搜索结果、日志、失败尝试，而主线只需要结论' },
	{ k: '并行收益', v: '有两个以上互不依赖的调查分支，可以同时推进' },
	{ k: '独立视角', v: '需要一个没参与实现的 Agent 按明确判据找证据或反例', star: true },
];

const COSTS = [
	{ k: '冷启动', v: '它从零重建 context，你聊过的话它一句都不知道' },
	{ k: '报告开销', v: '它写一份，你再读一遍，中间还要拆任务' },
	{ k: '合并 / 冲突', v: '多路结果要对齐，写入还可能互相覆盖' },
];

export default function L7P05_NotAFreeLunch() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
				<div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
					<Tag bg={colors.dark}>这件事值得开一个新 context 吗</Tag>
				</div>
				<Title size="44px" style={{ marginBottom: 6 }}>
					新 context <span style={{ background: colors.yellow, padding: '0 10px' }}>不是免费午餐</span>
				</Title>
				<p style={{ fontSize: 18, color: '#555', fontWeight: 500, marginBottom: 20 }}>
					开一个新 context 一定有收益，也一定有成本。<strong>至少命中一项强收益</strong>，才有资格进入成本比较。
				</p>

				<div style={{ display: 'flex', gap: 20, alignItems: 'stretch' }}>
					<motion.div
						initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.15 }}
						style={{ flex: 1.15, border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: colors.green, padding: '10px 16px', fontFamily: fonts.mono, fontSize: 13, letterSpacing: 1.5, fontWeight: 700, color: colors.black }}>
							收益 · 至少命中一项
						</div>
						<div style={{ padding: '14px 16px' }}>
							{GAINS.map((g, i) => (
								<motion.div
									key={g.k}
									initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
									style={{
										marginBottom: i < GAINS.length - 1 ? 14 : 0,
										background: g.star ? '#fffbe8' : 'transparent',
										padding: g.star ? '8px 10px' : 0,
										margin: g.star ? '0 -10px 0' : undefined,
									}}
								>
									<div style={{ fontSize: 16, fontWeight: 800, color: colors.dark, marginBottom: 2 }}>
										<span style={{ color: colors.green, marginRight: 6 }}>▸</span>{g.k}
										{g.star && <span style={{ marginLeft: 8, fontSize: 11.5, fontFamily: fonts.mono, background: colors.red, color: colors.white, padding: '2px 7px' }}>1 个就能拿满</span>}
									</div>
									<div style={{ fontSize: 14.5, color: '#555', lineHeight: 1.5, paddingLeft: 16 }}>{g.v}</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.7, type: 'spring', stiffness: 200, damping: 14 }}
						style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center' }}
					>
						<div style={{
							width: 66, height: 66, background: colors.dark, color: colors.yellow,
							border, boxShadow: shadow, display: 'flex', alignItems: 'center', justifyContent: 'center',
							fontFamily: fonts.mono, fontSize: 34, fontWeight: 700,
						}}>&gt;</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.15 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: colors.red, padding: '10px 16px', fontFamily: fonts.mono, fontSize: 13, letterSpacing: 1.5, fontWeight: 700, color: colors.white }}>
							代价 · 每次都要付
						</div>
						<div style={{ padding: '14px 16px' }}>
							{COSTS.map((c, i) => (
								<motion.div
									key={c.k}
									initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
									style={{ marginBottom: i < COSTS.length - 1 ? 14 : 0 }}
								>
									<div style={{ fontSize: 16, fontWeight: 800, color: colors.dark, marginBottom: 2 }}>
										<span style={{ color: colors.red, marginRight: 6 }}>▸</span>{c.k}
									</div>
									<div style={{ fontSize: 14.5, color: '#555', lineHeight: 1.5, paddingLeft: 16 }}>{c.v}</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 0.95 }}
					style={{
						marginTop: 20, padding: '13px 22px', background: colors.dark, color: colors.white,
						border, boxShadow: shadow, fontSize: 17.5, fontWeight: 700, textAlign: 'center',
					}}
				>
					「独立视角」是三项里<span style={{ color: colors.yellow }}>唯一一个 1 个子 Agent 就能拿满</span>的——
					隔离和并行都要量。<span style={{ color: colors.yellow }}>记住这条，后面有用。</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
