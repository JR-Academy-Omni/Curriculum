import { useState, type CSSProperties, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { DeckFrame, Panel, Label, NumberBadge } from '../deck';
import { moduleById } from '../../data/modules';

// 本讲座内容页共用的小零件（不是 slide，只被 S*.tsx 引用）
// 视觉遵循模板 2.0 的 Register B：DeckFrame 页头 + 圆角容器（禁止直角容器）

// 结构线与圆角卡片：所有承载内容的闭合容器都从这里取样式
export const line = `2px solid ${colors.dark}`;
export const card: CSSProperties = { border: line, borderRadius: radii.card, background: colors.white };
export const softShadow = '5px 5px 0 rgba(255,222,89,.92)';
export const darkShadow = '7px 7px 0 rgba(255,87,87,.58)';

// 纵向排版容器
export const col: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 0, height: '100%' };

// 重点词：圆角色块（模板 Highlight 是直角，内容层用这个）
export function Mark({ children, color = colors.yellow }: { children: ReactNode; color?: string }) {
	const dark = color === colors.red || color === colors.dark || color === colors.purple;
	return <span style={{ display: 'inline-block', padding: '1px 12px', borderRadius: radii.label, background: color, color: dark ? colors.white : colors.black }}>{children}</span>;
}

// 淡一点的说明句
export function Note({ children, style }: { children: ReactNode; style?: CSSProperties }) {
	return <p style={{ fontSize: 21, fontWeight: 500, lineHeight: 1.55, color: '#514c48', ...style }}>{children}</p>;
}

// 页脚出处小字
export function Source({ children }: { children: ReactNode }) {
	return <p style={{ fontSize: 15, lineHeight: 1.6, marginTop: 14, color: colors.dark, opacity: 0.6 }}>{children}</p>;
}

// 「点一下展开」按钮（点完失焦，避免空格键翻页被按钮吃掉）
export function RevealButton({ open, label, onClick }: { open: boolean; label: string; onClick: () => void }) {
	return (
		<button
			onClick={(e) => { onClick(); e.currentTarget.blur(); }}
			style={{
				alignSelf: 'flex-start', padding: '9px 22px', background: open ? colors.white : colors.yellow,
				border: line, borderRadius: radii.pill, boxShadow: open ? 'none' : `3px 3px 0 ${colors.dark}`, cursor: 'pointer',
				fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, color: colors.black, flexShrink: 0,
			}}
		>
			{open ? '收起' : label}
		</button>
	);
}

// Test → Teach → Test 三个阶段
export type Phase = 'pre' | 'teach' | 'post';
const phaseLabel: Record<Phase, string> = { pre: '前测 · TEST', teach: '讲 + 跑 · TEACH', post: '后测 · TEST' };

// 模块页框：模板的 DeckFrame + 模块标签 + 模块主题色
export function ModuleFrame({ id, phase, title, subtitle, titleSize = 50, children }: {
	id: string;
	phase?: Phase;
	title: ReactNode;
	subtitle?: ReactNode;
	titleSize?: number;
	children: ReactNode;
}) {
	const m = moduleById(id);
	const accent = m.color === colors.white ? colors.red : m.color;
	const tag = `${m.id} · ${m.title.toUpperCase()}${phase ? ` · ${phaseLabel[phase]}` : ''}`;
	return <DeckFrame tag={tag} title={title} subtitle={subtitle} accent={accent} titleSize={titleSize}>{children}</DeckFrame>;
}

// 终端框：'$ ' 开头是命令，'#' 开头是注释，其余是输出
export function Terminal({ lines, style, fontSize = 18 }: { lines: string[]; style?: CSSProperties; fontSize?: number }) {
	return (
		<div style={{ background: colors.dark, color: colors.white, border: line, borderRadius: radii.card, boxShadow: darkShadow, padding: '16px 20px', fontFamily: fonts.mono, fontSize, lineHeight: 1.6, whiteSpace: 'pre-wrap', wordBreak: 'break-all', ...style }}>
			{lines.map((l, i) => {
				const isCmd = l.startsWith('$ ');
				const isComment = l.startsWith('#');
				return (
					<div key={i} style={{ color: isComment ? colors.yellow : isCmd ? colors.green : colors.white, opacity: isComment ? 0.88 : 1 }}>
						{l || ' '}
					</div>
				);
			})}
		</div>
	);
}

// 前测 / 后测页：一个大问题 + 可选选项 + 可选参考答案（点开）
export function TestSlide({ module, kind, question, sub, items, answer }: {
	module: string;
	kind: 'pre' | 'post';
	question: ReactNode;
	sub?: ReactNode;
	items?: ReactNode[];
	answer?: ReactNode;
}) {
	const [open, setOpen] = useState(false);
	return (
		<ModuleFrame id={module} phase={kind} title={question} subtitle={sub} titleSize={46}>
			<div style={col}>
				{items?.map((it, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
						style={{ ...card, display: 'flex', gap: 16, alignItems: 'center', padding: '12px 18px', marginBottom: 12, fontSize: 24, fontWeight: 700, lineHeight: 1.4 }}>
						<NumberBadge bg={moduleById(module).color === colors.white ? colors.yellow : moduleById(module).color}>{String.fromCharCode(65 + i)}</NumberBadge>
						<span>{it}</span>
					</motion.div>
				))}
				<div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 16 }}>
					{answer ? (
						<RevealButton open={open} label="看参考答案" onClick={() => setOpen(!open)} />
					) : (
						<Label bg={colors.white} color={colors.black}>先把预测写在对话框 → 下一页跑出真实结果</Label>
					)}
				</div>
				{answer && open && (
					<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 14 }}>
						<Panel bg="#eefae6" style={{ padding: '16px 22px', fontSize: 22, fontWeight: 700, lineHeight: 1.55 }}>{answer}</Panel>
					</motion.div>
				)}
			</div>
		</ModuleFrame>
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
							...card, textAlign: 'left', cursor: 'pointer', padding: '14px 18px', minHeight, boxShadow: softShadow,
							color: colors.black, fontFamily: fonts.body, display: 'flex', flexDirection: 'column', gap: 10,
						}}>
						<span style={{ fontSize: 23, fontWeight: 800, lineHeight: 1.4 }}>{it.q}</span>
						{isOpen ? (
							<span style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.45, padding: '6px 12px', borderRadius: radii.label, background: answerBg, color: it.ok === false ? colors.white : colors.black }}>
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
			? <span key={i} style={{ background: colors.yellow, fontWeight: 800, padding: '0 5px', borderRadius: 6, WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>{part}</span>
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
		<ModuleFrame id="M7" title={question} subtitle={`Interview ${n} / ${total} · ${hint}`} titleSize={44}>
			<div style={col}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
					<Label bg={colors.white} color={colors.black}>先在对话框里用英文写下你的答案 → 再看参考答案</Label>
					<RevealButton open={open} label="看参考答案" onClick={() => setOpen(!open)} />
				</div>
				{open && (
					<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
						<Panel bg="#eefae6" style={{ padding: '14px 22px' }}>
							{answer.map((a) => (
								<p key={a} style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.6, marginBottom: 6 }}>{marked(a)}</p>
							))}
						</Panel>
					</motion.div>
				)}
			</div>
		</ModuleFrame>
	);
}
