import BackgroundFX from './BackgroundFX';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Slide, fonts, colors, radii } from './ui';
import { editorial as e } from '../styles/editorial-theme';
import { type TalkSlide, sources } from '../data/talk';

const palette=[colors.yellow,colors.blue,colors.green,colors.purple];
export default function MotionStory({page}:{page:TalkSlide}){
 const reduced=useReducedMotion();
 const [run,setRun]=useState(0);
 const [playing,setPlaying]=useState(true);
 const [progress,setProgress]=useState(reduced?1:0);
 const editorial=page.visual==='anthropic';
 const ink=editorial?e.ink:colors.dark;
 const paper=editorial?e.paper:colors.warmBg;
 const accent=editorial?e.accent:colors.red;
 const chart=page.mode==='bars';
 const map=page.mode==='roles';
 useEffect(()=>{if(reduced||!playing){setProgress(1);return}let frame:number;const start=performance.now();setProgress(0);const tick=(now:number)=>{const t=Math.min((now-start)/1000,1);setProgress(t);if(t<1)frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame)},[run,reduced,playing]);
 const reveal=(index:number)=>reduced||!playing?1:Math.min(1,Math.max(0,(progress*1.7-index*.22)*2));
 const parts=page.items.map(v=>{const [label,...rest]=v.split('｜');return{label,detail:rest.join('｜')}});
 return <Slide bg={paper} style={{position:'relative',fontFamily:fonts.body,color:ink}}>
  {page.ambient&&<BackgroundFX dark={page.mode==='dark'}/>}
  <style>{`.motion-control:focus-visible{outline:3px solid ${accent};outline-offset:4px}.motion-print-number{display:none}@media print{.motion-control,.motion-screen-number,.motion-dot{display:none!important}.motion-print-number{display:inline!important}.motion-node{opacity:1!important;transform:none!important}.motion-path{stroke-dasharray:none!important;stroke-dashoffset:0!important}.motion-data-bar{width:var(--final-width)!important}.motion-line{width:100%!important}}`}</style>
  <div style={{position:'absolute',left:105,top:78,width:1390,height:725,display:'flex',flexDirection:'column',gap:21}}>
   <div style={{fontSize:16,fontFamily:fonts.mono,letterSpacing:2}}>{page.kicker}</div>
   <h1 style={{fontFamily:editorial?e.heading:fonts.heading,fontSize:55,lineHeight:1.18,fontWeight:editorial?500:800,margin:0}}>{page.title}</h1>
   <p style={{fontSize:24,lineHeight:1.5,margin:0,color:editorial?e.muted:ink}}>{page.sub}</p>
   <div style={{flex:1,minHeight:0,position:'relative'}}>
    {chart?<div style={{paddingTop:12}}>{page.items.map((v,i)=>{const value=page.values?.[i]??0;const p=reduced||!playing?1:1-Math.pow(1-progress,3);return <div key={v} style={{display:'grid',gridTemplateColumns:'560px 1fr 135px',gap:22,alignItems:'center',marginBottom:27}}><span style={{fontSize:24,lineHeight:1.35,fontWeight:700}}>{parts[i].label}</span><div style={{height:62,background:colors.white,borderRadius:radii.card,overflow:'hidden'}}><div className="motion-data-bar" style={{'--final-width':`${value/1400*100}%`,width:`${value/1400*100*p}%`,height:'100%',borderRadius:radii.card,background:palette[i]} as React.CSSProperties}/></div><span style={{fontSize:31,fontFamily:fonts.mono,fontWeight:700}}><span className="motion-screen-number">{Math.round(value*p).toLocaleString()}</span><span className="motion-print-number">{value.toLocaleString()}</span></span></div>})}<p style={{fontSize:18}}>单位：道 · 同一比例尺，上限1,400 · 四证题池合计4,138道</p></div>
    :map?<div style={{position:'relative',height:445}}>
     <svg aria-hidden viewBox="0 0 1390 445" style={{position:'absolute',inset:0,width:'100%',height:'100%'}}>{[[160,90],[940,90],[160,305],[940,305]].map(([x,y],i)=><motion.path className="motion-path" key={i} d={`M695 220 Q${x<695?560:830} ${y+50} ${x+145} ${y+60}`} fill="none" stroke={accent} strokeWidth="3" initial={false} animate={{pathLength:reveal(i)}}/>)}</svg>
     <div style={{position:'absolute',left:565,top:166,width:260,height:110,borderRadius:55,background:ink,color:paper,display:'grid',placeItems:'center',fontFamily:e.heading,fontSize:46}}>Claude</div>
     {parts.map((v,i)=>{const [x,y]=[[160,15],[940,15],[160,245],[940,245]][i];return <div className="motion-node" key={i} style={{position:'absolute',left:x,top:y,width:290,height:195,background:editorial?e.surface:palette[i],border:`1px solid ${editorial?e.line:ink}`,borderRadius:radii.panel,padding:22,opacity:reveal(i),transform:`translateY(${(1-reveal(i))*24}px)`}}><h2 style={{fontSize:24,margin:'0 0 10px',fontFamily:editorial?e.heading:fonts.heading}}>{v.label}</h2><p style={{fontSize:23,lineHeight:1.45,margin:0}}>{v.detail}</p></div>})}
    </div>:<div style={{position:'relative',height:425,paddingTop:18}}>
     <div style={{position:'absolute',top:63,left:125,right:125,height:3,background:editorial?e.line:colors.white}}><div className="motion-line" style={{width:`${progress*100}%`,height:3,background:accent}}/></div>
     <div className="motion-dot" aria-hidden style={{position:'absolute',left:125+1140*progress,top:56,width:17,height:17,background:accent,borderRadius:'50%'}}/>
     <div style={{display:'grid',gridTemplateColumns:`repeat(${parts.length},1fr)`,gap:24}}>{parts.map((v,i)=><div className="motion-node" key={i} style={{opacity:reveal(i),transform:`translateY(${(1-reveal(i))*24}px)`}}><div style={{position:'relative',zIndex:1,margin:'12px auto 33px',width:70,height:70,borderRadius:'50%',display:'grid',placeItems:'center',background:editorial?e.clay:palette[i],border:`2px solid ${ink}`,fontFamily:fonts.mono,fontSize:25,fontWeight:700}}>0{i+1}</div><div style={{minHeight:205,padding:24,background:editorial?e.surface:colors.white,border:`1px solid ${editorial?e.line:ink}`,borderRadius:radii.panel}}><h2 style={{fontSize:page.items[0]?.startsWith('Claude Certified')?24:27,lineHeight:1.3,margin:'0 0 18px',fontFamily:editorial?e.heading:fonts.heading}}>{v.label}</h2><p style={{fontSize:24,lineHeight:1.6,margin:0}}>{v.detail}</p></div></div>)}</div>
    </div>}
   </div>
   <div style={{display:'flex',alignItems:'center',gap:15}}><button className="motion-control" onClick={()=>{setProgress(0);setPlaying(true);setRun(v=>v+1)}} style={{border:'none',borderRadius:radii.label,background:ink,color:paper,fontFamily:fonts.body,fontSize:20,padding:'11px 22px',cursor:'pointer'}}>重播动画</button><button className="motion-control" onClick={()=>{setProgress(1);setPlaying(false)}} style={{border:`1px solid ${ink}`,borderRadius:radii.label,background:paper,color:ink,fontFamily:fonts.body,fontSize:20,padding:'10px 22px',cursor:'pointer'}}>显示完整图</button><span role="status" style={{fontSize:17,color:editorial?e.muted:ink}}>{progress>=1?'完整图已呈现':'动画展开中'}</span></div>
  </div>
  <div style={{position:'absolute',left:105,right:105,bottom:36,display:'flex',justifyContent:'space-between',fontSize:16}}><a href={sources[page.sourceKey]} target="_blank" rel="noreferrer" style={{color:ink}}>来源：{page.sourceLabel??(chart?'生产题库快照':'Anthropic 官方 · 讲师归纳')} ↗</a><span>N 查看讲师备注</span></div>
 </Slide>;
}
