import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import VideoFrame from './VideoFrame';

const PROJECTS = [
	{
		p: 'Project 1', dur: 'Stage 1 · 2-4 周', name: 'CareerMate Landing Page',
		stack: ['HTML5', 'CSS3 · Sass', 'JavaScript', 'Bootstrap', 'GitHub Pages'],
		out: '一个能放简历 / 给招聘方看的 personal landing page · 部署到 Netlify / GitHub Pages',
		color: colors.blue,
	},
	{
		p: 'Project 2', dur: 'Stage 2 · 4-6 周', name: 'CareerMate Web App + Auth',
		stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Render / Vercel'],
		out: '完整 CRUD 业务系统 · 用户登录 / 注册 / Dashboard · 全栈打通',
		color: colors.green,
	},
	{
		p: 'Project 3', dur: 'Stage 3+4 · 6-8 周', name: 'CareerMate AI · Streaming Chat + RAG',
		stack: ['OpenAI', 'LangChain', 'Vector DB', 'Streaming', 'AWS', 'CI/CD'],
		out: 'AI 简历优化 + 面试模拟 + 岗位推荐 · production-grade · 已经在 jiangren.com.au 跑生产',
		color: colors.red,
	},
];

export default function L17_CareerMateBreakdown() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			<VideoFrame
				src="videos/square-1.mp4"
				width={220} height={220}
				position={{ top: 56, right: 64 }}
				rotate={2}
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
						background: colors.orange, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 12,
					}}>
						CAPSTONE BREAKDOWN
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 64, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						同一个 CareerMate AI · <span style={{ color: colors.orange }}>3 个版本演进</span>
					</h2>
					<div style={{
						marginTop: 10, fontFamily: fonts.body, fontSize: 18, color: '#444',
						fontWeight: 600, lineHeight: 1.4,
					}}>
						不是 3 个 demo · 是同一产品从 landing page → web app → AI app 的真实演进
					</div>
				</motion.div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
					{PROJECTS.map((p, i) => (
						<motion.div
							key={p.p}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
							style={{
								background: colors.white, border, boxShadow: shadowSm,
								padding: '18px 22px', borderLeft: `10px solid ${p.color}`,
							}}
						>
							<div style={{
								display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10, flexWrap: 'wrap',
							}}>
								<div style={{
									padding: '4px 12px', background: p.color, color: colors.white,
									fontFamily: fonts.mono, fontSize: 17, fontWeight: 900,
									border: `2px solid ${colors.black}`,
								}}>
									{p.p}
								</div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 24, fontWeight: 900,
									color: colors.black, letterSpacing: -0.4, lineHeight: 1.1,
								}}>
									{p.name}
								</div>
								<div style={{
									fontFamily: fonts.mono, fontSize: 16, color: '#666',
									fontWeight: 800, letterSpacing: 1, marginLeft: 'auto',
								}}>
									{p.dur}
								</div>
							</div>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 8 }}>
								{p.stack.map((s) => (
									<span key={s} style={{
										padding: '2px 8px', background: '#f3f3f3', color: '#333',
										fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
										border: `1.5px solid ${colors.black}`,
									}}>
										{s}
									</span>
								))}
							</div>
							<div style={{
								fontFamily: fonts.body, fontSize: 18, color: '#444',
								fontWeight: 600, lineHeight: 1.4,
							}}>
								<span style={{ color: p.color, fontWeight: 900 }}>结果：</span>{p.out}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</Slide>
	);
}
