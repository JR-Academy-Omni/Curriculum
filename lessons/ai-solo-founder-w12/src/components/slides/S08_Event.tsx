import { DeckFrame, Panel, Label, Node, Arrow, colors } from '../kit';

export default function S08_Event() {
	return <DeckFrame tag="02 · 形态 3 · 事件触发" title="不是到点才做，是有事发生就马上做" subtitle="新客户付款、表单提交、客户来信：别人那边发生了一件事，你这边立刻开始处理。" accent={colors.blue}>
		<div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 6 }}>
			<Node bg={colors.blue} color={colors.white} title="Stripe：新付款" sub="对方发来一个 webhook" style={{ width: 280 }} />
			<Arrow />
			<Node title="云端的小程序收到" sub="代码负责接收、校验" style={{ width: 300 }} />
			<Arrow />
			<Node title="Agent 起草上手邮件" sub="按他买的套餐写" style={{ width: 300 }} />
			<Arrow />
			<Node bg={colors.green} title="进草稿箱" sub="你看一眼再发" style={{ width: 230 }} />
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 30 }}>
			<Panel><Label>和定时的区别</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 14 }}>要有一个一直在线、能被别人「叫醒」的地址。你的电脑和定时任务都做不到，所以这一种必须用代码部署到云端。</div></Panel>
			<Panel bg="#ffe9e9"><Label bg={colors.red}>它怎么失败</Label><div style={{ fontSize: 24, lineHeight: 1.55, marginTop: 14 }}>同一个事件对方可能发两次，你就会给同一个客户起草两封邮件。要先记下「这个付款我处理过了」。</div></Panel>
		</div>
	</DeckFrame>;
}
