import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

const encourage = ['小批量交付，尽早拿到反馈', '一项任务一个负责人', '写下可被他人验证的验收条件', '让阻塞公开可见', '范围可变，质量底线不变'];
const avoid = ['一次规划全部再开工', '所有事项都标成最高优先级', '用“差不多完成了”汇报进度', '同时开工过多、无一收尾', '为赶期限降低质量与安全'];

export default function S07c_DoDont() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>DO / DON&apos;T</Tag>
		<Title size="52px" style={{ margin: '15px 0 26px' }}>鼓励什么，避免什么</Title>
		<Grid cols={2} gap={30}>
			<motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }}><Card bg={colors.green} style={{ minHeight: 340 }}><h3 style={{ fontSize: 30, marginBottom: 18 }}>鼓励</h3>{encourage.map(item => <p key={item} style={{ fontSize: 19, fontWeight: 800, margin: '13px 0' }}>✓ {item}</p>)}</Card></motion.div>
			<motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18 }}><Card bg={colors.red} style={{ minHeight: 340 }}><h3 style={{ fontSize: 30, marginBottom: 18 }}>避免</h3>{avoid.map(item => <p key={item} style={{ fontSize: 19, fontWeight: 800, margin: '13px 0' }}>✕ {item}</p>)}</Card></motion.div>
		</Grid>
	</Inner></Slide>;
}
