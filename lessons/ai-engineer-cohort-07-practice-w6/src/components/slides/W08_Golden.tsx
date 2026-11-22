import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Ink, Swipe, Shift, INK, RED, BLUE, GREY } from '../world/prims';
import { topS, EP1 } from '../world/layout';

// 第 9 页：一张记录卡（INPUT / EXPECTED / 签字）。局部坐标写好后平移，
// 用单镜头 (11300, 5840, 0.78) 附近一次看全两段。卡片是印刷的数据记录。
const { dx, dy } = EP1.golden;

function Render() {
	const { on } = useBeat();
	const k = 'golden';
	return (
		<Shift dx={dx} dy={dy}>
			<T x={10450} y={5262} h={62} show={on(k)}>每场考试都需要一份标准答案</T>
			<Swipe x0={10585} x1={11905} y={5420} h={110} show={on(k)} delay={0.9} />
			<T x={10450} y={5420} h={110} weight={800} show={on(k)} delay={0.4}>= GOLDEN DATASET</T>
			<El x={10420} y={5600} w={1760} h={780} show={on(k, 1)} anim="drop"
				style={{ background: '#fff', border: `5px solid ${INK}`, borderRadius: 26, boxShadow: '14px 14px 0 rgba(255,222,89,.9)' }}>
				<div style={{ position: 'absolute', left: 0, right: 0, top: 290, height: 4, background: INK }} />
				<div style={{ position: 'absolute', left: 0, right: 0, top: 580, height: 4, background: INK }} />
			</El>
			<T x={10470} y={5730} h={34} c={BLUE} print weight={800} show={on(k, 2)}>INPUT</T>
			<T x={10800} y={5730} h={50} print show={on(k, 2)} delay={0.2}>凌晨 2 点，向新收款人转账 $9,800</T>
			<T x={10800} y={5830} h={50} print show={on(k, 2)} delay={0.4}>来自一台从没见过的设备</T>
			<T x={10470} y={6000} h={34} c={BLUE} print weight={800} show={on(k, 3)}>EXPECTED</T>
			<T x={10800} y={6000} h={50} print weight={800} c={RED} show={on(k, 3)} delay={0.2}>高风险</T>
			<T x={10800} y={6100} h={44} print show={on(k, 3)} delay={0.4}>冻结付款 → 致电客户</T>
			<T x={10470} y={6290} h={34} c={BLUE} print weight={800} show={on(k, 4)}>签字</T>
			<T x={10800} y={6290} h={50} print show={on(k, 4)} delay={0.2}>资深反欺诈分析师</T>
			<Ink d="M 11620 6280 C 11660 6200 11700 6300 11740 6240 S 11800 6200 11830 6270 S 11890 6250 11920 6230" w={6} show={on(k, 4)} delay={0.6} />
			<T x={11980} y={6350} h={34} c={GREY} align="right" show={on(k, 4)} delay={0.9}>（不是工程师拍脑袋猜的）</T>
			<Swipe x0={10860} x1={11740} y={6470} h={48} show={on(k, 5)} delay={0.6} />
			<T x={11300} y={6470} h={48} align="center" show={on(k, 5)}>= 把你对「好」的定义写下来</T>
		</Shift>
	);
}

export const W08: Chapter = {
	stops: [{
		key: 'golden', chapter: '第 1 章 · 为什么要 eval', cam: { cx: 22000, cy: 3595, z: 0.72 }, builds: 5, van: { s: topS(23050) },
	}],
	area: { id: 'golden', bbox: [21080, 2850, 22950, 4230], Render },
};
