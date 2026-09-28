import { motion } from 'framer-motion';
import { ActBadge, Page, Head, GATES, TRANSFORMS, colors, fonts, border, shadow, FS } from '../deck';

// P16 · 四道判断线 + 转化表 ⭐ v3 新增 · 第三幕的骨架
// 🔴 这是一条链，不是四个格子：前一道过不了，后面不用问。
// 🔴 第二道是 v3 新增，全节最实用的一格，而且课堂检查④已经是它的例子，
//    学员做过但没被命名。这一页给它命名。
// 🔴 转化本身可以让 agent 帮你做，那句 prompt 要给出来。
export default function L13P16_GateLines() {
	return (
		<Page>
			<ActBadge act={3} />
			<Head sub="不是四个格子，是一条链：前一道过不了，后面不用问。">
				四道判断线
			</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 22 }}>
				{GATES.map((g, i) => (
					<motion.div
						key={g.n}
						initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.35, delay: 0.1 + i * 0.12 }}
						style={{
							display: 'flex', alignItems: 'center', gap: 18, padding: '12px 20px',
							border: g.star ? `4px solid ${colors.black}` : border,
							background: g.star ? colors.yellow : colors.white,
							boxShadow: g.star ? shadow : '3px 3px 0 #000',
						}}
					>
						<span style={{
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, width: 64,
							color: g.star ? colors.black : '#888',
						}}>{g.n}</span>
						<span style={{ fontSize: g.star ? 27 : 24, fontWeight: g.star ? 900 : 500, flex: 1 }}>{g.q}</span>
						<span style={{
							fontSize: 17, color: g.star ? colors.black : '#888',
							fontFamily: fonts.mono, fontWeight: g.star ? 700 : 400,
						}}>{g.hint}</span>
					</motion.div>
				))}
			</div>

			{/* 🔴 alignItems: flex-start 是必须的 ,默认 stretch 会把表格拉满高度，
			    最后一行下面空出一大块，看起来像一个巨大的空单元格。 */}
			<div style={{ display: 'flex', gap: 26, alignItems: 'flex-start' }}>
				<div style={{ flex: 1, minWidth: 0, border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr' }}>
						{[
							{ t: '判断题（查不了）', c: colors.red },
							{ t: '转化成形状题（查得了）', c: colors.green },
						].map((h, i) => (
							<div key={i} style={{
								padding: '10px 16px', background: h.c,
								color: h.c === colors.green ? colors.black : colors.white,
								fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
								borderRight: i === 0 ? `2px solid ${colors.black}` : 'none',
							}}>{h.t}</div>
						))}
					</div>
					{TRANSFORMS.map((t) => (
						<div key={t.judge} style={{
							display: 'grid', gridTemplateColumns: '1fr 1.3fr',
							borderTop: `2px solid ${colors.black}`,
							background: t.inClass ? 'rgba(255,222,89,0.35)' : colors.white,
						}}>
							<div style={{ padding: '11px 16px', fontSize: 20, borderRight: `2px solid ${colors.black}`, color: '#888' }}>{t.judge}</div>
							<div style={{ padding: '11px 16px', fontSize: 20, fontWeight: t.inClass ? 700 : 400 }}>
								{t.shape}
								{t.inClass && <span style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.red, marginLeft: 10 }}>← 你刚才做过</span>}
							</div>
						</div>
					))}
				</div>

				<div style={{ flex: '0 0 430px', display: 'flex', flexDirection: 'column', gap: 16 }}>
					<div style={{
						border: `3px solid ${colors.blue}`, background: 'rgba(56,182,255,0.07)', padding: '16px 18px',
					}}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.blue, letterSpacing: 1, marginBottom: 9 }}>
							转化也可以让它帮你做
						</div>
						<div style={{ fontSize: 20, lineHeight: 1.6 }}>
							「这条规矩我想查，但它是判断题。
							<b>有没有办法把它换成一个不动脑就能判的形状？</b>」
						</div>
					</div>
					<div style={{ fontSize: FS.note, color: '#666', lineHeight: 1.7 }}>
						⭐ 机械化的第二个红利（第一个是确定性）：
						<br />
						<b>每一条你机械化掉的规则，都是 AI 以后不用再读的一条。</b>
						<br />
						它不再需要被读懂、不再进 context、
						<b>不再有被误读的机会。</b>
					</div>
				</div>
			</div>
		</Page>
	);
}
