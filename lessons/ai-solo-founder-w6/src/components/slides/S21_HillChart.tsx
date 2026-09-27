import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const streams = [
	['云基础', '网络 · 身份 · 环境', colors.red],
	['应用改造', '接口 · 配置 · 性能', colors.yellow],
	['数据迁移', '映射 · 清洗 · 切换', colors.blue],
	['安全合规', '控制 · 审计 · 签核', colors.green],
	['业务验证', 'UAT · 演练 · 验收', colors.purple],
];

export default function S21_HillChart() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.purple}>WORK BREAKDOWN STRUCTURE</Tag><Title size="49px" style={{ margin: '14px 0 22px' }}>先按可验收交付流拆，不按部门罗列</Title><motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} style={{ alignSelf: 'center', padding: '13px 32px', background: colors.dark, color: colors.white, fontSize: 22, fontWeight: 900 }}>目标：首批分支机构安全切换，核心业务不中断</motion.div><div style={{ fontSize: 32, fontWeight: 900, alignSelf: 'center', height: 40 }}>↓</div><Grid cols={5} gap={13}>{streams.map(([title, body, color], index) => <motion.div key={title} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + index * 0.12 }}><CardSm bg={color} style={{ minHeight: 155 }}><h3 style={{ fontSize: 21 }}>{title}</h3><p style={{ fontSize: 17, marginTop: 16, lineHeight: 1.5 }}>{body}</p></CardSm></motion.div>)}</Grid><p style={{ marginTop: 25, fontSize: 19, fontWeight: 900 }}>培训与变更管理横跨所有交付流，不是最后才做的一张清单。</p></Inner></Slide>;
}