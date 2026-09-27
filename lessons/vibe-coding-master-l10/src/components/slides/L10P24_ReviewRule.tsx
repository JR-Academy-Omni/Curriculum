import { colors, border, shadow, fonts } from '../ui';
import { Page, PageHead, Note } from '../deck';

// P24 · 讲评规则（蓝图 §9.2）
// 🔴 规则要念给学员听，理由也要说出来。
//    一判对错，学员就转向猜老师想要的答案，框架当场退化成考试题。
// 这条规则本身就是四象限的应用：学员的任务在他自己的隐藏区里，
// 老师根本没有判对错的信息。
// 🔴 优先抽第三问填不出来的人，让他们说「我为什么填不出来」。

export default function L10P24_ReviewRule() {
	return (
		<Page>
			<PageHead phase="talk" title="讲评规则：我只问一句" />

			<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '30px 36px', flexShrink: 0 }}>
				<div style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.4 }}>
					「你这一条属于<span style={{ background: colors.yellow, color: colors.black, padding: '0 10px' }}>哪一格</span>，
					依据是什么。」
				</div>
				<div style={{ marginTop: 16, fontFamily: fonts.mono, fontSize: 24, color: colors.yellow, letterSpacing: 1 }}>
					我不判对错。
				</div>
			</div>

			<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1, border, boxShadow: '4px 4px 0 #000', background: colors.white, display: 'flex', flexDirection: 'column' }}>
					<div style={{ background: colors.red, color: colors.white, padding: '10px 18px', borderBottom: border, fontSize: 21, fontWeight: 900 }}>
						为什么不判对错
					</div>
					<div style={{ padding: '16px 20px', fontSize: 23, lineHeight: 1.55, color: colors.dark, flex: 1 }}>
						我一判对错，你们就转向猜我想要的答案，这个框架当场退化成一道考试题。
						<div style={{ marginTop: 12, fontWeight: 800 }}>
							而且更根本的原因是：
							<span style={{ background: colors.purple, color: colors.white, padding: '0 8px' }}>你的任务在你的隐藏区里</span>
							，我没有判对错的信息。
						</div>
					</div>
				</div>

				<div style={{ flex: 1, border, boxShadow: '4px 4px 0 #000', background: colors.white, display: 'flex', flexDirection: 'column' }}>
					<div style={{ background: colors.blue, color: colors.white, padding: '10px 18px', borderBottom: border, fontSize: 21, fontWeight: 900 }}>
						我优先抽谁
					</div>
					<div style={{ padding: '16px 20px', fontSize: 23, lineHeight: 1.55, color: colors.dark, flex: 1 }}>
						优先抽<strong>问题三填不出来</strong>的人，请你说一句「我为什么填不出来」。
						<div style={{ marginTop: 12, fontSize: 22, color: '#666' }}>
							这比听一份填得好的更有价值 —— 填不出来的原因，才是这一格真正的内容。
						</div>
					</div>
				</div>
			</div>

			<Note>这条规则你回去也能用：让同事说「这属于哪一格」，比让他说「你觉得对不对」有用得多。</Note>
		</Page>
	);
}
