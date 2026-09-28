import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Panel, NumRow } from '../deck';

/**
 * P26 · 作业 + Exit ticket
 * 🔴 §20：Exit ticket 现场只收第 7 题（实物：任务书），其余课后提交。
 *    收不上来的人，这节课对他没有发生。
 */
export default function L11P26_HomeworkExit() {
	return (
		<Page>
			<PageHead phase="write" title="回去做三件事" />

			<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
				<Panel title="📋 作业（必做）" accent={colors.dark} style={{ flex: 1.15 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1, justifyContent: 'center' }}>
						<NumRow n="1" title="真的挂上去跑一次"
							desc="任一通道都行；跑不了通道的人，手工按任务书执行一次。把第一次的回执贴出来。" />
						<NumRow n="2" title="故意让它断一次" color={colors.red}
							desc="切网、改错一个路径、或让凭证临时失效 —— 看你的契约有没有把这件事报出来。没报出来就是契约没写对，改了再交。" />
						<NumRow n="3" title="回答一句：你改了哪一段？"
							desc="第一次跑完之后。几乎所有人都会改第 6 段。" />
					</div>
				</Panel>

				<Panel title="🎫 Exit ticket" accent={colors.red} style={{ flex: 1 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 7, flex: 1, minHeight: 0, justifyContent: 'center' }}>
						{[
							'你那件事挂在第几道闸？',
							'第二问你的答案是什么？',
							'你的「只有你能答的问题」是哪一条？',
							'你选了哪条通道？代价是什么？',
							'你的 needs-human 会在什么情况下出现？',
							'重跑一次安全吗？不安全的话降级成什么？',
						].map((q, i) => (
							<div key={q} style={{ display: 'flex', gap: 10, fontSize: 19, color: '#666', lineHeight: 1.4 }}>
								<span style={{ fontFamily: fonts.mono, color: '#aaa', flexShrink: 0 }}>{i + 1}.</span>
								<span>{q}</span>
							</div>
						))}
						<div style={{
							marginTop: 8, border: `3px solid ${colors.red}`, background: '#fff0f0',
							padding: '12px 14px', display: 'flex', gap: 10,
						}}>
							<span style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900, flexShrink: 0 }}>7.</span>
							<span style={{ fontSize: 21, fontWeight: 900, color: colors.black, lineHeight: 1.4 }}>
								交你的任务书 —— <span style={{ color: colors.red }}>现在只收这一题</span>，其余课后提交。
							</span>
						</div>
					</div>
				</Panel>
			</div>

			<div style={{
				border, boxShadow: shadow, background: colors.dark, color: colors.white,
				padding: '18px 26px', fontSize: 28, fontWeight: 800, lineHeight: 1.45, flexShrink: 0,
			}}>
				你消灭的不是那个问题，是<span style={{ color: colors.yellow }}>那次提问</span>。
				决定还是要有人做 —— 所以它得提前写在任务书里。
			</div>
		</Page>
	);
}
