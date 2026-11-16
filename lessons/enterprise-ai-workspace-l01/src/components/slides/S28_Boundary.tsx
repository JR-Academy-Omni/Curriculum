import { DeckFrame, Panel, Label, Node, Arrow, colors } from '../kit';

export default function S12_Approval() {
	return <DeckFrame tag="企业 AI · 人工审核" title="报价、合同和对外承诺由负责人确认" subtitle="Codex 整理和起草，实际业务动作按公司权限执行。">
		<div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 6 }}>
			<Node title="企业介绍与简报" style={{ width: 260 }} />
			<Arrow />
			<Node bg={colors.yellow} title="核查资料" sub="检查事实、条件与未决项" style={{ width: 330 }} />
			<Arrow />
			<Node bg={colors.dark} color={colors.white} title="负责人确认" sub="核对资料和业务权限" style={{ width: 230 }} />
			<Arrow />
			<Node bg={colors.green} title="可使用的文稿" sub="保留版本与依据" style={{ width: 280 }} />
		</div>
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 30 }}>
			<Panel><Label>资料审核</Label><div style={{ fontSize: 23, lineHeight: 1.55, marginTop: 14 }}>核对服务、范围、日期、金额和批准状态。缺少依据时列入待确认，不凭常见做法补写。</div></Panel>
			<Panel><Label>业务权限</Label><div style={{ fontSize: 23, lineHeight: 1.55, marginTop: 14 }}>报价发送、合同承诺、付款及专业判断，由公司指定人员确认。保存一份文稿，不代表已经获得业务审批。</div></Panel>
		</div>
	</DeckFrame>;
}
