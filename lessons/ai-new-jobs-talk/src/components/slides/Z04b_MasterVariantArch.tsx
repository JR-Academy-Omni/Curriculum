import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// JR Academy 做法 —— 不是 4 个平台各跑一次，而是 1 份 Master + 自动 variant fan-out
// 改 1 处 = 全平台同步生效 · 单一真相 · feedback 回流到 master

interface Platform {
	id: string;
	icon: string;
	name: string;
	skill: string;
	textSpec: string;
	imageSpec: string;
	color: string;
}

const PLATFORMS: Platform[] = [
	{
		id: 'x',
		icon: '𝕏',
		name: 'X',
		skill: '/x-variant',
		textSpec: '280 字 · hook + thread 拆解',
		imageSpec: '16:9 横图 · 关键数字大字报',
		color: colors.dark,
	},
	{
		id: 'xhs',
		icon: '📕',
		name: '小红书',
		skill: '/xhs-variant',
		textSpec: '400-600 字 · emoji + 话题 + 痛点',
		imageSpec: '3:4 竖版 · 9 图集 · 标题大字',
		color: colors.red,
	},
	{
		id: 'linkedin',
		icon: '💼',
		name: 'LinkedIn',
		skill: '/linkedin-variant',
		textSpec: '专业语气 · 长文 · 行业 hashtag',
		imageSpec: '1200×627 banner · 干净排版',
		color: '#0a66c2',
	},
	{
		id: 'mp',
		icon: '📰',
		name: '公众号',
		skill: '/mp-variant',
		textSpec: '1500-2500 字 · 排版 + 引用 + CTA',
		imageSpec: '900×500 header + 内文配图组',
		color: '#07c160',
	},
];

