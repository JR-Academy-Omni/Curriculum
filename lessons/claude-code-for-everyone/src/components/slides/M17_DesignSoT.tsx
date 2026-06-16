import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

// 真实的 DESIGN.md token（英文）—— 展示「视觉真相」是个具体文件
const TOKENS: { k: string; v: string; note?: string; val?: boolean }[] = [
	{ k: 'primary', v: '#E63977', note: 'rose · main CTA', val: true },
	{ k: 'ink', v: '#10162F', note: 'text / dark bg', val: true },
	{ k: 'surface', v: '#FFF1E7', note: 'warm canvas', val: true },
	{ k: 'accent', v: '#FFDE59', note: 'highlight', val: true },
	{ k: 'font.head', v: 'Bricolage Grotesque' },
	{ k: 'font.body', v: 'DM Sans' },
	{ k: 'font.data', v: 'Space Mono' },
	{ k: 'border', v: '3px solid #000' },
	{ k: 'shadow', v: '6px 6px 0 #000' },
	{ k: 'radius', v: '0', note: 'neo-brutalism' },
	{ k: 'voice', v: 'direct · data-first · no fluff' },
];

export default function S19b_DesignSystemSoT() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '93%', maxWidth: 1460, height: '87%', padding: '24px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 14 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
						<span style={{ padding: '6px 16px', background: colors.dark, color: colors.rose, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>真相不止文字 · 视觉也要</span>
						<span style={{ padding: '6px 14px', background: colors.rose, color: colors.white, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, border: `2px solid ${colors.black}` }}>🔗 现成工具 · getdesign.md</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '42px', fontWeight: 900, letterSpacing: -1, lineHeight: 1.12, marginTop: 12 }}>
						设计系统 = 你品牌的<span style={{ color: colors.rose }}>「视觉真相」</span> = 一个 <span style={{ fontFamily: fonts.mono }}>DESIGN.md</span>
					</h2>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 22 }}>
					{/* 左：真实 DESIGN.md 代码块 */}
					<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
						style={{ background: colors.dark, border, boxShadow: `7px 7px 0 ${colors.rose}` }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderBottom: `2px solid rgba(255,255,255,0.2)` }}>
							<span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
							<span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
							<span style={{ width: 11, height: 11, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
							<span style={{ marginLeft: 8, fontFamily: fonts.mono, fontSize: 14, color: '#aaa', fontWeight: 700 }}>DESIGN.md</span>
						</div>
						<div style={{ padding: '14px 18px', fontFamily: fonts.mono, fontSize: 16, lineHeight: 1.85 }}>
							<div style={{ color: '#6b7280' }}># visual source of truth</div>
							{TOKENS.map((t, i) => (
								<motion.div key={t.k} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 + i * 0.05 }} style={{ whiteSpace: 'nowrap' }}>
									<span style={{ color: colors.yellow, display: 'inline-block', minWidth: 130 }}>{t.k}</span>
									<span style={{ color: t.val ? colors.rose : colors.white, fontWeight: 700 }}>{t.v}</span>
									{t.note && <span style={{ color: '#6b7280' }}>  // {t.note}</span>}
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* 右：why + dogfood */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						<motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 20px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#999', marginBottom: 8 }}>没有这份文件</div>
							<div style={{ fontFamily: fonts.body, fontSize: 19, fontWeight: 600, lineHeight: 1.5, color: colors.black }}>AI 出图 fan-out 到 5 个平台 → 每张配色 / 字体 / logo 都不同 → <b style={{ color: colors.rose }}>5 个品牌</b></div>
						</motion.div>
						<motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 }}
							style={{ background: colors.rose, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.dark}`, padding: '16px 20px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, opacity: 0.9, marginBottom: 8 }}>🪞 现身说法</div>
							<div style={{ fontFamily: fonts.body, fontSize: 19, fontWeight: 600, lineHeight: 1.5 }}>左边这份 DESIGN.md，<b style={{ color: colors.yellow }}>就是这套 PPT 自己的</b> —— 所以每一页一个调。喂给 AI，海报 / 配图全跟着对齐。</div>
						</motion.div>
					</div>
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} style={{ marginTop: 18, textAlign: 'center' }}>
					<div style={{ display: 'inline-block', padding: '13px 28px', background: colors.white, border, boxShadow: `6px 6px 0 ${colors.rose}`, fontFamily: fonts.heading, fontSize: 24, fontWeight: 900 }}>
						把这一个文件喂给 AI → 50 张海报<span style={{ color: colors.rose }}>一个调</span> ｜ 不喂 → 50 个品牌
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
