import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts, border, shadow, shadowSm } from './ui';

// ============================================================
// L13《造一套让规矩成立的系统》deck 的共享构件
// SoT：VIBE_CODING_MASTER_L13_BLUEPRINT.md v3.1 §11「Slide 蓝图」
// 讲稿：lessons/vibe-coding-master-l13/RUNSHEET.md
//
// ── 🔴 deck 纪律（违反任何一条 = 这一页要重做）────────────
//   1. **deck 上不许出现绝对分钟数。** 上课晚开始 5 分钟全 deck 失效。
//      时间表只存在于 RUNSHEET。
//   2. ⭐ **P11 不提「角色文件该怎么写」,但它不再是一颗自毁按钮。**（v3.2 讲师反馈）
//      旧版把整个 P18 压在「那条检查会咬到学员自己」上面，
//      而**每个人的仓库不一样，它不一定咬得到** ,学员今天只写两个角色，
//      跑出来是绿的，那一格就白讲了。**只在你恰好犯过错时才成立的教学点，是抽奖。**
//      现在 P18 改成**正面先给规矩**，跑只是验证，两种结果都有话说。
//      P11 仍然不提（顺序上没必要提前），但**讲师说漏嘴不再整格作废**。
//   3. **强制力阶梯只能从 P21 开始出现。** 在那之前学员在动手和被咬，
//      不在学框架。**P00–P20 不许出现「第几级」「硬政策」这类词** ,
//      兜底三级那条因此写成「只能靠人记得」，阶梯页再回收它。
//   4. **不留任何待填空白。** 讲师个人素材（附录 K）只进 RUNSHEET。
//   5. **动手页只放指令和代码，不放结果截图。** 放了学员就低头看屏幕，
//      不看自己终端。
//   6. **不出现任何产品名。** 用「工单系统 / 聊天工具 / 邮箱 / 代码托管」。
//      这既是脱敏，也让国内班海外班共用一份课件（蓝图 §0.5 / L14 §0.5）。
//   7. **不出现精确计数。** 文件数、提交数、缺口数、「恰好几处人名」这类
//      组合起来是可反查的指纹（蓝图 §0.4 纪律 2）。
//   8. **不出现「原话」「原文记录」式引用。** 所有观点用本课自己的话说
//      （蓝图 §0.4 纪律 3）。本 deck 因此没有 OfficialQuote 构件。
//   9. **不用本课程仓库自己的东西当例子**（全系列纪律）。
//  10. 代码块是本 deck 的一等公民。等宽正文 ≥ 22px，线上直播再放大一档。
//  11. **页面上不写页码。** 理由同不写分钟数 ,插一页就全错。
//  12. **不用「它」。** 同一页里「它」曾同时指四样东西（规矩 / 违反那个动作 /
//      agent / 这件事）。按蓝图 §0.6 拆词：这条规矩 / 破规矩的时候 / 明确说出是谁。
//  14. ⭐ **名字里不许塞一个后面会被自己推翻的假设。** 这条已经咬过两次：
//      「状态仓」藏了「装当下状态」(实际是只能追加的归档)，
//      「记录仓」藏了「它是个仓库」(而它可能是数据库)。
//      **内容类别用不带存储词的名字（规则 / 记录），存储是后面一页的事。**
//  13. ⭐ **代码是「要评判的」，不是「要抄的」**（蓝图 §0.5）。
//      动手页统一三栏：你说的话 → 它写的东西 → 它抓到/漏掉了什么。
//      这门课真正该留下的那句：**改你的说法，不是改代码。**
// ============================================================

export const FS = {
	body: 26,
	bodyLg: 30,
	code: 23,
	codeSm: 21,
	note: 16,
} as const;

/** 第一幕：还没有任何东西挡得住，中性色，不泄露后面的框架 */
export const ACT1 = colors.dark;
/** 第二幕：谁说了算，秩序色 */
export const ACT2 = colors.blue;
/** 第三幕：留白，和会咬人的检查，警告色 */
export const ACT3 = colors.red;
/** 第四幕：谁改得了它，强制色。🔴 只能从 P21 开始用 */
export const ACT4 = colors.teal;
/** 第五幕：放大与收口 */
export const ACT5 = colors.purple;

