import { motion } from 'framer-motion';
import { colors, fonts } from '../ui';
import { PartFrame, Punch, card, softShadow } from './_shared';
import { parts } from '../../data/parts';

const steps = [
	{ id: 'source', zh: '摆资料', en: 'Source' },
	{ id: 'policy', zh: '挑', en: 'Policy' },
	{ id: 'assembly', zh: '排', en: 'Assembly' },
	{ id: 'trust', zh: '防', en: 'Trust Boundary' },
	{ id: 'validation', zh: '检查', en: 'Validation' },
	{ id: 'lifecycle', zh: '换', en: 'Lifecycle' },
];

// 今天的路线
export default function S07_Map() {
	return (
		<PartFrame part="why" title="今天讲六件事">
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 14 }}>
				{steps.map((s, i) => (
					<motion.div key={s.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, delay: 0.15 + i * 0.09 }}
						style={{ ...card, boxShadow: softShadow, borderTop: `12px solid ${parts.find((p) => p.id === s.id)!.color}`, padding: '24px 16px', minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 700 }}>{i + 1}</div>
						<div>
							<div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.2 }}>{s.zh}</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, marginTop: 8 }}>{s.en}</div>
						</div>
					</motion.div>
				))}
			</div>
			<Punch delay={0.8} size={28} mt={30}>所有例子都来自同一个场景：<span style={{ background: colors.yellow, borderRadius: 8, padding: '1px 12px' }}>客服 agent 帮客户处理退款</span>。</Punch>
		</PartFrame>
	);
}
