import { colors, fonts } from '../ui';
import { PartFrame, Side, Punch, Mark } from './_shared';

// gold evidence 存 (doc_id, 原句) 而不是 chunk id：换切块后 id 会变（reference RAG README · Golden case 字段）
export default function S13_QuoteNotId() {
	return (
		<PartFrame part="golden" title="证据写原句，不写块的编号">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
				<Side label="写块的编号" labelBg={colors.red} minHeight={300}>
					<div style={{ fontFamily: fonts.mono, fontSize: 30, fontWeight: 700 }}>visiting-policy@v2#01</div>
					<div style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.5 }}>换一种切法，第 01 块装的就是别的内容了。考题全部作废。</div>
				</Side>
				<Side label="写原句" labelBg={colors.green} delay={0.3} minHeight={300}>
					<div style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.5 }}>“12 岁以下儿童探视时须全程由一名成年家属陪同”</div>
					<div style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.5 }}>怎么切都在。哪一块装着整句，哪一块就算找到。</div>
				</Side>
			</div>
			<Punch delay={0.8} size={29}>后面要试不同的切块方法，<Mark>考题不能跟着变</Mark>。</Punch>
		</PartFrame>
	);
}
