import { colors } from '../ui';
import { PartFrame, TermTable } from './_shared';

// 定义（上）：右列是全课统一的类比——客服专员填工单，交给后台的自动办理窗口
export default function S07_Terms1() {
	return (
		<PartFrame part="basics" title="先认识 4 个词（上）" subtitle="今天只用一个比方：一家公司的前台客服，派工单给后台。">
			<TermTable color={colors.orange} rows={[
				{ term: 'Tool', say: '我们写好的一段程序，只做一件事，比如查订单', co: '后台的一个自动办理窗口' },
				{ term: 'Tool calling', say: '模型提出“请用这个工具”，程序去执行，再把结果交回模型', co: '客服填一张工单交给后台，后台办完写回执' },
				{ term: 'Schema', say: '工具要哪几个参数、每个是什么类型', co: '工单上的固定栏位：订单号、客户号' },
				{ term: 'Result', say: '工具交回来的东西：成功给数据，失败说原因', co: '后台回执：办好了 / 查无此单 / 无权查看' },
			]} />
		</PartFrame>
	);
}
