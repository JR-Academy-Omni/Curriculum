import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { TopoSubagent, TopoTeam } from '../TopoDiagram';

// P03：两张拓扑图同屏 —— 本节的立论页
// SoT：蓝图 §2「多 Agent 是总称，Subagent 和 Agent Team 是其中两种不同结构」+ §9.1
export default function L7P03_TwoTopologies() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
				<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
					<Tag bg={colors.dark}>立论页</Tag>
				</div>
				<Title size="42px" style={{ marginBottom: 4 }}>
					同样是多 Agent，<span style={{ background: colors.yellow, padding: '0 10px' }}>信息走法不同</span>
				</Title>
				<p style={{ fontSize: 17.5, color: '#555', fontWeight: 500, marginBottom: 14 }}>
					多 Agent 是总称。Subagent 和 Agent Team 是<strong>两种不同结构</strong>，不是两个叫法。
				</p>

				<div style={{ display: 'flex', gap: 22 }}>
					{[
						{ tag: '结构 A', name: 'Subagent', shape: 'Hub-and-spoke · 主从式', color: colors.blue, Topo: TopoSubagent, line: '分头做，回来报' },
						{ tag: '结构 B', name: 'Agent Team', shape: 'Team · 团队式', color: colors.purple, Topo: TopoTeam, line: '边做边互通' },
					].map(({ tag, name, shape, color: c, Topo, line }, i) => (
						<motion.div
							key={name}
							initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.45, delay: 0.1 + i * 0.15 }}
							style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
						>
							<div style={{ background: c, padding: '9px 16px', display: 'flex', alignItems: 'baseline', gap: 10 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 1.5, fontWeight: 700, color: colors.white, opacity: 0.85 }}>{tag}</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 19, fontWeight: 700, color: colors.white }}>{name}</span>
								<span style={{ marginLeft: 'auto', fontSize: 13, fontWeight: 700, color: colors.white, opacity: 0.9 }}>{shape}</span>
							</div>
							<div style={{ padding: '6px 10px 0' }}>
								<Topo height={252} />
							</div>
							<div style={{
								margin: '0 12px 12px', padding: '9px 14px', background: colors.dark, color: colors.white,
								fontSize: 16, fontWeight: 800, textAlign: 'center',
							}}>
								{line}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
					style={{ marginTop: 12, fontSize: 17, textAlign: 'center', fontWeight: 700, color: colors.dark }}
				>
					A、B、C 完全不需要说话，为什么要付 Team 的通信成本？
					<span style={{ color: '#999', margin: '0 10px' }}>|</span>
					A 的发现会改变 B 的下一步，只让它们各写报告又会损失什么？
				</motion.div>
			</Inner>
		</Slide>
	);
}
