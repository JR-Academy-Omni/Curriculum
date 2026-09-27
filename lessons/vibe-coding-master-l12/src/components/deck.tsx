import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts, border, shadow, shadowSm } from './ui';

// ============================================================
// L12《Claude Hook》deck 的共享构件
// SoT：VIBE_CODING_MASTER_L12_BLUEPRINT.md v1.0 §11.1「Deck 性质」
//
//   · 每页只承担一个教学任务
//   · 🔴 P00–P11 不许出现：判断线 / 四步图 / 时点二维图 / 「判据」二字。
//        前三幕学员在动手和被咬，不在学框架（§10.1 铁律 1）。
//   · 🔴 **deck 上不许出现绝对分钟数**（沿用 L10 / L11 的教训）。绝对刻度
//        从上课那一刻起算，属于讲师；上课晚开始 5 分钟就全 deck 失效。
//        时间表只存在于 RUNSHEET。
//   · 🔴 **deck 里不留任何待填空白。** 讲师个人素材（K.1–K.6）只进 RUNSHEET。
//   · 🔴 **任何一页都不许出现填好的样例 hook**（§14 第 10 条）。骨架给，范文不给
//        —— 给了范文，收上来的全是它的变体。
//   · 🔴 动手页只放**指令和代码**，不放结果截图 —— 放了学员就低头看屏幕，
//        不看自己终端（§11.1）。
//   · **代码块是本 deck 的一等公民**（与 L10 / L11 不同）。等宽正文 ≥ 22px。
//   · 本节没有标准答案：deck 上不许出现「正确答案应该是……」（§21.2）
//   · 不用本课程仓库自己的 .claude / Skill / hook 当例子（§21.2 全系列纪律）
// ============================================================

/** 字号下限（§11.1）。所有页面只能从这里取值，不允许写更小的数字。 */
export const FS = {
	body: 26,
	bodyLg: 30,
	code: 22,
	codeSm: 20,
	note: 16,
} as const;

/** 第一幕（P00–P03）唯一允许的强调色 —— 中性，绝不泄露后面的框架 */
export const ACT1 = colors.dark;
/** 第二幕：挂上了，它绕不过去 —— 成功色 */
export const ACT2 = colors.green;
/** 第三幕：它咬人了 —— 警告色 */
export const ACT3 = colors.red;
/** 判断线主色。🔴 只能从 P12 开始用。 */
export const GATE = colors.teal;
/** 时点二维图主色。🔴 只能从 P13 开始用。 */
export const SLOT = colors.blue;

// ── 幕徽章 ────────────────────────────────────────
// 🔴 附录页（P25–P27）不带徽章 —— 挂个「讲」和「课上不讲」自相矛盾。

export type Act = 1 | 2 | 3 | 4 | 5;
const ACT_META: Record<Act, { name: string; color: string }> = {
	1: { name: '一 · 你说过几遍了', color: ACT1 },
	2: { name: '二 · 挂上第一个', color: ACT2 },
	3: { name: '三 · 它咬人了', color: ACT3 },
	4: { name: '四 · 挂哪儿、代价', color: SLOT },
	5: { name: '五 · 落地', color: colors.purple },
};

export function ActBadge({ act, mode }: { act: Act; mode?: string }) {
	const m = ACT_META[act];
	return (
		<div style={{ position: 'absolute', top: 22, left: 28, display: 'flex', gap: 8, zIndex: 40 }}>
			<span style={{
				fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1,
				padding: '5px 12px', background: m.color,
				color: m.color === colors.green ? colors.black : colors.white,
				border: `2px solid ${colors.black}`,
			}}>
				{m.name}
			</span>
			{mode && (
				<span style={{
					fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1,
					padding: '5px 12px', background: colors.white, color: colors.black,
					border: `2px solid ${colors.black}`,
				}}>
					{mode}
				</span>
			)}
		</div>
	);
}

// ── 代码块 ────────────────────────────────────────
// 本 deck 的核心构件。支持按行高亮，用来指「就改这一个词 / 就是这一行」。

