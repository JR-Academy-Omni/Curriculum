import { DeckFrame, Table, colors } from '../kit';

export default function S13_ThreeWays() {
	return <DeckFrame tag="03 · 怎么实现" title="同一件事，三种做法：今天主讲 B 和 C" subtitle="区别在于谁来管时间、谁来管判断。B、C 都以 GitHub 为中心；A 是电脑上的快捷方式。" accent={colors.blue}>
		<Table size={21} widths="1fr 1.25fr 1.25fr 1.35fr" head={['', 'A · Agent 原生定时', 'B · 代码自动化上云', 'C · 代码管流程，Agent 管判断']} rows={[
			['是什么', 'Codex App 里建一个 Automation，到点让 Agent 做', 'GitHub Actions 按触发器跑固定步骤：抓页面、比较、提醒，不用 AI', 'Actions 负责触发、查上游、存档；需要判断的那一步交给 Codex（codex-action）'],
			['电脑要开着吗', '要，电脑醒着、Codex 开着才会跑', '不用，24 小时在线', '不用'],
			['费用', '用你的 Codex 订阅', 'GitHub Actions 运行时间（有免费额度）', 'Actions 运行时间 + 按 API 用量计费'],
			['能接事件吗', '不能', '能：Issue、push、PR、外部调用', '能'],
			['适合', '每天一次，晚一点也没关系', '固定规则的事：抓数据、比较、提醒', '每段都要判断、要接力、要留历史'],
		]} />
	</DeckFrame>;
}
