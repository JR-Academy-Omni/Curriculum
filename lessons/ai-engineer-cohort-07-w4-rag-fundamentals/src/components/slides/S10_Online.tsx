import { colors } from '../ui';
import { PartFrame, Flow, Punch, Mark, muted } from './_shared';

// 在线：query → embedding → similarity → top-k
export default function S10_Online() {
	return (
		<PartFrame part="online" title="在线：按问题，取最像的几块">
			<Flow color={colors.blue} minHeight={230} steps={[
				{ en: 'query', zh: '家属的问题', d: '「这周末能带孩子来吗？」' },
				{ en: 'query embedding', zh: '问题也变成向量', d: '用建索引时的同一个模型' },
				{ en: 'similarity', zh: '和每一块比', d: '算出一个相似度分数' },
				{ en: 'top-k', zh: '取最像的 k 块', d: '交给下一步去组装' },
			]} />
			<Punch delay={0.9} size={29} mt={28}>top-k 是一笔预算：<Mark>k × 每块 token 数</Mark>，每次请求都要付。</Punch>
			<Punch delay={1.1} size={23} mt={8}><span style={{ color: muted }}>分数高只说明「像」，不说明「对」，也不说明「能看」。</span></Punch>
		</PartFrame>
	);
}
