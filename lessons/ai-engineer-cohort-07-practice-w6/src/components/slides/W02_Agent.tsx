import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Arrow, Shift, INK, GREY } from '../world/prims';
import { topS } from '../world/geometry';

// 第 3 页：本章的例子（银行欺诈预警分诊 agent）。局部坐标（camera (3730, 1690)）写好后平移。
const DX = 3560, DY = 2110;

function Render() {
	const { on } = useBeat();
	const k = 'agent';
	return (
		<Shift dx={DX} dy={DY}>
			{/* 必须保留：例子是虚构的 */}
			<T x={2830} y={1300} h={36} c={GREY} show={on(k)} anim="fade">（示例，非真实案例）</T>
			<El x={2830} y={1380} w={400} h={500} show={on(k)} anim="drop"
				style={{ background: '#fff', border: `5px solid ${INK}`, borderRadius: 18, boxShadow: '14px 14px 0 rgba(255,222,89,.9)' }}>
				{[0, 1, 2, 3].map(i => <div key={i} style={{ position: 'absolute', left: 50, top: 230 + i * 62, width: i === 3 ? 180 : 300, height: 18, borderRadius: 9, background: '#d6d8df' }} />)}
			</El>
			<T x={3030} y={1450} h={40} align="center" show={on(k)} anim="fade">欺诈</T>
			<T x={3030} y={1505} h={40} align="center" show={on(k)} anim="fade">预警</T>
			<Arrow from={[3250, 1640]} to={[3530, 1640]} show={on(k, 1)} />
			<El x={3560} y={1470} w={440} h={340} show={on(k, 1)} anim="pop" delay={0.3}
				style={{ background: INK, borderRadius: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'inherit', fontSize: 86, fontWeight: 800, boxShadow: '14px 14px 0 rgba(255,222,89,.9)' }}>AI AGENT</El>
			<Arrow from={[4020, 1640]} to={[4170, 1515]} show={on(k, 2)} w={7} head={26} />
			<T x={4195} y={1530} h={48} show={on(k, 2)} delay={0.3}>风险？</T>
			<Arrow from={[4020, 1640]} to={[4170, 1650]} show={on(k, 3)} w={7} head={26} />
			<T x={4195} y={1665} h={48} show={on(k, 3)} delay={0.3}>怎么处理？</T>
			<Arrow from={[4020, 1640]} to={[4170, 1785]} show={on(k, 4)} w={7} head={26} />
			<T x={4195} y={1800} h={48} show={on(k, 4)} delay={0.3}>交给哪个团队？</T>
		</Shift>
	);
}

export const W02: Chapter = {
	stops: [{
		key: 'agent', chapter: '第 1 章 · 为什么要 eval', cam: { cx: 7320, cy: 3760, z: 0.9 }, builds: 4, van: { s: topS(7340) },
	}],
	area: { id: 'agent', bbox: [6300, 3300, 8300, 4100], Render },
};
