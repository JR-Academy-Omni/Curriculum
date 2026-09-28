import { Page, Code, colors, fonts, border, shadowSm } from '../deck';
import { AppendixHead } from './L12P23_ExampleLibrary';
import { DEBUG_DUMP } from '../../data/code';

// P25 · 附录三：它不工作的时候
// 🔴 课上不讲。排错八条 —— 学员回去天天用的一页。
type Row = { s: string; f: string; hot?: boolean };

const ROWS: readonly Row[] = [
	{ s: '压根没触发', f: '/hooks 看它在不在正确的事件下面 · matcher 大小写对不对 · 事件选对没有（Pre 在前 Post 在后）' },
	{ s: 'command not found', f: '用绝对路径或 ${CLAUDE_PROJECT_DIR} · 想彻底躲开 shell 引号问题，加 "args": [] 切成 exec form' },
	{ s: 'jq: command not found', f: '装 jq，或改用 Python / Node 解析（讲义例 A-1b）' },
	{ s: '脚本根本没跑', f: 'chmod +x 忘了。这是最常见的一条', hot: true },
	{ s: 'hook error 红字', f: '退出码用错了 —— 只有 0 和 2 有特殊含义。单独喂 JSON 测一下' },
	{ s: 'JSON 不生效', f: '校验信息 = schema 不对；解析信息 = 格式不对。用 jq 构造输出，别字符串拼接' },
	{ s: '/hooks 里看不见', f: '几秒后还没有就重启会话 · 检查 JSON 有没有尾逗号或注释（都不允许）' },
	{ s: '想看到底发生了什么', f: 'claude --debug 启动，或会话里敲 /debug' },
] as const;

export default function L12P25_Troubleshoot() {
	return (
		<Page bg="#f4efe8">
			<AppendixHead n="三" title="它不工作的时候" note="课上不讲 · 你回去天天用的一页" />

			<div style={{ flex: 1, display: 'flex', gap: 24, minHeight: 0 }}>
				<div style={{ flex: 1.25, display: 'flex', flexDirection: 'column', gap: 6 }}>
					{ROWS.map((r) => (
						<div key={r.s} style={{
							display: 'flex', gap: 14, alignItems: 'center',
							border: r.hot ? `3px solid ${colors.red}` : border,
							background: r.hot ? colors.yellow : colors.white,
							boxShadow: r.hot ? shadowSm : 'none',
							padding: '9px 14px',
						}}>
							<span style={{
								fontSize: 17, fontWeight: 800, minWidth: 190, flexShrink: 0,
								color: r.hot ? colors.black : colors.dark,
							}}>
								{r.s}
							</span>
							<span style={{ fontSize: 16, lineHeight: 1.45, color: '#444' }}>{r.f}</span>
						</div>
					))}
				</div>

				<div style={{ flex: 0.75, display: 'flex', flexDirection: 'column', gap: 14 }}>
					<div style={{
						border: `4px solid ${colors.black}`, background: colors.yellow,
						boxShadow: shadowSm, padding: '16px 18px',
					}}>
						<div style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900, marginBottom: 8, lineHeight: 1.3 }}>
							搞不清某个事件<br />给了你什么字段？
						</div>
						<div style={{ fontSize: 17, lineHeight: 1.55, marginBottom: 12 }}>
							<b>别查文档。</b>加这一行，触发一次，去看那个文件。
						</div>
						<Code code={DEBUG_DUMP} size={14} hi={[1]} style={{ boxShadow: 'none' }} />
						<div style={{ fontSize: 15, marginTop: 10, fontWeight: 700 }}>
							比查表快十倍。
						</div>
					</div>

					<div style={{
						border, background: colors.dark, color: colors.white,
						padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
					}}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: 2, color: colors.yellow, marginBottom: 10 }}>
							记住这一句
						</div>
						<div style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.55 }}>
							hook 挂上 <span style={{ color: colors.red }}>≠</span> 生效。
							<br />
							<b style={{ color: colors.yellow }}>你得看见它拦成功过一次，才算数。</b>
						</div>
					</div>

					<div style={{ border, background: colors.white, padding: '12px 16px', fontSize: 14, lineHeight: 1.55, color: '#555' }}>
						官方文档：<br />
						<code style={{ fontFamily: fonts.mono, fontSize: 13 }}>code.claude.com/docs/en/hooks-guide</code><br />
						<code style={{ fontFamily: fonts.mono, fontSize: 13 }}>code.claude.com/docs/en/hooks</code><br />
						<span style={{ color: colors.red, fontWeight: 700 }}>以当天版本为准。</span>
					</div>
				</div>
			</div>
		</Page>
	);
}
