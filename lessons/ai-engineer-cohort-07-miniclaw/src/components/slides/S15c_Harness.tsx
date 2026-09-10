import { AnimatedGroup, DeckFrame, Label, colors, fonts } from '../deck';

const runtime = [
	['01', '接收任务', '校验参数，绑定 session 与 runId'],
	['02', '准备上下文', '加载历史、Workspace、Skills 与本轮规则'],
	['03', '调用模型', '在 model boundary 选择模型并开始流式响应'],
	['04', '执行工具', '按权限运行 tool loop，接收真实结果'],
	['05', '结束或继续', '检查预算、超时、审批、错误和停止条件'],
	['06', '保存与回传', '写入 transcript、trace、usage 与最终回复'],
] as const;

const controls = [
	['生命周期', '队列、并发、run timeout、cancel / stop', colors.blue],
	['上下文', 'Session、Skills snapshot、Prompt、Compaction', colors.yellow],
	['行动边界', 'Tool allowlist、Hooks、Permission、Sandbox', colors.red],
	['恢复与证据', 'Checkpoint、Replay 防副作用、Approval、Trace', colors.green],
] as const;

export default function S15c_Harness() {
	return <DeckFrame tag="HARNESS · RUNTIME CONTROL" title="Harness 控制一轮 Agent 到底怎么跑" subtitle="模型负责生成下一步。Harness 负责准备运行环境、执行工具、控制边界，并把过程保存下来。" accent={colors.green} titleSize={49}>
		<div style={{ height: '100%', display: 'grid', gridTemplateRows: '1fr 156px', gap: 24 }}>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 14, alignItems: 'stretch' }}>
				{runtime.map((step, index) => <AnimatedGroup key={step[0]} delay={.08 + index * .07} style={{ display: 'flex' }}>
					<div style={{ flex: 1, position: 'relative', background: index === 3 ? colors.dark : colors.white, color: index === 3 ? colors.white : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 19, padding: '18px 16px', boxShadow: `6px 6px 0 ${[colors.blue, colors.yellow, colors.purple, colors.red, colors.orange, colors.green][index]}`, display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: [colors.blue, colors.yellow, colors.purple, colors.red, colors.orange, colors.green][index] }}>{step[0]}</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900, lineHeight: 1.12, marginTop: 20 }}>{step[1]}</div>
						<div style={{ fontSize: 15.5, lineHeight: 1.42, color: index === 3 ? '#dde2ef' : '#514b47', marginTop: 15 }}>{step[2]}</div>
						{index < runtime.length - 1 && <div aria-hidden style={{ position: 'absolute', right: -16, top: '48%', width: 16, height: 4, background: colors.dark }} />}
					</div>
				</AnimatedGroup>)}
			</div>

			<AnimatedGroup delay={.55} style={{ display: 'grid', gridTemplateColumns: '190px repeat(4, 1fr)', gap: 16, background: colors.dark, color: colors.white, borderRadius: 20, boxShadow: `9px 9px 0 ${colors.green}`, padding: '18px 22px', alignItems: 'center' }}>
				<div><Label bg={colors.green} color={colors.dark}>HARNESS 管什么</Label></div>
				{controls.map((control) => <div key={control[0]} style={{ borderLeft: `6px solid ${control[2]}`, paddingLeft: 14 }}>
					<div style={{ fontFamily: fonts.heading, fontSize: 19, fontWeight: 900 }}>{control[0]}</div>
					<div style={{ fontSize: 14.5, lineHeight: 1.38, color: '#d8deec', marginTop: 6 }}>{control[1]}</div>
				</div>)}
			</AnimatedGroup>
		</div>
	</DeckFrame>;
}
