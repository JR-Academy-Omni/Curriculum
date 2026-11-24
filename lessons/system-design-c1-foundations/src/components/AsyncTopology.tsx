import { Arrow, colors, Label, Node, Panel } from './kit';

export default function AsyncTopology() {
	return (
		<div style={{ display: 'grid', gap: 30 }}>
			<Panel>
				<Label>请求和任务状态</Label>
				<div style={{ display: 'flex', gap: 12, alignItems: 'stretch', marginTop: 20 }}>
					<Node title="浏览器" sub="提交已上传的文件" style={{ flex: 1 }} />
					<Arrow /><Node title="Job API" sub="返回 202 + Job ID" style={{ flex: 1 }} />
					<Arrow /><Node title="任务库 + Outbox" sub="同一事务保存" bg={colors.yellow} style={{ flex: 1.2 }} />
					<Arrow /><Node title="队列" sub="Relay 发布工作" style={{ flex: 1 }} />
				</div>
			</Panel>
			<div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 28 }}>
				<Panel><Label>后台处理</Label><p style={{ fontSize: 25, lineHeight: 1.5, marginTop: 14 }}>Worker 领取消息 → 读取原文件 → 写出成品 → 提交 Job 状态 → 确认消息。</p></Panel>
				<Panel bg={colors.dark} style={{ color: colors.white }}><Label bg={colors.yellow} color={colors.black}>状态查询和播放</Label><p style={{ fontSize: 25, lineHeight: 1.5, marginTop: 14 }}>浏览器查 Job API。ready 后，授权浏览器从对象存储读取成品。</p></Panel>
			</div>
		</div>
	);
}
