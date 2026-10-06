import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, radii } from '../ui';
import { Label, Panel } from '../deck';

const grid = 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)';
const marker = `linear-gradient(transparent 68%, ${colors.yellow} 68%, ${colors.yellow} 94%, transparent 94%)`;

// 封面
export default function S01_Cover() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', backgroundImage: grid, backgroundSize: '48px 48px' }}>
			<div aria-hidden style={{ position: 'absolute', left: -90, top: 120, width: 200, height: 200, borderRadius: '50%', border: `26px solid ${colors.yellow}`, opacity: .52 }} />
			<div aria-hidden style={{ position: 'absolute', right: -60, bottom: -40, width: 260, height: 160, borderRadius: '130px 0 0 0', background: colors.yellow, opacity: .58 }} />
			<Inner center>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 30 }}>
					<Label bg={colors.dark} color={colors.yellow}>JR ACADEMY · AI ENGINEER 第七期 · W2</Label>
				</motion.div>
				<motion.h1
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.15 }}
					style={{ fontFamily: fonts.heading, fontSize: 84, lineHeight: 1.12, letterSpacing: -2, margin: 0 }}>
					<span style={{ backgroundImage: marker, WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>Tokens, Context Windows</span>
					<br />
					&amp;{' '}
					<span style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 22px', borderRadius: radii.card }}>Cache</span>{' '}
					Efficiency
				</motion.h1>
				<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.5, marginTop: 28 }}>
					用你每天在用的 Claude Code / Codex，亲手量出 token 和 cache
				</motion.p>
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }} style={{ marginTop: 30 }}>
					<Panel style={{ display: 'inline-flex', gap: 22, alignItems: 'center', padding: '16px 30px' }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 15, opacity: 0.6, letterSpacing: 2 }}>讲师 · JESSIE</span>
						<span style={{ fontSize: 22, fontWeight: 700 }}>90 分钟 · 边讲边跑</span>
					</Panel>
				</motion.div>
				<p style={{ marginTop: 26, fontSize: 14, opacity: 0.55, fontFamily: fonts.mono, letterSpacing: 1 }}>← → 翻页 · F 全屏 · V 摄像头 · N 讲师备注 · P 打印</p>
			</Inner>
		</Slide>
	);
}
