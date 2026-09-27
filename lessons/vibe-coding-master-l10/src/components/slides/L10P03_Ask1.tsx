import { Page, PageHead, AskBoard, Note } from '../deck';

// P03 · 问题一（蓝图 §5.1 定稿措辞，不要改词）
// 🔴 四问必须看起来完全平行：同版式、同中性色、顺序编号。
//    不许分组、不许加分类标题、不许排成 2×2。
//    学员现在填的就是四格的内容，但他们还不知道。

export default function L10P03_Ask1() {
	return (
		<Page>
			<PageHead phase="do" title="问题一" mark="问题 1 / 4" />
			<AskBoard
				n={1}
				question="这个任务里，有什么是你和它都清楚的？"
				hint="写具体的东西：哪个文件、哪个约定、哪个已经定了不用再讨论的决定。"
				stopAt="3 分钟"
			/>
			<Note>四个问题我会一个一个问。每问完我就闭嘴，你写。不用交，不用念，写给自己看。</Note>
		</Page>
	);
}
