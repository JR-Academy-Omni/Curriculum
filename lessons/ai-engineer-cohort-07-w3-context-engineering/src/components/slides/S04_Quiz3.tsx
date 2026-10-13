import { Quiz, Chat } from './_shared';

const turns = [
	{ who: 'user' as const, text: '我叫小明。' },
	{ who: 'model' as const, text: '你好，小明。' },
	{ who: 'user' as const, text: '我叫什么？' },
	{ who: 'model' as const, text: '你叫小明。' },
];

// 复习 3：Prompt Engineering 与 Context Engineering 的区别
export default function S04_Quiz3() {
	return (
		<Quiz n={3} q="哪个是 Prompt Engineering，哪个是 Context Engineering？" left={<Chat turns={turns} />}
			options={[
				{ text: '把「我叫什么？」改成「请只回答我的名字，不要加别的话。」', tag: 'Prompt Engineering' },
				{ text: '决定第 2 次调用里，带不带第 1 轮的消息', tag: 'Context Engineering' },
			]}
			explain="一个管这句话怎么写，一个管这一次调用里放哪些内容。今天讲后一个。"
		/>
	);
}
