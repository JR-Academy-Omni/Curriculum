import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, Inner, Half, Title, colors, fonts, border } from '../ui';
import { ModuleTag, Terminal, RevealButton } from './_shared';
import { pretest } from '../../data/pretest';

const answers = [
	'几千到几万 —— system prompt、tool definitions、memory 每次都带（看你自己跑出来的三个 input 字段之和）',
	'第一个字出来（TTFT / prefill）',
	'前缀逐字节相同、同一个模型、还在 TTL 内 → 读 cache，省掉 prefill',
	'从时间戳开始往后的内容每次都不同，后面的部分全部要重算',
	'KV：decode 重复计算 · Prefix：重复 prefill · Response：整次调用 · Memory：不省计算，是跨会话的信息来源',
];

// M7：汇总 runs.jsonl + 全课后测（原题）
export default function S32_M7Summary() {
	const [open, setOpen] = useState(false);
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half style={{ flex: 0.9 }}>
					<ModuleTag id="M7" phase="post" />
					<Title size="44px" style={{ marginBottom: 14 }}>用自己的数据收尾</Title>
					<Terminal
						fontSize={14}
						lines={[
							'$ jq -s \'[.[].usage | select(.)]',
							'    | {runs: length,',
							'       read: (map(.cache_read_input_tokens) | add),',
							'       write: (map(.cache_creation_input_tokens) | add),',
							'       uncached: (map(.input_tokens) | add)}\' runs.jsonl',
							'',
							'# hit rate ≈ read ÷ (read + write + uncached)',
							'# tokens saved ≈ read',
						]}
					/>
					<p style={{ marginTop: 14, fontSize: 19, fontWeight: 600, lineHeight: 1.5 }}>
						Codex 同学：对 runs-codex.jsonl 做同样的事，字段换成 cached_input_tokens
					</p>
				</Half>

				<Half style={{ flex: 1.1 }}>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
						<p style={{ fontSize: 24, fontWeight: 900 }}>全课后测：开场的 5 题，再答一次</p>
						<RevealButton open={open} label="看答案" onClick={() => setOpen(!open)} />
					</div>
					{pretest.map((q, i) => (
						<motion.div key={q} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
							style={{ padding: '8px 14px', marginBottom: 8, background: colors.white, border }}>
							<div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.4 }}>
								<span style={{ fontFamily: fonts.mono, marginRight: 8 }}>{i + 1}</span>{q}
							</div>
							{open && <div style={{ marginTop: 4, fontSize: 16, fontWeight: 700, lineHeight: 1.4, padding: '3px 8px', background: colors.green }}>{answers[i]}</div>}
						</motion.div>
					))}
				</Half>
			</Inner>
		</Slide>
	);
}
