import { Frame, BodyGrid, ListPanel, FlowArrow, Takeaway, colors } from './DeckPrimitives';

export default function Slide06() {
  return <Frame page={6} tag="THE NEW ROLE" title="会计师成为客户与AI之间的专业翻译者" subtitle="把模糊问题转换成完整、准确、可验证的问题。" titleSize={52}>
    <BodyGrid columns="1fr 24px 1fr 24px 1fr 24px 1fr" gap={12} style={{ alignItems: 'center' }}>
      <ListPanel title="客户提供" size={24} items={['业务事实', '原始文件', '商业目标']} style={{ padding: 22 }} />
      <FlowArrow />
      <ListPanel title="会计师补充" size={24} accent={colors.blue} items={['正确问题', '完整背景', '风险边界']} style={{ padding: 22 }} />
      <FlowArrow />
      <ListPanel title="AI协助" size={24} accent={colors.purple} items={['整理数据', '比较资料', '列出异常']} style={{ padding: 22 }} />
      <FlowArrow />
      <ListPanel title="会计师负责" size={24} accent={colors.green} items={['验证', '判断', '沟通与建议']} style={{ padding: 22 }} />
    </BodyGrid>
    <Takeaway>会计师不仅会使用AI，还帮助客户正确地使用AI。</Takeaway>
  </Frame>;
}
