import { colors } from '../ui';
import { Page, PageHead, WhyTable, Note } from '../deck';

// P23 · 这段话为什么这么组词（蓝图 §9.1 原理页）
// 系列标准要求：每个 prompt 都要配一页「为什么这么组词」。
// 讲完切回 P22，学员继续写（约 74–77 min）。

export default function L10P23_WhyWordedThisWay() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title="这段话为什么这么组词"
				sub="每一句都在防一件具体的事，不是格式好看。"
			/>

			<WhyTable
				size={22}
				lineW={340}
				rows={[
					{
						line: '四段分开写',
						why: <>四格要求四种不同的动作。揉成一段，它会用同一种态度对待全部</>,
					},
					{
						line: '「不要重新讨论」',
						why: <>开放区的东西被重开，会白白浪费一整轮</>,
					},
					{
						line: '「有冲突以这里为准」',
						why: <>隐藏区落盘之后要有优先级，否则它会拿代码现状压你的规则</>,
					},
					{
						line: '「先说结论和依据，不要直接改」',
						why: <>盲区要的是它的<strong>判断</strong>，不是它的行动。一动手就没法比较你和它谁对了</>,
					},
					{
						line: '「提一个最小实验，先别做」',
						why: <>未知区最容易变成 Scope Creep（L9 危险一）</>,
					},
					{
						line: '「明确说不知道，不要猜」',
						why: <>不给出口它就编（L7）。<strong>这一句最容易漏，漏了前面全白写</strong></>,
						star: true,
					},
				]}
				style={{ flex: 1 }}
			/>

			<Note>
				回去改你自己那段话的时候，可以换措辞，但<span style={{ color: colors.red, fontWeight: 700 }}>这六件事要各防到一件</span>。
			</Note>
		</Page>
	);
}
