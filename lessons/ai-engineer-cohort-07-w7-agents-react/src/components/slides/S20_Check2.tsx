import { Quiz } from './_parts';

export default function S20_Check2() {
	return (
		<Quiz part="第 2 部分" q="模型这一轮没有调用工具，循环应该怎么做？" options={['A · 再问一次模型', 'B · 结束循环', 'C · 报错']} answer="B，结束循环。" why="不过模型说“做完了”不等于真的做完。第 7 部分会讲怎么核对。" />
	);
}
