import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors, border } from '../ui';

const deliverables = [
	['① 拆解树', '目标 → 3 个交付物 → 每个 2 个任务', colors.yellow],
	['② Trim 板', 'Must / Should / Later 三列并写理由', colors.blue],
	['③ 三张任务卡', '动作 · Owner · 产出 · 截止 · 验收 · 依赖', colors.green],
	['④ 执行安排', 'Sprint Goal + 看板初始状态 + Review 时间', colors.purple],
];

const timeline = ['05 选题与目标', '10 画拆解树', '08 风险与 Trim', '05 写任务卡', '02 准备汇报'];

export default function S48c_WorkshopDeliverables() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>DELIVERABLES · 每组必须交出</Tag>
		<Title size="50px" style={{ margin: '14px 0 22px' }}>四件产出，缺一项就不算完成</Title>
		<Grid cols={4} gap={15}>{deliverables.map(([title, body, color], index) => <motion.div key={title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.12 }}><CardSm bg={color} style={{ minHeight: 160 }}><h3 style={{ fontSize: 22 }}>{title}</h3><p style={{ fontSize: 16, lineHeight: 1.5, marginTop: 16 }}>{body}</p></CardSm></motion.div>)}</Grid>
		<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 26, width: '100%' }}>{timeline.map((step, index) => <div key={step} style={{ display: 'flex', alignItems: 'center', flex: 1 }}><div style={{ flex: 1, padding: '11px 6px', border, background: colors.warmBg, textAlign: 'center', fontSize: 15, fontWeight: 800 }}>{step}</div>{index < timeline.length - 1 && <span style={{ padding: '0 6px', fontWeight: 900 }}>→</span>}</div>)}</div>
		<p style={{ fontSize: 18, fontWeight: 900, marginTop: 20 }}>组内分工：主持 · 记录 · 汇报 · 质疑者（专门问“凭什么算完”）。</p>
	</Inner></Slide>;
}
