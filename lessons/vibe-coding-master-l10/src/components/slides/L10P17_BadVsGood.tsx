import { colors, border, shadow } from '../ui';
import { Page, PageHead, Code, Note } from '../deck';

// P17 · 你一开口把答案说了会怎样（蓝图 §8.3 反例对照页）
// 🔴 这一页比正例重要 —— 坏指令必须是「先给结论」那一类。
// 收回 L7 的结论：不给「不知道」一个出口，它就编。

export default function L10P17_BadVsGood() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title="同一个 bug，两种问法"
				mark="搬运 2 / 4"
				markBg={colors.blue}
			/>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1, minHeight: 0 }}>
				<div style={{ display: 'flex', gap: 16, alignItems: 'stretch', flex: 1, minHeight: 0 }}>
					<div style={{
						flexShrink: 0, width: 92, background: colors.red, color: colors.white,
						border, boxShadow: '4px 4px 0 #000', display: 'flex', alignItems: 'center',
						justifyContent: 'center', fontSize: 30, fontWeight: 900,
					}}>坏</div>
					<Code size={23} style={{ flex: 1 }}>{`这个 bug 是缓存没清导致的，你去把缓存逻辑改一下

  → 你把答案说了，它只会顺着你找证据
  → 盲区是你自己焊死的，不是它没本事`}</Code>
				</div>

				<div style={{ display: 'flex', gap: 16, alignItems: 'stretch', flex: 1, minHeight: 0 }}>
					<div style={{
						flexShrink: 0, width: 92, background: colors.green, color: colors.black,
						border, boxShadow: '4px 4px 0 #000', display: 'flex', alignItems: 'center',
						justifyContent: 'center', fontSize: 30, fontWeight: 900,
					}}>好</div>
					<Code size={23} style={{ flex: 1 }}>{`这个现象有哪几种可能的原因？各自需要什么证据来排除？
不确定的地方明确说「不知道」，不要猜。

  → 它可能给你一条你没想到的
  → 最后那句是 L7 的结论：不给「不知道」一个出口，它就编`}</Code>
				</div>
			</div>

			<div style={{
				border, boxShadow: shadow, background: colors.dark, color: colors.white,
				padding: '18px 24px', flexShrink: 0,
			}}>
				<div style={{ fontSize: 27, fontWeight: 800, lineHeight: 1.45 }}>
					差别不是措辞礼貌。差别是
					<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>你有没有给它反驳你的空间</span>。
				</div>
			</div>

			<Note>
				要盲区，就必须在指令里给它「我不确定」的位置。没有那个位置，它只会给你一个听起来很确定的答案。
			</Note>
		</Page>
	);
}
