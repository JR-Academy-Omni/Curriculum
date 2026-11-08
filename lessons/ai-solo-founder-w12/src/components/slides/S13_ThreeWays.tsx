import { DeckFrame, Table, Takeaway, colors } from '../kit';

export default function S13_ThreeWays() {
	return <DeckFrame tag="03 · 让自动化跑起来" title="自动化可以跑在三个地方" subtitle="同一件事：「每天看一次竞品的价格，变了就告诉我」。下面是三种做法，区别是在哪里跑、谁来做判断。" accent={colors.blue}>
		<Table size={20} widths=".8fr 1.3fr 1.3fr 1.45fr" head={['', '① 在你电脑上跑', '② 在 GitHub 上跑，不用 AI', '③ 在 GitHub 上跑，加 AI 判断']} rows={[
			['具体怎么做', '在 Codex App 里设一个定时任务：每天 9 点打开竞品页，读价格，和上次比，写一段话给你', 'GitHub 每 6 小时把竞品页抓下来存一份，和上一份逐字比较，不一样就开一个 Issue', '和 ② 一样先抓下来比较；发现变了，再让 Codex 读一遍：这次改价对我有什么影响、要不要跟着调'],
			['谁来判断', 'Codex', '没人判断，只看文字有没有变', '固定步骤交给程序，判断交给 Codex'],
			['电脑要开着吗', '要，电脑合上就不跑', '不用', '不用'],
			['花什么钱', '你的 Codex 订阅', 'GitHub 的免费额度通常够用', 'GitHub 额度 + OpenAI API 按用量计费'],
			['课程包里对应', '本机练习包的 6 个任务', 'GitHub 练习包的任务 1、2', '记忆仓库（今天的主线）'],
		]} />
		<div style={{ marginTop: 16 }}><Takeaway>课上先用 ① 在你电脑上跑通；想让它电脑关了也每天跑，再搬到 GitHub 上用 ③。</Takeaway></div>
	</DeckFrame>;
}
