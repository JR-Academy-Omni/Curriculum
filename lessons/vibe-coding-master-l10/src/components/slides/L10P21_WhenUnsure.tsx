import { colors, border, shadow } from '../ui';
import { Page, PageHead, MiniTable, QuadChip, Note } from '../deck';

// P21 · 分不清算哪一格怎么办（蓝图 §8.6 止争页）
// 🔴 必须在 74 分钟前出现。一定会有人问「那如果只有一半算哪一格」，
//    这个讨论能吃掉 20 分钟。第一次有人问就直接念这一页。
// 后半句既止争，又是个真判断：四种错判的代价不对称。

export default function L10P21_WhenUnsure() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title="分不清算哪一格怎么办"
				sub="这个问题我先回答，省得一会儿争二十分钟。"
			/>

			<div style={{ border, boxShadow: shadow, background: colors.purple, color: colors.white, padding: '24px 30px', flexShrink: 0 }}>
				<div style={{ fontSize: 31, fontWeight: 900, lineHeight: 1.45 }}>
					格子的边界不重要，<span style={{ background: colors.white, color: colors.dark, padding: '0 10px' }}>搬运动作才重要</span>。
					<br />
					分不清的时候，<strong>当隐藏区处理</strong> —— 也就是你多说一句。
				</div>
			</div>

			<MiniTable
				size={22}
				widths={['170px', '1fr']}
				head={['错当成', '代价']}
				rows={[
					[<QuadChip q="open" />, <>它<strong>编</strong>，而且你不知道它编了。四种里最贵</>],
					[<QuadChip q="blind" />, <>白问一轮</>],
					[<QuadChip q="unknown" />, <>白做一个实验</>],
					[<QuadChip q="hidden" />, <><strong>你啰嗦了一句。</strong>就这样</>],
				]}
				style={{ flexShrink: 0 }}
			/>

			<div style={{
				border, boxShadow: shadow, background: colors.white, padding: '18px 24px',
				flex: 1, minHeight: 0, display: 'flex', alignItems: 'center',
			}}>
				<div style={{ fontSize: 26, lineHeight: 1.55, color: colors.dark }}>
					所以这不是「不知道就选个保险的」。
					<span style={{ background: colors.yellow, padding: '0 8px' }}>四种错判的代价不对称</span>，
					而多说一句是里面最便宜的那个。这是个判断，不是和事佬。
				</div>
			</div>

			<Note>下面十分钟你自己写。写的时候不用纠结哪句属于哪一格。</Note>
		</Page>
	);
}
