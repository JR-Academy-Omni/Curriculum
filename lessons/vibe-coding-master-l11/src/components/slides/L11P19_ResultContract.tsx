import { colors, border, shadow } from '../ui';
import { Page, PageHead, StatusBox, Panel, Note } from '../deck';

/**
 * P19 · 结果契约 ⭐⭐
 * 🔴 §20：三个状态必须写死为 done / skipped / needs-human，
 *    页面上不许出现「等等」「诸如此类」。
 * 🔴 §19.1：必须写明这是本课的约定，不是任何工具的内置功能。
 * needs-human 是本页的深度：二选一会逼它把「我没做」塞进成功里 ——
 * 因为它确实正常结束了。第三档是 P16 那条铁律的机器形态。
 */
export default function L11P19_ResultContract() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title={<>绿灯是<span style={{ color: colors.red }}>它</span>给你的。你需要一个<span style={{ color: colors.teal }}>你自己</span>定的信号</>}
				sub="它跑完必须留下一份固定形状的结论 —— 不是一段读起来很顺的报告。"
			/>

			<StatusBox style={{ flexShrink: 0, height: 132 }} />

			<div style={{ display: 'flex', gap: 18, flex: 1, minHeight: 0 }}>
				<Panel title="加上这两项，契约才完整" accent={colors.dark} style={{ flex: 1 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center', flex: 1 }}>
						<div>
							<div style={{ fontSize: 23, fontWeight: 900, color: colors.dark }}>证据</div>
							<div style={{ fontSize: 21, color: '#666', lineHeight: 1.45, marginTop: 3 }}>
								一条<strong>来自它之外</strong>的检查结果。不是它自己说「我验过了」。
							</div>
						</div>
						<div>
							<div style={{ fontSize: 23, fontWeight: 900, color: colors.dark }}>原因</div>
							<div style={{ fontSize: 21, color: '#666', lineHeight: 1.45, marginTop: 3 }}>
								不是 <code style={{ fontWeight: 700 }}>done</code> 的时候，一句话说清卡在哪。
							</div>
						</div>
					</div>
				</Panel>

				<Panel title="为什么是三个，不是两个" accent={colors.blue} style={{ flex: 1.25 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center', flex: 1 }}>
						<div style={{ fontSize: 23, lineHeight: 1.5, color: colors.dark }}>
							只有「成功 / 失败」两档的时候，它会把<strong style={{ color: colors.red }}>「我没做」也塞进成功里</strong> ——
							因为它确实正常结束了。
						</div>
						<div style={{
							border: `3px solid ${colors.blue}`, background: '#eef7ff',
							padding: '12px 16px', fontSize: 22, fontWeight: 800, color: colors.dark, lineHeight: 1.45,
						}}>
							<code style={{ fontWeight: 900 }}>needs-human</code> 这一档，就是上一页那条铁律的机器形态。
							给它第三个选项，才是给它说实话的余地。
						</div>
					</div>
				</Panel>
			</div>

			<div style={{
				border, boxShadow: shadow, background: colors.dark, color: colors.white,
				padding: '16px 24px', fontSize: 25, fontWeight: 800, lineHeight: 1.45, flexShrink: 0,
			}}>
				有了这三个状态，外面那个脚本才有事可干：<code style={{ color: colors.green }}>done</code> 就安静，
				<code style={{ color: colors.blue }}>needs-human</code> 就叫你 ——
				<span style={{ color: colors.yellow }}>什么都没交回来，就报警。</span>
			</div>

			<Note>
				⚠️ 这三个词是<strong>我们的约定</strong>，不是任何工具的内置功能。换个工具、换条通道，这份约定照样成立。
			</Note>
		</Page>
	);
}
