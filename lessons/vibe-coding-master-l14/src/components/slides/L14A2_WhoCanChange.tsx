import { Page, Head, AppendixBadge, TwoCol, Code, colors } from '../deck';

/** A2 · 谁能改规则，以及提案路径为什么不走 PR */
export default function L14A2_WhoCanChange() {
	return (
		<Page>
			<AppendixBadge label="A2 · 谁能改规则" />
			<Head sub="这一页给的是判据，不是结论 —— 你们的答案取决于你们那边有多少人不用 git。">
				规则怎么改
			</Head>

			<TwoCol
				head={['决定', '理由']}
				rows={[
					[<>谁能写规则仓：<strong>极少数人</strong></>, <>规则要慢、要审、<strong>要可回溯</strong></>],
					[<strong style={{ color: colors.red }}>提案不走 PR，走一次会</strong>, <>被规则约束的人<strong>不都是 git 用户</strong>。用 PR 门槛过滤提案，<strong>等于按工具而不是按价值过滤</strong></>],
					[<>代价</>, <>规则演进的吞吐量<strong>绑在那次会上</strong>。<strong style={{ color: colors.red }}>必须承认，不要假装没有</strong></>],
				]}
			/>

			<Code
				style={{ marginTop: 26 }}
				label="判据（带走这个，不是带走上面的结论）"
				wrap
				code={`你的规则使用者里，不用 git 的占比是多少？

  超过一半  → 提案路径必须离开 git
  不到两成  → PR 提案可以接受，但要留一条非 git 的兜底`}
			/>
		</Page>
	);
}
