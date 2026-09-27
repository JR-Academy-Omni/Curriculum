import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P15b：异构 —— 能不能混着用别家的 Agent，以及最小成员配置
// SoT：蓝图 §18.2（worker 都是同一家的 session；异构只能走 MCP 或 Bash 包装层）
//      + §6.3 四项强收益里「独立视角」是唯一一个 1 个成员就能拿满的
const LADDER = [
	{ n: '1', who: 'verifier', why: '最小，也是单位成本收益最高的', hot: true },
	{ n: '2', who: '调查员 + verifier', why: '最小的「有分工」结构' },
	{ n: '3', who: '三路并行分支', why: '只有真有 ≥2 条互不依赖分支时才需要' },
];

export default function L7P15b_Heterogeneous() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 50%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.dark}>常问</Tag>
					</div>
					<Title size="36px" style={{ marginBottom: 10 }}>
						能不能<span style={{ background: colors.yellow, padding: '0 8px' }}>混着用别家的</span>？
					</Title>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.12 }}
						style={{ border, boxShadow: shadow, background: '#fff2f2', padding: '12px 16px', marginBottom: 14 }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.red, letterSpacing: 1.3, fontWeight: 700, marginBottom: 5 }}>
							硬约束
						</div>
						<div style={{ fontSize: 16, fontWeight: 700, color: colors.dark, lineHeight: 1.55 }}>
							成员本身<strong>只能是同一家的会话</strong>。
							角色定义里那个「用哪个模型」的字段，收不了别家的名字。
						</div>
					</motion.div>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 8 }}>
						想混，只有两条路
					</div>
					{[
						{ n: '路 A', t: '把它包成一个工具', d: '让主 Agent 当外部工具调用（MCP 那一类）。官方给的正路。', c: colors.blue },
						{ n: '路 B', t: '一个只给 Bash 的包装层', d: '开一个 subagent，工具只留 Bash，让它去命令行喊别家的 CLI。', c: colors.purple },
					].map((r, i) => (
						<motion.div
							key={r.n}
							initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.33, delay: 0.28 + i * 0.12 }}
							style={{ border, boxShadow: '3px 3px 0 #000', background: colors.white, marginBottom: 10 }}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, background: r.c, padding: '7px 14px' }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: colors.white, opacity: 0.85 }}>{r.n}</span>
								<span style={{ fontSize: 15.5, fontWeight: 800, color: colors.white }}>{r.t}</span>
							</div>
							<div style={{ padding: '9px 14px', fontSize: 13.5, color: '#555', lineHeight: 1.5 }}>{r.d}</div>
						</motion.div>
					))}

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
						style={{
							border, background: colors.dark, color: '#e8e8f0', padding: '12px 16px',
							fontFamily: fonts.mono, fontSize: 12.5, lineHeight: 1.75,
						}}
					>
						<span style={{ color: '#888' }}># 路 B 的包装层长这样</span><br />
						model: <span style={{ color: colors.green }}>便宜档</span>   <span style={{ color: '#888' }}>← 它不推理，只转发</span><br />
						tools: <span style={{ color: colors.yellow }}>只有 Bash</span><br />
						<span style={{ color: '#888' }}># 真正的模型选择在另一侧的命令行参数里</span>
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<motion.div
						initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.3 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 16 }}
					>
						<div style={{ background: colors.dark, color: colors.white, padding: '9px 15px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1.2 }}>
							结构性结论 · 补进对照表
						</div>
						<div style={{ padding: '14px 16px' }}>
							<div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
								<div style={{ flex: 1, textAlign: 'center', padding: '12px 8px', background: '#f0f8ff', border: `2px solid ${colors.blue}` }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.blue, marginBottom: 4 }}>Subagent</div>
									<div style={{ fontSize: 20, fontWeight: 900, color: colors.green }}>✓ 可以异构</div>
								</div>
								<div style={{ flex: 1, textAlign: 'center', padding: '12px 8px', background: '#fff2f2', border: `2px solid ${colors.purple}` }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.purple, marginBottom: 4 }}>Agent Team</div>
									<div style={{ fontSize: 20, fontWeight: 900, color: colors.red }}>✕ 只能同构</div>
								</div>
							</div>
							<div style={{ fontSize: 14, color: '#555', lineHeight: 1.6 }}>
								因为成员资格靠的是<strong>共享任务板 + 信箱</strong>，那是工具内部的东西。
								外面那个进程收不到消息、不出现在任务板、Lead 看不见它的进度 ——
								它<strong style={{ color: colors.dark }}>永远只能是一根 spoke，做不了队友</strong>。
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.55 }}
						style={{ border, boxShadow: shadow, background: colors.yellow, padding: '13px 16px', marginBottom: 16 }}
					>
						<div style={{ fontSize: 16.5, fontWeight: 800, color: colors.black, lineHeight: 1.5, marginBottom: 5 }}>
							真该混的场景只有一个：verifier
						</div>
						<div style={{ fontSize: 13.5, color: '#554', lineHeight: 1.6 }}>
							同一个模型的两个 context，共享同样的偏好和盲区。
							<strong>换个模型家族，独立性硬得多</strong> —— 这正是「验证的价值来自独立」那句话的最强版本。
						</div>
					</motion.div>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.green, letterSpacing: 1.4, fontWeight: 700, marginBottom: 8 }}>
						那到底最少要开几个？
					</div>
					<div style={{ border, boxShadow: shadow, background: colors.white }}>
						{LADDER.map((l, i) => (
							<motion.div
								key={l.n}
								initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.32, delay: 0.72 + i * 0.1 }}
								style={{
									display: 'flex', alignItems: 'center',
									borderBottom: i < LADDER.length - 1 ? '2px solid #eee' : 'none',
									background: l.hot ? '#fffbe8' : colors.white,
								}}
							>
								<div style={{
									flex: '0 0 42px', alignSelf: 'stretch', display: 'flex', alignItems: 'center', justifyContent: 'center',
									background: l.hot ? colors.red : '#eee', color: l.hot ? colors.white : '#888',
									fontFamily: fonts.mono, fontSize: 17, fontWeight: 700,
								}}>{l.n}</div>
								<div style={{ flex: 1, padding: '9px 14px' }}>
									<div style={{ fontSize: 15, fontWeight: 800, color: colors.dark }}>{l.who}</div>
									<div style={{ fontSize: 12.5, color: '#777', lineHeight: 1.4 }}>{l.why}</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
						style={{ marginTop: 12, fontSize: 14.5, color: '#666', lineHeight: 1.55 }}
					>
						为什么最小那个是 verifier 而不是调查员：四项强收益里，
						<strong style={{ color: colors.dark }}>「独立视角」是唯一一个 1 个成员就能拿满的</strong> ——
						隔离和并行都要量，协作要人数。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
