import { createContext, Fragment, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';
import { colors, fonts } from './kit';

/**
 * 内容层动画开关（不改引擎）。
 * 打印预览会把所有页一起渲染，动画可能停在半路；低运动偏好也不该看动画。
 * 这两种情况下 still = true：图表直接渲染终态，交互页显示完整内容。
 */
const StillCtx = createContext(false);

export function StillScope({ children }: { children: ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const reduced = useReducedMotion();
	const [inPrint, setInPrint] = useState(false);
	useLayoutEffect(() => {
		if (ref.current?.closest('.deck-print')) setInPrint(true);
	}, []);
	const still = !!reduced || inPrint;
	// key 变化让子树重新挂载，framer-motion 的 initial 才会按终态生效
	return <div ref={ref} style={{ display: 'contents' }}>
		<style>{'.live-toggle:focus-visible{outline:3px solid #38B6FF;outline-offset:3px}'}</style>
		<StillCtx.Provider value={still}><Fragment key={still ? 'still' : 'live'}>{children}</Fragment></StillCtx.Provider>
	</div>;
}

export const useStill = () => useContext(StillCtx);

/** still 时跳过入场动画 */
export function ini<T>(still: boolean, value: T): T | false {
	return still ? false : value;
}

/** 数字滚动；still 时直接显示终值，换值时从上一个值滚到新值 */
export function Count({ value, format = (n: number) => Math.round(n).toLocaleString('en-US'), duration = .9, style }: { value: number; format?: (n: number) => string; duration?: number; style?: CSSProperties }) {
	const still = useStill();
	const [n, setN] = useState(still ? value : 0);
	const from = useRef(still ? value : 0);
	useEffect(() => {
		if (still) { setN(value); from.current = value; return; }
		const start = performance.now();
		const a = from.current;
		let raf = 0;
		const step = (now: number) => {
			const t = Math.min((now - start) / (duration * 1000), 1);
			const e = 1 - Math.pow(1 - t, 3);
			setN(a + (value - a) * e);
			if (t < 1) raf = requestAnimationFrame(step);
			else from.current = value;
		};
		raf = requestAnimationFrame(step);
		return () => { cancelAnimationFrame(raf); from.current = value; };
	}, [value, still, duration]);
	return <span style={{ fontVariantNumeric: 'tabular-nums', ...style }}>{format(n)}</span>;
}

/** 讲师在页内点选用的切换按钮；Enter / 点击触发，焦点可见 */
export function Toggle({ active, onClick, children, tone = colors.yellow, size = 19 }: { active: boolean; onClick: () => void; children: ReactNode; tone?: string; size?: number }) {
	return <button type="button" onClick={onClick} aria-pressed={active} className="live-toggle" style={{
		fontFamily: fonts.body, fontSize: size, fontWeight: 800, cursor: 'pointer',
		padding: '9px 16px', borderRadius: 999, border: `2px solid ${colors.dark}`,
		background: active ? tone : colors.white, color: active && tone === colors.dark ? colors.white : colors.dark,
		boxShadow: active ? `3px 3px 0 ${colors.dark}` : 'none', transition: 'background .2s, box-shadow .2s',
	}}>{children}</button>;
}

/** 页面里的「点一下试试」提示；打印和低运动时不显示 */
export function Hint({ children }: { children: ReactNode }) {
	const still = useStill();
	if (still) return null;
	return <span style={{ fontFamily: fonts.body, fontSize: 16, color: '#514c48', fontWeight: 600 }}>{children}</span>;
}

/**
 * 流程页自动轮播（参照 company-intro 工作流页）：每隔 ms 亮下一步；鼠标停在上面暂停；
 * 讲师一旦手动点选，自动轮播就停下，交给讲师控制。still 时不轮播。
 */
export function useCycle(n: number, ms: number, still: boolean, start = 0) {
	const [at, setAt] = useState(start);
	const [hold, setHold] = useState(false);
	const [manual, setManual] = useState(false);
	useEffect(() => {
		if (still || hold || manual) return;
		const id = window.setInterval(() => setAt(a => (a + 1) % n), ms);
		return () => window.clearInterval(id);
	}, [n, ms, still, hold, manual]);
	const pick = (v: number | ((a: number) => number)) => { setManual(true); setAt(v); };
	const hover = { onMouseEnter: () => setHold(true), onMouseLeave: () => setHold(false) };
	return { at, pick, hover };
}

/** 一条流动的虚线（一张图只用一段）。still 时静止。 */
export function FlowDash({ d, w, h, color = colors.red, still, style }: { d: string; w: number; h: number; color?: string; still: boolean; style?: CSSProperties }) {
	return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden style={{ display: 'block', overflow: 'visible', ...style }}>
		<path d={d} fill="none" stroke={color} strokeWidth={3} strokeDasharray="9 8" strokeLinecap="round">
			{!still && <animate attributeName="stroke-dashoffset" from="34" to="0" dur="1.1s" repeatCount="indefinite" />}
		</path>
	</svg>;
}
