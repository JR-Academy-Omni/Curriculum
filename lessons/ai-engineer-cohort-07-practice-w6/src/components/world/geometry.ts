// 世界地图几何：一张大画布 + 一条顺时针环路。
// 坐标单位：zoom 1 时屏幕显示 1920 × 1080 个画布单位；本引擎设计画布 1600 × 900，所以 s = z × 1600 / 1920。

export type Cam = { cx: number; cy: number; z: number };

export const SCREEN_W = 1600;
export const SCREEN_H = 900;
export const UNIT_PER_SCREEN = 1920; // zoom 1 时一屏的画布宽度

export function camScale(z: number) {
	return (z * SCREEN_W) / UNIT_PER_SCREEN;
}

export function camTransform(c: Cam) {
	const s = camScale(c.z);
	return { s, tx: SCREEN_W / 2 - c.cx * s, ty: SCREEN_H / 2 - c.cy * s };
}

/** 镜头当前能看到的画布范围 */
export function camView(c: Cam) {
	const w = UNIT_PER_SCREEN / c.z;
	const h = (UNIT_PER_SCREEN * SCREEN_H) / SCREEN_W / c.z;
	return { x0: c.cx - w / 2, y0: c.cy - h / 2, x1: c.cx + w / 2, y1: c.cy + h / 2 };
}

// ── 环路 ─────────────────────────────────────────────
// 上边往右开（第 1–3 章，内容都在路上方），右下掉头，下边往左开回（第 4 章），左边往上爬（五个路牌）。
// 上边中心线 y 4330，路面 4270–4390；车轮落在 y 4300。
export const ROAD = { x0: 600, x1: 53800, yT: 4330, yB: 11330, r: 1200, w: 120 } as const;
export const WHEEL_OFFSET = 30; // 车轮离路中心线的距离（偏向路外侧那条车道）

const { x0, x1, yT, yB, r } = ROAD;
const TOP = x1 - x0 - 2 * r;
const SIDE = yB - yT - 2 * r;
const ARC = (Math.PI * r) / 2;
export const ROAD_LENGTH = 2 * TOP + 2 * SIDE + 4 * ARC;

/** 上边某个 x 对应的路程 s（s = 0 在左上弯道结束处） */
export const topS = (x: number) => x - (x0 + r);
/** 下边某个 x 对应的路程 s（往左开） */
export const bottomS = (x: number) => TOP + ARC + SIDE + ARC + (x1 - r - x);
/** 左边某个 y 对应的路程 s（往上爬） */
export const leftS = (y: number) => TOP + ARC + SIDE + ARC + TOP + ARC + (yB - r - y);

/** 路程 s → 中心线上的点与切线方向 */
export function roadPoint(sRaw: number): { x: number; y: number; tx: number; ty: number } {
	let s = ((sRaw % ROAD_LENGTH) + ROAD_LENGTH) % ROAD_LENGTH;
	const arc = (cx: number, cy: number, a0: number, t: number) => {
		const a = a0 + (t / ARC) * (Math.PI / 2);
		return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), tx: -Math.sin(a), ty: Math.cos(a) };
	};
	if (s < TOP) return { x: x0 + r + s, y: yT, tx: 1, ty: 0 };
	s -= TOP;
	if (s < ARC) return arc(x1 - r, yT + r, -Math.PI / 2, s);
	s -= ARC;
	if (s < SIDE) return { x: x1, y: yT + r + s, tx: 0, ty: 1 };
	s -= SIDE;
	if (s < ARC) return arc(x1 - r, yB - r, 0, s);
	s -= ARC;
	if (s < TOP) return { x: x1 - r - s, y: yB, tx: -1, ty: 0 };
	s -= TOP;
	if (s < ARC) return arc(x0 + r, yB - r, Math.PI / 2, s);
	s -= ARC;
	if (s < SIDE) return { x: x0, y: yB - r - s, tx: 0, ty: -1 };
	s -= SIDE;
	return arc(x0 + r, yT + r, Math.PI, s);
}

export const ROAD_PATH = [
	`M ${x0 + r} ${yT}`,
	`H ${x1 - r}`,
	`A ${r} ${r} 0 0 1 ${x1} ${yT + r}`,
	`V ${yB - r}`,
	`A ${r} ${r} 0 0 1 ${x1 - r} ${yB}`,
	`H ${x0 + r}`,
	`A ${r} ${r} 0 0 1 ${x0} ${yB - r}`,
	`V ${yT + r}`,
	`A ${r} ${r} 0 0 1 ${x0 + r} ${yT}`,
].join(' ');

// 环路缺口：左边上段 + 左上弯道（从 GAP_FROM 到 s = 0）先不画，全图时才接上
const GAP_Y = yT + r + 1600; // 左边从这里往上到弯道
export const ROAD_OPEN_PATH = [
	`M ${x0 + r} ${yT}`,
	`H ${x1 - r}`,
	`A ${r} ${r} 0 0 1 ${x1} ${yT + r}`,
	`V ${yB - r}`,
	`A ${r} ${r} 0 0 1 ${x1 - r} ${yB}`,
	`H ${x0 + r}`,
	`A ${r} ${r} 0 0 1 ${x0} ${yB - r}`,
	`V ${GAP_Y}`,
].join(' ');
export const ROAD_GAP_PATH = [`M ${x0} ${GAP_Y}`, `V ${yT + r}`, `A ${r} ${r} 0 0 1 ${x0 + r} ${yT}`].join(' ');

/** 车（侧视图）在路程 s 处的摆放：位置、旋转、是否水平翻转 */
export function vanPose(s: number, faceBack = false) {
	const p = roadPoint(s);
	let angle = (Math.atan2(p.ty, p.tx) * 180) / Math.PI;
	let flip = false;
	// 下边往左开时不倒着画：水平翻转，车顶仍朝上（朝环路内侧）
	if (angle > 90.5 || angle < -90.5) { flip = true; angle -= 180; }
	const nx = p.ty, ny = -p.tx; // 外法线
	const k = flip ? -WHEEL_OFFSET : WHEEL_OFFSET;
	return { x: p.x + nx * k, y: p.y + ny * k, angle, flip: flip !== faceBack };
}

// 路牌（章节名）：立在环路内侧
export type RoadSign = { text: string; s: number };
export const SIGNS: RoadSign[] = [
	{ text: '能上线吗？', s: topS(4400) },
	{ text: '考试', s: topS(9000) },
	{ text: '传统测试 vs EVAL', s: topS(13300) },
	{ text: 'GOLDEN DATASET', s: topS(20600) },
	{ text: 'GOLDEN CASE', s: topS(30400) },
	{ text: '跑一遍', s: bottomS(5300) },
];
