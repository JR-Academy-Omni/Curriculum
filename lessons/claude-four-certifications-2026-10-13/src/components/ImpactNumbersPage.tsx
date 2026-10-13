import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Slide, fonts, radii } from './ui';
import { editorial as e } from '../styles/editorial-theme';
import { sources, type TalkSlide } from '../data/talk';

function BigNumber({value}:{value:number}) {
 const reduced=useReducedMotion();
 const [shown,setShown]=useState(reduced?value:0);
 useEffect(()=>{
  if(reduced){setShown(value);return;}
  let frame:number;const start=performance.now();
  const tick=(now:number)=>{const p=Math.min(1,(now-start)/700);setShown(Math.round(value*(1-Math.pow(1-p,3))));if(p<1)frame=requestAnimationFrame(tick);};
  frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame);
 },[value,reduced]);
 return <><span className="impact-screen" aria-hidden>{shown.toLocaleString()}</span><span className="impact-print">{value.toLocaleString()}</span><span style={{position:'absolute',width:1,height:1,overflow:'hidden',clipPath:'inset(50%)'}}>{value.toLocaleString()}</span></>;
}
export default function ImpactNumbersPage({page}:{page:TalkSlide}) {
 const counts=page.visual==='question-impact';
 const reduced=useReducedMotion();
 return <Slide bg={e.paper} style={{position:'relative',fontFamily:fonts.body,color:e.ink}}>
  <style>{`.impact-print{display:none}@media print{.impact-screen{display:none!important}.impact-print{display:inline!important}}`}</style>
  <div style={{position:'absolute',left:105,top:78,width:1390,height:725,display:'flex',flexDirection:'column',gap:18}}>
   <div style={{fontFamily:fonts.mono,fontSize:16,letterSpacing:2,color:e.muted}}>{page.kicker}</div>
   <h1 style={{fontFamily:e.heading,fontSize:49,fontWeight:500,lineHeight:1.2,margin:0}}>{counts?'题量，直接看数字':page.title}</h1>
   {counts?<>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:25,marginTop:10}}>
     {[{value:78337,label:'全平台练习题',detail:'354 门已发布认证',dark:false},{value:4138,label:'Claude 四证练习题',detail:'四项题池合计',dark:true}].map(stat=><motion.div key={stat.value} initial={reduced?false:{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.25}} style={{padding:'25px 32px 28px',borderRadius:radii.panel,background:stat.dark?e.ink:e.surface,color:stat.dark?e.paper:e.ink,border:`1px solid ${e.line}`}}><div style={{fontSize:24}}>{stat.label}</div><div style={{fontFamily:fonts.heading,fontWeight:800,fontSize:125,lineHeight:1.2,letterSpacing:-6,fontVariantNumeric:'tabular-nums',color:stat.dark?e.paper:e.accent}}><BigNumber value={stat.value}/><span style={{fontSize:24,letterSpacing:0,marginLeft:12}}>道</span></div><div style={{fontSize:21,opacity:.8}}>{stat.detail}</div></motion.div>)}
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:15,marginTop:6}}>{page.items.map((item,i)=><div key={item} style={{padding:'20px 22px',borderRadius:radii.card,border:`1px solid ${e.line}`,background:e.surface}}><div style={{fontSize:58,fontFamily:fonts.heading,fontWeight:800,lineHeight:1.15,color:e.accent,fontVariantNumeric:'tabular-nums'}}><BigNumber value={page.values?.[i]??0}/></div><p style={{fontSize:21,lineHeight:1.4,margin:'13px 0 0',fontWeight:600}}>{item.split('｜')[0]}</p></div>)}</div>
    <p style={{fontSize:20,color:e.muted,margin:0}}>2026-10-13 生产题库快照 · 平台练习题，并非官方真题；各认证题池之间未做内容语义去重。</p>
   </>:<>
    <div style={{display:'flex',alignItems:'center',gap:34,marginTop:12,padding:'26px 35px',borderRadius:radii.panel,background:e.ink,color:e.paper}}>
     <div style={{flex:1}}><div style={{fontSize:23,color:e.paper,opacity:.8}}>澳洲目标岗位 · 年薪</div><motion.div initial={reduced?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.3}} style={{display:'flex',alignItems:'baseline',gap:16,fontFamily:fonts.heading,fontWeight:800,lineHeight:1.1}}><span style={{fontSize:40}}>A$</span><span style={{fontSize:135,letterSpacing:-7}}>150–200</span><span style={{fontSize:72}}>k</span></motion.div></div>
     <div style={{width:280,borderLeft:`1px solid ${e.muted}`,paddingLeft:30}}><p style={{fontSize:27,lineHeight:1.5,margin:0}}>AI 开发<br/>解决方案<br/>企业 AI 咨询</p><p style={{fontSize:18,opacity:.75,lineHeight:1.5,margin:'15px 0 0'}}>目标薪资区间<br/>实际看岗位和经验</p></div>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22,marginTop:6}}>{page.items.slice(0,3).map((item,i)=>{const [label,...detail]=item.split('｜');return <div key={item} style={{background:e.surface,border:`1px solid ${e.line}`,borderRadius:radii.card,padding:'22px 26px'}}><div style={{fontSize:18,color:e.accent,fontFamily:fonts.mono,marginBottom:10}}>0{i+1}</div><h2 style={{fontSize:28,margin:'0 0 12px'}}>{label}</h2><p style={{fontSize:23,lineHeight:1.5,margin:0,color:e.muted}}>{detail.join('｜')}</p></div>})}</div>
    <div style={{fontSize:23,lineHeight:1.5,padding:'15px 0',borderTop:`1px solid ${e.line}`}}>全球咨询伙伴认证计划：<strong>Accenture · Deloitte · PwC</strong></div>
   </>}
  </div>
  <div style={{position:'absolute',left:105,right:105,bottom:36,display:'flex',justifyContent:'space-between',fontSize:16,color:e.muted}}><a href={sources[page.sourceKey]} target="_blank" rel="noreferrer" style={{color:'inherit'}}>来源：{page.sourceLabel} ↗</a><span>{counts?'题池数量以后可能变化':'认证与相关经验一起加分 · 年薪为讲师目标区间'}</span></div>
 </Slide>;
}
