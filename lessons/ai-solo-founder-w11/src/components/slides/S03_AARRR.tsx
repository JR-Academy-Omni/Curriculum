import { Teaching } from '../Teaching';
import { Panel, colors } from '../deck';
export default function S03_AARRR() {
  const rows = [
    ['Acquisition · 获取', '谁来，怎样来？', '相关询问或可接触的目标对象'],
    ['Activation · 激活', '第一次真的得到什么价值？', '完成一项关键任务 / 拿到可用交付'],
    ['Retention · 留存', '为什么在自然周期内回来？', '再次使用 / 复购 / 合作延续'],
    ['Revenue · 收入', '是否真实付费，成本能否承受？', '付款、履约、退款与贡献'],
    ['Referral · 推荐', '本轮价值如何带来下一位？', '有效介绍 / 分享后真实使用'],
  ];
  return <Teaching tag="原理 02 · AARRR" title="增长方法，分别解决五个问题" subtitle="这是诊断视角，不是所有业务必须遵循的同一种先后顺序。"><Panel style={{ padding: 24 }}><div style={{ display: 'grid', gap: 12 }}>{rows.map(([title, question, metric]) => <div key={title} style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 1.4fr', gap: 22, borderBottom: `1px solid ${colors.dark}`, padding: '14px 0', fontSize: 25, lineHeight: 1.4 }}><strong>{title}</strong><span>{question}</span><span>{metric}</span></div>)}</div></Panel><p style={{ fontSize: 23, marginTop: 20 }}>留存按自然使用或购买周期看；季度咨询不用每日登录衡量。</p></Teaching>;
}
