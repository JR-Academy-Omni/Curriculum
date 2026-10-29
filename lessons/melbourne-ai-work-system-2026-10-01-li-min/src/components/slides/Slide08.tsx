import { Frame, BodyGrid, Panel, Label, TextList, Takeaway, colors, fonts } from './DeckPrimitives';

const receipts = [['客户付款', '$40,000'], ['股东转入', '$15,000'], ['银行利息', '$800'], ['账户间转账', '$20,000'], ['退款', '$2,000'], ['工资收入', '$30,000']];
export default function Slide08() {
  return <Frame page={8} tag="CASE 1" title="银行收到的钱，不等于Sales" subtitle="一笔入账的性质，必须回到来源、证据与期间。">
    <BodyGrid columns="1.05fr 1fr" gap={28}>
      <Panel style={{ padding: '22px 28px' }}>
        <Label bg={colors.yellow} color={colors.dark}>示例入账</Label>
        <div style={{ marginTop: 13 }}>{receipts.map(([label, amount], i) => <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 25, lineHeight: 1.25, padding: '8px 0', borderBottom: i === 5 ? undefined : '1px solid #e8ded5' }}><span>{label}</span><b style={{ fontFamily: fonts.mono }}>{amount}</b></div>)}</div>
      </Panel>
      <div style={{ padding: '14px 4px', display: 'flex', flexDirection: 'column', gap: 22 }}>
        <h2 style={{ fontSize: 34 }}>真正的Sales怎么算？</h2>
        <TextList size={25} gap={14} items={['识别交易来源', '对照 invoice 与客户名单', '排除内部转账和私人资金', '确认收入所属期间', '保留核对轨迹']} />
        <p style={{ fontSize: 23, color: '#68615e' }}>总入账 $107,800，Sales 未必相同。</p>
      </div>
    </BodyGrid>
    <Takeaway size={24}>AI的价值不是更快相加，而是帮助建立清楚的证据链。</Takeaway>
  </Frame>;
}
