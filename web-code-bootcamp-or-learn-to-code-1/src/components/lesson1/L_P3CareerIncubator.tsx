import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const BG = '#f5b324';
const BG_LIGHT = '#ffd576';
const BG_INK = '#0f1830';

// 大型 P3 工厂 SVG (作为中央视觉锚点)
function BigFactory() {
	return (
		<svg viewBox="0 0 480 360" style={{ width: '100%', height: 'auto', display: 'block' }}>
			{/* 烟雾团 */}
			<g opacity="0.85">
				<circle cx="180" cy="38" r="22" fill="#a8d8ff" />
				<circle cx="208" cy="22" r="18" fill="#a8d8ff" />
				<circle cx="230" cy="40" r="16" fill="#bfe4ff" />
				<circle cx="250" cy="26" r="14" fill="#a8d8ff" />
			</g>
			<g opacity="0.65">
				<circle cx="320" cy="48" r="18" fill="#a8d8ff" />
				<circle cx="340" cy="38" r="14" fill="#bfe4ff" />
			</g>

			{/* 烟囱 */}
			<rect x="178" y="62" width="22" height="60" fill={colors.indigo} stroke={colors.black} strokeWidth="3.5" />
			<rect x="174" y="58" width="30" height="8" fill={BG_INK} stroke={colors.black} strokeWidth="3" />
			<rect x="240" y="78" width="18" height="46" fill={colors.purple} stroke={colors.black} strokeWidth="3.5" />
			<rect x="316" y="70" width="20" height="58" fill={colors.indigo} stroke={colors.black} strokeWidth="3.5" />
			<rect x="312" y="66" width="28" height="8" fill={BG_INK} stroke={colors.black} strokeWidth="3" />

			{/* 主厂房 */}
			<rect x="40" y="128" width="400" height="200" fill={colors.indigo} stroke={colors.black} strokeWidth="4" />
			{/* 顶部 P3 牌匾 */}
			<rect x="200" y="142" width="80" height="34" fill={BG_INK} stroke={colors.black} strokeWidth="3" />
			<text x="240" y="167" textAnchor="middle"
				fontFamily="DM Sans, sans-serif" fontSize="26" fontWeight="900" fill={colors.yellow}>
				P3
			</text>

			{/* 窗户阵列 */}
			{[60, 100, 140, 300, 340, 380].map((x) => (
				<rect key={x} x={x} y="190" width="32" height="28" fill={colors.yellow} stroke={colors.black} strokeWidth="2.5" />
			))}
			{[60, 100, 140, 300, 340, 380].map((x, i) => (
				<rect key={x} x={x} y="232" width="32" height="28"
					fill={i % 2 === 0 ? colors.yellow : colors.warmBg} stroke={colors.black} strokeWidth="2.5" />
			))}
			{[60, 100, 140, 300, 340, 380].map((x, i) => (
				<rect key={x} x={x} y="274" width="32" height="28"
					fill={i % 2 === 0 ? colors.warmBg : colors.yellow} stroke={colors.black} strokeWidth="2.5" />
			))}

			{/* 大门 */}
			<rect x="208" y="262" width="64" height="66" fill={BG_INK} stroke={colors.black} strokeWidth="3" />
			<circle cx="260" cy="296" r="3" fill={colors.yellow} />
		</svg>
	);
}

// BEFORE 卡片：学生形象 (笔记本 + 小齿轮 · 简洁版)
function BeforeIcon() {
	return (
		<svg viewBox="0 0 160 130" style={{ width: 130, height: 'auto' }}>
			{/* 笔记本底座 */}
			<rect x="20" y="80" width="120" height="38" fill={colors.indigo} stroke={colors.black} strokeWidth="3" rx="4" />
			{/* 屏幕 */}
			<rect x="32" y="20" width="96" height="62" fill={BG_INK} stroke={colors.black} strokeWidth="3" />
			<rect x="40" y="28" width="80" height="46" fill="#1a2240" />
			<line x1="46" y1="38" x2="100" y2="38" stroke={colors.green} strokeWidth="2.5" />
			<line x1="46" y1="46" x2="80" y2="46" stroke={colors.red} strokeWidth="2.5" />
			<line x1="46" y1="54" x2="110" y2="54" stroke={colors.blue} strokeWidth="2.5" />
			<line x1="46" y1="62" x2="90" y2="62" stroke={colors.yellow} strokeWidth="2.5" />
			{/* 单个齿轮装饰 */}
			<g transform="translate(125, 35)">
				<circle r="14" fill={colors.orange} stroke={colors.black} strokeWidth="2.5" />
				<circle r="5" fill={BG_INK} stroke={colors.black} strokeWidth="1.5" />
				{[...Array(8)].map((_, i) => (
					<rect key={i} x="-3" y="-18" width="6" height="6"
						fill={colors.orange} stroke={colors.black} strokeWidth="1.5"
						transform={`rotate(${i * 45})`} />
				))}
			</g>
		</svg>
	);
}

