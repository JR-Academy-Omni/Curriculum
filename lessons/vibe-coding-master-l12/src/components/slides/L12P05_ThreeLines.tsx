import { ActBadge, Page, Head, Code, OfficialQuote, FS, colors, fonts, border, shadowSm } from '../deck';
import { STDIN_JSON, ANATOMY } from '../../data/code';

// P05 · 你刚才做了什么：三行机制 ⭐
// 🔴 趁手感还在立刻讲机制。把学员刚写的那个脚本逐行对上去 ——
//    三行机制不是抽象概念，是他五分钟前刚敲进去的东西（蓝图 §6.5）。
// 🔥 埋点 2：「你的规矩，就是那一行 if。」→ P14 回收。
export default function L12P05_ThreeLines() {
	return (
		<Page>
			<ActBadge act={2} />
			<Head sub={<>你刚才做的事，机制只有<b>三行</b>。</>}>
				你刚才做了什么
			</Head>

			<div style={{ flex: 1, display: 'flex', gap: 26, minHeight: 0 }}>
				{/* 左：它给你 */}
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, minWidth: 0 }}>
					<Arrow label="它给你" text="一坨 JSON 进 stdin" color={colors.blue} />
					<Code code={STDIN_JSON} size={19} hi={[5, 6, 7]} style={{ flex: 1, minHeight: 0 }} />
				</div>

				{/* 右：你给它 + 脚本对照 */}
				<div style={{ flex: 1.25, display: 'flex', flexDirection: 'column', minHeight: 0, minWidth: 0, gap: 12 }}>
					<Arrow label="你给它" text="一个退出码" color={colors.red} />
					<div style={{ display: 'flex', gap: 10 }}>
						{[
							{ c: 'exit 0', t: '我不表态', bg: colors.white },
							{ c: 'exit 2', t: '拦住 + stderr 变成给它的反馈', bg: colors.yellow },
						].map((x) => (
							<div key={x.c} style={{
								border, background: x.bg, boxShadow: shadowSm, padding: '10px 14px', flex: 1,
							}}>
								<code style={{ fontFamily: fonts.mono, fontSize: 21, fontWeight: 700 }}>{x.c}</code>
								<div style={{ fontSize: 16, marginTop: 3, lineHeight: 1.4 }}>{x.t}</div>
							</div>
						))}
					</div>
					<Code code={ANATOMY} size={18} hi={[5]} label="就是你刚敲的那个脚本" style={{ flex: 1, minHeight: 0 }} />
				</div>
			</div>

			<OfficialQuote style={{ marginTop: 16 }}>
				Exit 0 … For a <b>PreToolUse</b> hook <b>this doesn't approve the tool call</b>:
				the normal permission flow still applies.
			</OfficialQuote>
			<div style={{ fontSize: FS.note, color: colors.red, fontWeight: 700, marginTop: 8 }}>
				把 exit 0 当放行的人，会以为自己批准了，其实什么都没发生。
			</div>
		</Page>
	);
}

function Arrow({ label, text, color: c }: { label: string; text: string; color: string }) {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
			<span style={{
				fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 1,
				padding: '5px 13px', background: c, color: colors.white, border,
			}}>
				{label}
			</span>
			<span style={{ fontSize: 22, fontWeight: 700 }}>{text}</span>
		</div>
	);
}
