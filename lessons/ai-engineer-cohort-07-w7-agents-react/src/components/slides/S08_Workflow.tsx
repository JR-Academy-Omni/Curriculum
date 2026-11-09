import { Code, Page, Say } from './_parts';

export default function S08_Workflow() {
	return (
		<Page part="第 1 部分" at={["01_control.py · workflow()"]} title="第 1 级：每一步都写死">
		  <Code file="demo/01_control.py" size={21} code={"trace.action(\"get_order\", {\"order_id\": ORDER_ID})        # 第 1 步：永远先查订单\norder = desk.get_order(ORDER_ID, CUSTOMER_ID)\ntrace.observation(order)\n\ntrace.action(\"get_refund_policy\", {})                    # 第 2 步：永远再查政策\ntrace.observation(desk.get_refund_policy())\n\n# 第 3 步：判断规则也是代码写死的\ndata = order[\"data\"]\neligible = data[\"state\"] == \"已签收\" and data[\"delivered_days_ago\"] <= 14\nreply = f\"订单 {ORDER_ID} 金额 {data['amount']} 元，{'可以退款' if eligible else '不能退款'}。\""} />
		  <Say>模型可以不参与。流程固定，最便宜，也最好测试。</Say>
		</Page>
	);
}
