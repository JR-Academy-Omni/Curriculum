import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Slide, fonts, radii, assetPath } from './ui';
import { editorial as e } from '../styles/editorial-theme';
import type { TalkSlide } from '../data/talk';
export default function ExamInterfacePage({page}:{page:TalkSlide}){
 const [portal,setPortal]=useState(!!page.examPortalImage);const reduced=useReducedMotion();
 const screenshot=portal?page.examPortalImage:page.examDemoImage;
 return <Slide bg={e.paper} style={{position:'relative',color:e.ink,fontFamily:fonts.body}}>
  <style>{`.pearson-button:focus-visible{outline:3px solid ${e.accent};outline-offset:3px}@media print{.pearson-button{display:none!important}}`}</style>
  <div style={{position:'absolute',left:105,top:78,width:1390,height:725,display:'flex',flexDirection:'column',gap:18}}>
   <div style={{fontFamily:fonts.mono,fontSize:16,letterSpacing:2,color:e.muted}}>{page.kicker}</div>
   <h1 style={{fontFamily:e.heading,fontSize:55,fontWeight:500,lineHeight:1.15,margin:0}}>{page.title}</h1>
   <p style={{fontSize:24,color:e.muted,lineHeight:1.5,margin:0}}>{page.sub}</p>
   <div style={{display:'grid',gridTemplateColumns:'380px 1fr',gap:40,alignItems:'center',flex:1,minHeight:0}}>
    <div>{page.items.map(v=>{const [label,...rest]=v.split('｜');return <div key={v} style={{padding:'12px 0',borderBottom:`1px solid ${e.line}`}}><h2 style={{fontSize:21,color:e.accent,margin:'0 0 9px'}}>{label}</h2><p style={{fontSize:23,lineHeight:1.5,margin:0,whiteSpace:'pre-line'}}>{rest.join('｜')}</p></div>})}</div>
    <figure style={{margin:0,display:'flex',flexDirection:'column',gap:12}}>
     {page.examPortalImage&&<div role="group" aria-label="Pearson演示界面" style={{display:'flex',gap:12}}>{[true,false].map(value=><button className="pearson-button" key={String(value)} aria-pressed={portal===value} onClick={()=>setPortal(value)} style={{fontSize:20,fontFamily:fonts.body,padding:'9px 18px',border:`1px solid ${e.line}`,borderRadius:radii.pill,background:portal===value?e.ink:e.surface,color:portal===value?e.surface:e.ink,cursor:'pointer'}}>{value?'Claude 官方考试入口':'Pearson 答题 Demo'}</button>)}</div>}
     <a href={assetPath(screenshot!)} target="_blank" rel="noreferrer" aria-label="放大Pearson官方演示截图" style={{display:'block',border:`1px solid ${e.line}`,borderRadius:radii.panel,overflow:'hidden',background:e.surface}}><motion.img key={screenshot} initial={reduced?false:{opacity:.4}} animate={{opacity:1}} transition={{duration:.2}} src={assetPath(screenshot!)} alt={portal?'Pearson官方Anthropic考试报名预约入口实际截图':'Pearson官方公开Demo答题界面实际截图'} style={{width:'100%',height:388,display:'block',objectFit:'contain'}}/></a>
     <figcaption style={{fontSize:16,lineHeight:1.5,color:e.muted}}>{portal?'Pearson 官方 Anthropic 考试页面 · 报名与预约入口':'Pearson 官方通用 Demo · 非 Claude 考试真题'}<br/>{portal?'完成官方报名后，按邮件中的 Pearson 账号信息预约':'演示时间、题数和功能不代表 Claude 正式考试'} · 点击图片可放大</figcaption>
     <a className="pearson-button" href={portal?page.examPortalUrl:page.examDemoUrl} target="_blank" rel="noreferrer" style={{fontSize:21,color:e.ink,fontWeight:700}}>{portal?'打开 Claude 的 Pearson 官方入口':'打开 Pearson 官方 Demo，熟悉操作'} ↗</a>
    </figure>
   </div>
  </div>
  <div style={{position:'absolute',left:105,right:105,bottom:36,display:'flex',justifyContent:'space-between',fontSize:16,color:e.muted}}><span>来源：Pearson 官方公开页面 · 2026-10-13 实际截图</span><span>N 查看讲师备注</span></div>
 </Slide>;
}
