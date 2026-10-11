import { Page, BigLine, colors } from '../deck';

/**
 * P05 · 立论（⭐⭐ 独占一屏）
 * 纪律 13：一句话独占一屏，不配图不配例。全课只说这一次。
 * 回收第一节的 Source of Truth —— 一处权威出处，但那个出处只在你一台笔记本上。
 */
export default function L15P05_HabitNotSystem() {
	return (
		<Page bg={colors.dark} style={{ padding: 0 }}>
			<BigLine
				bg={colors.dark}
				color={colors.white}
				sub={<>分界线不在它跑在几台机器上 —— 一台服务器上的服务当然是系统，<br />
					因为别人可以照着把它重建出来。<br />
					在于：<strong style={{ color: colors.white }}>除了你，还有没有第二个人能把它立起来。</strong></>}
			>
				<span style={{ color: colors.yellow }}>装不到第二台机器上</span>的，<br />
				不是系统，是<span style={{ color: colors.red }}>习惯</span>。
			</BigLine>
		</Page>
	);
}
