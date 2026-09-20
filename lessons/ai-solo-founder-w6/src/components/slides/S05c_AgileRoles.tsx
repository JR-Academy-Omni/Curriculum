import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, Card, Tag, colors } from '../ui';

const roles = [
	['Product Owner', '价值与优先级', '决定做什么、为何做；维护 Backlog；接受业务结果', colors.red],
	['Scrum Master', '流程健康', '促进协作、暴露阻塞、帮助团队改进；不指挥任务', colors.yellow],
	['Delivery Team', '实现与质量', '决定如何实现；承诺容量；对可用增量和 DoD 负责', colors.blue],
	['Stakeholders', '业务反馈', '在 Review 检查价值、约束和变化；不遥控 Sprint', colors.green],
];

export default function S05c_AgileRoles() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>ROLES = ACCOUNTABILITY · 不是职位等级</Tag>
		<Title size="49px" style={{ margin: '14px 0 24px' }}>每个角色都必须有清楚的“谁最终说了算”</Title>
		<Grid cols={4} gap={15}>{roles.map(([role, owns, body, color], index) => <motion.div key={role} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.14 }}><Card bg={color} style={{ minHeight: 230, padding: 18 }}><h3 style={{ fontSize: 22 }}>{role}</h3><strong style={{ display: 'block', fontSize: 17, margin: '16px 0' }}>负责：{owns}</strong><p style={{ fontSize: 16, lineHeight: 1.5 }}>{body}</p></Card></motion.div>)}</Grid>
		<p style={{ fontSize: 19, fontWeight: 900, marginTop: 24 }}>PO 是一个 accountability；团队自管理；相关方通过 Review 影响下一轮。</p>
	</Inner></Slide>;
}
