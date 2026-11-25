import { Arrow, DeckFrame, Label, Node, Panel } from '../kit';

export default function S03_Path() {
	return <DeckFrame tag="P04 · SYSTEM DESIGN" title="从摄像头到播放器" subtitle="沿图区分采集、编码、打包与内容分发。">
		<div style={{ display: 'grid', gap: 32 }}>
			<div style={{ display: 'flex', alignItems: 'stretch', gap: 16 }}>
				<Node title="推流" sub="主播 → 接入端" style={{ flex: 1, minWidth: 0 }} />
				<Arrow />
				<Node title="FFmpeg" sub="转码成多档画质" style={{ flex: 1, minWidth: 0 }} />
				<Arrow />
				<Node title="HLS 打包" sub="切片与播放列表" style={{ flex: 1, minWidth: 0 }} />
				<Arrow />
				<Node title="CDN" sub="缓存并分发" style={{ flex: 1, minWidth: 0 }} />
				<Arrow />
				<Node title="播放器" sub="按列表取片" style={{ flex: 1, minWidth: 0 }} />
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
				<Panel><Label>传输</Label><p style={{ marginTop: 14, fontSize: 25, lineHeight: 1.5 }}>主播上传与观看端获取媒体是不同的链路。</p></Panel>
				<Panel><Label>延迟</Label><p style={{ marginTop: 14, fontSize: 25, lineHeight: 1.5 }}>采集编码、打包、分发及播放器缓冲都用时。短切片会增加请求频率。</p></Panel>
			</div>
		</div>
	</DeckFrame>;
}
