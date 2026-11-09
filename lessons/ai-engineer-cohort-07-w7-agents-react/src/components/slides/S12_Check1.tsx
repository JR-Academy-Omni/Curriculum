import { Quiz } from './_parts';

export default function S12_Check1() {
	return (
		<Quiz part="第 1 部分" q="这三个任务，各用哪一级？" options={['① 每晚把订单汇总成固定格式的日报', '② 客户问 A1024 到哪了，查一次回答', '③ 客户说东西坏了，上次还多扣了钱，要查多个系统再判断']} answer="① Workflow　② Tool-using app　③ Agent" why="③ 的下一步取决于查到什么，事先列不出来。" />
	);
}
