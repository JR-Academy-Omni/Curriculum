import { ActBadge, Page, Code, FS, colors, fonts, border, shadowSm } from '../deck';
import { PROTECT_SH, SETTINGS_PRE } from '../../data/code';

// P03 · 三步，跟我一起做 🎯 全班动手 —— 本节地基
// 🔴 全班挂同一个，不许各挂各的（蓝图 §6.2）：各挂各的会有一半人卡在自己的
//    特殊情况上，这十分钟就废了。学员自己那条留到第五幕（P18）。
// 🔴 脚本用 Node（.mjs），不用 bash + jq —— 演示与学员仓库都是 Node 项目。
//    连带好处：`node xxx.mjs` 不需要 chmod +x，原来的第 2 步直接消失，
//    这一页从四步回到名副其实的**三步**。
// 🔴 出处：官方文档给的是 bash + jq 版，这里是它的 Node 等价实现（标注为「本课写法」）。
//    三行机制一个字没变 —— 这本身就是 P05 要讲的点：jq 从来不是机制的一部分。
function StepTag({ n, children }: { n: number; children: React.ReactNode }) {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
			<span style={{
				fontFamily: fonts.heading, fontSize: 17, fontWeight: 900,
				width: 26, height: 26, borderRadius: 13, background: colors.black,
				color: colors.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center',
				flexShrink: 0,
			}}>
				{n}
			</span>
			<span style={{ fontSize: 21, fontWeight: 700 }}>{children}</span>
		</div>
	);
}

export default function L12P03_ThreeSteps() {
	return (
		<Page>
			<ActBadge act={2} mode="🎯 全班动手" />

			<div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 14 }}>
				<h2 style={{
					fontFamily: fonts.heading, fontSize: 42, fontWeight: 900, letterSpacing: -1,
				}}>
					三步，跟我一起做
				</h2>
				<span style={{ fontSize: 20, color: '#666' }}>
					全班挂同一个 · Node 版 · 你自己那条留到最后
				</span>
			</div>

			<div style={{ flex: 1, display: 'flex', gap: 26, minHeight: 0 }}>
				{/* 左：脚本 */}
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, minWidth: 0 }}>
					<StepTag n={1}>建脚本 <code style={{ fontFamily: fonts.mono, fontSize: 18 }}>.claude/hooks/protect-files.mjs</code></StepTag>
					<Code code={PROTECT_SH} size={17} hi={[15, 16]} wrap label="[本课] Node 版 · 官方文档给的是 bash + jq，机制完全相同" style={{ flex: 1, minHeight: 0 }} />
				</div>

				{/* 右：步骤 2 / 3 */}
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18, minHeight: 0, minWidth: 0 }}>
					<div style={{ flex: 1, minHeight: 0, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
						<StepTag n={2}>挂上去 <code style={{ fontFamily: fonts.mono, fontSize: 18 }}>.claude/settings.json</code></StepTag>
						<Code code={SETTINGS_PRE} size={16} hi={[0, 1]} wrap style={{ flex: 1, minHeight: 0 }} />
						<div style={{ fontSize: 15, color: colors.red, fontWeight: 700, marginTop: 6 }}>
							⚠️ 用 <code style={{ fontFamily: fonts.mono }}>node</code> 调用 → 不用 <code style={{ fontFamily: fonts.mono }}>chmod +x</code>；扩展名必须 <code style={{ fontFamily: fonts.mono }}>.mjs</code>
						</div>
					</div>

					<div>
						<StepTag n={3}>验证挂上了没有</StepTag>
						<div style={{
							border, background: colors.yellow, boxShadow: shadowSm,
							padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 14,
						}}>
							<code style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700 }}>/hooks</code>
							<span style={{ fontSize: 18 }}>
								在 <code style={{ fontFamily: fonts.mono }}>PreToolUse</code> 底下看到它 → <b>举手</b>
							</span>
						</div>
						<div style={{ fontSize: FS.note, color: '#666', marginTop: 6 }}>
							这个菜单是<b>只读</b>的。而且看得到<b>只证明 JSON 被解析了</b> —— 会不会拦，下一页才知道。
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}
