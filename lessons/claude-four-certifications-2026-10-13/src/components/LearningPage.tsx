import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Slide, fonts, radii, assetPath } from './ui';
import { editorial as e } from '../styles/editorial-theme';
import { sources, type TalkSlide } from '../data/talk';

export default function LearningPage({page}:{page:TalkSlide}){
 const [official,setOfficial]=useState(false);
 const [view,setView]=useState<'outline'|'learning'>('outline');
 const reduced=useReducedMotion();
 const screenshot=official?page.learningScreenshot:page.certScreenshot;
 return <Slide bg={e.paper} style={{position:'relative',fontFamily:fonts.body,color:e.ink}}>
  <style>{`.course-source-button:focus-visible{outline:3px solid ${e.accent};outline-offset:3px}@media print{.course-source-button{display:none!important}}`}</style>
  <div style={{position:'absolute',left:105,top:78,width:1390,height:725,display:'flex',flexDirection:'column',gap:16}}>
   <div style={{fontFamily:fonts.mono,fontSize:16,letterSpacing:2,color:e.muted}}>{page.kicker}</div>
   <h1 style={{fontFamily:e.heading,fontSize:43,fontWeight:500,lineHeight:1.2,margin:0}}>{page.title}</h1>
   <p style={{fontSize:24,lineHeight:1.5,color:e.muted,margin:0}}>{view==='outline'?(page.outlineSub??'官方英文考试领域与权重 · 中文说明帮助理解'):page.sub}</p>
   <div role="group" aria-label="选择认证介绍内容" style={{display:'flex',gap:12}}>{(['outline','learning'] as const).map(value=><button className="course-source-button" key={value} aria-pressed={view===value} onClick={()=>setView(value)} style={{fontFamily:fonts.body,fontSize:20,padding:'9px 19px',border:`1px solid ${e.line}`,borderRadius:radii.pill,background:view===value?e.ink:e.surface,color:view===value?e.surface:e.ink,cursor:'pointer'}}>{value==='outline'?'官方英文考试大纲':'适合谁 · 怎么学'}</button>)}</div>
   {view==='outline'?<motion.div key="outline" initial={reduced?false:{opacity:.4}} animate={{opacity:1}} transition={{duration:.2}} style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12,alignContent:'start',flex:1,minHeight:0}}>{page.examDomains?.map((domain,i)=><div key={domain.english} style={{padding:'13px 18px',border:`1px solid ${e.line}`,borderRadius:radii.card,background:e.surface,minHeight:94}}><div style={{display:'flex',gap:15,alignItems:'start',justifyContent:'space-between'}}><h2 style={{fontSize:22,fontWeight:650,lineHeight:1.25,margin:0}}>{i+1}. {domain.english}</h2><span style={{flexShrink:0,fontSize:23,color:e.accent,fontWeight:700}}>{domain.weight}%</span></div><p style={{fontSize:20,lineHeight:1.4,margin:'9px 0 0',color:e.muted,whiteSpace:'pre-line'}}>{domain.chinese}</p></div>)}</motion.div>:
   <div style={{display:'grid',gridTemplateColumns:'560px 1fr',gap:45,flex:1,minHeight:0,alignItems:'center'}}>
    <div>{page.items.map((v,i)=>{const [label,...rest]=v.split('｜');return <div key={v} style={{padding:'11px 0',borderBottom:`1px solid ${e.line}`}}><h2 style={{fontSize:20,color:e.accent,margin:'0 0 8px'}}>0{i+1} · {label}</h2><p style={{fontSize:22,lineHeight:1.5,margin:0}}>{rest.join('｜')}</p></div>})}</div>
    <figure style={{margin:0,display:'flex',flexDirection:'column',gap:12}}>
     <div role="group" aria-label="选择学习内容来源" style={{display:'flex',gap:10}}>{[false,true].map(value=><button className="course-source-button" key={String(value)} aria-pressed={official===value} onClick={()=>setOfficial(value)} style={{fontFamily:fonts.body,fontSize:20,padding:'10px 18px',border:`1px solid ${e.line}`,borderRadius:radii.pill,background:official===value?e.ink:e.surface,color:official===value?e.surface:e.ink,cursor:'pointer'}}>{value?'官方课程':'考证匠对应课程'}</button>)}</div>
     <div style={{border:`1px solid ${e.line}`,borderRadius:radii.panel,overflow:'hidden',background:e.surface}}><div style={{padding:'11px 18px',fontSize:16,color:e.muted,borderBottom:`1px solid ${e.line}`}}>{official?'Claude Academy · 官方公开课程':'考证匠 · 对应认证的学习目录与第一章'}</div><motion.img key={screenshot} initial={reduced?false:{opacity:.4}} animate={{opacity:1}} transition={{duration:.2}} src={assetPath(screenshot!)} alt={official?'官方公开课程实际页面截图':page.title+'：考证匠真实课程页面截图'} style={{width:'100%',display:'block',height:290,objectFit:'contain'}}/></div>
     <figcaption style={{fontSize:16,color:e.muted,lineHeight:1.45}}>{official?'Claude Academy · 公开课程不是职业认证考试':'jiangren.com.au · 平台课程与练习，不是官方真题'}<br/>2026-10-13 实际网页截图</figcaption>
     <div style={{display:'flex',gap:25,fontSize:20}}><a href={official?page.learningUrl:page.certUrl} target="_blank" rel="noreferrer" style={{color:e.ink,fontWeight:700}}>{official?'打开官方课程':'打开这门考证匠课程'} ↗</a><a href={sources[page.sourceKey]} target="_blank" rel="noreferrer" style={{color:e.accent}}>官方认证说明 ↗</a></div>
    </figure>
   </div>}
  </div>
  <div style={{position:'absolute',left:105,right:105,bottom:36,display:'flex',justifyContent:'space-between',fontSize:16,color:e.muted}}>{view==='outline'?<a href={page.examGuideUrl} target="_blank" rel="noreferrer" style={{color:e.muted}}>打开官方英文 Exam Guide ↗ · July 2026 · 2026-10-13 核验</a>:<span>人群与用途：按官方角色范围举例</span>}<span>N 查看讲师备注</span></div>
 </Slide>;
}
