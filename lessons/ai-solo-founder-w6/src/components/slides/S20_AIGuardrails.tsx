import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const fields = [['动作', '完成字段映射'], ['负责人', '数据迁移负责人'], ['产出', '客户主数据映射表'], ['截止', '本 Sprint 第 4 天'], ['验收', '业务与安全双签核'], ['依赖', '目标数据模型冻结']];

export default function S20_AIGuardrails() {
	return <Slide bg={colors.yellow}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>EXECUTABLE TASK CARD</Tag><Title size="50px" style={{ margin: '14px 0 22px' }}>好任务让跨团队接手时不用再猜</Title><motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} style={{ width: '100%', background: colors.white, padding: 22, border: `4px solid ${colors.black}` }}><h3 style={{ fontSize: 26, marginBottom: 18 }}>完成客户主数据字段映射</h3><Grid cols={3} gap={13}>{fields.map(([title, body], index) => <CardSm key={title} bg={index === 4 ? colors.green : colors.warmBg} style={{ minHeight: 102 }}><strong style={{ fontSize: 15 }}>{title}</strong><p style={{ fontSize: 17, lineHeight: 1.35, marginTop: 10 }}>{body}</p></CardSm>)}</Grid></motion.div><p style={{ fontSize: 20, fontWeight: 900, marginTop: 22 }}>公式：动词 + 唯一负责人 + 明确产出 + 截止时间 + 验收条件 + 依赖</p></Inner></Slide>;
}