import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface Model {
	name: string;
	strength: string;
	weakness: string;
	priceIn: string;
	rpm: string;
	useCase: string;
	color: string;
}

const models: Model[] = [
	{
		name: 'Claude Opus 4.7',
		strength: 'Coding 之王 (SWE-bench 49%+) / Agent / Tool use',
		weakness: '价格贵',
		priceIn: '$15',
		rpm: '~4k',
		useCase: 'Agent / 复杂 coding',
		color: colors.p1,
	},
	{
		name: 'Claude Sonnet 4.6',
		strength: '平衡好 / 200k context / 性价比',
		weakness: '—',
		priceIn: '$3',
		rpm: '~4k',
		useCase: '主力 Production',
		color: colors.p3,
	},
	{
		name: 'GPT-5',
		strength: '通用旗舰 / Reasoning / 多模态原生',
		weakness: 'coding 略逊 Opus',
		priceIn: '$1.25',
		rpm: '~10k',
		useCase: '通用高质量 / 推理',
		color: colors.indigo,
	},
	{
		name: 'GPT-5-mini',
		strength: '5 系列性价比 / 长 context / 多模态',
		weakness: '复杂推理一般',
		priceIn: '$0.25',
		rpm: '高',
		useCase: '中等任务主力',
		color: colors.purple,
	},
	{
		name: 'GPT-4o (经典)',
		strength: 'Vision 经典 / Realtime API / 生态成熟',
		weakness: '已被 5 系列覆盖',
		priceIn: '$2.5',
		rpm: '~30k',
		useCase: '多模态 / Realtime / 兼容',
		color: colors.p5,
	},
	{
		name: 'Gemini 2.5 Pro',
		strength: '长 context (1M-2M) / 多模态 / 推理',
		weakness: 'Tool use 一般',
		priceIn: '$1.25',
		rpm: '高',
		useCase: '长文档 + 多模态推理',
		color: colors.teal,
	},
	{
		name: 'Gemini 2.5 Flash',
		strength: '极长 context / 便宜 / 快',
		weakness: '复杂推理弱',
		priceIn: '$0.10',
		rpm: '极高',
		useCase: '长文档 / 批量分析',
		color: colors.p7,
	},
	{
		name: 'DeepSeek V3 / Qwen 3',
		strength: '开源 / 中文强 / 极便宜 / 数据可控',
		weakness: 'Function calling 较弱',
		priceIn: '$0.27',
		rpm: '自部署',
		useCase: '中文 / 自部署 / 数据敏感',
		color: colors.p8,
	},
];

const decisions = [
	{ k: 'Coding / Agent 顶配', v: 'Claude Opus 4.7', color: colors.p1 },
	{ k: '通用高质量 + 推理', v: 'GPT-5 / Claude Sonnet', color: colors.indigo },
	{ k: 'Production 主力 (性价比)', v: 'Sonnet 4.6 / GPT-5-mini', color: colors.p3 },
	{ k: '长 context + 多模态', v: 'Gemini 2.5 Pro / Flash', color: colors.p7 },
	{ k: '中文 + 数据敏感 + 自部署', v: 'DeepSeek V3 / Qwen 3', color: colors.p8 },
];

const rateLimitTricks = [
	{ k: 'LiteLLM gateway', v: '多 API key rotation + 自动 fallback' },
	{ k: 'Fallback chain', v: 'Anthropic → OpenAI → 自托管 Qwen' },
	{ k: 'Prompt Caching', v: 'Anthropic / Gemini 支持，省 50-90%' },
	{ k: 'Batch API', v: 'OpenAI / Anthropic 50% off，24h 延迟' },
];

