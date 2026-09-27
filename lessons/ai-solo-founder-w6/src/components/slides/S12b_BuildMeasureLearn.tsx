import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border, shadowSm } from '../ui';

const loop = [
	['BUILD', '做最小可验证版本', colors.yellow],
	['MEASURE', '收集行为与反馈证据', colors.blue],
	['LEARN', '坚持、调整或停止', colors.green],
];

export default function S12b_BuildMeasureLearn() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.green}>LEAN STARTUP · BUILD–MEASURE–LEARN</Tag>
		<Title size="52px" style={{ margin: '15px 0 28px' }}>项目不是把想法做完，而是把关键假设做实</Title>
		<div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>{loop.map(([name, body, color], index) => <div key={name} style={{ display: 'flex', alignItems: 'center', flex: 1 }}><motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 + index * 0.18 }} style={{ flex: 1, minHeight: 180, padding: 24, background: color, border, boxShadow: shadowSm }}><h3 style={{ fontSize: 30 }}>{name}</h3><p style={{ fontSize: 20, fontWeight: 800, marginTop: 22, lineHeight: 1.45 }}>{body}</p></motion.div><span style={{ fontSize: 34, fontWeight: 900, padding: '0 18px' }}>{index < loop.length - 1 ? '→' : '↩'}</span></div>)}</div>
		<p style={{ fontSize: 20, fontWeight: 900, marginTop: 30 }}>OKR 定方向 · Shape Up 定投入边界 · Lean Startup 验证假设。</p>
	</Inner></Slide>;
}
