import { Teaching } from '../Teaching';
import { Panel, colors } from '../deck';
export default function S46_Cases() {
  const rows = [
    ['创始人 / 当事人历史回顾', 'Canva、Stripe、Airbnb、HubSpot Sales', '记录做过什么；不把故事单独当成因果证明。'],
    ['官方产品机制', 'Dropbox、Notion、Slack、Typeform、Spotify', '功能存在；对自己项目的转化仍需测量。'],
    ['历史实验与流程', 'Duolingo、Grammarly、Mailchimp', '保留历史语境；不宣称今天界面或效果相同。'],
    ['教学模拟与方法建议', '本课起手示例、演算、适用条件', '不冒充客户业绩、行业基准或承诺结果。'],
  ];
  return <Teaching tag="案例与证据" title="事实、机制分析、迁移假设分开看" subtitle="每个方法页的来源可点击；没有可靠效果数字，就讲机制和适用条件。"><Panel style={{ padding: 26 }}><div style={{ display: 'grid', gap: 23 }}>{rows.map(([t,c,l]) => <div key={t} style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr 1.4fr', gap: 24, fontSize: 25, lineHeight: 1.5, paddingBottom: 20, borderBottom: `1px solid ${colors.dark}` }}><strong>{t}</strong><span>{c}</span><span>{l}</span></div>)}</div></Panel></Teaching>;
}
