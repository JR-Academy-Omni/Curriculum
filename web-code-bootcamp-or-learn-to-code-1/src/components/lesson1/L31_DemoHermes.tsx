import { useEffect, useRef } from 'react';
import { Slide } from '../ui';

/**
 * S20b · Demo ④ — Hermes Agent Architecture
 * 来源：Claude Design 导出的 Hermes Agent 架构图（深色蓝图风 · OKLCH 色板）
 * 5 层结构，AI Engineer Bootcamp 学员毕业时能独立搭出的生产级通用研发 Agent。
 */

interface ModuleCard {
	id: string;
	kicker: string;
	name: string;
	cn?: string;
	bullets: string[];
}

interface LayerDef {
	id: string;
	num: string;       // ① ② …
	name: string;
	cn: string;
	stack: string;
	modules: ModuleCard[];
	cols: number;      // 网格列数
}

const LAYERS: LayerDef[] = [
	{
		id: 'l1', num: '①', name: 'Frontend Layer', cn: '前端可视化看板',
		stack: 'React · WebSocket · SSE', cols: 5,
		modules: [
			{ id: 'scrum',    kicker: 'SCRUM',       name: 'Scrum Board',       cn: 'Scrum 看板',        bullets: ['四象限 · 卡片拖拽', '状态实时同步'] },
			{ id: 'multitab', kicker: 'CHAT',        name: 'Multi-Tab Chat',    cn: '多 Tab 对话',        bullets: ['需求/设计/开发/测试 分 Tab', '上下文隔离'] },
			{ id: 'hitl',     kicker: 'HUMAN-IN-LOOP', name: 'Approval Gate',   cn: '人工介入节点',       bullets: ['需求/设计确认', 'UAT 验收放行'] },
			{ id: 'gw-fe',    kicker: 'GATEWAY',     name: 'API Gateway',       cn: '',                   bullets: ['WebSocket 推送', 'REST · SSE'] },
			{ id: 'notify-fe', kicker: 'NOTIFY',     name: 'Notify Push',       cn: '审批推送',           bullets: ['Telegram · Slack', '确认点链接'] },
		],
	},
	{
		id: 'l2', num: '②', name: 'Hermes Agent Core', cn: '核心引擎层',
		stack: 'Python · VPS / Serverless', cols: 4,
		modules: [
			{ id: 'agent-core', kicker: 'CORE LOOP', name: 'AIAgent Main Loop', cn: '主循环',
				bullets: ['Receive → Retrieve', '→ Reason → Act → Learn'] },
			{ id: 'llm',      kicker: 'LLM ROUTER',  name: 'LLM Router',        cn: '',                   bullets: ['Nous · OpenRouter', 'Claude / GPT / 本地'] },
			{ id: 'skill',    kicker: 'SKILLS',      name: 'Skill Engine',      cn: '',                   bullets: ['自动生成技能文档', '118+ 内置技能'] },
			{ id: 'gateway',  kicker: 'GATEWAY',     name: 'Unified Gateway',   cn: '',                   bullets: ['ACP 标准协议', 'WebSocket ↔ REST'] },
			{ id: 'runtime',  kicker: 'RUNTIME',     name: 'Code Exec Runtime', cn: '代码执行运行时',      bullets: ['Docker 沙箱 · SSH', 'Daytona / Modal'] },
			{ id: 'honcho',   kicker: 'USER MODEL',  name: 'Honcho Profile',    cn: '用户建模',           bullets: ['跨会话画像', '偏好 · 风格'] },
			{ id: 'cron',     kicker: 'SCHEDULER',   name: 'Cron Scheduler',    cn: '',                   bullets: ['定时 CI/CD', '跨平台调度'] },
			{ id: 'atropos',  kicker: 'RL',          name: 'Atropos RL Engine', cn: '强化学习',           bullets: ['轨迹生成', '成功强化 / 失败剪枝'] },
		],
	},
	{
		id: 'l3', num: '③', name: 'Memory & Knowledge', cn: '持久记忆 & 知识库',
		stack: 'SQLite · FTS5 · Honcho', cols: 4,
		modules: [
			{ id: 'mem',        kicker: 'MEMORY',     name: 'Conversation Memory', cn: '会话记忆',         bullets: ['SQLite + FTS5', '10ms 召回 / 10k+'] },
			{ id: 'codekb',     kicker: 'CODE KB',    name: 'Source Code KB',      cn: '源码知识库',       bullets: ['向量存储 · AST 索引', '增量 diff'] },
			{ id: 'skills-hub', kicker: 'SKILLS HUB', name: 'Skills Hub',          cn: '技能库',           bullets: ['需求/架构/代码/测试', '多语言技能'] },
			{ id: 'archive',    kicker: 'AUDIT',      name: 'Change Archive',      cn: '变更归档',         bullets: ['每次独立归档', '全量检索'] },
		],
	},
	{
		id: 'l4', num: '④', name: 'MCP Tools & Integrations', cn: 'MCP 工具链',
		stack: 'MCP 协议 · 插件化接入', cols: 5,
		modules: [
			{ id: 'mcp-git',    kicker: 'SCM',        name: 'Git / GitHub MCP',    cn: '',                bullets: ['PR · Review', 'Diff 分析'] },
			{ id: 'mcp-ci',     kicker: 'CI / CD',    name: 'CI/CD MCP',           cn: '',                bullets: ['Jenkins · GHA', '构建/部署触发'] },
			{ id: 'mcp-db',     kicker: 'DATA',       name: 'DB Schema MCP',       cn: '',                bullets: ['Migration 生成', '影响范围分析'] },
			{ id: 'mcp-web',    kicker: 'SEARCH',     name: 'Web Search MCP',      cn: '',                bullets: ['技术方案检索', 'API 文档查询'] },
			{ id: 'mcp-notify', kicker: 'NOTIFY',     name: 'Notification MCP',    cn: '',                bullets: ['Telegram · Slack', '状态推送'] },
		],
	},
	{
		id: 'l5', num: '⑤', name: 'Delivery Pipeline', cn: '研发流水线四阶段',
		stack: '需求 → 设计 → 开发 → 测试 / UAT', cols: 4,
		modules: [
			{ id: 's1', kicker: 'STAGE · 01', name: '📋 需求阶段',  cn: 'Requirements',  bullets: ['HUMAN 录入原始需求', 'AI 澄清 + 结构化入库', 'GATE ✓ 人工确认'] },
			{ id: 's2', kicker: 'STAGE · 02', name: '🎨 设计阶段',  cn: 'Design',        bullets: ['AI 读记忆 · 生成方案', 'HUMAN 审阅', 'GATE ✓ 确认'] },
			{ id: 's3', kicker: 'STAGE · 03', name: '💻 开发阶段',  cn: 'Development',   bullets: ['AI 全自动生成代码', 'Docker 单元测试 · Atropos', 'PR · Skill 归档'] },
			{ id: 's4', kicker: 'STAGE · 04', name: '🧪 测试 / UAT', cn: 'Test / UAT',   bullets: ['HUMAN UAT 验收', 'GATE ✓ 通过', 'AI 触发 CI/CD 部署'] },
		],
	},
];

