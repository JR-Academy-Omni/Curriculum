import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P06：不是强弱，是通信需求不同 —— 两种结构并排对照
// SoT：蓝图 §2 对照表（v0.4 已补「写入隔离」「嵌套」两行）+ §6.2 错误心智 / 正确心智
const ROWS = [
	{ dim: '形状', a: 'Hub-and-spoke 主从式', b: 'Team 团队式' },
	{ dim: '谁分派', a: '主 Agent', b: 'Team Lead；成员也可能领取任务' },
	{ dim: '成员通信', a: '只把结果回给主 Agent', b: '可持续共享、互相质疑、协调依赖', key: true },
	{ dim: '协调在哪', a: '主 Agent 集中拆分与汇总', b: 'Lead + 任务系统 + 成员通信' },
	{ dim: '生命周期', a: '聚焦、一次性、完成即返回', b: '持续，任务会更新、阻塞、重分配' },
	{ dim: '写入隔离', a: '可给每人一份独立工作副本', b: '不提供，只能靠划文件所有权' },
	{ dim: '嵌套', a: '允许（有层数上限）', b: '不允许' },
];

export default function L7P06_NotStrongerJustDifferent() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
				<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
					<Tag bg={colors.dark}>并排对照</Tag>
					<Tag bg={colors.red}>本节最容易搞错的一页</Tag>
				</div>
				<Title size="40px" style={{ marginBottom: 12 }}>
					不是强弱，是<span style={{ background: colors.yellow, padding: '0 10px' }}>通信需求不同</span>
				</Title>

				{/* 表头 */}
				<div style={{ display: 'flex', background: colors.dark, color: colors.white, border, borderBottom: 'none' }}>
					<div style={{ flex: '0 0 128px', padding: '9px 14px', fontFamily: fonts.mono, fontSize: 12, letterSpacing: 1.4, fontWeight: 700 }}>维度</div>
					<div style={{ flex: 1, padding: '9px 14px', fontFamily: fonts.mono, fontSize: 13, letterSpacing: 1, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)', color: colors.blue }}>Subagent</div>
					<div style={{ flex: 1, padding: '9px 14px', fontFamily: fonts.mono, fontSize: 13, letterSpacing: 1, fontWeight: 700, borderLeft: '2px solid rgba(255,255,255,0.2)', color: colors.purple }}>Agent Team</div>
				</div>

				{/* 表体 */}
				<div style={{ border, boxShadow: shadow, background: colors.white }}>
					{ROWS.map((r, i) => (
						<motion.div
							key={r.dim}
							initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.1 + i * 0.07 }}
							style={{
								display: 'flex', alignItems: 'stretch',
								borderBottom: i < ROWS.length - 1 ? '2px solid #eee' : 'none',
								background: r.key ? '#fffbe8' : colors.white,
							}}
						>
							<div style={{
								flex: '0 0 128px', padding: '9px 14px', fontFamily: fonts.mono, fontSize: 13,
								fontWeight: 700, color: r.key ? colors.black : '#666', display: 'flex', alignItems: 'center',
							}}>
								{r.key && <span style={{ color: colors.red, marginRight: 5 }}>★</span>}{r.dim}
							</div>
							<div style={{ flex: 1, padding: '9px 14px', fontSize: 15, borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center', color: '#333', fontWeight: r.key ? 800 : 500 }}>
								{r.a}
							</div>
							<div style={{ flex: 1, padding: '9px 14px', fontSize: 15, borderLeft: '2px solid #eee', display: 'flex', alignItems: 'center', color: '#333', fontWeight: r.key ? 800 : 500 }}>
								{r.b}
							</div>
						</motion.div>
					))}
				</div>

				{/* 心智对比 */}
				<div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.75 }}
						style={{ flex: 1, border, boxShadow: shadow, background: '#fff2f2', padding: '11px 16px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, fontWeight: 700, letterSpacing: 1.2, marginBottom: 5 }}>✕ 错误心智</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, color: '#999', textDecoration: 'line-through' }}>
							单 Agent &lt; Subagent &lt; Agent Team
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.9 }}
						style={{ flex: 1.5, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '11px 16px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.green, fontWeight: 700, letterSpacing: 1.2, marginBottom: 5 }}>✓ 正确心智 · 一句判断线</div>
						<div style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.45 }}>
							只需要<span style={{ color: colors.blue }}>「分头做、回来报」</span>用 Subagent；
							需要<span style={{ color: colors.purple }}>「边做边互通、共同收敛」</span>才用 Agent Team。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
