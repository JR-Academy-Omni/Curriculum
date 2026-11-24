import { Arrow, DeckFrame, Label, Node, Panel } from '../kit';

export default function S05_Sync() {
	return <DeckFrame tag="P05 · SYSTEM DESIGN" title="方案 A · 同一请求等待结果" subtitle="短、快、失败可直接返回时，先画简单链路。">
		<div style={{ display: 'grid', gap: 32 }}>
			<div style={{ display: 'flex', alignItems: 'stretch', gap: 16 }}>
				<Node title="浏览器" sub="提交已上传文件" style={{ flex: 1, minWidth: 0 }} />
				<Arrow />
				<Node title="HTTP API" sub="等待转码结果" style={{ flex: 1, minWidth: 0 }} />
				<Arrow />
				<Node title="处理器" sub="读取并处理" style={{ flex: 1, minWidth: 0 }} />
				<Arrow />
				<Node title="对象存储" sub="写出成品" style={{ flex: 1, minWidth: 0 }} />
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
				<Panel><Label>超时边界</Label><p style={{ marginTop: 14, fontSize: 25, lineHeight: 1.5 }}>客户端超时后，后端仍可能已经开始处理。</p></Panel>
				<Panel><Label>恢复</Label><p style={{ marginTop: 14, fontSize: 25, lineHeight: 1.5 }}>如果用户需要离开再回来，就要保存状态和可重试的任务身份。</p></Panel>
			</div>
		</div>
	</DeckFrame>;
}
