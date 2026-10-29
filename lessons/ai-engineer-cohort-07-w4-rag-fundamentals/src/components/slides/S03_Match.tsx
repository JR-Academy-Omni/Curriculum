import { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts } from '../ui';
import { NumberBadge } from '../deck';
import { PartFrame, TermPill, RevealButton, Punch, Mark, card, softShadow, muted } from './_shared';

// 复习连线题：五样东西各管什么（W3 第 19 页），学员在聊天框按 1–5 的顺序打五个字母
const terms = [
	{ k: 'A', term: 'Tool Results' },
	{ k: 'B', term: 'Cache' },
	{ k: 'C', term: 'RAG' },
	{ k: 'D', term: 'Context Window' },
	{ k: 'E', term: 'Memory' },
];

const items = [
	{ say: '这一次调用里放的全部内容', k: 'D' },
	{ say: '按问题，从资料库里找相关片段', k: 'C' },
	{ say: '跨会话留下来的信息', k: 'E' },
	{ say: '工具刚查回来的结果', k: 'A' },
	{ say: '重复的前缀不用重算', k: 'B' },
];

const termOf = (k: string) => terms.find((t) => t.k === k)!.term;

export default function S03_Match() {
	const [open, setOpen] = useState(false);
	return (
		<PartFrame part="review" title="复习连一连：五样东西，各管什么" subtitle="在聊天框打五个字母，按 1–5 的顺序，比如「ABCDE」。">
			<div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 28, alignItems: 'start' }}>
				<div style={{ display: 'grid', gap: 8 }}>
					{items.map((it, i) => {
						const rag = open && it.k === 'C';
						return (
							<motion.div key={it.k} initial={{ opacity: 0, x: -18 }} animate={{ opacity: open && !rag ? 0.55 : 1, x: 0 }} transition={{ duration: 0.3, delay: open ? 0 : 0.15 + i * 0.08 }}
								style={{ ...card, display: 'flex', alignItems: 'center', gap: 16, padding: '6px 18px', ...(rag ? { boxShadow: softShadow, borderWidth: 3 } : {}) }}>
								<NumberBadge bg={colors.white}>{i + 1}</NumberBadge>
								<span style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.3, flex: 1 }}>{it.say}</span>
								{open && <TermPill bg={rag ? colors.orange : colors.yellow} fontSize={19}>{it.k} · {termOf(it.k)}</TermPill>}
							</motion.div>
						);
					})}
				</div>
				<div style={{ display: 'grid', gap: 8 }}>
					{terms.map((t, i) => (
						<motion.div key={t.k} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
							style={{ ...card, background: colors.dark, color: colors.white, display: 'flex', alignItems: 'center', gap: 16, padding: '6px 20px', minHeight: 60 }}>
							<span style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, color: colors.yellow, width: 28 }}>{t.k}</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 25, fontWeight: 700 }}>{t.term}</span>
						</motion.div>
					))}
				</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 14 }}>
				<RevealButton open={open} label="看答案" onClick={() => setOpen((v) => !v)} />
				{open && <span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700 }}>DCEAB</span>}
			</div>
			{open && <>
				<Punch delay={0.1} size={28} mt={16}>RAG 只管知识这一格：请求时，找来 <Mark>有权限、可追溯、版本对</Mark> 的证据。</Punch>
				<Punch delay={0.2} size={21} mt={6}><span style={{ color: muted }}>规则、业务状态、工具权限、人工复核，都不归它管。</span></Punch>
			</>}
		</PartFrame>
	);
}
