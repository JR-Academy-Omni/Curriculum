import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const channels = [
	{
		name: '小红书 @匠人学院',
		icon: '📕',
		bg: '#ff2442',
		tag: 'XIAOHONGSHU',
		tagline: '每天 AI Engineer 干货金句',
		why: '痛点 / 金句 / 行业热点',
	},
	{
		name: '公众号 JR Academy',
		icon: '📢',
		bg: '#07c160',
		tag: 'WECHAT OFFICIAL',
		tagline: '长文 + 每周 AI 趋势',
		why: '深度长文 / AI Engineer 成长故事',
	},
	{
		name: '加入学习社群',
		icon: '💬',
		bg: colors.dark,
		tag: 'COMMUNITY',
		tagline: '1000+ AI Engineer / 转型者同行',
		why: '免费 Claude Code / Cursor 实操 · 招聘内推',
	},
];

// 伪 QR 码
function FakeQR({ seed }: { seed: number }) {
	const SIZE = 11;
	const grid: boolean[][] = [];
	let s = seed;
	const rand = () => {
		s = (s * 9301 + 49297) % 233280;
		return s / 233280;
	};
	for (let y = 0; y < SIZE; y++) {
		const row: boolean[] = [];
		for (let x = 0; x < SIZE; x++) {
			const inFinder =
				(x < 3 && y < 3) ||
				(x >= SIZE - 3 && y < 3) ||
				(x < 3 && y >= SIZE - 3);
			row.push(inFinder ? true : rand() > 0.45);
		}
		grid.push(row);
	}
	return (
		<div style={{
			width: 'clamp(110px,11vw,150px)', aspectRatio: '1/1',
			background: colors.white, border: `3px solid ${colors.black}`, padding: 6,
			display: 'grid',
			gridTemplateColumns: `repeat(${SIZE}, 1fr)`,
			gridTemplateRows: `repeat(${SIZE}, 1fr)`,
		}}>
			{grid.flat().map((on, i) => (
				<div key={i} style={{ background: on ? colors.black : colors.white }} />
			))}
		</div>
	);
}

export default function S31_FollowUs() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '94%', maxWidth: 1400, height: '90%', padding: '24px 16px',
				display: 'flex', flexDirection: 'column', gap: 18,
			}}>
				{/* 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 'clamp(28px,3.8vw,48px)', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: 0,
					}}>
						没当场报也没关系，先<span style={{
							display: 'inline-block', padding: '0 12px', background: colors.yellow,
							border, boxShadow: shadowSm, transform: 'rotate(-1deg)',
						}}>关注 ↓</span>
					</h2>
				</motion.div>

				{/* 三个频道 */}
				<div style={{
					display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18,
					flex: 1, minHeight: 0,
				}}>
					{channels.map((c, i) => (
						<motion.div
							key={c.name}
							initial={{ opacity: 0, y: 24, scale: 0.96 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
							style={{
								background: colors.white, border, boxShadow: shadow,
								display: 'flex', flexDirection: 'column', overflow: 'hidden',
							}}
						>
							{/* 顶部色带 */}
							<div style={{
								padding: '10px 14px', background: c.bg, color: colors.white,
								borderBottom: `3px solid ${colors.black}`,
								display: 'flex', justifyContent: 'space-between', alignItems: 'center',
							}}>
								<span style={{ fontSize: 28 }}>{c.icon}</span>
								<span style={{
									fontFamily: fonts.mono, fontSize: 9, fontWeight: 800,
									letterSpacing: 1, opacity: 0.9,
								}}>
									{c.tag}
								</span>
							</div>

							{/* 中间：频道名 + 二维码 */}
							<div style={{
								flex: 1, padding: '14px 14px',
								display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
							}}>
								<div style={{
									fontFamily: fonts.heading, fontSize: 'clamp(14px,1.4vw,18px)',
									fontWeight: 900, color: colors.black, textAlign: 'center', lineHeight: 1.2,
								}}>
									{c.name}
								</div>

								{/* TODO(讲师回填): 替换为真实二维码 */}
								<FakeQR seed={100 + i * 77} />

								<div style={{
									fontFamily: fonts.mono, fontSize: 11, color: '#666',
									fontWeight: 700, textAlign: 'center',
								}}>
									{c.tagline}
								</div>
							</div>

							{/* 为什么要关注 */}
							<div style={{
								padding: '8px 12px', background: colors.yellow, color: colors.black,
								borderTop: `3px solid ${colors.black}`,
								fontFamily: fonts.mono, fontSize: 10, fontWeight: 800,
								textAlign: 'center', letterSpacing: 0.3, lineHeight: 1.4,
							}}>
								<span style={{ color: colors.red }}>★</span> {c.why}
							</div>
						</motion.div>
					))}
				</div>

				{/* 底部大结束语 */}
				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.9 }}
					style={{
						padding: '16px 22px', background: colors.dark, color: colors.white,
						border, boxShadow: `8px 8px 0 ${colors.red}`, textAlign: 'center',
					}}
				>
					<div style={{
						fontFamily: fonts.heading, fontSize: 'clamp(18px,2.2vw,32px)',
						fontWeight: 900, lineHeight: 1.15, letterSpacing: -0.5,
					}}>
						2026，<span style={{ color: colors.yellow }}>AI Engineer</span> 是最稳的技术饭碗
					</div>
					<div style={{
						fontFamily: fonts.heading, fontSize: 'clamp(14px,1.5vw,20px)',
						fontWeight: 700, lineHeight: 1.2, marginTop: 6, color: 'rgba(255,255,255,0.85)',
					}}>
						我们在 <span style={{ color: colors.red, fontWeight: 900 }}>JR</span> 等你
					</div>
					<div style={{
						marginTop: 10, fontFamily: fonts.mono, fontSize: 10,
						color: 'rgba(255,255,255,0.5)', letterSpacing: 1,
					}}>
						JR ACADEMY · 全球华人学习 AI 第一站
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
