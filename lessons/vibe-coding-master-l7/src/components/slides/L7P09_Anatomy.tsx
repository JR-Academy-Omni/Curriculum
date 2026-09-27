import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P09：一个子 Agent 由什么构成 —— 最小定义 + 运行时自动组装 + 只还回来什么
// SoT：蓝图 v1.0 §18.2（最小定义两项必填）+ §18.4（启动时 context 里有什么）
// 教学作用：这一页让下一页的六格 brief 从「规矩」变成「必然」——
//          它拿不到你的对话历史是运行时事实，所以第 3 格必须自己写。
const GETS = [
	{ t: '它自己的 system prompt', d: '你写的角色正文 + 环境信息，不是主对话那套' },
	{ t: '一条委派消息', d: '主 Agent 转述的，不是你的原话', warn: true },
	{ t: '项目规则全层级', d: '自动加载' },
	{ t: 'git 状态快照', d: '自动加载' },
];

const MISSING = [
	'你的对话历史',
	'你已经调用过的能力',
	'主对话的输出风格',
	'主对话的长期记忆',
];

export default function L7P09_Anatomy() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 43%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.blue}>先看它由什么构成</Tag>
					</div>
					<Title size="36px" style={{ marginBottom: 12 }}>
						最小的一个子 Agent，<span style={{ background: colors.yellow, padding: '0 8px' }}>只有两项必填</span>
					</Title>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.42, delay: 0.12 }}
						style={{ border, boxShadow: shadow, background: colors.dark, marginBottom: 14 }}
					>
						<div style={{ background: colors.blue, padding: '7px 14px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: colors.white, letterSpacing: 1.2 }}>
							你写的部分
						</div>
						<div style={{ padding: '15px 17px', fontFamily: fonts.mono, fontSize: 13.5, lineHeight: 2, color: '#e8e8f0' }}>
							<span style={{ color: '#777' }}>---</span><br />
							<span style={{ color: colors.yellow }}>name</span>: readonly-verifier<br />
							<span style={{ color: colors.yellow }}>description</span>: 什么时候该派它<br />
							<span style={{ color: '#7a8296' }}>skills</span>: <span style={{ color: '#9aa2b4' }}>&lt;要预加载的方法&gt;</span>
							<span style={{ color: '#666', marginLeft: 10, fontSize: 12 }}>← 可选</span><br />
							<span style={{ color: '#777' }}>---</span><br />
							<br />
							<span style={{ color: '#8fb' }}>正文 = 它的 system prompt</span>
						</div>
					</motion.div>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
						{[
							{ k: 'name', v: '身份。调用时按它找人', c: colors.blue },
							{ k: 'description', v: '决定它**什么时候被选中**——写不准就永远不被派', c: colors.red },
							{ k: 'skills', v: '把 L5 那种做事方法**全文**预加载进来（可选）', c: colors.green },
							{ k: '正文', v: '可选，但这才是它的人格', c: '#999' },
						].map((r, i) => (
							<motion.div
								key={r.k}
								initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.32, delay: 0.35 + i * 0.1 }}
								style={{ display: 'flex', gap: 11, alignItems: 'baseline' }}
							>
								<span style={{
									flex: '0 0 92px', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700,
									color: colors.white, background: r.c, padding: '3px 8px', textAlign: 'center',
								}}>{r.k}</span>
								<span
									style={{ fontSize: 14, color: '#555', lineHeight: 1.5 }}
									dangerouslySetInnerHTML={{ __html: r.v.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#10162f">$1</strong>') }}
								/>
							</motion.div>
						))}
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 9 }}>
						剩下的全是运行时自动组装的 —— 你控制不了
					</div>

					<div style={{ display: 'flex', gap: 13, marginBottom: 16 }}>
						<motion.div
							initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.38, delay: 0.22 }}
							style={{ flex: 1.25, border, boxShadow: shadow, background: colors.white }}
						>
							<div style={{ background: colors.green, color: colors.black, padding: '7px 13px', fontSize: 14.5, fontWeight: 800 }}>
								✓ 自动到位
							</div>
							<div style={{ padding: '11px 13px' }}>
								{GETS.map((g, i) => (
									<div key={g.t} style={{ marginBottom: i < GETS.length - 1 ? 9 : 0 }}>
										<div style={{ fontSize: 13.5, fontWeight: 800, color: g.warn ? colors.orange : colors.dark }}>
											{g.warn && <span style={{ marginRight: 4 }}>⚠</span>}{g.t}
										</div>
										<div style={{ fontSize: 12, color: '#777', lineHeight: 1.4 }}>{g.d}</div>
									</div>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.38, delay: 0.36 }}
							style={{ flex: 1, border, boxShadow: shadow, background: '#fff2f2' }}
						>
							<div style={{ background: colors.red, color: colors.white, padding: '7px 13px', fontSize: 14.5, fontWeight: 800 }}>
								✗ 拿不到
							</div>
							<div style={{ padding: '11px 13px' }}>
								{MISSING.map((m, i) => (
									<div key={m} style={{ fontSize: 13.5, color: '#555', lineHeight: 1.5, marginBottom: i < MISSING.length - 1 ? 7 : 0, fontWeight: i === 0 ? 800 : 400 }}>
										{i === 0 && <span style={{ color: colors.red, marginRight: 4 }}>★</span>}{m}
									</div>
								))}
							</div>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.55 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 14 }}
					>
						<div style={{ background: colors.dark, color: colors.white, padding: '8px 14px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1.2 }}>
							它只还回来一样东西
						</div>
						<div style={{ padding: '12px 15px', fontSize: 15.5, lineHeight: 1.6, color: '#333' }}>
							<strong style={{ color: colors.dark }}>最终那段文字。</strong>
							中间读的每个文件、跑的每条命令、试错的每一步——
							<strong style={{ color: colors.blue }}>全部留在它自己那边。</strong>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.72 }}
						style={{ border, background: colors.dark, color: '#e8e8f0', padding: '13px 16px', marginBottom: 14 }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.yellow, letterSpacing: 1.3, fontWeight: 700, marginBottom: 8 }}>
							「独立 context」不是比喻 —— 它真的落在另一个文件里
						</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 12.5, lineHeight: 1.85 }}>
							~/.claude/projects/&#123;项目&#125;/&#123;会话&#125;/subagents/<br />
							<span style={{ color: '#8fb', paddingLeft: 20 }}>agent-&#123;id&#125;.jsonl</span>
							<span style={{ color: '#777', marginLeft: 12 }}>← 一个子 Agent 一个文件</span>
						</div>
						<div style={{ marginTop: 9, paddingTop: 9, borderTop: '2px solid rgba(255,255,255,0.18)', fontSize: 13, opacity: 0.85, lineHeight: 1.55 }}>
							主对话被压缩，动不了它——因为压根不在同一个文件里。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.92 }}
						style={{ border, boxShadow: shadow, background: colors.yellow, padding: '13px 17px' }}
					>
						<div style={{ fontSize: 16.5, fontWeight: 800, color: colors.black, lineHeight: 1.55 }}>
							看懂这张图，下一页那六格就<strong>不是规矩，是必然</strong>。
						</div>
						<div style={{ marginTop: 5, fontSize: 13.5, color: '#665', lineHeight: 1.55 }}>
							它拿不到你的对话历史——所以「已排除的方向」只能你自己写进去。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
