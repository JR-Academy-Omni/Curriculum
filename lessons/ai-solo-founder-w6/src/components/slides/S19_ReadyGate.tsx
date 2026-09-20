import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border, shadowSm, fonts } from '../ui';

const levels = [
	['PROGRAM · 计划', '核心系统分阶段迁移到 Azure', colors.red, 320],
	['EPIC · 项目群', '完成首批分支机构迁移', colors.yellow, 590],
	['FEATURE · 交付流', '客户与账户数据可安全迁移', colors.blue, 860],
	['TASK · 可执行任务', '完成首批字段映射并由业务确认', colors.green, 1130],
];

export default function S19_ReadyGate() {
	return <Slide bg={colors.white}><Inner style={{ position: 'relative', flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.green}>MICROSOFT AZURE BOARDS · WORK ITEM HIERARCHY</Tag><Title size="49px" style={{ margin: '14px 0 28px' }}>从项目到任务：每向下一层，就更接近执行</Title><div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>{levels.map(([label, body, color, width], index) => <motion.div key={label} initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width }} transition={{ delay: 0.15 + index * 0.15, duration: 0.45 }} style={{ background: color, border, boxShadow: shadowSm, minHeight: 82, padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}><strong style={{ fontFamily: fonts.mono, fontSize: 14, whiteSpace: 'nowrap' }}>{label}</strong><span style={{ fontSize: 19, fontWeight: 800, textAlign: 'right' }}>{body}</span></motion.div>)}</div><p style={{ marginTop: 27, fontSize: 18, fontWeight: 900 }}>不能直接执行的“大词”，继续往下拆。</p></Inner></Slide>;
}