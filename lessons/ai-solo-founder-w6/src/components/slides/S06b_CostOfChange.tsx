import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border, shadowSm } from '../ui';

const waterfall = [90, 150, 230, 330];
const agile = [90, 105, 120, 135];
const stages = ['需求', '设计', '开发', '上线后'];

export default function S06b_CostOfChange() {
	const Bars = ({ data, color, label }: { data: number[]; color: string; label: string }) => <div style={{ flex: 1 }}><strong style={{ display: 'block', marginBottom: 12, fontSize: 19 }}>{label}</strong><div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 340, borderBottom: border, borderLeft: border, padding: '0 14px' }}>{data.map((height, index) => <motion.div key={stages[index]} initial={{ height: 0 }} animate={{ height }} transition={{ delay: 0.2 + index * 0.12, duration: 0.5 }} style={{ flex: 1, background: color, border, boxShadow: shadowSm, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 8, fontSize: 14, fontWeight: 900 }}>{stages[index]}</motion.div>)}</div></div>;
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>WHY · 变更成本</Tag>
		<Title size="50px" style={{ margin: '14px 0 10px' }}>同一个错误，发现得越晚越贵</Title>
		<p style={{ fontSize: 18, marginBottom: 22 }}>示意图，说明趋势，非实测数据。</p>
		<div style={{ display: 'flex', gap: 46, width: '100%' }}><Bars data={waterfall} color={colors.red} label="长周期：错误累积到后期" /><Bars data={agile} color={colors.green} label="短循环：每轮都清理错误" /></div>
		<p style={{ fontSize: 20, fontWeight: 900, marginTop: 24 }}>Agile 省的不是开发时间，而是返工和错误方向的成本。</p>
	</Inner></Slide>;
}
