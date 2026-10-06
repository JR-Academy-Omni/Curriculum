import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, Highlight, colors, fonts, border, shadowSm } from '../ui';
import { ModuleTag, Terminal, Source } from './_shared';

const fields = [
	{ k: 'input_tokens', v: '没走 cache 的输入，按原价算' },
	{ k: 'cache_creation_input_tokens', v: '这次写进 cache 的输入（写入价更贵）' },
	{ k: 'cache_read_input_tokens', v: '从 cache 读出来的输入（便宜得多）' },
	{ k: 'output_tokens', v: '输出，包括 thinking' },
];

// M1 讲 + 跑：claude -p / codex exec 的 usage 字段
export default function S09_M1Usage() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<ModuleTag id="M1" phase="teach" />
					<Title size="48px" style={{ marginBottom: 16 }}>只回一个 OK，也有成本</Title>
					<Terminal
						fontSize={17}
						lines={[
							'# Claude Code',
							'$ claude -p "Reply OK" --output-format json | tee -a runs.jsonl | jq \'.usage, .total_cost_usd\'',
							'',
							'# Codex',
							'$ codex exec --json "Reply OK" | grep turn.completed | tee -a runs-codex.jsonl',
						]}
					/>
					<p style={{ marginTop: 16, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, opacity: 0.7 }}>Codex 官方文档里的一行示例输出：</p>
					<Terminal fontSize={15} style={{ boxShadow: 'none', marginTop: 6 }} lines={['{"type":"turn.completed","usage":{"input_tokens":24763,"cached_input_tokens":24448,"output_tokens":122,"reasoning_output_tokens":0}}']} />
				</Half>

				<Half>
					{fields.map((f, i) => (
						<motion.div
							key={f.k}
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.2 + i * 0.12 }}
							style={{ padding: '10px 16px', marginBottom: 10, background: colors.white, border, boxShadow: shadowSm }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700 }}>{f.k}</div>
							<div style={{ fontSize: 19, fontWeight: 600 }}>{f.v}</div>
						</motion.div>
					))}
					<p style={{ marginTop: 10, fontSize: 23, fontWeight: 800, lineHeight: 1.5 }}>
						这次一共处理的输入 = <Highlight color={colors.yellow}>三个 input 字段相加</Highlight>
					</p>
					<p style={{ marginTop: 8, fontSize: 20, fontWeight: 600, lineHeight: 1.5 }}>
						对比一下：Claude Code 和 Codex 各自的「基础开销」有多大？
					</p>
					<Source>total_cost_usd 是 Claude Code 在本地按价格表算的估计值，不是账单（官方 cost-tracking 文档）。</Source>
				</Half>
			</Inner>
		</Slide>
	);
}
