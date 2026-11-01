import { colors } from '../ui';
import { PartFrame, TermCards, Punch, Mark } from './_shared';

// 三种能力：tools / resources / prompts，及谁决定什么时候用（MCP 规范的 server primitives；demo/refund_server.py 各有一个）
export default function S16_ThreeKinds() {
	return (
		<PartFrame part="mcp" title="后台能提供三种东西">
			<TermCards minHeight={320} items={[
				{ zh: '能派的工单', term: 'Tools', color: colors.blue, d: <>要后台去办的事，比如查订单。<br /><b>模型</b>决定什么时候派。</> },
				{ zh: '员工手册', term: 'Resources', color: colors.green, d: <>只看不办的资料，比如退款政策。<br /><b>应用</b>决定什么时候拿给模型看。</> },
				{ zh: '回复模板', term: 'Prompts', color: colors.orange, d: <>写好的标准话术，比如退款回复。<br /><b>用户</b>自己挑着用。</> },
			]} />
			<Punch delay={0.8} size={28}>区别在于：<Mark>要不要后台动手</Mark>，以及谁来决定用。</Punch>
		</PartFrame>
	);
}
