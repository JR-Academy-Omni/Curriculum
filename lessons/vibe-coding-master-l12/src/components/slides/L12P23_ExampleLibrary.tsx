import { Page, Code, colors, fonts, border, shadowSm } from '../deck';
import { EX_PRETTIER, EX_COMPACT, EX_CONTEXT, EX_DENY_JSON, EX_NOTIFY, EX_AUDIT, EX_SKILL, EX_TWO_HOOKS } from '../../data/code';

// P23 · 附录一：用法样例库
// 🔴 课上不讲，投屏留在最后给学员拍照。**不带阶段徽章** ——
//    挂个「讲」和「课上不讲」自相矛盾（蓝图 §11.1）。
// 🔴 每条必须标「官方」还是「本课写法」（§12 开头纪律）：
//    混着给，学员分不清哪些有权威背书。
type Example = { cat: string; ev: string; title: string; src: string; code: string; warn?: string };

const EXAMPLES: readonly Example[] = [
	{ cat: '拦', ev: 'PreToolUse', title: '不是禁止，是引导它换做法', src: 'official', code: EX_DENY_JSON },
	{ cat: '拦', ev: 'PreToolUse', title: '拦危险命令 + 同时记日志', src: 'official', code: EX_TWO_HOOKS,
	  warn: '⚠️ 一个 hook 的 deny 拦不住兄弟 hook 的副作用 —— 命令被拦了，日志照样写' },
	{ cat: '补', ev: 'PostToolUse', title: '改完自动格式化', src: 'official', code: EX_PRETTIER,
	  warn: '⚠️ 只看得见 Edit/Write。它用 Bash 改的文件，这个 hook 不知道' },
	{ cat: '灌', ev: 'SessionStart', title: '压缩之后把关键信息灌回去 · 接 L6', src: 'official', code: EX_COMPACT },
	{ cat: '灌', ev: 'UserPromptSubmit', title: '每次提问自动附上当前状态', src: 'official', code: EX_CONTEXT,
	  warn: '⚠️ additionalContext 必须嵌在 hookSpecificOutput 里。放顶层会被静默忽略' },
	{ cat: '提醒', ev: 'Notification', title: '它等你批准时弹通知 · 接 L11', src: 'official', code: EX_NOTIFY },
	{ cat: '审计', ev: 'ConfigChange', title: '配置被改了就记一条', src: 'official', code: EX_AUDIT,
	  warn: 'exit 2 也能拦住变更，但 policy_settings 拦不住' },
	{ cat: '团队', ev: 'Skill frontmatter', title: 'Skill 自带规矩 · 接 L5', src: 'official', code: EX_SKILL,
	  warn: '⚠️ 项目 subagent 的 frontmatter hook 要 workspace trust；skill 的规则不同' },
] as const;

export default function L12P23_ExampleLibrary() {
	return (
		<Page bg="#f4efe8">
			<AppendixHead n="一" title="用法样例库" note="课上不讲 · 拍照带走 · 完整版在讲义 §12" />
			<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, minHeight: 0 }}>
				{EXAMPLES.map((e) => (
					<div key={e.title} style={{
						border, background: colors.white, boxShadow: shadowSm,
						padding: '9px 10px', display: 'flex', flexDirection: 'column', gap: 5, minHeight: 0, minWidth: 0, overflow: 'hidden',
					}}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
							<span style={{
								fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, padding: '2px 7px',
								background: colors.dark, color: colors.white,
							}}>
								{e.cat}
							</span>
							<code style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.blue, fontWeight: 700 }}>
								{e.ev}
							</code>
							<span style={{
								marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 10, fontWeight: 700,
								padding: '2px 6px', background: colors.teal, color: colors.white,
							}}>
								官方
							</span>
						</div>
						<div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>{e.title}</div>
						<Code code={e.code} size={11} wrap style={{ flex: 1, minHeight: 0, boxShadow: 'none', border: '2px solid #000' }} />
						{'warn' in e && e.warn && (
							<div style={{ fontSize: 12, color: colors.red, fontWeight: 700, lineHeight: 1.35 }}>{e.warn}</div>
						)}
					</div>
				))}
			</div>
		</Page>
	);
}

export function AppendixHead({ n, title, note }: { n: string; title: string; note: string }) {
	return (
		<div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14 }}>
			<span style={{
				fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 2,
				padding: '4px 11px', background: colors.black, color: colors.yellow,
			}}>
				附录 {n}
			</span>
			<h2 style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, letterSpacing: -0.5 }}>{title}</h2>
			<span style={{ fontSize: 16, color: '#888' }}>{note}</span>
		</div>
	);
}
