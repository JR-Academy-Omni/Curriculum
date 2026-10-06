import { useState, type CSSProperties, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow, shadowSm } from '../ui';
import { moduleById } from '../../data/modules';

// 本讲座内容页共用的小零件（不是 slide，只被 S*.tsx 引用）

// 整页纵向排版：给 <Inner style={col}> 用
export const col: CSSProperties = { flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', gap: 0 };

// 淡一点的说明句
export function Note({ children, style }: { children: ReactNode; style?: CSSProperties }) {
	return <p style={{ fontSize: 24, fontWeight: 500, lineHeight: 1.6, color: colors.dark, opacity: 0.75, ...style }}>{children}</p>;
}

// 页脚出处小字
export function Source({ children }: { children: ReactNode }) {
	return <p style={{ fontSize: 16, lineHeight: 1.7, marginTop: 20, color: colors.dark, opacity: 0.6 }}>{children}</p>;
}

// 「点一下展开」按钮（点完失焦，避免空格键翻页被按钮吃掉）
export function RevealButton({ open, label, onClick }: { open: boolean; label: string; onClick: () => void }) {
	return (
		<button
			onClick={(e) => { onClick(); e.currentTarget.blur(); }}
			style={{
				alignSelf: 'flex-start', padding: '10px 24px', background: open ? colors.white : colors.yellow,
				border, boxShadow: shadowSm, cursor: 'pointer',
				fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: colors.black,
			}}
		>
			{open ? '收起' : label}
		</button>
	);
}

// Test → Teach → Test 三个阶段
export type Phase = 'pre' | 'teach' | 'post';
const phaseLabel: Record<Phase, string> = { pre: '前测 · Test', teach: '讲 + 跑 · Teach', post: '后测 · Test' };

// 左上角：模块标签 + 阶段标签
export function ModuleTag({ id, phase }: { id: string; phase?: Phase }) {
	const m = moduleById(id);
	return (
		<div style={{ display: 'flex', gap: 10, alignSelf: 'flex-start', marginBottom: 18, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 1 }}>
			<span style={{ padding: '4px 12px', background: m.color, border }}>{m.id} · {m.title}</span>
			{phase && <span style={{ padding: '4px 12px', background: colors.black, color: colors.white, border }}>{phaseLabel[phase]}</span>}
		</div>
	);
}

// 终端框：'$ ' 开头是命令，'#' 开头是注释，其余是输出
export function Terminal({ lines, style, fontSize = 19 }: { lines: string[]; style?: CSSProperties; fontSize?: number }) {
	return (
		<div style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '16px 20px', fontFamily: fonts.mono, fontSize, lineHeight: 1.6, whiteSpace: 'pre-wrap', wordBreak: 'break-all', ...style }}>
			{lines.map((l, i) => {
				const isCmd = l.startsWith('$ ');
				const isComment = l.startsWith('#');
				return (
					<div key={i} style={{ color: isComment ? colors.yellow : isCmd ? colors.green : colors.white, opacity: isComment ? 0.85 : 1 }}>
						{l || ' '}
					</div>
				);
			})}
		</div>
	);
}

