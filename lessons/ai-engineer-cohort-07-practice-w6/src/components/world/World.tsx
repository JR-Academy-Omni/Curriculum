import { useEffect, useMemo, useRef } from 'react';
import { animate, motion, useMotionValue, useReducedMotion, useTransform, type MotionValue } from 'framer-motion';
import { BeatContext, pickAt, useBeat, type Area, type Stop, type VanState } from './beat';
import { ROAD, ROAD_PATH, ROAD_OPEN_PATH, ROAD_GAP_PATH, SIGNS, SCREEN_W, camTransform, camView, roadPoint, vanPose, type Cam } from './geometry';
import { BLUE, INK, RED } from './prims';
import { colors, fonts } from '../ui';

// 世界：一张大画布常驻，翻页 / build 只移动镜头（和车）。打印时每页静态渲染，只画视野内的区域。

const GRID = 48; // 网格纸格子（画布单位）

/** 版权声明（LICENSE.md）：封面显示一行，打印 / PDF 每页页脚一行（封面除外）。不要删。 */
export const COPYRIGHT = '© 2026 匠人学院 JR Academy · 保留所有权利 · 仅限个人学习，禁止转载、二次开发、抄袭及任何公开使用（含非商用）· 详见 LICENSE.md';
const EASE = [0.65, 0, 0.35, 1] as const;

type Props = { slide: number; build: number; mode: 'live' | 'print'; stops: Stop[]; areas: Area[] };

export function flightDuration(from: Cam, to: Cam) { return flight(from, to).duration; }

export default function World({ slide, build, mode, stops, areas }: Props) {
	const reduced = !!useReducedMotion();
	const stop = stops[slide];
	const cam = pickAt(stop.cam, stop.camAt, build);
	const van = pickAt(stop.van, stop.vanAt, build);
	const order = useMemo(() => Object.fromEntries(stops.map((s, i) => [s.key, i])), [stops]);
	const isStatic = mode === 'print';
	// 翻页时，新页到达状态的元素等镜头快到了再出现
	const last = useRef({ slide, cam });
	const lag = !isStatic && !reduced && slide !== last.current.slide ? flight(last.current.cam, cam).duration * 0.75 : 0;
	useEffect(() => { last.current = { slide, cam }; });
	const beat = useMemo(() => ({ slide, build, order, isStatic, reduced, lag }), [slide, build, order, isStatic, reduced, lag]);

	// 只渲染镜头看得到的区域：当前视野 + 整段飞行扫过的范围（打印时只有当前视野）。
	// 下一页的区域提前挂载但隐藏（visibility），这样到达时它的元素能播入场动画。
	const prevTarget = useRef<{ from: Cam; to: Cam }>({ from: cam, to: cam });
	if (prevTarget.current.to.cx !== cam.cx || prevTarget.current.to.cy !== cam.cy || prevTarget.current.to.z !== cam.z) {
		prevTarget.current = { from: prevTarget.current.to, to: cam };
	}
	const views = isStatic || reduced ? [camView(cam)] : flightViews(prevTarget.current.from, cam);
	const ahead = isStatic ? [] : stopViews(stops[slide + 1]).concat(stopViews(stop));
	const hit = (a: Area, vs: View[]) => vs.some(v => a.bbox[2] > v.x0 - PAD && a.bbox[0] < v.x1 + PAD && a.bbox[3] > v.y0 - PAD && a.bbox[1] < v.y1 + PAD);
	const shown = areas.filter(a => hit(a, views) || hit(a, ahead)).map(a => ({ a, visible: hit(a, views) }));
	// 同一种外层元素，只切换 visibility：区域从"预挂载"变成"可见"时不会被 React 重新挂载
	const render = shown.map(({ a, visible }) => (
		<div key={a.id} data-area={a.id} aria-hidden={visible ? undefined : true} style={{ visibility: visible ? undefined : 'hidden' }}><a.Render /></div>
	));

	return (
		<BeatContext.Provider value={beat}>
			<div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: colors.warmBg, fontFamily: fonts.heading, color: INK }}>
				{isStatic
					? <StaticCamera cam={cam} van={van}>{render}</StaticCamera>
					: <LiveCamera cam={cam} van={van} reduced={reduced} minimap={stop.minimap !== false} chapter={stop.chapter}>{render}</LiveCamera>}
				{isStatic && slide > 0 && (
					<div style={{ position: 'absolute', left: 0, right: 0, bottom: 10, textAlign: 'center', fontFamily: fonts.body, fontSize: 13, fontWeight: 500, color: '#4a5068', zIndex: 50, whiteSpace: 'nowrap' }}><span style={{ background: 'rgba(255,248,238,.94)', borderRadius: 6, padding: '3px 10px' }}>{COPYRIGHT}</span></div>
				)}
			</div>
		</BeatContext.Provider>
	);
}

