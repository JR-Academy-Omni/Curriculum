import { AnimatePresence, motion, type TargetAndTransition } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';
import { useBeat } from './beat';
import { colors, fonts } from '../ui';

// 画布上的零件。坐标、尺寸都是画布单位。
// 颜色含义：红 = 重点与失败；蓝 = 板书标签；黑 = ✓ 与正文；黄色 accent 只做荧光笔划线和圈，不承载文字。
export const INK = colors.dark;
export const RED = '#e8453c';
export const BLUE = '#2459d8';
export const ACCENT = colors.yellow;
export const GREY = '#8a8f9c';
export const PAPER = '#ffffff';

const HAND = fonts.heading; // 板书（马克笔）
const PRINT = fonts.body; // 印刷卡片

export type Anim = 'fade' | 'write' | 'pop' | 'rise' | 'grow' | 'drop' | 'stamp' | 'slide';

const VARIANTS: Record<Anim, { hidden: TargetAndTransition; shown: TargetAndTransition; d: number }> = {
	fade: { hidden: { opacity: 0 }, shown: { opacity: 1 }, d: 0.45 },
	// 马克笔写字：从左往右擦出来
	write: { hidden: { clipPath: 'inset(-30% 100% -30% -4%)' }, shown: { clipPath: 'inset(-30% -4% -30% -4%)' }, d: 0.6 },
	pop: { hidden: { opacity: 0, scale: 0.6 }, shown: { opacity: 1, scale: 1 }, d: 0.4 },
	rise: { hidden: { opacity: 0, y: 40 }, shown: { opacity: 1, y: 0 }, d: 0.45 },
	// 荧光笔划线：从左往右长出来
	grow: { hidden: { scaleX: 0 }, shown: { scaleX: 1 }, d: 0.5 },
	// 磁贴卡片落到板上
	drop: { hidden: { opacity: 0, y: -60, rotate: -3 }, shown: { opacity: 1, y: 0, rotate: 0 }, d: 0.5 },
	// 盖章：从大到小压下去
	stamp: { hidden: { opacity: 0, scale: 1.7 }, shown: { opacity: 1, scale: 1 }, d: 0.28 },
	// 从 from 偏移处滑进来（用 from 指定）
	slide: { hidden: { opacity: 0 }, shown: { opacity: 1, x: 0, y: 0 }, d: 0.6 },
};

type ElProps = {
	x: number; y: number; w?: number; h?: number;
	show?: boolean; anim?: Anim; delay?: number;
	/** framer 的 x 偏移（用于居中 / 右对齐），和入场动画的 transform 可以叠加 */
	shift?: '-50%' | '-100%';
	/** 垂直居中（y 是中心） */
	vshift?: '-50%' | '-100%';
	origin?: string;
	/** 常驻旋转角度（度） */
	rotate?: number;
	/** 变淡（0–1）。用 filter 实现：打印与减少动态效果的 CSS 会强制 opacity:1 */
	dim?: number;
	/** anim="slide" 时的起点偏移 */
	from?: [number, number];
	style?: CSSProperties;
	children?: ReactNode;
};

