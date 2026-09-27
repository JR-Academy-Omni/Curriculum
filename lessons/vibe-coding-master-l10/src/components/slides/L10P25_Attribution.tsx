import { colors, border, shadow, fonts } from '../ui';
import { Page, PageHead, Note } from '../deck';

// P25 · 出处（蓝图 §9.3 + §19.1）
// 🔴 现在才说，一分钟。开场说「这是 1955 年的一个模型」，学员立刻把它
//    归档成「学过的旧东西」，注意力当场掉一半。先用完，再标出处。
// 三行分清：原型（借的）/ 本课的应用 / 本课的扩展。
// 这么排也顺手绕开了蓝图里「算一处扩展还是两处」的措辞未定项 —— 三行都写明性质，
// 两种读法都对得上。（讲师定了口径之后，这一页跟着改。）

const ROWS = [
	{
		tag: '原型 · 借来的',
		bg: '#999',
		title: 'Johari Window',
		body: 'Joseph Luft & Harrington Ingham, 1955。原本用于人际关系里的自我认知。',
	},
	{
		tag: '本课的应用',
		bg: colors.blue,
		title: '四格用在人机协作上',
		body: '这不是 Johari 的原意。是本课把它挪过来用。',
	},
	{
		tag: '本课的扩展',
		bg: colors.red,
		title: '退化方向（开放 → 隐藏）',
		body: 'Johari 原型里没有这一条。人际关系里信息不会自己过期，代码库里会。',
	},
];

export default function L10P25_Attribution() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title="现在说出处"
				sub="一开场就说这是 1955 年的东西，你们会立刻把它归档成学过的旧玩意。所以我放到最后。"
			/>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 15, flex: 1, minHeight: 0, justifyContent: 'center' }}>
				{ROWS.map((r) => (
					<div key={r.tag} style={{ display: 'flex', border, boxShadow: shadow, background: colors.white }}>
						<div style={{
							flex: '0 0 190px', background: r.bg, color: colors.white, borderRight: border,
							display: 'flex', alignItems: 'center', justifyContent: 'center',
							fontSize: 19, fontWeight: 900, fontFamily: fonts.mono, textAlign: 'center',
							lineHeight: 1.3, padding: '0 10px',
						}}>{r.tag}</div>
						<div style={{ padding: '16px 22px', flex: 1 }}>
							<div style={{ fontSize: 27, fontWeight: 900, color: colors.dark, marginBottom: 6 }}>{r.title}</div>
							<div style={{ fontSize: 22, color: '#555', lineHeight: 1.45 }}>{r.body}</div>
						</div>
					</div>
				))}
			</div>

			<Note>
				借来的部分我标清楚。<span style={{ color: colors.red, fontWeight: 700 }}>那条退化是我们自己加的</span>
				—— 它也是今天唯一一条你在别处学不到的。
			</Note>
		</Page>
	);
}
