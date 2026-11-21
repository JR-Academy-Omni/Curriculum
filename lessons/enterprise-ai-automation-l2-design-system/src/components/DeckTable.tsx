import { motion } from 'framer-motion';
import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { colors, fonts, border, shadow } from '../styles/theme';

// 投屏表格 —— 本 deck 的主角（三条路对照 / SoT 好坏例子 / 5 维自评 / 7 个秘书任务）
// 设计：Neo-Brutalism 粗黑边 + 硬阴影；整块表格逐行错峰入场；最后一排也能看清

export interface Col {
	label: ReactNode;
	/** grid-template-columns 的一份，例：'1fr' / '1.4fr' / '90px' */
	w?: string;
	/** 该列整体高亮（例：OPC 那一列） */
	accent?: string;
	align?: CSSProperties['textAlign'];
}

export function DeckTable({
	cols,
	rows,
	fontSize = 21,
	headFontSize,
	cellPad = '13px 16px',
	rowBg,
	style,
}: {
	cols: Col[];
	rows: ReactNode[][];
	fontSize?: number;
	headFontSize?: number;
	cellPad?: string;
	/** 每行底色（长度与 rows 对齐，undefined 用默认斑马纹） */
	rowBg?: (string | undefined)[];
	style?: CSSProperties;
}) {
	const template = cols.map((c) => c.w ?? '1fr').join(' ');
	const headSize = headFontSize ?? Math.max(15, fontSize - 4);

	return (
		<div style={{ border, boxShadow: shadow, background: colors.white, overflow: 'hidden', ...style }}>
			{/* 表头 */}
			<div style={{ display: 'grid', gridTemplateColumns: template, background: colors.dark }}>
				{cols.map((c, i) => (
					<div
						key={i}
						style={{
							padding: cellPad,
							color: c.accent ?? colors.white,
							fontFamily: fonts.mono,
							fontSize: headSize,
							fontWeight: 700,
							letterSpacing: 0.5,
							textAlign: c.align ?? 'left',
							borderRight: i === cols.length - 1 ? 'none' : '2px solid rgba(255,255,255,0.25)',
						}}
					>
						{c.label}
					</div>
				))}
			</div>

			{/* 表体 */}
			{rows.map((row, r) => (
				<motion.div
					key={r}
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.32, delay: 0.14 + r * 0.07, ease: 'easeOut' }}
					style={{
						display: 'grid',
						gridTemplateColumns: template,
						background: rowBg?.[r] ?? (r % 2 === 0 ? colors.white : '#fdf5ee'),
						borderTop: '2px solid #000',
					}}
				>
					{row.map((cell, i) => (
						<div
							key={i}
							style={{
								padding: cellPad,
								fontSize,
								lineHeight: 1.42,
								fontWeight: 500,
								color: colors.black,
								textAlign: cols[i]?.align ?? 'left',
								borderRight: i === row.length - 1 ? 'none' : '2px solid #000',
								display: 'flex',
								alignItems: 'center',
								...(cols[i]?.accent ? { background: cols[i].accent, fontWeight: 700 } : {}),
							}}
						>
							{cell}
						</div>
					))}
				</motion.div>
			))}
		</div>
	);
}

/** 页眉：左上角章节徽章 + 大标题（所有内容页统一） */
export function SlideHead({
	tag,
	title,
	sub,
	tagBg = colors.yellow,
	titleSize = 'clamp(38px, 3.4vw, 52px)',
}: {
	tag: string;
	title: ReactNode;
	sub?: ReactNode;
	tagBg?: string;
	titleSize?: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
			style={{ marginBottom: 20 }}
		>
			<div
				style={{
					display: 'inline-block',
					padding: '5px 14px',
					marginBottom: 12,
					background: tagBg,
					border,
					fontFamily: fonts.mono,
					fontSize: 15,
					fontWeight: 700,
					letterSpacing: 2,
				}}
			>
				{tag}
			</div>
			<h2
				style={{
					fontFamily: fonts.heading,
					fontSize: titleSize,
					fontWeight: 900,
					lineHeight: 1.1,
					letterSpacing: -1,
				}}
			>
				{title}
			</h2>
			{sub ? (
				<p style={{ marginTop: 10, fontSize: 'clamp(17px, 1.3vw, 21px)', color: '#4a4a4a', fontWeight: 500 }}>{sub}</p>
			) : null}
		</motion.div>
	);
}

/** 底部结论条 —— 讲完这页必须落到的一句话 */
export function Punchline({ children, bg = colors.dark, color = colors.white }: { children: ReactNode; bg?: string; color?: string }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 18 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.75 }}
			style={{
				marginTop: 18,
				padding: '14px 22px',
				background: bg,
				color,
				border,
				boxShadow: shadow,
				fontSize: 'clamp(18px, 1.45vw, 23px)',
				fontWeight: 700,
				lineHeight: 1.4,
			}}
		>
			{children}
		</motion.div>
	);
}

/** 出处条 —— 案例页必须标 */
export function SourceNote({ children }: { children: ReactNode }) {
	return (
		<div
			style={{
				marginTop: 14,
				padding: '9px 14px',
				background: '#f2f2f2',
				border: '2px solid #000',
				fontFamily: fonts.mono,
				fontSize: 13,
				lineHeight: 1.55,
				color: '#333',
			}}
		>
			{children}
		</div>
	);
}

/**
 * 内容超出 1600×900 画布时自动等比缩到放得下 —— 投屏永远不裁切、不出滚动条。
 * 只在真的超高时才缩（scale < 1），正常页面 scale = 1，字号不受影响。
 */
export function FitBox({ children }: { children: ReactNode }) {
	const outer = useRef<HTMLDivElement>(null);
	const inner = useRef<HTMLDivElement>(null);
	const [scale, setScale] = useState(1);

	useLayoutEffect(() => {
		const measure = () => {
			const o = outer.current;
			const i = inner.current;
			if (!o || !i) return;
			const avail = o.clientHeight;
			// offsetHeight 不受 transform 影响，拿到的是未缩放的布局高度，测量不会自激振荡
			const need = i.offsetHeight;
			setScale(need > 0 && need > avail ? Math.max(0.62, avail / need) : 1);
		};
		measure();
		const ro = new ResizeObserver(measure);
		if (inner.current) ro.observe(inner.current);
		window.addEventListener('resize', measure);
		return () => {
			ro.disconnect();
			window.removeEventListener('resize', measure);
		};
	}, []);

	return (
		<div
			ref={outer}
			style={{
				flex: 1,
				minHeight: 0,
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				overflow: 'hidden',
			}}
		>
			<div ref={inner} style={{ width: '100%', transform: `scale(${scale})`, transformOrigin: 'center center' }}>
				{children}
			</div>
		</div>
	);
}

/** 页面容器：给内容页统一的内边距 + 自动收缩兜底 */
export function Body({ children, style }: { children: ReactNode; style?: CSSProperties }) {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				padding: '42px 60px 38px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				...style,
			}}
		>
			<FitBox>{children}</FitBox>
		</div>
	);
}
