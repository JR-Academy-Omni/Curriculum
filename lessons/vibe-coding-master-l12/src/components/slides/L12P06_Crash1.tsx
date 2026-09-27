import { ActBadge, Page, Code, colors, fonts, border, shadow } from '../deck';
import { CRASH1 } from '../../data/code';

// P06 · 翻车①：拦太宽 🎬 学员触发
// 🔴 三次翻车全部是学员改自己的 hook 触发的，老师只发指令，不演（蓝图 §10.1 铁律 3）。
// 🔥 埋点 3：「一个被关掉的 hook，和没挂过是一回事。」→ P10 闸④回收。
export default function L12P06_Crash1() {
	return (
		<Page bg={colors.dark}>
			<ActBadge act={3} mode="🎬 你自己触发" />

			<div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 50 }}>
				<div style={{ flex: 1 }}>
					<div style={{
						fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 2,
						color: colors.orange, marginBottom: 12,
					}}>
						翻车 ①
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 52, fontWeight: 900,
						color: colors.white, lineHeight: 1.2, letterSpacing: -1, marginBottom: 26,
					}}>
						把这行改成
						<br />
						一个字符
					</h2>
					<Code code={CRASH1} hi={[0]} hiColor={colors.orange} size={24} />
					<p style={{ fontSize: 24, color: 'rgba(255,255,255,0.72)', marginTop: 24, lineHeight: 1.6 }}>
						改完，让它改<b style={{ color: colors.white }}>任何一个</b>文件。
						<br />
						随便哪个都行。
					</p>
				</div>

				<div style={{ flex: 1 }}>
					<div style={{
						border: `3px solid ${colors.orange}`, background: 'rgba(255,145,77,0.08)',
						boxShadow: `6px 6px 0px ${colors.orange}`, padding: '32px 30px',
					}}>
						<div style={{ fontSize: 27, color: colors.white, lineHeight: 1.65, marginBottom: 22 }}>
							现在这个 hook <b style={{ color: colors.orange }}>百分之百有效</b>。
							<br />
							它一次都没让你的规矩被违反过。
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 40, fontWeight: 900,
							color: colors.white, lineHeight: 1.25, letterSpacing: -1,
						}}>
							而它也让你
							<br />
							<span style={{ color: colors.orange }}>一件事都做不成。</span>
						</div>
					</div>

					<div style={{
						border, background: colors.yellow, boxShadow: shadow,
						padding: '18px 24px', marginTop: 24,
					}}>
						<div style={{ fontSize: 23, fontWeight: 700, lineHeight: 1.55 }}>
							你回去三天之内会把它关掉。
							<br />
							而一个被关掉的 hook，<b>和没挂过是一回事。</b>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}
