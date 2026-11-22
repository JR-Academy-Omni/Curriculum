import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, Arrow, Swipe, Shift } from '../world/prims';
import { topS, EP1 } from '../world/layout';

// 第 11 页：一条循环链 + 三条做法。局部坐标（camera (8460, 3560)）写好后平移。
const { dx, dy } = EP1.grow;

function Render() {
	const { on } = useBeat();
	const k = 'grow';
	return (
		<Shift dx={dx} dy={dy}>
			<T x={7660} y={3210} h={58} weight={800} show={on(k)}>怎么让它长大</T>
			<T x={7660} y={3350} h={50} show={on(k)} delay={0.4}>读日志</T>
			<T x={7900} y={3350} h={50} show={on(k, 1)}>→ 记下哪里坏了</T>
			<T x={8430} y={3350} h={50} show={on(k, 2)}>→ 归类</T>
			<T x={8680} y={3350} h={50} show={on(k, 3)}>→ 计数</T>
			<Arrow from={[8800, 3392]} via={[8280, 3560]} to={[7760, 3398]} w={6} head={26} show={on(k, 3)} delay={0.5} />
			<T x={7660} y={3620} h={50} show={on(k, 4)}>– 由一位领域专家负责标准答案</T>
			<T x={7660} y={3750} h={50} show={on(k, 5)}>– 合成数据补空缺 → 人工检查</T>
			<Swipe x0={7660} x1={8930} y={3880} h={50} show={on(k, 6)} delay={0.6} />
			<T x={7660} y={3880} h={50} show={on(k, 6)}>– 每个线上 bug → 一个新的 test case</T>
		</Shift>
	);
}

export const W10: Chapter = {
	stops: [{
		key: 'grow', chapter: '第 1 章 · 为什么要 eval', cam: { cx: 27100, cy: 3860, z: 1.0 }, builds: 6, van: { s: topS(27800) },
	}],
	area: { id: 'grow', bbox: [26260, 3350, 27600, 4230], Render },
};
