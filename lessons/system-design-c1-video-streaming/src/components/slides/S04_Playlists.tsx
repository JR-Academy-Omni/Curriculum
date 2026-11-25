import { DeckFrame, Table } from '../kit';

export default function S04_Playlists() {
	return <DeckFrame tag="P05 · SYSTEM DESIGN" title="播放列表怎样组织清晰度" subtitle="两档画质使用同一视频时间线。">
		<Table size={24} head={["文件", "读者", "观察字段"]} rows={[
			["master.m3u8", "播放器首次进入", "BANDWIDTH、RESOLUTION、档位路径"],
			["720p/index.m3u8", "播放 720p 时", "EXTINF 与分片文件名"],
			["360p/index.m3u8", "播放 360p 时", "分片起点对应同一段画面"],
			["seg_*.ts", "解码和缓冲", "首帧、关键帧和播放时间"]
		]} />
	</DeckFrame>;
}
