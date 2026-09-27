import { Page, PageHead, AskBoard } from '../deck';

/**
 * P03 · 问题一（闸①，但学员还不知道它是闸）
 * 🔴 四问必须看起来完全平行：同版式、同中性色、只标顺序不标因果。
 */
export default function L11P03_Ask1() {
	return (
		<Page>
			<PageHead phase="ask" title="第一个问题" mark="问题 1 / 4" />
			<AskBoard
				n={1}
				question="这件事它做完之后，世界上多了什么？"
				hint={<>用一个<strong>名词</strong>回答。不是「处理一下」「跟进一下」——那是过程，不是产物。</>}
				stopAt="4 分钟"
			/>
		</Page>
	);
}
