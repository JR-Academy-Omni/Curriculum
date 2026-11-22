import { createContext, useContext } from 'react';
import type { ComponentType } from 'react';
import type { Cam } from './geometry';

// 车（= agent）停在路程 s 处；faceBack = 掉头朝反方向
export type VanState = { s: number; faceBack?: boolean } | null;

/** 一页 = 一个镜头停点。builds = 页内点击步数（到达时是 build 0，不算一步）。 */
export type Stop = {
	key: string;
	chapter: string;
	cam: Cam;
	camAt?: Record<number, Cam>; // 页内某个 build 起换镜头
	builds: number;
	van: VanState;
	vanAt?: Record<number, VanState>;
	minimap?: boolean; // 默认显示；封面、全图不显示
};

/** 地图上的一个区域：bbox 用于打印时只渲染视野内的区域 */
export type Area = { id: string; bbox: [number, number, number, number]; Render: ComponentType };

/** 一组停点 + 它们所在的区域。area 可省略：第 3 章的停点在第 2 章的案例区上重演，区域由第 2 章那份文件提供。 */
export type Chapter = { stops: Stop[]; area?: Area };

export function pickAt<T>(base: T, at: Record<number, T> | undefined, build: number): T {
	if (!at) return base;
	let best = base, bestKey = -1;
	for (const [k, v] of Object.entries(at)) {
		const n = Number(k);
		if (n <= build && n > bestKey) { best = v; bestKey = n; }
	}
	return best;
}

type BeatValue = { slide: number; build: number; order: Record<string, number>; isStatic: boolean; reduced: boolean; lag: number };
export const BeatContext = createContext<BeatValue>({ slide: 0, build: 0, order: {}, isStatic: false, reduced: false, lag: 0 });

export function useBeat() {
	const b = useContext(BeatContext);
	/** 到达页 key 的第 build 步之后为 true，之后的页一直为 true */
	const on = (key: string, build = 0) => {
		const i = b.order[key];
		if (i === undefined) {
			console.warn(`[world] unknown stop key: ${key}`);
			return false;
		}
		return b.slide > i || (b.slide === i && b.build >= build);
	};
	/** 从 (from) 起可见，到 (until) 起移除 */
	const during = (from: [string, number?], until: [string, number?]) => on(from[0], from[1] ?? 0) && !on(until[0], until[1] ?? 0);
	return { ...b, on, during };
}
