import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 大纲是活的：随 Claude / Codex / Cursor 版本更新而迭代
const TOOLS = [
	{ name: 'Claude', note: '新模型 / Skills / Agent 能力', c: colors.orange },
	{ name: 'Codex', note: 'CLI / 精调 / 准确率', c: colors.teal },
	{ name: 'Cursor', note: 'Rules / 编辑器能力', c: colors.blue },
];

export default function S00c_LivingSyllabus() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner center>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.yellow} color={colors.black}>大纲是活的，不是刻死的</Tag>
				</motion.div>
				<Title white size="50px" style={{ marginTop: 16, textAlign: 'center', lineHeight: 1.2 }}>
					随 <span style={{ background: colors.orange, color: colors.black, padding: '0 8px' }}>Claude / Codex</span> 更新而迭代
				</Title>

				<div style={{ display: 'flex', gap: 16, marginTop: 34 }}>
					{TOOLS.map((t, i) => (
						<motion.div key={t.name}
							initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 180, damping: 15, delay: 0.2 + i * 0.12 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 24px', minWidth: 200 }}>
							<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 24, color: t.c }}>{t.name}</div>
							<div style={{ fontSize: 14, color: '#666', marginTop: 6 }}>{t.note}</div>
							<div style={{ marginTop: 10, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#999' }}>每隔几周就出新版本 →</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 34, maxWidth: 980, textAlign: 'center' }}>
					<p style={{ fontSize: 22, color: colors.white, fontWeight: 600, lineHeight: 1.5 }}>
						工具一更新，<span style={{ background: colors.yellow, color: colors.black, padding: '2px 8px' }}>对应章节就改成最新版</span>。
					</p>
					<p style={{ fontSize: 18, color: '#cfd3e6', marginTop: 12, lineHeight: 1.5 }}>
						你学到的永远是<b style={{ color: colors.white }}>当下最能打的做法</b>，不是半年前的过时教程。上面的节数 / 主题会随版本微调。
					</p>
				</motion.div>
			</Inner>
		</Slide>
	);
}
