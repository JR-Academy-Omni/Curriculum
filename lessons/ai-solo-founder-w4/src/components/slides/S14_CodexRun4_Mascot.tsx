import CodexRun from '../CodexRun';

export default function S14_CodexRun4_Mascot() {
	return (
		<CodexRun
			no="④"
			tag="做个吉祥物"
			minutes="7 min"
			title="吉祥物：一个活动最便宜的记忆点"
			sub="logo 让人认出你，吉祥物让人记住你、愿意转发。对小活动来说，它比 logo 还值。"
			prompt={`读 design-system.md，为这个活动设计一个吉祥物。

先给我 3 个方向，每个方向说明：
- 它是什么（形象 + 性格三个词）
- 为什么它配得上这个活动的语气
- 它能怎么用（海报主视觉 / 表情包 / 签到牌 / 周边）

选定方向后，给我一份出图 prompt，要求：
- 纯形象，不带任何文字、logo、界面元素
- 三视图（正面 / 侧面 / 背面）保证后续生成一致
- 三个表情（默认 / 开心 / 疑惑）
- 明确写出配色（用 design-system 的 hex）、画风、线条粗细、有无描边
- 背景透明或纯色，方便抠图

红线：
- 不要拟人化到像某个真人
- 不要跟已有的知名吉祥物撞形象
- 出图 prompt 里不许出现文字要求（模型写不对字）`}
			accept={[
				'3 个方向的性格真的不一样',
				'出图 prompt 里写死了 hex，不是"用品牌色"',
				'明确要求了三视图 —— 这是后续能复用的关键',
				'prompt 里没有让模型写字',
			]}
			fallback="出图工具卡了就先只拿 prompt，图课后再出。吉祥物是加分项不是必需项，卡超过 5 分钟直接跳到 landing page。"
		/>
	);
}
