import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

interface Platform { id: string; icon: string; name: string; skill: string; textSpec: string; imageSpec: string; color: string; }

const PLATFORMS: Platform[] = [
	{ id: 'xhs', icon: '📕', name: '小红书', skill: '/xhs-draft', textSpec: '400-600 字 · emoji + 话题 + 痛点', imageSpec: '3:4 竖版 · 9 图集 · 标题大字', color: colors.rose },
	{ id: 'mp', icon: '📰', name: '公众号', skill: '/blog-longform-writer', textSpec: '1500-2500 字 · 排版 + 引用 + CTA', imageSpec: '900×500 header + 内文配图', color: '#07c160' },
	{ id: 'linkedin', icon: '💼', name: 'LinkedIn', skill: 'linkedin-agent', textSpec: '专业语气 · 长文 · 行业 hashtag', imageSpec: '1200×627 banner · 干净排版', color: '#0a66c2' },
	{ id: 'seo', icon: '🔍', name: 'SEO / GEO', skill: '/seo-optimizer', textSpec: '长尾词页 + FAQ schema', imageSpec: 'OG 图 + alt 文案', color: colors.indigo },
];

export default function S13b_MasterVariant() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, height: '88%', padding: '22px 36px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
						<div style={{ padding: '6px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, letterSpacing: 2 }}>STEP 3.5 · 匠人做法</div>
						<div style={{ padding: '6px 14px', background: colors.rose, color: colors.white, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, letterSpacing: 2, border }}>1 份 Master · 全平台同步</div>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '36px', fontWeight: 900, letterSpacing: -1 }}><span style={{ color: colors.rose }}>1 份 Master</span> 自动 fan-out 到 <span style={{ color: colors.dark }}>N 个平台</span> · 改 1 处 = 全平台同步生效</h2>
				</motion.div>

				<div style={{ display: 'flex', gap: 14, alignItems: 'stretch', flex: 1, minHeight: 0 }}>
					{/* Master */}
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
						style={{ width: 240, flexShrink: 0, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: 16, display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, letterSpacing: 2, color: colors.yellow, fontWeight: 700, marginBottom: 6 }}>LAYER 01 · SOURCE</div>
						<div style={{ fontSize: 36, marginBottom: 4 }}>📄</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, marginBottom: 6 }}>MASTER</div>
						<div style={{ fontFamily: fonts.body, fontSize: 15.5, color: '#ccc', lineHeight: 1.55, marginBottom: 10 }}>你是谁 / 卖给谁 / 痛点<br />· 真实数据 + 案例<br />· 品牌语气 / 红线<br />· 1 套基础高清图</div>
						<div style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 8px', marginBottom: 8, borderLeft: `3px solid ${colors.yellow}` }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, letterSpacing: 1.2, fontWeight: 700, marginBottom: 2 }}>真实文件</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.white, fontWeight: 700 }}>PERSONAS.md</div>
						</div>
						<div style={{ marginTop: 'auto', padding: '6px 8px', background: colors.rose, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>SINGLE SOURCE OF TRUTH</div>
					</motion.div>

					{/* Variants */}
					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, color: '#666', letterSpacing: 1.5, fontWeight: 700 }}>LAYER 02 · VARIANT TRANSFORMERS（per-platform skill · 并行）</div>
						{PLATFORMS.map((p, i) => (
							<motion.div key={p.id} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.4 + i * 0.12 }}
								style={{ display: 'flex', alignItems: 'stretch', flex: 1, minHeight: 0, background: colors.white, border, boxShadow: shadow }}>
								<div style={{ flexShrink: 0, width: 26, background: p.color, color: colors.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 900, borderRight: `3px solid ${colors.black}` }}>→</div>
								<div style={{ flexShrink: 0, width: 130, padding: '6px 10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: `2px solid ${colors.black}`, background: '#fafafa' }}>
									<div style={{ fontSize: 23.5, lineHeight: 1, marginBottom: 2 }}>{p.icon}</div>
									<div style={{ fontFamily: fonts.heading, fontSize: 16.5, fontWeight: 900, color: colors.dark }}>{p.name}</div>
									<div style={{ marginTop: 3, fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, color: p.color, background: colors.white, border: `1.5px solid ${p.color}`, padding: '1px 4px', alignSelf: 'flex-start' }}>{p.skill}</div>
								</div>
								<div style={{ flex: 1, padding: '6px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px dashed #ddd', minWidth: 0 }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#888', letterSpacing: 1, fontWeight: 700, marginBottom: 2 }}>TEXT</div>
									<div style={{ fontFamily: fonts.body, fontSize: 16, color: colors.dark, lineHeight: 1.35, fontWeight: 600 }}>{p.textSpec}</div>
								</div>
								<div style={{ flex: 1, padding: '6px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#888', letterSpacing: 1, fontWeight: 700, marginBottom: 2 }}>IMAGE · /xhs-poster</div>
									<div style={{ fontFamily: fonts.body, fontSize: 16, color: colors.dark, lineHeight: 1.35, fontWeight: 600 }}>{p.imageSpec}</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* Publish */}
					<motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.0 }}
						style={{ width: 112, flexShrink: 0, background: colors.green, color: colors.dark, border, boxShadow: shadow, padding: '12px 10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
						<div>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, letterSpacing: 1.5, fontWeight: 700, marginBottom: 6, opacity: 0.7 }}>LAYER 03</div>
							<div style={{ fontSize: 25.5, marginBottom: 4 }}>🚀</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 17.5, fontWeight: 900, marginBottom: 8, lineHeight: 1.1 }}>Parallel<br />Publish</div>
							<div style={{ fontFamily: fonts.body, fontSize: 13.5, lineHeight: 1.5, opacity: 0.85 }}>全平台同时发<br />错峰 schedule<br />数据回流</div>
						</div>
						<div style={{ marginTop: 8, padding: '4px 6px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700 }}>orchestra</div>
					</motion.div>
				</div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.3 }} style={{ display: 'flex', gap: 10 }}>
					<div style={{ flex: 1, background: colors.black, color: colors.white, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
						<span style={{ background: colors.yellow, color: colors.black, padding: '3px 8px', fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 1.2, whiteSpace: 'nowrap' }}>FEEDBACK</span>
						<span style={{ fontFamily: fonts.body, fontSize: 16, lineHeight: 1.5 }}>各平台互动数据 → 回流 Master → AI 学「哪类 hook / 配图在哪个平台转化好」→ 下一篇由数据驱动</span>
					</div>
					<div style={{ flex: 1, background: colors.rose, color: colors.white, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
						<span style={{ background: colors.white, color: colors.rose, padding: '3px 8px', fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 1.2, whiteSpace: 'nowrap' }}>VS STEP 3</span>
						<span style={{ fontFamily: fonts.body, fontSize: 16, lineHeight: 1.5, fontWeight: 600 }}>改 1 个数据点 / hook = <b>全平台同步生效</b>，不用各平台分别改。这是<b>团队级</b> pipeline。</span>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
