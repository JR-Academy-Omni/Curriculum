import { DeckFrame, Panel, Label, AnimatedGroup, colors, fonts } from './deck';
import { motion } from 'framer-motion';
export type Block = readonly [string, string];
export interface LessonPageProps { tag: string; title: string; subtitle: string; mode: string; blocks: readonly Block[]; footer: string; }
const accents = [colors.red, colors.blue, colors.green, colors.purple, colors.orange, colors.yellow, colors.blue];
function Text({text}: {text:string}) { return <div style={{whiteSpace:'pre-line',fontSize:25,lineHeight:1.48,color:'#403b37',marginTop:14}}>{text}</div>; }
export default function LessonPage({tag,title,subtitle,mode,blocks,footer}:LessonPageProps){
 return <DeckFrame tag={tag} title={title} subtitle={subtitle} titleSize={54} accent={mode==='exercise'?colors.blue:colors.red}>
  <div data-lesson-content style={{height:'100%',display:'flex',flexDirection:'column',gap:24}}>
   <div style={{flex:1,minHeight:0}}>
    {mode==='hero' ? <div style={{display:'grid',gridTemplateColumns:'1.2fr .8fr',gap:28,height:'100%'}}>
     <AnimatedGroup delay={.14}><Panel bg={colors.yellow} style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:38}}><Label>本课交付</Label><h2 style={{fontSize:38,lineHeight:1.24,marginTop:24}}>{blocks[0][0]}</h2><Text text={blocks[0][1]}/></Panel></AnimatedGroup>
     <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:34}}>{blocks.slice(1).map(([h,t],i)=><AnimatedGroup key={h} delay={.24+i*.12}><h2 style={{fontSize:29,borderBottom:`6px solid ${accents[i]}`,paddingBottom:12}}>{h}</h2><Text text={t}/></AnimatedGroup>)}</div>
    </div> : mode==='adlc' ? <Panel style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',gap:30}}>
     <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:22,minHeight:120,paddingBottom:6}}>{blocks.slice(0,4).map(([h,t],i)=><AnimatedGroup key={h} delay={.12+i*.15}><Label bg={accents[i]} color={colors.dark}>{i+1} · {h}</Label><Text text={t}/></AnimatedGroup>)}</div>
     <motion.div animate={{backgroundPosition:['0px 0px','48px 0px']}} transition={{duration:1.3,repeat:Infinity,ease:'linear'}} style={{height:5,backgroundImage:`repeating-linear-gradient(90deg,${colors.red} 0 24px,transparent 24px 48px)`,backgroundSize:'48px 5px'}}/>
     <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22,minHeight:120,paddingBottom:6}}>{blocks.slice(4).map(([h,t],i)=><AnimatedGroup key={h} delay={.7+i*.15}><Label bg={accents[i+4]} color={colors.dark}>{i+5} · {h}</Label><Text text={t}/></AnimatedGroup>)}</div>
     <div style={{fontSize:24,fontWeight:800,color:colors.red}}>↻ 发现差距，回到问题或计划；由人决定下一次修改。</div>
    </Panel> : mode==='flow' ? <Panel style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',gap:42}}>
     <div style={{display:'flex',alignItems:'center',gap:15}}>{blocks.map(([h,t],i)=><div key={h} style={{display:'contents'}}><AnimatedGroup delay={.15+i*.22} style={{flex:1}}><div style={{background:accents[i],borderRadius:20,padding:'24px 18px',border:`2px solid ${colors.dark}`,height:170}}><h2 style={{fontSize:30}}>{h}</h2><div style={{fontSize:23,lineHeight:1.4,marginTop:18}}>{t}</div></div></AnimatedGroup>{i<blocks.length-1&&<span style={{fontSize:38}}>→</span>}</div>)}</div>
     <div style={{fontSize:27,lineHeight:1.5,borderLeft:`8px solid ${colors.red}`,paddingLeft:24}}>失败与拒绝分支同样属于产品契约。<br/>确认之前，草稿不能变成系统事实。</div>
    </Panel> : mode==='timeline' ? <div style={{height:'100%',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:28}}>{blocks.map(([h,t],i)=><AnimatedGroup key={h} delay={.15+i*.16}><Panel style={{height:'100%',borderTop:`12px solid ${accents[i]}`,display:'flex',flexDirection:'column',justifyContent:'center'}}><div style={{fontFamily:fonts.mono,fontSize:22,color:'#746a60'}}>0{i+1}</div><h2 style={{fontSize:32,lineHeight:1.3,marginTop:20}}>{h}</h2><Text text={t}/></Panel></AnimatedGroup>)}</div>
    : mode==='exercise' ? <div style={{height:'100%',display:'grid',gridTemplateColumns:'310px 1fr',gap:28}}>
     <Panel bg={colors.blue} style={{display:'flex',flexDirection:'column',justifyContent:'center',height:'100%'}}><div style={{fontSize:28,fontWeight:900}}>现在动手</div><div style={{fontFamily:fonts.heading,fontSize:72,fontWeight:900,marginTop:22}}>{tag.match(/(\d+) MIN/)?.[1] ?? '10'}<span style={{fontSize:27}}> min</span></div><div style={{fontSize:23,lineHeight:1.5,marginTop:24}}>填写工作单<br/>再与同学核对<br/>留下实际证据</div></Panel>
     <Panel style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',gap:24}}>{blocks.map(([h,t],i)=><AnimatedGroup key={h} delay={.12+i*.1}><div style={{display:'grid',gridTemplateColumns:'160px 1fr',gap:20}}><b style={{fontSize:25,color:colors.dark}}>{h}</b><div style={{fontSize:25,lineHeight:1.4}}>{t}</div></div></AnimatedGroup>)}</Panel>
    </div> : mode==='grid' ? <div style={{display:'grid',gridTemplateColumns:blocks.length===6?'repeat(3,1fr)':'repeat(2,1fr)',gridTemplateRows:blocks.length===6?'1fr 1fr':'1fr 1fr',gap:22,height:'100%'}}>{blocks.map(([h,t],i)=><AnimatedGroup key={h} delay={.12+i*.09}><Panel style={{height:'100%',padding:24}}><h2 style={{fontSize:28,lineHeight:1.25,borderBottom:`5px solid ${accents[i]}`,paddingBottom:10}}>{h}</h2><Text text={t}/></Panel></AnimatedGroup>)}</div>
    : <Panel style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',gap:blocks.length>4?20:30}}>{blocks.map(([h,t],i)=><AnimatedGroup key={h} delay={.12+i*.1}><div style={{display:'grid',gridTemplateColumns:'230px 1fr',gap:24,alignItems:'start'}}><div style={{fontSize:27,fontWeight:900,borderLeft:`7px solid ${accents[i]}`,paddingLeft:17}}>{h}</div><div style={{fontSize:25,lineHeight:1.45}}>{t}</div></div></AnimatedGroup>)}</Panel>}
   </div>
   <div data-lesson-footer style={{fontSize:21,lineHeight:1.4,fontWeight:750,padding:'10px 18px',borderRadius:12,background:'#f9dfc7',color:'#463c32'}}>{footer}</div>
  </div>
 </DeckFrame>;
}
