import { type CSSProperties } from 'react';
import { Slide } from '../ui';
import { colors, fonts, radii } from '../../styles/theme';

const panel: CSSProperties = {border:`2px solid ${colors.dark}`,borderRadius:radii.panel,background:colors.white,boxSizing:'border-box'};
const link: CSSProperties = {color:colors.dark,fontWeight:750,textDecoration:'underline'};
export default function R49c_PersonRecognition(){
 return <Slide bg={colors.warmBg}><section className="person-recognition-slide" style={{position:'relative',width:1600,height:900,fontFamily:fonts.body,color:colors.dark}}>
  <style>{`.person-recognition-slide a:focus-visible{outline:4px solid ${colors.blue};outline-offset:4px}`}</style>
  <header style={{position:'absolute',left:100,top:65,width:1400}}>
   <span style={{fontSize:18,fontWeight:750,color:colors.red,letterSpacing:2}}>E-E-A-T · PERSON & REPUTATION</span>
   <h1 style={{fontSize:49,lineHeight:1.2,margin:'15px 0 12px',fontWeight:850}}>别人引用我，与我引用别人：方向不同</h1>
   <p style={{fontSize:24,lineHeight:1.5,margin:0}}>个人 IP 的专业基础：持续做出有用成果，让别人能认出作者、使用成果、查到外部记录。</p>
  </header>
  <main style={{position:'absolute',left:100,top:242,width:1400}}>
   <article style={{...panel,padding:'14px 26px',borderLeft:`9px solid ${colors.blue}`,height:157}}>
    <h2 style={{fontSize:24,lineHeight:1.2,margin:'0 0 8px'}}>别人引用我的成果 · Inbound Citation / Backlink</h2>
    <div style={{display:'flex',alignItems:'center',gap:23,fontSize:25,lineHeight:1.3,fontWeight:850}}><span>第三方的文章 / 项目文档</span><span aria-hidden="true">→</span><span style={{background:colors.yellow,borderRadius:radii.label,padding:'5px 12px'}}>我的方法、数据、工具</span><span style={{fontSize:23,fontWeight:500}}>成果被采用、被认可的记录</span></div>
    <p style={{fontSize:20,lineHeight:1.3,margin:'8px 0 0'}}>先有值得引用的成果；提及作者是 Mention，提供指向页面的链接才是 Backlink。</p>
   </article>
   <article style={{...panel,padding:'14px 26px',borderLeft:`9px solid ${colors.green}`,height:157,marginTop:18}}>
    <h2 style={{fontSize:24,lineHeight:1.2,margin:'0 0 8px'}}>我引用别人的来源 · Outbound Citation</h2>
    <div style={{display:'flex',alignItems:'center',gap:23,fontSize:25,lineHeight:1.3,fontWeight:850}}><span>我文章中的具体主张</span><span aria-hidden="true">→</span><span style={{background:colors.yellow,borderRadius:radii.label,padding:'5px 12px'}}>原始资料 / 官方记录</span><span style={{fontSize:23,fontWeight:500}}>让读者能复查本文依据</span></div>
    <p style={{fontSize:20,lineHeight:1.3,margin:'8px 0 0'}}>例如写 Simon 参与 Django 早期开发，就链接 Django 官方历史；引用官方不等于官方为我背书。</p>
   </article>
   <h2 style={{fontSize:25,margin:'20px 0 12px'}}>真实案例 · Simon Willison：个人介绍、作品与外部记录相互对应</h2>
   <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22}}>
    <article style={{...panel,padding:'12px 20px',height:159}}><h3 style={{fontSize:23,lineHeight:1.2,margin:'0 0 6px'}}>本人介绍 · About</h3><p style={{fontSize:20,lineHeight:1.35,margin:'0 0 8px'}}>写自己是 Django co-creator、Datasette creator。</p><a href="https://simonwillison.net/about/" target="_blank" rel="noreferrer" style={{...link,fontSize:18}}>打开本人 About ↗</a></article>
    <article style={{...panel,padding:'12px 20px',height:159}}><h3 style={{fontSize:23,lineHeight:1.2,margin:'0 0 6px'}}>外部项目记录 · Django</h3><p style={{fontSize:20,lineHeight:1.35,margin:'0 0 8px'}}>官方 FAQ 记录其早期开发；名单列为前核心成员。</p><a href="https://docs.djangoproject.com/en/dev/faq/general/" target="_blank" rel="noreferrer" style={{...link,fontSize:18}}>官方历史 ↗</a><span>　</span><a href="https://www.djangoproject.com/foundation/django_core/" target="_blank" rel="noreferrer" style={{...link,fontSize:18}}>前核心团队 ↗</a></article>
    <article style={{...panel,padding:'12px 20px',height:159}}><h3 style={{fontSize:23,lineHeight:1.2,margin:'0 0 6px'}}>具体作品 · Datasette</h3><p style={{fontSize:20,lineHeight:1.35,margin:'0 0 8px'}}>可打开工具；GitHub 的 2023 Accelerator 名单列出该项目。</p><a href="https://datasette.io/" target="_blank" rel="noreferrer" style={{...link,fontSize:18}}>打开作品 ↗</a><span>　</span><a href="https://github.blog/news-insights/company-news/github-accelerator-our-first-cohort-and-whats-next/" target="_blank" rel="noreferrer" style={{...link,fontSize:18}}>GitHub 名单 ↗</a></article>
   </div>
  </main>
  <aside style={{position:'absolute',left:100,top:800,width:1400,borderLeft:`5px solid ${colors.red}`,padding:'9px 18px',fontSize:20,lineHeight:1.5,background:colors.white,borderRadius:radii.card,boxSizing:'border-box'}}>普通链接可能参与链接信号；品牌提及不等于链接权重。项目认可有具体范围，不能保证 Google 排名或 AI 引用。</aside>
 </section></Slide>;
}
