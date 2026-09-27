import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const decisions = [
	['该不该做？', 'Outcome / OKR 对齐', colors.red],
	['给多少投入？', 'Appetite（Shape Up）', colors.yellow],
	['先做哪一个？', '四道门：目标·风险·价值·容量', colors.blue],
	['同层怎么比？', 'RICE 相对评分', colors.green],
	['风险藏在哪？', 'Premortem 事前验尸', colors.purple],
	['做到多少够？', 'Build–Measure–Learn', colors.orange],
	['为什么卡住？', 'Kanban + WIP 限制', colors.red],
	['凭什么算完？', 'Definition of Ready / Done', colors.blue],
];

export default function S07d_DecisionIndex() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>DECISION INDEX · 决策点速查</Tag>
		<Title size="50px" style={{ margin: '14px 0 24px' }}>遇到哪个问题，就用哪个方法</Title>
		<Grid cols={4} gap={15}>{decisions.map(([question, tool, color], index) => <motion.div key={question} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + index * 0.08 }}><CardSm bg={color} style={{ minHeight: 145 }}><h3 style={{ fontSize: 21 }}>{question}</h3><p style={{ fontSize: 16, fontWeight: 800, marginTop: 18, lineHeight: 1.45 }}>{tool}</p></CardSm></motion.div>)}</Grid>
		<p style={{ fontSize: 19, fontWeight: 900, marginTop: 26 }}>接下来的三个案例，会把这八个决策点各用一遍。</p>
	</Inner></Slide>;
}
