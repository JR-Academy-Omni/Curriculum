import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border, shadowSm } from '../ui';

const cells = [
	['单项任务', '低依赖 · 短周期', '更新活动报名页日期', colors.green],
	['团队项目', '多人协作 · 有明确交付', '举办一场线下 Demo Day', colors.yellow],
	['公司级项目', '跨部门 · 高风险 · 多阶段', '进入新市场并建立交付体系', colors.red],
];

export default function S18_WorkHierarchy() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>先判断：这到底有多大？</Tag><Title size="50px" style={{ margin: '14px 0 18px' }}>项目大小，不由标题决定</Title><div style={{ position: 'relative', width: '100%', height: 380, borderLeft: border, borderBottom: border, padding: '24px 26px 32px 42px' }}><span style={{ position: 'absolute', left: -78, top: 145, transform: 'rotate(-90deg)', fontWeight: 900 }}>周期与风险 ↑</span><span style={{ position: 'absolute', right: 0, bottom: -30, fontWeight: 900 }}>参与者与依赖 →</span><div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1fr 1.2fr', alignItems: 'end', gap: 22, height: '100%' }}>{cells.map(([title, meta, example, color], index) => <motion.div key={title} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 + index * 0.16 }} style={{ height: 150 + index * 70, background: color, border, boxShadow: shadowSm, padding: 18 }}><h3 style={{ fontSize: 25 }}>{title}</h3><strong style={{ display: 'block', margin: '12px 0', fontSize: 15 }}>{meta}</strong><p style={{ fontSize: 17 }}>{example}</p></motion.div>)}</div></div><p style={{ marginTop: 38, fontSize: 20, fontWeight: 900 }}>只要跨多人、跨时间、有依赖和风险，就要按项目管理。</p></Inner></Slide>;
}