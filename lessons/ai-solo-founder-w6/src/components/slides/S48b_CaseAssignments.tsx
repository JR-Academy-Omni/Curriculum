import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

const setup = [
	['① 一句话目标', '这个项目要为谁带来什么结果？写成可观察的一句话', colors.blue],
	['② 硬约束', '时间、人手、预算、依赖、合规：哪些不可动？', colors.yellow],
	['③ 混乱清单', '把现在想做的 6–8 件事全写下来，先不排序', colors.green],
];

export default function S48b_CaseAssignments() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>WORKSHOP · 用你自己的项目</Tag>
		<Title size="52px" style={{ margin: '15px 0 26px' }}>拿你手上真实在推的项目来做</Title>
		<Grid cols={3} gap={22}>{setup.map(([title, body, color], index) => <motion.div key={title} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + index * 0.15 }}><Card bg={color} style={{ minHeight: 245 }}><h3 style={{ fontSize: 27 }}>{title}</h3><p style={{ fontSize: 18, lineHeight: 1.6, marginTop: 20 }}>{body}</p></Card></motion.div>)}</Grid>
		<p style={{ fontSize: 19, marginTop: 24 }}>手上没有在推的项目？用团队下一件要启动的事，或一件拖很久的事代替。</p>
		<p style={{ fontSize: 20, fontWeight: 900, marginTop: 14 }}>最终汇报：砍了什么？为何先做这些？如何知道完成？</p>
	</Inner></Slide>;
}
