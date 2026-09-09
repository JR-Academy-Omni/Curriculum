import { DeckFrame, Panel, NumberBadge, AnimatedGroup, colors } from '../deck';
const items = [
	['一张系统地图', '把 LLM、RAG、Agent、Evals 与 Governance 连起来'],
	['五种岗位方向', '看职责，不再只看 AI Engineer 这个 title'],
	['Product Thinking', '判断一个 AI 功能为什么值得做'],
	['一条升级主线', '下一步只补最影响交付的能力缺口'],
];
export default function S02_Outcomes(){return <DeckFrame tag="TODAY" title="今晚结束前，你应该看清四件事" accent={colors.yellow}>
	<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,height:'100%'}}>{items.map((x,i)=><AnimatedGroup key={x[0]} delay={.14+i*.08} style={{display:'flex'}}><Panel bg={i===2?'#f4e3fb':colors.white} style={{display:'flex',alignItems:'center',gap:22,flex:1}}><NumberBadge bg={[colors.red,colors.blue,colors.purple,colors.green][i]}>{i+1}</NumberBadge><div><div style={{fontSize:31,fontWeight:900,marginBottom:8}}>{x[0]}</div><div style={{fontSize:22,lineHeight:1.45,color:'#514c48'}}>{x[1]}</div></div></Panel></AnimatedGroup>)}</div>
</DeckFrame>}
