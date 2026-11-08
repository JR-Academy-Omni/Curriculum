import { DeckFrame, Table, colors } from '../kit';

export default function S03d_Triggers() {
	return <DeckFrame tag="今天的主线 · 触发器" title="GitHub 能在这些时刻叫醒你的自动化" subtitle="写在工作流文件的 on: 下面。一个工作流可以同时有好几个触发。" accent={colors.blue}>
		<Table size={21} widths="1.05fr 1.6fr 1.35fr" head={['触发器', '什么时候', '对应的形态']} rows={[
			['schedule', '到点（cron，按 UTC 时间写）', '定时单步、监控巡检、反馈闭环'],
			['push + paths', '某些文件被改了、推上来了', '接力：上一步的产出推进仓库，下一步开工'],
			['issues / issue_comment', '有人开了一个 Issue、留了一条评论', '事件：收件箱、任务单'],
			['pull_request', '有人提了改动请求', '审批闸：合并前自动检查'],
			['workflow_dispatch', '你在网页上点「Run workflow」', '批量回填、手动重跑'],
			['repository_dispatch', '外部服务调一次 GitHub API', '事件：付款、表单（需要中转）'],
		]} />
		<div style={{ fontSize: 19, lineHeight: 1.5, marginTop: 14, color: '#514c48' }}>定时任务只在默认分支上跑，高峰期可能晚几分钟；所以每一段都要先查上一段的回执，不能赌时间差。</div>
	</DeckFrame>;
}
