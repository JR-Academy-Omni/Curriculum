import { Arrow, DeckFrame, Label, Node, Panel } from '../kit';

export default function S05_Jobs() {
	return <DeckFrame tag="P05 · SYSTEM DESIGN" title="生成是可跟踪的长任务" subtitle="每次调用有作业编号，审核后的选片有独立状态。">
		<div style={{ display: 'grid', gap: 32 }}>
			<div style={{ display: 'flex', alignItems: 'stretch', gap: 16 }}>
				<Node title="提交分镜" sub="锁定输入与镜头 ID" style={{ flex: 1, minWidth: 0 }} />
				<Arrow />
				<Node title="模型任务" sub="记录 operation ID" style={{ flex: 1, minWidth: 0 }} />
				<Arrow />
				<Node title="镜头素材" sub="存储候选" style={{ flex: 1, minWidth: 0 }} />
				<Arrow />
				<Node title="审核" sub="锁定选用版本" style={{ flex: 1, minWidth: 0 }} />
				<Arrow />
				<Node title="合成" sub="读取锁定清单" style={{ flex: 1, minWidth: 0 }} />
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
				<Panel><Label>请求超时</Label><p style={{ marginTop: 14, fontSize: 25, lineHeight: 1.5 }}>用已有外部编号核对状态，避免因不确定就发起重复收费任务。</p></Panel>
				<Panel><Label>状态归属</Label><p style={{ marginTop: 14, fontSize: 25, lineHeight: 1.5 }}>生成任务、审核记录和成片任务分别保存状态和产物。</p></Panel>
			</div>
		</div>
	</DeckFrame>;
}
