import { Page, PageHead, AskBoard } from '../deck';

/**
 * P06 · 问题四（闸④ = L10 的隐藏区，但现在不点破）
 * 学员想不出来，因为对他来说那些事太显然了。给三个跨行业例子启动，不给答案。
 */
export default function L11P06_Ask4() {
	return (
		<Page>
			<PageHead phase="ask" title="第四个问题" mark="问题 4 / 4" />
			<AskBoard
				n={4}
				question="中途它会不会需要问你一件只有你知道的事？"
				hint={
					<>
						想不出来是正常的 —— 这些事对你太显然了。三个别的行业的例子：
						<div style={{ marginTop: 10, lineHeight: 1.75 }}>
							· 有两个分支看起来都像主干，<strong>只有你知道哪个是活的</strong><br />
							· 这类报错在你们这儿一向不用管，<strong>只有你知道</strong><br />
							· 这件事做完要通知谁，<strong>只有你知道</strong>
						</div>
						<div style={{ marginTop: 10 }}>这样的事，你那件里有几件？</div>
					</>
				}
				stopAt="3 分钟"
			/>
		</Page>
	);
}
