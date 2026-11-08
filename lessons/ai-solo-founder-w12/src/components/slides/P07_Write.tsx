import { DeckFrame, Panel, Label, colors, fonts } from '../kit';

export default function P07_Write() {
	return <DeckFrame tag="第 2 步 · 生成" title="一个题目，同时写两份：公众号文章 + 网页" subtitle="只读第 1 步排第一的那个题目。写作规则在 rules/2-write.md，语气和红线从记忆里读。" accent={colors.blue}>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
			<Panel style={{ borderTop: `14px solid ${colors.yellow}` }}>
				<Label bg={colors.yellow} color={colors.dark}>公众号文章</Label>
				<div style={{ fontFamily: fonts.mono, fontSize: 18, marginTop: 14 }}>drafts/wechat/日期-题目.md + .html</div>
				<div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12 }}>· 开头第一段直接给结论<br />· 每个事实后面有来源<br />· 至少一处你自己的经历（从 past-posts 和 brand 里找）<br />· 另外出一份<b>排好版的 HTML</b>：样式写在每个标签上，复制进公众号编辑器格式不会乱</div>
			</Panel>
			<Panel style={{ borderTop: `14px solid ${colors.green}` }}>
				<Label bg={colors.green} color={colors.dark}>网页</Label>
				<div style={{ fontFamily: fonts.mono, fontSize: 18, marginTop: 14 }}>site/题目.html</div>
				<div style={{ fontSize: 22, lineHeight: 1.6, marginTop: 12 }}>· 同一个题目，写成能被搜索到的网页版本<br />· 标题和第一段写清楚回答的是哪个问题<br />· 文末链接到你的产品页<br />· 放在 site/ 里，合并之后自动发布</div>
			</Panel>
		</div>
		<div style={{ marginTop: 20, background: colors.dark, color: colors.white, borderRadius: 18, padding: '14px 22px', fontSize: 22, fontWeight: 700 }}>为什么一次写两份：选题和事实核对只做一遍，换个形式就能多一个渠道。</div>
	</DeckFrame>;
}
