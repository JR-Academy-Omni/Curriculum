import type { Area, Chapter, Stop } from '../world/beat';
import { W00 } from './W00_Cover';
import { W01 } from './W01_ShipIt';
import { W02 } from './W02_Agent';
import { W03 } from './W03_Exam';
import { W04 } from './W04_Eyeball';
import { W05 } from './W05_Tests';
import { W06 } from './W06_But';
import { W07 } from './W07_Trap';
import { W08 } from './W08_Golden';
import { W09 } from './W09_Good';
import { W10 } from './W10_Grow';
import { W11 } from './W11_WrongKey';
import { G00 } from './G00_Trucks';
import { G01 } from './G01_Hook';
import { G02, NEXT3 } from './G02_Title';
import { CASE, CASE3 } from './G03_Case';
import { G04 } from './G04_Raw';
import { G05 } from './G05_Past';
import { G06 } from './G06_Seen';
import { G07 } from './G07_Shed';
import { SCORE } from './E01_Score';
import { F01 } from './F01_RunIt';
import { F02 } from './F02_Uses';
import { F03 } from './F03_Loop';
import { F04 } from './F04_Overview';
import { F05 } from './F05_ShowMe';

// 放映顺序 = 这里的顺序。每个文件导出自己的停点（页）和画布区域；第 3 章的大部分停点在第 2 章的案例区上重演（CASE3 没有自己的区域）。
const chapters: Chapter[] = [
	W00,
	// 第 1 章 · 为什么要 eval（第 2–12 页）
	W01, W02, W03, W04, W05, W06, W07, W08, W09, W10, W11,
	// 第 2 章 · golden case 长什么样（第 13–29 页）
	G00, G01, G02, CASE, G04, G05, G06, G07,
	// 第 3 章 · 一次 test run（第 30–49 页）
	NEXT3, CASE3, SCORE,
	// 第 4 章 · 回到周五（第 50–54 页）
	F01, F02, F03, F04, F05,
];

export const STOPS: Stop[] = chapters.flatMap(c => c.stops);
export const AREAS: Area[] = chapters.flatMap(c => (c.area ? [c.area] : []));

// 停点 key 必须唯一：useBeat().on(key) 靠它定位
const seen = new Set<string>();
for (const s of STOPS) {
	if (seen.has(s.key)) throw new Error(`[world] duplicate stop key: ${s.key}`);
	seen.add(s.key);
}
