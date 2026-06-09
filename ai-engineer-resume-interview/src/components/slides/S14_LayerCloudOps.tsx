import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

interface Section {
	num: string;
	title: string;
	tag: string;
	items: string[];
	color: string;
}

const sections: Section[] = [
	{
		num: '1',
		title: 'Cloud LLM Hosting',
		tag: '托管模型服务',
		items: ['AWS Bedrock (Claude / Llama / Mistral / Titan)', 'Azure OpenAI Service (企业首选)', 'Google Vertex AI (Gemini)', 'AWS SageMaker (自托管)'],
		color: colors.p1,
	},
	{
		num: '2',
		title: 'LLM Gateway / Routing',
		tag: '统一接入层',
		items: ['LiteLLM (100+ provider)', 'OpenRouter (一 key 通所有)', 'Portkey'],
		color: colors.p3,
	},
	{
		num: '3',
		title: '自部署推理',
		tag: '私有化 / 开发',
		items: ['vLLM', 'TGI (Text Generation Inference)', 'Triton Inference Server', 'Ollama / LM Studio (本地)'],
		color: colors.p5,
	},
	{
		num: '4',
		title: '可观测性',
		tag: 'Tracing + Eval',
		items: ['LangSmith (LangChain 出品)', 'LangFuse (开源 self-host)', 'Helicone (cost + latency)', 'Phoenix (Arize)'],
		color: colors.p7,
	},
	{
		num: '5',
		title: '成本优化',
		tag: '省 50-90%',
		items: ['Prompt Caching (Anthropic / Gemini)', 'Batch API (OpenAI / Anthropic 省 50%)', 'Semantic Cache (GPTCache / Redis Vector)', 'Model Routing (cheap → expensive)'],
		color: colors.p8,
	},
];

export default function S14_LayerCloudOps() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '20px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 10 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
						<span style={{ padding: '5px 12px', background: colors.p8, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.black}` }}>
							SKILL · 08
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#666' }}>
							Cloud + Ops — 上 prod 不爆炸
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, color: colors.black, letterSpacing: -1, lineHeight: 1.1 }}>
						让 AI 应用 <span style={{ background: colors.yellow, padding: '0 12px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>真的能赚钱</span>
					</h2>
				</motion.div>

				{/* 5 section grid: 3 + 2 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 12, minHeight: 0 }}>
					{sections.map((s, i) => {
						// 前 3 个 occupy col 1-2 / 3-4 / 5-6 in row 1; 后 2 个 occupy col 2-4 / 4-6 in row 2 to center
						const layoutStyle: CSSProperties = i < 3
							? { gridColumn: `${i * 2 + 1} / span 2`, gridRow: '1' }
							: { gridColumn: i === 3 ? '2 / span 2' : '4 / span 2', gridRow: '2' };
						return (
							<motion.div
								key={s.num}
								initial={{ opacity: 0, y: 16, scale: 0.96 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{ delay: 0.15 + i * 0.06, duration: 0.34 }}
								style={{ ...layoutStyle, background: colors.white, border, boxShadow: shadowSm, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
							>
								<div style={{ height: 8, background: s.color, flexShrink: 0 }} />
								<div style={{ padding: '12px 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
									<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
										<span style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: s.color, lineHeight: 1, letterSpacing: -1 }}>
											{s.num}
										</span>
										<span style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, color: colors.black, letterSpacing: -0.3, lineHeight: 1.1 }}>
											{s.title}
										</span>
									</div>
									<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: '#666', letterSpacing: 0.4, marginBottom: 8 }}>
										{s.tag.toUpperCase()}
									</div>
									<ul style={{ listStyle: 'none', margin: 0, padding: 0, fontFamily: fonts.body, fontSize: 14, color: '#222', lineHeight: 1.5, fontWeight: 500 }}>
										{s.items.map((it) => (
											<li key={it} style={{ marginBottom: 3 }}>
												<span style={{ color: s.color, fontWeight: 800, marginRight: 5 }}>·</span>
												{it}
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* 简历对比 */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.85, duration: 0.4 }}
					style={{ marginTop: 12 }}
				>
					<div style={{ padding: '10px 14px', background: '#dff5d8', border: `2px solid #2d9a2d`, fontFamily: fonts.body, fontSize: 13, color: colors.black, lineHeight: 1.4 }}>
						<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: '#2d9a2d', marginRight: 8 }}>✅ 好简历写法</span>
						Deployed Claude via AWS Bedrock with LiteLLM gateway + LangSmith tracing, serving 1M req/day at $0.003/query (60% lower than direct API)
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
