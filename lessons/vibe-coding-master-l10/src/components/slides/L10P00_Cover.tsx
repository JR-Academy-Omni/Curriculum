import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, FS } from '../deck';

// P00 · 封面（蓝图 §11.2）
// 🔴 标题不许含「象限」，不许出现 2×2 图形（§11.1）。
//    真名「四象限 AI 协作协议」第一次出现在 P08，和图同时上屏。
//    这一页的标题是钩子，不是课名 —— 它要让学员带着「我以为它知道什么」进第一幕。

export default function L10P00_Cover() {
	return (
		<Page style={{ justifyContent: 'center', alignItems: 'center', gap: 0 }}>
			<div style={{ textAlign: 'center', maxWidth: 1240 }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35 }}
					style={{
						display: 'inline-block', padding: '8px 22px',
						background: colors.black, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 18, fontWeight: 700,
						letterSpacing: 3, marginBottom: 28,
					}}
				>
					VIBE CODING 大师课 · 第十节
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
					style={{
						fontFamily: fonts.heading, fontSize: 108, fontWeight: 900,
						lineHeight: 1.02, letterSpacing: -3, marginBottom: 30,
					}}
				>
					你以为<br />
					<span style={{ background: colors.red, color: colors.white, padding: '0 26px' }}>
						它知道
					</span>
				</motion.h1>

				<motion.div
					initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 0.4 }}
					style={{ border, boxShadow: shadow, background: colors.white, display: 'inline-block' }}
				>
					<div style={{ padding: '20px 34px', fontSize: 29, fontWeight: 700, color: colors.dark, lineHeight: 1.5 }}>
						今天没有 PPT 式的讲解。<br />
						<span style={{ background: colors.yellow, padding: '0 8px' }}>前 20 分钟你在写，我在闭嘴。</span>
					</div>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.72 }}
					style={{ marginTop: 30, fontSize: FS.note, color: '#999', fontFamily: fonts.mono, letterSpacing: 1 }}
				>
					90 分钟 · 带一个你这周真的要做的任务 + 你现在用的 CLAUDE.md · ← → 翻页 · F 全屏 · V 摄像头
				</motion.p>
			</div>
		</Page>
	);
}
