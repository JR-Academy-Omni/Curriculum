import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

export default function S22_Premortem() {
	const tasks = ['冻结目标模型', '完成字段映射', '清洗异常数据', '执行试迁移', '业务对账签核'];
	return <Slide bg={colors.red}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.dark}>ZOOM IN · 数据迁移依赖链</Tag><Title size="50px" style={{ margin: '14px 0 24px' }}>一个交付流，再拆成有顺序的小批量</Title><Grid cols={5} gap={12}>{tasks.map((task, index) => <div key={task} style={{ display: 'flex', alignItems: 'center' }}><motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + index * 0.13 }} style={{ width: '100%' }}><CardSm bg={index === 3 ? colors.green : colors.white} style={{ minHeight: 150 }}><strong style={{ fontSize: 15 }}>0{index + 1}</strong><p style={{ fontSize: 20, fontWeight: 900, marginTop: 22, lineHeight: 1.35 }}>{task}</p></CardSm></motion.div>{index < tasks.length - 1 && <span style={{ fontSize: 24, fontWeight: 900, padding: '0 4px' }}>→</span>}</div>)}</Grid><p style={{ fontSize: 20, fontWeight: 900, marginTop: 28 }}>依赖决定顺序；每次试迁移都产出下一轮要修正的证据。</p></Inner></Slide>;
}