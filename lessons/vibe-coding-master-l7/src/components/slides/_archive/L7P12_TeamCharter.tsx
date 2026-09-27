import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, Grid, colors, fonts, border, shadow } from '../ui';

// P12：Agent Team —— 先写 Team charter
// SoT：蓝图 §9.5 六项
const ITEMS = [
	{ n: '1', t: '共同目标', d: '整个 Team 最终要交付或回答什么' },
	{ n: '2', t: '成员与初始所有权', d: 'Lead 负责拆分、盯覆盖、处理冲突、最终验收；每位成员各自的地盘' },
	{ n: '3', t: '初始任务与依赖', d: 'Task · Owner · Depends on · Done when' },
	{ n: '4', t: '通信规则', d: '会改变别人方向的证据立即发出并抄送 Lead；冲突附双方证据，不靠投票' },
	{ n: '5', t: '写入边界', d: '每位成员独占什么；共同文件由谁集成' },
	{ n: '6', t: '收敛与停止条件', d: '必选任务完成 · 关键冲突有证据裁决 · 验收判据全部执行' },
];

export default function L7P12_TeamCharter() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
				<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
					<Tag bg={colors.purple}>结构 B · Agent Team</Tag>
					<Tag bg={colors.dark}>开工前</Tag>
				</div>
				<Title size="40px" style={{ marginBottom: 6 }}>
					先写 <span style={{ background: colors.yellow, padding: '0 8px' }}>Team charter</span>
				</Title>
				<p style={{ fontSize: 17.5, color: '#555', fontWeight: 600, marginBottom: 18 }}>
					不能只写「你们合作把它做完」。开工前至少定义六项。
				</p>

				<Grid cols={3} gap={16}>
					{ITEMS.map((it, i) => (
						<motion.div
							key={it.n}
							initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.38, delay: 0.12 + i * 0.09 }}
							style={{ border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, background: colors.purple, padding: '8px 14px' }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.white, opacity: 0.75 }}>{it.n}</span>
								<span style={{ fontSize: 16.5, fontWeight: 800, color: colors.white }}>{it.t}</span>
							</div>
							<div style={{ padding: '13px 15px', fontSize: 14.5, lineHeight: 1.6, color: '#444', flex: 1 }}>
								{it.d}
							</div>
						</motion.div>
					))}
				</Grid>

				<motion.div
					initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 0.75 }}
					style={{ display: 'flex', gap: 16, marginTop: 20 }}
				>
					<div style={{ flex: 1, border, boxShadow: shadow, background: colors.white, padding: '13px 18px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.blue, fontWeight: 700, letterSpacing: 1.2, marginBottom: 5 }}>
							Subagent brief 只需保证
						</div>
						<div style={{ fontSize: 17, fontWeight: 700, color: colors.dark }}>一个 Agent 能独立做完</div>
					</div>
					<div style={{ flex: 1.35, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '13px 18px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.purple, fontWeight: 700, letterSpacing: 1.2, marginBottom: 5 }}>
							Team charter 还必须定义
						</div>
						<div style={{ fontSize: 17, fontWeight: 700 }}>
							Agent 和 Agent <span style={{ color: colors.yellow }}>之间</span>怎样协作
						</div>
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
