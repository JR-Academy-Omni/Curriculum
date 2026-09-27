import { Slide, Inner, Title, Grid, CardSm, Tag, colors } from '../ui';

const contract = [
	['GOAL', '唯一目标与成功条件'],
	['INPUTS', '允许读取的上下文'],
	['TOOLS', '允许调用的系统与动作'],
	['OUTPUT', '结构化产物与证据'],
	['STOP', '何时完成、失败或停止'],
	['ESCALATE', '何时必须交还给人'],
];

export default function S47_PromptStack() {
	return <Slide bg={colors.warmBg}><Inner style={{ flexDirection: 'column', justifyContent: 'center' }}><Tag bg={colors.purple}>AGENT CONTRACT · 上线前先写清边界</Tag><Title size="52px" style={{ margin: '15px 0 24px' }}>没有停止条件和升级路径，就不是可控的 Agent</Title><Grid cols={3} gap={15}>{contract.map(([title, body], index) => <CardSm key={title} bg={[colors.red, colors.yellow, colors.blue, colors.green, colors.purple, colors.orange][index]} style={{ minHeight: 112 }}><h3 style={{ fontSize: 21 }}>{title}</h3><p style={{ fontSize: 17, fontWeight: 800, marginTop: 12 }}>{body}</p></CardSm>)}</Grid><p style={{ fontSize: 19, marginTop: 24, fontWeight: 900 }}>Agent 可以自主执行授权内的小循环；目标、风险接受和高影响动作仍由人批准。</p></Inner></Slide>;
}