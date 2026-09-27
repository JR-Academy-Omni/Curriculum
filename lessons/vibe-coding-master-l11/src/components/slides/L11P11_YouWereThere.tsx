import { colors } from '../ui';
import { Page, PageHead, MiniTable, Verdict } from '../deck';

/**
 * P11 · 前十节，你都在场
 * 这一页证明本节不是新话题，是旧内容在新条件下重跑一遍。
 * §10.2 三级砍法里这一页最后才砍 —— 砍了本节和系列的接口就断了。
 */
export default function L11P11_YouWereThere() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title="前十节，你都在场"
				sub="所有技巧都建立在一个没说出口的前提上：你随时能喊停。"
			/>

			<MiniTable
				widths={['110px', '1.15fr', '1.3fr']}
				head={['来自', '当时怎么说', '你不在场时变成什么']}
				rows={[
					['L6', '它说「完成了」不算完成，判据要来自它之外', <><strong>判据必须写成契约</strong> —— 没人替它验</>],
					['L6', '认出该打断的三个信号', <><strong>打断信号没人看</strong>，只能提前写成边界</>],
					['L7', '汇总是你的活', <>汇总变成<strong>回执契约</strong>，它得替你先摘成固定形状</>],
					['L10', '隐藏区：你不说它就编', <><strong>隐藏区必须在出发前搬空</strong></>],
					['L10', '开放区会退化成隐藏区', <>这里<strong>退化最快</strong> —— 它每天读同一份过期文件</>],
				]}
				starRow={4}
				style={{ flex: 1 }}
			/>

			<Verdict bg={colors.purple}>
				一个跑了三个月的定时任务，是全项目<span style={{ color: colors.yellow }}>最老的那份 context</span>。
			</Verdict>
		</Page>
	);
}
