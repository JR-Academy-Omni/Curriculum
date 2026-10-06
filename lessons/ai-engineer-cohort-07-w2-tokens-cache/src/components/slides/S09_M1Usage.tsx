import { motion } from 'framer-motion';
import { colors, fonts } from '../ui';
import { ModuleFrame, Terminal, Source, Mark, card } from './_shared';

const fields = [
	{ k: 'input_tokens', v: '没走 cache 的输入，按原价算' },
	{ k: 'cache_creation_input_tokens', v: '这次写进 cache 的输入（写入价更贵）' },
	{ k: 'cache_read_input_tokens', v: '从 cache 读出来的输入（便宜得多）' },
	{ k: 'output_tokens', v: '输出，包括 thinking' },
];

// M1 讲 + 跑：claude -p / codex exec 的 usage 字段
export default function S09_M1Usage() {
	return (
		<ModuleFrame id="M1" phase="teach" title="只回一个 OK，也有成本">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
				<div>
					<Terminal fontSize={16} lines={[
						'# Claude Code',
						'$ claude -p "Reply OK" --output-format json | tee -a runs.jsonl | jq \'.usage, .total_cost_usd\'',
						'',
						'# Codex',
						'$ codex exec --json "Reply OK" | grep turn.completed | tee -a runs-codex.jsonl',
					]} />
					<p style={{ marginTop: 18, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, opacity: 0.7 }}>Codex 官方文档里的一行示例输出：</p>
					<Terminal fontSize={15} style={{ boxShadow: 'none', marginTop: 6 }} lines={['{"type":"turn.completed","usage":{"input_tokens":24763,"cached_input_tokens":24448,"output_tokens":122,"reasoning_output_tokens":0}}']} />
				</div>
				<div>
					{fields.map((f, i) => (
						<motion.div key={f.k} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 + i * 0.12 }}
							style={{ ...card, padding: '10px 16px', marginBottom: 10 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700 }}>{f.k}</div>
							<div style={{ fontSize: 19, fontWeight: 600 }}>{f.v}</div>
						</motion.div>
					))}
					<p style={{ marginTop: 10, fontSize: 22, fontWeight: 800, lineHeight: 1.5 }}>
						这次一共处理的输入 = <Mark>三个 input 字段相加</Mark>
					</p>
					<p style={{ marginTop: 6, fontSize: 19, fontWeight: 600, lineHeight: 1.5 }}>对比一下：Claude Code 和 Codex 各自的「基础开销」有多大？</p>
					<Source>total_cost_usd 是 Claude Code 在本地按价格表算的估计值，不是账单（官方 cost-tracking 文档）。</Source>
				</div>
			</div>
		</ModuleFrame>
	);
}
