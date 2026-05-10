import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import VideoBg from './VideoBg';

const PARTS = [
	{
		k: 'Full-stack',
		color: colors.blue,
		items: [
			'Front-end (React / TS)',
			'Backend (Node / API)  · 更重要',
			'Orchestration · Docker / k8s',
		],
		delay: 0.5,
	},
	{
		k: 'Cloud',
		color: colors.orange,
		items: [
			'AWS / Azure Cloud Foundation',
			'CI/CD · GitHub Actions',
			'IaC · 理解概念为主',
			'AI Application Layer (Bedrock / Foundry)',
		],
		delay: 0.6,
	},
	{
		k: 'Prompt Eng',
		color: colors.purple,
		items: [
			'System Prompt · 角色 / 行为约束',
			'User Prompt · 任务模板',
			'Context · Memory 管理',
			'Prompt Registry · 版本管理',
		],
		delay: 0.7,
	},
	{
		k: 'AI Engineering',
		color: colors.red,
		items: [
			'LLM Integration · Streaming',
			'RAG System (Vector DB · Embedding)',
			'Multi-Agent Orchestration',
			'Pipeline & Workflow Design',
			'Evaluation · Model Ops',
		],
		delay: 0.8,
	},
	{
		k: 'Data Thinking',
		color: colors.green,
		items: [
			'Data Collection · 怎么收',
			'Data Structuring · 怎么组织',
			'Data Utilization · 喂给模型',
			'Data Feedback Loop · 闭环改进',
		],
		delay: 0.9,
	},
];

export default function L05_AiEngineerEquation() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			<VideoBg src="videos/veo-paper.mp4" overlay="rgba(255,241,231,0.82)" />
			<div style={{ position: 'relative', zIndex: 1, width: '96%', maxWidth: 1600, padding: '24px 36px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 14 }}
				>
					<div style={{
						display: 'inline-block', padding: '5px 12px',
						background: colors.dark, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 10,
					}}>
						THE EQUATION · 5 STACKS
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 56, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						AI Engineer = ?
					</h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					style={{
						background: colors.dark, color: colors.white,
						border, boxShadow: shadow,
						padding: '14px 22px',
						fontFamily: fonts.heading, fontSize: 22, fontWeight: 800,
						lineHeight: 1.4, letterSpacing: -0.4, marginBottom: 16, textAlign: 'center',
					}}
				>
					<span style={{ color: colors.blue }}>Full-stack</span> +
					{' '}<span style={{ color: colors.orange }}>Cloud</span> +
					{' '}<span style={{ color: colors.purple }}>Prompt Eng</span> +
					{' '}<span style={{ color: colors.red }}>AI Engineering</span> +
					{' '}<span style={{ color: colors.green }}>Data Thinking</span>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
					{PARTS.map((p) => (
						<motion.div
							key={p.k}
							initial={{ opacity: 0, y: 16, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ duration: 0.4, delay: p.delay }}
							style={{
								background: colors.white, border: `3px solid ${colors.black}`,
								boxShadow: `5px 5px 0 ${p.color}`,
								padding: '18px 16px', position: 'relative',
								borderTop: `10px solid ${p.color}`,
							}}
						>
							<div style={{
								fontFamily: fonts.heading, fontSize: 26, fontWeight: 900,
								color: colors.black, lineHeight: 1.05, letterSpacing: -0.5, marginBottom: 14,
							}}>
								{p.k}
							</div>
							<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
								{p.items.map((it) => (
									<li key={it} style={{
										fontFamily: fonts.body, fontSize: 18, color: '#222',
										fontWeight: 600, lineHeight: 1.45,
										display: 'flex', alignItems: 'flex-start', gap: 7,
									}}>
										<span style={{ color: p.color, fontWeight: 900, fontSize: 18, lineHeight: 1, marginTop: -1, flexShrink: 0 }}>→</span>
										<span>{it}</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.2 }}
					style={{
						marginTop: 16,
						display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14,
					}}
				>
					<div style={{
						background: colors.white, border, boxShadow: shadowSm,
						padding: '16px 22px',
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 17, fontWeight: 900,
							color: colors.red, letterSpacing: 2, marginBottom: 6,
						}}>
							× 不是 SDE
						</div>
						<div style={{ fontFamily: fonts.body, fontSize: 20, color: '#222', fontWeight: 600, lineHeight: 1.5 }}>
							SDE 只管"实现给定 spec"。AI Engineer 要管产品 / 数据 / 用户体验 / 模型行为全链路。
						</div>
					</div>
					<div style={{
						background: colors.indigo, color: colors.white,
						border, boxShadow: shadowSm, padding: '16px 22px',
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 17, fontWeight: 900,
							color: colors.yellow, letterSpacing: 2, marginBottom: 6,
						}}>
							✓ 是新工种
						</div>
						<div style={{ fontFamily: fonts.body, fontSize: 20, fontWeight: 600, lineHeight: 1.5 }}>
							介于 SDE / Data Scientist / PM 之间，2026 招聘市场缺口最大、薪资最高。
						</div>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
