import { useState, useEffect, type CSSProperties } from 'react';
import { CourseSlide } from '../CourseSlide';
import { Slide } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';
const ink=colors.dark;
const control:CSSProperties={fontFamily:fonts.body,fontSize:21,fontWeight:750,padding:'10px 22px',border:`2px solid ${ink}`,borderRadius:radii.card,color:ink,cursor:'pointer'};
function SiteStructure({showBreadcrumbs}:{showBreadcrumbs:()=>void}){
 const node=(x:number,y:number,w:number,label:string,title:string,path:string,bg:string)=> <div style={{position:'absolute',left:x,top:y,width:w,height:106,boxSizing:'border-box',border:`2px solid ${ink}`,borderRadius:radii.card,background:bg,padding:'10px 14px',textAlign:'center',zIndex:1}}><div style={{fontSize:17,fontWeight:750}}>{label}</div><strong style={{display:'block',fontSize:24,margin:'3px 0'}}>{title}</strong><code style={{fontFamily:fonts.mono,fontSize:16}}>{path}</code></div>;
 return <Slide bg={colors.warmBg}><section className="site-structure-slide" style={{width:1600,height:900,position:'relative',fontFamily:fonts.body,color:ink}}>
 <style>{`.site-structure-slide button:focus-visible,.site-structure-slide a:focus-visible,.breadcrumb-view button:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}@media(max-width:700px){.deck-runtime:has(.site-structure-slide)>button{top:auto!important;bottom:20px;transform:none!important}}`}</style>
 <header style={{position:'absolute',left:100,top:72,width:1400}}><span style={{fontSize:18,fontWeight:750,color:colors.red,letterSpacing:2}}>SEO / GEO · PART 02</span><h1 style={{fontSize:52,lineHeight:1.2,margin:'14px 0 12px'}}>Site Structure：页面如何归类、如何互相连接</h1><p style={{fontSize:23,lineHeight:1.5,margin:0}}>一个咖啡知识站：首页 → 分类页 → 内容页。连线表示页面之间有实际链接。</p></header>
 <nav style={{position:'absolute',left:100,top:235,display:'flex',gap:16}}><span style={{...control,background:colors.yellow}}>01 · Site Structure & URL</span><button style={{...control,background:colors.white}} onClick={showBreadcrumbs}>02 · Breadcrumbs 为什么要有 →</button></nav>
 <div aria-label="咖啡知识站的网站层级示意：首页链接到指南和器材分类，分类分别链接到两篇文章" style={{position:'absolute',left:100,top:325,width:960,height:440}}>
 <svg aria-hidden="true" width="960" height="440" style={{position:'absolute',inset:0}}><g fill="none" stroke={ink} strokeWidth="3"><path d="M480 106V128H240V160M480 128H720V160"/><path d="M240 266V287H112V315M240 287H357V315M720 266V287H602V315M720 287H847V315"/></g></svg>
 {node(340,0,280,'Home page','Coffee Notes 首页','/',colors.yellow)}
 {node(70,160,340,'Category page','咖啡机使用指南','/guides/',colors.blue)}
 {node(550,160,340,'Category page','咖啡器材','/equipment/',colors.blue)}
 {node(0,315,225,'Article page','除垢步骤','/guides/descaling',colors.white)}
 {node(245,315,225,'Article page','日常清洁','/guides/cleaning',colors.white)}
 {node(490,315,225,'Article page','磨豆机选择','/equipment/grinders',colors.white)}
 {node(735,315,225,'Article page','意式咖啡机','/equipment/espresso',colors.white)}
 </div>
 <aside style={{position:'absolute',left:1110,top:325,width:390,boxSizing:'border-box',background:colors.white,border:`2px solid ${ink}`,borderRadius:radii.panel,padding:'21px 24px'}}>
 {[['为什么要分层？','让读者找到同类内容，也帮助搜索引擎发现页面、理解页面关系。'],['重要页面要有入口','从分类页链接到文章，避免没有站内入口的 Orphan Page（孤立页）。'],['Internal Links 可跨分支','“除垢步骤”也可链接相关的“意式咖啡机”介绍；不必只沿树往下走。'],['Pretty URL 是可读地址','如 /guides/descaling 表达内容；URL 目录不等于链接关系。']].map(([title,body],i)=><div key={title} style={{marginTop:i?13:0}}><strong style={{fontSize:23}}>{title}</strong><p style={{fontSize:20,lineHeight:1.45,margin:'6px 0 0'}}>{body}</p></div>)}
 </aside>
 <div style={{position:'absolute',left:100,top:780,width:960,background:colors.white,borderRadius:radii.card,padding:'13px 18px',boxSizing:'border-box',fontSize:20,lineHeight:1.5}}><b>Breadcrumbs：</b>首页 › 咖啡机使用指南 › 除垢步骤<br/><span style={{fontSize:18}}>层级图＝整个网站；面包屑＝当前页的位置。路径为教学示例。</span></div>
 <a href="https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure" target="_blank" rel="noreferrer" style={{position:'absolute',right:100,bottom:16,fontSize:17,color:ink}}>Google · Site Structure ↗</a>
 </section></Slide>;
}
export default function R18_Course(){
 const read=()=>new URLSearchParams(window.location.search).get('site')==='structure';
 const [structure,setStructure]=useState(read);
 useEffect(()=>{const sync=()=>setStructure(read());window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync);},[]);
 const select=(value:boolean)=>{setStructure(value);const url=new URL(window.location.href);if(value)url.searchParams.set('site','structure');else url.searchParams.delete('site');window.history.pushState({},'',url);};
 return structure?<SiteStructure showBreadcrumbs={()=>select(false)}/>:<div className="breadcrumb-view" style={{position:'relative',width:1600,height:900}}><CourseSlide page={18}/><button onClick={()=>select(true)} style={{...control,position:'absolute',right:100,top:78,zIndex:3,background:colors.yellow}}>Site Structure & URL →</button></div>;
}
