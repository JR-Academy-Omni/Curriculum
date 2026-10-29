import { Frame, BodyGrid, ListPanel, Takeaway, colors } from './DeckPrimitives';

export default function Slide12() {
  return <Frame page={12} tag="THE TEAM" title="AI不会取消审核层级，但会改变每一层的工作" subtitle="减少机械劳动，提升判断密度。" titleSize={48}>
    <BodyGrid columns="1fr 1fr 1fr" style={{ alignItems: 'center' }}>
      <ListPanel title="Assistant" items={['资料清单', '基础核对', '缺失文件']} style={{ height: 296 }} />
      <ListPanel title="Accountant" accent={colors.blue} items={['调查异常', '完成 workpaper', '准备问题']} style={{ height: 296 }} />
      <ListPanel title="Principal" accent={colors.red} items={['重大风险', '复杂判断', '客户沟通', '最终责任']} style={{ height: 296 }} />
    </BodyGrid>
    <Takeaway>AI贯穿每一层，但不能取代责任层级。</Takeaway>
  </Frame>;
}
