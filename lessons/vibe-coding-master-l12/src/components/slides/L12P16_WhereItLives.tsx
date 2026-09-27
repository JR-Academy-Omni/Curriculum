import { ActBadge, Page, Head, LOCATIONS, colors, fonts, border, shadowSm } from '../deck';

// P16 · 挂在哪个文件 = 谁受它管 ⭐ 本节最值钱的一格
// 🔴 第二行必须高亮：项目级 .claude/settings.json 能提交进仓库，
//    克隆的人自动受管、不需要同意 —— 这是前十一节唯一一次跨过「你自己」。
// 🔴 必须讲反面三条纪律，不许只讲好处（蓝图 §8.6）。
export default function L12P16_WhereItLives() {
	return (
		<Page>
			<ActBadge act={4} />
			<Head>挂在哪个文件 <span style={{ color: colors.blue }}>= 谁受它管</span></Head>

			<div style={{ flex: 1, display: 'flex', gap: 26, minHeight: 0 }}>
				<div style={{ flex: 1.3, display: 'flex', flexDirection: 'column', gap: 5 }}>
					{LOCATIONS.map((l) => (
						<div
							key={l.path}
							style={{
								display: 'flex', alignItems: 'center', gap: 12,
								border: l.star ? `4px solid ${colors.black}` : border,
								background: l.star ? colors.yellow : colors.white,
								boxShadow: l.star ? shadowSm : 'none',
								padding: l.star ? '13px 16px' : '8px 14px',
							}}
						>
							<code style={{
								fontFamily: fonts.mono, fontSize: l.star ? 18 : 15,
								fontWeight: l.star ? 700 : 400, flex: 1.25, minWidth: 0,
							}}>
								{l.path}
							</code>
							<span style={{ fontSize: l.star ? 18 : 15, flex: 0.85, color: '#555', fontWeight: l.star ? 700 : 400 }}>
								{l.who}
							</span>
							<span style={{
								fontSize: l.star ? 18 : 15, flex: 1, fontWeight: l.star ? 900 : 400,
								color: l.star ? colors.black : '#777',
							}}>
								{l.star && '⭐ '}{l.share}
							</span>
						</div>
					))}
				</div>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
					<div style={{ border, background: colors.dark, color: colors.white, padding: '20px 22px' }}>
						<div style={{ fontSize: 21, lineHeight: 1.75 }}>
							你把它提交进仓库。明天你同事克隆下来，
							<b style={{ color: colors.yellow }}>他的 Claude Code 自动就受这条规矩管。</b>
							<br /><br />
							他不需要读 CLAUDE.md，不需要知道有这回事，
							<b style={{ color: colors.yellow }}>也不需要同意。</b>
						</div>
						<div style={{
							marginTop: 14, paddingTop: 14, borderTop: '2px solid rgba(255,255,255,0.2)',
							fontSize: 18, color: 'rgba(255,255,255,0.62)',
						}}>
							这是今天唯一一个<b style={{ color: colors.white }}>跨过「你自己」</b>的能力。
							前十一节教的全是怎么管好你自己那一个会话。
						</div>
					</div>

					<div style={{
						border: `4px solid ${colors.red}`, background: 'rgba(255,87,87,0.07)',
						padding: '18px 22px', flex: 1, minHeight: 0,
					}}>
						<div style={{
							fontFamily: fonts.heading, fontSize: 25, fontWeight: 900, color: colors.red, marginBottom: 12,
						}}>
							反过来也成立
						</div>
						<div style={{ fontSize: 20, lineHeight: 1.6, marginBottom: 14 }}>
							你克隆一个仓库，就<b>同时接受了它每一条 hook</b>。
							<br />
							而 hook 是<b style={{ color: colors.red }}>会在你机器上自动执行的 shell</b>。
						</div>
						{[
							'克隆陌生仓库之后，敲一下 /hooks 看一眼',
							'别只看 settings.json —— Skill / Subagent frontmatter 里也能挂',
							'想整体关掉：disableAllHooks，但项目设置可能覆盖你的',
						].map((t, i) => (
							<div key={i} style={{ display: 'flex', gap: 9, fontSize: 17, lineHeight: 1.5, marginBottom: 6 }}>
								<span style={{ color: colors.red, fontWeight: 900, flexShrink: 0 }}>{i + 1}</span>
								<span>{t}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</Page>
	);
}
