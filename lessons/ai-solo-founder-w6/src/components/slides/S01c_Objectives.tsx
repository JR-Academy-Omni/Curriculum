import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

const goals = [
	['判断', '看一个项目，能说出它有多大、风险在哪、该拆到什么粒度', colors.yellow],
	['取舍', '在时间固定时，能给出 Must / Should / Later 并说明理由', colors.blue],
	['执行', '能定义 Sprint Goal、任务卡、验收条件和反馈节奏', colors.green],
];

export default function S01c_Objectives() {
	return <Slide bg={colors.darkBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.red}>LEARNING OUTCOMES</Tag>
		<Title white size="56px" style={{ margin: '18px 0 32px' }}>下课时，你应该能做这三件事</Title>
		<Grid cols={3} gap={24}>{goals.map(([title, body, color], index) => <motion.div key={title} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + index * 0.15 }}><Card bg={color} style={{ minHeight: 235 }}><div style={{ fontSize: 42, fontWeight: 900 }}>0{index + 1}</div><h3 style={{ fontSize: 30, margin: '14px 0 16px' }}>{title}</h3><p style={{ fontSize: 18, lineHeight: 1.55 }}>{body}</p></Card></motion.div>)}</Grid>
		<p style={{ color: colors.white, fontSize: 20, marginTop: 30 }}>最后的工作坊会逐项检验这三点。</p>
	</Inner></Slide>;
}
