import { colors, fonts, border, shadow } from '../ui';
import { Page, Code, Note } from '../deck';

/**
 * P29 · 附录：断网之后把会话拉回来接着跑（本地 / 命令行通道）
 *
 * 🔴 这是一页【附录】，课上不讲，不占 96 分钟 —— 投屏留在最后给学员拍照。
 *    正因为不讲，它是全 deck 唯一允许写具体命令行参数的一页
 *    （正课页面按 §19.1 只写能力描述）。页面上必须写明「以当天官方文档为准」。
 *
 * 🔴 这一页要防住的误解：把「续跑」当成「重跑」。
 *      重跑：从头再来，要求幂等
 *      续跑：从断的地方接着做，不要求幂等 ——
 *            但它把上次的 context 一起拖过来，那正是 L6 说的稀释和污染。
 *    所以必须有上限。无限续跑 = 你在用一个越来越脏的 context 硬撑。
 */
export default function L11P29_AppendixResumeSession() {
	return (
		<Page style={{ gap: 14 }}>
			<div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
				<span style={{
					background: colors.dark, color: colors.yellow, padding: '4px 14px',
					fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 2,
					border: `2px solid ${colors.black}`,
				}}>附录 · 课后自取</span>
				<span style={{ fontSize: 17, color: '#888' }}>这一页课上不讲，留着拍照</span>
			</div>

			{/* 不用 PageHead —— 它带阶段徽章，而这一页课上不讲，挂个「讲」自相矛盾 */}
			<div style={{ flexShrink: 0 }}>
				<h2 style={{
					fontFamily: fonts.heading, fontSize: 44, fontWeight: 900,
					lineHeight: 1.18, color: colors.black, letterSpacing: -0.5,
				}}>断网之后，把会话拉回来接着跑</h2>
				<p style={{ fontSize: 26, color: '#555', marginTop: 8, lineHeight: 1.5 }}>
					只有<strong>本地 / 命令行</strong>通道能用 —— 云端每次重新克隆，没有本地会话可续。
				</p>
			</div>

			<div style={{ display: 'flex', gap: 16, flex: 1, minHeight: 0 }}>
				<Code label="断了之后：不是重跑，是续跑" size={20} style={{ flex: 1.35 }}>
{`# 1) 正常跑：顺手把会话 id 存下来 —— 断了才有得续
<你的 agent 命令> --output-format json > .agent/last-run.json
jq -r .session_id .agent/last-run.json  > .agent/session_id

# 2) 断了、而且没有回执 → 把那个会话拉回来接着做
<你的 agent 命令> "接着上次没做完的继续，按原任务书执行" \\
    --resume "$(cat .agent/session_id)" \\
    --output-format json > .agent/last-run.json

# 3) 成功了就把会话 id 清掉，别留给下一个周期
rm -f .agent/session_id`}
				</Code>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0 }}>
					<div style={{
						border: `3px solid ${colors.red}`, background: '#fff0f0',
						boxShadow: `4px 4px 0 ${colors.red}`, padding: '12px 16px', flexShrink: 0,
					}}>
						<div style={{ fontSize: 22, fontWeight: 900, color: colors.black, marginBottom: 8 }}>
							续跑 ≠ 重跑
						</div>
						<div style={{ fontSize: 19, lineHeight: 1.5, color: '#444' }}>
							<strong>重跑</strong>：从头再来 —— <strong style={{ color: colors.red }}>要求幂等</strong>。<br />
							<strong>续跑</strong>：从断的地方接着做 —— 不要求幂等，
							<strong style={{ color: colors.red }}>但它把上次的 context 一起拖过来</strong>。
						</div>
					</div>

					<div style={{
						border, background: colors.white, boxShadow: '4px 4px 0 #000',
						padding: '12px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
					}}>
						<div style={{ fontSize: 20, lineHeight: 1.5, color: colors.dark }}>
							那正是 L6 诊断出来的病：<strong>稀释、错误累积</strong>。
							<div style={{ marginTop: 8, fontSize: 21, fontWeight: 900, color: colors.red }}>
								所以续跑要有上限，两次封顶。
							</div>
							<div style={{ marginTop: 6, fontSize: 19, color: '#666' }}>
								无限续跑 = 你在用一个<strong>越来越脏的 context</strong> 硬撑。
								到顶了就该重跑（先确认幂等），或者你自己接手。
							</div>
						</div>
					</div>
				</div>
			</div>

			<div style={{
				border, boxShadow: shadow, background: colors.teal, color: colors.white,
				padding: '12px 20px', fontSize: 21, fontWeight: 700, lineHeight: 1.4, flexShrink: 0,
			}}>
				完整实现在 starter kit：<code style={{ color: colors.yellow }}>watchdog.sh</code>（把
				<code style={{ color: colors.yellow }}> CONTINUE_ON_BREAK</code> 设成 1）+
				<code style={{ color: colors.yellow }}> lib/session.sh</code>。自检里有两项专门测它。
			</div>

			<Note>
				⚠️ 上面的具体参数<strong>会变</strong>，以你用的工具当天的官方文档为准。这一页要你记的是<strong>形状</strong>，不是背命令。
			</Note>
		</Page>
	);
}
