import { Arrow, colors, Label, Node, Panel } from './kit';

export default function GenerationTopology() {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 28, alignItems: 'start' }}>
			<Panel>
				<Label>一次生成整段</Label>
				<div style={{ display: 'grid', gap: 10, marginTop: 18 }}>
					<Node title="完整脚本与参考图" sub="一个生成请求" />
					<Arrow dir="down" />
					<Node title="整段生成任务" sub="一次审核，失败按整段返工" bg={colors.yellow} />
					<Arrow dir="down" />
					<Node title="成片版本" sub="记录生成任务和媒体资产" />
				</div>
			</Panel>
			<Panel>
				<Label>逐镜头生成后合成</Label>
				<p style={{ fontSize: 23, margin: '14px 0' }}>分镜和参考图分别驱动三项生成任务</p>
				<div style={{ display: 'flex', gap: 13 }}>
					<Node title="首镜" sub="选 v1" style={{ flex: 1 }} />
					<Node title="中镜" sub="重做后选 v2" bg={colors.yellow} style={{ flex: 1 }} />
					<Node title="尾镜" sub="选 v1" style={{ flex: 1 }} />
				</div>
				<div style={{ margin: '13px 0' }}><Arrow dir="down" /></div>
				<div style={{ display: 'flex', alignItems: 'stretch', gap: 10 }}>
					<Node title="版本清单" sub="审核通过后锁定" style={{ flex: 1 }} />
					<Arrow />
					<Node title="FFmpeg 合成" sub="产生可验收新版本" style={{ flex: 1.3 }} />
				</div>
			</Panel>
		</div>
	);
}
