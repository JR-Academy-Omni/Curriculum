// Migrated teaching page; original source: lessons/vibe-coding-master/src/components/slides/S05_AIOS.tsx
import { Slide, Inner, Title, Tag, Card, Grid, colors, fonts } from '../courseUi';
import { Stagger, StaggerItem } from '../courseUi';
import { motion } from 'framer-motion';
// AI Engineer 的项目管理框架
export default function S05_AIOS() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.purple}>AI ENGINEER · 项目管理</Tag>
					<Title size="58px" style={{ marginTop: 14 }}>
						让 AI 写代码前，先管理好<span style={{ background: colors.yellow, padding: '0 10px' }}>项目</span>
					</Title>
					<p style={{ fontSize: 21, color: '#444', marginTop: 14, maxWidth: 1080, lineHeight: 1.5 }}>
						CareKind 的第一条交付线：护理人员打开老人档案，记录一件护理事件，主管复核确认。
						AI Engineer 要把这条需求变成 <b>可验收的项目</b>：范围、规格、任务、证据都能追溯。
					</p>
				</motion.div>

				<Stagger style={{ marginTop: 30 }}>
					<Grid cols={4} gap={16}>
						<StaggerItem><Card bg={colors.white} style={{ height: '100%' }}>
							<div style={{ fontSize: 30 }}>📄</div>
							<div style={{ fontSize: 19, fontWeight: 800, marginTop: 8 }}>范围与规格</div>
							<div style={{ fontSize: 18, lineHeight: 1.5, color: '#777', marginTop: 6 }}>PRD 写用户、流程、验收；长录音留到后续</div>
						</Card></StaggerItem>
						<StaggerItem><Card bg={colors.white} style={{ height: '100%' }}>
							<div style={{ fontSize: 30 }}>⚙️</div>
							<div style={{ fontSize: 19, fontWeight: 800, marginTop: 8 }}>仓库与规则</div>
							<div style={{ fontSize: 18, lineHeight: 1.5, color: '#777', marginTop: 6 }}>CLAUDE.md 写启动命令、目录边界与质量门槛</div>
						</Card></StaggerItem>
						<StaggerItem><Card bg={colors.white} style={{ height: '100%' }}>
							<div style={{ fontSize: 30 }}>🔌</div>
							<div style={{ fontSize: 19, fontWeight: 800, marginTop: 8 }}>任务与责任</div>
							<div style={{ fontSize: 18, lineHeight: 1.5, color: '#777', marginTop: 6 }}>每项任务有 owner、依赖与完成条件</div>
						</Card></StaggerItem>
						<StaggerItem><Card bg={colors.white} style={{ height: '100%' }}>
							<div style={{ fontSize: 30 }}>🧵</div>
							<div style={{ fontSize: 19, fontWeight: 800, marginTop: 8 }}>评审与交接</div>
							<div style={{ fontSize: 18, lineHeight: 1.5, color: '#777', marginTop: 6 }}>代码、测试、演示与已知问题一起交付</div>
						</Card></StaggerItem>
					</Grid>
				</Stagger>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ marginTop: 28, fontSize: 19, color: '#333', fontFamily: fonts.mono }}>
					本课先把 CareKind 的 scope、spec、rules 和 tasks 写清，再让 AI 按证据交付。
				</motion.p>
			</Inner>
		</Slide>);
}
