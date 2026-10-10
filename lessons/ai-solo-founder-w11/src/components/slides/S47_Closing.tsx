import { DeckFrame, Panel, Label, colors } from '../deck';
import { assetPath } from '../ui';
export default function S47_Closing() {
  return <DeckFrame tag="OPC W11 · 明天第一步" title="选择一个方法，做一个真实动作" subtitle="带回客户原话、实际人数、成本和下一步决定。"><div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 28 }}><Panel style={{ padding: 34 }}><Label bg={colors.yellow} color={colors.dark}>把它写具体</Label><div style={{ fontSize: 39, lineHeight: 1.6, fontWeight: 800, marginTop: 22 }}>找哪一群客户？<br />改变哪一个动作？<br />看哪个数，何时复盘？</div></Panel><Panel bg={colors.dark} style={{ padding: 34, color: colors.white }}><p style={{ fontSize: 29, lineHeight: 1.55, margin: 0 }}>未知就写待测。<br />意向不等于付费。<br />画出循环不等于跑通。</p><a href={assetPath('worksheet.html')} target="_blank" rel="noreferrer" style={{ display: 'inline-block', color: colors.yellow, fontSize: 31, fontWeight: 800, marginTop: 35 }}>打开增长工作单 ↗</a><p style={{ fontSize: 23, lineHeight: 1.5 }}>记录在同一份 Business SoT，下一轮从新证据继续。</p></Panel></div></DeckFrame>;
}
