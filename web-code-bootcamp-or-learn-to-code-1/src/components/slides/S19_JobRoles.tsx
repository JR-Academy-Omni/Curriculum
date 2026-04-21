import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface IRole {
	title: string;
	salary: string;
	needs: string[];
	bg: string;
	recommend?: boolean;
}

const roles: IRole[] = [
	{
		title: 'Junior Frontend Developer',
		salary: '75K – 95K',
		needs: ['React + TypeScript', '响应式 + A11y', 'Cursor 辅助开发'],
		bg: colors.m4,
	},
	{
		title: 'Junior Full-Stack Developer',
		salary: '85K – 110K',
		needs: ['Node + Mongo + React', 'AWS 部署', 'Git 团队协作'],
		bg: colors.m5,
	},
	{
		title: 'Full-Stack + AI Integration',
		salary: '120K – 160K',
		needs: ['Prompt 工程', 'RAG / Agent 落地', 'OpenAI / Claude API'],
		bg: colors.m7,
		recommend: true,
	},
	{
		title: 'AI App Developer',
		salary: '130K – 175K',
		needs: ['LangChain · Vector DB', 'MCP + Tool Use', 'Eval + Guardrails'],
		bg: colors.m8,
		recommend: true,
	},
	{
		title: 'AI-first Startup Founder',
		salary: 'Equity + …',
		needs: ['全栈交付', 'AI 产品 sense', 'Solo ship 能力'],
		bg: colors.red,
	},
	{
		title: '内部转岗 · 用 AI 升薪',
		salary: '+30% – 60%',
		needs: ['把 AI 带进现有团队', '做内部 AI 工具', '重写业务流程'],
		bg: colors.m6,
	},
];

export default function S19_JobRoles() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, padding: '28px 28px', display: 'flex', flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{ display: 'inline-block', padding: '5px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, letterSpacing: 2, border, boxShadow: shadowSm, marginBottom: 12 }}>
						JOB OUTCOMES · 6 条路径
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1.5, margin: 0 }}>
						毕业后,{' '}
						<span style={{ display: 'inline-block', padding: '0 12px', background: colors.yellow, border, boxShadow: `5px 5px 0 ${colors.black}`, transform: 'rotate(-1deg)' }}>
							6 条路径
						</span>{' '}可以走
					</h2>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
					style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}
				>
					{roles.map((r) => (
						<motion.div
							key={r.title}
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							transition={{ duration: 0.4 }}
							style={{
								background: colors.white,
								border: r.recommend ? `3px solid ${colors.red}` : border,
								boxShadow: r.recommend ? `6px 6px 0 ${colors.red}` : shadow,
								padding: '16px 16px',
								position: 'relative',
							}}
						>
							{r.recommend && (
								<div style={{
									position: 'absolute', top: -12, right: -10,
									padding: '3px 9px', background: colors.red, color: colors.white,
									fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, letterSpacing: 0.5,
									border: `2px solid ${colors.black}`, boxShadow: `2px 2px 0 ${colors.black}`,
									transform: 'rotate(6deg)',
								}}>
									匠人推荐
								</div>
							)}

							<div style={{ padding: '3px 8px', background: r.bg, color: r.bg === colors.yellow ? colors.black : colors.white, fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, border: `2px solid ${colors.black}`, display: 'inline-block', marginBottom: 10 }}>
								{r.salary} AUD
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 'clamp(15px,1.6vw,19px)', fontWeight: 900, color: colors.black, letterSpacing: -0.3, lineHeight: 1.2, marginBottom: 12 }}>
								{r.title}
							</div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
								{r.needs.map((n) => (
									<div key={n} style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: '#333', lineHeight: 1.4 }}>
										<span style={{ color: colors.red, marginRight: 4 }}>→</span>{n}
									</div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9 }}
					style={{ marginTop: 20, padding: '12px 18px', background: colors.dark, color: colors.white, border, boxShadow: shadowSm, textAlign: 'center' }}
				>
					<span style={{ fontFamily: fonts.heading, fontSize: 'clamp(13px,1.5vw,19px)', fontWeight: 900, letterSpacing: -0.3 }}>
						全栈 × AI 的组合 = <span style={{ color: colors.yellow }}>2026 最稀缺、最抗替代</span> 的技能包
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
