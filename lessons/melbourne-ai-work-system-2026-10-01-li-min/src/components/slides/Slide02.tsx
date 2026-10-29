import { Frame, BodyGrid, ListPanel, Takeaway, colors } from './DeckPrimitives';

export default function Slide02() {
  return <Frame page={2} tag="PAIN POINT" title="客户要的是结果，会计师承担的是过程" subtitle="一份看似简单的报表，背后是一整套核对、判断与责任。" titleSize={52}>
    <BodyGrid>
      <ListPanel title="客户希望得到" items={['价格合理', '账目正确', '税务合规', '报表及时', '建议到位']} />
      <ListPanel title="会计师必须完成" accent={colors.blue} items={['资料完整性', '银行与总账核对', '交易与 GST 分类', '工资与 Super 检查', '证据与最终审核']} />
    </BodyGrid>
    <Takeaway size={24}>客户购买最终结果，会计师投入过程成本。<br />客户很难看见核对工作，但错误责任仍由专业人士承担。</Takeaway>
  </Frame>;
}
