import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, Mark, Ring, Shift, RED, GREY } from '../world/prims';
import { topS, EP1 } from '../world/layout';

// 第 12 页：42% → 95%（CORE-Bench）。局部坐标（camera (6250, 5860)）写好后平移。
// 到达 = state A；build 1 擦掉标记和分数；build 2 = state B（全图里显示 state B）。
const { dx, dy } = EP1.wrongkey;
const ROWS = ['Q1  高', 'Q2  低', 'Q3  中', 'Q4  高', 'Q5  低'];
const MARKS_A: ('tick' | 'cross')[] = ['tick', 'cross', 'tick', 'cross', 'cross'];

function Render() {
	const { on, during } = useBeat();
	const k = 'wrongkey';
	const a = during([k, 0], [k, 1]);
	const b = on(k, 2);
	return (
		<Shift dx={dx} dy={dy}>
			<T x={5420} y={5460} h={56} show={on(k)}>一份<span style={{ color: RED }}>「错的」</span>标准答案：</T>
			{ROWS.map((r, i) => <T key={r} x={5440} y={5590 + i * 105} h={44} show={on(k)} delay={0.3 + i * 0.1}>{r}</T>)}
			{MARKS_A.map((m, i) => <Mark key={`a${i}`} x={5830} y={5572 + i * 105} size={48} kind={m} show={a} delay={0.8 + i * 0.12} />)}
			{ROWS.map((_, i) => <Mark key={`b${i}`} x={5830} y={5572 + i * 105} size={48} kind="tick" show={b} delay={0.1 + i * 0.12} />)}
			<T x={6150} y={5790} h={84} show={a} delay={1.4}>得分：42%</T>
			<T x={6150} y={5790} h={84} show={b} delay={0.7}>得分：95%</T>
			<Ring cx={6622} cy={5750} rx={160} ry={88} show={b} delay={1.2} />
			<T x={5440} y={6140} h={32} c={GREY} print show={on(k)} delay={0.6}>Anthropic, "Demystifying evals for AI agents", Jan 2026</T>
			<T x={5440} y={6190} h={32} c={GREY} print show={b} delay={1}>(CORE-Bench: grading, task &amp; harness fixes)</T>
		</Shift>
	);
}

export const W11: Chapter = {
	stops: [{
		key: 'wrongkey', chapter: '第 1 章 · 为什么要 eval', cam: { cx: 29600, cy: 3850, z: 1.0 }, builds: 2, van: { s: topS(30350) },
	}],
	area: { id: 'wrongkey', bbox: [28740, 3350, 30200, 4230], Render },
};
