import { useState } from 'react';
import { Teaching } from '../Teaching';
import { Panel, Label, colors, radii } from '../deck';
export default function S02_Formula() {
  const [rate, setRate] = useState(20);
  return <Teaching tag="原理 01 · 教学模拟" title="增长可以拆成可观察的因素" subtitle="同一批人、同一窗口，先问哪一个因素值得改变。">
    <Panel style={{ padding: 32 }}><Label bg={colors.yellow} color={colors.dark}>模拟演算，非行业基准或收益预测</Label>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '35px 0', gap: 20 }}>
        {[['100', '符合画像的候选'], [`${rate}%`, '进入演示'], ['25%', '演示后付费'], [String(100 * rate / 100 * .25), '付费客户']].map(([v, t], i) => <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 22 }}><div style={{ textAlign: 'center' }}><div style={{ fontSize: 68, fontWeight: 900, color: i === 3 ? colors.red : colors.dark }}>{v}</div><div style={{ fontSize: 25 }}>{t}</div></div>{i < 3 && <span style={{ fontSize: 35 }}>{i === 2 ? '=' : '×'}</span>}</div>)}
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}><span style={{ fontSize: 24 }}>改变演示比例：</span>{[20, 40].map(n => <button key={n} onClick={() => setRate(n)} disabled={rate === n} aria-pressed={rate === n} style={{ fontSize: 25, padding: '12px 24px', borderRadius: radii.card, border: `2px solid ${colors.dark}`, background: rate === n ? colors.yellow : colors.white, color: colors.dark, opacity: rate === n ? .7 : 1, cursor: rate === n ? 'default' : 'pointer' }}>{n}%</button>)}</div>
      <p style={{ fontSize: 25, lineHeight: 1.5, marginTop: 25 }}>算式说明：其他条件固定时，改变一个因素会改变结果。真正能否改善，需要证据与实验。</p>
    </Panel>
  </Teaching>;
}