type CodeProps = {
	code: string;
	/** 要高亮的行号（0 起）。用于「就改这一行」 */
	hi?: number[];
	/** 高亮色，默认黄 */
	hiColor?: string;
	/** 顶部文件名 / 语言标签 */
	label?: string;
	/** 长行软换行而不是裁掉。🔴 投屏上宁可折行，也不能把代码藏起来 */
	wrap?: boolean;
	size?: number;
	style?: CSSProperties;
};

export function Code({ code, hi = [], hiColor = colors.yellow, label, size = FS.code, wrap, style }: CodeProps) {
	const lines = code.replace(/\n$/, '').split('\n');
	const hiSet = new Set(hi);
	return (
		<div style={{ border, background: colors.dark, boxShadow: shadow, overflow: 'hidden', minWidth: 0, ...style }}>
			{label && (
				<div style={{
					fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 1,
					padding: '7px 14px', background: colors.black, color: colors.yellow,
					borderBottom: `2px solid ${colors.black}`,
				}}>
					{label}
				</div>
			)}
			<div style={{ padding: '16px 0' }}>
				{lines.map((ln, i) => {
					const isHi = hiSet.has(i);
					const isComment = /^\s*#/.test(ln) || /^\s*\/\//.test(ln);
					return (
						<div key={i} style={{
							fontFamily: fonts.mono, fontSize: size, lineHeight: 1.55,
							padding: '1px 18px',
							...(wrap
								? { whiteSpace: 'pre-wrap' as const, overflowWrap: 'anywhere' as const }
								: { whiteSpace: 'pre' as const }),
							background: isHi ? hiColor : 'transparent',
							color: isHi ? colors.black : isComment ? '#8892b0' : '#e6f1ff',
							fontWeight: isHi ? 700 : 400,
						}}>
							{ln === '' ? ' ' : ln}
						</div>
					);
				})}
			</div>
		</div>
	);
}

/** 官方文档原文引用块 —— 视觉上必须和本课自己的话区分开（§21.1 出处纪律） */
export function OfficialQuote({ children, style }: { children: ReactNode; style?: CSSProperties }) {
	return (
		<div style={{
			border: `3px solid ${colors.black}`, background: colors.white,
			boxShadow: shadowSm, padding: '18px 22px', position: 'relative', ...style,
		}}>
			<span style={{
				position: 'absolute', top: -13, left: 18,
				fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1,
				padding: '3px 10px', background: colors.black, color: colors.yellow,
			}}>
				官方文档原文
			</span>
			<div style={{ fontFamily: fonts.mono, fontSize: 20, lineHeight: 1.6, color: colors.black }}>
				{children}
			</div>
		</div>
	);
}

/** 一句话独占一屏 —— 反转页 / 立论页专用 */
export function BigLine({ children, sub, color: c = colors.black, bg }: {
	children: ReactNode; sub?: ReactNode; color?: string; bg?: string;
}) {
	return (
		<div style={{
			width: '100%', height: '100%', background: bg ?? colors.warmBg,
			display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
			textAlign: 'center', padding: '0 100px', gap: 34,
		}}>
			<motion.h2
				initial={{ opacity: 0, y: 26 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				style={{
					fontFamily: fonts.heading, fontSize: 'clamp(46px, 5.2vw, 76px)', fontWeight: 900,
					lineHeight: 1.24, letterSpacing: -1.5, color: c, maxWidth: 1320,
				}}
			>
				{children}
			</motion.h2>
			{sub && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.45, duration: 0.5 }}
					style={{ fontSize: FS.bodyLg, lineHeight: 1.7, color: '#444', maxWidth: 1080 }}
				>
					{sub}
				</motion.div>
			)}
		</div>
	);
}

