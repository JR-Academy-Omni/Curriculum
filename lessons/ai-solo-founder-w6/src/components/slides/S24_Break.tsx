import { Slide, Inner, Title, Tag, colors, border } from '../ui';

const outcome = [['收益', '首批机构完成切换，后续机构可复用同一套交付流', colors.green], ['风险', '字段映射遗漏、回滚窗口不足', colors.red], ['下一步', '用同一张 WBS 推进第二批机构', colors.yellow]];

export default function S24_Break() {
	return <Slide bg={colors.blue}><Inner style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><Tag bg={colors.dark}>CASE 1 · TAKEAWAY</Tag><Title size="54px" style={{ margin: '18px 0 22px' }}>大项目拆分的核心，不是拆得多</Title><div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 22, fontWeight: 900 }}><span>按价值拆</span><span>→</span><span>按交付流拆</span><span>→</span><span>按依赖排序</span><span>→</span><span>用证据验收</span></div><div style={{ display: 'flex', gap: 14, marginTop: 30, width: '100%' }}>{outcome.map(([title, body, color]) => <div key={title} style={{ flex: 1, border, background: color, padding: '14px 16px' }}><strong style={{ fontSize: 15 }}>{title}</strong><p style={{ fontSize: 16, fontWeight: 800, marginTop: 9, lineHeight: 1.45 }}>{body}</p></div>)}</div></Inner></Slide>;
}