type View = ReturnType<typeof camView>;
const PAD = 80;

/** 一段飞行扫过的所有视野（采样），飞得远时中途拉远的视野也在内 */
function flightViews(from: Cam, to: Cam): View[] {
	const f = flight(from, to);
	if (f.duration === 0) return [camView(to)];
	return Array.from({ length: 13 }, (_, i) => camView(f.at(i / 12)));
}

function stopViews(stop: Stop | undefined): View[] {
	if (!stop) return [];
	return [stop.cam, ...Object.values(stop.camAt ?? {})].map(camView);
}

function gridStyle(s: number, tx: number, ty: number) {
	const size = GRID * s;
	// 缩得太小时网格会变成噪点：淡出
	const alpha = Math.max(0, Math.min(0.055, (size - 6) * 0.004));
	const line = `rgba(16,22,47,${alpha.toFixed(3)})`;
	return {
		backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
		backgroundSize: `${size}px ${size}px`,
		backgroundPosition: `${tx}px ${ty}px`,
	};
}

function StaticCamera({ cam, van, children }: { cam: Cam; van: VanState; children: React.ReactNode }) {
	const { s, tx, ty } = camTransform(cam);
	const pose = van ? vanPose(van.s, van.faceBack) : null;
	return <>
		<div style={{ position: 'absolute', inset: 0, ...gridStyle(s, tx, ty) }} />
		<div style={{ position: 'absolute', left: 0, top: 0, width: 1, height: 1, transformOrigin: '0 0', transform: `translate(${tx}px, ${ty}px) scale(${s})` }}>
			<Road />
			{children}
			{pose && <div style={{ position: 'absolute', left: 0, top: 0, transform: poseTransform(pose) }}><VanArt /></div>}
		</div>
	</>;
}

function poseTransform(p: { x: number; y: number; angle: number; flip: boolean }) {
	return `translate(${p.x}px, ${p.y}px) rotate(${p.angle}deg) scaleX(${p.flip ? -1 : 1})`;
}

// ── 镜头飞行 ─────────────────────────────────────────
// 中心点线性移动；距离超过一屏时中途拉远（zoom dip），让观众看到"车从这里开到那里"。
function flight(from: Cam, to: Cam) {
	const dist = Math.hypot(to.cx - from.cx, to.cy - from.cy);
	const zMin = Math.min(from.z, to.z);
	const viewW = 1920 / zMin;
	// 相邻区域（一屏半以内）只平移，像沿路开过去；更远才中途拉远
	const zFit = 1920 / (dist * 0.55 + viewW * 0.6);
	const dip = dist > viewW * 1.5 && zFit < zMin ? Math.log(zMin / zFit) : 0;
	const zoomRatio = Math.abs(Math.log(to.z / from.z));
	const duration = dist < 1 && zoomRatio < 0.01 ? 0 : Math.min(2.6, 0.9 + 0.5 * Math.log2(1 + dist / viewW) + 0.5 * zoomRatio);
	const at = (t: number): Cam => ({
		cx: from.cx + (to.cx - from.cx) * t,
		cy: from.cy + (to.cy - from.cy) * t,
		z: Math.exp(Math.log(from.z) + (Math.log(to.z) - Math.log(from.z)) * t - dip * Math.sin(Math.PI * t)),
	});
	return { duration, at };
}

