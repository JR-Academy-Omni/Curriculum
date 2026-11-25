import { DeckFrame, Table } from '../kit';

export default function S11_Incident() {
	return <DeckFrame tag="P13 · SYSTEM DESIGN" title="主播断线后，观众先看到什么" subtitle="沿列表更新时间、播放器缓冲和区域错误三条线定位。">
		<Table size={24} head={["信号", "先核对", "处理路径"]} rows={[
			["观众全停、嘉宾在线", "观看端媒体列表更新时间", "查合流输出与打包进程"],
			["部分区域卡顿", "分区的错误和缓冲指标", "定位边缘缓存和回源"],
			["画质切换频繁", "带宽估计与缓冲", "检查档位间距和升级策略"],
			["主播重连", "媒体时间线是否连续", "恢复输入并检查播放错误"]
		]} />
	</DeckFrame>;
}
