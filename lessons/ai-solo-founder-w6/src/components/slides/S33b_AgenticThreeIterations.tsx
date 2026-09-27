import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

const iterations = [
	['ITERATION 1', '受控数据可信问答', 'Research + Builder + Test', '安全批准数据范围', '有用？越权？', colors.yellow],
	['ITERATION 2', '来源引用 + 反馈', 'Builder + Verifier + Review', 'PO 确认可解释标准', '来源可信？', colors.blue],
	['ITERATION 3', '权限扩展 + 试点', 'Planner + Security + Support', '业务负责人 Go / No-Go', '可采用？可支持？', colors.green],
];

export default function S33b_AgenticThreeIterations() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>微软产品组 · 三轮受控发布</Tag>
		<Title size="48px" style={{ margin: '14px 0 22px' }}>每轮只扩大一种能力</Title>
		<Grid cols={3} gap={18}>{iterations.map(([iteration, increment, agents, gate, feedback, color], index) => <motion.div key={iteration} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.16 }}><Card bg={color} style={{ minHeight: 295, padding: 18 }}><h3 style={{ fontSize: 21 }}>{iteration}</h3><p style={{ fontSize: 21, fontWeight: 900, margin: '16px 0' }}>{increment}</p><p style={{ fontSize: 15 }}><strong>Agents：</strong>{agents}</p><p style={{ fontSize: 15, marginTop: 12 }}><strong>Human Gate：</strong>{gate}</p><p style={{ fontSize: 15, marginTop: 12 }}><strong>Review：</strong>{feedback}</p></Card></motion.div>)}</Grid>
		<p style={{ fontSize: 19, fontWeight: 900, marginTop: 22 }}>人工关口决定数据、权限和试点范围是否扩大。</p>
	</Inner></Slide>;
}