// AFTER 卡片：员工列队 + 城市
function AfterIcon() {
	return (
		<svg viewBox="0 0 220 130" style={{ width: 180, height: 'auto' }}>
			{/* 城市天际线 */}
			<g opacity="0.85">
				<rect x="14" y="38" width="34" height="62" fill={colors.indigo} stroke={colors.black} strokeWidth="2.5" />
				<rect x="54" y="22" width="40" height="78" fill={colors.purple} stroke={colors.black} strokeWidth="2.5" />
				<rect x="100" y="32" width="32" height="68" fill={colors.indigo} stroke={colors.black} strokeWidth="2.5" />
				<rect x="138" y="44" width="36" height="56" fill={colors.purple} stroke={colors.black} strokeWidth="2.5" />
				<rect x="180" y="28" width="28" height="72" fill={colors.indigo} stroke={colors.black} strokeWidth="2.5" />
				{/* 窗户灯 */}
				{[18, 30, 40, 60, 72, 84, 104, 116, 142, 154, 166, 184, 196].map((x, i) => (
					<rect key={i} x={x} y={50 + (i % 3) * 14} width="6" height="6" fill={colors.yellow} />
				))}
			</g>
			{/* 传送带 */}
			<rect x="0" y="105" width="220" height="14" fill={BG_INK} stroke={colors.black} strokeWidth="3" />
			{/* 工程师人形 (3 个) */}
			{[35, 110, 185].map((x, i) => (
				<g key={i} transform={`translate(${x}, 88)`}>
					<circle cx="0" cy="0" r="6" fill={colors.warmBg} stroke={colors.black} strokeWidth="2" />
					<rect x="-6" y="5" width="12" height="13"
						fill={i === 0 ? colors.indigo : i === 1 ? colors.red : colors.green}
						stroke={colors.black} strokeWidth="2" />
				</g>
			))}
		</svg>
	);
}

