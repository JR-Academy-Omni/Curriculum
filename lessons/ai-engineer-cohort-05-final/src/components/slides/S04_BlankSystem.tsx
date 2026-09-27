import { DeckFrame, Panel, AnimatedGroup, colors, fonts } from '../deck';
export default function S04_BlankSystem(){return <DeckFrame tag="08–23 MIN · SYSTEM MAP" title="一个用户请求，怎样变成可信的业务结果？" accent={colors.blue}>
	<div style={{height:'100%',display:'flex',alignItems:'center',gap:32}}>
		<AnimatedGroup delay={.15}><Panel bg={colors.blue} style={{width:280,textAlign:'center',padding:'42px 24px'}}><div style={{fontFamily:fonts.mono,fontSize:18,fontWeight:800}}>INPUT</div><div style={{fontSize:34,fontWeight:900,marginTop:12}}>User Request</div></Panel></AnimatedGroup>
		<div style={{flex:1,height:330,border:`2px solid ${colors.dark}`,borderRadius:24,boxShadow:`12px 12px 0 ${colors.yellow}`,background:'rgba(255,255,255,.94)',display:'grid',gridTemplateRows:'auto 1fr',padding:28,position:'relative'}}>
			<div style={{fontFamily:fonts.heading,fontSize:42,fontWeight:900,textAlign:'center'}}>中间不是一个 Prompt</div>
			<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,alignItems:'center'}}>{['模型知道什么？','系统可以做什么？','出错以后谁负责？'].map((x,i)=><div key={x} style={{height:126,border:`2px dashed ${colors.dark}`,borderRadius:16,background:[ '#eef7ff','#fff6cc','#f4e8fb'][i],display:'grid',placeItems:'center',padding:18,textAlign:'center',fontSize:22,fontWeight:850,color:'#5d5a56'}}>{x}</div>)}</div>
			<div style={{position:'absolute',left:-30,top:145,width:56,height:56,borderRadius:'50%',border:`2px solid ${colors.dark}`,background:colors.yellow,display:'grid',placeItems:'center',fontSize:30,fontWeight:900}}>→</div>
			<div style={{position:'absolute',right:-30,top:145,width:56,height:56,borderRadius:'50%',border:`2px solid ${colors.dark}`,background:colors.yellow,display:'grid',placeItems:'center',fontSize:30,fontWeight:900}}>→</div>
		</div>
		<AnimatedGroup delay={.28}><Panel bg={colors.green} style={{width:280,textAlign:'center',padding:'42px 24px'}}><div style={{fontFamily:fonts.mono,fontSize:18,fontWeight:800}}>OUTPUT</div><div style={{fontSize:34,fontWeight:900,marginTop:12}}>Business Outcome</div></Panel></AnimatedGroup>
	</div>
</DeckFrame>}
