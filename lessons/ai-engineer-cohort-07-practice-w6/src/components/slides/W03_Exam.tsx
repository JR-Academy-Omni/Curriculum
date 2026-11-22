import type { Chapter } from '../world/beat';
import { useBeat } from '../world/beat';
import { T, El, Swipe, Shift, INK } from '../world/prims';
import { topS } from '../world/geometry';

// 第 4 页。局部坐标（camera (6400, 760)）写好后平移。
const DX = 3200, DY = 2960;

function Render() {
	const { on } = useBeat();
	const k = 'exam';
	return (
		<Shift dx={DX} dy={DY}>
			<Swipe x0={6290} x1={6880} y={540} h={170} show={on(k)} delay={0.5} />
			<T x={6300} y={540} h={170} weight={800} show={on(k)}>EVAL</T>
			<El x={5520} y={380} w={600} h={720} show={on(k, 1)} anim="drop"
				style={{ background: '#fff', border: `5px solid ${INK}`, borderRadius: 18, boxShadow: '14px 14px 0 rgba(255,222,89,.9)' }}>
				{[590, 720, 850, 980].map((y, i) => (
					<div key={y}>
						<div style={{ position: 'absolute', left: 46, top: y - 380 - 62, fontSize: 56, fontWeight: 800, lineHeight: 1 }}>Q{i + 1}</div>
						<div style={{ position: 'absolute', left: 150, top: y - 380 - 22, width: 300, height: 8, borderRadius: 4, background: '#c9ccd6' }} />
						<div style={{ position: 'absolute', left: 490, top: y - 380 - 68, width: 60, height: 60, border: `5px solid ${INK}`, borderRadius: 10 }} />
					</div>
				))}
			</El>
			<T x={5820} y={470} h={52} align="center" show={on(k, 1)} anim="fade" delay={0.3}>考卷</T>
			<T x={6300} y={680} h={50} show={on(k, 1)} delay={0.3}>= 给 AI 员工的一场考试</T>
			<T x={6300} y={830} h={48} show={on(k, 2)}>– 同一套题</T>
			<T x={6300} y={930} h={48} show={on(k, 3)}>– 同一种判分方式</T>
			<T x={6300} y={1030} h={48} show={on(k, 4)}>– 任何东西一改，就重考一遍</T>
		</Shift>
	);
}

export const W03: Chapter = {
	stops: [{
		key: 'exam', chapter: '第 1 章 · 为什么要 eval', cam: { cx: 9600, cy: 3760, z: 0.9 }, builds: 4, van: { s: topS(9760) },
	}],
	area: { id: 'exam', bbox: [8600, 3250, 10700, 4100], Render },
};
