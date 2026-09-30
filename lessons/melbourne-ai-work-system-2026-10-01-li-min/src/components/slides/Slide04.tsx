import { Frame, BodyGrid, ListPanel, FlowArrow, Takeaway, colors } from './DeckPrimitives';

export default function Slide04() {
  return <Frame page={4} tag="THE OPPORTUNITY" title="AI降低的不是专业标准，而是正确工作的成本" subtitle="把机械时间转化为判断、沟通与建议。" titleSize={48}>
    <BodyGrid columns="1fr 32px 1fr 32px 1fr" gap={16}>
      <ListPanel title="传统耗时" items={['找资料', '整理数据', '重复录入', '人工比较', '追踪差异']} />
      <FlowArrow />
      <ListPanel title="AI协助" accent={colors.blue} items={['建立资料清单', '整理交易', '交叉核对', '发现异常', '提醒遗漏']} />
      <FlowArrow />
      <ListPanel title="会计师聚焦" accent={colors.green} items={['专业判断', '风险分析', '客户沟通', '商业建议', '最终审核']} />
    </BodyGrid>
    <Takeaway>AI节省的，是专业判断之前的大量机械工作。</Takeaway>
  </Frame>;
}
