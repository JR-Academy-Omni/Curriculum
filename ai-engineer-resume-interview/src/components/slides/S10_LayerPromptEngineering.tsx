import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

interface Technique {
	name: string;
	desc: string;
}

const techniques: Technique[] = [
	{ name: 'Zero-shot / Few-shot', desc: '通过示例引导模型输出格式' },
	{ name: 'Chain-of-Thought (CoT)', desc: '分步推理，提升复杂任务准确率' },
	{ name: 'ReAct (Reasoning + Acting)', desc: '推理 + 工具调用循环' },
	{ name: 'Tree-of-Thought (ToT)', desc: '多路径探索，回溯最优解' },
	{ name: 'Self-Consistency', desc: '多次采样投票' },
	{ name: 'Structured Output', desc: 'JSON mode / Function calling / XML tags / Pydantic schema' },
	{ name: 'Prompt Templates', desc: 'LangChain PromptTemplate / Jinja2 / DSPy' },
	{ name: 'Meta-Prompting', desc: '让 LLM 帮你优化 prompt' },
];

const frameworks = ['DSPy', 'Promptflow', 'Guidance', 'Outlines'];

export default function S10_LayerPromptEngineering() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '24px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 14 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
						<span style={{ padding: '5px 12px', background: colors.p3, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.black}` }}>
							SKILL · 03
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#666' }}>
							Prompt Engineering
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 38, fontWeight: 900, color: colors.black, letterSpacing: -1, lineHeight: 1.1 }}>
						让 LLM <span style={{ background: colors.yellow, padding: '0 10px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>听你的话</span>
					</h2>
				</motion.div>

				{/* 8 技术 2x4 grid */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 12, minHeight: 0 }}>
					{techniques.map((t, i) => (
						<motion.div
							key={t.name}
							initial={{ opacity: 0, y: 16, scale: 0.96 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ delay: 0.15 + i * 0.05, duration: 0.32 }}
							style={{ background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
						>
							<div style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 900, color: colors.black, lineHeight: 1.2, marginBottom: 6, letterSpacing: -0.3 }}>
								{t.name}
							</div>
							<div style={{ fontFamily: fonts.body, fontSize: 12, color: '#444', lineHeight: 1.4, fontWeight: 500 }}>
								{t.desc}
							</div>
						</motion.div>
					))}
				</div>

				{/* 主流框架 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.65 }}
					style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: colors.red }}>
						主流框架 →
					</span>
					{frameworks.map((f) => (
						<span key={f} style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, padding: '4px 12px', background: colors.dark, color: colors.white, border: `2px solid ${colors.black}`, boxShadow: `3px 3px 0 ${colors.yellow}` }}>
							{f}
						</span>
					))}
				</motion.div>

				{/* 简历对比 */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.85, duration: 0.4 }}
					style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 12 }}
				>
					<div style={{ padding: '10px 14px', background: '#ffe0e0', border: `2px solid ${colors.red}`, fontFamily: fonts.body, fontSize: 13, color: colors.black, lineHeight: 1.4 }}>
						<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: colors.red, marginRight: 8 }}>❌ 烂</span>
						"Good at prompt writing"
					</div>
					<div style={{ padding: '10px 14px', background: '#dff5d8', border: `2px solid #2d9a2d`, fontFamily: fonts.body, fontSize: 13, color: colors.black, lineHeight: 1.4 }}>
						<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: '#2d9a2d', marginRight: 8 }}>✅ 好</span>
						Designed 3-shot CoT prompt for invoice extraction, accuracy 67% → 94%
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
