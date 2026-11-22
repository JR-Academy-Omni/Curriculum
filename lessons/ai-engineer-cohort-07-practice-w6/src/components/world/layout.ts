// 整张地图的布局：每个区域的平移量（把各区域的局部坐标搬到地图上）、镜头、停点 key 都在这里。
// 规则：内容都在路的上方（上边的路中心线 y 4330，车轮 y 4300）；第 2、3 章的坐标整体右移 EP2.dx，y 不变。
import { topS, bottomS, leftS, ROAD_LENGTH } from './geometry';

/** 第 2、3 章共用同一块画布、同一套局部坐标：整体右移 */
export const EP2 = { dx: 27200, dy: 0 } as const;
/** 第 2、3 章局部坐标里的 x → 地图 x */
export const e2x = (x: number) => x + EP2.dx;
/** 第 2、3 章局部坐标里的车位置（车轮在 y 4300 的 x）→ 路程 s */
export const e2van = (x: number) => topS(e2x(x));

/** 第 1、4 章各区域的平移量（局部坐标 + d = 地图坐标） */
export const EP1 = {
	ship: { dx: 1300, dy: 2990 },
	agent: { dx: 3560, dy: 2110 },
	exam: { dx: 3200, dy: 2960 },
	eyeball: { dx: 5500, dy: 2140 },
	tests: { dx: 5250, dy: 2930 },
	but: { dx: 5380, dy: 2780 },
	trap: { dx: 8350, dy: 400 },
	golden: { dx: 10700, dy: -2290 },
	good: { dx: 16050, dy: -2050 },
	grow: { dx: 18640, dy: 300 },
	wrongkey: { dx: 23350, dy: -2010 },
	// 第 4 章：下边 + 左边（局部坐标里路在 x 450，地图的路在 x 600）
	runit: { dx: 150, dy: 4750 },
	uses: { dx: 150, dy: 4700 },
	loop: { dx: 150, dy: 5000 },
} as const;

/** 最后一圈：路程超过一整圈，车不会倒着开回去 */
export const lap = (s: number) => ROAD_LENGTH + s;

export { topS, bottomS, leftS };

/*
停点 key（放映顺序；registry 会检查不重复）：
  封面        cover
  第 1 章     ship agent exam eyeball tests but trap golden good grow wrongkey
  第 2 章     hook howmuch title2 complaint front back rules drop suspects cost five raw past seen doors door1 holdup
  第 3 章     next3 start follow inputin reads due reply grader gets rows1 rows2 passes twoans run2 run3 passk k3 grid change same
  第 4 章     runit uses loop overview showme
*/
