import { Quiz, Mark } from './_shared';

// W5 复习 3：同时改两样 → 无法归因（W5 第 25、32 页）
export default function S05_Q3() {
	return (
		<Quiz part="review" title="复习 3：这次是谁的功劳？"
			left={
				<div style={{ display: 'grid', gap: 12, fontSize: 25, fontWeight: 800, lineHeight: 1.55 }}>
					<div>一次实验里同时改了两样：</div>
					<div>① 加了 chunk overlap<br />② top-k 从 3 调到 5</div>
					<div>结果剩下的 3 道题全修好了。</div>
				</div>
			}
			options={[
				{ text: 'chunk overlap 的功劳', ok: false },
				{ text: 'top-k 的功劳', ok: false },
				{ text: '说不清，无法归因', ok: true },
			]}
			explain={<>一次只改一样。<Mark>拆成两个实验分别跑</Mark>。</>}
		/>
	);
}
