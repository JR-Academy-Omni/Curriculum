import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const shifts = [
	{ n: '01', t: '从 prompt 到 workflow', d: '不是问一句答一句，而是把需求、约束、验收标准交给 AI 跑流程。', c: colors.blue },
	{ n: '02', t: '从写代码到交付结果', d: '前端、后端、测试、部署、文档都可以进入同一个开发闭环。', c: colors.yellow },
	{ n: '03', t: '从单次对话到长期协作', d: 'AI 要读得懂你的项目、记得你的规则、沿着同一份真相持续工作。', c: colors.purple },
];

export default function S01a_WhyVibeCoding() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 22, padding: '34px 42px' }}>
				<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
					<div>
						<Tag bg={colors.red}>先定一个坐标</Tag>
						<Title size="54px" style={{ marginTop: 12, marginBottom: 0, lineHeight: 1.08 }}>
							什么是 <span style={{ background: colors.yellow, padding: '0 12px' }}>Vibe Coding</span>？
						</Title>
					</div>
					<div style={{ width: 340, background: colors.white, border, boxShadow: shadowSm, padding: '14px 16px', fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, lineHeight: 1.45 }}>
						今天不是教你多背 prompt<br />
						是教你怎么指挥 AI 交付结果
					</div>
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 22, alignItems: 'stretch' }}>
					<motion.div
						initial={{ opacity: 0, x: -24 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							background: colors.dark,
							color: colors.white,
							border,
							boxShadow: shadow,
							padding: '28px 30px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							minHeight: 355,
						}}
					>
						<div>
							<div style={{ fontFamily: fonts.mono, color: colors.yellow, fontSize: 15, fontWeight: 900 }}>
								VIBE CODING =
							</div>
							<div style={{ marginTop: 14, fontSize: 34, fontWeight: 900, lineHeight: 1.2 }}>
								你负责方向、判断和验收；AI 负责把一整套执行流程跑完。
							</div>
						</div>
						<div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
							<div style={{ background: colors.white, color: colors.black, border, padding: '12px 14px' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: '#667085' }}>以前</div>
								<div style={{ fontSize: 20, fontWeight: 900, marginTop: 4 }}>人拆任务给人做</div>
							</div>
							<div style={{ background: colors.red, color: colors.white, border, padding: '12px 14px' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900 }}>现在</div>
								<div style={{ fontSize: 20, fontWeight: 900, marginTop: 4 }}>人给方向，Agent 跑闭环</div>
							</div>
						</div>
					</motion.div>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						{shifts.map((x, i) => {
							const darkText = x.c === colors.yellow;
							return (
								<motion.div
									key={x.n}
									initial={{ opacity: 0, y: 16 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
									style={{ background: colors.white, border, boxShadow: shadowSm, padding: '18px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}
								>
									<div style={{ flexShrink: 0, width: 54, height: 54, background: x.c, color: darkText ? colors.black : colors.white, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 18, fontWeight: 900 }}>
										{x.n}
									</div>
									<div>
										<div style={{ fontSize: 25, fontWeight: 900, color: colors.dark, lineHeight: 1.1 }}>{x.t}</div>
										<div style={{ marginTop: 7, fontSize: 16, fontWeight: 700, color: '#475467', lineHeight: 1.42 }}>{x.d}</div>
									</div>
								</motion.div>
							);
						})}

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.55 }}
							style={{ background: colors.yellow, border, boxShadow: shadowSm, padding: '14px 18px', fontSize: 18, fontWeight: 900, lineHeight: 1.42 }}
						>
							所以这门课不会只讲“怎么让 AI 写代码”，而是讲：
							<span style={{ background: colors.red, color: colors.white, padding: '0 8px', marginLeft: 6 }}>怎么让 AI 帮你交付任何可结构化的工作</span>
						</motion.div>
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
