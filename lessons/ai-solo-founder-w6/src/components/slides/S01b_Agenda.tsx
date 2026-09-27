import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border, shadowSm, fonts } from '../ui';

const parts = [
	['PART 1', 'Agile 基础', '是什么 · 为什么 · 怎么运转', colors.red],
	['PART 2', '目标与边界', '结果 · 投入 · 取舍', colors.yellow],
	['PART 3', '三个企业案例', '拆解 · 优先级 · 执行', colors.blue],
	['PART 4', '方法提炼', '什么场景用什么方法', colors.green],
	['PART 5', '案例工作坊', '你们来分析与 Trim', colors.purple],
];

export default function S01b_Agenda() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
		<Tag bg={colors.dark}>AGENDA · 90 分钟</Tag>
		<Title size="52px" style={{ margin: '15px 0 30px' }}>今天走这五步</Title>
		<div style={{ display: 'flex', alignItems: 'stretch', width: '100%' }}>{parts.map(([part, title, body, color], index) => <div key={part} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}><motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.13 }} style={{ flex: 1, minHeight: 230, background: color, border, boxShadow: shadowSm, padding: '20px 16px' }}><div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900 }}>{part}</div><h3 style={{ fontSize: 25, margin: '24px 0 14px' }}>{title}</h3><p style={{ fontSize: 16, lineHeight: 1.5 }}>{body}</p></motion.div>{index < parts.length - 1 && <span style={{ fontSize: 28, fontWeight: 900, padding: '0 7px' }}>→</span>}</div>)}</div>
		<p style={{ fontSize: 19, fontWeight: 900, marginTop: 28 }}>前 60 分钟建立方法，最后 30 分钟你们动手。</p>
	</Inner></Slide>;
}
