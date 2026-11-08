import { Quiz } from './_parts';

export default function S41_Check3() {
	return (
		<Quiz part="第 6 部分" q="这五个错误，怎么处理？" options={['① 429 rate_limited', '② order_id 格式不对', '③ 退款接口超时', '④ forbidden：不是这个客户的订单', '⑤ not_found：没有这张订单']} answer="① 代码重试　② 交回模型修正　③ 先查状态　④ 升级给人工　⑤ 告知客户" />
	);
}
