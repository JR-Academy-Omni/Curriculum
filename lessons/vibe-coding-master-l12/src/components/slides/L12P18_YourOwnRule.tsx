import { ActBadge, Page, Code, colors, fonts, border, shadowSm } from '../deck';
import { SKELETON } from '../../data/code';

// P18 · 挂你自己那条规矩 🎯 硬产物
// 🔴 只给骨架，**不给范文**（蓝图 §14 第 10 条）：给了范文，交上来的全是它的变体。
// 🔴 页面上必须写明课堂交付线，不写这一段必崩（§9.1）。
// 🔴 老师在这六分钟里不许连续讲超过 90 秒，中途只插 P19 一次。
const CELLS = [
	{ n: 1, t: '规矩原话', h: '第一幕抄的那句，说过 __ 遍' },
	{ n: 2, t: '时点', h: '「做了不该做的」→ PreToolUse ／「漏了该做的」→ PostToolUse / Stop' },
	{ n: 3, t: 'matcher', h: '宽了会怎样：________' },
	{ n: 4, t: '判据', h: 'if [[ ____________ ]]; then 拦' },
	{ n: 5, t: '拦住之后说什么', h: '>&2 那句话 —— 它会看到，要写清「为什么」，不是只写 Blocked' },
	{ n: 6, t: '挂在哪', h: '~/.claude/settings.json 只管我　／　.claude/settings.json 管所有克隆的人' },
] as const;

export default function L12P18_YourOwnRule() {
	return (
		<Page>
			<ActBadge act={5} mode="🎯 学员写" />

			<div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 14 }}>
				<h2 style={{ fontFamily: fonts.heading, fontSize: 44, fontWeight: 900, letterSpacing: -1 }}>
					挂你自己那条规矩
				</h2>
				<span style={{
					fontSize: 19, color: colors.white, background: colors.red,
					padding: '5px 14px', border, fontWeight: 700,
				}}>
					交付线：前四格写实 · 脚本只写判据那一行
				</span>
			</div>

			<div style={{ flex: 1, display: 'flex', gap: 24, minHeight: 0 }}>
				<div style={{ flex: 1.15, display: 'flex', flexDirection: 'column', gap: 7 }}>
					{CELLS.map((c) => (
						<div key={c.n} style={{
							border, background: colors.white, boxShadow: shadowSm,
							padding: '9px 14px', display: 'flex', gap: 12, alignItems: 'center',
						}}>
							<span style={{
								fontFamily: fonts.heading, fontSize: 16, fontWeight: 900,
								width: 24, height: 24, background: colors.black, color: colors.yellow,
								display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
							}}>
								{c.n}
							</span>
							<span style={{ fontSize: 20, fontWeight: 800, minWidth: 148, flexShrink: 0 }}>{c.t}</span>
							<span style={{ fontSize: 15, color: '#777', lineHeight: 1.4 }}>{c.h}</span>
						</div>
					))}
					<div style={{
						border: `4px solid ${colors.black}`, background: colors.yellow,
						boxShadow: shadowSm, padding: '11px 16px', display: 'flex', gap: 14, alignItems: 'center',
					}}>
						<span style={{
							fontFamily: fonts.heading, fontSize: 16, fontWeight: 900,
							width: 24, height: 24, background: colors.black, color: colors.yellow,
							display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
						}}>
							7
						</span>
						<span style={{ fontSize: 21, fontWeight: 900 }}>验证</span>
						<span style={{ fontSize: 19, fontWeight: 700 }}>
							☐ 我触发了一次　　☐ 我看见它被拦了
						</span>
					</div>
				</div>

				<div style={{ flex: 0.85, display: 'flex', flexDirection: 'column', minHeight: 0, minWidth: 0 }}>
					<div style={{
						fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
						letterSpacing: 1, color: '#777', marginBottom: 6,
					}}>
						照着改这个 · 你只用动第 6 行和第 7 行
					</div>
					<Code code={SKELETON} size={17} hi={[5, 6]} wrap style={{ flex: 1, minHeight: 0 }} />
					<div style={{
						border, background: colors.dark, color: colors.white,
						padding: '12px 16px', marginTop: 12, fontSize: 17, lineHeight: 1.55,
					}}>
						完整脚本 + 跑通是<b style={{ color: colors.yellow }}>作业第 1 项</b>。
						但如果你那条和刚才那个够像 —— 多半是 —— <b style={{ color: colors.yellow }}>当堂就能跑通，尽量当堂跑。</b>
					</div>
				</div>
			</div>
		</Page>
	);
}
