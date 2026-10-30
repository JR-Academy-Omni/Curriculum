import { colors } from '../ui';
import { PartFrame, Terminal, Punch, Mark, RunLine, DEMO_RUN } from './_shared';

// 回执统一为 status / data / error（research/demo-runs.md 第 2 节，fastmcp call 实测原文）
export default function S13_Result() {
	return (
		<PartFrame part="calling" title="回执要能看懂" subtitle="同一个窗口，三张回执。每张都说清楚办成了没有、为什么。">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
				<Terminal fontSize={17} title="A1024 · 客户 C001" lines={['{', '  "status": "ok",', '  "data": {', '    "state": "已签收",', '    "amount": 129', '  }', '}']} />
				<Terminal fontSize={17} title="Z9999 · 客户 C001" lines={['{', '  "status": "error",', '  "error": {', '    "code": "not_found",', '    "message":', '      "没有订单 Z9999"', '  }', '}']} />
				<Terminal fontSize={17} title="A2048 · 客户 C001" lines={['{', '  "status": "error",', '  "error": {', '    "code": "forbidden",', '    "message": "这张订单', '      不属于该客户"', '  }', '}']} />
			</div>
			<Punch delay={0.8} size={27}>超时也要有自己的 code。<Mark color={colors.yellow}>不能全都变成一句“出错了”</Mark>，模型才知道下一步怎么说。</Punch>
			<RunLine>{DEMO_RUN}</RunLine>
		</PartFrame>
	);
}
