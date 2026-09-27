import { colors } from '../ui';
import { Page, PageHead, AskBoard, Note } from '../deck';

// P05 · 问题三（蓝图 §5.2）—— 全课的支点
// 🔴 学员会卡住，**卡住就是教学内容**：
//    · 至少 90 秒沉默
//    · 不补充说明、不举例、不换个说法再问一遍（举例等于把答案给了）
//    · 90 秒后只问「写不出来的举手」，然后说「记住这个感觉」
//    · 然后**立刻切 P07，不解释**
//    老师在这里心软给了例子，P07 的现场证明就没有杀伤力了。
// 举手人数要记下来 —— §6.4 三级兜底时它是替代证据。

export default function L10P05_Ask3() {
	return (
		<Page>
			<PageHead phase="do" title="问题三" mark="问题 3 / 4" markBg={colors.red} />
			<AskBoard
				n={3}
				question="这个项目里，有什么是它能看出来、而你其实不知道的？"
				stopAt="5 分钟"
				silent={
					<>
						这一问我不给例子，也不会换个说法再问一遍。
						<br />
						写不出来是正常的。<strong>写不出来这件事本身，就是这一问要教的东西。</strong>
					</>
				}
			/>
			<Note>
				想不出来就坐着想。这里的安静是故意的，不是我在等设备。
			</Note>
		</Page>
	);
}
