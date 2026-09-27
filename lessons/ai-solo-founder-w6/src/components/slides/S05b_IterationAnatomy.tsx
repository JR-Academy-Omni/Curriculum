import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const steps = [
	['01', '精化', 'PO + 团队', '澄清价值与验收', colors.red],
	['02', 'Planning', '整个团队', 'Sprint Goal + 容量', colors.yellow],
	['03', 'Build + Test', '交付团队', '持续集成的增量', colors.blue],
	['04', 'Daily', '交付团队', '同步进展与阻塞', colors.green],
	['05', 'Review', '团队 + 相关方', '演示结果、获得反馈', colors.purple],
	['06', 'Retro', '整个团队', '一个流程改进行动', colors.orange],
];

export default function S05b_IterationAnatomy() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>INSIDE ONE ITERATION · 1–2 周</Tag>
		<Title size="49px" style={{ margin: '14px 0 22px' }}>每轮都有目标、实现、质量、反馈与改进</Title>
		<Grid cols={3} gap={14}>{steps.map(([number, title, people, output, color], index) => <motion.div key={number} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}><CardSm bg={color} style={{ minHeight: 125 }}><strong>{number} · {title}</strong><p style={{ fontSize: 15, marginTop: 10 }}>{people}</p><p style={{ fontSize: 18, fontWeight: 900, marginTop: 9 }}>{output}</p></CardSm></motion.div>)}</Grid>
		<p style={{ fontSize: 20, fontWeight: 900, marginTop: 24 }}>开发与测试并行；Daily 贯穿执行；Review 的反馈进入下一轮精化。</p>
	</Inner></Slide>;
}
