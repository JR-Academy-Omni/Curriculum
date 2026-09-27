import { DeckFrame, Panel, Label, AnimatedGroup, colors, fonts } from '../deck';
const failures=['引用已经失效的旧政策','长对话后忽略关键限制','调用了不该调用的写入工具','记住用户要求删除的信息','模型费用持续上升'];
export default function S18_Incident(){return <DeckFrame tag="70–91 MIN · INCIDENT" title="Policy Assistant 的 Demo 很好，上线后同时出现五个问题" bg={colors.dark} accent={colors.red} titleSize={52}>
	<div style={{display:'grid',gridTemplateColumns:'1.2fr .8fr',gap:34,height:'100%'}}>
		<AnimatedGroup delay={.14} style={{display:'flex'}}><Panel bg="#fff" style={{flex:1,borderTop:`14px solid ${colors.red}`}}><Label bg={colors.red}>PRODUCTION INCIDENT</Label><div style={{display:'grid',gap:13,marginTop:24}}>{failures.map((x,i)=><div key={x} style={{display:'flex',gap:18,alignItems:'center',fontSize:25,fontWeight:800,padding:'13px 16px',background:i%2?'#fff1e7':'#fff',borderBottom:'3px solid #000'}}><span style={{fontFamily:fonts.mono,color:'#b42318'}}>0{i+1}</span>{x}</div>)}</div></Panel></AnimatedGroup>
		<AnimatedGroup delay={.28} style={{display:'flex',alignItems:'center'}}><div style={{background:colors.yellow,border:'4px solid #000',boxShadow:`10px 10px 0 ${colors.red}`,padding:36,color:'#000'}}><div style={{fontFamily:fonts.mono,fontWeight:800,fontSize:18}}>TEAM RESPONSE</div><div style={{fontFamily:fonts.heading,fontWeight:900,fontSize:48,lineHeight:1.15,marginTop:24}}>“换一个更强的模型就好了。”</div><div style={{fontSize:27,fontWeight:800,marginTop:30}}>你同意吗？</div></div></AnimatedGroup>
	</div>
</DeckFrame>}