/** 动手指令页 —— 只有一句口令 + 一个大等待区（§11.1：不放结果截图） */
export function Instruction({ kicker, children, sub }: { kicker: string; children: ReactNode; sub?: ReactNode }) {
	return (
		<div style={{
			width: '100%', height: '100%', background: colors.dark,
			display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
			textAlign: 'center', padding: '0 90px', gap: 30,
		}}>
			<span style={{
				fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 3,
				padding: '7px 18px', background: colors.yellow, color: colors.black, border,
			}}>
				{kicker}
			</span>
			<motion.h2
				initial={{ opacity: 0, scale: 0.94 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ type: 'spring', stiffness: 180, damping: 16 }}
				style={{
					fontFamily: fonts.heading, fontSize: 'clamp(44px, 4.8vw, 68px)', fontWeight: 900,
					lineHeight: 1.28, color: colors.white, maxWidth: 1280, letterSpacing: -1,
				}}
			>
				{children}
			</motion.h2>
			{sub && <div style={{ fontSize: FS.body, color: 'rgba(255,255,255,0.62)', lineHeight: 1.7, maxWidth: 1000 }}>{sub}</div>}
		</div>
	);
}

/** 页面标准头 */
export function Head({ children, sub, color: c }: { children: ReactNode; sub?: ReactNode; color?: string }) {
	return (
		<div style={{ marginBottom: 26 }}>
			<h2 style={{
				fontFamily: fonts.heading, fontSize: 'clamp(36px, 3.4vw, 50px)', fontWeight: 900,
				lineHeight: 1.2, letterSpacing: -1, color: c ?? colors.black,
			}}>
				{children}
			</h2>
			{sub && <p style={{ fontSize: FS.body, color: '#555', marginTop: 12, lineHeight: 1.6 }}>{sub}</p>}
		</div>
	);
}

/** 内容页外壳（带 padding，留出徽章位） */
export function Page({ children, bg = colors.warmBg, style }: { children: ReactNode; bg?: string; style?: CSSProperties }) {
	return (
		<div style={{
			width: '100%', height: '100%', background: bg, position: 'relative',
			padding: '72px 64px 48px', display: 'flex', flexDirection: 'column', ...style,
		}}>
			{children}
		</div>
	);
}

/** 「所以」条 —— 每行事实都要落一个所以（§8.1 / §8.3 讲法要求） */
export function SoBar({ children, color: c = colors.red }: { children: ReactNode; color?: string }) {
	return (
		<div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginTop: 10 }}>
			<span style={{
				fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 1,
				padding: '3px 10px', background: c, color: colors.white, flexShrink: 0, marginTop: 3,
			}}>
				所以
			</span>
			<span style={{ fontSize: FS.body, lineHeight: 1.6 }}>{children}</span>
		</div>
	);
}

// ── 数据：四道判断线（§1.3）─────────────────────────
// 🔴 不是四个格子，是一条链 —— 前一道过不了，后面不用问。
//    这个「有顺序」正是 P12 揭示的那句话，所以 P12 之前不许出现本数组。

export type Gate = {
	n: number; q: string; sub: string;
	fail: string; then: string;
	/** 决定时点的那一道，视觉上要更重 */
	pivot?: boolean;
};

export const GATES: readonly Gate[] = [
	{
		n: 1,
		q: '这条你已经说过几遍了？',
		sub: '三遍以上才值得挂',
		fail: '才一遍',
		then: '先再说一遍。hook 不是用来代替沟通的。',
	},
	{
		n: 2,
		q: '它违反的时候，是漏做还是做错？',
		sub: '漏做 → 事后补　做错 → 事前拦',
		fail: '挂反了',
		then: '第二种会静默失败 —— 你刚才亲眼看过。',
		pivot: true,
	},
	{
		n: 3,
		q: '「违反了没有」，一个不动脑的脚本判得出来吗？',
		sub: '路径 / 字符串 / 退出码',
		fail: '描述不出',
		then: '这条规矩今天还挂不了 hook。',
	},
	{
		n: 4,
		q: '它拦错的时候，你还干得了活吗？',
		sub: '拦太宽 = 你会自己关掉 = 等于没挂',
		fail: '干不了',
		then: '收窄 matcher，或降级成「提醒」不「拦」。',
	},
] as const;

// ── 数据：三次翻车（§0.4）───────────────────────────

