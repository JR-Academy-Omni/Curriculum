import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border } from '../ui';

const lanes = [
	['采购', ['供应商主数据', '采购申请', '采购订单'], colors.red],
	['仓储', ['到货登记', '库存可见', '出入库校验'], colors.blue],
	['生产', ['需求计划', '物料齐套', '生产排程'], colors.green],
	['财务', ['成本口径', '应付匹配', '月末切账'], colors.yellow],
] as const;

export default function S25b_SupplyChainSwimlanes() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>CASE MAP · 某制造企业供应链系统部署</Tag>
		<Title size="49px" style={{ margin: '14px 0 20px' }}>四个部门不是四个项目：价值流必须端到端贯通</Title>
		<div style={{ width: '100%', border, background: colors.white }}>{lanes.map(([owner, tasks, color], laneIndex) => <div key={owner} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', borderBottom: laneIndex < lanes.length - 1 ? border : undefined, minHeight: 90 }}><div style={{ background: color, borderRight: border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 21, fontWeight: 900 }}>{owner}</div><div style={{ display: 'flex', alignItems: 'center', padding: '12px 20px' }}>{tasks.map((task, index) => <div key={task} style={{ display: 'flex', alignItems: 'center', flex: 1 }}><motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + laneIndex * 0.1 + index * 0.08 }} style={{ flex: 1, padding: '12px 8px', border, background: colors.warmBg, textAlign: 'center', fontSize: 16, fontWeight: 800 }}>{task}</motion.div>{index < 2 && <span style={{ padding: '0 8px', fontWeight: 900 }}>→</span>}</div>)}</div></div>)}</div>
		<p style={{ fontSize: 19, fontWeight: 900, marginTop: 20 }}>上线窗口固定；主数据、库存和财务切账形成跨泳道依赖。</p>
	</Inner></Slide>;
}
