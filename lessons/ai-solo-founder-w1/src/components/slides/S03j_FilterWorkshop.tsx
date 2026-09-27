import { Slide, colors, fonts } from '../ui';
import { Body, DeckTable, SlideHead, Punchline } from '../DeckTable';

const rows = ['痛点强度', '发生频率 / 单次损失', '付费能力', '用户可触达性', '创始人优势', '流程 / AI 杠杆', '最小可测试交付'].map((name) => [<b key={name}>{name}</b>, '1–5', '1–5', '1–5', '证据 / 待验证：________________']);

export default function S03j_FilterWorkshop() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '28px 52px 20px' }}>
				<SlideHead tag="现场筛选" tagBg={colors.green} title="把三个候选放进同一张表" sub="先评分暴露假设，再检查三道硬门槛；最后只留下一个本周优先验证的方向。" />
				<DeckTable cols={[{ label: '维度', w: '230px' }, { label: 'A', w: '85px', align: 'center' }, { label: 'B', w: '85px', align: 'center' }, { label: 'C', w: '85px', align: 'center' }, { label: '为什么这样打分？', w: '1fr' }]} rows={rows} fontSize={16} cellPad="8px 10px" />
				<div style={{ marginTop: 13, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', border: '3px solid #111', background: colors.white }}>
					{['本周找到 5 人？', '谁使用、谁受益、谁付款？', '2–4 周能让真人体验？'].map((item, index) => <div key={item} style={{ padding: '10px 12px', textAlign: 'center', borderRight: index === 2 ? 'none' : '2px solid #111', fontSize: 16, fontWeight: 850 }}>{item}　是 / 否</div>)}
				</div>
				<Punchline bg={colors.dark}>我先验证 <span style={{ color: colors.yellow }}>______</span>，不是因为它最酷，而是因为目前证据显示 <span style={{ color: colors.yellow }}>______</span>。</Punchline>
			</Body>
		</Slide>
	);
}