function LiveCamera({ cam, van, reduced, minimap, chapter, children }: { cam: Cam; van: VanState; reduced: boolean; minimap: boolean; chapter: string; children: React.ReactNode }) {
	const camNow = useRef<Cam>(cam);
	const world = useRef<HTMLDivElement>(null);
	const grid = useRef<HTMLDivElement>(null);
	const lastDuration = useRef(0);

	const apply = (c: Cam) => {
		camNow.current = c;
		const { s, tx, ty } = camTransform(c);
		if (world.current) world.current.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
		if (grid.current) Object.assign(grid.current.style, gridStyle(s, tx, ty));
	};

	useEffect(() => { apply(camNow.current); }, []);

	useEffect(() => {
		const from = camNow.current;
		const f = flight(from, cam);
		lastDuration.current = reduced ? 0 : f.duration;
		if (reduced || f.duration === 0) { apply(cam); return; }
		const ctrl = animate(0, 1, { duration: f.duration, ease: EASE, onUpdate: t => apply(f.at(t)) });
		return () => ctrl.stop();
	}, [cam.cx, cam.cy, cam.z, reduced]);

	// 车：沿路程 s 移动，与镜头同步
	const vanS = useMotionValue(van ? van.s : 0);
	const vanOpacity = useMotionValue(van ? 1 : 0);
	const faceBack = useMotionValue(van?.faceBack ? 1 : 0);
	const hadVan = useRef(!!van);
	useEffect(() => {
		if (!van) {
			hadVan.current = false;
			const c = animate(vanOpacity, 0, { duration: reduced ? 0 : 0.4 });
			return () => c.stop();
		}
		faceBack.set(van.faceBack ? 1 : 0);
		if (!hadVan.current) {
			// 第一次上路：从左边开进来
			hadVan.current = true;
			vanS.set(van.s - 2600);
			animate(vanOpacity, 1, { duration: reduced ? 0 : 0.3 });
		}
		const dist = Math.abs(van.s - vanS.get());
		const d = reduced ? 0 : Math.max(lastDuration.current, Math.min(2.4, 0.5 + dist / 4000));
		const c = animate(vanS, van.s, { duration: d, ease: EASE });
		return () => c.stop();
	}, [van?.s, van?.faceBack, !!van, reduced]);

	const vanTransform = useTransform([vanS, faceBack], ([s, b]) => poseTransform(vanPose(s as number, (b as number) > 0.5)));

	return <>
		<div ref={grid} style={{ position: 'absolute', inset: 0 }} />
		<div ref={world} style={{ position: 'absolute', left: 0, top: 0, width: 1, height: 1, transformOrigin: '0 0' }}>
			<Road />
			{children}
			{van && <motion.div style={{ position: 'absolute', left: 0, top: 0, transform: vanTransform, opacity: vanOpacity }}><VanArt /></motion.div>}
		</div>
		{minimap && <MiniMap vanS={vanS} vanOpacity={vanOpacity} chapter={chapter} />}
	</>;
}

// ── 路 ─────────────────────────────────────────────
function Road() {
	// 左上角那段弯道一开始不画：最后拉远看全图（overview 页）时才接上，环路合拢
	const { isStatic, reduced, order, slide } = useBeat();
	const closed = order.overview !== undefined && slide >= order.overview;
	const layers = (d: string) => <>
		<path d={d} fill="none" stroke={INK} strokeWidth={ROAD.w + 10} strokeLinejoin="round" />
		<path d={d} fill="none" stroke="#4a5068" strokeWidth={ROAD.w} strokeLinejoin="round" />
		<path d={d} fill="none" stroke="#f4efe6" strokeWidth={7} strokeDasharray="70 60" />
	</>;
	return <>
		<svg width={1} height={1} style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible' }}>
			{layers(ROAD_OPEN_PATH)}
			{isStatic || reduced
				? closed && layers(ROAD_GAP_PATH)
				: <motion.g initial={false} animate={{ opacity: closed ? 1 : 0 }} transition={{ duration: 0.8, delay: closed ? 1.2 : 0 }}>{layers(ROAD_GAP_PATH)}</motion.g>}
		</svg>
		{SIGNS.map(sign => <Sign key={sign.text} {...sign} />)}
	</>;
}

/** 路牌：立在环路内侧，一根柱子 + 一块牌子 */
function Sign({ text, s }: { text: string; s: number }) {
	const p = roadPoint(s);
	const nx = -p.ty, ny = p.tx; // 内法线
	const bx = p.x + nx * (ROAD.w / 2 + 150), by = p.y + ny * (ROAD.w / 2 + 150);
	// 牌子挂在柱子远离路的那一端：上边往下挂，下边往上挂，左右边往内侧挂
	const anchor = Math.abs(ny) > 0.5 ? (ny > 0 ? 'translate(-50%, 0)' : 'translate(-50%, -100%)') : (nx > 0 ? 'translate(0, -50%)' : 'translate(-100%, -50%)');
	return <>
		<svg width={1} height={1} style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible' }}>
			<line x1={p.x + nx * (ROAD.w / 2 + 8)} y1={p.y + ny * (ROAD.w / 2 + 8)} x2={bx} y2={by} stroke={INK} strokeWidth={14} strokeLinecap="round" />
		</svg>
		<div aria-hidden style={{
			position: 'absolute', left: bx, top: by, transform: anchor,
			background: '#1f8a4c', color: '#fff', border: `6px solid #fff`, outline: `5px solid ${INK}`, borderRadius: 18,
			padding: '14px 34px', fontFamily: fonts.mono, fontWeight: 700, fontSize: 64, letterSpacing: 4, whiteSpace: 'nowrap',
		}}>{text}</div>
	</>;
}

