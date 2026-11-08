import { DeckFrame, Panel, Label, colors } from '../kit';

export default function S03e_IssuePR() {
	return <DeckFrame tag="今天的主线 · 人在哪里" title="Issue 是收件箱，Pull Request 是签字栏" subtitle="自动化最难的是「人什么时候插手」。GitHub 把这两件事都做成了现成的按钮。">
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, height: '100%' }}>
			<Panel style={{ borderTop: `14px solid ${colors.blue}` }}>
				<Label bg={colors.blue}>ISSUE · 进来的事</Label>
				<div style={{ fontSize: 24, lineHeight: 1.6, marginTop: 16 }}>
					客户来信、一个想法、一次异常报警，都开成一个 Issue。<br />
					自动化看到新 Issue 就开工，把结果<b>评论在下面</b>。<br />
					要它返工？你在下面回一句就行，回复本身也能触发下一次。
				</div>
			</Panel>
			<Panel style={{ borderTop: `14px solid ${colors.green}` }}>
				<Label bg={colors.green} color={colors.dark}>PULL REQUEST · 要生效的事</Label>
				<div style={{ fontSize: 24, lineHeight: 1.6, marginTop: 16 }}>
					AI 不直接改你的资料。它在旁边的分支上改好，提一个 PR。<br />
					你看改了哪几行（绿色加、红色删），<b>点 Merge 才算数</b>。<br />
					不满意就关掉，原来的资料一个字都没动。
				</div>
			</Panel>
		</div>
	</DeckFrame>;
}
