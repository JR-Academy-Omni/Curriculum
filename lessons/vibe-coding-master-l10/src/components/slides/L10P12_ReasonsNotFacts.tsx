import { colors, border, shadow } from '../ui';
import { Page, PageHead, Verdict, Note, Code } from '../deck';

// P12 · 搬运一 · 落盘：真正的隐藏区是理由，不是事实（蓝图 §8.1 第一步）
// 🔴 不要讲「要落盘」—— 学员已经学过三节 SoT，会觉得这格已懂。
//    要讲「你以为你落盘了」。
// 用他们自己**问题二**写的答案当反例（§5.3 说好留到这里纠）。
// 锚点是 L9 的 status == 7：它能读出结果，读不出为什么是 7。

export default function L10P12_ReasonsNotFacts() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title="回头看你的问题二"
				mark="搬运 1 / 4"
				markBg={colors.purple}
				sub="你写的那几条，有几条其实是它自己就能看出来的？"
			/>

			<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}>
					<div style={{ background: '#999', color: colors.white, padding: '10px 18px', borderBottom: border, fontSize: 21, fontWeight: 900 }}>
						这些不是隐藏区，是<strong>事实</strong>
					</div>
					<div style={{ padding: '14px 20px', fontSize: 21, lineHeight: 1.5, color: '#666', flex: 1 }}>
						· 代码在哪个目录<br />
						· 用的什么框架、什么版本<br />
						· 这个函数被谁调用<br />
						· 表结构长什么样
						<div style={{ marginTop: 10, fontSize: 20, fontWeight: 700, color: colors.dark }}>
							这些它自己能读。写进去只是让它省一步。
						</div>
					</div>
				</div>

				<div style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}>
					<div style={{ background: colors.purple, color: colors.white, padding: '10px 18px', borderBottom: border, fontSize: 21, fontWeight: 900 }}>
						这些才是隐藏区：<strong>理由和约束</strong>
					</div>
					<div style={{ padding: '14px 20px', fontSize: 21, lineHeight: 1.5, color: colors.dark, flex: 1 }}>
						· 当初<strong>为什么</strong>这么选<br />
						· 哪个客户的数据不能碰<br />
						· 上次为什么回滚<br />
						· 这块看着蠢，但动了会出事
						<div style={{ marginTop: 10, fontSize: 20, fontWeight: 700, color: colors.purple }}>
							这些只在你脑子里。你不说，它就编。
						</div>
					</div>
				</div>
			</div>

			<Code label="L9 那个例子，现在有名字了" size={21} style={{ flexShrink: 0 }}>{`if user.status == 7:
    skip_validation()        ← 它读得出：status 是 7 就跳过校验（事实 · 开放区）
                             ← 它读不出：为什么是 7   （理由 · 隐藏区）`}</Code>

			<Verdict size={26}>
				落盘不难。难的是<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>你分不清哪些需要落盘</span>
				—— 你会把它能读的写一遍，把只有你知道的漏掉。
			</Verdict>

			<Note>知识债最贵，就是因为它是唯一随人员流动直接归零的那一格（L9 §6.2）。</Note>
		</Page>
	);
}
