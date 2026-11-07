import { DeckFrame, AnimatedGroup, Panel, Label, colors, fonts } from '../deck';
import { muted, Takeaway } from '../lesson';

// 四件事都发生在本项目里，引文为讲师原话
const fails = [
	{ t: '回复中途变成英文', q: '之前是说中文的，你怎么现在说的什么乱七八糟的？', fix: '「所有回复用中文」写进全局说明和记忆，发出前自查', c: colors.red },
	{ t: '给的命令用了相对路径', q: '我是不是把这个目录都给选错了呀？', fix: '「给我的命令一律写完整路径」', c: colors.blue },
	{ t: '把「同比加速」说成了环比', q: '你还是没有说环比的问题吧。这就是同比加速而已？', fix: '概念先对齐定义，再出数字', c: colors.green },
	{ t: '网页点几下就卡死', q: '点击了几次就全部死掉了。', fix: '每次改页面都在浏览器里实际点一遍', c: colors.orange },
];

export default function S16_MoreFails() {
	return (
		<DeckFrame tag="04 · AI 会犯错，怎么管住它" title="还有这些，都真实发生过" subtitle="单看每一件都是小事。但一个人带 65 个助手，小事会被放大 65 倍。" accent={colors.purple}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, flex: 1, minHeight: 0 }}>
					{fails.map((f, i) => (
						<AnimatedGroup key={f.t} delay={.12 + i * .1} style={{ display: 'flex' }}><Panel style={{ flex: 1, padding: 22, borderTop: `10px solid ${f.c}` }}>
							<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 28 }}>{f.t}</div>
							<div style={{ fontSize: 20, lineHeight: 1.45, color: muted, marginTop: 10 }}>「{f.q}」</div>
							<div style={{ marginTop: 14, display: 'flex', gap: 10, alignItems: 'center' }}><Label bg={f.c} color={colors.dark}>对策</Label><span style={{ fontSize: 20, fontWeight: 700 }}>{f.fix}</span></div>
						</Panel></AnimatedGroup>
					))}
				</div>
				<div><Takeaway>出一次错，记一条规矩</Takeaway></div>
			</div>
		</DeckFrame>
	);
}
