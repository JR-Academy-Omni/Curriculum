import { colors, border, shadow } from '../ui';
import { Page, PageHead, GateChain, Note } from '../deck';

/**
 * P10 · 判断闸第一次出现 ⭐
 * 🔴 §10.1 铁律 1：这一页之前，deck 里不许出现任何四步图、闸门图，
 *    也不许出现「判断线」三个字。违反这条，第一幕全废。
 * 第一句台词固定：「你们刚才回答的四个问题，不是四个问题。它们有顺序。」
 */
export default function L11P10_GatesRevealed() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title={<>你们刚才回答的四个问题，<span style={{ color: colors.red }}>不是四个问题</span></>}
				sub="它们有顺序。前一道过不了，后面的不用问。"
			/>

			<GateChain style={{ flex: 1 }} />

			<div style={{
				border, boxShadow: shadow, background: colors.dark, color: colors.white,
				padding: '18px 26px', flexShrink: 0,
			}}>
				<div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.45 }}>
					能不能交给它自动跑，<span style={{ color: colors.yellow }}>不取决于这件事有多难</span> ——
					取决于它做错的时候，你多久会知道、还救不救得回来。
				</div>
			</div>

			<Note>
				全场只有一处顺序需要解释：<strong>第二问排在第三问前面</strong>。收不回来但你马上知道，还能补救；
				发现不了，收得回来也没用 —— 因为你不知道要收。
			</Note>
		</Page>
	);
}
