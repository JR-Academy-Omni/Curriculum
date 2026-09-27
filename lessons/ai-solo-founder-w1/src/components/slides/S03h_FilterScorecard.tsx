import { Slide, colors } from '../ui';
import { Body, DeckTable, SlideHead } from '../DeckTable';

const rows = [
	['痛点强度', '不解决，会造成收入、时间、客户或合规上的明显损失吗？'],
	['发生频率', '这个问题每天、每周，还是偶尔发生？'],
	['付费能力', '谁最可能为解决它付钱？'],
	['用户可触达性', '你这周能找到 5 个潜在用户吗？'],
	['创始人优势', '你了解这个行业，或拥有相关客户、渠道和资源吗？'],
	['AI 杠杆', 'AI 是否真的能带来接近 10 倍的效率提升？'],
	['MVP 可实现性', '两到四周内，能否做出可供用户体验的核心版本？'],
];

export default function S03h_FilterScorecard() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '28px 54px 20px' }}>
				<SlideHead
					tag="7 个维度 · 每项 1—5 分"
					tagBg={colors.yellow}
					title="先打分：每一分都要说出理由"
					sub="同一个标准连续评三个想法。没有证据时，不要凭感觉给 5 分。"
				/>

				<DeckTable
					cols={[{ label: '维度', w: '250px' }, { label: '判断问题', w: '1fr' }]}
					rows={rows}
					fontSize={17}
					cellPad="8px 14px"
				/>

				<div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', border: '3px solid #111', background: '#FFF4EE' }}>
					{[['1 分', '几乎没有证据'], ['3 分', '有迹象，仍需验证'], ['5 分', '看到真实行为、数据或付费']].map(([score, meaning], index) => <div key={score} style={{ padding: '9px 12px', textAlign: 'center', borderRight: index === 2 ? 'none' : '2px solid #111', fontSize: 16 }}><b style={{ color: colors.red }}>{score}</b> · {meaning}</div>)}
				</div>
				<div style={{ marginTop: 9, fontSize: 14, color: '#555' }}>“10 倍”是思考尺度，不是让你编数字；AI 如果没有明显改变时间、成本或人工步骤，就不该拿高分。</div>
			</Body>
		</Slide>
	);
}
