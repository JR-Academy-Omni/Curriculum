import { Page, Head, AppendixBadge, TwoCol, SoBar, colors } from '../deck';

/** A0 · 为什么必须三个仓（答疑用） */
export default function L14A0_WhyThreeRepos() {
	return (
		<Page>
			<AppendixBadge label="A0 · 为什么非要三个仓" />
			<Head sub="最后两行是分仓的真正理由。">为什么不能塞一个仓里</Head>

			<TwoCol
				head={['规则仓', '记录']}
				rows={[
					[<>内容变化：<strong>几个月一次</strong></>, <>内容变化：<strong>每天</strong></>],
					[<>改错了<strong>可能几个月才发现</strong></>, <>改错了<strong>当天就发现</strong></>],
					[<>谁来写：<strong>少数人</strong></>, <>谁来写：<strong>所有人，包括不用 git 的</strong></>],
					[<strong style={{ color: colors.green, fontSize: 24 }}>要不要强制审查：要</strong>, <strong style={{ color: colors.red, fontSize: 24 }}>要不要强制审查：绝不能要</strong>],
				]}
			/>

			<div style={{ marginTop: 26 }}>
				<SoBar color={colors.blue}>
					最后一行是全部理由：<strong>规则和记录对分支保护的要求正好相反。</strong>
					塞一个仓里必然牺牲一边，而<strong>被牺牲的通常是不会 git 的那一半人</strong> ——
					他们会因为交不了东西而干脆不交。
				</SoBar>
			</div>
		</Page>
	);
}
