import { DeckFrame, Panel, Label, Takeaway, colors } from '../kit';

export default function S02_Ceiling() {
	return <DeckFrame tag="01 · 为什么是这一周" title="一人公司的天花板，是你每周被琐事吃掉多少小时" subtitle="前 11 周你把生意做起来了：有产品、有内容、有第一批客户。这周开始，把重复的那部分交出去。">
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, height: '100%' }}>
			{[
				['每天', '看行业新闻、找选题、写内容、回客户邮件', colors.yellow],
				['每周', '看竞品有没有改价、整理数据、复盘哪条内容好', colors.blue],
				['偶尔', '把一堆旧文章改成英文版、给新客户发上手指引', colors.green],
			].map(([k, v, c]) => <Panel key={k} style={{ borderTop: `14px solid ${c}` }}>
				<Label bg={c} color={colors.dark}>{k}</Label>
				<div style={{ fontSize: 30, fontWeight: 900, lineHeight: 1.35, marginTop: 20 }}>{v}</div>
			</Panel>)}
		</div>
		<div style={{ marginTop: 22 }}><Takeaway>算一下：上面这些，你每周花几个小时？这节课要交出去的，就是这几个小时。</Takeaway></div>
	</DeckFrame>;
}
