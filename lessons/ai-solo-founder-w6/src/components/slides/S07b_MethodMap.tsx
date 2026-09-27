import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const methods = [
	['AGILE', '价值观与工作思维', '面对变化与不确定性', colors.red],
	['SCRUM', '固定节奏的迭代框架', '复杂产品与团队协作', colors.yellow],
	['KANBAN', '可视化流动与限制 WIP', '持续进入的运营工作', colors.blue],
	['LEAN STARTUP', 'Build–Measure–Learn', '验证市场与用户假设', colors.green],
	['SHAPE UP', 'Appetite + 固定时间', '控制投入与范围', colors.purple],
];

export default function S07b_MethodMap() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>METHOD MAP · 别把所有方法叫 SCRUM</Tag>
		<Title size="51px" style={{ margin: '15px 0 24px' }}>Agile 是底层思维，框架解决不同问题</Title>
		<Grid cols={5} gap={14}>{methods.map(([name, meaning, use, color], index) => <motion.div key={name} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.12 }}><CardSm bg={color} style={{ minHeight: 190 }}><h3 style={{ fontSize: 20 }}>{name}</h3><p style={{ fontSize: 18, fontWeight: 900, marginTop: 18 }}>{meaning}</p><p style={{ fontSize: 15, lineHeight: 1.45, marginTop: 15 }}>适合：{use}</p></CardSm></motion.div>)}</Grid>
		<p style={{ fontSize: 19, fontWeight: 900, marginTop: 25 }}>先判断问题，再选择框架；不要为了“敏捷”照搬全部仪式。</p>
	</Inner></Slide>;
}
