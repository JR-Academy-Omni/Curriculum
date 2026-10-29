import { colors } from '../ui';
import { PartFrame, Side, Punch, Mark } from './_shared';

const text = { fontSize: 25, fontWeight: 700, lineHeight: 1.6 } as const;

// 在线：Retrieval contract 只讲 no-result behavior
export default function S12_NoResult() {
	return (
		<PartFrame part="online" title="检索不到，返回什么？" subtitle="家属问：「能带狗来探视吗？」索引里没有一条讲宠物。">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
				<Side label="硬凑够 k 块" labelBg={colors.red} minHeight={270}>
					<div style={text}>分数再低也凑满 5 块：停车说明、餐厅时间……</div>
					<div style={text}>模型拿着不相关的内容，编出一个答案。</div>
				</Side>
				<Side label="返回空 + 原因" labelBg={colors.green} delay={0.4} minHeight={270}>
					<div style={text}>没有一块过分数线 → 返回空，写明原因：没找到、没权限，还是没有这类文档。</div>
					<div style={text}>下一步走 no-answer。</div>
				</Side>
			</div>
			<Punch delay={0.8} size={30} mt={26}>Retrieval contract 今天只讲一个字段：<Mark>no-result behavior</Mark>。</Punch>
		</PartFrame>
	);
}
