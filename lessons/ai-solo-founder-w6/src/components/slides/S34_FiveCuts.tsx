import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, border } from '../ui';

const lanes = [
	['产品组', ['定义试点', '选择能力', '收集反馈'], colors.red],
	['工程组', ['接入数据', '实现问答', '修复阻塞'], colors.blue],
	['安全法务', ['威胁建模', '隐私与权限评审', '发布签核'], colors.green],
];

export default function S34_FiveCuts() {
	return <Slide bg={colors.yellow}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>微软产品组 · 跨团队发布流</Tag><Title size="49px" style={{ margin: '14px 0 20px' }}>责任分开，依赖连起来</Title><div style={{ width: '100%', border, background: colors.white }}>{lanes.map(([owner, tasks, color], laneIndex) => <div key={owner as string} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', borderBottom: laneIndex < lanes.length - 1 ? border : undefined, minHeight: 112 }}><div style={{ background: color as string, borderRight: border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 21, fontWeight: 900 }}>{owner as string}</div><div style={{ display: 'flex', alignItems: 'center', padding: '14px 20px' }}>{(tasks as string[]).map((task, index) => <div key={task} style={{ display: 'flex', alignItems: 'center', flex: 1 }}><motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + laneIndex * 0.12 + index * 0.1 }} style={{ flex: 1, padding: '13px 9px', border, background: colors.warmBg, textAlign: 'center', fontSize: 16, fontWeight: 800 }}>{task}</motion.div>{index < 2 && <span style={{ padding: '0 8px', fontWeight: 900 }}>→</span>}</div>)}</div></div>)}</div><p style={{ fontSize: 19, fontWeight: 900, marginTop: 20 }}>试点反馈回到产品与安全决策。</p></Inner></Slide>;
}