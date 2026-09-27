import { DeckFrame, Panel, Label, AnimatedGroup, colors, fonts } from '../deck';
export default function S21_CohortFive(){return <DeckFrame tag="101–114 MIN · COHORT REVIEW" title="第五期建立了完整知识面，也暴露了交付节奏的问题" accent={colors.red} titleSize={52}>
	<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:34,height:'100%'}}>
		<AnimatedGroup delay={.14} style={{display:'flex'}}><Panel bg="#e6f9dc" style={{flex:1,borderTop:`14px solid ${colors.green}`}}><Label bg={colors.green} color="#000">已经完成</Label><div style={{fontFamily:fonts.heading,fontSize:34,fontWeight:900,margin:'24px 0'}}>完整 AI Engineering 知识覆盖</div>{['Context、RAG 与 MCP','Agent、Memory 与 Harness','Model、Evaluation 与 Governance'].map(x=><div key={x} style={{fontSize:25,fontWeight:750,padding:'14px 0',borderBottom:'2px solid #000'}}>{x}</div>)}</Panel></AnimatedGroup>
		<AnimatedGroup delay={.26} style={{display:'flex'}}><Panel bg="#ffe3e3" style={{flex:1,borderTop:`14px solid ${colors.red}`}}><Label bg={colors.red}>暴露缺口</Label><div style={{fontFamily:fonts.heading,fontSize:34,fontWeight:900,margin:'24px 0'}}>知识、项目与 Production 判断没有稳定连接</div>{['Workshop 分散在不同主题','学生需要自己推导前置关系','结课时难判断系统完成到哪一层'].map(x=><div key={x} style={{fontSize:25,fontWeight:750,padding:'14px 0',borderBottom:'2px solid #000'}}>{x}</div>)}</Panel></AnimatedGroup>
	</div>
</DeckFrame>}
