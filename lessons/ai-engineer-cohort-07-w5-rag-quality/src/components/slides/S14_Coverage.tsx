import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { PartFrame, Punch, Mark, card, muted } from './_shared';

// 20 道题的陷阱分布与期望状态：data/golden/cases.v1.jsonl 统计（一题可以有多个陷阱）
const traps = [
	{ k: 'stale_version', zh: '新旧两版政策都在', n: 5 },
	{ k: 'multi_evidence', zh: '要两句以上才答得全', n: 4 },
	{ k: 'lexical_code', zh: '问的是表格代号，如 VF-02', n: 2 },
	{ k: 'out_of_scope', zh: '资料里根本没有', n: 2 },
	{ k: 'clinical_boundary', zh: '涉及用药、病情，不能替护士做决定', n: 2 },
	{ k: 'partial_evidence', zh: '只能答一部分', n: 1 },
	{ k: 'permission', zh: '答案在员工专用文件里', n: 1 },
];
const max = 5;

export default function S14_Coverage() {
	return (
		<PartFrame part="golden" title="20 道题，要考到哪些坑" subtitle="期望状态：16 道 supported，1 道 partial，3 道 no_answer。">
			<div style={{ display: 'grid', gap: 9 }}>
				{traps.map((t, i) => (
					<motion.div key={t.k} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.28, delay: 0.15 + i * 0.07 }}
						style={{ ...card, display: 'grid', gridTemplateColumns: '230px 1fr 260px', alignItems: 'center', gap: 16, padding: '8px 20px' }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700 }}>{t.k}</span>
						<span style={{ fontSize: 22, fontWeight: 800, color: muted }}>{t.zh}</span>
						<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
							<div style={{ height: 20, width: `${(t.n / max) * 190}px`, background: colors.green, borderRadius: radii.pill }} />
							<span style={{ fontFamily: fonts.mono, fontSize: 21, fontWeight: 700 }}>{t.n}</span>
						</div>
					</motion.div>
				))}
			</div>
			<Punch delay={0.8} size={28}>没有“资料里没有”的题，<Mark>就测不出模型会不会强答</Mark>。</Punch>
		</PartFrame>
	);
}
