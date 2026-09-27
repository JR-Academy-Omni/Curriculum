import { colors, border, shadow } from '../ui';
import { Page, PageHead, NumRow, Note } from '../deck';

// P18 · 搬运三 · 设计实验，不是设计 prompt（蓝图 §8.4）
// 短，因为 L7 已经教过。要说清的只有一句区别。
// ⚠️ 这里纠 §5.3 的第二个塌陷：「我不确定 AI 能不能做到」不是未知区，
//    那是对工具能力的猜测。未知区是关于**这个系统本身**的未知。

export default function L10P18_DesignAnExperiment() {
	return (
		<Page>
			<PageHead
				phase="talk"
				title={<>搬运三：<span style={{ background: colors.yellow, padding: '0 10px' }}>设计实验，不是设计 prompt</span></>}
				mark="搬运 3 / 4"
				markBg={colors.orange}
			/>

			<div style={{ border, boxShadow: shadow, background: colors.orange, color: colors.white, padding: '22px 28px', flexShrink: 0 }}>
				<div style={{ fontSize: 31, fontWeight: 900, lineHeight: 1.4 }}>
					你们俩都不知道的事，<span style={{ background: colors.white, color: colors.dark, padding: '0 10px' }}>再怎么组词也问不出来</span>。
				</div>
			</div>

			<div style={{ display: 'flex', gap: 22, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: 15, justifyContent: 'center' }}>
					<NumRow n="1" color={colors.orange} title="只读调查" desc="派出去翻，回来只给结论和证据位置（L7）" />
					<NumRow n="2" color={colors.orange} title="最小实验" desc="改一个最小的东西，看会不会炸。L9 的 One Change → One Goal → One Verification" />
					<NumRow n="3" color={colors.orange} title="观测" desc="加日志，等一周，用数据决定。唯一不能在课堂上做完的，但很多未知区只有时间能回答" />
				</div>

				<div style={{ flex: 1, border, boxShadow: '4px 4px 0 #000', background: colors.white, display: 'flex', flexDirection: 'column' }}>
					<div style={{ background: colors.red, color: colors.white, padding: '10px 18px', borderBottom: border, fontSize: 21, fontWeight: 900 }}>
						⚠️ 问题四最常见的填错
					</div>
					<div style={{ padding: '16px 20px', fontSize: 23, lineHeight: 1.55, color: colors.dark, flex: 1 }}>
						很多人写的是「我不确定 AI 能不能做到这个」。
						<div style={{ margin: '12px 0', padding: '12px 14px', background: '#f4f4f8', fontSize: 22, color: '#666', lineHeight: 1.45 }}>
							那不是未知区，那是<strong>对工具能力的猜测</strong>。
						</div>
						未知区是关于<strong>这个系统本身</strong>的：
						<div style={{ marginTop: 8, fontSize: 22, color: '#555', lineHeight: 1.6 }}>
							改了这里会不会有别的地方炸<br />
							这个模块到底还有没有人在用
						</div>
					</div>
				</div>
			</div>

			<Note>回头改一下你的问题四。如果那一格写的是对 AI 的猜测，它其实是空的。</Note>
		</Page>
	);
}