// 前测 / 后测页：一个大问题 + 可选的补充条目 + 可选的参考答案（点开）
export function TestSlide({ module, kind, question, sub, items, answer, bg }: {
	module: string;
	kind: 'pre' | 'post';
	question: ReactNode;
	sub?: ReactNode;
	items?: ReactNode[];
	answer?: ReactNode;
	bg?: string;
}) {
	const [open, setOpen] = useState(false);
	return (
		<Slide bg={bg ?? (kind === 'pre' ? colors.warmBg : colors.white)}>
			<Inner style={col}>
				<ModuleTag id={module} phase={kind} />
				<Title size="54px" style={{ marginBottom: 18, lineHeight: 1.3 }}>{question}</Title>
				{sub && <Note style={{ marginBottom: 22 }}>{sub}</Note>}
				{items?.map((it, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.15 + i * 0.1 }}
						style={{ display: 'flex', gap: 14, alignItems: 'baseline', padding: '12px 18px', marginBottom: 12, background: colors.white, border, boxShadow: shadowSm, fontSize: 24, fontWeight: 700, lineHeight: 1.45 }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 18, flexShrink: 0 }}>{String.fromCharCode(65 + i)}</span>
						<span>{it}</span>
					</motion.div>
				))}
				<div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 18 }}>
					{answer ? (
						<RevealButton open={open} label="看参考答案" onClick={() => setOpen(!open)} />
					) : (
						<span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, padding: '8px 16px', border: `3px dashed ${colors.black}` }}>
							先把预测写在聊天区 → 下一页跑出真实结果
						</span>
					)}
				</div>
				{answer && open && (
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						style={{ marginTop: 16, padding: '14px 20px', background: colors.green, border, fontSize: 23, fontWeight: 700, lineHeight: 1.55 }}>
						{answer}
					</motion.div>
				)}
			</Inner>
		</Slide>
	);
}

// 一组「场景 → 答案」卡片，点一张翻一张
export interface QuizItem { q: string; a: string; ok?: boolean }

export function QuizCards({ items, cols = 2, minHeight = 140 }: { items: QuizItem[]; cols?: number; minHeight?: number }) {
	const [shown, setShown] = useState<boolean[]>(() => items.map(() => false));
	return (
		<div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 18 }}>
			{items.map((it, i) => {
				const isOpen = shown[i];
				const answerBg = it.ok === undefined ? colors.yellow : it.ok ? colors.green : colors.red;
				return (
					<motion.button
						key={it.q}
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
						onClick={(e) => { setShown((prev) => prev.map((v, j) => (j === i ? !v : v))); e.currentTarget.blur(); }}
						style={{
							textAlign: 'left', cursor: 'pointer', padding: '14px 18px', minHeight, border, boxShadow: shadowSm,
							background: colors.white, color: colors.black, fontFamily: fonts.body, display: 'flex', flexDirection: 'column', gap: 10,
						}}>
						<span style={{ fontSize: 23, fontWeight: 800, lineHeight: 1.4 }}>{it.q}</span>
						{isOpen ? (
							<span style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.45, padding: '6px 12px', background: answerBg, color: it.ok === false ? colors.white : colors.black }}>
								{it.a}
							</span>
						) : (
							<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, opacity: 0.45 }}>点击看答案</span>
						)}
					</motion.button>
				);
			})}
		</div>
	);
}

// 把 **关键词** 渲染成黄色高亮
function marked(text: string) {
	return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
		i % 2 === 1
			? <span key={i} style={{ background: colors.yellow, fontWeight: 800, padding: '0 4px', border: `2px solid ${colors.black}` }}>{part}</span>
			: part,
	);
}

// M7 面试练习页：一题一页。学生先在对话框里写答案，再点开参考答案。
export function InterviewSlide({ n, total, question, hint, answer }: {
	n: number;
	total: number;
	question: string;
	hint: string;
	answer: string[];
}) {
	const [open, setOpen] = useState(false);
	return (
		<Slide bg={colors.white}>
			<Inner style={col}>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<ModuleTag id="M7" />
					<span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, marginBottom: 18 }}>Interview {n} / {total}</span>
				</div>
				<Title size="46px" style={{ marginBottom: 10, lineHeight: 1.3 }}>{question}</Title>
				<p style={{ fontSize: 20, fontWeight: 600, opacity: 0.7, marginBottom: 22 }}>{hint}</p>

				<div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 16 }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, padding: '8px 16px', border: `3px dashed ${colors.black}` }}>
						先在对话框里用英文写下你的答案 → 再看参考答案
					</span>
					<RevealButton open={open} label="看参考答案" onClick={() => setOpen(!open)} />
				</div>
				{open && (
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						style={{ padding: '12px 18px', background: colors.green, border }}>
						{answer.map((a) => (
							<p key={a} style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.6, marginBottom: 6 }}>{marked(a)}</p>
						))}
					</motion.div>
				)}
			</Inner>
		</Slide>
	);
}
