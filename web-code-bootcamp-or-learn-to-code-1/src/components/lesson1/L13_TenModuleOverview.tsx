import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import VideoFrame from './VideoFrame';

const MODULES = [
	{ n: 'M1', name: 'Launchpad', cn: '开营 · AI 工具配置', count: '10 节', color: colors.m1 },
	{ n: 'M2', name: 'Agile Mindset', cn: '敏捷协作基础', count: '10 节', color: colors.m2 },
	{ n: 'M3', name: 'Web Fundamentals', cn: '从零构建网站', count: '45 节', color: colors.m3 },
	{ n: 'M4', name: 'React Engineering', cn: '现代前端工程', count: '59 节', color: colors.m4 },
	{ n: 'M5', name: 'Backend Architecture', cn: 'Node.js 服务端', count: '35 节', color: colors.m5 },
	{ n: 'M6', name: 'Full-Stack Delivery', cn: '全栈整合 + 云部署', count: '25 节', color: colors.m6 },
	{ n: 'M7', name: 'AI Foundations', cn: 'Prompt + Context Eng', count: '26 节', color: colors.m7, isNew: true },
	{ n: 'M8', name: 'AI Application Dev', cn: 'RAG + Agent + MCP', count: '29 节', color: colors.m8, isNew: true },
	{ n: 'M9', name: 'Production AI', cn: '产品化 + 评估 + 安全', count: '13 节', color: colors.m9, isNew: true },
	{ n: 'M10', name: 'Career Accelerator', cn: '求职冲刺', count: '26 节', color: colors.m10 },
];

export default function L13_TenModuleOverview() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			<VideoFrame
				src="videos/hires-wide.mp4"
				width={340} height={190}
				position={{ top: 56, right: 64 }}
				rotate={-2}
				caption="V30 · 10 MODULE STRUCTURE"
			/>
			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1500, padding: '32px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.green, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 12,
					}}>
						04 · COURSE STRUCTURE
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 76, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						6 个月 · <span style={{ color: colors.indigo }}>10 个模块</span> · 278 节课
					</h2>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
					{MODULES.map((m, i) => (
						<motion.div
							key={m.n}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.2 + i * 0.05 }}
							style={{
								background: colors.white, border: `2.5px solid ${colors.black}`,
								boxShadow: `4px 4px 0 ${m.color}`,
								padding: '14px 14px', position: 'relative',
								borderTop: `8px solid ${m.color}`,
							}}
						>
							{m.isNew && (
								<div style={{
									position: 'absolute', top: -10, right: -8,
									padding: '2px 8px', background: colors.red, color: colors.white,
									fontFamily: fonts.mono, fontSize: 13, fontWeight: 900,
									border: `2px solid ${colors.black}`, transform: 'rotate(8deg)',
								}}>
									V30 NEW
								</div>
							)}
							<div style={{
								fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
								color: m.color, letterSpacing: 1, marginBottom: 6,
							}}>
								{m.n} · {m.count}
							</div>
							<div style={{
								fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
								color: colors.black, lineHeight: 1.15, letterSpacing: -0.4, marginBottom: 4,
							}}>
								{m.name}
							</div>
							<div style={{
								fontFamily: fonts.body, fontSize: 16, color: '#555',
								fontWeight: 600, lineHeight: 1.3,
							}}>
								{m.cn}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 22, padding: '14px 24px',
						background: colors.dark, color: colors.white,
						border, boxShadow: `6px 6px 0 ${colors.yellow}`,
						display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
					}}
				>
					<div style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, letterSpacing: -0.3 }}>
						前 6 个 module = 全栈基本功 · 后 4 个 = AI Engineering 进阶
					</div>
					<div style={{
						padding: '4px 12px', background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
						border: `2px solid ${colors.yellow}`,
					}}>
						V30 新增 M7-M9
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
