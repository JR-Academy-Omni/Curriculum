import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

interface Node { icon: string; title: string; desc: string; color: string; }

const NODES: Node[] = [
	{ icon: '⏰', title: '每天触发', desc: 'cron 9:00\n你睡觉时自己跑', color: colors.indigo },
	{ icon: '🔍', title: '调研抓取', desc: '竞品 / 新闻 / 评论\nReddit / X / 行业', color: colors.purple },
	{ icon: '🧪', title: 'AI 蒸馏', desc: '提炼要点 · 去重\n打标签', color: colors.rose },
	{ icon: '📚', title: '存进知识 Wiki', desc: '向量库 / Notion\nAI 可随时检索', color: colors.orange },
	{ icon: '♻️', title: '喂养 Master', desc: '知识体系\n每天自己变厚', color: colors.green },
];

export default function S18b_KnowledgeWiki() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '93%', maxWidth: 1460, height: '86%', padding: '26px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 22 }}>
					<span style={{ padding: '6px 16px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 2 }}>「调研」在 AI 里长什么样</span>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '40px', fontWeight: 900, letterSpacing: -1, marginTop: 10 }}>调研 → 知识 Wiki —— <span style={{ color: colors.rose }}>每天自动长大</span></h2>
				</motion.div>

				<motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
					style={{ display: 'flex', alignItems: 'stretch', gap: 6, marginBottom: 24 }}>
					{NODES.map((n, i) => (
						<div key={n.title} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
							<motion.div variants={{ hidden: { opacity: 0, y: 28, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1 } }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
								style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '18px 12px', textAlign: 'center', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<div style={{ width: 56, height: 56, background: n.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, margin: '0 auto 12px' }}>{n.icon}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, marginBottom: 8, color: colors.black }}>{n.title}</div>
								<div style={{ fontFamily: fonts.body, fontSize: 14.5, fontWeight: 600, color: '#555', whiteSpace: 'pre-line', lineHeight: 1.5 }}>{n.desc}</div>
							</motion.div>
							{i < NODES.length - 1 && <div style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 700, color: colors.rose, padding: '0 2px', flexShrink: 0 }}>→</div>}
						</div>
					))}
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.9 }} style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.dark, background: colors.yellow, border, padding: '8px 14px' }}>真实：omni-report 5 个日更 cron + training-rag 800+ 文档进向量库</div>
					<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, color: colors.white, background: colors.rose, border, boxShadow: `5px 5px 0 ${colors.dark}`, padding: '10px 20px' }}>一次搭好，每天自己跑</div>
				</motion.div>
			</div>
		</Slide>
	);
}
