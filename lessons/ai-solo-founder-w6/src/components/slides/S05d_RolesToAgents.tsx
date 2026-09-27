import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border } from '../ui';

const mappings = [
	['PO', 'Product Agent', '聚合反馈、草拟 Backlog、比较价值/投入', '人决定优先级与 Go / No-Go', colors.red],
	['Scrum Master', 'Flow Agent', '汇总站会、发现阻塞、分析 WIP 与等待', '人决定流程改变与升级', colors.yellow],
	['Delivery Team', 'Builder + Test Agents', '草拟实现、生成测试、运行检查、整理文档', '人审批方案、代码合并与容量', colors.blue],
	['Stakeholders', 'Review Agent', '汇总验收证据、风险和反馈主题', '人判断价值并最终验收', colors.green],
];

export default function S05d_RolesToAgents() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.purple}>HUMAN ROLE → AI AGENT</Tag>
		<Title size="47px" style={{ margin: '14px 0 20px' }}>Agent 扩展角色能力，不继承角色责任</Title>
		<div style={{ width: '100%', border }}>{mappings.map(([human, agent, work, gate, color], index) => <motion.div key={human} initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.13 }} style={{ display: 'grid', gridTemplateColumns: '170px 220px 1fr 1fr', borderBottom: index < mappings.length - 1 ? border : undefined, minHeight: 92 }}><div style={{ background: color, borderRight: border, padding: 16, fontWeight: 900 }}>{human}</div><div style={{ borderRight: border, padding: 16, fontWeight: 900 }}>{agent}</div><div style={{ borderRight: border, padding: 16, fontSize: 16 }}>{work}</div><div style={{ padding: 16, fontSize: 16, fontWeight: 900 }}>{gate}</div></motion.div>)}</div>
		<p style={{ fontSize: 19, fontWeight: 900, marginTop: 22 }}>红线：优先级、容量、架构、合并、发布、风险接受与验收，必须由人负责。</p>
	</Inner></Slide>;
}