export default function L_P3CareerIncubator() {
	return (
		<Slide bg={BG} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* 顶部深色 header bar */}
			<div style={{
				position: 'absolute', top: 0, left: 0, right: 0,
				background: BG_INK, padding: '20px 0',
				zIndex: 1, borderBottom: `5px solid ${colors.black}`,
			}}>
				<div style={{
					display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20,
				}}>
					<div style={{
						background: colors.white, color: BG_INK,
						padding: '8px 18px', border: `4px solid ${colors.white}`,
						fontFamily: fonts.heading, fontSize: 36, fontWeight: 900,
						letterSpacing: -0.5, lineHeight: 1, boxShadow: `4px 4px 0 ${colors.black}`,
					}}>
						P3
					</div>
					<div style={{
						fontFamily: fonts.heading, fontSize: 56, fontWeight: 900,
						color: colors.white, letterSpacing: -1.5, lineHeight: 1,
					}}>
						职业孵化器
					</div>
					<div style={{
						padding: '4px 12px', background: colors.yellow, color: BG_INK,
						fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 2,
						border: `2.5px solid ${colors.white}`, transform: 'rotate(-2deg)',
					}}>
						CAREER INCUBATOR
					</div>
				</div>
			</div>

			{/* 装饰背景齿轮 (淡) */}
			<svg style={{ position: 'absolute', inset: 0, opacity: 0.06, zIndex: 0 }} viewBox="0 0 1920 1080">
				<g fill={BG_INK}>
					<circle cx="120" cy="600" r="90" stroke={BG_INK} strokeWidth="10" fillOpacity="0" />
					<circle cx="120" cy="600" r="35" />
					<circle cx="1800" cy="700" r="75" stroke={BG_INK} strokeWidth="10" fillOpacity="0" />
					<circle cx="1800" cy="700" r="28" />
					<circle cx="1700" cy="200" r="50" stroke={BG_INK} strokeWidth="8" fillOpacity="0" />
				</g>
			</svg>

			{/* 主体三栏 */}
			<div style={{
				position: 'relative', zIndex: 1, marginTop: 130,
				width: '94%', maxWidth: 1700, padding: '20px 32px',
				display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr',
				gap: 24, alignItems: 'center',
			}}>
				{/* 左：BEFORE */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.55, delay: 0.2 }}
					style={{
						background: colors.white, border: `4px solid ${colors.black}`,
						boxShadow: `8px 8px 0 ${BG_INK}`,
						padding: '22px 22px 18px',
						display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center',
					}}
				>
					<div style={{
						padding: '5px 14px', background: BG_LIGHT, color: BG_INK,
						fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 3,
						border: `2.5px solid ${colors.black}`,
					}}>
						BEFORE
					</div>
					<div style={{
						fontFamily: fonts.heading, fontSize: 34, fontWeight: 900,
						color: BG_INK, letterSpacing: -1, lineHeight: 1, textAlign: 'center',
					}}>
						你 <span style={{ color: '#888' }}>现在的</span>
						<br />Position
					</div>
					<BeforeIcon />
					<div style={{
						display: 'flex', flexDirection: 'column', gap: 8, width: '100%', marginTop: 6,
					}}>
						{['🎓 Student · 在校', '👶 Junior · 工作 < 1 年'].map((t) => (
							<div key={t} style={{
								background: BG_LIGHT, color: BG_INK,
								padding: '9px 14px', border: `2.5px solid ${colors.black}`,
								fontFamily: fonts.heading, fontSize: 19, fontWeight: 900,
								letterSpacing: -0.3, textAlign: 'left',
							}}>
								{t}
							</div>
						))}
					</div>
				</motion.div>

				{/* 中：P3 工厂 */}
				<motion.div
					initial={{ opacity: 0, y: 30, scale: 0.92 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					style={{
						display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
					}}
				>
					<div style={{
						padding: '5px 14px', background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 3,
						border: `2.5px solid ${colors.black}`, boxShadow: `3px 3px 0 ${colors.black}`,
						transform: 'rotate(-2deg)',
					}}>
						⚡ TRANSFORMATION ENGINE
					</div>
					<div style={{ width: '100%', maxWidth: 480, marginTop: -4 }}>
						<BigFactory />
					</div>
					<div style={{
						marginTop: -22, position: 'relative', zIndex: 2,
						background: BG_INK, color: colors.white,
						padding: '20px 36px', border: `5px solid ${colors.black}`,
						boxShadow: `9px 9px 0 ${colors.black}`,
						textAlign: 'center', minWidth: 320,
					}}>
						<div style={{
							fontFamily: fonts.heading, fontSize: 60, fontWeight: 900,
							color: colors.yellow, letterSpacing: -3, lineHeight: 0.95,
						}}>
							P3
						</div>
						<div style={{
							marginTop: 6,
							fontFamily: fonts.heading, fontSize: 26, fontWeight: 900,
							color: colors.white, letterSpacing: -0.6, lineHeight: 1.1,
						}}>
							Career Incubator
						</div>
						<div style={{
							marginTop: 8,
							fontFamily: fonts.mono, fontSize: 13, color: colors.yellow,
							fontWeight: 800, letterSpacing: 2,
						}}>
							REAL BIZ · TEAM · SHIPPED
						</div>
					</div>
				</motion.div>

				{/* 右：AFTER */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.55, delay: 0.3 }}
					style={{
						background: BG_INK, color: colors.white,
						border: `4px solid ${colors.black}`,
						boxShadow: `8px 8px 0 ${colors.red}`,
						padding: '22px 22px 18px',
						display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center',
					}}
				>
					<div style={{
						padding: '5px 14px', background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 3,
						border: `2.5px solid ${colors.white}`,
					}}>
						AFTER → OFFER
					</div>
					<div style={{
						fontFamily: fonts.heading, fontSize: 34, fontWeight: 900,
						color: colors.white, letterSpacing: -1, lineHeight: 1, textAlign: 'center',
					}}>
						你 <span style={{ color: colors.yellow }}>能去的</span>
						<br />Target Job
					</div>
					<AfterIcon />
					<div style={{
						display: 'flex', flexDirection: 'column', gap: 8, width: '100%', marginTop: 6,
					}}>
						{[
							{ k: '⚡ Junior', sub: '$60-75k' },
							{ k: '🚀 Mid / Senior', sub: '$100-180k' },
							{ k: '👑 Manager / Lead', sub: '$180k+' },
						].map((t) => (
							<div key={t.k} style={{
								background: 'rgba(255,255,255,0.08)', color: colors.white,
								padding: '9px 14px', border: `2.5px solid ${colors.yellow}`,
								display: 'flex', justifyContent: 'space-between', alignItems: 'center',
							}}>
								<span style={{
									fontFamily: fonts.heading, fontSize: 19, fontWeight: 900,
									color: colors.white, letterSpacing: -0.3,
								}}>
									{t.k}
								</span>
								<span style={{
									fontFamily: fonts.mono, fontSize: 14, fontWeight: 900,
									color: colors.yellow, letterSpacing: 0.5,
								}}>
									{t.sub}
								</span>
							</div>
						))}
					</div>
				</motion.div>
			</div>

			{/* 流程箭头 (Current → Incubator → Target) */}
			<svg style={{
				position: 'absolute', top: '54%', left: 0, right: 0, height: 80,
				zIndex: 0, pointerEvents: 'none',
			}} viewBox="0 0 1920 80" preserveAspectRatio="none">
				<defs>
					<marker id="arrh" viewBox="0 0 14 14" refX="12" refY="7" markerWidth="14" markerHeight="14" orient="auto">
						<polygon points="0,0 14,7 0,14" fill={BG_INK} />
					</marker>
				</defs>
				<line x1="450" y1="40" x2="710" y2="40"
					stroke={BG_INK} strokeWidth="7" strokeDasharray="20 12" markerEnd="url(#arrh)" />
				<line x1="1210" y1="40" x2="1470" y2="40"
					stroke={BG_INK} strokeWidth="7" strokeDasharray="20 12" markerEnd="url(#arrh)" />
			</svg>

			{/* 底部 stats + punchline */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.9 }}
				style={{
					position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)',
					width: '92%', maxWidth: 1600, zIndex: 3,
					display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 2fr', gap: 12,
				}}
			>
				{[
					{ k: '600+', l: '通过 P3 拿 offer', accent: colors.red },
					{ k: '4-6', l: '月内入职 (中位数)', accent: colors.indigo },
					{ k: '80+', l: '合作公司持续招', accent: colors.green },
				].map((s) => (
					<div key={s.l} style={{
						background: colors.white, border: `3px solid ${colors.black}`,
						boxShadow: `4px 4px 0 ${s.accent}`, padding: '12px 16px', textAlign: 'center',
					}}>
						<div style={{
							fontFamily: fonts.heading, fontSize: 34, fontWeight: 900,
							color: s.accent, letterSpacing: -1, lineHeight: 1,
						}}>
							{s.k}
						</div>
						<div style={{
							marginTop: 4, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800,
							color: BG_INK, letterSpacing: 1,
						}}>
							{s.l}
						</div>
					</div>
				))}
				<div style={{
					background: BG_INK, color: colors.white,
					border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.yellow}`,
					padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
					fontFamily: fonts.heading, fontSize: 19, fontWeight: 900,
					letterSpacing: -0.3, lineHeight: 1.3, textAlign: 'center',
				}}>
					P3 = 真业务 / 真团队 / 真上线 · <span style={{ background: colors.yellow, color: BG_INK, padding: '0 6px', border: `2px solid ${colors.black}`, marginLeft: 4 }}>不是 portfolio</span>
				</div>
			</motion.div>
		</Slide>
	);
}