// ── 幕徽章 ────────────────────────────────────────
// 🔴 附录页（A0–A6）不带徽章，挂个「讲」和「课上不讲」自相矛盾。

export type Act = 1 | 2 | 3 | 4 | 5;
const ACT_META: Record<Act, { name: string; color: string }> = {
	1: { name: '一 · 它写在三个地方', color: ACT1 },
	2: { name: '二 · 谁说了算', color: ACT2 },
	3: { name: '三 · 说得清和说不清', color: ACT3 },
	4: { name: '四 · 谁改得了它', color: ACT4 },
	5: { name: '五 · 放大与收口', color: ACT5 },
};

export function ActBadge({ act, mode }: { act: Act; mode?: string }) {
	const m = ACT_META[act];
	const light = m.color === colors.teal || m.color === colors.blue;
	return (
		<div style={{ position: 'absolute', top: 22, left: 28, display: 'flex', gap: 8, zIndex: 40 }}>
			<span style={{
				fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1,
				padding: '5px 12px', background: m.color,
				color: light ? colors.black : colors.white,
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

/** 附录徽章，课上不讲，投屏留最后给学员拍照 */
export function AppendixBadge({ label }: { label: string }) {
	return (
		<div style={{
			position: 'absolute', top: 22, left: 28, display: 'flex', gap: 8, zIndex: 40,
		}}>
			<span style={{
				fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1,
				padding: '5px 12px', background: colors.white, color: colors.black,
				border: `2px solid ${colors.black}`,
			}}>
				附录 · 课上不讲
			</span>
			<span style={{
				fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1,
				padding: '5px 12px', background: colors.black, color: colors.yellow,
			}}>
				{label}
			</span>
		</div>
	);
}

// ── 代码块 ────────────────────────────────────────
// 支持按行高亮，用来指「就改这一个词」（P13 的 bad → note 全靠它）

type CodeProps = {
	code: string;
	/** 要高亮的行号（0 起） */
	hi?: number[];
	hiColor?: string;
	label?: string;
	/** 长行软换行而不是裁掉。投屏上宁可折行，也不能把代码藏起来 */
	wrap?: boolean;
	size?: number;
	style?: CSSProperties;
};

export function Code({ code, hi = [], hiColor = colors.yellow, label, size = FS.code, wrap, style }: CodeProps) {
	const lines = code.replace(/\n$/, '').split('\n');
	const hiSet = new Set(hi);
	return (
		// flexShrink: 0 是必须的：被 flex 父级压扁时 overflow:hidden 会**静默裁掉代码行**，
		// 而学员正在照着敲。宁可让它撑破画布（截图核对会抓到），也不能悄悄少一行。
		<div style={{ border, background: colors.dark, boxShadow: shadow, overflow: 'hidden', minWidth: 0, flexShrink: 0, ...style }}>
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
					const isComment = /^\s*(#|\/\/)/.test(ln);
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
							{ln === '' ? ' ' : ln}
						</div>
					);
				})}
			</div>
		</div>
	);
}

/** 终端输出块，跟代码块视觉上要分开：这是「它说了什么」，不是「你写了什么」 */
export function Term({ lines, style }: { lines: { t: string; kind?: 'fail' | 'note' | 'ok' | 'hdr' }[]; style?: CSSProperties }) {
	const colorOf = (k?: string) =>
		k === 'fail' ? colors.red : k === 'ok' ? colors.green : k === 'note' ? '#8892b0' : '#e6f1ff';
	return (
		<div style={{ border, background: '#0b0f1e', boxShadow: shadowSm, padding: '16px 18px', ...style }}>
			{lines.map((l, i) => (
				<div key={i} style={{
					fontFamily: fonts.mono, fontSize: FS.codeSm, lineHeight: 1.6,
					color: colorOf(l.kind), fontWeight: l.kind === 'fail' ? 700 : 400,
					whiteSpace: 'pre-wrap', overflowWrap: 'anywhere',
				}}>
					{l.t === '' ? ' ' : l.t}
				</div>
			))}
		</div>
	);
}

/** 一句话独占一屏，立论页 / 反转页 / 收口页专用 */
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
					style={{ fontSize: FS.bodyLg, lineHeight: 1.7, color: bg === colors.dark ? 'rgba(255,255,255,0.62)' : '#444', maxWidth: 1080 }}
				>
					{sub}
				</motion.div>
			)}
		</div>
	);
}

