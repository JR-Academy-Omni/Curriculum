import { colors } from '../ui';
import { NumberBadge } from '../deck';
import { PartFrame, Side, Bubble, Punch, Mark, card } from './_shared';

// 这节课要解决什么（讲师 2026-10-30 要求：先讲目的，再给定义）。场景是教学示例，不是真实对话
export default function S06_Why() {
	return (
		<PartFrame part="basics" title="这节课要解决什么" subtitle="客户问：我的订单 A1024 到哪了？">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
				<Side label="前五周：模型只能“说”" labelBg={colors.red} minHeight={250}>
					<Bubble who="助手" bg="#ffd9d9">您的订单正在配送中，预计明天送达。</Bubble>
					<div style={{ fontSize: 23, fontWeight: 800, lineHeight: 1.5 }}>它根本看不到订单系统。这句话是编的。</div>
				</Side>
				<Side label="今天：模型能“动手”" labelBg={colors.green} delay={0.3} minHeight={250}>
					<Bubble who="助手" bg="#e6f6dd">我查了一下：订单 A1024 已签收。</Bubble>
					<div style={{ fontSize: 23, fontWeight: 800, lineHeight: 1.5 }}>它请程序去订单系统里真的查了一次。</div>
				</Side>
			</div>
			<Punch delay={0.8} size={29}>能动手，就可能闯祸。今天学的是：<Mark>让它安全地动手</Mark>。</Punch>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginTop: 18 }}>
				{['说清楚：模型怎么用工具', '看懂：MCP、一个最小的 server 和一份配置', '会判断：接不上时错在哪，守住两条底线'].map((t, i) => (
					<div key={t} style={{ ...card, padding: '12px 16px', display: 'flex', gap: 10, alignItems: 'center' }}>
						<NumberBadge bg={colors.yellow}>{i + 1}</NumberBadge>
						<span style={{ fontSize: 21, fontWeight: 800, lineHeight: 1.4 }}>{t}</span>
					</div>
				))}
			</div>
		</PartFrame>
	);
}
