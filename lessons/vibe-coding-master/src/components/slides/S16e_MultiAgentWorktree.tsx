import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

const agents = [
	{ branch: 'worktree / ppt-redesign', agent: 'Agent ①', task: '优化 SDLC / ADLC PPT', color: colors.blue },
	{ branch: 'worktree / outline-update', agent: 'Agent ②', task: '改课程大纲和 Lab', color: colors.green },
	{ branch: 'worktree / prod-sync', agent: 'Agent ③', task: '检查 prod 同步脚本', color: colors.purple },
	{ branch: 'worktree / qa-review', agent: 'Agent ④', task: '构建、截图、找重叠', color: colors.orange },
];

const rules = [
	'一个 worktree = 一个独立工作区',
	'一个 agent 只改自己负责的任务',
	'人负责验收、合并、删掉没用分支',
];

function FlowLine({ delay = 0 }: { delay?: number }) {
	return (
		<div style={{ display: 'flex', alignItems: 'center', width: 72 }}>
			<motion.div
				animate={{ backgroundPositionX: ['0px', '20px'] }}
				transition={{ repeat: Infinity, duration: 0.9, ease: 'linear', delay }}
				style={{
					flex: 1,
					height: 4,
					backgroundImage: `repeating-linear-gradient(90deg, ${colors.red} 0 10px, transparent 10px 20px)`,
					backgroundSize: '20px 4px',
				}}
			/>
			<div style={{ width: 0, height: 0, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: `14px solid ${colors.red}` }} />
		</div>
	);
}

export default function S16e_MultiAgentWorktree() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 18, padding: '30px 38px' }}>
				<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 22 }}>
					<div>
						<Tag bg={colors.dark}>真实工作方式</Tag>
						<Title size="46px" style={{ marginTop: 10, marginBottom: 0, lineHeight: 1.08 }}>
							不是只开一个 Agent，<br />
							而是 <span style={{ background: colors.yellow, padding: '0 10px' }}>多个 worktree + 多个 Agent</span> 并行
						</Title>
					</div>
					<div style={{ width: 330, background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px', fontSize: 16, fontWeight: 900, lineHeight: 1.45 }}>
						上一页讲的是单个闭环<br />
						这一页讲的是生产力放大器
					</div>
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '250px 1fr 250px', gap: 18, alignItems: 'center' }}>
					<div style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '24px 22px', textAlign: 'center' }}>
						<div style={{ fontSize: 42 }}>📦</div>
						<div style={{ fontSize: 28, fontWeight: 900, marginTop: 8 }}>同一个 repo</div>
						<div style={{ marginTop: 8, fontFamily: fonts.mono, fontSize: 13, color: '#B9C0D4', lineHeight: 1.45 }}>
							main / feature base<br />
							一份代码真相源
						</div>
					</div>

					<div style={{ display: 'grid', gridTemplateColumns: '72px 1fr 72px', gap: 12, alignItems: 'center' }}>
						<FlowLine />
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
							{agents.map((x, i) => {
								const darkText = x.color === colors.green || x.color === colors.orange;
								return (
									<motion.div
										key={x.branch}
										initial={{ opacity: 0, y: 14 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.12 + i * 0.08, duration: 0.3 }}
										style={{ background: colors.white, border, boxShadow: shadowSm, padding: '14px 15px', minHeight: 112 }}
									>
										<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
											<div style={{ width: 36, height: 36, border, background: x.color, color: darkText ? colors.black : colors.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>
												{i + 1}
											</div>
											<div style={{ fontSize: 20, fontWeight: 900, color: colors.dark }}>{x.agent}</div>
										</div>
										<div style={{ marginTop: 10, fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 900, color: x.color }}>
											{x.branch}
										</div>
										<div style={{ marginTop: 6, fontSize: 15, fontWeight: 800, color: '#475467', lineHeight: 1.35 }}>
											{x.task}
										</div>
									</motion.div>
								);
							})}
						</div>
						<FlowLine delay={0.2} />
					</div>

					<div style={{ background: '#f0fdf4', border, boxShadow: `6px 6px 0 ${colors.green}`, padding: '24px 22px', textAlign: 'center' }}>
						<div style={{ fontSize: 42 }}>🔀</div>
						<div style={{ fontSize: 28, fontWeight: 900, marginTop: 8, color: '#0a8a3a' }}>人来合并</div>
						<div style={{ marginTop: 8, fontFamily: fonts.mono, fontSize: 13, color: '#475467', lineHeight: 1.45 }}>
							review → test → merge<br />
							没价值的 worktree 删除
						</div>
					</div>
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
					{rules.map((r, i) => (
						<div key={r} style={{ background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center' }}>
							<span style={{ width: 28, height: 28, borderRadius: '999px', border: `2px solid ${colors.dark}`, background: i === 0 ? colors.blue : i === 1 ? colors.yellow : colors.red, color: i === 1 ? colors.black : colors.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 13, fontWeight: 900 }}>{i + 1}</span>
							<span style={{ fontSize: 15, fontWeight: 900, color: colors.dark, lineHeight: 1.3 }}>{r}</span>
						</div>
					))}
				</div>

				<div style={{ alignSelf: 'stretch', background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '12px 20px', fontSize: 17, lineHeight: 1.42 }}>
					<span style={{ color: colors.yellow, fontFamily: fonts.mono, fontWeight: 900 }}>单 Agent = 闭环能力；多 Agent + Worktree = 并行产能。</span>{' '}
					真实工作里，老板不是盯一个 AI 打字，而是同时开几条隔离流水线，最后只验收能合并的结果。
				</div>
			</Inner>
		</Slide>
	);
}
