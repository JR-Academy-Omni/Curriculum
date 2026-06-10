import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const STAGES = [
	{ tag: 'TRIGGER', title: 'Cron Job', detail: '每周一 9:00\n自动触发', color: colors.indigo },
	{ tag: 'GENERATE', title: 'AI 写文案', detail: '按模板（hook +\n痛点 + CTA）\n一次出 5 条', color: colors.purple },
	{ tag: 'VISUAL', title: 'AI 配图', detail: 'gpt-image /\nMidjourney\n按品牌色出图', color: colors.rose },
	{ tag: 'REVIEW', title: '推给你审', detail: 'Notion / 飞书\n卡片 · 你点\n"确认 ✓"', color: colors.orange },
	{ tag: 'SCHEDULE', title: '自动排期', detail: 'Buffer 按最佳\n时段发到\n小红书 / X', color: colors.green },
];

export default function S12b_Step2Templated() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1440, height: '86%', padding: '28px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 24 }}>
					<div style={{ display: 'inline-block', padding: '6px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>STEP 2 · 模板化自动化</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '55px', fontWeight: 900, letterSpacing: -1 }}>AI 帮你<span style={{ color: colors.rose }}>执行</span>，你只做<span style={{ color: colors.rose }}>决策</span></h2>
					<p style={{ fontFamily: fonts.body, fontSize: 21, color: '#555', fontWeight: 600, marginTop: 8 }}>一次配置，每周自动跑。你的工作从「写文案」变成「审文案」。</p>
				</motion.div>

				<motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } } }}
					style={{ display: 'flex', alignItems: 'stretch', gap: 8, marginBottom: 24 }}>
					{STAGES.map((stage, i) => (
						<div key={stage.tag} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
							<motion.div variants={{ hidden: { opacity: 0, y: 28, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1 } }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
								style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '18px 12px', textAlign: 'center', minHeight: 206, display: 'flex', flexDirection: 'column' }}>
								<div style={{ display: 'inline-block', alignSelf: 'center', padding: '4px 10px', background: stage.color, color: colors.white, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 1.5, marginBottom: 12 }}>{stage.tag}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, marginBottom: 10, color: colors.black }}>{stage.title}</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 16, color: '#444', whiteSpace: 'pre-line', lineHeight: 1.5 }}>{stage.detail}</div>
								<div style={{ marginTop: 'auto', paddingTop: 10, fontFamily: fonts.mono, fontSize: 26, fontWeight: 700, color: stage.color }}>0{i + 1}</div>
							</motion.div>
							{i < STAGES.length - 1 && <div style={{ fontFamily: fonts.mono, fontSize: 27.5, fontWeight: 700, color: colors.black, padding: '0 2px', flexShrink: 0 }}>→</div>}
						</div>
					))}
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.3 }} style={{ display: 'flex', border, boxShadow: shadow }}>
					<div style={{ flex: 1, padding: '18px 24px', background: '#fff0f0', borderRight: `3px solid ${colors.black}` }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15.5, color: '#c0392b', letterSpacing: 2, marginBottom: 6, fontWeight: 700 }}>BEFORE · Step 1</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: colors.black }}>2 分钟 × 5 条 = 10 分钟<span style={{ fontSize: 16.5, color: '#666', fontWeight: 500, fontFamily: fonts.body }}> · 你写、你发、你重复</span></div>
					</div>
					<div style={{ flex: 1, padding: '18px 24px', background: '#f0fdf4' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15.5, color: '#16a34a', letterSpacing: 2, marginBottom: 6, fontWeight: 700 }}>NOW · Step 2</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: colors.black }}>0 写作 + 5 分钟审稿<span style={{ fontSize: 16.5, color: '#666', fontWeight: 500, fontFamily: fonts.body }}> · AI 执行 · 你决策</span></div>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
