import BackgroundFX from './BackgroundFX';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Slide, fonts, radii, assetPath } from './ui';
import { editorial as e } from '../styles/editorial-theme';
import { sources, type TalkSlide } from '../data/talk';

export default function EditorialPage({page}:{page:TalkSlide}) {
 const reduced=useReducedMotion();
 const [play,setPlay]=useState(false);
 const [revision,setRevision]=useState(0);
 const split=(value:string)=>{const [label,...detail]=value.split('｜');return {label,detail:detail.join('｜')}};
 return <Slide bg={e.paper} style={{position:'relative',color:e.ink,fontFamily:fonts.body}}>
  {page.ambient&&<BackgroundFX dark={page.mode==='dark'}/>}
  <style>{`.editorial-action:focus-visible{outline:3px solid ${e.accent};outline-offset:5px}@media print{.editorial-action{display:none!important}.showcase-stage{opacity:1!important;transform:none!important}}`}</style>
  <div style={{position:'absolute',left:105,top:78,width:1390,height:725,display:'flex',flexDirection:'column',gap:24}}>
   <div style={{fontFamily:fonts.mono,fontSize:16,letterSpacing:2,color:e.muted}}>{page.kicker}</div>
   <h1 style={{fontFamily:e.heading,fontSize:page.mode==='partner'?49:60,fontWeight:500,lineHeight:1.15,letterSpacing:-1.5,margin:0,maxWidth:1350}}>{page.title}</h1>
   <p style={{fontSize:25,lineHeight:1.6,color:e.muted,margin:0,maxWidth:1280}}>{page.sub}</p>
   <div style={{height:1,background:e.line,marginTop:4}}/>
   {page.mode==='partner' ? <div style={{display:'grid',gridTemplateColumns:'540px 1fr',gap:65,alignItems:'center',flex:1,minHeight:0}}>
    <div style={{background:e.surface,border:`1px solid ${e.line}`,borderRadius:radii.panel,height:470,display:'grid',placeItems:'center'}}><img src={assetPath('claude-partner-certified.svg')} alt="Claude Certified Services Partner — JR Academy 的官方伙伴徽章" style={{width:440,height:440,objectFit:'contain'}}/></div>
    <div><div style={{fontFamily:e.heading,fontSize:55,marginBottom:25}}>Your Claude partner.</div><p style={{fontSize:28,lineHeight:1.7,margin:'0 0 30px'}}>JR Academy 匠人学院<br/>Claude 认证服务合作伙伴</p><div style={{paddingTop:24,borderTop:`1px solid ${e.line}`,fontSize:25,lineHeight:1.7}}>选证与学习准备<br/>中文讲解与练习<br/>按对应套餐确认报名辅导</div><p style={{fontSize:19,color:e.muted,marginTop:25}}>组织伙伴身份与个人职业认证分别确认。</p></div>
   </div> : page.mode==='showcase' ? <div style={{display:'grid',gridTemplateColumns:'460px 1fr',gap:48,alignItems:'stretch',flex:1,minHeight:0}}>
    <div>{page.items.map((v,i)=>{const {label,detail}=split(v);return <div key={v} style={{padding:'14px 0',borderBottom:`1px solid ${e.line}`}}><div style={{fontSize:20,color:e.accent,marginBottom:7}}>0{i+1} · {label}</div><div style={{fontSize:25,lineHeight:1.45}}>{detail}</div></div>})}</div>
    <div style={{background:e.surface,border:`1px solid ${e.line}`,borderRadius:radii.panel,padding:34,display:'flex',flexDirection:'column',gap:20}}>
     <div style={{fontSize:16,letterSpacing:2,color:e.muted}}>TEAM SHOWCASE · 原创教学示意</div>
     <h2 style={{fontFamily:e.heading,fontSize:42,fontWeight:500,margin:0}}>本周交付，一眼看懂。</h2>
     <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:17,flex:1,alignItems:'center'}}>{['需求确认','原型完成','验证反馈'].map((label,i)=><motion.div className="showcase-stage" key={label+revision} initial={play&&!reduced?{opacity:.4,y:22}:false} animate={{opacity:1,y:0}} transition={{duration:.5,delay:play&&!reduced?i*.35:0}} style={{background:i===0?e.clay:i===1?e.sage:e.paper,border:`1px solid ${e.line}`,borderRadius:radii.card,padding:'27px 18px',height:145}}><div style={{fontFamily:fonts.mono,fontSize:25,color:e.accent,marginBottom:23}}>0{i+1}</div><div style={{fontSize:25,fontWeight:600}}>{label}</div></motion.div>)}</div>
     <div style={{display:'flex',alignItems:'center',gap:15}}><button className="editorial-action" onClick={()=>{setPlay(true);setRevision(v=>v+1)}} style={{fontFamily:fonts.body,fontSize:20,background:e.accent,color:e.surface,border:'none',borderRadius:radii.label,padding:'12px 22px',cursor:'pointer'}}>播放展示</button><button className="editorial-action" onClick={()=>{setPlay(false);setRevision(v=>v+1)}} style={{fontFamily:fonts.body,fontSize:20,background:e.surface,color:e.ink,border:`1px solid ${e.line}`,borderRadius:radii.label,padding:'12px 22px',cursor:'pointer'}}>重置</button><span role="status" style={{fontSize:17,color:e.muted}}>{play?'完整成果展示':'静态预览'}</span></div>
    </div>
   </div> : <div style={{display:'grid',gridTemplateColumns:page.items.length===2?'repeat(2,1fr)':'repeat(2,1fr)',gap:'16px 50px',flex:1,alignContent:'start',paddingTop:10}}>
    {page.items.map((v,i)=>{const {label,detail}=split(v);return <motion.div key={v} initial={reduced?false:{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.4,delay:i*.1}} style={{padding:'22px 8px 25px',borderTop:`1px solid ${e.line}`,minHeight:page.items.length===2?280:155}}><div style={{fontFamily:fonts.mono,fontSize:17,color:e.accent,marginBottom:15}}>0{i+1}</div><h2 style={{fontFamily:e.heading,fontWeight:500,fontSize:35,margin:'0 0 15px',lineHeight:1.25}}>{label}</h2><p style={{fontSize:26,lineHeight:1.6,margin:0,whiteSpace:'pre-line'}}>{detail}</p></motion.div>})}
   </div>}
  </div>
  <div style={{position:'absolute',left:105,right:105,bottom:36,display:'flex',justifyContent:'space-between',fontSize:16,color:e.muted}}><a href={sources[page.sourceKey]} target="_blank" rel="noreferrer" style={{color:e.muted}}>来源：{page.sourceLabel??(page.sourceKey==='product'?'JR Academy 伙伴资料':'Anthropic 官方能力范围')} ↗</a><span>{page.mode==='showcase'?'应用建议 · N 查看讲师备注':'JR Academy · N 查看讲师备注'}</span></div>
 </Slide>;
}
