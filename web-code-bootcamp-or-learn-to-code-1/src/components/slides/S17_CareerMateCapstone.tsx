import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface IStage {
	phase: string;
	title: string;
	work: string;
	stack: string[];
	color: string;
}

const stages: IStage[] = [
	{
		phase: 'M3-M4',
		title: '前端',
		work: 'React + TypeScript 简历编辑器 + JD 匹配界面',
		stack: ['React 19', 'TypeScript', 'Tailwind', 'React Router'],
		color: colors.m4,
	},
	{
		phase: 'M5-M6',
		title: '后端 + 全栈',
		work: 'Node.js API · MongoDB · JWT · AWS 部署',
		stack: ['Express', 'MongoDB', 'JWT', 'AWS EC2'],
		color: colors.m5,
	},
	{
		phase: 'M7-M8',
		title: 'AI 工程',
		work: 'Prompt 简历重写 + RAG JD 匹配 + Agent 投递',
		stack: ['OpenAI API', 'LangChain', 'Vector DB', 'Agent'],
		color: colors.m7,
	},
	{
		phase: 'M9',
		title: '生产部署',
		work: 'Prompt 注入防御 + 评估 + 安全上线',
		stack: ['RAGAS', 'Guardrails', 'CI/CD', 'LangSmith'],
		color: colors.m9,
	},
];

export default function S17_CareerMateCapstone() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `repeating-linear-gradient(-45deg, rgba(0,0,0,0.03) 0 1px, transparent 1px 16px)`,
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1400, padding: '30px 32px' }}>
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{ display: 'inline-block', padding: '5px 12px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, letterSpacing: 0.5, border, boxShadow: shadowSm, transform: 'rotate(-2deg)', marginBottom: 12 }}>
						CAPSTONE · CAREERMATE
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, color: colors.black, margin: 0 }}>
						毕业项目:{' '}
						<span style={{ background: colors.yellow, padding: '0 10px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block' }}>
							CareerMate
						</span>{' '}— AI 驱动的求职助手
					</h2>
					<p style={{ fontFamily: fonts.body, fontSize: 'clamp(13px,1.4vw,17px)', color: '#333', fontWeight: 600, marginTop: 10, lineHeight: 1.4 }}>
						从简历解析 → JD 匹配 → AI 改简历 → Agent 自动投递 —— 把 M3-M9 学的东西全部串起来，不是 Todo App
					</p>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr) auto', gap: 10, alignItems: 'stretch' }}>
					{stages.map((s, i) => (
						<motion.div
							key={s.phase}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.15 + i * 0.1 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '14px 14px', display: 'flex', flexDirection: 'column' }}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
								<span style={{ padding: '3px 8px', background: s.color, color: colors.white, fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, border: `2px solid ${colors.black}` }}>
									{s.phase}
								</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 'clamp(14px,1.5vw,18px)', fontWeight: 900, color: colors.black, letterSpacing: -0.3 }}>
									{s.title}
								</span>
							</div>
							<div style={{ fontFamily: fonts.body, fontSize: 12, color: '#333', fontWeight: 600, lineHeight: 1.4, marginBottom: 10, flex: 1 }}>
								{s.work}
							</div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
								{s.stack.map((t) => (
									<div key={t} style={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: '#555' }}>
										→ {t}
									</div>
								))}
							</div>
						</motion.div>
					))}

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.6 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.red}`, padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 180 }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, color: colors.yellow, letterSpacing: 1, marginBottom: 6 }}>
							结果
						</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 'clamp(14px,1.6vw,19px)', fontWeight: 900, lineHeight: 1.2, letterSpacing: -0.3 }}>
							写进 Resume<br />的 Production<br />级 AI 全栈项目
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					style={{
						marginTop: 22, padding: '14px 20px',
						background: colors.black, border,
						boxShadow: `5px 5px 0 ${colors.yellow}`,
						display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', justifyContent: 'space-between',
					}}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
						<span style={{ fontSize: 22 }}>🎯</span>
						<span style={{ fontFamily: fonts.heading, fontSize: 'clamp(13px,1.5vw,19px)', color: colors.white, fontWeight: 900, letterSpacing: -0.3 }}>
							不做 Todo App。做一个 <span style={{ color: colors.yellow }}>能上线、能赚钱、能写进简历</span> 的 AI 全栈产品
						</span>
					</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 'clamp(11px,1.2vw,14px)', color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}>
						面试时就答这个项目
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
