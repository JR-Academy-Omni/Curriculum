import { Code, Page, Say } from './_parts';

export default function S16_Trace() {
	return (
		<Page part="第 2 部分" at={["run_trace.py · Trace.action()", "run_trace.py · Trace.observation()", "sdk_common.py · Printer.feed()"]} title="读一段运行记录：结果改变了下一步">
		  <Code file="教学示例：工具结果是 demo 里的真实数据，模型的路径每次可能不同" size={21} code={"任务: 客户 C003 问订单 A3072 能退款吗？\n\nAction       get_order {order_id: A3072, customer_id: C003}\nObservation  已签收，299 元，签收 40 天\n\nAction       get_refund_policy {}\nObservation  签收后 14 天内可申请退款；超过 500 元需主管确认。\n\nReply        超过 14 天，不能退款。"} />
		  <Say>它查政策，是因为看到了“40 天”。这一步事先没有写死。
		    <div style={{ fontWeight: 500, fontSize: 23, marginTop: 6 }}>排查时看每一步的输入和输出：调了什么工具、返回了什么。我们不展示也不保存模型的思考过程。</div>
		  </Say>
		</Page>
	);
}
