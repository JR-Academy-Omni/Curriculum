import { Frame, Panel, SoftNode, NumberBadge, Takeaway, colors } from './DeckPrimitives';

const steps = ['低风险流程', '明确资料', '保留轨迹', '人工审核', '受控扩大'];
export default function Slide13() {
  return <Frame page={13} tag="START SMALL" title={<>不要从“自动给答案”开始，<br />要从“自动找问题”开始</>} subtitle="建立边界、轨迹与人工审核 Gate。" titleSize={48}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18 }}>{steps.map((text, i) => <SoftNode key={text} accent={i === 3 ? colors.red : colors.yellow} style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center', textAlign: 'center', padding: '19px 10px' }}><NumberBadge bg={i === 3 ? colors.red : colors.yellow}>{i + 1}</NumberBadge><h2 style={{ fontSize: 25 }}>{text}</h2></SoftNode>)}</div>
    <Panel style={{ marginTop: 7, padding: '22px 28px' }}><h2 style={{ fontSize: 26, marginBottom: 17 }}>适合先试行</h2><p style={{ fontSize: 25, lineHeight: 1.6 }}>文件整理　 ·　 交易初分　 ·　 缺失清单<br />月度异常　 ·　 BAS与GL初核</p></Panel>
    <Takeaway size={23}>先把异常交给人工，再受控扩大使用范围。</Takeaway>
  </Frame>;
}
