import { Quiz, Chat } from './_shared';

const turns = [
	{ who: 'user' as const, text: '我叫小明。' },
	{ who: 'model' as const, text: '你好，小明。' },
	{ who: 'user' as const, text: '我叫什么？' },
	{ who: 'model' as const, text: '你叫小明。' },
];

// 复习 1：模型不记事
export default function S02_Quiz1() {
	return (
		<Quiz n={1} q="模型为什么答得出来？" left={<Chat turns={turns} />}
			options={[
				{ text: '模型记住了第 1 轮的内容', ok: false },
				{ text: '应用在第 2 次调用里，把第 1 轮的消息又发了一遍', ok: true },
				{ text: '服务端替这个用户保存了对话', ok: false },
			]}
			explain="模型不记事。它每次只看到这一次调用发来的内容。"
		/>
	);
}
