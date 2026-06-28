import { Lab } from './_LabLayout';

// 动手④ 写 PRD 跑 ADLC
export default function L04_PRD_ADLC() {
	return (
		<Lab
			n="④"
			min="15 分钟"
			title={<>用 <span style={{ color: '#FFDE59' }}>PRD</span> 跑一段 ADLC</>}
			sub="挑一个真实小功能，走 目标 → 上下文 → PRD → 建 → 验收"
			demo={[
				{ kind: 'say', text: '我要给项目加一个「导出 CSV」的小功能，先别写代码' },
				{ kind: 'say', text: '先写一份 PRD：目标、方案、风险、验收标准，顶部带 status 字段' },
				{ kind: 'note', text: 'status: spec —— 还没开工' },
				{ kind: 'say', text: 'PRD 我看过了，没问题，开始实现，并把 status 改成 build' },
				{ kind: 'note', text: '做完让它对照「验收标准」自检，再切 eval' },
			]}
			todo={[
				'挑一个你手上真实的小需求',
				'让 Claude 先写 PRD，不要直接写代码',
				'读 PRD、对齐，再让它动手',
				'看 status 从 spec → build → eval 流转',
			]}
			verify="你没有反复返工 —— 因为动手前就把「做到什么算完」对齐清楚了"
		/>
	);
}
