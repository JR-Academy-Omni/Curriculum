import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

interface Block {
	title: string;
	tag: string;
	items: string[];
	tone: 'tech' | 'long' | 'memory';
}

const blocks: Block[] = [
	{
		title: 'Context Window 管理',
		tag: '长上下文模型',
		items: ['Claude 200k', 'Gemini 2M', 'GPT-4.1 1M'],
		tone: 'long',
	},
	{
		title: 'Context 压缩',
		tag: '让长 context 不爆 token',
		items: ['Summarization', 'Hierarchical chunks', 'Sliding window'],
		tone: 'tech',
	},
	{
		title: 'Short-term Memory',
		tag: '单次对话内',
		items: ['Conversation buffer', 'Session state', 'Redis 短期缓存'],
		tone: 'memory',
	},
	{
		title: 'Long-term Memory',
		tag: '跨会话持久化',
		items: ['Mem0', 'LangGraph Memory', 'Letta (MemGPT)'],
		tone: 'memory',
	},
	{
		title: 'Context 检索策略',
		tag: '动态决策',
		items: ['何时载入', '何时丢弃', '何时压缩'],
		tone: 'tech',
	},
	{
		title: 'Conversation State',
		tag: '状态机',
		items: ['LangGraph state machine', 'Redis 持久化'],
		tone: 'tech',
	},
	{
		title: 'Multi-turn 一致性',
		tag: '人设不漂移',
		items: ['System prompt 锚定', 'Persona 设定', 'Few-shot reminder'],
		tone: 'tech',
	},
];

function toneColor(t: Block['tone']) {
	if (t === 'long') return colors.indigo;
	if (t === 'memory') return colors.teal;
	return colors.p4;
}

export default function S11_LayerContextEngineering() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '24px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 12 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
						<span style={{ padding: '5px 12px', background: colors.p4, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.black}` }}>
							SKILL · 04
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#666' }}>
							Context Engineering — LLM 的"记忆"管理
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 900, color: colors.black, letterSpacing: -1, lineHeight: 1.1 }}>
						让 LLM <span style={{ background: colors.yellow, padding: '0 10px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>记住 + 用上正确信息</span>
					</h2>
				</motion.div>

				{/* 7 块 — 不规则 grid */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 12, minHeight: 0 }}>
					{blocks.map((b, i) => {
						const c = toneColor(b.tone);
						return (
							<motion.div
								key={b.title}
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.15 + i * 0.05, duration: 0.32 }}
								style={{ background: colors.white, border, boxShadow: shadowSm, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
							>
								<div style={{ height: 6, background: c, flexShrink: 0 }} />
								<div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', flex: 1 }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 800, color: c, letterSpacing: 0.6, marginBottom: 4 }}>
										{b.tag.toUpperCase()}
									</div>
									<div style={{ fontFamily: fonts.heading, fontSize: 15, fontWeight: 900, color: colors.black, lineHeight: 1.2, marginBottom: 8, letterSpacing: -0.3 }}>
										{b.title}
									</div>
									<div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 'auto' }}>
										{b.items.map((it) => (
											<span key={it} style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, padding: '2px 6px', background: colors.warmBg, color: colors.black, border: `1.5px solid ${colors.black}` }}>
												{it}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						);
					})}

					{/* 第 8 格 — 简历落点占位（在 grid 内） */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.55, duration: 0.32 }}
						style={{ background: colors.dark, border, boxShadow: `4px 4px 0 ${colors.yellow}`, padding: '12px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: colors.white }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, color: colors.yellow, letterSpacing: 0.8, marginBottom: 6 }}>
							CORE INSIGHT
						</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 14, fontWeight: 700, color: colors.white, lineHeight: 1.35 }}>
							好的 Context Engineering = 把对的信息<br />
							<span style={{ color: colors.yellow }}>在对的时间</span> 塞进 prompt
						</div>
					</motion.div>
				</div>

				{/* 简历对比 */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.85, duration: 0.4 }}
					style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 12 }}
				>
					<div style={{ padding: '10px 14px', background: '#ffe0e0', border: `2px solid ${colors.red}`, fontFamily: fonts.body, fontSize: 13, color: colors.black, lineHeight: 1.4 }}>
						<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: colors.red, marginRight: 8 }}>❌ 烂</span>
						"Used Claude for chatbot"
					</div>
					<div style={{ padding: '10px 14px', background: '#dff5d8', border: `2px solid #2d9a2d`, fontFamily: fonts.body, fontSize: 13, color: colors.black, lineHeight: 1.4 }}>
						<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: '#2d9a2d', marginRight: 8 }}>✅ 好</span>
						Built Mem0-backed long-term memory layer for 50k+ user conversations, prompt token cost −60%
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
