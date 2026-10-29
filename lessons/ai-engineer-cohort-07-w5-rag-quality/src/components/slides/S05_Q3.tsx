import { Quiz, Mark, Evidence, Bubble } from './_shared';

// 测试 3（W4 四种回答状态）：reference RAG 的 G16。埋第 13 页检查点里的 N
export default function S05_Q3() {
	return (
		<Quiz part="review" title="测试 3：这一问，应该是哪种回答状态？"
			left={
				<div style={{ display: 'grid', gap: 12 }}>
					<Bubble who="家属">访客停车超过 3 小时怎么收费？</Bubble>
					<Evidence id="停车与出入 · 资料里只有这句">访客可免费停车 3 小时。</Evidence>
				</div>
			}
			options={[
				{ text: 'supported', ok: false },
				{ text: 'partial', ok: true },
				{ text: 'conflict', ok: false },
				{ text: 'no_answer', ok: false },
			]}
			explain={<>能答一部分（前 3 小时免费），超时怎么收没写：<Mark>partial</Mark>，并说清哪部分没有。</>}
		/>
	);
}
