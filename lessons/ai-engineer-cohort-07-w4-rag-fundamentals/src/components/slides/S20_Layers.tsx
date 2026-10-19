import { motion } from 'framer-motion';
import { colors, fonts } from '../ui';
import { PartFrame, Punch, Mark, TermPill, card, softShadow, muted } from './_shared';

const layers = [
	{ en: 'Ingestion', hot: false },
	{ en: 'Retrieval', hot: true, q: '该找到的那一块，进 top-k 了吗？', m: 'recall@k', color: colors.blue },
	{ en: 'Assembly', hot: false },
	{ en: 'Generation', hot: true, q: '每句话，都有证据撑着吗？', m: 'faithfulness', color: colors.orange },
	{ en: 'Policy', hot: false },
];

// 排错：先定层，再修
export default function S20_Layers() {
	return (
		<PartFrame part="debug" title="答错了，先判断错在哪层">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr 1fr 2.2fr 1fr', gap: 12, alignItems: 'stretch' }}>
				{layers.map((l, i) => (
					<motion.div key={l.en} initial={{ opacity: 0, y: 16 }} animate={{ opacity: l.hot ? 1 : 0.42, y: 0 }} transition={{ duration: 0.32, delay: 0.15 + i * 0.1 }}
						style={{ ...card, boxShadow: l.hot ? softShadow : 'none', borderTop: l.hot ? `12px solid ${l.color}` : undefined, padding: '20px 18px', minHeight: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: l.hot ? 24 : 18, fontWeight: 700, writingMode: l.hot ? undefined : 'vertical-rl' }}>{l.en}</div>
						{l.hot ? <>
							<div style={{ fontSize: 30, fontWeight: 900, lineHeight: 1.35 }}>{l.q}</div>
							<div style={{ marginTop: 'auto' }}><TermPill bg={l.color}>{l.m}</TermPill></div>
						</> : <div style={{ marginTop: 'auto', fontSize: 17, fontWeight: 700, color: muted }}>见讲义</div>}
					</motion.div>
				))}
			</div>
			<Punch delay={0.8} size={29} mt={24}>recall@k 量检索，faithfulness 量回答：<Mark>先定层，再修</Mark>。</Punch>
		</PartFrame>
	);
}
