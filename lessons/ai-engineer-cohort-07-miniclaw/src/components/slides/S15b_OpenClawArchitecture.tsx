import { AnimatedGroup, DeckFrame, Label, colors, fonts } from '../deck';

const layers = [
	{ index: '01', name: 'Channels / Clients', zh: '消息和操作入口', detail: 'Chat、CLI、TUI、Control UI', color: colors.blue },
	{ index: '02', name: 'Gateway', zh: '统一接入与调度', detail: 'RPC、身份、路由、运行状态', color: colors.red },
	{ index: '03', name: 'Sessions / Workspace', zh: '会话与工作空间', detail: '历史、队列、文件与运行目录', color: colors.yellow },
	{ index: '04', name: 'Agent Runtime / Harness', zh: '一轮任务怎样执行', detail: '上下文、模型、工具循环与停止', color: colors.purple },
	{ index: '05', name: 'Skills / Tools / Memory', zh: '能力、动作与长期信息', detail: '任务说明、外部操作、可信召回', color: colors.green },
	{ index: '06', name: 'Models / Providers', zh: '推理与供应商接入', detail: '模型选择、认证、流式返回与降级', color: colors.orange },
] as const;

export default function S15b_OpenClawArchitecture() {
	return <DeckFrame tag="OPENCLAW · SYSTEM MAP" title="理解 OpenClaw，可以先拆成六层" subtitle="这是一张教学视图。实际代码会继续细分插件、协议、存储与各类客户端。" accent={colors.purple} titleSize={50}>
		<div style={{ height: '100%', display: 'grid', gridTemplateRows: '1fr auto', gap: 24 }}>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 15, alignItems: 'stretch' }}>
				{layers.map((layer, index) => <AnimatedGroup key={layer.index} delay={.08 + index * .07} style={{ display: 'flex' }}>
					<div style={{ flex: 1, minWidth: 0, position: 'relative', background: index === 3 ? colors.dark : colors.white, color: index === 3 ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 20, borderTop: `11px solid ${layer.color}`, boxShadow: `7px 7px 0 ${layer.color}`, padding: '19px 16px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: layer.color }}>{layer.index}</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 23, lineHeight: 1.08, fontWeight: 900, marginTop: 18, minHeight: 75 }}>{layer.name}</div>
						<div style={{ fontSize: 18, fontWeight: 850, marginTop: 11 }}>{layer.zh}</div>
						<div style={{ fontSize: 15.5, lineHeight: 1.42, color: index === 3 ? '#d9dfef' : '#514b47', marginTop: 15 }}>{layer.detail}</div>
						{index < layers.length - 1 && <div aria-hidden style={{ position: 'absolute', right: -17, top: '50%', width: 16, height: 4, background: colors.dark }} />}
					</div>
				</AnimatedGroup>)}
			</div>

			<AnimatedGroup delay={.54}>
				<div style={{ background: colors.dark, color: colors.white, borderRadius: 20, boxShadow: `9px 9px 0 ${colors.yellow}`, padding: '17px 24px', display: 'grid', gridTemplateColumns: '210px 1fr', gap: 22, alignItems: 'center' }}>
					<Label bg={colors.yellow} color={colors.dark}>贯穿所有层</Label>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, fontFamily: fonts.heading, fontSize: 21, fontWeight: 900 }}>
						<span>Hooks</span><span style={{ color: colors.red }}>Policy</span><span style={{ color: colors.green }}>Sandbox</span><span style={{ color: colors.blue }}>Trace</span><span style={{ color: colors.yellow }}>Streaming</span><span>Observability</span>
					</div>
				</div>
			</AnimatedGroup>
		</div>
	</DeckFrame>;
}
