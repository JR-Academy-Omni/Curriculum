import { AppendixBadge, Page, Head, colors, fonts, border, shadow, FS } from '../deck';

// A4 · 一人多帽：缺席代理不对称
// 🚨 最容易把课带偏的一页。学员一问「我们就三个人，谁批谁」，
//    讲师会很想展开讲组织设计。别。给这张表，一句话，然后回主线。
export default function L13A4_Asymmetry() {
	return (
		<Page>
			<AppendixBadge label="A4 · 一人多帽" />
			<Head sub="小团队必然一人多帽。做法不是假装没这回事。">
				缺席代理<span style={{ color: colors.red }}>不能对称</span>
			</Head>

			<div style={{ display: 'flex', gap: 24, marginBottom: 26 }}>
				{[
					{ dir: '副手不在 → 一把手代', eff: '干净', c: colors.green },
					{ dir: '一把手不在 → 副手代', eff: '必须挖口子', c: colors.red },
				].map((x) => (
					<div key={x.dir} style={{
						flex: 1, border: `3px solid ${x.c}`, background: colors.white, boxShadow: shadow,
						padding: '22px 24px',
					}}>
						<div style={{ fontSize: 24, marginBottom: 12, color: '#444' }}>{x.dir}</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 900, color: x.c }}>{x.eff}</div>
					</div>
				))}
			</div>

			<div style={{ fontSize: FS.body, lineHeight: 1.7, marginBottom: 20 }}>
				不挖口子的后果：<b style={{ color: colors.red }}>副手拿到了本来用来制衡副手的那份权限。</b>
			</div>

			<div style={{ border, background: colors.white, boxShadow: '4px 4px 0 #000', padding: '18px 22px' }}>
				<div style={{ fontFamily: fonts.mono, fontSize: 15, color: '#888', letterSpacing: 1, marginBottom: 12 }}>
					三类事等人回来，不转授
				</div>
				{[
					'自己提出或自己拥有的风险接受',
					'任何自己是交易对手方的决定',
					'第一次放开一项会改变权限边界的东西',
				].map((t, i) => (
					<div key={i} style={{ fontSize: 23, lineHeight: 1.8 }}>
						<span style={{ color: colors.red, fontWeight: 700, marginRight: 10 }}>→</span>{t}
					</div>
				))}
			</div>

			<div style={{
				marginTop: 'auto', paddingTop: 20, fontSize: FS.note,
				color: '#888', fontFamily: fonts.mono, lineHeight: 1.6,
			}}>
				单点故障是移动了，不是消失了。除了两顶帽子被刻意对立的那些情形，覆盖是存在的 ——
				而那些情形仍然会在一把手不在时停下来。这是正确的结果，但它是一个已知的限制，不是完整覆盖。
			</div>
		</Page>
	);
}
