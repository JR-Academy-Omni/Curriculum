import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const weapons = [
	{ icon: '🧩', name: 'Skills', sub: '把 SOP 变成可调用的能力', color: '#ff5757', d: '团队反复做的事（审小红书、建课、出海报）写成 skill，一句 /命令 触发，谁用都一样' },
	{ icon: '👥', name: 'Subagents', sub: '并行分工 + 独立上下文', color: '#38B6FF', d: '把噪音大的活（搜索、巡检、多视角审）派给子 agent，只把结论带回主线，不占你的上下文' },
	{ icon: '🎼', name: 'Workflow', sub: '确定性编排，可复现', color: '#CB6CE6', d: '多步骤、要并行 / 要验证的大任务，用脚本固化控制流 —— 结果稳定、能交接' },
];

// 三大武器
export default function S20_ThreeWeapons() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>核心</Tag>
					<Title size="52px" style={{ marginTop: 12 }}>
						三大武器：<span style={{ color: colors.red }}>Skills · Subagents · Workflow</span>
					</Title>
				</motion.div>

				<div style={{ display: 'flex', gap: 18, marginTop: 30 }}>
					{weapons.map((w, i) => (
						<motion.div key={w.name}
							initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.15, duration: 0.5 }}
							style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '24px 22px', display: 'flex', flexDirection: 'column' }}>
							<div style={{ fontSize: 44 }}>{w.icon}</div>
							<div style={{ fontSize: 30, fontWeight: 900, marginTop: 8, fontFamily: fonts.mono }}>{w.name}</div>
							<div style={{ width: 48, height: 5, background: w.color, margin: '10px 0' }} />
							<div style={{ fontSize: 17, fontWeight: 800, color: w.color }}>{w.sub}</div>
							<div style={{ fontSize: 16, color: '#555', marginTop: 10, lineHeight: 1.55 }}>{w.d}</div>
						</motion.div>
					))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 24, fontSize: 18, color: '#333', fontFamily: fonts.mono }}>
					// 三者都依赖第 2 章的记忆系统 —— 没有 SoT，再多 skill 也是各说各话。
				</motion.p>
			</Inner>
		</Slide>
	);
}
