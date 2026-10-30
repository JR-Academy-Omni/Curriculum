import { DeckFrame, AnimatedGroup, Panel, Label, colors, fonts } from '../deck';
import { Code, muted, Takeaway } from '../lesson';

// 改写自补查说明.md（发给每组子助手的派活单）
const parts = [
	{ t: '判定口径', d: '附同一份口径文件，判定只有三种：满足 / 部分满足 / 不满足', c: colors.blue },
	{ t: '这一组的名单', d: '每行：代码、名称、赛道、要查哪几项', c: colors.green },
	{ t: '只认哪些来源', d: '巨潮、交易所、公司投资者关系、部委官网、官方媒体', c: colors.yellow },
	{ t: '结果长什么样', d: '一行一项，6 段，用竖线分隔，不要表头和废话', c: colors.purple },
	{ t: '查不到怎么办', d: '按规则判，通常是「不满足」，不许编', c: colors.red },
];

export default function S10_Brief() {
	return (
		<DeckFrame tag="03 · 一个人指挥 65 个 AI" title="派活单上写了五件事" subtitle="65 个助手互相看不见，也看不到我们之前的聊天。它们知道的，只有这张单子上写的。" accent={colors.red}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 24, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 30, flex: 1, minHeight: 0 }}>
					<AnimatedGroup delay={.15} style={{ display: 'grid', gap: 8, alignContent: 'start' }}>
						{parts.map((p, i) => (
							<div key={p.t} style={{ display: 'flex', gap: 16, alignItems: 'center', background: colors.white, border: `2px solid ${colors.dark}`, borderLeft: `12px solid ${p.c}`, borderRadius: 16, padding: '6px 16px' }}>
								<span style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 18 }}>{i + 1}</span>
								<div><div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 22 }}>{p.t}</div><div style={{ fontSize: 17, color: muted, marginTop: 0 }}>{p.d}</div></div>
							</div>
						))}
					</AnimatedGroup>
					<AnimatedGroup delay={.3} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
						<Code title="派活单 · 节选">{`同一家公司的几项，先找它最新的
年报、半年报和最近的投资者关系记录，
一份文件往往能同时回答好几项。

东方财富、新浪转载的公司原件可以用，
出处写「镜像」。

不采信自媒体、股吧、雪球、券商研报。
出处必须是能打开的完整网址。`}</Code>
						<Panel style={{ padding: 20 }}><Label bg={colors.yellow} color={colors.dark}>小技巧</Label><div style={{ fontSize: 20, lineHeight: 1.5, marginTop: 12 }}>告诉它「先找哪份文件」，比告诉它「要认真」有用得多。</div></Panel>
					</AnimatedGroup>
				</div>
				<div><Takeaway>标准要全写下来，助手只看得到单子上的字</Takeaway></div>
			</div>
		</DeckFrame>
	);
}
