import { Frame, BodyGrid, Panel, colors } from './DeckPrimitives';

export default function Slide15() {
  return <Frame page={15} tag="THE OUTCOME" title="真正的“物美价廉”" subtitle="不是减少必要程序，而是用AI保留质量、降低成本、释放专业价值。">
    <BodyGrid columns="1fr 36px 1fr 36px 1fr" gap={14} style={{ flex: '0 0 auto', alignItems: 'center' }}>
      <Panel style={{ padding: '23px 24px', minHeight: 144 }}><p style={{ fontSize: 27, lineHeight: 1.45 }}>AI帮助我们降低<br /><b>正确工作的成本</b></p></Panel>
      <span style={{ fontSize: 36, textAlign: 'center', color: colors.red }}>×</span>
      <Panel style={{ padding: '23px 24px', minHeight: 144 }}><p style={{ fontSize: 27, lineHeight: 1.45 }}>会计师负责把数据<br /><b>变成判断和建议</b></p></Panel>
      <span style={{ fontSize: 36, textAlign: 'center', color: colors.red }}>=</span>
      <Panel bg={colors.yellow} style={{ padding: '23px 24px', minHeight: 144, boxShadow: `9px 9px 0 ${colors.blue}` }}><p style={{ fontSize: 27, lineHeight: 1.45 }}>客户得到真正<br /><b>物美价廉的服务</b></p></Panel>
    </BodyGrid>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 30 }}>
      <div style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.6 }}>让AI处理重复。<br />让会计师负责判断。<br />让老板更早看到风险和机会。</div>
      <div style={{ fontSize: 47, fontWeight: 900, color: colors.red, textAlign: 'right' }}>谢谢大家</div>
    </div>
  </Frame>;
}
