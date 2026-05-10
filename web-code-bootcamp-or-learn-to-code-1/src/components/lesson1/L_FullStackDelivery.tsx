import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface Tech { label: string; color?: string; }

const CODING_AGENT: Tech[] = [
	{ label: 'ChatGPT', color: '#10a37f' },
	{ label: 'Claude Code', color: '#d97757' },
];

const AI_STACK: Tech[] = [
	{ label: 'LangChain', color: '#1c3c3c' },
	{ label: 'OpenAI', color: '#10a37f' },
	{ label: 'Qdrant', color: '#dc382d' },
	{ label: 'LlamaIndex', color: '#7c4dff' },
];

const FE_BE_STACK: Tech[] = [
	{ label: 'Next.js', color: '#000000' },
	{ label: 'React', color: '#61dafb' },
	{ label: 'Node.js', color: '#5fa04e' },
	{ label: 'JS · ES6', color: '#f0db4f' },
	{ label: 'styled-components', color: '#db7093' },
	{ label: 'Tailwind CSS', color: '#06b6d4' },
	{ label: 'React Router', color: '#ca4245' },
	{ label: 'Express', color: '#444444' },
	{ label: 'Axios', color: '#5a29e4' },
	{ label: 'JWT', color: '#000000' },
	{ label: 'tiptap', color: '#0d0d0d' },
	{ label: 'WebSocket', color: '#3a86ff' },
	{ label: 'Storybook', color: '#ff4785' },
	{ label: 'Docker', color: '#0db7ed' },
];

const AWS_STACK: Tech[] = [
	{ label: 'AWS Lambda', color: '#ff9900' },
	{ label: 'amazon S3', color: '#ff9900' },
	{ label: 'Route 53', color: '#8c4fff' },
	{ label: 'AWS IAM', color: '#dd344c' },
	{ label: 'Amazon Bedrock', color: '#01a88d' },
	{ label: 'AWS Step Functions', color: '#cd2264' },
	{ label: 'AWS Amplify', color: '#ff9900' },
	{ label: 'Amazon EC2', color: '#ff9900' },
	{ label: 'Elastic Beanstalk', color: '#cd2264' },
	{ label: 'AWS', color: '#ff9900' },
];

const CICD: Tech[] = [
	{ label: 'GitHub Actions', color: '#2088ff' },
	{ label: 'CodePipeline', color: '#1f7a8c' },
];

const DB: Tech[] = [
	{ label: 'PostgreSQL', color: '#336791' },
	{ label: 'Nginx', color: '#009639' },
	{ label: 'MongoDB', color: '#47a248' },
];

function TechBox({ items, accent, label, icon }: { items: Tech[]; accent: string; label: string; icon: string }) {
	return (
		<div style={{
			background: colors.white, border, boxShadow: `5px 5px 0 ${accent}`,
			padding: '12px 14px', borderTop: `8px solid ${accent}`,
			display: 'flex', flexDirection: 'column', gap: 8,
		}}>
			<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
				<span style={{ fontSize: 22, lineHeight: 1 }}>{icon}</span>
				<span style={{
					fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
					color: colors.black, letterSpacing: -0.3,
				}}>
					{label}
				</span>
			</div>
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
				{items.map((t) => (
					<span key={t.label} style={{
						padding: '3px 9px', background: '#f7f7f7', color: '#222',
						fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
						border: `2px solid ${colors.black}`, boxShadow: `1.5px 1.5px 0 ${t.color}`,
					}}>
						{t.label}
					</span>
				))}
			</div>
		</div>
	);
}

export default function L_FullStackDelivery() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '96%', maxWidth: 1700, padding: '20px 32px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}
				>
					<div style={{
						display: 'inline-block', padding: '7px 16px',
						background: colors.dark, color: colors.white,
						fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, letterSpacing: 0.5,
						border, boxShadow: shadowSm, borderRadius: 999,
					}}>
						#28 PRODUCTION DELIVERY
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 42, fontWeight: 900,
						letterSpacing: -1.5, lineHeight: 1, color: colors.black,
					}}>
						AI Engineer 全栈交付 · <span style={{ color: colors.indigo }}>完整生产架构</span>
					</h2>
				</motion.div>

				{/* 主架构图 */}
				<div style={{
					background: colors.white, border, boxShadow: shadow,
					padding: '20px 22px', position: 'relative',
				}}>
					{/* 顶部行: Coding Agent + AI Stack */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						style={{
							display: 'grid', gridTemplateColumns: '1fr 2fr',
							gap: 14, marginBottom: 14,
						}}
					>
						<TechBox items={CODING_AGENT} accent={colors.dark} label="Coding Agent" icon="🤖" />
						<TechBox items={AI_STACK} accent={colors.red} label="AI Stack" icon="🧠" />
					</motion.div>

					{/* 中间行: FE/BE Stack + GitHub Hub + AWS Stack */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.4 }}
						style={{
							display: 'grid', gridTemplateColumns: '1.2fr 130px 1.4fr',
							gap: 14, alignItems: 'stretch', marginBottom: 14,
						}}
					>
						<TechBox items={FE_BE_STACK} accent={colors.blue} label="Front-end + Backend" icon="🧩" />

						{/* 中央 GitHub hub */}
						<div style={{
							display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
							gap: 8,
						}}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: '#666', letterSpacing: 2 }}>
								⇄ HUB
							</div>
							<div style={{
								width: 110, height: 110, borderRadius: '50%',
								background: colors.dark, color: colors.white,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								flexDirection: 'column', gap: 2,
								border: `4px solid ${colors.black}`, boxShadow: `5px 5px 0 ${colors.yellow}`,
							}}>
								<div style={{ fontSize: 38, lineHeight: 1 }}>🐙</div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 17, fontWeight: 900,
									letterSpacing: -0.3,
								}}>
									GitHub
								</div>
							</div>
							<div style={{
								padding: '4px 10px', background: colors.yellow, color: colors.black,
								fontFamily: fonts.mono, fontSize: 13, fontWeight: 900,
								border: `2px solid ${colors.black}`, letterSpacing: 1,
							}}>
								source of truth
							</div>
						</div>

						<TechBox items={AWS_STACK} accent="#ff9900" label="AWS Cloud · Production" icon="☁️" />
					</motion.div>

					{/* 底部行: CI/CD + Database */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.6 }}
						style={{
							display: 'grid', gridTemplateColumns: '1.2fr 130px 1.4fr',
							gap: 14, alignItems: 'stretch',
						}}
					>
						<TechBox items={CICD} accent={colors.green} label="CI / CD" icon="⚙️" />

						<div style={{
							display: 'flex', alignItems: 'center', justifyContent: 'center',
							fontFamily: fonts.heading, fontSize: 36, fontWeight: 900,
							color: colors.dark, lineHeight: 1,
						}}>
							→
						</div>

						<TechBox items={DB} accent={colors.purple} label="Database · Infra" icon="🗄️" />
					</motion.div>
				</div>

				{/* 底部 punchline */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 14, padding: '12px 22px',
						background: colors.indigo, color: colors.white,
						border, boxShadow: `5px 5px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 19, fontWeight: 900,
						letterSpacing: -0.3, lineHeight: 1.4, textAlign: 'center',
					}}
				>
					40+ 项技术 · 真实可上线 · <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>这就是你毕业要会的栈</span> · 不是 toy demo
				</motion.div>
			</div>
		</Slide>
	);
}
