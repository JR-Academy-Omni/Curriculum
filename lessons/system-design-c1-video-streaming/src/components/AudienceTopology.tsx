import { Arrow, colors, Label, Node, Panel } from './kit';

export default function AudienceTopology() {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 28, alignItems: 'start' }}>
			<Panel>
				<Label>全部实时媒体</Label>
				<div style={{ display: 'grid', gap: 12, marginTop: 20 }}>
					<Node title="嘉宾与观众" sub="建立实时媒体会话" />
					<Arrow dir="down" />
					<Node title="媒体转发节点" sub="接收上行，维护订阅和下行转发" bg={colors.yellow} />
				</div>
				<p style={{ marginTop: 18, fontSize: 22, lineHeight: 1.4 }}>会话服务负责成员状态，媒体节点持有实时订阅。</p>
			</Panel>
			<Panel>
				<Label>嘉宾实时 + 观众 HLS</Label>
				<div style={{ display: 'flex', alignItems: 'stretch', gap: 13, marginTop: 20 }}>
					<Node title="嘉宾" sub="实时连麦" style={{ flex: 1 }} />
					<Arrow /><Node title="实时舞台" sub="会话与合流" bg={colors.yellow} style={{ flex: 1.2 }} />
				</div>
				<div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '12px 0' }}><Arrow dir="down" /><span style={{ fontSize: 22 }}>舞台输出合流，观众走观看链路</span></div>
				<div style={{ display: 'flex', alignItems: 'stretch', gap: 12 }}>
					<Node title="HLS 打包" sub="列表与切片" style={{ flex: 1 }} />
					<Arrow /><Node title="CDN" sub="缓存分发" style={{ flex: 1 }} />
					<Arrow /><Node title="观众" sub="观看与缓冲" style={{ flex: 1 }} />
				</div>
			</Panel>
		</div>
	);
}
