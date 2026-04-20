import { motion } from 'framer-motion';
import { Slide, colors, fonts } from '../ui';
import { phases } from '../../data/phases';

/**
 * S22 — 7 个 Resume-Ready Capstone 项目墙
 * 4 + 3 网格布局，第 6 个（Harness）用红色边框突出
 */

interface IProject {
	name: string;
	phaseNums: number[];       // 涉及的 phase number
	stack: string[];           // 3 条技术栈
	outcome: string;           // 毕业 = XXX
	v5New?: boolean;           // V5 新增高亮
	isP3?: boolean;            // P3 真实企业项目 - 特殊高亮
}

const projects: IProject[] = [
	{
		name: 'ISA · Intelligent Study Assistant',
		phaseNums: [1, 2, 3],
		stack: ['OpenAI API', 'Embedding', 'Chroma'],
		outcome: 'AI App Developer Junior',
	},
	{
		name: '企业内部知识库 RAG QA',
		phaseNums: [3],
		stack: ['LangChain', 'Cohere Re-rank', 'AWS Bedrock'],
		outcome: 'RAG Engineer',
	},
	{
		name: 'MCP 业务工具集成',
		phaseNums: [4],
		stack: ['MCP Protocol', 'Tool Use', 'Production'],
		outcome: 'MCP Integration Engineer',
	},
	{
		name: 'Agentic RAG 系统',
		phaseNums: [3, 5],
		stack: ['Claude Agent SDK', 'LangGraph', 'ReAct'],
		outcome: 'AI Agent Developer',
	},
	{
		name: 'Multi-Agent 市场调研系统',
		phaseNums: [6],
		stack: ['LangGraph', 'A2A Protocol', 'LangSmith'],
		outcome: 'Agentic Systems Engineer',
	},
	{
		name: '个人 AI Harness · Personal Claude Code',
		phaseNums: [8],
		stack: ['Hook System', 'Skills 范式', 'ADLC'],
		outcome: 'Harness Architect',
		v5New: true,
	},
	{
		name: 'Fine-tuned Domain LLM',
		phaseNums: [9],
		stack: ['QLoRA', 'Unsloth', 'PEFT'],
		outcome: 'LLM Fine-tuning Engineer',
	},
	{
		name: 'P3 真实企业项目 · 12 周孵化',
		phaseNums: [],
		stack: ['真实企业客户付费项目', 'Demo Day（Meta/AWS/Canva 招聘方在场）', '写进简历 = 真实工作经验'],
		outcome: 'Real-world AI Engineer · 带着企业案例去面试',
		isP3: true,
	},
];