export default function Z04b_MasterVariantArch() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 10 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ width: '100%' }}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
						<div style={{
							padding: '6px 14px', background: colors.red,
							color: colors.white, fontFamily: fonts.mono, fontSize: 12,
							fontWeight: 700, letterSpacing: 2,
						}}>STEP 3.5 · 匠人做法（升级版 pipeline）</div>
						<div style={{
							padding: '6px 14px', background: colors.black,
							color: colors.yellow, fontFamily: fonts.mono, fontSize: 12,
							fontWeight: 700, letterSpacing: 2,
						}}>BUILT WITH · Claude Skills × 6</div>
					</div>
					<Title size="36px">
						<span style={{ color: colors.red }}>1 份 Master</span> 自动 fan-out 到{' '}
						<span style={{ color: colors.techPurple }}>N 个平台</span> · 改 1 处 = 全平台同步生效
					</Title>
				</motion.div>

				{/* Body: Master 在左 + 4 个 platform variant 在右 */}
				<div style={{ display: 'flex', gap: 14, width: '100%', alignItems: 'stretch', flex: 1, minHeight: 0 }}>
					{/* Master node */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						style={{
							width: 250, flexShrink: 0,
							background: colors.dark, color: colors.white,
							border, boxShadow: shadow,
							padding: 16, display: 'flex', flexDirection: 'column',
						}}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 10, letterSpacing: 2,
							color: colors.yellow, fontWeight: 700, marginBottom: 6,
						}}>LAYER 01 · SOURCE</div>
						<div style={{ fontSize: 36, marginBottom: 4 }}>📄</div>
						<div style={{ fontSize: 22, fontWeight: 900, marginBottom: 6, lineHeight: 1.15 }}>
							MASTER
						</div>
						<div style={{ fontSize: 11, color: '#ccc', lineHeight: 1.55, marginBottom: 10 }}>
							1 篇主稿 + 1 套基础素材<br />
							· 完整论点 + 数据 + 案例<br />
							· 1 套基础高清图<br />
							· 品牌语调 / 合规规则
						</div>
						<div style={{
							background: 'rgba(255,255,255,0.08)', padding: '6px 8px',
							marginBottom: 8, borderLeft: `3px solid ${colors.yellow}`,
						}}>
							<div style={{
								fontFamily: fonts.mono, fontSize: 9, color: colors.yellow,
								letterSpacing: 1.2, fontWeight: 700, marginBottom: 2,
							}}>SKILL</div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 11, color: colors.white, fontWeight: 700,
							}}>/master-author</div>
						</div>
						<div style={{
							marginTop: 'auto', padding: '6px 8px', background: colors.red,
							fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, letterSpacing: 1,
						}}>单一真相 · SINGLE SOURCE OF TRUTH</div>
					</motion.div>

					{/* Arrows + Platform fan-out */}
					<div style={{
						flex: 1, display: 'flex', flexDirection: 'column',
						gap: 8, minWidth: 0, position: 'relative',
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 10, color: '#666',
							letterSpacing: 2, fontWeight: 700,
						}}>LAYER 02 · VARIANT TRANSFORMERS（per-platform Skills · 并行执行）</div>
						{PLATFORMS.map((p, i) => (
							<motion.div
								key={p.id}
								initial={{ opacity: 0, x: 40 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.45, delay: 0.4 + i * 0.12 }}
								style={{
									display: 'flex', alignItems: 'stretch', flex: 1, minHeight: 0,
									background: colors.white, border, boxShadow: shadow,
								}}
							>
								{/* Arrow left */}
								<div style={{
									flexShrink: 0, width: 28, background: p.color,
									color: colors.white, display: 'flex', alignItems: 'center',
									justifyContent: 'center', fontSize: 18, fontWeight: 900,
									borderRight: `3px solid ${colors.black}`,
								}}>→</div>
								{/* Platform identity */}
								<div style={{
									flexShrink: 0, width: 110,
									padding: '8px 10px', display: 'flex', flexDirection: 'column',
									justifyContent: 'center', borderRight: `2px solid ${colors.black}`,
									background: '#fafafa',
								}}>
									<div style={{ fontSize: 22, lineHeight: 1, marginBottom: 2 }}>{p.icon}</div>
									<div style={{ fontSize: 14, fontWeight: 900, color: colors.dark, lineHeight: 1.1 }}>
										{p.name}
									</div>
									<div style={{
										marginTop: 4, fontFamily: fonts.mono, fontSize: 9,
										fontWeight: 700, letterSpacing: 0.5, color: p.color,
										background: colors.white, border: `1.5px solid ${p.color}`,
										padding: '1px 4px', alignSelf: 'flex-start',
									}}>SKILL {p.skill}</div>
								</div>
								{/* Text variant */}
								<div style={{
									flex: 1, padding: '8px 12px', display: 'flex',
									flexDirection: 'column', justifyContent: 'center',
									borderRight: '1px dashed #ddd', minWidth: 0,
								}}>
									<div style={{
										fontFamily: fonts.mono, fontSize: 9, color: '#888',
										letterSpacing: 1, fontWeight: 700, marginBottom: 2,
									}}>TEXT VARIANT</div>
									<div style={{ fontSize: 12, color: colors.dark, lineHeight: 1.4, fontWeight: 600 }}>
										{p.textSpec}
									</div>
								</div>
								{/* Image variant */}
								<div style={{
									flex: 1, padding: '8px 12px', display: 'flex',
									flexDirection: 'column', justifyContent: 'center', minWidth: 0,
								}}>
									<div style={{
										fontFamily: fonts.mono, fontSize: 9, color: '#888',
										letterSpacing: 1, fontWeight: 700, marginBottom: 2,
									}}>IMAGE VARIANT · /imagery-adapter</div>
									<div style={{ fontSize: 12, color: colors.dark, lineHeight: 1.4, fontWeight: 600 }}>
										{p.imageSpec}
									</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* Publish column */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 1.0 }}
						style={{
							width: 110, flexShrink: 0,
							background: colors.green, color: colors.dark,
							border, boxShadow: shadow,
							padding: '12px 10px', display: 'flex', flexDirection: 'column',
							justifyContent: 'space-between',
						}}
					>
						<div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 10, letterSpacing: 1.5,
								color: colors.dark, fontWeight: 700, marginBottom: 6, opacity: 0.7,
							}}>LAYER 03</div>
							<div style={{ fontSize: 26, marginBottom: 4 }}>🚀</div>
							<div style={{ fontSize: 16, fontWeight: 900, marginBottom: 8, lineHeight: 1.1 }}>
								Parallel<br />Publish
							</div>
							<div style={{ fontSize: 10, color: colors.dark, lineHeight: 1.5, opacity: 0.8 }}>
								4 平台同时发布<br />
								schedule + 错峰<br />
								互动数据回流
							</div>
						</div>
						<div style={{
							marginTop: 8, padding: '4px 6px', background: colors.dark,
							color: colors.yellow, fontFamily: fonts.mono, fontSize: 9,
							fontWeight: 700, letterSpacing: 1,
						}}>SKILL /publisher</div>
					</motion.div>
				</div>

				{/* Footer: feedback loop + comparison vs Z04 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.3 }}
					style={{ display: 'flex', gap: 10, width: '100%' }}
				>
					<div style={{
						flex: 1, background: colors.black, color: colors.white,
						padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12,
					}}>
						<span style={{
							background: colors.yellow, color: colors.black, padding: '3px 8px',
							fontFamily: fonts.mono, fontSize: 10, fontWeight: 800, letterSpacing: 1.2,
						}}>FEEDBACK LOOP</span>
						<span style={{ fontSize: 12, lineHeight: 1.5 }}>
							4 平台互动数据 → 回流到 Master → AI 学习"哪类 hook / 哪类配图 在哪个平台转化好" → 下一篇 Master 由数据驱动
						</span>
					</div>
					<div style={{
						flex: 1, background: colors.yellow, color: colors.black,
						padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12,
					}}>
						<span style={{
							background: colors.black, color: colors.yellow, padding: '3px 8px',
							fontFamily: fonts.mono, fontSize: 10, fontWeight: 800, letterSpacing: 1.2,
						}}>VS STEP 3</span>
						<span style={{ fontSize: 12, lineHeight: 1.5, fontWeight: 600 }}>
							改 1 个数据点 / hook / 论据 = <b>5 个平台同步生效</b>，不用各平台分别改。这是<b>团队级</b>的 pipeline。
						</span>
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
