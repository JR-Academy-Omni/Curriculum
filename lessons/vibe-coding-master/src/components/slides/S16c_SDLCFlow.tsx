import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const handoff = '#2f3548';

type Node = {
	icon: string;
	title: string;
	sub: string;
	wide?: boolean;
	hot?: boolean;
};

const demandNodes: Node[] = [
	{ icon: '🧑‍💼', title: '干系人', sub: 'Stakeholder · 提需求', wide: true },
	{ icon: '📋', title: '业务分析', sub: 'Business Analyst' },
	{ icon: '🎯', title: '产品负责人', sub: 'Product Owner' },
	{ icon: '🎨', title: 'UI 设计', sub: 'UI Designer', wide: true },
];

const devNodes: Node[] = [
	{ icon: '🖥️', title: '前端', sub: 'Front-end' },
	{ icon: '⚙️', title: '后端', sub: 'Back-end' },
	{ icon: '🧩', title: 'Full-stack 开发', sub: '一人顶前后端', wide: true, hot: true },
	{ icon: '🔍', title: '测试', sub: 'QA & Tester', wide: true },
];

const opsNodes: Node[] = [
	{ icon: '🛠️', title: 'DevOps & SRE', sub: '运维' },
	{ icon: '☁️', title: '云工程师', sub: 'Cloud Engineer' },
	{ icon: '🚀', title: '上线环境', sub: 'UAT / Staging / Prod', wide: true, hot: true },
	{ icon: '🔧', title: '数据工程', sub: 'Data Engineer' },
	{ icon: '🗄️', title: '数仓', sub: 'Warehouse / Lake / Tools' },
	{ icon: '📊', title: '数据分析', sub: 'Data Analyst', wide: true },
];

function FlowNode({ node, i }: { node: Node; i: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 14 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.16 + i * 0.045, duration: 0.3 }}
			style={{
				gridColumn: node.wide ? '1 / span 2' : undefined,
				background: node.hot ? colors.yellow : colors.white,
				border,
				boxShadow: shadowSm,
				padding: '12px 14px',
				minHeight: 86,
				display: 'flex',
				alignItems: 'center',
				gap: 12,
			}}
		>
			<div style={{ fontSize: 32, lineHeight: 1, width: 40, textAlign: 'center' }}>{node.icon}</div>
			<div>
				<div style={{ fontSize: 20, fontWeight: 900, lineHeight: 1.12, color: colors.dark }}>{node.title}</div>
				<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: '#667085', marginTop: 5 }}>
					{node.sub}
				</div>
			</div>
		</motion.div>
	);
}

function Section({
	index,
	title,
	subtitle,
	bg,
	nodes,
	children,
}: {
	index: string;
	title: string;
	subtitle: string;
	bg: string;
	nodes: Node[];
	children?: ReactNode;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
			style={{
				flex: 1,
				background: bg,
				border,
				borderRadius: 24,
				boxShadow: shadow,
				padding: 22,
				position: 'relative',
				minHeight: 520,
				overflow: 'hidden',
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
				<div
					style={{
						width: 38,
						height: 38,
						borderRadius: '999px',
						border: `3px solid ${colors.dark}`,
						background: colors.white,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontWeight: 900,
						fontSize: 18,
						boxShadow: shadowSm,
					}}
				>
					{index}
				</div>
				<div>
					<div style={{ fontSize: 24, fontWeight: 900, color: colors.dark, lineHeight: 1.1 }}>{title}</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: '#667085', marginTop: 4 }}>
						{subtitle}
					</div>
				</div>
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
				{nodes.map((node, i) => <FlowNode key={`${title}-${node.title}`} node={node} i={i} />)}
			</div>
			{children}
		</motion.div>
	);
}

function BetweenArrow({ top, bottom }: { top: string; bottom: string }) {
	return (
		<div style={{ width: 82, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
			<div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
				<div style={{ flex: 1, borderTop: `4px dashed ${colors.red}` }} />
				<div style={{ width: 0, height: 0, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: `14px solid ${colors.red}` }} />
			</div>
			<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, boxShadow: shadowSm, padding: '7px 8px', textAlign: 'center', fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, lineHeight: 1.25 }}>
				{top}<br />{bottom}
			</div>
			<div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
				<div style={{ width: 0, height: 0, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderRight: `14px solid ${colors.blue}` }} />
				<div style={{ flex: 1, borderTop: `4px dashed ${colors.blue}` }} />
			</div>
		</div>
	);
}

function MiniArrow({ label }: { label: string }) {
	return (
		<div style={{ position: 'absolute', left: 28, right: 28, bottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
			<div style={{ flex: 1, borderTop: `4px dashed ${handoff}` }} />
			<div style={{ background: colors.white, border: `2px solid ${colors.dark}`, boxShadow: shadowSm, padding: '7px 10px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, whiteSpace: 'nowrap' }}>
				{label}
			</div>
			<div style={{ flex: 1, borderTop: `4px dashed ${handoff}` }} />
		</div>
	);
}

export default function S16c_SDLCFlow() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 18, padding: '34px 36px' }}>
				<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
					<div>
						<Tag bg={colors.dark}>传统流程</Tag>
						<Title size="46px" style={{ marginTop: 10, marginBottom: 0 }}>
							传统 SDLC：一个产品要 <span style={{ background: colors.red, color: colors.white, padding: '0 10px' }}>一整支团队</span>
						</Title>
					</div>
					<div style={{ width: 330, background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px', fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, lineHeight: 1.45 }}>
						需求 → 设计 → 开发 → 测试 → 上线 → 数据<br />
						每一步都在交接
					</div>
				</div>

				<div style={{ display: 'flex', alignItems: 'stretch', gap: 14, flex: 1, minHeight: 0 }}>
					<Section index="①" title="需求 / 设计端" subtitle="需求层层传递" bg="#BFE8FF" nodes={demandNodes}>
						<MiniArrow label="Requirements ⇄ 反复对齐" />
					</Section>
					<BetweenArrow top="handoff" bottom="返工" />
					<Section index="②" title="开发端 · Agile" subtitle="迭代循环" bg="#FFF0A8" nodes={devNodes}>
						<div style={{ position: 'absolute', top: 76, right: 24, background: colors.white, border, boxShadow: shadowSm, padding: '8px 12px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 900 }}>
							🔄 Agile Sprint
						</div>
						<MiniArrow label="开发 ⇄ 测试 ⇄ 修 bug" />
					</Section>
					<BetweenArrow top="release" bottom="回滚" />
					<Section index="③" title="运维 / 数据端" subtitle="上线 → 数据闭环" bg="#EBD9FF" nodes={opsNodes}>
						<MiniArrow label="deploy → monitor → analyze" />
					</Section>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.55 }}
					style={{ alignSelf: 'stretch', background: colors.dark, color: colors.white, padding: '13px 22px', border, boxShadow: shadow, fontSize: 19, fontWeight: 900, lineHeight: 1.35 }}
				>
					<span style={{ background: colors.red, padding: '0 8px' }}>8+ 种角色</span>、层层交接、需求层层失真 —— 一个功能上线，要走完整条链。
				</motion.div>
			</Inner>
		</Slide>
	);
}
