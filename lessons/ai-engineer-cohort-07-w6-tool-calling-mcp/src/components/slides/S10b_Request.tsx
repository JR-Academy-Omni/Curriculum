import { colors } from '../ui';
import { PartFrame, Side, Terminal, Punch, Mark, SourceLine } from './_shared';

// 模型输出的只是一段结构化文字（tool_use 块），由我们的程序执行。格式取自 Anthropic tool use 文档，是格式示例，不是实测
export default function S10b_Request() {
	return (
		<PartFrame part="calling" title="模型写出来的，只是一张条子" subtitle="上一页第 ① 步，模型真正输出的就是下面这段文字。">
			<div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 24 }}>
				<Terminal fontSize={21} title="模型的输出（tool_use，格式示例）" lines={[
					'{',
					'  "type": "tool_use",',
					'  "name": "get_order",',
					'  "input": {',
					'    "order_id": "A1024",',
					'    "customer_id": "C001"',
					'  }',
					'}',
				]} />
				<Side label="这段文字自己什么也不做" labelBg={colors.blue} delay={0.3} minHeight={300}>
					<div style={{ fontSize: 24, fontWeight: 800, lineHeight: 1.6 }}>
						1. 我们的程序读到它，真的去执行 get_order，查到“已签收”<br />
						2. 程序把结果塞回对话<br />
						3. 模型看到结果，才写回复：“您的订单已签收。”
					</div>
				</Side>
			</div>
			<Punch delay={0.8} size={29}>程序没执行，就<Mark>什么都没发生</Mark>。</Punch>
			<SourceLine>Anthropic tool use 文档：“The model never runs anything on its own.”</SourceLine>
		</PartFrame>
	);
}
