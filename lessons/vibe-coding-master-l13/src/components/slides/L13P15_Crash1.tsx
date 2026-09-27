import { motion } from 'framer-motion';
import { ActBadge, Page, Head, colors, fonts, border, shadow, FS } from '../deck';

// P15 · 翻车① 它给了你一段跑得通的代码 🎬 v3 重做
// 🚨 v2 的形态是「学员卡住写不出来」（挫败）。v3 换成
//    **「它给你一个能跑的东西，你以为成了」**，这是静默失败，危险得多。
//    而且它在第三幕就埋下了下一节收口那句「它什么都没做，而你以为它做了」。
// 🔴 让学员自己选一条来说，一大半人会说出判断类的话。
//    agent 不会拒绝，它会给你一段**跑得通、但查的不是那回事**的代码。
// 🔴 这一页不给"能/不能机械化"的表，那是下一页（四道判断线）的事。
const CASES = [
	{ said: '「检查角色文件写得对不对」', got: '它去数了字数', verdict: '跑得通，查的不是你想查的' },
	{ said: '「检查这个审批额度合不合理」', got: '它写了个区间判断，区间是它编的', verdict: '跑得通，而且编了一个数' },
	{ said: '「检查职责有没有划分清楚」', got: '它检查了小节标题存不存在', verdict: '跑得通，但那不叫清楚' },
];

export default function L13P15_Crash1() {
	return (
		<Page>
			<ActBadge act={3} mode="🎬 翻车①" />
			<Head sub="现在你自己选一条最该被查的，说给它听。三分钟。">
				它给了你一段<span style={{ color: colors.red }}>跑得通的代码</span>
			</Head>

			<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 1.1fr' }}>
					{['你说的', '它写出来的', '结果'].map((h, i) => (
						<div key={h} style={{
							padding: '11px 18px', background: colors.dark, color: colors.white,
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
							borderRight: i < 2 ? `2px solid ${colors.black}` : 'none',
						}}>{h}</div>
					))}
				</div>
				{CASES.map((c, i) => (
					<motion.div
						key={c.said}
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 * i }}
						style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 1.1fr', borderTop: `2px solid ${colors.black}` }}
					>
						<div style={{ padding: '14px 18px', fontSize: 21, borderRight: `2px solid ${colors.black}`, lineHeight: 1.45 }}>{c.said}</div>
						<div style={{ padding: '14px 18px', fontSize: 20, borderRight: `2px solid ${colors.black}`, color: '#666', lineHeight: 1.45 }}>{c.got}</div>
						<div style={{ padding: '14px 18px', fontSize: 19, color: colors.red, fontWeight: 700, lineHeight: 1.45 }}>{c.verdict}</div>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
				style={{ marginTop: 26 }}
			>
				<div style={{
					fontFamily: fonts.heading, fontSize: 36, fontWeight: 900, lineHeight: 1.4,
				}}>
					注意这次<b style={{ color: colors.red }}>不是它拒绝了你</b>。
					<br />
					<span style={{ background: colors.yellow, padding: '2px 12px' }}>
						它给了你一段能跑的东西，而你以为成了。
					</span>
				</div>
				<div style={{ fontSize: FS.body, color: '#555', marginTop: 14, lineHeight: 1.65 }}>
					跑得通、不报错、CI 也是绿的 ,
					<b>而它查的根本不是那回事。</b>
					<br />
					<b style={{ color: colors.red }}>这一类失败没有声音。</b>
					你不会发现，直到某天真出事，你回头看那条检查，发现它从来没在守什么。
				</div>
			</motion.div>

			<div style={{
				marginTop: 'auto', paddingTop: 18, fontSize: FS.note, color: '#888',
				borderTop: '2px dashed #ccc', lineHeight: 1.6,
			}}>
				所以问题不是「你会不会写代码」。是 ,
				<b style={{ color: colors.black }}>你那条规矩，说清楚了没有。</b>
			</div>
		</Page>
	);
}
