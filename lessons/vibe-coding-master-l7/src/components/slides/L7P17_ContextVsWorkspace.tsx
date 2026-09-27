import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P17：Context 隔离 ≠ workspace 隔离 —— 四层矩阵 + 并行安全口诀
// SoT：蓝图 v1.0 §9.10（「任务与消息」行已随 Agent Team 移交 L8）
const LAYERS = [
	{ layer: '对话历史', assume: '不假设继承', confirm: '是新 context、摘要注入还是 fork？' },
	{ layer: '项目规则', assume: '不假设所有角色都加载', confirm: '哪些规则文件会自动读？' },
	{ layer: '工作副本', assume: '不假设共享，也不假设隔离', confirm: '同目录、独立副本还是云端？', hot: true },
	{ layer: '工具与权限', assume: '不假设一致', confirm: '能读、能写、能跑哪些验证？' },
];

const RULES = [
	{ n: '1', t: '读可重叠，写要独占', d: '可以并行读同一个文件；不能让两个 Agent 同时拥有同一处写入。' },
	{ n: '2', t: '有依赖就排顺序，无依赖才并行', d: '并行是没有前后依赖时的奖励，不是默认档。' },
	{ n: '3', t: '谁合并谁验收，开工前指定', d: '不是做完了再找人认领这个活。' },
];

export default function L7P17_ContextVsWorkspace() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
				<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
					<Tag bg={colors.dark}>两种结构共同底线</Tag>
					<Tag bg={colors.red}>最容易翻车的地方</Tag>
				</div>
				<Title size="40px" style={{ marginBottom: 6 }}>
					Context 隔离 <span style={{ color: colors.red }}>≠</span> <span style={{ background: colors.yellow, padding: '0 8px' }}>workspace 隔离</span>
				</Title>
				<p style={{ fontSize: 17, color: '#555', fontWeight: 600, marginBottom: 16 }}>
					这是五个<strong>各自独立</strong>的维度。从「它有独立 context」推不出「文件一定隔离」，也推不出「文件一定共享」。
				</p>

				<div style={{ display: 'flex', gap: 22, alignItems: 'flex-start' }}>
					<div style={{ flex: 1.5 }}>
						<div style={{ display: 'flex', background: colors.dark, color: colors.white, border, borderBottom: 'none' }}>
							<div style={{ flex: '0 0 108px', padding: '9px 13px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700 }}>层</div>
							<div style={{ flex: 1, padding: '9px 13px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)', color: colors.yellow }}>应有的默认假设</div>
							<div style={{ flex: 1.15, padding: '9px 13px', fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: 1.2, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)' }}>开工前要确认</div>
						</div>
						<div style={{ border, boxShadow: shadow, background: colors.white }}>
							{LAYERS.map((l, i) => (
								<motion.div
									key={l.layer}
									initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.32, delay: 0.12 + i * 0.09 }}
									style={{
										display: 'flex', alignItems: 'stretch',
										borderBottom: i < LAYERS.length - 1 ? '2px solid #eee' : 'none',
										background: l.hot ? '#fffbe8' : colors.white,
									}}
								>
									<div style={{ flex: '0 0 108px', padding: '11px 13px', fontSize: 14.5, fontWeight: 700, color: colors.dark, display: 'flex', alignItems: 'center' }}>
										{l.layer}
									</div>
									<div style={{ flex: 1, padding: '11px 13px', borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center' }}>
										<span style={{ fontSize: 14, fontWeight: 800, color: colors.red }}>{l.assume}</span>
									</div>
									<div style={{ flex: 1.15, padding: '11px 13px', borderLeft: '2px solid #eee', fontSize: 13.5, color: '#666', display: 'flex', alignItems: 'center', lineHeight: 1.4 }}>
										{l.confirm}
									</div>
								</motion.div>
							))}
						</div>
					</div>

					<div style={{ flex: 1 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.green, letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
							并行安全口诀
						</div>
						{RULES.map((r, i) => (
							<motion.div
								key={r.n}
								initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.4 + i * 0.13 }}
								style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 12 }}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: 10, background: colors.green, padding: '7px 13px' }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: colors.black }}>{r.n}</span>
									<span style={{ fontSize: 15.5, fontWeight: 800, color: colors.black }}>{r.t}</span>
								</div>
								<div style={{ padding: '10px 13px', fontSize: 13.5, lineHeight: 1.55, color: '#555' }}>{r.d}</div>
							</motion.div>
						))}

						<motion.div
							initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
							style={{
								padding: '12px 15px', background: colors.dark, color: colors.white,
								border, boxShadow: shadow, fontSize: 15.5, fontWeight: 700, lineHeight: 1.5,
							}}
						>
							最坏的一种翻车：<br />
							<span style={{ color: colors.yellow }}>context 隔离了，workspace 却在打架。</span>
						</motion.div>
					</div>
				</div>
			</Inner>
		</Slide>
	);
}
