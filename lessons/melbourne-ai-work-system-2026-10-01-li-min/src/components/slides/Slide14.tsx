import { Frame, SoftNode, Takeaway, colors } from './DeckPrimitives';

const measures = [
  ['减少遗漏', '不再漏掉银行账户与 Supporting Documents'],
  ['更早发现', '问题在 BAS 或年结前暴露'],
  ['扩大检查', '跨年度、跨实体、跨文件比较'],
  ['减少返工', '员工先修正，Principal 不在最后阶段救火'],
  ['更多沟通', '把时间还给客户理解与建议'],
  ['降低成本', '客户获得更高质量的服务结果'],
];
export default function Slide14() {
  return <Frame page={14} tag="MEASURE VALUE" title="不是只看节省多少时间，而是看结果有没有改善" subtitle="真正的效率，是减少遗漏、返工与错误。" titleSize={46}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '1fr 1fr', gap: 23, flex: 1, minHeight: 0 }}>{measures.map(([title, detail], i) => <SoftNode key={title} accent={i % 2 ? colors.blue : colors.yellow} style={{ display: 'flex', flexDirection: 'column', gap: 13, padding: '21px 23px' }}><h2 style={{ fontSize: 29 }}>{title}</h2><p style={{ fontSize: 23, lineHeight: 1.4 }}>{detail}</p></SoftNode>)}</div>
    <Takeaway>速度更快但错误更多，不是真正的效率。</Takeaway>
  </Frame>;
}
