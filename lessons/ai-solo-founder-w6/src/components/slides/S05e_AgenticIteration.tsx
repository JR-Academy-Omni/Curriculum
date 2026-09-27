import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border, shadowSm } from '../ui';

const flow = [
	['TRIGGER', '新需求 / 反馈 / 阻塞', colors.red],
	['PLANNER', '分解目标、选择 agents', colors.yellow],
	['SPECIALISTS', '研究 · 构建 · 测试并行', colors.blue],
	['VERIFIER', '检查 DoD、风险与证据', colors.purple],
	['HUMAN GATE', '批准 / 退回 / 停止', colors.green],
	['SYSTEM OF RECORD', '回写 Azure Boards', colors.orange],
];

export default function S05e_AgenticIteration() {
	return <Slide bg={colors.darkBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.green} color={colors.black}>AGENTIC ITERATION · 编排，不是放任</Tag>
		<Title white size="49px" style={{ margin: '14px 0 24px' }}>Agent 自主执行小循环，人控制高影响关口</Title>
		<div style={{ display: 'flex', alignItems: 'stretch', width: '100%' }}>{flow.map(([title, body, color], index) => <div key={title} style={{ display: 'flex', alignItems: 'center', flex: 1 }}><motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.12 }} style={{ flex: 1, minHeight: 160, padding: 14, background: color, border, boxShadow: shadowSm }}><h3 style={{ fontSize: 17 }}>{title}</h3><p style={{ fontSize: 16, lineHeight: 1.45, marginTop: 20, fontWeight: 800 }}>{body}</p></motion.div>{index < flow.length - 1 && <span style={{ color: colors.white, padding: '0 6px', fontSize: 24, fontWeight: 900 }}>→</span>}</div>)}</div>
		<div style={{ marginTop: 25, padding: '14px 20px', width: '100%', border, background: colors.white, textAlign: 'center', fontSize: 18, fontWeight: 900 }}>Review 反馈 ↩ 下一轮 Trigger · 全程记录输入、输出、工具调用与审批</div>
	</Inner></Slide>;
}
