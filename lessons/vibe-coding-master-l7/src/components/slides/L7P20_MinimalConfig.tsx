import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P18：最小配置 —— 1 个 verifier + 异构
// SoT：蓝图 v1.0 §6.7 最小配置阶梯 + §6.10 异构
const LADDER = [
	{ n: '1', who: 'verifier', why: '最小，也是单位成本收益最高的', hot: true },
	{ n: '2', who: '调查员 + verifier', why: '最小的「有分工」结构' },
	{ n: '3', who: '三路并行分支', why: '只有真有 ≥2 条互不依赖分支时才需要' },
];

export default function L7P20_MinimalConfig() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 48%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.dark}>回去先做哪一个</Tag>
					</div>
					<Title size="40px" style={{ marginBottom: 6 }}>
						最小配置：<span style={{ background: colors.yellow, padding: '0 8px' }}>1 个 verifier</span>
					</Title>
					<p style={{ fontSize: 16, color: '#555', fontWeight: 500, marginBottom: 16 }}>
						不用一上来就开三路。阶梯从 1 开始。
					</p>

					<div style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 18 }}>
						{LADDER.map((l, i) => (
							<motion.div
								key={l.n}
								initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.15 + i * 0.12 }}
								style={{
									display: 'flex', alignItems: 'center',
									borderBottom: i < LADDER.length - 1 ? '2px solid #eee' : 'none',
									background: l.hot ? '#fffbe8' : colors.white,
								}}
							>
								<div style={{
									flex: '0 0 48px', alignSelf: 'stretch', display: 'flex', alignItems: 'center', justifyContent: 'center',
									background: l.hot ? colors.red : '#eee', color: l.hot ? colors.white : '#888',
									fontFamily: fonts.mono, fontSize: 19, fontWeight: 700,
								}}>{l.n}</div>
								<div style={{ flex: 1, padding: '12px 15px' }}>
									<div style={{ fontSize: 16.5, fontWeight: 800, color: colors.dark }}>{l.who}</div>
									<div style={{ fontSize: 13, color: '#777', lineHeight: 1.4 }}>{l.why}</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.55 }}
						style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '15px 18px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.yellow, letterSpacing: 1.3, fontWeight: 700, marginBottom: 8 }}>
							为什么最小那个是 verifier，不是调查员
						</div>
						<div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.6, marginBottom: 9 }}>
							三项强收益里，<span style={{ color: colors.yellow }}>「独立视角」是唯一一个 1 个成员就能拿满</span>的——
							隔离和并行都要量。
						</div>
						<div style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.6, paddingTop: 9, borderTop: '2px solid rgba(255,255,255,0.2)' }}>
							而且它不需要并行、不需要协调、不需要汇总矩阵——<strong>冷启动是唯一成本</strong>。
						</div>
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.purple, letterSpacing: 1.4, fontWeight: 700, marginBottom: 9 }}>
						顺带回答一个常问的
					</div>
					<Title size="26px" style={{ marginBottom: 12 }}>
						能不能混用别家的 Agent？
					</Title>

					<motion.div
						initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.25 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 14 }}
					>
						<div style={{ background: '#f2f2f2', padding: '8px 14px', fontSize: 13, fontWeight: 700, color: '#666' }}>
							成员本身只能是同一家的会话，想混只有两条路
						</div>
						<div style={{ padding: '12px 15px' }}>
							{[
								{ n: '路 A', t: '把它包成一个工具', d: '让主 Agent 当外部工具调用', c: colors.blue },
								{ n: '路 B', t: '一个只给 Bash 的包装层', d: '让它去命令行喊别家的 CLI', c: colors.purple },
							].map((r, i) => (
								<div key={r.n} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: i === 0 ? 11 : 0 }}>
									<span style={{
										flex: '0 0 auto', fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700,
										background: r.c, color: colors.white, padding: '3px 8px',
									}}>{r.n}</span>
									<div>
										<div style={{ fontSize: 15, fontWeight: 800, color: colors.dark }}>{r.t}</div>
										<div style={{ fontSize: 13, color: '#666', lineHeight: 1.45 }}>{r.d}</div>
									</div>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.45 }}
						style={{ border, boxShadow: shadow, background: colors.yellow, padding: '14px 17px', marginBottom: 14 }}
					>
						<div style={{ fontSize: 16.5, fontWeight: 800, color: colors.black, lineHeight: 1.5, marginBottom: 6 }}>
							真该混的场景只有一个：verifier
						</div>
						<div style={{ fontSize: 13.5, color: '#554', lineHeight: 1.6 }}>
							同一个模型的两个 context，共享同样的偏好和盲区。
							<strong>换个模型家族，独立性硬得多</strong>——这是「验证的价值来自独立」的最强版本。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.68 }}
						style={{ border: `3px dashed ${colors.purple}`, background: '#faf4ff', padding: '13px 17px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.purple, letterSpacing: 1.3, fontWeight: 700, marginBottom: 7 }}>
							先埋一句，下节课回收
						</div>
						<div style={{ fontSize: 16, fontWeight: 800, color: colors.dark, lineHeight: 1.55 }}>
							异构<strong style={{ color: colors.green }}>只能进今天这种结构</strong>。
						</div>
						<div style={{ marginTop: 6, fontSize: 13.5, color: '#665', lineHeight: 1.6 }}>
							下节课那种协作结构做不到——为什么做不到，到时候讲。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
