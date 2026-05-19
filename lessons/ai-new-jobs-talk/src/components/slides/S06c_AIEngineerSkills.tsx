import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// AI Engineer 技能框架 —— 5 大支柱 + 2 延伸思考
// 数据 / 内容来源：jiangren.com.au/learn/ai-engineer (JR Academy 自评工具，77 项技能 / 2,300+ 人测过)

interface Pillar {
	id: string;
	no: string;
	name: string;
	nameEn: string;
	count: number;
	tagline: string;
	examples: string[];
	color: string;
	bg: string;
	isCore?: boolean;
}

const PILLARS: Pillar[] = [
	{
		id: 'fullstack',
		no: '01',
		name: 'Full-stack',
		nameEn: '更重要',
		count: 23,
		tagline: '能把 AI 能力做成真正可用的产品功能',
		examples: [
			'React / Next.js / Tailwind',
			'Node.js / NestJS · REST + GraphQL',
			'PostgreSQL / MongoDB / Redis',
			'Auth / RBAC / Stripe 集成',
		],
		color: colors.techPurple,
		bg: colors.techBg,
		isCore: true,
	},
	{
		id: 'prompt',
		no: '02',
		name: 'Prompt Engineering',
		nameEn: 'Prompt',
		count: 11,
		tagline: '把「会问」变成「可复用模板 + 体系化策略」',
		examples: [
			'四要素 · CoT · Few-shot',
			'System prompt 设计',
			'Prompt 版本化 / Library',
			'Eval-driven prompt 迭代',
		],
		color: colors.indigo,
		bg: '#eef2ff',
	},
	{
		id: 'cloud',
		no: '03',
		name: 'Cloud Foundation',
		nameEn: 'Cloud',
		count: 12,
		tagline: '让 AI 应用能上线、能扩展、能稳定运行',
		examples: [
			'AWS EC2 / S3 / Lambda / API GW',
			'Docker · K8s · CI/CD',
			'Secrets · CloudWatch · 日志',
			'多环境 · 成本优化',
		],
		color: colors.orange,
		bg: '#fff7ed',
	},
	{
		id: 'data',
		no: '04',
		name: 'Data Thinking',
		nameEn: 'Data',
		count: 8,
		tagline: '数据闭环决定 RAG / Agent 是否「真的好用」',
		examples: [
			'Vector DB · Embeddings',
			'Chunking strategies',
			'Eval metrics + feedback loop',
			'数据质量 / 漂移监控',
		],
		color: colors.green,
		bg: '#f0fdf4',
	},
	{
		id: 'core',
		no: '05',
		name: 'AI Engineering Core',
		nameEn: 'AI Core',
		count: 23,
		tagline: 'LLM 集成 / RAG / Agent / Eval / Model Ops',
		examples: [
			'OpenAI / Anthropic SDK',
			'RAG 实现 · Agent 框架',
			'Function calling · Tool use',
			'Model Eval · Cost 优化',
		],
		color: colors.red,
		bg: '#fef2f2',
		isCore: true,
	},
];

const TOTAL_SKILLS = PILLARS.reduce((s, p) => s + p.count, 0);

