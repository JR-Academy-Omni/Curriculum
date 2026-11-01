import { colors } from '../ui';
import { PartFrame, Side, Code, Punch, Mark, SourceLine, muted } from './_shared';

// stdout 只放协议，日志写 stderr。实测：多一行 print，FastMCP CLI 客户端（MCP SDK 2.3.0）把这行当解析错误丢掉，不报错（research/demo-runs.md 第 5 节）
export default function S24_Stdout() {
	return (
		<PartFrame part="cli" title="内线上，只能传工单">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
				<Side label="stdout：专用内线" labelBg={colors.blue} minHeight={290}>
					<div style={{ fontSize: 23, fontWeight: 800, lineHeight: 1.5 }}>只能出现协议消息：工单和回执。</div>
					<Code fontSize={18} lines={['print("loading orders...")   # ✗']} />
					<div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, color: muted }}>实测：多出这一行，我们用的客户端把它悄悄丢掉，不报错。别的客户端不一定这么宽容。</div>
				</Side>
				<Side label="stderr：值班日志" labelBg={colors.green} delay={0.3} minHeight={290}>
					<div style={{ fontSize: 23, fontWeight: 800, lineHeight: 1.5 }}>调试信息、日志都写这里。</div>
					<Code fontSize={18} lines={['print("loading orders...", file=sys.stderr)   # ✓']} />
					<div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5, color: muted }}>FastMCP 的启动横幅和 INFO 日志，本来就写在 stderr。</div>
				</Side>
			</div>
			<Punch delay={0.8} size={27}>最难查的不是报错，<Mark>是不报错却不对</Mark>。别赌，日志一律写 stderr。</Punch>
			<SourceLine>MCP 规范（stdio transport）：server 不得往 stdout 写任何不是 MCP 消息的内容</SourceLine>
		</PartFrame>
	);
}
