import { AnimatedGroup, DeckFrame, Label, colors, fonts } from '../deck';

const events = [
	{ time: '10:41:02', kind: 'YOU', text: '检查订单同步失败的原因', color: colors.blue },
	{ time: '10:41:03', kind: 'AGENT', text: '先读取最近一次运行和错误日志', color: colors.purple },
	{ time: '10:41:04', kind: 'TOOL', text: 'orders.read  ·  238 rows  ·  184 ms', color: colors.green },
	{ time: '10:41:05', kind: 'APPROVAL', text: '准备重新提交 3 个失败订单', color: colors.yellow },
] as const;

export default function S15cTui() {
	return <DeckFrame tag="OPENCLAW · TUI" title="TUI：在终端里看见 Agent 怎么工作" subtitle="它连接 Gateway 或本地 Runtime，把对话、工具调用、审批、运行状态和 Session 放在同一个界面里。" accent={colors.blue} titleSize={48}>
		<AnimatedGroup delay={.08} style={{ height: '100%', display: 'grid', gridTemplateRows: '1fr auto', gap: 20 }}>
			<div style={{ overflow: 'hidden', background: '#0d1225', color: '#f8f6ef', border: `3px solid ${colors.dark}`, borderRadius: 22, boxShadow: `10px 10px 0 ${colors.blue}`, display: 'grid', gridTemplateColumns: '220px 1fr 280px', gridTemplateRows: '52px 1fr 58px' }}>
				<div style={{ gridColumn: '1 / 4', borderBottom: '1px solid #343b55', padding: '0 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: fonts.mono, fontSize: 14 }}>
					<div><span style={{ color: colors.green }}>●</span> ws://gateway.local · agent/main · session/order-debug</div>
					<div style={{ color: colors.yellow }}>RUNNING · 12.4k tokens</div>
				</div>

				<div style={{ borderRight: '1px solid #343b55', padding: '20px 17px' }}>
					<Label bg={colors.blue} color={colors.dark}>SESSIONS</Label>
					{['order-debug', 'support-triage', 'release-check'].map((item, index) => <div key={item} style={{ marginTop: 16, padding: '11px 12px', borderRadius: 10, background: index === 0 ? '#222c4c' : 'transparent', fontFamily: fonts.mono, fontSize: 14, color: index === 0 ? colors.white : '#9da7c5' }}>
						{index === 0 ? '› ' : '  '}{item}
					</div>)}
					<div style={{ marginTop: 26, color: '#7f89a7', fontSize: 13, lineHeight: 1.55 }}>同一个 Gateway<br/>切换 Agent 与 Session<br/>历史继续保留</div>
				</div>

				<div style={{ padding: '19px 24px', minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#8e99b8', marginBottom: 12 }}>LIVE RUN TIMELINE</div>
					{events.map((event) => <div key={event.time} style={{ display: 'grid', gridTemplateColumns: '76px 94px 1fr', gap: 10, padding: '13px 0', borderBottom: '1px solid #29314b', alignItems: 'start' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#79839f' }}>{event.time}</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 900, color: event.color }}>{event.kind}</div>
						<div style={{ fontSize: 16, lineHeight: 1.35 }}>{event.text}</div>
					</div>)}
					<div style={{ marginTop: 16, border: `2px solid ${colors.yellow}`, borderRadius: 12, padding: '13px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
						<div><strong style={{ color: colors.yellow }}>需要你的决定</strong><span style={{ color: '#c8cee0', marginLeft: 12 }}>允许 orders.retry 执行 3 次？</span></div>
						<div style={{ fontFamily: fonts.mono, color: colors.white }}>[A] 允许一次　[D] 拒绝</div>
					</div>
				</div>

				<div style={{ borderLeft: '1px solid #343b55', padding: '20px 18px' }}>
					<Label bg={colors.green} color={colors.dark}>CURRENT RUN</Label>
					{[
						['Model', 'primary / sonnet'],
						['Goal', '修复订单同步'],
						['Tools', '3 calls · 0 failed'],
						['Memory', '2 facts recalled'],
						['Trace', 'run_01J8…'],
					].map(([key, value]) => <div key={key} style={{ marginTop: 17 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: '#77829e' }}>{key.toUpperCase()}</div>
						<div style={{ marginTop: 5, fontSize: 15.5, fontWeight: 750 }}>{value}</div>
					</div>)}
				</div>

				<div style={{ gridColumn: '1 / 4', borderTop: '1px solid #343b55', padding: '0 20px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: fonts.mono, fontSize: 15 }}>
					<span style={{ color: colors.green }}>❯</span><span style={{ color: '#7f89a7' }}>输入消息或 /session /model /goal /trace</span><span style={{ marginLeft: 'auto', color: '#8d97b4' }}>think:on · trace:on · deliver:off</span>
				</div>
			</div>

			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, fontFamily: fonts.heading, fontSize: 18, fontWeight: 900 }}>
				<div>看得见：模型正在做什么</div>
				<div>能操作：切 Session 与 Model</div>
				<div>能拦住：高风险 Tool 先审批</div>
				<div>能追查：状态、Token 与 Trace 常驻</div>
			</div>
		</AnimatedGroup>
	</DeckFrame>;
}
