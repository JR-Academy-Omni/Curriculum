import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface ILayer {
	name: string;
	en: string;
	skills: string[];
	bg: string;
	textColor: string;
}

const layers: ILayer[] = [
	{
		name: '前端交付层',
		en: 'FRONTEND DELIVERY',
		skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React 19', 'TypeScript', 'Responsive · A11y'],
		bg: colors.m3, textColor: colors.white,
	},
	{
		name: '后端服务层',
		en: 'BACKEND & DATA',
		skills: ['Node.js', 'Express', 'MongoDB', 'REST API', 'JWT', 'Python 基础'],
		bg: colors.m5, textColor: colors.white,
	},
	{
		name: '全栈部署层',
		en: 'DEVOPS & DELIVERY',
		skills: ['Git 协作', 'Docker', 'AWS EC2/S3', 'GitHub Actions', 'CI/CD', 'Nginx'],
		bg: colors.m6, textColor: colors.black,
	},
	{
		name: 'AI 工程层',
		en: 'AI ENGINEERING',
		skills: ['Prompt Engineering', 'Context Engineering', 'OpenAI API', 'LangChain', 'RAG', 'Vector DB'],
		bg: colors.m7, textColor: colors.white,
	},
	{
		name: 'AI 应用层',
		en: 'AI APPLICATIONS',
		skills: ['Agent + Tool Use', 'MCP Server', 'Azure AI', 'Eval (RAGAS)', 'Guardrails', 'Prod AI 部署'],
		bg: colors.m8, textColor: colors.white,
	},
];

export default function S05_CapabilityMap() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, padding: '28px 28px', display: 'flex', flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 20 }}
				>
					<div style={{ display: 'inline-block', padding: '5px 14px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, letterSpacing: 2, border, boxShadow: shadowSm, marginBottom: 12 }}>
						V30 · CAPABILITY MAP
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '52px', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1.5, margin: 0 }}>
						毕业时你将拥有的{' '}
						<span style={{ display: 'inline-block', padding: '0 12px', background: colors.yellow, border, boxShadow: `5px 5px 0 ${colors.black}`, transform: 'rotate(-1deg)' }}>
							五层能力地图
						</span>
					</h2>
					<p style={{ fontFamily: fonts.mono, fontSize: '19px', color: '#555', fontWeight: 700, marginTop: 10, letterSpacing: 0.5 }}>
						前端 · 后端 · 部署 · AI 工程 · AI 应用 — 从 HTML 到 Production AI 的完整链路
					</p>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
					style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
				>
					{layers.map((layer, i) => (
						<motion.div
							key={layer.name}
							variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
							transition={{ duration: 0.4 }}
							style={{ display: 'grid', gridTemplateColumns: '220px 1fr', border, boxShadow: shadow, background: colors.white }}
						>
							<div style={{ background: layer.bg, color: layer.textColor, padding: '16px 18px', borderRight: border, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, opacity: 0.8, letterSpacing: 2, marginBottom: 4 }}>
									L{i + 1} · {layer.en}
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: '24px', fontWeight: 900, letterSpacing: -0.3 }}>
									{layer.name}
								</div>
							</div>
							<div style={{ padding: '16px 18px', display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
								{layer.skills.map((s) => (
									<span key={s} style={{ padding: '5px 10px', background: '#f7f7f7', border: `2px solid ${colors.black}`, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: colors.black }}>
										{s}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</Slide>
	);
}
