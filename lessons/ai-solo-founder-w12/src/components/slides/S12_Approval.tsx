import { DeckFrame, Panel, Label, Node, Arrow, Takeaway, colors } from '../kit';

export default function S12_Approval() {
	return <DeckFrame tag="02 · 贯穿六种 · 审批闸" title="对外的那一步，永远等你点头" subtitle="发布、发邮件、付款、改价格：这些动作做错了收不回来。自动化做到草稿为止。">
		<div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 6 }}>
			<Node title="文章 + 视频脚本" style={{ width: 260 }} />
			<Arrow />
			<Node bg={colors.yellow} title="主编 Agent 挑错" sub="核对来源，决定能不能送审" style={{ width: 330 }} />
			<Arrow />
			<Node bg={colors.dark} color={colors.white} title="你批准" sub="看一眼，点头" style={{ width: 230 }} />
			<Arrow />
			<Node bg={colors.green} title="发布包" sub="各平台可直接粘贴" style={{ width: 280 }} />
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 30 }}>
			<Panel><Label>主编为什么也是 Agent</Label><div style={{ fontSize: 23, lineHeight: 1.55, marginTop: 14 }}>写的人很难挑自己的错。换一个只负责挑错的 Agent，明显的问题它先打回去，你只需要看它放行的那些。</div></Panel>
			<Panel><Label>批准怎么做最简单</Label><div style={{ fontSize: 23, lineHeight: 1.55, marginTop: 14 }}>在 GitHub 上最自然的做法就是 PR：AI 把发布包提成一个 PR，你点 Merge，合并这个动作再触发真正的发布。没有你的 Merge，后面那一步根本不会开始。</div></Panel>
		</div>
		<div style={{ marginTop: 20 }}><Takeaway>自动化省掉的是你的时间，不是你的签字。</Takeaway></div>
	</DeckFrame>;
}
