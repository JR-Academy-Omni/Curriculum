import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

const FLOW = [
	{ icon: '🧑‍💻', label: '你', detail: '打开浏览器' },
	{ icon: '💬', label: 'ChatGPT', detail: '输入 prompt：\n"写一条关于 X 产品\n的小红书文案"' },
	{ icon: '📋', label: '复制', detail: '粘贴到\n小红书 App' },
	{ icon: '📱', label: '发布', detail: '手动选话题\n+ 配 1 张图' },
];

export default function Z02_Step1_KnownWay() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 28, width: '100%' }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.dark,
						color: colors.yellow, fontFamily: fonts.mono, fontSize: 14,
						fontWeight: 700, letterSpacing: 2, marginBottom: 14,
					}}>STEP 1 · 大家都知道的</div>
					<Title size="60px">用 ChatGPT 写一条小红书文案</Title>
					<p style={{ fontSize: 20, color: '#555', marginTop: 12, maxWidth: 1100 }}>
						这是 99% 的人对"用 AI"的理解 —— 一次性、手工、单平台。耗时 2 分钟。
					</p>
				</motion.div>

				{/* Flow */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
					style={{
						width: '100%', display: 'flex', alignItems: 'stretch',
						justifyContent: 'space-between', gap: 12, marginBottom: 32,
					}}
				>
					{FLOW.map((node, i) => (
						<div key={node.label} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
							<motion.div
								variants={{
									hidden: { opacity: 0, y: 24, scale: 0.9 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
								style={{
									flex: 1, background: colors.white, border, boxShadow: shadow,
									padding: '24px 16px', textAlign: 'center', minHeight: 180,
									display: 'flex', flexDirection: 'column', justifyContent: 'center',
								}}
							>
								<div style={{ fontSize: 48, marginBottom: 12 }}>{node.icon}</div>
								<div style={{ fontSize: 20, fontWeight: 900, marginBottom: 8 }}>{node.label}</div>
								<div style={{ fontSize: 15, color: '#555', whiteSpace: 'pre-line', lineHeight: 1.5 }}>
									{node.detail}
								</div>
							</motion.div>
							{i < FLOW.length - 1 && (
								<motion.div
									variants={{
										hidden: { opacity: 0, x: -10 },
										visible: { opacity: 1, x: 0 },
									}}
									transition={{ duration: 0.35 }}
									style={{
										fontFamily: fonts.mono, fontSize: 36, fontWeight: 700,
										color: colors.black, padding: '0 6px', flexShrink: 0,
									}}
								>→</motion.div>
							)}
						</div>
					))}
				</motion.div>

				{/* Stats row */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.2 }}
					style={{
						width: '100%', display: 'flex', gap: 16, marginBottom: 28,
					}}
				>
					{[
						{ label: '耗时', value: '2 分钟 / 条' },
						{ label: '产出', value: '1 平台 · 1 条' },
						{ label: '自动化程度', value: '0%' },
						{ label: '可扩展性', value: '无 · 完全手工' },
					].map((s) => (
						<div key={s.label} style={{
							flex: 1, background: colors.warmBg, border: `2px solid ${colors.black}`,
							padding: '14px 18px',
						}}>
							<div style={{
								fontFamily: fonts.mono, fontSize: 13, color: '#666',
								letterSpacing: 1.5, marginBottom: 6,
							}}>{s.label.toUpperCase()}</div>
							<div style={{ fontSize: 18, fontWeight: 900, color: colors.black }}>{s.value}</div>
						</div>
					))}
				</motion.div>

				{/* Bottom BIG question */}
				<motion.div
					initial={{ opacity: 0, scale: 0.92 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.55, delay: 1.55, type: 'spring', stiffness: 200, damping: 14 }}
					style={{
						width: '100%', padding: '24px 32px', background: colors.black,
						display: 'flex', alignItems: 'center', justifyContent: 'space-between',
					}}
				>
					<div style={{
						fontFamily: fonts.heading, fontSize: 32, fontWeight: 900,
						color: colors.white, letterSpacing: -0.5,
					}}>
						你以为<span style={{ color: colors.yellow }}> 这就是 AI Adoption</span>？
					</div>
					<div style={{
						fontFamily: fonts.mono, fontSize: 14, color: colors.yellow,
						letterSpacing: 2,
					}}>↓ 看下一页</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
