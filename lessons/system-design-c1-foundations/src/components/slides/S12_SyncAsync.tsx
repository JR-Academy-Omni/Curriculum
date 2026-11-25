import { AnimatedGroup, Arrow, DeckFrame, Label, Node, Panel, colors } from '../kit';

export default function S12_SyncAsync() {
	return <DeckFrame tag="P13 · 组件 4" title="同步等结果，还是交给队列" subtitle="同一个功能两种画法。选哪种由需求决定，不由喜好决定。">
		<div style={{ display: 'grid', gap: 14 }}>
			<AnimatedGroup delay={.12}><Panel style={{ padding: '16px 22px' }}>
				<Label>同步：请求一直等到转码完成</Label>
				<div style={{ display: 'flex', gap: 14, marginTop: 10 }}>
					<Node title="浏览器" sub="一直等" style={{ flex: 1 }} /><Arrow /><Node title="Web 服务" sub="调用转码" style={{ flex: 1 }} /><Arrow /><Node title="转码" sub="90 秒" style={{ flex: 1 }} />
				</div>
			</Panel></AnimatedGroup>
			<AnimatedGroup delay={.2}><Panel style={{ padding: '16px 22px' }}>
				<Label>异步：先返回任务编号，后台处理</Label>
				<div style={{ display: 'flex', gap: 14, marginTop: 10 }}>
					<Node title="浏览器" sub="拿到编号，稍后查" style={{ flex: 1 }} /><Arrow /><Node title="Web 服务" sub="建任务、放消息" style={{ flex: 1 }} /><Arrow /><Node title="消息队列" sub="排队" bg={colors.yellow} style={{ flex: 1 }} /><Arrow /><Node title="Worker" sub="转码、更新状态" style={{ flex: 1 }} />
				</div>
			</Panel></AnimatedGroup>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 4 }}>
				<AnimatedGroup delay={.28}><Panel style={{ padding: '14px 22px' }}><Label>选同步</Label><p style={{ marginTop: 8, fontSize: 21, lineHeight: 1.45 }}>耗时短（如生成一张缩略图）、用户能等、失败可以直接报错。简单，不用管任务状态。</p></Panel></AnimatedGroup>
				<AnimatedGroup delay={.34}><Panel bg={colors.dark} style={{ padding: '14px 22px', color: colors.white }}><Label bg={colors.yellow} color={colors.black}>选异步</Label><p style={{ marginTop: 8, fontSize: 21, lineHeight: 1.45 }}>耗时长或不稳定、用户会离开、高峰需要排队。代价是要保存任务状态、处理重试。</p></Panel></AnimatedGroup>
			</div>
		</div>
	</DeckFrame>;
}
