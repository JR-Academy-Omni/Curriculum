import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { courseMeta, v4v5Diff } from '../../data/phases';

interface DiffRow {
	label: string;
	v4: string;
	v5: string;
	delta?: string;
	highlight?: boolean;
}

const rows: DiffRow[] = [
	{ label: '总课时', v4: `${courseMeta.v4Lessons} 节`, v5: `${courseMeta.totalLessons} 节`, delta: `+${v4v5Diff.lessonsDelta} 节 · +93%` },
	{ label: 'Phase 数', v4: `${courseMeta.v4Phases} Phase`, v5: `10 Phase`, delta: '完整分层' },
	{ label: '直播课', v4: `${courseMeta.v4Live} 节`, v5: `${courseMeta.liveClasses} 节`, delta: `+${courseMeta.liveClasses - courseMeta.v4Live}` },
	{ label: 'Interactive Lab', v4: `${courseMeta.v4Labs} 个`, v5: `${courseMeta.interactiveLabs} 个`, delta: `+${courseMeta.interactiveLabs - courseMeta.v4Labs}` },
	{ label: '大 Phase 升级', v4: 'RAG 15 节 / MCP 1 节', v5: 'RAG 45 节 / MCP 6 节 (含源码+2实战)', delta: '3×' },
];

export default function S23_V4V5Diff() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '94%', maxWidth: 1400, height: '90%', padding: '24px 16px',
				display: 'flex', flexDirection: 'column', gap: 14,
			}}>
				{/* 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: '48px', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: 0,
					}}>
						第四期跑完了，<span style={{
							display: 'inline-block', padding: '0 12px', background: colors.yellow,
							border, boxShadow: shadowSm, transform: 'rotate(-1deg)',
						}}>第五期</span>凭什么值得报？
					</h2>
					<p style={{
						fontFamily: fonts.mono, fontSize: '14px', color: '#555',
						fontWeight: 700, marginTop: 8, letterSpacing: 0.5,
					}}>
						左边是我们刚跑完的第四期 · 右边是 5 月开的第五期
					</p>
				</motion.div>

				{/* 对比表列头 */}
				<div style={{
					display: 'grid', gridTemplateColumns: '140px 1fr 40px 1.3fr 140px',
					gap: 10, alignItems: 'center',
					padding: '6px 14px', background: colors.dark, color: colors.white,
					border, boxShadow: shadowSm,
					fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, letterSpacing: 1,
				}}>
					<div>维度</div>
					<div style={{ opacity: 0.6 }}>V4 · 第四期</div>
					<div />
					<div style={{ color: colors.yellow }}>V5 · 第五期</div>
					<div style={{ textAlign: 'right' }}>Δ</div>
				</div>

				{/* 对比行 */}
				<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
					{rows.map((r, i) => (
						<motion.div
							key={r.label}
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.15 + i * 0.1 }}
							style={{
								display: 'grid', gridTemplateColumns: '140px 1fr 40px 1.3fr 140px',
								gap: 10, alignItems: 'center',
								padding: '12px 14px', background: colors.white,
								border, boxShadow: shadowSm,
							}}
						>
							{/* 维度 */}
							<div style={{
								fontFamily: fonts.heading, fontSize: '16px',
								fontWeight: 800, color: colors.black,
							}}>
								{r.label}
							</div>

							{/* V4 (暗淡) */}
							<div style={{
								fontFamily: fonts.mono, fontSize: '17px',
								fontWeight: 700, color: '#999',
								textDecoration: 'line-through', textDecorationColor: '#ccc',
							}}>
								{r.v4}
							</div>

							{/* 箭头 扫过动画 */}
							<motion.div
								initial={{ x: -10, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
								style={{
									fontFamily: fonts.mono, fontSize: 22, fontWeight: 900,
									color: colors.red, textAlign: 'center',
								}}
							>
								→
							</motion.div>

							{/* V5 (高亮) */}
							<motion.div
								initial={{ opacity: 0, x: 14 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4, delay: 0.45 + i * 0.1 }}
								style={{
									fontFamily: fonts.heading, fontSize: '22px',
									fontWeight: 900, color: colors.black,
								}}
							>
								{r.v5}
							</motion.div>

							{/* Delta */}
							<div style={{
								textAlign: 'right',
								fontFamily: fonts.mono, fontSize: '12px',
								fontWeight: 800, color: colors.white,
								background: colors.red, padding: '3px 8px',
								border: `2px solid ${colors.black}`,
								justifySelf: 'end',
							}}>
								{r.delta}
							</div>
						</motion.div>
					))}

					{/* V5 独家新增 Phase */}
					<motion.div
						initial={{ opacity: 0, y: 14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, delay: 0.85 }}
						style={{
							padding: '14px 16px', background: colors.red, color: colors.white,
							border, boxShadow: shadow,
							display: 'grid', gridTemplateColumns: '140px 1fr',
							gap: 14, alignItems: 'center',
						}}
					>
						<div style={{
							fontFamily: fonts.heading, fontSize: '16px',
							fontWeight: 900, color: colors.yellow,
						}}>
							V5 独家 ↓
						</div>
						<div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
							{v4v5Diff.newPhases.map((p) => (
								<div key={p.name} style={{
									padding: '8px 14px', background: colors.yellow, color: colors.black,
									border: `2px solid ${colors.black}`,
									fontFamily: fonts.heading, fontSize: '15px',
									fontWeight: 900,
								}}>
									+ {p.name}
								</div>
							))}
						</div>
					</motion.div>
				</div>

				{/* 结尾公式 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.1 }}
					style={{
						padding: '12px 18px', background: colors.dark, color: colors.white,
						border, boxShadow: shadowSm, textAlign: 'center',
					}}
				>
					<span style={{
						fontFamily: fonts.heading, fontSize: '22px',
						fontWeight: 900, letterSpacing: 0.3,
					}}>
						<span style={{ color: colors.yellow }}>第五期</span>
						{' = '}
						<span>第四期 × 2</span>
						{' + '}
						<span style={{ color: colors.red }}>Harness</span>
						{' + '}
						<span style={{ color: colors.red }}>Memory</span>
						{' + '}
						<span style={{ color: colors.red }}>MCP 全链路</span>
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
