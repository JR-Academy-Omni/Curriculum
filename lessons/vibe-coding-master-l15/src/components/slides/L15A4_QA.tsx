import { Page, AppendixBadge, Head, TwoCol } from '../deck';

/** A4 · 答疑区（课上不讲，留给课后答疑时跳转） */
export default function L15A4_QA() {
	return (
		<Page>
			<AppendixBadge label="A4 · 答疑" />
			<Head>会被问到的</Head>
			<TwoCol
				head={['问题', '口径']}
				rows={[
					['我能不能做一个自己的市场', '你已经做了 —— 今天加的那个本地目录就是'],
					['公司内部的能不能这么交', '能。私有仓一样用'],
					['包和规则仓库怎么分', '跟着人走的进包，跟着项目走的留仓库'],
					['凭据到底怎么交', '不交。每个人用自己的'],
					['没有前面几节的产物怎么办', '占位的包也装得上，先走通流程'],
					['装了想卸掉', '卸载命令在课前包说明里'],
				]}
			/>
		</Page>
	);
}
