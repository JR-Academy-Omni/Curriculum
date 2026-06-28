import { Slide, colors, fonts, border, shadow, shadowSm, slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

interface Brain { file: string; sub: string; color: string; }
interface Prod { icon: string; title: string; you?: boolean; }

// 第二大脑的 3 个文件 —— 把一坨简历结构化成「这个人的真相」
const brain: Brain[] = [
	{ file: 'PROFILE.md', sub: '他是谁 · 想投什么岗', color: colors.blue },
	{ file: 'experiences.md', sub: '经历抽成结构化事实 + 真实数字', color: colors.purple },
	{ file: 'rules.md', sub: '红线：不准编造 / 夸大', color: colors.red },
];

// 从第二大脑渲染出的多产物（简历高亮，其它淡）
const prods: Prod[] = [
	{ icon: '📄', title: '简历', you: true },
	{ icon: '💼', title: 'LinkedIn' },
	{ icon: '✉️', title: '求职信' },
	{ icon: '🌐', title: '个人主页' },
];

// 现场：简历 → 个人 OS / 第二大脑 → 渲染简历（一份 SoT 长出多产物）
export default function D01_SecondBrain() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, height: '88%', padding: '20px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ textAlign: 'center', marginBottom: 16 }}>
					<div style={{ display: 'inline-block', padding: '6px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 2, marginBottom: 8 }}>现场 · 你的简历</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '38px', fontWeight: 900, letterSpacing: -1 }}>简历 → <span style={{ background: colors.yellow, padding: '0 8px' }}>个人 OS / 第二大脑</span> → 渲染简历</h2>
				</motion.div>

				{/* 三段流程：raw → 第二大脑 → 多产物 */}
				<div style={{ display: 'flex', alignItems: 'stretch', gap: 14 }}>
					{/* 左：raw 简历 */}
					<motion.div {...slideFromLeft} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, letterSpacing: 1, color: '#888', marginBottom: 8 }}>① RAW · 一坨原始数据</div>
						<div style={{ flex: 1, background: '#ececec', border, boxShadow: shadowSm, padding: '16px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#555', lineHeight: 1.7 }}>
								<div>做过外卖平台后台…</div>
								<div>会 Python / React…</div>
								<div>带过 3 人小组…</div>
								<div>降低了系统延迟…</div>
								<div style={{ color: '#aaa' }}>…一大段混在一起</div>
							</div>
							<div style={{ marginTop: 12, fontSize: 13.5, fontWeight: 800, color: colors.red }}>AI 不知道哪条重要</div>
						</div>
					</motion.div>

					{/* 箭头 + 结构化 */}
					<motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.4 }} style={{ alignSelf: 'center', textAlign: 'center', width: 78, flexShrink: 0 }}>
						<div style={{ fontSize: 38, fontWeight: 900, color: colors.dark, lineHeight: 1 }}>→</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 800, color: colors.dark, marginTop: 4 }}>结构化</div>
					</motion.div>

					{/* 中：第二大脑 = 3 个文件 */}
					<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.25 }} style={{ flex: 1.25, display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, letterSpacing: 1, color: colors.dark, marginBottom: 8 }}>② 这个人的「第二大脑」</div>
						<div style={{ flex: 1, background: colors.dark, border, boxShadow: `6px 6px 0 ${colors.purple}`, padding: '14px 13px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center' }}>
							{brain.map((b, i) => (
								<motion.div key={b.file} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.45 + i * 0.12 }}
									style={{ background: colors.white, border, boxShadow: shadowSm, padding: '9px 12px' }}>
									<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
										<span style={{ width: 10, height: 10, borderRadius: 999, background: b.color, flexShrink: 0 }} />
										<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: colors.black }}>{b.file}</span>
									</div>
									<div style={{ fontSize: 13.5, color: '#555', fontWeight: 600, marginTop: 3, paddingLeft: 18 }}>{b.sub}</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* 箭头 + 渲染 */}
					<motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.55 }} style={{ alignSelf: 'center', textAlign: 'center', width: 78, flexShrink: 0 }}>
						<div style={{ fontSize: 38, fontWeight: 900, color: colors.dark, lineHeight: 1 }}>→</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 800, color: colors.dark, marginTop: 4 }}>渲染</div>
					</motion.div>

					{/* 右：多产物 */}
					<motion.div {...slideFromRight} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, letterSpacing: 1, color: '#888', marginBottom: 8 }}>③ 渲染出多产物</div>
						<div style={{ flex: 1, display: 'grid', gridTemplateRows: 'repeat(4, 1fr)', gap: 9 }}>
							{prods.map((p, i) => (
								<motion.div key={p.title} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.7 + i * 0.1 }}
									style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px', border, background: p.you ? colors.red : colors.white, boxShadow: p.you ? shadow : shadowSm, opacity: p.you ? 1 : 0.55, position: 'relative' }}>
									<span style={{ fontSize: 22, lineHeight: 1 }}>{p.icon}</span>
									<span style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, color: p.you ? colors.white : colors.black }}>{p.title}</span>
									{p.you && <span style={{ marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: colors.white, background: colors.dark, padding: '2px 8px' }}>★ 今天做这个</span>}
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.2 }} style={{ marginTop: 18, textAlign: 'center' }}>
					<div style={{ display: 'inline-block', padding: '11px 26px', background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.red}`, fontFamily: fonts.heading, fontSize: 21, fontWeight: 900 }}>
						改一次 <span style={{ fontFamily: fonts.mono, color: colors.yellow }}>experiences</span>，所有产物一起更新 —— 你维护的永远是<span style={{ color: colors.yellow }}>那一份真相</span>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
