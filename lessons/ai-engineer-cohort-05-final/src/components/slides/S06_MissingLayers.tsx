import { DeckFrame, Panel, AnimatedGroup, colors } from '../deck';
const rows=[['Product + Model','功能能跑，但没人采用；模型成本失控'],['Context + RAG','长对话丢约束；回答没有可靠依据'],['Tools + Agent','能调用系统，却可能越权或停不下来'],['Memory + Harness','记住错误信息；失败时无法恢复和追踪'],['Evaluation + Governance','无法证明质量；也没人承担发布责任']];
export default function S06_MissingLayers(){return <DeckFrame tag="FAILURE MODES" title="拿掉任何一层，系统都会用不同方式失败" accent={colors.red} titleSize={54}>
	<div style={{display:'grid',gridTemplateColumns:'1fr',gap:13,height:'100%',alignContent:'center'}}>{rows.map((r,i)=><AnimatedGroup key={r[0]} delay={.12+i*.07}><Panel bg={i%2?'#fff':'#fff8f2'} style={{display:'grid',gridTemplateColumns:'290px 1fr',gap:28,padding:'16px 22px',borderLeft:`12px solid ${[colors.yellow,colors.blue,colors.orange,colors.purple,colors.red][i]}`}}><div style={{fontSize:24,fontWeight:900}}>{r[0]}</div><div style={{fontSize:23,lineHeight:1.35}}>{r[1]}</div></Panel></AnimatedGroup>)}</div>
</DeckFrame>}
