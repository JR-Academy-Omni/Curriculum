import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Verdict, FS } from '../deck';

// P01 · 从 L7 的「回来报」到 L8 的「边做边协调」——系列承接（蓝图 §1.1）
// 一页只讲一件事：两问的分工。判断线本身在 P04。

export default function L8P01_FromL7() {
	return (
		<Page>
			<PageHead
				phase="talk" time="5–15 min"
				title={<>从 L7 的「回来报」到 L8 的「<span style={{ background: colors.yellow, padding: '0 10px' }}>边做边协调</span>」</>}
			/>

			<div style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0 }}>
				{[
					{
						tag: 'L7 · 第一问', color: colors.blue,
						q: '这件事值得开一个新的 context 吗？',
						a: '只需分头做，最后回给中心',
						pick: 'Subagent',
					},
					{
						tag: 'L8 · 第二问', color: colors.purple,
						q: '这些 context 在完成前，需要互相改变对方的下一步吗？',
						a: '成员的中途发现会改变另一名成员的搜索、假设、实现或验收',
						pick: 'Agent Team',
					},
				].map((c, i) => (
					<motion.div
						key={c.tag}
						initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
					>
						<div style={{
							background: c.color, color: colors.white, padding: '10px 22px',
							borderBottom: border, fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, letterSpacing: 1,
						}}>{c.tag}</div>

						<div style={{ padding: '24px 26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
							<div style={{ fontSize: 31, fontWeight: 800, color: colors.dark, lineHeight: 1.42 }}>
								{c.q}
							</div>
							<div style={{
								marginTop: 20, paddingTop: 18, borderTop: '2px dashed #ddd',
								fontSize: FS.body, color: '#555', lineHeight: 1.55, flex: 1,
							}}>
								{c.a}
							</div>
							<div style={{
								marginTop: 16, alignSelf: 'flex-start',
								background: c.color, color: colors.white,
								padding: '8px 22px', fontSize: 26, fontWeight: 900,
								fontFamily: fonts.mono, border: `3px solid ${colors.black}`,
							}}>→ {c.pick}</div>
						</div>
					</motion.div>
				))}
			</div>

			<Verdict bg={colors.white} fg={colors.dark} style={{ border, boxShadow: shadow }}>
				Agent Team <strong style={{ color: colors.red }}>不是</strong> Subagent 的升级版，也不是 Agent 越多越强。
				它只是把<span style={{ background: colors.yellow, padding: '0 8px' }}>成员之间的持续协调</span>变成一等能力。
			</Verdict>
		</Page>
	);
}
