import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const inputs = [
	{ k: '经历', v: '项目 / 工作 / 转专业故事' },
	{ k: '证据', v: '数字 / 截图 / 作品链接' },
	{ k: '反馈', v: '导师意见 / 面试复盘 / 踩坑' },
];

const memoryFiles = [
	{ f: 'PROFILE.md', d: '目标岗位、背景、约束', c: colors.blue },
	{ f: 'EXPERIENCE.md', d: '经历事实 + 可量化结果', c: colors.teal },
	{ f: 'RULES.md', d: '不编造、不夸大、不乱承诺', c: colors.red },
	{ f: 'WORKFLOW.md', d: '常用产出流程与检查清单', c: colors.purple },
];

const outputs = [
	{ t: '简历', d: '按岗位重写 bullet' },
	{ t: 'PRD', d: '把想法拆成功能和边界' },
	{ t: 'Portfolio', d: '作品集、案例页、Demo 脚本' },
	{ t: 'Interview', d: '面试故事、STAR、追问准备' },
];

function Panel({
	title,
	subtitle,
	bg,
	children,
}: {
	title: string;
	subtitle: string;
	bg: string;
	children: React.ReactNode;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 22 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.45 }}
			style={{
				flex: 1,
				minHeight: 470,
				background: bg,
				border,
				borderRadius: 24,
				boxShadow: shadow,
				padding: 24,
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, opacity: 0.58, letterSpacing: 1 }}>
				{subtitle}
			</div>
			<h3 style={{ fontSize: 27, lineHeight: 1.15, margin: '8px 0 20px', fontWeight: 900, color: colors.dark }}>
				{title}
			</h3>
			{children}
		</motion.div>
	);
}

function Arrow({ label, delay = 0 }: { label: string; delay?: number }) {
	return (
		<motion.div
			initial={{ opacity: 0.35 }}
			animate={{ opacity: 1 }}
			transition={{ delay, duration: 0.25 }}
			style={{
				width: 76,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				transformOrigin: 'left',
			}}
		>
			<div style={{ width: '100%', borderTop: `4px dashed ${colors.dark}`, position: 'relative' }}>
				<div
					style={{
						position: 'absolute',
						right: -2,
						top: -11,
						width: 0,
						height: 0,
						borderTop: '9px solid transparent',
						borderBottom: '9px solid transparent',
						borderLeft: `14px solid ${colors.dark}`,
					}}
				/>
			</div>
			<div
				style={{
					marginTop: 14,
					background: colors.white,
					border: `2px solid ${colors.dark}`,
					boxShadow: shadowSm,
					padding: '6px 9px',
					fontFamily: fonts.mono,
					fontSize: 11,
					fontWeight: 900,
					whiteSpace: 'nowrap',
				}}
			>
				{label}
			</div>
		</motion.div>
	);
}

export default function S05c_MemorySystem() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 22, padding: '32px 38px' }}>
				<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
					<div>
						<Tag bg={colors.dark} color={colors.yellow}>AI OS 记忆系统</Tag>
						<Title size="48px" style={{ marginTop: 12, marginBottom: 0 }}>
							不是再画一张流程图，是给 AI 一套<span style={{ background: colors.yellow, padding: '0 10px' }}>长期记忆</span>
						</Title>
					</div>
					<div
						style={{
							width: 330,
							background: colors.white,
							border,
							boxShadow: shadowSm,
							padding: '14px 16px',
							fontSize: 18,
							lineHeight: 1.45,
							fontWeight: 800,
							color: colors.dark,
						}}
					>
						今晚先做个人版：<br />
						raw 资料 → 可信 SoT → 多个可交付产物
					</div>
				</div>

				<div style={{ display: 'flex', alignItems: 'stretch', gap: 18 }}>
					<Panel title="Raw 资料进来" subtitle="COLLECT" bg="#BFE8FF">
						<div style={{ display: 'grid', gap: 14 }}>
							{inputs.map((item, i) => (
								<motion.div
									key={item.k}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.1 + i * 0.08 }}
									style={{ background: colors.white, border, boxShadow: shadowSm, padding: '13px 14px' }}
								>
									<div style={{ fontSize: 22, fontWeight: 900, color: colors.dark }}>{item.k}</div>
									<div style={{ fontSize: 15, marginTop: 3, color: '#384152', lineHeight: 1.35 }}>{item.v}</div>
								</motion.div>
							))}
						</div>
						<div style={{ position: 'absolute', bottom: 20, left: 24, right: 24, fontSize: 15, fontWeight: 800, color: '#344054' }}>
							先原样保存，不急着美化；事实越完整，后面越省 prompt。
						</div>
					</Panel>

					<Arrow label="审计 / 整理" delay={0.25} />

					<Panel title="AI OS 记忆层" subtitle="STRUCTURE" bg="#FFF0A8">
						<div
							style={{
								background: colors.white,
								border: `4px dashed ${colors.blue}`,
								borderRadius: 22,
								padding: 18,
								minHeight: 305,
								display: 'grid',
								gridTemplateColumns: '1fr 1fr',
								gap: 12,
							}}
						>
							{memoryFiles.map((file, i) => (
								<motion.div
									key={file.f}
									initial={{ opacity: 0, scale: 0.94 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.25 + i * 0.08 }}
									style={{ background: '#fbfbfb', border, boxShadow: shadowSm, padding: '10px 11px', minHeight: 92 }}
								>
									<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: file.c }}>
										{file.f}
									</div>
									<div style={{ fontSize: 13, lineHeight: 1.28, marginTop: 6, color: '#374151', fontWeight: 700 }}>
										{file.d}
									</div>
								</motion.div>
							))}
						</div>
						<div
							style={{
								position: 'absolute',
								right: 22,
								top: 74,
								background: '#ff7ab8',
								color: colors.white,
								border,
								borderRadius: '999px',
								padding: '10px 14px',
								fontSize: 18,
								fontWeight: 900,
								boxShadow: shadowSm,
							}}
						>
							SoT
						</div>
					</Panel>

					<Arrow label="复用 / 生成" delay={0.45} />

					<Panel title="产物自动长出来" subtitle="DELIVER" bg="#EBD9FF">
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }}>
							{outputs.map((item) => (
								<div
									key={item.t}
									style={{ background: colors.white, border, boxShadow: shadowSm, padding: '14px 13px', minHeight: 94 }}
								>
									<div style={{ fontSize: 23, fontWeight: 900, color: colors.dark }}>{item.t}</div>
									<div style={{ fontSize: 14, lineHeight: 1.35, marginTop: 8, fontWeight: 700, color: '#4b5563' }}>
										{item.d}
									</div>
								</div>
							))}
						</div>
						<div style={{ position: 'absolute', bottom: 20, left: 24, right: 24, background: colors.yellow, border, boxShadow: shadowSm, padding: '10px 12px', fontSize: 15, fontWeight: 900 }}>
							改一次事实，所有输出都能跟着更新。
						</div>
					</Panel>
				</div>
			</Inner>
		</Slide>
	);
}
