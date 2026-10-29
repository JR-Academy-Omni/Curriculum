import { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts } from '../ui';
import { Label } from '../deck';
import { PartFrame, Chunk, Bubble, RevealButton, card, line } from './_shared';

const cases = [
	{
		n: '答案 1',
		chunks: [{ id: 'park-v1#1', t: '访客停车在 B 区。' }, { id: 'dining-v2#3', t: '餐厅 11:30 开放。' }],
		a: '探视政策里没有提到预约。',
		key: 'R', why: '讲预约的那一块，没进 top-k。',
	},
	{
		n: '答案 2',
		chunks: [{ id: 'visit-v3#2', t: '周末探视需提前 24 小时预约。' }],
		a: '不用预约，周末随时来。',
		key: 'G', why: '证据就在眼前，回答没跟着证据走。',
	},
];

// 检查点 2：错在 Retrieval 还是 Generation
export default function S21_Check2() {
	const [open, setOpen] = useState(false);
	return (
		<PartFrame part="debug" title="检查点：错在 R 还是 G？" titleSize={50} subtitle="同一个问题：「周末探视要预约吗？」在聊天框打 R（Retrieval）或 G（Generation）。">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
				{cases.map((c, i) => (
					<motion.div key={c.n} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 + i * 0.3 }}
						style={{ ...card, background: colors.dark, border: line, padding: '18px 22px', display: 'grid', gap: 10, alignContent: 'start' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
							<Label bg={colors.yellow} color={colors.black}>{c.n}</Label>
							{open && <span style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, background: c.key === 'R' ? colors.blue : colors.orange, color: colors.black, borderRadius: 10, padding: '0 14px' }}>{c.key}</span>}
						</div>
						<div style={{ color: colors.white, fontSize: 18, fontFamily: fonts.mono, fontWeight: 700 }}>检索回来的 top-k：</div>
						{c.chunks.map((k) => <Chunk key={k.id} id={k.id}>{k.t}</Chunk>)}
						<Bubble who="助手" bg="#ffd9d9">{c.a}</Bubble>
						{open && <div style={{ color: colors.yellow, fontSize: 23, fontWeight: 800, lineHeight: 1.45 }}>{c.why}</div>}
					</motion.div>
				))}
			</div>
			<div style={{ marginTop: 18 }}><RevealButton open={open} label="看答案" onClick={() => setOpen((v) => !v)} /></div>
		</PartFrame>
	);
}
