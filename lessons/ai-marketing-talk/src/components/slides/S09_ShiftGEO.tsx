import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

export default function S09_ShiftGEO() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1380, height: '85%', padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 16 }}>
					<span style={{ padding: '6px 16px', background: colors.rose, color: colors.white, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, border }}>转变 02 · SEO → GEO</span>
				</motion.div>

				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
					style={{ fontFamily: fonts.heading, fontSize: '55px', fontWeight: 900, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 28 }}>
					你妈已经不 Google 了，<span style={{ color: colors.rose }}>她问 AI</span>
				</motion.h2>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
					<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
						style={{ background: colors.white, border, boxShadow: shadow, padding: '22px 24px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15.5, fontWeight: 700, color: '#999', marginBottom: 10 }}>过去 · SEO</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, marginBottom: 8 }}>抢 Google 前十蓝链</div>
						<div style={{ fontFamily: fonts.body, fontSize: 19, color: '#555', fontWeight: 500, lineHeight: 1.5 }}>用户自己点十个链接、自己比较、自己拿主意</div>
					</motion.div>
					<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
						style={{ background: colors.rose, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.dark}`, padding: '22px 24px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15.5, fontWeight: 700, opacity: 0.85, marginBottom: 10 }}>现在 · GEO（生成引擎优化）</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, marginBottom: 8 }}>被 ChatGPT / Perplexity 引用</div>
						<div style={{ fontFamily: fonts.body, fontSize: 19, fontWeight: 500, lineHeight: 1.5, opacity: 0.95 }}>用户问一个问题，AI 给一个答案 —— 你要成为那个答案</div>
					</motion.div>
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
					style={{ display: 'inline-block', alignSelf: 'center', padding: '14px 28px', background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.rose}`, fontFamily: fonts.heading, fontSize: 25.5, fontWeight: 800, textAlign: 'center' }}>
					营销目标变了：从「排第一」→「<span style={{ color: colors.yellow }}>被 AI 当答案说出来</span>」
				</motion.div>
			</div>
		</Slide>
	);
}
