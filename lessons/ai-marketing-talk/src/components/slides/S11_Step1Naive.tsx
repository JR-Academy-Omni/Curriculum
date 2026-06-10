import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const FLOW = [
	{ icon: '🧑‍💻', label: '你', detail: '打开浏览器' },
	{ icon: '💬', label: 'ChatGPT', detail: '输入 prompt：\n"写一条关于 X 产品\n的小红书"' },
	{ icon: '📋', label: '复制', detail: '粘贴到\n小红书 App' },
	{ icon: '📱', label: '发布', detail: '手动选话题\n+ 配 1 张图' },
];

const STATS = [
	{ label: '耗时', value: '2 分钟 / 条' },
	{ label: '产出', value: '1 平台 · 1 条' },
	{ label: '自动化程度', value: '0%' },
	{ label: '可扩展性', value: '无 · 完全手工' },
];

export default function S11_Step1Naive() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1440, height: '86%', padding: '28px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				{/* Header */}
				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 26 }}>
					<div style={{ display: 'inline-block', padding: '6px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>STEP 1 · 大家都知道的</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '59.5px', fontWeight: 900, letterSpacing: -1.5, lineHeight: 1.1 }}>用 ChatGPT 写一条小红书</h2>
					<p style={{ fontFamily: fonts.body, fontSize: 22.5, color: '#555', fontWeight: 600, marginTop: 12, maxWidth: 1100 }}>
						这是 99% 的人对「用 AI 做营销」的理解 —— <b>一次性、手工、单平台</b>。
					</p>
				</motion.div>

				{/* Flow */}
				<motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
					style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', gap: 10, marginBottom: 22 }}>
					{FLOW.map((node, i) => (
						<div key={node.label} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
							<motion.div variants={{ hidden: { opacity: 0, y: 24, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1 } }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
								style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '20px 14px', textAlign: 'center', minHeight: 158, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<div style={{ fontSize: 46.5, marginBottom: 10 }}>{node.icon}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 22.5, fontWeight: 900, marginBottom: 8 }}>{node.label}</div>
								<div style={{ fontFamily: fonts.body, fontSize: 16.5, color: '#555', whiteSpace: 'pre-line', lineHeight: 1.45, fontWeight: 500 }}>{node.detail}</div>
							</motion.div>
							{i < FLOW.length - 1 && (
								<motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} transition={{ duration: 0.35 }}
									style={{ fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: colors.rose, padding: '0 4px', flexShrink: 0 }}>→</motion.div>
							)}
						</div>
					))}
				</motion.div>

				{/* Stats */}
				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.1 }} style={{ display: 'flex', gap: 14, marginBottom: 24 }}>
					{STATS.map((s) => (
						<div key={s.label} style={{ flex: 1, background: colors.white, border: `2px solid ${colors.black}`, padding: '12px 16px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, color: '#666', letterSpacing: 1.5, marginBottom: 6 }}>{s.label}</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, color: s.value === '0%' ? colors.rose : colors.black }}>{s.value}</div>
						</div>
					))}
				</motion.div>

				{/* Bottom BIG question */}
				<motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 1.45, type: 'spring', stiffness: 200, damping: 14 }}
					style={{ padding: '20px 30px', background: colors.dark, border, boxShadow: `6px 6px 0 ${colors.rose}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.white, letterSpacing: -0.5 }}>
						你以为<span style={{ color: colors.yellow }}> 这就是 AI Marketing</span>？
					</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 16.5, color: colors.yellow, letterSpacing: 2 }}>↓ 看下一页</div>
				</motion.div>
			</div>
		</Slide>
	);
}
