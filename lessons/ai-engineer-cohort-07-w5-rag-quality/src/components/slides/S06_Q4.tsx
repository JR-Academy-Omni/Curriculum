import { Quiz, Mark, Bubble } from './_shared';

// 测试 4（W4 no-answer 是正确行为）：reference RAG 的 G17。埋第 10 页 no-answer 的两个方向
export default function S06_Q4() {
	return (
		<Quiz part="review" title="测试 4：助手说“找不到”，这算失败吗？"
			left={
				<div style={{ display: 'grid', gap: 12 }}>
					<Bubble who="家属">护理经理的电话是多少？</Bubble>
					<Bubble who="助手">资料里没有找到，请联系前台。</Bubble>
					<div style={{ fontSize: 21, fontWeight: 800, color: '#514c48' }}>9 份政策里，确实没有任何人的电话。</div>
				</div>
			}
			options={[
				{ text: '算，用户的问题没得到回答', ok: false },
				{ text: '不算，资料里本来就没有，这是正确的 no-answer', ok: true },
			]}
			explain={<>没有证据时说不知道，是对的。<Mark>该拒答却编了一个号码</Mark>，才是失败。</>}
		/>
	);
}
