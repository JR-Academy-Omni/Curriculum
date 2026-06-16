import { Slide, Inner, Title, Tag, Card, Grid, colors, fonts } from '../ui';
import { Stagger, StaggerItem } from '../ui';
import { motion } from 'framer-motion';

// AI 需要一个操作系统 —— AI OS 概念
export default function S05_AIOS() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.purple}>第 1 章 · AI OS</Tag>
					<Title size="58px" style={{ marginTop: 14 }}>
						模型是 CPU，你还缺一个<span style={{ background: colors.yellow, padding: '0 10px' }}>操作系统</span>
					</Title>
					<p style={{ fontSize: 21, color: '#444', marginTop: 14, maxWidth: 1080, lineHeight: 1.5 }}>
						光有强 CPU 跑不起一台电脑 —— 你需要文件系统、内存管理、进程调度。
						把 Claude 用成「大师级」，要给它配一套 <b>AI OS</b>：让它有地方存、有规则可循、能调度工具。
					</p>
				</motion.div>

				<Stagger style={{ marginTop: 30 }}>
					<Grid cols={4} gap={16}>
						<StaggerItem><Card bg={colors.white} style={{ height: '100%' }}>
							<div style={{ fontSize: 30 }}>📄</div>
							<div style={{ fontSize: 19, fontWeight: 800, marginTop: 8 }}>文件系统 = 记忆</div>
							<div style={{ fontSize: 15, color: '#777', marginTop: 6 }}>规则 / 事实 / 决策落盘，跨会话不丢</div>
						</Card></StaggerItem>
						<StaggerItem><Card bg={colors.white} style={{ height: '100%' }}>
							<div style={{ fontSize: 30 }}>⚙️</div>
							<div style={{ fontSize: 19, fontWeight: 800, marginTop: 8 }}>内核 = 规则</div>
							<div style={{ fontSize: 15, color: '#777', marginTop: 6 }}>CLAUDE.md 铁律，每次开机自动加载</div>
						</Card></StaggerItem>
						<StaggerItem><Card bg={colors.white} style={{ height: '100%' }}>
							<div style={{ fontSize: 30 }}>🔌</div>
							<div style={{ fontSize: 19, fontWeight: 800, marginTop: 8 }}>驱动 = 工具</div>
							<div style={{ fontSize: 15, color: '#777', marginTop: 6 }}>MCP / Skills 接真实数据和能力</div>
						</Card></StaggerItem>
						<StaggerItem><Card bg={colors.white} style={{ height: '100%' }}>
							<div style={{ fontSize: 30 }}>🧵</div>
							<div style={{ fontSize: 19, fontWeight: 800, marginTop: 8 }}>调度 = 编排</div>
							<div style={{ fontSize: 15, color: '#777', marginTop: 6 }}>Subagent / Workflow 并行分工</div>
						</Card></StaggerItem>
					</Grid>
				</Stagger>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 28, fontSize: 19, color: '#333', fontFamily: fonts.mono }}>
					// 这门课的主线：先建记忆（本章 + 第 2 章），再装驱动和调度（第 4 章）。
				</motion.p>
			</Inner>
		</Slide>
	);
}
