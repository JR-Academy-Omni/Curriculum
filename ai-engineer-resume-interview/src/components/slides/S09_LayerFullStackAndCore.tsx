import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

interface SkillGroup {
	label: string;
	items: string[];
}

const fullStackGroups: SkillGroup[] = [
	{ label: '前端', items: ['React', 'Next.js 15', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'] },
	{ label: '后端', items: ['Node.js', 'NestJS', 'Python FastAPI', 'Hono', 'tRPC'] },
	{ label: '数据库', items: ['PostgreSQL', 'MongoDB', 'Redis', 'pgvector'] },
	{ label: '部署', items: ['Vercel', 'AWS', 'Docker', 'Kubernetes'] },
];

const coreGroups: SkillGroup[] = [
	{ label: 'LLM API', items: ['OpenAI SDK', 'Anthropic SDK', 'Vercel AI SDK', 'Google Gemini SDK'] },
	{ label: '流式输出', items: ['Server-Sent Events (SSE)', 'WebSocket', 'Streaming response'] },
	{ label: '多模态', items: ['Vision: GPT-4o / Claude Vision', 'Audio: Whisper / Realtime API', 'Image gen'] },
	{ label: 'Token 经济', items: ['Tiktoken cost calc', 'Prompt Caching', 'Batch API'] },
	{ label: '错误处理', items: ['Rate limit retry', 'Fallback model routing', 'Timeout 策略'] },
];

function ColumnHeader({ tag, title, color }: { tag: string; title: string; color: string }) {
	return (
		<div style={{ marginBottom: 12 }}>
			<span style={{ display: 'inline-block', padding: '4px 12px', background: color, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, border: `2px solid ${colors.black}`, boxShadow: `3px 3px 0 ${colors.black}`, marginBottom: 8 }}>
				{tag}
			</span>
			<div style={{ fontFamily: fonts.heading, fontSize: '26px', fontWeight: 900, color: colors.black, letterSpacing: -0.5, lineHeight: 1.1 }}>
				{title}
			</div>
		</div>
	);
}

function GroupBlock({ g, delay }: { g: SkillGroup; delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -10 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay, duration: 0.3 }}
			style={{ marginBottom: 10 }}
		>
			<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, color: colors.red, letterSpacing: 1, marginBottom: 4 }}>
				{g.label.toUpperCase()}
			</div>
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
				{g.items.map((it) => (
					<span key={it} style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, padding: '3px 8px', background: colors.white, color: colors.black, border: `2px solid ${colors.black}` }}>
						{it}
					</span>
				))}
			</div>
		</motion.div>
	);
}

export default function S09_LayerFullStackAndCore() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '24px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
					<span style={{ padding: '5px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
						SKILL 01 + 02
					</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, color: colors.black, letterSpacing: -0.5 }}>
						Full Stack + AI Engineering Core
					</span>
				</motion.div>

				{/* 两栏 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, minHeight: 0 }}>
					{/* 左：Full Stack */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.15, duration: 0.4 }}
						style={{ background: colors.white, border, boxShadow: shadowSm, padding: '18px 20px', overflowY: 'auto' }}
					>
						<ColumnHeader tag="SKILL · 01" title="Full Stack · 全栈基础" color={colors.p1} />
						{fullStackGroups.map((g, i) => (
							<GroupBlock key={g.label} g={g} delay={0.25 + i * 0.06} />
						))}
					</motion.div>

					{/* 右：AI Engineering Core */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.15, duration: 0.4 }}
						style={{ background: colors.white, border, boxShadow: shadowSm, padding: '18px 20px', overflowY: 'auto' }}
					>
						<ColumnHeader tag="SKILL · 02" title="AI Engineering Core" color={colors.p2} />
						{coreGroups.map((g, i) => (
							<GroupBlock key={g.label} g={g} delay={0.3 + i * 0.06} />
						))}
					</motion.div>
				</div>

				{/* 简历对比落点 */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 0.4 }}
					style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
				>
					<div style={{ padding: '10px 14px', background: '#ffe0e0', border: `2px solid ${colors.red}`, fontFamily: fonts.body, fontSize: 13, color: colors.black, lineHeight: 1.4 }}>
						<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: colors.red, marginRight: 8 }}>❌ 烂</span>
						"Familiar with AI tools"
					</div>
					<div style={{ padding: '10px 14px', background: '#dff5d8', border: `2px solid #2d9a2d`, fontFamily: fonts.body, fontSize: 13, color: colors.black, lineHeight: 1.4 }}>
						<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: '#2d9a2d', marginRight: 8 }}>✅ 好</span>
						Built streaming RAG chatbot using Anthropic SDK + Next.js 15 App Router with SSE (avg first token &lt; 400ms)
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