// 跨层关键数据流（compressed from original 13 to 8 most important）
const FLOWS = [
	{ from: 'multitab', to: 'agent-core', label: '1', style: 'solid' },
	{ from: 'hitl',     to: 'agent-core', label: '2', style: 'ctrl'  },
	{ from: 'agent-core', to: 'mem',      label: '3', style: 'solid' },
	{ from: 'skill',    to: 'skills-hub', label: '4', style: 'solid' },
	{ from: 'runtime',  to: 'mcp-git',    label: '5', style: 'dash'  },
	{ from: 'mem',      to: 's1',         label: '6', style: 'solid' },
	{ from: 'mcp-db',   to: 's2',         label: '7', style: 'solid' },
	{ from: 'mcp-ci',   to: 's4',         label: '8', style: 'solid' },
] as const;

export default function L31_DemoHermes() {
	const rootRef = useRef<HTMLDivElement | null>(null);
	const svgRef  = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		const draw = () => {
			const root = rootRef.current;
			const svg = svgRef.current;
			if (!root || !svg) return;
			const pr = root.getBoundingClientRect();
			svg.setAttribute('viewBox', `0 0 ${pr.width} ${pr.height}`);
			svg.setAttribute('width', String(pr.width));
			svg.setAttribute('height', String(pr.height));
			while (svg.firstChild) svg.removeChild(svg.firstChild);

			const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
			defs.innerHTML = `
				<marker id="hermes-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
					<path d="M 0 0 L 10 5 L 0 10 z" fill="oklch(0.82 0.12 200)"/>
				</marker>
				<marker id="hermes-arrow-dim" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
					<path d="M 0 0 L 10 5 L 0 10 z" fill="oklch(0.55 0.09 200)"/>
				</marker>
				<marker id="hermes-arrow-ctrl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
					<path d="M 0 0 L 10 5 L 0 10 z" fill="oklch(0.78 0.14 60)"/>
				</marker>`;
			svg.appendChild(defs);

			const center = (el: Element, edge: 'top' | 'bot') => {
				const r = el.getBoundingClientRect();
				const x = r.left - pr.left + r.width / 2;
				const y = edge === 'top' ? r.top - pr.top : r.bottom - pr.top;
				return { x, y };
			};
			const ortho = (a: {x:number;y:number}, b: {x:number;y:number}) => {
				const mid = (a.y + b.y) / 2;
				return `M ${a.x} ${a.y} L ${a.x} ${mid} L ${b.x} ${mid} L ${b.x} ${b.y}`;
			};

			FLOWS.forEach((f) => {
				const from = root.querySelector(`[data-id="${f.from}"]`);
				const to   = root.querySelector(`[data-id="${f.to}"]`);
				if (!from || !to) return;
				const p1 = center(from, 'bot');
				const p2 = center(to, 'top');
				const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
				path.setAttribute('d', ortho(p1, p2));
				path.setAttribute('fill', 'none');
				path.setAttribute('stroke-linecap', 'round');
				path.setAttribute('stroke-linejoin', 'round');
				if (f.style === 'solid') {
					path.setAttribute('class', 'hermes-flow-solid');
					path.setAttribute('stroke', 'oklch(0.82 0.12 200)');
					path.setAttribute('stroke-width', '1.6');
					path.setAttribute('stroke-opacity', '.8');
					path.setAttribute('marker-end', 'url(#hermes-arrow)');
				} else if (f.style === 'dash') {
					path.setAttribute('class', 'hermes-flow-dash');
					path.setAttribute('stroke', 'oklch(0.55 0.09 200)');
					path.setAttribute('stroke-width', '1.3');
					path.setAttribute('stroke-opacity', '.75');
					path.setAttribute('marker-end', 'url(#hermes-arrow-dim)');
				} else {
					path.setAttribute('class', 'hermes-flow-ctrl');
					path.setAttribute('stroke', 'oklch(0.78 0.14 60)');
					path.setAttribute('stroke-width', '1.5');
					path.setAttribute('stroke-opacity', '.8');
					path.setAttribute('marker-end', 'url(#hermes-arrow-ctrl)');
				}
				svg.appendChild(path);
				// 编号徽章
				const mx = (p1.x + p2.x) / 2;
				const my = (p1.y + p2.y) / 2;
				const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
				g.setAttribute('transform', `translate(${mx} ${my})`);
				const bg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
				bg.setAttribute('r', '9');
				bg.setAttribute('fill', 'oklch(0.18 0.02 250)');
				bg.setAttribute('stroke', 'oklch(0.82 0.12 200)');
				bg.setAttribute('stroke-width', '1.3');
				g.appendChild(bg);
				const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
				t.setAttribute('text-anchor', 'middle');
				t.setAttribute('dominant-baseline', 'central');
				t.setAttribute('font-family', 'JetBrains Mono, monospace');
				t.setAttribute('font-size', '9');
				t.setAttribute('font-weight', '600');
				t.setAttribute('fill', 'oklch(0.82 0.12 200)');
				t.textContent = f.label;
				g.appendChild(t);
				svg.appendChild(g);
			});
		};

		draw();
		const raf1 = requestAnimationFrame(draw);
		const raf2 = requestAnimationFrame(() => requestAnimationFrame(draw));
		window.addEventListener('resize', draw);
		return () => {
			cancelAnimationFrame(raf1);
			cancelAnimationFrame(raf2);
			window.removeEventListener('resize', draw);
		};
	}, []);

	return (
		<Slide bg="#0b0d12" style={{ padding: 0, display: 'block', overflow: 'hidden' }}>
			<style>{`
				.hermes-root {
					--bg: oklch(0.17 0.015 250);
					--ink: oklch(0.96 0.01 250);
					--ink-2: oklch(0.82 0.012 250);
					--ink-3: oklch(0.66 0.012 250);
					--rule: oklch(0.34 0.020 250);
					--rule-2: oklch(0.28 0.018 250);
					--accent: oklch(0.82 0.12 200);
					--c1: oklch(0.70 0.14 280);
					--c2: oklch(0.72 0.13 165);
					--c3: oklch(0.80 0.13 75);
					--c4: oklch(0.72 0.16 40);
					--c5: oklch(0.74 0.14 145);
					width: 100%; height: 100%;
					position: relative;
					color: var(--ink);
					font-family: "Inter", "Noto Sans SC", system-ui, sans-serif;
					padding: 14px 20px 10px;
					box-sizing: border-box;
					background:
						radial-gradient(1000px 600px at 15% -5%, oklch(0.25 0.04 260 / .55), transparent 60%),
						radial-gradient(800px 500px at 110% 8%, oklch(0.24 0.05 200 / .45), transparent 60%),
						linear-gradient(180deg, var(--bg) 0%, #0c0f15 100%);
					overflow: hidden;
				}
				.hermes-root::before {
					content: ""; position: absolute; inset: 0;
					background-image:
						linear-gradient(oklch(1 0 0 / .03) 1px, transparent 1px),
						linear-gradient(90deg, oklch(1 0 0 / .03) 1px, transparent 1px);
					background-size: 40px 40px, 40px 40px;
					pointer-events: none;
				}
				.hermes-root::after {
					content: ""; position: absolute; inset: 0;
					background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.45) 100%);
					pointer-events: none;
				}
				.hermes-head {
					display: flex; align-items: flex-end; justify-content: space-between;
					gap: 14px; border-bottom: 1px solid var(--rule);
					padding-bottom: 6px; position: relative; z-index: 2;
				}
				.hermes-brand { display: flex; align-items: center; gap: 12px; }
				.hermes-logo {
					width: 34px; height: 34px; border-radius: 7px;
					border: 1px solid oklch(0.82 0.12 200 / .6);
					display: grid; place-items: center;
					background: oklch(0.22 0.04 220 / .6);
					font-family: "JetBrains Mono", monospace; font-weight: 700;
					font-size: 16px; color: var(--accent);
				}
				.hermes-head h1 {
					margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -.01em;
					color: var(--ink);
				}
				.hermes-head h1 .cn { color: var(--ink-2); font-weight: 500; margin-left: 8px; font-size: .72em; }
				.hermes-sub {
					color: var(--ink-3); font-family: "JetBrains Mono", monospace;
					font-size: 11px; letter-spacing: .1em; margin-top: 3px; text-transform: uppercase;
				}
				.hermes-meta {
					font-family: "JetBrains Mono", monospace; font-size: 11px;
					color: var(--ink-3); text-align: right; line-height: 1.6;
				}
				.hermes-meta b { color: var(--ink-2); font-weight: 500; }
				.hermes-stack {
					margin-top: 8px;
					display: flex; flex-direction: column; gap: 6px;
					position: relative; z-index: 1;
				}
				.hermes-layer {
					position: relative;
					display: grid;
					grid-template-columns: 130px 1fr;
					border: 1px solid var(--rule);
					border-radius: 8px;
					background: linear-gradient(180deg, oklch(0.21 0.018 250 / .72), oklch(0.19 0.018 250 / .55));
				}
				.hermes-rail {
					border-right: 1px solid var(--rule);
					padding: 8px 12px 7px;
					display: flex; flex-direction: column; gap: 4px;
					position: relative;
				}
				.hermes-num {
					font-family: "JetBrains Mono", monospace; font-size: 11px;
					color: var(--ink-3); letter-spacing: .1em; font-weight: 600;
					display: inline-flex; align-items: center; gap: 6px;
				}
				.hermes-num::before {
					content: ""; width: 7px; height: 7px; border-radius: 50%;
				}
				.hermes-layer.l1 .hermes-num::before { background: var(--c1); }
				.hermes-layer.l2 .hermes-num::before { background: var(--c2); }
				.hermes-layer.l3 .hermes-num::before { background: var(--c3); }
				.hermes-layer.l4 .hermes-num::before { background: var(--c4); }
				.hermes-layer.l5 .hermes-num::before { background: var(--c5); }
				.hermes-title {
					font-size: 13.5px; font-weight: 700; line-height: 1.2;
				}
				.hermes-title .cn {
					display: block; color: var(--ink-2); font-weight: 500;
					font-size: 11px; margin-top: 2px;
				}
				.hermes-stacknote {
					margin-top: auto;
					font-family: "JetBrains Mono", monospace; font-size: 9.5px;
					color: var(--ink-3); line-height: 1.4;
				}
				.hermes-accent-bar {
					position: absolute; left: -1px; top: 8px; bottom: 8px;
					width: 2.5px; border-radius: 2px;
				}
				.hermes-layer.l1 .hermes-accent-bar { background: var(--c1); }
				.hermes-layer.l2 .hermes-accent-bar { background: var(--c2); }
				.hermes-layer.l3 .hermes-accent-bar { background: var(--c3); }
				.hermes-layer.l4 .hermes-accent-bar { background: var(--c4); }
				.hermes-layer.l5 .hermes-accent-bar { background: var(--c5); }
				.hermes-layer.l1 .hermes-title { color: oklch(0.88 0.08 280); }
				.hermes-layer.l2 .hermes-title { color: oklch(0.88 0.08 165); }
				.hermes-layer.l3 .hermes-title { color: oklch(0.90 0.10 75); }
				.hermes-layer.l4 .hermes-title { color: oklch(0.86 0.10 40); }
				.hermes-layer.l5 .hermes-title { color: oklch(0.88 0.10 145); }
				.hermes-body { padding: 8px 10px; display: grid; gap: 8px; }
				.hermes-card {
					position: relative;
					border: 1px solid var(--rule);
					border-radius: 6px;
					padding: 8px 10px;
					background: linear-gradient(180deg, oklch(0.24 0.02 250 / .85), oklch(0.20 0.02 250 / .85));
					display: flex; flex-direction: column; gap: 4px;
				}
				.hermes-layer.l1 .hermes-card { border-color: oklch(0.70 0.14 280 / .45); }
				.hermes-layer.l2 .hermes-card { border-color: oklch(0.72 0.13 165 / .42); }
				.hermes-layer.l3 .hermes-card { border-color: oklch(0.80 0.13 75 / .40); }
				.hermes-layer.l4 .hermes-card { border-color: oklch(0.72 0.16 40 / .42); }
				.hermes-layer.l5 .hermes-card { border-color: oklch(0.74 0.14 145 / .40); }
				.hermes-kicker {
					font-family: "JetBrains Mono", monospace; font-size: 9.5px;
					color: var(--ink-3); letter-spacing: .12em; text-transform: uppercase;
					font-weight: 600; line-height: 1;
				}
				.hermes-name {
					font-size: 13px; font-weight: 700; letter-spacing: -.01em;
					line-height: 1.2;
					display: flex; flex-wrap: wrap; align-items: baseline; gap: 5px;
				}
				.hermes-name .cn { color: var(--ink-2); font-weight: 500; font-size: 10.5px; }
				.hermes-layer.l1 .hermes-name { color: oklch(0.88 0.08 280); }
				.hermes-layer.l2 .hermes-name { color: oklch(0.88 0.08 165); }
				.hermes-layer.l3 .hermes-name { color: oklch(0.90 0.10 75); }
				.hermes-layer.l4 .hermes-name { color: oklch(0.86 0.10 40); }
				.hermes-layer.l5 .hermes-name { color: oklch(0.88 0.10 145); }
				.hermes-bullets {
					margin: 0; padding: 0; list-style: none;
					display: flex; flex-direction: column; gap: 2px;
					font-size: 10.5px; color: var(--ink-2); line-height: 1.4;
				}
				.hermes-bullets li { padding-left: 10px; position: relative; }
				.hermes-bullets li::before {
					content: ""; position: absolute; left: 2px; top: 7px;
					width: 4px; height: 1.5px; background: var(--ink-3);
				}
				svg.hermes-flows {
					position: absolute; inset: 0;
					width: 100%; height: 100%;
					pointer-events: none; z-index: 3;
				}
				@keyframes hermes-dashflow { to { stroke-dashoffset: -200; } }
				svg.hermes-flows path.hermes-flow-solid {
					stroke-dasharray: 8 6;
					animation: hermes-dashflow 2.2s linear infinite;
				}
				svg.hermes-flows path.hermes-flow-dash {
					stroke-dasharray: 5 7;
					animation: hermes-dashflow 3s linear infinite;
				}
				svg.hermes-flows path.hermes-flow-ctrl {
					stroke-dasharray: 3 6;
					animation: hermes-dashflow 1.6s linear infinite;
				}
				.hermes-foot {
					margin-top: 6px;
					display: flex; align-items: center; justify-content: space-between;
					gap: 14px; padding: 8px 14px;
					border: 1px solid var(--rule); border-radius: 6px;
					background: linear-gradient(180deg, oklch(0.20 0.02 250 / .7), oklch(0.18 0.02 250 / .7));
					position: relative; z-index: 2;
				}
				.hermes-legend {
					display: flex; gap: 8px 14px; flex-wrap: wrap;
					font-size: 11px; color: var(--ink-2); font-weight: 500;
				}
				.hermes-swatch { display: inline-flex; align-items: center; gap: 5px; }
				.hermes-swatch i {
					width: 11px; height: 11px; border-radius: 2px;
					display: inline-block; border: 1px solid var(--rule);
				}
				.hermes-tagline {
					font-family: "JetBrains Mono", monospace; font-size: 11px;
					color: var(--ink-2); letter-spacing: .05em;
				}
				.hermes-tagline b { color: var(--accent); font-weight: 700; }
			`}</style>

			<div className="hermes-root" ref={rootRef}>
				<div className="hermes-head">
					<div className="hermes-brand">
						<div className="hermes-logo">H</div>
						<div>
							<h1>Hermes Agent <span className="cn">通用研发 Agent 架构</span></h1>
							<div className="hermes-sub">DEMO ④ · Claude Design Blueprint · 5-Layer Reference</div>
						</div>
					</div>
					<div className="hermes-meta">
						<div><b>架构层</b> · 5 Layers</div>
						<div><b>部署</b> · 自托管 VPS / Serverless</div>
						<div><b>特性</b> · 通用研发 Agent · 跨业务领域</div>
					</div>
				</div>

				<div className="hermes-stack">
					{LAYERS.map((layer) => (
						<section key={layer.id} className={`hermes-layer ${layer.id}`} id={`L-${layer.id.toUpperCase()}`}>
							<div className="hermes-rail">
								<span className="hermes-accent-bar" />
								<div className="hermes-num">LAYER {layer.num}</div>
								<div className="hermes-title">
									{layer.name}
									<span className="cn">{layer.cn}</span>
								</div>
								<div className="hermes-stacknote">{layer.stack}</div>
							</div>
							<div
								className="hermes-body"
								style={{ gridTemplateColumns: `repeat(${layer.cols}, 1fr)` }}
							>
								{layer.modules.map((m) => (
									<div key={m.id} className="hermes-card" data-id={m.id}>
										<div className="hermes-kicker">{m.kicker}</div>
										<div className="hermes-name">
											{m.name}
											{m.cn && <span className="cn">{m.cn}</span>}
										</div>
										<ul className="hermes-bullets">
											{m.bullets.map((b, i) => (
												<li key={i}>{b}</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</section>
					))}
				</div>

				<div className="hermes-foot">
					<div className="hermes-legend">
						<span className="hermes-swatch"><i style={{ background: 'var(--c1)' }} />① 前端</span>
						<span className="hermes-swatch"><i style={{ background: 'var(--c2)' }} />② Agent Core</span>
						<span className="hermes-swatch"><i style={{ background: 'var(--c3)' }} />③ 记忆 & 知识</span>
						<span className="hermes-swatch"><i style={{ background: 'var(--c4)' }} />④ MCP 工具</span>
						<span className="hermes-swatch"><i style={{ background: 'var(--c5)' }} />⑤ 流水线</span>
					</div>
					<div className="hermes-tagline">
						这不是 PPT 幻想 · 是 <b>AI Engineer Bootcamp 学员毕业能独立搭出的架构</b>
					</div>
				</div>

				<svg ref={svgRef} className="hermes-flows" aria-hidden="true" />
			</div>
		</Slide>
	);
}
