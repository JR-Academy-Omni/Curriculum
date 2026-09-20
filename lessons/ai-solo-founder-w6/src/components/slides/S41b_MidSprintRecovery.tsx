import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const decisions = [
	['1', '保护核心目标', '保留可信问答', colors.red],
	['2', '解除权限阻塞', '安全评审优先', colors.yellow],
	['3', 'Trim 非核心项', '后移长报告与多语言', colors.blue],
	['4', '重新协商', '缩小本轮试点范围', colors.green],
];

export default function S41b_MidSprintRecovery() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.orange}>微软产品组 · 周三落后</Tag>
		<Title size="50px" style={{ margin: '15px 0 24px' }}>不加功能，先救回 Sprint Goal</Title>
		<Grid cols={4} gap={15}>{decisions.map(([number, title, action, color], index) => <motion.div key={number} initial={{ opacity: 0, y: -22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15 }}><CardSm bg={color} style={{ minHeight: 190 }}><div style={{ fontSize: 38, fontWeight: 900 }}>{number}</div><h3 style={{ fontSize: 21, margin: '10px 0' }}>{title}</h3><p style={{ fontSize: 16, lineHeight: 1.45 }}>{action}</p></CardSm></motion.div>)}</Grid>
		<p style={{ fontSize: 20, fontWeight: 900, marginTop: 26 }}>结果：范围变小，但可信问答仍可进入 Review。</p>
	</Inner></Slide>;
}