/** 动手指令页，只有一句口令 + 一个大等待区（纪律 5：不放结果） */
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
			{sub && <div style={{ fontSize: FS.body, color: 'rgba(255,255,255,0.62)', lineHeight: 1.7, maxWidth: 1040 }}>{sub}</div>}
		</div>
	);
}

/** 聊天框信号条，线上无助教，所有信号走这里（蓝图 §0.6） */
export function ChatSignal({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1.2, duration: 0.6 }}
			style={{
				position: 'absolute', bottom: 66, left: 0, right: 0,
				display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12,
				fontSize: 19, color: 'rgba(255,255,255,0.45)',
			}}
		>
			{children}
		</motion.div>
	);
}

/** 页面标准头 */
export function Head({ children, sub, color: c }: { children: ReactNode; sub?: ReactNode; color?: string }) {
	return (
		<div style={{ marginBottom: 24 }}>
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

/** 「所以」条，每行事实都要落一个所以 */
export function SoBar({ children, color: c = colors.red }: { children: ReactNode; color?: string }) {
	return (
		<div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginTop: 12 }}>
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

/** 通用两列对照表 */
export function TwoCol({ head, rows, headColor = colors.dark, style }: {
	head: [string, string];
	rows: [ReactNode, ReactNode][];
	headColor?: string;
	style?: CSSProperties;
}) {
	return (
		<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', ...style }}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
				{head.map((h, i) => (
					<div key={i} style={{
						padding: '12px 18px', background: headColor, color: colors.white,
						fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 1,
						borderRight: i === 0 ? `2px solid ${colors.black}` : 'none',
					}}>{h}</div>
				))}
			</div>
			{rows.map((r, i) => (
				<div key={i} style={{
					display: 'grid', gridTemplateColumns: '1fr 1fr',
					borderTop: `2px solid ${colors.black}`,
				}}>
					{r.map((cell, j) => (
						<div key={j} style={{
							padding: '13px 18px', fontSize: 21, lineHeight: 1.5,
							borderRight: j === 0 ? `2px solid ${colors.black}` : 'none',
						}}>{cell}</div>
					))}
				</div>
			))}
		</div>
	);
}

// ── 数据 ───────────────────────────────────────────

/** 五句症状（蓝图 §1.1）。1 和 4 偏大规模，5 偏小组 */
export const SYMPTOMS = [
	{ n: 1, t: '没人看得见什么处在风险里', scale: '偏大' },
	{ n: 2, t: '决策被提出，然后搁着', scale: '' },
	{ n: 3, t: '问题被提出，然后悄悄淡掉', scale: '' },
	{ n: 4, t: '有人绕开流程，直接找到了做事的人', scale: '偏大' },
	{ n: 5, t: '只有一个人知道那件事怎么做', scale: '偏小' },
] as const;

/** 强制力阶梯（蓝图 §1.4）。🔴 只能从 P21 开始出现 */
type LadderRow = {
	lv: string;
	t: string;
	note: string;
	/** 在「硬政策」那条线以上 */
	hard: boolean;
	/** 第一道真正的硬政策（L4） */
	first?: boolean;
	/** 学员当下所在的那一级（L3） */
	you?: boolean;
	/** 开场那条规矩所在的那一级（L0） */
	start?: boolean;
};

export const LADDER: readonly LadderRow[] = [
	{ lv: 'L6', t: '服务端拒绝 + 管理员也受约束', note: '连最有权限的人也绕不过去', hard: true },
	{ lv: 'L5', t: '分支保护', note: '有写权限的人绕不过去', hard: true },
	{ lv: 'L4', t: 'CI 挂进 PR', note: '红了合不了', hard: true, first: true },
	{ lv: 'L3', t: '本地校验脚本', note: '要人主动跑', hard: false, you: true },
	{ lv: 'L2', t: '会话启动钩子', note: '每次提醒', hard: false },
	{ lv: 'L1', t: '写进 AI 指令文件', note: '它会读，可以不照做', hard: false },
	{ lv: 'L0', t: '写在文档里', note: '靠人记得', hard: false, start: true },
];

/** 三次翻车（蓝图 §7）。形态不同，第二次最重要 */
export const CRASHES = [
	{
		n: '①', title: '你写不出来',
		sym: '卡住，写不下去', feel: '挫败',
		out: '那条规矩永远停在最低一级',
		fix: '承认边界，别假装',
		weight: 1,
	},
	{
		n: '②', title: '全设成失败',
		sym: '满屏红，而且红得有道理', feel: '烦，马上想关掉',
		out: '你会亲手关掉它',
		fix: '分开硬失败和提示',
		weight: 2,
	},
	{
		n: '③', title: '全绿，却早就违反了',
		sym: '全绿，然后抓到自己', feel: '被抓包',
		out: '你以为守住了，其实没有',
		fix: '从真发生过的错反推',
		weight: 2,
	},
] as const;

/** 分支保护五开关（蓝图 §13.2）
 *  🔴 第二个仓叫「记录仓」不叫「状态仓」：它承重的性质是**只能追加、不能抹掉**，
 *     这五个开关全部从这一条推出来。当下状态活在工单系统里，不在这两个仓。
 *  🔴 注意 `same: true` 的两行：两边都是「开」，但**理由不同** ,
 *     规则仓禁 force push 是为了「改了什么查得到」，
 *     记录仓禁 force push 是为了「写了什么抹不掉」。同一个设置，两个目的。
 */
type Switch = { k: string; rules: string; log: string; why: string; same?: boolean };

export const SWITCHES: readonly Switch[] = [
	{ k: '强制 PR', rules: '开', log: '关', why: '规则要「改动可审」；记录要「追加零摩擦」' },
	{ k: '禁 force push', rules: '开', log: '开', same: true, why: '规则：改了什么查得到 ／ 记录：写了什么抹不掉' },
	{ k: '禁删分支', rules: '开', log: '开', same: true, why: '同上。删掉一整条分支，比改一行更彻底' },
	{ k: '管理员也受约束', rules: '开', log: '开', same: true, why: '最有能力改写历史的人能绕过去，就不叫归档' },
	{ k: '普通快进 push', rules: '走 PR', log: '放行', why: '这就是往记录里追加的日常流程本身' },
];

/** 按规模选形态（蓝图 §13.1 / 附录 A0）
 *  🔴 第三列从「公司」改成「五十人」,「公司」太糊，五十人是真正的拐点。
 *  🔴 「记录仓的命门」那一行是全表最该被记住的：**没人读 → 然后就没人写。**
 */
export const SCALES = [
	{ k: '规则仓', a: '一个仓，rules/ 一个目录', b: '独立规则仓', c: '独立规则仓，PR + CI，不变' },
	{ k: '记录放哪', a: '你们已经在用的那个工具', b: '一个 git 仓够用', c: '已有工单 / IM 当写入面，git 只做快照锚点' },
	{ k: '记录的命门', a: '没人写', b: '没人写', c: '没人读 → 然后就没人写' },
	{ k: '必须加的检查', a: '无', b: 'append-only', c: 'append-only + 数据库与快照对账' },
	{ k: '分支保护', a: 'main 强制 PR 就够', b: '规则目录加所有者审查', c: '两仓配置相反' },
	{ k: '规则仓大小上限', a: '不是问题', b: '开始要想', c: 'agent 还能不能一次读完' },
] as const;

/** 四道判断线（蓝图 §1.5）。🔴 第二道是 v3 新增，全节最实用的技巧。
 *  🔴 这是一条链，不是四个格子：前一道过不了，后面不用问。
 */
type Gate = { n: string; q: string; hint: string; star?: boolean };
export const GATES: readonly Gate[] = [
	{ n: '第一道', q: '这条规则能不能机械化？', hint: '能 → 立刻写成检查' },
	{ n: '第二道', q: '不能的话，能不能【转化】成能机械化的形状？', hint: '⭐ 全节最实用的一格', star: true },
	{ n: '第三道', q: '这条检查该不该算失败？', hint: '不变式 → bad ／ 已知状态 → note' },
	{ n: '第四道', q: '这条检查是从哪来的？', hint: '从真发生过的错来，不从想象来' },
];

/** 转化表（第二道判断线的实操）。第二行就是课堂检查④。 */
type Transform = { judge: string; shape: string; inClass?: boolean };
export const TRANSFORMS: readonly Transform[] = [
	{ judge: '这个审批额度合不合理', shape: '这个额度有没有人签过字（谁、什么时候）' },
	{ judge: '这份文件写完了吗', shape: '有没有残留 [to supply]', inClass: true },
	{ judge: '这个决定对不对', shape: '有没有记录是谁定的' },
	{ judge: '这条 SOP 写得好不好', shape: '十三节齐不齐' },
];

/** 兜底三级（蓝图 §1.5）。三级那句「不许假装」是硬的。 */
export const FALLBACK = [
	{ lv: '一级', k: '转化', d: '把判断题改写成形状题', cost: '查的是「有没有人管过」，不是「管得对不对」' },
	{ lv: '二级', k: '降级', d: '查不了内容，查「有没有人看过」', cost: '只保证被看了，不保证被看懂了' },
	{ lv: '三级', k: '明写', d: '写成规则，承认这条只能靠人记得', cost: '但必须把「只能靠人记得」写在它旁边，不许假装它被守住了' },
] as const;

/** 记录放哪：被读还是被数（蓝图 §1.6）。正课只给判据，完整三方案在附录 A8。 */
export const READ_VS_COUNT = [
	{ k: '一年后翻出来干嘛', read: '看当时怎么想的', count: '算出现了多少次' },
	{ k: '形态', read: '散文，价值在细微处', count: '结构化，形状重复' },
	{ k: '一年产生', read: '几十条', count: '几千条' },
	{ k: '进不进 agent 的 context', read: '要，所以必须小', count: '不要' },
] as const;

export const RECORD_EXAMPLES = {
	git: ['决策记录：为什么这么定', '批准依据：那个批准立在什么上面', '破例记录：这次为什么不适用', '规则变更'],
	db: ['日更 / 站会', '工单状态流转', '检查命中记录', '权限授予记录'],
} as const;

/** 威胁模型：谁会绕过它（蓝图 §8.1）。
 *  🔴 第三行是本节独有的，而且是主角 ,主要攻击者不是坏人，是图省事的 agent。 */
type Bypasser = { who: string; why: string; how: string; star?: boolean };
export const BYPASSERS: readonly Bypasser[] = [
	{ who: '你自己', why: '赶时间', how: '本地改掉那条检查' },
	{ who: '你同事', why: '对自己有利', how: '把规则改宽了提交进来' },
	{ who: '你的 agent', why: '你让它「把 CI 弄绿」', how: '它去改检查，不改文件', star: true },
];

/** 八步总表（蓝图 §1.2 / 附录 A1） */
export const STEPS = [
	{ n: 0, q: '我们到底疼在哪', out: '认领一条症状' },
	{ n: 1, q: '什么该进这个仓库', out: '仓库骨架 + 检查①' },
	{ n: 2, q: '文件打架时谁赢', out: 'AUTHORITY.md + 检查②' },
	{ n: 3, q: '谁答应什么', out: '花名册 + 两个角色 + 检查③' },
	{ n: 4, q: '我不知道的怎么办', out: '[to supply] + 检查④' },
	{ n: 5, q: '该查什么、不该查什么', out: '三次翻车，检查活下来' },
	// 🔴 v3.2：指令层挂在第 6 步的末尾，而且明写「最后」,
	//    它是唯一一份会反过来管住施工本身的文件（P04 红框 / P24 第 6 步）。
	{ n: 6, q: '怎么让它绕不过去', out: 'CI 挡住 PR + 分支保护，最后才写指令层' },
	{ n: 7, q: '回去怎么复制这一套', out: '生成器的约束段' },
] as const;

export { colors, fonts, border, shadow, shadowSm };
