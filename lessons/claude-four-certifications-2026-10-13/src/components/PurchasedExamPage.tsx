import { useState } from 'react';
import { Slide, fonts, radii, assetPath } from './ui';
import { editorial as e } from '../styles/editorial-theme';
import { type TalkSlide } from '../data/talk';

const views = [
 {label:'英文答题 · 中文解析',image:'images/purchased-exam.png',caption:'左边练英文题，右边用中文拆解知识点和选项。'},
 {label:'考后领域成绩',image:'images/purchased-results.png',caption:'按考试领域看薄弱项，Review Chapter 可以回到对应章节。'},
 {label:'对应中文课程',image:'images/purchased-learn.png',caption:'按考试大纲学习中文章节，补完薄弱项再练。'},
];
export default function PurchasedExamPage({page}:{page:TalkSlide}) {
 const [active,setActive]=useState(0);
 return <Slide bg={e.paper} style={{position:'relative',fontFamily:fonts.body,color:e.ink}}>
  <style>{`.purchase-view:focus-visible{outline:3px solid ${e.accent};outline-offset:4px}@media print{.purchase-tabs{display:none!important}}`}</style>
  <div style={{position:'absolute',left:105,top:78,width:1390,height:725,display:'flex',flexDirection:'column',gap:18}}>
   <div style={{fontFamily:fonts.mono,fontSize:16,letterSpacing:2,color:e.muted}}>{page.kicker}</div>
   <h1 style={{fontFamily:e.heading,fontSize:48,fontWeight:500,lineHeight:1.2,margin:0}}>{page.title}</h1>
   <p style={{fontSize:24,lineHeight:1.5,color:e.muted,margin:0}}>{page.sub}</p>
   <div style={{display:'grid',gridTemplateColumns:'930px 1fr',gap:32,flex:1,minHeight:0,alignItems:'center'}}>
    <figure style={{margin:0,display:'flex',flexDirection:'column',gap:13}}>
     <div className="purchase-tabs" role="group" aria-label="查看购买后的备考界面" style={{display:'flex',gap:10}}>{views.map((view,i)=><button className="purchase-view" key={view.label} aria-pressed={active===i} onClick={()=>setActive(i)} style={{fontFamily:fonts.body,fontSize:20,padding:'10px 17px',border:`1px solid ${e.line}`,borderRadius:radii.pill,background:active===i?e.ink:e.surface,color:active===i?e.surface:e.ink,cursor:'pointer'}}>{view.label}</button>)}</div>
     <a href={assetPath(views[active].image)} target="_blank" rel="noreferrer" aria-label="打开大图" style={{display:'block',border:`1px solid ${e.line}`,borderRadius:radii.card,overflow:'hidden',background:e.surface}}><img src={assetPath(views[active].image)} alt={'考证匠购买后实际录屏：'+views[active].label} style={{width:'100%',height:450,objectFit:'contain',display:'block'}}/></a>
     <figcaption style={{fontSize:18,color:e.muted,lineHeight:1.4}}>{views[active].caption} 点击图片可放大。</figcaption>
    </figure>
    <div>{page.items.map((item,i)=>{const [label,...detail]=item.split('｜');return <div key={item} style={{padding:'15px 0',borderBottom:`1px solid ${e.line}`}}><h2 style={{fontSize:22,color:e.accent,margin:'0 0 9px'}}>0{i+1} · {label}</h2><p style={{fontSize:23,lineHeight:1.5,margin:0}}>{detail.join('｜')}</p></div>})}</div>
   </div>
  </div>
  <div style={{position:'absolute',left:105,right:105,bottom:36,fontSize:16,color:e.muted,display:'flex',justifyContent:'space-between'}}><span>来源：讲师提供的购买后录屏 · 考证匠模拟考试</span><span>正式考试不可使用 AI Tutor · N 查看讲师备注</span></div>
 </Slide>;
}
