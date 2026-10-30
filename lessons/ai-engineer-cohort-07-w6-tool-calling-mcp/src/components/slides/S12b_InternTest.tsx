import { colors } from '../ui';
import { PartFrame, Side, Code, Punch, Mark, SourceLine, muted } from './_shared';

// intern test：只给实习生看模型能看到的东西（名字、说明、参数），他能不能用对（OpenAI function calling 指南的 best practice）
export default function S12b_InternTest() {
	return (
		<PartFrame part="calling" title="实习生测试" subtitle="来了个新实习生，只给他看模型能看到的：名字、说明、参数。他能用对吗？">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
				<Side label="看不懂" labelBg={colors.red} minHeight={300}>
					<Code fontSize={21} lines={['do_stuff(', '  data,', ')']} />
					<div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.5 }}>实习生会问：这是干嘛的？data 填什么？会不会改东西？</div>
				</Side>
				<Side label="一看就会用" labelBg={colors.green} delay={0.3} minHeight={300}>
					<Code fontSize={21} lines={['get_order(', '  order_id: str,', '  customer_id: str,', ')', '"""查一张订单的状态。', '只读，不改任何数据。"""']} />
					<div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.5, color: muted }}>这句说明来自我们的示例 server。</div>
				</Side>
			</div>
			<Punch delay={0.8} size={29}>实习生看不懂的说明，<Mark>模型也看不懂</Mark>。他会问的问题，答案就写进说明里。</Punch>
			<SourceLine>OpenAI function calling 指南：“Pass the intern test.”</SourceLine>
		</PartFrame>
	);
}
