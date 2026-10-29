import { colors, fonts } from '../ui';
import { PartFrame, Side, Punch, Mark } from './_shared';

// 单变量实验规则：每个实验 config 只覆盖 baseline 的一个键；manifest 记录 dataset / corpus / prompt 的 hash；compare 发现 config diff 超过一项会提示「无法归因」
export default function S20_OneVariable() {
	return (
		<PartFrame part="experiment" title="一次，只改一样">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
				<Side label="冻住不动" labelBg={colors.blue} minHeight={320}>
					<div style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.7 }}>同一套考题<br />同一批政策文档<br />同一个 prompt<br />同一个模型、同一个裁判</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, color: '#514c48' }}>每次运行都记下它们的指纹（hash）</div>
				</Side>
				<Side label="只改一个键" labelBg={colors.orange} delay={0.3} minHeight={320}>
					<div style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700, lineHeight: 1.6 }}>retrieval:<br />&nbsp;&nbsp;top_k: 3 → 5</div>
					<div style={{ fontSize: 24, fontWeight: 800, lineHeight: 1.5 }}>同时改了两样，分数变了也说不清是谁的功劳。</div>
				</Side>
			</div>
			<Punch delay={0.8} size={29}>配置差了两项以上：<Mark>无法归因</Mark>。</Punch>
		</PartFrame>
	);
}
