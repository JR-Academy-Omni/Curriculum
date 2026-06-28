import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// Phase 4 毕业项目 —— 不再是「前端 + 后端 + 数据库」传统全栈拆分，
// 而是搭一个 AI-native 应用 = 企业的「记忆系统 / AI OS」：Agent + 记忆(SoT) + 工具(MCP)。
// 真实参照物 = jr-academy-memory（团队共享记忆库，真实在用）。
const clusters = [
	{
		t: '记忆系统结构设计',
		color: colors.purple,
		learn: '把企业知识分层：规则(CLAUDE.md) / 决策 / 流程 / 项目知识 / 共享记忆，定义唯一真相源(SoT)',
		rep: '参照 jr-academy-memory：hr · rules · decisions · meetings · products · projects',
		count: '5 节',
		lab: '1 Lab',
	},
	{
		t: '让 AI 读写记忆',
		color: colors.blue,
		learn: 'Agent 直接读写记忆与知识库：结构化输出、检索、按规则更新——AI 是主操作者不是辅助',
		rep: 'AI 协作数据 / 知识库 · 结构化读写 · 记忆更新与一致性',
		count: '5 节',
		lab: '2 Lab',
	},
	{
		t: '接工具与外部数据 · MCP',
		color: colors.green,
		learn: '用 MCP 把外部系统、数据源、API 接成 Agent 的工具，让记忆系统能取数、能动作',
		rep: 'MCP 集成 · 工具编排 · 外部数据接入 · Agent 可调用能力',
		count: '4 节',
		lab: '1 Lab',
	},
	{
		t: '部署上线 · Cloudflare / Serverless',
		color: colors.orange,
		learn: 'Workers / Serverless 部署，让记忆系统真实可访问、Agent 能在线操作，开发到生产',
		rep: 'Workers 上线部署 · Serverless 模板 · 可访问入口',
		count: '4 节',
		lab: '1 Lab',
	},
	{
		t: '云端部署 Agent · 让它 24/7 自己跑',
		color: colors.teal,
		learn: '把 agent / 自动化任务部署到云端，不再只在本地跑——定时触发、常驻运行，你关机它也在干活，拿到一个一直在线的服务',
		rep: 'Serverless / Workers / 容器 · cron 定时调度 · 密钥与环境管理 · 日志监控 · 成本控制',
		count: '3 节',
		lab: '1 Lab',
	},
	{
		t: 'Code Review · Git 工作流',
		color: colors.red,
		learn: 'AI 写的代码怎么审、写 Commit / PR、团队协作、记忆变更可追溯与质量保障',
		rep: 'Lab Code Review 与质量保证 · Lab Git 工作流',
		count: '4 节',
		lab: '2 Lab',
	},
	{
		t: '毕业答辩 · 真实可访问入口',
		color: colors.govOrange,
		learn: '交付文档 + Demo，给一家公司(或自己)搭好这套记忆系统并上线，答辩展示 Agent 实操',
		rep: '交付 Readme / Demo · 部署上线 · 拿到可访问入口',
		count: '4 节',
		lab: '1 Lab',
	},
];

// Phase 4 详细课程安排 —— 毕业项目：AI-native 企业记忆系统，部署上线、能被 Agent 操作
export default function ARR4_Phase4() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.purple}>Phase 4 · Week 7-8 · 毕业项目</Tag>
					<Title size="38px" style={{ marginTop: 10 }}>
						Phase 4 · 毕业项目：做一个 AI-native 企业记忆系统（<span style={{ background: colors.yellow, padding: '0 8px' }}>约 29 节</span>）
					</Title>
					<p style={{ fontSize: 16, color: '#555', marginTop: 10, lineHeight: 1.5 }}>
						<b style={{ color: colors.black }}>不分前后端的老架构</b> —— AI-native = <b style={{ color: colors.purple }}>Agent + 记忆(SoT) + 工具(MCP)</b>，搭一套企业能用、AI 能直接读写和操作的记忆系统并<b style={{ color: colors.red }}>上线</b>。
					</p>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 16 }}>
					{clusters.map((c, i) => (
						<motion.div key={i}
							initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.12 + i * 0.08, type: 'spring', stiffness: 160, damping: 16 }}
							style={{ background: colors.white, border, boxShadow: shadowSm, padding: '14px 16px', display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
								<div style={{ width: 12, height: 12, background: c.color, border: '2px solid #000', flexShrink: 0 }} />
								<div style={{ fontSize: 16.5, fontWeight: 900, lineHeight: 1.15 }}>{c.t}</div>
							</div>
							<div style={{ fontSize: 13, color: '#444', marginTop: 9, lineHeight: 1.45, flex: 1 }}>{c.learn}</div>
							<div style={{ fontSize: 11, color: '#777', fontFamily: fonts.mono, marginTop: 9, lineHeight: 1.4 }}>{c.rep}</div>
							<div style={{ display: 'flex', gap: 7, marginTop: 10 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, background: c.color, color: colors.white, padding: '2px 9px', border: '2px solid #000' }}>{c.count}</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: colors.red, padding: '2px 9px', border: '2px solid #000', background: colors.warmBg }}>🔨 {c.lab}</span>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
					style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16, background: colors.dark, border, boxShadow: shadow, padding: '14px 22px' }}>
					<div style={{ flexShrink: 0, fontFamily: fonts.mono, fontWeight: 900, fontSize: 26, color: colors.yellow }}>9</div>
					<div style={{ flex: 1, color: colors.white, fontSize: 15, lineHeight: 1.45 }}>
						<b>9 个互动 Lab</b> 贯穿结构设计 / AI 读写记忆 / MCP 工具 / 部署 / 云端跑 Agent / Code Review / Git —— 真实参照物 <b style={{ color: colors.yellow }}>jr-academy-memory</b>（团队共享记忆库，真实在用）。
					</div>
					<div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 10, background: colors.purple, color: colors.white, border: '3px solid #000', boxShadow: `4px 4px 0 ${colors.red}`, padding: '8px 16px' }}>
						<span style={{ fontFamily: fonts.mono, fontWeight: 900, fontSize: 16 }}>Q05</span>
						<span style={{ fontSize: 14, fontWeight: 800, lineHeight: 1.3 }}>毕业 Quest · 交付一个能上线、<br />能被 AI 操作的企业记忆系统</span>
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
