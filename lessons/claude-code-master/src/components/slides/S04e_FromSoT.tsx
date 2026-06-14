import { Slide, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

interface Out { icon: string; title: string; sub: string; color: string; you?: boolean; }

const outs: Out[] = [
	{ icon: '📊', title: '这套 Slide Deck', sub: '你正在看的', color: colors.red, you: true },
	{ icon: '📄', title: '静态课程页', sub: '官网 / 落地页', color: colors.blue },
	{ icon: '📝', title: '公众号 / 小红书', sub: '长文 + 笔记', color: colors.orange },
	{ icon: '🎬', title: '短视频口播', sub: '脚本 + 分镜', color: colors.purple },
	{ icon: '📕', title: '配套手册', sub: 'PDF / 电子书', color: colors.green },
	{ icon: '🎨', title: '海报 / 配图', sub: '宣传物料', color: colors.teal },
];

const XS = [100, 300, 500, 700, 900, 1100];

// 从 SoT/PRD 出发能做什么 —— 一份真相长出多种产物（meta：今天这套 deck 就是其一）
export default function S04e_FromSoT() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, height: '88%', padding: '20px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ textAlign: 'center', marginBottom: 10 }}>
					<div style={{ display: 'inline-block', padding: '6px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 2, marginBottom: 8 }}>SoT 出发能做什么</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '38px', fontWeight: 900, letterSpacing: -1 }}>先写<span style={{ color: colors.red }}>一份 PRD</span>，再长出<span style={{ background: colors.yellow, padding: '0 8px' }}>很多种产物</span></h2>
				</motion.div>

				{/* 树根 · PRD / SoT */}
				<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.2 }} style={{ display: 'flex', justifyContent: 'center' }}>
					<div style={{ background: colors.dark, color: colors.white, border, boxShadow: `7px 7px 0 ${colors.red}`, padding: '13px 34px', textAlign: 'center' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, letterSpacing: 2, color: colors.yellow }}>🌳 树根 · SOURCE OF TRUTH</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 27, fontWeight: 900 }}>1 份 PRD</div>
						<div style={{ fontSize: 14.5, opacity: 0.85 }}>目标 · 受众 · 结构 · 真实内容 · 口径</div>
					</div>
				</motion.div>

				{/* 连接线 */}
				<svg viewBox="0 0 1200 70" width="100%" height="54" preserveAspectRatio="none" style={{ display: 'block', marginTop: -2 }}>
					{XS.map((x, i) => (
						<motion.path key={x} d={`M 600 0 C 600 38, ${x} 30, ${x} 70`} fill="none" stroke={outs[i].color} strokeWidth={3}
							initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.45 + i * 0.07 }} />
					))}
				</svg>

				{/* 产物卡 */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
					{outs.map((o, i) => (
						<motion.div key={o.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
							style={{ background: colors.white, border, boxShadow: o.you ? `6px 6px 0 ${colors.red}` : shadow, display: 'flex', flexDirection: 'column', position: 'relative' }}>
							{o.you && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, padding: '2px 8px', whiteSpace: 'nowrap' }}>★ 你正在看的</div>}
							<div style={{ background: o.color, color: colors.white, padding: '10px', textAlign: 'center', borderBottom: `3px solid ${colors.black}` }}>
								<div style={{ fontSize: 26, lineHeight: 1 }}>{o.icon}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 900, marginTop: 4 }}>{o.title}</div>
							</div>
							<div style={{ padding: '9px 8px', textAlign: 'center', fontSize: 13.5, color: '#666', fontWeight: 700 }}>{o.sub}</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.2 }} style={{ marginTop: 14, textAlign: 'center' }}>
					<div style={{ display: 'inline-block', padding: '11px 26px', background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.red}`, fontFamily: fonts.heading, fontSize: 22, fontWeight: 900 }}>
						今天这套 deck = 先写 PRD，再渲染的<span style={{ color: colors.yellow }}>一种展示形式</span> —— 你只维护那份真相
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
