import { colors } from '../ui';
import { Page, PageHead, AskBoard } from '../deck';

/**
 * P04 · 问题二 ⭐ 全课支点
 * 🔴 §10.1 铁律 2：至少 60 秒沉默，不救场、不举例、不改口。
 *    学员答不出来是因为他从没想过 —— 这件事目前之所以没出问题，
 *    是因为他每次做的时候顺手看了一眼。手工做的时候，检查是免费且隐形的。
 * 🔴 这一页不许放任何提示。屏幕上多一个字，沉默就塌了。
 */
export default function L11P04_Ask2() {
	return (
		<Page>
			<PageHead phase="ask" title="第二个问题" mark="问题 2 / 4" markBg={colors.red} />
			<AskBoard
				n={2}
				question="它做错了，你多久会知道？"
				stopAt="5 分钟"
			/>
		</Page>
	);
}
