import { Quiz, Mark, TermPill } from './_shared';
import { colors } from '../ui';

// W5 复习 2：faithfulness 满分 ≠ 答对（W5 第 20 页）
export default function S04_Q2() {
	return (
		<Quiz part="review" title="复习 2：faithfulness 满分，说明答对了吗？"
			left={
				<div style={{ display: 'grid', gap: 14, fontSize: 25, fontWeight: 800, lineHeight: 1.5 }}>
					<div>还是上一题那个回答，RAGAS 给的 faithfulness 是：</div>
					<div><TermPill bg={colors.green} fontSize={30}>1.0</TermPill></div>
				</div>
			}
			options={[
				{ text: '能，满分就是对的', ok: false },
				{ text: '不能，它只看有没有证据，不看证据过没过期', ok: true },
			]}
			explain={<>“2 位”确实写在检索到的 v1 里。<Mark>版本要靠程序查</Mark>。</>}
		/>
	);
}