// ── 车（= agent）──────────────────────────────────────
// 侧视小货车，约 280 × 135，车头朝右，车轮底部在原点。
export function VanArt({ scale = 1 }: { scale?: number }) {
	return (
		<svg width={1} height={1} style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible' }}>
			<g transform={`scale(${scale})`} stroke={INK} strokeWidth={6} strokeLinejoin="round">
				<path d="M -140 -26 L -140 -128 Q -140 -136 -132 -136 L 52 -136 Q 62 -136 70 -128 L 112 -84 L 134 -78 Q 142 -76 142 -66 L 142 -26 Z" fill="#ffffff" />
				<path d="M 62 -124 L 100 -84 L 62 -84 Z" fill="#bfe3ff" />
				<rect x={-140} y={-74} width={202} height={18} fill={RED} stroke="none" />
				<line x1={62} y1={-128} x2={62} y2={-26} />
				<rect x={128} y={-58} width={14} height={10} fill="#ffe08a" stroke="none" />
				<circle cx={-86} cy={-24} r={24} fill={INK} />
				<circle cx={-86} cy={-24} r={9} fill="#d9dbe3" stroke="none" />
				<circle cx={90} cy={-24} r={24} fill={INK} />
				<circle cx={90} cy={-24} r={9} fill="#d9dbe3" stroke="none" />
			</g>
		</svg>
	);
}

// ── 小地图（屏幕左下角，不随镜头移动）────────────────────
const MAP_W = SCREEN_W / 6; // 约屏宽的 1/6
const PADDING = 600;
const MAP_X0 = ROAD.x0 - PADDING, MAP_Y0 = ROAD.yT - PADDING;
const MAP_SCALE = MAP_W / (ROAD.x1 - ROAD.x0 + 2 * PADDING);
const MAP_H = (ROAD.yB - ROAD.yT + 2 * PADDING) * MAP_SCALE;

function MiniMap({ vanS, vanOpacity, chapter }: { vanS: MotionValue<number>; vanOpacity: MotionValue<number>; chapter: string }) {
	const dotX = useTransform(vanS, s => (roadPoint(s).x - MAP_X0) * MAP_SCALE);
	const dotY = useTransform(vanS, s => (roadPoint(s).y - MAP_Y0) * MAP_SCALE);
	return (
		<div aria-hidden style={{
			position: 'absolute', left: 22, bottom: 22, width: MAP_W + 24, padding: '10px 12px 12px', zIndex: 40,
			background: 'rgba(255,255,255,.92)', border: `2px solid ${INK}`, borderRadius: 14, boxShadow: '4px 4px 0 rgba(255,222,89,.9)',
		}}>
			<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: INK, letterSpacing: 0.6, marginBottom: 7, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{chapter}</div>
			<div style={{ position: 'relative', width: MAP_W, height: MAP_H }}>
				<svg width={MAP_W} height={MAP_H} viewBox={`${MAP_X0} ${MAP_Y0} ${MAP_W / MAP_SCALE} ${MAP_H / MAP_SCALE}`} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
					<path d={ROAD_PATH} fill="none" stroke="#4a5068" strokeWidth={3 / MAP_SCALE} />
					{SIGNS.map(sign => { const p = roadPoint(sign.s); return <circle key={sign.text} cx={p.x} cy={p.y} r={2.6 / MAP_SCALE} fill="#1f8a4c" />; })}
				</svg>
				<motion.div style={{ position: 'absolute', left: dotX, top: dotY, width: 11, height: 11, marginLeft: -5.5, marginTop: -5.5, borderRadius: '50%', background: RED, border: `2px solid ${INK}`, opacity: vanOpacity }} />
			</div>
			<div style={{ fontFamily: fonts.mono, fontSize: 10, color: BLUE, marginTop: 6 }}><span style={{ color: RED }}>●</span> = agent（车）</div>
		</div>
	);
}
