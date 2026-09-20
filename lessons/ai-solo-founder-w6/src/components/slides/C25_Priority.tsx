import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const brief = [
	['背景', '采购、仓储、生产、财务各用一套流程，库存口径长期不一致', colors.red],
	['目标', '打通采购到库存的端到端价值流，并能对账', colors.yellow],
	['约束', '上线窗口由财务期间决定，日期不可移动', colors.blue],
	['成功标准', '核心流程可运行、可对账、可回退，关键用户完成演练', colors.green],
];

export default function C25_Priority() {
	return <Slide bg={colors.darkBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.red}>PART 3 · CASE 2 · 某制造企业供应链部署</Tag><Title white size="52px" style={{ margin: '16px 0 26px' }}>上线日期不动，就必须敢于 Trim 范围</Title><Grid cols={4} gap={16}>{brief.map(([title, body, color], index) => <motion.div key={title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.13 }}><CardSm bg={color} style={{ minHeight: 190 }}><h3 style={{ fontSize: 23 }}>{title}</h3><p style={{ fontSize: 17, lineHeight: 1.5, marginTop: 16 }}>{body}</p></CardSm></motion.div>)}</Grid><p style={{ color: colors.white, fontSize: 20, marginTop: 26 }}>本案例回答：需求装不下时，砍什么、留什么？</p></Inner></Slide>;
}