import { motion } from 'framer-motion';
import { colors, fonts } from '../ui';
import { PartFrame, Punch, Mark, card, softShadow, muted } from './_shared';

const steps = [
	{ zh: '摆资料', en: 'Source', d: '五项标签', color: colors.green },
	{ zh: '挑', en: 'Policy', d: '五条标准，四条路', color: colors.blue },
	{ zh: '排', en: 'Assembly', d: '每一轮现拼', color: colors.orange },
	{ zh: '检查', en: 'Validation', d: '记四件事，看五个指标', color: colors.purple },
	{ zh: '换', en: 'Lifecycle', d: '拿、收、换新、作废、扔掉', color: colors.red },
];

// 总结：Blueprint 五步
export default function S20_Blueprint() {
	return (
		<PartFrame part="wrap" title="合起来，就是这五步">
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
				{steps.map((s, i) => (
					<motion.div key={s.en} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, delay: 0.15 + i * 0.12 }}
						style={{ ...card, boxShadow: softShadow, borderTop: `12px solid ${s.color}`, padding: '22px 18px', minHeight: 270, display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 700 }}>{i + 1}</div>
						<div style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.2, marginTop: 14 }}>{s.zh}</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 21, fontWeight: 700, marginTop: 6 }}>{s.en}</div>
						<span style={{ flex: 1 }} />
						<div style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.45, color: muted }}>{s.d}</div>
					</motion.div>
				))}
			</div>
			<Punch delay={0.9}>把这五步写下来，就是一份 <Mark>Context Architecture Blueprint</Mark>。</Punch>
		</PartFrame>
	);
}
