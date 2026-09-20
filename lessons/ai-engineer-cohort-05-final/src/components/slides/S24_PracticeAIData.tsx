import { DeckFrame, AnimatedGroup, Label, colors, fonts } from '../deck';

const weeks = [
	{week:'W4',title:'Voice AI：Confirmed Transcript',body:'接入录音与 Speech-to-Text，允许护士编辑转写结果，并由人确认后再进入系统。权限失败时保留 manual fallback。',evidence:'Audio / STT Adapter / Editable Transcript / Human Confirm / Failure Tests',color:colors.red},
	{week:'W5',title:'AI-Native Engineering Workspace',body:'把需求转成可执行 Work Graph，用 Wiki、C4/Mermaid、ADR 管理 Living Docs，并用 Hooks 检查文档漂移，沉淀可复用 Skills。',evidence:'Spec-to-Work / Living Docs / Architecture / Hooks / Skills',color:colors.purple},
	{week:'W6',title:'Evaluation Pipeline First',body:'先定义成功标准和失败分类，再建立 versioned golden dataset、deterministic checks、RAGAS 与人工 rubric。',evidence:'Dataset / Candidate Interface / Baseline / Threshold / Eval Report',color:colors.blue},
	{week:'W7',title:'Policy RAG from Scratch',body:'不用 RAG Framework，亲手实现 chunking、metadata、embedding、vector search、grounded draft、citations 和 no-answer fallback。每一步都复用 W6 测试集。',evidence:'Corpus / Retrieval / Citations / No-answer / Same Eval Pipeline',color:colors.green},
] as const;

export default function S24_PracticeAIData(){return <DeckFrame tag="COHORT 07 · PRACTICE W4–W7" title="第一次接入 AI，然后先评估再做 RAG" subtitle="W4 只解决可信输入，W5 建立长期可维护的工程工作区。W6 先把评估标准固定，W7 才开始实现检索系统。" accent={colors.blue} titleSize={46}>
	<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18,height:'100%'}}>{weeks.map((w,i)=><AnimatedGroup key={w.week} delay={.08+i*.07} style={{display:'flex'}}><div style={{flex:1,background:i===3?colors.dark:'#fff',color:i===3?colors.white:colors.dark,border:`2px solid ${colors.dark}`,borderRadius:20,padding:'18px 22px',borderLeft:`10px solid ${w.color}`,display:'grid',gridTemplateColumns:'78px 1fr',gap:16,alignItems:'start'}}>
		<div><Label bg={w.color} color={w.color===colors.green?colors.dark:colors.white}>{w.week}</Label><div style={{fontFamily:fonts.mono,fontSize:12,fontWeight:800,color:i===3?'#bbb':'#777',marginTop:12}}>PRACTICE<br/>LIVE</div></div>
		<div><div style={{fontFamily:fonts.heading,fontSize:26,fontWeight:900,lineHeight:1.12}}>{w.title}</div><div style={{fontSize:17.5,lineHeight:1.38,color:i===3?'#e3e3e6':'#423d39',marginTop:10,fontWeight:650}}>{w.body}</div><div style={{marginTop:13,paddingTop:11,borderTop:`2px solid ${i===3?'#3b4057':'#e8e1da'}`}}><span style={{fontFamily:fonts.mono,fontSize:12,fontWeight:900,color:w.color}}>DELIVERY EVIDENCE</span><div style={{fontSize:15.5,lineHeight:1.3,fontWeight:800,marginTop:5}}>{w.evidence}</div></div></div>
	</div></AnimatedGroup>)}</div>
</DeckFrame>}
