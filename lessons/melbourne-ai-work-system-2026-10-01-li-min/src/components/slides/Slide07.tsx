import { Frame, BodyGrid, ListPanel, Takeaway, colors } from './DeckPrimitives';

export default function Slide07() {
  return <Frame page={7} tag="THE METHOD" title="AI最适合做三类工作" subtitle="整理、核对、提醒，把问题更早交给专业人员。">
    <BodyGrid columns="1fr 1fr 1fr">
      <ListPanel title="整理" items={['文件清单', '金额与日期', '银行交易', '缺失资料']} />
      <ListPanel title="核对" accent={colors.blue} items={['银行对总账', 'BAS 对 GST', 'FS 对 Tax Return', '本年对往年']} />
      <ListPanel title="提醒" accent={colors.red} items={['异常交易', '缺失证据', '重大变动', '合规风险']} />
    </BodyGrid>
    <Takeaway size={32}>先验证，再分析。</Takeaway>
  </Frame>;
}
