import { ActBadge, Instruction, ChatSignal, Code, colors, fonts } from '../deck';

// P11 · 标成 approved，跑 🎬⭐⭐ 第二次红
// 🔴 这一格是收口的地基。上一版没有这一步，导致「全节最重要的那条检查」
//    在课堂上从来没红过，学员只听过没见过（蓝图 §7.2）。
// 🔥 埋点 2：这次红，P22 收口回收。
// 🔴 讲师说完那三句要停，不要接着讲下一页。
const CHECK4 = `hdr('4. 标了 approved 的文件不许残留 [to supply]');
let gaps = 0;
for (const f of ls('rules')) {
  if (f === 'INDEX.md') continue;
  const body = read(\`rules/\${f}\`);
  const n = (body.match(/\\[to supply\\]/g) || []).length;
  gaps += n;
  if (/^Status:\\s*approved\\s*$/m.test(body) && n > 0)
    bad(\`rules/\${f} 标了 approved 但还有 \${n} 处 [to supply]\`);
}
note(\`当前共 \${gaps} 处 [to supply]。这是故意的。\`);`;

export default function L13P14_MarkApproved() {
	return (
		<div style={{ width: '100%', height: '100%', position: 'relative' }}>
			<ActBadge act={3} mode="🎬 你自己触发" />
			<Instruction
				kicker="挑一份你觉得已经写完了的"
				sub={<>在最上面加一行 <code style={{ fontFamily: fonts.mono, color: colors.yellow }}>Status: approved</code>，然后跑。</>}
			>
				把它标成<span style={{ color: colors.yellow }}>「生效」</span>。
			</Instruction>

			<div style={{ position: 'absolute', top: 92, right: 48, width: 560, opacity: 0.95 }}>
				<Code label="先加检查④" code={CHECK4} size={14} wrap />
			</div>

			<div style={{
				position: 'absolute', bottom: 132, left: 0, right: 0,
				display: 'flex', justifyContent: 'center',
			}}>
				<div style={{
					border: `3px solid ${colors.yellow}`, background: 'rgba(255,222,89,0.08)',
					padding: '14px 24px', maxWidth: 980,
				}}>
					<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.yellow, letterSpacing: 2, marginBottom: 8 }}>
						你刚才做的事有个名字
					</div>
					<div style={{ fontSize: 22, color: colors.white, lineHeight: 1.65 }}>
						「这份文件写完了吗」是<b style={{ color: colors.red }}>判断题</b>，机器判不了。
						「有没有残留 <code style={{ fontFamily: fonts.mono }}>[to supply]</code>」是
						<b style={{ color: colors.green }}>形状题</b>，机器一眼就判得出来。
						<br />
						<b style={{ color: colors.yellow }}>你把一道判断题，换成了一道形状题。</b>
					</div>
				</div>
			</div>

			<ChatSignal>
				<span>它会说一句话。</span>
				<code style={{
					fontFamily: fonts.mono, fontSize: 20, fontWeight: 700,
					padding: '6px 16px', background: colors.red, color: colors.white,
					border: `3px solid ${colors.black}`,
				}}>你还没写完。</code>
			</ChatSignal>
		</div>
	);
}
