import { DeckFrame, Panel, Label, Steps, colors } from '../kit';

export default function S18_AskFirst() {
	return <DeckFrame tag="03 · 看 offer 之前" title="同叫 FDE，先问清这几件事" subtitle="这些问题，直接决定这份工作适不适合你。" accent={colors.purple}>
		<div style={{ display: 'grid', gridTemplateColumns: '1.3fr .9fr', gap: 28 }}>
			<Panel><Steps size={25} items={['每周大概有多少时间在写代码？', '同时要对接几家客户？', '出差或驻场的频率怎样？', '系统上线后，谁负责运行和迭代？', '岗位对身份或安全许可有没有要求？']} /></Panel>
			<Panel bg={colors.yellow}>
				<Label>薪酬要拆开问</Label>
				<div style={{ display: 'grid', gap: 14, marginTop: 20 }}>
					{['底薪', '养老金（super）', '奖金：按什么算', '股权：多少、几年归属'].map(t => <div key={t} style={{ fontSize: 25, fontWeight: 800, paddingBottom: 10, borderBottom: '1px solid rgba(16,22,47,.2)' }}>{t}</div>)}
				</div>
			</Panel>
		</div>
	</DeckFrame>;
}
