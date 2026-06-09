import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

interface Row {
	label: string;
	items: string[];
}

const mcpRows: Row[] = [
	{ label: '协议定义', items: ['Anthropic 推出的标准', '统一 LLM 调工具的方式'] },
	{ label: 'MCP Server', items: ['自己造 server', '暴露 tool: DB / API / 文件'] },
	{ label: 'MCP Client', items: ['Claude Desktop', 'Cursor', 'Claude Code'] },
	{ label: '主流 MCP server', items: ['filesystem', 'github', 'postgres', 'slack', 'google-drive', 'context7'] },
];

const agentRows: Row[] = [
	{ label: '单 Agent 框架', items: ['OpenAI Agent SDK', 'Claude Agent SDK', 'LangGraph', 'Pydantic AI'] },
	{ label: 'Multi-Agent 编排', items: ['LangGraph', 'AutoGen', 'CrewAI', 'MetaGPT'] },
	{ label: 'Browser / Computer Use', items: ['Anthropic Computer Use', 'Playwright + LLM', 'Browser-use'] },
	{ label: 'AI Coding Agent', items: ['Cursor', 'Claude Code', 'Aider', 'Cline', 'Windsurf', 'Continue'] },
	{ label: 'Agent 模式', items: ['ReAct', 'Plan-Execute', 'Reflection', 'Tree Search'] },
];

function Column({ tag, title, sub, color, rows, delay }: { tag: string; title: string; sub: string; color: string; rows: Row[]; delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.4 }}
			style={{ background: colors.white, border, boxShadow: shadowSm, padding: '16px 18px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}
		>
			<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
				<span style={{ padding: '3px 10px', background: color, color: colors.white, fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, border: `2px solid ${colors.black}`, boxShadow: `2px 2px 0 ${colors.black}` }}>
					{tag}
				</span>
			</div>
			<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, color: colors.black, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 4 }}>
				{title}
			</div>
			<div style={{ fontFamily: fonts.body, fontSize: 12, color: '#555', fontWeight: 600, marginBottom: 12 }}>
				{sub}
			</div>

			{rows.map((r) => (
				<div key={r.label} style={{ marginBottom: 8 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 800, color: color, letterSpacing: 0.5, marginBottom: 4 }}>
						{r.label.toUpperCase()}
					</div>
					<div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
						{r.items.map((it) => (
							<span key={it} style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, padding: '2px 7px', background: colors.warmBg, color: colors.black, border: `1.5px solid ${colors.black}` }}>
								{it}
							</span>
						))}
					</div>
				</div>
			))}
		</motion.div>
	);
}

export default function S13_LayerMCPAndAgent() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '20px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 10 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
						<span style={{ padding: '5px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
							SKILL · 06 + 07
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#666' }}>
							让 LLM 自主完成任务
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.black, letterSpacing: -1, lineHeight: 1.1 }}>
						MCP + <span style={{ background: colors.yellow, padding: '0 10px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>Agent / Multi-Agent</span>
					</h2>
				</motion.div>

				{/* 两栏 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 16, minHeight: 0 }}>
					<Column
						tag="SKILL · 06"
						title="MCP"
						sub="Model Context Protocol — 让 LLM 调你的工具"
						color={colors.p6}
						rows={mcpRows}
						delay={0.15}
					/>
					<Column
						tag="SKILL · 07"
						title="Agent / Multi-Agent"
						sub="让 LLM 自己规划 + 执行 + 反思"
						color={colors.p7}
						rows={agentRows}
						delay={0.25}
					/>
				</div>

				{/* 红线 + 简历对比 */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.85, duration: 0.4 }}
					style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '0.8fr 2.2fr', gap: 12 }}
				>
					<div style={{ padding: '10px 14px', background: '#ffe0e0', border: `2px solid ${colors.red}`, fontFamily: fonts.body, fontSize: 12.5, color: colors.black, lineHeight: 1.4 }}>
						<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: colors.red, marginRight: 8 }}>❌</span>
						"Used MCP / AI coding assistance"
					</div>
					<div style={{ padding: '10px 14px', background: '#dff5d8', border: `2px solid #2d9a2d`, fontFamily: fonts.body, fontSize: 12.5, color: colors.black, lineHeight: 1.4 }}>
						<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: '#2d9a2d', marginRight: 8 }}>✅</span>
						Built custom MCP server exposing 12 internal API tools, integrated with Claude Code · Designed LangGraph multi-agent system (planner + researcher + writer + reviewer)
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
