import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts } from '../ui';
import { Label } from '../deck';

const grid = 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)';
const marker = `linear-gradient(transparent 68%, ${colors.yellow} 68%, ${colors.yellow} 94%, transparent 94%)`;

// 收尾
export default function S28_End() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', backgroundImage: grid, backgroundSize: '48px 48px' }}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
				<motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 30 }}>
					<Label bg={colors.dark} color={colors.yellow}>W5 · 一句话带走</Label>
				</motion.div>
				<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
					style={{ fontFamily: fonts.heading, fontSize: 70, fontWeight: 900, lineHeight: 1.3, margin: 0 }}>
					先看失败的原因，<br />再选旋钮；<br />
					<span style={{ backgroundImage: marker }}>结论要配具体的题。</span>
				</motion.p>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.6 }} style={{ fontSize: 30, fontWeight: 800, marginTop: 36 }}>
					有问题，在聊天框里提。
				</motion.p>
			</Inner>
		</Slide>
	);
}
