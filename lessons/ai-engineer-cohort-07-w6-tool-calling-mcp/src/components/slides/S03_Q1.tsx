import { Quiz, Mark, Evidence, Bubble } from './_shared';

// W5 复习 1：引用了作废的 v1 → Citation 失败（W5 第 13 页 G03）
export default function S03_Q1() {
	return (
		<Quiz part="review" title="复习 1：这是哪一类失败？"
			left={
				<div style={{ display: 'grid', gap: 12 }}>
					<Bubble who="家属">一次最多能来几个人探视？</Bubble>
					<Evidence id="v2 · 生效">每位住户同一时间最多接待 3 位访客。</Evidence>
					<Evidence id="v1" stale>每位住户同一时间最多接待 2 位访客。</Evidence>
					<Bubble who="助手" bg="#ffd9d9">最多 2 位。〔引用：v1〕</Bubble>
				</div>
			}
			options={[
				{ text: 'R · Retrieval', ok: false },
				{ text: 'G · Grounding', ok: false },
				{ text: 'C · Citation', ok: true },
				{ text: 'N · No-answer', ok: false },
			]}
			explain={<>引用指向了<Mark>作废的版本</Mark>，跟着答错了人数。</>}
		/>
	);
}
