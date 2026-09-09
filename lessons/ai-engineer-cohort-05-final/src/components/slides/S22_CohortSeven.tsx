import { DeckFrame, AnimatedGroup, Label, colors, fonts } from '../deck';

const support = [
	['THEORY LIVE', '讲原理、系统关系、设计判断和面试中的 why', colors.purple],
	['RECORDED VIDEO', '继承仍然有效的第五期内容，补齐稳定知识', colors.blue],
	['INTERACTIVE LAB', '练习单项能力，再带回实践主线', colors.green],
] as const;

const stages = ['W1–W3 产品与 Workflow', 'W4–W5 首次接入 AI', 'W6–W7 Eval + RAG', 'W8–W10 Agent + Memory', 'W11–W13 Production'];

export default function S22_CohortSeven(){return <DeckFrame tag="COHORT 07 · PRACTICE-LED" title="第七期实践主线：Lightman + Jason 带着做到 Production" subtitle="第五期原本就是每周两场；第七期把其中一场明确变成持续工程交付，而不是零散 workshop。" accent={colors.red} titleSize={46}>
	<div style={{display:'grid',gridTemplateRows:'1.35fr .8fr',gap:22,height:'100%'}}>
		<AnimatedGroup delay={.1} style={{display:'flex'}}>
			<div style={{flex:1,border:`2px solid ${colors.dark}`,borderRadius:22,boxShadow:`11px 11px 0 ${colors.yellow}`,background:colors.dark,color:colors.white,padding:'25px 30px',display:'grid',gridTemplateRows:'auto 1fr auto',gap:20}}>
				<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><Label bg={colors.red}>13 场 PRACTICE LIVE</Label><div style={{fontFamily:fonts.mono,fontSize:18,fontWeight:800,color:colors.yellow}}>LEAD INSTRUCTORS · LIGHTMAN + JASON</div></div>
				<div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:12,alignItems:'stretch'}}>{stages.map((stage,i)=><div key={stage} style={{background:i===4?colors.green:colors.white,color:colors.dark,borderRadius:14,padding:'17px 15px',display:'flex',flexDirection:'column',justifyContent:'space-between',fontSize:18,fontWeight:900,lineHeight:1.3}}><span style={{fontFamily:fonts.mono,fontSize:14,color:'#6a625a'}}>0{i+1}</span><span>{i===0?'W1–W3 AI 产品与 Workflow':stage}</span></div>)}</div>
				<div style={{fontFamily:fonts.heading,fontSize:29,fontWeight:900}}>每一周接着上一次的工程结果升级，最后形成可评估、可治理、可发布的 Enterprise AI 系统。</div>
			</div>
		</AnimatedGroup>
		<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18}}>{support.map((r,i)=><AnimatedGroup key={r[0]} delay={.22+i*.09}><div style={{height:'100%',border:`2px solid ${colors.dark}`,borderRadius:16,background:'#fff',borderTop:`10px solid ${r[2]}`,padding:'17px 20px'}}><div style={{fontFamily:fonts.mono,fontSize:15,fontWeight:800}}>{r[0]}</div><div style={{fontSize:20,lineHeight:1.35,fontWeight:800,marginTop:10}}>{r[1]}</div></div></AnimatedGroup>)}</div>
	</div>
</DeckFrame>}
