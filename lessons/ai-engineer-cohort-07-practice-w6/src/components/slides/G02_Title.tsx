import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, Shift, BLUE, INK } from '../world/prims';
import { EP2, e2van } from '../world/layout';

// 第 15 页：第 2 章标题；第 30 页：回到这里写出「下一步」，作为第 3 章的开头。
// 标题上方 y 1300 以上留空。

function Render() {
	const { on } = useBeat();
	return (
		<Shift dx={EP2.dx} dy={EP2.dy}>
			<T x={5200} y={1490} h={80} c={INK} align="center" show={on('title2')} delay={0.9}>一个 golden case 长什么样</T>
			<T x={5200} y={1660} h={54} c={BLUE} align="center" show={on('next3')} delay={0.4}>下一步：一次 test run，从头到尾</T>
		</Shift>
	);
}

export const G02: Chapter = {
	stops: [{
		key: 'title2', chapter: '第 2 章 · golden case 长什么样', cam: { cx: 32400, cy: 1480, z: 0.9 }, builds: 0, van: { s: e2van(7200) }, minimap: false,
	}],
	area: { id: 'title2', bbox: [EP2.dx + 4300, 1230, EP2.dx + 6100, 1720], Render },
};

// 第 3 章开头：回到第 2 章的标题区，写出「下一步：一次 test run」（第 30 页）。车从工棚掉头开回案例区。
export const NEXT3: Chapter = {
	stops: [{
		key: 'next3', chapter: '第 3 章 · 一次 test run', cam: { cx: 32400, cy: 1480, z: 0.9 }, builds: 0, van: { s: e2van(7700), faceBack: true }, minimap: false,
	}],
};
