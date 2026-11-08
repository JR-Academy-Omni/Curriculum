import { Quiz } from './_parts';

export default function S04_Review1() {
	return (
		<Quiz part="W6 复习" q="模型回复“已帮您退款”，工具调用 0 次。退了吗？" options={['A · 退了', 'B · 没退', 'C · 看模型自信不自信']} answer="B，没退。" why="模型只会写字。没有工具调用，什么都没发生。" />
	);
}
