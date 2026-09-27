import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { TopoTeam } from '../TopoDiagram';

// P05 结构 B：Agent Team —— 任务状态、成员通信、共同收敛
// SoT：蓝图 §2 对照表 Agent Team 列
const TRAITS = [
	{ k: '谁分派', v: 'Team Lead；成员也可能领取任务' },
	{ k: '成员通信', v: '成员可持续共享发现、互相质疑、协调依赖', hot: true },
	{ k: '协调在哪', v: 'Lead + 任务系统 + 成员通信共同协调' },
	{ k: '生命周期', v: '更持续，任务会更新、阻塞、移交或重分配' },
	{ k: '写入隔离', v: '不提供，成员共用工作副本，只能靠划文件所有权', bad: true },
	{ k: '嵌套', v: '不允许，成员不能再开成员' },
];

export default function L7P05_StructureB() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 52%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
						<Tag bg={colors.purple}>结构 B</Tag>
						<Tag bg={colors.dark}>Team collaboration</Tag>
					</div>
					<Title size="46px" style={{ marginBottom: 6 }}>Agent Team</Title>
					<p style={{ fontSize: 18, color: '#555', fontWeight: 600, marginBottom: 6 }}>
						成员需要共享发现、挑战结论、协调依赖并持续推进。
					</p>
					<div style={{ border, boxShadow: shadow, background: colors.white, padding: '10px 8px 4px' }}>
						<TopoTeam height={272} />
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 14 }}>
						{TRAITS.map((t, i) => (
							<motion.div
								key={t.k}
								initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
								style={{
									display: 'flex', alignItems: 'center',
									borderBottom: i < TRAITS.length - 1 ? '2px solid #eee' : 'none',
									background: t.hot ? '#faf4ff' : t.bad ? '#fff6f6' : colors.white,
								}}
							>
								<div style={{
									flex: '0 0 106px', padding: '11px 14px', fontFamily: fonts.mono,
									fontSize: 12.5, fontWeight: 700, color: colors.purple, letterSpacing: 0.5,
								}}>{t.k}</div>
								<div style={{ flex: 1, padding: '11px 14px', fontSize: 15.5, fontWeight: 600, color: colors.dark, borderLeft: '2px solid #eee', lineHeight: 1.4 }}>
									{t.v}
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.7 }}
						style={{ border, boxShadow: shadow, background: colors.white, marginBottom: 12 }}
					>
						<div style={{ background: colors.green, color: colors.black, padding: '8px 14px', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1.2 }}>
							最适合
						</div>
						<div style={{ padding: '11px 14px', fontSize: 15.5, lineHeight: 1.55, color: '#333' }}>
							竞争假设、跨模块协作、接口协商、<strong>需要成员互相挑战</strong>的复杂任务
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.85 }}
						style={{ border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: colors.red, color: colors.white, padding: '8px 14px', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, letterSpacing: 1.2 }}>
							主要成本
						</div>
						<div style={{ padding: '11px 14px', fontSize: 15.5, lineHeight: 1.55, color: '#333' }}>
							Subagent 的<strong>全部成本</strong> + 消息、任务状态、冲突处理和更高总消耗
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
