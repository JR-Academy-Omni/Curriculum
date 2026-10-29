import { motion } from 'framer-motion';
import { colors, fonts } from '../ui';
import { Label } from '../deck';
import { PartFrame, Punch, Mark, SourceLine, card, softShadow } from './_shared';

// Assembly：压缩会悄悄丢掉约束
export default function S13_Compress() {
	return (
		<PartFrame part="assembly" title="小心：压缩会悄悄丢掉约束">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', gap: 10, alignItems: 'center' }}>
				<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.15 }} style={{ ...card, boxShadow: softShadow, padding: '24px 26px', minHeight: 210 }}>
					<Label bg={colors.white} color={colors.black}>客户原话</Label>
					<div style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.5, marginTop: 16 }}>「如果退款，<Mark>只能退回我的原卡</Mark>，不要退到钱包。」</div>
				</motion.div>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.45 }} style={{ fontFamily: fonts.heading, fontSize: 60, fontWeight: 900, textAlign: 'center' }}>→</motion.div>
				<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.6 }} style={{ ...card, background: colors.dark, color: colors.white, padding: '24px 26px', minHeight: 210 }}>
					<Label bg={colors.orange} color={colors.black}>压缩后的摘要</Label>
					<div style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.5, marginTop: 16 }}>「客户要求退款。」</div>
				</motion.div>
			</div>
			<Punch delay={0.9}>先保证不漏，再去掉多余的。</Punch>
			<SourceLine>Anthropic, Effective context engineering for AI agents（2025-09）。</SourceLine>
		</PartFrame>
	);
}
