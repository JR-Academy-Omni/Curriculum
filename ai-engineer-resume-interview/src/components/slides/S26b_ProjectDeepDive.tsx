import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const variants = [
	'"Walk me through your most challenging project"',
	'"Tell me about a time when X went wrong"',
];

interface Layer {
	num: string;
	title: string;
	hint: string;
	color: string;
	mark?: string;
}

const layers: Layer[] = [
	{ num: '1', title: 'What', hint: '项目是什么 / scale 多大（用户量 / QPS / data 量）', color: colors.p1 },
	{ num: '2', title: 'Why', hint: '为什么这么选型（chunking / model / vector DB）', color: colors.p3 },
	{ num: '3', title: 'How', hint: '实现细节（代码层 + 架构层）', color: colors.p5 },
	{ num: '4', title: 'Result', hint: 'metric / business impact（业务 + LLM 双指标）', color: colors.p7 },
	{ num: '5', title: 'Failure / Trade-off', hint: '失败 / 妥协 / 当时不知道的事', color: colors.red, mark: '诚实度' },
];

const kits = [
	{ icon: '💻', k: 'GitHub demo', v: '可点开看代码 / 简历附 link' },
	{ icon: '📊', k: 'Eval metric 截图', v: 'RAGAS · latency p95 · cost dashboard' },
	{ icon: '🗺️', k: '架构图', v: '白板 5 分钟能画出来' },
];

const traps = [
	{ q: '为什么不用 LangChain？', a: '内部 RAG 用 LlamaIndex / 自己写 retrieval；LangChain 抽象太厚，production debug 困难' },
	{ q: '为什么 chunk 是 X 不是 Y？', a: '跑过 ablation study，X 在 recall@5 / latency / cost 三角平衡上最优' },
	{ q: '你的 latency 怎么算出来的？', a: 'LangSmith trace 100 query / p50 p95 p99 / 区分 TTFT 和总 latency' },
	{ q: 'Cost 怎么估的？', a: 'tiktoken 算 input/output token + 单价 + cache hit rate + retry overhead' },
	{ q: '上线后有 incident 吗？', a: '有 1 次 prompt 回归（A/B 切流时发现），加了 eval gate 之后没了。永远别说"完美"' },
];

export default function S26b_ProjectDeepDive() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '18px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
				{/* 标题 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
						<span style={{ padding: '6px 14px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
							PROJECT · DEEP DIVE
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#666' }}>
							面试官最爱听你讲失败 + 怎么修
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '40px', fontWeight: 900, letterSpacing: -1, lineHeight: 1.1 }}>
						项目经验 ·{' '}
						<span style={{ background: colors.yellow, padding: '0 12px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>
							5 层提问漏斗
						</span>
					</h2>
				</motion.div>

				{/* 提问变体 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 }} style={{ background: colors.white, border, boxShadow: shadowSm, padding: '10px 14px' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: '#666', letterSpacing: 1, marginBottom: 4 }}>提问变体</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						{variants.map((v, i) => (
							<div key={i} style={{ fontSize: 14, color: '#222', fontFamily: fonts.mono, lineHeight: 1.5, fontWeight: 600 }}>{v}</div>
						))}
					</div>
				</motion.div>

				{/* 5 层漏斗 */}
				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} style={{ background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px' }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
						<span style={{ fontSize: 20 }}>🕳️</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 1 }}>5 层提问漏斗 · 越往下越深</span>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
						{layers.map((l, i) => {
							const widthPct = 100 - i * 8;
							return (
								<motion.div
									key={l.num}
									initial={{ opacity: 0, scaleX: 0.9 }}
									animate={{ opacity: 1, scaleX: 1 }}
									transition={{ delay: 0.2 + i * 0.07 }}
									style={{
										width: `${widthPct}%`,
										margin: '0 auto',
										background: l.color,
										color: colors.white,
										border: `2px solid ${colors.black}`,
										padding: '8px 16px',
										display: 'flex',
										alignItems: 'center',
										gap: 12,
									}}
								>
									<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, padding: '2px 9px', background: colors.black, color: colors.white }}>L{l.num}</span>
									<span style={{ fontFamily: fonts.heading, fontSize: 17, fontWeight: 900, minWidth: 170 }}>{l.title}</span>
									<span style={{ fontSize: 13.5, fontWeight: 600, opacity: 0.95, flex: 1 }}>{l.hint}</span>
									{l.mark && (
										<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, padding: '3px 9px', background: colors.yellow, color: colors.black, border: `2px solid ${colors.black}` }}>
											{l.mark}
										</span>
									)}
								</motion.div>
							);
						})}
					</div>
				</motion.div>

				{/* 必带 3 件套 + 追问陷阱 横排 */}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 12, flex: 1, minHeight: 0 }}>
					{/* 3 件套 */}
					<motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} style={{ background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
							<span style={{ fontSize: 20 }}>🎒</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 1 }}>必带 3 件套</span>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
							{kits.map((k) => (
								<div key={k.k} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 10px', background: colors.warmBg, border: `2px solid ${colors.black}` }}>
									<span style={{ fontSize: 22, lineHeight: 1 }}>{k.icon}</span>
									<div style={{ flex: 1 }}>
										<div style={{ fontFamily: fonts.heading, fontSize: 15, fontWeight: 900, color: colors.black }}>{k.k}</div>
										<div style={{ fontSize: 12.5, color: '#444', fontWeight: 600, lineHeight: 1.45, fontFamily: fonts.mono }}>{k.v}</div>
									</div>
								</div>
							))}
						</div>
					</motion.div>

					{/* 追问陷阱 5 个 */}
					<motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 }} style={{ background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
							<span style={{ fontSize: 20 }}>🪤</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 1 }}>追问陷阱 5 个</span>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
							{traps.map((t, i) => (
								<div key={i} style={{ display: 'grid', gridTemplateColumns: '230px 1fr', gap: 12, padding: '6px 8px', background: i % 2 === 0 ? colors.warmBg : colors.white, borderBottom: i === traps.length - 1 ? 'none' : '1px dashed #ccc' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: colors.red, lineHeight: 1.45 }}>"{t.q}"</div>
									<div style={{ fontSize: 13, color: '#222', fontWeight: 600, lineHeight: 1.45 }}>{t.a}</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>

				{/* 落点 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} style={{ textAlign: 'center' }}>
					<span style={{ display: 'inline-flex', padding: '10px 22px', background: colors.red, color: colors.white, fontFamily: fonts.heading, fontSize: 19, fontWeight: 900, border, boxShadow: `4px 4px 0 ${colors.black}` }}>
						面试官最爱听<span style={{ color: colors.yellow, margin: '0 6px' }}>失败 + 怎么修</span> · 掩盖问题 = 自动 reject
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}

export const __unused = shadow;
