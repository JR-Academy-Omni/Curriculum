import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { PartFrame, Bubble, Punch, Mark, card, line, muted, RunLine, RETRIEVAL_RUNS } from './_shared';

// 真实 case G01：要找的那句话被固定 120 字切块切在两块之间（visiting-policy@v2#00 / #01）
const cut = { a: '……周末及公众假期探视需至少提前', b: '24 小时通过家属门户预约，每个时段为 2 小时……' };

export default function S10_G01() {
	return (
		<PartFrame part="failure" title="一句话，被切成了两半" titleSize={50}>
			<div style={{ display: 'grid', gap: 16 }}>
				<Bubble who="家属">周末去看我妈需要预约吗？</Bubble>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', alignItems: 'stretch' }}>
					<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.2 }} style={{ ...card, padding: '14px 20px', display: 'grid', gap: 6 }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700 }}>块 v2#00 的结尾</span>
						<span style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.45 }}>{cut.a}<span style={{ background: colors.yellow, borderRadius: radii.label, padding: '0 4px' }}>✂</span></span>
					</motion.div>
					<div style={{ display: 'grid', placeItems: 'center', fontFamily: fonts.heading, fontSize: 34, fontWeight: 900 }}>|</div>
					<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.35 }} style={{ ...card, padding: '14px 20px', display: 'grid', gap: 6 }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700 }}>块 v2#01 的开头（排第 1）</span>
						<span style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.45 }}>{cut.b}</span>
					</motion.div>
				</div>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.55 }}
					style={{ border: line, borderRadius: radii.card, background: colors.white, padding: '12px 20px', fontSize: 23, fontWeight: 800, color: muted }}>
					规则：一块里要有<strong style={{ color: colors.black }}>完整的那句话</strong>，才算找到。所以这条记作 retrieval 失败。
				</motion.div>
			</div>
			<Punch delay={0.8} size={29}>指标是按定义算的：<Mark>先读定义，再读分数</Mark>。</Punch>
			<RunLine>{RETRIEVAL_RUNS}</RunLine>
		</PartFrame>
	);
}