export default function S06c_AIEngineerSkills() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 12 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ width: '100%' }}
				>
					<div style={{ display: 'flex', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
						<span style={{
							padding: '6px 14px', background: colors.techPurple, color: colors.white,
							fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 2,
						}}>AI ENGINEER · 怎么成为</span>
						<span style={{
							padding: '6px 14px', background: colors.black, color: colors.yellow,
							fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 2,
						}}>2,300+ 人已测 · 77 项技能</span>
					</div>
					<Title size="38px">
						AI Engineer = <span style={{ color: colors.techPurple }}>Full-stack</span> +{' '}
						<span style={{ color: colors.indigo }}>Prompt</span> +{' '}
						<span style={{ color: colors.orange }}>Cloud</span> +{' '}
						<span style={{ color: colors.green }}>Data</span> +{' '}
						<span style={{ color: colors.red }}>AI Engineering</span>
					</Title>
				</motion.div>

				{/* 5 pillars + 4 separators */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
					style={{
						display: 'flex', alignItems: 'stretch', width: '100%', flex: 1,
						gap: 6, minHeight: 0,
					}}
				>
					{PILLARS.map((p, i) => (
						<>
							<motion.div
								key={p.id}
								variants={{
									hidden: { opacity: 0, y: 24, scale: 0.92 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
								style={{
									flex: 1, minWidth: 0, background: p.bg,
									border, boxShadow: shadow,
									padding: '14px 14px 12px',
									display: 'flex', flexDirection: 'column',
									position: 'relative', overflow: 'hidden',
								}}
							>
								{/* Top accent bar */}
								<div style={{
									position: 'absolute', left: 0, top: 0, right: 0,
									height: 6, background: p.color,
								}} />
								{/* Core badge */}
								{p.isCore && (
									<div style={{
										position: 'absolute', top: 10, right: -8,
										padding: '2px 8px', background: colors.black, color: colors.yellow,
										fontFamily: fonts.mono, fontSize: 10, fontWeight: 800,
										letterSpacing: 1, border: `2px solid ${colors.black}`,
									}}>CORE</div>
								)}

								<div style={{
									marginTop: 6, fontFamily: fonts.mono, fontSize: 13,
									letterSpacing: 1.5, color: p.color, fontWeight: 700,
								}}>{p.no}</div>
								<div style={{
									marginTop: 2, fontSize: 18, fontWeight: 900,
									color: colors.dark, lineHeight: 1.15,
								}}>{p.name}</div>
								<div style={{
									fontFamily: fonts.mono, fontSize: 11, color: '#888',
									letterSpacing: 1, marginTop: 1,
								}}>{p.nameEn}</div>

								{/* Skill count big */}
								<div style={{
									marginTop: 10, marginBottom: 6,
									display: 'flex', alignItems: 'baseline', gap: 6,
								}}>
									<span style={{
										fontFamily: fonts.mono, fontSize: 36, fontWeight: 700,
										color: p.color, lineHeight: 1,
									}}>{p.count}</span>
									<span style={{
										fontFamily: fonts.mono, fontSize: 12, color: '#666',
										fontWeight: 700, letterSpacing: 1,
									}}>SKILLS</span>
								</div>

								{/* Tagline */}
								<div style={{
									fontSize: 13, lineHeight: 1.5, color: '#333',
									fontWeight: 600, marginBottom: 10,
								}}>{p.tagline}</div>

								{/* Example skills */}
								<div style={{
									borderTop: '1px dashed rgba(0,0,0,0.2)', paddingTop: 8,
									fontSize: 12, lineHeight: 1.55, color: '#444', flex: 1,
								}}>
									{p.examples.map((ex) => (
										<div key={ex}>· {ex}</div>
									))}
								</div>
							</motion.div>

							{/* + separator (between pillars, not after last) */}
							{i < PILLARS.length - 1 && (
								<motion.div
									key={`sep-${i}`}
									initial={{ opacity: 0, scale: 0.4 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
									style={{
										flexShrink: 0, display: 'flex', alignItems: 'center',
										justifyContent: 'center', width: 18,
										fontFamily: fonts.mono, fontSize: 22, fontWeight: 900,
										color: colors.dark,
									}}
								>+</motion.div>
							)}
						</>
					))}
				</motion.div>

				{/* Footer: 延伸 + 链接 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.0 }}
					style={{ display: 'flex', gap: 10, width: '100%' }}
				>
					<div style={{
						flex: 1, background: colors.white, border,
						padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10,
					}}>
						<span style={{
							fontFamily: fonts.mono, fontSize: 11, fontWeight: 800,
							letterSpacing: 1.5, background: colors.dark, color: colors.yellow,
							padding: '3px 8px',
						}}>+ 延伸</span>
						<span style={{ fontSize: 13, color: '#333', lineHeight: 1.5 }}>
							<b>AI Product Thinking</b>（AI 原生 UX · A/B 测）·{' '}
							<b>AI Security</b>（模型攻击防护 · GDPR · 伦理偏见）
						</span>
					</div>
					<div style={{
						background: colors.black, color: colors.white,
						padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10,
						flexShrink: 0,
					}}>
						<span style={{
							fontFamily: fonts.mono, fontSize: 11, fontWeight: 800,
							letterSpacing: 1.5, color: colors.yellow,
						}}>SELF-CHECK</span>
						<span style={{ fontSize: 13, fontWeight: 700 }}>
							{TOTAL_SKILLS} 项技能自评 → <span style={{ color: colors.yellow, fontFamily: fonts.mono }}>jiangren.com.au/learn/ai-engineer</span>
						</span>
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
