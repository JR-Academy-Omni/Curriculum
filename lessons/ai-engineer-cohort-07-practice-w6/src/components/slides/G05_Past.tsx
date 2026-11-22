import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, Card, Tag, Stamp, Pill, MarkGlyph, Shift, BLUE, GREY, INK } from '../world/prims';
import { Checklist, ClMark } from '../world/checklist';
import { EP2, e2van } from '../world/layout';

// 第 25 页：看着像 golden 的第 2 种：过去的决定。清单副本 C 到达时就在，未打勾。
const K = 'past';
const C = { X: 17020, Y: 3260 };

function Render() {
	const { on } = useBeat();
	const log = on(K, 1), right = on(K, 2);
	return (
		<Shift dx={EP2.dx} dy={EP2.dy}>
			<Checklist X={C.X} Y={C.Y} show={on(K)} />

			{/* 1：旧案件记录 */}
			<Card x={15080} y={3256} w={600} h={368} band="#7b4a7a" bandH={78} radius={16} show={log} />
			<T x={15114} y={3306.3} fs={36} print weight={800} c="#fff" show={log}>旧案件记录</T>
			<T x={15114} y={3397} fs={38} print c={GREY} show={log}>案例 017</T>
			<T x={15646} y={3397} fs={38} print c={GREY} align="right" show={log}>3 月 17 日</T>
			<T x={15114} y={3452.1} fs={38} print show={log}>已退款</T>
			<T x={15114} y={3519.8} fs={52} print weight={800} show={log}>$500</T>
			<T x={15114} y={3582.6} fs={38} print show={log}>状态</T>
			<T x={15646} y={3582.6} fs={38} print align="right" show={log}>已结案</T>

			{/* 2：正确答案 + ≠ */}
			<Card x={15940} y={3315.5} w={480} h={249} band="#7a9a72" bandH={72} radius={16} show={right} />
			<T x={15974} y={3365.8} fs={32} print weight={800} c="#fff" show={right}>正确答案</T>
			<T x={15974} y={3469} fs={52} print weight={800} show={right}>退款</T>
			<T x={16386} y={3469} fs={52} print weight={800} align="right" show={right}>$564.30</T>
			<T x={15974} y={3526.4} fs={32} print c={GREY} show={right}>示例</T>
			<T x={15790} y={3500} h={110} c={INK} align="center" weight={800} show={right} delay={0.4} anim="pop">≠</T>

			{/* 3：清单第 4 行 ✗（不一定是对的） */}
			<ClMark X={C.X} Y={C.Y} i={3} kind="cross" show={on(K, 3)} />
			{/* 4：把它当标准答案 */}
			<Tag cx={15300} cy={3150} w={370} text="标准答案" tie={[15260, 3270]} show={on(K, 4)} />
			{/* 5：agent 答得完全对 */}
			<Pill cx={16180} cy={3800} fs={40} bg="#1e2f6b" show={on(K, 5)}>
				<span style={{ position: 'relative', display: 'inline-block', width: 40, height: 40 }}><MarkGlyph kind="tick" size={36} c="#fff" /></span>
				agent: $564.30
			</Pill>
			{/* 6：反而被判错 */}
			<Stamp cx={16250} cy={3615} text="判错" fs={50} rotate={-5} show={on(K, 6)} />
			{/* 7 */}
			<T x={15380} y={3870} h={56} c={BLUE} align="center" show={on(K, 7)}>做过的决定 ≠ 核对过的答案</T>
		</Shift>
	);
}

export const G05: Chapter = {
	stops: [{
		key: K, chapter: '第 2 章 · golden case 长什么样', cam: { cx: 43500, cy: 3700, z: 0.66 }, builds: 7, van: { s: e2van(7700) }, minimap: false,
	}],
	area: { id: K, bbox: [EP2.dx + 14880, 2900, EP2.dx + 17420, 3900], Render },
};
