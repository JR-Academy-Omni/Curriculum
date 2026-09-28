import { colors, border, shadow } from '../ui';
import { Page, PageHead, AsciiFlow, Note } from '../deck';

// P14 · 落在哪一层：粒度问题（蓝图 §8.1 第三步）
// 🔴 这是本节唯一给 L11 埋的点，**一句话带过，不许展开抽象阶梯**。
// 🔴 时间不足时这一步最先砍（§10.1 铁律第 7 条）。
// 落太高它自由发挥，落太低你等于自己在写代码。

export default function L10P14_WhichAltitude() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title="落盘不是落越多越好：同一件事有四个高度"
				mark="搬运 1 / 4"
				markBg={colors.purple}
			/>

			<div style={{ display: 'flex', gap: 22, flex: 1, minHeight: 0 }}>
				<AsciiFlow size={23} lh={1.85} accent={colors.purple} label="同一件事，四种写法" style={{ flex: 1.25 }}>{`意图    我要一个能让用户找回密码的东西

规格    邮件链接，15 分钟过期，一次性

判据    过期链接必须返回 410，且不许发第二封

实现    用这个库、这张表、这个字段名`}</AsciiFlow>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
					<div style={{ border, boxShadow: '4px 4px 0 #000', background: colors.white }}>
						<div style={{ background: colors.red, color: colors.white, padding: '9px 16px', borderBottom: border, fontSize: 20, fontWeight: 900 }}>
							落太高
						</div>
						<div style={{ padding: '14px 18px', fontSize: 23, lineHeight: 1.45, color: colors.dark }}>
							它自由发挥。你收到的东西能跑，但不是你要的那个。
						</div>
					</div>
					<div style={{ border, boxShadow: '4px 4px 0 #000', background: colors.white }}>
						<div style={{ background: colors.red, color: colors.white, padding: '9px 16px', borderBottom: border, fontSize: 20, fontWeight: 900 }}>
							落太低
						</div>
						<div style={{ padding: '14px 18px', fontSize: 23, lineHeight: 1.45, color: colors.dark }}>
							你等于自己在写代码，只是换了个输入法。
						</div>
					</div>
					<div style={{
						border, boxShadow: shadow, background: colors.dark, color: colors.white,
						padding: '16px 20px', fontSize: 24, fontWeight: 800, lineHeight: 1.45,
					}}>
						落在<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>判据</span>那一层，
						通常最省事。
					</div>
				</div>
			</div>

			<Note>
				「你该在哪一层说话」是另一个话题，今天只要知道<strong>它是个问题</strong>就够了。这一页我不展开。
			</Note>
		</Page>
	);
}
