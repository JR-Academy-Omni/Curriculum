import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const trees = [
	{ wt: 'worktree A', agent: 'agent ①', task: '改后端', color: colors.blue },
	{ wt: 'worktree B', agent: 'agent ②', task: '改前端', color: colors.green },
	{ wt: 'worktree C', agent: 'agent ③', task: '写测试', color: colors.purple },
];

// Worktree —— 多个 Claude 并行隔离，不打架
export default function S18b_Worktree() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>并行 · Worktree</Tag>
					<Title size="44px" style={{ marginTop: 10, lineHeight: 1.16 }}>
						Worktree —— 多个 Claude 同时干，<span style={{ background: colors.yellow, padding: '0 8px' }}>不打架</span>
					</Title>
					<p style={{ fontSize: 17, color: '#555', marginTop: 8 }}>
						git worktree = 同一个 repo 拉出多个<b>独立工作副本</b>。每个 agent 各占一个，各改各的，互不踩脚。
					</p>
				</motion.div>

				{/* 流程：1 repo → N worktree/agent → merge */}
				<div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 22 }}>
					<div style={{ flexShrink: 0, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '16px 18px', textAlign: 'center' }}>
						<div style={{ fontSize: 28 }}>📦</div>
						<div style={{ fontSize: 16, fontWeight: 900, marginTop: 4 }}>1 个 repo</div>
						<div style={{ fontSize: 12, color: '#8890b0' }}>主干</div>
					</div>

					<div style={{ flexShrink: 0, fontSize: 24, color: colors.dark, fontWeight: 900 }}>→</div>

					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
						{trees.map((t, i) => (
							<motion.div key={t.wt}
								initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.12 }}
								style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border, boxShadow: `4px 4px 0 ${t.color}`, padding: '9px 14px' }}>
								<span style={{ flexShrink: 0, width: 8, height: 24, background: t.color }} />
								<span style={{ width: 130, flexShrink: 0, fontFamily: fonts.mono, fontSize: 14, fontWeight: 800 }}>🌿 {t.wt}</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: t.color }}>{t.agent}</span>
								<span style={{ fontSize: 14, color: '#666', marginLeft: 'auto' }}>{t.task}</span>
							</motion.div>
						))}
					</div>

					<div style={{ flexShrink: 0, fontSize: 24, color: colors.green, fontWeight: 900 }}>→</div>

					<div style={{ flexShrink: 0, background: '#f0fdf4', border, boxShadow: `5px 5px 0 ${colors.green}`, padding: '16px 18px', textAlign: 'center' }}>
						<div style={{ fontSize: 28 }}>🔀</div>
						<div style={{ fontSize: 16, fontWeight: 900, marginTop: 4, color: '#0a8a3a' }}>各自 merge 回</div>
						<div style={{ fontSize: 12, color: '#888' }}>空的自动清理</div>
					</div>
				</div>

				{/* 何时用 + Claude Code 支持 */}
				<div style={{ display: 'flex', gap: 14, marginTop: 20 }}>
					<div style={{ flex: 1, background: '#fff', border, boxShadow: shadow, padding: '12px 16px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: colors.red, fontWeight: 800 }}>何时用</div>
						<div style={{ fontSize: 14.5, color: '#444', marginTop: 5, lineHeight: 1.5 }}>并行迁移 / 批量重构 / 多 feature 同时跑 —— 不隔离的话，几个 agent 同写一个文件 = 冲突地狱。</div>
					</div>
					<div style={{ flex: 1, background: '#fff', border, boxShadow: shadow, padding: '12px 16px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: colors.blue, fontWeight: 800 }}>Claude Code 里怎么开</div>
						<div style={{ fontSize: 14.5, color: '#444', marginTop: 5, lineHeight: 1.5 }}>Workflow 给每个 agent 加 <code>isolation: 'worktree'</code>；或单独 <code>EnterWorktree</code> 开一个隔离环境干活。</div>
					</div>
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 14, fontSize: 16, color: colors.dark, fontWeight: 800, textAlign: 'center', fontFamily: fonts.mono }}>
					// 串行排队 → 并行隔离：大任务的时间从「全加起来」变成「最慢那一个」
				</motion.p>
			</Inner>
		</Slide>
	);
}
