import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const STACKS = [
	{ k: 'Front-end', items: ['HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Flexbox', 'JavaScript', 'ES6', 'TypeScript', 'React 19', 'React Router', 'Next.js', 'Tailwind', 'Ant Design'], color: colors.blue },
	{ k: 'Back-end', items: ['Node.js', 'Express', 'REST API', 'GraphQL', 'JWT', 'OAuth', 'Swagger', 'Webpack', 'Python', 'C#', '.NET Core'], color: colors.green },
	{ k: 'Database', items: ['MongoDB', 'MySQL', 'DynamoDB', 'Redis', 'Vector DB · Qdrant', 'Embeddings', 'Cypress'], color: colors.orange },
	{ k: 'Cloud · DevOps', items: ['AWS EC2 / S3 / Lambda', 'API Gateway', 'CloudFront', 'Route 53', 'VPC', 'ECS / Fargate', 'Docker', 'Kubernetes', 'Terraform', 'Cloudformation', 'Microservice'], color: colors.purple },
	{ k: 'AI · LLM', items: ['OpenAI API', 'Claude AI', 'LangChain', 'RAG · RAGAS', 'Prompting', 'Embeddings', 'Vector Search', 'MCP Protocol', 'Streaming', 'Multi-Agent'], color: colors.red },
	{ k: 'Workflow', items: ['Git · GitHub', 'Jira', 'Bitbucket', 'Confluence', 'Agile / Scrum', 'Postman', 'Jest', 'CI/CD'], color: colors.indigo },
];

export default function L23_TechStack() {
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
						background: colors.dark, color: colors.yellow,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 12,
					}}>
						COMPLETE TECH STACK
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 56, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						6 个月你会上手 <span style={{ color: colors.red }}>60+ 项技术</span>
					</h2>
					<div style={{
						marginTop: 8, fontFamily: fonts.body, fontSize: 19, color: '#555',
						fontWeight: 600, lineHeight: 1.4,
					}}>
						不是"听过名字" · 是真的写过 / 跑过 / 部署过 / 出过 bug 修过
					</div>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
					{STACKS.map((s, i) => (
						<motion.div
							key={s.k}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
							style={{
								background: colors.white, border: `2.5px solid ${colors.black}`,
								boxShadow: `4px 4px 0 ${s.color}`,
								padding: '14px 14px',
								borderTop: `8px solid ${s.color}`,
							}}
						>
							<div style={{
								fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
								color: colors.black, lineHeight: 1.1, letterSpacing: -0.4, marginBottom: 10,
							}}>
								{s.k}
							</div>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
								{s.items.map((it) => (
									<span key={it} style={{
										padding: '3px 8px', background: '#f7f7f7', color: '#222',
										fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
										border: `1.5px solid ${colors.black}`,
									}}>
										{it}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</Slide>
	);
}
