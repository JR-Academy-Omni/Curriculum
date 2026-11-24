import { DeckFrame, Panel, Steps } from '../kit';

export default function S09_Fault() {
	return <DeckFrame tag="P09 · SYSTEM DESIGN" title="文件写完，Worker 中途退出" subtitle="用重投后的状态变化解释恢复。">
		<Panel>
			<Steps size={27} items={[
				"Worker 生成完整成品，存储返回成功。",
				"Worker 在写 ready 前退出，队列尚未收到确认。",
				"下一次尝试核对作业版本和输出，不重复处理已有的合格文件。",
				"条件更新 Job 为 ready，确认消息，浏览器刷新后可播放。"
			]} />
		</Panel>
	</DeckFrame>;
}
