import { Slide, Inner, Title, Grid, CardSm, Tag, colors, border } from '../ui';

const outcome = [['收益', '核心价值流可运行且可对账', colors.green], ['风险', '主数据质量与用户习惯回退', colors.red], ['下一步', '稳定两周后再开预测与报表', colors.yellow]];

const keep = ['关键采购订单可完整流转', '库存数量与抽样实物一致', '财务可完成核心对账', '关键用户完成演练并签核'];
const later = ['自动需求预测', '全量历史数据', '高级分析模型', '移动端优化', '管理驾驶舱'];

export default function S31_PrioritizedBacklog() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.green}>CASE 2 · TRIM RESULT</Tag><Title size="50px" style={{ margin: '14px 0 24px' }}>首期不是“少做一点”，而是保护最小完整价值流</Title><Grid cols={2} gap={24}><CardSm bg={colors.green}><h3 style={{ fontSize: 26, marginBottom: 10 }}>上线必须拿到的证据</h3>{keep.map((item, index) => <p key={item} style={{ fontSize: 18, fontWeight: 800, margin: '11px 0' }}>{index + 1}. {item}</p>)}</CardSm><CardSm bg={colors.white}><h3 style={{ fontSize: 26, marginBottom: 10 }}>后移但不遗忘</h3>{later.map(item => <p key={item} style={{ fontSize: 18, margin: '11px 0', textDecoration: 'line-through' }}>{item}</p>)}</CardSm></Grid><div style={{ display: 'flex', gap: 14, marginTop: 22, width: '100%' }}>{outcome.map(([title, body, color]) => <div key={title} style={{ flex: 1, border, background: color, padding: '12px 16px' }}><strong style={{ fontSize: 15 }}>{title}</strong><p style={{ fontSize: 16, fontWeight: 800, marginTop: 8 }}>{body}</p></div>)}</div></Inner></Slide>;
}