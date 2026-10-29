import { colors } from '../ui';
import { Quiz, Mark, TermPill, muted } from './_shared';

// 测试 1（W2 + W4）：top-k 是预算。埋第 31 页 top-k 3 → 5 的真实结果
export default function S03_Q1() {
	return (
		<Quiz part="review" title="测试 1：top-k 从 3 调到 5，每次请求多付出什么？"
			left={
				<div style={{ display: 'grid', gap: 14, fontSize: 25, fontWeight: 800, lineHeight: 1.5 }}>
					<div>检索回来的块，从 3 块变成 5 块，全部放进上下文。</div>
					<div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}><TermPill bg={colors.blue}>top-k</TermPill><TermPill bg={colors.yellow}>token budget</TermPill></div>
					<div style={{ fontSize: 20, color: muted }}>W2、W4 讲过</div>
				</div>
			}
			options={[
				{ text: '只多花一点检索时间', ok: false },
				{ text: '更多 token 和成本，还可能混进更多无关内容', ok: true },
				{ text: '什么都不多付，找得越多越好', ok: false },
			]}
			explain={<>每次请求的成本 ≈ <Mark>top-k × chunk token</Mark>；多进来的块也会分走模型的注意力。</>}
		/>
	);
}
