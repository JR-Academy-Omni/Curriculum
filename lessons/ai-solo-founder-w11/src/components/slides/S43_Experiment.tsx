import { Teaching } from '../Teaching';
import { Panel, Label, colors } from '../deck';
export default function S43_Experiment() {
  return <Teaching tag="方法落地 · 一周实验" title="选一个动作，让结果能改变下个决定" subtitle="没有基线先采证；少量成交与客户原话给线索，不自动证明因果。"><div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 26 }}><Panel style={{ padding: 28 }}><Label bg={colors.yellow} color={colors.dark}>教学模拟</Label><h2 style={{ fontSize: 33, margin: '24px 0 18px' }}>看不懂交付 → 展示真实样例</h2><p style={{ fontSize: 27, lineHeight: 1.55 }}>因为候选客户说不清最后拿到什么，这轮给同一类客户展示一份脱敏样例，记录是否进入合格对话或愿意安排付费试点。</p><p style={{ fontSize: 23, lineHeight: 1.5 }}>护栏：解释与交付工时。不能同时换客户群、价格、渠道再宣称知道原因。</p></Panel><Panel bg={colors.dark} style={{ color: colors.white, padding: 28 }}><div style={{ display: 'grid', gap: 19, fontSize: 27, lineHeight: 1.4 }}>{['观察：哪条事实与来源？', '改动：这次主要改变什么？', '指标：事件、分母与窗口？', '成本：预算与工时上限？', '规则：保留 / 调整 / 停止 / 数据不足？'].map(v => <div key={v}>{v}</div>)}</div></Panel></div></Teaching>;
}
