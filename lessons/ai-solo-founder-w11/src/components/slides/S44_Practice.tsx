import { Teaching } from '../Teaching';
import { Panel, Label, colors } from '../deck';
import { assetPath } from '../ui';
export default function S44_Practice() {
  return <Teaching tag="课堂练习 · 10 分钟" title="画自己的飞轮，再选一个增长方法" subtitle="先独立填，再互相质询，最后修正一处计划。"><div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 26 }}><Panel><Label bg={colors.yellow} color={colors.dark}>7 分钟独立填写</Label><div style={{ fontSize: 28, lineHeight: 1.6, marginTop: 20 }}>{['四步飞轮与回流输出：________', '缺证据的箭头与当前卡点：________', '从三个候选中选一个方法：________', '本周最小改动与用户下一步：________', '指标、成本上限、读数时间：________'].map(v => <div key={v}>{v}</div>)}</div></Panel><Panel bg={colors.dark} style={{ color: colors.white }}><Label bg={colors.yellow} color={colors.dark}>3 分钟同伴质询</Label><div style={{ fontSize: 28, lineHeight: 1.6, marginTop: 20 }}>{['客户能找到吗？', '用户为什么愿意做？', '本周做得完吗？', '结果出来，能决定什么？'].map(v => <div key={v}>{v}</div>)}</div><a href={assetPath('worksheet.html')} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 26, color: colors.yellow, fontSize: 25 }}>打开可填写工作单 ↗</a></Panel></div></Teaching>;
}