/** 绝对定位的元素 + 出现 / 消失动画。打印（静态）时只渲染可见的元素。 */
export function El({ x, y, w, h, show = true, anim = 'fade', delay = 0, shift, vshift, origin, rotate = 0, dim, from, style, children }: ElProps) {
	const { isStatic, reduced, lag } = useBeat();
	const base: CSSProperties = { position: 'absolute', left: x, top: y, width: w, height: h, ...style };
	const filter = dim === undefined ? undefined : `opacity(${dim})`;
	if (isStatic) {
		if (!show) return null;
		const tf = [shift || vshift ? `translate(${shift ?? 0}, ${vshift ?? 0})` : '', rotate ? `rotate(${rotate}deg)` : ''].join(' ').trim();
		return <div style={{ ...base, transform: tf || undefined, transformOrigin: origin, filter: filter ?? base.filter }}>{children}</div>;
	}
	const v = VARIANTS[anim];
	const hidden: TargetAndTransition = { ...v.hidden, rotate: rotate + ((v.hidden.rotate as number | undefined) ?? 0) };
	const shown: TargetAndTransition = { ...v.shown, rotate, ...(filter ? { filter } : {}) };
	if (anim === 'slide' && from) { hidden.x = from[0]; hidden.y = from[1]; }
	const t = { duration: reduced ? 0 : v.d, delay: reduced ? 0 : delay + lag, ease: [0.25, 0.46, 0.45, 0.94] as const };
	return (
		<AnimatePresence initial={false}>
			{show && (
				<motion.div
					key="el"
					style={{ ...base, translateX: shift, translateY: vshift, transformOrigin: origin }}
					initial={hidden}
					animate={shown}
					exit={{ ...v.hidden, transition: { duration: reduced ? 0 : 0.3 } }}
					transition={{ ...t, filter: { duration: reduced ? 0 : 0.5 } }}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}

type TProps = Omit<ElProps, 'w' | 'h' | 'shift'> & {
	/** 板书：字母高度（capital height）；印刷：用 fs */
	h?: number; fs?: number;
	c?: string; align?: 'left' | 'center' | 'right';
	weight?: number; print?: boolean; italic?: boolean;
};

/** 文字：(x, y) 是基线左端（align=center / right 时是基线中点 / 右端） */
export function T({ x, y, h = 48, fs, c = INK, align = 'left', weight, print, italic, anim, style, children, ...rest }: TProps) {
	const size = fs ?? h * 1.38;
	return (
		<El
			x={x} y={y - size * 0.8}
			shift={align === 'center' ? '-50%' : align === 'right' ? '-100%' : undefined}
			anim={anim ?? (print ? 'fade' : 'write')}
			style={{
				fontFamily: print ? PRINT : HAND, fontSize: size, lineHeight: 1, color: c,
				fontWeight: weight ?? (print ? 600 : 700), whiteSpace: 'nowrap', letterSpacing: print ? 0 : -0.01 * size,
				fontStyle: italic ? 'italic' : undefined, ...style,
			}}
			{...rest}
		>{children}</El>
	);
}

/** 荧光笔划线（文字下半截后面）。x0–x1，baseline y，字高 h */
export function Swipe({ x0, x1, y, h = 60, show = true, delay = 0, c = ACCENT }: { x0: number; x1: number; y: number; h?: number; show?: boolean; delay?: number; c?: string }) {
	return (
		<El x={x0} y={y - h * 0.42} w={x1 - x0} h={h * 0.56} show={show} anim="grow" delay={delay} origin="left center"
			style={{ background: c, borderRadius: h * 0.2, mixBlendMode: 'multiply' }} />
	);
}

/** 荧光高亮块（矩形，multiply 叠在文字上，不遮字）。x0–x1, y0–y1 */
export function Hi({ x0, y0, x1, y1, show = true, delay = 0, c = ACCENT, anim = 'grow' }: { x0: number; y0: number; x1: number; y1: number; show?: boolean; delay?: number; c?: string; anim?: Anim }) {
	return <El x={x0} y={y0} w={x1 - x0} h={y1 - y0} show={show} anim={anim} delay={delay} origin="left center"
		style={{ background: c, borderRadius: Math.min(16, (y1 - y0) * 0.25), mixBlendMode: 'multiply' }} />;
}

/** 世界坐标里的一段 SVG（画在原点、overflow 可见），用于线条、箭头、圈 */
function Svg({ children }: { children: ReactNode }) {
	return <svg width={1} height={1} style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible', pointerEvents: 'none' }}>{children}</svg>;
}

type InkProps = { d: string; show?: boolean; c?: string; w?: number; dash?: string; delay?: number; fill?: string; duration?: number };

/** 一笔画出来的线（pathLength 动画） */
export function Ink({ d, show = true, c = INK, w = 7, dash, delay = 0, fill = 'none', duration = 0.6 }: InkProps) {
	const { isStatic, reduced, lag } = useBeat();
	const common = { d, stroke: c, strokeWidth: w, fill, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, strokeDasharray: dash };
	if (isStatic) return show ? <Svg><path {...common} /></Svg> : null;
	return (
		<Svg>
			<AnimatePresence initial={false}>
				{show && (
					<motion.path key="p" {...common}
						initial={dash ? { opacity: 0 } : { pathLength: 0, opacity: 1 }}
						animate={dash ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
						exit={{ opacity: 0, transition: { duration: reduced ? 0 : 0.25 } }}
						transition={{ duration: reduced ? 0 : duration, delay: reduced ? 0 : delay + lag, ease: 'easeInOut' }} />
				)}
			</AnimatePresence>
		</Svg>
	);
}

/** 箭头：from → to，可带一个二次曲线控制点 */
export function Arrow({ from, to, via, show = true, c = INK, w = 8, delay = 0, head = 34 }: { from: [number, number]; to: [number, number]; via?: [number, number]; show?: boolean; c?: string; w?: number; delay?: number; head?: number }) {
	const [x1, y1] = from, [x2, y2] = to;
	const d = via ? `M ${x1} ${y1} Q ${via[0]} ${via[1]} ${x2} ${y2}` : `M ${x1} ${y1} L ${x2} ${y2}`;
	const [px, py] = via ?? from;
	const a = Math.atan2(y2 - py, x2 - px);
	const hx = (k: number) => x2 - head * Math.cos(a + k), hy = (k: number) => y2 - head * Math.sin(a + k);
	const headD = `M ${hx(0.45)} ${hy(0.45)} L ${x2} ${y2} L ${hx(-0.45)} ${hy(-0.45)}`;
	return <>
		<Ink d={d} show={show} c={c} w={w} delay={delay} />
		<Ink d={headD} show={show} c={c} w={w} delay={delay + 0.45} duration={0.2} />
	</>;
}

/** 手画的圈（略微倾斜、首尾交叠的椭圆） */
export function Ring({ cx, cy, rx, ry, show = true, c = ACCENT, w = 12, delay = 0, double }: { cx: number; cy: number; rx: number; ry: number; show?: boolean; c?: string; w?: number; delay?: number; double?: boolean }) {
	const loop = (k: number) => {
		const pts: string[] = [];
		const turns = 1.12;
		for (let i = 0; i <= 48; i++) {
			const t = (i / 48) * turns * Math.PI * 2 - Math.PI * 0.6;
			const wob = 1 + 0.04 * Math.sin(i * 0.7 + k);
			pts.push(`${(cx + rx * k * wob * Math.cos(t)).toFixed(1)} ${(cy + ry * k * wob * Math.sin(t) - 0.08 * ry * Math.cos(t)).toFixed(1)}`);
		}
		return 'M ' + pts.join(' L ');
	};
	return <>
		<Ink d={loop(1)} show={show} c={c} w={w} delay={delay} duration={0.7} />
		{double && <Ink d={loop(1.12)} show={show} c={c} w={w} delay={delay + 0.5} duration={0.7} />}
	</>;
}

/** 印刷卡片（磁贴）：白纸 + 深色描边 + 可选的色带标题 */
export function Card({ x, y, w, h, show = true, anim = 'drop', delay = 0, band, bandH = 76, bg = PAPER, radius = 22, children, style }: { x: number; y: number; w: number; h: number; show?: boolean; anim?: Anim; delay?: number; band?: string; bandH?: number; bg?: string; radius?: number; children?: ReactNode; style?: CSSProperties }) {
	return (
		<El x={x} y={y} w={w} h={h} show={show} anim={anim} delay={delay}
			style={{ background: bg, border: `5px solid ${INK}`, borderRadius: radius, boxShadow: `14px 14px 0 rgba(255,222,89,.9)`, overflow: 'hidden', ...style }}>
			{band && <div style={{ position: 'absolute', left: 0, top: 0, right: 0, height: bandH, background: band }} />}
			{children}
		</El>
	);
}

/** 板书的 ✓ / ✗ */
export function Mark({ x, y, size = 60, kind = 'tick', c, show = true, delay = 0 }: { x: number; y: number; size?: number; kind?: 'tick' | 'cross'; c?: string; show?: boolean; delay?: number }) {
	const s = size / 2;
	const d = kind === 'tick'
		? `M ${x - s} ${y} L ${x - s * 0.25} ${y + s * 0.75} L ${x + s} ${y - s * 0.85}`
		: `M ${x - s * 0.8} ${y - s * 0.8} L ${x + s * 0.8} ${y + s * 0.8} M ${x + s * 0.8} ${y - s * 0.8} L ${x - s * 0.8} ${y + s * 0.8}`;
	return <Ink d={d} show={show} c={c ?? (kind === 'tick' ? INK : RED)} w={size * 0.14} delay={delay} duration={0.35} />;
}

/** 平移一组用局部坐标写的内容到地图上的新位置（不用 transform，保持子元素的定位基准） */
export function Shift({ dx, dy, children }: { dx: number; dy: number; children: ReactNode }) {
	return <div style={{ position: 'absolute', left: dx, top: dy, width: 0, height: 0 }}>{children}</div>;
}


/** 一组内容整体移动 / 缩放（卡片带着它的标签一起滑走）。子元素仍用世界坐标。 */
export function Move({ dx = 0, dy = 0, scale = 1, ox = 0, oy = 0, duration = 0.9, delay = 0, children }: { dx?: number; dy?: number; scale?: number; ox?: number; oy?: number; duration?: number; delay?: number; children: ReactNode }) {
	const { isStatic, reduced, lag } = useBeat();
	const base: CSSProperties = { position: 'absolute', left: 0, top: 0, width: 0, height: 0, transformOrigin: `${ox}px ${oy}px` };
	if (isStatic) return <div style={{ ...base, transform: `translate(${dx}px, ${dy}px) scale(${scale})` }}>{children}</div>;
	return (
		<motion.div style={base} initial={false} animate={{ x: dx, y: dy, scale }}
			transition={{ duration: reduced ? 0 : duration, delay: reduced ? 0 : delay + lag, ease: [0.65, 0, 0.35, 1] }}>
			{children}
		</motion.div>
	);
}

/** 填充形状（云朵、印章底等）：整体淡入 */
export function Fill({ d, show = true, fill = PAPER, stroke = INK, w = 6, delay = 0, anim = 'fade' }: { d: string; show?: boolean; fill?: string; stroke?: string; w?: number; delay?: number; anim?: Anim }) {
	return (
		<El x={0} y={0} show={show} anim={anim} delay={delay}>
			<Svg><path d={d} fill={fill} stroke={stroke} strokeWidth={w} strokeLinejoin="round" /></Svg>
		</El>
	);
}

/** 云朵（思考气泡）轮廓：沿矩形边缘画一圈扇贝 */
export function cloudPath(x0: number, y0: number, x1: number, y1: number, bump = 70) {
	const w = x1 - x0, h = y1 - y0;
	const nx = Math.max(3, Math.round(w / (bump * 1.6))), ny = Math.max(2, Math.round(h / (bump * 1.6)));
	const pts: [number, number][] = [];
	for (let i = 0; i < nx; i++) pts.push([x0 + (w * i) / nx, y0]);
	for (let i = 0; i < ny; i++) pts.push([x1, y0 + (h * i) / ny]);
	for (let i = 0; i < nx; i++) pts.push([x1 - (w * i) / nx, y1]);
	for (let i = 0; i < ny; i++) pts.push([x0, y1 - (h * i) / ny]);
	const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
	let d = `M ${pts[0][0]} ${pts[0][1]}`;
	for (let i = 0; i < pts.length; i++) {
		const [ax, ay] = pts[i], [bx, by] = pts[(i + 1) % pts.length];
		const mx = (ax + bx) / 2, my = (ay + by) / 2;
		// 控制点往外推：鼓出来的扇贝
		const ox = mx - cx, oy = my - cy, len = Math.hypot(ox, oy) || 1;
		d += ` Q ${mx + (ox / len) * bump} ${my + (oy / len) * bump} ${bx} ${by}`;
	}
	return d + ' Z';
}

/** 行李牌（tan 色标签）+ 一根绳子拴到 (tx, ty) */
export function Tag({ cx, cy, w = 268, h = 126, text, tie, show = true, delay = 0, dim, fs = 44 }: { cx: number; cy: number; w?: number; h?: number; text: string; tie: [number, number]; show?: boolean; delay?: number; dim?: number; fs?: number }) {
	const hole: [number, number] = [cx - w / 2 + 34, cy];
	return <>
		<Ink d={`M ${tie[0]} ${tie[1]} Q ${(tie[0] + hole[0]) / 2} ${Math.max(tie[1], hole[1]) + 40} ${hole[0]} ${hole[1]}`} show={show} w={4} c="#7a5b34" delay={delay} duration={0.3} />
		<El x={cx - w / 2} y={cy - h / 2} w={w} h={h} show={show} anim="pop" delay={delay + 0.15} dim={dim}
			style={{ background: '#e3c48f', border: `5px solid #7a5b34`, borderRadius: '14px 14px 14px 14px', clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 14% 100%, 0 72%, 0 28%)', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: w * 0.12, boxSizing: 'border-box', fontFamily: PRINT, fontWeight: 800, fontSize: fs, color: '#3b2a14' }}>
			<div style={{ position: 'absolute', left: 26, top: h / 2 - 9, width: 18, height: 18, borderRadius: 9, background: PAPER, border: '3px solid #7a5b34' }} />
			{text}
		</El>
	</>;
}

/** 橡皮图章（红色双框，倾斜） */
export function Stamp({ cx, cy, text, fs = 50, rotate = -5, show = true, delay = 0 }: { cx: number; cy: number; text: string; fs?: number; rotate?: number; show?: boolean; delay?: number }) {
	return (
		<El x={cx} y={cy} shift="-50%" vshift="-50%" rotate={rotate} anim="stamp" show={show} delay={delay}
			style={{ border: `${fs * 0.1}px double ${RED}`, outline: `${fs * 0.05}px solid ${RED}`, outlineOffset: fs * 0.06, padding: `${fs * 0.12}px ${fs * 0.35}px`, borderRadius: fs * 0.16, color: RED, fontFamily: PRINT, fontWeight: 900, fontSize: fs, letterSpacing: fs * 0.04, whiteSpace: 'nowrap', lineHeight: 1.1, background: 'rgba(255,255,255,.55)' }}>
			{text}
		</El>
	);
}

/** 药丸（印刷的小标签），中心 (cx, cy) */
export function Pill({ cx, cy, children, fs = 40, bg = '#1e2f6b', c = PAPER, h, show = true, delay = 0, anim = 'pop', dim, style }: { cx: number; cy: number; children: ReactNode; fs?: number; bg?: string; c?: string; h?: number; show?: boolean; delay?: number; anim?: Anim; dim?: number; style?: CSSProperties }) {
	const hh = h ?? fs * 1.75;
	return (
		<El x={cx} y={cy - hh / 2} h={hh} shift="-50%" show={show} delay={delay} anim={anim} dim={dim}
			style={{ background: bg, color: c, borderRadius: hh / 2, padding: `0 ${fs * 0.7}px`, display: 'flex', alignItems: 'center', gap: fs * 0.3, fontFamily: PRINT, fontWeight: 800, fontSize: fs, whiteSpace: 'nowrap', boxSizing: 'border-box', ...style }}>
			{children}
		</El>
	);
}

/** 圆形结果片（✓ / ✗），中心 (cx, cy)，直径 d */
export function Disc({ cx, cy, d = 112, kind, show = true, delay = 0, anim = 'pop', from, dim }: { cx: number; cy: number; d?: number; kind: 'tick' | 'cross'; show?: boolean; delay?: number; anim?: Anim; from?: [number, number]; dim?: number }) {
	return (
		<El x={cx - d / 2} y={cy - d / 2} w={d} h={d} show={show} delay={delay} anim={anim} from={from} dim={dim}
			style={{ background: PAPER, border: `${Math.max(3, d * 0.05)}px solid #3d4a5c`, borderRadius: '50%', boxSizing: 'border-box' }}>
			<MarkGlyph kind={kind} size={d * 0.56} />
		</El>
	);
}

/** 不带动画的 ✓ / ✗ 字形（放在卡片、磁贴内部），居中于父元素 */
export function MarkGlyph({ kind, size, c }: { kind: 'tick' | 'cross'; size: number; c?: string }) {
	const s = size / 2;
	const d = kind === 'tick'
		? `M ${-s} 0 L ${-s * 0.25} ${s * 0.75} L ${s} ${-s * 0.85}`
		: `M ${-s * 0.8} ${-s * 0.8} L ${s * 0.8} ${s * 0.8} M ${s * 0.8} ${-s * 0.8} L ${-s * 0.8} ${s * 0.8}`;
	return (
		<svg width={size * 1.2} height={size * 1.2} viewBox={`${-size * 0.6} ${-size * 0.6} ${size * 1.2} ${size * 1.2}`} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', overflow: 'visible' }}>
			<path d={d} fill="none" stroke={c ?? (kind === 'tick' ? INK : RED)} strokeWidth={size * 0.16} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

/** 会开的车（矿车、第二辆面包车）：x 是车身中心，车轮落在 y。from = 入场时从多远开进来 */
export function Vehicle({ x, y, show = true, from = -2400, duration = 1.4, delay = 0, children }: { x: number; y: number; show?: boolean; from?: number; duration?: number; delay?: number; children: ReactNode }) {
	const { isStatic, reduced, lag } = useBeat();
	if (isStatic) return show ? <div style={{ position: 'absolute', left: x, top: y }}>{children}</div> : null;
	const t = { duration: reduced ? 0 : duration, delay: reduced ? 0 : delay + lag * 0.4, ease: [0.3, 0, 0.25, 1] as const };
	return (
		<AnimatePresence initial={false}>
			{show && (
				<motion.div key="v" style={{ position: 'absolute', top: y, left: 0 }}
					initial={{ x: x + from, opacity: 0 }} animate={{ x, opacity: 1 }} exit={{ opacity: 0, transition: { duration: reduced ? 0 : 0.3 } }}
					transition={{ x: t, opacity: { duration: reduced ? 0 : 0.2, delay: t.delay } }}>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
