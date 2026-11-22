import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, Ink, Ring, Shift, BLUE, RED, INK } from '../world/prims';
import { EP2, e2van } from '../world/layout';

// 第 13–14 页：你公司的数据（三辆矿车）→ 其中有多少是 golden 的？0 → 原矿。坐标整体右移 EP2.dx。
// 矿车本身在 G00_Trucks（它们之后要开去 raw 区）。
const C = '第 2 章 · golden case 长什么样';

function Render() {
	const { on } = useBeat();
	return (
		<Shift dx={EP2.dx} dy={EP2.dy}>
			{/* 第 13 页：车开进来之后，依次写出三个标签 */}
			<T x={4400} y={3735} h={52} c={BLUE} align="center" show={on('hook')} delay={1.6}>发票</T>
			<T x={5200} y={3735} h={52} c={BLUE} align="center" show={on('hook')} delay={2.0}>邮件</T>
			<T x={6000} y={3735} h={52} c={BLUE} align="center" show={on('hook')} delay={2.4}>报告</T>
			{/* 第 14 页 */}
			<T x={4140} y={3250} h={76} c={INK} show={on('howmuch', 1)}>其中有多少是 golden 的？</T>
			<T x={5624} y={3330} h={240} c={RED} weight={800} show={on('howmuch', 2)} anim="pop">0</T>
			<Ring cx={5712} cy={3210} rx={165} ry={160} show={on('howmuch', 2)} delay={0.45} />
			<Ink d="M 4040 3690 L 4040 3640 L 6360 3634 L 6360 3684" c={RED} w={9} show={on('howmuch', 3)} duration={0.7} />
			<T x={5200} y={3590} h={110} c={RED} weight={800} align="center" show={on('howmuch', 3)} delay={0.6}>原矿</T>
		</Shift>
	);
}

export const G01: Chapter = {
	stops: [
		{
			key: 'hook', chapter: C, cam: { cx: 32420, cy: 3640, z: 0.6 }, builds: 0, van: { s: e2van(7200) }, minimap: false,
		},
		{
			key: 'howmuch', chapter: C, cam: { cx: 32420, cy: 3640, z: 0.66 }, builds: 3, van: { s: e2van(7200) }, minimap: false,
		},
	],
	area: { id: 'hook', bbox: [EP2.dx + 4000, 3000, EP2.dx + 6400, 3790], Render },
};
