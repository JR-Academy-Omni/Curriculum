import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const TUTORS = [
	{ name: 'Lightman Wang', role: 'CEO · Founder', tag: 'Career Coach', stack: 'UQ CS · 9 yr · 200+ offers', color: colors.dark },
	{ name: 'Long Zhao', role: 'Engineering Lead', tag: 'Qantas', stack: 'React · 8 yr · 86 offers', color: colors.indigo },
	{ name: 'Ray Ma', role: 'Cloud Solution Architect', tag: 'AWS MVP', stack: 'AWS / Azure · 14 yr · ex-Google', color: colors.orange },
	{ name: 'Mason Xiong', role: 'Full-stack Developer', tag: 'Atlassian / Amazon', stack: 'Node.js · ES6 · k8s', color: colors.blue },
	{ name: 'Larry Jiang', role: 'AI Technical Architect', tag: 'AI Eng', stack: 'AWS · LangChain · RAG · Embeddings', color: colors.red },
	{ name: 'Jason Li', role: 'Senior GenAI Engineer', tag: 'AI Eng', stack: '15+ yr · LangChainJS · RAG · Tool Calling', color: colors.purple },
	{ name: 'Tony Wang', role: 'Principal Engineer', tag: 'HSBC · 20 yr', stack: 'Azure AI · Scrum Master', color: colors.dark },
	{ name: 'Kitman Yiu', role: 'Full-stack Developer', tag: 'Compass Education', stack: '7+ yr · Service NSW', color: colors.green },
	{ name: 'Kevin Luo', role: 'Tech Lead', tag: 'AI Startup', stack: '5 yr · AWS x3 · Code Review', color: colors.indigo },
	{ name: 'Justin Hu', role: 'Tech Lead', tag: 'HSBC Retail Bank', stack: '8 yr · React · Team Lead', color: colors.blue },
	{ name: 'Chris Wang', role: 'Back End Developer', tag: 'NextGen', stack: 'Web3 · AI · 7 yr', color: colors.purple },
	{ name: 'Lily Jiang', role: 'Senior Full-stack', tag: 'Accenture / EY', stack: '10+ yr · .Net · Production', color: colors.green },
	{ name: 'Peng Dai', role: 'Senior Software Engineer', tag: 'Azure MCPD', stack: '.Net · Docker · 10 yr', color: colors.orange },
	{ name: 'Notail', role: 'Senior FullStack', tag: 'KPMG / Origin', stack: 'Storybook · D3.js · Formik', color: colors.red },
	{ name: 'Lasky He', role: 'Software Engineer', tag: 'Telstra / Energy', stack: 'UQ · AWS · Tutorial', color: colors.dark },
	{ name: 'Jubi Chen', role: 'Software Engineer', tag: 'Cover Genius', stack: 'UNSW IT · React · Next.js', color: colors.indigo },
	{ name: 'Alan Liu', role: 'Software Engineer', tag: 'Web Dev', stack: 'Vue · React · Spring Boot', color: colors.blue },
	{ name: 'Ally Tang', role: 'Senior Full-stack', tag: 'Azure / AWS Expert', stack: 'DevOps · 10+ yr · SAP', color: colors.purple },
];

export default function L08_TutorMatrix() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, padding: '28px 40px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 18 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.blue, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 12,
					}}>
						03 · TUTOR TEAM
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 64, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						带你的 18 位 tutor<br />
						<span style={{ fontSize: 30, color: '#555', fontWeight: 700 }}>
							全部一线在职 · 都不是"全职老师"
						</span>
					</h2>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10 }}>
					{TUTORS.map((t, i) => (
						<motion.div
							key={t.name}
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.2 + i * 0.03 }}
							style={{
								background: colors.white, border: `2.5px solid ${colors.black}`,
								boxShadow: `3px 3px 0 ${t.color}`,
								padding: '12px 12px', position: 'relative',
								borderTop: `5px solid ${t.color}`,
							}}
						>
							<div style={{
								fontFamily: fonts.heading, fontSize: 19, fontWeight: 900,
								color: colors.black, lineHeight: 1.15, letterSpacing: -0.3, marginBottom: 4,
							}}>
								{t.name}
							</div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 13, color: t.color,
								fontWeight: 800, letterSpacing: 0.5, marginBottom: 6,
							}}>
								{t.role}
							</div>
							<div style={{
								display: 'inline-block', padding: '2px 6px',
								background: t.color, color: colors.white,
								fontFamily: fonts.mono, fontSize: 12, fontWeight: 800,
								letterSpacing: 0.5, marginBottom: 6, border: `1.5px solid ${colors.black}`,
							}}>
								{t.tag}
							</div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 13, color: '#555',
								fontWeight: 700, lineHeight: 1.4,
							}}>
								{t.stack}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 22, padding: '18px 24px',
						background: colors.dark, color: colors.white,
						border, boxShadow: `6px 6px 0 ${colors.yellow}`,
					}}
				>
					<div style={{
						fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
						color: colors.yellow, letterSpacing: 2, marginBottom: 10,
					}}>
						为什么坚持只用一线在职老师
					</div>
					<div style={{
						fontFamily: fonts.heading, fontSize: 24, fontWeight: 900,
						lineHeight: 1.4, letterSpacing: -0.4,
					}}>
						一线老师每天在公司里直接接触
						{' '}<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>最新的技术变化</span>{' '}
						—— 不是教科书上的二手知识。
						<br />
						你学到的是 6 个月后还在用的栈、招聘方真正在问的题，不是 5 年前的 Java EE。
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
