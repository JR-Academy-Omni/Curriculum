import { Page, PageHead, AskBoard, Note } from '../deck';

// P06 · 问题四（蓝图 §5.1）
// ⚠️ 学员会写成「我不确定 AI 能不能做到」—— 那是对工具能力的猜测，不是未知。
//    §5.3：同样**先不纠正**，留到 P18 再纠。
//    所以 hint 只强调「关于这个系统本身」，不点破。

export default function L10P06_Ask4() {
	return (
		<Page>
			<PageHead phase="do" title="问题四" mark="问题 4 / 4" />
			<AskBoard
				n={4}
				question="有什么是你们俩都不知道，必须真的试一次才知道的？"
				hint="关于这个系统本身的事：改了这里会不会有别的地方炸、这块到底还有没有人在用。"
				stopAt="3 分钟"
			/>
			<Note>四问结束。先别翻你写的东西，看我这边。</Note>
		</Page>
	);
}
