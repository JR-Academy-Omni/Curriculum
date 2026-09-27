import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { TopoSubagent } from '../TopoDiagram';

// P04 结构 A：Subagent —— 独立执行、集中汇总
// SoT：蓝图 §2 对照表 Subagent 列
const TRAITS = [
	{ k: '谁分派', v: '主 Agent' },
	{ k: '成员通信', v: '通常只把结果回给主 Agent' },
	{ k: '协调在哪', v: '主 Agent 集中拆分与汇总' },
	{ k: '生命周期', v: '聚焦、一次性、完成即返回' },
	{ k: '写入隔离', v: '可以给每个子 Agent 一份独立工作副本', good: true },
	{ k: '嵌套', v: '允许（有层数上限）' },
];

export default function L7P04_StructureA() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 52%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
						<Tag bg={colors.blue}>结构 A</Tag>
						<Tag bg={colors.dark}>Hub-and-spoke</Tag>
					</div>
					<Title size="46px" style={{ marginBottom: 6 }}>Subagent</Title>
					<p style={{ fontSize: 18, color: '#555', fontWeight: 600, marginBottom: 6 }}>
						成员不需要互相讨论，只需要把结果交回来。
					</p>
					<div style={{ border, boxShadow: shadow, background: colors.white, padding: '10px 8px 4px' }}>
						<TopoSubagent height={272} />
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
									background: t.good ? '#f0f8ff' : colors.white,
								}}
							>
								<div style={{
									flex: '0 0 106px', padding: '11px 14px', fontFamily: fonts.mono,
									fontSize: 12.5, fontWeight: 700, color: colors.blue, letterSpacing: 0.5,
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
							大量独立搜索、日志分析、明确验证、<strong>互不依赖的调查</strong>
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
							冷启动、brief、回报与主 Agent 汇总
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
