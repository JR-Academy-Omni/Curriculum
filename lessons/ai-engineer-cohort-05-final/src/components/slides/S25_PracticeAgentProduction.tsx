import { DeckFrame, AnimatedGroup, Label, colors, fonts } from '../deck';

const weeks = [
	['W8','Data Layer + MCP + CLI','先抽出 Repository、Domain Service、权限和审计边界，再做薄 MCP Adapter 与本地 CLI。','Contracts / Direct Tests / MCP Tools / Boundary Diagram',colors.blue],
	['W9','Bounded Agent','用 W8 Tools 建立有限步数的 Agent Loop，加入 allowlist、termination、timeout、retry、fallback、human gate 与 trace。','State / Action / Observation / Failure Tests',colors.red],
	['W10','Safe Long-Term Memory','只写入人工确认事实，按 resident、user、team、role 分区，并处理 provenance、TTL、冲突、更正、删除和 poisoning。','Memory Policy / Audit / Permission / Poisoning Tests',colors.purple],
	['W11','Production Agent Harness','把 Agent 重构为可运行、暂停、恢复和重放的 Harness，加入 hooks、budgets、checkpoint、idempotency 与 side-effect protection。','Run Lifecycle / Hooks / Approval / Replay / Trace',colors.orange],
	['W12','Model Router','根据任务、质量、成本、延迟、隐私和 data residency 选择模型，处理 timeout、fallback、refusal 与 provider failure。','Adapter / Routing Policy / Trace / Router Eval',colors.green],
	['W13','Production Readiness Review','运行 production eval、LLM-as-a-Judge 校准、安全红队和故障演练，做 release decision、rollback 与 System Design Defense。','Eval Pack / Red Team / Release / Incident Runbook / Demo',colors.yellow],
] as const;

export default function S25_PracticeAgentProduction(){return <DeckFrame tag="COHORT 07 · PRACTICE W8–W13" title="Tools 逐步升级为可治理的 Production Agent" subtitle="每周只增加一类系统责任。Lightman 与 Jason 现场实现、调试、检查失败路径，并验收可以展示给面试官的工程证据。" accent={colors.green} titleSize={45}>
	<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gridTemplateRows:'1fr 1fr',gap:15,height:'100%'}}>{weeks.map((w,i)=><AnimatedGroup key={w[0]} delay={.06+i*.055} style={{display:'flex'}}><div style={{flex:1,background:i>=3?colors.dark:'#fff',color:i>=3?colors.white:colors.dark,border:`2px solid ${colors.dark}`,borderRadius:18,padding:'16px 18px',borderTop:`9px solid ${w[4]}`,display:'flex',flexDirection:'column',minHeight:0}}>
		<div style={{display:'flex',alignItems:'center',gap:12}}><Label bg={w[4]} color={w[4]===colors.green||w[4]===colors.yellow?colors.dark:colors.white}>{w[0]}</Label><div style={{fontFamily:fonts.heading,fontSize:22,fontWeight:900,lineHeight:1.08}}>{w[1]}</div></div>
		<div style={{fontSize:15.5,lineHeight:1.33,color:i>=3?'#dedee4':'#453f3b',marginTop:10,fontWeight:650}}>{w[2]}</div>
		<div style={{marginTop:'auto',paddingTop:10,borderTop:`2px solid ${i>=3?'#3a4056':'#e7e0d8'}`,fontFamily:fonts.mono,fontSize:12.5,lineHeight:1.28,fontWeight:850,color:w[4]}}>{w[3]}</div>
	</div></AnimatedGroup>)}</div>
</DeckFrame>}
