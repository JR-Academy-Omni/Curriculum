import { colors, fonts } from '../ui';
import { Page, PageHead, PracticeBoard, Note } from '../deck';

// P13 · 打开你自己的 CLAUDE.md（蓝图 §8.1 第二步）
// 🔴 这一页是 P19 退化反转页的**引信**。老师只埋，不点：
//    问完「有几条已经不成立了」，说一句「先记着，一会儿回来算这笔账」，
//    然后**立刻往下走**，不许在这里解释为什么会过期。
// 🔴 上限 15 条（不加上限这一步会吃掉整个 §8.1）。
// 🔴 老师要先报自己的数字（§16 附录 A.4 课前必填）。
// 🔴 学员的 CLAUDE.md 是个人材料，不许要求投屏或上交内容，只交数字（§19.2）。

export default function L10P13_OpenYourClaudeMd() {
	return (
		<Page>
			<PageHead
				phase="do"
				title="打开你自己现在在用的那份规则文件"
				mark="搬运 1 / 4"
				markBg={colors.purple}
			/>

			<PracticeBoard
				doWhat={
					<div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
						<div>打开 <code style={{ fontFamily: fonts.mono, background: '#eee', padding: '1px 7px' }}>CLAUDE.md</code>（或者你给 AI 写过的任何规则文件），逐条过一遍，每条标一个字：</div>
						<div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
							{[
								{ t: '仍成立', c: colors.green, fg: colors.black },
								{ t: '已过期', c: colors.red, fg: colors.white },
								{ t: '不确定', c: colors.yellow, fg: colors.black },
							].map((x) => (
								<span key={x.t} style={{
									background: x.c, color: x.fg, padding: '5px 16px',
									fontSize: 22, fontWeight: 900, border: `3px solid ${colors.black}`,
								}}>{x.t}</span>
							))}
						</div>
						<div style={{
							background: '#fff8e5', border: `3px solid ${colors.orange}`,
							padding: '12px 16px', fontSize: 21, lineHeight: 1.5,
						}}>
							<strong>上限 15 条。</strong>文件更长的，只标「你印象里最常被它违反的那 15 条」。
						</div>
					</div>
				}
				criteria={[
					<>每条都有一个标记，没有跳过的</>,
					<>数出<strong>已过期</strong>有几条</>,
					<>挑出最离谱的那一条，留着</>,
				]}
				stopAt="6 分钟"
				warn={<>不用给任何人看文件内容。<strong>一会儿只报数字。</strong></>}
			/>

			<Note>
				这个数字先记住。<span style={{ color: colors.red, fontWeight: 700 }}>一会儿我们回来算这笔账。</span>
			</Note>
		</Page>
	);
}
