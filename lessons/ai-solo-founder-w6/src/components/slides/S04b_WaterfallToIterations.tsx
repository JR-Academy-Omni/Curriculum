import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border, shadowSm } from '../ui';

const phases = ['需求', '设计', '实现', '测试', '发布'];
const phaseColors = [colors.red, colors.yellow, colors.blue, colors.purple, colors.green];

export default function S04b_WaterfallToIterations() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>WATERFALL → AGILE</Tag>
		<Title size="50px" style={{ margin: '13px 0 18px' }}>不是取消阶段，而是把完整链路切进每个 Iteration</Title>
		<div style={{ width: '100%' }}>
			<strong style={{ display: 'block', marginBottom: 10 }}>Waterfall · 一次走完，最后才得到反馈</strong>
			<div style={{ display: 'flex', alignItems: 'center' }}>{phases.map((phase, index) => <div key={phase} style={{ display: 'flex', alignItems: 'center', flex: 1 }}><motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} style={{ flex: 1, padding: 14, background: phaseColors[index], border, boxShadow: shadowSm, textAlign: 'center', fontSize: 18, fontWeight: 900 }}>{phase}</motion.div>{index < phases.length - 1 && <span style={{ padding: '0 8px', fontSize: 24, fontWeight: 900 }}>→</span>}</div>)}</div>
		</div>
		<div style={{ width: '100%', marginTop: 25 }}>
			<strong style={{ display: 'block', marginBottom: 10 }}>Agile · 每轮都走端到端，并交付可检查增量</strong>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>{[1, 2, 3].map((iteration, iterationIndex) => <motion.div key={iteration} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + iterationIndex * 0.15 }} style={{ border, background: colors.white, padding: 12 }}><div style={{ fontSize: 18, fontWeight: 900, marginBottom: 10 }}>ITERATION {iteration}</div><div style={{ display: 'flex', gap: 5 }}>{phases.map((phase, phaseIndex) => <div key={phase} style={{ flex: 1, minWidth: 0, padding: '10px 3px', background: phaseColors[phaseIndex], border, textAlign: 'center', fontSize: 13, fontWeight: 900 }}>{phase}</div>)}</div><p style={{ fontSize: 15, fontWeight: 800, marginTop: 10 }}>可用增量 + 反馈 →</p></motion.div>)}</div>
		</div>
		<p style={{ fontSize: 19, fontWeight: 900, marginTop: 22 }}>反馈从项目末尾，前移到每一个短循环。</p>
	</Inner></Slide>;
}
