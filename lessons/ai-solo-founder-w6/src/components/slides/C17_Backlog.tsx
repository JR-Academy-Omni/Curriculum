import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const brief = [
	['背景', '多家分支机构仍跑在老旧核心系统上，变更慢、风险集中', colors.red],
	['目标', '首批分支机构安全切换到云端，核心业务不中断', colors.yellow],
	['约束', '监管合规不可妥协，切换窗口在夜间且可回滚', colors.blue],
	['成功标准', '关键交易可对账，业务方签核，回滚演练通过', colors.green],
];

export default function C17_Backlog() {
	return <Slide bg={colors.darkBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.blue}>PART 3 · CASE 1 · 某银行核心系统上云</Tag><Title white size="52px" style={{ margin: '16px 0 26px' }}>大项目不是一个大任务，而是一组相互依赖的交付流</Title><Grid cols={4} gap={16}>{brief.map(([title, body, color], index) => <motion.div key={title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.13 }}><CardSm bg={color} style={{ minHeight: 190 }}><h3 style={{ fontSize: 23 }}>{title}</h3><p style={{ fontSize: 17, lineHeight: 1.5, marginTop: 16 }}>{body}</p></CardSm></motion.div>)}</Grid><p style={{ color: colors.white, fontSize: 20, marginTop: 26 }}>本案例回答：这么大的项目，第一刀从哪里下？</p></Inner></Slide>;
}