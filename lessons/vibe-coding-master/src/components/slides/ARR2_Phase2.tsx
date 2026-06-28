import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 对照 ai-builder/public/outline.json phases[1]「Phase 2 — Skills, MCP & Agent 架构」(36 节)
// 按主题归 6 簇，每节只归 1 簇：Tool Use(2) + Skills(9) + Workflow/Schedule(3) + MCP(9) + Agent(9) + 多Agent(4) = 36
// Lab 共 8（L32/33/36/37/45/48/58/64）· 直播 6（L35/39/47/50/57/60）· Quest 2（Q03/Q04）
const clusters = [
	{
		n: '01',
		t: 'Tool Use · Function Calling',
		tag: '让模型学会调工具',
		learn: '从 Function Calling 入门，让 AI 能触发外部动作、跑 Claude Code',
		rep: 'Lab: Tool Use — Function Calling 实战',
		count: 2, lab: 2, live: 0, quest: '',
	},
	{
		n: '02',
		t: 'Skills 架构 & agent.md 模板',
		tag: 'Skills = 给 AI 装 app',
		learn: '把单点能力封成可复用 skill，标准化 agent.md / System Prompt 模板',
		rep: 'Skills 架构与 agent.md 模板标准化实战',
		count: 9, lab: 2, live: 1, quest: '',
	},
	{
		n: '03',
		t: 'Workflow & Schedule 自动化',
		tag: '让能力自己跑起来',
		learn: 'Workflow 执行清单 + Schedule 定时任务与安全边界，把 skill 串成流水线',
		rep: 'Claude Code Skills、Workflow 与 Schedule 实践',
		count: 3, lab: 0, live: 1, quest: '',
	},
	{
		n: '04',
		t: 'MCP Server 搭建',
		tag: 'MCP = 连外部世界',
		learn: '用 MCP 把 AI 接到数据库 / API / 工具，从配置到亲手搭一个 server',
		rep: '用 AI 搭建 MCP Server',
		count: 9, lab: 1, live: 2, quest: 'Q03',
	},
	{
		n: '05',
		t: 'Agent 架构 & 工具编排',
		tag: 'Agent = 后台进程',
		learn: 'ReAct 推理-行动循环 + 多步骤工具编排 + Context Engineering 不丢上下文',
		rep: '搭建 AI Agent：Claude Agent 架构实战',
		count: 9, lab: 2, live: 2, quest: '',
	},
	{
		n: '06',
		t: '多 Agent 协作 & Sub-agents',
		tag: '让 AI 团队分工',
		learn: '子代理配置 + 多 Agent 编排，让一群 Agent 分工协作完成大任务',
		rep: 'Lab: 多 Agent 协作 — 让 AI 团队分工合作',
		count: 4, lab: 1, live: 0, quest: 'Q04',
	},
] as const;

// 小徽标：Lab / 直播 / Quest
function Pills({ lab, live, quest }: { lab: number; live: number; quest: string }) {
	return (
		<div style={{ display: 'flex', gap: 6, marginTop: 9, flexWrap: 'wrap' }}>
			{lab > 0 && (
				<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, padding: '2px 7px', background: colors.red, color: colors.white, border: '2px solid #000' }}>🔨 Lab ×{lab}</span>
			)}
			{live > 0 && (
				<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, padding: '2px 7px', background: colors.dark, color: colors.white, border: '2px solid #000' }}>直播 ×{live}</span>
			)}
			{quest && (
				<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, padding: '2px 7px', background: colors.purple, color: colors.white, border: '2px solid #000' }}>⚔ {quest}</span>
			)}
		</div>
	);
}

// Phase 2 详细课程安排 —— 造能力组件，把单点能力一块块造出来
export default function ARR2_Phase2() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', height: '88%' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.orange} color={colors.black}>Phase 2 · Week 3-5 · 约 36 节</Tag>
					<Title size="40px" style={{ marginTop: 10 }}>
						Phase 2 · <span style={{ background: colors.orange, padding: '0 8px' }}>Skills / MCP / Agent 架构</span>
					</Title>
				</motion.div>

				{/* 顶部定位条 */}
				<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
					style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 14, background: colors.dark, border, boxShadow: shadowSm, padding: '11px 18px' }}>
					<span style={{ fontSize: 18, fontWeight: 900, color: colors.orange, fontFamily: fonts.heading, flexShrink: 0 }}>造能力组件</span>
					<span style={{ fontSize: 14, color: '#cfd3e6', lineHeight: 1.4 }}>
						把单点能力一块块造出来 —— <b style={{ color: colors.white }}>Skills = 给 AI 装 app</b> · <b style={{ color: colors.white }}>MCP = 连外部世界</b> · <b style={{ color: colors.white }}>Agent = 后台进程</b>
					</span>
				</motion.div>

				{/* 6 主题簇卡片 3×2 */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginTop: 16 }}>
					{clusters.map((c, i) => (
						<motion.div key={c.n}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.08, type: 'spring', stiffness: 160, damping: 18 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '14px 15px', display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
								<span style={{ fontSize: 24, fontWeight: 900, lineHeight: 1, color: colors.orange, fontFamily: fonts.heading }}>{c.n}</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: colors.black, background: colors.yellow, padding: '2px 8px', border: '2px solid #000' }}>{c.count} 节</span>
							</div>
							<div style={{ fontSize: 16, fontWeight: 900, marginTop: 9, lineHeight: 1.2 }}>{c.t}</div>
							<div style={{ display: 'inline-block', alignSelf: 'flex-start', marginTop: 6, fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: colors.orange, background: '#fff1e7', padding: '1px 6px', border: `1px solid ${colors.orange}` }}>{c.tag}</div>
							<div style={{ fontSize: 12.5, color: '#555', marginTop: 8, lineHeight: 1.4 }}>{c.learn}</div>
							<div style={{ fontSize: 12, color: colors.black, marginTop: 8, lineHeight: 1.35 }}>
								<span style={{ color: colors.red, fontWeight: 800 }}>代表 · </span>
								<span style={{ fontWeight: 700 }}>{c.rep}</span>
							</div>
							<Pills lab={c.lab} live={c.live} quest={c.quest} />
						</motion.div>
					))}
				</div>

				{/* 底部小结 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 16, background: colors.yellow, border, boxShadow: shadowSm, padding: '11px 18px' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: colors.black }}>本阶段</span>
					<span style={{ fontSize: 14, color: colors.black, lineHeight: 1.4 }}>
						<b>8 个互动 Lab</b> · <b>6 节直播实战</b> · <b>2 个 Quest</b> —— <span style={{ background: colors.purple, color: colors.white, padding: '1px 6px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 800 }}>Q03</span> 从零搭你自己的 MCP Server · <span style={{ background: colors.purple, color: colors.white, padding: '1px 6px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 800 }}>Q04</span> 搭一个能跑的 Claude Code Sub-agents 工作流
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