export const CRASHES = [
	{
		n: 1,
		title: '拦太宽',
		change: 'PROTECTED_PATTERNS=(".")',
		symptom: '它干不了活了',
		feel: '烦，但看得见',
		result: '你会自己关掉它',
		color: colors.orange,
	},
	{
		n: 2,
		title: '挂错时点',
		change: 'PreToolUse → PostToolUse',
		symptom: '拦了个寂寞，事已经做完了',
		feel: '舒服，而且看不见',
		result: '你以为守住了，其实没有',
		color: colors.red,
		pivot: true,
	},
	{
		n: 3,
		title: '脚本自己错了',
		change: 'exit 2 → exit 1',
		symptom: '每次都冒红字',
		feel: '吵，马上想关掉',
		result: '你会自己关掉它',
		color: colors.orange,
	},
] as const;

// ── 数据：挂在哪个文件（§8.6）───────────────────────

export const LOCATIONS = [
	{ path: '~/.claude/settings.json', who: '你所有项目', share: '不能，只在你这台机器上', star: false },
	{ path: '.claude/settings.json', who: '这一个项目', share: '能，可以提交进仓库', star: true },
	{ path: '.claude/settings.local.json', who: '这一个项目', share: '不能，会被 gitignore', star: false },
	{ path: '管理策略设置（managed）', who: '整个组织', share: '能，管理员控制', star: false },
	{ path: 'Plugin 的 hooks/hooks.json', who: '启用这个 plugin 时', share: '能，跟 plugin 一起走', star: false },
	{ path: 'Skill frontmatter', who: '被调用之后的整个会话', share: '能', star: false },
	{ path: 'Subagent frontmatter', who: '那个 subagent 运行期间', share: '能', star: false },
] as const;

// ── 数据：事件按生命周期分组（§8.2）─────────────────
// 🔴 不给完整表格，只给名字云 + 「你今天用得上 6 个」。全表在附录 P26。

export const EVENT_GROUPS = [
	{ group: '会话',      events: ['SessionStart', 'SessionEnd', 'Setup'], note: '' },
	{ group: '你说话',    events: ['UserPromptSubmit', 'UserPromptExpansion'], note: '' },
	{ group: '它动手',    events: ['PreToolUse', 'PermissionRequest', 'PermissionDenied'], note: '' },
	{ group: '动完手',    events: ['PostToolUse', 'PostToolUseFailure', 'PostToolBatch'], note: '' },
	{ group: '它收工',    events: ['Stop', 'StopFailure'], note: '' },
	{ group: '任务',      events: ['TaskCreated', 'TaskCompleted'], note: '' },
	{
		group: '分家',
		events: ['SubagentStart', 'SubagentStop', 'TeammateIdle'],
		// 🔴 接 L7（Subagent · 给 context 分家）/ L8（Agent Team）。
		//    这条是真正要紧的一格：hook 默认只管主会话，子 agent 和 teammate 不自动受管。
		note: 'L7 / L8：你的规矩默认只管主会话，子 agent 和 teammate 要在这儿单独挂',
	},
	{
		group: 'context',
		events: ['PreCompact', 'PostCompact', 'InstructionsLoaded'],
		// 🔴 接 L6（诊断 · 它没有记忆，只有 context）。压缩会丢东西，这三个是你能插手的点。
		note: 'L6：压缩会丢东西 —— 这三个是你能在压缩前后插手、把它灌回去的地方',
	},
	{ group: '环境',      events: ['CwdChanged', 'DirectoryAdded', 'FileChanged', 'ConfigChange'], note: '' },
	{ group: 'worktree',  events: ['WorktreeCreate', 'WorktreeRemove'], note: '' },
	{ group: '模型',      events: ['PreModelSwitch', 'PostModelSwitch'], note: '' },
	{ group: 'MCP',       events: ['Elicitation', 'ElicitationResult'], note: '' },
	{ group: '提示',      events: ['Notification', 'MessageDisplay'], note: '' },
] as const;

/** 今天用得上的六个 —— 名字云里要高亮它们 */
export const TODAY_SIX = new Set([
	'PreToolUse', 'PostToolUse', 'Stop', 'SessionStart', 'UserPromptSubmit', 'Notification',
]);

export { colors, fonts, border, shadow, shadowSm };
