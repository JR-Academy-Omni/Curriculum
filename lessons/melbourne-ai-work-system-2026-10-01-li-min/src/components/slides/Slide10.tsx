import { Frame, BodyGrid, Panel, NumberBadge, Takeaway, colors } from './DeckPrimitives';

const checks = ['真实付款', 'Invoice', 'ABN', '服务内容', '客户项目', 'Withholding / Super'];
export default function Slide10() {
  return <Frame page={10} tag="CASE 3" title="“Contractor”只是银行描述，不是税务结论" subtitle="一笔付款，至少检查六件事。" titleSize={49}>
    <BodyGrid columns="0.85fr 1.6fr" gap={40} style={{ alignItems: 'center' }}>
      <Panel bg={colors.yellow} style={{ minHeight: 236, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', boxShadow: `9px 9px 0 ${colors.blue}` }}><span style={{ fontSize: 18, fontWeight: 700, marginBottom: 18 }}>银行交易描述</span><h2 style={{ fontSize: 40, lineHeight: 1.2 }}>Contractor<br />Payment</h2></Panel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '27px 24px' }}>{checks.map((text, i) => <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 27, fontWeight: 700 }}><NumberBadge bg={i % 2 ? colors.blue : colors.yellow}>{i + 1}</NumberBadge><span>{text}</span></div>)}</div>
    </BodyGrid>
    <Takeaway>AI集中列出风险，专业人士根据完整事实作出结论。</Takeaway>
  </Frame>;
}
