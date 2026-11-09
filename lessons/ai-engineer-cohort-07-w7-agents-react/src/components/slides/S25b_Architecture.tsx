import type { CSSProperties, ReactNode } from 'react';
import { colors, fonts, radii } from '../ui';
import { Page, Say, line } from './_parts';

// 与 README.md 里的架构图一致。改一边时另一边也要改。
const W = 1448;
const H = 540;

function Node({ x, y, w, h, title, bg = colors.white, size = 19, children }: { x: number; y: number; w: number; h: number; title: string; bg?: string; size?: number; children?: ReactNode }) {
	return (
		<div style={{ position: 'absolute', left: x, top: y, width: w, height: h, background: bg, border: line, borderRadius: radii.card, padding: '10px 18px', fontSize: size, lineHeight: 1.42 }}>
			<div style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 800 }}>{title}</div>
			{children}
		</div>
	);
}

function Label({ x, y, children, style }: { x: number; y: number; children: ReactNode; style?: CSSProperties }) {
	return <div style={{ position: 'absolute', left: x, top: y, fontSize: 17, fontWeight: 700, whiteSpace: 'nowrap', ...style }}>{children}</div>;
}

function Line({ x1, y1, x2, y2, both }: { x1: number; y1: number; x2: number; y2: number; both?: boolean }) {
	return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={colors.dark} strokeWidth={2.5} markerEnd="url(#arch-arrow)" markerStart={both ? 'url(#arch-arrow-start)' : undefined} />;
}

export default function S25b_Architecture() {
	return (
		<Page part="第 3 部分" at={["agent.py · make_gate()", "refund_server.py · checked()", "desk.py · Desk.issue_refund()"]} title="刚才那次运行，经过了哪里">
		  <div style={{ position: 'relative', width: W, height: H }}>
		    <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
		      <defs>
		        <marker id="arch-arrow" markerUnits="userSpaceOnUse" viewBox="0 0 10 10" markerWidth="14" markerHeight="14" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill={colors.black} /></marker>
		        <marker id="arch-arrow-start" markerUnits="userSpaceOnUse" viewBox="0 0 10 10" markerWidth="14" markerHeight="14" refX="1" refY="5" orient="auto"><path d="M10,0 L0,5 L10,10 z" fill={colors.black} /></marker>
		      </defs>
		      <Line x1={320} y1={64} x2={320} y2={124} both />
		      <Line x1={644} y1={158} x2={856} y2={158} />
		      <Line x1={856} y1={190} x2={644} y2={190} />
		      <Line x1={856} y1={222} x2={644} y2={222} />
		      <Line x1={1154} y1={124} x2={1154} y2={64} />
		      <Line x1={1154} y1={234} x2={1154} y2={280} />
		      <Line x1={320} y1={420} x2={320} y2={450} />
		      <Line x1={1154} y1={420} x2={1154} y2={450} />
		    </svg>

		    <Node x={0} y={0} w={640} h={64} title="你（终端）" />
		    <Node x={860} y={0} w={588} h={64} title="Claude API：模型决定下一步" bg={colors.yellow} />

		    <Node x={0} y={124} w={640} h={296} title="agent.py 进程" bg={colors.green} size={22}>
		      <div>settings.py：读取 .env</div>
		      <div>run_agent()：发起任务，接收消息</div>
		      <div>Printer + Trace：记录 Action / Observation</div>
		      <div>make_gate()：hook，用 LoopDetector、policy_gate</div>
		      <div>build_handoff()：提前结束时生成交接单</div>
		    </Node>

		    <Node x={860} y={124} w={588} h={110} title="Claude CLI（SDK 自带）" bg={colors.white}>
		      <div>替我们跑 Agent 循环</div>
		    </Node>

		    <Node x={860} y={280} w={588} h={140} title="refund_server.py 进程" bg={colors.green} size={21}>
		      <div>validate_args()、with_retry()</div>
		      <div>desk.py：工具和最后一道检查</div>
		    </Node>

		    <Node x={0} y={450} w={1448} h={90} title="共享数据">
		      <div><b>data/orders.json</b> 只读的合成订单　·　<b>runtime/</b> 账本、审批、task state、运行记录</div>
		    </Node>

		    <Label x={334} y={82}>任务、审批 y/n</Label>
		    <Label x={664} y={132}>SDK：发起任务</Label>
		    <Label x={664} y={164}>消息流</Label>
		    <Label x={664} y={196}>调工具前先问 hook</Label>
		    <Label x={1168} y={82}>请求模型</Label>
		    <Label x={1168} y={246}>放行的工具调用（MCP）</Label>
		  </div>
		  <Say>黄色决定下一步，绿色决定能不能做。两个进程靠文件共享账本和审批。</Say>
		</Page>
	);
}
