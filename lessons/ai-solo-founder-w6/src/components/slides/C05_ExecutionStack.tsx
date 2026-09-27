import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, Tag, colors, border, shadowSm, fonts } from '../ui';

const layers = [
	['01', '明确价值', '为谁解决什么问题？', colors.red],
	['02', '建立候选', '有哪些可能的工作？', colors.yellow],
	['03', '选择小批量', '本轮只承诺什么？', colors.blue],
	['04', '协作交付', '状态与阻塞是否可见？', colors.green],
	['05', '展示并调整', '证据如何改变下一轮？', colors.purple],
];

export default function C05_ExecutionStack() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<Tag bg={colors.yellow} color={colors.black}>HOW AGILE WORKS · 操作闭环</Tag>
				<Title white size="56px" style={{ margin: '18px 0 28px' }}>每一轮都做五件事，然后带着证据重来</Title>
				<Grid cols={5} gap={14}>
					{layers.map(([number, label, action, color], index) => (
						<motion.div key={label} initial={{ opacity: 0, y: -28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.12 }} style={{ background: color, border, boxShadow: shadowSm, padding: '22px 16px', minHeight: 210 }}>
							<div style={{ fontFamily: fonts.mono, fontWeight: 900 }}>{number}</div>
							<div style={{ fontSize: 19, fontWeight: 900, marginTop: 30 }}>{label}</div>
							<div style={{ fontSize: 21, fontWeight: 900, marginTop: 14, lineHeight: 1.35 }}>{action}</div>
						</motion.div>
					))}
				</Grid>
			</Inner>
		</Slide>
	);
}