export default function S22_Projects() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* 背景斜线装饰 */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0 1px, transparent 1px 14px)`,
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1400, padding: '30px 36px' }}>
				{/* 标题区 */}
				<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 22 }}>
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div style={{
							display: 'inline-block', padding: '5px 12px', background: colors.red, color: colors.white,
							fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, letterSpacing: 0.5,
							border: `3px solid ${colors.black}`, boxShadow: `3px 3px 0 ${colors.black}`,
							transform: 'rotate(-2deg)', marginBottom: 12,
						}}>
							CAPSTONE · 7 + P3 REAL-WORLD
						</div>
						<h2 style={{
							fontFamily: fonts.heading, fontSize: 'clamp(28px, 3.8vw, 50px)',
							fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, color: colors.black, margin: 0,
						}}>
							7 个{' '}
							<span style={{ background: colors.yellow, padding: '0 10px', border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block' }}>
								Resume-Ready
							</span>
							{' '}实战项目 <span style={{ color: colors.red }}>+</span> 1 个 <span style={{ background: colors.red, color: colors.white, padding: '0 10px', border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block' }}>P3 真实企业项目</span>
						</h2>
						<p style={{ fontFamily: fonts.body, fontSize: 'clamp(13px,1.4vw,17px)', color: '#333', fontWeight: 600, marginTop: 10, lineHeight: 1.4 }}>
							7 个自研 capstone 打底 + 1 个 P3 真实企业项目作结业 · 写进 CV 的都是 real-world 成果
						</p>
					</motion.div>
				</div>

				{/* Grid：4 + 4 布局（7 个技术 capstone + 1 个 P3 企业实战） */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
					{projects.slice(0, 4).map((p, i) => (
						<ProjectCard key={p.name} project={p} index={i + 1} delay={0.1 + i * 0.08} />
					))}
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 12 }}>
					{projects.slice(4, 8).map((p, i) => (
						<ProjectCard key={p.name} project={p} index={i + 5} delay={0.42 + i * 0.08} />
					))}
				</div>

				{/* 底部标语 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.7 }}
					style={{
						marginTop: 20, padding: '12px 18px',
						background: colors.black, border: `3px solid ${colors.black}`,
						boxShadow: `5px 5px 0 ${colors.red}`,
						display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', justifyContent: 'space-between',
					}}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
						<span style={{ fontSize: 22 }}>💼</span>
						<span style={{ fontFamily: fonts.heading, fontSize: 'clamp(13px,1.5vw,19px)', color: colors.white, fontWeight: 900, letterSpacing: -0.3 }}>
							毕业后你的 GitHub 有 <span style={{ color: colors.yellow }}>7 个完整 repo</span> + <span style={{ color: colors.red }}>1 份企业案例</span>
						</span>
					</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 'clamp(11px,1.2vw,14px)', color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}>
						面试时用来回答"你做过什么"
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}

/* ---------- helpers ---------- */

function ProjectCard({ project, index, delay }: { project: IProject; index: number; delay: number }) {
	const isNew = project.v5New;
	const isP3 = project.isP3;
	// P3 用黄底黑字 · V5 新增（Harness）用红边框红阴影 · 其他用黑框黑阴影
	const borderColor = isP3 ? colors.black : isNew ? colors.red : colors.black;
	const shadowColor = isP3 ? colors.red : isNew ? colors.red : colors.black;
	const cardBg = isP3 ? colors.yellow : colors.white;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay }}
			style={{
				background: cardBg,
				border: `3px solid ${borderColor}`,
				boxShadow: `5px 5px 0 ${shadowColor}`,
				padding: '14px 14px 12px',
				position: 'relative',
				display: 'flex', flexDirection: 'column', minHeight: 210,
			}}
		>
			{/* V5 NEW 徽章 */}
			{isNew && (
				<div style={{
					position: 'absolute', top: -12, right: -8,
					padding: '3px 9px', background: colors.red, color: colors.white,
					fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, letterSpacing: 0.5,
					border: `2px solid ${colors.black}`, boxShadow: `2px 2px 0 ${colors.black}`,
					transform: 'rotate(6deg)', zIndex: 2,
				}}>
					V5 NEW
				</div>
			)}
			{/* P3 徽章 */}
			{isP3 && (
				<div style={{
					position: 'absolute', top: -12, right: -8,
					padding: '3px 9px', background: colors.dark, color: colors.yellow,
					fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, letterSpacing: 0.5,
					border: `2px solid ${colors.black}`, boxShadow: `2px 2px 0 ${colors.red}`,
					transform: 'rotate(-4deg)', zIndex: 2,
				}}>
					REAL · P3
				</div>
			)}

			{/* 编号 */}
			<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
				<div style={{
					width: 26, height: 26,
					background: isP3 ? colors.red : colors.black,
					color: isP3 ? colors.white : colors.yellow,
					display: 'flex', alignItems: 'center', justifyContent: 'center',
					fontFamily: fonts.heading, fontSize: 13, fontWeight: 900,
				}}>
					{isP3 ? 'P3' : `0${index}`}
				</div>
				<div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
					{project.phaseNums.map((n) => {
						const ph = phases.find((x) => x.num === n);
						if (!ph) return null;
						return (
							<span key={n} style={{
								padding: '2px 6px',
								background: ph.color, color: colors.white,
								fontFamily: fonts.mono, fontSize: 10, fontWeight: 900,
								border: `1.5px solid ${colors.black}`, letterSpacing: 0.3,
							}}>
								P{n}
							</span>
						);
					})}
					{isP3 && (
						<span style={{
							padding: '2px 6px',
							background: colors.dark, color: colors.yellow,
							fontFamily: fonts.mono, fontSize: 10, fontWeight: 900,
							border: `1.5px solid ${colors.black}`, letterSpacing: 0.3,
						}}>
							12 WEEKS
						</span>
					)}
				</div>
			</div>

			{/* 项目名 */}
			<div style={{
				fontFamily: fonts.heading, fontSize: 'clamp(14px,1.4vw,17px)',
				fontWeight: 900, color: colors.black, lineHeight: 1.2, letterSpacing: -0.3,
				marginBottom: 10, minHeight: 40,
			}}>
				{project.name}
			</div>

			{/* 技术栈 / P3 亮点 */}
			<div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginBottom: 10, flex: 1 }}>
				{project.stack.map((s) => (
					<div key={s} style={{
						fontFamily: fonts.mono, fontSize: 11,
						color: isP3 ? colors.black : '#333',
						fontWeight: 700, lineHeight: 1.3,
					}}>
						<span style={{
							color: isP3 ? colors.red : colors.red,
							fontWeight: 900, marginRight: 4,
						}}>→</span>
						{s}
					</div>
				))}
			</div>

			{/* 毕业 = 岗位 */}
			<div style={{
				padding: '6px 8px',
				background: isP3 ? colors.red : isNew ? colors.red : colors.black,
				color: isP3 ? colors.white : isNew ? colors.white : colors.yellow,
				border: `2px solid ${colors.black}`,
				fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 800, letterSpacing: 0.3,
				lineHeight: 1.3, textAlign: 'center',
			}}>
				毕业 = {project.outcome}
			</div>
		</motion.div>
	);
}
