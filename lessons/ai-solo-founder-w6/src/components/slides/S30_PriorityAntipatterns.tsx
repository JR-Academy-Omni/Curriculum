import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const traps = ['库存实时可见', '采购到货核心流程', '基础财务对账', '自动需求预测', '全量十年历史数据', '高级管理驾驶舱'];

export default function S30_PriorityAntipatterns() {
	return <Slide bg={colors.white}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.red}>TRIM · FIXED WINDOW, VARIABLE SCOPE</Tag><Title size="51px" style={{ margin: '15px 0 24px' }}>上线窗口不变，范围必须能变</Title><Grid cols={3} gap={15}>{traps.map((trap, index) => <CardSm key={trap} bg={index < 3 ? colors.green : colors.warmBg} style={{ minHeight: 105 }}><strong style={{ fontSize: 14 }}>{index < 3 ? 'MUST · 首期' : index === 3 ? 'SHOULD · 有余力' : 'LATER · 后续'}</strong><p style={{ fontSize: 19, fontWeight: 900, marginTop: 12 }}>{trap}</p></CardSm>)}</Grid><p style={{ fontSize: 20, marginTop: 22, fontWeight: 900 }}>Trim 功能，不 Trim 数据正确性、安全、回滚和核心流程。</p></Inner></Slide>;
}