import { colors, border, shadow } from '../ui';
import { Page, PageHead, Verdict } from '../deck';

/**
 * P24 · 讲评规则
 * 🔴 只问「你挂在第几道闸」和「你的 needs-human 长什么样」，不判任务好坏。
 *    一判好坏，框架当场退化成「老师觉得哪些事能自动化」，学员回去就不用了。
 */
export default function L11P24_ReviewRule() {
	return (
		<Page>
			<PageHead phase="talk" title="讲评：我只问两个问题" />

			<div style={{ display: 'flex', flexDirection: 'column', gap: 18, flexShrink: 0 }}>
				{[
					'你挂在第几道闸？',
					'你的 needs-human 会在什么情况下出现？',
				].map((q, i) => (
					<div key={q} style={{
						border, boxShadow: shadow, background: colors.white,
						padding: '22px 28px', display: 'flex', alignItems: 'center', gap: 20,
					}}>
						<span style={{
							flexShrink: 0, width: 46, height: 46, background: colors.dark, color: colors.white,
							fontSize: 24, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center',
							border: `3px solid ${colors.black}`,
						}}>{i + 1}</span>
						<span style={{ fontSize: 32, fontWeight: 900, color: colors.black }}>{q}</span>
					</div>
				))}
			</div>

			<div style={{
				border: `3px solid ${colors.red}`, background: '#fff0f0',
				padding: '18px 24px', fontSize: 25, lineHeight: 1.5, color: colors.dark, flexShrink: 0,
			}}>
				<strong>我不评价你那件事该不该自动化。</strong>
				一判好坏，这套东西当场就退化成「老师觉得哪些事能交」—— 那你回去就不会用了。
			</div>

			<div style={{ flex: 1 }} />

			<Verdict bg={colors.teal} label="今天最值得被听见的一种回答">
				「我判断它<span style={{ color: colors.yellow }}>现在还不能交</span>，因为……」——
				这不是没完成作业，这是本节最正确的一个决定。
			</Verdict>
		</Page>
	);
}
