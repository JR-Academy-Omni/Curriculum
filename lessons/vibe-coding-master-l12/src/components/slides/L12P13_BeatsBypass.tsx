import { ActBadge, Page, Head, OfficialQuote, SoBar, colors, fonts, border, shadowSm } from '../deck';

// P13 · 它压得过 --dangerously-skip-permissions ⭐⭐
// 🔴 本节和 L11 的接口。两句官方原文都要投，且**各落一个「所以」**（蓝图 §8.3）。
export default function L12P13_BeatsBypass() {
	return (
		<Page>
			<ActBadge act={4} />
			<Head sub={<>上节课那三条让它不卡住的做法（提前批 / 取消问 / 全放开），最大的代价是：<b>你放开的时候，把该拦的也一起放开了。</b>今天这一页是那三条的解药。</>}>
				它压得过 <code style={{ fontFamily: fonts.mono, color: colors.red }}>--dangerously-skip-permissions</code>
			</Head>

			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' }}>
				<div>
					<OfficialQuote>
						<b>PreToolUse</b> hooks fire <b>before any permission-mode check</b>, in every permission mode,
						including <code>dontAsk</code>. A hook that returns <code>permissionDecision: "deny"</code> blocks
						the tool <b>even in bypassPermissions mode or with --dangerously-skip-permissions</b>.
					</OfficialQuote>
					<SoBar>
						你可以<b>放开权限让它跑得飞快</b>，同时保证有三件事它<b>永远</b>碰不到。
					</SoBar>
				</div>

				<div>
					<OfficialQuote>
						The reverse is not true: a hook returning <code>"allow"</code> doesn't bypass deny rules from
						settings… <b>Hooks can tighten restrictions but not loosen them</b> past what permission rules allow.
					</OfficialQuote>
					<SoBar color={colors.blue}>
						hook <b>不是后门</b>。你没法用它给自己开一条设置里禁掉的路。
					</SoBar>
				</div>
			</div>

			<div style={{
				border, background: colors.dark, color: colors.white, boxShadow: shadowSm,
				padding: '18px 26px', marginTop: 12, display: 'flex', alignItems: 'center', gap: 24,
			}}>
				<span style={{
					fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, color: colors.yellow, flexShrink: 0,
				}}>
					这是设计，不是限制。
				</span>
				<span style={{ fontSize: 21, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)' }}>
					一个能放宽的 hook，等于把安全边界交给了<b style={{ color: colors.white }}>每个能改配置文件的人</b>。
				</span>
			</div>
		</Page>
	);
}
