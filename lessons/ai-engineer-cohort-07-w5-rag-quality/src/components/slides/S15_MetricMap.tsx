import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { PartFrame, Punch, Mark, card, muted, SourceLine } from './_shared';

// 指标 → 层（reference RAG README 的 metric contract；RAGAS 0.4 指标名）
interface Metric { m: string; old?: boolean; ragas?: boolean }
const layers: { zh: string; q: string; color: string; ms: Metric[] }[] = [
	{ zh: 'Retrieval', q: '该找的找到了吗？', color: colors.blue, ms: [{ m: 'recall@k', old: true }, { m: 'precision@k' }, { m: 'MRR' }, { m: 'context precision / recall', ragas: true }] },
	{ zh: 'Grounding', q: '每句话有证据吗？', color: colors.orange, ms: [{ m: 'faithfulness', old: true, ragas: true }] },
	{ zh: 'Citation', q: '引用指对了吗？', color: colors.purple, ms: [{ m: '程序检查：编号、版本、是不是那一块' }] },
	{ zh: 'No-answer', q: '该不该答？', color: colors.red, ms: [{ m: '回答状态 vs 期望状态' }] },
	{ zh: '切题', q: '答的是这个问题吗？', color: colors.green, ms: [{ m: 'answer relevancy', ragas: true }] },
];

export default function S15_MetricMap() {
	return (
		<PartFrame part="report" title="每个指标，看哪一层">
			<div style={{ display: 'grid', gap: 9 }}>
				{layers.map((l, i) => (
					<motion.div key={l.zh} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.28, delay: 0.15 + i * 0.09 }}
						style={{ ...card, display: 'grid', gridTemplateColumns: '190px 250px 1fr', alignItems: 'center', gap: 14, padding: '10px 20px', borderLeft: `12px solid ${l.color}` }}>
						<span style={{ fontSize: 25, fontWeight: 900 }}>{l.zh}</span>
						<span style={{ fontSize: 21, fontWeight: 800, color: muted }}>{l.q}</span>
						<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
							{l.ms.map((m) => (
								<span key={m.m} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: fonts.mono, fontSize: 19, fontWeight: 700, background: m.ragas ? colors.yellow : '#f3ece6', borderRadius: radii.pill, padding: '4px 14px' }}>
									{m.m}{m.old && <span style={{ fontFamily: fonts.body, fontSize: 15, color: muted }}>上节课讲过</span>}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
			<Punch delay={0.8} size={27}>黄色的是 <Mark>RAGAS</Mark> 的指标：一套评估工具，分数大多由另一个 LLM 当裁判来打。</Punch>
			<SourceLine>docs.ragas.io（v0.4.3）· reference RAG README 的 metric contract</SourceLine>
		</PartFrame>
	);
}
