import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

interface SkillCard {
	num: string;
	icon: string;
	name: string;
	nameCn: string;
	hook: string;
	bg: string;
}

const skills: SkillCard[] = [
	{ num: '01', icon: '🧱', name: 'Full Stack', nameCn: '全栈基础', hook: 'Next.js · FastAPI · PostgreSQL · Docker', bg: colors.p1 },
	{ num: '02', icon: '🤖', name: 'AI Engineering Core', nameCn: 'LLM API · MCP · Function Calling · Multi-modal', hook: 'OpenAI / Anthropic SDK · MCP Server · Streaming', bg: colors.p2 },
	{ num: '03', icon: '💬', name: 'Prompt Engineering', nameCn: '让 LLM 听你的话', hook: 'CoT · ReAct · Structured Output · DSPy', bg: colors.p3 },
	{ num: '04', icon: '🧠', name: 'Context Engineering', nameCn: '让 LLM 记住 + 用上正确信息', hook: 'Memory · Mem0 · 上下文压缩 · State', bg: colors.p4 },
	{ num: '05', icon: '🔍', name: 'RAG', nameCn: '知识检索增强', hook: 'Embedding · Vector DB · Rerank · RAGAS', bg: colors.p5 },
	{ num: '06', icon: '🕹️', name: 'Agent / Multi-Agent', nameCn: 'Agent · Harness · ADLC', hook: 'LangGraph · Agent SDK · ADLC · Harness', bg: colors.p7 },
	{ num: '07', icon: '⚡', name: 'AI Coding', nameCn: '招聘重点考察 · 必须独立', hook: 'Cursor · Claude Code · Aider · CLAUDE.md · Skills', bg: colors.red },
	{ num: '08', icon: '☁️', name: 'Cloud & Ops', nameCn: '上 prod 不爆炸', hook: 'Bedrock · LiteLLM · LangSmith · Caching', bg: colors.p8 },
];

export default function S08_SkillsOverview() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '90%', padding: '28px 30px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部标题 */}
				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 14 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
						<span style={{ padding: '6px 14px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
							MODULE 2 · SKILLS
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: '#666' }}>
							跟 Bootcamp P1-P10 一致 · 每个分类都要在简历 skills section 出现
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '46px', fontWeight: 900, color: colors.black, letterSpacing: -1, lineHeight: 1.1 }}>
						AI Engineer 必备{' '}
						<span style={{ background: colors.yellow, padding: '0 12px', border, boxShadow: `5px 5px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1.5deg)' }}>
							8 大 Skill Category
						</span>
					</h2>
					<p style={{ fontFamily: fonts.body, fontSize: 17, color: '#555', fontWeight: 500, marginTop: 8 }}>
						<strong style={{ color: colors.black }}>命名规则</strong>：业界通用名（招聘官 + ATS 都能搜到）· 不要 "AI Tools" 泛词 · <strong style={{ background: colors.green, color: colors.black, padding: '2px 6px' }}>有证书可加 Certifications 作为第 9 个 category</strong>
					</p>
				</motion.div>

				{/* 8 张 skill 卡 — 4×2 网格 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '1fr', gap: 14, marginBottom: 14 }}>
					{skills.map((s, i) => (
						<motion.div
							key={s.num}
							initial={{ opacity: 0, y: 20, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ delay: 0.06 + i * 0.05, duration: 0.35 }}
							style={{
								background: colors.white,
								border,
								boxShadow: shadowSm,
								display: 'flex',
								flexDirection: 'column',
								overflow: 'hidden',
							}}
						>
							{/* 顶部 color stripe */}
							<div style={{ height: 8, background: s.bg, flexShrink: 0 }} />

							<div style={{ padding: '14px 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, padding: '3px 10px', background: s.bg, color: colors.white, border: `2px solid ${colors.black}` }}>
										{s.num}
									</span>
									<span style={{ fontSize: 26, lineHeight: 1 }}>{s.icon}</span>
								</div>

								<div style={{ fontFamily: fonts.heading, fontSize: '21px', fontWeight: 900, color: colors.black, lineHeight: 1.15, marginBottom: 4, letterSpacing: -0.3 }}>
									{s.name}
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: '15px', fontWeight: 700, color: '#555', lineHeight: 1.3, marginBottom: 10 }}>
									{s.nameCn}
								</div>

								<div style={{ marginTop: 'auto', fontFamily: fonts.mono, fontSize: '13px', color: '#333', fontWeight: 600, padding: '8px 10px', background: colors.warmBg, borderTop: `2px dashed #ccc`, lineHeight: 1.4 }}>
									{s.hook}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* 落点 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7 }}
					style={{ textAlign: 'center' }}
				>
					<span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 22px', background: colors.black, color: colors.white, fontFamily: fonts.heading, fontSize: '18px', fontWeight: 800, border, boxShadow: `5px 5px 0 ${colors.yellow}` }}>
						这 7 个 category，<span style={{ color: colors.yellow }}>每个都要在简历 Skills section 出现 → 下一页看完整真实样例</span>
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
