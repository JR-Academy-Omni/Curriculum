import type { Chapter } from '../world/beat';
import { topS, lap } from '../world/layout';

// 第 54 页：回到「能上线吗？」的区域。画面内容在 W01_ShipIt 里（擦掉「凭感觉」那一行，写「拿 eval 说话。」）。
export const F05: Chapter = {
	stops: [{
		key: 'showme', chapter: '第 4 章 · 回到周五：能上线吗？', cam: { cx: 5000, cy: 3760, z: 0.9 }, builds: 3, van: { s: lap(topS(5880)) },
	}],
};
