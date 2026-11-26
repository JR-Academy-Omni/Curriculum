import { DeckFrame, Table, colors } from '../kit';

export default function C04_AuCuts() {
	return <DeckFrame tag="01 · 澳洲本地" title="澳洲：银行和电信先动手" subtitle="公开说是因为 AI 的不多，但客服、运营和科技部门都在裁人。" accent={colors.red}>
		<Table size={27} widths="1fr 3fr" head={['公司', '公开报道']} rows={[
			['CBA', '2026 年合计约 1,000 个岗位；AI 客服上线后，砍掉了外包呼叫中心的合同岗位，金融业工会已向 Fair Work 提出争议'],
			['ANZ', '计划裁 3,500 人'],
			['NAB', '科技部门裁员'],
			['Telstra International', '借 Accenture 合作协议裁约 160–200 人，部分工作转到印度'],
		]} />
		<div style={{ fontSize: 17, lineHeight: 1.5, color: '#514c48', marginTop: 22 }}>来源：HCAMag、Bloomberg（2026-04）、Information Age、Insurance Journal（2026-11）、WSWS（2026-06）</div>
	</DeckFrame>;
}
