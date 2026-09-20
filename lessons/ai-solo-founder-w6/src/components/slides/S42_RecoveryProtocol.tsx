import { Slide, Inner, Title, Grid, CardSm, Tag, colors, border } from '../ui';

const outcome = [['收益', '可信问答在受控范围内可用', colors.green], ['风险', '权限扩大后的隐私与支持负荷', colors.red], ['下一步', '按证据逐步扩大数据与用户范围', colors.yellow]];

const steps = [['SELECT', '选择受控试点'], ['DELIVER', '交付可信问答'], ['REVIEW', '用户验证结果'], ['EXPAND', '调整数据与权限范围']];

export default function S42_RecoveryProtocol() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.orange}>微软产品组 · CASE TAKEAWAY</Tag><Title size="54px" style={{ margin: '15px 0 26px' }}>每周用证据扩大能力</Title><Grid cols={4} gap={16}>{steps.map(([title, body], index) => <CardSm key={title} bg={[colors.red, colors.yellow, colors.blue, colors.green][index]} style={{ minHeight: 150 }}><h3 style={{ fontSize: 25 }}>{title}</h3><p style={{ fontSize: 18, marginTop: 20 }}>{body}</p></CardSm>)}</Grid><p style={{ fontSize: 20, fontWeight: 900, marginTop: 22 }}>不是一次开放全部能力，而是逐轮扩大数据、权限和试点范围。</p><div style={{ display: 'flex', gap: 14, marginTop: 20, width: '100%' }}>{outcome.map(([title, body, color]) => <div key={title} style={{ flex: 1, border, background: color, padding: '12px 16px' }}><strong style={{ fontSize: 15 }}>{title}</strong><p style={{ fontSize: 16, fontWeight: 800, marginTop: 8 }}>{body}</p></div>)}</div></Inner></Slide>;
}