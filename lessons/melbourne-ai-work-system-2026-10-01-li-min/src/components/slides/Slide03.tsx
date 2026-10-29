import { Frame, SoftNode, Takeaway, colors } from './DeckPrimitives';

export default function Slide03() {
  return <Frame page={3} tag="THE TENSION" title="价格、质量与时间：传统模式的三角矛盾" subtitle="收费通常取决于工作量、复杂程度与时间投入。" titleSize={52}>
    <div style={{ position: 'relative', flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: '1fr 0.85fr 1fr', gridTemplateRows: '1fr 1fr', gap: 22, alignItems: 'center' }}>
      <SoftNode accent={colors.red} style={{ gridColumn: '2', gridRow: '1', textAlign: 'center' }}><h2 style={{ fontSize: 38, color: colors.red }}>价廉</h2><p style={{ fontSize: 25, marginTop: 12 }}>客户希望收费更低</p></SoftNode>
      <SoftNode accent={colors.blue} style={{ gridColumn: '1', gridRow: '2', textAlign: 'center' }}><h2 style={{ fontSize: 38 }}>物美</h2><p style={{ fontSize: 25, marginTop: 12 }}>正确、合规、可追溯</p></SoftNode>
      <div style={{ gridColumn: '2', gridRow: '2', textAlign: 'center', fontSize: 52, color: colors.red }}>↔</div>
      <SoftNode style={{ gridColumn: '3', gridRow: '2', textAlign: 'center' }}><h2 style={{ fontSize: 38 }}>时间</h2><p style={{ fontSize: 25, marginTop: 12 }}>核对、调查、判断<br />都需要时间</p></SoftNode>
    </div>
    <Takeaway>当收费被压低但流程没有改善，<br />最容易减少的是客户看不见的检查。</Takeaway>
  </Frame>;
}
