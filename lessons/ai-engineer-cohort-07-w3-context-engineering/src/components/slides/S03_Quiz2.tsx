import { Quiz, Chat } from './_shared';

const turns = [
	{ who: 'user' as const, text: '我叫小明。' },
	{ who: 'model' as const, text: '你好，小明。' },
	{ who: 'user' as const, text: '我叫什么？' },
	{ who: 'model' as const, text: '你叫小明。' },
];

// 复习 2：上下文是每次调用现拼的
export default function S03_Quiz2() {
	return (
		<Quiz n={2} q="第 2 次调用只发最后一句，会怎样？" left={<Chat turns={turns.slice(2, 3)} />}
			options={[
				{ text: '模型照样答「小明」', ok: false },
				{ text: '模型答不出来，或者编一个名字', ok: true },
				{ text: '接口报错', ok: false },
			]}
			explain="上下文是每次调用现拼的。发什么，由应用决定，不由模型决定。"
		/>
	);
}
