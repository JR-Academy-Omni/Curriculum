import { colors, border, shadow } from '../ui';
import { Page, PageHead, ReportTable, Note } from '../deck';

/**
 * P20 · 回执的第二个读者是你
 *
 * 🔴 §10.1：这一页必须紧接 P19。P19 讲的是给**脚本**看的三个状态，
 *    这一页讲的是给**人**看的六项。两页合起来才是一份完整的回执 ——
 *    只有前一页，学员写出来的回执够脚本分支，但人读了还是不知道昨晚发生了什么。
 * ⭐ decisions 那两行是全节收口立论的落点：
 *    「你消灭的不是那个问题，是那次提问」——
 *    提问没了，决定还在，所以决定必须留痕。
 */
export default function L11P20_TheOtherReader() {
	return (
		<Page style={{ gap: 18 }}>
			<PageHead
				phase="talk"
				title={<>上一页那三个词，是写给<span style={{ color: colors.blue }}>脚本</span>看的</>}
				sub={<>可第二天早上打开电脑的是<strong>你</strong>。你要回答的是完全不同的六个问题。</>}
			/>

			<ReportTable style={{ flex: 1 }} />

			<div style={{
				border, boxShadow: shadow, background: colors.dark, color: colors.white,
				padding: '16px 24px', flexShrink: 0,
			}}>
				<div style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.4 }}>
					中间那两行为什么标红 —— 你把提问取消了，
					<span style={{ color: colors.yellow }}>那个决定并没有消失</span>，它被交给它自己做了。
				</div>
				<div style={{ fontSize: 24, fontWeight: 900, marginTop: 6, color: colors.yellow }}>
					所以它必须留痕。否则你永远不知道，它昨晚替你决定了什么。
				</div>
			</div>

			<Note>
				两条硬要求：<strong>每条决定都必须带「为什么」</strong>（没有 why 的决定等于没记录）；
				<strong>它自己没把握的要标出来</strong> —— 那种情况哪怕状态是「做完了」，也该叫你一声。
			</Note>
		</Page>
	);
}