export default function S24d_ModelComparison() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '18px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
				{/* 标题 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
						<span style={{ padding: '4px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
							MODEL · COMPARISON
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: '#666' }}>
							数字为公开报价区间 · 以官方实时为准
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '36px', fontWeight: 900, letterSpacing: -1, lineHeight: 1.1 }}>
						主流大模型 ·{' '}
						<span style={{ background: colors.yellow, padding: '0 10px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>
							你得知道它们的脾气
						</span>
					</h2>
				</motion.div>

				{/* 模型对比表 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ background: colors.white, border, boxShadow: shadowSm, overflow: 'hidden' }}>
					<div style={{ display: 'grid', gridTemplateColumns: '1.5fr 2.4fr 1.5fr 0.7fr 0.6fr 1.3fr', background: colors.dark, color: colors.white, padding: '8px 12px', gap: 8, fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, letterSpacing: 0.5 }}>
						<span>模型</span>
						<span>强项</span>
						<span>弱项</span>
						<span>$/1M in</span>
						<span>RPM</span>
						<span>适合场景</span>
					</div>
					{models.map((m, i) => (
						<motion.div
							key={m.name}
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.15 + i * 0.04 }}
							style={{
								display: 'grid',
								gridTemplateColumns: '1.5fr 2.4fr 1.5fr 0.7fr 0.6fr 1.3fr',
								padding: '7px 12px',
								gap: 8,
								borderBottom: i === models.length - 1 ? 'none' : '1px solid #ddd',
								background: i % 2 === 0 ? colors.white : '#fafafa',
								alignItems: 'center',
							}}
						>
							<span style={{ fontFamily: fonts.heading, fontSize: 13, fontWeight: 900, color: m.color }}>{m.name}</span>
							<span style={{ fontSize: 11, color: '#222', lineHeight: 1.35, fontWeight: 600 }}>{m.strength}</span>
							<span style={{ fontSize: 11, color: '#666', lineHeight: 1.35, fontWeight: 500 }}>{m.weakness}</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: colors.green }}>{m.priceIn}</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: '#444' }}>{m.rpm}</span>
							<span style={{ fontSize: 11, color: '#222', fontWeight: 600, lineHeight: 1.35 }}>{m.useCase}</span>
						</motion.div>
					))}
				</motion.div>

				{/* 多模态专项模型 · TTS / STT / Realtime / Image */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.32 }}
					style={{ background: colors.dark, color: colors.white, border, boxShadow: shadowSm, padding: '8px 14px', display: 'grid', gridTemplateColumns: 'auto 1fr 1fr 1fr 1fr', gap: 14, alignItems: 'center' }}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, color: colors.yellow, letterSpacing: 1 }}>
						🎙️ 多模态<br />专项模型
					</span>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 900, color: colors.yellow, letterSpacing: 0.5 }}>TTS · 语音合成</span>
						<span style={{ fontSize: 10.5, color: '#fff', lineHeight: 1.35 }}>ElevenLabs · OpenAI TTS · Cartesia · Coqui</span>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 900, color: colors.yellow, letterSpacing: 0.5 }}>STT · 语音识别</span>
						<span style={{ fontSize: 10.5, color: '#fff', lineHeight: 1.35 }}>Whisper · Deepgram · AssemblyAI</span>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 900, color: colors.yellow, letterSpacing: 0.5 }}>Realtime · 实时对话</span>
						<span style={{ fontSize: 10.5, color: '#fff', lineHeight: 1.35 }}>OpenAI Realtime · Gemini Live</span>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 900, color: colors.yellow, letterSpacing: 0.5 }}>Image / Video Gen</span>
						<span style={{ fontSize: 10.5, color: '#fff', lineHeight: 1.35 }}>GPT-4o Image · FLUX · Imagen · Sora · Runway</span>
					</div>
				</motion.div>

				{/* 决策树 + Rate Limit 横排 */}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, flex: 1, minHeight: 0 }}>
					{/* 决策树 */}
					<motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} style={{ background: colors.white, border, boxShadow: shadowSm, padding: '10px 12px' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
							<span style={{ fontSize: 16 }}>🌳</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, letterSpacing: 1 }}>决策树</span>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
							{decisions.map((d) => (
								<div key={d.k} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 8px', background: colors.warmBg, border: `2px solid ${d.color}` }}>
									<span style={{ fontSize: 11, fontWeight: 700, color: '#222', flex: 1 }}>{d.k}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, color: d.color }}>→</span>
									<span style={{ fontFamily: fonts.heading, fontSize: 12, fontWeight: 900, color: d.color }}>{d.v}</span>
								</div>
							))}
						</div>
					</motion.div>

					{/* RPM / TPM 知识点 */}
					<motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} style={{ background: colors.white, border, boxShadow: shadowSm, padding: '10px 12px' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
							<span style={{ fontSize: 16 }}>⚡</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, letterSpacing: 1 }}>RPM / TPM · 怎么扛过 Rate Limit</span>
						</div>
						<div style={{ fontSize: 11, fontFamily: fonts.mono, color: '#444', marginBottom: 5, lineHeight: 1.5 }}>
							<span style={{ color: colors.red, fontWeight: 900 }}>RPM</span> = Req/min · <span style={{ color: colors.red, fontWeight: 900 }}>TPM</span> = Tokens/min · Tier 按累计花费升级
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
							{rateLimitTricks.map((t) => (
								<div key={t.k} style={{ display: 'flex', gap: 8, padding: '3px 6px', background: colors.warmBg }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, color: colors.red, minWidth: 92 }}>{t.k}</span>
									<span style={{ fontSize: 10.5, color: '#222', lineHeight: 1.35, fontWeight: 500 }}>{t.v}</span>
								</div>
							))}
						</div>
					</motion.div>
				</div>

				{/* 落点 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ textAlign: 'center' }}>
					<span style={{ display: 'inline-flex', padding: '8px 18px', background: colors.black, color: colors.white, fontFamily: fonts.heading, fontSize: 15, fontWeight: 800, border, boxShadow: `4px 4px 0 ${colors.yellow}` }}>
						模型不是<span style={{ color: colors.yellow, margin: '0 6px' }}>越贵越好</span> · 是 fit 场景才好
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}

export const __unused = shadow;
