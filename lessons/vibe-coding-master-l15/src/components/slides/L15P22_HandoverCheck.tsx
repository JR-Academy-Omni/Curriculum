import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, border, radii } from '../deck';

/**
 * P22 · 一份交接要写清楚什么
 * 🔴 一页，不展开（PRD §8 非目标：不讲完整的十三节）。
 *    这是从一套成熟流程规范里借的四节，用作验收标准。
 * 🔴 脱敏：不说是谁的规范，不给任何文件数量。
 * 落点在后两节 —— 它们是唯二能回答「这东西现在还算不算数」的。
 */
const SEC = [
	{ en: 'owner', zh: '负责人', d: '谁对这个包负责', dim: false },
	{ en: 'trigger', zh: '触发', d: '这个包在什么时候会动', dim: false },
	{ en: 'evidence', zh: '证据', d: '这个包干了什么，留在哪，能不能被重新打开来读', dim: true },
	{ en: 'review date', zh: '复审日期', d: '下一次什么时候再看一眼', dim: true },
];

export default function L15P22_HandoverCheck() {
	return (
		<Page>
			<ActBadge act={4} />
			<Head sub="一份像样的交接是有固定的节的。今天只取其中四节 —— 因为这四节一旦空着，交接就不成立。">
				一份交接要写清楚什么
			</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
				{SEC.map((s, i) => (
					<motion.div
						key={s.en}
						initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.15 + i * 0.13, duration: 0.42 }}
						style={{
							display: 'flex', alignItems: 'center', gap: 20,
							background: s.dim ? colors.yellow : colors.white, border,
							borderRadius: radii.card, boxShadow: `5px 5px 0 ${s.dim ? colors.red : '#ddd6d0'}`,
							padding: '15px 22px',
						}}
					>
						<span style={{
							fontFamily: fonts.mono, fontSize: 19, fontWeight: 800, letterSpacing: 1,
							minWidth: 190, color: s.dim ? colors.black : '#888',
						}}>{s.en}</span>
						<span style={{ fontSize: 28, fontWeight: 900, minWidth: 150 }}>{s.zh}</span>
						<span style={{ fontSize: 21, color: s.dim ? '#4a4320' : '#666', lineHeight: 1.5 }}>{s.d}</span>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.85, type: 'spring', stiffness: 170, damping: 17 }}
				style={{
					marginTop: 'auto', padding: '20px 30px', background: colors.dark,
					borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.yellow}`,
				}}
			>
				<div style={{ fontFamily: fonts.heading, fontSize: 31, fontWeight: 900, color: colors.white, lineHeight: 1.45 }}>
					后面这两节最常空。而它们恰恰是唯二能回答一个问题的：<br />
					<span style={{ color: colors.yellow }}>这东西现在还算不算数。</span>
				</div>
			</motion.div>
		</Page>
	);
}
