import { colors } from '../ui';
import { PartFrame, Side, Code, Punch, Mark } from './_shared';

// 参数要有类型：业务参数，不是任意 SQL（W6 正文范围：不执行模型输入的任意 SQL）
export default function S12_TypedParams() {
	return (
		<PartFrame part="calling" title="工单栏位要固定">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
				<Side label="好：只收业务参数" labelBg={colors.green} minHeight={290}>
					<Code fontSize={21} lines={['get_order(', '  order_id: str,', '  customer_id: str,', ')']} />
					<div style={{ fontSize: 23, fontWeight: 800, lineHeight: 1.5 }}>只能查一张单，查谁的单写得清清楚楚。</div>
				</Side>
				<Side label="坏：让模型自己写 SQL" labelBg={colors.red} delay={0.3} minHeight={290}>
					<Code fontSize={21} lines={['run_sql(', '  query: str,', ')']} />
					<div style={{ fontSize: 23, fontWeight: 800, lineHeight: 1.5 }}>模型写什么就执行什么，删表也照办。</div>
				</Side>
			</div>
			<Punch delay={0.8} size={29}>工单上只有固定栏位，<Mark>没有“备注里随便写”</Mark>。</Punch>
		</PartFrame>
	);
}
