import { DeckFrame, Panel, Label, colors } from '../kit';

export default function S19_Rerun() {
	return <DeckFrame tag="04 · 重跑" title="同一件事跑两次，会不会出问题？" subtitle="失败了就重跑，前提是重跑是安全的。先问清楚这一点，再决定要不要自动重试。">
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, height: '100%' }}>
			<Panel style={{ borderTop: `14px solid ${colors.green}` }}><Label bg={colors.green} color={colors.dark}>跑两次也安全</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 16 }}>写简报、写草稿、做比较：第二次的结果覆盖第一次就行。</div></Panel>
			<Panel style={{ borderTop: `14px solid ${colors.yellow}` }}><Label bg={colors.yellow} color={colors.dark}>要先记账</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 16 }}>批量改写、处理付款事件：先查「这个做过了没有」，做过就跳过。</div></Panel>
			<Panel style={{ borderTop: `14px solid ${colors.red}` }}><Label bg={colors.red}>不安全</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 16 }}>发帖、发邮件、退款：跑两次就是发两遍。第一版只出草稿、不生效，这就是满分答案。</div></Panel>
		</div>
	</DeckFrame>;
}
