import { colors } from '../ui';
import { PartFrame, Rows, Punch, Mark } from './_shared';

// 一个分数怎么读：N/A 不计入、样本量、裁判出错记缺失（reference RAG README · Metric contract / 已知限制）
export default function S17_ReadNumber() {
	return (
		<PartFrame part="report" title="一个分数，怎么读" subtitle="报告里写的是：evidence recall@k　0.853（n=17）">
			<Rows color={colors.blue} fontSize={27} pad={13} gap={12} items={[
				{ say: 'n=17：3 道该拒答的题没有证据可找，不算进平均', term: 'N/A ≠ 0' },
				{ say: '20 道题，一道变了就是 5 个百分点', term: 'Sample size' },
				{ say: '裁判调用出错的题，记为缺失，不记 0 分', term: 'Missing' },
			]} />
			<Punch delay={0.8} size={29}>分数旁边一定要看 n，<Mark>小样本上的小差距，说明不了什么</Mark>。</Punch>
		</PartFrame>
	);
}
