import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const tools = [
	['方向', 'OKR / Outcome：为什么现在做', colors.red],
	['边界', 'Shape Up：投入多少、什么不做', colors.yellow],
	['验证', 'Lean Startup：关键假设是否成立', colors.green],
	['交付', 'Scrum / Kanban：如何让工作流动', colors.blue],
	['学习', 'Review / Retro：证据如何改变下一轮', colors.purple],
];

export default function S44_HumanAIBoundary() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>METHOD SELECTION MAP</Tag><Title size="51px" style={{ margin: '15px 0 24px' }}>不要用一个框架解决所有管理问题</Title><Grid cols={5} gap={13}>{tools.map(([title, body, color], index) => <motion.div key={title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.12 }}><CardSm bg={color} style={{ minHeight: 175 }}><h3 style={{ fontSize: 22 }}>{title}</h3><p style={{ fontSize: 16, lineHeight: 1.5, marginTop: 18 }}>{body}</p></CardSm></motion.div>)}</Grid><p style={{ fontSize: 19, fontWeight: 900, marginTop: 25 }}>方法可以组合，但每一层必须回答不同的问题。</p></Inner></Slide>;
}