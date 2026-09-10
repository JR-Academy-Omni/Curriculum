import { DeckFrame, AnimatedGroup, Label, colors, fonts } from '../deck';

type Week = {
	week: string;
	title: string;
	build: string;
	evidence: string;
	color: string;
};

const weeks: Week[] = [
	{week:'W1', title:'AI Coding + ADLC', build:'把想法写成 Task Brief、范围、验收标准和停止条件，再完成一次受控改动。', evidence:'PRD · Repo Map · Test · Review', color:colors.red},
	{week:'W2', title:'Product UI + Design System', build:'完成 Design Tokens、关键页面，以及 loading、empty、error、permission 状态。', evidence:'DESIGN.md · 完整 UI · Design Review', color:colors.blue},
	{week:'W3', title:'Runnable Application MVP', build:'先串起用户操作、API、数据、权限和审计，交付一个不依赖 AI 的可运行产品。', evidence:'Vertical Slice · E2E · Audit', color:colors.green},
	{week:'W4', title:'Voice AI', build:'接入录音与 STT；转写允许编辑，人工确认后才能进入系统，并保留手动输入。', evidence:'STT Adapter · Human Confirm · Failure Tests', color:colors.orange},
	{week:'W5', title:'AI-Native Workspace', build:'用 Work Graph、Wiki、C4、ADR、Hooks 和 Skills 管理需求、架构与代码变化。', evidence:'Living Docs · Architecture · Reusable Skills', color:colors.purple},
	{week:'W6', title:'Evaluation Pipeline First', build:'先冻结测试集、成功标准和失败分类，再定义阈值、自动检查与人工评分。', evidence:'Golden Dataset · Baseline · Eval Report', color:colors.blue},
	{week:'W7', title:'Policy RAG from Scratch', build:'亲手实现 chunk、metadata、embedding、检索、引用和 no-answer，并复用 W6 测试。', evidence:'Retrieval · Citations · RAG Eval', color:colors.green},
	{week:'W8', title:'Data Layer + MCP + CLI', build:'抽出 Repository、Domain Service、权限与审计边界，再接薄 MCP Adapter 和 CLI。', evidence:'Contracts · Direct Tests · MCP Tools', color:colors.blue},
	{week:'W9', title:'Bounded Agent', build:'加入工具白名单、步数限制、停止条件、timeout、retry、fallback、人工审批与 trace。', evidence:'Agent Loop · Human Gate · Failure Tests', color:colors.red},
	{week:'W10', title:'Safe Long-Term Memory', build:'只写入确认事实；按用户和角色隔离，并处理来源、TTL、冲突、更正、删除和投毒。', evidence:'Memory Policy · Audit · Poisoning Tests', color:colors.purple},
	{week:'W11', title:'Production Agent Harness', build:'把 Agent 变成可运行、暂停、恢复和重放的系统，补 hooks、budget、checkpoint 和幂等。', evidence:'Run Lifecycle · Replay · Side-effect Protection', color:colors.orange},
	{week:'W12', title:'Model Router', build:'根据质量、成本、延迟、隐私和数据驻留选模型，并处理拒答、超时和 Provider 故障。', evidence:'Adapters · Routing Policy · Router Eval', color:colors.green},
	{week:'W13', title:'Production Readiness Review', build:'运行生产评测、安全红队和故障演练，最后做发布、回滚与 System Design 答辩。', evidence:'Eval Pack · Release Decision · Incident Runbook', color:colors.yellow},
];

function WeekColumn({items, dark = false}: {items: Week[]; dark?: boolean}) {
	return <div style={{height:'100%',background:dark?colors.dark:colors.white,color:dark?colors.white:colors.dark,border:`2px solid ${colors.dark}`,borderRadius:22,boxShadow:`9px 9px 0 ${dark?colors.yellow:colors.blue}`,padding:'10px 18px',display:'grid',gridTemplateRows:`repeat(${items.length},1fr)`}}>
		{items.map((item, index) => <AnimatedGroup key={item.week} delay={.04 + index * .035} style={{minHeight:0}}>
			<div style={{height:'100%',display:'grid',gridTemplateColumns:'60px 205px 1fr',gap:13,alignItems:'center',borderBottom:index < items.length - 1 ? `1px solid ${dark?'#3d435b':'#ddd6cf'}`:'none',padding:'6px 0'}}>
				<Label bg={item.color} color={item.color===colors.yellow||item.color===colors.green||item.color===colors.blue?colors.dark:colors.white}>{item.week}</Label>
				<div style={{fontFamily:fonts.heading,fontSize:18,fontWeight:900,lineHeight:1.12}}>{item.title}</div>
				<div>
					<div style={{fontSize:13.5,lineHeight:1.32,fontWeight:650,color:dark?'#ececf0':'#403b37'}}>{item.build}</div>
					<div style={{fontFamily:fonts.mono,fontSize:10.5,lineHeight:1.25,fontWeight:900,color:item.color,marginTop:4}}>{item.evidence}</div>
				</div>
			</div>
		</AnimatedGroup>)}
	</div>;
}

export default function S06() {
	return <DeckFrame tag="13 场 PRACTICE LIVE" title="13 周，每周都在同一个系统上继续开发" subtitle="从产品底座到 Production Review：每周增加一类系统能力，同时留下可检查的工程结果。" accent={colors.red} titleSize={44}>
		<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,height:'100%',minHeight:0}}>
			<WeekColumn items={weeks.slice(0, 7)} />
			<WeekColumn items={weeks.slice(7)} dark />
		</div>
	</DeckFrame>;
}
