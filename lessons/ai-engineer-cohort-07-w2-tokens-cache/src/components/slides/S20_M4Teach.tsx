import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Highlight, colors, fonts, border, shadowSm } from '../ui';
import { ModuleTag, Terminal, Source } from './_shared';

// Qwen2.5-7B-Instruct 的 config.json（Hugging Face 上的真实值）
const config = [
	{ k: 'num_hidden_layers', v: '28', note: '层数' },
	{ k: 'num_attention_heads', v: '28', note: 'query heads' },
	{ k: 'num_key_value_heads', v: '4', note: 'KV heads（GQA）' },
	{ k: 'hidden_size', v: '3584', note: 'head_dim = 3584 ÷ 28 = 128' },
	{ k: 'torch_dtype', v: 'bfloat16', note: '每个数 2 字节' },
];

// M4 讲 + 算：KV Cache 是什么，用真实模型配置算显存
export default function S20_M4Teach() {
	return (
		<Slide bg={colors.white}>
			<Inner split>
				<Half>
					<ModuleTag id="M4" phase="teach" />
					<Title size="46px" style={{ marginBottom: 14 }}>KV Cache：存下算过的 Key / Value</Title>
					<p style={{ fontSize: 21, fontWeight: 600, lineHeight: 1.6, marginBottom: 12 }}>
						每生成一个新 token，attention 都要用到之前所有 token 在每一层的 K 和 V。存起来，下一步就只算新 token —— 省的是 <Highlight color={colors.blue}>Decode</Highlight> 的重复计算，付的是 <Highlight>GPU 显存</Highlight>。
					</p>
					<p style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, padding: '10px 14px', border: `3px dashed ${colors.black}`, marginBottom: 16 }}>
						云端的 Claude / Codex 看不到 KV Cache（服务端内部的事）→ 用开源模型的真实配置来算
					</p>
					<Terminal
						fontSize={15}
						lines={[
							'# 在 Claude Code / Codex 里直接问：',
							'Fetch https://huggingface.co/Qwen/Qwen2.5-7B-Instruct/raw/main/config.json',
							'and compute the KV cache size for a 32K context, batch 8, bf16.',
							'Show the formula and every number you plug in.',
						]}
					/>
				</Half>

				<Half>
					<div style={{ padding: '14px 18px', background: colors.dark, color: colors.yellow, border, fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, lineHeight: 1.6, marginBottom: 14 }}>
						KV bytes = 2 (K,V) × 层数 × KV heads × head_dim × 序列长度 × batch × 字节数
					</div>
					{config.map((c, i) => (
						<motion.div
							key={c.k}
							initial={{ opacity: 0, x: 24 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
							style={{ display: 'grid', gridTemplateColumns: '260px 120px 1fr', alignItems: 'center', marginBottom: 8, border, background: colors.white, boxShadow: shadowSm }}>
							<span style={{ padding: '8px 12px', fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, background: colors.warmBg, borderRight: border }}>{c.k}</span>
							<span style={{ padding: '8px 12px', fontFamily: fonts.mono, fontSize: 18, fontWeight: 700 }}>{c.v}</span>
							<span style={{ padding: '8px 12px', fontSize: 17, fontWeight: 600 }}>{c.note}</span>
						</motion.div>
					))}
					<p style={{ marginTop: 12, fontSize: 19, fontWeight: 700, lineHeight: 1.5 }}>
						先自己核对 agent 算的对不对。注意 KV heads 只有 4 个：这就是 GQA，KV 体积是 28 个 heads 时的 1/7
					</p>
					<p style={{ marginTop: 8, fontSize: 18, fontWeight: 600, lineHeight: 1.5, opacity: 0.8 }}>
						两个「不是」：KV Cache 不会让错误的 context 变正确；它也不是长期 Memory
					</p>
					<Source>配置来自 Hugging Face：Qwen/Qwen2.5-7B-Instruct/config.json。</Source>
				</Half>
			</Inner>
		</Slide>
	);
}
