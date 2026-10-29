import { Frame, BodyGrid, Panel, NumberBadge, Takeaway, colors } from './DeckPrimitives';

const gates = [
  ['付款是否发生？', '银行 / receipt / invoice', colors.yellow],
  ['是否用于产生收入？', '业务目的 / 私人比例', colors.blue],
  ['税务处理是否正确？', '扣除 / 折旧 / GST / withholding', colors.green],
] as const;
export default function Slide09() {
  return <Frame page={9} tag="CASE 2" title="有付款、有收据，也不等于可以全部扣税" subtitle="费用要通过三道门：发生、业务目的、税务处理。" titleSize={51}>
    <BodyGrid columns="1fr 1fr 1fr" style={{ alignItems: 'center' }}>
      {gates.map(([title, detail, accent], i) => <Panel key={title} style={{ height: 282, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: `9px 9px 0 ${accent}` }}><NumberBadge bg={accent}>{i + 1}</NumberBadge><h2 style={{ fontSize: 30, lineHeight: 1.3 }}>{title}</h2><p style={{ fontSize: 24, lineHeight: 1.45 }}>{detail}</p></Panel>)}
    </BodyGrid>
    <Takeaway>AI可以计算95%，但不能自己创造95%的事实依据。</Takeaway>
  </Frame>;
}
