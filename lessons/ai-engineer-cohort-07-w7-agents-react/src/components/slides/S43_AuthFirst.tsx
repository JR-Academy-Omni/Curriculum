import { colors } from '../ui';
import { Code, Flow, Page, Say } from './_parts';

export default function S43_AuthFirst() {
	return (
		<Page part="第 7 部分" at={["guards.py · validate_args()", "guards.py · policy_gate()", "agent.py · make_gate()"]} title="有副作用的操作，先过授权">
		  <Flow size={24} items={[
		    { t: '模型提出', d: 'issue_refund', bg: colors.yellow },
		    { t: '校验', d: '参数类型和格式' },
		    { t: '授权', d: '这个人、这张单、这个金额', bg: colors.blue },
		    { t: '审批', d: '超过 500 元主管签字', bg: colors.orange },
		    { t: '执行', d: '记录结果', bg: colors.green },
		  ]} />
		  <Code file="demo/guards.py" size={15} code={"def policy_gate(desk: Desk, tool: str, args: dict) -> tuple[str, str]:\n    \"\"\"hook 用的判断：allow / ask / deny。凡是没明确允许的，一律不放行。\"\"\"\n    if tool in READ_TOOLS or tool == \"send_refund_email\":\n        return \"allow\", \"允许\"\n    if tool != \"issue_refund\":\n        return \"deny\", f\"工具 {tool} 不在名单内\"\n    order = desk.orders.get(args.get(\"order_id\", \"\"))\n    if order is None:\n        return \"deny\", \"订单不存在\"\n    if order[\"amount\"] > APPROVAL_LIMIT:\n        return \"ask\", f\"金额 {order['amount']} 超过 {APPROVAL_LIMIT} 元，需要主管确认\"\n    return \"allow\", \"金额在自动处理范围内\""} />
		  <Say>有副作用的操作：改数据、发邮件、动钱。做了就收不回来，所以检查放在执行之前。</Say>
		</Page>
	);
}
