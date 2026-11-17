import { colors } from '../ui';
import { PatternPage } from './_pattern';

export default function S19_DynamicWorkflow() {
	return (
		<PatternPage title="Dynamic workflow：运行时才生成的计划"
		  flow={[{ t: 'Agent 写计划', d: '分几个阶段、派多少个' }, { t: '平台执行', d: '很多线程，分阶段跑', bg: colors.yellow }, { t: '回到 Agent', d: '读结果，决定下一步' }]}
		  use="工作量事先不知道，而且很大：几百份文件、整个代码库。"
		  avoid="没有预算和终止条件。计划是模型写的，规模也是模型定的。"
		  example="全机构 120 位住户的月度记录抽查。今天的交班只有六位，不开。" />
	);
}
