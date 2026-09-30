import { Frame, BodyGrid, ListPanel, Takeaway, colors } from './DeckPrimitives';

export default function Slide05() {
  return <Frame page={5} tag="THE INPUT PROBLEM" title="大家都会用AI，但答案不一定准确" subtitle="AI只能根据输入的信息回答，缺一个关键事实，结论可能完全不同。">
    <BodyGrid>
      <ListPanel title="客户常问AI" items={['这笔费用能否扣税？', '是否需要注册 GST？', '用公司还是个人经营？', 'Contractor 是否要付 Super？']} />
      <ListPanel title="经常遗漏的背景" accent={colors.blue} items={['所有相关实体', '合同与工作安排', '历史申报', '私人使用比例', '关联方关系']} />
    </BodyGrid>
    <Takeaway size={23}>答案可能看似专业，却基于不完整事实。<br />无法直接作为申报依据，仍需验证与追问。</Takeaway>
  </Frame>;
}
