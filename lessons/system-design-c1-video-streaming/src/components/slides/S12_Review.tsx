import { DeckFrame, Panel, Steps } from '../kit';

export default function S12_Review() {
	return <DeckFrame tag="P12 · SYSTEM DESIGN" title="给选型一个验证方案" subtitle="看可播放、首帧、卡顿和恢复。">
		<Panel>
			<Steps size={27} items={[
				"打开两个档位，确认分辨率和片段都能加载。",
				"限速后记录请求档位、实际画质和卡顿时间。",
				"推流中断后分别观察嘉宾会话和观众播放。",
				"按区域统计回源错误与分发流量。"
			]} />
		</Panel>
	</DeckFrame>;
}
