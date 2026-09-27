import { Page, PageHead, AskBoard, Note } from '../deck';

// P04 · 问题二（蓝图 §5.1）
// ⚠️ 学员会把这一问写成技术细节（用什么框架、代码在哪个目录）。
//    §5.3：老师**先不纠正**。留到 P12 讲落盘时，用他们自己写的东西当反例。
//    所以这一页的 hint 不许提示「理由 vs 事实」的区别。

export default function L10P04_Ask2() {
	return (
		<Page>
			<PageHead phase="do" title="问题二" mark="问题 2 / 4" />
			<AskBoard
				n={2}
				question="有什么是你清楚、但你没写下来、你默认它已经知道的？"
				hint="关键词是「没写下来」。不在任何文件里，只在你脑子里，但你交任务的时候默认它会照着做。"
				stopAt="4 分钟"
			/>
			<Note>能写几条写几条。这一问后面我们会回来算一次账。</Note>
		</Page>
	);
}
