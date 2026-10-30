import { colors } from '../ui';
import { PartFrame, Side, Terminal, Punch, Mark, RunLine, DEMO_RUN } from './_shared';

// schema 校验 ≠ 授权：少填一栏被 schema 拦下；栏位都对、单子却不是他的，要靠授权拦（实测原文）
export default function S14_AuthZ() {
	return (
		<PartFrame part="calling" title="栏位填对了，不等于有权限">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
				<Side label="Schema 管：格式对不对" labelBg={colors.blue} minHeight={280}>
					<div style={{ fontSize: 22, fontWeight: 800 }}>少填了客户号：</div>
					<Terminal fontSize={17} lines={['$ fastmcp call … get_order order_id=A1024', 'Error: Missing required arguments:', '  customer_id']} />
					<div style={{ fontSize: 21, fontWeight: 700, color: '#514c48' }}>工单还没进窗口，就被退回了。</div>
				</Side>
				<Side label="授权管：他有没有资格" labelBg={colors.red} delay={0.3} minHeight={280}>
					<div style={{ fontSize: 22, fontWeight: 800 }}>栏位全对，但 A2048 是别人的单：</div>
					<Terminal fontSize={17} lines={['$ fastmcp call … get_order order_id=A2048 customer_id=C001', '"code": "forbidden"']} />
					<div style={{ fontSize: 21, fontWeight: 700, color: '#514c48' }}>这一步只能靠我们的代码去核对。</div>
				</Side>
			</div>
			<Punch delay={0.8} size={28}>格式检查拦不住越权：<Mark>先授权，再访问</Mark>。</Punch>
			<RunLine>{DEMO_RUN}</RunLine>
		</PartFrame>
	);
}
