import { motion } from 'framer-motion';
import { colors, fonts } from '../ui';
import { PartFrame, Punch, Mark, card, muted, RunLine, RETRIEVAL_RUNS } from './_shared';

// G01、G07、G10 在六组运行里都失败（runs/20261023-* 的 results.jsonl）
const left = [
	{ id: 'G01', q: '周末去看我妈需要预约吗？', why: '要找的那句被切成两半' },
	{ id: 'G07', q: '周末带 8 岁的孙子去探视，要注意什么？', why: '要两句，一句都没找全' },
	{ id: 'G10', q: '想带我爸回家住一晚，要做什么？', why: '要两句，只找到一句' },
];

export default function S26_Remaining() {
	return (
		<PartFrame part="knob" title="还剩 3 道，哪个旋钮都没修好" subtitle="在聊天框写：下一个实验，你会改什么？">
			<div style={{ display: 'grid', gap: 12 }}>
				{left.map((c, i) => (
					<motion.div key={c.id} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.15 + i * 0.12 }}
						style={{ ...card, display: 'grid', gridTemplateColumns: '90px 1fr 340px', alignItems: 'center', gap: 16, padding: '14px 22px', borderLeft: `12px solid ${colors.purple}` }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700 }}>{c.id}</span>
						<span style={{ fontSize: 25, fontWeight: 900 }}>{c.q}</span>
						<span style={{ fontSize: 21, fontWeight: 800, color: muted }}>{c.why}</span>
					</motion.div>
				))}
			</div>
			<Punch delay={0.8} size={28}>先看它们<Mark>为什么</Mark>错，再挑下一个旋钮；还是一次只改一样。</Punch>
			<RunLine>{RETRIEVAL_RUNS}</RunLine>
		</PartFrame>
	);
}
