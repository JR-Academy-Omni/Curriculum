import { colors } from '../ui';
import { PartFrame, Flow, Punch, Mark } from './_shared';

// tool calling 的一来一回（回执内容取自 research/demo-runs.md 的实测输出）
export default function S10_RoundTrip() {
	return (
		<PartFrame part="calling" title="一来一回，分四步" subtitle="客户问：我的订单 A1024 到哪了？">
			<Flow color={colors.blue} minHeight={290} zhSize={26} steps={[
				{ en: '① 模型提出', zh: '请调 get_order', d: <>order_id = A1024<br />customer_id = C001<br />〔客服填好工单〕</> },
				{ en: '② 程序执行', zh: '去订单系统查', d: <>真正干活的是我们写的代码<br />〔后台窗口照单办〕</> },
				{ en: '③ 结果送回', zh: 'status: ok', d: <>state = 已签收<br />〔回执带回客服〕</> },
				{ en: '④ 模型回复', zh: '“已签收了”', d: <>模型根据回执说话<br />〔客服回复客户〕</> },
			]} />
			<Punch delay={0.9} size={29}>模型自己<Mark>从不执行</Mark>任何东西，它只会写单。</Punch>
		</PartFrame>
	);
}
