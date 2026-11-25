import { AnimatedGroup, DeckFrame, Label, Panel, Takeaway } from '../kit';

const rows: [string, string, string][] = [
	['同时在转码的任务', '1,200 ÷ 3,600 ≈ 0.33 个/秒，× 90 秒', '≈ 30 个'],
	['每天新增视频文件', '10,000 个 × 200 MB', '≈ 2 TB/天，一年约 730 TB'],
	['每天新增元数据', '10,000 条 × 约 1 KB', '≈ 10 MB/天'],
	['高峰上传带宽', '1,200 × 200 MB ÷ 3,600 秒', '≈ 67 MB/s ≈ 530 Mb/s'],
];

export default function S05_Capacity() {
	return <DeckFrame tag="P05 · 第 2 步" title="估出数量级，不求精确" subtitle="课堂假设：高峰每小时 1,200 个上传，每天约 1 万个，平均 200 MB，转码平均 90 秒。">
		<div style={{ display: 'grid', gap: 24 }}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
				{rows.map(([k, calc, result], i) => <AnimatedGroup key={k} delay={.12 + i * .07}><Panel style={{ padding: 22 }}>
					<Label>{k}</Label>
					<div style={{ marginTop: 12, fontSize: 22, lineHeight: 1.45 }}>{calc}</div>
					<div style={{ marginTop: 6, fontSize: 30, fontWeight: 900 }}>{result}</div>
				</Panel></AnimatedGroup>)}
			</div>
			<Takeaway>数字决定组件：2 TB/天的文件不能放数据库，30 个并发的长任务不能让 HTTP 请求一直等。</Takeaway>
		</div>
	</DeckFrame>;
}
