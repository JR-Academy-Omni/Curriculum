import { Quiz, Mark, Evidence } from './_shared';

// 测试 2（W3 freshness + W4 索引版本）：埋第 11 页 G04 和第 28 页 metadata filter
export default function S04_Q2() {
	return (
		<Quiz part="review" title="测试 2：两版政策都在索引里，用户问能不能带狗"
			left={
				<div style={{ display: 'grid', gap: 10 }}>
					<Evidence id="探视政策 v2 · 生效">宠物可以探视，但需提前 3 个工作日提交申请表 VF-02。</Evidence>
					<Evidence id="探视政策 v1" stale>为保障住户健康，宠物不得进入院区。</Evidence>
				</div>
			}
			options={[
				{ text: '没问题，模型会自己挑新的那版', ok: false },
				{ text: '作废的 v1 可能被检索出来，答成“不能带”', ok: true },
				{ text: '检索一定只会找到 v2', ok: false },
			]}
			explain={<>检索只看“像不像”，<Mark>不看生效没生效</Mark>。等会儿用真实结果看这件事。</>}
		/>
	);
}
