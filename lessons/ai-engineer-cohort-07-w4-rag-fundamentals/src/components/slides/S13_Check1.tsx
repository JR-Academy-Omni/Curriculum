import { useState } from 'react';
import { motion } from 'framer-motion';
import { colors } from '../ui';
import { Label } from '../deck';
import { PartFrame, Bubble, Chunk, RevealButton, SourceLine, card, line } from './_shared';

const points = [
	'「去年」要先换成 2025：向量不会替你算日期',
	'「第三季度」和「Q3」、中文和英文：可能够像，也可能不够',
	'数字、代号要一字不差，embedding 容易漏掉精确匹配',
	'修法在后续地图里：Query rewrite、Hybrid search',
];

// 检查点 1：纯向量检索会怎样
export default function S13_Check1() {
	const [open, setOpen] = useState(false);
	return (
		<PartFrame part="online" title="检查点：纯向量检索会怎样？" subtitle="先在聊天框写下你的猜测。">
			<div style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 26, alignItems: 'start' }}>
				<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
					style={{ ...card, background: colors.dark, border: line, padding: '20px 22px', display: 'grid', gap: 16 }}>
					<div><Label bg={colors.yellow} color={colors.black}>今天是 2026 年 10 月</Label></div>
					<Bubble who="用户">去年第三季度营收是多少？</Bubble>
					<div style={{ color: colors.white, fontSize: 20, fontWeight: 700 }}>索引里真正有答案的那一块：</div>
					<Chunk id="fin-2025#7">2025 Q3 revenue: …</Chunk>
				</motion.div>
				<div style={{ display: 'grid', gap: 12 }}>
					<div><RevealButton open={open} label="看答案" onClick={() => setOpen((v) => !v)} /></div>
					{open && points.map((p, i) => (
						<motion.div key={p} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.1 }}
							style={{ ...card, padding: '12px 20px', fontSize: 25, fontWeight: 800, lineHeight: 1.45, background: i === 3 ? colors.yellow : colors.white }}>{p}</motion.div>
					))}
					{open && <SourceLine>Anthropic, Introducing Contextual Retrieval（2024-09）：embedding 可能漏掉精确匹配（例：错误码 TS-999）。</SourceLine>}
				</div>
			</div>
		</PartFrame>
	);
}
