import { Page, PageHead, AskBoard } from '../deck';

/** P05 · 问题三（闸③） */
export default function L11P05_Ask3() {
	return (
		<Page>
			<PageHead phase="ask" title="第三个问题" mark="问题 3 / 4" />
			<AskBoard
				n={3}
				question="它做错了，你收得回来吗？"
				hint={<>注意区分：改错一个文件 <strong>vs</strong> 已经发出去的消息、已经合进主干的改动、已经删掉的东西。</>}
				stopAt="3 分钟"
			/>
		</Page>
	);
}
