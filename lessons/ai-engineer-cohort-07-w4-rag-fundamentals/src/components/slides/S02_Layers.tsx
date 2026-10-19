import { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { NumberBadge } from '../deck';
import { PartFrame, TermPill, RevealButton, Punch, Mark, card, line, muted } from './_shared';

// 开场测试：四个概念各属于 LLM / Agent / 外部数据哪一层（讲师 2026-10-19 定稿，Memory 归 Agent）。
// 学员在聊天框按 1–4 的顺序打四个字母，答案 ABBC
const items = [
	{ term: 'Fine-tuning', say: '用一批例子再训练模型', k: 'A' },
	{ term: 'RAG', say: '按问题把相关片段找出来', k: 'B' },
	{ term: 'Memory', say: '记住家属上次说过的偏好', k: 'B' },
	{ term: 'Knowledge base', say: 'CareKind 的政策文档库', k: 'C' },
];

const layers = [
	{ k: 'A', name: 'LLM', hint: '模型本身，训练时定下', color: colors.purple },
	{ k: 'B', name: 'Agent', hint: '每次请求时编排：拼上下文、决定要不要检索、调工具、读写记忆', color: colors.blue },
	{ k: 'C', name: '外部数据', hint: '模型和 Agent 之外的数据源', color: colors.green },
];

const colorOf = (k: string) => layers.find((l) => l.k === k)!.color;

export default function S02_Layers() {
	const [open, setOpen] = useState(false);
	return (
		<PartFrame part="frame" title="测一测：它们各属于哪一层？" subtitle="在聊天框打四个字母，按 1–4 的顺序，比如「CAAB」。">
			<div style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 26, alignItems: 'start' }}>
				<div style={{ display: 'grid', gap: 10 }}>
					{items.map((it, i) => (
						<motion.div key={it.term} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.15 + i * 0.08 }}
							style={{ ...card, display: 'flex', alignItems: 'center', gap: 14, padding: '10px 18px', minHeight: 84 }}>
							<NumberBadge bg={colors.white}>{i + 1}</NumberBadge>
							<div style={{ flex: 1 }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700 }}>{it.term}</div>
								<div style={{ fontSize: 21, fontWeight: 700, color: muted }}>{it.say}</div>
							</div>
							{open && <span style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, background: colorOf(it.k), color: it.k === 'A' ? colors.white : colors.black, borderRadius: radii.label, padding: '0 12px' }}>{it.k}</span>}
						</motion.div>
					))}
				</div>
				<motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.45 }} style={{ display: 'grid', gap: 10 }}>
					{layers.map((l) => (
						<div key={l.k} style={{ ...card, border: line, borderLeft: `12px solid ${l.color}`, padding: '12px 20px', minHeight: 112, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
								<span style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900 }}>{l.k}</span>
								<span style={{ fontSize: 30, fontWeight: 900, flex: 1 }}>{l.name}</span>
								{open && items.filter((it) => it.k === l.k).map((it) => <TermPill key={it.term} bg={l.color} fontSize={18}>{items.indexOf(it) + 1} {it.term}</TermPill>)}
							</div>
							<div style={{ fontSize: 20, fontWeight: 700, color: muted, lineHeight: 1.4 }}>{l.hint}</div>
						</div>
					))}
				</motion.div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 16 }}>
				<RevealButton open={open} label="看答案" onClick={() => setOpen((v) => !v)} />
				{open && <span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700 }}>ABBC</span>}
				{open && <Punch delay={0.1} size={25} mt={0}>Knowledge base 是数据，<Mark>RAG 是 Agent 去取数据的动作</Mark>，Fine-tuning 改的是 LLM。</Punch>}
			</div>
		</PartFrame>
	);
}
